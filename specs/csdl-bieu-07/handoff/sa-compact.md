# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:35:00.000Z
taskId: task_8aedafae
resource: shoulders-fences
columns: 20
IdCode: LE-
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
peerSoTs: SHOULDER

## Decisions
- changeScope: edit_page (T-XLS-S07) · typed CRUD **KEEP** · **cấm** reopen 20-col
- export: catalogToolbar · BFF binary proxy · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · FILENAME: `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` (**SA chốt `.xls`** · override PO `.xlsx`)
- export mode: **filter-all** · ignore page/pageSize · **cấm** streaming P0
- golden: Cục 16-sheet · sheet Biểu 7 · 20 cols · FenceLengthM↔km · SlopeClearingM · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp SHOULDER vào sheet (GAP-BIEU07-XLS-PEER)
- Import: DEFER P1 · UI ẩn
- API keep prefix `api/v1/asset/csdl-records` · entity shell+typed KEEP · migration none mới
- Gates: tz_na · xco_get_only · share_tenant
- Gaps: GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | 3 khối lề/taluy/HR · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · filter-all · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · S-FORM-* KEEP
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-07
- hub=?resource=shoulders-fences

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01
- Export QS = list filters · ignore page · Import DEFER
- T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 → TL
- entity/migration: typed KEEP · **no new migration** @ XLS

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/design.md
- prior: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- control-hint: specs/_data-analy/features/csdl-bieu-07-control-hint.md
- real-data: specs/_data-analy/features/csdl-bieu-07-real-data.md
