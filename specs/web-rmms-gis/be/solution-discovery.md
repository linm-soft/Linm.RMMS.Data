# SA — Solution — web-rmms-gis

> Status: **confirmed** · autoApprove ON · task `task_ecf0a092` · 2026-09-25T17:35:00.000Z  
> **Cấm** ERP.* · **cấm** invent `api/v1/gis-map` · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** draw/CRUD/heatmap P1.

| | |
|--|--|
| Feature | `web-rmms-gis` |
| Title | Bản đồ tài sản — overlay TS/SC · corridor · GPS me-dot |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form · no draw/CRUD P1 |
| domain | **Gis** (`gis`) · cite **Asset** (focus GetById) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| nativeRouteCite | SCREENS `/gis` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-gis` → **Gis** / `gis` |
| Rationale | Map Live `gis/geojson|tiles|layers|basemap-config` thuộc domain Gis · focus pin = cite Asset `road-assets/{id}` — **không** tạo domain Map mới |
| Cite peers | Asset list (`/asset/list`) · Hub back · detail peer via popup props · focus từ list `?focus={id}` |
| API folder | **reuse** GisMapController + Mobile.Bff GisTiles→MapService · Asset GetById · **no new** controller/entity |
| **Cấm** | invent `gis-map` path · Route mobile-bff trên web-bff · ERP.* · Web BFF base từ Mobile MFE · draw/heatmap/Twin · pin từ `incident/incidents` · POST từ map P1 |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-gis` | Gis | `gis` · Live geojson/tiles/layers/basemap · cite Asset focus · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-gis` · **cấm** invent gis-map · **cấm** draw/CRUD P1 |

→ resolves **UNCLEAR-DOMAIN-MAP-GIS**.

## 2. FormMode ↔ API

Map **không** Modal/Slideout master form. Modes = RO map browse (session required) · local chrome (basemap/fit/legend) · GPS me-dot browser-only.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| GIS-00 chrome | page shell | — | — | phone 430 |
| GIS-01 navBack | Button/Nav | — | nav Hub | peer hub |
| GIS-02 title | Text RO | — | — | `gisMap.title` / useFormOptions |
| GIS-03 trailingList | Button/Nav | — | `/asset/list` | peer list |
| GIS-03b trailingLayers | Button | `GET gis/layers` | toast P1 · sheet P2 | **cấm** invent layer CRUD |
| GIS-04 search | Search | `gis/geojson/*?search=` | filter overlay | SEARCH-01 cite |
| GIS-05 mapHost | Map | tiles + overlays | — | clip MVT + geojson |
| GIS-06 basemap/fit | Chip/Button | `GET gis/basemap-config` (opt) · fit local | local | no server write |
| GIS-07 legend | Chip all/ts/sc/corridor | isolate client | — | load layers below |
| GIS-08 overlay.ts | MapLayer | `GET gis/geojson/all` | — | Live |
| GIS-08b overlay.sc | MapLayer | `GET gis/geojson/incidents` | — | SC-01 · **cấm** incident pin API |
| GIS-08c corridor | MapLayer | `GET gis/geojson/tuyen-duong?lod=corridor` | — | CORRIDOR cite |
| GIS-05b tiles | MapTiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` | — | MapService via Bff |
| GIS-09 gpsMe | MapMarker | browser Geolocation | — | deny → hide · **cấm** fake · **cấm** POST |
| focus | MapMarker | `GET asset/road-assets/{id}` | center Lat/Lng | `?focus=` · FOCUS-01 |
| popup | Popup | Feature props | nav detail peer | no invent popup API |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/gis/geojson/all[?search]` | Gis | overlay.ts · search | **Live** |
| GET | `mobile-bff/api/v1/gis/geojson/incidents[?search]` | Gis | overlay.sc | **Live** |
| GET | `mobile-bff/api/v1/gis/geojson/tuyen-duong?lod=corridor` | Gis | corridor | **Live** |
| GET | `mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Gis/MapService | basemap MVT | **Live** |
| GET | `mobile-bff/api/v1/gis/layers` | Gis | layers toast P1 | **Live** |
| GET | `mobile-bff/api/v1/gis/basemap-config` | Gis | basemap.cfg optional | **Live** |
| GET | `mobile-bff/api/v1/asset/road-assets/{id}` | Asset | focus center | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **POST/PUT/DELETE map:** none P1.
- Labels: `useFormOptions()` / LinmCopy `gisMap.*` · **cấm** hardcode VN.
- GPS: `navigator.geolocation` me-dot only · deny hide me · map vẫn mở.

## 3. BFF vs API

| Layer | Role for Map |
|-------|--------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `gis/*` · GisTiles→MapService · proxy `asset/road-assets/{id}` · auth rewrite |
| RMMS.Service.Api | existing GisMapController + Asset road-assets — **no new** Map controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · map trống vẫn mở — **cấm** mock SSOT · **cấm** `window.alert` · **cấm** invent `api/v1/gis-map`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Gis + Asset) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| GIS-00…09 | Map owns · phone 430 · Android icon/layout 1-1 · **cấm** sửa iOS/Android native |
| REMOVED | `me*` · feedback · cam-view · draw · heatmap · Twin · Field b–e |
| GPS | me-dot RO browser · no DB write |
| DES-GRID / LinErpListFilterBar | **N/A** phone Map |
| Route | `mfeStdRoute=/web-rmms-gis` · native cite `/gis` · shell alias `/gis` OK |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-GIS | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-STD-ROUTE | **resolved Design/SA** — STATUS `/web-rmms-gis` · alias `/gis` if shell |
| GAP-MOB-GIS-SEARCH-01 | **cite** gis-map CTX · Live `?search=` · no invent |
| GAP-MOB-GIS-LAYER-01 | **cite** · Live `GET gis/layers` toast P1 · sheet P2 |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | **cite** · Live `tuyen-duong?lod=corridor` |
| GAP-MOB-GIS-SC-01 | **cite** · Live `geojson/incidents` · **cấm** incident pin API |
| GAP-MOB-GIS-FOCUS-01 | **cite** · Live Asset GetById · `?focus=` |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: Map page · overlays TS/SC/corridor · tiles · search · legend · layers toast · focus · GPS me · popup→detail · no me · no draw |
| devSlash | `/agent-dev` |
| qa | Overlays empty/fail · GPS deny · focus · phone 430 · no web-bff · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T17:35:00.000Z`
