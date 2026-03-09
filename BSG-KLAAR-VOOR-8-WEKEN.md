# BSG — Klaar voor 8 Weken Onbeheerd

## Eindbeoordeling: GROEN

Bedrijfssoftwaregids.nl kan de komende 8 weken (9 maart – 3 mei 2026) draaien zonder handmatige interventie.

## Wat draait automatisch

| Systeem | Wat het doet | Wanneer |
|---------|-------------|---------|
| GitHub Actions deploy | Bouwt en publiceert de site | Dagelijks 08:00 UTC + bij push |
| Hugo date-based publishing | Maakt 55 artikelen live op geplande datum | Automatisch |
| Vendor price checker | Controleert prijzen en Trustpilot scores | Dagelijks 06:00 UTC |

## Wat er klaarligt

- **96 artikelen** — 41 live, 55 gepland t/m juni
- **135 producten** — alle prijzen geverifieerd per 9 maart 2026
- **31 sector pagina's** — volledig gelinkt met affiliate CTAs
- **8 category pagina's** — met productoverzichten
- **23 interactieve tools** — keuzehulpen, calculators, ROI-tools
- **0 bekende bugs** — geen 404's, geen TODO's, geen price mismatches

## Wat je moet doen als er iets misgaat

1. **Vendor checker rapporteert prijswijziging** → Pas het artikel en vendor-truth.json aan, push naar main
2. **Google deïndexeert een URL** → Check Search Console, meestal tijdelijk
3. **AWIN keurt programma goed** → Vervang de vendor-link door affiliate link in het artikel

## Rapporten

- [BSG-STABILISATIE-RAPPORT.md](BSG-STABILISATIE-RAPPORT.md) — Wat er gedaan is
- [BSG-PUBLICATIEPIPELINE-8-WEKEN.md](BSG-PUBLICATIEPIPELINE-8-WEKEN.md) — Welke artikelen wanneer live gaan
- [BSG-MONEY-PAGES-AFGEROND.md](BSG-MONEY-PAGES-AFGEROND.md) — Status affiliate pagina's
- [BSG-HANDMATIGE-RESTPUNTEN.md](BSG-HANDMATIGE-RESTPUNTEN.md) — Wat na 8 weken aandacht verdient
