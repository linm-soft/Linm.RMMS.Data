# Dev — Implement — asset-kcht-dashboard (iOS)

> Status: **done** · `/edit-mobile-feature` · hồ sơ tài sản hang-mục parity web

| Feature | `asset-kcht-dashboard` (mobile) · entry `asset-hub` |
| dest | **iPhone 17 Pro Max** |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmAssetKchtPict` · `LinmBusyOverlay` · `LinmToast` |
| Frame | 390×844 · **cấm** iPad claim |

## Summary

Màn `#sc-asset-kcht` **Hạng mục KCHT**: 40 ô stats (icon tròn · nhãn · count vi-VN) khớp web `KCHT_TILES` `/so-ts/hang-muc`. Entry: hub wallet **HỒ SƠ TÀI SẢN** + tile **32 loại tài sản**. Count live: `GET asset/road-assets/summary-by-type` + `integration/road-routes` + `asset/pavement-sections`. **Cấm** tap card. Back TopBar only. Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/AssetKcht/*` | View + VM + state |
| `Domain/Entities/KchtHangMucCatalog.swift` | 40 ô SSOT web |
| `Domain/UseCases/FetchKchtDashboardCountsUseCase.swift` | 3 GET parallel |
| `App/AppRouter.swift` · `AppContainer.swift` | push stack |
| `Presentation/Features/AssetHub/*` | wallet + tileTypes → kcht |

## Notes

`xcodegen generate && xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build` → **PASS** 2026-09-16.

Hành vi: hub wallet/tile push `#sc-asset-kcht` · 40 card 1 cột **display-only** · count live / «—» khi nguồn lỗi · **cấm** tap / drill.
