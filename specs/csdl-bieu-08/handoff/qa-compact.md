# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:45:00.000Z
taskId: task_0bd98d56
priorDevTaskId: task_ed6e77ce
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-08
hubDeepLink: /so-ts/csdl-so-sach?resource=traffic-safety

## Decisions
- changeScope: edit_page (T-XLS-S08) · CRUD 45/11 KEEP · **cấm** reopen
- T-XLS-QA-01 **PASS**: export `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · import_now · toolbar Xuất/Nhập
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- yarn typecheck **PASS** · docker api/bff healthy
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · PASS |
| (form 45/11) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-08-list-page` · `…-export-excel-btn` · `…-import-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01/02 runtime via FE blob/file

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 138dfa0deb89fe7c |
| S1 | PASS | 138dfa0deb89fe7c |
| QA-20 | PASS | d94fdfd692e4c929 |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · getBlob CD strip verified · BIFF N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md
- prior: handoff/dev-compact.md

## Cấm (compact)
ERP.* · invent API · phase=done · kill worker rộng · start role khác · filter-bar export · reopen typed
