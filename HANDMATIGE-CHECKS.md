# Handmatige Checks — BSG

> Artikelen die niet automatisch gefixt konden worden en handmatige verificatie vereisen.
> Gegenereerd: 9 maart 2026

---

## PRIORITEIT 1 — Prijzen verifiëren op product-websites

### Exact Online pakketstructuur
**Status:** HANDMATIGE CHECK VEREIST
**Reden:** Drie artikelen gebruiken drie verschillende sets pakketnamen en prijzen. Niet automatisch te harmoniseren zonder de actuele Exact Online prijspagina te controleren.

**Controleer op:** https://www.exact.com/nl/prijzen

| Artikel | Gebruikte namen | Gebruikte prijzen |
|---------|----------------|-------------------|
| `exact-online-review-2026.md` | ZZP / Boekhouden / Compleet | €48 / €48 / ±€59 |
| `moneybird-vs-exact-online-2026.md` | Essentials / Standaard / Compleet | ±€48 / ±€59 / ±€89 |
| `beste-boekhoudsoftware-zzp-2026.md` | Essentials / Geavanceerd | €48 / €79 |
| `exact-online-vs-twinfield-2026.md` | Controleer ook dit artikel | — |

**Actie:** Verifieer de actuele pakketnamen en prijzen, kies één versie, en pas alle artikelen aan.

---

### Shopify pakketstructuur
**Status:** HANDMATIGE CHECK VEREIST
**Reden:** Review en vergelijkingsartikel gebruiken verschillende plannen en prijzen.

**Controleer op:** https://www.shopify.com/nl/pricing

| Artikel | Pakketstructuur |
|---------|----------------|
| `shopify-review-2026.md` | Basic €36 / Shopify €105 / Advanced €384 / Plus €2.300 |
| `shopify-vs-mijnwebwinkel-2026.md` | Starter €5 / Basic €36 / Grow €79 / Advanced €289 / Plus $2.300 |

**Actie:** Verifieer welke structuur actueel is (vermoedelijk de Grow-structuur is nieuwer), harmoniseer beide artikelen.

---

### Moneybird gratis plan — banktransacties
**Status:** HANDMATIGE CHECK VEREIST
**Reden:** De review zegt "geen bankkoppeling", het vergelijkingsartikel zegt "10 banktransacties/mnd".

**Controleer op:** https://www.moneybird.nl/prijzen

| Artikel | Claim |
|---------|-------|
| `moneybird-review-2026.md` | Gratis plan: geen bankkoppeling, geen periodieke facturen |
| `moneybird-vs-exact-online-2026.md` | Gratis plan: 10 banktransacties/mnd, 3 facturen/mnd |

**Actie:** Controleer of het gratis plan banktransacties bevat. Pas het afwijkende artikel aan.

---

## PRIORITEIT 2 — Trustpilot scores verifiëren

### Moneybird Trustpilot vs eigen platform
**Status:** GEDEELTELIJK GEFIXT — label nog toevoegen
**Reden:** Review vermeldt 4.1/5 (904 reviews) van moneybird.nl eigen platform. Alle andere artikelen vermelden 3.5/5 (181 reviews) op Trustpilot. Beide kunnen correct zijn maar het verschil is verwarrend.

**Controleer op:**
- https://nl.trustpilot.com/review/moneybird.nl
- https://www.moneybird.nl (eigen reviews)

**Actie:** Verifieer beide scores en pas de review aan om duidelijk te labelen welke score van welk platform komt.

---

### Lightspeed Trustpilot
**Status:** GEFIXT ✅
**Wijziging:** Review geharmoniseerd naar 4,0/5 (2.300+ reviews) — consistent met vergelijkingsartikelen.

---

## PRIORITEIT 3 — Affiliate programma's aanvragen

De volgende producten worden veelvuldig genoemd maar hebben geen actief affiliate programma:

| Product | Vermeldingen | Programma | Status | Geschatte commissie |
|---------|-------------|-----------|--------|-------------------|
| Moneybird | 63x | Daisycon (pid=19080) | Pending | €42/conversie |
| e-Boekhouden | 33x | AWIN (mid=101519) | Pending | Tot €60/lead |
| Trengo | 5x | Tapfiliate | Niet aangemeld | €250/conversie |
| Contractbook | 3x | Direct | Niet aangemeld | $1.000/referral |
| Clockify | 8x | CAKE.com | Niet aangemeld | 30% recurring |
| MailerLite | 3x | Trackdesk | Niet aangemeld | 30% lifetime |
| Shiftbase | 4x | Reditus | Niet aangemeld | 25% MRR |
| SimplyBook.me | 5x | Direct | Niet aangemeld | 25%+15% |
| Offorte | 3x | Direct | Niet aangemeld | 20% recurring, 10j cookie |
| Wix | 5x | Direct | Niet aangemeld | $100/plan |
| Monday.com | 31x | PartnerStack | Pending | Variabel |
| Brevo | 16x | PartnerStack | Pending | Variabel |
| HubSpot | 51x | Afgewezen | Later opnieuw | 30% recurring |

---

## PRIORITEIT 4 — Sectorpagina's canonical-strategie

**Status:** STRATEGISCHE BESLISSING VEREIST

25 sectorpagina's hebben `canonical` URLs die naar blog-artikelen wijzen. Dit kan Google verwarren:
- Als canonical correct is → sectorpagina's worden niet geïndexeerd (crawl-verspilling)
- Als canonical incorrect is → blokkeer potentiële rankings

**Opties:**
1. Canonicals verwijderen → sectorpagina's worden zelfstandige pagina's
2. Sectorpagina's verwijderen → blog-posts doen al het werk
3. Niets doen → monitoren in Search Console

**Aanbeveling:** Verwijder de canonicals. De sectorpagina's hebben unieke content en verdienen eigen indexering.

---

*Laatste update: 9 maart 2026*
