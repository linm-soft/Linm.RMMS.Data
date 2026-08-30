# Dev — Implement — home (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call`  
> task `task_8a2d59d6`

| Feature | `home` |
| assembleDebug | **PASS** |
| Kit | `LinmHeroTools` · `LinmNetSignalMark` · `LinmQuickActions` · `LinmQuickItem` · `LinmSectionLabel` · `LinmHomeGrid` · `LinmHomeTile` · `LinmWalletCard` · `LinmTabBar` · `LinmToast` |

## Layers

| Presentation | `presentation/feature/home/HomeScreen.kt` · `HomeViewModel.kt` · `HomeUiState.kt` · `MainTabScreen` Home → `HomeScreen` |
| Domain | reuse `FetchProfileUseCase` · `UserProfile` · `AuthRepository.lastUserName` · `NetworkStatusRepository` |
| Data | `GET auth/profile` · **cấm** invent home/wallet/inbox |

## IA / API

- Tab **Trang Chủ** = `#sc-home` hub · **không required login**. Guest **Khách** + `btn-home-login`.
- Staff GET `auth/profile` · **cấm** GET profile khi guest.
- Role **ẩn live** · wallet static · badge 0 ẩn · **cấm** GET inbox.
- Hồ sơ → tab **Tôi**. Notify → toast **Thông báo** + `includeNotification` trên `#sc-home` · **cấm** push inbox. Sibling / signal / wallet = toast nhãn.
- Grid 3×2 = 2× `LinmHomeGrid` (kit Row). Foot Gói **cấm ship**.
- E2E: `sc-home` · `home-who` · `btn-home-login` · `btn-signal` · `tile-*` · `wallet-card` · `tab-home`.
- `/edit-mobile-feature` 2026-08-29: guest Home + overlay login · `./gradlew :app:assembleDebug` **PASS**.
- `/edit-mobile-feature` 2026-08-29: guest FAQ + privacy overlays · `btn-home-faq` / `btn-home-privacy`.
- `/edit-mobile-feature` 2026-08-29: FAQ/privacy back = `login.backHome` **Về Trang Chủ**.

## VERIFY GATE

`./gradlew :app:assembleDebug` **PASS**.

## Notes

Step 4b / T-BE **N/A** — reuse Auth profile only. Dual parity iOS.

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-THEME-01** / **GAP-MOB-COPY-01** — `LinmCopy.t` chrome · `state.who` giữ khi API có tên.

`/edit-mobile-feature` 2026-08-19: notify `#sc-home` toast + local notify · `assembleDebug`.
