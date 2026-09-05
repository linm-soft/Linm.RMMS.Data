# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-rest-area
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_9bcb9b46
generatedAt: 2026-09-01T04:35:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=REST_AREA
mfeStdUrl: http://localhost:9301/so-ts?type=REST_AREA
alias: /so-ts-rest-area → /so-ts?type=REST_AREA (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/task/so-ts-rest-area.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rest-area-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc
po: specs/so-ts-rest-area/po/requirement.md
design: specs/so-ts-rest-area/ui/design.md
sa: specs/so-ts-rest-area/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: REST_AREA grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty chiều dài/DT/cứu hộ/cấp cứu · GAP-RA-SPLIT-01
- T-UI-FILTER-01: so-ts-rest-area-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_work · dumpSpecs merge · prefix DN- · parking OFF
- T-BE-INIT-01: restAreaWorkTypes[] · restAreaCategories[] · restAreaOwners[] · officeBuildingGrades[] · auxiliaryWorksGrades[] · buildLocations[] · GAP-RA-LOOKUP-01
- T-BE-CRUD-01: name_work IsWeak guard · GAP-RA-NAME/SPEC/SPLIT · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · lẫn PARKING · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-rest-area/implement/so-ts-rest-area.md
