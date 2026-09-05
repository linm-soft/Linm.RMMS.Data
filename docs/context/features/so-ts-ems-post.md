# Sổ TS — Trạm trực cấp cứu

> **Slug:** `so-ts-ems-post` · **type:** `EMS_POST` · **cluster:** `station` · ô `t29`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-list.png` · `8-tbl_first_aid_station-detail.png`  
> **Route:** `/so-ts?type=EMS_POST` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-01T05:51:37.530Z` |
| mobile | — | — | — |
