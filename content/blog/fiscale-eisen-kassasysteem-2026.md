---
title: "Fiscale eisen kassasysteem 2026: dit moet je weten"
date: 2026-03-18
lastmod: 2026-03-18
description: "Welke fiscale eisen stelt de Belastingdienst aan kassasystemen in 2026? Bewaarplicht, BTW-registratie en boeterisico's. Voorkom problemen bij controle."
author: "Lars de Vries"
author_bio: "B2B software consultant en oprichter van Bedrijfssoftwaregids.nl. Lars test zakelijke software hands-on en helpt Nederlandse ondernemers de juiste keuze te maken."
featured_image: "/images/categories/kassasystemen.svg"
categories:
  - kassasystemen
faq:
  - q: "Wat zijn de boetes als mijn kassasysteem niet voldoet aan de bewaarplicht?"
    a: "Als de Belastingdienst constateert dat je transactiegegevens niet volledig bewaard zijn of niet meer reproduceerbaar zijn, kan zij de bewijslast omdraaien: jij moet dan bewijzen dat jouw BTW-aangifte klopt, in plaats van dat de inspecteur dat moet aantonen. Praktisch gezien leidt dat bijna altijd tot een naheffing en een vergrijpboete van maximaal 100% van het nageheven bedrag. Bij opzet of grove nalatigheid kan dit oplopen. Preventie is dus veel goedkoper dan de afwikkeling."
  - q: "Voldoet een iPad-kassasysteem aan de fiscale eisen?"
    a: "Ja, een iPad-gebaseerd kassasysteem zoals Lightspeed of Square kan volledig voldoen aan de Nederlandse fiscale eisen, mits het systeem alle transacties loggt, die logs niet verwijderbaar zijn zonder administratieve sporen, en de gegevens 7 jaar bewaard blijven in een reproduceerbaar format. De hardware zelf doet er niet toe — het gaat om de software en de dataopslag. Controleer bij de leverancier hoe lang transactiedata bewaard wordt in hun cloudopslag en of je die data kunt exporteren."
  - q: "Hoe lang moet ik kassagegevens bewaren?"
    a: "7 jaar. Dat is de standaard fiscale bewaarplicht in Nederland voor de meeste administratieve gegevens (artikel 52 AWR). De klok begint te lopen op het moment dat het boekjaar afsluit. Bewaar niet alleen de dagstaten, maar ook de onderliggende transactiedata: elk bon, elke annulering, elke prijswijziging en elke kassalade-opening. De Belastingdienst kan tot 5 jaar na dato een boekenonderzoek aanvragen, bij vermoedens van fraude zelfs langer."
  - q: "Is er een verplichte fiscale keurmerkcertificering voor kassasystemen in Nederland?"
    a: "Nee. In Nederland bestaat geen verplichte overheidscertificering voor kassasystemen, anders dan in Duitsland (TSE) of Italië (RT). Elk kassasysteem dat technisch voldoet aan de bewaarplicht en BTW-registratie is in principe geschikt. De verantwoordelijkheid voor correcte inrichting en gebruik ligt bij de ondernemer, niet bij een goedkeurende instantie. Dat maakt het ook lastiger: je kunt niet simpelweg een gecertificeerd systeem aanschaffen en klaar zijn — je moet zelf controleren of de configuratie klopt."
tags:
  - kassasysteem
  - mkb
affiliate: true
---

Vorig jaar deed een klant van mij mee aan een boekenonderzoek van de Belastingdienst. Niets bijzonders, dacht hij. Zijn omzet was netjes aangegeven, de BTW-aangiften waren op tijd ingediend. Maar de inspecteur vroeg om de ruwe transactielogs van zijn kassasysteem over de afgelopen drie jaar.

Probleem: zijn kassasysteem had automatisch bondata ouder dan twaalf maanden verwijderd. Standaard ingesteld door de leverancier. Niemand had hem dit verteld bij aanschaf. Niemand had hem gewaarschuwd bij de jaarlijkse update.

Het resultaat: een naheffing op basis van een schatting door de Belastingdienst, plus een vergrijpboete. De totale schade liep in de tienduizenden euro's — niet omdat hij sjoemelde, maar omdat zijn kassasysteem niet goed was geconfigureerd.

Dit soort situaties zie ik vaker dan je zou denken. En ze zijn volledig vermijdbaar als je weet waar je op moet letten.

## Wat eist de Belastingdienst van je kassasysteem?

Nederland heeft geen verplichte overheidscertificering voor kassasystemen. Dat is anders dan in Duitsland (waar de TSE-verplichting geldt) of Italië (met de RT-registratieplicht). Een Nederlands kassasysteem hoeft dus niet goedgekeurd te worden door een officiële instantie.

Maar dat betekent niet dat er geen eisen zijn. De eisen die gelden komen voort uit twee bronnen:

**De Algemene Wet inzake Rijksbelastingen (AWR)**, met name artikel 52, stelt dat je als ondernemer een administratie moet voeren die voldoet aan de eisen, en die je 7 jaar moet bewaren. Voor een kassa betekent dat: alle transactiedata moet volledig, juist en controleerbaar zijn.

**De Wet op de Omzetbelasting**, die bepaalt dat je omzet correct moet worden gesplitst naar BTW-tarief — 9% voor de lage categorie (eten, bepaalde diensten), 21% voor de hoge categorie, en in sommige gevallen 0% of vrijgesteld.

Wat de Belastingdienst feitelijk van je kassasysteem verwacht:
- Elke transactie moet worden geregistreerd en reproduceerbaar zijn
- Correcties en annuleringen moeten zichtbaar zijn — je kunt geen bon wissen zonder dat er een spoor achterblijft
- BTW-splits moeten juist worden berekend en geregistreerd per tarief
- De data moet 7 jaar beschikbaar zijn in leesbaar formaat
- Je moet bij een controle de gegevens kunnen aanleveren aan de inspecteur

Het gaat dus niet om het merk of type van je kassasysteem. Het gaat om de volledigheid en integriteit van de data die het produceert.

## De bewaarplicht: 7 jaar digitaal bewaren

De bewaarplicht van 7 jaar is geen vage richtlijn — het is een wettelijke verplichting. De klok begint te lopen aan het einde van het boekjaar waarin de transactie plaatsvond. Transacties uit 2024 moeten dus tot eind 2031 bewaard zijn.

Wat moet er precies bewaard worden? Niet alleen de dagstaten of omzetoverzichten. De Belastingdienst verwacht dat je kunt laten zien welke individuele transacties aan die dagstaten ten grondslag liggen. Concreet betekent dat:

- Elke kassabon of factuur, met datum, tijd, artikel, prijs en BTW-bedrag
- Alle annuleringen en correcties, met reden en medewerkersinformatie
- Kassalade-openingen en afsluitingen
- Pinbetalingsgegevens (of minstens de totalen per betaaldag)
- Eventuele kortingen en staffels met bijbehorende autorisatie

Het format mag digitaal zijn — in de praktijk slaan moderne cloudkassasystemen alles op in de cloud. Maar je moet er zeker van zijn dat die data ook na 7 jaar nog beschikbaar is. Sommige leveranciers bewaren data standaard maar 1 tot 3 jaar tenzij je een hogere bewaartermijn inkoopt of instelt.

Mijn advies: vraag bij je kassaleverancier expliciet naar de standaard bewaartermijn. En zorg dat je een jaarlijkse export maakt van de transactiedata naar je eigen opslag of archiefoplossing. Vertrouw niet blind op de cloudopslag van de leverancier — als die failliet gaat of zijn product discontinueert, ben jij degene die de data kwijt is.

Koppeling met de boekhouding helpt daarbij ook. Als je kassadata automatisch naar je boekhoudpakket gaat, bewaar je in feite al die historische gegevens in een tweede systeem. Hoe je dat inricht staat in [Kassasysteem koppelen aan boekhouding](/blog/kassasysteem-koppelen-aan-boekhouding/).

## BTW-registratie via je kassa: hoge en lage tarieven

De meeste kassasystemen kunnen BTW-tarieven per artikel instellen. Dat klinkt eenvoudig, maar in de praktijk gaat het regelmatig mis — met directe gevolgen voor je BTW-aangifte.

Het Nederlandse BTW-stelsel kent drie tarieven:
- **9%** — voor levensmiddelen, bepaalde diensten (o.a. kapper), e-boeken, geneesmiddelen en logies
- **21%** — het standaardtarief voor de meeste goederen en diensten, inclusief alcoholische dranken
- **0%** — voor export buiten de EU en bepaalde vrijgestelde diensten

Voor horeca is de BTW-opsplitsing bijzonder relevant. Een restaurant verkoopt eten (9%), alcoholische dranken (21%) en frisdranken (9%). Worden die niet goed opgesplitst in het kassasysteem, dan is elke BTW-aangifte die je ooit hebt ingediend fout. Bij een boekenonderzoek leidt dat automatisch tot een naheffing over alle openstaande jaren.

Bij een klant van mij in de detailhandel zat de kinderschoenen-categorie jarenlang verkeerd ingesteld op 21% in plaats van het toenmalige verlaagde tarief. Niemand had het gemerkt, want de totaalomzet klopte. Maar de BTW-split was structureel onjuist. Dat soort fouten komen bij een controle altijd naar boven.

Controleer per artikel en per categorie in je kassasysteem of het BTW-tarief correct is ingesteld. Doe dit ook na software-updates — ik heb situaties gezien waarbij een update de BTW-instellingen terugzette naar de fabrieksstandaard.

Specifiek voor gemengde transacties: als één kassabon zowel 9%- als 21%-producten bevat, moet je kassasysteem dat per artikel kunnen splitsen en ook per tarief totaliseren in de dagsluiting. Een kassasysteem dat alleen een totaalbedrag bijhoudt zonder BTW-uitsplitsing per tarief is voor de meeste ondernemers ongeschikt.

## Kassasysteem en de KOR (kleine ondernemersregeling)

Maak je gebruik van de KOR (Kleineondernemersregeling) en heb je vrijstelling van BTW-aangifte? Dan denken veel ondernemers dat ze ook minder strenge kassaeisen hebben. Dat klopt gedeeltelijk, maar niet volledig.

Zolang je onder de KOR valt en minder dan €20.000 omzet per jaar maakt, hoef je inderdaad geen BTW af te dragen en geen BTW-aangifte in te dienen. Je kassasysteem hoeft dan geen BTW-splits per tarief bij te houden voor de aangifte.

Maar de bewaarplicht geldt gewoon. Artikel 52 AWR maakt geen onderscheid tussen KOR-ondernemers en reguliere BTW-plichtige ondernemers. Je moet je administratie — inclusief kassagegevens — nog steeds 7 jaar bewaren.

Bovendien: zodra je omzet boven de €20.000-grens uitkomt, vervalt de KOR en word je direct BTW-plichtig. Op dat moment moet je kassasysteem meteen correct BTW splitsen. Als het systeem nooit goed geconfigureerd was, staat je op dat moment voor een technisch én administratief probleem tegelijk. Richt het systeem dus van begin af aan correct in, ook als je nu nog onder de KOR valt.

## Wat gebeurt er bij een controle?

Een boekenonderzoek van de Belastingdienst begint doorgaans met een aankondiging enkele weken van tevoren, maar onaangekondigd bezoek is ook mogelijk — met name bij kasintensieve branches als horeca, kappers en detailhandel.

Wat een inspecteur bij een kassacontrole doet:

**Eerst de volledigheid controleren.** Zijn alle transacties aanwezig? Ontbreken er dagstaten? Zijn er periodes zonder kassaregistratie? Afwezige data is een alarmsignaal, zelfs als er een logische verklaring voor is.

**Dan de plausibiliteit toetsen.** De inspecteur vergelijkt de kassaomzet met je inkoopdata. Als je meer inkopen dan je omzet laat zien, rijst de vraag waar de marge is gebleven. Kassaintensieve branches hebben hiervoor kengetallen per sector die de Belastingdienst als referentie gebruikt.

**Vervolgens de BTW-splits analyseren.** Klopt de verhouding tussen 9%- en 21%-omzet met wat je verkoopt? Een restaurant dat voor 90% omzet op 21% heeft staan, terwijl het menu voornamelijk uit eten bestaat, trekt aandacht.

**Praktische zaken die inspecteurs ook controleren:**
- Zijn er kassalade-openingen zonder bijbehorende transactie? (wijst op contante verkopen buiten de kassa om)
- Zijn er grote aantallen annuleringen of correcties? (mogelijke manipulatie)
- Kloppen de tijdstippen? (transacties buiten openingstijden)
- Is de kassasoftware actueel en zijn de instellingen zoals op het originele installatieformulier?

Een controle doorstaan is geen kwestie van geluk. Het is een kwestie van het systeem goed hebben ingericht en de data hebben bewaard. Meer over wat kassasystemen technisch moeten kunnen, lees je in [Beste kassasysteem horeca 2026](/blog/beste-kassasysteem-horeca-2026/).

## Checklist: voldoet jouw kassasysteem aan de eisen?

Loop deze lijst door voor elk kassasysteem dat je gebruikt of overweegt:

**Datavolledigheid**
- [ ] Registreert het systeem elke individuele transactie (bon-niveau)?
- [ ] Zijn annuleringen en correcties zichtbaar en niet verwijderbaar zonder spoor?
- [ ] Worden kassalade-openingen bijgehouden?
- [ ] Registreert het systeem medewerkersinformatie per transactie?

**Bewaartermijn**
- [ ] Wat is de standaard bewaartermijn van transactiedata bij de leverancier?
- [ ] Kun je data exporteren in een reproduceerbaar format (CSV, XML)?
- [ ] Heb je een eigen archiveringsprocedure voor data ouder dan de standaard bewaartermijn?

**BTW-configuratie**
- [ ] Heeft elk artikel en elke categorie het juiste BTW-tarief (9%, 21%, 0%)?
- [ ] Kan het systeem BTW-splits per tarief in de dagsluiting tonen?
- [ ] Zijn de BTW-instellingen gecontroleerd na de laatste software-update?

**Controleerbaarheid**
- [ ] Kun je historische dagstaten opvragen per dag, week en maand?
- [ ] Is de transactiedata rechtstreeks gekoppeld aan de BTW-aangifte (via boekhouding)?
- [ ] Is de data toegankelijk via export of directe raadpleging zonder technische hulp?

Als je op een van deze punten "nee" of "weet ik niet" antwoordt, is er werk aan de winkel. Niet omdat de Belastingdienst morgen voor de deur staat, maar omdat je op het moment dat ze dat doen, geen tijd meer hebt om het alsnog te fixen. Wat kassasystemen kosten en wat je extra betaalt voor uitgebreide rapportage staat in [Kassasysteem verborgen kosten checklist](/blog/kassasysteem-verborgen-kosten-checklist/).

## Wat de Belastingdienst doet bij kasintensieve branches

De Belastingdienst heeft specifieke aandacht voor branches waar veel contant geld omgaat: horeca, kapsalons, detailhandel, taxibedrijven. Dat is geen geheim — de Belastingdienst publiceert zijn toezichtsstrategie deels openbaar.

Wat dat in de praktijk betekent: bedrijven in deze branches krijgen vaker een boekenonderzoek dan bedrijven die uitsluitend digitaal factureren. En de focus bij zo'n onderzoek ligt bijna altijd op de kassa.

Een manier waarop de Belastingdienst inconsistenties ontdekt is het gebruik van branchebenchmarks. Voor een café is er een verwacht brutomarge op drank en eten. Als jouw marge structureel lager uitvalt dan het branchegemiddelde, vraagt de inspecteur om een verklaring. Jij hoeft dan aan te tonen dat jouw situatie logisch is — niet de Belastingdienst die hoeft aan te tonen dat jij fraudeert. Die omgekeerde bewijslast is een gevolg van ontbrekende of onvoldoende kassaregistratie.

Dat maakt een goed geconfigureerd kassasysteem ook een zakelijk argument, los van de wettelijke plicht. Een correct ingericht systeem geeft je de data om vragen van de Belastingdienst te beantwoorden. Een slecht systeem laat je met lege handen staan.

## Mijn advies: zo bereid je je voor

Het goede nieuws: de meeste moderne cloudkassasystemen voldoen technisch aan alle bovenstaande eisen. Lightspeed, Square, Untill, Orderbird — ze bewaren transactiedata centraal in de cloud, ze loggen annuleringen, en ze bieden exportfuncties die bij een boekenonderzoek bruikbaar zijn.

<a href="https://www.lightspeedhq.nl/" target="_blank" rel="noopener nofollow sponsored" class="cta-affiliate">Bekijk Lightspeed kassasysteem →</a>

<a href="https://squareup.com/nl/" target="_blank" rel="noopener nofollow sponsored" class="cta-affiliate">Probeer Square gratis →</a>

Het slechte nieuws: ze voldoen alleen als je ze correct hebt geconfigureerd. En dat is precies waar het bij de meeste ondernemers misgaat.

Mijn concrete aanbevelingen:

**1. Controleer de bewaartermijn van je leverancier.** Bel ze op en vraag hoelang transactiedata standaard wordt bewaard. Vraag ook of er een optie is voor langere bewaring en wat dat kost. Noteer het antwoord en bewaar dat in je administratie.

**2. Maak jaarlijks een volledige export.** Exporteer aan het einde van elk boekjaar alle transactiedata naar een CSV of XML en sla die op in een map die je zelf beheert — los van de kassaleverancier. Google Drive, een externe harde schijf, maakt niet uit. Zorg dat het er is.

**3. Controleer de BTW-configuratie.** Loop één keer per jaar door de artikellijst en controleer de BTW-codes. Na een software-update altijd opnieuw controleren. Gebruik de dagsluiting om te zien of de BTW-verdeling logisch oogt.

**4. Documenteer de configuratie.** Maak een screenshot of PDF van de kassaconfiguratie — met BTW-tarieven, medewerkersinstellingen en bewaartermijn. Als je ooit moet aantonen hoe het systeem was ingesteld, heb je die documentatie nodig.

**5. Koppel kassadata aan je boekhouding.** Een directe koppeling zorgt dat de omzetdata ook in de boekhouding leeft, wat de controlekans verhoogt en de BTW-aangifte vereenvoudigt.

In mijn ervaring is de ondernemer die dit goed voor elkaar heeft bij een boekenonderzoek binnen twee uur klaar. Degene die er niets van heeft geregeld, zit maanden in bezwaar- en beroepsprocedures.

Een kassasysteem kiezen dat dit alles goed ondersteunt? Gebruik de [kassasysteem keuzehulp](/tools/kassasystemen/keuzehulp/) om een systeem te vinden dat voldoet aan alle eisen. Wil je ook inzicht in wat een kassasysteem je maandelijks kost? Gebruik de [kassasysteem kosten berekenen tool](/tools/kassasystemen/kosten-berekenen/) voor een berekening op basis van jouw omvang en branche.

## De kostprijs van non-compliance

Het loont de moeite om de kosten van non-compliance eens concreet door te rekenen, zodat de investering in een correct geconfigureerd kassasysteem in perspectief staat.

Bij een gemiddeld horecabedrijf met €400.000 jaaromzet en een incorrect BTW-tarief op 20% van de producten — bijvoorbeeld dranken op 9% in plaats van 21% — is het verschil in BTW-afdracht circa 12 procentpunt op dat deel. Dat is €9.600 per jaar aan te weinig afgedragen BTW. Over vijf jaar: €48.000 aan naheffing, plus belastingrente (momenteel 8% per jaar) plus vergrijpboete.

Bij een niet-opzettelijke overtreding bedraagt de vergrijpboete maximaal 25% van het nageheven bedrag. Op €48.000 naheffing is dat €12.000 extra. Bezwaar- en beroepsprocedures bij de Belastingdienst kosten dan nog eens €3.000-8.000 aan juridische bijstand.

Totaal potentiële schade bij één controlecyclus: €60.000-70.000.

De kosten van een correct geconfigureerd kassasysteem en een jaarlijkse controle van de BTW-instellingen bedragen maximaal €500-2.000 per jaar. De rekensom is duidelijk: preventie is altijd goedkoper dan herstel. Neem die jaarlijkse controle op als vast agendapunt aan het begin van het boekjaar, zodat eventuele wijzigingen in BTW-tarieven direct worden verwerkt voordat ze problemen veroorzaken bij de eerstvolgende aangifte.

## Wat je boekhouder van je kassasysteem verwacht

Als je een boekhouder of accountant hebt, is het de moeite waard om te vragen hoe hij de koppeling met je kassasysteem het liefst ziet. De meeste boekhouders hebben een voorkeur voor een specifiek exportformat of een directe koppeling met hun boekhoudpakket. Die voorkeur vooraf kennen bespaart achteraf correctiewerk.

Wat een goede boekhouder minimaal van je kassasysteem verwacht: een dagstaat per afsluiting, een BTW-uitsplitsing per tarief, en een exportmogelijkheid die aansluit op zijn systeem. Als jouw kassasysteem dat niet levert, betekent dat meer handmatig werk voor de boekhouder — werk dat jij uiteindelijk betaalt. Vraag je boekhouder bij aanschaf van een nieuw kassasysteem om een half uur mee te kijken naar de exportopties. Die investering van zijn tijd kost je misschien €50, maar bespaart je maandelijks uren aan extra boekhouderkosten als de koppeling later niet goed blijkt te werken.

Een boekhouder die actief toegang heeft tot je kassadata via een directe koppeling, kan ook proactief signaleren als er iets niet klopt in de BTW-verdeling. Dat is een tweede controlelevel die je beschermt tegen fouten die je zelf niet doorhebt.

## Lees ook

- [Beste kassasysteem horeca 2026](/blog/beste-kassasysteem-horeca-2026/) — overzicht van kassasystemen met sterke datavolledigheid en exportopties
- [Kassasysteem verborgen kosten checklist](/blog/kassasysteem-verborgen-kosten-checklist/) — alle kostenposten die je meeneemt voor je tekent
- [Alle kassasysteem vergelijkingen en reviews](/categories/kassasystemen/) — volledige overzichtspagina
- [Kassasysteem inrichten checklist](/blog/kassasysteem-inrichten-checklist/) — stap voor stap klaar voor opening
- [Cloud POS vs lokaal kassasysteem](/blog/cloud-pos-vs-lokaal/) — voor- en nadelen per type
