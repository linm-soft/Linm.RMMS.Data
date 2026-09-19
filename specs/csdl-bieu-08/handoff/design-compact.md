# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:10:00.000Z
taskId: task_b2622193
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S08) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel +Nhập Excel**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu08_HeThongATGT_{yyyyMMdd}.xls · Q-XLS-TYPE: one_sheet_45
- export/import: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 8 · **cấm** 12+8 · **cấm** wide-row
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- design_confirm: approve (autoApprove ON) · open Q: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | fa-file-import · P1 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export+import
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08
- prototype=specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=traffic-safety
- Export: GET …/csdl-records/export?resource=traffic-safety (+ filter QS)
- Import: POST …/csdl-records/import?resource=traffic-safety
- T-XLS-S08 · GAP-BIEU08-XLS-01…06 · real-data §A+§B PASS
- Next: SA path/BFF/golden checksum 45

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md
