# UX analy — gis-draw-google (Bản đồ hạ tầng)

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| route | `/gis/ha-tang` |
| updatedAt | `2026-09-01T01:45:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Header | **Không** `← Dev` · `← GIS` · title «Bản đồ hạ tầng — vẽ tài sản» · badge API |
| Toolbar | **Không** Fit tổng quan / Nạp seed Excel / Chuẩn hóa cột Km / Export GeoJSON / Xoá hết layer / Hủy biên tập / Lưu Ctrl+S / Công cụ ▾ |
| Overlay tools | **Không** MAP_QUICK_TOOLS / Leaflet.draw toolbar — chỉ +/- zoom |
| Status | EPSG:4326 · overlay status · **cấm** `Cot_km*.xlsx` / seed filename |
| Map | Leaflet live · **default zoom min** (toàn clip VN) · flex fill |
| Map-bar | **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · toggle full/dock · **cấm** nút Fit · **cấm** Default/Streets/Sat EN · **không** meta overlay/apiMode |
| Attribution | **Ẩn** Leaflet prefix · chỉ `RMMS.vn` |
| Bottom legend | **Không** «Lớp · click isolate + Fit» · **không** Tuyến/Corridor chips |
| Click pin/line trên map | Popup + tab Thuộc tính · **không auto zoom** |
| List Kết quả | Click dòng vẫn Fit focus |
| Ctrl+S | Vẫn commit local (không cần nút toolbar) |

## Overlay SSOT

- Nguồn: `GET /api/v1/gis/geojson/drawings` merge drawings + **mọi** `rmms_road_assets` plottable (set **khu-2-gov**)
- BRIDGE → lớp `cau` · TUNNEL → lớp `ham` · tuyến km-chain → `tuyen-duong`
- Cấm vẽ placeholder `lat=16,lng=110`
- LineString tuyến = vertices corridor · **OSRM routeAlongStreets** (R8) · pin ghim `projectToPath`
- Fit overview ≤13 trên bbox tài sản — **chỉ** map-bar Fit
- Tree lớp vẽ vẫn hiện để vẽ mới

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | Context lock 2026-09-01 — **cấm** worker re-add header/toolbar-seed/legend isolate / map click `setView` |
| GAP-MAP-CLICK-ZOOM | Click tài sản trên map = popup only · cấm `fitIsolateSelection` từ paint |
| GAP-MAP-ATTR-RMMS | Attribution `RMMS.vn` · `setPrefix(false)` |
| GAP-MAP-ICON | Pin map = pictogram QCVN · cấm vòng trắng |
| GAP-MAP-CLICK-INSPECT | Click icon map = inspect + tab Thuộc tính · cấm isolate/ẩn tài sản khác |
| DEFER | `pavement_sections` không geom / km lệch Khu 2 — không vẽ mặt đường |

## Copy

Không hardcode title page. Fit overview chỉ nút **Fit** trên map-bar. Chrome **parity** `/gis/live`.
