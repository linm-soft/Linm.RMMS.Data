# Real-data bind — reports hub filter (`/bao-cao`)

| | |
|---|---|
| feature | `reports` |
| packKind | `report` |
| changeScope | `edit_page` · **pilot T-UI-FILTER-01** |
| prefix | Report `api/v1/report` · lookup Integration `api/v1/integration` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao` |
| filter SSOT | `docs/context/features/reports-filter-bar.md` |
| peer | `org-route-scope` — **chưa** bảng gán km (**cấm** invent) |

## § Delta Current vs New

| ID | Current | New (pilot) |
|----|---------|-------------|
| Tuyến dropdown | `searchRoadRoutes` → dump NHANH `Km 0+000…` | Tuyến chính `QL.*` / HCM / CT · `routeKind` ≠ NHANH/TRANH/GOM |
| Khu | không có | `org-units/search?kind=REG` leaf I–IV |
| Đoạn | nhầm vào Tuyến | Field riêng · dump KM* tạm · zone assignment **DEFER** |
| Scope | chỉ hub `ReportFilterBar.tsx` | **cấm** batch leaf `rpt-*` |

## §A — Nguồn lookup (đã có)

| sourceCite | empty | error |
|------------|-------|-------|
| `GET …/integration/road-routes/search` · list `?routeKind=` | «Tất cả tuyến» | toast BE |
| `GET …/integration/org-units/search?kind=REG` · `/tree` | «Tất cả khu» | toast BE |
| `GET …/report/…` Xem (family/kind/route/search/period) | empty state «Chưa xem» | toast |

**Cấm** seed gán Khu↔km từ CSV (`GOV-IMP-03`).
