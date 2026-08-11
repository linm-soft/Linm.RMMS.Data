# Data-analy — controlHint — gis (Kind F map)

| Field | Value |
|-------|-------|
| feature | `gis` |
| packKind | `map` |
| mode | `scan_workflow` (no Excel import) |
| status | `confirmed` (autopilot) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:20:00.000Z` |

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis.md` |
| Demo | `Demo/src/demo/gis/gis.html` + `js/gis-data.js` + `js/gis-app.js` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/gis-control-map.md` |

## Control hint cluster (filter / props)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| gMapInputTextSearch | Nhập thông tin đối tượng | `SearchInput` | text | Toolbar search |
| ddlLopDuLieu | Lớp dữ liệu | `Dropdown` | enum | road_sections · pci_heatmap · incidents · all |
| pciMin | PCI từ | `Text` (number) | number | 0–100 |
| pciMax | PCI đến | `Text` (number) | number | 0–100 |
| bboxReadout | Viewport bbox | `Text` | readonly | map moveend |
| heToaDo | Hệ tọa độ | `Text` | readonly | EPSG:4326 |
| overlayStatus | Trạng thái overlay | `Text` | readonly | SignalR stub |
| twinAssetId | Tài sản Twin (P2) | `Text` | optional | badge P2 only |

## Layer toggles (sidebar)

| key | controlHint | DoD |
|-----|-------------|-----|
| road_sections | Checkbox | ON default |
| pci_heatmap | Checkbox | toggle heatmap circles |
| incidents | Checkbox | pin overlay |
| 3d_tiles | Checkbox disabled + badge P2 | link Twin |

## Lookup APIs (SA)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| layers | `GET /api/v1/gis/layers` | Dropdown ddlLopDuLieu |
| geojson | `GET /api/v1/gis/geojson/{layer}?bbox=&pciMin=&pciMax=` | map render |
| heatmap | `GET /api/v1/gis/heatmap/pci?bbox=` | heatmap toggle |
| health | `GET /api/v1/gis/health` | overlay status |

## Handoff

→ PO: Kind F map DoD · DEM inventory from demo  
→ Design: zones sidebar · toolbar · map-host/bar · results · props  
→ SA: Gis domain APIs above (seed stub OK; PostGIS tiles DEFER)

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
