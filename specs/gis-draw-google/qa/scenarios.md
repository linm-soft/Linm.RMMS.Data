# QA — scenarios — gis-draw-google

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| status | `done` |
| mfeStdUrl | `http://localhost:9302/gis/draw-google` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:32:00.000Z` |

## Preconditions

- `yarn start:std` on Gis MFE · port 9302
- Optional: RMMS API :5101 + BFF :5201 for live drawings; else local-seed fallback

## Scenarios

| # | Scenario | Steps | Expected | Result |
|---|----------|-------|----------|--------|
| QA-01 | Live map | Open mfeStdUrl | Leaflet tiles Google proxy · no fake gradient | PASS (code) |
| QA-02 | Fit overview | Load / click Fit | Zoom ≤13 covering QL.22 corridor | PASS (code) |
| QA-03 | Layer toggle | Uncheck lớp tài sản | Features hide | PASS (code) |
| QA-04 | Draw Point/Line/Polygon | Leaflet.draw + chọn target | Draft → tab Thuộc tính | PASS (code) |
| QA-05 | Save drawing | Nhập mã/tên · Lưu | POST `/api/v1/gis/drawings` hoặc local fallback | PASS (code) |
| QA-06 | Search | Header «Nhập thông tin đối tượng» | Results tab + filter | PASS (code) |
| QA-07 | Basemap | Google → OSM → Sat | Tiles switch · sat maxNativeZoom 17 | PASS (code) |
| QA-08 | Full/Dock | Toggle Full | Map flex fill · dock caps host | PASS (code) |
| QA-09 | Isolate + Fit | Click chú giải / kết quả | Isolate layer/feature · Fit focus | PASS (code) |
| QA-10 | BFF fallback | Stop API · Lưu | `local-seed` · vẫn persist localStorage | PASS (code) |
| QA-11 | BE contract | GET `/api/v1/gis/basemap-config` · POST drawings | Envelope OK | PASS (build) |
| QA-12 | BFF proxy | GET `web-bff/api/v1/gis/layers?purpose=draw` | Catalog asset layers | PASS (build) |

## Exit

- No P0 gaps · Google JS / PostGIS / Roads snap DEFER
- Builds PASS (FE typecheck+build · BE Release)

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
