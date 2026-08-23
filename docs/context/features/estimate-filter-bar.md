# Ước lượng sửa chữa — filter bar context

**Page:** `EstimateListPage` · **kind:** catalog (AI S-LIST)  
**Route:** `/ai-kd/uoc-luong-sc` · **testIdPrefix:** `rmms-estimate-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.18.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã, sự cố, tuyến, loại |
| 2 | Trạng thái | `Select` · options `init-data.statuses` + «Tất cả» | `leading` | `status` |
| 3 | Nguồn | `Select` · options `init-data.sourceTypes` + «Tất cả» | `leading` | `sourceType` |
| 4 | Thời gian | bar `fromDate` / `toDate` | date | `from` / `to` · UTC bounds · cột `CreatedAt` |
| 5 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list |

**Cấm:** date / 🔍 trong `leading` · nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper bọc cả `leading` · `filterMaxWidthPx`.

**Dropdown:** chỉ `GET /ai-kd/uoc-luong-scs/init-data` — **cấm** hardcode enum.

---

## 2. Layout

- Title trái («Danh sách ước lượng») · mọi input + 🔍 cụm phải · thừa → xuống dòng (`flex-end`).
- Compact (small / view mobile): icon + dropdown.
- Catalog / AI S-LIST: date trống = tất cả — **cấm** default Hôm nay che bản ghi cũ.
- Export / Tạo từ sự cố / Tạo từ detections = toolbar / `beforeToolbar` — **không** trên filter.

---

## 3. Shell

```tsx
<div data-catalog-list-page data-lin-list-layout="erp-filter-bar">
  <LinPageLayout
    kind="catalog"
    listLayoutVariant="erp-filter-bar"
    listHeaderClassName={LIN_ERP_LIST_FILTER_LAYOUT.header}
    listFiltersClassName={LIN_ERP_LIST_FILTER_LAYOUT.filtersHost}
    filters={(
      <LinErpListFilterBar
        testIdPrefix={TEST_ID}
        fromDate={fromDraft}
        toDate={toDraft}
        onDateChange={handleDateRangeChange}
        onSearch={applyFilters}
        searchAriaLabel="Tìm"
        leading={(
          <>
            <div data-testid={`${TEST_ID}-field-search`}>…SearchTextInput…</div>
            <div data-testid={`${TEST_ID}-field-status`}>…Select status…</div>
            <div data-testid={`${TEST_ID}-field-sourceType`}>…Select sourceType…</div>
          </>
        )}
      />
    )}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block · **cấm** `LinListFilterField`.

---

## 4. Session / default date

Catalog list — không session «Hôm nay». Empty from/to = all rows.

---

## 9. Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-FILTER-BAR-01 | **CLOSED** | `LinErpListFilterBar` |
| GAP-FILTER-BAR-03 | **CLOSED** | `data-lin-list-layout="erp-filter-bar"` |
| GAP-FILTER-BAR-06 | **CLOSED** | fragment leading · 0 wrapper |
| GAP-FILTER-BAR-08 | **n/a** | Export ở `beforeToolbar` |
| GAP-FILTER-WRAP-01 | **CLOSED** | bỏ `filterMaxWidthPx` + `.filterRow` |
| GAP-SA-EST-01 | **CLOSED** | API-01 query `sourceType` |
| GAP-SA-EST-04 | **CLOSED** | FE status + sourceType + from/to |
| GAP-TL-UX-FILTER-MAX-01 | **CLOSED** | bỏ `filterMaxWidthPx` |
| GAP-P2-87 | **CLOSED** | chỉ bar `onSearch` |
