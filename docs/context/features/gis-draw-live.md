# Vẽ tài sản live (Leaflet) — Feature Context

> **Slug:** `gis-draw-live` · **Module:** `Gis` + `Asset` · **Phase:** P1  
> **Status:** P1 implement (`task_6e79dde5`)  
> **HĐ PL01:** mã **02** · demo slug `gis-draw-live` (cùng phân hệ GIS 2D với `gis` · `gis-draw-google`)  
> **Feature Kind:** F/custom map · sibling [`gis-draw-google.md`](gis-draw-google.md)  
> **Demo HTML (SSOT):** `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html`  
> **Prototype ref:** `Linm.RMMS.Demo/src/demo/p/gis-draw-live.html`  
> **MFE:** `Linm.Web.RMMS.Gis` · page `GisDrawLivePage` · route **`/gis/tai-san`** · menu **Bản đồ tài sản**  
> **Nav 2026-09-02:** **Bản đồ tài sản** + **Bản đồ Tuần đường** + **Bản đồ camera** (`gis-camera-map`) — **cấm** re-add `/gis` list · `/gis/ha-tang` · `/gis/tao-moi`  
> **`yarn start:std`:** `http://localhost:9302/gis/tai-san` · `?type=BUS_STOP` auto-tick lớp · `/gis/live` redirect giữ query  
> **BE:** `api/v1/gis` · `basemap-config?purpose=live` · `layers?purpose=live` · drawings GeoJSON · BFF `http://localhost:5201/web-bff/api/v1`  
> **Parent:** [`gis.md`](gis.md) · full shell Google-proxy: [`gis-draw-google.md`](gis-draw-google.md)  
> **Mobile copy web live:** [`patrol-map.md`](patrol-map.md) — chip · locate · card **Tên: Vị trí của bạn** + **GPS** · `/map-inspect-popup` · **cấm** Fit / title-only  
> **Inspect web (done):** `buildMyLocationPopupHtml` + `bindAssetPopup`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bản đồ **tài sản** (trước: live) — **chỉ xem** tài sản/tuyến trên Leaflet · dữ liệu thật · **cấm** kéo/vẽ pin |
| Persona | Cán bộ GIS · tuần đường |
| Khác `gis-draw-google` | Live = shell nhẹ / nhanh thử vẽ; Google = full shell parity GOVOne |
| DoD P1 | Basemap **clip BFF** (Tiêu chuẩn / Vệ tinh) · đường **nền + biên** OSM Carto · overlay TS display-only · inspect thuộc tính · OMS R1–R11 |

**UI pattern:** Full page map (Kind F). Gate demo map: `/agent-dev-oms-map`. Overlay tuyến: `skipSplit` FeatureId · paint `splitPathOnJump` · **cấm** chord biển · **cấm** dump GPS thưa (`isSparseGpsChord` · `GAP-MAP-DRAW-STREET-01`). GL: không đụng `canvas.style.transform`.

## 2. Design / UI

| Zone | Nội dung |
|------|----------|
| Header | **Không** — title thuộc menu shell |
| Sidebar | Lớp tài sản (checkbox default off + count) · thuộc tính |
| Toolbar | **Không** seed/export — **Vị trí của tôi** trên map-bar · **2 chip Tiêu chuẩn \| Vệ tinh** · **Live \| Cache** tile (`GAP-MAP-TILE-EMPTY-ZOOM`) · **cấm** nút Fit |
| Map | Leaflet **flex fill** remaining · nền **clip BFF Carto** ([`gis-osm-clip.md`](gis-osm-clip.md) §2): `water` `#aad3df` → `vn-land` + landcover · **cấm** biển/đất một màu phẳng · đường OSM nền+biên (bảng dưới) · nét OSM ≠ checkbox Tuyến · overlay bake/index khi tick Tuyến **mọi zoom** (giữ cache `national` · `GAP-MAP-INDEX-PAINT`) · GPS thưa / OSRM fail = **nét đứt** không chord (`GAP-MAP-DRAW-STREET-01`) · click TS **không** auto zoom · **maxZoom 16** · pin zoom sát pad bbox · **+/- = lăn chuột** bước **1** (`GAP-MAP-ZOOM-STEP`) · plugin `padding: 0` |
| Props | Click TS: Tên · Mã TS · KM · GPS · Tuyến + 3 tầng tuyến + dumpSpecs · meta **`snap tim đường` \| `raw`** · **không** Lưu bản vẽ |
| Locate popup | Click pin GPS: **Tên: Vị trí của bạn** · **GPS:** · cùng card TS · **cấm** title-only (`GAP-MAP-LOCATE-POPUP-01`) |

**Pin tài sản (`GAP-MAP-PIN-ROUTE-01` · `/gis-tai-san-snap`):**

| | |
|--|--|
| Key | `itemRouteKey` = `route` / `routeName` / `roadCode` / `routeNamed` trên tài sản — **cấm** nearest mọi đường |
| Place | `osrmPinPlacement` → `projectToNearestPath` trên corridor **cùng mã** (`byRoute` OSRM + `enrichOsrmByRouteForPins` / `{LineIndex}`) |
| Ẩn | Có mã tuyến mà chưa snap → **không** vẽ pin (cấm dump 0.01° raw / pin biển) |
| Panel | Khi snap: GPS = vị trí ghim · meta `snap tim đường` — sync `inspectSnapped` |
| Cấm | `snapPointToStreet` / `{OsrmNearest}` inventory · seed km-chain đếm là «snap» |

**Đường (`GAP-MAP-ROAD-CARTO-01` · `vnClipBasemap.ts`):** fill = nền mặt đường · casing = biên hai phía · `line-cap`/`line-join` round · overzoom GL z14–16 (MBTiles max z12) · interpolate width plateau z16=z18 · phố nhỏ dưới / QL trên.

**Camera / zoom sát (`GAP-MAP-ZOOM-MAX` · `GAP-MAP-PIN-DETAIL-BBOX`):**

| | |
|--|--|
| Leaflet `maxZoom` | **16** (`VN_CLIP_MAX_ZOOM`) · `applyVnClipCamera` `setMaxZoom` — **cấm** default 18 |
| Zoom step | `VN_CLIP_ZOOM_DELTA` **1** — control +/- **và** wheel (`GAP-MAP-ZOOM-STEP`) · `zoomSnap: 0` chỉ fill |
| Tile fetch | DEV **Live** (`gisMapRuntime.ts`) · **cấm** tin Network trống sau load = không có API |
| Pane alive | `isVnClipMapAlive` trước `setMaxBounds` · clear clip timers on `unload` (`GAP-MAP-PANE-ALIVE`) |
| Vì sao | Tile clip **max 12**; z18 overzoom ×64 → QL dual carriageway (~20 m) thành **2 dải + khe be** |
| Pin detail | Fetch `padBbox` min **0.02°** · cull theo **vị trí đã snap** (ưu tiên) hoặc dump khảo sát · min pad **0.015°** — **cấm** hiện lưới 0.01° raw ngoài biển (`GAP-MAP-PIN-ROUTE-01`) |
| Cấm | `padBbox` min 0.002° · `pinInView` **chỉ** raw dump · width interpolate dốc sau z16 |

| Class | Nền (fill) | Biên (casing) |
|-------|------------|---------------|
| motorway | `#e892a2` | `#dc2a67` |
| trunk | `#f9b29c` | `#c84e2f` |
| primary (QL) | `#fcd6a4` | `#a06b00` |
| secondary | `#f7fabf` | `#707d05` |
| tertiary / minor | `#ffffff` | `#8f8f8f` |

Overlay **Tuyến đường** (`cartoRoutePairStyle`): pair **blue** `guideBlue` `#2563EB` / `routeBlueCase` `#1D4ED8` — **cấm** peach OSM `#fcd6a4` overlay · **cấm** casing chỉ +0.35px (nhìn thành nét đơn).

**Snap overlay (`GAP-MAP-DRAW-STREET-01` · `/map-draw-street`):** paint = `{HighwayPath}` (`routeKmChainAlongHighway` / bake dense) · **cấm** vẽ dump GPS thưa (`isSparseGpsChord`) · fail OSRM / sparse = **ẩn nét** + overlay **nét đứt** — **cấm** chord biển / lưới phố / sausage dump ~1 pt/km. Zoom sát: giữ cache `national` (`GAP-MAP-INDEX-PAINT`) · **cấm** `clipPathToView` / `landReadyPath` trên lớp **đã ghim** · **cấm** refetch bbox thay bake.

Peer clip: [`gis-osm-clip.md`](gis-osm-clip.md).

## 3. API

Cùng contract [`gis-draw-google.md`](gis-draw-google.md) §3 — `GET/POST /api/v1/gis/drawings*`.

Live-specific:

| Method | Path | Note |
|--------|------|------|
| GET | `/api/v1/gis/basemap-config?purpose=live` | Demo HTML: OSM + Esri. **MFE prod** không dùng chip OSM.org — paint `vnClipBasemap` ([`gis-osm-clip.md`](gis-osm-clip.md)) |
| GET | `/api/v1/gis/layers?purpose=live` | alias `purpose=draw` |

## 4. Links

| Loại | Path |
|------|------|
| Context | `docs/context/features/gis-draw-live.md` |
| Demo | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| MFE std | `http://localhost:9302/dev` · route `/gis/tai-san` |
| Mobile chrome | [`patrol-map.md`](patrol-map.md) — `/edit-mobile-feature` · copy web live · tiles Wave 4 pending |
| BE | `Linm.RMMS.WebService` · domain Gis |
| HĐ | PL01 mã 02 · `Linm.RMMS.Contract/docs/rmms/hop-dong/` |

## 5. Scan / formType

`formType=map` · `domain=gis` · `mfeRel=Linm.Web.RMMS.Gis` · packKind=`map`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `pending` | `2026-09-06T20:59:31.810Z` |
| mobile | — | — | — |
