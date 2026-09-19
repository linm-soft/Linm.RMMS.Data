# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T06:50:00.000Z
taskId: task_ec751c18
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
peerSoTs: so-ts-lighting
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S11) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel +Nhập Excel** · peer keep
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu11_ChieuSang_{yyyyMMdd}.xls · Q-XLS-SHEET: one_sheet
- export/import: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 11 · 24 · **cấm** 12+8 · **cấm** 2 sheet invent
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: qty bucket · **cấm** dump điểm so-ts-lighting
- design_confirm: approve (autoApprove ON) · open Q: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | fa-file-import · P1 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export+import · peer
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11
- peerUrl=http://localhost:9301/so-ts-lighting
- prototype=specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=lighting-systems
- Export: GET …/csdl-records/export?resource=lighting-systems (+ filter QS)
- Import: POST …/csdl-records/import?resource=lighting-systems
- T-XLS-S11 · GAP-BIEU11-XLS-01…07 · real-data §A+§B PASS
- Next: SA path/BFF/golden checksum 24 · 1 sheet LED+NLMT · keep Schema_CsdlBieu11

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · dump điểm Sổ TS · new_page typed re-CRUD · yarn build/e2e/start:std @ Design · paste HTML vào compact
