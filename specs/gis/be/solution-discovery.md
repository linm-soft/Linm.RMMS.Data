# SA — solution-discovery — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `Gis` · kebab `gis` (DOMAIN-MAP) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:26:00.000Z` |

## 0. Correction

Previous attempt targeted ERP.Master — **discarded**.  
Implement only under `Linm.RMMS.WebService` / `Domains/Gis` · `api/domains/gis` · `bff/domains/gis`.

## 1. Decision

| Topic | Choice |
|-------|--------|
| Host | `Linm.RMMS.WebService` — domain Gis |
| Persist P1 | **In-memory seed** (QL.1 pilot segments + incidents) — PostGIS/tiles DEFER |
| API | `GET api/v1/gis/layers` · `GET api/v1/gis/geojson/{layer}` · `GET api/v1/gis/heatmap/pci` · health |
| BFF | `web-bff/api/v1/gis/**` → loopback |
| Collision | Không ERP · không Domains/Master · không `api/v1/rmms/*` |
| Tiles PBF | DEFER (GAP) — FE dùng GeoJSON |
| SignalR GisHub | DEFER — overlay status stub on FE |

## 2. API catalog

### API-01 Health

`GET /api/v1/gis/health` — existing

### API-02 Layers

`GET /api/v1/gis/layers` → `[{ value, label, enabled }]`

### API-03 GeoJSON

`GET /api/v1/gis/geojson/{layer}?bbox=&pciMin=&pciMax=&search=`  
layers: `road_sections` · `incidents` · `all`  
Response: GeoJSON FeatureCollection

### API-04 Heatmap PCI

`GET /api/v1/gis/heatmap/pci?bbox=&pciMin=&pciMax=`  
→ `{ type, features: [{ id, lat, lng, pci, radius }] }` or FeatureCollection Point

## 3. Files (RMMS layout)

| Layer | Path |
|-------|------|
| DTOs | `api/domains/gis/LINM.RMMS.Gis.Models/DTOs/GisMapDtos.cs` |
| Seed | `api/src/.../Domains/Gis/Services/GisMapSeed.cs` |
| Service | extend `IGisService` / `GisService` |
| Controller | `Domains/Gis/Controllers/GisMapController.cs` |
| BFF | extend `GisBffController` |
| DI | `GisDomainRegistration` (same scoped service) |

## 4. FE contract

MFE `Linm.Web.RMMS.Gis` · client `/gis/layers` · `/gis/geojson/{layer}` · `/gis/heatmap/pci`  
Fallback: local seed module nếu BFF 503.

**Shared map REF** (config only — promote Common sau): Demo `/demo/p/gis-draw-live` · MFE `src/shared/map`  
`MapPointConfig`: `assetCode` · `code` · `lat`/`lng` · `detailHtml` | React `detailContent`.

## 5. Gaps / DEFER

| ID | Note |
|----|------|
| GAP-F-GIS-01 | Cesium Twin — link only |
| GAP-F-GIS-03b | Vector tiles PBF / PostGIS — DEFER |
| GAP-F-GIS-04 | SignalR GisHub — DEFER |

## 6. Handoff → TL

T-BE map APIs · T-BFF · T-UI-MAP Kind F · T-FE-CLIENT · OMS map skills · no migration P1

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
