# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T01:55:00.000Z
taskId: task_d763be35
resource: bridges
columns: 48
IdCode: BR-
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S02) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel** · Import **DEFER P1 ẩn**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Q-XLS-FILENAME: Bieu02_ThongKeCau_{yyyyMMdd}.xlsx (SA chốt ext)
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 2 · 48 cột · GPS 3 điểm · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- design_confirm: approve (autoApprove ON) · open Q Design: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=bridges
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02
- prototype=specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=bridges
- Export: GET …/csdl-records/export?resource=bridges (+ filter QS)
- Import: POST …/import — DEFER P1
- T-XLS-S02 · AC-XLS-01..08 · GAP-BIEU02-XLS-01..06
- Next: SA path/BFF/golden · filename ext

## UNCLEAR
- none (Design) · SA: ext .xls vs .xlsx · page-all vs streaming

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/STATUS.md
