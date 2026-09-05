# Design — gis-patrol-map (Kind F · Bản đồ Tuần đường)

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| packKind | `map` |
| Feature Kind | **F** |
| status | `confirmed` |
| updatedAt | `2026-09-01T21:30:00.000Z` |

## 1. Screens / zones

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs **Tuần đường** / **Tuần kiểm** / **Chi tiết** · list người · **cấm** Lớp tài sản |
| C | Map chrome | Cùng `/gis/tai-san`: clip Leaflet · **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · full/dock · **cấm** Fit · **cấm** lớp TS |
| D | Chi tiết | Họ tên · Danh sách tuyến đường · Lịch sử hoạt động (check-in GPS) — parity `#sc-patrol-detail` |

## 2. Control map

| Control | Hint | Zone |
|---------|------|------|
| Click người | Mở Chi tiết + animate marker theo GPS | A → C |
| Click pin check-in | `{MapPopup}` Họ tên · Tên vị trí · Tọa độ · **cấm** setView · **cấm** title-only | C |
| Marker | SVG rider · pin teardrop `.ci-pin` (mobile-p1 `map-oms.js`) | C |
| Basemap | 2 chip clip BFF | C |

## 3. Visual

- Fit mặc định: Vinh–Nghệ An (QL.1 Bến Thủy → Nghi Lộc) — **cấm** load 394k tài sản
- Hành trình **`routeKmChainAlongHighway`** (OSRM `/route` + `ref` QL) · **cấm** `/match` 100m (dính đường nhỏ)
- Pin check-in **SVG `L.icon`** teardrop số — TD xanh `#3CB448` · TK `#c2410c` — ghim `projectToPath`
- Animation **cùng tốc độ km** trên path đã snap · **cấm** `setIcon` mỗi frame (giật)
- Pin check-in = teardrop `.ci-pin` (xanh `#3CB448` · số trắng) — **cấm** chấm tròn
- Tuần đường `#0C84C0` · Tuần kiểm `#c2410c`
