# Design — gis-draw-google (Kind F map · shell rút gọn parity live)

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
| updatedAt | `2026-09-01T01:45:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis-draw-google.md`
- Demo SSOT: `Demo/src/demo/gis/gis-draw-google.html` (legacy GOVOne chrome **được** giữ trên demo HTML)
- Control-map: `docs/context/features/gis-draw-google-control-map.md`
- OMS: `/agent-dev-oms-map` · **MFE chrome** `gis-mfe-map-standard.md` (parity `/gis/live`)

## 2. Screens / zones (content-only · **cấm** clone GOVOne chrome trên MFE)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs Lớp / Chú giải / Thuộc tính / Kết quả · tree lớp tài sản |
| B | *(removed 2026-09-01)* | **Cấm** thanh `← Dev ← GIS` + title «Bản đồ hạ tầng» · **cấm** toolbar Fit tổng quan / Nạp seed / Chuẩn hóa / Export / Xoá / Hủy biên tập / Lưu Ctrl+S / Công cụ ▾ |
| C | Map chrome | `map-host` (Leaflet.draw + MAP_QUICK_TOOLS, **flex fill**) → `map-bar` (Nền VN clip · Fit · full/dock) · **cấm** `map-legend` isolate bottom · **cấm** map-bar meta |
| D | Props + results | Form mã/tên sau vẽ · list đã lưu · list click vẫn Fit focus |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Search đối tượng | Filter dock | B/D |
| Lớp tài sản | Checkbox tree + radio target | A |
| Point / Line / Polygon / đo / in | MAP_QUICK_TOOLS overlay trên map | C |
| Mã / Tên / Ghi chú | Text after draw | D |
| Fit / Full | Chỉ **map-bar** Fit + toggle icon | C |
| Click tài sản trên map | Popup + tab Thuộc tính · **cấm auto zoom** | C |

## 4. Prototype

- File: `ui/prototype/gis-draw-google-prototype.html`
- reviewUrl: above (browser-openable)
- MFE Kind F — **không** header Dev/GIS · **không** toolbar seed · **không** legend isolate
- Default basemap **clip VN** (parity live)

## 5. Visual / map rules

- **Cấm** header gradient / title «Bản đồ hạ tầng — vẽ tài sản» trên page
- Live Leaflet only — cấm fake gradient map
- Pin map = QCVN `mapAssetIcons` pictogram **trùng chú giải sidebar** (L.icon data-URI)
- Default Fit overview zoom ≤13 — **chỉ** map-bar Fit / load
- Overlay default = **toàn bộ tài sản plottable** set **`khu-2-gov`**
- Skip placeholder `16,110` **và** lat/lng ngoài bbox Nghệ An
- Tuyến `tuyen-duong` = vertices corridor Khu II · FE **OSRM R8** · pin **projectToPath**
- Corridor underlay + track pane for LineString
- Dock: map-host **flex fill** remaining — **cấm** cap `min(42vh, 420px)`
- **Cấm** bottom «Lớp · click isolate + Fit»
- Click pin/line trên map: **popup only** — **cấm** `setView` / `fitIsolateSelection` trong paint
- List Kết quả click → vẫn Fit focus
- Attribution: **ẩn Leaflet** (`setPrefix(false)`) · hiển thị `RMMS.vn`

## 6. Handoff → SA

- APIs: basemap-config · layers?purpose=draw · drawings CRUD · geojson overlay **từ DB road_assets (khu-2-gov)**
- Drawings in-memory P1 · PostGIS DEFER
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
