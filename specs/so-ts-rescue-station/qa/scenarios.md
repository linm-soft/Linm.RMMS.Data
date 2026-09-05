# QA — Scenarios — so-ts-rescue-station

> Status: **PASS** · task `task_6c87f51d` · re-QA after qa-fix `task_8de8e1e0`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T09:16:25.074Z`

| | |
|--|--|
| Feature | `so-ts-rescue-station` |
| Title | Sổ TS — Công trình cứu hộ |
| Role | `qa` |
| packKind | `list` |
| typeCode | `RESCUE_STATION` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| aliasUrl | `http://localhost:9301/so-ts-rescue-station` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=RESCUE_STATION` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |

## Matrix T-QA-*

| id | title | expect | result |
|----|-------|--------|--------|
| T-QA-S0 | List profile RESCUE_STATION | title/header · filter · type ẩn · Tạo mới · no CREATE badge | **PASS** |
| T-QA-S1 | Alias redirect | `/so-ts-rescue-station` → list testid | **PASS** |
| T-QA-20 | Create form S-ATTR | cols=5 · Tên kho bãi · materials · kmTo ẩn | **PASS** |
| T-QA-FB-DTM | Filter bar D/T/M | no overflowX @1280/768/375 | **PASS** |
| T-QA-API | road-assets live | compose `:5111` via BFF `:5201` · no ERP.* | **PASS** (runtime) |

## Cases (e2e runtime)

| caseId | url | selector | result | screenshot | sha256_16 |
|--------|-----|----------|--------|------------|-----------|
| S0 | `/so-ts?type=RESCUE_STATION` | `rmms-so-ts-rescue-station-list-page` | **PASS** | S0.png | c63a7ae98e5eea86 |
| S1 | `/so-ts-rescue-station` | same list | **PASS** | S1.png | c63a7ae98e5eea86 |
| QA-20 | `/so-ts/tao-moi?type=RESCUE_STATION` | form-shell + `asset-rescue-station-attr` | **PASS** | QA-20.png | 6a0f8ac32428839d |

## Live assert (summary)

- list: titleRescue · headerRescue · search · route · typeFilterHidden · createBtn · noCreateBadge = true
- form: cols5 · rescueAttr · nameWarehouse · materials · kmToVisible=false · noModeBadge
- dtm D/T/M: overflowX=false
- evidence: `live-assert.json` · `filter-D.png` · `filter-T.png` · `filter-M.png` · `manifest.json`

## Runtime notes

1. Docker already healthy (`linm-rmms-api` `:5111`, `linm-rmms-bff` `:5201`, postgres `:5440`).
2. MFE `yarn start:std` already on `:9301` — **không** kill worker (**GAP-QA-E2E-KILL-01**).
3. `yarn e2e-qa --skip-start` → headed login hang (e2e.local.json) + overwrote `_capture.mjs` · restored Dev capture · createRequire(AutoCode) for Node24 playwright resolve.
4. Fallback contract documented: GAP-QA-E2E-DOCKER-01 (`:5111` ≠ `:5101`) · GAP-QA-E2E-PW-01 (channel=chrome).
5. **Cấm** `phase=done` từ QA — handoff review.

## Evidence paths

- `specs/so-ts-rescue-station/qa/screens/S0.png`
- `specs/so-ts-rescue-station/qa/screens/S1.png`
- `specs/so-ts-rescue-station/qa/screens/QA-20.png`
- `specs/so-ts-rescue-station/qa/screens/manifest.json`
- `specs/so-ts-rescue-station/qa/screens/live-assert.json`
