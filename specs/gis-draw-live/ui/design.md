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
| updatedAt | `2026-08-11T22:15:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis-draw-live.md`
- Demo SSOT: `Demo/src/demo/gis/gis-draw-live.html`
- OMS: `/agent-dev-oms-map` R1–R11 · Step 4d `map-design-standard` · Step 4m `map-icons-lines-standard`

## 2. Screens / zones (content-only · **cấm** clone GOVOne chrome)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Lớp nền · tree lớp tài sản (checkbox **default off** + count + spinner) · chú giải isolate · thuộc tính · list đã lưu |
| B | Toolbar | Fit · seed · chuẩn hóa Km · export · xoá layer |
| C | Map chrome | `map-host` (Leaflet.draw) → `map-bar` (OSM / Esri / sat · Fit · full/dock) → legend |
| D | Props + results | Form mã/tên sau vẽ · list session · click → Fit focus |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Lớp nền | Radio sidebar + map-bar buttons | A / C |
| Lớp tài sản | Checkbox tree + radio target | A |
| Point / Line / Polygon | Leaflet.draw | C |
| Mã / Tên | Text after draw | D |
| Fit / Full | Button + title/aria | C |
| Isolate lớp / feature | Legend + list click | C / D |

## 4. Prototype

- File: `ui/prototype/gis-draw-live-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** clone full GOVOne topnav
- Default basemap **OSM** (live SSOT) — khác Google proxy của sibling

## 5. Visual / map rules

- Header gradient navy→teal (`#1e3a5f` → `#0d9488`) — demo parity
- Live Leaflet only — cấm fake gradient map
- Default basemap **OSM** · Esri Streets · sat `maxNativeZoom: 17`
- Default Fit overview zoom ≤13
- Corridor underlay + track trên **overlayPane** (GIS live — Linm `svg max-width` ẩn custom pane)
- Isolate → Fit focus ≤15; isolate pill chưa tick → auto-tick, **Tất cả** không tick hết
- Tag: `Leaflet + OSM/Esri · LIVE`
- Click cụm → `setView` ≥ DETAIL_ZOOM (cấm `fitBounds` ô 0.5°)

## 6. Handoff → SA

- APIs: `basemap-config?purpose=live` · `layers?purpose=live` · drawings CRUD · geojson overlay
- Reuse in-memory `GisDrawingStore` (cùng google) · PostGIS DEFER
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
