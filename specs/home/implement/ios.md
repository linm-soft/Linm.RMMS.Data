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

- Tab **Trang Chủ** = `#sc-home` hub · **không required login**. Guest `.who` **Khách** + `btn-home-login`.
- Staff GET `auth/profile` · `.who` = `fullName` · **cấm** GET profile khi guest.
- Role **ẩn live** (GAP-F-HOME-01) · wallet static demo · `notifyCount=0` ẩn · **cấm** GET inbox.
- Hồ sơ → tab **Tôi**. Notify → toast **Thông báo** + `includeNotification` trên `#sc-home` · tap UN → tab Trang Chủ + replay · **cấm** push `#sc-ops`. Sibling / signal / wallet = `LinmToast` nhãn.
- Foot Gói **cấm ship** (GAP-F-HOME-03).
- E2E: `sc-home` · `home-who` · `btn-home-login` · `btn-signal` · `tile-*` · `wallet-card` · `tab-home`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** **PASS**.

## Notes

Step 4b / T-BE **N/A** — reuse Auth profile only.

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-THEME-01** / **GAP-MOB-COPY-01** — `LinmCopy.t` chrome · `state.who` giữ khi API có tên.

`/edit-mobile-feature` 2026-08-19: notify `#sc-home` toast + local UN · tap banner → Trang Chủ + replay · dest **iPhone 17 Pro Max**.

`/edit-mobile-feature` 2026-08-29: guest Home + overlay login · `btn-home-login` · `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro Max** **PASS**.

`/edit-mobile-feature` 2026-08-29: guest FAQ + privacy overlays · `btn-home-faq` / `btn-home-privacy`.

`/edit-mobile-feature` 2026-08-29: FAQ/privacy back = `login.backHome` **Về Trang Chủ** · tap 44 · dismiss overlay.
