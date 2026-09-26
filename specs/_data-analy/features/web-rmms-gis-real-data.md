# Data-analy — real-data bind — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| title | Bản đồ tài sản — overlay TS/SC · corridor · GPS me-dot |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5161ca5d` |
| prefix API | Gis · Asset (focus) |
| prefix BFF web (cite) | `web-bff/api/v1/gis/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| domain | **Gis** (+ cite Asset focus) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T16:50:00.000Z` |
| demo | **N/A** · **cấm** demo-json / GisMapDemoOverlay / in-app mock SSOT |

## § Scope Map

| In | Out |
|----|-----|
| GIS-00…09 · tiles · geojson all/incidents/tuyen-duong · layers cite · basemap cfg · focus GetById · GPS me-dot RO | `me*` · draw CRUD · heatmap PCI · Twin · clusters P2 UI · Field 2-door · journal-lines · findings · session close · frequency (b–e) |
| API **Live** `gis/*` + `asset/road-assets/{id}` via Mobile.Bff | API **Mới** / invent `api/v1/gis-map` · Route mobile-bff trên WebService web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-gis.md` | — | — |
| `peer-ctx` | `docs/context/features/gis-map.md` | — | DES zones |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/gis` | — | BFF + GPS rules |
| `bff-table` | `specs/_data-analy/gis-map-bff-endpoints.md` | — | path SSOT |
| `peer` | `web-rmms-asset-hub` · asset-list/detail · incident | n/a | entry/exit |
| `api` | gis geojson/tiles/layers · asset GetById | map trống + toast | toast · **cấm** `window.alert` · map vẫn mở |
| `bff` | Mobile.Bff `:5202` · proxy RMMS · GisTiles→MapService | 503 | retry |
| `domain-map` | Gis + cite Asset | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | — (Map không master form) | — | labels via `useFormOptions` |
| `auth` | session required (staff) | guest → login peer | Home/shell |
| `geo` | navigator.geolocation me-dot | deny → hide me | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Map

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | gisMap.nav.back | Button/Nav | — | — | nav Hub | hub | n/a |
| title | gisMap.title | Text RO | LOOKUP_STATIC | — | — | SCREENS | Android title |
| nav.list | gisMap.nav.list | Button/Nav | — | — | `/asset/list` | peer | n/a |
| nav.layers | gisMap.nav.layers | Button | — | `GET gis/layers` | toast P1 | Gis | n/a |
| search | gisMap.search.placeholder | Search | — | `gis/geojson/*?search=` | filter | Gis | n/a |
| overlay.ts | gisMap.legend.ts | MapLayer | geojson | `GET gis/geojson/all` | — | Gis | n/a |
| overlay.sc | gisMap.legend.sc | MapLayer | geojson | `GET gis/geojson/incidents` | — | Gis | n/a |
| overlay.corridor | gisMap.legend.corridor | MapLayer | geojson | `GET gis/geojson/tuyen-duong?lod=corridor` | — | Gis | n/a |
| tiles | gisMap.basemap.* | MapTiles | mvt | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` | — | Gis/MapService | n/a |
| basemap.cfg | gisMap.basemap.cfg | Config RO | — | `GET gis/basemap-config` | optional | Gis | n/a |
| fit | gisMap.fit | Button | — | — | local | SCREEN | n/a |
| gps.me | gisMap.gps.me | MapMarker | geo | browser Geolocation | — | — | Android location |
| focus | gisMap.focus | MapMarker | road-asset | `GET asset/road-assets/{id}` | center Lat/Lng | Asset | n/a |
| popup | gisMap.popup.* | Popup | geojson props | from Feature | nav detail peer | Gis | n/a |

**Cấm** invent gis-map domain path · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** pin từ `incident/incidents` · **cấm** gộp draw/heatmap vào slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `gisMap.*` | SCREENS `/gis` · CTX | hardcode label VN |
| geojson | `GET gis/geojson/{layer}` | DOMAIN-MAP Gis · GisMapController | invent `gis-map` |
| mvt | `GET gis/tiles/…` | MapService via Mobile.Bff GisTiles | AddLinmMapServiceBffControllers web pattern trên Mobile client |
| road-asset | `GET asset/road-assets/{id}` | DOMAIN-MAP Asset | invent focus controller |
| layers | `GET gis/layers` | DOMAIN-MAP Gis | invent layer CRUD P1 |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | full host GIS-04 · clip MVT + overlays |
| GPS | me-dot only · no DB write |
| draw | **OUT** — owner web `gis-draw-*` |
| heatmap | **OUT** Kind F |
| Map nav | back Hub · trailing list · popup → detail peer |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff map only |
| OverlayTs | gis | load / legend | geojson/all | pins |
| OverlaySc | gis | load / legend | geojson/incidents | pins |
| Corridor | gis | load / legend | tuyen-duong | polyline |
| Tiles | MapService | pan/zoom | gis/tiles | basemap |
| FocusId | query/nav | detail entry | road-assets/{id} | center |
| GpsMe | browser | grant/deny | — | me-dot show/hide |

`progress: Map view chrome` — không road-asset write / WO lifecycle trên map.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: overlays · legend · GPS me · focus · Live BFF · no me · no draw |
| Design | GIS zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-gis` · confirm Mobile.Bff paths · tiles |
| TL | Tasks Map page + overlay wires |
| Dev | Implement Mobile MFE Map only · base VITE_MOBILE_API_URL |
| QA | Overlays empty/fail · GPS deny · focus · phone 430 · no me · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T16:50:00.000Z`
