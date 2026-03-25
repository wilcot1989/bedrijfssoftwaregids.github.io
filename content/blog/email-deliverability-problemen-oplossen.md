---
title: "Email Deliverability Problemen Oplossen"
date: 2026-03-03
lastmod: 2026-03-03
description: "E-mails landen in de spamfolder? Leer deliverability problemen oplossen voor ZZP en MKB. Doe de keuzehulp voor het beste e-mailmarketingplatform."
author: "Lars de Vries"
author_bio: "B2B software consultant en oprichter van Bedrijfssoftwaregids.nl. Lars test zakelijke software hands-on en helpt Nederlandse ondernemers de juiste keuze te maken."
featured_image: "/images/categories/marketing.svg"
categories:
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
affiliate: false
products:
- name: "Brevo"
  url: "https://get.brevo.com/0rdgkq6hwdei"
  price: "9.00"
- name: "ActiveCampaign"
  url: "https://try.activecampaign.com/bxnnvkmbvwyf"
  price: "15.00"
- name: "MailerLite"
  url: "https://www.mailerlite.com/"
  price: "10.00"
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

## Bounce-types begrijpen en correct afhandelen

Bounces zijn een van de meest directe signalen van deliverability-problemen, maar niet alle bounces zijn gelijk. Het onderscheid tussen hard bounces en soft bounces bepaalt hoe je ze behandelt.

Een hard bounce betekent dat het e-mailadres definitief onbereikbaar is: het adres bestaat niet, het domein bestaat niet, of de ontvankende server weigert structureel alle e-mail voor dat adres. Hard bounces verwijder je direct en permanent van je lijst. Het opnieuw sturen naar een hard bounce-adres schaadt je reputatie en levert niets op.

Een soft bounce betekent een tijdelijk probleem: de mailbox is vol, de server is tijdelijk offline, of er is een tijdelijk filterprobleem. Soft bounces worden doorgaans automatisch opnieuw geprobeerd door het platform. Na drie opeenvolgende soft bounces archiveer je het adres — het is waarschijnlijk een verlaten mailbox of een aanhoudend probleem.

Het bounce-rapport na elke campagne is een van de meest waardevolle rapporten in je e-mailplatform. Een stijgend bouncepercentage is een vroeg signaal van lijstveroudering, een probleem met een specifiek domein, of een configuratiefout. Bij een bouncepercentage boven de 2% van een verzending is actie vereist voor de volgende campagne.

Sommige platforms verwijderen hard bounces automatisch. Verifieer of dit in jouw platform actief is ingesteld. Handmatig bijhouden van bounces is tijdrovend en leidt bij hogere volumes tot gemiste verwijderingen.

## Het verschil tussen inbox, promotietab en spamfolder

Veel verzenders tellen "promotietab-plaatsing" als een deliverability-probleem, maar dat is het technisch niet. Gmail's promotietab is een apart segment in de inbox — de e-mail is bezorgd, alleen in een andere map. Spamfolder-plaatsing is het echte probleem: de e-mail is weggehouden van de ontvanger.

Het onderscheid is relevant voor je aanpak. Als je e-mails in de promotietab belanden maar niet in spam, is je technische configuratie waarschijnlijk in orde. Wat je dan kunt doen: schrijf onderwerpregels die meer op persoonlijke e-mail lijken dan op marketing, vermijd overtrefwoorden zoals "gratis", "korting" of "aanbieding" in de onderwerpregel, en pas het afzenderadres aan naar een persoonsnaam in plaats van een bedrijfsnaam.

De promotietab-plaatsing bij Gmail is gebaseerd op een combinatie van factoren: de aanwezigheid van bulk-e-mail headers, het gebruik van tracking-pixels, de verhouding tekst tot afbeeldingen, en het afzendadres. E-mails die er uitzien als persoonlijke berichten belanden vaker in de primaire inbox.

Dat gezegd: voor commerciële e-mailcampagnes is de promotietab in veel gevallen een acceptabel resultaat. Mensen checken die tab actief als ze op zoek zijn naar aanbiedingen. Optimaliseer op opens en clicks, niet alleen op inbox-plaatsing.

## Onderwerpregel en preheader: de eerste 3 seconden

Als de e-mail de inbox haalt, is de onderwerpregel de volgende hindernis. Je hebt gemiddeld drie seconden om iemand te overtuigen te openen. Die drie seconden bepalen ook of een ontvanger de e-mail als spam markeert zonder te openen.

Een goede onderwerpregel is specifiek, relevant voor de ontvanger en vermijdt woorden die spamfilters triggeren. De meest getriggerde woorden zijn: "gratis", "winner", "cash", "100%", "guaranteed" en varianten daarop in het Nederlands. Maar ook subtielere signalen tellen: een onderwerpregel in volledig hoofdletters, overdreven gebruik van uitroeptekens of emoji's verhogen de kans op spamfiltering.

De preheader — de eerste zin tekst die je in de inbox naast de onderwerpregel ziet — is een onderschat element. Veel verzenders laten dit leeg, waarna de inbox automatisch de eerste tekstzin van de e-mail toont, inclusief "View this email in your browser" als die zin als eerste staat. Dat is verspilde zichtbaarheid. Stel de preheader in als een aanvulling op de onderwerpregel, niet als herhaling ervan.

## Dedicated IP versus gedeeld IP: wanneer maakt het uit

Bij volumes onder de 100.000 e-mails per maand is een dedicated IP doorgaans niet de moeite waard. Een dedicated IP heeft een eigen reputatie die volledig door jouw gedrag wordt bepaald — dat klinkt goed, maar het betekent ook dat je zelf verantwoordelijk bent voor het opbouwen van die reputatie. Als je een nieuw dedicated IP pakt en direct een grote campagne verstuurt, behandelen mailproviders dat als verdacht gedrag.

Bij hogere volumes is een dedicated IP zinvol omdat je niet afhankelijk bent van het gedrag van andere gebruikers op hetzelfde IP. Platforms als Mailchimp, Brevo en ActiveCampaign bieden dedicated IP-opties in hun hogere abonnementsvormen.

Voor de meeste MKB-bedrijven en ZZP'ers zijn gedeelde IP's op een gerenommeerd platform voldoende. De platforms bewaken actief de reputatie van hun IP-pools en verwijderen gebruikers die de reputatie beschadigen. Zolang jij zelf goede lijsthygiëne toepast, profiteer je van de collectieve reputatie.

## Wat je doet na een spammelding van een klant

Als een klant aangeeft dat je e-mail in zijn spamfolder belandt, doe dan het volgende in deze volgorde.

Controleer eerst of de klant jou heeft whitegelisted. Vraag hem om jouw afzenderadres toe te voegen aan zijn contacten of veilige afzenders. Dit is de eenvoudigste oplossing en werkt direct voor die specifieke ontvanger.

Controleer daarna je SPF, DKIM en DMARC-records via een gratis checker. Als die correct zijn, is het probleem waarschijnlijk bij de ontvankende mailserver van de klant en niet bij jou.

Als de klant een zakelijk e-mailadres heeft bij een bedrijf met een eigen mailserver, kan de IT-afdeling van dat bedrijf je domein op een allowlist plaatsen. Dit is relevant bij B2B-e-mail, minder bij consumentenmail.

Als meerdere klanten tegelijk rapporteren dat je e-mails in de spam belanden, is het een systeemprobleem. Controleer dan of er recent iets veranderd is: een domeinmigratie, een update van het e-mailplatform, een campagne met ongewoon hoge spammeldingpercentages.

Een volledig overzicht van e-mailmarketingtools voor jouw situatie vind je op de [marketing software sectorgids](/sectoren/marketing/).

## Lees ook

## Stappenplan: deliverability problemen diagnosticeren en oplossen

Als je open rates dalen of berichten in spam belanden, is dit het stappenplan dat ik bij klanten gebruik. Van diagnose naar oplossing in vier stappen.

### Stap 1: Technische check (15 minuten)

Ga naar MXToolbox, Mail-Tester of de ingebouwde authenticatiecheck van je platform. Controleer:
- Is de SPF-record correct ingesteld? Er mag maar één SPF-record per domein zijn.
- Is DKIM ingesteld voor het verzenddomein van je platform?
- Is er een DMARC-policy actief? Minimaal "p=none" voor monitoring.

Als een van deze drie ontbreekt of fout is geconfigureerd, fix dat eerst. Dit lost bij tachtig procent van de gevallen de ergste problemen op.

### Stap 2: Lijstanalyse (30 minuten)

Exporteer je lijst en analyseer:
- Hoeveel procent heeft de afgelopen 3 maanden geopend?
- Hoeveel procent heeft de afgelopen 6 maanden niets geopend?
- Wat is het bouncepercentage over de laatste drie campagnes?

Als meer dan 30% inactief is (niet geopend in 6 maanden), heb je een lijsthygiëne-probleem. Als het bouncepercentage boven de 2% ligt, is er een data-kwaliteitsprobleem.

### Stap 3: Segmenteer en verzend slim (week 1-2)

Stuur de volgende twee campagnes alleen naar de meest actieve 25% van je lijst (geopend of geklikt in de afgelopen 3 maanden). Dit verhoogt de engagement-statistieken van de verzending en verbetert de reputatie van je verzenddomein.

Stuur tegelijkertijd een reactiveringsmail naar de inactieve groep. Een directe vraag werkt het best: "Wil je onze updates blijven ontvangen? Klik hier om dat te bevestigen." Wie niet reageert binnen twee weken, verwijder je van de actieve lijst.

### Stap 4: Monitor en evalueer (doorlopend)

Na twee weken kijk je opnieuw naar de statistieken. Is het openpercentage gestegen? Dan werkt de segmentatie. Is het bouncepercentage gedaald? Dan werkt de lijstopschoning.

Als de cijfers na een maand niet verbeteren ondanks correcte technische configuratie en opgeschoonde lijst, is het platform zelf het probleem. Dan is de stap naar een alternatief gerechtvaardigd.

---

## Deliverability-benchmarks voor Nederlandse bedrijven

Wat zijn realistische doelstellingen? Hier zijn de benchmarks die ik gebruik bij mijn klanten.

| Metric | Slecht | Acceptabel | Goed | Uitstekend |
|---|---|---|---|---|
| **Open rate** | <15% | 15-25% | 25-40% | >40% |
| **Click rate** | <1% | 1-3% | 3-6% | >6% |
| **Bouncepercentage** | >3% | 1-3% | 0,5-1% | <0,5% |
| **Spammeldingrate** | >0,3% | 0,1-0,3% | <0,1% | <0,05% |
| **Uitschrijfrate** | >0,5% | 0,2-0,5% | 0,1-0,2% | <0,1% |

*Noot: Open rates zijn door Apple Mail Privacy Protection structureel hoger dan voor 2021. Gebruik click rates als betrouwbaardere metric voor engagement.*

Een open rate boven de 40% klinkt hoog, maar is haalbaar voor segmenten met een hoge relevantie en opgebouwde relatie — bijv. bestaande klanten of actieve community-leden. Broadcast naar een koude lijst levert doorgaans lagere percentages op.

---

## De meest voorkomende technische fouten per platform

Elk e-mailmarketingplatform heeft zijn eigen aandachtspunten bij de technische configuratie.

**Mailchimp:** Standaard gebruikt Mailchimp gedeelde domeinen voor SPF. Voor betere deliverability activeer je "Custom Authentication" met je eigen domein. Dat vraagt een aanpassing in je DNS. Niet standaard ingeschakeld, maar sterk aanbevolen.

**Brevo:** Brevo vereist bij aanmelding een domeinverificatie via DKIM. Die stap is verplicht maar wordt door sommige gebruikers overgeslagen bij de initiële setup. Controleer in je Brevo-instellingen onder Senders of je domein "geauthenticeerd" staat.

**ActiveCampaign:** ActiveCampaign biedt standaard gedeelde IP's op instapplannen. Op hogere plannen is een dedicated IP beschikbaar. Bij een lijst boven de 50.000 contacten is dat de moeite van het overwegen waard.

**HubSpot:** HubSpot genereert automatisch DKIM-records per portaldomein. Controleer in het HubSpot-dashboard onder Marketing → Email → Settings of het verzenddomein correct is geverifieerd.

---

- [Beste email marketing software 2026](/blog/beste-email-marketing-software-2026/) — welk platform heeft de beste deliverability?

Wil je direct marketingsoftware vergelijken? Gebruik de [marketing keuzehulp](/tools/marketing/keuzehulp/). Bereken ook de [marketing software kosten](/tools/marketing/kosten-berekenen/) voor jouw lijstgrootte om te zien wat een goed e-mailplatform je per maand kost.
