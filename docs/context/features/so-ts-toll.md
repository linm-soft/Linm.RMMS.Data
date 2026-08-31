# Sổ TS — Trạm thu phí

> **Slug:** `so-ts-toll` · **type:** `TOLL` · **cluster:** `station` · ô `t28`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/37-moc_dbvn.tbl_toll_booth-list.png` · `37-moc_dbvn.tbl_toll_booth-detail.png`  
> **Route:** `/so-ts?type=TOLL` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`
