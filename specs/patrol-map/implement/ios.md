# Dev — Implement — patrol-map (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-IOS-PAT-MAP` · `/edit-mobile-feature` · `/agent-dev-oms-map` |
| role | `/agent-dev-ios` |
| status | **confirmed** |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolMap/*` |
| Domain | `RoutePatrolOverlayUseCase` · `SnapMapPinUseCase` · `PathProjection` · `StreetRouting` |
| Data | `OsrmStreetRouter` · `PolylineDecoder` · `CoreLocationReader` |
| Shell | `AppContainer` · `AppRouter` |

## Behavior (EDIT LOCK — **cấm** revert)

- Hub hero **Tiếp tục bản đồ** + quick **Bản đồ ca** → push `#sc-patrol-map`
- MapKit live · **OSRM** `routeAlongStreets` corridor teal + track `#0A84FF` · pin check-in `projectToPath` · isolate legend
- OSRM fail → nét đứt tạm + toast `patrol.map.osrmFallback`
- Basemap / legend chips: `ChipWrap` (wrap như demo `flex-wrap`)
- **Ghi điểm tuần** → toast · **cấm** sheet
- **Ghim vị trí hiện tại** → `GetCurrentLocationUseCase` · **`SnapMapPinUseCase`** (`snapPointToStreet` else `projectToPath`) · pin `.here` tip neo đáy · camera follow span `0.006` · toast success
- Deny → `patrol.map.locDeny` · timeout → `patrol.map.locTimeout` · **cấm** fake lat/lng
- `NSLocationWhenInUseUsageDescription` · **cấm** chữ «GPS» trên máy
- **Appear** → `FetchPatrolSessionsUseCase` · `PatrolDtoMapper.active(from:)` → `routeKm` non-empty else `PatrolMapOverlay.nextDemoTitle`
- **Cấm** `MapPolyline` thẳng từ `PatrolMapOverlay.track` · **cấm** Annotation title nhân đôi số · **GAP-MAP-OSRM-ROUTE** · **GAP-MAP-OSRM-SNAP**

## Build (VERIFY GATE)

**PASS** — `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** (`/edit-mobile-feature` · OMS pin + tim đường · `2026-08-21`).
