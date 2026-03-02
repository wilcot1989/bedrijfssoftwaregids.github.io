async function initAdvancedTool() {
  const catKey = getCategoryFromPage();
  const mount = document.getElementById("bsg-advanced");
  if (!catKey || !mount) return;

  const categories = await loadJSON(`${BSG_DATA}/categories.json`);
  const cat = categories[catKey];
  const toolType = cat?.advanced?.type;
  if (!toolType) return;

  // Render based on toolType
  if (toolType === "crm_roi") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>${escapeHTML(cat.title)} ROI calculator</h2>
        <p>Bereken een indicatie van de omzetimpact van betere opvolging en pipeline management.</p>
        <label>Leads per maand <input id="leads" type="number" min="0" value="200"></label>
        <label>Huidige conversie (%) <input id="conv" type="number" min="0" step="0.1" value="2.0"></label>
        <label>Gem. dealwaarde (€) <input id="deal" type="number" min="0" value="1500"></label>
        <label>Verwachte conversie-verbetering (%) <input id="lift" type="number" min="0" step="0.1" value="20"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const leads = Math.max(0, parseFloat(qs("#leads").value||0));
      const conv = Math.max(0, parseFloat(qs("#conv").value||0))/100.0;
      const deal = Math.max(0, parseFloat(qs("#deal").value||0));
      const lift = Math.max(0, parseFloat(qs("#lift").value||0))/100.0;

      const baseSales = leads*conv;
      const newSales = leads*(conv*(1+lift));
      const delta = (newSales-baseSales)*deal*12;

      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Geschatte extra omzet</strong><span class="bsg-badge">ROI indicatie</span></div>
        <div class="bsg-amount">&euro;${Math.round(delta).toLocaleString("nl-NL")} per jaar</div>
        <p class="bsg-amount-sub">Van ${Math.round(baseSales)} naar ${Math.round(newSales)} deals/maand (+${Math.round(lift*100)}%)</p>
      </div>`;
    });
    return;
  }

  if (toolType === "zzp_bv") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>ZZP of BV? Rekenmodel</h2>
        <p>Krijg een eerste indruk of een BV fiscaal interessant kan zijn voor jouw situatie.</p>
        <label>Winst per jaar (€) <input id="winst" type="number" min="0" value="120000"></label>
        <label>Salaris DGA (€) <input id="salaris" type="number" min="0" value="56000"></label>
        <label>Dividend (€) <input id="dividend" type="number" min="0" value="20000"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const winst = Math.max(0, parseFloat(qs("#winst").value||0));
      const salaris = Math.max(0, parseFloat(qs("#salaris").value||0));
      const dividend = Math.max(0, parseFloat(qs("#dividend").value||0));
      const score = (winst/100000) + (dividend/30000) - (salaris/80000);
      const verdict = score > 1.2 ? "BV is het onderzoeken waard" : "ZZP blijft vaak prima (check met adviseur)";
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Indicatie</strong><span class="bsg-badge">ZZP vs BV</span></div>
        <p style="font-size:1.1rem;font-weight:600;color:#0f2439;margin:0.75rem 0 0.25rem;">${escapeHTML(verdict)}</p>
        <p class="bsg-note">Dit is een vereenvoudigde indicatie. Raadpleeg een fiscalist voor persoonlijk advies.</p>
      </div>`;
    });
    return;
  }

  if (toolType === "agile_score") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>Agile maturity score</h2>
        <p>Beantwoord 5 vragen en krijg een tool-adviesniveau.</p>
        <label>Team werkt in sprints? 
          <select id="sprints"><option value="0">Nee</option><option value="2">Soms</option><option value="4">Ja</option></select>
        </label>
        <label>Backlog grooming/ceremonies?
          <select id="cer"><option value="0">Nee</option><option value="2">Soms</option><option value="4">Ja</option></select>
        </label>
        <label>Afhankelijkheden tussen teams?
          <select id="dep"><option value="0">Nee</option><option value="2">Enkele</option><option value="4">Veel</option></select>
        </label>
        <label>Rapportages nodig (velocity, burn-down)?
          <select id="rep"><option value="0">Nee</option><option value="2">Soms</option><option value="4">Ja</option></select>
        </label>
        <label>Integraties (CI/CD, Git, etc.)?
          <select id="int"><option value="0">Nee</option><option value="2">Soms</option><option value="4">Ja</option></select>
        </label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const score = ["sprints","cer","dep","rep","int"].reduce((a,id)=>a+parseInt(qs("#"+id).value,10),0);
      const level = score >= 16 ? "Advanced (enterprise tooling)" : (score >= 9 ? "Intermediate" : "Basic");
      const pct = Math.round((score/20)*100);
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Agile maturity</strong><span class="bsg-badge">${score}/20</span></div>
        <div style="background:#e2e8f0;border-radius:6px;height:10px;margin:0.75rem 0 0.5rem;overflow:hidden;">
          <div style="background:#2563eb;height:100%;width:${pct}%;border-radius:6px;transition:width 0.3s;"></div>
        </div>
        <p style="font-size:1.05rem;font-weight:600;color:#0f2439;margin:0;">${escapeHTML(level)}</p>
      </div>`;
    });
    return;
  }

  if (toolType === "pos_tx_cost") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>POS transactiekosten calculator</h2>
        <p>Indicatie voor jaarlijkse betaal-/providerkosten. Vul jouw mix in.</p>
        <label>Transacties per maand <input id="tx" type="number" min="0" value="2000"></label>
        <label>Gem. bonbedrag (€) <input id="avg" type="number" min="0" value="18"></label>
        <label>Gem. fee (%) <input id="fee" type="number" min="0" step="0.1" value="1.8"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const tx = Math.max(0, parseFloat(qs("#tx").value||0));
      const avg = Math.max(0, parseFloat(qs("#avg").value||0));
      const fee = Math.max(0, parseFloat(qs("#fee").value||0))/100.0;
      const yearly = tx*avg*fee*12;
      const monthly = tx * avg * fee;
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Transactiekosten</strong><span class="bsg-badge">Indicatie</span></div>
        <div class="bsg-amount">&euro;${Math.round(yearly).toLocaleString("nl-NL")} per jaar</div>
        <p class="bsg-amount-sub">&euro;${Math.round(monthly).toLocaleString("nl-NL")} per maand aan transactiekosten</p>
      </div>`;
    });
    return;
  }

  if (toolType === "hr_absence_cost") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>Verzuimkosten calculator</h2>
        <label>Aantal medewerkers <input id="emp" type="number" min="0" value="25"></label>
        <label>Verzuim (%) <input id="vz" type="number" min="0" step="0.1" value="4.0"></label>
        <label>Gem. bruto jaarsalaris (€) <input id="sal" type="number" min="0" value="42000"></label>
        <label>Cost factor (1.0–1.5) <input id="cf" type="number" min="1" step="0.1" value="1.2"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const emp = Math.max(0, parseFloat(qs("#emp").value||0));
      const vz = Math.max(0, parseFloat(qs("#vz").value||0))/100.0;
      const sal = Math.max(0, parseFloat(qs("#sal").value||0));
      const cf = Math.max(1, parseFloat(qs("#cf").value||1.2));
      const yearly = emp*sal*vz*cf;
      const monthlyAbsence = yearly / 12;
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Verzuimkosten</strong><span class="bsg-badge">Indicatie</span></div>
        <div class="bsg-amount">&euro;${Math.round(yearly).toLocaleString("nl-NL")} per jaar</div>
        <p class="bsg-amount-sub">&euro;${Math.round(monthlyAbsence).toLocaleString("nl-NL")} per maand bij ${(vz*100).toFixed(1)}% verzuim</p>
      </div>`;
    });
    return;
  }

  if (toolType === "lead_roi") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>Lead ROI calculator</h2>
        <label>Websitebezoekers per maand <input id="vis" type="number" min="0" value="10000"></label>
        <label>Conversie naar lead (%) <input id="lcr" type="number" min="0" step="0.1" value="1.5"></label>
        <label>Close rate (%) <input id="cr" type="number" min="0" step="0.1" value="15"></label>
        <label>Gem. orderwaarde (€) <input id="aov" type="number" min="0" value="750"></label>
        <label>Verwachte uplift (%) <input id="upl" type="number" min="0" step="0.1" value="10"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const vis = Math.max(0, parseFloat(qs("#vis").value||0));
      const lcr = Math.max(0, parseFloat(qs("#lcr").value||0))/100.0;
      const cr = Math.max(0, parseFloat(qs("#cr").value||0))/100.0;
      const aov = Math.max(0, parseFloat(qs("#aov").value||0));
      const upl = Math.max(0, parseFloat(qs("#upl").value||0))/100.0;
      const base = vis*lcr*cr*aov*12;
      const improved = base*(1+upl);
      const delta = improved-base;
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Lead ROI</strong><span class="bsg-badge">Indicatie</span></div>
        <div class="bsg-amount">&euro;${Math.round(delta).toLocaleString("nl-NL")} extra per jaar</div>
        <p class="bsg-amount-sub">Huidige omzet: &euro;${Math.round(base).toLocaleString("nl-NL")} &rarr; Verbeterd: &euro;${Math.round(improved).toLocaleString("nl-NL")}</p>
      </div>`;
    });
    return;
  }

  if (toolType === "migration_planner") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>Migratie planner (webshop)</h2>
        <label>Huidig platform <input id="plat" type="text" value="WooCommerce"></label>
        <label>Aantal producten <input id="prod" type="number" min="0" value="300"></label>
        <label>Jaaromzet (€) <input id="rev" type="number" min="0" value="250000"></label>
        <label>Complexiteit (1–5) <input id="cx" type="number" min="1" max="5" value="3"></label>
        <button class="bsg-btn" id="run">Bereken</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const prod = Math.max(0, parseFloat(qs("#prod").value||0));
      const rev = Math.max(0, parseFloat(qs("#rev").value||0));
      const cx = Math.max(1, Math.min(5, parseFloat(qs("#cx").value||3)));
      const effort = (prod/200) + (cx*1.5);
      const verdict = (rev>150000 && effort<8) ? "Migratie is het onderzoeken waard" : "Migratie alleen als je duidelijke pijnpunten hebt";
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Migratie-advies</strong><span class="bsg-badge">Indicatie</span></div>
        <p style="font-size:1.1rem;font-weight:600;color:#0f2439;margin:0.75rem 0 0.25rem;">${escapeHTML(verdict)}</p>
        <p class="bsg-amount-sub">Geschatte inspanning: ${effort.toFixed(1)} punten (${prod} producten, complexiteit ${cx})</p>
      </div>`;
    });
    return;
  }

  if (toolType === "stack_planner") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h2>Tool stack planner</h2>
        <p>Stel een basisstack samen op basis van jouw team en workflow.</p>
        <label>Teamgrootte <select id="ts"><option>1</option><option>2-10</option><option>11-50</option><option>50+</option></select></label>
        <label>Werkstijl <select id="ws"><option>Remote</option><option>Hybride</option><option>On-site</option></select></label>
        <label>Budget (€/gebruiker/maand) <select id="b"><option><€10</option><option>€10-€20</option><option>€20+</option></select></label>
        <button class="bsg-btn" id="run">Genereer stack</button>
        <div class="bsg-results" id="out"></div>
      </div>`;
    qs("#run").addEventListener("click", () => {
      const ts = qs("#ts").value;
      const ws = qs("#ws").value;
      const b = qs("#b").value;
      const rec = [
        "Communicatie: Teams/Slack",
        "Docs: Google Workspace / Microsoft 365",
        "Taken: Trello/Asana/Jira (afhankelijk van team)",
        "Notities: Notion/OneNote"
      ];
      qs("#out").innerHTML = `<div class="bsg-result">
        <div class="bsg-result-head"><strong>Aanbevolen stack</strong><span class="bsg-badge">${escapeHTML(ws)} &middot; ${escapeHTML(ts)} personen</span></div>
        <ul style="margin:0.75rem 0 0 1.25rem;line-height:1.8;">${rec.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul>
      </div>`;
    });
    return;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initAdvancedTool().then(() => {
    const card = document.querySelector("#bsg-advanced .bsg-card");
    if (card) card.insertAdjacentHTML("beforeend", '<p class="bsg-note">Aan de uitkomsten van deze tool kunnen geen rechten worden ontleend.</p>');
  }).catch(err => {
    console.error(err);
    const mount = document.getElementById("bsg-advanced");
    if (mount) mount.innerHTML = `<div class="bsg-card"><h2>Oeps</h2><p>Tool kon niet laden.</p></div>`;
  });
});
