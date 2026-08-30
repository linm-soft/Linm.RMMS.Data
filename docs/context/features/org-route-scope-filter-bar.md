# Phân khu lý trình (org-route-scope) — filter bar context

**Page:** org-route-scope list · **kind:** catalog (Kind B · flat + org-router SearchInput)  
**Route live:** `/mas/phan-khu` · **testIdPrefix:** `rmms-org-route-scope-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.30.7`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` · `/review-web-css` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · `/edit-web-feature` — load file này **trước Write**  
**SA query keys:** `specs/org-route-scope/be/solution-discovery.md` §2d · API-01

---

## 1. Fields

| # | Label VN | Control | Slot | API / query | Live |
|---|----------|---------|------|-------------|------|
| — | Cục | **không ô** | — | implicit `DRVN` | default Cục QLĐB — **cấm** hiện trên bar |
| 1 | Tìm kiếm | `SearchTextInput` | `leading` L1 | `search` | min-width **280px** · field **320px** |
| 2 | Khu | **`SearchInput`** REG-I…IV | `leading` L1 | `zoneOrgCode` | **trong bar** · URL `?zoneOrgCode=` · **cấm** tabs ngoài bar |
| 3 | Văn phòng | **`SearchInput`** kind=`VP` · `parentCode`=Khu | `leading` L1 | `vpOrgCode` | có · lookup ⊆ Khu |
| — | *(break)* | flex `leadBreak` 100% | — | — | **3–3** |
| 4 | Đơn vị | **`SearchInput`** SU + **`/mas/doi-tac`** | `leading` L2 | `assigneeCode` | theo phân công Khu/VP/Tuyến trên đối tác · **cấm** trùng node VP |
| 5 | Tuyến chính | **`SearchInput`** tuyến mẹ | `leading` L2 | `routeCode` | có · lookup chưa ⊆ cấp trên |
| 6 | Đoạn | **`SearchInput`** segment ⊆ tuyến | `leading` | `segmentId` | **GAP-ORS-CASCADE-01** — chỉ tab form · **cấm** invent query |
| 7 | Hiệu lực | `Select` init-data + «Tất cả» | `leading` L2 | `isActive` | có |
| 8 | Tìm | bar `onSearch` 🔍 | search L2 | apply · **page=1** | có |

**Org router (list):** Cục = implicit Cục QLĐB (`DRVN`) · **cấm** ô filter. Visible: Khu → VP → Đơn vị → tuyến. Đổi Khu → clear VP + Đơn vị. Ô trống = hợp mọi con.

**Cấm:** ô Cục trên bar · ZONE tabs ngoài bar · nút Tìm trùng · export/print/config trên bar · `ErpListHeaderFilters` · `LinListFilterField` · wrapper bọc cả `leading` · `filterMaxWidthPx` · free-text `routeCode`/`zoneOrgCode`.

**Dropdown isActive:** chỉ `GET …/integration/org-route-scopes/init-data` (hoặc LOOKUP_STATIC SA) — **cấm** hardcode FE label map.

**Pager:** `page` · `pageSize` (50/100/200/500) — không trên filter bar.

---

## 2. Layout

- Title trái («Danh sách phân khu lý trình») · mọi input + 🔍 cụm phải · wrap `flex-end`.
- **3–3 grid** — JS `isLarge && !viewMobile` → `data-ors-filter-surface=desktop`. **Cấm** `@media (min-width: 1025px)` trên `grid-column` field. Compact / view mobile / small → package funnel · surface=`compact`.
- **Line space:** `row-gap` = `--ds-gap-field` (16px) (**GAP-WEB-CSS-ROW**).
- **Thẳng hàng:** cùng `grid-column` L1/L2 · 🔍 cột 4 hàng 2 (**GAP-WEB-CSS-ALIGN**).
- Search min **280px** / field **320px**. Lookup portal `dropdownMinWidth: 32rem` · `dropdownMatch: row` — cột Tên không cắt.
- Catalog: date `effectiveAt` optional P1 — **cấm** invent range From–To trên bar nếu Design không có.
- Tạo dòng gán / Refresh / History / Config = toolbar Zone B — **không** trên filter.

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
            <div data-testid={`${TEST_ID}-field-zoneOrgCode`}>…SearchInput REG leaf…</div>
            <div data-testid={`${TEST_ID}-field-vpOrgCode`}>…SearchInput VP…</div>
            <div data-testid={`${TEST_ID}-field-assigneeCode`}>…SearchInput SU/partner…</div>
            <div className={styles.leadBreak} data-testid={`${TEST_ID}-lead-break`} />
            <div data-testid={`${TEST_ID}-field-routeCode`}>…SearchInput road-route…</div>
            <div data-testid={`${TEST_ID}-field-isActive`}>…Select isActive…</div>
          </>
        )}
      />
    )}
  />
</div>
```

Khu = SearchInput trong `leading` (cùng hàng Tìm kiếm). **Cấm** tabs REG ngoài bar. **Cấm** ô Cục.

---

## 4. Session / default

Empty filters = all rows (shared Type A). Cục luôn Cục QLĐB — không query. Empty table OK — **0** invent-seed (GAP-ORS-01).

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-TL-FILTER-01 | Thiếu load file này trước Write |
| GAP-FILTER-BAR-01/07/08 | Layout V1–V5 · 0 action trên bar |
| GAP-ORS-05 | Search route exclude `KM0+000-*` |
| GAP-ORS-CASCADE-01 | Cục **hidden** (implicit DRVN) · Khu **closed** (SearchInput bar) · đoạn filter/list vẫn tab form |
| GAP-WEB-CSS-ROW / ALIGN | Wrap row-gap + 🔍/input thẳng hàng — `/review-web-css` |
