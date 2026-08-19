# Dev — Implement — me (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen`  
> task `task_84e8e0e2`

| Feature | `me` |
| dest | `./gradlew :app:assembleDebug` **BUILD SUCCESSFUL** · AVD Pixel_2 |
| Kit | same dual `LinmListRow` + chrome |

## Layers

| Presentation | `presentation/feature/me/MeScreen.kt` · `MeViewModel.kt` · `MainTabScreen.kt` |
| Domain | `FetchProfileUseCase` · `UserProfile` |
| Data | `ApiService.profile()` GET `auth/profile` |

## IA / API

- `LinmTabBar` 5 tab · **Tôi** = hub. **Không** hàng Cài đặt. **Cấm** M3 `NavigationBar`.
- GET `auth/profile` · sibling toast · logout local.
- E2E: `tab-me` · `title-me` · `row-*` · Home `btn-logout`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **PASS**.

## Notes

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01c** `tabLabel` **10** · `includeFontPadding=false` · proto **cấm** 11.
