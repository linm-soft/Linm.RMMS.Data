# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T02:15:00.000Z
taskId: task_eaf98be4
priorDevTaskId: task_a201197f
resource: bridges
columns: 48
IdCode: BR-
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-02

## Decisions
- changeScope: edit_page (T-XLS-S02) · CRUD KEEP · **cấm** reopen 48-col
- T-XLS-QA-01 **PASS**: export `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · Import DEFER ẩn · toolbar Xuất only
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa overwrite `_capture.mjs` playwright → chrome createRequire · **cấm** kill
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn PASS |
| (form 48) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-02-list-page` · `…-export-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01 runtime via FE blob · filename SA `.xls`

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | b105f120226a9c86 |
| S1 | PASS | b105f120226a9c86 |
| QA-20 | PASS | 45f986f38d112b9a |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · getBlob CD strip · Import P1

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/STATUS.md
- prior: handoff/dev-compact.md
