# Dev — Implement — asset-hub (Android)

> Status: **PASS** · `/edit-mobile-feature` · cleanup_mock · task `task_9c9293d2`

| Feature | `asset-hub` |
| assembleDebug | **PASS** |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmHomeGrid` (2-col Row) |
| Frame | 412×915 |

## Summary

Live-only wallet: gỡ `demoTitle`/`demoCount` fallback. GET OK = route title + types count · GET fail = empty wallet + toast `asset.hub.toast.loadFail` (**cấm** demo SSOT). AI pending ẩn khi empty. Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `domain/usecase/FetchAssetTypesCountUseCase.kt` | Outcome live-only |
| `domain/usecase/SearchRoadRoutesUseCase.kt` | Outcome live-only |
| `domain/model/AssetHubModels.kt` | remove demoTitle/demoCount |
| `presentation/feature/assethub/AssetHubViewModel.kt` | fail toast · no demo fallback |
| `presentation/feature/assethub/AssetHubUiState.kt` | empty defaults |
| `presentation/copy/LinmCopy.kt` | `asset.hub.toast.loadFail` |
| `presentation/feature/assetcollect/AssetCollectViewModel.kt` | SearchRoadRoutesOutcome adapter |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Hub tiles | sibling nav / toast · **work** |
| wallet | live GET · **work** |
| Create / Edit / View / Copy | **N/A** hub · **không** GAP-P2-ACT |

## VERIFY GATE

`./gradlew :app:assembleDebug` **PASS** · BFF `dotnet build` **PASS**.

## Notes

`/edit-mobile-feature` 2026-09-16: wallet + tile **32 loại** → `#sc-asset-kcht` hang-mục 40 ô (web `/so-ts/hang-muc`). Dual Android.

`./gradlew :app:assembleDebug` — xem log turn này.
