---
title: "Van Excel naar CRM: migratie zonder dataverlies"
date: 2026-03-08
lastmod: 2026-03-08
description: "Stap van Excel over naar een CRM zonder dataverlies. Praktisch migratieplan met voorbereiding, opschoning en importtips. Doe de gratis CRM keuzehulp."
author: "Lars de Vries"
author_bio: "B2B software consultant en oprichter van Bedrijfssoftwaregids.nl. Lars test zakelijke software hands-on en helpt Nederlandse ondernemers de juiste keuze te maken."
featured_image: "/images/categories/crm.svg"
categories:
  - crm
faq:
  - q: "Hoeveel data verlies ik bij een migratie van Excel naar CRM?"
    a: "Bij een goed voorbereide migratie verlies je geen data. Het risico zit hem in slechte voorbereiding: dubbele contacten, inconsistente veldnamen en lege verplichte velden zorgen voor problemen bij import. Maak altijd een back-up van je originele Excel-bestand voordat je begint."
  - q: "Hoe lang duurt een migratie van Excel naar CRM?"
    a: "De daadwerkelijke import duurt zelden langer dan een uur. De voorbereiding — data opschonen, kolommen standaardiseren, duplicaten verwijderen — kost de meeste tijd. Voor een bestand met 500 tot 2.000 contacten reken ik op twee tot vier werkdagen voorbereiding."
  - q: "Wat kost een CRM vergeleken met Excel?"
    a: "Excel is onderdeel van Microsoft 365 (vanaf circa €6/maand per gebruiker). Een instap-CRM zoals HubSpot CRM is gratis, Pipedrive kost circa €15/maand per gebruiker en Salesforce begint bij €25/maand. De echte kosten van Excel zijn de uren die je kwijt bent aan handmatig werk — die som je zelden."
  - q: "Welke data moet ik als eerste migreren?"
    a: "Begin met actieve contacten en lopende deals. Dat zijn de gegevens die je dagelijks nodig hebt. Historische data van gesloten deals uit 2020 kun je later toevoegen of zelfs weglaten — die voegen in de meeste gevallen weinig toe aan je dagelijkse werk."
tags:
  - crm
  - mkb
affiliate: false
---

Vorig jaar hielp ik een accountantskantoor in Utrecht met de overstap van Excel naar HubSpot. Zeven medewerkers, zo'n 1.400 klantcontacten, een spreadsheet die door de jaren heen was uitgegroeid tot een gedrocht van 23 tabbladen. Kolommen zonder naam. Telefoonnummers in drie verschillende formaten. Bedrijfsnamen afwisselend voluit geschreven, afgekort, of met een typefout.

De directeur dacht dat de migratie een weekend zou duren. Het werd drie weken.

Niet omdat HubSpot moeilijk is. Maar omdat niemand ooit had nagedacht over wat er eigenlijk in dat bestand stond.

Herken je dit? Dan is dit artikel voor jou.

## Wanneer is Excel niet meer genoeg?

Excel is een uitstekend stuk gereedschap. Ik zeg het eerlijk: voor kleine teams met weinig contacten werkt het prima. Maar er komt een moment waarop je spreadsheet je begint af te remmen in plaats van te helpen.

Dat moment is aangebroken als je jezelf betrapt op een van deze situaties:

**Meerdere mensen werken tegelijk in hetzelfde bestand.** Je collega heeft net een contact bijgewerkt terwijl jij dat ook deed. Wiens versie is nu de juiste? In een CRM is er altijd één bron van waarheid.

**Je weet niet meer wie wanneer contact heeft gehad met een klant.** Was het Jan of was het Petra die maandag belde? In Excel leg je dat niet vast, tenzij je er een apart tabblad voor hebt — wat dan weer zijn eigen problemen veroorzaakt.

**Je verliest deals door slechte opvolging.** Je hebt een offerte gestuurd, drie weken geleden. Wanneer was je ook alweer van plan om op te volgen? Bij een klant van mij lagen er €40.000 aan offertes te verouderen omdat niemand een herinneringssysteem had.

**Je bestand is trager dan jijzelf.** Als het openen van je contactenlijst vijf seconden duurt, ben je er klaar mee.

**Rapporteren kost je uren.** Elke maand opnieuw kopiëren, plakken, draaitabellen bouwen. Een CRM genereert die rapporten automatisch.

Zie je jezelf in twee of meer van deze punten? Dan is het tijd.

## Je Excel-bestand klaarmaken voor migratie

Dit is het deel waar de meeste mensen te snel overheen stappen. En precies hier gaat het ook het meest mis.

Een CRM importeert je data veld voor veld. Dat betekent dat je Excel-structuur moet kloppen voordat je ook maar één regel code aanraakt.

**Stap 1: Één rij = één contact**

Klinkt logisch. Is het vaak niet. Ik zie regelmatig bestanden waarbij een bedrijf op rij 1 staat, de contactpersoon op rij 2, en de aantekeningen op rij 3. Dat werkt niet. Elke rij moet een compleet, zelfstandig contact bevatten.

**Stap 2: Veldnamen standaardiseren**

Kolommen als "Tel.", "Telefoon", "Mob", "GSM" en "Telefoonnummer" bevatten allemaal hetzelfde soort data. Kies er één. Mijn voorkeur: gebruik de naamgeving van het CRM dat je gaat gebruiken. HubSpot gebruikt "Phone Number", Pipedrive "Phone". Kijk dat even na.

**Stap 3: Telefoonnummers uniformeren**

In Nederland: 06-12345678, 0612345678, +31612345678, 06 12 34 56 78. Allemaal hetzelfde nummer, vier verschillende notaties. Kies er één en pas die consequent toe. Ik gebruik altijd +31 voor mobiele nummers — dat werkt ook als je later internationaal werkt.

**Stap 4: Duplicaten verwijderen**

In Excel: Gegevens → Duplicaten verwijderen. Doe dit op e-mailadres, niet op naam — "Jan de Boer" kan twee keer voorkomen als het twee verschillende personen zijn. E-mailadressen zijn uniek.

**Stap 5: Lege verplichte velden opvullen of weggooien**

Elk CRM heeft verplichte velden bij import. Minimaal: naam en e-mailadres of telefoonnummer. Contacten zonder naam en zonder enige contactmethode zijn onbruikbaar. Verwijder ze of zoek de ontbrekende data op.

Bij dat accountantskantoor in Utrecht hadden we na opschoning 1.400 contacten teruggebracht naar 980 bruikbare records. De rest was rommel die al jaren rondzwierf.

## Welk CRM past bij jouw Excel-werkwijze?

Niet elk CRM is even makkelijk te migreren naar. En niet elk CRM past bij de manier waarop je nu werkt.

Als je Excel gebruikt als een simpele contactenlijst met wat aantekeningen, dan is een instap-CRM als HubSpot CRM (gratis) of Pipedrive (€15/maand) meer dan voldoende. Deze tools zijn gebouwd voor precies dit gebruik en hebben uitstekende import-wizards.

Gebruik je Excel als projectmanagement-tool én contactenregistratie tegelijk? Dan heb je wat meer nodig. Monday.com CRM of Teamleader kunnen die combinatie aan.

Werk je in een specifieke sector — makelaardij, recruitment, bouw — dan zijn er sectorspecifieke CRM's die je workflow beter spiegelen dan een generalist. Zie ook de [sectorpagina's op bedrijfssoftwaregids.nl](/sectoren/crm/) voor een overzicht per branche.

Twijfel je welk systeem bij jouw werkwijze past? De [CRM keuzehulp](/tools/crm/keuzehulp/) stelt je tien vragen en geeft een concreet advies. Kost je vijf minuten.

<a href="https://aff.trypipedrive.com/65scdzrtiyaj" target="_blank" rel="noopener nofollow sponsored" class="cta-affiliate">Probeer Pipedrive gratis →</a>

Lees ook mijn overzicht van de [beste CRM software voor Nederland in 2026](/blog/beste-crm-software-nederland-2026/) voor een uitgebreide vergelijking.

## Het migratieplan: stap voor stap

Oké. Je Excel-bestand staat klaar, je hebt een CRM gekozen. Nu de daadwerkelijke migratie.

**Stap 1: Maak een back-up**

Klopt, zo simpel is het. Sla je opgeschoonde Excel-bestand op als `contacten-backup-datum.xlsx` en raak het daarna niet meer aan. Dit is je vangnet als er iets misgaat.

**Stap 2: Importeer in een test-account of test-pipeline**

De meeste CRM-tools geven je een proefperiode van 14 tot 30 dagen. Gebruik die om te importeren. Zo zie je of het werkt zonder dat je de productieomgeving verpest.

**Stap 3: Voer een testimport uit met 50 records**

Exporteer 50 willekeurige rijen uit je bestand en importeer die. Controleer daarna: zijn alle velden goed ingevuld? Staan telefoonnummers in het telefoonnummerveld? Zijn bedrijfsnamen correct? Pas de kolomnamen in Excel aan totdat de import klopt.

**Stap 4: Importeer de volledige dataset**

Pas na een geslaagde testimport importeer je het volledige bestand. De meeste CRM's laten je een CSV-bestand uploaden en vragen je vervolgens om Excel-kolommen te koppelen aan CRM-velden. Dat koppelen duurt vijf tot tien minuten.

**Stap 5: Controleer en herstel**

Na de import: filter op lege verplichte velden. Check vijf tot tien willekeurige contacten handmatig. Kloppen de telefoonnummers? Is het bedrijf correct? Zijn de tags of segmenten goed meegekomen?

Bij een goed voorbereide migratie vind je hier weinig problemen. Bij een slecht voorbereide migratie begin je nu opnieuw met opschonen — maar dan in het CRM, wat nog vervelender is.

Wil je een uitgebreider plan voor de eerste dertig dagen na de implementatie? Ik heb daar een apart artikel over geschreven: [CRM implementatieplan voor 30 dagen](/blog/crm-implementatieplan-30-dagen/).

## De eerste week na de overstap

De data staat in het CRM. Klaar? Nog niet.

De eerste week is kritiek. Dit is het moment waarop mensen terugvallen op Excel uit gewoonte. "Even snel opzoeken in het oude bestand" wordt een patroon. Voordat je het weet gebruik je beide systemen tegelijk, wat erger is dan alleen Excel.

Wat ik aanraad:

**Dag 1: Verwijder de snelkoppeling naar Excel.** Of verstop het bestand in een archief. Uit het zicht, uit het hoofd.

**Dag 1-3: Voer alle nieuwe contacten direct in het CRM in.** Geen uitzonderingen. Niet "even later in het CRM zetten" — direct.

**Dag 2: Leer drie basishandelingen.** Contact opzoeken, contact toevoegen, aantekening maken bij een contact. Meer heb je de eerste week niet nodig.

**Dag 3-5: Maak je eerste rapportage.** Hoeveel contacten heb je per stad? Hoeveel deals staan open? Welke contacten heb je al meer dan negentig dagen niet gesproken? Dit is het moment waarop je ziet wat het CRM je geeft dat Excel nooit kon.

**Week 2: Train de rest van het team.** Niet met een PowerPoint. Gewoon: zit een halfuur naast iemand en laat ze een contact aanmaken en opzoeken. Meer hoeft het niet te zijn.

De veelgemaakte fout in deze fase: te veel functies tegelijk willen gebruiken. Automatisering, e-mailintegratie, dashboards — dat komt later. Eerst de basis.

Zie ook mijn artikel over [de meest gemaakte CRM-fouten bij MKB-bedrijven](/blog/crm-fouten-mkb/) als je wil weten wat er verder mis kan gaan.

## Mijn advies: de overstap hoeft niet eng te zijn

Ik begrijp de aarzeling. Je hebt jaren aan data opgebouwd in dat Excel-bestand. Het voelt vertrouwd. En een CRM voelt als iets voor grote bedrijven.

Maar de data raakt niet kwijt. Niet als je de voorbereiding goed doet. En die voorbereiding is niets meer dan: opschonen wat al rommelig was, en structuur aanbrengen die je toch al had moeten hebben.

Het accountantskantoor in Utrecht? Die zijn nu drie maanden verder. Ze missen Excel niet. De directeur vertelde me vorige maand dat ze voor het eerst in jaren weten hoeveel klanten ze eigenlijk hebben, wie de meest winstgevende zijn, en wanneer contracten verlopen. Dat wisten ze nooit uit Excel.

De overstap kostte drie weken voorbereiding. De opbrengst is structureel.

---

**Gebruik de [CRM keuzehulp](/tools/crm/keuzehulp/) om te zien welk systeem past bij jouw bedrijf.**

Bereken ook de [CRM kosten](/tools/crm/kosten-berekenen/) voor jouw teamgrootte om te zien wat een goed CRM je per jaar kost. Wil je na de overstap ook je data-kwaliteit op orde houden, lees dan mijn [CRM-data opschonen stappenplan](/blog/crm-data-opschonen-stappenplan/). En als je twijfelt welk systeem het beste bij jou past, bekijk dan de [HubSpot CRM review 2026](/blog/hubspot-crm-review-2026/) voor een uitgebreide analyse.

---

## Hoe je de historische data beheert

Een vraag die ik altijd krijg bij Excel-naar-CRM-migraties: wat doe je met de historische data? Contacten van vijf jaar geleden, deals die lang verloren zijn, aantekeningen uit een andere periode. Importeer je alles, of begin je schoon?

Mijn advies: importeer actieve contacten en lopende of recente deals. Alles van de afgelopen achttien maanden is relevant. Wat ouder is, importeer je alleen als er een actieve reden is om die data bij de hand te hebben.

Historische data die je meeneemt levert snel een rommelig CRM op: oude contacten die nooit worden opgepakt, verlopen deals die de rapportages vertekenen, contactgegevens die al jaren niet zijn gecontroleerd. Dat ondermijnt het vertrouwen in het nieuwe systeem.

Een alternatief is een "archief-tag" aanmaken: importeer ook historische data maar tag die als archief. Zo zijn de gegevens beschikbaar als je ze nodig hebt, maar staan ze niet in je actieve pipeline en rapportages.

## Wat te doen met aantekeningen en notities

Excel heeft geen notitieveld per contact; de meeste mensen zetten aantekeningen in een extra kolom. Die kolommen zijn vrijgevormde tekst: willekeurige opmerkingen, datums, gespreksnotities, reminders. Ze zijn waardevoller dan de contactgegevens zelf, maar ook het moeilijkst te importeren.

De meeste CRM-systemen bieden een notitieveld per contact en per deal. Bij import vanuit Excel kun je een tekstkolom koppelen aan het notitieveld. Dat werkt technisch, maar de notities staan dan zonder datum en context als één grote blob tekst.

Een betere aanpak voor belangrijke contacten: neem vijf minuten per contact en herschrijf de belangrijkste aantekeningen als een correcte activiteitenlog in het CRM. Met datum, type activiteit (gesprek, e-mail, meeting) en een korte samenvatting. Dat kost meer tijd dan een bulk-import, maar levert een CRM op dat daadwerkelijk bruikbaar is.

Doe dit voor de twintig meest actieve contacten eerst. Voor de rest volstaat de geïmporteerde tekst of een schone start.

## Parallel gebruik vermijden: de moeilijkste gewoonte te doorbreken

De grootste bedreiging voor een geslaagde CRM-migratie is niet de technologie maar de gewoonte. Mensen kennen hun Excel-bestand. Ze weten waar alles staat. Het openen ervan gaat automatisch, zonder nadenken.

Na de overstap duurt het gemiddeld twee tot vier weken voor de reflex om Excel te openen verdwijnt. In die periode is het verleidelijk om "even snel iets op te zoeken" in het oude bestand. Dat "even snel" wordt een gewoonte, en voor je het weet werk je met twee systemen naast elkaar.

Ik geef al mijn klanten hetzelfde advies: verniet of archiveer het bestand direct na de migratie. Niet "als je er zeker van bent dat alles in het CRM staat" — dat moment verschuift altijd naar later. Neem de sprong op dag één. Je hebt een back-up gemaakt. Je kunt altijd terug als het echt nodig is. Maar door het bestand weg te halen, dwing je jezelf het CRM te gebruiken.

Het alternatief — blijven werken met beide systemen "totdat iedereen gewend is aan het nieuwe" — levert in de praktijk nooit een volledige overstap op.

## Wat je nog niet wist dat je miste

Na de overstap van Excel naar een CRM ontvangen bijna alle klanten die ik begeleid hetzelfde soort verrassing. Ze zien inzichten die ze in Excel nooit hadden — niet omdat de data er niet was, maar omdat Excel ze niet automatisch zichtbaar maakt.

Welke deals zijn al meer dan negentig dagen open zonder activiteit? In Excel zou je daarvoor een complexe filter moeten bouwen. In een CRM klik je op één knop en je hebt de lijst.

Welke leads zijn binnengekomen via een specifiek kanaal en hoe hoog is de conversie van dat kanaal? In Excel nooit bijgehouden. In een CRM staat het standaard als je de herkomst bij aanmaak invult.

Welke medewerker heeft de hoogste win-rate en bij welk type deal? In Excel een uurwerk aan pivot-tabellen. In een CRM een dashboard dat je elke week opent.

Dit is de echte waarde van de overstap. Niet sneller werken — hoewel dat ook — maar zichtbaarheid op informatie die er altijd al was maar nooit toegankelijk was. Dat verandert hoe je beslissingen neemt, en dat verandert uiteindelijk de uitkomsten.

Het accountantskantoor in Utrecht weet nu exact welke klanten hun meest winstgevend zijn. Ze weten wanneer contracten verlopen en kunnen pro-actief contact opnemen. Ze weten welke leads de meeste kans maken en steken daar meer tijd in. Dat wisten ze niet uit Excel. Nu wel.

## Wat het migreren je concreet kost — en oplevert

Een overstap van Excel naar een CRM is een investering. Ik zie ondernemers die de kosten onderschatten en daarna teleurgesteld zijn, en ondernemers die ze overschatten en de overstap uitstellen. Hier is een eerlijk overzicht.

**Kosten (eenmalig):**
- Licentie CRM eerste jaar: €300–€1.200 voor een team van vijf (afhankelijk van pakket)
- Importwerk: twee tot vier uur voor een goed opgeschoonde spreadsheet
- Training: één à twee halve dagen voor het team
- Aanpassingen en configuratie: vier tot acht uur voor een goede inrichting

**Kosten (terugkerend):**
- Maandelijkse licentie: €25–€100 per maand voor het hele team
- Beheer: circa een uur per maand voor updates en datakwaliteitscontrole

**Wat het oplevert:**
- Tijdsbesparing bij het opzoeken van klantinformatie: conservatief tien minuten per dag per medewerker
- Minder gemiste opvolgingen: bij een gemiddelde dealwaarde van €5.000 is één extra gewonnen deal per kwartaal voldoende om de investering terug te verdienen
- Beter inzicht in de pipeline: snellere beslissingen over prioritering zonder extra vergaderingen

De break-even bij een team van vijf ligt bij de meeste MKB-bedrijven binnen zes maanden na implementatie. Dat is een conservatieve schatting.

## Wat je meeneemt uit Excel en wat je achterlaat

Een veelgemaakte fout bij Excel-naar-CRM migraties: alles meenemen. Alle contacten, ook de inactieve uit 2019. Alle notities, ook de irrelevante. Alle tabbladen, ook die waar niemand meer in kijkt.

Mijn advies: maak een harde knip. Migreer alleen contacten die de afgelopen twee jaar actief zijn geweest — een aankoop, een gesprek, een e-mail. Historische contacten die al drie jaar stil zijn, voeg je toe in een aparte "archief" tag in het CRM, zodat ze beschikbaar zijn maar niet je actieve pipeline vervuilen.

Die knip heeft twee voordelen. Eerste: de import is sneller en de datakwaliteit is hoger, want je besteedt je opschoontijd aan de data die er echt toe doet. Tweede: het nieuwe CRM start met een schone, overzichtelijke database in plaats van een digitale rommelkamer.

Leg ook vast welke velden je niet migreert. Kolommen in Excel die niemand meer bijhoudt, zijn data die niemand vertrouwt. Laat ze achter — ze vervuilen anders je CRM-rapportages op dag één.

---

## Lees ook

- [Beste CRM software voor Nederland 2026: eerlijk vergelijk](/blog/beste-crm-software-nederland-2026/)
- [CRM implementatieplan: van aanschaf naar gebruik in 30 dagen](/blog/crm-implementatieplan-30-dagen/)
