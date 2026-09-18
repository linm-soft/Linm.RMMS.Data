# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
headerFingerprint: sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2
writtenAt: 2026-09-17T18:15:00.000Z
taskId: task_24cf3664
resource: pavement-sections
columns: 38
IdCode: MD-
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S01) · typed CRUD **KEEP** · **cấm** reopen 38-col
- export/import: catalogToolbar · BFF binary/multipart proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: import_now · FILENAME: Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls
- golden: Cục 16-sheet · sheet Biểu 1 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- API keep prefix `api/v1/asset/csdl-records` · entity shell+typed KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU01-XLS-EXP-01 · IMP-01 · UI-01 (CSV stub → golden filtered)
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 38) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP
- S-XLS-EXPORT · S-XLS-IMPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-01
- hub=?resource=pavement-sections

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02/03
- Export QS = list filters · Import multipart skipBridge
- T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: typed KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-01-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-01-real-data.md
