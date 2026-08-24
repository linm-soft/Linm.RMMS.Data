# Design — gis (Kind F map)

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
| updatedAt | `2026-08-08T16:24:00.000Z` |

## 1. Context & Demo

- Context: `docs/context/features/gis.md`
- Demo SSOT: `Demo/src/demo/gis/gis.html`
- controlHint: `specs/_data-analy/features/gis-control-hint.md`
- OMS: `/agent-dev-oms-map` R1–R11

## 2. Screens / zones (content-only · skip chrome demo · **cấm badge P1/P2**)

| Zone | Name | Content |
|------|------|---------|
| A | Sidebar | Tabs: Lớp · Chú giải · Thuộc tính · Kết quả |
| B | Toolbar + filter | Fetch · overlay · heatmap · fit · twin · draw · search · PCI min/max · **toolbar FA+perm** (parity list) |
| C | Map chrome | `map-host` (Leaflet) → `map-bar` (OSM/Esri/sat · Fit · full/dock) → legend PCI |
| D | Results + props | Section + pin + camera **full table** (cấm `max-height` cắt hàng) · **MapPointDetail** · legend **đủ** loại TS / đoạn đang vẽ (cấm cap 16) |

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
| Điểm đang chọn | HtmlComponent `detailHtml` / ReactNode | A props |

## 4. Prototype

- File: `ui/prototype/gis-map-prototype.html`
- reviewUrl: above (browser-openable)
- Content-only Kind F — **không** clone full topnav/notif demo

## 5. Visual / map rules

- Primary teal `#0f766e` (demo parity)
- Live Leaflet only — cấm fake gradient map
- Default Fit overview zoom ≤13
- sat `maxNativeZoom: 17`

## 6. Handoff → SA

- APIs: layers · geojson/{layer} · heatmap/pci · health
- Seed stub acceptable P1
- Domain Gis only

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
