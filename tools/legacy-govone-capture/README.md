# Legacy GOVOne capture (PMDB)

Login [pmdb.govone.vn](https://pmdb.govone.vn/apps.aspx#) → crawl menu/pages → extract **labels · inputs · grid columns · actions** → map sang slug QLBD (`features/{slug}.md`) làm input context migration.

## Setup

```bash
cd tools/legacy-govone-capture
cp .env.example .env.local
# Điền GOVONE_USER / GOVONE_PASS (không commit)
npm install
npm run install-browser
```

## Run local

```bash
npm run all
# hoặc: npm run capture && npm run map
```

Output: `docs/context/_raw/legacy-govone/`

| File | |
|------|--|
| `catalog.json` · `CAPTURE-SUMMARY.md` | Inventory |
| `pages/*.json` | Per-page fields |
| `screenshots/*.png` | UI (gitignored) |
| `features/{slug}.md` | Input cho `/qlbd-analy-demo` |
| `feature-map.json` | Slug index |

## CI

Workflow: `.github/workflows/legacy-govone-capture.yml`  
Secrets repo: `GOVONE_USER` · `GOVONE_PASS`  
Trigger: `workflow_dispatch` (manual).

## Downstream

1. `/docs-scan-cache` (include `_raw/legacy-govone/features`)  
2. `/qlbd-analy-demo` · `yarn scan-qlbd-demo`  
3. Sau Signed → `/qlbd-align-mfe`

Skill: `/qlbd-legacy-capture` (Linm.Development.Rules).
