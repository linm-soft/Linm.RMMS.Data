# Dev — Implement — asset-hub (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call` · `/dev-ui-review`  
> task `task_746238de`

| Feature | `asset-hub` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` |
| Frame | 390×844 · **cấm** iPad claim |

## Layers

| Presentation | `Presentation/Features/AssetHub/*` · `AppRouter` NavigationStack dưới tab Home |
| Domain | `FetchAssetTypesCountUseCase` · `SearchRoadRoutesUseCase` · `FetchDraftAssetCandidatesUseCase` · Integration + AiVision repos |
| Data | `GET integration/asset-types` · `GET integration/road-routes/search` · `GET ai-vision/asset-candidates?status=Draft` |

## IA / API

- Entry: Home tile **Tài sản** + wallet → push `#sc-asset-hub` (thay toast).
- Back `nav-back` · label **Trang Chủ** → pop home. Wallet trên hub = display only.
- Sibling tiles/row/AI CTA → `LinmToast` đúng nhãn · **không** push sibling.
- Appear: parallel GET · fail → wallet demo · AI ẩn · hub **không** block.
- Tile marketing giữ «32 loại tài sản» · subtitle live `totalCount`.
- Patrol iOS demo line trên wallet. **Cấm** POST confirm / `api/v1/asset-hub` / WebView / watermark Gói.

## E2E ids

`sc-asset-hub` · `nav-back` · `wallet-asset` · `tile-types` · `tile-map` · `tile-collect` · `tile-ai` · `tile-list` · `tile-adjust` · `row-map` · `sec-ai` · `ai-pending` · `btn-confirm-ai`

## VERIFY GATE

`xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** **PASS**.

## Notes

Step 4b / T-BE **N/A** — reuse live Integration + AiVision. Dual parity Android.
