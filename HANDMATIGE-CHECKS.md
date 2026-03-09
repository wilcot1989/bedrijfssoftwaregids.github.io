# Handmatige Checks — BSG

> Artikelen die niet automatisch gefixt konden worden en handmatige verificatie vereisen.
> Gegenereerd: 9 maart 2026 | Laatste update: 9 maart 2026 (alle Prioriteit 1+2 opgelost)

---

## PRIORITEIT 1 — Prijzen verifiëren op product-websites

### Exact Online pakketstructuur
**Status:** OPGELOST ✅
**Wijziging:** Alle artikelen bijgewerkt naar geverifieerde prijzen (exact.com/nl/producten/boekhouden, maart 2026):
- Essentials €49 / Plus €99 / Professional €159 / Premium vanaf €299
- Oude namen "Standaard", "Compleet", "Geavanceerd", "ZZP" verwijderd
- 12 bestanden + software.json gecorrigeerd

---

### Shopify pakketstructuur
**Status:** HANDMATIGE CHECK VEREIST
**Reden:** Review en vergelijkingsartikel gebruiken verschillende plannen en prijzen.

**Controleer op:** https://www.shopify.com/nl/pricing

| Artikel | Pakketstructuur |
|---------|----------------|
| `shopify-review-2026.md` | Starter €5 / Basic €21 / Grow €59 / Advanced €289 / Plus €2.100 ✅ GECORRIGEERD |
| `shopify-vs-mijnwebwinkel-2026.md` | Starter €5 / Basic €21 / Grow €59 / Advanced €289 / Plus €2.100 ✅ GECORRIGEERD |

**Status:** OPGELOST — Alle artikelen bijgewerkt naar actuele prijzen (geverifieerd shopify.com/nl/pricing maart 2026).

---

### Moneybird gratis plan — banktransacties
**Status:** OPGELOST ✅
**Wijziging:** Geverifieerd op moneybird.nl/prijzen: gratis plan heeft GEEN bankkoppeling. Alle artikelen consistent bijgewerkt. Pakketnamen S/M/L en Pakket 20/50/Onbeperkt → Starter/Growth/Professional in 14 bestanden.

---

## PRIORITEIT 2 — Trustpilot scores verifiëren

### Moneybird Trustpilot vs eigen platform
**Status:** OPGELOST ✅
**Wijziging:** Review labelt nu expliciet: Trustpilot 3.5/5 (181 reviews) naast moneybird.nl eigen platform 4.1/5 (904 reviews). Geen verwarring meer mogelijk.

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
