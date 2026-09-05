# handoff-compact — sa · so-ts-parking

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-parking` |
| title | Sổ TS — Bãi đỗ xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a1f6e42a` |
| typeCode | `PARKING` |
| dump | `tbl_rest_stops` |
| clusterUi | `station` · tile `t37` |
| prefix | `BD-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprintPrior | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T04:50:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-PK-FLAT-01** defer P2)
- `name` ← `name_work` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta `parkingWorkTypes` · `parkingCategories` · `parkingOwners` · `officeBuildingGrades` · `auxiliaryWorksGrades` · `buildLocations`
- Grid: ON+hide-empty chiều dài/DT/**bãi đỗ**/cứu hộ/cấp cứu · ẩn type/kmTo/SL/ĐVT
- parking_lot/total_parking_lot **ON** default profile PARKING (**GAP-PK-PARK-01**)
- Filter/import **tách** PARKING vs REST_AREA (**GAP-PK-SPLIT-01**)
- office/service_area/CT phụ: optional form S-ATTR · hide-empty list · **không** ẩn cứng form khi fill 0
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=PARKING` · alias `/so-ts-parking` board-only optional
- open questions: **none** (autoApprove chốt)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock PARKING |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / name_work | Tên bãi | Text | ← name_work |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| categorized_id | Xếp loại | Dropdown | LOOKUP_STATIC |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| actual_length | Chiều dài (m) | Number | grid ON hide-empty |
| site_area_using_land | DT khuôn viên (m²) | Number | grid ON hide-empty |
| parking_lot | Bãi đỗ xe | Select boolean | grid **ON** profile PARKING |
| total_parking_lot | Tổng DT bãi đỗ (m²) | Number | grid **ON** hide-empty |
| traffic_emergency_service | Cứu hộ GT | Select boolean | grid ON hide-empty |
| first_aid_service | Cấp cứu | Select boolean | grid ON hide-empty |
| build_location_id | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=PARKING`
- mfeStdUrl alias board `…/so-ts-parking`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=PARKING`
- Init-data delta: parkingWorkTypes · parkingCategories · parkingOwners · officeBuildingGrades · auxiliaryWorksGrades · buildLocations
- summary-by-type tile t37
- T-* = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-parking/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile PARKING · GAP-PK-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · type split · parking ON |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration · lẫn REST_AREA trong PARKING list
