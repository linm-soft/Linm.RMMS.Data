# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:28:00.000Z
taskId: task_a41905a5
resource: shoulders-fences
columns: 20
IdCode: LE-
peerSoTs: SHOULDER
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S07) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only · 3 khối (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel** · Import **DEFER P1 ẩn**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Q-XLS-FILENAME: Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx (SA chốt ext)
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 7 · 20 cột · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp SHOULDER vào sheet (GAP-BIEU07-XLS-PEER)
- design_confirm: approve (autoApprove ON) · open Q Design: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | 3 khối lề/taluy/HR · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-07
- prototype=specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=shoulders-fences
- Export: GET …/csdl-records/export?resource=shoulders-fences (+ filter QS)
- Import: POST …/import — DEFER P1
- T-XLS-S07 · AC-XLS-01..09 · GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER
- Next: SA path/BFF/golden · filename ext

## UNCLEAR
- none (Design) · SA: ext .xls vs .xlsx · page-all vs streaming

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/STATUS.md
