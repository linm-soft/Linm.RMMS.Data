# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: team_lead
status: done
team_lead_confirm: approve
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:40:00.000Z
taskId: task_f95a30db
saTaskId: task_8aedafae
resource: shoulders-fences
columns: 20
IdCode: LE-
changeScope: edit_page
formPattern: Slideout
route_confirm: route_a
peerSoTs: SHOULDER

## Decisions
- changeScope: edit_page (T-XLS-S07) · typed CRUD **KEEP** · **cấm** reopen 20-col
- route_confirm: route_a **KEEP** · không URL mới
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · `.xls`
- FILENAME: `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` (SA chốt)
- Q-XLS-SCOPE: filtered · Q-XLS-IMPORT: export_only_p0 · Import DEFER P1 ẩn
- golden: Cục 16-sheet Biểu 7 · 20 cols · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** merge SHOULDER sheet (GAP-BIEU07-XLS-PEER)
- migration: **none mới** @ XLS · Schema_CsdlBieu7 KEEP
- team_lead_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- e2eQa: ON (queued QA only)

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
- T-KEEP · T-XLS-BE-01/02 · T-XLS-BFF-01 · T-XLS-FE-01/02 · T-XLS-QA-01
- Gaps: GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER · GAP-FILTER-BAR-08
- Next: Dev `/agent-dev` · QA queued

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/task/csdl-bieu-07.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/be/solution-discovery.md
- prior sa: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/sa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/STATUS.md
