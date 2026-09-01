# handoff-compact — sa · so-ts-station-house

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-station-house` |
| title | Sổ TS — Nhà hạt QLĐB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_56208969` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| clusterUi | `station` · tile `t22` |
| prefix | `NH-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprintPrior | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T08:10:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-station-house`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_building` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `stationWorkTypes` · `stationBuildLocations` · `officeBuildingGrades` · `auxiliaryWorksGrades`
- Grid hide-low-fill OFF default: DT nhà · DT CT phụ · cấp nhà · cấp CT phụ · vật tư · khuôn viên
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=STATION_HOUSE` · alias board-only
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock STATION_HOUSE |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên công trình | Text | ← name_building |
| type_work_id | Loại công trình | Dropdown | * init stationWorkTypes |
| build_location | Vị trí mặt cắt | Dropdown | init stationBuildLocations |
| office_building_grade_id | Cấp nhà | Dropdown | init officeBuildingGrades · grid OFF |
| total_area_office_building | DT nhà | Number | dumpSpecs · grid OFF |
| + dump §4 rest | khuôn viên · CT phụ · vật tư | Number/Dropdown/TextArea | dumpSpecs · grid OFF default |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=STATION_HOUSE`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=STATION_HOUSE` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t22
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-station-house/be/solution-discovery.md`
- design: `specs/so-ts-station-house/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile STATION_HOUSE · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
