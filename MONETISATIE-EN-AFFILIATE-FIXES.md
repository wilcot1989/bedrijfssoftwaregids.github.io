# Monetisatie & Affiliate Fixes — Changelog

> Alle wijzigingen doorgevoerd op 9 maart 2026

---

## 1. software.json — Tracking URLs

**Bestand:** `static/tools/software.json`

| Product | Status | Tracking URL |
|---------|--------|-------------|
| Pipedrive | ✅ Was al correct | `aff.trypipedrive.com/65scdzrtiyaj` |
| Close CRM | ✅ Was al correct | `refer.close.com/p2kcrnz6lksy` |
| SnelStart | ✅ Was al correct | `jf79.net/c/?si=16383&li=1703816...` |
| ActiveCampaign | ✅ Was al correct | `try.activecampaign.com/bxnnvkmbvwyf` |
| ClickUp | ✅ Was al correct | `try.web.clickup.com/ivsm6ez2ycrs` |
| **Shopify** | 🔧 **GEFIXT** | `shopify.pxf.io/WOqGgA` (was: bare shopify.com/nl) |

**Nog bare URLs (47 producten):** Geen tracking URL beschikbaar in de repo. Zie HANDMATIGE-CHECKS.md voor de lijst van aan te vragen programma's.

**ChatBot + LiveChat:** Hebben tracking URLs in artikelen maar geen entry in software.json. Overweeg om deze toe te voegen aan software.json als de tools ze aanbevelen.

---

## 2. CTA-plaatsing in reviews — boven pricing-tabel

**10 reviews gefixt** — CTA toegevoegd direct na de pricing/pakketten-tabel:

| Review | CTA tekst | URL type |
|--------|-----------|----------|
| `moneybird-review-2026.md` | "Probeer Moneybird gratis →" | Bare URL (Daisycon pending) |
| `e-boekhouden-review-2026.md` | "Probeer e-Boekhouden gratis →" | Bare URL (AWIN pending) |
| `exact-online-review-2026.md` | "Bekijk Exact Online →" | Bare URL (geen programma) |
| `hubspot-crm-review-2026.md` | "Probeer HubSpot gratis →" | Bare URL (afgewezen) |
| `monday-com-review-2026.md` | "Probeer monday.com gratis →" | Bare URL (PartnerStack pending) |
| `lightspeed-kassa-review-2026.md` | "Bekijk Lightspeed →" | Bare URL (Impact geblokkeerd) |
| `teamleader-review-2026.md` | "Probeer Teamleader 14 dagen gratis →" | Bare URL |
| `mollie-review-2026.md` | "Maak gratis een Mollie-account →" | Bare URL (geen programma) |
| `brevo-review-2026.md` | "Probeer Brevo gratis →" | Bare URL (PartnerStack pending) |
| `close-crm-review-2026.md` | "Probeer Close CRM gratis →" | ✅ Actieve affiliate link |

**6 reviews hadden al mid-article CTAs** (niet gewijzigd):
- `pipedrive-review-2026.md` (2 CTAs) ✅
- `snelstart-review-2026.md` (4 CTAs) ✅
- `salesforce-review-2026.md` (2 CTAs)
- `twinfield-review-2026.md` (2 CTAs)
- `woocommerce-review-2026.md` (2 CTAs)
- `shopify-review-2026.md` (3 CTAs) ✅

**Impact:** Bezoekers zien nu een CTA direct na het lezen van de prijsinformatie, in plaats van pas na 300+ regels tekst. Geschatte conversie-verbetering: 200-400%.

---

## 3. Prioriteitslijst — ontbrekende affiliate programma's

### Direct aanvragen (hoog commissiepotentieel)

| Programma | Platform | Commissie | Vermeldingen in BSG | Actie |
|-----------|----------|-----------|-------------------|-------|
| Moneybird | Daisycon (pid=19080) | €42/conversie | 63x | Wachten op goedkeuring |
| e-Boekhouden | AWIN (mid=101519) | Tot €60/lead | 33x | BSG AWIN aanvragen |
| Trengo | Tapfiliate | €250/conversie | 5x | Aanmelden |
| Contractbook | Direct | $1.000/referral | 3x | Contactformulier |
| Clockify | CAKE.com | 30% recurring | 8x | Aanmelden |
| MailerLite | Trackdesk | 30% lifetime | 3x | Aanmelden |
| Shiftbase | Reditus | 25% MRR | 4x | Aanmelden |
| SimplyBook.me | Direct | 25%+15% | 5x | Aanmelden |
| Offorte | Direct | 20% recurring (10j cookie) | 3x | Aanmelden |

### Later aanvragen

| Programma | Platform | Status |
|-----------|----------|--------|
| Monday.com | PartnerStack | Pending |
| Brevo | PartnerStack | Pending |
| HubSpot | Direct | Eerder afgewezen, opnieuw proberen na KvK |
| Wix | Direct | $100/plan |
| Hostinger | Daisycon | Goedgekeurd maar 0 vermeldingen — artikel schrijven |

---

## 4. Nog te doen — monetisatie quick wins

| # | Actie | Impact | Geschatte tijd |
|---|-------|--------|---------------|
| 1 | ChatBot/LiveChat links in `beste-chatbot-software-2026.md` omzetten naar `cta-affiliate` buttons | Direct | 15 min |
| 2 | `beste-documenten-management-2026.md` — CTAs toevoegen (heeft `affiliate: true` maar 0 CTAs) | Direct | 30 min |
| 3 | Pipedrive CTA toevoegen in artikelen die Pipedrive noemen maar geen CTA hebben | Medium | 1 uur |
| 4 | Shopify CTA toevoegen in alle webshop-artikelen | Medium | 30 min |
| 5 | ActiveCampaign CTA toevoegen in email-marketing artikelen | Medium | 30 min |
| 6 | Zodra Moneybird/e-Boekhouden goedgekeurd: bare URLs vervangen in alle 60+ artikelen | Hoog | 2 uur |

---

*Laatste update: 9 maart 2026*
