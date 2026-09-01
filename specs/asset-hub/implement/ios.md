# Dev — Implement — asset-hub (iOS)

> Status: **PASS** · `/edit-mobile-feature` · cleanup_mock · task `task_9c9293d2`

| Feature | `asset-hub` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` |
| xcodegen | **PASS** |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` |
| Frame | 390×844 · **cấm** iPad claim |

## Summary

Live-only wallet: gỡ `demoTitle`/`demoCount`/`patrolLine` fallback. GET OK = route title + types count · GET fail = empty wallet + toast `asset.hub.toast.loadFail` (**cấm** «Đang dùng dữ liệu mẫu»). AI pending ẩn khi empty. Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `Domain/UseCases/FetchAssetTypesCountUseCase.swift` | Outcome live-only |
| `Domain/UseCases/SearchRoadRoutesUseCase.swift` | Outcome live-only |
| `Domain/Entities/AssetHubModels.swift` | remove demoTitle/demoCount/patrolLine |
| `Presentation/Features/AssetHub/AssetHubViewModel.swift` | fail toast · no demo fallback |
| `Presentation/Features/AssetHub/AssetHubUiState.swift` | empty defaults |
| `Presentation/Features/AssetHub/AssetHubView.swift` | wallet subtitle live-only |
| `Presentation/Shared/LinmCopy.swift` | `asset.hub.toast.loadFail` |
| `Presentation/Features/AssetCollect/AssetCollectViewModel.swift` | SearchRoadRoutesOutcome adapter |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Hub tiles | sibling nav / toast · **work** |
| wallet | live GET · **work** |
| Create / Edit / View / Copy | **N/A** hub · **không** GAP-P2-ACT |

## VERIFY GATE

`xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** **PASS** · BFF `dotnet build` **PASS**.

## Notes

Prior: GAP-MOB-AHUB-ALIGN-01 tile stretch · GAP-MOB-THEME-01 copy. Dual parity Android.
