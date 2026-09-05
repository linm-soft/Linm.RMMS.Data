# handoff-compact — design · so-ts-rail-cross

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_68fa43af` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| clusterUi | `crossing` · tile `t15` |
| prefix | `DS-` · icon KCHT `NG` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprintPrior | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-02T07:31:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=RAIL_CROSS` · alias `/so-ts-rail-cross` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `protection_type_id` · `traffic_control_method_id`
- `name` ← `name_crossing` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- `shortest_waiting_time` đơn vị **phút** (form + grid label)
- Create IdCode prefix **`DS-`** · icon KCHT **`NG`** giữ
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill RAIL_CROSS |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên giao cắt | Text | ← name_crossing |
| protection_type_id | Kiểu bảo vệ | Dropdown | LOOKUP_STATIC · S-ATTR |
| traffic_control_method_id | Phương thức điều khiển | Dropdown | LOOKUP_STATIC · S-ATTR |
| shortest_waiting_time | Thời gian chờ (phút) | Number | S-ATTR |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RAIL_CROSS`
- prototype=`specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t15 · gov-vn count **144**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-rail-cross/ui/design.md`
- prototype: `specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels · IdCode `DS-` |
| TL/Dev | profile RAIL_CROSS · S-ATTR editable · LeaveConfirmModal |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
