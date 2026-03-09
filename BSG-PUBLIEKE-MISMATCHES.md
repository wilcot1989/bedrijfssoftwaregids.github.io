# BSG Publieke Mismatches — Forensische Audit 9 maart 2026

## 1. Rapporten niet in repo (OPGELOST)

**Claim:** 5 stabilisatie-rapporten aangemaakt en opgeleverd.
**Realiteit:** Bestanden waren lokaal aangemaakt maar NOOIT gecommit of gepusht naar de repo.

| Bestand | Status vorige sessie | Publiek zichtbaar | Fix |
|---------|---------------------|-------------------|-----|
| BSG-KLAAR-VOOR-8-WEKEN.md | "aangemaakt" | Nee (untracked) | Gecommit in deze sessie |
| BSG-STABILISATIE-RAPPORT.md | "aangemaakt" | Nee (untracked) | Gecommit in deze sessie |
| BSG-PUBLICATIEPIPELINE-8-WEKEN.md | "aangemaakt" | Nee (untracked) | Gecommit in deze sessie |
| BSG-MONEY-PAGES-AFGEROND.md | "aangemaakt" | Nee (untracked) | Gecommit in deze sessie |
| BSG-HANDMATIGE-RESTPUNTEN.md | "aangemaakt" | Nee (untracked) | Gecommit in deze sessie |

**Oorzaak:** De rapporten werden aangemaakt aan het einde van een sessie. De commit + push stap is niet meer uitgevoerd voordat de context vol liep.

## 2. Artikelen met 404 (VERWACHT GEDRAG)

**Claim:** Batch 1 artikelen live op 9-12 maart.
**Observatie:** Drie artikelen geven 404 op 9 maart.

| Artikel | Date in frontmatter | Live op | 404 op 9 mrt | Oorzaak |
|---------|-------------------|---------|--------------|---------|
| teamleader-review-2026 | 2026-03-10 | 10 mrt 08:00 UTC | Verwacht | Date in toekomst |
| mollie-review-2026 | 2026-03-10 | 10 mrt 08:00 UTC | Verwacht | Date in toekomst |
| shopify-vs-mijnwebwinkel-2026 | 2026-03-12 | 12 mrt 08:00 UTC | Verwacht | Date in toekomst |

**Conclusie:** Geen bug. Hugo bouwt geen pagina's met toekomstige datum (`buildFuture = false`). De artikelen gaan automatisch live op hun geplande datum via de dagelijkse deploy om 08:00 UTC.

**Verificatie:** Bestanden staan correct in content/blog/, slug klopt, geen draft/unlisted flag, section is correct.

## 3. Prijsinconsistenties op live pagina's (OPGELOST)

**Gevonden en gefixt:**

| Bestand | Probleem | Fix |
|---------|---------|-----|
| boekhoudsoftware-zzp.md | e-Boekhouden €8,95 (correct: €9,95) | €9,95 |
| boekhoudsoftware-zzp.md | Jortt Compleet €14 (correct: €19,95) | €19,95 |
| boekhoudsoftware-zzp.md | e-Boekhouden "Zakelijk" €12,95 (correct: ZZP-pakket €14,50) | Correcte naam + prijs |
| boekhoudsoftware-zzp.md | Vergelijkingstabel prijzen fout | Gecorrigeerd |
| beste-boekhoudsoftware-zzp-2026.md | SnelStart Trustpilot 3.9 (correct: 4.6) | 4.6 |
| beste-boekhoudsoftware-zzp-2026.md | Jortt "Plus" €34,95 (plan bestaat niet) | Verwijderd |

## 4. Deploy-status

- Laatste push: commit 4a4b96e (9 maart)
- GitHub Actions: deploy draait op push + dagelijks 08:00 UTC
- Branch: main (correct)
- Geen build failures gedetecteerd
- Scheduled deploy config: `.github/workflows/scheduled-deploy.yml` aanwezig
