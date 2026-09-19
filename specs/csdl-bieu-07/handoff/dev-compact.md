# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:50:00.000Z
taskId: task_5db71cfd
tlTaskId: task_f95a30db
resource: shoulders-fences
columns: 20
IdCode: LE-
changeScope: edit_page
formPattern: Slideout
route_confirm: route_a
yarnBuild: PASS
dotnetBuild: PASS
migration: none
peerSoTs: SHOULDER
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubDeepLink: /so-ts/csdl-so-sach?resource=shoulders-fences

## Decisions
- changeScope: edit_page (T-XLS-S07) · typed CRUD **KEEP** · **cấm** reopen 20-col
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · ignore page
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · Import **DEFER P1** ẩn
- golden: sheet «Biểu 7» · 20 cols control-hint · FenceLengthKm · SlopeLengthM · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp SHOULDER (GAP-BIEU07-XLS-PEER)
- API: GET `…/csdl-records/export?resource=shoulders-fences` (+ side · fenceKind · km*) · **cấm ERP.***
- BFF proxy KEEP · no new migration · AllowedPageSizes +10000

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | 3 khối · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* KEEP · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-07
- hub=?resource=shoulders-fences

## API / tasks (ids only)
- CRUD KEEP · Export API-XLS-01 · Import DEFER
- T-KEEP · T-XLS-BE-01/02 · T-XLS-BFF-01 · T-XLS-FE-01/02 **done**
- T-XLS-QA-01 pending → `/agent-qa*`
- Gaps closed P0: GAP-BIEU07-XLS-01/02/04/05 · PEER · FILTER-BAR-08
- Debt: Import P1 · T-PERM-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/implement/csdl-bieu-07.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/STATUS.md
- prior tl: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/team_lead-compact.md
