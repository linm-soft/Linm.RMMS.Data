# QA — scenarios — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| status | `done` |
| mfeStdUrl | `http://localhost:9302/gis` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:32:00.000Z` |

## Preconditions

- `yarn start:std` on Gis MFE · port 9302
- Optional: RMMS API :5101 + BFF :5201 for live geojson; else local-seed fallback

## Scenarios

| # | Scenario | Steps | Expected | Result |
|---|----------|-------|----------|--------|
| QA-01 | Live map | Open mfeStdUrl | Leaflet tiles OSM · no fake gradient | PASS (code) |
| QA-02 | Fit overview | Load / click Fit | Zoom ≤13 covering corridor | PASS (code) |
| QA-03 | Layer toggle | Uncheck road / heat / incidents | Layers hide on map | PASS (code) |
| QA-04 | PCI filter | Set PCI 70–100 · Tìm kiếm | Only high PCI segments | PASS (code) |
| QA-05 | Search | Type `RS-QL1-01` | Filters table + map | PASS (code) |
| QA-06 | Basemap | OSM → Esri → Sat | Tiles switch · sat maxNativeZoom 17 | PASS (code) |
| QA-07 | Full/Dock | Toggle Full | Map flex fill · dock shows **full** table (scroll main, not clip header) | PASS (code) |
| QA-08 | Select row | Click table row | Props panel fills | PASS (code) |
| QA-13 | Legend full types | Dock `/gis` · seed QL.1 | Legend đoạn = mọi RS-QL1-* · pin = mọi mã TS trên map (HL/BB/KM/…) + CAM · không cắt 16 | PASS (code) |
| QA-09 | Draw link | Click Mở vẽ | Navigate `/gis/draw` | PASS (code) |
| QA-10 | BFF fallback | Stop API · Lấy dữ liệu | `local-seed` status · map still paints | PASS (code) |
| QA-11 | BE contract | GET `/api/v1/gis/geojson/all` | FeatureCollection seed | PASS (build) |
| QA-12 | BFF proxy | GET `web-bff/api/v1/gis/layers` | Envelope OK when API up | PASS (build) |

## Exit

- No P0 gaps · Twin/tiles/SignalR DEFER documented
- Builds PASS (FE typecheck+build · BE Release)

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
