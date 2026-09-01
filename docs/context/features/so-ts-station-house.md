# Sổ TS — Nhà hạt QLĐB

> **Slug:** `so-ts-station-house` · **type:** `STATION_HOUSE` · **cluster:** `station` · ô `t22`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Filter bar:** [`so-ts-station-house-filter-bar.md`](so-ts-station-house-filter-bar.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/16-moc_dbvn.tbl_road_admin_office-list.png` · `16-moc_dbvn.tbl_road_admin_office-detail.png`  
> **Route:** `/so-ts?type=STATION_HOUSE` · alias `/so-ts-station-house` → redirect · form `/so-ts/tao-moi?type=STATION_HOUSE` · `/so-ts/sua?id=`  
> **API:** `api/v1/asset/road-assets` · prefix `NH-` · dump `tbl_road_admin_office`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`) · show `type_work_id`
2. Form field = tab Thông tin chung trên mẫu · control Linm · S-ATTR editable dump §4
3. Import section từ parent — không copy-paste `AssetFormPage`
4. LOOKUP init `stationWorkTypes` · `stationBuildLocations` · `officeBuildingGrades` · `auxiliaryWorksGrades`
5. `name` ← `name_building` · ẩn `kmTo` · LeaveConfirmModal

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-01T01:51:57.010Z` |
| mobile | — | — | — |
