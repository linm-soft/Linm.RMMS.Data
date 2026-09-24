# Dev — Implement — patrol-map (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-IOS-PAT-MAP` · `/implement-gis-map` `ios_replace_all_maps` · GAP-MOB-IOS-MAP-HOST-01 |
| role | `/agent-dev-ios` |
| changeScope | `edit_page` · gap=`ios_map_host_clip` · mode=`fix_gaps` |
| status | **confirmed** |
| taskId | `task_1f6d86c4` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolMap/*` · HITL `PhotoGeoCaptureView` |
| Map host SSOT | `GisClipMapView` · `VnClipStyle` · `MapTileUrl` (reuse `#sc-gis-map`) |
| Domain | `RoutePatrolOverlayUseCase` · `SnapMapPinUseCase` · `PathProjection` · `StreetRouting` |
| Data | `OsrmStreetRouter` · `PolylineDecoder` · `CoreLocationReader` |
| Shell | `AppContainer` · `AppRouter` |

## Behavior (EDIT LOCK — **cấm** revert)

- Hub hero **Tiếp tục bản đồ** + quick **Bản đồ ca** → push `#sc-patrol-map`
- **Host** = `GisClipMapView` (MapLibre clip BFF MVT) · **0** `Map()` / MapKit world basemap · **cấm** OSM.org/Esri/Google tile
- Chips: **Tiêu chuẩn** / **Vệ tinh** (`PatrolMapBase.clip|sat`) + Fit · legend isolate giữ
- Overlay: **GET** `patrol/sessions/{id}/plan-points` + `check-ins` (OSRM) · pin done/next **số trên badge** · tap → popup `patrol-pin-popup` · pin-here snap · follow `focusToken`
- **Cấm** `PatrolMapOverlay` mock track/pins (cleanup_mock · GAP-MOB-PAT-MAP-LIVE-01)
- First open: seed track/pins ngay, re-apply overlay khi MapLibre `didFinishLoading` (GAP-MOB-IOS-FIRST-OVERLAY-01)
- HITL `photo-geo-capture` confirm map → cùng `GisClipMapView` · pin focus kéo HITL
- OSRM: Debug `OsrmBase` = `https://router.project-osrm.org` (xcconfig `$()`). Empty + `net.osrmPublic=false` → nét đứt + toast `patrol.map.osrmFallback` (**GAP-MAP-OSRM-CONFIG-01**). HTTP fail same. Track path vẫn live.
- **Ghim vị trí hiện tại** → snap · pin `.here` · toast · deny modal **chỉ khi chưa cấp**
- CoreLocation: services off / authorized+error → `unavailable` (**GAP-MOB-EDIT-PERM-01**)
- **Cấm** fork `VnClipStyle` / tile URL khác `#sc-gis-map`

## Notes (2026-09-16)

Android host now matches this packet: `GisClipMapView` MapLibre + BFF MVT. **Cấm** revert iOS MapKit world. GAP-MOB-PIN-OVER-LINE-01: corridor GeoJSON line **below** pin layers (cấm MLNPolyline annotation trên pin). **GAP-MAP-OSRM-CONFIG-01:** Debug `OsrmBase` public · router no longer requires `netOsrmPublic` when base is set · fail = dashed corridor.

**GAP-MOB-EDIT-SIL-01:** `AppRouter` `$showPatrolMapFromField` / `$showPatrolMapFromHome` — **cấm** `Binding(get: { staffPatrolMap && state })`. Hide = `guard staffPatrolMap`. dest iPhone 17 Pro Max **PASS**.

## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.
