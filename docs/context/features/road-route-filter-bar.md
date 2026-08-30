# Tuyến đường (road-route) — filter bar context

**Page:** road-route list · **kind:** catalog (Kind B flat)  
**Route live:** `/mas/tuyen-duong` · **testIdPrefix:** `rmms-road-route-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/master/be/solution-discovery.md` §2c · RR-01

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · tên · alias |
| 2 | Loại tuyến | `Select` / Dropdown · options `init-data.routeKinds` + «Tất cả» | `leading` | `routeKind` · QUOC_LO · HCM · CAO_TOC · KHAC |
| 3 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Cấm:** date · nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Dropdown:** chỉ `GET …/integration/road-routes/init-data` — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` — không trên filter bar.

---

## 2. Layout

- Title trái («Danh sách tuyến đường») · input + 🔍 cụm phải · wrap `flex-end`.
- **Không** date range P1.
- Actions CRUD = toolbar Zone B.

---

## 3. Shell

```tsx
<div data-catalog-list-page data-lin-list-layout="erp-filter-bar">
  <LinPageLayout
    kind="catalog"
    listLayoutVariant="erp-filter-bar"
    filters={(
      <LinErpListFilterBar
        testIdPrefix={TEST_ID}
        onSearch={applyFilters}
        searchAriaLabel="Tìm"
        leading={(
          <>
            <div data-testid={`${TEST_ID}-field-search`}>…SearchTextInput…</div>
            <div data-testid={`${TEST_ID}-field-routeKind`}>…Select routeKind…</div>
          </>
        )}
      />
    )}
  />
</div>
```

---

## 4. Session / default

Empty filters = all rows (shared Type A).

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-TL-FILTER-01 | Thiếu load file này trước Write |
| GAP-FILTER-BAR-01/07 | Layout V1–V5 |
