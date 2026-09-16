# Dev — Implement — patrol-map (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-AND-PAT-MAP` · `/edit-mobile-feature` map load · GAP-MOB-AND-MAP-LOAD-01 |
| role | `/agent-dev-android` |
| changeScope | `edit_page` · map host tile only · **cấm** đổi UX patrol/HITL ngoài host |
| status | **confirmed** |
| taskId | `task_and_maplibre_clip` |
| updatedAt | `2026-09-16T15:45:00.000Z` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `GisClipMapView` · `VnClipStyle` · `PatrolMapScreen` · HITL `PhotoGeoCaptureSheet.HitlMap` · `GisMapScreen` |
| Tile SSOT | `MapTileUrl` BFF `gis/tiles/{layer}/{z}/{x}/{y}.pbf` (MapLibre MVT) |
| Domain | `RoutePatrolOverlayUseCase` · `SnapMapPinUseCase` · `PathProjection` · `StreetRouting` |
| Deps | `org.maplibre.gl:android-sdk:11.13.1` · **0** osmdroid |

## Behavior (EDIT LOCK — **cấm** revert)

- Patrol / GIS / HITL host = **`GisClipMapView`** MapLibre + `VnClipStyle` (parity iOS) · **cấm** osmdroid `XYTileSource` trên `.pbf`
- Root cause closed: osmdroid decode MVT PBF as raster → blank map
- Chips **Tiêu chuẩn** (`mb-clip`) / **Vệ tinh** (`mb-sat`) + Toàn tuyến · **cấm** Đường/Phố OSM.org · **cấm** Esri/Google imagery
- Overlay pin/track = **live plan-points + check-ins** · corridor **dưới** pin (`GAP-MOB-PIN-OVER-LINE-01`) · stop pin **số trên badge** · tap → popup `patrol-pin-popup` · **cấm** `PatrolMapOverlay` mock (`GAP-MOB-PAT-MAP-LIVE-01`)
- OSRM: Debug `OSRM_BASE` = public (`build.gradle.kts` debug default) · Release empty until self-host · fail = nét đứt + toast (`GAP-MAP-OSRM-CONFIG-01`)
- Pin-here: FINE **hoặc** COARSE · fused/network · **cấm** SecurityException crash khi đã cấp (**GAP-MOB-EDIT-PERM-01**)
- **cấm** OSM.org / Esri / Google tile CDN

**GAP-MOB-EDIT-SIL-01 (dual):** skip map hide = `if (ReleaseFlags.staffPatrolMap)` quanh `composable("patrol-map")` · **không** Binding. iOS SIL bug không áp dụng Compose.

## Build (VERIFY GATE)

**PASS** — `./gradlew :app:assembleDebug` · `2026-09-16` (OSRM Debug `OSRM_BASE` public · GAP-MAP-OSRM-CONFIG-01).
