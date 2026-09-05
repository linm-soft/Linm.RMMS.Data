# handoff-compact — sa · so-ts-toll

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_05e187c1` |
| typeCode | `TOLL` |
| dump | `tbl_toll_booth` |
| clusterUi | `station` · tile `t28` |
| prefix | `TFP-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprintPrior | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T05:10:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-TOLL-FLAT-01** defer P2)
- `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta `tollWeightingMethods` · `tollRoofStructures` · `tollPavementTypes` · `tollHouseGrades` · `tollRoadStructures` · `tollOperationLocations` · reuse `auxiliaryWorksGrades`
- Grid: ON+hide-empty làn cân/ETC/thủ công/cấp/DT cổng · auxiliary_works_grade_id OFF default · ẩn type/kmTo/SL/ĐVT
- `width_*`: S-ATTR-WIDTH subsection theo mẫu detail · grid OFF default
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-ATTR-WIDTH·S-GPS · **cấm** fork
- Live `/so-ts?type=TOLL` · alias `/so-ts-toll` board-only optional
- open questions: **none** (autoApprove chốt GAP-TOLL-LOOKUP-01 → LOOKUP_STATIC)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock TOLL |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / station_name | Tên trạm | Text | ← station_name |
| weighting_method | Phương pháp cân | Dropdown | LOOKUP_STATIC |
| number_weighting_lane | Số làn cân | Number | grid ON hide-empty |
| number_etc_lane | Số làn ETC | Number | grid ON hide-empty |
| number_manual_lane | Số làn thủ công | Number | grid ON hide-empty |
| number_one_stop_lane | Số làn một dừng | Number | optional hide-empty |
| roof_structures_gate_id | Kết cấu mái cổng | Dropdown | LOOKUP_STATIC |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| area_yoll_gate_pavement | DT mặt cổng (m²) | Number | grid hide-empty |
| house_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC · hide-empty |
| road_structure_id | Kết cấu đường | Dropdown | LOOKUP_STATIC |
| operation_building_location_id | Vị trí nhà ĐH | Dropdown | S-LOC/S-ATTR |
| width_* | Chiều rộng hạng mục | Number | S-ATTR-WIDTH |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · S-ATTR-WIDTH · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=TOLL`
- mfeStdUrl alias board `…/so-ts-toll`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=TOLL`
- Init-data delta: tollWeightingMethods · tollRoofStructures · tollPavementTypes · tollHouseGrades · tollRoadStructures · tollOperationLocations · auxiliaryWorksGrades
- summary-by-type tile t28
- T-* = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-toll/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile TOLL · GAP-TOLL-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · S-ATTR-WIDTH · LeaveConfirmModal · hide-empty · alias route |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration
