# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-station-house
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_44057caa
generatedAt: 2026-09-01T08:50:00.000Z
typeCode: STATION_HOUSE
dump: tbl_road_admin_office
prefix: NH-
clusterUi: station · t22
mfeStdRoute: /so-ts?type=STATION_HOUSE
mfeStdUrl: http://localhost:9301/so-ts?type=STATION_HOUSE
alias: /so-ts-station-house → redirect
API: api/v1/asset/road-assets
domain: Asset
migration: none
yarnBuild: PASS
dotnetBuild: PASS
e2eQa: ON (queued — chỉ /agent-qa*)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/implement/so-ts-station-house.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-station-house-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html

## Shipped
- List Kind B profile STATION_HOUSE · ensure type_work_id · hide-low-fill OFF
- Form reuse AssetFormPage · S-ATTR dump §4 · name←name_building · ẩn kmTo
- init-data: stationWorkTypes · stationBuildLocations · officeBuildingGrades · auxiliaryWorksGrades
- CRUD: type_work_id required · name/kmFrom optional · prefix NH-
- LeaveConfirmModal · useAlert · LinCatalogHistoryModal
- BFF proxy only · migration none

## APIs
- GET/POST/PUT/DELETE /api/v1/asset/road-assets
- GET …/init-data (LOOKUP delta)
- GET/PUT catalogs/road-assets/ui-schema

## Debt
- Auth DEFER · flatten P2 · E2E not run (Dev)

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · e2e ở Dev

## Next
role: qa · /agent-qa*
write: specs/so-ts-station-house/qa/scenarios.md
