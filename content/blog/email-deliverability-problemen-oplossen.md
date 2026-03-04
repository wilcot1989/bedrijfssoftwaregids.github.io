---
title: "E-mail deliverability problemen oplossen: oorzaken en oplossingen"
date: 2026-03-03
lastmod: 2026-03-03
description: "E-mails landen in de spamfolder? Leer deliverability problemen oplossen voor ZZP en MKB. Doe de keuzehulp voor het beste e-mailmarketingplatform."
author: "Lars de Vries"
author_bio: "Onafhankelijke software vergelijker voor Nederlandse ondernemers."
featured_image: "images/categories/marketing.svg"
categories:
  - Blog
  - marketing
faq:
  - q: "Hoe verbeter je e-mail deliverability snel?"
    a: "De snelste verbetering komt bijna altijd van drie dingen: controleer of SPF, DKIM en DMARC correct zijn ingesteld in je DNS, verwijder harde bounces direct van je lijst, en stuur een reactiveringsmail naar iedereen die langer dan zes maanden niets heeft geopend. Deze drie stappen kosten samen een halve dag en hebben direct merkbaar effect op placement in de inbox."
  - q: "Waarom komen mijn e-mails in de spamfolder terecht?"
    a: "De meest voorkomende oorzaken zijn een ontbrekende of verkeerd geconfigureerde SPF-record, een te lage engagement-score doordat veel ontvangers de e-mail nooit openen, of een hoog spamklachtenpercentage boven de 0,3%. Ook het gebruik van een nieuw verzenddomein zonder opwarmperiode leidt tot spamplaatsing. Begin met een gratis SPF/DKIM/DMARC-check via je e-mailplatform om technische fouten uit te sluiten."
  - q: "Wat is het verschil tussen SPF, DKIM en DMARC?"
    a: "SPF bepaalt welke mailservers gemachtigd zijn om e-mail te versturen namens jouw domein — het is een whitelist in je DNS. DKIM voegt een cryptografische handtekening toe aan elke e-mail die de ontvanger kan verifiëren en die bewijst dat de e-mail niet is aangepast onderweg. DMARC vertelt ontvangende servers wat ze moeten doen als SPF of DKIM niet kloppen: negeren, quarantaine of weigeren. Alle drie samen vormen de technische basis voor een goede reputatie bij mailproviders."
  - q: "Hoe vaak moet je je e-maillijst opschonen?"
    a: "Twee keer per jaar is een goede richtlijn voor de meeste bedrijven. Verwijder harde bounces direct na elke verzending. Zachte bounces na drie opeenvolgende mislukkingen archiveren. Stuur een reactiveringsmail naar contacten die zes tot twaalf maanden niets hebben geopend en verwijder wie niet reageert. Een kleinere, actievere lijst levert altijd betere deliverability op dan een grote lijst met veel inactieve contacten."
  - q: "Welk e-mailmarketingplatform heeft de beste deliverability voor Nederlandse bedrijven?"
    a: "Brevo en ActiveCampaign worden in Nederland het meest gewaardeerd om hun deliverability-reputatie. Beide hebben Europese datacenters, wat ook voordelen biedt voor AVG-compliance. Mailchimp is populair maar scoort bij hogere verzendvolumes soms minder goed op deliverability, deels door de brede gebruikersbasis op gedeelde IP's. Klaviyo is sterk voor e-commerce. Het platform alleen bepaalt overigens niet alles — de instellingen en lijstkwaliteit wegen even zwaar."
tags:
  - marketing
  - b2b
---

Je hebt een mooie nieuwsbrief samengesteld, het verzendmoment zorgvuldig gekozen en de campagne verstuurd. En dan bereikt de e-mail de helft van je lijst niet. Ze belanden in de spamfolder, de promotietab of worden stil geblokkeerd zonder dat de ontvanger het merkt. Een hoog openpercentage helpt je niets als de e-mail de inbox niet haalt.

Ik heb dit onlangs van dichtbij meegemaakt bij een klant: zijn open rate kelderde van 25% naar 3% in één maand. Het probleem bleek een verkeerd geconfigureerde SPF-record — een eenmalige fout bij een domeinmigratie die weken onopgemerkt bleef. Na de correctie was de open rate binnen twee weken terug op het oude niveau.

Deliverability is het technische fundament waarop e-mailmarketing staat. Zonder het te begrijpen is elk ander advies over onderwerpregel, timing of segmentatie zinloos -- je optimaliseert een bericht dat toch niet aankomt.

## Wat deliverability bepaalt

E-mailproviders als Gmail, Outlook en Yahoo gebruiken filters die bepalen of een e-mail in de inbox, de promotietab of de spamfolder belandt. Die filters kijken naar drie soorten signalen.

**Reputatie van de verzendende server:** elke e-mailserver heeft een IP-reputatiescore die is opgebouwd op basis van klachten, bouncepercentages en engagement. Als jij een gedeeld IP-adres gebruikt -- wat bij de meeste e-mailmarketingplatforms voor kleine volumes het geval is -- kan een andere gebruiker op hetzelfde IP jouw reputatie beschadigen. Betalende abonnementen bij Mailchimp, Brevo of ActiveCampaign gebruiken IP's met betere reputatiebeheer dan gratis accounts.

**Authenticatietechnische instellingen:** SPF, DKIM en DMARC zijn technische DNS-records die bewijzen dat de e-mail daadwerkelijk van jou afkomstig is en niet van iemand die jouw domein spooft. Zonder correcte instellingen beschouwen ontvangende servers de e-mail als potentieel onbetrouwbaar, met lagere placementpercentages als gevolg.

**Engagement van ontvangers:** ontvangers die e-mails regelmatig openen en op links klikken, signaleren dat de e-mail gewenst is. Ontvangers die nooit openen, niet klikken of e-mails markeren als spam drukken de reputatie van jouw verzenddomein. Gmail en Outlook leren van dit gedrag en passen plaatsing aan voor toekomstige verzendingen.

## SPF, DKIM en DMARC instellen

Dit klinkt technisch maar is een eenmalige configuratie in je DNS-beheeromgeving. De meeste e-mailmarketingplatforms geven stap-voor-stap instructies voor de meest gebruikte DNS-providers.

SPF bepaalt welke mailservers gemachtigd zijn om e-mail te versturen namens jouw domein. DKIM voegt een cryptografische handtekening toe aan elke verzonden e-mail die de ontvanger kan verifiëren. DMARC vertelt ontvangende servers wat te doen als SPF of DKIM niet kloppen: negeren, quarantaine of weigeren.

Controleer je huidige status via een gratis SPF/DKIM/DMARC-checker -- de meeste platforms bieden er een aan in de accountinstellingen. Als één van de drie ontbreekt, is dat je eerste prioriteit.

Vanaf 2024 vereisen Google en Yahoo voor bulk-verzenders (meer dan 5.000 e-mails per dag) dat SPF of DKIM geconfigureerd is en dat er een DMARC-policy actief is. Voor kleinere verzenders geldt dit niet als harde vereiste, maar de impact op deliverability is ook bij kleinere volumes aantoonbaar.

## Lijsthygiëne: het meest onderschatte probleem

Een lijst met 5.000 contacten waarvan 2.000 al twee jaar niet hebben geopend is voor deliverability slechter dan een lijst met 3.000 actieve contacten. Inactieve contacten verlagen de engagement-statistieken en verhogen de kans dat e-mails als spam worden gemarkeerd of in de inbox worden genegeerd.

Plan twee keer per jaar een opschoonronde. Verwijder harde bounces direct en permanent -- een hard bounce betekent dat het e-mailadres niet bestaat en herhaald verzenden naar dat adres schaadt de reputatie. Zachte bounces -- mailbox vol, server tijdelijk onbereikbaar -- kun je na drie opeenvolgende mislukkingen archiveren.

Wat ik bij klanten regelmatig zie: lijsten die jaren niet zijn opgeschoond en voor 40% uit inactieve adressen bestaan. Die bedrijven denken dat een grote lijst een voordeel is, maar sturen feitelijk hun reputatiescore omlaag bij elke campagne.

Stuur een reactiveringsmail naar iedereen die zes tot twaalf maanden niet heeft geopend. Een directe vraag werkt het best: "Wil je onze nieuwsbrief blijven ontvangen? Klik hier." Wie niet reageert binnen twee weken, verwijder je van de actieve lijst. Een lijst die langzaam krimpt wijst soms op een leadgeneratieprobleem; welke B2B-kanalen structureel nieuwe contacten aanleveren lees je in [Leadgeneratie tools voor B2B in Nederland](/blog/leadgeneratie-tools-b2b-nederland/).

Voor [ZZP'ers en kleine ondernemers](/sectoren/marketing/email-marketing-zzp/) met een kleine lijst is dit extra belangrijk: een spammelding-rate van 0,3% -- drie klachten op duizend e-mails -- kan bij een kleine verzender leiden tot tijdelijke opschorting van het account door het platform.

## Wanneer het platform het probleem is

Niet alle deliverability-problemen liggen aan de configuratie of de lijstkwaliteit. Sommige goedkope of gratis platforms hebben structureel lagere deliverability doordat ze te veel gebruikers op gedeelde IP's zetten zonder adequate reputatiebewaking.

Als je na correcte SPF/DKIM/DMARC-configuratie en een grondige lijstopschoning nog altijd deliverability-problemen hebt, vergelijk dan alternatieven via de [marketing software keuzehulp](/tools/marketing/keuzehulp/).

Platforms als Brevo en ActiveCampaign worden in Nederland gewaardeerd om hun deliverability-reputatie en de aanwezigheid van Europese datacenters. Voor [MKB-bedrijven](/sectoren/marketing/marketing-software-mkb/) die in Europa verzenden, biedt dat ook voordelen op het gebied van AVG-compliance.

## Wanneer je het verzendvolume moet opbouwen

Als je een nieuw verzenddomein gebruikt of een lange periode niet hebt verzonden, bouw je het volume dan geleidelijk op. E-mailproviders vertrouwen nieuwe of langdurig inactieve domeinen minder dan domeinen met een consistent verzendhistorie.

Begin met een kleine verzending aan de meest betrokken ontvangers -- degenen die de afgelopen zes maanden hebben geopend en geklikt. Stuur de eerste week vijfhonderd e-mails, de tweede week tweeduizend, de derde week vijfduizend. Als de statistieken goed zijn, bouw je verder op.

Warm-up-processen gelden ook bij het overstappen naar een nieuw e-mailmarketingplatform. Ook al gebruik je hetzelfde afzenddomein, een nieuw platform betekent een nieuw IP-adres met een eigen reputatiehistorie.

Dit is een stap die bijna iedereen overslaat bij een platformmigratie. In mijn ervaring is een slechte start op een nieuw platform de meest voorkomende oorzaak van tijdelijke deliverability-problemen die niets met configuratie of lijstkwaliteit te maken hebben.

## Testen voor verzending

Gebruik voor elke grote campagne een deliverability-test. Stuur de e-mail naar een testaccount bij Gmail, Outlook en een zakelijk domein. Controleer of de e-mail in de inbox belandt, of de afzendernaam correct wordt getoond, en of het DKIM-handtekening aanwezig is in de e-mailheaders.

Stuur nooit een campagne naar de volledige lijst als een testmail al in de spamfolder belandt. Los de oorzaak op voor je verstuurt.

Een volledig overzicht van e-mailmarketingtools voor jouw situatie vind je op de [marketing software sectorgids](/sectoren/marketing/).

## AVG en deliverability: de verbinding

AVG-compliance heeft een directe impact op deliverability. E-mailmarketing aan contacten die geen toestemming hebben gegeven is niet alleen juridisch problematisch maar ook technisch schadelijk: ontvangers die zich niet herinneren zich te hebben aangemeld, markeren de e-mail eerder als spam.

Gebruik altijd een dubbele opt-in waarbij de ontvanger zijn aanmelding bevestigt via een bevestigingsmail. Dat verlaagt de lijstgrootte maar verhoogt de kwaliteit en de betrokkenheid, wat direct ten goede komt aan de deliverability. Zodra de deliverability op orde is, is automation de logische volgende stap; wat dat in de praktijk oplevert lees je in [Marketing automation ROI: 4 voorbeelden](/blog/marketing-automation-roi-voorbeelden/).

## Lees ook

- [Beste email marketing software 2026](/blog/beste-email-marketing-software-2026/) — welk platform heeft de beste deliverability?

Wil je direct marketingsoftware vergelijken? Gebruik de [marketing keuzehulp](/tools/marketing/keuzehulp/).
