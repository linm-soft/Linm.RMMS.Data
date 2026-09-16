# Dev — Implement — asset-kcht-dashboard (iOS)

> Status: **in_progress** · `/edit-mobile-feature` · hồ sơ tài sản hang-mục parity web

| Feature | `asset-kcht-dashboard` (mobile) · entry `asset-hub` |
| dest | **iPhone 17 Pro Max** |
| changeScope | `edit_page` |
| Kit | `LinmTopBar` · `LinmAssetKchtPict` · `LinmBusyOverlay` · `LinmToast` |
| Frame | 390×844 · **cấm** iPad claim |

## Summary

Màn `#sc-asset-kcht` **Hạng mục KCHT**: 40 ô (icon tròn · nhãn · count vi-VN) khớp web `KCHT_TILES` `/so-ts/hang-muc`. Entry: hub wallet **HỒ SƠ TÀI SẢN** + tile **32 loại tài sản**. Count live: `GET asset/road-assets/summary-by-type` + `integration/road-routes` + `asset/pavement-sections`. Tap loại TS → `asset-list?type=`. Gap/report/tuyến/đoạn → toast. Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/AssetKcht/*` | View + VM + state |
| `Domain/Entities/KchtHangMucCatalog.swift` | 40 ô SSOT web |
| `Domain/UseCases/FetchKchtDashboardCountsUseCase.swift` | 3 GET parallel |
| `App/AppRouter.swift` · `AppContainer.swift` | push stack |
| `Presentation/Features/AssetHub/*` | wallet + tileTypes → kcht |

## Notes

Build dest **iPhone 17 Pro Max** — xem log turn này.
