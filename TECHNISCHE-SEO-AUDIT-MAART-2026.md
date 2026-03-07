# Technische SEO Audit — bedrijfssoftwaregids.nl

**Datum:** 7 maart 2026
**Overall score:** 8.2 / 10
**Doel:** 10/10 via gefaseerd actieplan

---

## A. Samenvatting

**Algemene status:** De site is technisch solide gebouwd met Hugo SSG. Structured data, performance en mobile zijn sterk. Belangrijkste risico's zitten in monitoring (37 tool pages zonder GA4) en content architectuur (sectoren-sectie is een "dark section").

**Grootste risico's:**
1. 37 tool pages zonder GA4 — nul data over je hoogst-converterende pagina's
2. Duplicate content: Pipedrive review + sectoren/blog makelaars overlap
3. 12 meta descriptions >155 chars

**Grootste kansen:**
1. GA4 op tools → conversie-data voor affiliate optimalisatie
2. Sectoren-architectuur fixen → 25 artikelen beter vindbaar maken
3. ItemList/Review schema → rich snippets voor vergelijkingsartikelen

---

## B. Score-overzicht

| # | Categorie | Score | Status |
|---|-----------|-------|--------|
| 1 | Crawlbaarheid & Indexatie | 8/10 | Tool pages in sitemap, namespace correct |
| 2 | On-page SEO | 8/10 | 12 descriptions te lang, 1 duplicate |
| 3 | Interne Links | 8/10 | Goed, sectoren-overlap |
| 4 | Structured Data | 9/10 | Sterk, Organization mist standalone |
| 5 | Performance | 9/10 | Self-hosted fonts, inline CSS, async GA4 |
| 6 | Mobile | 9/10 | Responsive, hamburger menu, table scroll |
| 7 | Internationale SEO | 9/10 | Correct voor NL-only site |
| 8 | Security & Canonical | 9/10 | HTTPS, canonicals correct |
| 9 | Content Architectuur | 7/10 | Sectoren buiten taxonomie |
| 10 | Monitoring | 7/10 | GA4 mist op 37 tool pages |

---

## C. Kritieke problemen

### 1. 37 tool pages zonder GA4 (KRITIEK)
- Alle statische HTML tool-pagina's in `/static/tools/` hebben GEEN GA4 tracking
- Dit zijn de hoogst-converterende pagina's (keuzehulpen, calculators)
- Nul data over gebruik, bounces, affiliate kliks op tools
- **Fix:** Voeg consent-aware GA4 snippet toe aan elk tool-template

### 2. Duplicate Pipedrive artikelen (HOOG)
- `pipedrive-review-2026.md` (live, 6 mrt) EN `pipedrive-review-nederland-2026.md` (future, 11 mrt)
- Beide targetten "pipedrive review" keywords → keyword cannibalisatie
- **Fix:** Verwijder of merge één van de twee, of voeg canonical toe

### 3. Sectoren-sectie is onzichtbaar (HOOG)
- 25 sectoren-artikelen hebben GEEN `categories:` veld → buiten taxonomie
- `/sectoren/` heeft geen root `_index.md` → geen landingspagina
- Sectoren staan niet in het navigatiemenu → "dark section"
- Overlap: `blog/crm-voor-makelaars-2026.md` + `sectoren/crm/crm-voor-makelaars.md`
- **Fix:** Voeg categories toe, maak _index.md, link vanuit nav of blog

---

## D. Middelgrote verbeterpunten

### 4. 12 meta descriptions >155 chars
| Artikel | Lengte |
|---------|--------|
| activecampaign-vs-mailchimp-2026.md | 170 |
| beste-planning-software-horeca-2026.md | 167 |
| beste-webshop-software-2026.md | 163 |
| beste-afspraken-software-2026.md | 162 |
| close-crm-review-2026.md | 162 |
| + 7 andere | 156-161 |

### 5. Geen standalone Organization schema
- Organization zit alleen nested als publisher in Article/WebSite
- Google heeft moeite dit te lezen voor entity-building
- **Fix:** Voeg apart Organization JSON-LD block toe op homepage

### 6. priceValidUntil hardcoded op 2026-12-31
- In `schema-webapp.html` — wordt eind 2026 verouderd
- **Fix:** Maak dynamisch of verleng jaarlijks

### 7. Privacy pagina op noindex
- Privacy/disclaimer is een trust-signaal voor Google E-E-A-T
- **Fix:** Verwijder noindex van privacy.md

---

## E. Quick wins

### 8. Projectmanagement categorie uitbreiden
- Slechts 3 artikelen voor een prominente nav-positie
- Maakt dunne indruk op Google

### 9. Article → Review/ItemList schema
- "Beste X" vergelijkingsartikelen gebruiken generiek Article schema
- ItemList of Product+Review geeft kans op rich snippets
- **Fix:** Overweeg schema-type aanpassen voor pillar-artikelen

### 10. Skip-to-content link
- Geen skip-to-content link voor screenreaders
- Kleine accessibility verbetering

---

## F. Roadmap naar 10/10

### Fase 1 — DIRECT (score 8.2 → 9.0)

| # | Actie | Impact | Effort |
|---|-------|--------|--------|
| 1 | GA4 toevoegen aan 37 tool pages | Kritiek | Hoog |
| 2 | Fix/merge duplicate Pipedrive artikel | Hoog | Laag |
| 3 | Verkort 12 descriptions tot ≤155 chars | Hoog | Medium |
| 4 | Sectoren _index.md aanmaken | Medium | Laag |

### Fase 2 — BINNENKORT (score 9.0 → 9.5)

| # | Actie | Impact | Effort |
|---|-------|--------|--------|
| 5 | Categories toevoegen aan 25 sectoren-artikelen | Medium | Medium |
| 6 | Standalone Organization schema | Medium | Laag |
| 7 | Privacy pagina deindexen ongedaan maken | Laag | Laag |
| 8 | Canonical op sectoren/blog overlap | Medium | Laag |

### Fase 3 — LATER (score 9.5 → 10)

| # | Actie | Impact | Effort |
|---|-------|--------|--------|
| 9 | ItemList/Review schema voor pillar artikelen | Medium | Hoog |
| 10 | priceValidUntil dynamisch maken | Laag | Laag |
| 11 | Projectmanagement cluster uitbreiden | Medium | Hoog |
| 12 | CSS externaliseren | Laag | Medium |

---

## Sterke punten (behouden)

- Self-hosted Inter font met font-display: swap (geen Google Fonts dependency)
- Consent Mode v2 volledig geïmplementeerd (analytics + ad_storage)
- Conditioneel GA4 laden alleen na consent
- 24 tool pages hardcoded in sitemap met correcte namespace
- Alle 97 artikelen hebben lastmod
- FAQPage + WebApplication schema dynamisch via frontmatter
- Tag pagina's met <3 artikelen op noindex (thin content preventie)
- Content calendar systeem met buildFuture=false + daily deploy
