# handoff-compact — data_analy · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_be3be31f` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| clusterUi | `station` · ô KCHT `t29` |
| prefix | `CCU-` |
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T05:30:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-ems-post-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-ems-post-real-data.md` |
| CTX | `docs/context/features/so-ts-ems-post.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |
| mẫu | `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-{list,detail}.png` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=EMS_POST` · STATUS alias `/so-ts-ems-post` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_station` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`/DT/cấp · list ON attr §4
- Count cite: gov-vn **240** · sample `CCU-tbl_first_aid_station_720846` / `Trạm Hồng Thủy` · GIS group `TS` · tile `t29`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột EMS_POST + hide kmTo/SL/type/DT/cấp · show attr §4 |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-EMS-NAME-01 | name ← name_station · cấm IsWeak→đoạn |
| GAP-EMS-SPEC-01 | dumpSpecLabels thiếu name_station · station_type_id · distance_nearest_major_road |
| GAP-EMS-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-EMS-ROUTE-01 | alias `/so-ts-ems-post` DEFER Design |
| GAP-EMS-LOOKUP-01 | Dropdown/seed owner_id / station_type_id |
| GAP-EMS-LEAVE-01 | LeaveConfirmModal · cấm native confirm |
| GAP-EMS-TILE-01 | tile t29 drill OK · list profile sync count **240** |

## Attr keys (dump §4)

`name_station` · `owner_id` · `station_type_id` · `distance_nearest_major_road`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/label |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map · invent DT/cấp cột không có dump
