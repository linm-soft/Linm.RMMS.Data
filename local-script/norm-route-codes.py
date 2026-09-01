#!/usr/bin/env python3
"""Normalize gov-vn road_routes + asset route/route_named: uppercase, no VN accents, add KHAC."""
from __future__ import annotations

import csv
import hashlib
import sys
import unicodedata
from pathlib import Path


def fold_code(raw: str) -> str:
    if not raw:
        return ""
    form_d = unicodedata.normalize("NFD", raw.strip().upper())
    out: list[str] = []
    for ch in form_d:
        if unicodedata.category(ch) == "Mn":
            continue
        if ch.isspace():
            continue
        if ch in "ĐÐ":
            ch = "D"
        out.append(ch)
    code = "".join(out)
    if len(code) <= 64:
        return code
    digest = hashlib.sha256(code.encode("utf-8")).hexdigest()[:8].upper()
    return code[:55] + "-" + digest


def rewrite_routes(path: Path) -> tuple[int, int]:
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        fieldnames = list(reader.fieldnames or [])
        rows = list(reader)

    seen: dict[str, dict[str, str]] = {}
    collisions = 0
    for row in rows:
        old = (row.get("code") or "").strip()
        new = fold_code(old)
        if not new:
            continue
        parent = fold_code(row.get("parent_code") or "")
        if parent == new:
            parent = ""
        aliases = [a for a in (row.get("legacy_aliases") or "").split(";") if a.strip()]
        if old and old != new and old not in aliases:
            aliases.append(old)
        row["code"] = new
        row["parent_code"] = parent
        row["legacy_aliases"] = ";".join(aliases)
        if new in seen:
            collisions += 1
            prev = seen[new]
            extra = [a for a in aliases if a not in (prev.get("legacy_aliases") or "")]
            if extra:
                prev["legacy_aliases"] = ";".join(
                    [a for a in (prev.get("legacy_aliases") or "").split(";") if a] + extra
                )
            continue
        seen[new] = row

    if "KHAC" not in seen:
        khac = {k: "" for k in fieldnames}
        khac["code"] = "KHAC"
        khac["name"] = "Khác"
        khac["route_kind"] = "KHAC"
        khac["parent_code"] = ""
        khac["notes"] = "fallback khi dump thiếu tuyến"
        khac["sort_order"] = "0"
        khac["legacy_aliases"] = ""
        out_rows = [khac, *seen.values()]
    else:
        out_rows = list(seen.values())

    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(out_rows)
    return len(out_rows), collisions


def rewrite_assets(path: Path) -> int:
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        fieldnames = list(reader.fieldnames or [])
        rows = list(reader)

    changed = 0
    for row in rows:
        route = fold_code(row.get("route") or "") or "KHAC"
        named = fold_code(row.get("route_named") or "")
        if named == route:
            named = ""
        if row.get("route") != route or row.get("route_named") != named:
            changed += 1
        row["route"] = route
        row["route_named"] = named

    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)
    return changed


def process_set(set_dir: Path) -> None:
    routes = set_dir / "road_routes.csv"
    if not routes.exists():
        raise SystemExit(f"missing {routes}")
    n, collisions = rewrite_routes(routes)
    print(f"routes {routes}: rows={n} collisions_merged={collisions}")

    for part in sorted(set_dir.glob("road_assets.part*.csv")):
        nchg = rewrite_assets(part)
        print(f"assets {part.name}: mapped={nchg}")


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("usage: norm-route-codes.py <set-dir> [<set-dir>...]")
    for arg in sys.argv[1:]:
        process_set(Path(arg))


if __name__ == "__main__":
    main()
