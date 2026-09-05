# handoff-compact — sa · so-ts-rail-cross

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_08a1b760` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| clusterUi | `crossing` · tile `t15` |
| prefix | `DS-` · icon KCHT `NG` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprintPrior | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-02T07:33:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-rail-cross`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_crossing` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `railCrossProtectionTypes` · `railCrossTrafficControlMethods`
- `shortest_waiting_time` đơn vị **phút** (form + grid label)
- Create IdCode prefix **`DS-`** · icon KCHT **`NG`** giữ
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=RAIL_CROSS` · alias board-only `/so-ts-rail-cross`
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock RAIL_CROSS |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên giao cắt | Text | ← name_crossing |
| protection_type_id | Kiểu bảo vệ | Dropdown | init railCrossProtectionTypes |
| traffic_control_method_id | Phương thức điều khiển | Dropdown | init railCrossTrafficControlMethods |
| shortest_waiting_time | Thời gian chờ (phút) | Number | S-ATTR |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG · S-ALIAS
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RAIL_CROSS`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=RAIL_CROSS` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t15 · gov-vn **144**
- Entity/migration: RoadAsset + DumpSpecs · **migration=none** · IdCode `DS-`
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-rail-cross/be/solution-discovery.md`
- design: `specs/so-ts-rail-cross/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile RAIL_CROSS · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels · IdCode DS- |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
