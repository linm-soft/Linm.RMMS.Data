# handoff-compact — sa · so-ts-rescue-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_784c6afd` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` |
| clusterUi | `station` · ô `—` (list only · t24≠facility) |
| prefix | `CN-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprintPrior | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T02:45:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-rescue-station`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_building` · label «Tên kho bãi» · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `officeBuildingGrades` · `auxiliaryWorksGrades` · `storedBuildingGrades` · `vitriOptions`
- Grid **ON mẫu**: vật tư · DT khuôn viên · cấp+DT nhà/CT phụ/nhà kho · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=RESCUE_STATION` · alias board-only · **cấm** invent tile (**GAP-RS-TILE-01**)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock RESCUE_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên kho bãi | Text | ← name_building |
| materials_in_store | Vật tư chứa trong kho | TextArea | dumpSpecs · grid ON |
| site_area_using_land | DT khuôn viên | Number | dumpSpecs · grid ON |
| office_building_grade_id | Cấp nhà | Dropdown | init officeBuildingGrades · grid ON |
| total_area_office_building | DT nhà | Number | dumpSpecs · grid ON |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | init auxiliaryWorksGrades · grid ON |
| total_area_auxiliary_works | DT CT phụ | Number | dumpSpecs · grid ON |
| stored_building_grade_id | Cấp nhà kho | Dropdown | init storedBuildingGrades · grid ON |
| total_area_stored_building | DT nhà kho | Number | dumpSpecs · grid ON |
| vitri | Vị trí | Text/Dropdown | init vitriOptions · S-ATTR |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RESCUE_STATION`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=RESCUE_STATION` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type (no facility tile)
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-rescue-station/be/solution-discovery.md`
- design: `specs/so-ts-rescue-station/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile RESCUE_STATION · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels · **cấm** invent tile |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map/tile · nhầm RESCUE_VEHICLE · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
