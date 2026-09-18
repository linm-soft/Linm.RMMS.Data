# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-04
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9
headerFingerprint: sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea
writtenAt: 2026-09-18T03:30:00.000Z
taskId: task_7925d902
saTaskId: task_2c8beb5b
resource: culverts
columns: 17
IdCode: CG-
changeScope: edit_page
formPattern: Slideout
team_lead_confirm: approve
route_confirm: keep
design_confirm: approve
solution_confirm: approve
autoApprove: ON
e2eQa: ON
peerSoTs: so-ts-culvert-x

## Decisions
- changeScope: edit_page (T-XLS-S04) · typed CRUD **KEEP** · **cấm** reopen 17-col
- route_confirm: **keep** `/csdl-bieu-04` + hub · no new URL
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · `/implement-export-import-excel`
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Import **DEFER P1**
- golden: Cục 16-sheet · Biểu 4 · 17 cols · GPS four_xy · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp so-ts-culvert-x vào sheet (GAP-BIEU04-XLS-PEER)
- migration: **none** @ XLS · gates tz_na · xco_get_only · share_tenant
- API: GET `…/csdl-records/export?resource=culverts` · **cấm ERP.***
- team_lead_confirm: approve (autoApprove ON) · open Q: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17) | typed prior | keep | GPS four_xy · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered · binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export · S-XLS-EXPORT · S-XLS-IMPORT hidden
- S-FORM-* KEEP · mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · hub=?resource=culverts

## Task matrix (ids)
- T-CTX-XLS-01 · T-OUT-01 · T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 · T-REG-GRID/PEER
- AC-XLS-01..09 · AC-GRID-01..05 regression · GAP-BIEU04-XLS-01..05 · GAP-BIEU04-XLS-PEER

## Next
| Role | Need |
|------|------|
| Dev | implement T-XLS-* · handoff/dev-compact.md |
| QA | queued `/agent-qa*` · T-XLS-QA-01 |
| Review | after QA |

## UNCLEAR
- none

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/task/csdl-bieu-04.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/STATUS.md
