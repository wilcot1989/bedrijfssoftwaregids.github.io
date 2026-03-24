function renderQuestion(q) {
  const id = escapeHTML(q.id);
  const label = escapeHTML(q.label);

  if (q.type === "bool") {
    return `
      <div class="bsg-q">
        <label>${label}</label>
        <div class="bsg-bool">
          <label><input type="radio" name="${id}" value="true"> Ja</label>
          <label><input type="radio" name="${id}" value="false" checked> Nee</label>
        </div>
      </div>`;
  }

  if (q.type === "select") {
    const opts = (q.options || []).map(o => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");
    return `
      <div class="bsg-q">
        <label for="${id}">${label}</label>
        <select id="${id}">
          <option value="">Kies…</option>
          ${opts}
        </select>
      </div>`;
  }

  if (q.type === "multi") {
    const opts = (q.options || []).map(o => `
      <label class="bsg-chip">
        <input type="checkbox" value="${escapeHTML(o)}" data-q="${id}"> ${escapeHTML(o)}
      </label>`).join("");
    return `
      <div class="bsg-q">
        <label>${label}</label>
        <div class="bsg-chips">${opts}</div>
      </div>`;
  }

  return "";
}

function collectWizardAnswers(questions) {
  const answers = {};
  for (const q of questions) {
    if (q.type === "bool") {
      const v = qs(`input[name="${q.id}"]:checked`)?.value ?? "false";
      answers[q.id] = v === "true";
    } else if (q.type === "select") {
      answers[q.id] = (qs(`#${q.id}`)?.value || "").trim();
    } else if (q.type === "multi") {
      const picked = qsa(`input[type="checkbox"][data-q="${q.id}"]:checked`).map(x => x.value);
      answers[q.id] = picked;
    }
  }
  return answers;
}

function scoreToolForCategory(tool, catKey, answers) {
  let score = 0;
  var breakdown = { budget: 0, bools: 0, boolTotal: 0, integrations: 0, industry: 0 };

  // Budget match (pricing band)
  if (answers.budget && tool.pricing_band) {
    if (answers.budget === tool.pricing_band) { score += 3; breakdown.budget = 3; }
    else { score += 1; breakdown.budget = 1; }
  }

  // Direct bool matches
  for (const [k, v] of Object.entries(answers)) {
    if (typeof v === "boolean" && typeof tool[k] === "boolean") {
      breakdown.boolTotal++;
      if (v === tool[k]) { score += 2; breakdown.bools++; }
    }
  }

  // Multi overlap (integrations)
  for (const [k, v] of Object.entries(answers)) {
    if (Array.isArray(v) && Array.isArray(tool[k])) {
      const overlap = v.filter(x => tool[k].includes(x)).length;
      score += overlap * 1.5;
      breakdown.integrations += overlap;
    }
  }

  // POS industry fit
  if (catKey === "kassasystemen" && answers.industry && Array.isArray(tool.industry_fit)) {
    if (tool.industry_fit.includes(answers.industry)) { score += 4; breakdown.industry = 4; }
  }

  return { score: score, breakdown: breakdown };
}

function buildRecommendationReasons(bd, catKey) {
  var reasons = [];
  if (bd.budget >= 3) reasons.push("Past binnen je budget");
  if (bd.boolTotal > 0 && bd.bools >= bd.boolTotal * 0.5) reasons.push("Heeft alle gewenste functies");
  if (bd.integrations > 0) reasons.push("Goede integraties");
  if (catKey === "kassasystemen" && bd.industry > 0) reasons.push("Geschikt voor jouw branche");
  if (reasons.length === 0) reasons.push("Hoogste matchscore op basis van jouw antwoorden");
  return reasons;
}

async function initWizard() {
  const catKey = getCategoryFromPage();
  if (!catKey) return;

  const categories = await loadJSON(`${BSG_DATA}/categories.json`);
  const software = await loadJSON(`${BSG_DATA}/software.json`);

  const cat = categories[catKey];
  if (!cat?.wizard?.questions?.length) return;

  setHTML("bsg-wizard", `
    <div class="bsg-card">
      <h2>${escapeHTML(cat.title)} keuzehulp</h2>
      <p>Beantwoord een paar vragen en krijg een shortlist met beste matches.</p>
      <form id="bsg-wizard-form">
        ${cat.wizard.questions.map(renderQuestion).join("")}
        <button type="button" id="bsg-wizard-submit" class="bsg-btn">Toon mijn shortlist</button>
      </form>
      <div id="bsg-wizard-results" class="bsg-results"></div>
      <p class="bsg-note">Gratis en onafhankelijk advies van Bedrijfssoftwaregids.nl</p>
    </div>
  `);

  /* Clear results when any answer changes */
  const form = qs("#bsg-wizard-form");
  if (form) {
    form.addEventListener("change", () => {
      setHTML("bsg-wizard-results", "");
    });
  }

  qs("#bsg-wizard-submit")?.addEventListener("click", () => {
    const answers = collectWizardAnswers(cat.wizard.questions);
    const candidates = software.filter(s => (s.categories || []).includes(catKey));

    const ranked = candidates
      .map(t => { var r = scoreToolForCategory(t, catKey, answers); return { t: t, score: r.score, breakdown: r.breakdown }; })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    /* "Onze aanbeveling" highlight for #1 */
    var recHTML = "";
    if (ranked.length > 0 && ranked[0].score > 0) {
      var top = ranked[0];
      var reasons = buildRecommendationReasons(top.breakdown, catKey);
      recHTML = '<div class="bsg-result" style="border-left:4px solid #1B4D3E;background:#E8F0ED;">' +
        '<div class="bsg-result-head"><strong>\u2605 Onze aanbeveling: ' + escapeHTML(top.t.name) + '</strong>' +
        '<span class="bsg-badge">Matchscore: ' + Math.round(top.score) + '</span></div>' +
        '<ul style="margin:0.5rem 0 0.75rem 1.25rem;line-height:1.8;color:#143D31;">' +
        reasons.map(function(r) { return '<li>' + escapeHTML(r) + '</li>'; }).join('') +
        '</ul>' +
        '<div class="bsg-cta"><a class="bsg-btn" href="' + escapeHTML(top.t.affiliate?.url || "#") + '" target="_blank" rel="noopener nofollow sponsored">Bekijk ' + escapeHTML(top.t.name) + '</a></div></div>';
    }

    const html = ranked.map(({ t, score }, i) => `
      <div class="bsg-result">
        <div class="bsg-result-head">
          <strong>#${i + 1} ${escapeHTML(t.name)}</strong>
          <span class="bsg-badge">Matchscore: ${Math.round(score)}</span>
        </div>
        <div class="bsg-cta">
          <a class="bsg-btn" href="${escapeHTML(t.affiliate?.url || "#")}" target="_blank" rel="noopener nofollow sponsored">Bekijk / demo aanvragen</a>
        </div>
      </div>
    `).join("");

    /* Lead capture CTA after results */
    const leadCapture = `
      <div class="bsg-lead-capture">
        <p style="font-weight:600;margin-bottom:0.5rem;">Bewaar je resultaat</p>
        <p style="font-size:0.9rem;color:#7A7A8E;margin-bottom:0.75rem;">Ontvang je persoonlijke shortlist per e-mail, inclusief een vergelijkings-PDF.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <input type="email" id="bsg-lead-email" placeholder="info@jouwbedrijf.nl" style="flex:1;min-width:200px;">
          <button type="button" id="bsg-lead-submit" class="bsg-btn" style="white-space:nowrap;margin-top:0;">Verstuur</button>
        </div>
        <p id="bsg-lead-msg" style="font-size:0.8rem;color:#7A7A8E;margin-top:0.5rem;display:none;"></p>
        <p class="bsg-note">Geen spam. Je gegevens worden niet gedeeld. <a href="/privacy/" style="color:#A0A0B0;">Privacybeleid</a></p>
      </div>
    `;

    setHTML("bsg-wizard-results", recHTML + (html || "<p>Geen matches gevonden. Pas je antwoorden aan.</p>") + leadCapture);

    /* Handle lead submit */
    qs("#bsg-lead-submit")?.addEventListener("click", () => {
      const emailEl = qs("#bsg-lead-email");
      const msgEl = qs("#bsg-lead-msg");
      const email = (emailEl?.value || "").trim();
      if (!email || !email.includes("@") || !email.includes(".")) {
        if (msgEl) { msgEl.textContent = "Vul een geldig e-mailadres in."; msgEl.style.color = "#dc2626"; msgEl.style.display = "block"; }
        return;
      }
      /* Store locally — replace with real email API later */
      const leads = JSON.parse(localStorage.getItem("bsg-leads") || "[]");
      const result = ranked.map(r => r.t.name).join(", ");
      leads.push({ email, category: catKey, result, date: new Date().toISOString() });
      localStorage.setItem("bsg-leads", JSON.stringify(leads));
      if (msgEl) { msgEl.textContent = "Bedankt! Je ontvangt je resultaat zodra we de e-mailfunctie activeren."; msgEl.style.color = "#16a34a"; msgEl.style.display = "block"; }
      if (emailEl) emailEl.disabled = true;
      qs("#bsg-lead-submit").disabled = true;
      qs("#bsg-lead-submit").textContent = "Verstuurd";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initWizard().catch(err => {
    console.error(err);
    const mount = document.getElementById("bsg-wizard");
    if (mount) mount.innerHTML = `<div class="bsg-card"><h2>Oeps</h2><p>Wizard kon niet laden. Check console.</p><pre class="bsg-note">${escapeHTML(err.message)}</pre></div>`;
  });
});
