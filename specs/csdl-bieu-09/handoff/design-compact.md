# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T05:45:00.000Z
taskId: task_a8101a28
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S09) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel +Nhập Excel**
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls · Q-XLS-KIND: respect_filter
- export/import: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 9 · **cấm** 12+8 · **cấm** 2 sheet invent
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- design_confirm: approve (autoApprove ON) · open Q: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | fa-file-import · P1 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export+import
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09
- prototype=specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=boundary-markers
- Export: GET …/csdl-records/export?resource=boundary-markers (+ filter QS)
- Import: POST …/csdl-records/import?resource=boundary-markers
- T-XLS-S09 · GAP-BIEU09-XLS-01…06 · real-data §A+§B PASS
- Next: SA path/BFF/golden checksum 17 · keep Schema_CsdlBieu9

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · yarn build/e2e/start:std @ Design · paste HTML vào compact
