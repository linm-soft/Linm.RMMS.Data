# handoff-compact — po · so-ts-row-util

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_12fe884a` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` |
| clusterUi | `land` · tile `t08` |
| prefix | `HT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · profile ROW_UTIL |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T02:54:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=ROW_UTIL` · alias `/so-ts-row-util` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak→đoạn
- Range: S-LOC-RANGE · **hiện** kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** S-LOC-POINT
- Prefix IdCode **`HT-`** · GIS `HT` giữ (GAP-ROWUTIL-PREFIX-01)
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type_work/located_within/protection/support/status_hiring/build_location
- Grid: ON CT HTKT/loại/3 tầng tuyến/kmFrom/kmTo/dài/số trụ/chủ · ẩn type/SL/ĐVT · hide-empty length/number_post/distance attrs
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill ROW_UTIL / ẩn |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình đầu/cuối | Text | filter + form RANGE |
| name/tencongtrinh_htk | Công trình HTKT | Text | ← tencongtrinh_htk |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| length | Chiều dài (m) | Number | grid ON · hide-empty |
| number_post | Số trụ/cột | Number | hide-empty |
| owner | Chủ sở hữu | Text | |
| located_within_id | Trong phạm vi HL | Dropdown | LOOKUP_STATIC |
| protection_tructure | CT bảo vệ | Text | dump typo key |
| type_protection_structure_id | Loại KC bảo vệ | Dropdown | LOOKUP_STATIC |
| support_type_id | Loại giá đỡ | Dropdown | LOOKUP_STATIC |
| distance_road_center | KC đến tim (km) | Number | hide-empty |
| distance_between_supports | KC giữa giá (m) | Number | hide-empty |
| status_hiring_is_within_row | TT thuê HL | Dropdown | LOOKUP_STATIC |
| build_location | Mặt cắt | Dropdown | LOOKUP_STATIC |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts?type=ROW_UTIL`
- mfeStdUrl alias board `…/so-ts-row-util`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t08
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-row-util-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-row-util-real-data.md`
- po: `specs/so-ts-row-util/po/requirement.md`
- prior compact: `specs/so-ts-row-util/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional |
| SA | path giữ · `HT-` prefix · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile ROW_UTIL · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
