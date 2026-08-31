# Sổ TS — Trạm kiểm soát tải

> **Slug:** `so-ts-weigh-station` · **type:** `WEIGH_STATION` · **cluster:** `station` · ô `t27`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-list.png` · `27-moc_dbvn.weight_station-detail.png`  
> **Route:** `/so-ts?type=WEIGH_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`
