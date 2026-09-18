# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:35:00.000Z
taskId: task_5391dd50
resource: green-assets
columns: 15
IdCode: CX-
peerSoTs: —
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S12) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only · 2 section khóm+cỏ (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel** · Import **DEFER P1 ẩn**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Q-XLS-FILENAME: Bieu12_CayXanh_{yyyyMMdd}.xlsx (SA chốt ext) · Q-XLS-SHEET: one_sheet
- export: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 12 · 15 cột · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: none · **cấm** invent so-ts-green
- design_confirm: approve (autoApprove ON) · open Q Design: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 15/2) | typed prior | keep | khóm+cỏ · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/B-FILTER/C/D/F/H keep · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12
- hubUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets
- prototype=specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=green-assets
- Export: GET …/csdl-records/export?resource=green-assets (+ filter QS)
- Import: POST …/import — DEFER P1
- T-XLS-S12 · GAP-BIEU12-XLS-01..07
- Next: SA path/BFF/golden · filename ext

## UNCLEAR
- none (Design) · SA: ext .xls vs .xlsx · page-all vs streaming

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-12-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-12-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/STATUS.md

## Cấm (compact)
ERP.* · toast=done · filter-bar export · golden 12+8 · 2 sheet · invent so-ts-green · new_page typed re-CRUD · yarn build/e2e · re-scan demo · paste HTML
