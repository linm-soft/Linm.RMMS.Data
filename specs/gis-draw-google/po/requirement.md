# PO — gis-draw-google (Vẽ tài sản trên Google Map · Kind F)

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| changeScope | `edit_page` |
| packKind | `map` |
| Feature Kind | **F** — GIS draw shell (sidebar · toolbar · Leaflet.draw · props) |
| requestSource | run packet `task_e8a0c8a8` · `/agent-qldb-workflow` · Autopilot |
| status | `confirmed` (autopilot) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:05:00.000Z` |

## 1. Goal

Chỉnh MFE **Vẽ tài sản** `/gis/draw-google` từ mock localStorage → **live Leaflet.draw Kind F** parity demo: nền Google proxy + OSM/Esri/sat · tree lớp · Point/Line/Polygon · panel thuộc tính · **POST/PUT/DELETE `api/v1/gis/drawings`**. Align BE trong `Linm.RMMS.WebService` domain Gis (**cấm ERP.Master**).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full Kind F live (`gis-draw-google.html`) | Giữ SSOT UX |
| MFE `/gis/draw-google` | Leaflet.draw + localStorage mock | + BFF drawings · OMS chrome · Fit/isolate |
| API client | CRUD `/gis` stub + map geojson | + `basemap-config` · `layers?purpose=draw` · `drawings` |
| BE | layers/geojson/heatmap only | + basemap-config · draw layers · drawings in-memory |
| Persist | localStorage only | API store + local fallback |

## 3. Personas / DoD

- Persona: Cán bộ GIS · tuần đường · Ban QLDA
- DoD P1:
  1. Live Leaflet map (không screenshot) — OMS R1
  2. Default Google proxy (parity feature) + OSM VN / Esri / sat trên map-bar — R2/R5b
  3. Full-page + dock; chrome `map-host → map-bar → legend` — R4/R4b/R4c
  4. Fit overview on load (`overviewFitMaxZoom` ≤13) — R11
  5. Chọn loại tài sản trước khi vẽ · Point / Line / Polygon
  6. Panel thuộc tính · Lưu draft → `POST /api/v1/gis/drawings` (fallback local)
  7. Layer toggle + isolate legend/line + Fit focus — R7/R7b/R7c
  8. Search header «Nhập thông tin đối tượng»
  9. LineString corridor/track panes · OSRM khi vẽ/hiện tuyến — R7b/R8
  10. FE `yarn typecheck` + `yarn build` PASS · BE `dotnet build` PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis-draw-google.md` |
| Control-map | `docs/context/features/gis-draw-google-control-map.md` |
| Demo | `Demo/src/demo/gis/gis-draw-google.html` |
| MFE | `Linm.Web.RMMS.Gis` · route `/gis/draw-google` |
| BE | `Linm.RMMS.WebService` · `api/v1/gis` |

## 5. Out of scope

- Google Maps JS API runtime (P2 — GAP-F-GDG-01; P1 = Leaflet + Google-style tiles)
- Snap Google Roads API (GAP-F-GDG-02)
- Multi-user lock (GAP-F-GDG-04)
- PostGIS persist / Martin tiles (in-memory P1)
- Commit drawing → `POST /api/v1/assets/{type}` (optional 2-step — DEFER)
- Cesium Twin (not this page)

## 6. Handoff → Design

- Kind F zones A–D (sidebar · toolbar · map chrome · props/results)
- reviewUrl bắt buộc
- Skills: `/agent-dev-oms-map` · Step 4d/4m · không `/erp-feature`

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
