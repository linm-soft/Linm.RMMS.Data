# handoff-compact — dev · so-ts-bus-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_adc64d49` |
| typeCode | `BUS_STATION` |
| prefix | `BX-` |
| formPattern | Full page · CatalogFormShell 5 cols |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| writtenAt | `2026-09-01T04:00:00.000Z` |

## Decisions

- route_a live `/so-ts?type=BUS_STATION` · alias `/so-ts-bus-station` Navigate
- API `api/v1/asset/road-assets` · init delta busStation*[] · migration none
- Grid profile BUS_STATION · hide type/kmTo/qty/unit · ON+hide-empty DT/tuyến VT/DT sàn/cấp
- Form S-ATTR editable · name←name_terminal · kmTo ẩn · type_work_id required
- build PASS MFE+BE · e2e queued QA only

## Inventory (slim)

| id | notes |
|----|-------|
| type_work_id | Dropdown · init busStationWorkTypes · grid ON |
| owner_id | Dropdown · init busStationOwners · grid ON |
| site_area_using_land | Number · hide-empty |
| main_transportation_route | Text · hide-empty |
| total_area_floors | Number · hide-empty |
| building_grade_id | Dropdown · hide-empty |
| build_location | Dropdown L/R/C |
| classification | Dropdown · grid OFF default |

## URLs

- mfeStdUrl=`http://localhost:9301/so-ts?type=BUS_STATION`
- alias=`http://localhost:9301/so-ts-bus-station`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html`

## Build

- yarn build: **PASS**
- dotnet build Linm.RMMS.WebService.sln: **PASS**

## Debt

- E2E T-QA-* queued · flatten P2 DEFER · auth perm DEFER

## Next

| Role | Need |
|------|------|
| **QA** | `/agent-qa*` · e2e mfeStdUrl · scenarios |

## Full paths

- implement: `specs/so-ts-bus-station/implement/so-ts-bus-station.md`
- filter-bar: `docs/context/features/so-ts-bus-station-filter-bar.md`
