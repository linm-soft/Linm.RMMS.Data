# Sổ TS — Công trình cứu hộ

> **Slug:** `so-ts-rescue-station` · **type:** `RESCUE_STATION` · **cluster:** `station` · ô `—`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-list.png` · `6-tbl_disaster_res_facility-detail.png`  
> **Route:** `/so-ts?type=RESCUE_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-* / S-NAME / S-ATTR / S-GPS

## DoD

1. Grid cột đúng loại · ẩn cột không thông tin (`GAP-SOTS-COL-01`)
2. Form field = tab Thông tin chung trên mẫu · control Linm
3. Import section từ parent — không copy-paste `AssetFormPage`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `await_confirm` | `2026-09-01T02:58:15.515Z` |
| mobile | — | — | — |
