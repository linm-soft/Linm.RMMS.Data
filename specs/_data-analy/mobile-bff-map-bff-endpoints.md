# BFF endpoints — mobile-bff-map (MapService tile proxy)

| | |
|---|---|
| feature | `mobile-bff-map` |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` |
| prefix | `mobile-bff/api/v1` |
| downstream tiles | MapService `:5021` · `api/v1/gis/tiles/…` |
| downstream overlay | `ApiBase` → RMMS `api/v1/gis/*` `{AssetDb}` |
| source | CTX `mobile-bff-map.md` · Web `GisBffController.GetTiles` · `MobileApiProxyController` · task `mobile-bff-map.md` |
| **cấm** | invent `api/v1/map-service/*` · `AddLinmMapServiceBffControllers` · app biết `:5021` · DbContext trên Mobile.Bff · ERP.* |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI TileUrl | iOS + Android | Có — `{BffPrefix}/gis/tiles/…` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host `:5202` |
| MapService | `Linm.Platform.MapService` `:5021` | **Không** — BFF proxy |
| RMMS Gis | `ApiBase` `:5101` | **Không** — catch-all non-tile |
| Web BFF parity | `GisBffController` `web-bff/api/v1/gis/tiles/…` | **Không** — mobile dùng mobile-bff |
| `AddLinmMapServiceBffControllers` | **cấm** | duplicate `gis` route |

## Table — tile + giữ overlay

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Clipped MVT basemap | GET | `gis/tiles/{layer}/{z}/{x}/{y}.pbf` | **NEW** MapService proxy (parity Web GetTiles) | `{MapService}/api/v1/gis/tiles/…` | CTX §3 · `GisBffController` L66–73 | GAP-MOB-BFF-MAP-01/02 |
| Overlay MVT (JWT) | GET | `gis/tiles/{layer}/…` (non-basemap) | same proxy · forward JWT | MapService 401 nếu thiếu inspector | Web comment guest/overlay | — |
| Clusters | GET | `gis/clusters` | catch-all `MobileApiProxyController` | RMMS `api/v1/gis/clusters` | CTX §3 | **giữ** |
| GeoJSON overlay | GET | `gis/geojson/{layer}` | catch-all | RMMS Gis `{AssetDb}` | peer `gis-map` | **giữ** |
| Drawings / layers / basemap-config | * | `gis/*` (≠ tiles) | catch-all | RMMS | Web GisBff non-tile | **giữ** |
| Health (opt) | GET | `gis/health` | catch-all | RMMS | — | — |

## Config (Dev Wave 2 — cite task)

| Key | Value | Cite |
|-----|-------|------|
| `ServiceEndpoints:MapService` | `http://localhost:5021` · Docker `http://host.docker.internal:5021` | T-MAP-BFF-01 · **thiếu hiện tại** |
| `ApiBase` | `http://localhost:5101` | `appsettings.json` live |
| Package | `Linm.Platform.MapService.Bff` NuGet · `AddLinmMapServiceBff` | T-MAP-BFF-02 · **cấm** ProjectReference · **cấm** Controllers extension |

## Auth / guest

| Case | Expect |
|------|--------|
| Guest `layer=basemap` | 200 MVT qua BFF |
| Overlay không JWT | MapService → 401 (forward) |
| Inspector JWT | forward Authorization hop |

## Verify live (không invent · **không** chạy role này)

| Check | Result |
|-------|--------|
| Web `GisBffController.GetTiles` | `[HttpGet("tiles/{layer}/{z}/{x}/{y}.pbf")]` → `_mapProxy.ForwardStreamAsync` |
| Mobile catch-all | `MobileApiProxyController` `[Route("mobile-bff/api/v{version}")]` → `ApiBase` — **nuốt** tiles hôm nay |
| `ServiceEndpoints:MapService` | **absent** trong `appsettings.json` |
| `api/v1/map-service` | **không** — **cấm invent** |
| Step 4b / migration | **N/A** data_analy |

## Cấm

- App gọi MapService `:5021` trực tiếp  
- DbContext / `{MapDb}` thứ 2 trên Mobile.Bff  
- `AddLinmMapServiceBffControllers`  
- Ship TileUrl CDN khi BFF tile live (`GAP-MAP-OSM-CDN-01`)  

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
| bffContentHash | sha256:eb9222c7212ddd10633f4d2cb920f7eb02f7e37a64a86c6d3e2ba1c31f302af6 |
| webParityHash | sha256:4eddeea5d0efaddc7809d2701c9d1674a08af7a345f4191ab2c7fab6319a5209 |
| taskId | `task_acda32fe` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 -->
