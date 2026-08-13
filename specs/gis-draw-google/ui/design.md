# Design — gis-draw-google (Kind F map)

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| packKind | `map` |
| Feature Kind | **F** |
| status | `confirmed` (autopilot · design_confirm=approve) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-google/ui/prototype/gis-draw-google-prototype.html` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:05:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis-draw-google.md`
- Demo SSOT: `Demo/src/demo/gis/gis-draw-google.html`
- Control-map: `docs/context/features/gis-draw-google-control-map.md`
- OMS: `/agent-dev-oms-map` R1–R11 · Step 4d `map-design-standard` · Step 4m `map-icons-lines-standard`

## 2. Screens / zones (content-only · **cấm** clone GOVOne chrome)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs: Lớp bản đồ · Chú giải · Thuộc tính · Kết quả |
| B | Toolbar | Fit · seed · chuẩn hóa Km · export · huỷ biên tập · Lưu (Ctrl+S) · công cụ GIS |
| C | Map chrome | `map-host` (Leaflet.draw) → `map-bar` (Google/OSM/Esri/sat · Fit · full/dock) → legend isolate |
| D | Props + results | Form mã/tên sau vẽ · list đã lưu · click → Fit focus |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Search đối tượng | SearchInput header | Header |
| Lớp nền | Radio + map-bar buttons | A / C |
| Lớp tài sản | Checkbox tree + radio target | A |
| Point / Line / Polygon | Leaflet.draw | C |
| Mã / Tên / Ghi chú | Text after draw | D |
| Fit / Full | Button + title/aria | C |
| Isolate lớp / feature | Legend + kết quả click | C / D |

## 4. Prototype

- File: `ui/prototype/gis-draw-google-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** clone full GOVOne topnav

## 5. Visual / map rules

- Primary teal `#0f766e` (demo parity)
- Live Leaflet only — cấm fake gradient map
- Default basemap **Google proxy** (feature SSOT) · OSM VN available
- Default Fit overview zoom ≤13
- sat `maxNativeZoom: 17`
- Corridor underlay + track pane for LineString
- Isolate → Fit focus ≤15

## 6. Handoff → SA

- APIs: basemap-config · layers?purpose=draw · drawings CRUD · geojson overlay
- In-memory store P1 · PostGIS DEFER
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
