# Sổ TS — Bến xe

> **Slug:** `so-ts-bus-station` · **type:** `BUS_STATION` · **cluster:** `station` · ô `t04`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-list.png` · `31-moc_dbvn.tbl_bus_station-detail.png`  
> **Route:** `/so-ts?type=BUS_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-01T04:01:50.228Z` |
| mobile | — | — | — |
