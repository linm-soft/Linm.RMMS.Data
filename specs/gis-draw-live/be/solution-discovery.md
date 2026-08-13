# SA — solution-discovery — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `Gis` · kebab `gis` (DOMAIN-MAP) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T22:15:00.000Z` |

## 0. Guard

Implement only under `Linm.RMMS.WebService` / `Domains/Gis` · `api/domains/gis` · `bff/domains/gis`.  
**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## 1. Decision

| Topic | Choice |
|-------|--------|
| Host | `Linm.RMMS.WebService` — domain Gis |
| Persist P1 | **Reuse** in-memory `GisDrawingStore` (cùng `gis-draw-google`) — PostGIS DEFER |
| Basemap | `GET basemap-config?purpose=live` → default **OSM** + Esri Streets + sat |
| Layers | `GET layers?purpose=live` = alias `purpose=draw` (catalog tài sản) |
| Drawings | Cùng CRUD `api/v1/gis/drawings*` — không tạo endpoint mới |
| GeoJSON | Existing `geojson/{layer}` serves draw layer codes |
| BFF | `web-bff/api/v1/gis/**` → loopback · forward `purpose` |
| Migration | **Không** P1 (no EF table) |
| Collision | Không ERP · không Master |

## 2. API catalog

### API-01 Basemap config (extend)

`GET /api/v1/gis/basemap-config` — default Google proxy (sibling)  
`GET /api/v1/gis/basemap-config?purpose=live` — default OSM + Esri Streets + sat

### API-02 Layers (extend)

`GET /api/v1/gis/layers?purpose=live` — same catalog as `purpose=draw`

### API-03 Drawings (reuse)

| Method | Path | Note |
|--------|------|------|
| GET | `/api/v1/gis/drawings?layerCode=&search=` | List |
| GET | `/api/v1/gis/drawings/{id}` | Detail |
| POST | `/api/v1/gis/drawings` | Save draft GeoJSON |
| PUT | `/api/v1/gis/drawings/{id}` | Update |
| DELETE | `/api/v1/gis/drawings/{id}` | Delete |

Request (POST/PUT): cùng contract sibling google.

### API-04 GeoJSON (existing)

`GET /api/v1/gis/geojson/{layer}` — draw codes / `drawings` từ store.

## 3. Files (RMMS layout)

| Layer | Path |
|-------|------|
| Store | extend `GisDrawingStore` — `LiveBasemapConfig` |
| Service | extend `IGisService` / `GisService` — purpose live |
| Controller | `GisMapController` — `basemap-config?purpose=` |
| BFF | `GisBffController` — forward query |
| DOMAIN-MAP | add slug `gis-draw-live` → Gis |

## 4. FE contract

MFE `Linm.Web.RMMS.Gis` · `/gis/draw`  
Client: `/gis/basemap-config?purpose=live` · `/gis/layers?purpose=live` · `/gis/drawings`  
Fallback: `gisLiveStore` localStorage + Cot_km seed nếu BFF 503.

## 5. Gaps / DEFER

| ID | Note |
|----|------|
| GAP-F-GDL-01 | PostGIS persist — DEFER |
| GAP-F-GDL-02 | Multi-user lock — DEFER |
| GAP-F-GDL-03 | Commit drawing → Asset — DEFER |
| GAP-F-GDL-04 | JWT Authorize — TODO platform auth |

## 6. Handoff → TL

T-BE purpose=live + live basemap · T-BFF query · T-UI-MAP Kind F OMS rút gọn · T-FE-CLIENT · no migration P1

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
