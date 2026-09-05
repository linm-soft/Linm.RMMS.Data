# Handoff compact — team_lead

schemaVersion: 1
feature: so-ts-culvert-x
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T12:50:00.000Z
taskId: task_28b2552d
autoApprove: ON
e2eQa: ON
changeScope: new_page
typeCode: CULVERT_X
dump: missing (GAP-CULVERT-X-01)
clusterUi: crossing · tile t07
prefix: CN- (GIS CN · cong)
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-POINT
Kind: B A–D+F+H
route_confirm: route_a
mfeStdRoute: /so-ts-culvert-x
mfeStdUrl: http://localhost:9301/so-ts-culvert-x
peerStdUrl: http://localhost:9301/so-ts?type=CULVERT_X
alias: /so-ts-culvert-x → live REQUIRED Navigate
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none P1
contentHashPrior: sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b
headerFingerprintPrior: sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c
devSlash: /agent-dev

## Decisions
- changeScope=new_page · Kind B · Full page 5col · cấm fork/tab/ERP.*
- route_a live /so-ts?type=CULVERT_X · alias Navigate REQUIRED
- dump thiếu · empty OK · cấm seed · proposed keys · remap tbl_*
- name optional · list OFF · S-LOC-POINT · prefix CN-
- LOOKUP: typeWork · culvertShapes · materialBody · structures
- hide-empty: width · material_body_id · ẩn type/kmTo/SL/ĐVT
- open questions: none

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| type_work_id / culvert_shape_id | Dropdown | LOOKUP · grid ON |
| weight/number/height/crossing_length_culvert | Number | grid ON |
| width / material_body_id | Number/Dropdown | hide-empty |
| has_*/structure/area/basin | mixed | S-ATTR |
| name | Text | optional · list OFF |
| kmFrom | Text | S-LOC-POINT · ẩn kmTo |

## Screens / zones (ids only)
- DES-GRID-A/B/B-FILTER/C0/C2/C3/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data
- T-*: T-CTX-01 · T-BE-CRUD/INIT/UISCHEMA · T-BFF · T-PERM · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP/HIST · T-QA-*
- deps: T-BE → T-UI · T-CTX before FILTER
- SA map: T-CN-01..11 → LIST/FORM/BE/INIT/LEAVE/CTX/pack/KEY

## UNCLEAR
- none

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/task/so-ts-culvert-x.md
- prior: handoff/sa-compact.md · design · po · data_analy
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/STATUS.md

## Next
| Role | Need |
|------|------|
| dev | /agent-dev · implement/so-ts-culvert-x.md |
| QA | e2e queued /agent-qa* |

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01
