# Dev — Implement — asset-hub (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` · `/dev-ui-review`  
> task `task_746238de`

| Feature | `asset-hub` |
| assembleDebug | **PASS** |
| Kit | `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmHomeGrid` (2-col Row) |
| Frame | 412×915 |

## Layers

| Presentation | `presentation/feature/assethub/*` · `MainTabScreen` Home `NavHost` push `asset-hub` |
| Domain | cùng use case iOS · Hilt bind Integration + AiVision |
| Data | Retrofit `ApiService` 3 GET · **cấm** invent hub aggregate |

## IA / API

- Entry: Home `TileAsset` / `Wallet` → navigate AssetHub (thay toast).
- Back icon `nav-back` → pop. Wallet hub no-op. Sibling = toast nhãn.
- Appear parallel GET · fail → demo wallet · ẩn AI · **không** block hub · **không** AlertDialog.
- Camera AI indigo `#6750A4` · Cập nhật warn `#E8A317` · AI sub rút gọn `{pct}% · {routeLabel}`.
- Patrol line **không** P1. **Cấm** POST / `LazyVerticalGrid` raw / watermark Gói.

## E2E ids

`sc-asset-hub` · `nav-back` · `wallet-asset` · `tile-*` · `row-map` · `sec-ai` · `ai-pending` · `btn-confirm-ai`

## VERIFY GATE

`./gradlew :app:assembleDebug` **PASS**.

## Notes

Step 4b / T-BE **N/A**. Dual parity iOS. BFF `dotnet build` **PASS**.
