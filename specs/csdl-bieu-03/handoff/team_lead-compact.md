# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-03
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9
headerFingerprint: sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8
writtenAt: 2026-09-18T02:45:00.000Z
taskId: task_28ddf784
saTaskId: task_124631cd
resource: road-tunnels
columns: 42
IdCode: TN-
changeScope: edit_page
formPattern: Slideout
team_lead_confirm: approve
route_confirm: keep
design_confirm: approve
solution_confirm: approve
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page (T-XLS-S03) · typed CRUD **KEEP** · **cấm** reopen 42-col
- route_confirm: **keep** `/csdl-bieu-03` + hub · no new URL
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · Import **DEFER P1**
- XLS-TUBE: 1 Excel row = 1 ống · keep two_rows CRUD
- golden: Cục 16-sheet · Biểu 3 · 42 cols · GPS×3 · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- migration: **none** @ XLS · gates tz_na · xco_get_only · share_tenant
- API: GET `…/csdl-records/export?resource=road-tunnels` · **cấm ERP.***
- team_lead_confirm: approve (autoApprove ON) · open Q: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export · S-XLS-EXPORT · S-XLS-IMPORT hidden
- S-FORM-* KEEP · mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · hub=?resource=road-tunnels

## Task matrix (ids)
- T-CTX-XLS-01 · T-OUT-01 · T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 · T-REG-GRID/TUBE
- AC-XLS-01..09 · AC-GRID-01..05 regression · GAP-BIEU03-XLS-01..05

## Next
| Role | Need |
|------|------|
| Dev | implement T-XLS-* · handoff/dev-compact.md |
| QA | queued `/agent-qa*` · T-XLS-QA-01 |
| Review | after QA |

## UNCLEAR
- none

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/task/csdl-bieu-03.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/STATUS.md
