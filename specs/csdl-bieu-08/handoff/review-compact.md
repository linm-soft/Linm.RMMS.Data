# Handoff compact — review

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: review
status: done
verdict: PASS
review_confirm: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
hashGate: skip
writtenAt: 2026-09-18T05:50:00.000Z
taskId: task_5844adb2
qaTaskId: task_0bd98d56
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
changeScope: edit_page
formPattern: Slideout
autoApprove: ON
e2eQa: ON (prior QA PASS · cấm re-e2e)

## Decisions
- changeScope: edit_page (T-XLS-S08) · CRUD 45/11 KEEP · **cấm** reopen
- review_confirm: **done** (autoApprove ON) · QUERY/SEC/UI-FN/BE-FN **PASS**
- export: catalogToolbar · BFF binary · filtered (+type) · `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · sheet «Biểu 8» · one_sheet_45
- import: import_now · toolbar Nhập · sheetMap Biểu 8 · skipBridge
- filter: **cấm** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- **cấm** 12+8 · wide-row · ERP.* · hash skip
- open questions: none · gaps: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · PASS |
| (form 45/11) | typed prior | keep | KEEP |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-08-list-page` · `…-export-excel-btn` · `…-import-excel-btn`

## API / tasks (ids only)
- API-XLS-01/02/03 PASS · CRUD KEEP
- T-XLS-* done · T-XLS-QA-01 PASS
- Gates: QUERY/SEC/UI-FN/BE-FN PASS

## Evidence (ids)
| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS |
| UI-FN | PASS |
| BE-FN | PASS |
| QA S0/S1/QA-20/XLS | PASS |

## Debt
- getBlob CD strip P2 · Auth DEFER · GAP-QA-E2E-PW-01 P2

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md
- prior: handoff/qa-compact.md

## Cấm (compact)
ERP.* · filter-bar export · 12+8 · wide-row · reopen typed · e2e/build/start:std @ Review · implement @ Review
