# Publicatiepipeline Audit — 8 weken (9 mrt – 3 mei 2026)

> Gegenereerd: 9 maart 2026
> Scope: alle content/blog/*.md met date > 2026-03-09
> Methode: frontmatter extractie + vergelijking met PUBLICATIEPLAN-8-WEKEN.md + EERSTE-LIVE-BATCH.md

---

## Executive Summary

| Bevinding | Aantal | Ernst |
|-----------|--------|-------|
| Artikelen met 3 op één dag (overschrijdt max 2) | 2 dagen | KRITISCH |
| Mismatches tussen plan en werkelijke date in bestand | 8 artikelen | KRITISCH |
| Artikelen die per ongeluk eerder live gingen dan gepland (Batch 2+3) | 10 artikelen | MATIG |
| Lege gaten in week 5 (9-11 apr) ontstaan door Batch 1 pull-forward | 3 dagen | MATIG |
| Artikelen met draft: true | 0 | OK |
| Artikelen met blokkerende publishDate | 0 | OK |
| Artikelen zonder batchassignatie (al live voor 9 mrt) | 38 artikelen | INFO |

---

## 1. Bevinding: 3 artikelen op één dag

### 10 maart 2026 — 3 artikelen (KRITISCH)

| Bestand | Huidige date | Afkomstig uit |
|---------|-------------|---------------|
| `teamleader-review-2026` | 2026-03-10 | EERSTE-LIVE-BATCH (Batch 1) |
| `mollie-review-2026` | 2026-03-10 | EERSTE-LIVE-BATCH (Batch 1) |
| `moneybird-vs-e-boekhouden-2026` | 2026-03-10 | PUBLICATIEPLAN week 1 |

**Oorzaak:** EERSTE-LIVE-BATCH zette teamleader en mollie op 10 mrt. PUBLICATIEPLAN wees ook 10 mrt toe aan moneybird-vs-e-boekhouden. De twee documenten zijn niet op elkaar afgestemd.

### 12 maart 2026 — 3 artikelen (KRITISCH)

| Bestand | Huidige date | Afkomstig uit |
|---------|-------------|---------------|
| `mollie-vs-multisafepay-2026` | 2026-03-12 | EERSTE-LIVE-BATCH (Batch 1) |
| `shopify-vs-mijnwebwinkel-2026` | 2026-03-12 | EERSTE-LIVE-BATCH (Batch 1) |
| `beste-boekhouder-app-2026` | 2026-03-12 | PUBLICATIEPLAN week 1 |

**Oorzaak:** Zelfde probleem als 10 mrt. Batch 1 vulde 12 mrt al met 2 artikelen; het plan voegde er nog een derde aan toe.

**Fix:** Zie sectie 6 (Aanbevolen schema).

---

## 2. Bevinding: 8 mismatches plan vs werkelijke bestandsdatum

EERSTE-LIVE-BATCH heeft 8 Batch 1-artikelen verplaatst van april naar 9-12 mrt. PUBLICATIEPLAN-8-WEKEN is **niet bijgewerkt** en verwijst nog steeds naar de oude aprildata voor deze 8 artikelen.

| Artikel | In PUBLICATIEPLAN | Werkelijke date in bestand |
|---------|------------------|---------------------------|
| `moneybird-review-2026` | 4 apr | **9 mrt** (al live) |
| `e-boekhouden-review-2026` | 9 apr | **9 mrt** (al live) |
| `teamleader-review-2026` | 10 apr | **10 mrt** (morgen live) |
| `mollie-review-2026` | 11 apr | **10 mrt** (morgen live) |
| `moneybird-vs-exact-online-2026` | 15 apr | **11 mrt** (overmorgen live) |
| `mollie-vs-multisafepay-2026` | 18 apr | **12 mrt** (live over 3 dagen) |
| `hubspot-vs-monday-crm-2026` | 19 apr | **11 mrt** (overmorgen live) |
| `shopify-vs-mijnwebwinkel-2026` | 20 apr | **12 mrt** (live over 3 dagen) |

**Gevolg:** PUBLICATIEPLAN-8-WEKEN toont voor week 5 (6-11 apr) vier artikelen die al in vroeg maart live zijn gegaan. Dit creëert **3 lege dagen** in week 5 (9, 10, 11 april).

---

## 3. Bevinding: Batch 2 en 3 artikelen zijn eerder live gegaan dan gepland

EERSTE-LIVE-BATCH vermeldde: "Batch 2 en 3 — NIET AANRAKEN." Maar in de werkelijkheid hebben diverse Batch 2/3-artikelen datums gekregen die vóór de geplande batchweken vallen:

**Batch 2 (gepland: week van 17 mrt) — werkelijke datums:**

| Artikel | Gepland in batch | Werkelijke date |
|---------|-----------------|-----------------|
| `exact-online-review-2026` | Batch 2 | **7 mrt** (al live!) |
| `snelstart-review-2026` | Batch 2 | **6 mrt** (al live!) |
| `shopify-review-2026` | Batch 2 | **6 mrt** (al live!) |
| `pipedrive-review-2026` | Batch 2 | **6 mrt** (al live!) |
| `moneybird-vs-e-boekhouden-2026` | Batch 2 | 10 mrt |

**Batch 3 (gepland: week van 24 mrt) — werkelijke datums:**

| Artikel | Gepland in batch | Werkelijke date |
|---------|-----------------|-----------------|
| `brevo-review-2026` | Batch 3 | 13 apr |
| `close-crm-review-2026` | Batch 3 | 8 apr |
| `hubspot-crm-review-2026` | Batch 3 | 5 apr |
| `exact-online-vs-twinfield-2026` | Batch 3 | 19 mrt (OK, PUBLICATIEPLAN) |
| `beste-boekhoudsoftware-zzp-2026` | Batch 3 | **24 feb** (al lang live!) |

**Conclusie:** De "batches" in EERSTE-LIVE-BATCH zijn louter oriëntatie-notities; de werkelijke datums in de bestanden volgen het PUBLICATIEPLAN-8-WEKEN. Batch 2 reviews (snelstart, shopify, pipedrive, exact-online) zijn met date 6-7 mrt allemaal al live gegaan — waarschijnlijk bewust als "pre-launch."

---

## 4. Bevinding: Lege gaten in week 5 (9-11 april)

Doordat de 4 reviews (moneybird, e-boekhouden, teamleader, mollie) zijn verschoven van 4-11 apr naar 9-12 mrt, zijn er **3 lege publicatiedagen** ontstaan:

- 9 april: leeg
- 10 april: leeg
- 11 april: leeg

Het plan springt van 8 apr (close-crm + lightspeed-kassa) direct naar 12 apr (kassasysteem-inrichten-checklist).

**Impact:** Lagere crawlfrequentie, minder consistente cadans.

---

## 5. Bevinding: 38 artikelen niet in PUBLICATIEPLAN vermeld

38 artikelen met date ≤ 9 mrt zijn al live maar worden niet besproken in PUBLICATIEPLAN-8-WEKEN. Dit zijn:
- Alle pillar-artikelen (beste-crm, beste-boekhoudsoftware, etc.) met date 24 feb – 9 mrt
- Alle gidsen met date 3 mrt (crm-fouten, kassasysteem-koppelen, etc.)
- Reviews die "te vroeg" live gingen: pipedrive, shopify, snelstart, twinfield, woocommerce, salesforce, exact-online

Dit is geen blokkade voor toekomstige publicatie, maar documentatie loopt achter.

---

## 6. Aanbevolen 8-Weekse Kalender

### Aannames
- Batch 1 (9-12 mrt) is onveranderbaar — artikelen zijn al live
- Dag-max: 2 artikelen
- Aanbeveling: max 2 artikelen van hetzelfde topic per week
- PUBLICATIEPLAN-8-WEKEN loopt 10 mrt – 3 mei; aanbeveling blijft binnen dit venster

### Vereiste date-wijzigingen in bestanden

| Artikel | Huidige date | Aanbevolen date | Reden |
|---------|-------------|-----------------|-------|
| `moneybird-vs-e-boekhouden-2026` | 2026-03-10 | **2026-03-13** | Verwijdert de 3-op-één-dag op 10 mrt |
| `beste-boekhouder-app-2026` | 2026-03-12 | **2026-03-13** | Verwijdert de 3-op-één-dag op 12 mrt; nu 2 op 13 mrt (boekhouding+boekhouding — acceptabel) |

> Alternatief: `beste-boekhouder-app-2026` → 14 mrt (1 per dag, meer gespreid)

---

### Volledig aanbevolen schema — 10 maart t/m 3 mei

#### Week 1 — 9–15 maart

| Datum | Artikel | Topic | Status | Wijziging |
|-------|---------|-------|--------|-----------|
| **9 mrt** | `moneybird-review-2026` | Boekhouding | AL LIVE | Geen |
| **9 mrt** | `e-boekhouden-review-2026` | Boekhouding | AL LIVE | Geen |
| **10 mrt** | `teamleader-review-2026` | CRM | Live morgen | Geen |
| **10 mrt** | `mollie-review-2026` | Webshop/Betaal | Live morgen | Geen |
| **11 mrt** | `moneybird-vs-exact-online-2026` | Boekhouding | Correct | Geen |
| **11 mrt** | `hubspot-vs-monday-crm-2026` | CRM | Correct | Geen |
| **12 mrt** | `mollie-vs-multisafepay-2026` | Webshop | Correct | Geen |
| **12 mrt** | `shopify-vs-mijnwebwinkel-2026` | Webshop | Correct | Geen |
| **13 mrt** | `moneybird-vs-e-boekhouden-2026` | Boekhouding | **FIX: was 10 mrt** | date: 2026-03-10 → **2026-03-13** |
| **13 mrt** | `beste-boekhouder-app-2026` | Boekhouding | **FIX: was 12 mrt** | date: 2026-03-12 → **2026-03-13** |
| **14 mrt** | `boekhoudprogramma-kiezen-7-vragen` | Boekhouding | Was 13 mrt | date: 2026-03-13 → **2026-03-14** |
| **15 mrt** | `beste-afspraken-software-2026` | Overig | Was 14 mrt | date: 2026-03-14 → **2026-03-15** |

> Note: beste-erp-software-mkb-2026 verplaatsen naar week 2 om week 1 niet te overladen met boekhouding

#### Week 2 — 16–22 maart

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **16 mrt** | `beste-erp-software-mkb-2026` | Overig | Verplaatst van 15 mrt |
| **16 mrt** | `salesforce-vs-hubspot-2026` | CRM | Geen (al 16 mrt) |
| **17 mrt** | `beste-offerte-software-2026` | Overig | Geen |
| **18 mrt** | `fiscale-eisen-kassasysteem-2026` | Kassasysteem | Geen |
| **19 mrt** | `exact-online-vs-twinfield-2026` | Boekhouding | Geen |
| **20 mrt** | `beste-klantenservice-software-2026` | Overig | Geen |
| **21 mrt** | `beste-crm-webshops-2026` | CRM | Geen |
| **22 mrt** | `twinfield-vs-moneybird-2026` | Boekhouding | Geen |

#### Week 3 — 23–29 maart

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **23 mrt** | `personeelsdossier-digitaliseren-avg` | HR | Geen |
| **24 mrt** | `beste-loonadministratie-software-2026` | HR | Geen |
| **25 mrt** | `notion-vs-monday-vergelijking-2026` | Projectmanagement | Geen |
| **26 mrt** | `beste-website-bouwers-mkb-2026` | Overig | Geen |
| **27 mrt** | `beste-documenten-management-2026` | Overig | Geen |
| **28 mrt** | `email-lijst-opbouwen-b2b` | Marketing | Geen |
| **29 mrt** | `beste-social-media-management-2026` | Overig | Geen |

#### Week 4 — 30 maart – 5 april

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **30 mrt** | `beste-recruitment-software-2026` | Overig | Geen |
| **31 mrt** | `beste-vergadersoftware-2026` | Projectmanagement | Geen |
| **1 apr** | `beste-intranet-software-mkb-2026` | Overig | Geen |
| **2 apr** | `btw-regels-zzp-2026` | Boekhouding | Geen |
| **3 apr** | `beste-contractmanagement-software-2026` | Overig | Geen |
| **5 apr** | `hubspot-crm-review-2026` | CRM | Geen |

#### Week 5 — 6–12 april (incl. gat-fix)

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **6 apr** | `monday-com-review-2026` | Projectmanagement | Geen |
| **7 apr** | `crm-data-opschonen-stappenplan` | CRM | Geen |
| **8 apr** | `close-crm-review-2026` | CRM | Geen |
| **8 apr** | `lightspeed-kassa-review-2026` | Kassasysteem | Geen |
| **9 apr** | _(leeg — was moneybird-review, nu al live)_ | — | Gat na Batch 1 pull-forward |
| **10 apr** | _(leeg — was teamleader-review, nu al live)_ | — | Gat na Batch 1 pull-forward |
| **11 apr** | _(leeg — was mollie-review, nu al live)_ | — | Gat na Batch 1 pull-forward |
| **12 apr** | `kassasysteem-inrichten-checklist` | Kassasysteem | Geen |

> **Aanbeveling voor gaten 9-11 april:** Verplaats artikelen uit week 6 naar deze dagen, of schrijf 1-2 nieuwe korte gids-artikelen. De huidige cadans valt hier terug naar 1 artikel in 4 dagen.

#### Week 6 — 13–19 april

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **13 apr** | `brevo-review-2026` | Marketing | Geen |
| **14 apr** | `pipedrive-vs-monday-crm-2026` | CRM | Geen |
| **15 apr** | _(leeg — was moneybird-vs-exact-online, nu al live op 11 mrt)_ | — | Gat |
| **16 apr** | `lightspeed-vs-untill-2026` | Kassasysteem | Geen |
| **17 apr** | `ziekteverzuim-terugdringen-hr-software` | HR | Geen |
| **18 apr** | _(leeg — was mollie-vs-multisafepay, nu al live op 12 mrt)_ | — | Gat |
| **19 apr** | _(leeg — was hubspot-vs-monday, nu al live op 11 mrt)_ | — | Gat |

> **Aanbeveling voor gaten 15, 18, 19 april:** Overweeg 3 artikelen uit week 7 naar voren te trekken.

#### Week 7 — 20–26 april

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **20 apr** | _(leeg — was shopify-vs-mijnwebwinkel, nu al live op 12 mrt)_ | — | Gat |
| **21 apr** | `beste-software-fysiotherapeuten-2026` | Sector | Geen |
| **22 apr** | `ab-testen-beginners-eerste-experiment` | Marketing | Geen |
| **23 apr** | `beste-software-accountants-2026` | Sector | Geen |
| **24 apr** | `beste-software-makelaars-2026` | Sector | Geen |
| **25 apr** | `beste-restaurantsoftware-2026` | Sector | Geen |
| **26 apr** | `beste-software-webshops-2026` | Webshop | Geen |

#### Week 8 — 27 april – 3 mei

| Datum | Artikel | Topic | Wijziging |
|-------|---------|-------|-----------|
| **27 apr** | `boekhoudprogramma-migratie-data-overzetten` | Boekhouding | Geen |
| **28 apr** | `beste-software-zzp-2026` | Sector | Geen |
| **29 apr** | `lightspeed-vs-square-2026` | Kassasysteem | Geen |
| **30 apr** | `brevo-vs-mailchimp-2026` | Marketing | Geen |
| **1 mei** | `beste-voorraadbeheer-software-2026` | Overig | Geen |
| **2 mei** | `klantretentie-meten-crm-software` | CRM | Geen |
| **3 mei** | `beste-email-marketing-software-2026` | Marketing | Geen |

#### Na week 8 (juni)

| Datum | Artikel | Topic |
|-------|---------|-------|
| **20 jun** | `monday-com-vs-clickup-2026` | Projectmanagement |
| **21 jun** | `activecampaign-vs-mailchimp-2026` | Marketing |
| **22 jun** | `personio-vs-hoorayhr-2026` | HR |

---

## 7. Samenvatting vereiste date-wijzigingen in bestanden

**Minimale fixes om de 3-op-één-dag te corrigeren (PRIORITEIT 1):**

```
content/blog/moneybird-vs-e-boekhouden-2026.md
  date: 2026-03-10  →  date: 2026-03-13

content/blog/beste-boekhouder-app-2026.md
  date: 2026-03-12  →  date: 2026-03-13
```

**Cascade-fixes (week 1 remainder — AANBEVOLEN maar niet kritisch):**

```
content/blog/boekhoudprogramma-kiezen-7-vragen.md
  date: 2026-03-13  →  date: 2026-03-14

content/blog/beste-afspraken-software-2026.md
  date: 2026-03-14  →  date: 2026-03-15

content/blog/beste-erp-software-mkb-2026.md
  date: 2026-03-15  →  date: 2026-03-16
```

**PUBLICATIEPLAN-8-WEKEN.md bijwerken (documentatie):**
- Verwijder de 8 Batch 1-artikelen uit week 4-6 (ze zijn al live)
- Markeer gaten in week 5 (9-11 apr) en week 6 (15, 18-19 apr) als te vullen of acceptabel
- Voeg Batch 1-artikelen toe aan week 0 (9-12 mrt)

---

## 8. Pipeline Health — Totaaloverzicht

| Check | Status |
|-------|--------|
| Hugo buildFuture = false (default) | OK — artikelen gaan live op hun datum |
| Daily cron 08:00 UTC | OK — geen actie vereist |
| draft: true op toekomstige artikelen | 0 gevallen — OK |
| publishDate die publicatie blokkeert | 0 gevallen — OK |
| Alle toekomstige artikelen hebben date in het verleden op publicatiedag | OK (mits geen late commits) |
| Max 2 artikelen per dag | 2 overtredingen (10 mrt + 12 mrt) — FIX VEREIST |
| Topic-spreiding per week | Week 1 heeft 4 boekhouding + 3 webshop — acceptabel gezien lanceerdrang |
| Gaten > 3 dagen zonder publicatie | Week 5 (9-11 apr): 3 lege dagen — AANDACHT |
| Totaal artikelen gepland t/m 3 mei | 55 artikelen — OK |
| Totaal artikelen al live | 38 artikelen — OK |

---

*Audit gegenereerd: 9 maart 2026*
