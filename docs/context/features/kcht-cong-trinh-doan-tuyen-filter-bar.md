# Đoạn tuyến KCHT — filter bar context (PH2)

**Page:** `KchtSegmentListPage` · **kind:** catalog (Kind B nested)  
**Route:** `/kcht-cong-trinh/:id/doan-tuyen` · **testIdPrefix:** `rmms-kcht-segment-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · **T-UI-FILTER-SEG-01** — load **trước Write**  
**SA:** API-S01 · `GET …/projects/{id}/segments`

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Trạng thái đoạn | `SearchInput` · `kcht-segment-status` (6) | `leading` | `status` |
| 3 | Quốc lộ / tuyến | `SearchInput` · `road-route` | `leading` | `roadRouteCode` |
| 4 | Cảnh báo BH | `SearchInput` / Select · optional | `leading` | `warrantyAlert` (90/60/30 / none) |
| 5 | Tìm | bar `onSearch` 🔍 | search | apply → page=1 |

**Cấm:** export trên bar · `ErpListHeaderFilters` · `LinListFilterField` · native `<select>`.  
**Toolbar:** Refresh · Config · History · **Thêm đoạn** primary — không trên filter.
