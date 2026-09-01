# UX analy — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| route | `/gis/live` |
| updatedAt | `2026-09-01T01:30:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Header | **Không** `← Dev` · `← GIS` · title «Bản đồ live — vẽ Point / Line / Polygon» · badge API |
| Toolbar | **Không** Fit tổng quan / Nạp seed Excel / Chuẩn hóa cột Km / Export GeoJSON / Xoá hết layer |
| Sidebar | Tabs Lớp · Chú giải · Thuộc tính · Kết quả · tree loại tài sản (checkbox) |
| Status | EPSG:4326 · overlay status · **cấm** seed filename / `Cot_km*.xlsx` / `· bff` |
| Map | Leaflet live · **default zoom min** (`VN_CLIP_MIN_ZOOM` = 5) fit toàn clip VN · **flex fill** |
| Map-bar | Nền VN (clip) · Fit (tài sản) · toggle full/dock · **không** meta cụm/TS/bff |
| Map tools | **Chỉ** Leaflet +/- zoom · **cấm** Leaflet.draw polyline/polygon/marker/edit/delete |
| Attribution | **Ẩn** Leaflet prefix (cờ + link) · chỉ `RMMS.vn` · **cấm** `gis.vn · clip MapService · không OSM.org` trên view user |
| Bottom legend | **Không** «Lớp · click isolate + Fit» · **không** Tuyến/Corridor chips |
| Click pin/cụm/line trên map | Popup + (nếu pin) tab Thuộc tính · **không auto zoom** |
| List Kết quả | Click dòng vẫn Fit focus |

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | Context lock 2026-09-01 — **cấm** worker re-add header/toolbar/legend isolate / cluster `setView` |
| GAP-MAP-CLICK-ZOOM | Click tài sản trên map = popup only · cấm `setView` / `fitIsolateSelection` từ marker click hoặc paint |
| GAP-MAP-ZOOM-MIN | Default `fitVnClipMap` · `maxZoom: VN_CLIP_MIN_ZOOM` · **cấm** auto fit seed/corridor on load |
| GAP-MAP-DRAW-TB | **Cấm** Leaflet.draw toolbar trên view user — chỉ +/- |

## Copy

Không hardcode title page. Fit overview chỉ nút **Fit** trên map-bar.
