# PO — gis (Bản đồ giám sát 2D · Kind F)

| Field | Value |
|-------|-------|
| feature | `gis` |
| changeScope | `edit_page` |
| packKind | `map` |
| Feature Kind | **F** — full map shell (sidebar · toolbar · Leaflet · legend · props) |
| requestSource | run packet `task_183d3ddf` · `/agent-qldb-workflow` · Autopilot · retryFrom=`data_analy` |
| status | `confirmed` (autopilot) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:22:00.000Z` |

## 1. Goal

Chỉnh MFE **GIS bản đồ 2D** từ mock watermark → **live Leaflet Kind F** parity demo Signed: layer toggle · legend PCI · heatmap · fit overview · basemap OSM/Esri/sat · props panel · link Twin P2 + draw. Align BE `api/v1/gis/*` trong `Linm.RMMS.WebService` domain Gis (**cấm ERP.Master**).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full Kind F live (`gis.html`) | Giữ SSOT UX |
| MFE `/gis` | Mock panel + fake map | Live Leaflet · sidebar tabs · toolbar · map-bar · results · props |
| Draw routes | `/gis/draw` · `/gis/draw-google` | Giữ — link từ toolbar |
| Form scaffold | `/gis/new` stub | Out of scope P1 map pack |
| API client | CRUD `/gis` stub | `geojson` · `heatmap/pci` · `layers` · health (+ local seed fallback) |
| BE | health only | GeoJSON + heatmap + layers seed stub |

## 3. Personas / DoD

- Persona: Điều hành · tuần đường · BA
- DoD P1:
  1. Live Leaflet map (không screenshot/gradient) — OMS R1
  2. Default basemap OSM tiếng Việt + Esri + sat (`maxNativeZoom: 17`) — R2/R5b
  3. Full-page map mode + dock; chrome `map-host → map-bar → legend` — R4/R4b/R4c
  4. Fit overview on load (`overviewFitMaxZoom` ≤13) — R11
  5. Layer toggle: road / PCI heatmap / incidents
  6. Legend PCI (tốt / TB / kém)
  7. Search + PCI min/max filter work
  8. Toolbar: Lấy dữ liệu · Làm mới overlay · Heatmap · Fit · Twin badge P2 · Mở vẽ
  9. Results table + props panel on select
  10. FE `yarn build` + `typecheck` PASS · BE `dotnet build` PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis.md` |
| Demo | `Demo/src/demo/gis/gis.html` (+ `gis-data.js` · `gis-app.js`) |
| controlHint | `specs/_data-analy/features/gis-control-hint.md` |
| MFE | `Linm.Web.RMMS.Gis` · route `/gis` |
| BE | `Linm.RMMS.WebService` · `api/v1/gis` |

## 5. Out of scope

- Real Martin/pg_tileserv vector tiles (stub GeoJSON OK)
- Cesium Digital Twin runtime in `/gis` (badge + link only)
- Google draw editor rewrite (existing `/gis/draw*`)
- SignalR production hub (overlay status stub)

## 6. Handoff → Design

- Kind F zones (content-only prototype A–D map chrome)
- reviewUrl bắt buộc
- controlHint → Design Control map
- Skills: `/agent-dev-oms-map` · không `/erp-feature`

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
