# AI Audit Rapport — BSG

> Volledige audit en uitvoering op 9 maart 2026
> Repository: wilcot1989/bedrijfssoftwaregids.github.io

---

## Samenvatting

### Uitgevoerde wijzigingen

| Categorie | Wijzigingen | Bestanden |
|-----------|------------|-----------|
| Prijsconsistentie Moneybird | 5 fixes | 4 bestanden |
| Prijsconsistentie Exact Online | 5 fixes | 5 bestanden |
| Prijsconsistentie Shopify | 15 fixes | 4 bestanden |
| Lightspeed Trustpilot | 3 fixes | 1 bestand |
| CTA boven pricing-tabel | 10 toevoegingen | 10 bestanden |
| software.json tracking URL | 1 fix (Shopify) | 1 bestand |
| **Totaal** | **39 fixes** | **~20 bestanden** |

### Aangemaakte rapporten

| Bestand | Inhoud |
|---------|--------|
| `AI-AUDIT-RAPPORT.md` | Dit rapport — volledige changelog en analyse |
| `PUBLICATIEPLAN-8-WEKEN.md` | Week-voor-week publicatieschema met status per artikel |
| `MONETISATIE-EN-AFFILIATE-FIXES.md` | Alle monetisatie-wijzigingen + prioriteitenlijst |
| `HANDMATIGE-CHECKS.md` | Issues die niet automatisch gefixt konden worden |

---

## A. Structuuranalyse

### Contentoverzicht

| Type | Aantal | Status |
|------|--------|--------|
| Blog-artikelen | 96 | 63 live, 33 gepland (mrt-jun) |
| Sectorpagina's | 25 | Alle live (3 mrt bulk) |
| Categorie-indexpagina's | 8 | Alle live |
| Interactieve tools | 23 | Alle live |
| **Totaal** | **152** | |

### Cluster-sterkte

| Cluster | Artikelen | Reviews | Vergelijkingen | Score |
|---------|-----------|---------|---------------|-------|
| CRM | 31 | 6 | 7 | STERK |
| Boekhouding | 27 | 5 | 5 | STERK |
| Marketing/Email | 18 | 1 | 3 | MIDDEL |
| Kassasystemen | 17 | 1 | 3 | MIDDEL |
| HR/Salaris | 15 | 0 | 1 | ZWAK |
| Projectmanagement | 10 | 1 | 4 | DUN |
| Webshops | 9 | 3 | 2 | DUN |
| ERP | 1 | 0 | 0 | WEES |

---

## B. Uitgevoerde prijsconsistentie-fixes

### B1. Moneybird — 5 fixes in 4 bestanden

**1. Gratis plan banktransacties**
- `moneybird-vs-exact-online-2026.md`: "10 banktransacties/mnd" → "Geen bankkoppeling" (consistent met review en vs-e-boekhouden)

**2. Trustpilot score**
- `moneybird-review-2026.md`: Trustpilot 3.5/5 (181 reviews) toegevoegd naast de 4.1/5 moneybird.nl score. Expliciet gelabeld als "eigen platform" vs "Trustpilot".

**3. "Moneybird Compleet" bestaat niet**
- `exact-online-review-2026.md`: "Moneybird Compleet circa €35/maand" → "Moneybird L (Onbeperkt) kost €39/maand"

**4. "Dubbel boekhouden-pakket" bestaat niet**
- `e-boekhouden-review-2026.md`: "Dubbel boekhouden-pakket (€28/maand)" → "alle rapportages zitten al in elk betaald pakket, vanaf €15/maand (Pakket 20)"

**5. Pakket 50 features**
- `moneybird-vs-e-boekhouden-2026.md`: Pakket-specifieke features verwijderd (balans/W&V waren niet pakket-specifiek). Geharmoniseerd met review: "alle overige functies gelijk aan Pakket 20".

---

### B2. Exact Online — 5 fixes in 5 bestanden

**Gekozen canonieke versie:** Boekhouden Essentials (±€48) / Boekhouden Standaard (±€59) / Boekhouden Compleet (±€89)

| Bestand | Was | Nu |
|---------|-----|-----|
| `exact-online-review-2026.md` | ZZP €48 / Boekhouden €48 / Compleet ±€59 | Essentials ±€48 / Standaard ±€59 / Compleet ±€89 |
| `e-boekhouden-review-2026.md` | Boekhouden ZZP €48 | Boekhouden Essentials €48 |
| `beste-boekhoudsoftware-zzp-2026.md` | Essentials €48 / Geavanceerd €79 | Boekhouden Essentials €48 / Boekhouden Standaard ±€59 |
| `beste-boekhouder-app-2026.md` | Essentials €48 / Advanced €62 / Professional €94 | Essentials ±€48 / Standaard ±€59 / Compleet ±€89 |
| `beste-facturatie-software-mkb-2026.md` | Essentials: vanaf €48 | Boekhouden Essentials: ±€48 |

**Let op:** `moneybird-vs-exact-online-2026.md` was al correct en is niet gewijzigd.

**HANDMATIGE CHECK:** De pakketnamen en prijzen moeten geverifieerd worden op exact.com/nl/prijzen. De ±-notatie geeft aan dat exacte prijzen kunnen afwijken.

---

### B3. Shopify — 15 fixes in 4 bestanden

**Gekozen canonieke versie:** Starter €5 / Basic €36 / Grow €79 / Advanced €289 / Plus $2.300

| Bestand | Aantal fixes |
|---------|-------------|
| `shopify-review-2026.md` | 7 (FAQ, prijstabel, Payments tabel, body tekst) |
| `beste-webshop-software-2026.md` | 3 (prijzen, kostenberekening, pakketnaam) |
| `beste-software-webshops-2026.md` | 2 (tabel + HTML) |
| `woocommerce-review-2026.md` | 3 (FAQ, pakketnaam, vergelijkingstabel) |

`shopify-vs-mijnwebwinkel-2026.md` was al correct (bron van de canonieke versie).

---

### B4. Lightspeed Trustpilot — 3 fixes in 1 bestand

| Wijziging | Was | Nu |
|-----------|-----|-----|
| FAQ | "ruim 1.150 reviews" (geen score) | "4,0 uit 5 op basis van ruim 2.300 reviews" |
| Samenvattingstabel | "1.150+ reviews" | "4,0/5 (2.300+ reviews)" |
| Reviewdetailtabel | "-- / 1.150+" | "4,0/5 / 2.300+" |

Consistent met `lightspeed-vs-square-2026.md` (4,0/5, 2.300+) en `lightspeed-vs-untill-2026.md` (4,0/5, 2.300+).

---

## C. CTA-plaatsing verbeterd

**10 reviews** kregen een CTA direct na de pricing-tabel (was: alleen CTA op laatste regel).

Zie `MONETISATIE-EN-AFFILIATE-FIXES.md` voor het volledige overzicht.

---

## D. software.json geüpdatet

**1 tracking URL toegevoegd:** Shopify (`shopify.pxf.io/WOqGgA`)
**5 waren al correct:** Pipedrive, Close CRM, SnelStart, ActiveCampaign, ClickUp
**47 blijven bare URLs** — geen tracking URL beschikbaar

---

## E. Publicatiestatus

Zie `PUBLICATIEPLAN-8-WEKEN.md` voor het volledige schema.

| Status | Aantal |
|--------|--------|
| ✅ Klaar voor publicatie | 48 |
| 🔧 Automatisch gefixt (nu klaar) | 3 |
| ⚠️ Handmatige check vereist | 7 |

### Artikelen die handmatige check vereisen (vóór publicatie)

| Artikel | Reden | Datum |
|---------|-------|-------|
| `moneybird-review-2026` | Gratis plan banktransacties verifiëren | 4 apr |
| `moneybird-vs-exact-online-2026` | Exact Online prijzen verifiëren | 15 apr |
| `exact-online-vs-twinfield-2026` | Exact Online pakketstructuur checken | 19 mrt |
| `e-boekhouden-review-2026` | Moneybird-referenties checken na fixes | 9 apr |
| `shopify-review-2026` | Shopify prijzen verifiëren na harmonisatie | LIVE |
| `shopify-vs-mijnwebwinkel-2026` | Shopify prijzen consistent? | 20 apr |
| `beste-boekhouder-app-2026` | Exact Online prijzen (had €62/€94 die nergens voorkwamen) | 12 mrt |

---

## F. Content-roadmap — volgende stappen

### Prioriteit 1 — Prijspagina's (hoogste ROI)
1. Exact Online prijzen 2026
2. Moneybird prijzen 2026
3. Shopify prijzen Nederland 2026
4. Pipedrive prijzen 2026
5. HubSpot prijzen 2026

### Prioriteit 2 — Alternatieven-pagina's
6. Exact Online alternatieven 2026
7. Moneybird alternatieven 2026
8. HubSpot alternatieven 2026

### Prioriteit 3 — Ontbrekende vergelijkingen
9. WooCommerce vs Shopify
10. SnelStart vs Moneybird
11. Close CRM vs Pipedrive
12. Teamleader vs HubSpot

### Prioriteit 4 — Ontbrekende reviews (hoog vermeld)
13. AFAS review (31 vermeldingen)
14. Nmbrs review (21 vermeldingen)
15. Mailchimp review (20 vermeldingen)
16. ActiveCampaign review (14 vermeldingen)

---

## G. Strategische aanbevelingen

1. **50% tijd naar linkbuilding** — content is er, autoriteit ontbreekt
2. **Affiliate programma's aanvragen** — zie HANDMATIGE-CHECKS.md
3. **Sectorpagina's canonical-strategie beslissen** — verwijder canonicals of verwijder pagina's
4. **Geen nieuwe info-artikelen** — focus op prijspagina's en alternatieven
5. **Geen ERP-uitbreiding** — parkeer tot CRM en boekhouding volwassen zijn
6. **HR-cluster:** schrijf reviews voor AFAS en Nmbrs, of stop met HR-sectorpagina's

---

*Rapport gegenereerd: 9 maart 2026*
*Volgende review aanbevolen: 1 april 2026 (na eerste batch reviews live)*
