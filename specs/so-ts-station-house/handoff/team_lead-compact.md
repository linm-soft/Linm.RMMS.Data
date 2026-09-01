# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-station-house
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_c105b325
generatedAt: 2026-09-01T08:25:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=STATION_HOUSE
mfeStdUrl: http://localhost:9301/so-ts?type=STATION_HOUSE
alias: /so-ts-station-house → /so-ts?type=STATION_HOUSE (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
typeCode: STATION_HOUSE
dump: tbl_road_admin_office
prefix: NH-
clusterUi: station · t22

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/task/so-ts-station-house.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-station-house-filter-bar.md (T-CTX-01 create)
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45
po: specs/so-ts-station-house/po/requirement.md
design: specs/so-ts-station-house/ui/design.md
sa: specs/so-ts-station-house/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: STATION_HOUSE grid profile · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-station-house-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_building · dumpSpecs merge · GAP-SH-SPEC-01
- T-BE-INIT-01: stationWorkTypes[] · stationBuildLocations[] · officeBuildingGrades[] · auxiliaryWorksGrades[] · GAP-SH-LOOKUP-01
- T-BE-CRUD-01: name_building IsWeak guard · GAP-SH-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-station-house/implement/so-ts-station-house.md
