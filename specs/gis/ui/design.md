# Design — gis (Kind F map · chrome parity live)

| Field | Value |
|-------|-------|
| feature | `gis` |
| packKind | `map` |
| Feature Kind | **F** |
| status | `confirmed` (autopilot · design_confirm=approve) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis/ui/prototype/gis-map-prototype.html` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T01:45:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis.md`
- Demo SSOT: `Demo/src/demo/gis/gis.html`
- controlHint: `specs/_data-analy/features/gis-control-hint.md`
- OMS: `/agent-dev-oms-map` · **MFE chrome** `gis-mfe-map-standard.md` (parity `/gis/live`)

## 2. Screens / zones (content-only · skip chrome demo · **cấm badge P1/P2**)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs: Lớp · Chú giải · Thuộc tính · Kết quả |
| B | Toolbar + filter | **Giữ** Lấy dữ liệu / overlay / Heatmap / Twin / Mở vẽ + search + PCI min/max · **cấm** page header `← Dev` / title «GIS bản đồ giám sát 2D» |
| C | Map chrome | `map-host` (Leaflet **flex fill**) → `map-bar` (Nền VN clip · Fit · full/dock) · **cấm** map-bar meta · **cấm** legend isolate bottom |
| D | Results + props | Section + pin + camera **full table** (cấm `max-height` cắt hàng) · **MapPointDetail** · chú giải **sidebar** đủ loại TS |

## 2b. Shared map REF (promote Common sau)

| Item | Path |
|------|------|
| Demo REF | `/demo/p/gis-draw-live.html` |
| Config | `MapPointConfig` — `assetCode` · `code` · `lat`/`lng` · `detailHtml` \| `detailContent` |
| Icons | `ASSET_CODE_META` (KM·BB·HL·CS·CN·CT·KE·BUS·TS) — GT VN / RMMS |
| MFE | `Linm.Web.RMMS.Gis/src/shared/map/*` |

## 3. Control map

| Control | Hint | Zone |
|---------|------|------|
| Search đối tượng | SearchInput | B |
| Lớp dữ liệu | Dropdown | A/B |
| PCI min/max | Text number | B |
| Layer checkboxes | Checkbox | A |
| Basemap buttons | Button group + title/aria | C |
| Fit / Full | Button | C |
| Heatmap toggle | Button | B |
| Twin 3D | Nav link (no phase badge) | B |
| Mở vẽ | Nav Link | B |
| Pin theo mã TS | DivIcon `assetCode` | C |
| Click đoạn / pin / camera trên map | Popup + tab Thuộc tính · **cấm auto zoom** (`isolateSection` từ map) | C |
| Grid row đoạn | Vẫn isolate + Fit | D |
| `?cam=` deep-link | `setView` + slideout — **giữ** | C |
| Điểm đang chọn | HtmlComponent `detailHtml` / ReactNode | A props |

## 4. Prototype

- File: `ui/prototype/gis-map-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** clone full topnav/notif demo

## 5. Visual / map rules

- Primary teal `#0f766e` (demo parity)
- Live Leaflet only — cấm fake gradient map
- Default Fit overview zoom ≤13 — **chỉ** map-bar Fit / load
- Dock: map-host **flex fill** remaining (toolbar + filter + status + map-bar + grid) — **cấm** cap `min(42vh, 420px)`
- **Cấm** bottom isolate legend
- Attribution: **ẩn Leaflet** · chỉ `RMMS.vn`
- sat `maxNativeZoom: 17`

## 6. Handoff → SA

- APIs: layers · geojson/{layer} · heatmap/pci · health
- Seed stub acceptable P1
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
