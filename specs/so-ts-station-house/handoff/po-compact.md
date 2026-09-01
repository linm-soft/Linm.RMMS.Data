# handoff-compact — po · so-ts-station-house

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-station-house` |
| title | Sổ TS — Nhà hạt QLĐB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9f14fcb4` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| clusterUi | `station` · tile `t22` |
| prefix | `NH-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprintPrior | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T01:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=STATION_HOUSE` · alias `/so-ts-station-house` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_building` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type_work_id · build_location · office_building_grade_id · auxiliary_works_grade_id
- Grid hide-low-fill OFF default: DT nhà · DT CT phụ · cấp nhà · cấp CT phụ · vật tư · khuôn viên (SchemaConfig)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill STATION_HOUSE / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên công trình | Text | ← name_building |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| build_location | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | LOOKUP_STATIC · form ON · grid OFF default |
| total_area_office_building | DT nhà (m²) | Number | form ON · grid OFF default |
| site_area_using_land | DT khuôn viên | Number | form ON · grid OFF default |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC · form ON · grid OFF default |
| total_area_auxiliary_works | DT CT phụ | Number | form ON · grid OFF default |
| materials_in_office | Vật tư nhà hạt | TextArea | form ON · grid OFF default |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=STATION_HOUSE`
- mfeStdUrl alias board `…/so-ts-station-house`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t22
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-station-house-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-station-house-real-data.md`
- po: `specs/so-ts-station-house/po/requirement.md`
- prior compact: `specs/so-ts-station-house/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-low-fill · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile STATION_HOUSE · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
