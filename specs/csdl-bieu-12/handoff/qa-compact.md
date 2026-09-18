# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:47:30.000Z
taskId: task_96b70a9a
priorDevTaskId: task_051369c1
resource: green-assets
columns: 15
blocks: 2
IdCode: CX-
formNo: 12
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-12
hubDeepLink: /so-ts/csdl-so-sach?resource=green-assets
peerSoTs: —

## Decisions
- changeScope: edit_page (T-XLS-S12) · typed 15/2 KEEP · **cấm** reopen
- T-XLS-S12-QA-01 **PASS**: export `Bieu12_CayXanh_{yyyyMMdd}.xls` · export_only_p0 · Import ẩn
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- docker api/bff healthy · start:std reuse :9301
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · P0 · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn · PASS |
| (form 15/2) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-12-list-page` · `…-export-excel-btn`

## API / tasks (ids only)
- T-XLS-S12-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01 runtime via FE blob · API-XLS-02 OUT P1

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 18767d8e8e7ee899 |
| S1 | PASS | 88f10ceeaf59cdd7 |
| QA-20 | PASS | 692baca13e55ae1d |
| export | PASS | Bieu12_CayXanh_20260918.xls |

## Debt
- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · Import P1

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/STATUS.md
- prior: handoff/dev-compact.md

## Cấm (compact)
ERP.* · invent API · phase=done · kill worker rộng · start role khác · filter-bar export · reopen typed · invent so-ts-green
