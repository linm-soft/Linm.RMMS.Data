# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:15:00.000Z
taskId: task_72b0354c
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S08) · typed CRUD **KEEP** · **cấm** reopen 45/11
- export/import: catalogToolbar · BFF binary/multipart proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · FILENAME: Bieu08_HeThongATGT_{yyyyMMdd}.xls · TYPE: one_sheet_45
- golden: Cục 16-sheet · sheet Biểu 8 · **cấm** 12+8 · **cấm** wide-row
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- API keep prefix `api/v1/asset/csdl-records` · Schema_CsdlBieu8+11 KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU08-XLS-01…06 (EXP/UI/toast/golden/filter/path/wide)
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary · one_sheet_45 |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed+child |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP · LeaveConfirmModal
- S-XLS-EXPORT · S-XLS-IMPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08
- hub=?resource=traffic-safety

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02/03
- Export QS = list filters (+type) · Import multipart skipBridge
- T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: Schema_CsdlBieu8+11 KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-08-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-08-real-data.md

## Cấm (compact)
ERP.* · invent API · filter-bar export · 12+8 · wide-row · reopen typed · Write MFE · Step4b · yarn build/e2e/start:std @ SA
