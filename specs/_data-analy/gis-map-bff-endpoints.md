# BFF endpoints — gis-map (mobile map · Bản đồ tài sản)

| | |
|---|---|
| feature | `gis-map` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · **Gis** (+ Asset focus) |
| source | CTX `gis-map.md` · `gis.md` · `GisMapController` · DOMAIN-MAP Gis · demo `#sc-gis-map` · `map-oms.js` |
| **cấm** | invent `api/v1/gis-map` · app `:5101` · ERP.* · DbContext trên Mobile.Bff · Kind F draw/heatmap P1 |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Gis · Asset | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/gis` | **Không** — mobile dùng mobile-bff |
| Dedicated GisMapMobileController | **không** | **cấm invent** |

## Table — `#sc-gis-map` · `DES-MOB-GIS`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Overlay TS / all pins | GET | `gis/geojson/all` | proxy | `GisMapController.GetGeoJson` | `api/v1/gis/geojson/{layer}` · bbox/route/search/skip/take | isolate `ts` client |
| Overlay SC | GET | `gis/geojson/incidents` | proxy | same | layer `incidents` | GAP-SC-01 · **không** `incident/incidents` pin |
| Corridor | GET | `gis/geojson/tuyen-duong` | proxy | `GetCorridorsAsync` | layer `tuyen-duong` / `lod=corridor` | isolate corridor |
| Type filter (opt) | GET | `gis/geojson/{layerCode}` | proxy | ApplyLayerTypes | `cong` · `cot-km` · … | P2 fine filter |
| Layer catalog | GET | `gis/layers` | proxy | `GetLayers` | toast Lớp P1 · sheet P2 | |
| Basemap config | GET | `gis/basemap-config` | proxy | `GetBasemapConfig` | optional · OMS local P1 OK | |
| Focus từ detail | GET | `asset/road-assets/{id}` | proxy | `RoadAssetsController.GetById` | center Lat/Lng | FOCUS-01 |
| Nav back hub | — | — | — | local | `go('asset-hub')` | **không** API |
| Nav list (Android) | — | — | — | local | `go('asset-list')` | **không** API |
| Basemap / fit / legend | — | — | — | local OMS | chips | **không** API |
| Search overlay | GET | `gis/geojson/*?search=` | proxy | query `search` | iOS · local filter OK | SEARCH-01 |

## Query (geojson)

`bbox` · `pciMin` · `pciMax` · `search` · `route` · `lod` · `skip` · `take`

## DTO bind (live)

| Wire | UI |
|------|-----|
| GeoJSON `Feature.geometry` Point | pin TS/SC |
| `properties.code` / `id` | popup title |
| `properties.name` / `title` | popup sub |
| `properties.route` · km | popup lý trình |
| `properties.layer` | isolate ts vs sc |
| LineString corridor | hành lang polyline |
| `RoadAssetDto.Lat`/`Lng` | focus center từ detail |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `gis-map`.

## Có trên domain — **không** thuộc slug `gis-map` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `gis/clusters` | zoom cluster — **P2** mobile |
| GET | `gis/heatmap/pci` | web Kind F — **OUT** |
| GET | `gis/summary-by-type` | dashboard — **OUT** |
| CRUD | `gis/drawings*` | owner web `gis-draw-*` — **OUT** |
| GET | `incident/incidents` | list owner · **không** pin (no Lat/Lng) |
| GET | `asset/road-assets` | list owner `asset` — **OUT** map list |
| Web | `web-bff/api/v1/gis/**` | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `GisMapController` | `[Route("api/v1/gis")]` geojson · layers · basemap · clusters · heatmap |
| Mobile.Bff `gis/*` | proxy catch-all `MobileApiProxyController` |
| DOMAIN-MAP | Gis · Asset focus · **cấm** ERP.* |
| `api/v1/gis-map` | **không** — **cấm invent** |
| Step 4b | **N/A** data_analy — GIS GET **DONE** · **cấm** migration role này |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET gis-map` / mobile-only GeoJSON fork  
- Ship overlay từ `GIS_ASSETS` hardcode khi BFF available (`GAP-MOB-REAL-02`)  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-bff-20260831 |
| bffContentHash | sha256:gis-geojson-proxy-passthrough-20260831 |
| taskId | `task_23d7eba0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
