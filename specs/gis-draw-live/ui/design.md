# Design — gis-draw-live (Kind F map · shell rút gọn)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| packKind | `map` |
| Feature Kind | **F** |
| status | `confirmed` (autopilot · design_confirm=approve) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T21:20:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis-draw-live.md`
- Demo SSOT: `Demo/src/demo/gis/gis-draw-live.html`
- OMS: `/agent-dev-oms-map` R1–R11 · Step 4d `map-design-standard` · Step 4m `map-icons-lines-standard`

## 2. Screens / zones (content-only · **cấm** clone GOVOne chrome)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs Lớp / Chú giải / Thuộc tính / Kết quả · tree lớp tài sản · menu shell **Bản đồ tài sản** |
| B | *(removed 2026-09-01)* | **Cấm** thanh `← Dev ← GIS` + title · **cấm** toolbar Fit tổng quan / Nạp seed / Chuẩn hóa / Export / Xoá layer |
| C | Map chrome | `map-host` (**flex fill** · **chỉ** Leaflet +/- zoom) → `map-bar` (**Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · full/dock) · **cấm** nút Fit · **cấm** Default/Streets/Sat EN · **cấm** Leaflet.draw toolbar · **cấm** `map-legend` isolate |
| D | Props + results | Click TS → tab Thuộc tính = popup + gov 3 tầng tuyến + dumpSpecs · **cấm** Lưu bản vẽ / Huỷ · list session (list click vẫn Fit focus) |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Lớp tài sản | Checkbox tree (chỉ hiện/ẩn) · default off · **`?type=BUS_STOP`** auto-tick mã loại | A |
| Zoom +/- | Leaflet zoomControl only | C |
| Thuộc tính | Read-only inspect (Tên · Mã TS · KM · GPS · Tuyến · 3 tầng · dumpSpecs) | D |
| Fit / Full | List Kết quả Fit isolate · map-bar **không** Fit | C |
| Tiêu chuẩn / Vệ tinh | 2 chip clip BFF (`CLIP_STYLE_OPTIONS`) | C |
| Vị trí của tôi | GPS `locateUserOnMap` — pin + vòng vùng · click pin card **Tên: Vị trí của bạn** + **GPS:** | C |
| Click tài sản trên map | Popup + tab Thuộc tính · **cấm auto zoom** · **cấm drag/move/vẽ** | C |

## 4. Prototype

- File: `ui/prototype/gis-draw-live-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** header Dev/GIS · **không** toolbar seed · **không** legend isolate
- Default basemap **clip VN** (live SSOT) · map-bar **2 chip: Tiêu chuẩn · Vệ tinh** — **cấm** Default/Streets/Sat EN

## 5. Visual / map rules

- **Cấm** header gradient / title «Bản đồ live — vẽ Point / Line / Polygon» trên page
- Live Leaflet only — cấm fake gradient map
- Default Fit = **zoom min** (`fitVnClipMap` · `VN_CLIP_MIN_ZOOM` = 5) — **cấm** auto zoom corridor/seed on load
- **maxZoom = 16** (`VN_CLIP_MAX_ZOOM`) — MBTiles clip max 12; **cấm** z18 overzoom tách QL thành 2 dải (`GAP-MAP-ZOOM-MAX`)
- Pin detail: pad bbox ≥ 0.02° · cull theo điểm snap hoặc dump (`GAP-MAP-PIN-DETAIL-BBOX`)
- Map-bar **Vị trí của tôi** = GPS pin + phóng vùng accuracy · **cấm** nút Fit
- Click pin locate: card **Tên: Vị trí của bạn** · **GPS:** (`buildMyLocationPopupHtml`) · **cấm** title-only (`GAP-MAP-LOCATE-POPUP-01`)
- **Cấm** Leaflet.draw toolbar (polyline / polygon / marker / edit / delete) — chỉ +/-
- **Cấm** drag / move pin tài sản (`draggable: false` · không `bindDrawEditPersist` / `Draw.CREATED`) — **chỉ xem**
- **Cấm** status `Cot_km*.xlsx` / seed filename / `· bff`
- Corridor underlay + track trên **overlayPane**
- Dock: map-host **flex fill** remaining (sidebar + status + map-bar) — **cấm** cap `min(42vh, 420px)`
- **Cấm** bottom «Lớp · click isolate + Fit» + Tuyến/Corridor chips
- Click cụm / pin / line trên map: **popup only** — **cấm** `setView` ≥ DETAIL_ZOOM · **cấm** `fitIsolateSelection` trong paint
- List Kết quả click → vẫn Fit focus (không phải click map)
- Overlay status: `tuyến · N đã ghim` = nét **osrm-bake / index** đang vẽ (không phải số km-chain dump)
- Đường OSM Carto: **nền** (fill class: motorway `#e892a2` · trunk `#f9b29c` · primary `#fcd6a4` · secondary `#f7fabf`) + **biên** casing (`#dc2a67` / `#c84e2f` / `#a06b00` / `#707d05`) · round cap · overzoom z14–16 · minor dưới / QL trên — **cấm** nét đơn + casing +0.35px (`GAP-MAP-ROAD-CARTO-01`)
- Overlay **Tuyến đường**: pair blue `guideBlue` `#2563EB` + casing `routeBlueCase` `#1D4ED8` — **cấm** peach OSM `#fcd6a4` (`GAP-MAP-ROUTE-BLUE`)
- z≤8: vẽ **đủ** LineString đã bake/index (không clip viewport · không `landReadyPath` ẩn QL ven biển)
- Zoom sát (corridor/detail): **giữ** overlay bake `national` · **cấm** `clipPathToView` / `landReadyPath` trên lớp Tuyến **đã ghim** · GPS thưa = **nét đứt** không vẽ chord (`GAP-MAP-DRAW-STREET-01`)
- Nét bake/index: **không** `expandLineItemsOnJump` đổi FeatureId · paint `splitPathOnJump` thành **nhiều polyline cùng id** (cấm chord biển) · **không** `simplifyPathForLod` rút đỉnh
- Canvas clip: **không** đụng `canvas.style.transform` · overflow visible **chỉ** tile-pane · stack Carto: sea-fill → **water `#aad3df`** → vn-land → landcover (cấm mask invert / ocean=`theme.sea`)
- Clip camera: `setMaxBounds` / `fitVnClipMap` **chỉ** khi `mapPane` còn trên DOM · `attachVnClipBasemap` **clearTimeout** mọi schedule trên `unload` — **cấm** gọi Leaflet sau `map.remove()` (`GAP-MAP-PANE-ALIVE`)

## 6. Handoff → SA

- APIs: `basemap-config?purpose=live` · `layers?purpose=live` · drawings CRUD · geojson overlay
- Reuse in-memory `GisDrawingStore` (cùng google) · PostGIS DEFER
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
