# Báo cáo Web (hub) — filter bar context

**Page:** `ReportListPage` · **kind:** report (Kind E hub)  
**Route live:** `/bao-cao` · **mfeStdUrl:** `http://localhost:9311/bao-cao`  
**testIdPrefix:** `rmms-reports-hub`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.31.2`  
**Skills:** `/rmms-filter-org` · `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard` · `/filter-dates-context`  
**Dev:** `/agent-dev` · task **T-UI-FILTER-01** — load file này **trước Write**  
**Peer org:** [`reports-org-filter-bar.md`](reports-org-filter-bar.md) · [`org-route-scope-filter-bar.md`](org-route-scope-filter-bar.md)  
**org-route-scope:** **done** · `/rmms-filter-org` `one_mfe` + `km_skip` 2026-08-31

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `Input` (không nút Tìm riêng) | `leading` **đầu line 1** | `search` — hạng mục · mã · cán bộ |
| 2 | Nhóm báo cáo | `SearchInput` family | `leading` L1 | `family` — BC Tài sản / Sự cố / Check-in |
| 3 | Loại báo cáo | `SearchInput` kind theo family | `leading` L1 | `kind` — nhãn lookup đầy đủ (Tổng hợp chung · theo tuyến…) |
| 4 | Khu | `SearchInput` REG leaf | `leading` L1 | `zoneOrgCode` — `REG-I`…`REG-IV` · **cấm** ô Cục |
| 5 | Văn phòng | `SearchInput` kind=`VP` · `parentCode`=Khu | `leading` L2 | `vpOrgCode` |
| 6 | Đơn vị | `SearchInput` SU + partner | `leading` L2 | `assigneeCode` |
| 7 | Tuyến | `SearchInput` `road-route` **tuyến chính** | `leading` L2 | `routeId` / `routeCode` — **chỉ** tuyến mẹ · **cấm** NHANH/TRANH/GOM · **cấm** mã `KM0+*` |
| — | Đoạn | **không ô** | — | **GAP-ORS-CASCADE-01** — tab form phân khu · **cấm** invent `segmentId` |
| 8 | Kỳ báo cáo | `LinReportPeriodSelectorFields` | `dateLeading` | `viewMode` · month · year · quarter — hug 9.5 / 7.5 / 6.5rem |
| 9 | Từ ngày / Đến ngày | `LinExpandableDateRangeField` | date | **chỉ khi** `viewMode=day` · from→to · ẩn tháng/quý/năm |
| 10 | Xem | bar `onSearch` 🔍 | search | apply → load báo cáo · **không** nút Tìm trùng |

**Cấm:** export/print/config trên bar (đã ở toolbar Zone B: Làm mới · In · Sửa config) · `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả `leading` · `filterMaxWidthPx` · native `<select>`.

**Cascade (SSOT `/rmms-filter-org`):** Khu → VP → Đơn vị → Tuyến. Đổi Khu → clear VP+ĐV · đổi VP → clear ĐV · page/xem lại từ đầu. `km_skip`.

**Đoạn P1 (không invent API zone):**

| Có nguồn | Cách |
|----------|------|
| `GET …/integration/road-routes/search?routeKind=NHANH` (và TRANH/GOM) | Hiển thị **nhãn «Đoạn»** — đây là row dump `Km 0 + 000 – …` (GAP-ORS-05) · **không** đưa vào dropdown Tuyến |
| Bảng gán `org-route-scope` | CSV `t6-org-scope` **102** dòng (Excel T6) — filter đoạn ⊆ km zone + tuyến **sau** import DB · **cấm** seed dump · đoạn VP còn GAP-ORS-VP-01 data |

**Khu P1:** `GET …/integration/org-units/search?kind=REG` (hoặc tree rồi chọn leaf I–IV). Overlap km trên cùng tuyến trong CSV T6 = **0** (GAP-ORS-01 **partial** — cần ReImport).

**Tuyến P1:** `GET …/integration/road-routes/search` + `routeKind` **không** NHANH/TRANH/GOM. BE list đã có `?routeKind=` — search BFF **phải** forward (T-BE-FILTER-01 nếu thiếu).

---

## 2. Layout

- Desktop: L1 Tìm kiếm · Nhóm báo cáo · Loại báo cáo · Khu (`1fr` ×4) · L2 Văn phòng · Đơn vị · Tuyến · L3 **Kỳ + Tháng/Năm** (hoặc **from→to** khi Ngày) + 🔍 cụm phải, hug SSOT.
- Hộp tên SearchInput **giữ** (mã + tên).
- Compact (touch / small): package dropdown — **cấm** grid desktop.
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
        <div data-testid={`${TEST_ID}-field-search`}>…</div>
        <div data-testid={`${TEST_ID}-field-family`}>…</div>
        <div data-testid={`${TEST_ID}-field-kind`}>…</div>
        <RmmsOrgFilterFields /> {/* zoneOrgCode · vpOrgCode · assigneeCode · routeCode */}
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
| GAP-FILTER-PERIOD-09 | Kỳ/Tháng/Năm hug trên L3 — không nhét 1 cột L2 |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-08-31T00:50:00.000Z` |
| mobile | — | — | — |
