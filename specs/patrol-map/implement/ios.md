# Dev — Implement — patrol-map (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| task | `T-IOS-PAT-MAP` · `/edit-mobile-feature` |
| role | `/agent-dev-ios` |
| status | **confirmed** |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolMap/*` |
| Domain | `PatrolMapModels` · `LocationFix` · `GetCurrentLocationUseCase` |
| Data | `Data/Location/CoreLocationReader.swift` |
| Shell | `AppContainer` · `AppRouter` |

## Behavior (EDIT LOCK — **cấm** revert)

- Hub hero **Tiếp tục bản đồ** + quick **Bản đồ ca** → push `#sc-patrol-map`
- MapKit live · demo OMS track + pins · isolate legend
- Basemap / legend chips: `ChipWrap` (wrap như demo `flex-wrap`)
- **Ghi điểm tuần** → toast · **cấm** sheet
- **Ghim vị trí hiện tại** → `GetCurrentLocationUseCase` · pin `.here` primary · camera follow span `0.006` · toast success
- Deny → `patrol.map.locDeny` · timeout → `patrol.map.locTimeout` · **cấm** fake lat/lng
- `NSLocationWhenInUseUsageDescription` · **cấm** chữ «GPS» trên máy
- **Appear** → `FetchPatrolSessionsUseCase` · `PatrolDtoMapper.active(from:)` → `routeKm` non-empty else `PatrolMapOverlay.nextDemoTitle` (`T-IOS-PAT-MAP` delta · `task_8f38a9c6`)

## Build (VERIFY GATE)

**PASS** — `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** (`task_8f38a9c6` · `2026-08-20`).
