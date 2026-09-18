# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-04
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9
headerFingerprint: sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea
writtenAt: 2026-09-18T03:20:00.000Z
taskId: task_2c8beb5b
resource: culverts
columns: 17
IdCode: CG-
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
peerSoTs: so-ts-culvert-x

## Decisions
- changeScope: edit_page (T-XLS-S04) · typed CRUD **KEEP** · **cấm** reopen 17-col
- export: catalogToolbar · BFF binary proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · FILENAME: `Bieu04_CongCacLoai_{yyyyMMdd}.xls` (**SA chốt `.xls`** · override PO `.xlsx`)
- export mode: **filter-all** · ignore page/pageSize · **cấm** streaming P0
- golden: Cục 16-sheet · sheet Biểu 4 · 17 cols · GPS four_xy · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp so-ts-culvert-x vào sheet (GAP-BIEU04-XLS-PEER)
- Import: DEFER P1 · UI ẩn
- API keep prefix `api/v1/asset/csdl-records` · entity shell+typed KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU04-XLS-01..05 · GAP-BIEU04-XLS-PEER
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17) | typed prior | keep | GPS four_xy · shape · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-04
- hub=?resource=culverts

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01
- Export QS = list filters · ignore page · Import DEFER
- T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: typed KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-04-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-04-real-data.md
