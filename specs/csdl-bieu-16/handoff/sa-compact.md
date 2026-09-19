# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: sa
status: done
changeScope: edit_page
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T03:20:00.000Z
taskId: task_17aa79d5
priorTyped: task_5c3d4c6b · keep
priorDesign: task_4db008e6
priorPo: task_de6499fc
priorAnaly: task_e344020d
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
peerSoTs: so-ts-interchange · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
solution_confirm: approve
epic: csdl-export-print · T-XLS-S16
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
domain: Asset
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page (T-XLS-S16) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu16 + Branch · shell+typed 1:1 · 39 · Kind B+D Slideout · branches[] embed
- export: GET …/csdl-records/export?resource=interchanges (+ filter QS · no page) · BFF binary proxy
- import: **DEFER P1** · export_only_p0 · nút ẩn
- Q-XLS-SCOPE: filtered · Q-XLS-FILENAME: Bieu16_NutGiao_{yyyyMMdd}.xls · **ext .xls** · Q-XLS-SHEET: name_cuc «Biểu 16» · Q-XLS-BRANCH: header_blank
- flatten: 1 row/nhánh (repeat header) · 0 nhánh → 1 row branch* trống
- entity/migration: **none** @ SA · keep Schema_CsdlBieu16+Branch
- gates: tz_na · xco_get_only · share_tenant (export inherit list XCO)
- toolbar Xuất · **cấm** filter-bar export · toast stub ≠ done · golden Cục 16-sheet · cấm 12+8
- peer cite only · **cấm** merge so-ts-interchange/road-assets · **cấm** ERP.*
- open questions: **none**

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form/list 39 + branches) | typed keep | — | cấm reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- S-LIST DES-GRID keep · toolbar +DES-EXPORT · peer cite only
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP · DES-FORM-BRANCH keep
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16 · hub ?resource=interchanges

## API / tasks (ids)
- API-XLS-01 GET …/export · API-XLS-02 POST import DEFER P1
- BFF mirror web-bff · FormMode list/CRUD keep · export = toolbar action
- T-XLS-S16-BE-01 · BFF-01 · FE-01/02 · QA-01 → TL · BE-02 OUT P1

## Artifacts
| Kind | Path |
|------|------|
| solution | specs/csdl-bieu-16/be/solution-discovery.md |
| prior design compact | specs/csdl-bieu-16/handoff/design-compact.md |

## UNCLEAR
- none

## Next
| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-16.md · T-XLS-S16-* · gates |
| Dev | /implement-export-import-excel · flatten branches · cấm filter export |
| QA | e2e queued /agent-qa* only |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer/road-assets · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0 · flatten-only mất nhánh
