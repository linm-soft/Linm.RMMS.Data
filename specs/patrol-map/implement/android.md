# Dev — Implement — patrol-map (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-AND-PAT-MAP` · `/edit-mobile-feature` · `/agent-dev-oms-map` |
| role | `/agent-dev-android` |
| status | **confirmed** |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `presentation/feature/patrolmap/*` |
| Domain | `RoutePatrolOverlayUseCase` · `SnapMapPinUseCase` · `PathProjection` · `StreetRouting` |
| Data | `OsrmStreetRouter` · `PolylineDecoder` · `AndroidLocationReader` |
| DI | `AuthBindModule.streetRouting` |
| Deps | `org.osmdroid:osmdroid-android` · OkHttp public OSRM (không Bearer BFF) |

## Behavior (EDIT LOCK — **cấm** revert)

Same DoD as iOS.

- Bar / legend: `FlowRow` wrap
- Track: corridor `#5AC8FA` + track `#0A84FF` từ OSRM · fallback nét đứt + toast
- Pin-here: runtime FINE permission · loc live · **snap tim đường** · pin `Here` tip `ANCHOR_BOTTOM` · zoom **16.5** `animateTo` · toast
- Deny / timeout toast · **cấm** fake lat/lng
- Manifest `ACCESS_FINE_LOCATION` + `ACCESS_COARSE_LOCATION`
- **Appear** → `fetchSessions()` · `PatrolDtoMapper.active` → `routeKm` non-empty else `PatrolMapOverlay.nextDemoTitle`
- **Cấm** `Polyline` thẳng từ `PatrolMapOverlay.track` · **GAP-MAP-OSRM-ROUTE** · **GAP-MAP-OSRM-SNAP**

## Build (VERIFY GATE)

**PASS** — `./gradlew :app:assembleDebug` (`/edit-mobile-feature` · OMS pin + tim đường · `2026-08-21`).
