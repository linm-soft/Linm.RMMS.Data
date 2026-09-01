# STATUS — map-service

| Field | Value |
|-------|-------|
| feature | `map-service` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `new_svc` |
| packKind | `map` |
| demo | none |
| stackSkill | `/implement-map-stack` |
| context | `docs/context/features/map-service.md` |
| backend | `D:/API-CORE/Linm.Platform.MapService` · `api/v1/gis/*` |
| mfe | `Linm.Web.RMMS.Gis` — clip BFF MVT · OpenMapTiles streets + place · maxBounds 6.8–23.5 · **0** OSM.org trên Gis*Page |
| updatedAt | `2026-09-01T10:30:00+07:00` |

## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 1 | map_service | `new_svc` · `wave1_pin=clusters_rmms` | **done** | verify 2026-09-01: Schema pair + 34 + HS/TS + mask + MVT + guest 401 overlay · **P2 street MBTiles** `streetTilesReady=true` |
| 2 | bff_service | web=**done** · mobile=pending | pending | `wave2_host=web_bff` · NuGet `1.1.0` · tiles same-origin · guest overlay 401 · Docker `:5201` proxy **200** after MapService SQLite fix |
| 3 | integrate_bff | queued `both` · `viewport_lod` | pending | Confirm xong — **chưa** chạy (một wave / lượt) |
| 4 | map_ui | web=**done** · ios=pending · android=pending | pending | `wave4_host=web` · MapLibre + BFF `{TileUrl}` · mask layer · maxBounds SSOT · tsc 0 · 0 `openstreetmap.org` trên Gis*Page |

## Confirms

| Key | Value |
|-----|-------|
| svc_host | `new_svc` |
| service_kind | `api` |
| src_style | `micro_src` |
| host | platform `Linm.Platform.MapService` (không RMMS domain) |
| wave1_pin | `clusters_rmms` — `GET /gis/clusters` RMMS · không chuyển MapService |
| wave2_host | `web_bff` |
| bff_route_gap | `publish_bump` — GitHub Packages `Linm.Platform.MapService.Bff` **1.1.0** |
| wave3_client | `both` (queued) |
| wave3_pin | `viewport_lod` (queued) |
| wave4_host | `web` |

## Done (P2 streets) — MAP-P2-01 CLOSED

- Geofabrik `vietnam-latest.osm.pbf` (~312 MB) · Osmium `--polygon` gis.vn `vietnam.poly` → `vietnam-clipped.osm.pbf`
- Planetiler OpenMapTiles **maxzoom 12** → `local-script/data/tile-cache/vietnam.mbtiles` (~67 MB)
- MapService `OsmTileCache` SQLite MBTiles · `GET /api/v1/gis/health` **`streetTilesReady: true`**
- `basemap/10/813/453.pbf` **200** ~53 KB · layers `water`/`transportation`/`place` (không còn ST_AsMVT tỉnh-only trên `basemap`)
- `boundaries` vẫn PostGIS ST_AsMVT (~109 KB z5) · mask HS/TS giữ
- Client URL **không đổi**: BFF `/gis/tiles/basemap/{z}/{x}/{y}.pbf` — **cấm** OSM.org CDN
- Script: `local-script/render-osm-mvt.ps1` / `.sh`

## Done (BE) — Wave 1 PASS

- Scaffold Layout C + BFF NuGet lib (consumer **chưa** pin)
- `Schema_GisBoundary` pair + `dotnet ef migrations list` · applied `linm_maps` `:5461`
- Ingest gis.vn **34** (Đà Nẵng 48 · Khánh Hòa 56) + clip mask invert · `/clip/vietnam.poly`
- Tile guest `GET /api/v1/gis/tiles/basemap/5/25/14.pbf` **200** MVT (~109 KB)
- Guest overlay `assets`/`cameras` + `geojson/assets` **401** · inspector `Authorization` **200**
- `dotnet build` Map.Api Release 0 error · Docker `linm-maps-api` healthy `:5021`

## Done (BFF web) — Wave 2 partial PASS

- Publish GHA `Linm.Platform.MapService.Bff` **1.1.0** (GitHub Packages)
- `PackageReference` + `AddLinmMapServiceBff` trên `RMMS.Service.Bff` — **không** `AddLinmMapServiceBffControllers` (tránh trùng `web-bff/api/v1/gis`)
- `GisBffController` tiles → `MapServiceDownstreamProxy` · `ServiceEndpoints:MapService` `:5021`
- `dotnet build` RMMS.Service.Bff Release **0 error**
- Smoke `:5299` `GET /web-bff/api/v1/gis/tiles/basemap/5/25/14.pbf` **200** MVT (~109 KB) · guest `assets`/`cameras` **401**
- Clusters / drawings / heatmap **vẫn** RMMS Gis (`ApiBase`)

## Done (Map UI web) — Wave 4 web PASS

- `Linm.Web.RMMS.Gis` `GisListPage` / `GisDrawLivePage` / `GisDrawGoogleDemoPage`: MapLibre GL trên Leaflet `tilePane` · `{TileUrl}` = BFF `gis/tiles/{basemap\|mask}/{z}/{x}/{y}.pbf` · P2 style OpenMapTiles (`transportation` / `place`) + `boundaries` tỉnh
- maxBounds 102–118 / **6.8–23.5** · minZoom 5 · invert mask MVT `source-layer=mask`
- `transformRequest` JWT + `X-Company-Id` khi apiClient có header · **cấm** OSM.org / Esri / Carto fallback
- `yarn typecheck` **0 error** · grep `tileLayer(` OSM/Esri/Carto trên pages = **0**

## Fix (2026-09-01) — Overpass 429/500 + zoom không pin

- **Root 429/500:** `osrmCenterline.ts` POST `overpass-api.de` + `overpass.kumi.systems` từ browser (rate-limit + CORS). Chặn `routeSavedLines` → `byRoute` trống → pin lưới 0.01° bị `shouldShowInventoryPin` ẩn.
- **Fix FE:** mặc định **không** gọi Overpass public. OSM `ref` chỉ khi `VITE_OVERPASS_URL` (self-host). Tuyến inventory = OSRM `/route` seed thưa.
- **Fix pin:** seed `byRoute` từ corridor km-chain **trước** OSRM; vẽ pin ngay; OSRM success overlay. Click cụm → `setView` z≥14.
- Verify: `yarn typecheck` Gis MFE **0 error**. Console không còn `overpass-api.de` / kumi 429/500.

## Fix (2026-09-01) — tile 500 + bóng mờ biên

- **Root 500:** `OsmTileCache` singleton SQLite connection NRE khi MapLibre burst `basemap` (zoom/move). BFF `:5201` forward 500. URL user `boundaries/8/203/120` hay 200; console lẫn `basemap/{z}/{x}/{y}` 500.
- **Fix BE:** connection-per-read + try/catch · `ST_ClipByBox2D` boundaries · rate 3000/min · pan abort ≠ 500.
- **Root bóng mờ:** lỗ tile 500 + Leaflet navy `#0f172a !important` + `vn-land` đè OSM water (polygon simplify) + road-casing rộng.
- **Fix FE:** sea bg · `vn-land` dưới water · casing/outline mỏng hơn.
- Verify: `basemap/8/203/120` + `boundaries/8/203/120` BFF **200** · parallel 24× **200**.

## Fix (2026-09-01) — popup click tài sản (Tên / Mã TS / KM / GPS / Tuyến)

- Click pin: popup **nhãn đủ 5 dòng** — không dump slug `cot-km` / mã QCVN làm title.
- **Tên** = catalog 36 `TYPE_LABEL` (`KM_POST` → «Cột Km») khi name = `Km*` hoặc slug lớp; tên công trình import khi khác lý trình.
- **Mã TS:** `code` · **KM** `kmFrom` · **GPS:** lat/lng · **Tuyến:** `route` (dump `road_name`).
- `buildMapPopupHtml` + `inventoryPopupHtml` trên GisDrawLive / Demo / List.

## Fix (2026-09-01) — snap tài sản / tuyến

- Overlay **vẽ trên UI** (Leaflet + OSRM `/route` + OSM `ref`) — **không** MVT `assets`/`routes` MapService (P1 trống).
- Pin/cụm: `projectToPath` **đúng mã tuyến** (`props.route` = dump `road_name` tầng 1) — **cấm** `OsrmNearest` / `/match` inventory.
- z 9–13: gộp cụm theo `GisRouteCanon` (QL.1 ≡ QL.1 - tỉnh). Thiếu corridor cùng mã → raw, không kéo sang tuyến khác.
- Data-gov: **GAP-GOV-ROUTE-3LVL** còn mở — nhánh/tránh nếu `Route` = QL.1 sẽ bám tim QL chính (không bịa map).

## Fix (2026-09-01) — cột km / tuyến vs tim đường (QL.27C)

- Dump `gov-vn` **không** đổi (GOV-IMP): `KM-km_post_718193` Km98 = `12.09,108.54` lưới 0.01° · corridor `coordSource=asset-km-chain`.
- Overlay `/gis/live`: pin **chỉ** ghim nét OSRM cùng mã — seed km-chain không còn gán popup «snap tim đường».
- Abort OSRM không cache chord = xong; retry id chưa `byId`/`failed`. Fail = nét đứt + popup `raw`.
- Popup `snapped === true` mới «snap tim đường»; default = `raw`.

## Next (cấm fake done)

| Slash | Việc |
|-------|------|
| `/implement-map-stack` Wave 2 | Mobile BFF `AddLinmMapServiceBff` (`wave2_host=mobile_bff` / `both`) |
| Docker BFF | `:5201` đã proxy tiles — không cần rebuild BFF cho fix SQLite (MapService `:5021`) |
| `/implement-map-stack` Wave 3 | Integrate BFF queued `both` + `viewport_lod` |
| `/implement-map-stack` Wave 4 | iOS / Android (`wave4_host`) |
| `/data-gov-integration` | overlay routes/assets |
| P2 z14 | `pwsh ./local-script/render-osm-mvt.ps1 -MaxZoom 14` nếu cần phố nhỏ (hiện z12) |

**Cấm** duplicate `VietnamBoundaries` trên `Linm.RMMS.WebService`.
