# SA — solution-discovery — gis-draw-google

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `Gis` · kebab `gis` (DOMAIN-MAP) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:05:00.000Z` |

## 0. Guard

Implement only under `Linm.RMMS.WebService` / `Domains/Gis` · `api/domains/gis` · `bff/domains/gis`.  
**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## 1. Decision

| Topic | Choice |
|-------|--------|
| Host | `Linm.RMMS.WebService` — domain Gis |
| Persist P1 | **In-memory** `GisDrawingStore` (singleton) — PostGIS DEFER |
| Basemap | Config DTO (tile URLs) — **không** trả Google JS key ra FE |
| Layers | `GET layers?purpose=draw` = catalog tài sản (code · geomType · style) |
| Drawings | POST/PUT/DELETE + GET list/by id |
| GeoJSON | Existing `geojson/{layer}` also serves draw layer codes from store |
| BFF | `web-bff/api/v1/gis/**` → loopback |
| Migration | **Không** P1 (no EF table) |
| Collision | Không ERP · không Master |

## 2. API catalog

### API-01 Basemap config

`GET /api/v1/gis/basemap-config`  
→ `{ provider, defaultBasemap, options: [{ value, label, tileUrl, attribution, maxZoom, maxNativeZoom, isDefault }] }`

### API-02 Layers (extend)

`GET /api/v1/gis/layers` — monitor (existing)  
`GET /api/v1/gis/layers?purpose=draw` — asset draw catalog

### API-03 Drawings

| Method | Path | Note |
|--------|------|------|
| GET | `/api/v1/gis/drawings?layerCode=&search=` | List |
| GET | `/api/v1/gis/drawings/{id}` | Detail |
| POST | `/api/v1/gis/drawings` | Save draft GeoJSON |
| PUT | `/api/v1/gis/drawings/{id}` | Update geom/props |
| DELETE | `/api/v1/gis/drawings/{id}` | Delete |

Request (POST/PUT):

```json
{
  "layerCode": "tuyen-duong",
  "geomType": "LineString",
  "geometry": { "type": "LineString", "coordinates": [[105.68, 18.67], [105.72, 18.71]] },
  "properties": { "code": "TD-NA-012", "name": "Tuyến …", "status": "draft", "notes": "" },
  "srid": 4326
}
```

### API-04 GeoJSON (existing + draw)

`GET /api/v1/gis/geojson/{layer}` — if `{layer}` is draw code or `drawings`, return FeatureCollection from store.

## 3. Files (RMMS layout)

| Layer | Path |
|-------|------|
| DTOs | `api/domains/gis/LINM.RMMS.Gis.Models/DTOs/GisDrawingDtos.cs` (+ extend `GisMapDtos`) |
| Store | `Domains/Gis/Services/GisDrawingStore.cs` |
| Service | extend `IGisService` / `GisService` |
| Controller | extend `GisMapController` |
| BFF | extend `GisBffController` |
| DI | `GisDomainRegistration` — singleton store |

## 4. FE contract

MFE `Linm.Web.RMMS.Gis` · `/gis/draw-google`  
Client: `/gis/basemap-config` · `/gis/layers?purpose=draw` · `/gis/drawings`  
Fallback: `gisLiveStore` localStorage + Cot_km seed nếu BFF 503.

## 5. Gaps / DEFER

| ID | Note |
|----|------|
| GAP-F-GDG-01 | Google JS runtime — Leaflet proxy P1 |
| GAP-F-GDG-02 | Snap Roads API — DEFER |
| GAP-F-GDG-04 | Multi-user lock — DEFER |
| GAP-F-GIS-03b | PostGIS persist — DEFER |

## 6. Handoff → TL

T-BE drawings+basemap · T-BFF · T-UI-MAP Kind F OMS · T-FE-CLIENT · no migration P1

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
