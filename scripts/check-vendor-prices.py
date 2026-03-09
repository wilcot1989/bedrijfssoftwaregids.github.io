#!/usr/bin/env python3
"""
Vendor Price & Trustpilot Checker voor Bedrijfssoftwaregids.nl

Draait dagelijks via GitHub Actions. Vergelijkt live vendor-data met
vendor-truth.json en maakt een GitHub Issue aan bij afwijkingen.

Gebruik:
    python scripts/check-vendor-prices.py [--update] [--dry-run]

Flags:
    --update   : Update vendor-truth.json met nieuwe Trustpilot scores
    --dry-run  : Print resultaten zonder Issue aan te maken
"""

import json
import sys
import os
import re
import urllib.request
import urllib.error
import ssl
from datetime import datetime
from pathlib import Path

# --- Config ---
SCRIPT_DIR = Path(__file__).parent
VENDOR_TRUTH_PATH = SCRIPT_DIR / "vendor-truth.json"
REPO_ROOT = SCRIPT_DIR.parent
SOFTWARE_JSON_PATH = REPO_ROOT / "static" / "tools" / "data" / "software.json"

# Trustpilot business unit API (public, no auth needed)
TRUSTPILOT_API = "https://www.trustpilot.com/api/categoriespages/{slug}"
TRUSTPILOT_WIDGET = "https://widget.trustpilot.com/trustbox-data/53aa8807dec7e10d38f59f32?businessUnitId={buid}&locale=nl-NL"

# SSL context that doesn't verify (for corporate proxies etc)
SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def fetch_url(url, timeout=15):
    """Fetch URL content, return (status_code, text) or (error_code, error_msg)."""
    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (compatible; BSG-VendorCheck/1.0)",
        "Accept": "text/html,application/json",
        "Accept-Language": "nl-NL,nl;q=0.9,en;q=0.8",
    })
    try:
        resp = urllib.request.urlopen(req, timeout=timeout, context=SSL_CTX)
        return resp.status, resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, str(e)
    except Exception as e:
        return 0, str(e)


# ============================================================
# Trustpilot Checker
# ============================================================

def fetch_trustpilot_score(slug):
    """
    Fetch Trustpilot score for a business via their public JSON endpoint.
    Returns (score, count) or (None, None) on failure.
    """
    if not slug:
        return None, None

    # Method 1: Try the review page and extract JSON-LD
    url = f"https://www.trustpilot.com/review/{slug}"
    status, body = fetch_url(url)

    if status == 200 and body:
        # Look for TrustScore in the page
        score_match = re.search(r'"ratingValue"\s*:\s*"?([\d.]+)"?', body)
        count_match = re.search(r'"reviewCount"\s*:\s*"?(\d+)"?', body)

        if score_match and count_match:
            try:
                score = float(score_match.group(1))
                count = int(count_match.group(1))
                return score, count
            except (ValueError, IndexError):
                pass

        # Alternative: look for TrustScore pattern
        score_match = re.search(r'TrustScore\s+([\d.]+)', body)
        count_match = re.search(r'([\d,]+)\s+reviews?', body)

        if score_match:
            try:
                score = float(score_match.group(1))
                count = int(count_match.group(1).replace(",", "")) if count_match else None
                return score, count
            except (ValueError, IndexError):
                pass

    return None, None


# ============================================================
# Software.json Cross-Checker
# ============================================================

def check_software_json(vendor_truth, software_json):
    """Compare software.json prices against vendor-truth.json."""
    issues = []

    # Build lookup from vendor-truth
    vt_lookup = {}
    for product in vendor_truth.get("products", []):
        vt_lookup[product["id"]] = product

    for item in software_json:
        sid = item.get("id", "")
        if sid not in vt_lookup:
            continue

        vt = vt_lookup[sid]
        plans = vt.get("plans", [])
        if not plans:
            continue

        cost = item.get("cost", {})
        model = cost.get("model", "")

        # Determine the relevant price from software.json based on cost model
        if model == "per_user_monthly":
            # Per-user models: compare per_user price against lowest per-user plan
            sj_price = cost.get("per_user", 0)
            if sj_price <= 0:
                continue  # Free or base-only model, skip
        elif model == "per_employee_monthly":
            sj_price = cost.get("per_employee", 0)
            if sj_price <= 0:
                continue
        elif model in ("pos_terminals_monthly", "webshop_tx_cost"):
            # These use base as the primary flat-rate price
            sj_price = cost.get("base", 0)
            if sj_price <= 0:
                continue
        else:
            # Unknown model, try base
            sj_price = cost.get("base", 0)
            if sj_price <= 0:
                continue

        # Find the lowest non-free price in vendor-truth
        paid_plans = [p for p in plans if p.get("price_monthly", 0) > 0]
        if not paid_plans:
            continue

        lowest = min(p["price_monthly"] for p in paid_plans)
        if abs(sj_price - lowest) > 2:  # Allow €2 tolerance
            issues.append({
                "product": vt["name"],
                "field": "base_price",
                "software_json": sj_price,
                "vendor_truth": lowest,
                "model": model,
                "severity": "warning"
            })

    return issues


# ============================================================
# Content File Cross-Checker
# ============================================================

def scan_content_for_prices(vendor_truth):
    """
    Scan markdown content files for price mentions that don't match vendor-truth.
    Returns list of potential issues.
    """
    issues = []
    content_dir = REPO_ROOT / "content"

    if not content_dir.exists():
        return issues

    # Build price patterns per product
    for product in vendor_truth.get("products", []):
        name = product["name"]
        plans = product.get("plans", [])

        for plan in plans:
            price = plan.get("price_monthly", 0)
            if price <= 0:
                continue

            plan_name = plan.get("name", "")

            # We won't do full content scanning here (too complex for v1)
            # Instead, just log what we'd check
            pass

    return issues


# ============================================================
# Main
# ============================================================

def main():
    update_mode = "--update" in sys.argv
    dry_run = "--dry-run" in sys.argv

    print(f"=== BSG Vendor Price Checker ===")
    print(f"Datum: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"Mode: {'UPDATE' if update_mode else 'CHECK'} {'(dry run)' if dry_run else ''}")
    print()

    # Load data
    vendor_truth = load_json(VENDOR_TRUTH_PATH)
    products = vendor_truth.get("products", [])

    # Load software.json if it exists
    software_json = []
    if SOFTWARE_JSON_PATH.exists():
        software_json = load_json(SOFTWARE_JSON_PATH)

    all_issues = []
    trustpilot_updates = []

    # --- Check Trustpilot scores ---
    print(f"--- Trustpilot Scores ({len(products)} producten) ---")

    for product in products:
        slug = product.get("trustpilot_slug")
        if not slug:
            continue

        name = product["name"]
        old_score = product.get("trustpilot", {}).get("score")
        old_count = product.get("trustpilot", {}).get("count")

        new_score, new_count = fetch_trustpilot_score(slug)

        if new_score is not None:
            # Check for significant change (>0.2 points or >10% reviews)
            score_changed = old_score is not None and abs(new_score - old_score) >= 0.2
            count_changed = (old_count is not None and new_count is not None and
                           abs(new_count - old_count) / max(old_count, 1) > 0.10)

            status = "OK"
            if score_changed:
                status = f"GEWIJZIGD: {old_score} → {new_score}"
                all_issues.append({
                    "product": name,
                    "type": "trustpilot_score",
                    "old": old_score,
                    "new": new_score,
                    "severity": "info" if abs(new_score - old_score) < 0.5 else "warning"
                })

            if count_changed:
                if status == "OK":
                    status = f"Reviews: {old_count} → {new_count}"

            print(f"  {name}: {new_score}/5 ({new_count} reviews) [{status}]")

            if update_mode:
                trustpilot_updates.append({
                    "id": product["id"],
                    "score": new_score,
                    "count": new_count
                })
        else:
            print(f"  {name}: NIET BEREIKBAAR (slug: {slug})")

    # --- Check software.json consistency ---
    print()
    print("--- Software.json Consistentie ---")

    sj_issues = check_software_json(vendor_truth, software_json)
    if sj_issues:
        for issue in sj_issues:
            print(f"  ⚠️ {issue['product']}: software.json={issue['software_json']}, "
                  f"vendor-truth={issue['vendor_truth']}")
            all_issues.append(issue)
    else:
        print("  ✅ Geen afwijkingen gevonden")

    # --- Apply updates if requested ---
    if update_mode and trustpilot_updates and not dry_run:
        print()
        print("--- Updates toepassen ---")
        today = datetime.now().strftime("%Y-%m-%d")

        for update in trustpilot_updates:
            for product in products:
                if product["id"] == update["id"]:
                    product["trustpilot"]["score"] = update["score"]
                    product["trustpilot"]["count"] = update["count"]
                    product["trustpilot"]["checked"] = today
                    print(f"  Updated: {product['name']}")

        vendor_truth["_meta"]["last_full_check"] = today
        save_json(VENDOR_TRUTH_PATH, vendor_truth)
        print(f"  vendor-truth.json opgeslagen")

    # --- Summary ---
    print()
    print("--- Samenvatting ---")
    warnings = [i for i in all_issues if i.get("severity") == "warning"]
    infos = [i for i in all_issues if i.get("severity") == "info"]

    print(f"  Warnings: {len(warnings)}")
    print(f"  Info: {len(infos)}")
    print(f"  Totaal: {len(all_issues)}")

    # --- Create GitHub Issue body if needed ---
    if warnings and not dry_run:
        issue_body = create_issue_body(all_issues)
        print()
        print("--- GitHub Issue Body ---")
        print(issue_body)

        # Write to file for GitHub Actions to pick up
        issue_path = SCRIPT_DIR / "vendor-check-result.md"
        with open(issue_path, "w", encoding="utf-8") as f:
            f.write(issue_body)
        print(f"  Geschreven naar: {issue_path}")

    return 1 if warnings else 0


def create_issue_body(issues):
    """Create a GitHub Issue body from the list of issues."""
    today = datetime.now().strftime("%Y-%m-%d")

    lines = [
        f"## Vendor Price Check — {today}",
        "",
        "De dagelijkse vendor-check heeft afwijkingen gevonden:",
        "",
        "| Product | Type | Oud | Nieuw | Ernst |",
        "|---------|------|-----|-------|-------|",
    ]

    for issue in issues:
        product = issue.get("product", "?")
        itype = issue.get("type", issue.get("field", "?"))
        old = issue.get("old", issue.get("software_json", "?"))
        new = issue.get("new", issue.get("vendor_truth", "?"))
        severity = issue.get("severity", "?")
        emoji = "⚠️" if severity == "warning" else "ℹ️"

        lines.append(f"| {product} | {itype} | {old} | {new} | {emoji} {severity} |")

    lines.extend([
        "",
        "### Actie vereist",
        "",
        "- [ ] Controleer de afwijkingen handmatig",
        "- [ ] Update de artikelen waar nodig",
        "- [ ] Run `python scripts/check-vendor-prices.py --update` om vendor-truth.json bij te werken",
        "",
        "---",
        "*Automatisch gegenereerd door check-vendor-prices.py*",
    ])

    return "\n".join(lines)


if __name__ == "__main__":
    sys.exit(main())
