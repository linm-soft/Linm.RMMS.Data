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
| updatedAt | `2026-09-01T01:30:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis-draw-live.md`
- Demo SSOT: `Demo/src/demo/gis/gis-draw-live.html`
- OMS: `/agent-dev-oms-map` R1–R11 · Step 4d `map-design-standard` · Step 4m `map-icons-lines-standard`

## 2. Screens / zones (content-only · **cấm** clone GOVOne chrome)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs Lớp / Chú giải / Thuộc tính / Kết quả · tree lớp tài sản (checkbox **default off** + count + spinner) · form mã/tên · list đã lưu |
| B | *(removed 2026-09-01)* | **Cấm** thanh `← Dev ← GIS` + title · **cấm** toolbar Fit tổng quan / Nạp seed / Chuẩn hóa / Export / Xoá layer |
| C | Map chrome | `map-host` (**flex fill** · **chỉ** Leaflet +/- zoom) → `map-bar` (Nền VN clip · Fit · full/dock) · **cấm** Leaflet.draw toolbar · **cấm** `map-legend` isolate |
| D | Props + results | Form mã/tên sau vẽ · list session (list click vẫn Fit focus) |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Lớp tài sản | Checkbox tree + radio target | A |
| Zoom +/- | Leaflet zoomControl only | C |
| Mã / Tên | Text after draw | D |
| Fit / Full | Chỉ **map-bar** Fit + toggle icon | C |
| Click tài sản trên map | Popup + tab Thuộc tính · **cấm auto zoom** (`setView` / `fitIsolateSelection`) | C |

## 4. Prototype

- File: `ui/prototype/gis-draw-live-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** header Dev/GIS · **không** toolbar seed · **không** legend isolate
- Default basemap **clip VN** (live SSOT)

## 5. Visual / map rules

- **Cấm** header gradient / title «Bản đồ live — vẽ Point / Line / Polygon» trên page
- Live Leaflet only — cấm fake gradient map
- Default Fit = **zoom min** (`fitVnClipMap` · `VN_CLIP_MIN_ZOOM` = 5) — **cấm** auto zoom corridor/seed on load
- Map-bar **Fit** = phóng tài sản (không phải default load)
- **Cấm** Leaflet.draw toolbar (polyline / polygon / marker / edit / delete) — chỉ +/-
- **Cấm** status `Cot_km*.xlsx` / seed filename / `· bff`
- Corridor underlay + track trên **overlayPane**
- Dock: map-host **flex fill** remaining (sidebar + status + map-bar) — **cấm** cap `min(42vh, 420px)`
- **Cấm** bottom «Lớp · click isolate + Fit» + Tuyến/Corridor chips
- Click cụm / pin / line trên map: **popup only** — **cấm** `setView` ≥ DETAIL_ZOOM · **cấm** `fitIsolateSelection` trong paint
- List Kết quả click → vẫn Fit focus (không phải click map)
- Attribution: **ẩn Leaflet** (`setPrefix(false)`) · hiển thị `RMMS.vn` · **cấm** meta «Cụm vùng · 0 cụm · 0 vẽ · 0 TS · bff» trên map-bar

## 6. Handoff → SA

- APIs: `basemap-config?purpose=live` · `layers?purpose=live` · drawings CRUD · geojson overlay
- Reuse in-memory `GisDrawingStore` (cùng google) · PostGIS DEFER
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
