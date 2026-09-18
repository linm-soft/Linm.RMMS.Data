# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T05:50:00.000Z
taskId: task_8ad5cfc2
priorDesign: task_a8101a28
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S09) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu9 · shell+typed 1:1 · 17/2 · Kind B+D Slideout
- export: GET …/csdl-records/export?resource=boundary-markers (+ filter QS) · BFF binary proxy
- import: POST …/csdl-records/import?resource=boundary-markers · multipart · import_now
- Q-XLS-SCOPE: filtered · Q-XLS-KIND: respect_filter · Q-XLS-FILENAME: Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls
- golden: Cục 16-sheet Biểu 9 · checksum 17 · 1 sheet · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- entity/migration: **none** · keep Schema_CsdlBieu9
- BFF: proxy only · stream binary · FE BASE /asset/csdl-records
- domain: Asset · **cấm ERP.*** · **cấm** invent infra
- gates: tz_na · xco_get_only · share_tenant (keep)
- solution_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | Nhập Excel | ToolbarButton+file | POST import upsert |

## Screens / zones (ids only)
- S-LIST DES-GRID keep · toolbar +export+import
- S-XLS-EXPORT · S-XLS-IMPORT
- S-FORM-* keep · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09
- hub=?resource=boundary-markers

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=boundary-markers
- API-XLS-01 GET …/export · API-XLS-02 POST …/import
- BFF mirror web-bff · FormMode list/CRUD keep · export/import = toolbar actions
- T-XLS-S09-BE-01/02 · BFF-01 · FE-01/02 · QA-01 → TL
- GAP-BIEU09-XLS-01…06

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA
