# Sổ TS — Nút giao (so-ts-interchange) — filter bar context

**Page:** so-ts-interchange list · **kind:** catalog (Kind B) · **typeCode:** `INTERCHANGE`  
**Route live:** `/so-ts?type=INTERCHANGE` · alias board `/so-ts-interchange` (optional redirect)  
**testIdPrefix:** `rmms-so-ts-interchange-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.01.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**SA query keys:** `specs/so-ts-interchange/be/solution-discovery.md` § FormType pack · API-01  
**Design:** `specs/so-ts-interchange/ui/design.md` §3.1 Zone B

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` (không nút Tìm riêng) | `leading` | `search` — mã · tên nút giao · tuyến · QR |
| 2 | Loại tài sản | `SearchInput` `asset-type` | `leading` | `type` — **required** `INTERCHANGE` deep-link · **ẩn** khi type cố định |
| 3 | Cao tốc / quốc lộ | `SearchInput` `road-route` | `leading` | `route` — **cấm** free-text |
| 4 | Lý trình từ | `Text` chainage | `leading` | `kmFrom` |
| 5 | Lý trình đến | `Text` chainage | `leading` | `kmTo` — filter range · **≠** form/grid cột `kmTo` |
| 6 | Cây đơn vị | `SearchInput` tree `org-unit` | `leading` | `orgUnit` |
| 7 | Tìm | bar `onSearch` 🔍 | search | apply draft → GET list · filter đổi → **page=1** |

**Không mount** trên Zone B pack này: `fromDate` · `toDate` (SA `tz_na`).

**Cấm:** nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx`.

**Lookups:** Integration asset-types / road-routes / org-units — **cấm** hardcode FE.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

**List GET:** `?type=INTERCHANGE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

---

## 2. Layout

- Title trái («Danh sách nút giao») · mọi input + 🔍 cụm phải · wrap `flex-end` (`filter-bar-layout-hard` V1–V5).
- Actions CRUD = toolbar Zone B (`catalogToolbar`) — **không** trên filter bar.
- Deep-link `type=INTERCHANGE` giữ khi clear filters (type lock).

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
            {/* type SearchInput ẩn khi deep-link INTERCHANGE */}
            <div data-testid={`${TEST_ID}-field-route`}>…SearchInput road-route…</div>
            <div data-testid={`${TEST_ID}-field-kmFrom`}>…Text…</div>
            <div data-testid={`${TEST_ID}-field-kmTo`}>…Text…</div>
            <div data-testid={`${TEST_ID}-field-orgUnit`}>…SearchInput org-unit…</div>
          </>
        )}
      />
    )}
  />
</div>
```

---

## 4. Session / default

Empty search/route/km/org = all `INTERCHANGE` rows for company · type luôn `INTERCHANGE`.
