# handoff-compact — sa · so-ts-weigh-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_241ffb82` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| clusterUi | `station` · tile `t27` |
| prefix | `TFP-` (keep · shared TOLL) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprintPrior | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:25:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-WEIGH-FLAT-01** defer P2)
- `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta `weighManagementUnits` · `weighEquipmentTypes` · `weighPavementTypes` · `weighBoolOptions` (Có/Không)
- Grid: ON+hide-empty TB cân/tải/ĐVQL/DT nhà · optional DT khu lắp/camera/đèn · length_approaching OFF · ẩn type/kmTo/SL/ĐVT
- Form: gộp Đường vào length+width · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Prefix **giữ `TFP-`** shared TOLL · Live `/so-ts?type=WEIGH_STATION` · alias board optional
- open questions: **none** (autoApprove chốt GAP-WEIGH-LOOKUP-01 → LOOKUP_STATIC)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock WEIGH_STATION |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / station_name | Tên trạm | Text | ← station_name |
| type_weighting_equipment_id | Loại TB cân | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| max_axle_load_limit | Tải trục max | Number | grid ON hide-empty |
| management_unit_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| building_area | DT nhà | Number | grid ON hide-empty |
| site_area_installed_equipment | DT khu lắp | Number | optional hide-empty |
| camera/light / bool flags | Camera / Đèn / … | Dropdown bool | Có/Không |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| length/width_approaching_road | Đường vào | Number | form gộp · length grid OFF |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=WEIGH_STATION`
- mfeStdUrl alias board `…/so-ts-weigh-station`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=WEIGH_STATION`
- Init-data delta: weighManagementUnits · weighEquipmentTypes · weighPavementTypes · weighBoolOptions
- summary-by-type tile t27
- T-WEIGH-01…08 = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-weigh-station/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile WEIGH · GAP-WEIGH-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · hide-empty · alias route |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration
