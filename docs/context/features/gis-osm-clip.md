# GIS — nền OSM đã cắt + overlay MapService

> **Slug:** `gis-osm-clip` · **Module:** `Gis` · **Phase:** P1 prod map  
> **Status:** Context — **MFE web clip BFF** (Wave 4 web) · **P2 streets** OpenMapTiles trên `basemap` · Tiêu chuẩn **OSM Carto muted** (`tone_plan=osm_muted` · 2026-09-01) · **clip-mask** invert dưới nhãn (`GAP-MAP-MASK-ALIGN` · `GAP-MAP-LABEL-CLIP` · 2026-09-03) · tile **Live/Cache** + zoom **+/- = wheel** (`GAP-MAP-TILE-EMPTY-ZOOM` · `GAP-MAP-ZOOM-STEP` · 2026-09-03) · demo HTML / native vẫn OSM.org/Google  
> **Skills:** `/implement-gis-map` · `/agent-dev-oms-map` · `/map-inspect-popup` · `/review-map-release`  
> **Parent:** [`gis.md`](gis.md) · data [`map-service.md`](map-service.md) · law [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **MFE:** `Linm.Web.RMMS.Gis` · **Mobile:** [`patrol-map.md`](patrol-map.md)  
> **Clip pack:** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT [`map-service.md`](map-service.md) § Clip SSOT

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Một basemap **clip gis.vn** (OSM **imagery**) + chi tiết KCHT/tuần **từ GIS/MapService** |
| Persona | Inspector (JWT) · Guest (không overlay nội bộ) |
| App hiện có | Leaflet clip BFF (Tiêu chuẩn / Vệ tinh) · patrol native **chrome lock** · tiles MapKit/OSM **pending** Wave 4 |
| DoD P1 | Default tile tự host · mask HS/TS từ union 34 tỉnh · maxBounds VN (gồm đảo) · JWT overlays · guest không lat/lng TS |

## 2. Design / UI

Giữ chrome MFE GIS (`/agent-dev-oms-map` · `gis-mfe-map-standard.md`): **Vị trí của tôi** trên **map-bar** (GPS pin + vòng vùng) · **cấm** nút Fit trên bar · **cấm** isolate legend bottom · attribution **`RMMS.vn`** · `LeaveConfirmModal`. List / Kết quả vẫn isolate.

**Native copy web live** ([`patrol-map.md`](patrol-map.md) · `/map-inspect-popup`): 2 chip **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · card **Tên: Vị trí của bạn** + **GPS:** (web **done** `buildMyLocationPopupHtml`) · **cấm** Đường/Phố/Default/Streets/Sat EN · **cấm** title-only · tiles Wave 4 **pending** (`GAP-MAP-PARITY-01`).

**Đổi:** default basemap **không** OSM.org. Chip **Tiêu chuẩn / Vệ tinh** = **paint MapLibre** trên **cùng** MVT BFF (`vnClipBasemap.ts`). **Cấm** Default/Streets/Sat EN. Ẩn Google/Esri trên **release** (demo HTML được giữ tách).

**Palette (2026-09-01 · `tone_plan=osm_muted`):** OSM Carto trên tile clip — đất tối hơn OSM chuẩn để pin/tuyến nổi. **Cấm** CSS `filter` canvas · **cấm** `tile.openstreetmap.org`.

| Chip | Paint |
|------|-------|
| **Tiêu chuẩn** | Đất `#e8e4dc` · biển `#8eb8c8` · nước `#aad3df` · `landcover`/`landuse` theo `class` (wood/grass/farm/residential/park) · hồ `water-inland` trên `vn-land` · đường OSM Carto **nền + biên** (motorway `#e892a2`/`#dc2a67` · trunk `#f9b29c`/`#c84e2f` · primary `#fcd6a4`/`#a06b00` · secondary `#f7fabf`/`#707d05` · minor `#ffffff`/`#8f8f8f`) · overzoom z14–16 · width plateau z16=z18 · **Leaflet maxZoom 16** (`GAP-MAP-ZOOM-MAX`) · **cấm** nét đơn + casing +0.35px · **cấm** z18 |
| **Vệ tinh** | Địa hình clip (landcover) — **không** Esri / Google sat |

Overlay **Tuyến đường** trên `/gis/tai-san`: `cartoRoutePairStyle` pair **blue** `guideBlue` / `routeBlueCase` — **cấm** peach `#fcd6a4` overlay. Snap = bake/`routeKmChainAlongHighway` dense · **cấm** dump GPS thưa (`isSparseGpsChord` · `GAP-MAP-DRAW-STREET-01`) · fail = **nét đứt**. Zoom sát giữ cache `national` (`GAP-MAP-INDEX-PAINT`). Live SSOT [`gis-draw-live.md`](gis-draw-live.md).

SSOT code: `MFE-Source/Linm.Web.RMMS.Gis/src/shared/map/vnClipBasemap.ts` · `CLIP_THEME` · `buildVnClipMapStyle`.

**Layer order (HARD — khớp live `buildVnClipMapStyle` · `clip-basemap-ui.md`):**

`bg` / `sea-fill` (bbox clip 102–118 / 6.8–23.5, `#8eb8c8`) → **`water`** (ocean/`sea` = `theme.sea` · khác = `#aad3df`) → **`vn-land`** (`boundaries`) → landcover → landuse → `water-inland` (không `ocean`) → đường **nền+biên** → **`clip-mask`** invert `theme.sea` → **`vn-line`** → **labels** · HS/TS GeoJSON.

| ❌ | ✅ |
|----|---|
| OSM landcover/water tràn tây biên gis.vn | **`clip-mask`** sau fill/line — lỗ = union tỉnh (`GAP-MAP-MASK-ALIGN`) |
| `clip-mask` trên symbol (Phú Quốc = «Quốc») | Mask **dưới** nhãn (`GAP-MAP-LABEL-CLIP`) |
| OSM `ocean` ≠ `theme.sea` (ô PBF chữ nhật) | `class=ocean\|sea` = `theme.sea` · hồ = `#aad3df` trên `vn-land` |
| `sea-fill` polygon world −180…180 | `sea-fill` **clip bbox** SSOT camera |
| Water **trên** đất | `GAP-MAP-WATER-OVER-LAND` — map một màu biển |

**Hai lớp nét (không nhầm):**

| Nét | Nguồn | Lớp sidebar |
|-----|--------|-------------|
| Đỏ/hồng OSM (chip **Tiêu chuẩn**) | MVT `transportation` | **Không** — luôn theo nền |
| Overlay tuyến bake/index | RMMS `osrm-bake` / IDB · `cartoRoutePairStyle` | Checkbox **Tuyến đường** |

Lào/Campuchia = biển clip (`vietnam.poly` + không OSM đất ngoài VN) — **không** lỗ canvas. GL: **cấm** gán/xóa `canvas.style.transform` · overflow visible **chỉ** tile-pane · MapLibre-gl-leaflet **`padding: 0`** (`GAP-MAP-PIN-ZOOM` — default plugin `0.1` / `0.15` → canvas lệch, map trống khi zoom).

**Tile fetch (MFE · `gisMapRuntime.ts` · 2026-09-03):** chip **Live \| Cache** trên map-bar. **Live** (`real`, DEV mặc định): `?v=session` + `volatile` + `Cache-Control: no-cache` — zoom **phải** thấy `…/gis/tiles/{basemap\|boundaries}/{z}/{x}/{y}.pbf` trên Network. **Cache:** HTTP max-age (prod). Ghi đè: `?gisTiles=real` · `VITE_GIS_TILE_FETCH`. **Cấm** nhầm `:9307` (Workflow) với GIS **`localhost:9302/gis/tai-san`**. Overlay TS chỉ vẽ khi **tick** lớp — nền beige = `vn-land`, không phải pin 107k.

**Zoom bước (`GAP-MAP-ZOOM-STEP`):** `zoomSnap: 0` giữ fill VN (`GAP-MAP-ZOOM-FILL`). **+/-**, phím, **lăn chuột** cùng `VN_CLIP_ZOOM_DELTA` **1** (tắt Leaflet `scrollWheelZoom` fractional `delta/60`). Plugin GL zoom = Leaflet − 1.

**Empty OSM / răng cưa:** miss `basemap` z≤12 = **200 rỗng `no-store`** (không 404 native — MapLibre không overzoom) · z>12 = **404** overzoom parent · `boundaries` maxzoom **16** · simp/pad/buffer PostGIS (`GAP-MAP-MVT-SIMP`).

**Cut chỉ Việt Nam (prod):**

| | |
|--|--|
| Mask | Tile BFF `mask` guest OK — MVT = clip box − union tỉnh **cùng simp** với `vn-land`. MFE fill `clip-mask` **dưới** nhãn. Stored `clip_masks` = overlay inspector / Osmium `.poly`, **không** nguồn MVT (simp 0.008 = bậc thang) |
| maxBounds | Lon **97.0–118.0** · Lat **6.8–23.5** · `minZoom` **5** · **`maxZoom` 16** (`VN_CLIP_MAX_ZOOM`) — MBTiles 12; **cấm** z18 overzoom tách QL dual · lon tây 97° = đất Thái/Lào (102° cắt giữa quốc gia) |
| Cấm | Lat min **8.0** (Mục I.2) — cắt Trường Sa (south file = 6.931) · bbox chữ nhật làm `.poly` Osmium · nhét 31 MB GeoJSON vào client |

Guest: [`directions.md`](directions.md) + [`citizen.md`](citizen.md) — không toolbar vẽ TS.

## 3. API

Reuse `gis.md` §3 — **cấm invent**.

| Audience | Gọi |
|----------|-----|
| Guest | Public citizen only — **không** `gis/geojson` |
| Staff JWT | `GET /api/v1/gis/geojson/{layer}` · drawings live Signed |

Draw: [`gis-draw-live.md`](gis-draw-live.md) / google demo = **parity GOVOne**, không phải basemap pháp lý prod.

## 4. Database

Xem [`map-service.md`](map-service.md). Client không giữ polygon chủ quyền trong repo public.

## 5. Events

`asset.updated` → refresh overlay staff. Guest không subscribe track tuần.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MAP-OSM-CDN-01 | **CLOSED web** — `GisListPage` / draw pages BFF clip · native/demo HTML CDN còn |
| GAP-MAP-OSM-TONE-01 | **CLOSED 2026-09-01** — Tiêu chuẩn OSM Carto muted (đất `#e8e4dc`) · Vệ tinh giữ clip |
| GAP-MAP-BOUNDS-01 | **CLOSED web** — maxBounds **97.0–118.0** / 6.8–23.5 / minZoom 5 / **maxZoom 16** trên Gis*Page (lon 97 = đất tây; **cấm** lat min 8.0) |
| GAP-MAP-ZOOM-MAX | **CLOSED 2026-09-01** — Leaflet maxZoom **16** · plateau width z16=z18 · **cấm** z18 overzoom MBTiles 12 (QL 2 dải khe be) |
| GAP-MAP-PIN-DETAIL-BBOX | **CLOSED 2026-09-01** live — detail pad **0.02°** · cull snap **hoặc** dump · **cấm** pad 0.002° / chỉ raw lưới 0.01° |
| GAP-MAP-MASK-01 | **CLOSED ingest** — `clip_masks` invert + tile guest `mask` 200 |
| GAP-MAP-MASK-ALIGN | **CLOSED 2026-09-03** — MFE `clip-mask` + mask MVT từ tỉnh (không stored 0.008) — nền xanh khớp `vn-line` |
| GAP-MAP-LABEL-CLIP | **CLOSED 2026-09-03** — crop đất/đường, **không** crop nhãn |
| GAP-MAP-GL-LEFT | **CLOSED 2026-09-01** — không đụng canvas transform · overflow chỉ tile-pane |
| GAP-MAP-LAND-SEA-01 | **UPDATED 2026-09-03** — sea-fill → water (ocean=`theme.sea`) → vn-land → landcover → **clip-mask** → vn-line → labels. **Cấm** mask trên symbol · **cấm** water trên đất |
| GAP-MAP-ROAD-CARTO-01 | **CLOSED 2026-09-01** — đường nền+biên OSM Carto (class fill + casing · z14–16). Overlay Tuyến = `GAP-MAP-ROUTE-BLUE` |
| GAP-MAP-ROUTE-BLUE | **CLOSED 2026-09-03 web** — overlay Tuyến `guideBlue`/`routeBlueCase` · **cấm** peach `#fcd6a4` overlay |
| GAP-MAP-INDEX-PAINT | **CLOSED 2026-09-03 web** — overlay bake/index **mọi zoom** (cache `national`) · **cấm** refetch bbox thay bake · **cấm** `clipPathToView` ẩn nét **đã ghim** |
| GAP-MAP-DRAW-STREET-01 | **CLOSED 2026-09-03 web** — overlay = `{HighwayPath}` dense · **cấm** dump GPS thưa (`isSparseGpsChord`) · fail = **nét đứt** không chord biển / lưới phố |
| GAP-MAP-PARITY-01 | Native **tiles** ≠ web clip BFF (Wave 4 pending) · **chrome+popup LOCKED** = web `/gis/live` · **cấm** fake native tiles done |
| GAP-MAP-LOCATE-POPUP-01 | **CLOSED web** — `buildMyLocationPopupHtml` · native **pending** · **cấm** title-only |
| GAP-MAP-PANE-ALIVE | **CLOSED 2026-09-03 web** — `isVnClipMapAlive` + clear clip timers on `unload` · **cấm** `setMaxBounds` sau `remove()` |
| GAP-MAP-PIN-ZOOM | **CLOSED 2026-09-03 web** — plugin `padding: 0` · **cấm** `0.1`/`0.15` (canvas lệch / map trống khi zoom) |
| GAP-MAP-TILE-EMPTY-ZOOM | **CLOSED 2026-09-03 web** — empty PBF cache + overzoom in-memory → map trống / Network trống. Live bust `?v=` · OSM miss z≤12 **200 no-store** · z>12 **404** |
| GAP-MAP-ZOOM-STEP | **CLOSED 2026-09-03 web** — +/- và lăn chuột cùng bước `VN_CLIP_ZOOM_DELTA=1` · **cấm** wheel `delta/wheelPx` |
| GAP-MAP-MVT-SIMP | **CLOSED 2026-09-03** — `ST_Simplify` mịn + clip pad + MVT buffer **256** (GL z = Leaflet−1 · **cấm** simp thô bậc thang bờ biển) |
| GAP-F-GIS-02 | Google draw parity — **không** dùng làm nền Store |

## 7. Demo checklist

- [x] Prod web: 0 request `openstreetmap.org` (Gis*Page source · live browser DEFER)  
- [x] Mask **ingest** + bounds (tile `mask` guest) · MFE `clip-mask` **dưới** nhãn (`GAP-MAP-MASK-ALIGN` · `GAP-MAP-LABEL-CLIP`)  
- [x] P2 street MVT (roads + place names) via BFF `tiles/basemap` · `streetTilesReady`  
- [x] Chip **Tiêu chuẩn / Vệ tinh** OSM Carto muted (`CLIP_THEME` · không OSM.org CDN · **cấm** Default/Streets EN)  
- [x] Đường **nền + biên** OSM Carto (`GAP-MAP-ROAD-CARTO-01`) · overlay Tuyến pair blue · **cấm** dump GPS thưa (`GAP-MAP-DRAW-STREET-01`)  
- [x] Zoom max **16** (`GAP-MAP-ZOOM-MAX`) · pin detail pad bbox (`GAP-MAP-PIN-DETAIL-BBOX`) — `/gis/live`  
- [x] Tile **Live** bust cache (`GAP-MAP-TILE-EMPTY-ZOOM`) · `padding: 0` (`GAP-MAP-PIN-ZOOM`) · +/- = wheel (`GAP-MAP-ZOOM-STEP`) — `/gis/tai-san` `:9302`  
- [x] Map-bar **Vị trí của tôi** (cấm Fit trên bar) — native copy [`patrol-map.md`](patrol-map.md)  
- [ ] Staff overlay 401 unsigned  
- [ ] `/review-map-release`
