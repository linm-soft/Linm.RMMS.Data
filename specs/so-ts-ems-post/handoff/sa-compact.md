# handoff-compact — sa · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fa58e8b4` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| clusterUi | `station` · tile `t29` |
| prefix | `CCU-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprintPrior | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:26:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-ems-post`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_station` · label «Tên trạm» · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `ownerOptions` · `stationTypeOptions`
- Grid **ON mẫu**: tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách · ẩn type/kmTo/SL/ĐVT/DT/cấp
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=EMS_POST` · alias board-only · tile `t29` count **240**
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock EMS_POST |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên trạm | Text | ← name_station |
| owner_id | Chủ sở hữu | Dropdown | init ownerOptions · grid ON |
| station_type_id | Loại trạm | Dropdown | init stationTypeOptions · grid ON |
| distance_nearest_major_road | Khoảng cách đến ĐL gần nhất (m) | Number | dumpSpecs · grid ON |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG · S-ALIAS
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ems-post/ui/prototype/so-ts-ems-post-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=EMS_POST`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=EMS_POST` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type tile t29
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-ems-post/be/solution-discovery.md`
- design: `specs/so-ts-ems-post/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile EMS_POST · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
