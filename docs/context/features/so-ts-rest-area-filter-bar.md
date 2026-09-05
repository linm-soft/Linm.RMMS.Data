# Sổ TS — Trạm dừng nghỉ (so-ts-rest-area) — filter bar context

**Page:** so-ts-rest-area list · **kind:** catalog (Kind B) · **typeCode:** `REST_AREA`  
**Route live:** `/so-ts?type=REST_AREA` · alias board `/so-ts-rest-area` (optional redirect)  
**testIdPrefix:** `rmms-so-ts-rest-area-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/so-ts-rest-area/be/solution-discovery.md` § FormType pack · API-01  
**Design:** `specs/so-ts-rest-area/ui/design.md` § Zone B

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · tên trạm · loại · chủ SH · tuyến · QR · dumpSpecs |
| 2 | Loại tài sản | `SearchInput` `asset-type` | `leading` | `type` — **required** `REST_AREA` deep-link · **ẩn** khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` `road-route` | `leading` | `route` — **cấm** free-text |
| 4 | Lý trình từ | `Text` chainage | `leading` | `kmFrom` |
| 5 | Lý trình đến | `Text` chainage | `leading` | `kmTo` — filter range · **≠** form/grid cột `kmTo` (ẩn) |
| 6 | Cây đơn vị | `SearchInput` tree `org-unit` | `leading` | `orgUnit` |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Không mount** trên Zone B pack này: `fromDate` · `toDate` (SA `tz_na`).

**Cấm:** nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Lookups:** Integration asset-types / road-routes / org-units — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**List GET:** `?type=REST_AREA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

---

## 2. Layout

| Rule | Value |
|------|-------|
| Title | trái — «Sổ TS — Trạm dừng nghỉ» / listTitle «Danh sách trạm dừng nghỉ» |
| Inputs | **cụm phải** + 🔍 trên bar |
| Wrap | từng field · **cấm** `filterMaxWidthPx` hack |
| Attr | `data-lin-list-layout="erp-filter-bar"` |

## 3. V1–V5 gate (`filter-bar-layout-hard`)

Smoke trên `http://localhost:9301/so-ts?type=REST_AREA` (QA/Dev — **cấm** TL start:std).

| ID | Check |
|----|-------|
| V1 | Title trái · filter inputs cụm phải |
| V2 | 🔍 trên bar · **không** nút Tìm riêng |
| V3 | type lock REST_AREA · deep-link |
| V4 | SearchInput route/org · **cấm** free-text |
| V5 | 0× ErpListHeaderFilters / LinListFilterField / export trên bar |

## 4. Cấm

Demo/localStorage SSOT · ERP.* · invent date filter · fork filter shell
