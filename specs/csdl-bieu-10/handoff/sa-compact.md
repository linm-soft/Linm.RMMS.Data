# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:25:00.000Z
taskId: task_c2ecf0a6
priorDesign: task_00ebbcea
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
peerSoTs: so-ts-retaining
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S10) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu10 · shell+typed 1:1 · 21/2 · Kind B+D Slideout · heightM↔WidthM
- export: GET …/csdl-records/export?resource=retaining-walls (+ filter QS) · BFF binary proxy
- import: POST …/csdl-records/import?resource=retaining-walls · multipart · import_now
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu10_KeTuongChan_{yyyyMMdd}.xls · Q-XLS-HEIGHT: height_alias
- golden: Cục 16-sheet Biểu 10 · checksum 21 · 1 sheet · crest* cùng hàng · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- entity/migration: **none** · keep Schema_CsdlBieu10
- BFF: proxy only · stream binary · FE BASE /asset/csdl-records
- domain: Asset · **cấm ERP.*** · **cấm** invent infra
- peer: so-ts-retaining toolbar keep · **≠** merge
- gates: tz_na · xco_get_only · share_tenant (keep)
- solution_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | Nhập Excel | ToolbarButton+file | POST import upsert |

## Screens / zones (ids only)
- S-LIST DES-GRID keep · toolbar +export+import · peer
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* keep · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10
- hub=?resource=retaining-walls

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=retaining-walls
- API-XLS-01 GET …/export · API-XLS-02 POST …/import
- BFF mirror web-bff · FormMode list/CRUD keep · export/import = toolbar actions
- T-XLS-S10-BE-01/02 · BFF-01 · FE-01/02 · QA-01 → TL
- GAP-BIEU10-XLS-01…07

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA
