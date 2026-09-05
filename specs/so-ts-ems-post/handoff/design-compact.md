# handoff-compact — design · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1d2490b1` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| clusterUi | `station` · tile `t29` |
| prefix | `CCU-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprintPrior | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:30:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=EMS_POST` · alias `/so-ts-ems-post` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC owner_id · station_type_id
- `name` ← `name_station` · label «Tên trạm» · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid **ON mẫu**: tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách · ẩn type/kmTo/SL/ĐVT/DT/cấp
- LeaveConfirmModal · **cấm** native confirm
- KCHT tile `t29` drill OK · count import **240**
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill EMS_POST |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên trạm | Text | ← name_station |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC · grid ON |
| station_type_id | Loại trạm | Dropdown | LOOKUP_STATIC · grid ON |
| distance_nearest_major_road | Khoảng cách đến ĐL gần nhất (m) | Number | form ON · grid ON |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ems-post/ui/prototype/so-ts-ems-post-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=EMS_POST`
- prototype=`specs/so-ts-ems-post/ui/prototype/so-ts-ems-post-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t29
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-ems-post/ui/design.md`
- prototype: `specs/so-ts-ems-post/ui/prototype/so-ts-ems-post-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile EMS_POST · S-ATTR editable · LeaveConfirmModal · grid ON mẫu |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
