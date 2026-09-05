# UX analy — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| route | `/gis/tuan-duong` |
| updatedAt | `2026-09-01T21:30:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Menu GIS | Chỉ **Bản đồ tài sản** + **Bản đồ Tuần đường** |
| Sidebar | Tuần đường · Tuần kiểm · Chi tiết |
| List | Họ tên · tuyến · badge Đang tuần / Hoàn thành |
| Chi tiết | Họ tên · danh sách tuyến (mã ca + ghi chú) · lịch sử check-in (km · GPS · thời điểm) |
| Map | Clip live · không lớp tài sản · nét OSRM · pin teardrop `.ci-pin` · click = `{MapPopup}` Họ tên / Tên vị trí / Tọa độ |
| Empty Chi tiết | «Chọn người ở tab Tuần đường hoặc Tuần kiểm…» |

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | **Cấm** worker re-add Lớp/Chú giải/Thuộc tính/Kết quả trên map tuần |
| GAP-MAP-PATROL-GPS-01 | GPS = `GET check-ins` · fallback seed Vinh |
| GAP-MAP-PATROL-SNAP-01 | Track = `routeKmChainAlongHighway` theo mã tuyến · **cấm** `/match` 100m / chord / lưới phố |
| GAP-MAP-CLICK-ZOOM | Click pin check-in = `{MapPopup}` Họ tên / Tên vị trí / Tọa độ · **cấm** title-only / `setView` |
