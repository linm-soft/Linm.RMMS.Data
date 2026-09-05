# handoff-compact — dev · so-ts-weigh-station
schemaVersion: 1
feature: so-ts-weigh-station
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_fc027d60
typeCode: WEIGH_STATION
dump: weight_station
prefix: TFP-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=WEIGH_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=WEIGH_STATION
alias: /so-ts-weigh-station → /so-ts?type=WEIGH_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
build: MFE yarn build PASS · BE dotnet build PASS
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
writtenAt: 2026-09-01T07:00:00.000Z

## Decisions
- reuse AssetListPage/AssetFormPage S-* · cấm fork
- WEIGH profile: hide type/kmTo/qty/unit/length_approaching · ensure TB cân/tải/ĐVQL/DT nhà + optional site/camera/light
- LOOKUP_STATIC init-data: weighManagementUnits · weighEquipmentTypes · weighPavementTypes · weighBoolOptions
- name←station_name · kmFrom/kmTo optional · no required dump attr beyond type/route/status
- S-ATTR-ROAD: length_approaching_road + width_approaching_road gộp
- filter-bar: so-ts-weigh-station-filter-bar.md V1–V5
- LeaveConfirmModal reuse · History Modal reuse

## Inventory (slim)
| id | surface | notes |
|----|---------|-------|
| list | AssetListPage type=WEIGH_STATION | LinCatalogDataGrid + profile |
| form | AssetFormPage type=WEIGH_STATION | 5 col · S-ATTR + Đường vào |
| init | GET init-data | weigh* arrays delta |
| alias | index.tsx | /so-ts-weigh-station Navigate |

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets
- GET init-data · weighManagementUnits · weighEquipmentTypes · weighPavementTypes · weighBoolOptions

## UNCLEAR
- none

## Debt
- flatten Schema_* DEFER P2 · Auth DEFER · E2E QA only

## Full paths
- implement: specs/so-ts-weigh-station/implement/so-ts-weigh-station.md
- filter: docs/context/features/so-ts-weigh-station-filter-bar.md

## Next
role: qa · /agent-qa*
write: specs/so-ts-weigh-station/qa/scenarios.md
