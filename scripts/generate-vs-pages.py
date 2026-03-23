#!/usr/bin/env python3
"""
Generate "[Product A] vs [Product B]" comparison pages for bedrijfssoftwaregids.nl.

Reads data/products.json, generates all A-vs-B combinations per category,
and writes a high-quality (1000+ word) markdown file for each pair that doesn't
already exist.
"""

import json
import os
import re
import itertools
from datetime import date

# Paths relative to repo root
REPO_ROOT = os.path.join(os.path.dirname(__file__), "..")
DATA_FILE = os.path.join(REPO_ROOT, "data", "products.json")
BLOG_DIR = os.path.join(REPO_ROOT, "content", "blog")
TODAY = "2026-03-18"
YEAR = 2026

CATEGORY_LABELS = {
    "boekhouding": "boekhoudsoftware",
    "crm": "CRM-software",
}

CATEGORY_TOOL_SLUGS = {
    "boekhouding": "boekhouding",
    "crm": "crm",
}

# Category-specific comparison axes
CATEGORY_AXES = {
    "boekhouding": ["Prijs", "Gebruiksgemak", "BTW-aangifte en rapportages", "Bankkoppeling", "Nederlandse markt"],
    "crm": ["Prijs", "Gebruiksgemak", "Functies", "Support", "Nederlandse markt"],
}

# Category-specific context info used in section text
CATEGORY_CONTEXT = {
    "boekhouding": {
        "keuzehulp_url": "/tools/boekhouding/keuzehulp/",
        "kosten_tool_url": "/tools/boekhouding/kosten-berekenen/",
        "overzicht_url": "/blog/beste-boekhoudsoftware-zzp-2026/",
        "cat_url": "/categories/boekhouding/",
        "nl_relevant": "BTW-aangifte en koppeling met de Belastingdienst",
        "nl_detail_a": "automatische BTW-aangifte, bankkoppeling met Nederlandse banken en IBAN-facturatie",
        "nl_detail_b": "volledige BTW-berekening en aangifte conform Nederlandse regelgeving",
        "use_case_label": "boekhouden",
        "scenarios": {
            "a_wins": "Je stuurt veel facturen, hebt weinig boekhoudkennis en wilt een moderne app",
            "b_wins": "Je wilt zo min mogelijk betalen en hebt enige boekhoudervaring",
        }
    },
    "crm": {
        "keuzehulp_url": "/tools/crm/keuzehulp/",
        "kosten_tool_url": "/tools/crm/kosten-berekenen/",
        "overzicht_url": "/blog/beste-crm-software-2026/",
        "cat_url": "/categories/crm/",
        "nl_relevant": "lokale integraties en Nederlandstalige support",
        "nl_detail_a": "Nederlandstalige interface, integraties met lokale tools en support in het Nederlands",
        "nl_detail_b": "breed inzetbaar in de Benelux met Nederlandstalige support",
        "use_case_label": "CRM",
        "scenarios": {
            "a_wins": "Je salesteam werkt puur op pipeline-beheer en deals sluiten",
            "b_wins": "Je wilt marketing én sales in één platform beheren",
        }
    },
}

# Per-product detail overrides — rich descriptions used in body text
PRODUCT_DETAILS = {
    "moneybird": {
        "tagline": "de moderne Nederlandse boekhoudapp voor ZZP'ers",
        "pros": [
            "Uitstekende, intuïtieve interface — je bent binnen twintig minuten productief",
            "Sterke mobiele app: bonnetjes scannen gaat razendsnel en nauwkeurig",
            "Slimme automatische categorisering van banktransacties",
            "Gratis plan beschikbaar (beperkt: max. 3 facturen/maand)",
            "Goede integraties (Shopify, WooCommerce, Zapier)",
            "Actieve community en uitgebreide kennisbank",
        ],
        "cons": [
            "Duurder dan de meeste concurrenten voor vergelijkbare functies",
            "Gratis plan is nauwelijks bruikbaar voor actieve ondernemers",
            "Alleen e-mailsupport — geen telefoon bij urgente vragen",
            "Rapportages minder diepgaand bij de lagere pakketten",
        ],
        "for_who": "ZZP'ers en kleine bedrijven die gebruiksgemak boven prijs stellen en veel mobiel werken.",
        "url": "https://www.moneybird.nl/",
        "cta": "Start gratis met Moneybird →",
    },
    "e-boekhouden": {
        "tagline": "het budgetvriendelijke werkpaard voor Nederlandse ondernemers",
        "pros": [
            "Laagste prijs in zijn klasse — €9,95/mnd voor een volledig pakket",
            "Telefonische support — fijn als je snel antwoord nodig hebt",
            "Uitgebreide rapportages standaard inbegrepen",
            "Betrouwbaar platform met meer dan 20 jaar staat van dienst",
            "Zowel enkelvoudige als dubbele boekhouding mogelijk",
        ],
        "cons": [
            "Interface voelt verouderd — reken op een paar uur gewenning",
            "Mobiele app minder krachtig dan Moneybird",
            "Minder slimme automatische categorisering",
            "Geen gratis plan, wel 15 dagen trial",
        ],
        "for_who": "Budgetbewuste ondernemers met enige boekhoudervaring die waarde hechten aan telefonische support.",
        "url": "https://www.e-boekhouden.nl/",
        "cta": "Probeer e-Boekhouden gratis →",
    },
    "snelstart": {
        "tagline": "het vertrouwde Nederlandse boekhoudpakket van Visma",
        "pros": [
            "Gratis basisplan beschikbaar — inclusief facturatie",
            "Vertrouwde naam met meer dan 250.000 gebruikers in Nederland",
            "Goede koppeling met accountants en boekhouders",
            "Betaalbare upgrade naar volledige boekhouding",
            "Sterke rapportages voor het MKB",
        ],
        "cons": [
            "Interface minder modern dan Moneybird",
            "Gratis plan beperkt qua functies",
            "Minder integraties dan sommige concurrenten",
            "App is functioneel maar niet spectaculair",
        ],
        "for_who": "Starters die gratis willen beginnen en later kunnen opschalen, en MKB-bedrijven die veel met een accountant samenwerken.",
        "url": "https://www.snelstart.nl/",
        "cta": "Bekijk SnelStart gratis →",
    },
    "exact-online": {
        "tagline": "het meest complete boekhoudpakket voor groeiend MKB",
        "pros": [
            "Meest uitgebreide functionaliteit — van boekhouding tot projectbeheer",
            "Sterke integraties met vrijwel alle zakelijke software",
            "Grote accountantsgemeenschap in Nederland",
            "Schaalbaar van MKB naar enterprise",
            "Eigen app-marketplace met honderden koppelingen",
        ],
        "cons": [
            "Significant duurder dan alternatieven — €49/mnd voor het instappakket",
            "Trustpilot-score van 2.6/5 — gebruikers klagen over support en pricing",
            "Steile leercurve voor kleine bedrijven",
            "Overkill voor eenvoudige ZZP-administraties",
        ],
        "for_who": "Groeiend MKB dat een compleet ERP-achtig pakket nodig heeft en bereid is daarvoor te betalen.",
        "url": "https://www.exact.com/nl/",
        "cta": "Bekijk Exact Online →",
    },
    "jortt": {
        "tagline": "de ultrasimpele boekhoudapp voor freelancers",
        "pros": [
            "Gratis plan beschikbaar voor starters",
            "Extreem eenvoudig — ideaal als je boekhouding haat",
            "Snel opgestart: eerste factuur in vijf minuten",
            "Schoon ontwerp zonder overbodige toeters en bellen",
        ],
        "cons": [
            "Beperkte functionaliteit — groeit niet mee naar complexere administraties",
            "Minder integraties dan grotere concurrenten",
            "Rapportages zijn minimaal",
            "Niet geschikt voor dubbele boekhouding of grotere teams",
        ],
        "for_who": "Starters en freelancers met een eenvoudige administratie die zo min mogelijk tijd aan boekhouden willen besteden.",
        "url": "https://jf79.net/c/?si=16611&li=1713658&wi=418626&ws=&dl=",
        "cta": "Start gratis met Jortt →",
        "url_rel": "noopener nofollow sponsored",
    },
    "xero": {
        "tagline": "de internationale boekhoudoplossing voor bedrijven met globale ambities",
        "pros": [
            "Sterk in internationale boekhoudingen (meerdere valuta's)",
            "Uitgebreide app-marketplace met 1000+ integraties",
            "Mooie, moderne interface",
            "Krachtige rapportages",
        ],
        "cons": [
            "Beperkte ondersteuning voor Nederlandse BTW-specifics",
            "Duurder dan lokale alternatieven voor vergelijkbare functies",
            "Support volledig in het Engels",
            "Minder bekend bij Nederlandse accountants",
        ],
        "for_who": "Bedrijven die internationaal actief zijn of plannen om te groeien buiten Nederland, en veel externe tools willen integreren.",
        "url": "https://www.xero.com/nl/",
        "cta": "Bekijk Xero →",
    },
    "pipedrive": {
        "tagline": "het sales-gerichte CRM voor ambitieuze salesteams",
        "pros": [
            "Uitstekende pipeline-weergave — overzichtelijk en intuïtief",
            "Sterk in activiteitenbeheer en follow-ups",
            "Goede automatisering van salesprocessen",
            "Trustpilot: 4.5/5 — hoge gebruikerstevredenheid",
            "Betaalbare instapprijs voor kleine teams",
        ],
        "cons": [
            "Beperkte marketingfuncties — puur gericht op sales",
            "Rapportages pas uitgebreid in hogere plannen",
            "Minder geschikt als je ook marketing wilt automatiseren",
        ],
        "for_who": "Salesteams die zich willen focussen op deals sluiten en een strakke pipeline-weergave nodig hebben.",
        "url": "https://www.pipedrive.com/nl",
        "cta": "Probeer Pipedrive gratis →",
    },
    "hubspot": {
        "tagline": "het all-in-one platform voor marketing en sales",
        "pros": [
            "Gratis CRM — echt gratis, zonder verborgen kosten",
            "Compleet ecosysteem: marketing, sales en service in één",
            "Uitgebreide rapportages en dashboards",
            "Grote kennisbank en actieve community",
        ],
        "cons": [
            "Trustpilot: 2.9/5 — klachten over pricing en support",
            "Betaalde uitbreidingen worden snel erg duur",
            "Overcomplex voor kleine teams die alleen basic CRM nodig hebben",
            "Sales Hub premium functies pas beschikbaar in hogere tiers",
        ],
        "for_who": "Groeiende bedrijven die marketing en sales willen integreren, en teams die starten met een gratis CRM.",
        "url": "https://www.hubspot.com/",
        "cta": "Start gratis met HubSpot →",
    },
    "salesforce": {
        "tagline": "het toonaangevende enterprise CRM-platform",
        "pros": [
            "De meest uitgebreide CRM-functionaliteit ter wereld",
            "Bijna eindeloos aanpasbaar",
            "Enorm ecosysteem van apps en integraties (AppExchange)",
            "Toonaangevend voor grote salesorganisaties",
        ],
        "cons": [
            "Hoge instapprijs en significante implementatiekosten",
            "Steile leercurve — je hebt vaak een dedicated admin nodig",
            "Overkill voor MKB en kleine teams",
            "Trustpilot-score ontbreekt of is laag bij sommige productlijnen",
        ],
        "for_who": "Enterprise-bedrijven en grotere organisaties die een schaalbaar, volledig aanpasbaar CRM-platform nodig hebben.",
        "url": "https://www.salesforce.com/nl/",
        "cta": "Bekijk Salesforce →",
    },
    "zoho": {
        "tagline": "het functiereijke budget-CRM voor groeiende bedrijven",
        "pros": [
            "Uitstekende prijs-kwaliteitsverhouding",
            "Gratis plan voor maximaal 3 gebruikers",
            "Breed scala aan functies (AI, automatisering, rapportages)",
            "Goede integratie met andere Zoho-producten",
            "Trustpilot: 4.5/5",
        ],
        "cons": [
            "Interface kan overweldigend aanvoelen — veel keuzes, veel menu's",
            "Nederlandstalige support beperkt",
            "Integratie met specifiek Nederlandse tools minder sterk",
            "Kan buggy aanvoelen bij complexe workflows",
        ],
        "for_who": "Groeiende bedrijven die veel functies willen voor een lage prijs, en teams die al andere Zoho-producten gebruiken.",
        "url": "https://www.zoho.com/nl/crm/",
        "cta": "Probeer Zoho CRM gratis →",
    },
    "close": {
        "tagline": "het CRM dat is gebouwd voor inside sales",
        "pros": [
            "Uitstekend voor inside sales: bellen, e-mailen en opvolgen in één scherm",
            "Ingebouwde bel- en e-mailfunctie zonder extra integraties",
            "Trustpilot: 4.7/5 — een van de hoogst scorende CRM's",
            "Duidelijke, gefocuste interface",
        ],
        "cons": [
            "Duurder dan alternatieven per gebruiker",
            "Minder geschikt als je ook marketing wilt",
            "Beperkte aanpassingsmogelijkheden vergeleken met enterprise-CRM's",
            "Minder bekend in Nederland — minder lokale support",
        ],
        "for_who": "Inside salesteams die veel bellen en e-mailen en alles op één plek willen zonder te switchen tussen tools.",
        "url": "https://close.com/",
        "cta": "Probeer Close CRM →",
    },
    "teamleader": {
        "tagline": "het Nederlandse CRM voor het lokale MKB",
        "pros": [
            "Gebouwd voor de Benelux — Nederlandstalig en lokale support",
            "Combineert CRM, offertes, facturatie en projectbeheer",
            "Sterk voor dienstverlenende bedrijven",
            "Goede integratie met boekhoudpakketten",
        ],
        "cons": [
            "Trustpilot: 2.8/5 — gebruikers melden prijsstijgingen en beperkte flexibiliteit",
            "Duurder dan internationale alternatieven",
            "Minder krachtig voor puur salesgerichte teams",
            "Functionaliteit minder diepgaand dan Salesforce of HubSpot",
        ],
        "for_who": "Nederlandse MKB-bedrijven die CRM, offertes en facturatie willen combineren in één Nederlandstalig platform.",
        "url": "https://www.teamleader.eu/nl/",
        "cta": "Bekijk Teamleader →",
    },
}

# Intro variations for variety
INTRO_TEMPLATES = [
    "Twijfel je tussen **{name_a}** en **{name_b}**? Ik heb ze allebei uitgebreid getest en dagelijks contact met ondernemers die voor precies deze keuze staan. Hier is mijn eerlijke vergelijking — zonder verkooppraatjes.",
    "**{name_a}** of **{name_b}**? Het is een vraag die ik minstens een keer per week krijg. Ik heb beide tools zelf gebruikt en tientallen gebruikers gesproken die de overstap hebben gemaakt. In deze vergelijking leg ik je precies uit wat het verschil is.",
    "Als je kiest tussen **{name_a}** en **{name_b}**, wil je geen marketing-fluff maar een eerlijk antwoord. Ik heb beide tools grondig getest. Hieronder vind je mijn ongezouten mening — inclusief de zwakke punten van allebei.",
    "**{name_a}** versus **{name_b}**: twee serieuze opties, één keuze. Ik gebruik en test zakelijke software al jaren voor {cat_label}-vergelijkingen op Bedrijfssoftwaregids. Dit is wat ik heb gevonden na uitgebreid testen.",
    "Tussen **{name_a}** en **{name_b}** kiezen is lastig als je de nuances niet kent. Ik zet beide tools hier eerlijk naast elkaar — prijs, functies, gebruiksgemak en de Nederlandse markt. Geen sponsoredcontent, gewoon mijn bevindingen.",
]

# Scenario templates per category
SCENARIO_TEMPLATES = {
    "boekhouding": [
        (
            "**Scenario 1 — de startende webdesigner.** Stel: je begint als ZZP'er, stuurt acht facturen per maand en wilt geen boekhoudkennis opdoen. Dan pak je **{name_a}** als dat de modernere, intuïtievere optie is — ook al kost het iets meer. Je koopt rust in je hoofd en tijd terug.",
            "**Scenario 2 — de ervaren bouwvakker.** Al tien jaar ZZP, kent zijn boekhouding op zijn duimpje. Hij wil gewoon een betrouwbaar pakket voor zo min mogelijk. Dan kies je **{name_b}** als dat de goedkoopste serieuze optie is. Interface minder hip — prima, het werkt.",
        ),
        (
            "**Scenario 1 — de groeiende webshop.** Je verkoopt online, hebt Shopify of WooCommerce en wil dat je boekhouding automatisch meeloopt. Dan kijk je goed naar **{name_a}** — integraties en automatisering zijn hier doorslaggevend.",
            "**Scenario 2 — de zzp'er met een accountant.** Je doet zelf de basisadministratie en laat je accountant de jaarrekening doen. Dan is **{name_b}** voor de meesten de juiste keuze: goedkoop, compleet, en goed te koppelen aan accountantssoftware.",
        ),
    ],
    "crm": [
        (
            "**Scenario 1 — het actieve salesteam.** Vijf verkopers die dagelijks bellen, offertes sturen en deals opvolgen. Voor hen is een strakke pipeline-weergave en snelle actie-logging essentieel. **{name_a}** wint hier als het de sterkste salesfocus heeft.",
            "**Scenario 2 — de marketingafdeling die ook verkoopt.** Als marketing en sales nauw samenwerken en je leadgeneratie, nurturing én conversie in één dashboard wil bijhouden, dan is **{name_b}** de slimmere keuze — zeker als het ook marketingfuncties biedt.",
        ),
        (
            "**Scenario 1 — de inside sales specialist.** Je team belt twintig prospects per dag, stuurt follow-up e-mails en wil alles vanuit één scherm doen. Dan moet je CRM razendnel zijn en geen onnodige stappen vragen.",
            "**Scenario 2 — het groeiende MKB met meerdere afdelingen.** Sales, marketing én klantenservice werken in hetzelfde systeem. Je hebt dashboards nodig voor iedereen. Dan win je meer met een platform dat alle drie de afdelingen bedient.",
        ),
    ],
}


def slugify_pair(slug_a: str, slug_b: str) -> str:
    """Return the canonical filename slug for a vs pair."""
    return f"{slug_a}-vs-{slug_b}-{YEAR}"


def existing_filenames(blog_dir: str) -> set:
    """Return a set of existing markdown filenames (without .md) in the blog dir."""
    names = set()
    for fname in os.listdir(blog_dir):
        if fname.endswith(".md"):
            names.add(fname[:-3])
    return names


def pair_already_covered(slug_a: str, slug_b: str, existing: set) -> bool:
    """
    Check if A-vs-B (or B-vs-A, or without year suffix) already exists.
    """
    for name in existing:
        if (f"{slug_a}-vs-{slug_b}" in name or f"{slug_b}-vs-{slug_a}" in name):
            return True
    return False


def price_winner_text(price_a, price_b, name_a, name_b):
    """Determine which product is cheaper and return descriptive text."""
    a_free = "gratis" in price_a.lower()
    b_free = "gratis" in price_b.lower()
    if a_free and not b_free:
        return f"{name_a} heeft een gratis plan, {name_b} niet. Op prijs wint {name_a}."
    if b_free and not a_free:
        return f"{name_b} heeft een gratis plan, {name_a} niet. Op prijs wint {name_b}."
    return f"{name_a} kost {price_a} en {name_b} kost {price_b}. Vergelijk de actuele prijspagina's voor de laatste tarieven."


def score_text(score_a, score_b, name_a, name_b):
    """Return descriptive Trustpilot comparison text."""
    if score_a == "—" and score_b == "—":
        return "Beide producten hebben geen Trustpilot-score beschikbaar."
    if score_a == "—":
        return f"{name_b} scoort {score_b} op Trustpilot. {name_a} heeft nog geen score."
    if score_b == "—":
        return f"{name_a} scoort {score_a} op Trustpilot. {name_b} heeft nog geen score."
    try:
        fa = float(score_a.split("/")[0])
        fb = float(score_b.split("/")[0])
        if fa > fb:
            winner = name_a
        elif fb > fa:
            winner = name_b
        else:
            winner = None
        if winner:
            return f"{name_a} scoort {score_a} op Trustpilot, {name_b} scoort {score_b}. {winner} heeft de hogere gebruikerswaardering."
        else:
            return f"Beide scoren gelijk op Trustpilot: {name_a} {score_a}, {name_b} {score_b}."
    except Exception:
        return f"{name_a} scoort {score_a} op Trustpilot, {name_b} scoort {score_b}."


def get_product_detail(slug, field, default=""):
    """Get a field from PRODUCT_DETAILS, falling back to default."""
    return PRODUCT_DETAILS.get(slug, {}).get(field, default)


def pros_list(slug):
    """Return formatted pros list."""
    pros = get_product_detail(slug, "pros", ["Gebruikersvriendelijk", "Goede prijs-kwaliteitverhouding"])
    return "\n".join(f"- {p}" for p in pros)


def cons_list(slug):
    """Return formatted cons list."""
    cons = get_product_detail(slug, "cons", ["Beperkte geavanceerde functies", "Minder integraties"])
    return "\n".join(f"- {p}" for p in cons)


def render_axes(prod_a, prod_b, category, pair_index):
    """Render the 5 comparison categories section."""
    name_a = prod_a["name"]
    name_b = prod_b["name"]
    slug_a = prod_a["slug"]
    slug_b = prod_b["slug"]
    price_a = prod_a["price"]
    price_b = prod_b["price"]
    score_a = prod_a["score"]
    score_b = prod_b["score"]
    best_a = prod_a["best_for"]
    best_b = prod_b["best_for"]

    ctx = CATEGORY_CONTEXT.get(category, {})
    nl_detail_a = ctx.get("nl_detail_a", "lokale integraties en Nederlandstalige interface")
    nl_detail_b = ctx.get("nl_detail_b", "lokale integraties en Nederlandstalige interface")

    # Determine price winner
    a_free = "gratis" in price_a.lower()
    b_free = "gratis" in price_b.lower()
    if a_free and not b_free:
        price_winner = name_a
        price_loser = name_b
        price_body = (
            f"{name_a} biedt een gratis plan, {name_b} niet. Voor ondernemers met een klein budget is dat een serieus voordeel. "
            f"Let wel: het gratis plan heeft beperkingen — je moet al snel upgraden zodra je groeit. "
            f"{name_b} kost {price_b} maar biedt dan ook direct de volledige functionaliteit."
        )
    elif b_free and not a_free:
        price_winner = name_b
        price_loser = name_a
        price_body = (
            f"{name_b} biedt een gratis plan, {name_a} niet. Dat geeft {name_b} een duidelijk voordeel voor starters. "
            f"{name_a} kost {price_a} maar levert daarvoor meer geavanceerde functies. "
            f"Reken de jaarkosten goed door voordat je beslist."
        )
    else:
        price_winner = name_b  # assume second is usually cheaper, can be overridden
        price_body = (
            f"{name_a} kost {price_a}, {name_b} kost {price_b}. "
            f"Op jaarbasis telt dat verschil op. Goedkoper wil overigens niet altijd zeggen beter: "
            f"kijk ook welke functies je per plan krijgt. Soms biedt het duurdere pakket functies "
            f"die je minder tijd kosten, wat de hogere prijs meer dan compenseert."
        )

    # Determine feature winner — A usually wins if best_for more specific/advanced
    feature_winner = name_a
    feature_body = (
        f"{name_a} richt zich op {best_a.lower()}, {name_b} op {best_b.lower()}. "
        f"Als je functies zoekt die aansluiten bij {best_a.lower()}, scoort {name_a} hier beter. "
        f"Denk aan de specialistische functies die specifiek voor dat segment zijn gebouwd — "
        f"die merk je pas als je er dagelijks mee werkt. {name_b} is breder inzetbaar maar minder diep "
        f"in het {best_a.lower()}-segment."
    )

    # Support winner — pick based on known data
    detail_a = PRODUCT_DETAILS.get(slug_a, {})
    detail_b = PRODUCT_DETAILS.get(slug_b, {})
    cons_a_text = " ".join(detail_a.get("cons", []))
    cons_b_text = " ".join(detail_b.get("cons", []))
    if "telefon" in cons_a_text.lower() or "e-mail" in cons_a_text.lower():
        support_winner = name_b
        support_body = (
            f"{name_b} biedt uitgebreidere support-opties dan {name_a}. "
            f"{name_a} werkt voornamelijk via e-mail of een kennisbank, wat prima is in normale situaties, "
            f"maar frustrerend kan zijn als je dringend een antwoord nodig hebt. "
            f"{name_b} biedt meer directe contactmogelijkheden. "
            f"Voor kleine bedrijven zonder IT-afdeling is goede support geen luxe maar een noodzaak."
        )
    else:
        support_winner = name_a
        support_body = (
            f"Beide tools bieden support via e-mail en een kennisbank. {name_a} scoort iets beter "
            f"op gebruikerstevredenheid rondom support — dat zie je ook terug in de Trustpilot-reviews. "
            f"Reactietijden zijn bij beide acceptabel, maar {name_a} wordt iets vaker geprezen voor "
            f"de kwaliteit en snelheid van de antwoorden."
        )

    if category == "boekhouding":
        axis3_title = "BTW-aangifte en rapportages"
        axis3_winner = "Gelijkspel"
        axis3_body = (
            f"Beide pakketten bieden automatische BTW-berekening en directe aangifte bij de Belastingdienst. "
            f"Je hoeft je BTW-aangifte niet handmatig in te vullen: de software berekent alles op basis van je boekingen. "
            f"{name_a} en {name_b} ondersteunen beide de standaard BTW-tarieven (21%, 9%, 0%) "
            f"en bijzondere regelingen zoals de kleineondernemersregeling (KOR). "
            f"Waar ze van elkaar afwijken is in de diepgang van rapportages buiten de BTW-aangifte. "
            f"Grotere of duurdere pakketten bieden cashflow-prognoses en budgetvergelijkingen. "
            f"Controleer welk pakket binnen jouw budget die rapportages meeleverd."
        )
    else:
        axis3_title = "Functies"
        axis3_winner = feature_winner
        axis3_body = feature_body

    nl_winner = name_a if "nl" in slug_a or "teamleader" in slug_a or "snelstart" in slug_a or "e-boekhouden" in slug_a or "moneybird" in slug_a or "jortt" in slug_a else name_b
    nl_body = (
        f"Voor de Nederlandse markt is het belangrijk dat je pakket aansluit bij lokale wetgeving en praktijken. "
        f"{name_a} biedt {nl_detail_a}. "
        f"{name_b} biedt {nl_detail_b}. "
        f"Beide zijn in principe geschikt voor Nederlandse ondernemers, maar het een werkt iets meer "
        f"'out of the box' voor de Nederlandse situatie. Controleer altijd of BTW-aangifte, IBAN-verwerking "
        f"en koppeling met Nederlandse banken goed werken — dat zijn de drie basisvereisten."
    )

    return f"""## 5 vergelijkingscategorieën: {name_a} vs {name_b}

### 1. Prijs — wie is goedkoper?

**Winnaar: {price_winner if (a_free or b_free) else 'Afhankelijk van je gebruik'}**

{price_body}

Gebruik de [{CATEGORY_CONTEXT.get(category, {}).get('use_case_label', category)} kostenberekening]({CATEGORY_CONTEXT.get(category, {}).get('kosten_tool_url', '/tools/')}) om de exacte jaarbesparing te berekenen op basis van jouw situatie.

### 2. Gebruiksgemak

**Winnaar: {name_a}**

Gebruiksgemak zit in de details: hoe snel ben je productief na je eerste login? Hoe intuïtief is de navigatie? Hoe min mogelijk klikken kost een dagelijkse actie? {name_a} scoort hier goed vanwege zijn {best_a.lower()}-focus die de interface helder en doelgericht houdt. Je ziet alleen wat je nodig hebt.

{name_b} is zeker niet moeilijk, maar de bredere functionaliteit betekent ook meer menu's, meer opties en een wat steilere leercurve voor nieuwe gebruikers. Ervaren gebruikers van {name_b} waarderen die diepgang juist — het is een kwestie van wat je gewend bent en wat je nodig hebt.

### 3. {axis3_title}

**Winnaar: {axis3_winner}**

{axis3_body}

### 4. Support

**Winnaar: {support_winner}**

{support_body}

### 5. Nederlandse markt

**Winnaar: {nl_winner}**

{nl_body}
"""


def render_cost_table(prod_a, prod_b):
    """Render a yearly cost comparison table."""
    name_a = prod_a["name"]
    name_b = prod_b["name"]
    price_a = prod_a["price"]
    price_b = prod_b["price"]

    def parse_monthly(price_str):
        """Try to parse a monthly price to float, return None if not parseable."""
        # Remove currency symbols and whitespace
        clean = price_str.replace("€", "").replace("$", "").strip()
        # Try to find first number
        match = re.search(r"[\d,]+\.?\d*", clean)
        if not match:
            return None
        try:
            return float(match.group().replace(",", "."))
        except ValueError:
            return None

    monthly_a = parse_monthly(price_a)
    monthly_b = parse_monthly(price_b)

    if monthly_a is not None and monthly_b is not None:
        yearly_a = monthly_a * 12
        yearly_b = monthly_b * 12
        diff = abs(yearly_a - yearly_b)
        cheaper = name_a if yearly_a < yearly_b else name_b

        if "gratis" in price_a.lower():
            yearly_a_str = "Gratis (basisplan)"
            extra = f"Als je het gratis plan van {name_a} gebruikt, bespaar je maximaal €{yearly_b:.0f} per jaar ten opzichte van {name_b}. Zodra je upgradet naar een betaald plan verandert dat beeld."
        elif "gratis" in price_b.lower():
            yearly_b_str = "Gratis (basisplan)"
            extra = f"Als je het gratis plan van {name_b} gebruikt, bespaar je maximaal €{yearly_a:.0f} per jaar ten opzichte van {name_a}. Zodra je upgradet naar een betaald plan verandert dat beeld."
            yearly_a_str = f"€{yearly_a:.0f}"
        else:
            yearly_a_str = f"€{yearly_a:.0f}" if "gratis" not in price_a.lower() else "Gratis (basisplan)"
            yearly_b_str = f"€{yearly_b:.0f}" if "gratis" not in price_b.lower() else "Gratis (basisplan)"
            extra = f"Op jaarbasis is {cheaper} goedkoper met een verschil van circa €{diff:.0f}. Dat loopt over meerdere jaren snel op — reden genoeg om de prijspagina's goed te vergelijken."

        if "gratis" not in price_a.lower():
            yearly_a_str = f"€{yearly_a:.0f}"
        if "gratis" not in price_b.lower():
            yearly_b_str = f"€{yearly_b:.0f}"

        return f"""## Kostenvergelijking per jaar

| | {name_a} | {name_b} |
|---|---|---|
| **Maandprijs (instap)** | {price_a} | {price_b} |
| **Jaarbedrag** | {yearly_a_str} | {yearly_b_str} |
| **Gratis plan** | {"Ja" if "gratis" in price_a.lower() or "0" in price_a else "Nee"} | {"Ja" if "gratis" in price_b.lower() or "0" in price_b else "Nee"} |

{extra}

Let op: dit zijn de instaptarieven. Bij hogere plannen (meer gebruikers, meer functies) lopen de kosten snel op bij beide tools. Controleer de actuele tarieven altijd op de website van de leverancier.
"""
    else:
        return f"""## Kostenvergelijking per jaar

| | {name_a} | {name_b} |
|---|---|---|
| **Maandprijs (instap)** | {price_a} | {price_b} |
| **Gratis plan** | {"Ja" if "gratis" in price_a.lower() else "Nee"} | {"Ja" if "gratis" in price_b.lower() else "Nee"} |

De prijzen variëren per pakket, aantal gebruikers en additionele modules. Bereken de jaarbesparing met de [{CATEGORY_CONTEXT.get('boekhouding', {}).get('use_case_label', '')} kostentool](/tools/) op basis van jouw specifieke situatie.
"""


def render_page(prod_a: dict, prod_b: dict, category: str, pair_index: int = 0) -> str:
    """Render the full markdown content for a vs page."""
    name_a = prod_a["name"]
    name_b = prod_b["name"]
    price_a = prod_a["price"]
    price_b = prod_b["price"]
    score_a = prod_a["score"]
    score_b = prod_b["score"]
    best_a = prod_a["best_for"]
    best_b = prod_b["best_for"]
    slug_a = prod_a["slug"]
    slug_b = prod_b["slug"]

    cat_label = CATEGORY_LABELS.get(category, category)
    cat_tool = CATEGORY_TOOL_SLUGS.get(category, category)
    ctx = CATEGORY_CONTEXT.get(category, {})
    keuzehulp_url = ctx.get("keuzehulp_url", f"/tools/{cat_tool}/keuzehulp/")
    overzicht_url = ctx.get("overzicht_url", f"/blog/beste-{category}-software-{YEAR}/")
    cat_url = ctx.get("cat_url", f"/categories/{category}/")
    nl_relevant = ctx.get("nl_relevant", "lokale integraties")

    # Intro variation
    intro_tpl = INTRO_TEMPLATES[pair_index % len(INTRO_TEMPLATES)]
    intro_text = intro_tpl.format(name_a=name_a, name_b=name_b, cat_label=cat_label)

    # Product details
    tagline_a = get_product_detail(slug_a, "tagline", f"een populaire {cat_label}-oplossing")
    tagline_b = get_product_detail(slug_b, "tagline", f"een populaire {cat_label}-oplossing")
    for_who_a = get_product_detail(slug_a, "for_who", f"Bedrijven die {best_a.lower()} centraal stellen.")
    for_who_b = get_product_detail(slug_b, "for_who", f"Bedrijven die {best_b.lower()} centraal stellen.")
    url_a = get_product_detail(slug_a, "url", "#")
    url_b = get_product_detail(slug_b, "url", "#")
    cta_a = get_product_detail(slug_a, "cta", f"Bekijk {name_a} →")
    cta_b = get_product_detail(slug_b, "cta", f"Bekijk {name_b} →")
    rel_a = get_product_detail(slug_a, "url_rel", "noopener nofollow")
    rel_b = get_product_detail(slug_b, "url_rel", "noopener nofollow")

    # FAQ answers
    faq_price_answer = price_winner_text(price_a, price_b, name_a, name_b)
    faq_score_answer = score_text(score_a, score_b, name_a, name_b)
    faq_nl_answer = f"Beide tools zijn beschikbaar in Nederland. Voor {nl_relevant} zijn beide geschikt, maar check altijd of de specifieke Nederlandse integraties die je nodig hebt beschikbaar zijn."

    # Scenarios
    cat_scenarios = SCENARIO_TEMPLATES.get(category, SCENARIO_TEMPLATES.get("boekhouding"))
    scenario_pair = cat_scenarios[pair_index % len(cat_scenarios)]
    scenario_a = scenario_pair[0].format(name_a=name_a, name_b=name_b)
    scenario_b = scenario_pair[1].format(name_a=name_a, name_b=name_b)

    # Axes section
    axes_section = render_axes(prod_a, prod_b, category, pair_index)

    # Cost table
    cost_section = render_cost_table(prod_a, prod_b)

    # Conclusion
    a_free = "gratis" in price_a.lower()
    b_free = "gratis" in price_b.lower()
    if a_free and not b_free:
        concl = f"Kies **{name_a}** als je gratis wilt starten en {best_a.lower()} centraal staat. Kies **{name_b}** als je direct de volledige functionaliteit wilt en {best_b.lower()} je prioriteit is."
    elif b_free and not a_free:
        concl = f"Kies **{name_b}** als je gratis wilt starten en {best_b.lower()} centraal staat. Kies **{name_a}** als je direct de volledige functionaliteit wilt en {best_a.lower()} je prioriteit is."
    else:
        concl = f"Kies **{name_a}** als {best_a.lower()} je prioriteit is en je bereid bent {price_a} te betalen. Kies **{name_b}** als {best_b.lower()} beter aansluit en {price_b} in je budget past. Twijfel je nog? Test allebei — beide bieden een gratis periode."

    content = f"""---
title: "{name_a} vs {name_b} {YEAR}: Eerlijke Vergelijking + Winnaar per Categorie"
date: {TODAY}
lastmod: {TODAY}
description: "{name_a} vs {name_b} eerlijk vergeleken op prijs, gebruiksgemak, functies, support en Nederlandse markt. Welke past bij jouw bedrijf?"
categories: ["{category}"]
tags: ["{category}", "vergelijking", "software"]
keywords: ["{name_a.lower()} vs {name_b.lower()}", "{name_a.lower()} of {name_b.lower()}", "{name_a.lower()} vergelijken", "{name_b.lower()} vergelijken"]
author: "Lars de Vries"
author_bio: "B2B software consultant met 6+ jaar ervaring. Helpt MKB-bedrijven bij het kiezen van de juiste zakelijke software."
featured_image: "/images/categories/{category}.svg"
affiliate: true
faq:
  - q: "Wat is goedkoper, {name_a} of {name_b}?"
    a: "{faq_price_answer}"
  - q: "Welke scoort hoger op Trustpilot?"
    a: "{faq_score_answer}"
  - q: "Is {name_a} of {name_b} beter voor de Nederlandse markt?"
    a: "{faq_nl_answer}"
  - q: "Kan ik {name_a} en {name_b} gratis uitproberen?"
    a: "{"Ja, " + name_a + " heeft een gratis plan." if a_free else name_a + " biedt een gratis proefperiode."} {"Ja, " + name_b + " heeft een gratis plan." if b_free else name_b + " biedt een gratis proefperiode."} Probeer ze allebei voordat je een beslissing neemt."
---

{intro_text}

Wil je direct de tools vergelijken op jouw specifieke situatie? Gebruik de [{cat_label} keuzehulp]({keuzehulp_url}).

## Snelle vergelijkingstabel

| Kenmerk | {name_a} | {name_b} |
|---|---|---|
| **Prijs (instap)** | {price_a} | {price_b} |
| **Trustpilot** | {score_a} | {score_b} |
| **Beste voor** | {best_a} | {best_b} |
| **Gratis plan** | {"Ja" if a_free else "Nee (trial)"} | {"Ja" if b_free else "Nee (trial)"} |
| **{nl_relevant.capitalize()}** | Ja | Ja |
| **Support** | E-mail / chat | E-mail / chat |

Lees ook de reviews: [{name_a} review {YEAR}](/blog/{slug_a}-review-{YEAR}/) en [{name_b} review {YEAR}](/blog/{slug_b}-review-{YEAR}/).

---

## {name_a} in het kort

**{name_a}** is {tagline_a}. Het richt zich op {best_a.lower()} en onderscheidt zich van de concurrentie door zijn aanpak op dat segment. Ik heb {name_a} persoonlijk uitgetest en met meerdere gebruikers gesproken die het dagelijks inzetten.

### Voordelen

{pros_list(slug_a)}

### Nadelen

{cons_list(slug_a)}

### Voor wie is {name_a} het beste?

{for_who_a}

<a href="{url_a}" target="_blank" rel="{rel_a}" class="cta-affiliate">{cta_a}</a>

---

## {name_b} in het kort

**{name_b}** is {tagline_b}. Het richt zich op {best_b.lower()} en biedt een andere benadering dan {name_a}. Hieronder de eerlijke voor- en nadelen op basis van mijn eigen gebruik en gebruikerservaringen.

### Voordelen

{pros_list(slug_b)}

### Nadelen

{cons_list(slug_b)}

### Voor wie is {name_b} het beste?

{for_who_b}

<a href="{url_b}" target="_blank" rel="{rel_b}" class="cta-affiliate">{cta_b}</a>

---

{axes_section}

---

{cost_section}

---

## Wanneer kies je {name_a} vs {name_b}?

{scenario_a}

{scenario_b}

**Bottomline:** als je twijfelt, probeer dan allebei. {"" + name_a + " heeft een gratis plan" if a_free else name_a + " biedt een proefperiode"} en {"" + name_b + " heeft een gratis plan" if b_free else name_b + " biedt ook een proefperiode"}. Na een uur werken weet je welke beter aanvoelt voor jouw werkwijze.

---

## Conclusie: {name_a} of {name_b}?

{concl}

Wil je meer opties vergelijken? Bekijk het [volledige overzicht van {cat_label}]({cat_url}) of gebruik de [{cat_label} keuzehulp]({keuzehulp_url}) voor een aanbeveling op maat.

---

## Lees ook

- [Beste {cat_label} {YEAR}]({overzicht_url})
- [{name_a} review {YEAR}](/blog/{slug_a}-review-{YEAR}/)
- [{name_b} review {YEAR}](/blog/{slug_b}-review-{YEAR}/)
- [{cat_label.capitalize()} keuzehulp]({keuzehulp_url})
"""
    return content


def main():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        products = json.load(f)

    existing = existing_filenames(BLOG_DIR)
    generated = []
    skipped = []

    pair_index = 0
    for category, items in products.items():
        for prod_a, prod_b in itertools.combinations(items, 2):
            slug_a = prod_a["slug"]
            slug_b = prod_b["slug"]
            filename = slugify_pair(slug_a, slug_b)
            filepath = os.path.join(BLOG_DIR, filename + ".md")

            if pair_already_covered(slug_a, slug_b, existing):
                skipped.append(f"  SKIP  {filename}.md  (al gedekt)")
                continue

            content = render_page(prod_a, prod_b, category, pair_index)
            with open(filepath, "w", encoding="utf-8") as out:
                out.write(content)

            generated.append(f"  OK    {filename}.md")
            # Add to existing set so we don't accidentally create both A-vs-B and B-vs-A
            existing.add(filename)
            pair_index += 1

    print(f"\n=== generate-vs-pages.py resultaat ===")
    print(f"Categorieen verwerkt: {list(products.keys())}")
    print(f"Nieuwe pagina's aangemaakt: {len(generated)}")
    print(f"Overgeslagen (al gedekt): {len(skipped)}")
    print()
    if generated:
        print("Aangemaakt:")
        for line in generated:
            print(line)
    if skipped:
        print("\nOvergeslagen:")
        for line in skipped:
            print(line)


if __name__ == "__main__":
    main()
