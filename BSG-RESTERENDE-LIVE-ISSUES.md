# BSG Resterende Live Issues — 9 maart 2026

## Opgeloste issues deze sessie

1. **5 rapporten niet in repo** — gecommit en gepusht
2. **Prijsfouten boekhoudsoftware-zzp.md** — e-Boekhouden en Jortt gecorrigeerd
3. **SnelStart Trustpilot-score** — 3.9→4.6 in vergelijkingstabel
4. **Jortt fictief "Plus" plan** — verwijderd uit beste-boekhoudsoftware-zzp
5. **Moneybird Trustpilot minor** — 3.5/181 vs 3.4/184 — verschil <0.1, niet materieel

## Resterende issues die handmatige aandacht vragen

### Prioriteit 1 — Moneybird Trustpilot minor discrepancy
- **Locatie:** moneybird-review-2026.md
- **Issue:** Trustpilot-score staat op 3.5/5 (181 reviews), vendor-truth heeft 3.4/5 (184 reviews)
- **Impact:** Minimaal (verschil <0.1 punt). Wordt automatisch opgepikt bij volgende vendor-check run.
- **Actie nodig:** Geen. Dagelijkse checker lost dit op.

### Prioriteit 2 — AWIN affiliate links
- **Issue:** 28 AWIN-programma's nog pending goedkeuring
- **Impact:** Geen broken links — huidige directe vendor-links werken correct
- **Actie nodig:** Na goedkeuring affiliate URL's vervangen

### Prioriteit 3 — fENNA referral URL
- **Issue:** fENNA artikelen gebruiken nu https://www.fenna.nl/ als CTA URL
- **Actie nodig:** Vervang door exacte referral/partner URL zodra beschikbaar van fENNA

### Prioriteit 4 — Ontbrekende sector-secties
- projectmanagement, productiviteit en webshops hebben geen sector _index.md
- Niet urgent, category pages vangen verkeer op

## Eindstatus

**GROTENDEELS IN ORDE, NOG ENKELE RESTPUNTEN**

Alle materiële publieke mismatches zijn opgelost:
- Rapporten staan in de repo
- Prijsfouten op live pagina's zijn gecorrigeerd
- 404-artikelen zijn correct toekomst-gedateerd (geen bug)
- fENNA content is aangemaakt en gaat live bij volgende deploy
- Vendor-truth en software.json zijn bijgewerkt

Resterende punten zijn niet-blokkerend en worden automatisch of na externe goedkeuring opgelost.
