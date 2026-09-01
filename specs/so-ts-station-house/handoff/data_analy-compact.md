# handoff-compact — data_analy · so-ts-station-house

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-station-house` |
| title | Sổ TS — Nhà hạt QLĐB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_996ab920` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| clusterUi | `station` · tile `t22` |
| prefix | `NH-` |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprint | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T00:47:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-station-house-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-station-house-real-data.md` |
| CTX | `docs/context/features/so-ts-station-house.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=STATION_HOUSE` · STATUS alias `/so-ts-station-house` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_building` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type` · list ẩn DT/cấp/CT phụ thấp-fill
- Count cite: gov-vn **374** · sample `NH-road_admin_office_525966` / `hạt 1 QL1` · GIS `nha-hat`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột STATION_HOUSE + hide kmTo/SL/type + low-fill DT/cấp |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-SH-NAME-01 | name ← name_building · cấm IsWeak→đoạn |
| GAP-SH-SPEC-01 | dumpSpecLabels thiếu attr keys · type_work label |
| GAP-SH-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-SH-ROUTE-01 | alias `/so-ts-station-house` DEFER Design |
| GAP-SH-LOOKUP-01 | Dropdown/seed type_work · mặt cắt · cấp |
| GAP-SH-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`name_building` · `type_work_id` · `build_location` · `office_building_grade_id` · `total_area_office_building` · `site_area_using_land` · `auxiliary_works_grade_id` · `total_area_auxiliary_works` · `materials_in_office`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/hide-low-fill |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map canvas
