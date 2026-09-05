# Sổ TS — Cọc tiêu / cọc H (so-ts-delineator) — filter bar context

**Page:** so-ts-delineator list · **kind:** catalog (Kind B) · **typeCode:** `DELINEATOR`  
**Route live:** `/so-ts?type=DELINEATOR` · alias board `/so-ts-delineator` → Navigate live  
**testIdPrefix:** `rmms-so-ts-delineator-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Dev:** `/agent-dev` · **T-UI-FILTER-01**

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Loại tài sản | `SearchInput` asset-type | `leading` | `type` lock DELINEATOR · ẩn khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` road-route | `leading` | `route` |
| 4 | Lý trình từ | Text | `leading` | `kmFrom` |
| 5 | Lý trình đến | Text | `leading` | `kmTo` (form ẩn · GAP-DELIM-POINT-01) |
| 6 | Cây đơn vị | `SearchInput` org-unit | `leading` | `orgUnit` |
| 7 | Tìm | bar 🔍 | search | apply · page=1 |

**Cấm:** nút Tìm riêng · ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · ERP.* · invent `api/v1/so-ts/*`

**List GET:** `?type=DELINEATOR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

## V1–V5

| ID | Check |
|----|-------|
| V1 | Title trái · filter cụm phải |
| V2 | 🔍 trên bar · không nút Tìm riêng |
| V3 | type lock DELINEATOR |
| V4 | SearchInput route/org |
| V5 | 0× ErpListHeaderFilters / LinListFilterField |
