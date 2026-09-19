# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T01:15:00.000Z
taskId: task_82008258
priorTyped: task_ba6fcf2c · keep
priorPo: task_0a8bfa5d
priorAnaly: task_4fec1f3f
resource: noise-barriers
columns: 13
IdCode: TC-
peerSoTs: so-ts-noise-barrier · cấm merge
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S13) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only · section kích thước (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel** · Import **DEFER P1 ẩn**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Q-XLS-FILENAME: Bieu13_TuongChongOn_{yyyyMMdd}.xls(x) (SA chốt ext) · Q-XLS-SHEET: one_sheet
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 13 · 13 cột · **cấm** 12+8 · **cấm** sheet riêng kích thước
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: so-ts-noise-barrier cite · **cấm** merge road-assets
- design_confirm: approve (autoApprove ON) · open Q Design: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 13) | typed prior | keep | section kích thước · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/B-FILTER/C/D/F/H keep · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13
- hubUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers
- prototype=specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=noise-barriers
- Export: GET …/csdl-records/export?resource=noise-barriers (+ filter QS)
- Import: POST …/import — DEFER P1
- T-XLS-S13 · GAP-BIEU13-XLS-01..07
- Next: SA path/BFF/golden · filename ext

## UNCLEAR
- none (Design) · SA: ext .xls vs .xlsx · page-all vs streaming

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-13-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-13-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/STATUS.md

## Cấm (compact)
ERP.* · toast=done · filter-bar export · golden 12+8 · invent dim sheet · merge peer/road-assets · new_page typed re-CRUD · yarn build/e2e · re-scan demo · paste HTML
