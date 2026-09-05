# Sổ TS — Bảo vệ mái dốc (so-ts-slope-protect) — filter bar context

**Page:** so-ts-slope-protect list · **kind:** catalog (Kind B) · **typeCode:** `SLOPE_PROTECT`  
**Route live:** `/so-ts?type=SLOPE_PROTECT` · alias board `/so-ts-slope-protect` (optional redirect)  
**testIdPrefix:** `rmms-so-ts-slope-protect-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/so-ts-slope-protect/be/solution-discovery.md` § FormType pack · API-01  
**Design:** `specs/so-ts-slope-protect/ui/design.md` § Zone B

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · kiểu BV · phân loại · tuyến · QR · địa danh |
| 2 | Loại tài sản | `SearchInput` `asset-type` | `leading` | `type` — **required** `SLOPE_PROTECT` deep-link · **ẩn** khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` `road-route` | `leading` | `route` — **cấm** free-text |
| 4 | Lý trình từ | `Text` chainage | `leading` | `kmFrom` |
| 5 | Lý trình đến | `Text` chainage | `leading` | `kmTo` — RANGE filter |
| 6 | Cây đơn vị | `SearchInput` tree `org-unit` | `leading` | `orgUnit` |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Không mount** trên Zone B pack này: `fromDate` · `toDate` (SA `tz_na`).

**Cấm:** nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Lookups:** Integration asset-types / road-routes / org-units — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**List GET:** `?type=SLOPE_PROTECT&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

---

## 2. Layout

| Rule | Value |
|------|-------|
| Title | trái — «Sổ TS — Bảo vệ mái dốc» / listTitle «Danh sách bảo vệ mái dốc» |
| Inputs | **cụm phải** + 🔍 trên bar |
| Wrap | từng field · **cấm** `filterMaxWidthPx` hack |
| Attr | `data-lin-list-layout="erp-filter-bar"` |

## 3. V1–V5 gate (`filter-bar-layout-hard`)

Smoke trên `http://localhost:9301/so-ts?type=SLOPE_PROTECT` (QA/Dev — **cấm** TL start:std).

| ID | Check |
|----|-------|
| V1 | Title trái · filter inputs cụm phải |
| V2 | 🔍 trên bar · **không** nút Tìm riêng |
| V3 | type lock SLOPE_PROTECT · deep-link |
| V4 | SearchInput route/org · **cấm** free-text |
| V5 | 0× ErpListHeaderFilters / LinListFilterField / export trên bar |

## 4. Cấm

Demo/localStorage SSOT · ERP.* · invent date filter · fork filter shell · lẫn type khác / gộp `RETAINING` trong SLOPE_PROTECT list
