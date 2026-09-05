# handoff-compact — data_analy · so-ts-count-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2645c3b4` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| clusterUi | `station` · ô KCHT `t30` |
| prefix | `THC-` (live GIS IdCode) |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T06:40:24.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-count-station-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-count-station-real-data.md` |
| CTX | `docs/context/features/so-ts-count-station.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |
| mẫu | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-{list,detail}.png` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=COUNT_STATION` · STATUS alias `/so-ts-count-station` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy (kể cả Lưu lượng xe)
- Name: `name` ← `name_vi` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type` · list ON ĐVQL · tên EN · số làn · tốc độ
- Count cite: gov-vn **377** · tile `t30` · IdCode `THC` · unit seed `TRAM`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột COUNT + hide kmTo/SL/type · show ĐVQL/tên EN/số làn/tốc độ · tách 3 tầng tuyến |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-COUNT-NAME-01 | name ← name_vi · cấm IsWeak→đoạn |
| GAP-COUNT-SPEC-01 | dumpSpecLabels thiếu agency_id/name_en/no_of_lane/speed/coords |
| GAP-COUNT-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-COUNT-ROUTE-01 | alias `/so-ts-count-station` DEFER Design |
| GAP-COUNT-LOOKUP-01 | Dropdown/seed agency_id (ĐVQL) |
| GAP-COUNT-COORD-01 | from/to_coordinate → lat/lng |
| GAP-COUNT-LEAVE-01 | LeaveConfirmModal · cấm native confirm |
| GAP-COUNT-GIS-01 | prefix THC OK · chưa slug layer |
| GAP-COUNT-LABEL-01 | lookups.ts thiếu COUNT_STATION |
| GAP-COUNT-TILE-01 | tile t30 drill OK · list profile sync count **377** |

## Attr keys (dump §4)

`agency_id` · `name_vi` · `name_en` · `from_coordinate` · `to_coordinate` · `no_of_lane` · `speed`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/coord/GIS/label |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · coord parse · GIS slug |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Lưu lượng/Chi tiết/Bảo trì/Tệp · invent map · invent cột không có dump
