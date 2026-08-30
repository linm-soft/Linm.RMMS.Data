# Cơ cấu tổ chức (org-unit) — filter bar context

**Page:** org-unit list/tree · **kind:** catalog (Kind B · tree)  
**Route live:** `/mas/co-cau-tc` · **testIdPrefix:** `rmms-org-unit-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.30.2`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/master/be/solution-discovery.md` §2b · OU-01

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · tên · alias CI không dấu |
| 2 | Loại đơn vị | `Select` / Dropdown · options `init-data.kinds` + «Tất cả» | `leading` | `kind` · HQ · ADV · REG · VP · SU · ROOM |
| 3 | Đơn vị chủ quản | **`SearchInput`** org-unit | `leading` | `parentCode` — **chỉ** node đã là parent trên chi tiết **hoặc** master cùng cấp (`parentCode`+`kind`) · **cấm** ROOM/VP/SU-leaf |
| 4 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Cấm:** date trên bar · nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper bọc cả `leading` · `filterMaxWidthPx` · free-text `parentCode`.

**Dropdown:** chỉ `GET …/integration/org-units/init-data` — **cấm** `KIND_LABEL` hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**Tree:** khi search/filter active → flat list; idle → tree zone DES-GRID-T.

---

## 2. Layout

- Title trái («Danh sách đơn vị») · mọi input + 🔍 cụm phải · thừa → xuống dòng (`flex-end`).
- Catalog: **không** date range — **cấm** invent `fromDate`/`toDate`.
- Tạo mới / Refresh / Delete / History / Config = toolbar Zone B — **không** trên filter.

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
            <div data-testid={`${TEST_ID}-field-kind`}>…Select kind…</div>
            <div data-testid={`${TEST_ID}-field-parentCode`}>…SearchInput org-unit…</div>
          </>
        )}
      />
    )}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block.

---

## 4. Session / default

Empty filters = all rows (shared Type A).

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-TL-FILTER-01 | Thiếu load file này trước Write |
| GAP-FILTER-BAR-01/07 | Layout V1–V5 |
