# Dev — Implement — asset-kcht-dashboard (Android)

> Status: **done** · `/edit-mobile-feature` · hồ sơ tài sản hang-mục parity web

| Feature | `asset-kcht-dashboard` (mobile) · entry `asset-hub` |
| assembleDebug | **PASS** |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmAssetKchtPict` · `LinmBusyOverlay` · `LinmToast` |
| Frame | 412×915 |

## Summary

Cùng 40 ô stats iOS. Route `asset-kcht`. Dual copy `asset.kcht.*` trong `mobile-strings.json`. **Cấm** tap card.

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetkcht/*` | Screen + VM |
| `domain/model/KchtHangMucCatalog.kt` | 40 ô SSOT web |
| `domain/usecase/FetchKchtDashboardCountsUseCase.kt` | 3 GET |
| `MainTabScreen.kt` | nav `asset-kcht` |
| `assethub/*` | wallet + TileTypes → kcht |

## Notes

`./gradlew :app:assembleDebug` → **PASS** 2026-09-16 (BUILD SUCCESSFUL).

Hành vi khớp iOS: hub wallet/tile → `asset-kcht` · 40 card **display-only** · count live / «—» · **cấm** tap / drill.
