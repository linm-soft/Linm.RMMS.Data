# handoff-compact — data_analy · so-ts-weigh-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fc7e2abd` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| clusterUi | `station` · ô KCHT `t27` |
| prefix | `TFP-` (live GIS · trùng TOLL → **GAP-WEIGH-PREFIX-01**) |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T05:55:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-weigh-station-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-weigh-station-real-data.md` |
| CTX | `docs/context/features/so-ts-weigh-station.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |
| mẫu | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-{list,detail}.png` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=WEIGH_STATION` · STATUS alias `/so-ts-weigh-station` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `station_name` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type` · list ON attr §4 chính
- Count cite: gov-vn **24** · GIS `tram-can` · tile `t27` · IdCode `TFP`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột WEIGH + hide kmTo/SL/type · show TB cân/tải/ĐVQL/DT |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-WEIGH-NAME-01 | name ← station_name · cấm IsWeak→đoạn |
| GAP-WEIGH-SPEC-01 | dumpSpecLabels thiếu hầu hết §4 WEIGH |
| GAP-WEIGH-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-WEIGH-ROUTE-01 | alias `/so-ts-weigh-station` DEFER Design |
| GAP-WEIGH-LOOKUP-01 | Dropdown/seed management / equipment / pavement / bool |
| GAP-WEIGH-LEAVE-01 | LeaveConfirmModal · cấm native confirm |
| GAP-WEIGH-PREFIX-01 | IdCode `TFP` trùng TOLL — PO/SA chốt |
| GAP-WEIGH-TILE-01 | tile t27 drill OK · list profile sync count **24** |

## Attr keys (dump §4)

`station_name` · `site_area_installed_equipment` · `management_unit_id` · `building_area` · `includes_load_reduction_area` · `light` · `camera_observation` · `equipment_measurement_vehicle_size` · `type_weighting_equipment_id` · `origin_manufacturing` · `year_manufacturing` · `max_axle_load_limit` · `approval_code_number` · `inspection_date_weight_station` · `length_approaching_road` · `width_approaching_road` · `pavement_type_id` · `location`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/prefix/boolean |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · prefix IdCode |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map · invent cột không có dump
