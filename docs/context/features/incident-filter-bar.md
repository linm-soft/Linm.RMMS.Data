# Sự cố / Vấn đề — filter bar context

**Page:** `IncidentListPage` · **kind:** catalog (Kind B list)  
**Route:** `/su-co` · **testIdPrefix:** `rmms-incident-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `be/solution-discovery.md` · API-01 delta · **GAP-SA-INC-Q01**

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · tiêu đề · đoạn · DET — **must work** |
| 2 | Trạng thái | `Select` / Dropdown · options `init-data.statuses` + «Tất cả» | `leading` | `status` · `new` · `in_progress` · `closed` |
| 3 | Mức độ | `Select` / Dropdown · options `init-data.severities` + «Tất cả» | `leading` | `severity` · `low` · `medium` · `high` · `critical` |
| 4 | Đoạn đường | **`SearchInput`** `catalogKind=road-route` | `leading` | **`routeName`** exact **Code** · LKP-01 `/integration/road-routes/search` · **GAP-INC-ROUTE-01** |
| 5 | Loại sự cố | `Select` / Dropdown · options `init-data.incidentTypes` (6) + «Tất cả» | `leading` | **`incidentType`** exact · **GAP-INC-TYPE-01** |
| 6 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Cấm:** date / 🔍 trong `leading` · nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper bọc cả `leading` · `filterMaxWidthPx` · org-unit tree P1 (**GAP-INC-ORG-01** DEFER) · free-text `routeName` khi master READY.

**Dropdown:** chỉ `GET …/incident/incidents/init-data` (API-08) — **cấm** hardcode `INCIDENT_TYPES` 4 mã FE · fallback const chỉ khi init-data fail (SA).

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

---

## 2. Layout

- Title trái («Danh sách sự cố») · mọi input + 🔍 cụm phải · thừa → xuống dòng (`flex-end`).
- Compact (small / view mobile): icon + dropdown.
- Catalog: **không** date range P1 — **cấm** invent `fromDate`/`toDate` trên bar.
- Tạo mới / Refresh / Delete / History / Config = toolbar Zone B — **không** trên filter.

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
        onSearch={applyFilters}
        searchAriaLabel="Tìm"
        leading={(
          <>
            <div data-testid={`${TEST_ID}-field-search`}>…SearchTextInput…</div>
            <div data-testid={`${TEST_ID}-field-status`}>…Select status…</div>
            <div data-testid={`${TEST_ID}-field-severity`}>…Select severity…</div>
            <div data-testid={`${TEST_ID}-field-routeName`}>…SearchInput road-route…</div>
            <div data-testid={`${TEST_ID}-field-incidentType`}>…Select incidentType…</div>
          </>
        )}
      />
    )}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block · **cấm** `LinListFilterField`.

---

## 4. Session / default

Catalog list — không session date. Empty filters = all rows (tenant).

---

## 9. Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-SA-INC-Q01 | OPEN P1 | BE+FE `routeName` · `incidentType` query |
| GAP-INC-ROUTE-01 | OPEN P1 | SearchInput road-route (filter + form) |
| GAP-INC-TYPE-01 | OPEN P1 | Dropdown 6 từ init-data |
| GAP-INC-ORG-01 | DEFER P2 | org-unit tree |
| GAP-FILTER-BAR-01/07 | verify | `LinErpListFilterBar` · 0 ErpListHeaderFilters / stack |
