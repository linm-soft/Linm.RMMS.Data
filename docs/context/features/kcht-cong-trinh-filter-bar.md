# Công trình KCHT — filter bar context (list CT · PH1 giữ)

**Page:** `KchtProjectListPage` · **kind:** catalog (Kind B list)  
**Route:** `/kcht-cong-trinh` · **testIdPrefix:** `rmms-kcht-project-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `be/solution-discovery.md` · API-01 live

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Loại công trình | `SearchInput` · `kcht-project-type` | `leading` | `projectType` |
| 3 | Quốc lộ / tuyến | `SearchInput` · `road-route` | `leading` | `roadRouteCode` |
| 4 | Tỉnh / TP | `SearchInput` · province **FE static P1** | `leading` | `provinceCode` |
| 5 | Đơn vị quản lý | `SearchInput` · `org-unit` | `leading` | `orgUnitCode` |
| 6 | Ban QLDA | `SearchInput` · `org-unit` | `leading` | `bqlOrgUnitCode` |
| 7 | Người phụ trách | `SearchInput` · users (P2 optional) | `leading` | `ownerUserId` |
| 8 | Nhà thầu | `SearchInput` · `partner-unit` | `leading` | `contractorCode` |
| 9 | Trạng thái CT | `SearchInput` · `kcht-project-status` | `leading` | `status` |
| 10 | Tìm | bar `onSearch` 🔍 | search | apply → GET list · filter đổi → **page=1** |

**Cấm:** export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx` · native `<select>`.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.  
**Toolbar:** Refresh · History · Config · Delete · **Tạo mới** = Zone B — **không** trên filter.

---

## 2. Layout

- Title trái («Danh sách công trình KCHT») · input + 🔍 cụm phải · wrap từng field.
- V1–V5 `filter-bar-layout-hard` PASS.

---

## 3. Shell

```tsx
<div data-catalog-list-page data-lin-list-layout="erp-filter-bar">
  <LinPageLayout kind="catalog" listLayoutVariant="erp-filter-bar" … />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block.
