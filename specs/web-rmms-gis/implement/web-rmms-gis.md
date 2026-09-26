# Implement — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Map · Kind B / DES-GRID **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone 430 · no ERP Modal · no draw/CRUD P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| nativeAlias | `/gis` → STD (preserve `?focus=`) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis (+ Asset focus) · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · Live GET gis/* · tiles `GisTilesController` · **cấm** web-bff client base |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T17:05:00.000Z` |
| taskId | `task_1db39749` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view / draw / heatmap |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-gis` emitted) |
| BE `dotnet build` RMMS.Service.Bff | **PASS** (0 warning / 0 error) |
| Mobile.Bff restore | NU1101 private NuGet (env) · source `GisTilesController` + catch-all already Live · **no code change** |
| migration / entity / invent write | **none** (SA) |
| Step 4b | **skip** · Live reuse · DOMAIN-MAP `web-rmms-gis` exists |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone Map · DES-GRID N/A) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| GIS-00 | frame | phone max-width 430 |
| GIS-01 | navBack | → Hub `/web-rmms-asset-hub` |
| GIS-02 | title | gisMap.title · useFormOptions |
| GIS-03 | trailingList | → `/web-rmms-asset-list` |
| GIS-04 | trailingLayers | GET gis/layers · toast P1 |
| GIS-05 | search | geojson `?search=` debounce |
| GIS-06 | mapHost | MapLibre CDN · clip MVT `gis/tiles/basemap` · **cấm** OSM.org |
| GIS-07 | basemap/fit | Tiêu chuẩn / Vệ tinh local paint · Fit bounds |
| GIS-08 | legend | all / ts / sc / corridor isolate |
| GIS-09 | gps · focus · popup | me-dot RO · `?focus=` GetById · popup→detail |
| guest | auth gate | → `/login` |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/gis/geojson/all?search&take` | overlay TS |
| `GET …/gis/geojson/incidents?search&take` | overlay SC (GAP-MOB-GIS-SC-01) |
| `GET …/gis/geojson/tuyen-duong?lod=corridor` | corridor (GAP-CORRIDOR) |
| `GET …/gis/tiles/basemap/{z}/{x}/{y}.pbf` | clip MVT basemap |
| `GET …/gis/layers` | layers toast P1 (GAP-LAYER-01) |
| `GET …/gis/basemap-config` | optional (endpoint ready · chips local P1) |
| `GET …/asset/road-assets/{id}` | focus (GAP-FOCUS-01) |
| GPS | `navigator.geolocation` me-dot · deny hide · **cấm** fake |

## Files (FE)

- `src/pages/WebRmmsGis/**` — layout · GisMapPage · clipBasemapStyle · loadMapLibreCdn · paths · lookupStatic · styles · aliasRedirects
- `src/services/gis/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-gis` · alias `/gis`
- `src/pages/WebRmmsAssetHub/paths.ts` · gis → STD
- `src/pages/WebRmmsAssetList/paths.ts` · gisFocus → STD `?focus=`
- `src/dev/devRoutes.ts` · GIS map group
- `src/declarations.d.ts` · maplibregl CDN types

## BE Step 4b

- DOMAIN-MAP `web-rmms-gis` → Gis (+ Asset focus) · CLOSED
- **no** new API / entity / migration / invent `gis-map`
- Web `GisBffController` stays `web-bff` cite only
- Mobile tiles: `Linm.RMMS.Mobile.Bff` `GisTilesController` · geojson via `MobileApiProxyController` catch-all
- **cấm** `[Route("mobile-bff/…")]` trên Web BFF

## Tasks

| id | status |
|----|--------|
| T-01 · T-02 · T-03 · T-04 · T-05 | **done** |
| T-06 | pending · queued `/agent-qa*` |
| T-07 | pending · `/agent-review` |

## Debt / notes

- Phone clip style lean (no abroad GeoJSON) · full desktop `vnClipBasemap` cite peer Gis MFE
- Layers sheet P2 deferred · toast P1 only
- Search: Live `?search=` on geojson (GAP-MOB-GIS-SEARCH-01 · no invent)
- GPS deny toast once per watch error · map shell stays open
- e2e / `yarn start:std` **owned by QA**

## Handoff

- compact: `specs/web-rmms-gis/handoff/dev-compact.md`
- next: `/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `updatedAt=2026-09-25T17:05:00.000Z`
