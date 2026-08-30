# Nhật ký tuần kiểm — filter bar context

**Page:** `PatrolLogInspectReportPage` · **kind:** report (Kind E)  
**Route live:** `/bao-cao/nk/tuan-kiem` · **mfeStdUrl:** `http://localhost:9311/bao-cao/nk/tuan-kiem`  
**testIdPrefix:** `rmms-patrol-log-inspect-report`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.31.1`  
**Skills:** `/rmms-filter-org` · `/filter-bar-context` · `/erp-filter-form` · `/review-web-css`  
**Peer SSOT:** [`reports-org-filter-bar.md`](reports-org-filter-bar.md) · [`org-route-scope-filter-bar.md`](org-route-scope-filter-bar.md)

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| — | Cục | **không ô** | — | implicit `DRVN` |
| 1 | Khu | `SearchInput` REG leaf | `leading` | `zoneOrgCode` |
| 2 | Văn phòng | `SearchInput` kind=`VP` · `parentCode`=Khu | `leading` | `vpOrgCode` |
| 3 | Đơn vị | `SearchInput` SU + partner | `leading` | `assigneeCode` |
| 4 | Tuyến | `SearchInput` tuyến mẹ | `leading` | `routeId` / `routeCode` |
| 5 | Cán bộ | `SearchInput` staff | `leading` | `staffId` |
| 6 | Tìm kiếm | `Input` | `leading` | `q` |
| 7 | Từ ngày / Đến ngày | bar date | date | `from` · `to` |
| 8 | Xem | bar `onSearch` 🔍 | search | apply · **page=1** |

**Cascade:** Khu → VP → Đơn vị → Tuyến. Đổi Khu → clear VP+ĐV. Đổi VP → clear ĐV. Ô trống = mọi con.  
**km_range:** `km_skip` — **0** ô Km · **0** query km.  
**Cấm:** ô Cục · `segmentId` trên bar (**GAP-ORS-CASCADE-01**) · free-text mã.

---

## 2. Layout

- Title trái · input + 🔍 cụm phải · wrap `flex-end`.
- Sau chọn = **mã + tên** · portal `dropdownMatch: row` · `dropdownMinWidth: 32rem`.
- Toolbar Zone B: Làm mới · In · Config — **không** trên filter.

---

## 9. Gaps

| ID | Note |
|----|------|
| GAP-RMMS-ORG-01 | Thiếu cascade / không clear cấp dưới |
| GAP-RMMS-ORG-02 | Ô Cục trên bar |
| GAP-RMMS-ORG-KM-01 | `km_skip` mà vẫn có ô KM |
| GAP-ORS-CASCADE-01 | Invent `segmentId` list |
