# Dev — Android implement — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| platform | Android |
| status | **done** |
| task | `T-AND-ASSET-ADJUST` |
| changeScope | `new_page` |
| packKind | `screen` |
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| verifiedAt | `2026-08-31T00:04:50.000Z` |
| build | **PASS** · `./gradlew :app:assembleDebug` |

## Shipped

- `presentation/feature/assetadjust/*` — Compose parity dual
- Hub `TileAdjust` → `navigate("asset-adjust")`
- `MainTabScreen` route `asset-adjust` · Sửa → `asset-detail/{id}`
- `ApiService` `@DELETE("asset/road-assets/{id}")` · repo `softDelete`
- `FetchAssetAdjustListUseCase` · `SoftDeleteRoadAssetUseCase`
- Modal in-app · LoginToastHub · EmptyChrome · kit TopBar/Search/ListRow
- Demo fallback **1** row Android SSOT

## AC map (P1)

| AC | Result |
|----|--------|
| Screen parity VN | PASS |
| Hub tile → navigate | PASS |
| GET + search debounce | PASS |
| Soft DELETE + toast Code | PASS |
| Offline fail toast · no fake 200 | PASS |

## Out / N/A

- PUT UI · media · e2e · Step 4b · invent BFF controller

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| contentHash | sha256:asset-adjust-implement-android-20260831 |
| priorTlHash | sha256:asset-adjust-tl-task-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-android dorGate=PASS -->
