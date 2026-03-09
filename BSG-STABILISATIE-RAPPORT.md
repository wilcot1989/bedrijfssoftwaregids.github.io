# BSG Stabilisatie Rapport — 9 maart 2026

## Samenvatting

Bedrijfssoftwaregids.nl is productie-gestabiliseerd voor 8 weken onbeheerd draaien. Alle bekende issues zijn opgelost, de publicatiepipeline is dichtgezet, en geautomatiseerde checks draaien dagelijks.

## Uitgevoerde acties

### Wave 1: Prijzen & Crawler (commits d0ea587 – f679b5d)
- **135 producten** in vendor-truth.json — alle prijzen handmatig geverifieerd
- **40+ prijscorrecties** in 22+ artikelen (InformerOnline, Jortt, Twinfield, Gripp, Lightspeed eCom, Wix, Klaviyo, CCV Shop, Nmbrs, HubSpot Service Hub, Untill Air, Brevo, Notion, Tidio, etc.)
- **Trustpilot scores** bijgewerkt voor alle producten met score-wijzigingen
- **Daily vendor checker** gecommit: `scripts/check-vendor-prices.py` + `.github/workflows/vendor-check.yml` (draait 06:00 UTC)
- **software.json** gesynchroniseerd met vendor-truth

### Wave 2: Productie-stabilisatie (commit 4a4b96e)
- **50 frontmatter fixes** — `affiliate: true/false` op alle artikelen
- **8 CTA-structuur fixes** — early CTAs toegevoegd, rel-attributen gecorrigeerd, ontbrekende CTAs aangevuld
- **21 interne linking fixes** — orphan reviews aangesloten (snelstart, twinfield, pipedrive, salesforce, shopify), cross-category links
- **2 datumconflicten** opgelost — max 2 artikelen per dag gegarandeerd
- **1 marketing sector 404** fix — `/tools/marketing/roi-berekenen/` → `/tools/marketing/lead-roi-berekenen/`
- **2 meta description** lengte fixes (snelstart-review, crm-voor-saas-startups)

## Huidige status

| Metric | Waarde |
|--------|--------|
| Totaal artikelen | 96 (41 live, 55 gepland) |
| Sector pagina's | 31 (6 _index + 25 subpagina's) |
| Category pagina's | 8 |
| Interactieve tools | 23 |
| Producten in vendor-truth | 135 |
| Bekende 404's | 0 |
| TODO/FIXME in content | 0 |
| Prijzen up-to-date | 100% |

## Geautomatiseerde systemen

| Systeem | Schema | Status |
|---------|--------|--------|
| Hugo deploy | Daily 08:00 UTC + on push | Actief |
| Vendor price check | Daily 06:00 UTC | Actief |
| Publicatiepipeline | date-based, 55 artikelen | Dichtgezet t/m juni |

## Restpunten (niet-blokkerend)

Zie BSG-HANDMATIGE-RESTPUNTEN.md voor items die aandacht verdienen na de 8-weken periode.
