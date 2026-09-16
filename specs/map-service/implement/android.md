# Implement Android — map-service Wave 4 (clip UI)

| Field | Value |
|-------|-------|
| feature | `map-service` |
| role | `dev` · `/implement-map-stack` `wave4_host=android` · `/implement-gis-map` |
| task | GIS clip MapLibre |
| changeScope | `edit_page` · `#sc-gis-map` · `#sc-patrol-map` · HITL |
| status | **PASS** |
| updatedAt | `2026-09-16T15:55:00.000Z` |

## Done

- Gradle `org.maplibre.gl:android-sdk:11.13.1` · `MapLibre.getInstance` in `RmmsApplication`
- `GisClipMapView` + `VnClipStyle` replace osmdroid `XYTileSource` `.pbf` (GAP-MOB-AND-MAP-LOAD-01)
- Style JSON: BFF `gis/tiles/{basemap\|boundaries\|mask}/{z}/{x}/{y}.pbf` · glyphs demotiles font CDN
- Hosts: `GisMapScreen` · `PatrolMapScreen` · `PhotoGeoCaptureSheet.HitlMap`
- Chips **Tiêu chuẩn** (`mb-clip`) \| **Vệ tinh** (`mb-sat`) — cùng clip MVT · **cấm** Streets / EN Default / Esri / Google imagery · GAP-MOB-AND-CHIP-01 closed
- maxBounds **97.0–118.0 / 6.8–23.5** · minZoom **5** · mask minzoom **8** · fill mask = `theme.sea`
- 3 tone: `theme.sea` · `theme.landAbroad` (hạ · `seAsiaLand.json` assets) · `theme.land` (VN `boundaries` source-layer `basemap`)
- HS/TS overlay: «Quần đảo Hoàng Sa» · «Quần đảo Trường Sa» · «Biển Đông»
- Pins = Wave 3 `gis/clusters` / geojson bbox theo viewport MapLibre
- **0** `openstreetmap.org` / Esri / Google tile URL in Android Kotlin

## Build

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** |

## Debt

- Overlay JWT hop on MapLibre tile requests — guest layers only this wave (parity iOS)
- Web Wave 4 still pending · STATUS wave row stays **pending**
- Store law `/review-map-release` **không** auto-done
