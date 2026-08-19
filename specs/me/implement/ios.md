# Dev — Implement — me (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call`  
> task `task_84e8e0e2`

| Feature | `me` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmBusyOverlay` · **`LinmTabBar`** |

## Layers

| Presentation | `Presentation/Features/Me/MeView.swift` · `MeViewModel.swift` · `MeUiState.swift` · `AppRouter` **`LinmTabBar`** 5 · **cấm** `TabView` |
| Domain | `FetchProfileUseCase` · `UserProfile` · `LogoutUseCase` |
| Data | `GET auth/profile` · `UserProfileDto` |

## IA / API

- Tab **Tôi** = `#sc-me`. Home kit + `btn-logout` giữ.
- GET `auth/profile` · fallback `lastUserName`.
- Sibling tap = toast. Logout local · **cấm** POST `auth/logout`.
- iOS Cài đặt toast. Signal tap **Đã làm mới**.
- E2E: `title-me` · `row-*` · `tab-me`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** **PASS**.

## Notes

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01c** `tabLabel` **10** (cấm `minimumScaleFactor`) · tab Tuần đường **`location.fill`**.
