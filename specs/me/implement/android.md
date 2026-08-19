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

- `LinmTabBar` 5 tab · **Tôi** = hub. Hàng **Cài đặt** toast (`row-settings`). **Cấm** M3 `NavigationBar` · **cấm** pill nền tab.
- GET `auth/profile` · sibling toast · logout local.
- E2E: `tab-me` · `title-me` · `row-*` · Home `btn-logout`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **PASS** (2026-08-19 Cài đặt + tab no-pill).

## Notes

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01d** `tabLabel` **13** · tab Tuần đường **`LinmMapPinGlyph`**.

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01e** `LinmTabBar` glyph 22 căn giữa pill · `LinmListRow` `listLeading` 30 · logout slot trống. `assembleDebug`.

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-UX-04** `row-settings` Cài đặt toast · **GAP-MOB-ALIGN-01f** `LinmTabBar` **không** pill nền (chỉ tint). `assembleDebug`.

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01g** tab outline `LinmHouseGlyph`/`Warning`/`Wrench`/`Person` · **cấm** `Icons.Filled` / `Build`. `assembleDebug`.
