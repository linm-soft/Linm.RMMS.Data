# handoff-compact — po · so-ts-rail-cross

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_69787dbe` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| clusterUi | `crossing` · tile `t15` |
| prefix | `DS-` · icon KCHT `NG` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprintPrior | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-02T07:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=RAIL_CROSS` · alias `/so-ts-rail-cross` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_crossing` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho `protection_type_id` · `traffic_control_method_id`
- `shortest_waiting_time` đơn vị **phút** (form + grid label)
- Create IdCode prefix **`DS-`** · icon KCHT **`NG`** giữ
- Flatten: dumpSpecs P1 · flatten cột DB = SA migration P2
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill RAIL_CROSS / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên giao cắt | Text | ← name_crossing |
| protection_type_id | Kiểu bảo vệ | Dropdown | LOOKUP_STATIC · S-ATTR |
| traffic_control_method_id | Phương thức điều khiển | Dropdown | LOOKUP_STATIC · S-ATTR |
| shortest_waiting_time | Thời gian chờ (phút) | Number | S-ATTR |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=RAIL_CROSS`
- mfeStdUrl alias board `…/so-ts-rail-cross`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t15 · gov-vn count **144**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-rail-cross-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-rail-cross-real-data.md`
- po: `specs/so-ts-rail-cross/po/requirement.md`
- prior compact: `specs/so-ts-rail-cross/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed · IdCode `DS-` |
| TL/Dev | profile RAIL_CROSS · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
