# Dev — Implement — asset-kcht-dashboard (Android)

> Status: **in_progress** · `/edit-mobile-feature` · hồ sơ tài sản hang-mục parity web

| Feature | `asset-kcht-dashboard` (mobile) · entry `asset-hub` |
| assembleDebug | pending |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmAssetKchtPict` · `LinmBusyOverlay` · `LinmToast` |
| Frame | 412×915 |

## Summary

Cùng 40 ô + count + drill iOS. Route `asset-kcht` · list lọc `asset-list/type/{type}`. Dual copy `asset.kcht.*` trong `mobile-strings.json`.

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetkcht/*` | Screen + VM |
| `domain/model/KchtHangMucCatalog.kt` | 40 ô SSOT web |
| `domain/usecase/FetchKchtDashboardCountsUseCase.kt` | 3 GET |
| `MainTabScreen.kt` | nav `asset-kcht` |
| `assethub/*` | wallet + TileTypes → kcht |

## Notes

`./gradlew :app:assembleDebug` — xem log turn này.
