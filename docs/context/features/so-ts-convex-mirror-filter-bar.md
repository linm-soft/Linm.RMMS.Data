# Sổ TS — Gương cầu / long môn (so-ts-convex-mirror) — filter bar context

**Page:** so-ts-convex-mirror list · **kind:** catalog (Kind B) · **typeCode:** `CONVEX_MIRROR`  
**Route live:** `/so-ts?type=CONVEX_MIRROR` · alias board `/so-ts-convex-mirror` → Navigate live  
**testIdPrefix:** `rmms-so-ts-convex-mirror-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Dev:** `/agent-dev` · **T-UI-FILTER-01**

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Loại tài sản | `SearchInput` asset-type | `leading` | `type` lock CONVEX_MIRROR · ẩn khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` road-route | `leading` | `route` |
| 4 | Lý trình từ | Text | `leading` | `kmFrom` |
| 5 | Lý trình đến | Text | `leading` | `kmTo` (form ẩn · GAP-MIRROR-POINT-01) |
| 6 | Cây đơn vị | `SearchInput` org-unit | `leading` | `orgUnit` |
| 7 | Tìm | bar 🔍 | search | apply · page=1 |

**Cấm:** nút Tìm riêng · ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · ERP.* · invent `api/v1/so-ts/*`

**List GET:** `?type=CONVEX_MIRROR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

## V1–V5

| ID | Check |
|----|-------|
| V1 | Title trái · filter cụm phải |
| V2 | 🔍 trên bar · không nút Tìm riêng |
| V3 | type lock CONVEX_MIRROR |
| V4 | SearchInput route/org |
| V5 | 0× ErpListHeaderFilters / LinListFilterField |
