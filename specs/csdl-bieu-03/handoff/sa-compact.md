# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-03
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9
headerFingerprint: sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8
writtenAt: 2026-09-18T02:40:00.000Z
taskId: task_124631cd
resource: road-tunnels
columns: 42
IdCode: TN-
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S03) · typed CRUD **KEEP** · **cấm** reopen 42-col
- export: catalogToolbar · BFF binary proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · FILENAME: `Bieu03_HamDuongBo_{yyyyMMdd}.xls` (**SA chốt `.xls`**)
- export mode: **filter-all** · ignore page/pageSize · **cấm** streaming P0
- XLS-TUBE: **1 Excel row = 1 ống** (+ GPS) · keep two_rows CRUD
- golden: Cục 16-sheet · sheet Biểu 3 · 42 cols · GPS×3 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- Import: DEFER P1 · UI ẩn
- API keep prefix `api/v1/asset/csdl-records` · entity shell+typed KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU03-XLS-01..05 (UI · export · import-defer · filter-all · tube-row)
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | GPS×3 · tube · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-03
- hub=?resource=road-tunnels

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01
- Export QS = list filters · ignore page · Import DEFER
- T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: typed KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-03-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-03-real-data.md
