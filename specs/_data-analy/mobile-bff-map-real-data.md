# Real-data bind — mobile-bff-map

| | |
|---|---|
| feature | `mobile-bff-map` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · tile MapService + overlay RMMS |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_acda32fe` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · §B khớp BFF table

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `geo` | CTX `mobile-bff-map.md` · `GisBffController.GetTiles` · MapService tiles | blank basemap · peer map vẫn mở | toast peer · **cấm** fake 200 CDN |
| `api` | CTX §3 · catch-all `MobileApiProxyController` → RMMS `gis/geojson` · `gis/clusters` | empty overlay peer | toast · keep map |
| `geo` | `{MapDb}` `linm_maps` clip (MapService) — **cấm** copy 650k TS | no tile → gap MapService up | 502/404 forward |
| `seedCite` | MapService clip pipeline peer `map-service` / `gis-osm-clip` | — | Dev/QA verify curl |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| tileUrl | TileUrl native | Text (config) | — | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` | — | yes (Web GisBff) | **gap→yes** Wave 3 |
| tileBasemap | Basemap MVT | MapTile | — | `…/tiles/basemap/{z}/{x}/{y}.pbf` guest | — | yes | gap |
| tileOverlay | Overlay MVT | MapTile | — | same path · JWT | — | yes | gap |
| overlayGeo | Peer pins/corridor | MapPin / Polyline | — | `GET gis/geojson/*` (giữ RMMS) | — | gap | yes peer |
| clusters | Peer clusters | MapCluster | — | `GET gis/clusters` (giữ RMMS) | — | gap | yes peer |

§B path **khớp** `mobile-bff-map-bff-endpoints.md` — **không** invent `map-service` · **không** đổi geojson sang MapDb.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| Tile layers | path `{layer}` basemap/overlay | MapService clip · peer map-service | Dropdown cứng CDN URL |
| GIS overlay layers | `GET gis/layers` (RMMS) | Gis seed peer | Invent mobile layer fork |

## §D — Map / vẽ (`packKind=map`)

| Mục | Ghi |
|-----|-----|
| Engine | Native MapKit / OSM-style từ **BFF MVT** · cite CTX + `/agent-dev-oms-map` R1–R11 · **cấm** invent SDK |
| Tools | **none** vẽ trong slug — Point/Line/Polygon = peer UI packs |
| Layer | `basemap` guest · overlay JWT · catalog code từ MapService/Gis — không nhãn demo |
| Load | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · cite Web GetTiles + CTX |
| Save | **none** — read-only tiles |
| Pick | n/a (không vẽ) |
| Peer overlay | `gis/geojson/*` · `gis/clusters` → RMMS `{AssetDb}` |

## §E — Progress / vòng đời

`progress: none` — không status/% trên slug BFF tile.

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| TileUrl source | BFF vs CDN | Dev Wave 3 | config | peer map basemap |
| Auth overlay | JWT | user login | forward Authorization | 401 → peer empty overlay |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «tile qua BFF · 0 OSM.org · overlay RMMS» |
| Design | **không** prototype màn mới · review peer TileUrl note |
| SA | giữ path §B · config MapService · **cấm** invent |
| Dev iOS+Android+BFF | Wave 2 BFF rồi Wave 3 TileUrl · cùng §B |

## § Cấm

- In-app hardcode tile CDN làm SSOT khi BFF live → **GAP-MOB-REAL-02** / **GAP-MAP-OSM-CDN-01**  
- Invent `api/v1/map-service`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp Wave 4 UI / draw vào slug → **GAP-MOB-ACT-02**  
- ERP.* / Domains/Master  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:40:00.000Z |
| versionGate | ok |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_acda32fe` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.12.1 versionGate=ok -->
