# Implement Android — mobile-bff-map

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| role | `dev` · `/agent-dev-android` + OMS R2 |
| task | `T-AND-MAP-TILE` |
| changeScope | `edit_page` · route_reuse |
| status | **PASS** |
| taskId | `task_21def1bf` |
| updatedAt | `2026-09-12T07:01:31.000Z` |

## Done

- `data/remote/MapTileUrl.kt` — TileUrl SSOT BFF clip MVT
- `GisMapScreen` / `PatrolMapScreen`: removed MAPNIK + Esri CDN · `BffClipBasemap` → `MapTileUrl.basemapUrl`
- Chip chrome reuse (osm/esri/sat) → same BFF `basemap` layer (Wave 4 tones)
- **0** `openstreetmap.org` / `arcgisonline` / Google tile URL in release sources

## Build

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **BUILD SUCCESSFUL** |

## Debt

- osmdroid raster decode ≠ MVT `.pbf` → basemap may blank until Wave 4 MapLibre/clip UI
- Overlay JWT on tile HTTP deferred with MVT renderer

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.09.05.03 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_21def1bf` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.09.05.03 -->
