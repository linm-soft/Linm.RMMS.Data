# handoff-compact — design · so-ts-station-house

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-station-house` |
| title | Sổ TS — Nhà hạt QLĐB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_93e161af` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| clusterUi | `station` · tile `t22` |
| prefix | `NH-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprintPrior | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T01:20:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=STATION_HOUSE` · alias `/so-ts-station-house` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work_id · build_location · office_building_grade_id · auxiliary_works_grade_id
- `name` ← `name_building` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid hide-low-fill OFF default: DT nhà · DT CT phụ · cấp nhà · cấp CT phụ · vật tư · khuôn viên
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill STATION_HOUSE |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên công trình | Text | ← name_building |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC · grid ON |
| build_location | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC · form ON |
| office_building_grade_id | Cấp nhà | Dropdown | form ON · grid OFF default |
| total_area_office_building | DT nhà | Number | form ON · grid OFF default |
| + dump §4 rest | khuôn viên · CT phụ · vật tư | Number/Dropdown/TextArea | form ON · grid OFF default |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=STATION_HOUSE`
- prototype=`specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t22
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-station-house/ui/design.md`
- prototype: `specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile STATION_HOUSE · S-ATTR editable · LeaveConfirmModal · hide-low-fill |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
