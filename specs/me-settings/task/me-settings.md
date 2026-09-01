# Team lead — Task — me-settings (Cài đặt · mobile sheet→screen)

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| title | [Mobile] [Tôi] -> Cài đặt |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA chốt · quyền/OS + about · surface **full screen** `#sc-me-settings` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-ME-SETTINGS` · **cấm** web Kind A–G / Lin* list / ERP.* · `mfeStdUrl` |
| thisAction | **Cài đặt** `#sc-me-settings` only · entry reuse `me` `#row-settings` `#i-gear` · **cấm** gộp `me-profile` / `login-logout` / `ops` / `feedback` / web `users` (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · `me` `#row-settings` → push `#sc-me-settings` · Back → `me` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`me`** active · **cấm** deep-link web / `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · **P1 không gọi** settings resource · **cấm** `MeSettingsController` / preferences |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** · **không** Domain settings · Step 4b **Skip** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_7d695bcc` · `solution_confirm=approve` · Step 4b **Skip** · T-BE **n/a** · saContentHash `sha256:me-settings-sa-solution-20260830` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_d7095795` · designContentHash `sha256:me-settings-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_27ff3357` · poContentHash `sha256:me-settings-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/me-settings-control-hint.md` · `me-settings-bff-endpoints.md` · `me-settings-real-data.md` · `me-settings-action-tree.md` · contentHash `sha256:me-settings-control-hint-20260830` · realDataHash `sha256:me-settings-real-data-20260830` · bffContentHash `sha256:me-settings-bff-local-only-20260830` · actionTreeHash `sha256:me-settings-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_9ebfc60b` |
| updatedAt | `2026-08-30T20:40:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/me-settings` / `preferences` / `device-settings` · invent `MeSettingsController` / `SettingsController` trên Mobile.Bff · invent RMMS Domain settings · fake toast «Đã lưu cài đặt» · invent HTTPS privacy URL · request GPS/Camera permission từ settings · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue openAppSettings / version / privacy / offline (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e / `yarn build` / `yarn start:std` ở role TL · implement native Write ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse · host **OK** |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse · host **OK** |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **không** invent Domain settings · Step 4b Skip |
| `route_confirm` | **route_a** — screen owner `me-settings` · entry `me` `#row-settings` · không tab mới · không deep-link web |
| `kit_missing_confirm` | **N/A** / **none** — TopBar / SectionLabel / ListRow / Secondary / Toast **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — **không** endpoint mới · **cấm invent** · Step 4b **Skip** |
| `T-BFF-*` | **n/a** / **no-op** — **cấm** MeSettingsController · **cấm** preferences OpenAPI |
| `version_mismatch_action` | **recheck_new** — stamp TL `2026.08.29.1` · workflow/rules `2026.08.31.2` · prior hashes khớp STATUS |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`me`** (Tôi) → `#sc-me` row **Cài đặt** `#row-settings` `#i-gear` → **push** `#sc-me-settings` `DES-MOB-ME-SETTINGS` (thay toast `me.row.settings`). Appear/onResume = refresh OS location + camera status. Rows/CTA → openAppSettings · fail toast. Version = Bundle. Privacy = `home.privacy.*`. Offline = nav `patrol-offline`. Back → `go('me')` (iOS label **Tôi** + chevron · Android icon-only OK). Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng (không deep-link web / `mfeStdUrl`) |

IA lock (PO · Design · SA):

```
me (#sc-me) · row Cài đặt #row-settings → #sc-me-settings ← this pack
#sc-me-settings → OS status + openAppSettings · Bundle · privacy · offline reuse · back = me
Tab 5 shell giữ · tab me active · pack tabs: none
```

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=N/A` · `version_mismatch_action=recheck_new` · `2026-08-30T20:40:00.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · **P1 = 0 HTTP settings** |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — **không** settings path P1 |
| API P1 | **none** — OS Settings URL / App details · Bundle · `LinmCopy` · nav reuse |
| kit | reuse map dual — `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmSecondaryButton` · `LinmToast` · Me `LinmListRow` `#i-gear` · cite `ui/html-to-native-map.md` · typography `LinmTokens` section **13** · row title **16** · row sub **13** · CTA **16** · title **17** (`GAP-TYP-01`) · **không** `T-KIT-*` |
| entry | `reuse=me` `#row-settings` · **cấm** reimplement hub chrome |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **Skip** — không schema · **không** `/new-endpoint` / `/database-migration` / invent `rmms_me_settings*` |

---

## Live gap (TL audit 2026-08-30)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-me-settings` | **DELTA** — **không** `Presentation/Features/MeSettings/*` · `MeViewModel` `.settings` = toast `me.row.settings` | **T-IOS-MS-01** + **T-IOS-ME-01** |
| Android `#sc-me-settings` | **DELTA** — **không** `presentation/feature/mesettings/*` · `MeIntent.Settings` = toast hub | **T-AND-MS-01** + **T-AND-ME-01** |
| Entry `me` `#row-settings` | iOS toast · Android toast · `testTag`/`accessibilityId` `row-settings` live | **thay** → push owner |
| openAppSettings helper | **chưa** trên Me/settings | **Ship** iOS `openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` · fail → toast |
| Location / Camera status | dùng request+check ở feature khác | **Read-only** status trên settings · **cấm** request · reuse `CoreLocationReader` / `AVCaptureDevice.authorizationStatus` patterns |
| Bundle version | Info.plist / versionName live | **Display** `x.y.z (build)` · empty «—» |
| Privacy copy | `home.privacy.*` + `HomePrivacyView` live | **Reuse** push/sheet · **cấm** invent HTTPS |
| Offline row | `patrol-offline` owner live | **Nav reuse** · **cấm** reimplement queue |
| BFF/BE settings | **không** | **T-BE-*** / **T-BFF-*** = **n/a** · Step 4b **Skip** · **cấm invent** |
| Kit TopBar/Section/ListRow/Secondary/Toast | dual map | **reuse** · **cấm** `T-KIT-*` |
| Sibling `me-profile` / `ops` / `login-logout` / `feedback` | out of pack | **cấm** ship / start (`GAP-MOB-ACT-06`) |
| Watermark Gói / device label / badge P1/P2 | demo chrome | **cấm ship** |
| Tab 5 shell | dưới Me | **giữ** · pack `tabs: none` · tab `me` active |

---

## Tasks (1 action = 1 feature)

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ME-SETTINGS | kit | — | **n/a** | — | Kit **đã map dual** · `kit_missing_confirm=N/A` — **không** giao Dev kit |
| **T-IOS-ME-01** | ios | route_a · kit n/a | **pending** | `/agent-dev-ios` | `MeViewModel` `.settings` toast → `setOpenMeSettings` / navigate push `#sc-me-settings` · wire `AppRouter` peer Feedback/MeProfile · **cấm** reimplement hub |
| **T-IOS-MS-01** | ios | SA · Design · T-IOS-ME-01 | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/MeSettings/*` · OS status read · openAppSettings · Bundle version · privacy reuse · offline nav · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-ME-01** | android | route_a · kit n/a | **pending** | `/agent-dev-android` | `MeIntent.Settings` toast → `setOpenMeSettings` / `navController.navigate("me-settings")` · wire `MainTabScreen` peer Feedback/MeProfile |
| **T-AND-MS-01** | android | SA · Design · T-AND-ME-01 · serial after iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Compose parity dual · `ACTION_APPLICATION_DETAILS_SETTINGS` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — **cấm invent** settings · Step 4b **Skip** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` · **cấm** invent `rmms_me_settings*` |
| **T-BFF-01** | bff | — | **n/a** / **no-op** | — | **cấm** `MeSettingsController` · **cấm** preferences OpenAPI · optional Dev verify `dotnet build` (**không** TL) |
| T-QA-TAB-01 | qa cite | Dev dual PASS | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **me** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-ME-SETTINGS | qa | T-IOS-MS-01 · T-AND-MS-01 | pending | `/agent-qa-mobile` | Maestro slug `me-settings` only · `yarn e2e-qa-mobile` · store PNG `qa/store/me-settings` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ME-01` + `T-IOS-MS-01` cùng turn) → `/agent-dev-android` (`T-AND-ME-01` + `T-AND-MS-01`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** invent preferences API.

---

## Source map (cite live paths)

### T-IOS-ME-01 + T-IOS-MS-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/MeSettings/*` — screen `DES-MOB-ME-SETTINGS` · TopBar · sections · ListRows · Secondary CTA · Toast · privacy panel · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/Me/MeViewModel.swift` — `.settings` **thay toast** → `onOpenMeSettings()` · `MeView.swift` `#row-settings` **giữ** · **cấm** reimplement hub |
| Router | `App/AppRouter.swift` — pattern peer Feedback/MeProfile: `@State showMeSettingsFromMe` + `navigationDestination` + `meViewModel.setOpenMeSettings` |
| OS status | read-only — `CLLocationManager.authorizationStatus` / reuse `CoreLocationReader` pattern · `AVCaptureDevice.authorizationStatus(for: .video)` · map «Đã cấp / Chưa cấp / Không xác định» · **cấm** `requestWhenInUse` / `requestAccess` từ settings |
| openAppSettings | `UIApplication.shared.open(URL(string: UIApplication.openSettingsURLString)!)` · catch fail → toast |
| Version | `Bundle.main` `CFBundleShortVersionString` + `CFBundleVersion` → `x.y.z (build)` · empty «—» |
| Privacy | reuse `HomePrivacyView` / `LinmCopy` `home.privacy.title` / `home.privacy.body` · push/sheet · **cấm** invent HTTPS |
| Offline | callback `setOpenPatrolOffline` / nav owner `patrol-offline` · **cấm** reimplement queue |
| HTTP / ApiClient | **không** call trên slug · **cấm** invent repository settings · **cấm** URLSession trong View |
| Copy | `LinmCopy` / MeSettings keys VN SSOT Design · keep `me.row.settings` hub |
| DI | `App/AppContainer.swift` (nếu cần helper) · **không** BFF settings use case |
| ssot.zones | `DES-MOB-ME-SETTINGS` · `#sc-me-settings` · privacy panel |
| kit | cite `ui/html-to-native-map.md` · `#i-chevron-left` · `#i-mappin` · `#i-camera` · `#i-bell` · `#i-sync` · `#i-info` · `#i-gear` |
| BFF | **none P1** · base host only · **cấm** invent path · **cấm** fake «Đã lưu» |

### T-AND-ME-01 + T-AND-MS-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/mesettings/*` — Compose screen parity · frame 412×915 |
| Entry wire | `presentation/feature/me/MeViewModel.kt` — `MeIntent.Settings` **thay toast** → `onOpenMeSettings()` · `MeScreen.kt` `#row-settings` **giữ** · Android hub **không** chevron |
| Router | `presentation/navigation/MainTabScreen.kt` — `navController.navigate("me-settings")` + composable peer Feedback/MeProfile · `onOpenMeSettings` |
| OS status | `ContextCompat.checkSelfPermission` / location + camera · map phụ SSOT · **cấm** request từ settings · refresh `onResume` |
| openAppSettings | `Settings.ACTION_APPLICATION_DETAILS_SETTINGS` + `Uri.fromParts("package", …)` · fail → toast |
| Version | `BuildConfig.VERSION_NAME` + `VERSION_CODE` → `x.y.z (build)` · empty «—» |
| Privacy | reuse Home privacy copy keys · push/sheet · **cấm** invent HTTPS |
| Offline | nav `patrol-offline` reuse · **cấm** reimplement |
| HTTP | **không** ApiService settings · **cấm** invent |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | **none P1** |

### T-BE-* / T-BFF — n/a · no-op

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · local/OS only · **cấm** invent settings endpoint |
| T-BE-MIG | **n/a** — Step 4b **Skip** · **cấm** invent bảng |
| T-BFF-01 | **n/a** / **no-op** — **cấm** MeSettingsController · **cấm** preferences OpenAPI |
| Step 4b | **Skip** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Cài đặt** full (`DES-MOB-ME-SETTINGS`): nav back → `me` · title **Cài đặt** · section **Quyền ứng dụng** · rows Vị trí / Camera / Thông báo hệ thống · CTA **Mở Cài đặt hệ thống** · section **Đồng bộ** · row **Hàng đợi mất sóng** · section **Thông tin** · **Phiên bản** · row **Chính sách quyền riêng tư** · toast OS fail · **cấm** bottom-sheet chrome · **cấm** badge P1/P2 header.
2. Appear / onResume → đọc OS location + camera auth → phụ «Đã cấp / Chưa cấp / Không xác định» · **không** request permission từ settings · **không** BFF.
3. Tap row Vị trí / Camera / Thông báo hệ thống **hoặc** CTA → openAppSettings · fail → toast **Không mở được Cài đặt hệ thống** · **cấm** fake success · **cấm** native alert.
4. **Phiên bản** readonly Bundle format `x.y.z (build)` · empty → «—» · **không** API.
5. Row **Chính sách quyền riêng tư** → push/sheet `home.privacy.title` / `home.privacy.body` · **cấm** invent HTTPS (`GAP-MOB-MESET-PRIVACY-01` open tới khách · P1 static ship).
6. Row **Hàng đợi mất sóng** → nav `reuse=patrol-offline` · **cấm** reimplement queue · **cấm** enqueue.
7. Entry (reuse Me): `#row-settings` → **push** `#sc-me-settings` (thay toast) · `#i-gear` · iOS chevron · Android **không** chevron · back «Tôi» / chevron → `me`.
8. Kit reuse map · typography section 13 · row 16/13 · CTA 16 · title 17 · **cấm** invent kit · **cấm** watermark Gói / device label.
9. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
10. Tab 5 shell giữ · pack `tabs: none` · tab **me** active (`T-QA-TAB-01` · `GAP-TAB-01`).
11. Offline: màn **vẫn mở** · **cấm** full-screen block · **cấm** fake «Đã lưu cài đặt».
12. Store: permission status display + open OS settings · **không** claim preference sync / xóa TK mới (`GAP-SA-STORE-01`) · **cấm** localhost/LAN · family `1` **cấm** iPad listing claim.
13. **Cấm** ship sibling `me-profile` / `ops` / `login-logout` / `feedback` trên pack này.
14. App chỉ `{BffPrefix}` khi gọi API **khác** · slug này **0 HTTP settings** · **cấm** biết `:500x` / `:5101`.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | iOS **Tôi** + chevron · Android icon-only · `go('me')` |
| title | `LinmTopBar` | **Cài đặt** fixed 17 · **cấm** badge |
| sectionPerm | `LinmSectionLabel` **13** | **Quyền ứng dụng** |
| rowLocation | `LinmListRow` `#i-mappin` | status OS · tap openAppSettings |
| rowCamera | `LinmListRow` `#i-camera` | status OS · tap openAppSettings |
| rowNotifyOs | `LinmListRow` `#i-bell` | openAppSettings · **≠** ops inbox |
| btnOpenOs | `LinmSecondaryButton` | **Mở Cài đặt hệ thống** · fail toast |
| sectionSync | `LinmSectionLabel` **13** | **Đồng bộ** |
| rowOffline | `LinmListRow` `#i-sync` | nav `patrol-offline` reuse |
| sectionAbout | `LinmSectionLabel` **13** | **Thông tin** |
| appVersion | Text display | Bundle `x.y.z (build)` · empty «—» |
| rowPrivacy | `LinmListRow` `#i-info` | privacy panel `home.privacy.*` |
| toastOsFail | `LinmToast` | **Không mở được Cài đặt hệ thống** · **cấm** alert · **cấm** fake ok |
| meRow | `LinmListRow` `#i-gear` | reuse Me · `row-settings` · iOS chevron · Android **không** |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | optional `dotnet build` nếu đụng Mobile.Bff | PASS / no-op OK |
| BE | **n/a** pack này | — |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| openAppSettings | — | OS Settings URL / App details · **client** |
| Location / Camera status | — | OS permission APIs read-only · **không** request |
| Version | — | Bundle / BuildConfig |
| Privacy | — | `LinmCopy` `home.privacy.*` |
| Offline | — | nav `patrol-offline` reuse |
| Invent | `me-settings` / `preferences` / MeSettingsController | **cấm** |

### Demo fallback SSOT (Design mock only — **không** ship fake API)

| Field | Value |
|-------|-------|
| Title | Cài đặt |
| Section perm | Quyền ứng dụng |
| Status granted | Đã cấp |
| Status denied | Chưa cấp |
| Status unknown | Không xác định |
| CTA OS | Mở Cài đặt hệ thống |
| Toast fail | Không mở được Cài đặt hệ thống |
| Section sync | Đồng bộ |
| Offline row | Hàng đợi mất sóng |
| Section about | Thông tin |
| Privacy row | Chính sách quyền riêng tư |
| Back | Tôi |

Runtime: **bind OS/Bundle/copy/nav** — **cấm** fake «Đã lưu cài đặt» · **cấm** invent HTTPS.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → màn vẫn mở · row offline nav owner · **cấm** full-screen block |
| AC-D-02 | GPS — **status-only** · openAppSettings · **cấm** request từ settings |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — phản hồi = `LinmToast` |
| AC-D-06 | Safe area · TopBar + sections + rows + CTA + tab |
| AC-D-10 | Tab **Tôi** active · **cấm** invent tab / segment |
| AC-D-11 | Camera — **status-only** · openAppSettings · **cấm** request |
| AC-F-01 | Appear/onResume → refresh location + camera status phụ |
| AC-F-02 | Rows/CTA → openAppSettings · fail toast SSOT |
| AC-F-03 | Version Bundle `x.y.z (build)` · empty «—» |
| AC-F-04 | Privacy → `home.privacy.*` · **cấm** invent URL |
| AC-F-05 | Offline → nav `patrol-offline` · **cấm** reimplement |
| AC-F-06 | Entry `me` → push owner · **cấm** toast stub sau ship |
| AC-F-07 | **Cấm** HTTP settings / invent preferences |
| AC-F-08 | **Cấm** watermark Gói / device label / badge P1/P2 / fake «Đã lưu» |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `me-profile` | sibling | Hồ sơ · **cấm** gộp |
| `login-logout` | sibling / hub | Đăng xuất · **cấm** gộp |
| `ops` | sibling | inbox Thông báo · **≠** Thông báo hệ thống · **cấm** gộp |
| `feedback` | sibling | Góp ý · **cấm** gộp |
| `patrol-offline` | reuse | nav only · **cấm** enqueue |
| `me` | reuse shipped | entry only · **cấm** reimplement hub |
| `users` (web) | peer Kind B | admin · **OUT** mobile |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `me-settings`.

---

## Deps

```
T-KIT-ME-SETTINGS (n/a)
T-BE-API / T-BE-MIG (n/a) · T-BFF-01 (n/a)
route_a + SA confirmed
  → T-IOS-ME-01 → T-IOS-MS-01
  → T-AND-ME-01 → T-AND-MS-01
T-IOS + T-AND → T-QA-ME-SETTINGS (+ T-QA-TAB-01 cite) (QA role)
```

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `me-settings` / **`sheet`** (surface screen) |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-ME-01` · `T-IOS-MS-01` · `T-AND-ME-01` · `T-AND-MS-01` · T-BE **n/a** · T-BFF **n/a** · T-KIT **n/a** |
| BFF P1 | **local/OS only** · **cấm invent** preferences · Step 4b Skip |
| Real-data | `_data-analy/me-settings-real-data.md` + SA field map §B |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/me-settings.md | **PASS** · T-IOS-ME-01 · T-IOS-MS-01 · T-AND-ME-01 · T-AND-MS-01 · T-BE n/a · T-BFF n/a · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / preferences |
| ios_repo + android_repo + route_confirm | **PASS** · repos có trên host · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-control-hint-20260830 |
| realDataHash | sha256:me-settings-real-data-20260830 |
| bffContentHash | sha256:me-settings-bff-local-only-20260830 |
| actionTreeHash | sha256:me-settings-action-tree-20260830 |
| poContentHash | sha256:me-settings-po-requirement-20260830 |
| designContentHash | sha256:me-settings-design-20260830 |
| saContentHash | sha256:me-settings-sa-solution-20260830 |
| tlContentHash | sha256:me-settings-tl-task-20260830 |
| taskId | `task_9ebfc60b` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
