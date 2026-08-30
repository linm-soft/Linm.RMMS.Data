# Báo cáo Web (hub) — filter bar context

**Page:** `ReportListPage` · **kind:** report (Kind E hub)  
**Route live:** `/bao-cao` · **mfeStdUrl:** `http://localhost:9311/bao-cao`  
**testIdPrefix:** `rmms-reports-hub`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.30.1`  
**Skills:** `/rmms-filter-org` · `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard` · `/filter-dates-context`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**Peer org:** [`reports-org-filter-bar.md`](reports-org-filter-bar.md) · [`org-route-scope-filter-bar.md`](org-route-scope-filter-bar.md)  
**org-route-scope:** **done** · `/rmms-filter-org` `one_mfe` + `km_skip` 2026-08-31

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Loại BC | `SearchInput` family | `leading` | `family` — assets / incidents / checkins (init FE + SSOT hiện có) |
| 2 | Loại báo cáo | `SearchInput` kind theo family | `leading` | `kind` |
| 3 | Khu | `SearchInput` REG leaf | `leading` | `zoneOrgCode` — `REG-I`…`REG-IV` · **cấm** ô Cục |
| 4 | Văn phòng | `SearchInput` kind=`VP` · `parentCode`=Khu | `leading` | `vpOrgCode` |
| 5 | Đơn vị | `SearchInput` SU + partner | `leading` | `assigneeCode` |
| 6 | Tuyến | `SearchInput` `road-route` **tuyến chính** | `leading` | `routeId` / `routeCode` — **chỉ** tuyến mẹ · **cấm** NHANH/TRANH/GOM · **cấm** mã `KM0+*` |
| — | Đoạn | **không ô** | — | **GAP-ORS-CASCADE-01** — tab form phân khu · **cấm** invent `segmentId` |
| 7 | Tìm kiếm | `SearchTextInput` / `Input` (không nút Tìm riêng) | `leading` | `search` — hạng mục · mã · cán bộ |
| 8 | Kỳ | `LinReportPeriodSelectorFields` | `dateLeading` | `viewMode` · month · year · quarter |
| 9 | Từ ngày / Đến ngày | bar date | date | ẩn khi family=`assets` (giữ hành vi hiện tại) |
| 10 | Xem | bar `onSearch` 🔍 | search | apply → load báo cáo · **không** nút Tìm trùng |

**Cấm:** export/print/config trên bar (đã ở toolbar Zone B: Làm mới · In · Sửa config) · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx` · native `<select>`.

**Cascade (SSOT `/rmms-filter-org`):** Khu → VP → Đơn vị → Tuyến. Đổi Khu → clear VP+ĐV · đổi VP → clear ĐV · page/xem lại từ đầu. `km_skip`.

**Đoạn P1 (không invent API zone):**

| Có nguồn | Cách |
|----------|------|
| `GET …/integration/road-routes/search?routeKind=NHANH` (và TRANH/GOM) | Hiển thị **nhãn «Đoạn»** — đây là row dump `Km 0 + 000 – …` (GAP-ORS-05) · **không** đưa vào dropdown Tuyến |
| Bảng gán `org-route-scope` | **Chưa có** — khi Signed, filter đoạn ⊆ km zone + tuyến · **cấm** seed dump |

**Khu P1:** `GET …/integration/org-units/search?kind=REG` (hoặc tree rồi chọn leaf I–IV). Chưa overlap km (GAP-ORS-01).

**Tuyến P1:** `GET …/integration/road-routes/search` + `routeKind` **không** NHANH/TRANH/GOM. BE list đã có `?routeKind=` — search BFF **phải** forward (T-BE-FILTER-01 nếu thiếu).

---

## 2. Layout

- Title trái («Báo cáo Web» / «Danh sách») · mọi input + 🔍 cụm phải · wrap `flex-end`.
- Toolbar Zone B: Làm mới · In · Sửa config — **không** trên filter.
- V1–V5 `filter-bar-layout-hard` PASS trên `http://localhost:9311/bao-cao`.

---

## 3. Shell

```tsx
<div data-lin-list-layout="erp-filter-bar">
  <LinErpListFilterBar
    testIdPrefix={TEST_ID}
    onSearch={onView}
    searchAriaLabel="Xem báo cáo"
    leading={(
      <>
        <div data-testid={`${TEST_ID}-field-family`}>…</div>
        <div data-testid={`${TEST_ID}-field-kind`}>…</div>
        <RmmsOrgFilterFields /> {/* zoneOrgCode · vpOrgCode · assigneeCode · routeCode */}
        <div data-testid={`${TEST_ID}-field-search`}>…</div>
      </>
    )}
    dateLeading={<LinReportPeriodSelectorFields … />}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block.

---

## 4. Session / default

Empty Khu/VP/Đơn vị/Tuyến = tất cả (trong scope tài khoản — khi `UserRoute` ship).  
Family mặc định `assets` · kind `summary` — giữ.

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-RPT-FIL-01 | Live dropdown Tuyến = `Km 0+000…` (NHANH) — **mapped-wrong** · pilot tách sang «Đoạn» |
| GAP-RPT-FIL-02 | `searchRoadRoutes` không gửi `routeKind` — T-BE/T-UI forward query |
| GAP-RPT-FIL-03 | Khu chưa lọc theo km assignment — chờ `org-route-scope` |
| GAP-RPT-FIL-04 | Đoạn dump ≠ đoạn quản lý zone — document trên UI (placeholder / helper) |
| GAP-TL-FILTER-01 | Thiếu load file này trước Write |
| GAP-FILTER-BAR-01/07 · WRAP-01 | Layout V1–V5 |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-08-30T16:39:35.567Z` |
| mobile | — | — | — |
