# handoff-compact — design · so-ts-rest-area

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a11a8936` |
| typeCode | `REST_AREA` |
| dump | `tbl_rest_stops` |
| clusterUi | `station` · tile `t26` |
| prefix | `DN-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| headerFingerprintPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T04:25:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=REST_AREA` · alias `/so-ts-rest-area` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work_id · categorized_id · owner_id · office_building_grade_id · auxiliary_works_grade_id · build_location_id
- `name` ← `name_work` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid ON+hide-empty: chiều dài · DT khuôn viên · cứu hộ GT · cấp cứu · ẩn type/kmTo/SL/ĐVT/parking default
- parking_lot/total_parking_lot **OFF** default · defer peer `so-ts-parking`
- Filter/import **tách** REST_AREA vs PARKING (**GAP-RA-SPLIT-01**)
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill REST_AREA |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên trạm | Text | ← name_work |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC · grid ON |
| categorized_id | Xếp loại | Dropdown | LOOKUP_STATIC · grid ON |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC · grid ON |
| actual_length | Chiều dài (m) | Number | grid ON hide-empty |
| site_area_using_land | DT khuôn viên (m²) | Number | grid ON hide-empty |
| traffic_emergency_service | Cứu hộ GT | Select boolean | grid ON hide-empty |
| first_aid_service | Cấp cứu | Select boolean | grid ON hide-empty |
| build_location_id | Mặt cắt | Dropdown | L/R/C · S-LOC |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=REST_AREA`
- prototype=`specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t26
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-rest-area/ui/design.md`
- prototype: `specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · REST/PARKING split |
| TL/Dev | profile REST_AREA · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact · lẫn PARKING trong REST_AREA list
