/* tools-matrix.js — Dynamic comparison matrix with per-category filters */

/* ---------- helpers ---------- */

/** Labels for boolean filter fields */
const FILTER_LABELS = {
  nl_support: "NL support",
  marketing_automation: "Marketing automation",
  pipeline: "Sales pipeline",
  vat: "BTW-aangifte",
  payroll: "Salarisadministratie",
  bank_sync: "Bankkoppeling",
  gantt: "Gantt",
  time_tracking: "Time tracking",
  scrum: "Scrum/Agile",
  inventory: "Voorraadbeheer",
  kds: "Keuken/KDS",
  payments: "Pinbetaling",
  leave: "Verlofregistratie",
  performance: "Performance reviews",
  onboarding: "Onboarding",
  automation: "Automatisering",
  crm_needed: "CRM inbegrepen",
  pos_sync: "POS-koppeling"
};

function boolCell(val) {
  if (val === true) return '<span style="color:#16a34a;font-weight:600">✓</span>';
  if (val === false) return '<span style="color:#dc2626">✗</span>';
  return '<span style="color:#94a3b8">–</span>';
}

/** Collect unique pricing bands from product list */
function uniquePricingBands(items) {
  const order = ["<€10", "<€20", "<€30", "€10-€20", "€20-€50", "€30-€100", "€50-€100", "€100+"];
  const bands = [...new Set(items.map(i => i.pricing_band).filter(Boolean))];
  bands.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return bands;
}

/* ---------- rendering ---------- */

function renderMatrixRow(t, boolFilters) {
  const link = t.affiliate?.url
    ? `<a class="bsg-btn-sm" href="${escapeHTML(t.affiliate.url)}" rel="sponsored nofollow">Bekijk</a>`
    : "";
  const boolCells = boolFilters.map(f => `<td>${boolCell(t[f])}</td>`).join("");
  return `<tr>
    <td><strong>${escapeHTML(t.name)}</strong></td>
    <td>${escapeHTML(t.pricing_band || "-")}</td>
    ${boolCells}
    <td>${link}</td>
  </tr>`;
}

function applyFilters(list, filtersState) {
  return list.filter(t => {
    for (const [k, v] of Object.entries(filtersState)) {
      if (v === null || v === "" || (Array.isArray(v) && v.length === 0)) continue;
      if (typeof v === "boolean") {
        if (typeof t[k] === "boolean" && t[k] !== v) return false;
      } else {
        if (t[k] !== v) return false;
      }
    }
    return true;
  });
}

/* ---------- init ---------- */

async function initMatrix() {
  const catKey = getCategoryFromPage();
  const mount = document.getElementById("bsg-matrix");
  if (!catKey || !mount) return;

  const categories = await loadJSON(`${BSG_DATA}/categories.json`);
  const software = await loadJSON(`${BSG_DATA}/software.json`);
  const cat = categories[catKey];
  if (!cat) return;

  const items = software.filter(s => (s.categories || []).includes(catKey));
  if (!items.length) return;

  /* Determine which boolean filters to show for this category */
  const catFilters = (cat.matrix?.filters || []).filter(f => f !== "pricing_band" && f !== "integrations");
  const boolFilters = catFilters.filter(f => FILTER_LABELS[f]);

  /* Build pricing options from actual data */
  const pricingBands = uniquePricingBands(items);
  const pricingOpts = pricingBands.map(b => `<option value="${escapeHTML(b)}">${escapeHTML(b)}</option>`).join("");

  /* Build boolean filter checkboxes */
  const filterCheckboxes = boolFilters.map(f =>
    `<label class="bsg-inline"><input type="checkbox" data-filter="${escapeHTML(f)}"> ${escapeHTML(FILTER_LABELS[f])}</label>`
  ).join("\n        ");

  /* Build table header columns */
  const boolHeaders = boolFilters.map(f => `<th>${escapeHTML(FILTER_LABELS[f])}</th>`).join("");

  /* Tool links */
  const advBtn = cat?.advanced?.enabled
    ? `<a class="bsg-btn" style="margin-left:8px;" href="${BSG_BASE}/${escapeHTML(cat.slug)}/${escapeHTML(cat.advanced.page)}">${escapeHTML(cat.advanced.title)}</a>`
    : "";
  const calcBtn = cat?.calculator?.enabled
    ? `<a class="bsg-btn" style="margin-left:8px;" href="${BSG_BASE}/${escapeHTML(cat.slug)}/calculator.html">Bereken kosten</a>`
    : "";

  mount.innerHTML = `
    <div class="bsg-card">
      <div class="bsg-matrix-head">
        <h2>${escapeHTML(cat.title)} vergelijken</h2>
        <div class="bsg-matrix-actions">
          <a class="bsg-btn" href="${BSG_BASE}/${escapeHTML(cat.slug)}/keuzehulp.html">Start keuzehulp</a>
          ${calcBtn}
          ${advBtn}
        </div>
      </div>

      <div class="bsg-filters">
        <label>Prijsband
          <select id="bsg-filter-pricing">
            <option value="">Alles</option>
            ${pricingOpts}
          </select>
        </label>
        ${filterCheckboxes}
      </div>

      <div class="bsg-table-wrap">
        <table class="bsg-table">
          <thead>
            <tr>
              <th>Software</th>
              <th>Prijsindicatie</th>
              ${boolHeaders}
              <th></th>
            </tr>
          </thead>
          <tbody id="bsg-matrix-body"></tbody>
        </table>
      </div>

      <p class="bsg-note">${items.length} producten in deze categorie. Gebruik de filters om je selectie te verfijnen.</p>
    </div>
  `;

  /* State & rendering */
  const body = qs("#bsg-matrix-body");
  const state = { pricing_band: "" };
  boolFilters.forEach(f => { state[f] = null; });

  function render() {
    const filtered = applyFilters(items, state);
    body.innerHTML = filtered.map(t => renderMatrixRow(t, boolFilters)).join("")
      || `<tr><td colspan="${3 + boolFilters.length}">Geen resultaten. Pas je filters aan.</td></tr>`;
  }

  /* Event listeners */
  qs("#bsg-filter-pricing")?.addEventListener("change", (e) => {
    state.pricing_band = e.target.value || "";
    render();
  });

  mount.querySelectorAll("input[data-filter]").forEach(cb => {
    cb.addEventListener("change", () => {
      state[cb.dataset.filter] = cb.checked ? true : null;
      render();
    });
  });

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initMatrix().catch(err => {
    console.error(err);
    const mount = document.getElementById("bsg-matrix");
    if (mount) mount.innerHTML = `<div class="bsg-card"><h2>Oeps</h2><p>Matrix kon niet laden.</p><pre class="bsg-note">${escapeHTML(err.message)}</pre></div>`;
  });
});
