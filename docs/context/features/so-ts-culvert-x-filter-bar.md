# Sổ TS — Cống thoát nước ngang (so-ts-culvert-x) — filter bar context

**Page:** so-ts-culvert-x list · **kind:** catalog (Kind B) · **typeCode:** `CULVERT_X`  
**Route live:** `/so-ts?type=CULVERT_X` · alias board `/so-ts-culvert-x` → Navigate live  
**testIdPrefix:** `rmms-so-ts-culvert-x-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA:** `specs/so-ts-culvert-x/be/solution-discovery.md`  
**Design:** `specs/so-ts-culvert-x/ui/design.md` § Zone B

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · loại CT · hình dạng · VL · tuyến · QR |
| 2 | Loại tài sản | `SearchInput` `asset-type` | `leading` | `type` — **required** `CULVERT_X` deep-link · **ẩn** khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` `road-route` | `leading` | `route` — **cấm** free-text |
| 4 | Lý trình từ | `Text` chainage | `leading` | `kmFrom` — POINT filter ± |
| 5 | Lý trình đến | `Text` chainage | `leading` | `kmTo` — filter ± (form ẩn kmTo) |
| 6 | Cây đơn vị | `SearchInput` tree `org-unit` | `leading` | `orgUnit` |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Không mount** trên Zone B: `fromDate` · `toDate` (SA `tz_na`).

**Cấm:** nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Lookups:** Integration asset-types / road-routes / org-units — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**List GET:** `?type=CULVERT_X&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` · **CULVERT_X only**.

---

## 2. Layout

| Rule | Value |
|------|-------|
| Title | trái — «Sổ TS — Cống thoát nước ngang» / listTitle «Danh sách cống thoát nước ngang» |
| Inputs | **cụm phải** + 🔍 trên bar |
| Wrap | từng field · **cấm** `filterMaxWidthPx` hack |
| Attr | `data-lin-list-layout="erp-filter-bar"` |

## 3. V1–V5 gate (`filter-bar-layout-hard`)

Smoke trên `http://localhost:9301/so-ts?type=CULVERT_X` (QA/Dev — **cấm** e2e ở Dev role).

| ID | Check |
|----|-------|
| V1 | Title trái · filter inputs cụm phải |
| V2 | 🔍 trên bar · **không** nút Tìm riêng |
| V3 | type lock CULVERT_X · deep-link |
| V4 | SearchInput route/org · **cấm** free-text |
| V5 | 0× ErpListHeaderFilters / LinListFilterField / export trên bar |

## 4. Cấm

Demo/localStorage SSOT · ERP.* · invent date filter · fork filter shell · invent `api/v1/so-ts/*`
