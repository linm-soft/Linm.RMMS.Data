# PO — gis-draw-live (Vẽ tài sản live · Leaflet · Kind F rút gọn)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| changeScope | `edit_page` |
| packKind | `map` |
| Feature Kind | **F** — GIS live draw shell (sidebar · Leaflet.draw · props) · **không** header/toolbar seed |
| requestSource | run packet `task_6e79dde5` · `/agent-qldb-workflow` · Autopilot |
| status | `confirmed` (autopilot) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T01:18:00.000Z` |

## 1. Goal

Chỉnh MFE **Bản đồ live** `/gis/draw` từ mock localStorage → **live Leaflet.draw Kind F rút gọn** parity demo: nền OSM/Esri/sat · tree lớp · Point/Line/Polygon · panel thuộc tính · **POST/PUT/DELETE `api/v1/gis/drawings`**. Align BE trong `Linm.RMMS.WebService` domain Gis (**cấm ERP.Master**).

Khác sibling `gis-draw-google`: Live = shell nhẹ / nhanh thử vẽ; Google = full shell parity GOVOne.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full Kind F live (`gis-draw-live.html`) | Giữ SSOT UX |
| MFE `/gis/draw` | Leaflet.draw + localStorage mock · QL.22 seed | + BFF drawings · OMS chrome · Fit/isolate · OSM default |
| API client | Không wire drawings | + `basemap-config?purpose=live` · `layers?purpose=live` · `drawings` |
| BE | drawings/basemap đã có (google) | + purpose=`live` alias · live basemap default OSM + Esri Streets |
| Persist | localStorage only | API store + local fallback |

## 3. Personas / DoD

- Persona: Cán bộ GIS · tuần đường
- DoD P1:
  1. Live Leaflet map (không screenshot) — OMS R1
  2. Default **OSM** + Esri Streets / sat trên map-bar — R2/R5b
  3. Chrome `map-host → map-bar` (không legend isolate bottom) · dock map **flex fill** remaining — R4/R4b
  4. Fit overview **chỉ** map-bar Fit (`overviewFitMaxZoom` ≤13) — R11
  5. Chọn loại tài sản trước khi vẽ · Point / Line / Polygon
  6. Panel thuộc tính · Lưu draft → `POST /api/v1/gis/drawings` (fallback local)
  7. Layer toggle sidebar — **cấm** isolate legend bottom
  8. LineString corridor/track panes · OSRM khi vẽ/hiện tuyến — R7b/R8
  9. FE `yarn typecheck` + `yarn build` PASS · BE `dotnet build` PASS
  10. **Lớp lazy:** checkbox default off · count `summary-by-type` · tick mới fetch · **cấm** load 394k lúc vào trang
  11. Click tài sản trên map: popup only · **cấm** `setView` auto zoom / `fitBounds` ô cụm

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis-draw-live.md` |
| Demo | `Demo/src/demo/gis/gis-draw-live.html` |
| MFE | `Linm.Web.RMMS.Gis` · route `/gis/draw` |
| BE | `Linm.RMMS.WebService` · `api/v1/gis` |
| Sibling | `gis-draw-google` — cùng contract drawings |

## 5. Out of scope

- Google Maps JS API / Google proxy default (thuộc `gis-draw-google`)
- Snap Google Roads API
- Multi-user lock
- PostGIS persist / Martin tiles (in-memory P1)
- Commit drawing → `POST /api/v1/assets/{type}` (DEFER)
- Cesium Twin (not this page)
- Full GOVOne chrome / mock GIS tools (thuộc sibling Google)

## 6. Handoff → Design

- Kind F zones A/C/D (sidebar · map chrome · props/results) — **rút gọn** · **không** header Dev/GIS · **không** toolbar B · **không** isolate legend
- reviewUrl bắt buộc
- Skills: `/agent-dev-oms-map` · Step 4d/4m · không `/erp-feature`

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
