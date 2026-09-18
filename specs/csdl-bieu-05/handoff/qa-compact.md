# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-05
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728
headerFingerprint: sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f
writtenAt: 2026-09-18T04:10:00.000Z
taskId: task_b9a2f418
priorDevTaskId: task_e8abedcb
resource: ditches
columns: 18
IdCode: RN-
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-05

## Decisions
- changeScope: edit_page (T-XLS-S05) · CRUD KEEP · **cấm** reopen 18-col
- T-XLS-QA-01 **PASS**: export filename `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · Import DEFER ẩn
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** merge so-ts-ditch (GAP-BIEU05-XLS-PEER)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- docker rebuild API+BFF required for Dev XLS ship
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn · PASS |
| (form 18) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-05-list-page` · `…-export-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · AC-XLS-01..09 · T-QA-* KEEP smoke
- API-XLS-01 runtime via FE blob + BFF

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | d06efdfff922db25 |
| S1 | PASS | b03f59bbe2f24a08 |
| QA-20 | PASS | d8d9db75735bd595 |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · Import P1 · GAP-CSDL-ORG-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/STATUS.md
- prior: handoff/dev-compact.md
