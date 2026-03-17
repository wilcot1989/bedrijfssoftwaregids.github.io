/**
 * Bedrijfssoftwaregids.nl — Vergelijkingswidget
 * Embed: <script src="https://bedrijfssoftwaregids.nl/widget/comparison-widget.js" data-category="boekhouding"></script>
 * Ondersteunde categorieën: boekhouding | crm | kassasystemen | webshops
 * v1.0 — 2026
 */
(function () {
  'use strict';

  // ─── Dataset ────────────────────────────────────────────────────────────────

  var DATA = {
    boekhouding: {
      label: 'Boekhoudsoftware',
      url: 'https://bedrijfssoftwaregids.nl/categories/boekhouding/',
      products: [
        { name: 'Moneybird',    price: '€15/mnd',    score: '3.5',  bestFor: 'ZZP & MKB' },
        { name: 'e-Boekhouden', price: '€9,95/mnd',  score: '4.6',  bestFor: 'Budget' },
        { name: 'SnelStart',    price: '€0–16/mnd',  score: '4.6',  bestFor: 'Starters' },
        { name: 'Exact Online', price: '€49/mnd',    score: '2.6',  bestFor: 'Groeiend MKB' },
        { name: 'Jortt',        price: '€0–19/mnd',  score: '4.2',  bestFor: 'Eenvoud' }
      ]
    },
    crm: {
      label: 'CRM-software',
      url: 'https://bedrijfssoftwaregids.nl/categories/crm/',
      products: [
        { name: 'Pipedrive',    price: '€14/user',   score: '4.5',  bestFor: 'Sales teams' },
        { name: 'HubSpot',      price: 'Gratis',     score: '2.9',  bestFor: 'Marketing+CRM' },
        { name: 'Monday CRM',   price: '€12/user',   score: '2.4',  bestFor: 'Visueel' },
        { name: 'Close CRM',    price: '$29/user',   score: '4.7',  bestFor: 'Inside sales' },
        { name: 'Teamleader',   price: '€37,50/user',score: '2.8',  bestFor: 'NL alles-in-één' }
      ]
    },
    kassasystemen: {
      label: 'Kassasystemen',
      url: 'https://bedrijfssoftwaregids.nl/categories/kassasystemen/',
      products: [
        { name: 'Lightspeed',  price: '€69/mnd',    score: '3.7',  bestFor: 'Restaurant' },
        { name: 'Square',      price: 'Gratis',     score: '4.2',  bestFor: 'Klein retail' },
        { name: 'Untill',      price: 'Op aanvraag',score: 'n.v.t.',bestFor: 'Grote horeca' },
        { name: 'Orderbird',   price: '€39/mnd',    score: '2.4',  bestFor: 'Café/bar' },
        { name: 'Zettle',      price: 'Gratis',     score: '3.3',  bestFor: 'Markt/popup' }
      ]
    },
    webshops: {
      label: 'Webshopsoftware',
      url: 'https://bedrijfssoftwaregids.nl/categories/webshops/',
      products: [
        { name: 'Shopify',           price: '€36/mnd',  score: '1.6',   bestFor: 'Alles-in-één' },
        { name: 'WooCommerce',       price: 'Gratis',   score: 'n.v.t.',bestFor: 'Flexibiliteit' },
        { name: 'Lightspeed eCom',   price: '€49/mnd',  score: '3.7',   bestFor: 'NL retail' },
        { name: 'Mijnwebwinkel',     price: '€25/mnd',  score: 'n.v.t.',bestFor: 'NL beginners' },
        { name: 'CCV Shop',          price: '€22,50/mnd',score:'n.v.t.',bestFor: 'NL MKB' }
      ]
    }
  };

  // ─── CSS ────────────────────────────────────────────────────────────────────

  var CSS = [
    '.bsg-widget{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
    'font-size:14px;line-height:1.5;color:#1a1a1a;max-width:680px;width:100%;box-sizing:border-box;',
    'border:1px solid #e2e8e2;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.07);}',

    '.bsg-widget *{box-sizing:border-box;margin:0;padding:0;}',

    '.bsg-header{background:#2D5F2D;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}',
    '.bsg-header-title{color:#fff;font-size:15px;font-weight:700;letter-spacing:-.01em;}',
    '.bsg-header-sub{color:rgba(255,255,255,.7);font-size:11px;margin-top:2px;}',
    '.bsg-logo{display:flex;align-items:center;gap:6px;}',
    '.bsg-logo-icon{width:22px;height:22px;background:#fff;border-radius:5px;display:flex;align-items:center;',
    'justify-content:center;flex-shrink:0;}',
    '.bsg-logo-icon svg{display:block;}',

    '.bsg-table{width:100%;border-collapse:collapse;}',
    '.bsg-table th{background:#f5f8f5;padding:9px 14px;font-size:11px;font-weight:600;',
    'text-transform:uppercase;letter-spacing:.04em;color:#4a6741;border-bottom:1px solid #e2e8e2;',
    'text-align:left;white-space:nowrap;}',
    '.bsg-table th.bsg-col-score,.bsg-table td.bsg-col-score{text-align:center;}',

    '.bsg-table tr:nth-child(even) td{background:#fafcfa;}',
    '.bsg-table tr:hover td{background:#f0f7f0;}',
    '.bsg-table td{padding:10px 14px;border-bottom:1px solid #edf2ed;vertical-align:middle;}',
    '.bsg-table tr:last-child td{border-bottom:none;}',

    '.bsg-rank{width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;',
    'justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;}',
    '.bsg-rank-1{background:#2D5F2D;color:#fff;}',
    '.bsg-rank-2{background:#4a8a3f;color:#fff;}',
    '.bsg-rank-3{background:#6aad5f;color:#fff;}',
    '.bsg-rank-other{background:#e8f0e8;color:#4a6741;}',

    '.bsg-name-cell{display:flex;align-items:center;gap:9px;}',
    '.bsg-name{font-weight:600;color:#1a1a1a;font-size:13px;}',

    '.bsg-price{font-size:13px;color:#2D5F2D;font-weight:600;white-space:nowrap;}',

    '.bsg-stars{display:inline-flex;align-items:center;gap:3px;justify-content:center;}',
    '.bsg-stars-val{font-weight:700;font-size:13px;color:#1a1a1a;}',
    '.bsg-stars-bar{display:inline-flex;gap:1px;}',
    '.bsg-star{font-size:12px;line-height:1;}',
    '.bsg-star-full{color:#00b67a;}',
    '.bsg-star-half{color:#00b67a;opacity:.6;}',
    '.bsg-star-empty{color:#ddd;}',
    '.bsg-score-na{font-size:12px;color:#999;}',

    '.bsg-badge{display:inline-block;background:#f0f7f0;color:#2D5F2D;',
    'border:1px solid #c8dfc8;border-radius:20px;padding:2px 9px;font-size:11px;font-weight:600;',
    'white-space:nowrap;}',

    '.bsg-footer{background:#f5f8f5;padding:11px 18px;display:flex;align-items:center;',
    'justify-content:space-between;border-top:1px solid #e2e8e2;flex-wrap:wrap;gap:8px;}',
    '.bsg-cta{display:inline-flex;align-items:center;gap:4px;background:#2D5F2D;color:#fff;',
    'text-decoration:none;padding:8px 15px;border-radius:6px;font-size:13px;font-weight:600;',
    'transition:background .15s;white-space:nowrap;}',
    '.bsg-cta:hover{background:#245224;color:#fff;text-decoration:none;}',
    '.bsg-cta-arrow{font-size:15px;line-height:1;}',
    '.bsg-powered{font-size:11px;color:#999;}',
    '.bsg-powered a{color:#2D5F2D;text-decoration:none;}',
    '.bsg-powered a:hover{text-decoration:underline;}',

    '@media(max-width:480px){',
    '.bsg-col-best{display:none;}',
    '.bsg-table th,.bsg-table td{padding:9px 10px;}',
    '.bsg-header{padding:12px 14px;}',
    '.bsg-footer{padding:10px 14px;}',
    '}'
  ].join('');

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function scoreToStars(score) {
    if (score === 'n.v.t.') return null;
    var n = parseFloat(score);
    if (isNaN(n)) return null;
    var stars = [];
    for (var i = 1; i <= 5; i++) {
      if (n >= i) {
        stars.push('full');
      } else if (n >= i - 0.5) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

  function renderStars(score) {
    if (score === 'n.v.t.') {
      return '<span class="bsg-score-na">n.v.t.</span>';
    }
    var stars = scoreToStars(score);
    if (!stars) return '<span class="bsg-score-na">–</span>';
    var barHTML = '';
    for (var i = 0; i < stars.length; i++) {
      var cls = 'bsg-star bsg-star-' + stars[i];
      var glyph = stars[i] === 'empty' ? '☆' : '★';
      barHTML += '<span class="' + cls + '">' + glyph + '</span>';
    }
    return (
      '<span class="bsg-stars">' +
      '<span class="bsg-stars-val">' + score + '</span>' +
      '<span class="bsg-stars-bar">' + barHTML + '</span>' +
      '</span>'
    );
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function logoIcon() {
    // Simple "B" monogram in BSG green
    return (
      '<div class="bsg-logo-icon">' +
      '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="14" height="14" rx="3" fill="#2D5F2D"/>' +
      '<text x="3.5" y="11" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#fff">B</text>' +
      '</svg>' +
      '</div>'
    );
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  function renderWidget(category, container) {
    var catKey = (category || '').toLowerCase().trim();
    var catData = DATA[catKey];

    if (!catData) {
      container.innerHTML =
        '<div style="padding:16px;font-family:sans-serif;color:#c00;border:1px solid #fcc;' +
        'border-radius:8px;background:#fff8f8;">' +
        '<strong>Bedrijfssoftwaregids widget:</strong> onbekende categorie "<em>' +
        escapeHTML(category) + '</em>". ' +
        'Gebruik: boekhouding | crm | kassasystemen | webshops' +
        '</div>';
      return;
    }

    var rows = '';
    for (var i = 0; i < catData.products.length; i++) {
      var p = catData.products[i];
      var rank = i + 1;
      var rankClass = rank <= 3 ? 'bsg-rank-' + rank : 'bsg-rank-other';
      rows +=
        '<tr>' +
        '<td>' +
        '<div class="bsg-name-cell">' +
        '<span class="bsg-rank ' + rankClass + '">' + rank + '</span>' +
        '<span class="bsg-name">' + escapeHTML(p.name) + '</span>' +
        '</div>' +
        '</td>' +
        '<td><span class="bsg-price">' + escapeHTML(p.price) + '</span></td>' +
        '<td class="bsg-col-score">' + renderStars(p.score) + '</td>' +
        '<td class="bsg-col-best"><span class="bsg-badge">' + escapeHTML(p.bestFor) + '</span></td>' +
        '</tr>';
    }

    container.innerHTML =
      '<div class="bsg-widget">' +

      // Header
      '<div class="bsg-header">' +
      '<div class="bsg-logo">' + logoIcon() +
      '<div>' +
      '<div class="bsg-header-title">Top ' + catData.products.length + ' ' + escapeHTML(catData.label) + '</div>' +
      '<div class="bsg-header-sub">Vergeleken door Bedrijfssoftwaregids.nl</div>' +
      '</div>' +
      '</div>' +
      '</div>' +

      // Table
      '<table class="bsg-table" cellspacing="0" cellpadding="0">' +
      '<thead><tr>' +
      '<th>Product</th>' +
      '<th>Prijs</th>' +
      '<th class="bsg-col-score">Trustpilot</th>' +
      '<th class="bsg-col-best">Beste voor</th>' +
      '</tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
      '</table>' +

      // Footer
      '<div class="bsg-footer">' +
      '<a href="' + escapeHTML(catData.url) + '" class="bsg-cta" target="_blank" rel="noopener noreferrer">' +
      'Vergelijk alle opties op Bedrijfssoftwaregids.nl <span class="bsg-cta-arrow">&rarr;</span>' +
      '</a>' +
      '<span class="bsg-powered">Powered by <a href="https://bedrijfssoftwaregids.nl/" target="_blank" rel="noopener noreferrer">Bedrijfssoftwaregids.nl</a></span>' +
      '</div>' +

      '</div>';
  }

  // ─── Init ───────────────────────────────────────────────────────────────────

  function injectCSS() {
    if (document.getElementById('bsg-widget-css')) return;
    var style = document.createElement('style');
    style.id = 'bsg-widget-css';
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function init() {
    injectCSS();

    // Find all <script> tags that loaded this widget
    var scripts = document.querySelectorAll('script[src*="comparison-widget.js"]');
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];

      // Skip if we already processed this instance
      if (script.getAttribute('data-bsg-rendered')) continue;
      script.setAttribute('data-bsg-rendered', '1');

      var category = script.getAttribute('data-category') || 'boekhouding';

      // Create container right after the script tag
      var container = document.createElement('div');
      container.setAttribute('data-bsg-widget', category);
      script.parentNode.insertBefore(container, script.nextSibling);

      renderWidget(category, container);
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for manual use: BSGWidget.render('boekhouding', document.getElementById('my-div'))
  window.BSGWidget = { render: renderWidget, data: DATA };

})();
