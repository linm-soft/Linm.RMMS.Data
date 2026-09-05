# handoff-compact — sa · so-ts-rest-area

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4d1221b7` |
| typeCode | `REST_AREA` |
| dump | `tbl_rest_stops` |
| clusterUi | `station` · tile `t26` |
| prefix | `DN-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| headerFingerprintPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T04:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-RA-FLAT-01** defer P2)
- `name` ← `name_work` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta `restAreaWorkTypes` · `restAreaCategories` · `restAreaOwners` · `officeBuildingGrades` · `auxiliaryWorksGrades` · `buildLocations`
- Grid: ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu · ẩn type/kmTo/SL/ĐVT/parking default
- parking_lot/total_parking_lot **OFF** default · defer peer `so-ts-parking`
- Filter/import **tách** REST_AREA vs PARKING (**GAP-RA-SPLIT-01**)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=REST_AREA` · alias `/so-ts-rest-area` board-only optional
- open questions: **none** (autoApprove chốt)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock REST_AREA |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / name_work | Tên trạm | Text | ← name_work |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| categorized_id | Xếp loại | Dropdown | LOOKUP_STATIC |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| actual_length | Chiều dài (m) | Number | grid ON hide-empty |
| site_area_using_land | DT khuôn viên (m²) | Number | grid ON hide-empty |
| traffic_emergency_service | Cứu hộ GT | Select boolean | grid ON hide-empty |
| first_aid_service | Cấp cứu | Select boolean | grid ON hide-empty |
| build_location_id | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=REST_AREA`
- mfeStdUrl alias board `…/so-ts-rest-area`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=REST_AREA`
- Init-data delta: restAreaWorkTypes · restAreaCategories · restAreaOwners · officeBuildingGrades · auxiliaryWorksGrades · buildLocations
- summary-by-type tile t26
- T-* = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-rest-area/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile REST_AREA · GAP-RA-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · type split |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration · lẫn PARKING trong REST_AREA list
