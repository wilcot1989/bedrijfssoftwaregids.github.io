async function loadJSON(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return await res.json();
}
function qs(sel, el = document) { return el.querySelector(sel); }
function qsa(sel, el = document) { return Array.from(el.querySelectorAll(sel)); }
function setHTML(idOrEl, html) {
  const el = typeof idOrEl === "string" ? document.getElementById(idOrEl) : idOrEl;
  if (el) el.innerHTML = html;
}
function escapeHTML(str) {
  return String(str ?? "").replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}
function getCategoryFromPage() {
  const meta = document.querySelector('meta[name="bsg-category"]');
  return meta ? meta.getAttribute("content") : null;
}
const BSG_BASE = "/tools";
const BSG_DATA = `${BSG_BASE}/data`;
const BSG_ASSETS = `${BSG_BASE}/assets/tools`;
function renderKeuzehulpCTA(catKey) {
  var existing = document.querySelector(".bsg-keuzehulp-cta");
  if (existing) existing.remove();
  var outEl = document.getElementById("out");
  if (!outEl || !catKey) return;
  outEl.insertAdjacentHTML("afterend",
    '<div class="bsg-keuzehulp-cta" style="margin-top:1.25rem;padding:1.25rem;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;text-align:center;">' +
    '<p style="font-weight:600;color:#0F172A;margin:0 0 .5rem">Wil je de beste software vinden?</p>' +
    '<a class="bsg-btn" href="/tools/' + escapeHTML(catKey) + '/keuzehulp/">Doe de keuzehulp</a></div>');
}
