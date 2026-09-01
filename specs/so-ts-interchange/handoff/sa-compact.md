# handoff-compact — sa · so-ts-interchange

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-interchange` |
| title | Sổ TS — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9f47529f` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` |
| clusterUi | `crossing` · tile `t23` |
| prefix | `NG-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprintPrior | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:20:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-interchange`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_intersection` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `intersectionTypes` · `intersectWiths` · `intersectionShapes`
- Grid hide-low-fill OFF default: khoangcach · ketcau · PT ĐK · cao đảo
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=INTERCHANGE` · alias board-only
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock INTERCHANGE |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên nút giao | Text | ← name_intersection |
| intersection_type_id | Loại nút | Dropdown | * init intersectionTypes |
| intersect_with_id | Giao với | Dropdown | init intersectWiths |
| intersection_shape_id | Hình dạng | Dropdown | init intersectionShapes |
| traffic_signal_lights | Đèn | Dropdown bool | dumpSpecs · grid ON |
| median_strip | Dải PC | Dropdown bool | dumpSpecs · grid ON |
| + dump §4 rest | ketcau · khoảng cách · PT ĐK · cao đảo | Text/Number | dumpSpecs · grid OFF default |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-interchange/ui/prototype/so-ts-interchange-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=INTERCHANGE`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=INTERCHANGE` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t23
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-interchange/be/solution-discovery.md`
- design: `specs/so-ts-interchange/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile INTERCHANGE · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
