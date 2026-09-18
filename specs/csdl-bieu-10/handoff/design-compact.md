# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:20:00.000Z
taskId: task_00ebbcea
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
peerSoTs: so-ts-retaining
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
formPattern: Slideout
changeScope: edit_page

## Decisions
- changeScope: edit_page (T-XLS-S10) · **cấm** new_page typed reopen
- formPattern: Slideout · data-form-cols=2 · footer_actions_only (keep)
- Kind B A–D+F keep · toolbar **+Xuất Excel +Nhập Excel** · peer keep
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu10_KeTuongChan_{yyyyMMdd}.xls · Q-XLS-HEIGHT: height_alias
- export/import: catalogToolbar · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 10 · 21 · **cấm** 12+8 · **cấm** 2 sheet invent
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- map: heightM↔WidthM giữ SA typed
- design_confirm: approve (autoApprove ON) · open Q: none
- Report DES-RPT: N/A
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | fa-file-excel · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | fa-file-import · P1 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H keep · toolbar +export+import · peer
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* DES-GRID-Z keep · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10
- peerUrl=http://localhost:9301/so-ts-retaining
- prototype=specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=retaining-walls
- Export: GET …/csdl-records/export?resource=retaining-walls (+ filter QS)
- Import: POST …/csdl-records/import?resource=retaining-walls
- T-XLS-S10 · GAP-BIEU10-XLS-01…07 · real-data §A+§B PASS
- Next: SA path/BFF/golden checksum 21 · heightM↔WidthM · keep Schema_CsdlBieu10

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · yarn build/e2e/start:std @ Design · paste HTML vào compact
