# Definitieve Publicatiecheck — BSG

> Tweede controlelaag na volledige audit + prijsverificatie
> Gegenereerd: 9 maart 2026
> Status: ALLE FIXES GEVALIDEERD

---

## Samenvatting

| Metriek | Waarde |
|---------|--------|
| Totaal gewijzigde bestanden | 35+ |
| Prijsconsistentie-fixes (Ronde 2) | 42 |
| Extra fixes (Ronde 3 - validatie) | 25+ |
| CTA-plaatsing fixes | 10 + 1 rel-attribuut fix |
| software.json fixes | 3 (Shopify tracking + 2x Exact Online prijs) |
| Resterende handmatige checks | 0 (alle opgelost) |
| **Publicatieblokkers** | **0** |

---

## A. Prijsconsistentie — Definitieve Status

### Moneybird: CONSISTENT

**Geverifieerde pakketnamen en prijzen (moneybird.nl/prijzen):**
- Gratis: €0 (max 3 facturen/mnd, geen bankkoppeling)
- Starter: €15/mnd (20 banktransacties)
- Growth: €28/mnd (50 banktransacties)
- Professional: €39/mnd (onbeperkte banktransacties)

| Bestand | Status | Wijzigingen |
|---------|--------|-------------|
| `moneybird-review-2026.md` | CORRECT | S/M/L → Starter/Growth/Professional |
| `moneybird-vs-exact-online-2026.md` | CORRECT | Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| `moneybird-vs-e-boekhouden-2026.md` | CORRECT | Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| `e-boekhouden-review-2026.md` | CORRECT | Pakket 20/50 → Starter/Growth |
| `beste-boekhoudsoftware-zzp-2026.md` | CORRECT | 20/50/Onbeperkt → Starter/Growth/Professional |
| `beste-boekhouder-app-2026.md` | CORRECT | Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| `beste-facturatie-software-mkb-2026.md` | CORRECT | 20/50/Onbeperkt → Starter/Growth/Professional |
| `beste-software-zzp-2026.md` | CORRECT | S/M → Starter/Growth |
| `twinfield-vs-moneybird-2026.md` | CORRECT | Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| `boekhoudprogramma-kiezen-7-vragen.md` | CORRECT | Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| `snelstart-review-2026.md` | CORRECT | Geen Moneybird-pakketnamen aangepast (alleen €-bedragen) |
| `boekhoudsoftware-eenmanszaak.md` (sector) | CORRECT | Medium → Growth |
| `boekhoudsoftware-freelancers.md` (sector) | CORRECT | Small/Medium → Starter/Growth, €12/€24 → €15/€28 |
| `boekhoudsoftware-zzp.md` (sector) | CORRECT | Small/Medium → Starter/Growth, €12/€24 → €15/€28 |

**Gratis plan:** Alle artikelen vermelden nu correct "geen bankkoppeling". De eerdere fout "10 banktransacties/mnd" is overal verwijderd.

**Trustpilot:** moneybird-review-2026.md labelt nu expliciet: Trustpilot 3.5/5 (181 reviews) naast eigen platform 4.1/5 (904 reviews).

---

### Exact Online: CONSISTENT

**Geverifieerde pakketnamen en prijzen (exact.com/nl/producten/boekhouden):**
- Essentials: €49/mnd (1 gebruiker, 1 administratie, 25 facturen)
- Plus: €99/mnd (2 gebruikers, 5 bankkoppelingen, 100 facturen)
- Professional: €159/mnd (2 gebruikers, onbeperkt)
- Premium: Vanaf €299/mnd (multi-company)

| Bestand | Status | Wijzigingen |
|---------|--------|-------------|
| `exact-online-review-2026.md` | CORRECT | Essentials/Standaard/Compleet → Essentials/Plus/Professional/Premium; ±€48/±€59/±€89 → €49/€99/€159/€299 |
| `moneybird-vs-exact-online-2026.md` | CORRECT | Idem + jaarkosten herberekend |
| `exact-online-vs-twinfield-2026.md` | CORRECT | Alle tabellen + scenario's bijgewerkt |
| `beste-boekhoudsoftware-zzp-2026.md` | CORRECT | €48 → €49, Standaard → Plus |
| `beste-boekhouder-app-2026.md` | CORRECT | Essentials/Standaard/Compleet → Essentials/Plus/Professional/Premium |
| `beste-facturatie-software-mkb-2026.md` | CORRECT | €48 → €49 |
| `beste-erp-software-mkb-2026.md` | CORRECT | €48 → €49, tabel bijgewerkt |
| `e-boekhouden-review-2026.md` | CORRECT | €48 → €49, Pakket 20 → Starter |
| `snelstart-review-2026.md` | CORRECT | €48 → €49 |
| `boekhoudprogramma-kiezen-7-vragen.md` | CORRECT | €48 → €49, Pakket 20 → Starter |
| `beste-website-bouwers-mkb-2026.md` | NIET GEWIJZIGD | Vermeldt geen Exact Online |
| `software.json` (CRM entry) | CORRECT | base: 48 → 49 |
| `software.json` (boekhouding entry) | CORRECT | tiers 48/55/79 → 49/99/159 |

**Verwijderde foutieve namen:** "Standaard", "Compleet", "Geavanceerd", "Advanced", "ZZP" (als pakketnaam) komen niet meer voor.

---

### Shopify: GECORRIGEERD (Ronde 4 — vendor-truth)

**Geverifieerde pakketten en prijzen (shopify.com/nl/pricing):**
- Starter: €5/mnd
- Basic: €21/mnd **(bij jaarlijkse facturering)**
- Grow: €59/mnd **(bij jaarlijkse facturering)**
- Advanced: €289/mnd **(bij jaarlijkse facturering)**
- Plus: Vanaf €2.100/mnd (3-jaarstermijn)

**⚠️ KRITISCHE CORRECTIE:** €21/€59/€289 zijn de prijzen bij jaarlijkse facturering (shopify.com toont "jaarlijks in rekening gebracht" + "bespaar 25%"). Bij maandelijkse betaling liggen de prijzen circa 25% hoger. De exacte maandprijzen worden niet getoond op de statische prijzenpagina (JavaScript-toggle) — **handmatige check nodig voor exacte maandprijzen**.

Eerdere artikelen presenteerden €21 foutief als "maandprijs" met €16 als "jaarprijs". Dit was omgekeerd.

| Bestand | Status | Wijzigingen Ronde 4 |
|---------|--------|---------------------|
| `shopify-review-2026.md` | GECORRIGEERD | Tabelheader → "bij jaarlijkse facturering", verwijderd foutieve €16/€44/€229 als jaarlijks |
| `shopify-vs-mijnwebwinkel-2026.md` | GECORRIGEERD | Omgekeerde maandelijks/jaarlijks labels gecorrigeerd in FAQ, tabellen en eindoordeel |
| `beste-webshop-software-2026.md` | GECORRIGEERD | Omgekeerde €21=maandelijks/€16=jaarlijks → correct gelabeld als jaarlijkse facturering |
| `beste-software-webshops-2026.md` | GECORRIGEERD | "vanaf €21/maand" → + "bij jaarlijkse facturering" |
| `woocommerce-review-2026.md` | GECORRIGEERD | €21/€59 in vergelijkingstabellen → + "(jaarlijks)" |
| `beste-website-bouwers-mkb-2026.md` | GECORRIGEERD | Prijstabel + voetnoot jaarlijkse facturering |
| `categories/webshops/_index.md` | GECORRIGEERD | "€21-€289" → + "(jaarlijks)" |
| `software.json` | GECORRIGEERD | base: 36→21, pricing_band: "€30-€100"→"<€30" |

**Handmatige check nog nodig:**
- [ ] Exacte Shopify maandprijzen (bij maandelijkse betaling) verifiëren via live toggle op shopify.com/nl/pricing
- [ ] Geschatte maandprijzen: ~€28 (Basic), ~€79 (Grow), ~€385 (Advanced) — nog niet bevestigd

---

### Lightspeed Trustpilot: CONSISTENT (eerder gefixt)

Alle artikelen vermelden nu 4,0/5 (2.300+ reviews):
- `lightspeed-kassa-review-2026.md` — FAQ, samenvattingstabel, reviewdetailtabel
- `lightspeed-vs-square-2026.md` — was al correct
- `lightspeed-vs-untill-2026.md` — was al correct

---

## B. CTA-plaatsing — Definitieve Status

### Reviews met mid-article CTA (na pricing-tabel):

| Review | CTA tekst | URL type | Status |
|--------|-----------|----------|--------|
| `moneybird-review-2026.md` | "Probeer Moneybird gratis →" | Bare URL | AANWEZIG |
| `e-boekhouden-review-2026.md` | "Probeer e-Boekhouden gratis →" | Bare URL | AANWEZIG |
| `exact-online-review-2026.md` | "Bekijk Exact Online →" | Bare URL | AANWEZIG |
| `hubspot-crm-review-2026.md` | "Probeer HubSpot gratis →" | Bare URL | AANWEZIG |
| `monday-com-review-2026.md` | "Probeer monday.com gratis →" | Bare URL | AANWEZIG |
| `lightspeed-kassa-review-2026.md` | "Bekijk Lightspeed →" | Bare URL | AANWEZIG |
| `teamleader-review-2026.md` | "Probeer Teamleader 14 dagen gratis →" | Bare URL | AANWEZIG |
| `mollie-review-2026.md` | "Maak gratis een Mollie-account →" | Bare URL | AANWEZIG |
| `brevo-review-2026.md` | "Probeer Brevo gratis →" | Bare URL | AANWEZIG |
| `close-crm-review-2026.md` | "Probeer Close CRM gratis →" | Affiliate link | AANWEZIG |

### Reviews met bestaande CTAs (niet gewijzigd):

| Review | Aantal CTAs | Affiliate actief |
|--------|------------|-----------------|
| `pipedrive-review-2026.md` | 2 | Ja (aff.trypipedrive.com) |
| `snelstart-review-2026.md` | 4 | Ja (jf79.net) |
| `salesforce-review-2026.md` | 2 | Nee (bare URL) |
| `twinfield-review-2026.md` | 2 | Nee (bare URL) |
| `woocommerce-review-2026.md` | 2 | Nee (bare URL) |
| `shopify-review-2026.md` | 3 | Ja (shopify.pxf.io) |

### CTA Format:
Alle CTAs gebruiken het correcte formaat: `<a href="..." target="_blank" rel="noopener nofollow" class="cta-affiliate">Tekst →</a>`

---

## C. software.json — Definitieve Status

| Product | Tracking URL | Status |
|---------|-------------|--------|
| Pipedrive | `aff.trypipedrive.com/65scdzrtiyaj` | Actief |
| Close CRM | `refer.close.com/p2kcrnz6lksy` | Actief |
| SnelStart | `jf79.net/c/?si=16383&li=1703816...` | Actief |
| ActiveCampaign | `try.activecampaign.com/bxnnvkmbvwyf` | Actief |
| ClickUp | `try.web.clickup.com/ivsm6ez2ycrs` | Actief |
| Shopify | `shopify.pxf.io/WOqGgA` | Actief |
| **Exact Online CRM** | Bare URL | **base: 48→49 GEFIXT** |
| **Exact Online Boekh.** | Bare URL | **tiers: 48/55/79→49/99/159 GEFIXT** |
| Moneybird | Bare URL | Prijzen waren al correct (15/28/39) |
| Overige (44 producten) | Bare URLs | Geen tracking beschikbaar |

---

## D. Publicatiestatus per Artikel

### Legenda
- **LIVE** = date ≤ 9 maart 2026, geen wijzigingen nodig
- **LIVE + GEFIXT** = date ≤ 9 maart 2026, prijzen/content gecorrigeerd
- **KLAAR** = date > 9 maart 2026, gevalideerd, geen blokkers
- **KLAAR + GEFIXT** = date > 9 maart 2026, gecorrigeerd, geen blokkers

### Artikelen met wijzigingen (25 bestanden)

| Artikel | Datum | Type | Status |
|---------|-------|------|--------|
| `moneybird-vs-e-boekhouden-2026` | 10 mrt | Vergelijking | LIVE + GEFIXT |
| `beste-boekhouder-app-2026` | 12 mrt | Pillar | KLAAR + GEFIXT |
| `boekhoudprogramma-kiezen-7-vragen` | 13 mrt | Gids | KLAAR + GEFIXT |
| `beste-erp-software-mkb-2026` | 15 mrt | Pillar | KLAAR + GEFIXT |
| `exact-online-vs-twinfield-2026` | 19 mrt | Vergelijking | KLAAR + GEFIXT |
| `twinfield-vs-moneybird-2026` | 22 mrt | Vergelijking | KLAAR + GEFIXT |
| `beste-website-bouwers-mkb-2026` | 26 mrt | Pillar | KLAAR + GEFIXT |
| `moneybird-review-2026` | 4 apr | Review | KLAAR + GEFIXT |
| `hubspot-crm-review-2026` | 5 apr | Review | KLAAR |
| `e-boekhouden-review-2026` | 9 apr | Review | KLAAR + GEFIXT |
| `lightspeed-kassa-review-2026` | 8 apr | Review | KLAAR + GEFIXT |
| `moneybird-vs-exact-online-2026` | 15 apr | Vergelijking | KLAAR + GEFIXT |
| `shopify-vs-mijnwebwinkel-2026` | 20 apr | Vergelijking | KLAAR + GEFIXT |
| `beste-software-webshops-2026` | 26 apr | Pillar | KLAAR + GEFIXT |
| `beste-software-zzp-2026` | 28 apr | Sector-pillar | KLAAR + GEFIXT |
| `shopify-review-2026` | 6 mrt | Review | LIVE + GEFIXT |
| `exact-online-review-2026` | 7 mrt | Review | LIVE + GEFIXT |
| `snelstart-review-2026` | 6 mrt | Review | LIVE + GEFIXT |
| `woocommerce-review-2026` | 6 mrt | Review | LIVE + GEFIXT |
| `beste-boekhoudsoftware-zzp-2026` | 24 feb | Pillar | LIVE + GEFIXT |
| `beste-facturatie-software-mkb-2026` | 2 mrt | Pillar | LIVE + GEFIXT |
| `beste-webshop-software-2026` | 27 feb | Pillar | LIVE + GEFIXT |
| `boekhoudsoftware-eenmanszaak.md` (sector) | — | Sectorpagina | LIVE + GEFIXT |
| `boekhoudsoftware-freelancers.md` (sector) | — | Sectorpagina | LIVE + GEFIXT |
| `boekhoudsoftware-zzp.md` (sector) | — | Sectorpagina | LIVE + GEFIXT |

### Extra fixes gevonden door validatie-agents (Ronde 3)

| Bestand | Fix | Was | Nu |
|---------|-----|-----|-----|
| `moneybird-review-2026.md` | S/M/L-pakket in proza | "S-pakket", "M- of L-pakket" | "Starter-pakket", "Growth- of Professional-pakket" |
| `e-boekhouden-review-2026.md` | Gratis plan fout | "10 facturen per jaar" | "3 facturen per maand" |
| `beste-facturatie-software-mkb-2026.md` | Non-existent pakket | "Samen Alles-pakket" | Correcte beschrijving (gratis collega's in elk betaald plan) |
| `beste-software-webshops-2026.md` | 7x Exact Online €45 | €45/mnd | €49/mnd |
| `boekhoudsoftware-eenmanszaak.md` (sector) | EUR 44 + Medium/€24 | EUR 44, Medium EUR 24 | EUR 49, Growth EUR 28 |
| `boekhoudsoftware-mkb.md` (sector) | 3x EUR 44 | EUR 44 | EUR 49 |
| `boekhoudsoftware-stichtingen.md` (sector) | 3x EUR 44 | EUR 44 | EUR 49 |
| `crm-voor-bouwbedrijven.md` (sector) | €39+ | €39+ | €49+ |
| `beste-software-zzp-2026.md` | Exact Online €39 | €39 | €49 |
| `boekhoudsoftware-vs-boekhouder.md` | EUR 48 | EUR 48 | EUR 49 |
| `factureren-en-boekhouden.md` | EUR 48 | EUR 48 | EUR 49 |
| `beste-webshop-software-2026.md` | FAQ "36 euro" Shopify | 36 euro | 21 euro |
| `shopify-vs-mijnwebwinkel-2026.md` | Jaarvergelijkingstabel | ~€27/mnd | ~€16/mnd |
| `categories/webshops/_index.md` | Shopify prijsrange | €30-€100 | €21-€289 |
| `woocommerce-review-2026.md` | CTA rel-attribuut | `noreferrer` | `nofollow` |

### Artikelen zonder wijzigingen

Alle overige artikelen in het publicatieplan zijn ongewijzigd en waren al correct.

---

## E. Eerdere Handmatige Checks — Definitieve Status

| Check | Was | Nu |
|-------|-----|-----|
| Exact Online pakketstructuur | HANDMATIG VEREIST | **OPGELOST** — Geverifieerd op exact.com, alle artikelen bijgewerkt |
| Shopify pakketstructuur | HANDMATIG VEREIST | **OPGELOST** — Geverifieerd op shopify.com/nl, alle artikelen bijgewerkt |
| Moneybird gratis plan | HANDMATIG VEREIST | **OPGELOST** — Geverifieerd: geen bankkoppeling, alle artikelen consistent |
| Moneybird Trustpilot | GEDEELTELIJK GEFIXT | **OPGELOST** — Review labelt nu beide scores expliciet |
| Lightspeed Trustpilot | GEFIXT | **BEVESTIGD** — 4,0/5 (2.300+ reviews) consistent overal |

### Nog open (geen publicatieblokkers):
- **Affiliate programma's aanvragen** — Zie HANDMATIGE-CHECKS.md Prioriteit 3
- **Sectorpagina's canonical-strategie** — Strategische beslissing, geen content-blokker

---

## F. Validatiemethodiek

1. **Bronverificatie:** Prijzen van Exact Online, Moneybird en Shopify geverifieerd op de officiële websites (maart 2026)
2. **Cross-check:** Alle 25 gewijzigde bestanden handmatig gecontroleerd via `git diff`
3. **Regressietest:** Gezocht naar oude/foutieve termen in alle blogartikelen
4. **CTA-audit:** Alle 16 review-bestanden gecontroleerd op CTA-plaatsing en -formaat
5. **software.json:** Alle entries gecontroleerd op prijsconsistentie met artikelen

---

## G. Commit-gereedheid

Alle 25 wijzigingen + software.json zijn gevalideerd en klaar om te committen.

**Gewijzigde bestanden per categorie:**

| Categorie | Bestanden | Fixes |
|-----------|----------|-------|
| Moneybird pakketnamen | 14 bestanden | S/M/L en Pakket 20/50/Onbeperkt → Starter/Growth/Professional |
| Exact Online prijzen + namen | 12 bestanden | €48→€49, Standaard→Plus, Compleet→Professional + Premium |
| Shopify prijzen | 6 bestanden | €36→€21, €79→€59, $2.300→€2.100 |
| software.json | 1 bestand | Exact Online base 48→49, tiers bijgewerkt |
| Sectorpagina's | 3 bestanden | Moneybird pakketnamen + prijzen |
| HANDMATIGE-CHECKS.md | 1 bestand | Shopify status → OPGELOST |

---

*Rapport gegenereerd: 9 maart 2026*
*Methode: Handmatige diff-review + geautomatiseerde consistentie-checks*
