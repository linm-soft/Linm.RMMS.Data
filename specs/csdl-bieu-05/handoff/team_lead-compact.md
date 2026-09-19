# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-05
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728
headerFingerprint: sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f
writtenAt: 2026-09-18T03:55:00.000Z
taskId: task_1a82385e
saTaskId: task_c949c568
resource: ditches
columns: 18
IdCode: RN-
changeScope: edit_page
formPattern: Slideout
team_lead_confirm: approve
route_confirm: keep
design_confirm: approve
solution_confirm: approve
autoApprove: ON
e2eQa: ON
peerSoTs: so-ts-ditch

## Decisions
- changeScope: edit_page (T-XLS-S05) · typed CRUD **KEEP** · **cấm** reopen 18-col
- route_confirm: **keep** `/csdl-bieu-05` + hub · no new URL
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · Import **DEFER P1**
- golden: Cục 16-sheet · Biểu 5 · 18 cols · ditchKind/shape/range · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp so-ts-ditch vào sheet (GAP-BIEU05-XLS-PEER)
- migration: **none** @ XLS · gates tz_na · xco_get_only · share_tenant
- API: GET `…/csdl-records/export?resource=ditches` · **cấm ERP.***
- team_lead_confirm: approve (autoApprove ON) · open Q: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 18) | typed prior | keep | ditchKind · shape · range · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export · S-XLS-EXPORT · S-XLS-IMPORT hidden
- S-FORM-* KEEP · mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · hub=?resource=ditches

## Task matrix (ids)
- T-CTX-XLS-01 · T-OUT-01 · T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 · T-REG-GRID/PEER
- AC-XLS-01..09 · AC-GRID-01..05 regression · GAP-BIEU05-XLS-01..05 · GAP-BIEU05-XLS-PEER

## Next
| Role | Need |
|------|------|
| Dev | implement T-XLS-* · handoff/dev-compact.md |
| QA | queued `/agent-qa*` · T-XLS-QA-01 |
| Review | after QA |

## UNCLEAR
- none

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/task/csdl-bieu-05.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/STATUS.md
