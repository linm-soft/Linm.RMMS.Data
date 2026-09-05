# handoff-compact — data_analy · so-ts-rail-cross

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f1328a25` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| clusterUi | `crossing` · tile `t15` |
| prefix | `DS-` (import) · icon KCHT `NG` |
| contentHash | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprint | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T19:30:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-rail-cross-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-rail-cross-real-data.md` |
| CTX | `docs/context/features/so-ts-rail-cross.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=RAIL_CROSS` · STATUS alias `/so-ts-rail-cross` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_crossing` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`
- Count cite: gov-vn **144** · sample `DS-railway_crossing_593984` / «Giao đường sắt có rào chăn»

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột RAIL_CROSS + hide kmTo/SL/type |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-RC-NAME-01 | name ← name_crossing · cấm IsWeak→đoạn |
| GAP-RC-SPEC-01 | dumpSpecLabels thiếu traffic_control + shortest_waiting |
| GAP-RC-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-RC-ROUTE-01 | alias `/so-ts-rail-cross` DEFER Design |
| GAP-RC-LOOKUP-01 | Dropdown/seed protection_type · traffic_control_method |
| GAP-RC-PREFIX-01 | Align Create IdCode `DS-` |
| GAP-RC-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`name_crossing` · `protection_type_id` · `traffic_control_method_id` · `shortest_waiting_time`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/prefix/waiting-time unit |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map canvas
