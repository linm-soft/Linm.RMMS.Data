# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T02:05:00.000Z
taskId: task_5ee91442
resource: bridges
columns: 48
IdCode: BR-
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S02) · typed CRUD **KEEP** · **cấm** reopen 48-col
- export: catalogToolbar · BFF binary proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · FILENAME: `Bieu02_ThongKeCau_{yyyyMMdd}.xls` (**SA chốt `.xls`**)
- export mode: **filter-all** · ignore page/pageSize · **cấm** streaming P0
- golden: Cục 16-sheet · sheet Biểu 2 · 48 cols · GPS×3 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- Import: DEFER P1 · UI ẩn
- API keep prefix `api/v1/asset/csdl-records` · entity shell+typed KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU02-XLS-01..04 (UI · export · import-defer · filter-all)
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02
- hub=?resource=bridges

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01
- Export QS = list filters · ignore page · Import DEFER
- T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: typed KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-02-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-02-real-data.md
