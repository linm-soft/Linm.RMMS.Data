# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: sa
status: done
changeScope: edit_page
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T01:50:00.000Z
taskId: task_5dc0c863
priorTyped: task_c534e53a · keep
priorDesign: task_7d1a980f
priorPo: task_23c0d73d
priorAnaly: task_b92db6a6
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
peerSoTs: so-ts-its-camera · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
solution_confirm: approve
epic: csdl-export-print · T-XLS-S14
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
domain: Asset
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page (T-XLS-S14) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu14 · shell+typed 1:1 · 21 · Kind B+D Slideout · device/infra/GPS flat
- export: GET …/csdl-records/export?resource=its-systems (+ filter QS · no page) · BFF binary proxy
- import: **DEFER P1** · export_only_p0 · nút ẩn
- Q-XLS-SCOPE: filtered · Q-XLS-FILENAME: Bieu14_HeThongITS_{yyyyMMdd}.xls · **ext .xls** · Q-XLS-SHEET: one_sheet
- entity/migration: **none** @ SA · keep Schema_CsdlBieu14
- gates: tz_na · xco_get_only · share_tenant (export inherit list XCO)
- toolbar Xuất · **cấm** filter-bar export · toast stub ≠ done · golden Cục 16-sheet · cấm 12+8
- peer cite only · **cấm** merge so-ts-its-camera/road-assets/AiVision · **cấm** ERP.*
- open questions: **none**

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form/list 21) | typed keep | — | cấm reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- S-LIST DES-GRID keep · toolbar +DES-EXPORT · peer cite only
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14 · hub ?resource=its-systems

## API / tasks (ids)
- API-XLS-01 GET …/export · API-XLS-02 POST import DEFER P1
- BFF mirror web-bff · FormMode list/CRUD keep · export = toolbar action
- T-XLS-S14-BE-01 · BFF-01 · FE-01/02 · QA-01 → TL · BE-02 OUT P1

## Artifacts
| Kind | Path |
|------|------|
| solution | specs/csdl-bieu-14/be/solution-discovery.md |
| prior design compact | specs/csdl-bieu-14/handoff/design-compact.md |

## UNCLEAR
- none

## Next
| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-14.md · T-XLS-S14-* · gates |
| Dev | /implement-export-import-excel · cấm filter export |
| QA | e2e queued /agent-qa* only |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer/road-assets/AiVision · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0
