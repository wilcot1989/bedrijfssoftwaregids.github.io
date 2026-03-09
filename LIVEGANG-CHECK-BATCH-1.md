# Livegang Check — Batch 1

> Datum: 2026-03-09
> Gecontroleerd door: Claude (vendor-truth ronde 4)

---

## Waarom stonden deze artikelen niet live?

**Oorzaak:** Alle 8 artikelen hadden een `date` in april 2026 (4 apr – 20 apr). Hugo's `buildFuture = false` (standaard) sluit toekomstige artikelen uit van de build. Geen `draft`, `publishDate` of `expiryDate` blokkades.

**Oplossing:** Datums aangepast naar 9-12 maart 2026 (gestaffeld, 2 per dag).

---

## Per-artikel validatie

### 1. moneybird-review-2026.md ✅ NU LIVE (9 mrt)
- **Prijzen:** Starter €15, Growth €28, Professional €39 — geverifieerd moneybird.nl/prijzen
- **Pakketnamen:** Starter/Growth/Professional — officieel correct
- **Gratis plan:** Max 3 facturen/mnd — correct
- **CTA:** moneybird.nl (2x, rel="noopener nofollow")
- **Interne links:** 10+ unieke /blog/ links
- **affiliate: true** ✅
- **Vendor-truth:** Geen issues

### 2. e-boekhouden-review-2026.md ✅ NU LIVE (9 mrt)
- **Prijzen:** ZZP €9,95, Onbeperkt €14,50, Boekhouden+Facturatie €24 — correct
- **CTA:** e-boekhouden.nl (2x, rel="noopener nofollow")
- **Interne links:** 10+ unieke links
- **affiliate: true** ✅
- **Vendor-truth:** Geen issues

### 3. teamleader-review-2026.md ✅ NU LIVE (10 mrt)
- **Prijzen:** SMART €30, GROW €39, FLOW €99/gebruiker/mnd (jaarlijks) — plausibel
- **Pakketnamen:** SMART/GROW/FLOW — officiële Teamleader Focus namen
- **CTA:** teamleader.eu/nl-nl (2x, rel="noopener nofollow")
- **Interne links:** 9 unieke /blog/ links
- **affiliate: true** ✅
- **Let op:** products: frontmatter ontbreekt (niet blokkerend — niet alle reviews hebben dit)

### 4. mollie-review-2026.md ✅ NU LIVE (10 mrt)
- **Prijzen:** iDEAL €0,32/tx — geverifieerd (verhoogd van €0,29 met iDEAL 2.0)
- **Fix:** Giropay verwijderd (stopgezet 31 dec 2024) → vervangen door SOFORT/Klarna
- **CTA:** mollie.com/nl (2x, rel="noopener nofollow")
- **Interne links:** 8 unieke /blog/ links
- **affiliate: true** ✅

### 5. moneybird-vs-exact-online-2026.md ✅ NU LIVE (11 mrt)
- **Moneybird:** Starter/Growth/Professional €15/28/39 — correct
- **Exact Online:** Essentials/Plus/Professional/Premium €49/99/159/v.a.€299 — correct
- **CTA:** moneybird.nl + exact.com (2x elk, rel="noopener nofollow")
- **Interne links:** 10+ unieke links
- **affiliate: true** ✅

### 6. hubspot-vs-monday-crm-2026.md ✅ NU LIVE (11 mrt)
- **HubSpot:** Free/Starter €15/Professional €90/gebruiker — correct
- **Monday CRM:** Basic €12/Standard €17/Pro €28/gebruiker (jaarlijks) — correct
- **CTA:** hubspot.com/nl + monday.com/lang/nl (rel="noopener nofollow")
- **Interne links:** 10+ unieke links
- **affiliate: true** ✅

### 7. mollie-vs-multisafepay-2026.md ✅ NU LIVE (12 mrt)
- **Transactiekosten:** Correct voor beide providers
- **CTA:** mollie.com/nl + multisafepay.com/nl-nl (rel="noopener nofollow")
- **Interne links:** 13 unieke links
- **affiliate: true** ✅

### 8. shopify-vs-mijnwebwinkel-2026.md ✅ NU LIVE (12 mrt)
- **Shopify:** Basic €21/Grow €59/Advanced €289 — **correct, jaarlijkse facturering expliciet gelabeld**
- **Acendy:** Startup €40/Business €80/Enterprise €150 — correct
- **CTA:** shopify.pxf.io/WOqGgA (rel="noopener nofollow sponsored") — affiliate link actief
- **Interne links:** 11+ unieke links
- **affiliate: true** ✅

---

## Samenvatting

| Status | Aantal |
|--------|--------|
| ✅ NU LIVE ZETTEN | 8 |
| ⚠️ UITGESTELD | 0 |
| 🔄 VERVANGEN | 0 |

**Fixes toegepast:**
1. 8x `date` aangepast van april → maart 2026
2. mollie-review: Giropay → SOFORT/Klarna (3 plaatsen)
3. shopify-vs-mijnwebwinkel: jaarlijkse facturering correct gelabeld (eerder in vendor-truth ronde)

**Niet aangeraakt:**
- Alle overige geplande artikelen (behouden originele toekomstige datums)
- Geen draft/publishDate/expiryDate wijzigingen nodig
- Geen nieuwe artikelen geschreven
