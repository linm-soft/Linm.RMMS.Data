# handoff-compact — sa · so-ts-bus-stop

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_75165bee` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` |
| clusterUi | `stop` · tile `t13` |
| prefix | `DX-` (GAP-DD-PREFIX-01 · DefaultCodePrefix live `TS-` → type override) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T08:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-DD-FLAT-01** defer P2)
- `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta busStopWorkTypes / ManagementUnits / PavementTypes / ShelterStructures / CrossSections · bool
- Grid: boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- Prefix **`DX-`** · Live `/so-ts?type=BUS_STOP` · alias board optional
- DOMAIN-MAP cite Asset · optional row `so-ts-bus-stop`
- open questions: **none** (autoApprove)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock BUS_STOP |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / station_name | Tên điểm | Text | ← station_name |
| type_work_id | Loại tài sản | Dropdown | LOOKUP_STATIC · * |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC |
| stop_bay | Có làn đậu | Dropdown bool | grid **luôn ON** |
| seated_waiting_bus | Có ghế chờ | Dropdown bool | grid **luôn ON** |
| bus_shelter | Có nhà chờ | Dropdown bool | grid **luôn ON** |
| pavement_type_bus_stop_bay_id | Kết cấu làn đậu | Dropdown | LOOKUP_STATIC |
| length/width_bus_stop_bay | Kích thước làn | Number | hide-empty |
| structure_bus_shelter_id | Kết cấu nhà chờ | Dropdown | LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | L/R/C · hide-empty |
| escape_route_* | Đường lánh nạn | Text/Number | S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=BUS_STOP`
- mfeStdUrl alias board `…/so-ts-bus-stop`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=BUS_STOP`
- Init-data delta: busStop* LOOKUP arrays
- summary-by-type tile t13
- T-DD-01…10 = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-bus-stop/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile BUS_STOP · GAP-DD-* · init LOOKUP delta · prefix DX- |
| Dev | S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · hide-empty · alias |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration · Schema_* flatten P1
