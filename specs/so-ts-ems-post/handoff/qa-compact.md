# handoff-compact — qa · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_bffa06d6` |
| verdict | **PASS** |
| e2eQa | **ON** |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | `CCU-` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:48:00.000Z` |

## Decisions

- verdict **PASS** · P0 blockers **none**
- e2e S0/S1/QA-20 PNG OK · `manifest.json` ok=true
- mfeStdUrl `/so-ts?type=EMS_POST` · alias `/so-ts-ems-post` redirect OK
- testid `rmms-so-ts-ems-post-list-page` · form `asset-ems-post-attr`
- API `api/v1/asset/road-assets` · **cấm ERP.***
- **cấm** `phase=done` → next Review

## E2E

| case | result | evidence |
|------|--------|----------|
| S0 | PASS | `qa/screens/S0.png` |
| S1 | PASS | `qa/screens/S1.png` |
| QA-20 | PASS | `qa/screens/QA-20.png` |

method: std :9301 + docker :5111/:5201 + headless capture (GAP-QA-E2E-02 headed hang)

## T-QA-*

- T-QA-CRUD-01 **PASS** · T-QA-FORM-01 **PASS** · T-QA-FILTER-01/02 **PASS**
- T-QA-TYP-01 **PASS** · T-QA-TAB-01 **PASS**

## Build

- MFE typecheck + build **PASS**

## GAP (info/defer)

GAP-EMS-FLAT-01 defer · GAP-EMS-LOOKUP-01 info · GAP-QA-E2E-02 info

## Full paths

- scenarios: `specs/so-ts-ems-post/qa/scenarios.md`
- screens: `specs/so-ts-ems-post/qa/screens/`
- prior: `handoff/dev-compact.md`

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings.md |

## Cấm (compact)

ERP.* · phase=done · invent so-ts API · fix prod trong QA
