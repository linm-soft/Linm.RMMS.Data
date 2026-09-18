# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: sa
status: done
changeScope: edit_page
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:25:00.000Z
taskId: task_a5aa9767
priorTyped: task_4d337ade · keep
priorDesign: task_c0f936f4
priorPo: task_18337e1c
priorAnaly: task_4b6f0c6e
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
solution_confirm: approve
epic: csdl-export-print · T-XLS-S15
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
domain: Asset
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page (T-XLS-S15) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu15 · shell+typed 1:1 · 20 · Kind B+D Slideout · Facility*/Area*/Equipment* flat
- export: GET …/csdl-records/export?resource=ops-facilities (+ filter QS · no page) · BFF binary proxy
- import: **DEFER P1** · export_only_p0 · nút ẩn
- Q-XLS-SCOPE: filtered · Q-XLS-FILENAME: Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls · **ext .xls** · Q-XLS-SHEET: one_sheet
- entity/migration: **none** @ SA · keep Schema_CsdlBieu15
- gates: tz_na · xco_get_only · share_tenant (export inherit list XCO)
- toolbar Xuất · **cấm** filter-bar export · toast stub ≠ done · golden Cục 16-sheet · cấm 12+8
- peer cite only · **cấm** merge so-ts-toll/rest/station/road-assets · **cấm** ERP.*
- open questions: **none**

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form/list 20) | typed keep | — | cấm reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- S-LIST DES-GRID keep · toolbar +DES-EXPORT · peer cite only
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15 · hub ?resource=ops-facilities

## API / tasks (ids)
- API-XLS-01 GET …/export · API-XLS-02 POST import DEFER P1
- BFF mirror web-bff · FormMode list/CRUD keep · export = toolbar action
- T-XLS-S15-BE-01 · BFF-01 · FE-01/02 · QA-01 → TL · BE-02 OUT P1

## Artifacts
| Kind | Path |
|------|------|
| solution | specs/csdl-bieu-15/be/solution-discovery.md |
| prior design compact | specs/csdl-bieu-15/handoff/design-compact.md |

## UNCLEAR
- none

## Next
| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-15.md · T-XLS-S15-* · gates |
| Dev | /implement-export-import-excel · cấm filter export |
| QA | e2e queued /agent-qa* only |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer/road-assets · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0
