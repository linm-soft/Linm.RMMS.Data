# handoff-compact — data_analy · so-ts-rescue-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ce7b30e4` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` |
| clusterUi | `station` · ô `—` (list only · t24≠facility) |
| prefix | `CN-` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T01:55:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-rescue-station-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-rescue-station-real-data.md` |
| CTX | `docs/context/features/so-ts-rescue-station.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |
| mẫu | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-{list,detail}.png` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=RESCUE_STATION` · STATUS alias `/so-ts-rescue-station` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_building` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type` · list ON vật tư + DT/cấp theo mẫu
- Count cite: gov-vn **20** · sample `CN-disaster_response_facility_777421` / `Kho Hồng Lĩnh` · GIS group `TS`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột RESCUE_STATION + hide kmTo/SL/type · show vật tư/DT/cấp |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-RS-NAME-01 | name ← name_building · cấm IsWeak→đoạn |
| GAP-RS-SPEC-01 | dumpSpecLabels thiếu materials_in_store · stored_building_* · vitri |
| GAP-RS-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-RS-ROUTE-01 | alias `/so-ts-rescue-station` DEFER Design |
| GAP-RS-LOOKUP-01 | Dropdown/seed cấp nhà / CT phụ / nhà kho / vitri |
| GAP-RS-LEAVE-01 | LeaveConfirmModal · cấm native confirm |
| GAP-RS-TILE-01 | ô KCHT `—` · cấm invent tile · t24=vehicle |

## Attr keys (dump §4)

`name_building` · `materials_in_store` · `site_area_using_land` · `office_building_grade_id` · `total_area_office_building` · `auxiliary_works_grade_id` · `total_area_auxiliary_works` · `stored_building_grade_id` · `total_area_stored_building` · `vitri`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/hide-fill/label |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map/tile · nhầm RESCUE_VEHICLE
