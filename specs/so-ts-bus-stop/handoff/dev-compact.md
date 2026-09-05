# handoff-compact — dev · so-ts-bus-stop
schemaVersion: 1
feature: so-ts-bus-stop
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_4efb408d
typeCode: BUS_STOP
dump: tbl_bus_stops
prefix: DX-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=BUS_STOP
mfeStdUrl: http://localhost:9301/so-ts?type=BUS_STOP
alias: /so-ts-bus-stop → /so-ts?type=BUS_STOP
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
build: MFE yarn build PASS · BE dotnet build PASS
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T08:30:00.000Z

## Decisions
- reuse AssetListPage/AssetFormPage S-* · cấm fork
- BUS_STOP profile: hide type/kmTo/qty · ENSURE type_work/management/stop_bay/seated_waiting_bus/bus_shelter · vitri optional
- LOOKUP_STATIC init: busStopWorkTypes · ManagementUnits · PavementTypes · ShelterStructures · CrossSections · BoolOptions
- name←station_name · kmFrom/kmTo optional · type_work_id required · prefix DX-
- filter-bar: so-ts-bus-stop-filter-bar.md V1–V5
- LeaveConfirmModal + History Modal reuse

## Inventory (slim)
| id | surface | notes |
|----|---------|-------|
| list | AssetListPage type=BUS_STOP | LinCatalogDataGrid + profile |
| form | AssetFormPage type=BUS_STOP | 5 col · S-ATTR bay/shelter/escape |
| API | road-assets CRUD + init-data | dumpSpecs P1 |
| BFF | web-bff asset proxy | no business logic |

## APIs
- GET/POST/PUT/DELETE `/api/v1/asset/road-assets` · `?type=BUS_STOP`
- GET `/api/v1/asset/road-assets/init-data` · busStop* arrays
- ui-schema catalogs/road-assets

## Debt
- Auth DEFER · flatten Schema_* P2 · E2E QA only

## Full
write: specs/so-ts-bus-stop/implement/so-ts-bus-stop.md

## Next
role: qa · /agent-qa
