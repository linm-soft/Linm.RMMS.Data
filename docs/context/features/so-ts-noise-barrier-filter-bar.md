# Sổ TS — Rào chắn ồn (so-ts-noise-barrier) — filter bar context

**Page:** so-ts-noise-barrier list · **kind:** catalog (Kind B) · **typeCode:** `NOISE_BARRIER`  
**Route live:** `/so-ts?type=NOISE_BARRIER` · alias board `/so-ts-noise-barrier` (optional redirect)  
**testIdPrefix:** `rmms-so-ts-noise-barrier-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/so-ts-noise-barrier/be/solution-discovery.md` § FormType pack · API-01  
**Design:** `specs/so-ts-noise-barrier/ui/design.md` § Zone B

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · loại tường · tuyến · QR |
| 2 | Loại tài sản | `SearchInput` `asset-type` | `leading` | `type` — **required** `NOISE_BARRIER` deep-link · **ẩn** khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` `road-route` | `leading` | `route` — **cấm** free-text |
| 4 | Lý trình từ | `Text` chainage | `leading` | `kmFrom` |
| 5 | Lý trình đến | `Text` chainage | `leading` | `kmTo` — RANGE filter |
| 6 | Cây đơn vị | `SearchInput` tree `org-unit` | `leading` | `orgUnit` |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Không mount** trên Zone B pack này: `fromDate` · `toDate` (SA `tz_na`).

**Cấm:** nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Lookups:** Integration asset-types / road-routes / org-units — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**List GET:** `?type=NOISE_BARRIER&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

---

## 2. Layout

| Rule | Value |
|------|-------|
| Title | trái — «Sổ TS — Rào chắn ồn» / listTitle «Danh sách rào chắn ồn» |
| Inputs | **cụm phải** + 🔍 trên bar |
| Wrap | từng field · **cấm** `filterMaxWidthPx` hack |
| Attr | `data-lin-list-layout="erp-filter-bar"` |

## 3. V1–V5 gate (`filter-bar-layout-hard`)

Smoke trên `http://localhost:9301/so-ts?type=NOISE_BARRIER` (QA/Dev — **cấm** TL start:std).

| ID | Check |
|----|-------|
| V1 | Title trái · filter inputs cụm phải |
| V2 | 🔍 trên bar · **không** nút Tìm riêng |
| V3 | type lock NOISE_BARRIER · deep-link |
| V4 | SearchInput route/org · **cấm** free-text |
| V5 | 0× ErpListHeaderFilters / LinListFilterField / export trên bar |

## 4. Cấm

Demo/localStorage SSOT · ERP.* · invent date filter · fork filter shell · lẫn type khác trong NOISE_BARRIER list
