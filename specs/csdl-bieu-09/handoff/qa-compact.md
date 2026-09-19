# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T06:05:00.000Z
taskId: task_a1a1c430
priorDevTaskId: task_6056af24
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-09
hubDeepLink: /so-ts/csdl-so-sach?resource=boundary-markers

## Decisions
- changeScope: edit_page (T-XLS-S09) · typed 17/2 KEEP · **cấm** reopen
- T-XLS-QA-01 **PASS**: export `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` · import_now · toolbar Xuất/Nhập
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
| (form 17/2) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-09-list-page` · `…-export-excel-btn` · `…-import-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01/02 runtime via FE blob/file

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 0523b566a450c15d |
| S1 | PASS | 0523b566a450c15d |
| QA-20 | PASS | 0e5b0fbe05710bbc |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · getBlob CD strip verified · BIFF N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md
- prior: handoff/dev-compact.md

## Cấm (compact)
ERP.* · invent API · phase=done · kill worker rộng · start role khác · filter-bar export · reopen typed
