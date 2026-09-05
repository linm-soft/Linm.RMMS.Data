# handoff-compact — po · so-ts-rest-area

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7455d425` |
| typeCode | `REST_AREA` |
| dump | `tbl_rest_stops` |
| clusterUi | `station` · tile `t26` |
| prefix | `DN-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| headerFingerprintPrior | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T04:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=REST_AREA` · alias `/so-ts-rest-area` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_work` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type_work_id · categorized_id · owner_id · office_building_grade_id · auxiliary_works_grade_id · build_location_id
- Grid: ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu · ẩn type/kmTo/SL/ĐVT/parking_lot default
- parking_lot/total_parking_lot **OFF** default · defer peer `so-ts-parking`
- Filter/import **tách** REST_AREA vs PARKING (**GAP-RA-SPLIT-01**)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill REST_AREA / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên trạm | Text | ← name_work |
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

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=REST_AREA`
- mfeStdUrl alias board `…/so-ts-rest-area`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t26
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-rest-area-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-rest-area-real-data.md`
- po: `specs/so-ts-rest-area/po/requirement.md`
- prior compact: `specs/so-ts-rest-area/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional · parking OFF |
| SA | path giữ · dumpSpecs vs flatten · lookup seed · REST/PARKING split |
| TL/Dev | profile REST_AREA · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO · lẫn PARKING trong REST_AREA list
