# CSDL sổ sách (csdl-so-sach) — filter bar context

**Page:** csdl-so-sach list (Kind B · sau hub Kind G) · **kind:** catalog  
**Route live:** `/so-ts/csdl-so-sach?resource=` · **testIdPrefix:** `rmms-csdl-so-sach-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/csdl-so-sach/be/solution-discovery.md` § FormType pack / API-01  
**Design Zone B:** `specs/csdl-so-sach/ui/design.md`  
**controlHint:** `specs/_data-analy/features/csdl-so-sach-control-hint.md`

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · đường · chi tiết · bookNo · contractor |
| 2 | Tỉnh/TP | `Dropdown` LOOKUP_STATIC FE `PROVINCES` + «Tất cả» | `leading` | `province` · **GAP-CSDL-PROV-01** keep_static P1 · **cấm** invent init-data |
| 3 | Tình trạng | `Dropdown` LOOKUP_STATIC `tot`/`tb`/`kem`/`hong` + «Tất cả» | `leading` | `status` |
| 4 | Từ ngày | `Date` | `leading` / date | `fromDate` · UpdatedAt ≥ UTC bound · **tz_list_only** |
| 5 | Đến ngày | `Date` | `leading` / date | `toDate` · UpdatedAt < UTC exclusive · **tz_list_only** |
| 6 | Tên đường | `SearchInput` catalogKind **`road-route`** | `leading` | `roadName` · lookup `GET /integration/road-routes/search` · **GAP-CSDL-ROAD-01** · **cấm** Text free |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Required list QS (không trên bar):** `resource` — từ hub card / deep-link.

**Cấm:** nút Tìm trùng · export/print/config/CRUD trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx` · hardcode KIND_LABEL ngoài LOOKUP_STATIC P1 đã chốt.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

---

## 2. Layout

- Title trái (list title theo resource) · **mọi** input + 🔍 cụm phải · wrap `flex-end` · **V1–V5** `filter-bar-layout-hard`.
- Date range trên bar (catalog empty = tất cả · **cấm** default Hôm nay).
- Actions CRUD / Refresh / History / Config / Import·Export stub = **toolbar** Zone B — **0** action button trên filter bar.

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
            <div data-testid={`${TEST_ID}-field-province`}>…Dropdown province…</div>
            <div data-testid={`${TEST_ID}-field-status`}>…Dropdown status…</div>
            <div data-testid={`${TEST_ID}-field-fromDate`}>…Date fromDate…</div>
            <div data-testid={`${TEST_ID}-field-toDate`}>…Date toDate…</div>
            <div data-testid={`${TEST_ID}-field-roadName`}>…SearchInput road-route…</div>
          </>
        )}
      />
    )}
  />
</div>
```

---

## 4. Session / default

Empty filters = all rows trong `resource` hiện tại (tenant).  
`resource` luôn set từ hub/QS trước khi list load.

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-TL-FILTER-01 | Thiếu load file này trước Write |
| GAP-FILTER-BAR-01/07/08 | Layout V1–V5 · 0 action trên bar |
| GAP-CSDL-ROAD-01 | `roadName` SearchInput `road-route` + optional `?roadName=` |
| GAP-CSDL-PROV-01 | province LOOKUP_STATIC P1 keep |
