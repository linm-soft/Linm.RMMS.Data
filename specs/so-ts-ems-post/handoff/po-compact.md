# handoff-compact — po · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_de7c9863` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| clusterUi | `station` · tile `t29` |
| prefix | `CCU-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprintPrior | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=EMS_POST` · alias `/so-ts-ems-post` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_station` · label «Tên trạm» · trống OK · **cấm** IsWeak→đoạn
- Header title «Sổ TS — Trạm trực cấp cứu» (CTX)
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho owner_id · station_type_id
- Grid **ON mẫu**: tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách · ẩn type/kmTo/SL/ĐVT/DT/cấp
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- KCHT tile `t29` drill OK · count import **240**
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill EMS_POST / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên trạm | Text | ← name_station |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| station_type_id | Loại trạm | Dropdown | LOOKUP_STATIC |
| distance_nearest_major_road | Khoảng cách đến ĐL gần nhất (m) | Number | form ON · grid ON |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=EMS_POST`
- mfeStdUrl alias board `…/so-ts-ems-post`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t29
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-ems-post-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-ems-post-real-data.md`
- po: `specs/so-ts-ems-post/po/requirement.md`
- prior compact: `specs/so-ts-ems-post/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · ON-mẫu cols · alias optional · tile t29 |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile EMS_POST · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · re-scan demo · e2e/build/start:std ở PO
