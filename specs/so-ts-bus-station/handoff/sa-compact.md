# handoff-compact — sa · so-ts-bus-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_25f658f6` |
| typeCode | `BUS_STATION` |
| dump | `tbl_bus_station` |
| clusterUi | `station` · tile `t04` |
| prefix | `BX-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprintPrior | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T03:40:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-bus-station`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_terminal` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `busStationWorkTypes` · `busStationOwners` · `busStationBuildingGrades` · `busStationBuildLocations` · `busStationClassifications`
- Grid ON+hide-empty: DT mặt bằng · tuyến VT · DT sàn · cấp nhà · classification OFF default
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=BUS_STATION` · alias board-only
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock BUS_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên bến | Text | ← name_terminal |
| type_work_id | Loại tài sản | Dropdown | * init busStationWorkTypes |
| owner_id | Chủ sở hữu | Dropdown | init busStationOwners |
| site_area_using_land | DT mặt bằng | Number | dumpSpecs · hide-empty |
| main_transportation_route | Tuyến VT chính | Text | dumpSpecs · hide-empty |
| total_area_floors | DT sàn | Number | dumpSpecs · hide-empty |
| building_grade_id | Cấp nhà | Dropdown | init busStationBuildingGrades · hide-empty |
| build_location | Mặt cắt | Dropdown | init busStationBuildLocations · L/R/C |
| classification | Phân loại | Dropdown | init busStationClassifications · grid OFF |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=BUS_STATION`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=BUS_STATION` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t04
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-bus-station/be/solution-discovery.md`
- design: `specs/so-ts-bus-station/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile BUS_STATION · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
