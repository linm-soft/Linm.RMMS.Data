# CSDL Biểu 01–15 — filter bar context

**Pages:** `CsdlBieu01Page` … `CsdlBieu15Page` · **kind:** catalog  
**MFE:** `Linm.Web.RMMS.Asset` · **route:** `/csdl-bieu-{nn}`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Layout SSOT (MFE mirror):** `src/pages/catalogListPage.module.css` — **cấm** grid 3 cột page-local · **cấm** clone `lin-erp-list-filter-layout.css`  
**Context review version:** `2026.08.24.1`  
**Skills:** `/filter-bar-context` · `/erp-filter-form` Step 2 **từng page** · `filter-bar-layout-hard`  
**Peer hub:** `csdl-so-sach-filter-bar.md` (LOOKUP shared · **cấm** merge hàng Sổ TS)

---

## 1. Fields (mọi biểu)

| # | Label VN | Control | Slot | API / query |
|---|---------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` **không** `onSearch` (Enter → bar) | `leading` | `search` |
| 2 | Tỉnh/TP | `Select` + «Tất cả» | `leading` | `province` |
| 3 | Tình trạng | `Select` + «Tất cả» | `leading` | `status` |
| 4 | Mã đường | `SearchInput` `road-route` | `leading` | `roadCode` |
| 5 | Từ Km / Km từ | `Input` number (nếu có) | `leading` | `kmFrom` |
| 6 | Đến Km / Km đến | `Input` number (nếu có) | `leading` | `kmTo` |
| — | field riêng biểu (Bên, loại, …) | `Select` / `Input` | `leading` | per page |
| 7 | Thời gian | bar `fromDate`/`toDate` — **trống = tất cả** | date | `updatedAt` UTC · **cấm** default Hôm nay |
| 8 | Tìm | bar `onSearch` 🔍 | search | apply draft |

**Cấm:** `SearchTextInput onSearch` (2 nút 🔍) · date/🔍 trong `leading` · export/Làm mới trên bar · wrapper bọc cả `leading` · `.leadField { width: 100% }` · page CSS `display:grid` 3 cột đẩy date xuống hàng riêng.

---

## 2. Layout (HARD)

```
[ title ]     [ field · field · … ] [ Thời gian ] [ 🔍 ]
← trái        field lấp hàng (`flex: 1 1 180px`) · hết chỗ mới wrap · 🔍 cuối mép phải →
```

| MUST | Cấm |
|------|-----|
| `catalogList.root` + marker `erp-filter-bar` | File CSS riêng `csdlBieuFilterBar.css` / `data-csdl-bieu-filter-surface` |
| Bar `flex-end` · leading `display: contents` · field **`flex: 1 1 180px`** · date-cluster `margin-left: 0` | `flex-start` + cluster `margin-left: auto` (**GAP-FILTER-BAR-07**) · field `flex: 0 0 180px` + `max-width: 220px` / host hug (**GAP-FILTER-WRAP-02**) |
| Host filter `width: 100%` · cột `minmax(0,1fr)` | Host `width: auto` / `fit-content` (**GAP-FILTER-WRAP-01**) |
| `/erp-filter-form` **một page / một lần** | Patch 15 page bằng 1 grid |

Compact: funnel package — **cấm** grid desktop lọt portal.

---

## 3. Shell

```tsx
<div className={`${catalogList.root} ${styles.page}`} data-catalog-list-page data-lin-list-layout="erp-filter-bar">
  <LinPageLayout kind="catalog" filters={listFilters} />
</div>
```

`leading` = fragment từng `div[data-testid]` (+ `styles.leadField` hug, không 100%).

---

## 4. Align từng biểu

1. Load file này + `{feature}` page.  
2. `/erp-filter-form` Step 2 — **chỉ** page đó.  
3. Live 1280: 🔍 **mép phải** card · 0 hàng date tách full-width dưới 3 cột.  
4. Rồi mới page kế.

---

## 9. Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-FILTER-BAR-01 | open | `SearchTextInput onSearch` đã gỡ (Enter giữ) |
| GAP-FILTER-BAR-07 | fix | `catalogListPage` `flex-start` + `margin-left: auto` → `flex-end` + `0` |
| GAP-FILTER-BAR-16 | verify | layout SSOT `catalogListPage` · live 12 OK · 01–11 · 13–15 cùng shell |
| GAP-FILTER-DATE | fix | bar `fromDate`/`toDate` + `getList` · trống = tất cả · **cấm** Hôm nay |
| GAP-FILTER-BAR-05 | n/a | mirror catalogList — không thêm grid page |
| GAP-FILTER-WRAP-02 | fix | Biểu 15 mẫu — `catalogListPage` field grow lấp hàng rồi wrap |
