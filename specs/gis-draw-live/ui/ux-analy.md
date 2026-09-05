# UX analy — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| route | `/gis/tai-san` |
| updatedAt | `2026-09-03T00:00:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Header | **Không** `← Dev` · `← GIS` · title «Bản đồ live» — shell menu **Bản đồ tài sản** |
| Toolbar | **Không** Fit tổng quan / Nạp seed Excel / Chuẩn hóa cột Km / Export GeoJSON / Xoá hết layer |
| Sidebar | Tabs Lớp · Chú giải · Thuộc tính · Kết quả · tree loại tài sản (checkbox default off) · `?type=` auto-tick |
| Status | EPSG:4326 · overlay `tuyến · N đã ghim` = bake/index đang vẽ · **cấm** seed filename / `Cot_km*.xlsx` / `· bff` |
| Map | Leaflet live · **default zoom min** (`VN_CLIP_MIN_ZOOM` = 5) fit toàn clip VN · **maxZoom 16** (`VN_CLIP_MAX_ZOOM`) · **flex fill** · đường **nền + biên** OSM Carto (overzoom z12, plateau width) |
| Map-bar | **Tiêu chuẩn \| Vệ tinh** (clip BFF) · **Vị trí của tôi** (GPS pin + vùng) · toggle full/dock · **cấm** nút Fit · **cấm** Default/Streets/Sat EN · **không** meta cụm/TS/bff |
| Map tools | **Chỉ** Leaflet +/- zoom · **cấm** Leaflet.draw · **cấm** kéo/di chuyển pin tài sản (display only) |
| Attribution | **Ẩn** Leaflet prefix (cờ + link) · chỉ `RMMS.vn` · **cấm** `gis.vn · clip MapService · không OSM.org` trên view user |
| Bottom legend | **Không** «Lớp · click isolate + Fit» · **không** Tuyến/Corridor chips |
| Click pin/cụm/line trên map | Popup + tab Thuộc tính inspect (popup + gov fields) · **không auto zoom** |
| Click pin locate | Card **Tên: Vị trí của bạn** · **GPS:** · bar vẫn **Vị trí của tôi** · **cấm** title-only |
| List Kết quả | Click dòng vẫn Fit focus |

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | Context lock 2026-09-01 — **cấm** worker re-add header/toolbar/legend isolate / cluster `setView` · **cấm** 3 chip Default/Streets/Sat EN |
| GAP-MAP-BASEMAP-2 | Map-bar **đúng 2 chip** Tiêu chuẩn + Vệ tinh (`CLIP_STYLE_OPTIONS`) |
| GAP-MAP-LOCATE-01 | Map-bar **Vị trí của tôi** · GPS pin + vòng vùng · **cấm** nút Fit · **cấm** `alert` |
| GAP-MAP-LOCATE-POPUP-01 | Locate popup = card **Tên: Vị trí của bạn** + **GPS:** · **cấm** `bindPopup` title-only |
| GAP-MAP-PROPS-INSPECT | Tab Thuộc tính = inspect tài sản chọn · **cấm** form GeoJSON + Lưu bản vẽ / Huỷ |
| GAP-MAP-CLICK-ZOOM | Click tài sản trên map = popup only · cấm `setView` / `fitIsolateSelection` từ marker click hoặc paint |
| GAP-MAP-ZOOM-MIN | Default `fitVnClipMap` · `maxZoom: VN_CLIP_MIN_ZOOM` · **cấm** auto fit seed/corridor on load |
| GAP-MAP-INDEX-PAINT | Overlay **Tuyến đường** mọi zoom = bake/index dense (giữ cache `national`) · **cấm** refetch bbox thay bake · **cấm** `clipPathToView` ẩn nét **đã ghim** |
| GAP-MAP-DRAW-STREET-01 | Overlay Tuyến = `{HighwayPath}` (`routeKmChainAlongHighway` / bake dense) · **cấm** vẽ dump GPS thưa (`isSparseGpsChord`) · fail = **nét đứt** không chord biển / lưới phố |
| GAP-MAP-BAKE-JUMP | Bake/index **không** tách `#si` trước paint · `splitPathOnJump` = nhiều polyline cùng id · **cấm** chord biển / blob đứt |
| GAP-MAP-GL-LEFT | **cấm** gán/xóa `canvas.style.transform` · overflow visible **chỉ** tile-pane |
| GAP-MAP-DISPLAY-ONLY | Pin/cụm **chỉ xem** · `ASSET_DISPLAY_MARKER_OPTS.draggable=false` · **cấm** Draw edit/CREATED / persist local sau kéo |
| GAP-MAP-ROAD-CARTO-01 | Đường **nền OSM** = **nền + biên** Carto (class fill + casing ≥ ~1px/phía · z14–16) · **cấm** nét đơn / casing +0.35px trên basemap |
| GAP-MAP-ROUTE-BLUE | Overlay lớp **Tuyến đường** = pair `guideBlue` `#2563EB` / `routeBlueCase` `#1D4ED8` · pict TD cùng màu · **cấm** peach `#fcd6a4` overlay (worker revert Carto primary) |
| GAP-MAP-ZOOM-MAX | Leaflet **maxZoom = 16** · interpolate đường plateau z16=z18 · **cấm** z18 overzoom MBTiles 12 (QL dual carriageway thành 2 dải) |
| GAP-MAP-PIN-DETAIL-BBOX | Detail fetch `DETAIL_BBOX_MIN_PAD` 0.02° · cull pin theo **snap hoặc dump** + `DETAIL_PIN_PAD_DEG` 0.015° · **cấm** pad 0.002° / chỉ raw GPS lưới 0.01° |
| GAP-MAP-TYPE-QUERY | `/gis/tai-san?type=BUS_STOP` (comma/`+`/`|`) auto-check lớp `code`/`drawLayer`/`assetCode` · `/gis/live` redirect giữ query |
| GAP-MAP-PANE-ALIVE | `setMaxBounds`/`fitVnClipMap` **guard** `mapPane.isConnected` · `attachVnClipBasemap` **clear** timer 0/50/200/600 + RO trên `unload` — **cấm** gọi Leaflet sau `remove()` (`_leaflet_pos`) |

## Copy

Không hardcode title page. Map-bar **Vị trí của tôi** (không Fit). List Kết quả vẫn Fit isolate.
