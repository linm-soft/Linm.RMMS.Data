# handoff-compact — design · so-ts-land-row

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0abc91dc` |
| typeCode | `LAND_ROW` |
| dump | `tbl_land_btra` |
| clusterUi | `land` · tile `t33` |
| prefix | `DT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T08:35:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=LAND_ROW` · alias `/so-ts-land-row` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC status_land_lot · exploited · pavement · location · access_road
- `name` ← `construction` · trống OK · **cấm** IsWeak
- Range: S-LOC-RANGE · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT · prefix **`DT-`**
- Grid: ON CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill LAND_ROW |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | CT trên đất | Text | ← construction |
| status_land_lot_id | TT thửa đất | Dropdown | * LOOKUP_STATIC · grid ON |
| under_managemen | CQ chủ quản | Text | dump typo · grid ON |
| under_operation | CQ khai thác | Text | grid ON |
| exploited_id | HT khai thác | Dropdown | LOOKUP_STATIC |
| length/width/total_area | Kích thước / DT | Number | hide-empty L/W · DT ON |
| pavement_type_access_road_id | KC mặt ĐV | Dropdown | LOOKUP_STATIC |
| access_road | Có đường vào | Dropdown bool | hide-empty |
| location_id | Mặt cắt | Dropdown | L/R |
| lengthiness_access_road | Dài ĐV | Number | hide-empty |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=LAND_ROW`
- prototype=`specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t33
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-land-row/ui/design.md`
- prototype: `specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · `DT-` DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed |
| TL/Dev | profile LAND_ROW · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
