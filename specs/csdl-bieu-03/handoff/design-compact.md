# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-03
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9
headerFingerprint: sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8
writtenAt: 2026-09-18T02:35:00.000Z
taskId: task_089e1774
resource: road-tunnels
columns: 42
IdCode: TN-
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S03) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel** · Import **DEFER P1 ẩn**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Q-XLS-FILENAME: Bieu03_HamDuongBo_{yyyyMMdd}.xlsx (SA chốt ext)
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 3 · 42 cột · GPS 3 điểm · **1 row/ống** · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- design_confirm: approve (autoApprove ON) · open Q Design: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | GPS×3 · tube · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-03
- prototype=specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=road-tunnels
- Export: GET …/csdl-records/export?resource=road-tunnels (+ filter QS)
- Import: POST …/import — DEFER P1
- T-XLS-S03 · AC-XLS-01..09 · GAP-BIEU03-XLS-01..05 · XLS-TUBE
- Next: SA path/BFF/golden · filename ext · tube row rule

## UNCLEAR
- none (Design) · SA: ext .xls vs .xlsx · page-all vs streaming

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/STATUS.md
