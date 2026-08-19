# Dev — Implement — patrol-map (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-AND-PAT-MAP` · `/edit-mobile-feature` |
| role | `/agent-dev-android` |
| status | **confirmed** |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `presentation/feature/patrolmap/*` |
| Domain | `PatrolMapModels` · `LocationFix` · `GetCurrentLocationUseCase` |
| Data | `AndroidLocationReader` |
| DI | `AuthBindModule.locationReading` |
| Deps | `org.osmdroid:osmdroid-android` |

## Behavior (EDIT LOCK — **cấm** revert)

Same DoD as iOS.

- Bar / legend: `FlowRow` wrap
- Pin-here: runtime FINE permission · loc live · pin `Here` · zoom **16.5** `animateTo` · toast
- Deny / timeout toast · **cấm** fake lat/lng
- Manifest `ACCESS_FINE_LOCATION` + `ACCESS_COARSE_LOCATION`

## Build (VERIFY GATE)

`./gradlew :app:assembleDebug` — see closeout this turn.
