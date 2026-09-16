# Implement iOS — map-service Wave 4 (clip UI)

| Field | Value |
|-------|-------|
| feature | `map-service` |
| role | `dev` · `/implement-map-stack` `wave4_host=ios` · `/implement-gis-map` |
| task | GIS clip MapLibre |
| changeScope | `edit_page` · `#sc-gis-map` |
| status | **PASS** |
| updatedAt | `2026-09-13T02:53:40.000Z` |

## Done

- SPM `https://github.com/maplibre/maplibre-gl-native-distribution` product `MapLibre` (`from: 6.20.0` → 6.31.0)
- `GisClipMapView` replaces MapKit world basemap on `GisMapView`
- Style JSON: BFF `gis/tiles/{basemap\|boundaries\|mask}/{z}/{x}/{y}.pbf` · glyphs demotiles font CDN
- Chips **Tiêu chuẩn** (`mb-clip`) \| **Vệ tinh** (`mb-sat`) — cùng clip MVT · **cấm** Streets / EN Default / Esri / Google imagery
- maxBounds **97.0–118.0 / 6.8–23.5** · minZoom **5** · mask minzoom **8** · fill mask = `theme.sea`
- 3 tone: `theme.sea` · `theme.landAbroad` (hạ) · `theme.land` (VN `boundaries` source-layer `basemap`)
- HS/TS overlay: «Quần đảo Hoàng Sa» · «Quần đảo Trường Sa» · «Biển Đông» (`minzoom` 4)
- Pins = Wave 3 `gis/clusters` / geojson bbox **theo viewport MapLibre** (cấm appear dump clipFill) · cap z≤8 = 250
- Debug `{BffBase}` = `http://127.0.0.1:5202` · ATS `NSAllowsLocalNetworking`
- MapService mask SQL: `ST_Subdivide` top-level FROM (Postgres 0A000) · empty-land = full clip sea
- Load = clip fill (không auto-fit pin) · chip Toàn tuyến = fit pins
- **0** `openstreetmap.org` / Esri / Google tile URL in iOS Swift

## Build

| Check | Result |
|-------|--------|
| `xcodegen generate` | PASS |
| `xcodebuild` dest **iPhone 17 Pro Max** | **BUILD SUCCEEDED** |
| iPad M5 | N/A · `TARGETED_DEVICE_FAMILY=1` |

## Debt

- Abroad-land = simplified SE Asia rings — regen NE 50m khi `{MfeGis}/shared/map/data/seAsiaLand.json` có trong workspace
- Patrol `#sc-patrol-map` còn MapKit Apple tiles (không Wave 4 iOS GIS)
- Overlay JWT hop on MapLibre tile requests — guest layers only this wave
- Web Wave 4 still pending · STATUS wave row stays **pending**
- Store law `/review-map-release` **không** auto-done
