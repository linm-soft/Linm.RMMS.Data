# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
headerFingerprint: sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2
writtenAt: 2026-09-17T18:05:00.000Z
taskId: task_8009a294
resource: pavement-sections
columns: 38
IdCode: MD-
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S01) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel +Nhập Excel**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls
- export/import: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 1 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- design_confirm: approve (autoApprove ON) · open Q: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 38) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | fa-file-import · P1 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export+import
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-01
- prototype=specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=pavement-sections
- Export: GET …/csdl-records/export?resource=pavement-sections (+ filter QS)
- Import: POST …/csdl-records/import?resource=pavement-sections
- T-XLS-S01 · skip-bridge · real-data §A+§B PASS
- Next: SA path/BFF/golden

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/STATUS.md
