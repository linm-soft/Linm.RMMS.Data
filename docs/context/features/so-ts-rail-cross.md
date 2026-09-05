# Sổ TS — Giao cắt đường sắt

> **Slug:** `so-ts-rail-cross` · **type:** `RAIL_CROSS` · **cluster:** `crossing` · ô `t15`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/24-moc_dbvn.tbl_railway_crossing-list.png` · `24-moc_dbvn.tbl_railway_crossing-detail.png`  
> **Route:** `/so-ts?type=RAIL_CROSS` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-01T19:51:37.753Z` |
| mobile | — | — | — |
