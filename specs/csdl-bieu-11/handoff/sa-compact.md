# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T07:00:00.000Z
taskId: task_bb1ffcd0
priorDesign: task_ec751c18
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
peerSoTs: so-ts-lighting
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S11) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu11 · shell+typed 1:1 · 24/2 · Kind B+D Slideout · cabinet split · solar flat
- export: GET …/csdl-records/export?resource=lighting-systems (+ filter QS) · BFF binary proxy
- import: POST …/csdl-records/import?resource=lighting-systems · multipart · import_now
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · Q-XLS-FILENAME: Bieu11_ChieuSang_{yyyyMMdd}.xls · Q-XLS-SHEET: one_sheet
- golden: Cục 16-sheet Biểu 11 · checksum 24 · 1 sheet · LED+NLMT cùng hàng · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- entity/migration: **none** · keep Schema_CsdlBieu11
- BFF: proxy only · stream binary · FE BASE /asset/csdl-records
- domain: Asset · **cấm ERP.*** · **cấm** invent infra
- peer: so-ts-lighting toolbar keep · qty bucket · **≠** merge · **cấm** dump điểm
- gates: tz_na · xco_get_only · share_tenant (keep)
- solution_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | Nhập Excel | ToolbarButton+file | POST import upsert |

## Screens / zones (ids only)
- S-LIST DES-GRID keep · toolbar +export+import · peer
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* keep · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11
- hub=?resource=lighting-systems

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=lighting-systems
- API-XLS-01 GET …/export · API-XLS-02 POST …/import
- BFF mirror web-bff · FormMode list/CRUD keep · export/import = toolbar actions
- T-XLS-S11-BE-01/02 · BFF-01 · FE-01/02 · QA-01 → TL
- GAP-BIEU11-XLS-01…07

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · dump điểm Sổ TS · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA
