# handoff-compact — design · so-ts-row-util

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_34dbb85e` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` |
| clusterUi | `land` · tile `t08` |
| prefix | `HT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T03:00:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=ROW_UTIL` · alias `/so-ts-row-util` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work/located_within/protection/support/status_hiring/build_location
- `name` ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak
- Range: S-LOC-RANGE · **hiện** kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** S-LOC-POINT · prefix **`HT-`**
- Grid: ON CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance · ẩn type/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill ROW_UTIL |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình đầu/cuối | Text | filter + form RANGE |
| name/tencongtrinh_htk | Công trình HTKT | Text | ← tencongtrinh_htk |
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC · grid ON |
| length/number_post | Dài / Số trụ | Number | hide-empty · grid ON |
| owner | Chủ sở hữu | Text | grid ON |
| located_within_id | Trong phạm vi HL | Dropdown | LOOKUP_STATIC |
| protection_tructure | CT bảo vệ | Text | dump typo key |
| type_protection_structure_id | Loại KC bảo vệ | Dropdown | LOOKUP_STATIC |
| support_type_id | Loại giá đỡ | Dropdown | LOOKUP_STATIC |
| distance_road_center/distance_between_supports | KC tim/giá | Number | hide-empty |
| status_hiring_is_within_row | TT thuê HL | Dropdown | LOOKUP_STATIC |
| build_location | Mặt cắt | Dropdown | LOOKUP_STATIC |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=ROW_UTIL`
- mfeStdUrl=`http://localhost:9301/so-ts-row-util`
- prototype=`specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t08
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-row-util/ui/design.md`
- prototype: `specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · `HT-` DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed |
| TL/Dev | profile ROW_UTIL · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
