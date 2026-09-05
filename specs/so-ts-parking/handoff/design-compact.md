# handoff-compact — design · so-ts-parking

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-parking` |
| title | Sổ TS — Bãi đỗ xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_db842a4d` |
| typeCode | `PARKING` |
| dump | `tbl_rest_stops` |
| clusterUi | `station` · tile `t37` |
| prefix | `BD-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprintPrior | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T04:45:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=PARKING` · alias `/so-ts-parking` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work_id · categorized_id · owner_id · office_building_grade_id · auxiliary_works_grade_id · build_location_id
- `name` ← `name_work` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid ON+hide-empty: chiều dài · DT khuôn viên · **bãi đỗ** · cứu hộ GT · cấp cứu · ẩn type/kmTo/SL/ĐVT
- parking_lot/total_parking_lot **ON** default profile PARKING (**GAP-PK-PARK-01**)
- Filter/import **tách** PARKING vs REST_AREA (**GAP-PK-SPLIT-01**)
- office/service_area/CT phụ: optional form S-ATTR · hide-empty list · **không** ẩn cứng form khi fill 0
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill PARKING |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên bãi | Text | ← name_work |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC · grid ON |
| categorized_id | Xếp loại | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| actual_length | Chiều dài (m) | Number | grid ON hide-empty |
| site_area_using_land | DT khuôn viên (m²) | Number | grid ON hide-empty |
| parking_lot | Bãi đỗ xe | Select boolean | grid ON profile PARKING |
| total_parking_lot | Tổng DT bãi đỗ (m²) | Number | grid ON hide-empty |
| traffic_emergency_service | Cứu hộ GT | Select boolean | grid ON hide-empty |
| first_aid_service | Cấp cứu | Select boolean | grid ON hide-empty |
| build_location_id | Mặt cắt | Dropdown | L/R/C · S-LOC |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=PARKING`
- prototype=`specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t37
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-parking/ui/design.md`
- prototype: `specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · PARKING/REST split |
| TL/Dev | profile PARKING · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact · lẫn REST_AREA trong PARKING list
