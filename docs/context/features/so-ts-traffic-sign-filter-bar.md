# Sổ TS — Biển báo (so-ts-traffic-sign) — filter bar context

**Page:** so-ts-traffic-sign list · **kind:** catalog (Kind B) · **typeCode:** `TRAFFIC_SIGN`  
**Route live:** `/so-ts?type=TRAFFIC_SIGN` · alias board `/so-ts-traffic-sign` → Navigate live  
**testIdPrefix:** `rmms-so-ts-traffic-sign-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Dev:** `/agent-dev` · **T-UI-FILTER-01**

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Loại tài sản | `SearchInput` asset-type | `leading` | `type` lock TRAFFIC_SIGN · ẩn khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` road-route | `leading` | `route` |
| 4 | Lý trình từ | Text | `leading` | `kmFrom` |
| 5 | Lý trình đến | Text | `leading` | `kmTo` (form ẩn) |
| 6 | Cây đơn vị | `SearchInput` org-unit | `leading` | `orgUnit` |
| 7 | Tìm | bar 🔍 | search | apply · page=1 |

**Cấm:** nút Tìm riêng · ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · ERP.* · invent `api/v1/so-ts/*`

**List GET:** `?type=TRAFFIC_SIGN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

## V1–V5

| ID | Check |
|----|-------|
| V1 | Title trái · filter cụm phải |
| V2 | 🔍 trên bar · không nút Tìm riêng |
| V3 | type lock TRAFFIC_SIGN |
| V4 | SearchInput route/org |
| V5 | 0× ErpListHeaderFilters / LinListFilterField |
