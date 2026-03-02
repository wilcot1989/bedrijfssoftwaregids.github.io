function calcPerUserMonthly(tool, users, months) {
  const base = tool.cost?.base || 0;
  const per = tool.cost?.per_user || 0;
  return (base + per * users) * months;
}
function calcPerEmployeeMonthly(tool, employees, months) {
  const base = tool.cost?.base || 0;
  const per = tool.cost?.per_employee || 0;
  return (base + per * employees) * months;
}
function calcPosTerminalsMonthly(tool, terminals, months) {
  const base = tool.cost?.base || 0;
  const per = tool.cost?.per_terminal || 0;
  return (base + per * terminals) * months;
}
function calcTieredMonthly(tool, tierKey, months) {
  const tiers = tool.cost?.tiers || [];
  const tier = tiers.find(t => t.up_to === tierKey) || tiers[tiers.length - 1];
  const price = tier?.price || 0;
  return price * months;
}
function calcWebshopTxCost(tool, monthlyRevenue, months) {
  const base = tool.cost?.base || 0;
  const pct = tool.cost?.tx_fee_pct || 0;
  const tx = (monthlyRevenue * (pct / 100.0)) * months;
  return (base * months) + tx;
}

async function initCalculator() {
  const catKey = getCategoryFromPage();
  const mount = document.getElementById("bsg-calculator");
  if (!catKey || !mount) return;

  const categories = await loadJSON(`${BSG_DATA}/categories.json`);
  const software = await loadJSON(`${BSG_DATA}/software.json`);
  const cat = categories[catKey];
  if (!cat?.calculator?.enabled) return;

  const items = software.filter(s => (s.categories || []).includes(catKey));

  mount.innerHTML = `
    <div class="bsg-card">
      <h1>${escapeHTML(cat.title)} kosten calculator</h1>

      <label>Software
        <select id="bsg-tool">
          ${items.map(t => `<option value="${escapeHTML(t.id)}">${escapeHTML(t.name)}</option>`).join("")}
        </select>
      </label>

      <div id="bsg-calc-inputs"></div>

      <button class="bsg-btn" id="bsg-calc-run">Bereken kosten</button>
      <div id="bsg-calc-out" class="bsg-results"></div>
      <p class="bsg-note">Prijzen zijn indicatief en kunnen afwijken van actuele tarieven.</p>
    </div>
  `;

  const toolSel = qs("#bsg-tool");
  const inputs = qs("#bsg-calc-inputs");
  const out = qs("#bsg-calc-out");

  function currentTool() {
    return items.find(x => x.id === toolSel.value) || items[0];
  }

  function renderInputs() {
    const t = currentTool();
    const model = t.cost?.model || cat.calculator.type;

    if (model === "tiered_monthly") {
      inputs.innerHTML = `
        <label>Pakket / gebruikers
          <select id="bsg-tier">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="10">10</option>
          </select>
        </label>
        <label>Maanden
          <input id="bsg-months" type="number" min="1" value="12">
        </label>
      `;
      return;
    }

    if (model === "webshop_tx_cost") {
      inputs.innerHTML = `
        <label>Maandelijkse omzet (€)
          <input id="bsg-rev" type="number" min="0" value="5000">
        </label>
        <label>Maanden
          <input id="bsg-months" type="number" min="1" value="12">
        </label>
      `;
      return;
    }

    const unitsLabel =
      model === "per_employee_monthly" ? "Medewerkers" :
      model === "pos_terminals_monthly" ? "Aantal kassa's/terminals" :
      "Gebruikers";

    inputs.innerHTML = `
      <label>${unitsLabel}
        <input id="bsg-units" type="number" min="1" value="5">
      </label>
      <label>Maanden
        <input id="bsg-months" type="number" min="1" value="12">
      </label>
    `;
  }

  toolSel.addEventListener("change", renderInputs);
  renderInputs();

  qs("#bsg-calc-run")?.addEventListener("click", () => {
    const t = currentTool();
    const model = t.cost?.model || cat.calculator.type;
    const months = Math.max(1, parseInt(qs("#bsg-months")?.value || "12", 10));

    let total = 0;

    if (model === "tiered_monthly") {
      const tier = parseInt(qs("#bsg-tier")?.value || "1", 10);
      total = calcTieredMonthly(t, tier, months);
    } else if (model === "webshop_tx_cost") {
      const rev = Math.max(0, parseFloat(qs("#bsg-rev")?.value || "0"));
      total = calcWebshopTxCost(t, rev, months);
    } else {
      const units = Math.max(1, parseInt(qs("#bsg-units")?.value || "5", 10));
      if (model === "per_employee_monthly") total = calcPerEmployeeMonthly(t, units, months);
      else if (model === "pos_terminals_monthly") total = calcPosTerminalsMonthly(t, units, months);
      else total = calcPerUserMonthly(t, units, months);
    }

    const monthly = Math.round(total / months);
    out.innerHTML = `
      <div class="bsg-result">
        <div class="bsg-result-head">
          <strong>${escapeHTML(t.name)}</strong>
          <span class="bsg-badge">Indicatieve kosten</span>
        </div>
        <div class="bsg-amount">&euro;${Math.round(total).toLocaleString("nl-NL")}</div>
        <p class="bsg-amount-sub">over ${months} maanden (&euro;${monthly.toLocaleString("nl-NL")}/maand)</p>
        <div class="bsg-cta">
          <a class="bsg-btn" href="${escapeHTML(t.affiliate?.url || "#")}" rel="sponsored nofollow">Bekijk ${escapeHTML(t.name)}</a>
        </div>
      </div>
    `;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initCalculator().catch(err => {
    console.error(err);
    const mount = document.getElementById("bsg-calculator");
    if (mount) mount.innerHTML = `<div class="bsg-card"><h1>Oeps</h1><p>Calculator kon niet laden. Check console.</p><pre class="bsg-note">${escapeHTML(err.message)}</pre></div>`;
  });
});
