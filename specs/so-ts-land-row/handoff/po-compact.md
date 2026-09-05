# handoff-compact — po · so-ts-land-row

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d3a42912` |
| typeCode | `LAND_ROW` |
| dump | `tbl_land_btra` |
| clusterUi | `land` · tile `t33` |
| prefix | `DT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · profile LAND_ROW |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T08:25:30.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=LAND_ROW` · alias `/so-ts-land-row` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `construction` · trống OK · **cấm** IsWeak→đoạn
- Range: S-LOC-RANGE · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT
- Prefix IdCode **`DT-`** · GIS `HT` giữ (GAP-LAND-PREFIX-01)
- Lookup P1: Dropdown LOOKUP_STATIC dump cho status_land_lot · exploited · pavement · location · access_road
- Grid: ON CT/tuyến/lý trình/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · ẩn type/SL/ĐVT/kmTo · hide-empty length/width/xaphuong
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill LAND_ROW / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | CT trên đất | Text | ← construction |
| status_land_lot_id | TT thửa đất | Dropdown | * LOOKUP_STATIC |
| under_managemen | CQ chủ quản | Text | dump typo key |
| under_operation | CQ khai thác | Text | |
| exploited_id | HT khai thác | Dropdown | LOOKUP_STATIC |
| length/width/total_area | Kích thước / DT | Number | grid ON · hide-empty L/W |
| width_access_road | Rộng ĐV | Number | |
| pavement_type_access_road_id | KC mặt ĐV | Dropdown | LOOKUP_STATIC |
| distance_road_center | KC tim (km) | Number | |
| access_road | Có đường vào | Dropdown bool | hide-empty |
| location_id | Mặt cắt | Dropdown | L/R |
| lengthiness_access_road | Dài ĐV | Number | hide-empty |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=LAND_ROW`
- mfeStdUrl alias board `…/so-ts-land-row`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t33
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-land-row-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-land-row-real-data.md`
- po: `specs/so-ts-land-row/po/requirement.md`
- prior compact: `specs/so-ts-land-row/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional |
| SA | path giữ · `DT-` prefix · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile LAND_ROW · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
