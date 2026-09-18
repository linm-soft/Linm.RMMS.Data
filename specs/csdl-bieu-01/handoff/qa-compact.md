# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
writtenAt: 2026-09-17T18:40:00.000Z
taskId: task_795fd15b
priorDevTaskId: task_742f5820
resource: pavement-sections
columns: 38
IdCode: MD-
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-01

## Decisions
- changeScope: edit_page (T-XLS-S01) · CRUD KEEP · **cấm** reopen 38-col
- T-XLS-QA-01 **PASS**: export filename `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · import_now file input · toolbar Xuất/Nhập
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · PASS |
| (form 38) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-01-list-page` · `…-export-excel-btn` · `…-import-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01/02 runtime via FE blob/file

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 71467080520a8a78 |
| S1 | PASS | 71467080520a8a78 |
| QA-20 | PASS | fb8cfa7afc10a991 |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · getBlob CD strip · BIFF N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/STATUS.md
- prior: handoff/dev-compact.md
