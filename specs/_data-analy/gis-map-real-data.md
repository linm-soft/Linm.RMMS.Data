# Real-data bind — gis-map

| | |
|---|---|
| feature | `gis-map` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Gis (+ Asset focus) |
| taskId | `task_23d7eba0` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `gis-map.md` · `gis.md` · `GisMapController.GetGeoJson` · BFF table | Empty overlay · map vẫn mở · fit demo corridor | Demo `map-oms.js` `GIS_ASSETS` + `PATROL_WAYPOINTS` · toast lỗi · **cấm** fake 200 |
| `api` | `RoadAssetsController.GetById` khi focus Id | skip focus · fit all | toast · keep map |
| `derived` | `properties.layer` → isolate ts/sc/corridor | missing layer → treat all | — |
| `seedCite` | DB `rmms_road_assets` mappable Lat/Lng · GIS corridor | empty → demo pins | Dev/QA seed nếu AC cần ≥1 pin |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| mapHost | Bản đồ | Map | — | appear = GET geojson | — | gap | yes |
| overlayTs | Tài sản pins | MapPin | — | `GET gis/geojson/all` | — | gap | yes |
| overlaySc | Sự cố pins | MapPin | — | `GET gis/geojson/incidents` | — | gap | yes |
| corridor | Hành lang | Polyline | — | `GET gis/geojson/tuyen-duong` | — | gap | yes |
| focusPin | Ghim focus | MapPin | — | `GET asset/road-assets/{id}` | — | gap | yes |
| searchHint | Tìm tài sản, sự cố… | SearchField | — | `?search=` / local | — | n/a | yes |
| baseOsm/Esri/Sat | Đường/Phố/Vệ tinh | Chip | — | local tiles · opt `gis/basemap-config` | — | n/a | yes |
| fitAll | Toàn tuyến | Chip | — | local fit | — | n/a | yes |
| lg* | Legend isolate | Chip | — | local show/hide layers | — | n/a | yes |
| navLayers | Lớp | TextButton | — | toast P1 · opt `GET gis/layers` P2 | — | n/a | yes |
| navList | Danh sách | TextButton | — | local nav list | — | n/a | yes |
| navBack | Tài sản | BackButton | — | local hub | — | n/a | yes |

§B path **khớp** `gis-map-bff-endpoints.md` — **không** invent `gis-map` · **không** pin từ `incident/incidents` (no Lat/Lng).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| GIS layers | `GET gis/layers` | GisMapSeed.Layers | Invent mobile layer controller |
| Basemap | OMS local · `gis/basemap-config` | map-service / OMS | Invent Google key path P1 |
| Asset types on map | geojson `{layerCode}` | DOMAIN Gis InventoryMapper | Invent per-type mobile API |

## §D — Map overlay (OMS)

| Layer | Live bind | Demo coords (`map-oms.js`) | Isolate id |
|-------|-----------|----------------------------|------------|
| Corridor | `gis/geojson/tuyen-duong` | `PATROL_WAYPOINTS` OSRM | `corridor` |
| TS | `gis/geojson/all` (non-incident props) | `ts1` 11.530,109.004 · `ts2` 11.470,108.995 | `ts` |
| SC | `gis/geojson/incidents` | `sc1` 11.510,109.001 | `sc` |
| Focus | `asset/road-assets/{id}` Lat/Lng | TS-20260810-014 @ ts1 | — |

Popup SSOT demo: **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** · **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080**.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Overlay features | DB RoadAssets → Gis geojson | asset CRUD siblings | GET refresh on appear | pins |
| Isolate | local chip state | user | — | show/hide |
| Basemap | local tile key | user | — | OSM/Esri/sat |
| Focus | nav args + GetById | detail CTA | GET by id | center + highlight |
| Offline / fail | — | network | — | demo OMS · toast · map mở |

Empty/fail GET → demo pins + corridor · **cấm** blank dead map · **cấm** ship mock-only khi live OK (`GAP-MOB-REAL-02`).

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «map mở = pin thật» · dual search/Lớp/Hành lang · SC-01 |
| Design | control-map khớp §B · OMS dual · prototype reviewUrl |
| SA | giữ `gis/geojson/*` · Asset GetById focus · **cấm** invent |
| Dev iOS + Android | MapKit/OSM · cùng §B · prefix mobile-bff |

## § Cấm

- Watermark / «bản Gói N» / process text trên UI  
- Fake lat/lng / fake TS-*/SC-* khi API OK  
- Invent mobile-only path `gis-map`  
- Bind `mfeStdUrl` · WebView Leaflet-as-app  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- In-app `GIS_ASSETS` làm nguồn ship → **GAP-MOB-REAL-02**  
- Gộp draw/heatmap/list vào slug → **GAP-MOB-ACT-02**  

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
| contentHash | sha256:gis-map-real-data-20260831 |
| taskId | `task_23d7eba0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
