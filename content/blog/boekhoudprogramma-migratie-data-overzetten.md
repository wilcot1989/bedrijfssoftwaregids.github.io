---
title: "Boekhoudprogramma migratie: data overzetten zonder verlies"
date: 2026-04-27
lastmod: 2026-04-27
description: "Overstappen naar een ander boekhoudprogramma? Stap-voor-stap migratieplan voor het overzetten van je administratie zonder dataverlies of BTW-problemen."
author: "Lars de Vries"
author_bio: "Onafhankelijke software vergelijker voor Nederlandse ondernemers."
featured_image: "images/categories/boekhouding.svg"
categories:
  - Blog
  - boekhouding
faq:
  - q: "Wanneer is het beste moment om van boekhoudprogramma te wisselen?"
    a: "Het ideale moment is aan het begin van een nieuw boekjaar, dus per 1 januari. Dan hoef je geen lopende boekingen te migreren en begin je met een schone administratie. De openingsbalans van het nieuwe jaar zet je over naar het nieuwe systeem. Als wisselen per 1 januari niet kan, is het begin van een nieuw kwartaal de op-een-na beste optie, omdat je BTW-aangifte dan netjes afsluit in het oude systeem."
  - q: "Verlies ik mijn factuurhistorie bij een overstap?"
    a: "Nee, als je het goed aanpakt niet. Exporteer altijd je volledige factuurhistorie als CSV of PDF voordat je het oude systeem opzegt. De meeste boekhoudpakketten bieden een exportfunctie voor facturen, klanten, leveranciers en grootboekrekeningen. Bewaar het oude systeem minimaal zeven jaar als backup vanwege de fiscale bewaarplicht, ook al gebruik je het niet meer actief."
  - q: "Moet ik mijn accountant betrekken bij een migratie?"
    a: "Ja, en liefst zo vroeg mogelijk. Je accountant kan de openingsbalans controleren, zorgen dat de grootboekrekeningen correct worden gemapt naar het nieuwe systeem, en bevestigen dat de BTW-codes goed zijn ingesteld. Als je accountant een voorkeur heeft voor een bepaald pakket, weeg dat mee in je keuze. Samenwerken in hetzelfde systeem bespaart beiden veel tijd."
  - q: "Hoelang duurt een boekhoudmigratie gemiddeld?"
    a: "Voor een ZZP'er of eenmanszaak met een eenvoudige administratie kan de migratie in een dag klaar zijn. Voor een BV met meerdere bankrekeningen, openstaande facturen en complexe BTW-situaties moet je rekenen op een tot twee weken. Plan altijd een parallel-periode van minimaal één maand waarin je beide systemen naast elkaar draait om fouten op te sporen."
tags:
  - boekhouding
  - mkb
---

Een tijdje terug sprak ik een ondernemer — eigenaar van een klein installatiebedrijf met vier medewerkers — die drie maanden aan factuurhistorie kwijt was. Niet door een hack, niet door een servercrash, maar door een migratie die misliep.

Hij had in november besloten over te stappen van zijn oude boekhoudpakket naar een nieuwer systeem. Haastig, want hij ergerde zich al maanden aan de trage interface. Hij maakte een account aan in het nieuwe systeem, koppelde zijn bankrekening, en zegde zijn oude abonnement op. Wat hij vergat: de export draaien. Twee weken later, toen hij een klant een factuurkopie moest sturen, bleek zijn oude omgeving al afgesloten. De leverancier bewaarde data standaard zestig dagen na opzegging. Die termijn was net verstreken.

Drie maanden aan facturen — weg. Zijn accountant moest retroactief alles reconstrueren op basis van bankafschriften. Dat kostte hem ruim €800 aan accountantsuren, plus een reparatieaangifte voor de BTW.

Dit verhaal is niet uitzonderlijk. Ik hoor vergelijkbare varianten regelmatig van ondernemers die me raadplegen. En het is volledig te voorkomen, mits je de migratie stap voor stap aanpakt. Hieronder leg ik precies uit hoe.

---

## Wanneer overstappen? Het juiste moment kiezen

Timing is bij een boekhoudmigratie geen bijzaak. Het verkeerde moment kiezen maakt alles ingewikkelder dan nodig.

**Het beste moment: 1 januari.** Begin van een nieuw boekjaar betekent een schone lei. Je sluit het oude jaar af in je huidige systeem, laat je accountant de jaarrekening afmaken, en start het nieuwe jaar in het nieuwe pakket met alleen een openingsbalans. Geen gedeeltelijk gemigeerde boekingen, geen BTW-periodes die half in het ene en half in het andere systeem zitten.

**Op een na beste: begin van een kwartaal.** Als je per 1 januari niet kunt of wilt wachten, kies dan voor 1 april, 1 juli of 1 oktober. Je BTW-aangifte Q1 doe je dan volledig in het oude systeem, en vanaf Q2 werk je in het nieuwe. Dat scheelt enorm in het controleren of je aangifte klopt.

**Wat je moet vermijden:** midden in een kwartaal overstappen, terwijl je ook nog openstaande facturen hebt en een bankreconciliatie die niet helemaal klopt. Dan stapel je problemen op problemen.

Kijk daarnaast naar je contracttermijn. Veel boekhoudpakketten hebben jaarcontracten. Wil je niet dubbel betalen, plan je overstap dan vlak voor de contractverlenging. De meeste aanbieders sturen een herinnering 30 dagen van tevoren — dat is je signaal om te beginnen met voorbereiden.

Twijfel je welk pakket je nieuwe thuis wordt? Doe eerst de [boekhouding keuzehulp](/tools/boekhouding/keuzehulp/) voordat je ergens aan vastlegt. Dan sta je straks niet na drie maanden opnieuw voor een migratie.

---

## Stap 1: Data exporteren uit je oude systeem

Voordat je ook maar één instelling aanraakt in je nieuwe omgeving, exporteer je alles uit het oude systeem. Alles. Niet alleen wat je denkt nodig te hebben.

**Wat je exporteert:**

- **Klantenlijst** — naam, adres, KvK-nummer, BTW-nummer, IBAN. Export als CSV.
- **Leverancierslijst** — zelfde velden, inclusief betalingstermijnen.
- **Volledige factuurhistorie** — zowel verkoopfacturen als inkoopfacturen, bij voorkeur als PDF én als CSV/Excel. De PDF's zijn je juridisch bewijs; de CSV's heb je nodig als je later wilt zoeken of analyseren.
- **Openstaande posten** — welke facturen zijn nog niet betaald? Dit is je debiteuren- en crediteurenlijst op migratiedatum.
- **Grootboekrekeningen en -saldi** — exporteer het volledige rekeningschema inclusief saldi per rekening op de migratiedatum.
- **Bankmutaties** — download minimaal de afgelopen drie jaar als CSV rechtstreeks van je bank, los van je boekhoudprogramma. Bankafschriften zijn je meest betrouwbare bron.
- **BTW-overzichten** — exporteer je BTW-aangiftes van de afgelopen jaren als PDF.

Sla alles op in een map met de datum erin, zoals `export_oud_systeem_2026-01-01`. Maak een kopie op een externe schijf of in cloudopslag. En: zeg je abonnement pas op als je zeker weet dat alles exporteerbaar is geweest en je de data hebt geverifieerd. Niet andersom.

Ik raad aan de export te doen en daarna het oude systeem nog minstens dertig dagen actief te laten. Je zult de data vaker nodig hebben dan je denkt tijdens de inrichtingsfase.

---

## Stap 2: Je administratie opschonen voor de migratie

Een migratie is een uitgelezen moment om je administratie op te ruimen. Rommel meenemen naar een nieuw systeem heeft geen zin.

**Bankreconciliatie afsluiten.** Zorg dat alle bankmutaties tot de migratiedatum zijn verwerkt en dat het saldo in je boekhoudprogramma overeenkomt met het saldo op je bankafschrift. Als dit niet klopt, los het nu op. In het nieuwe systeem begin je anders met een openingsbalans die al fout is.

**Openstaande facturen opschonen.** Stuur aanmaningen voor facturen die al lang openstaan. Schrijf oninbare vorderingen definitief af. Een openstaande-posten-lijst met twintig facturen van drie jaar geleden is geen actieve administratie, dat is digitaal puin. Hoe minder openstaande posten je meeneemt, hoe eenvoudiger de migratie.

**Rekeningschema doorlichten.** Heb je rekeningen die je al jaren niet gebruikt? Zet ze op inactief of verwijder ze. Het nieuwe systeem heeft zijn eigen standaardrekeningschema (vaak gebaseerd op het RGS, het Referentie GrootboekSchema). Hoe dichter jouw huidige schema daar al bij zit, hoe minder handmatig mapping-werk je hebt.

**BTW-aangifte actueel houden.** Als je midden in een kwartaal overstapt (wat ik liever niet adviseer), zorg dan dat alle BTW-boekingen tot de migratiedatum correct zijn. Je accountant heeft anders een nachtmerrie bij de afsluiting.

Zie ook: [boekhoudsoftware vs. boekhouder — wat kost wat?](/blog/boekhoudsoftware-vs-boekhouder-kostenvergelijking/) als je twijfelt hoeveel je accountant hierbij moet inschakelen.

---

## Stap 3: Het nieuwe systeem inrichten

Nu je data netjes is en je exports staan klaar, richt je het nieuwe systeem in voordat je ook maar één transactie importeert.

**Rekeningschema instellen.** De meeste moderne pakketten leveren een standaardrekeningschema mee. Vergelijk dit met je oude schema en map de rekeningen handmatig waar nodig. Dit is het moment om je accountant te betrekken — die weet welke rekeningen je fiscaal nodig hebt en hoe ze moeten heten.

**BTW-codes configureren.** Controleer of alle BTW-tarieven kloppen: 21%, 9%, 0% en vrijgesteld. Let op bijzondere situaties zoals de KOR (Kleineondernemersregeling), intracommunautaire leveringen of bouw-gerelateerde verlegging. Eén verkeerde BTW-code kan maanden later voor problemen zorgen bij de aangifte.

**Bankkoppelingen instellen.** Koppel je zakelijke rekening(en) via de directe bankkoppeling, niet via een handmatige import. De meeste pakketten ondersteunen tegenwoordig open banking. Test de koppeling door te controleren of de meest recente mutaties correct binnenkomen.

**Factuursjablonen aanmaken.** Stel je factuurlayout in met je logo, adresgegevens, KvK-nummer, BTW-nummer en IBAN. Stuur een testfactuur naar jezelf voordat je de eerste echte factuur verstuurt.

**Klanten en leveranciers importeren.** Importeer je klantenlijst en leverancierslijst via CSV. Controleer daarna steekproefsgewijs twintig records op juistheid. Typefouten in BTW-nummers of IBANs veroorzaken problemen bij betalingen en factuurverificatie.

---

## Stap 4: De openingsbalans overzetten

De openingsbalans is het fundament van je nieuwe administratie. Als die niet klopt, klopt er daarna nooit iets.

**Wat staat op de openingsbalans:**

- Banktegoeden op migratiedatum (per rekening)
- Debiteuren: openstaande verkoopfacturen (totaalbedrag per klant of per factuur)
- Crediteuren: openstaande inkoopfacturen (totaalbedrag per leverancier of per factuur)
- Voorraden (als je die bijhoudt)
- Vaste activa (bedrijfsauto, apparatuur) met boekwaarden
- Leningen en schulden
- Eigen vermogen (het sluitende saldo)

**Hoe verifieer je de openingsbalans:**

Vergelijk het totaal van je debiteuren in de openingsbalans met je openstaande-posten-lijst uit het oude systeem. Die twee moeten overeenkomen op de cent. Doe hetzelfde voor crediteuren. Vergelijk de banktegoeden met je bankafschriften op migratiedatum.

**Veelgemaakte fouten:**

- Vergeten om openstaande facturen in te voeren als losse posten. Ze komen dan wel op de balans terecht (als totaalsom debiteuren), maar zijn niet meer traceerbaar per klant. Dat geeft problemen als je een specifieke betaling wil matchen.
- BTW-saldo vergeten. Als je eind van het kwartaal overstapte en er stond nog een te betalen of te ontvangen BTW-bedrag op de balans van het oude systeem, moet dat ook op de openingsbalans van het nieuwe systeem.
- Eigen vermogen als restpost behandelen zonder controle. Het eigen vermogen is het sluitende saldo, maar het moet kloppen met je jaarrekening uit het oude systeem.

Lees ook: [BTW-regels voor ZZP in 2026](/blog/btw-regels-zzp-2026/) als je niet zeker weet hoe je de BTW-positie in de openingsbalans verwerkt.

---

## Stap 5: Parallel draaien en controleren

Dit is de stap die de meeste ondernemers overslaan, en dat is precies waarom migraties misgaan.

Draai beide systemen minimaal één maand naast elkaar. Dat betekent: elke transactie voer je in beide systemen in. Ja, dat is dubbel werk. Maar het is de enige manier om te controleren of het nieuwe systeem correct werkt voordat je het oude afsluit.

**Wat je vergelijkt:**

- Banksaldo einde maand: klopt het in het nieuwe systeem met het bankafschrift?
- BTW-aangifte van de testmaand: komt de berekening in het nieuwe systeem overeen met die in het oude?
- Openstaande debiteuren en crediteuren: kloppen die na een maand van betalingen en nieuwe facturen nog met de werkelijkheid?
- Winst-en-verliesrekening: liggen de omzet- en kostencijfers in lijn met de verwachting?

Als je na een maand parallel draaien geen afwijkingen vindt, is het veilig om het oude systeem op stand-by te zetten. Niet opzeggen — stand-by. Opzeggen doe je pas als je zeker weet dat alles klopt en je fiscale bewaarplicht voor de historische data is afgedekt.

**Fiscale bewaarplicht:** je bent verplicht je administratie zeven jaar te bewaren. Dat geldt ook voor het boekhoudprogramma als je er digitale facturen en boekingen in hebt zitten. Exporteer de volledige historische data als PDF en CSV, en bewaar die extern. Daarna kun je het abonnement opzeggen. Maar die exports heb je dan wel nodig bij een eventuele belastingcontrole.

Wil je weten welke pakketten de beste exportmogelijkheden bieden? Bekijk mijn vergelijking van de [beste boekhoudsoftware voor ZZP in 2026](/blog/beste-boekhoudsoftware-zzp-2026/) of lees [7 vragen die je jezelf moet stellen bij het kiezen van een boekhoudprogramma](/blog/boekhoudprogramma-kiezen-7-vragen/).

---

## Mijn advies: neem de tijd en betrek je accountant

Een boekhoudmigratie is geen zaterdagmiddagproject. Voor een ZZP'er met een eenvoudige administratie is één dag realistisch. Voor een BV met meerdere bankrekeningen, openstaande posten en een complexe BTW-structuur moet je rekenen op een tot twee weken voorbereidingstijd, plus een maand parallel draaien.

Betrek je accountant van het begin. Niet als control op het einde, maar als medeplanner. Je accountant weet hoe de grootboekrekeningen gemapt moeten worden, welke openingsbalanssaldi fiscaal correct zijn, en hoe de BTW-overgang administratief verwerkt moet worden. Als je accountant al met een bepaald pakket werkt en jij stapt over naar hetzelfde, bespaar je beiden uren aan afstemming. Dat is een argument dat zwaarder weegt dan welke feature-vergelijking dan ook.

Tot slot: opzeg je oude abonnement nooit voordat je weet dat alle data geëxporteerd is, geverifieerd is, en veilig is opgeslagen. Die installateur verloor zijn facturen omdat hij te snel klikte op "abonnement opzeggen". Dat is een fout van vijf seconden met maanden aan gevolgen.

Een goede migratie duurt langer dan je wil. Een slechte migratie duurt langer dan je ooit verwachtte.

---

## Lees ook

- [7 vragen die je moet stellen bij het kiezen van een boekhoudprogramma](/blog/boekhoudprogramma-kiezen-7-vragen/)
- [Beste boekhoudsoftware voor ZZP in 2026: eerlijk vergeleken](/blog/beste-boekhoudsoftware-zzp-2026/)

Gebruik de [boekhouding keuzehulp](/tools/boekhouding/keuzehulp/) om het juiste pakket te vinden voordat je migreert. Wil je ook de kosten vergelijken? Gebruik de [boekhoudsoftware kosten berekenen tool](/tools/boekhouding/kosten-berekenen/) om te zien wat een nieuw pakket je per jaar kost in jouw situatie.
