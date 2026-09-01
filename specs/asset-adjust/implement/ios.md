# Dev — iOS implement — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| platform | iOS |
| status | **done** |
| task | `T-IOS-ASSET-ADJUST` |
| changeScope | `new_page` |
| packKind | `screen` |
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| verifiedAt | `2026-08-31T00:04:50.000Z` |
| build | **PASS** · `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` |

## Shipped

- `Presentation/Features/AssetAdjust/*` — `#sc-asset-adjust` list+search+Sửa/Bớt + `#md-asset-remove`
- Hub wire: `AssetHubViewModel.tileAdjust` → `setOnOpenAdjust` push (toast stub removed)
- `AppRouter` · `showAssetAdjust` nested under hub · Sửa → `showAssetDetail` + Id
- `ApiClient.delete` · `AssetRepository.softDelete` · `DELETE asset/road-assets/{id}`
- `FetchAssetAdjustListUseCase` (live/empty/offlineDemo) · `SoftDeleteRoadAssetUseCase`
- Copy VN SSOT · kit TopBar/Search/ListRow/Secondary/Toast/Empty · **cấm** UIAlert

## AC map (P1)

| AC | Result |
|----|--------|
| Screen DES-MOB-ASSET-ADJUST | PASS |
| Hub tile → push | PASS |
| GET list(+search) debounce 350ms | PASS |
| Empty / offline demo + toast | PASS |
| Sửa → detail + Id | PASS |
| Bớt modal + soft DELETE + toast Code | PASS |
| Kit reuse / no system alert | PASS |

## Out / N/A

- PUT edit UI · media · Step 4b · e2e (queued QA)
- BE new endpoint · AssetAdjustController · invent path

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| contentHash | sha256:asset-adjust-implement-ios-20260831 |
| priorTlHash | sha256:asset-adjust-tl-task-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-ios dorGate=PASS -->
