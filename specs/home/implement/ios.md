# Dev — Implement — home (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call`  
> task `task_8a2d59d6`

| Feature | `home` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` |
| xcodegen | **PASS** |
| Kit | `LinmHeroTools` · `LinmNetSignalMark` · `LinmQuickActions` · `LinmQuickItem` · `LinmSectionLabel` · `LinmHomeGrid` · `LinmHomeTile` · `LinmWalletCard` · `LinmTabBar` · `LinmToast` |

## Layers

| Presentation | `Presentation/Features/Home/HomeView.swift` · `HomeViewModel.swift` · `HomeUiState.swift` · `AppRouter` tab Home → `HomeView` |
| Domain | reuse `FetchProfileUseCase` · `UserProfile` · `AuthRepository.lastUserName` · `NetworkStatusRepository` |
| Data | `GET auth/profile` · **cấm** invent home/wallet/inbox |

## IA / API

- Tab **Trang Chủ** = `#sc-home` hub. **Gỡ** `PlaceholderHome*` / `LinmKitGallery` / `btn-logout`.
- GET `auth/profile` · `.who` = `fullName` trim · fallback `lastUserName` · hub không block.
- Role **ẩn live** (GAP-F-HOME-01) · wallet static demo · `notifyCount=0` ẩn · **cấm** GET inbox.
- Hồ sơ → tab **Tôi**. Sibling / signal / wallet = `LinmToast` nhãn.
- Foot Gói **cấm ship** (GAP-F-HOME-03).
- E2E: `sc-home` · `home-who` · `btn-signal` · `tile-*` · `wallet-card` · `tab-home`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** **PASS**.

## Notes

Step 4b / T-BE **N/A** — reuse Auth profile only.
