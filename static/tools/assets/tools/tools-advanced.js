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
        <h1>${escapeHTML(cat.title)} ROI calculator</h1>
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

      qs("#out").innerHTML = `<div class="bsg-result"><strong>Extra omzet per jaar (indicatief):</strong> €${Math.round(delta).toLocaleString("nl-NL")}<p class="bsg-note">Indicatief model; gebruik als richtinggevend.</p></div>`;
    });
    return;
  }

  if (toolType === "zzp_bv") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>ZZP → BV calculator (indicatief)</h1>
        <p>Snelle indicatie of BV (fiscaal) interessant kan worden. Geen financieel advies.</p>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Indicatie:</strong> ${escapeHTML(verdict)}<p class="bsg-note">Gebruik dit als richting. Werk dit later uit met echte tarieven/regels.</p></div>`;
    });
    return;
  }

  if (toolType === "agile_score") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>Agile maturity score</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Score:</strong> ${score}/20 — <strong>${escapeHTML(level)}</strong></div>`;
    });
    return;
  }

  if (toolType === "pos_tx_cost") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>POS transactiekosten calculator</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Jaarlijkse fee (indicatief):</strong> €${Math.round(yearly).toLocaleString("nl-NL")}</div>`;
    });
    return;
  }

  if (toolType === "hr_absence_cost") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>Verzuimkosten calculator</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Verzuimkosten/jaar (indicatief):</strong> €${Math.round(yearly).toLocaleString("nl-NL")}</div>`;
    });
    return;
  }

  if (toolType === "lead_roi") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>Lead ROI calculator</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Extra omzet/jaar (indicatief):</strong> €${Math.round(delta).toLocaleString("nl-NL")}</div>`;
    });
    return;
  }

  if (toolType === "migration_planner") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>Migratie planner (webshop)</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Advies:</strong> ${escapeHTML(verdict)}<p class="bsg-note">Indicatief. Maak dit later specifieker per platform.</p></div>`;
    });
    return;
  }

  if (toolType === "stack_planner") {
    mount.innerHTML = `
      <div class="bsg-card">
        <h1>Tool stack planner</h1>
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
      qs("#out").innerHTML = `<div class="bsg-result"><strong>Aanbevolen stack (${escapeHTML(ws)}, team ${escapeHTML(ts)}, budget ${escapeHTML(b)}):</strong><ul>${rec.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul></div>`;
    });
    return;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initAdvancedTool().catch(err => {
    console.error(err);
    const mount = document.getElementById("bsg-advanced");
    if (mount) mount.innerHTML = `<div class="bsg-card"><h1>Oeps</h1><p>Tool kon niet laden. Check console.</p><pre class="bsg-note">${escapeHTML(err.message)}</pre></div>`;
  });
});
