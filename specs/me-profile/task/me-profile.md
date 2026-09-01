# Team lead — Task — me-profile (Hồ sơ · mobile sheet→screen)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · form hồ sơ + đổi MK · surface **full screen** `#sc-me-profile` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-ME-PROFILE` · **cấm** web Kind B admin `users` · invent tab · ERP.* · `mfeStdUrl` |
| thisAction | **Hồ sơ** `#sc-me-profile` only · entry reuse `me` `#row-profile` `#i-person` · **cấm** gộp `me-settings` / `login-logout` / web `users` (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · `me` `#row-profile` → push `#sc-me-profile` · Back → `me` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`me`** active · **cấm** deep-link web / `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · Auth NuGet + `AuthPrefixRewriteMiddleware` · **cấm** `MeProfileController` / `ProfileController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Auth via Mobile.Bff rewrite · **cấm ERP.*** · **cấm** invent RMMS `users/me` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_99a8707a` · `solution_confirm=approve` · Step 4b **n/a** · T-BE **n/a** · saContentHash `sha256:me-profile-sa-solution-20260831` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_0e0676c6` · designContentHash `sha256:me-profile-design-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_4f343d6b` · poContentHash `sha256:me-profile-po-requirement-20260831` |
| prior · data_analy | **confirmed** · `_data-analy/me-profile-control-hint.md` · `me-profile-bff-endpoints.md` · `me-profile-real-data.md` · `me-profile-action-tree.md` · contentHash `sha256:me-profile-control-hint-20260830` · realDataHash `sha256:me-profile-real-data-20260830` · bffContentHash `sha256:me-profile-bff-20260830` · actionTreeHash `sha256:me-profile-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_1e652028` |
| updatedAt | `2026-08-30T19:16:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/me-profile` / RMMS `users/me` · invent `MeProfileController` · invent org/role subtitle API · fake toast «Đã cập nhật hồ sơ» / «Đã đổi mật khẩu» khi PUT/POST fail · avatar upload P1 · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Lưu / Đổi MK / confirm (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e / `yarn build` / `yarn start:std` ở role TL · implement native Write ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse · host **OK** |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse · host **OK** |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Auth via BFF · **cấm ERP.*** · **cấm** invent RMMS profile |
| `route_confirm` | **route_a** — screen owner `me-profile` · entry `me` `#row-profile` · không tab mới · không deep-link web |
| `kit_missing_confirm` | **none** / **N/A** — TopBar / TextField / SecureField / Primary / Secondary / SectionLabel / Toast / ListRow **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — Auth profile/change-password **live** · Step 4b **Skip** · **cấm** invent |
| `T-BFF-*` | **n/a** / **reuse** — Auth rewrite + OpenAPI overlay đủ · **cấm** dedicated MeProfileController |
| `version_mismatch_action` | **recheck_new** — stamp workflow `2026.08.29.1` · rules `2026.08.29.5` · prior hashes khớp |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`me`** (Tôi) → `#sc-me` row **Hồ sơ** `#row-profile` `#i-person` → **push** `#sc-me-profile` `DES-MOB-ME-PROFILE` (thay iOS `break` / Android `Unit`). Appear = GET `auth/profile` bind form. Primary **Lưu** = PUT `auth/profile`. Section **Đổi mật khẩu** = POST `auth/change-password` (confirm local). Back → `go('me')` (iOS label **Tôi** + chevron · Android icon-only OK) · leave-confirm nếu dirty. Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng (không deep-link web / `mfeStdUrl`) |

IA lock (PO · Design · SA):

```
me (#sc-me) · row Hồ sơ #row-profile → #sc-me-profile ← this pack
#sc-me-profile → GET/PUT auth/profile · POST auth/change-password · back = me
Tab 5 shell giữ · tab me active · pack tabs: none
```

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=none` · `version_mismatch_action=recheck_new` · `2026-08-30T19:16:00.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Auth Identity via BFF · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | `GET auth/profile` · `PUT auth/profile` · `POST auth/change-password` |
| kit | reuse map dual — `LinmTopBar` · `LinmTextField` · `LinmSecureField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmSectionLabel` · `LinmToast` · Me `LinmListRow` · cite `ui/html-to-native-map.md` · typography `LinmTokens` label/section **13** · value ≥**16** (`GAP-TYP-01`) · **không** `T-KIT-*` |
| entry | `reuse=me` `#row-profile` · **cấm** reimplement hub chrome |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **Skip** — Auth Identity/profile **DONE** · **không** `/new-endpoint` / `/database-migration` / invent `rmms_me_profile*` |

---

## Live gap (TL audit 2026-08-30)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-me-profile` | **DELTA** — **không** `Presentation/Features/MeProfile/*` · `MeViewModel` `.profile` = `break` | **T-IOS-MP-01** + **T-IOS-ME-01** |
| Android `#sc-me-profile` | **DELTA** — **không** `presentation/feature/meprofile/*` · `MeIntent.Profile` = `Unit` | **T-AND-MP-01** + **T-AND-ME-01** |
| `GET auth/profile` | hub `me` `FetchProfileUseCase` **live** dual · DTO map `id`/`fullName`/`phoneNumber` (± `citizenId` DTO **chưa** map entity) · **thiếu** `email` / `userName` decode | **reuse** GET · Dev **extend** entity/DTO/mapper |
| `PUT auth/profile` | **chưa** repo method dual | **Ship** `UpdateProfileUseCase` / `AuthRepository.updateProfile` |
| `POST auth/change-password` | **chưa** dual | **Ship** `ChangePasswordUseCase` / `AuthRepository.changePassword` |
| Entry `me` `#row-profile` | iOS `break` · Android `Unit` | **thay** → push owner · refresh hub tên sau PUT 200 |
| Org subtitle hub | demo mock | **ẩn** nếu không field live (`GAP-MOB-MEPROF-ORG-01`) |
| New BE / schema / BFF controller | **không** | **T-BE-*** / **T-BFF-*** = **n/a** · Step 4b **Skip** |
| Kit TopBar/TextField/Secure/Primary/Secondary/Section/Toast/ListRow | dual map | **reuse** · **cấm** `T-KIT-*` |
| Sibling `me-settings` / `login-logout` / web `users` | out of pack | **cấm** ship / start (`GAP-MOB-ACT-06`) |
| Avatar upload / invent org API | — | **OUT** P1 |
| Watermark Gói / device label / badge P1/P2 | demo chrome | **cấm ship** |

---

## Tasks (1 action = 1 feature)

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ME-PROFILE | kit | — | **n/a** | — | Kit **đã map dual** · `kit_missing_confirm=none` — **không** giao Dev kit |
| **T-IOS-ME-01** | ios | route_a · kit n/a | **pending** | `/agent-dev-ios` | `MeViewModel` `.profile` `break` → `setOpenMeProfile` / navigate push `#sc-me-profile` · wire `AppRouter` · **cấm** reimplement hub · refresh displayName sau PUT |
| **T-IOS-MP-01** | ios | SA · Design · T-IOS-ME-01 | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/MeProfile/*` · extend `UserProfile`/`UserProfileDto`/`AuthDtoMapper` (`email`/`userName`/optional `citizenId`) · `UpdateProfileUseCase` · `ChangePasswordUseCase` · AuthRepository PUT/POST · leave modal optional · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-ME-01** | android | route_a · kit n/a | **pending** | `/agent-dev-android` | `MeIntent.Profile` `Unit` → `setOpenMeProfile` / `navController.navigate("me-profile")` · wire `MainTabScreen` · refresh tên sau PUT |
| **T-AND-MP-01** | android | SA · Design · T-AND-ME-01 · serial after iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Compose parity dual · same API · Retrofit PUT/POST · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Auth profile/change-password **live** · Step 4b **Skip** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` · **cấm** invent `rmms_me_profile*` |
| **T-BFF-01** | bff | — | **reuse** | — | Auth rewrite + OpenAPI overlay **live** · **cấm** `MeProfileController` · optional Dev verify `dotnet build` (**không** TL) |
| T-QA-TAB-01 | qa cite | Dev dual PASS | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **me** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-ME-PROFILE | qa | T-IOS-MP-01 · T-AND-MP-01 | pending | `/agent-qa-mobile` | Maestro slug `me-profile` only · `yarn e2e-qa-mobile` · store PNG `qa/store/me-profile` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ME-01` + `T-IOS-MP-01` cùng turn) → `/agent-dev-android` (`T-AND-ME-01` + `T-AND-MP-01`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** invent me-profile API.

---

## Source map (cite live paths)

### T-IOS-ME-01 + T-IOS-MP-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/MeProfile/*` — screen · form · pwd section · toast · leave optional · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/Me/MeViewModel.swift` — `.profile` **thay `break`** → `onOpenMeProfile()` · `MeView.swift` `#row-profile` giữ |
| Router | `App/AppRouter.swift` — pattern peer Feedback/CamView: `@State showMeProfileFromMe` + `navigationDestination` + `meViewModel.setOpenMeProfile` |
| Use cases | **reuse** `FetchProfileUseCase` · **NEW** `UpdateProfileUseCase` · **NEW** `ChangePasswordUseCase` |
| Repo | `Domain/Repositories/AuthRepository.swift` + `Data/Repositories/AuthRepositoryImpl.swift` — add `updateProfile` · `changePassword` → BFF `PUT auth/profile` · `POST auth/change-password` · **cấm** URLSession trong View |
| DTO / entity | extend `UserProfile` / `UserProfileDto` / `AuthDtoMapper.profile` — `email` · `userName` · optional `citizenId` display · **cấm** invent org fields |
| Request DTOs (NEW) | `MobileAuthProfileUpdateRequest` flat `FullName`/`PhoneNumber`/`Email` · `MobileAuthChangePasswordRequest` `CurrentPassword`/`NewPassword` only |
| Copy | `MeProfileCopy` / LinmCopy keys VN SSOT Design |
| State | form fields · secure ephemeral · busySave · busyPwd · toast · dirty · leaveConfirm |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-ME-PROFILE` · `#sc-me-profile` · optional `DES-MOB-LEAVE` |
| kit | cite `ui/html-to-native-map.md` |
| BFF | `GET/PUT auth/profile` · `POST auth/change-password` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent path · **cấm** fake 200 |

### T-AND-ME-01 + T-AND-MP-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/meprofile/*` — screen · form · pwd · toast · leave |
| Entry wire | `presentation/feature/me/MeViewModel.kt` — `MeIntent.Profile` **thay `Unit`** → `onOpenMeProfile()` · `MainTabScreen.kt` `navController.navigate("me-profile")` + composable peer Feedback/CamView |
| Use cases / repo | same dual · `ApiService` add `@PUT("auth/profile")` · `@POST("auth/change-password")` |
| DTO / entity | extend `UserProfile` / `UserProfileDto` / `AuthDtoMapper` parity |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES · frame 412×915 |
| kit | same kit map · Material chrome shell only |
| BFF | same 3 paths · offline toast parity |

### T-BE-* / T-BFF — n/a · reuse

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse live Auth GET/PUT profile · POST change-password · **cấm** invent RMMS / MeProfileController |
| T-BE-MIG | **n/a** — reuse Auth Identity · Step 4b **Skip** · **cấm** invent bảng |
| T-BFF-01 | **reuse** — Auth NuGet + rewrite · **cấm** clone controller |
| Step 4b | **Skip** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Hồ sơ** full (`DES-MOB-ME-PROFILE`): nav back → `me` · title **Hồ sơ** · avatar display `#i-person` · fields · primary **Lưu** · section **Đổi mật khẩu** · 3 SecureField · secondary **Đổi mật khẩu** · toast · **cấm** bottom-sheet chrome · **cấm** badge P1/P2.
2. Appear: GET `auth/profile` → bind `FullName` / `PhoneNumber` / `UserName` (± `Email` nếu GET có · ± `CitizenId` display-only nếu có) · fail → fallback `lastWho`/`lastUserName` + toast lỗi · **cấm** hardcode «Nguyễn Văn A» production · **cấm** fake profile.
3. Primary **Lưu** → PUT `auth/profile` body `FullName`* (trim non-empty) · `PhoneNumber` · `Email` · busy · toast **Đã cập nhật hồ sơ** khi 200 · refresh hub tên · **cấm** native alert · **cấm** toast ok khi fail. Empty `fullName` → disable Lưu **hoặc** validation toast · **cấm** PUT trống tên.
4. Section **Đổi mật khẩu**: current + new + confirm (local match only · **không** wire Confirm) · CTA → POST `{ CurrentPassword, NewPassword }` · toast **Đã đổi mật khẩu** khi 200 · clear secure · mismatch/thiếu → toast · **cấm** POST · **cấm** fake ok.
5. Readonly: `userName` / Id display · `citizenId` **chỉ nếu** GET có · **cấm** PUT invent CCCD/DOB (`GAP-MOB-MEPROF-CITIZEN-01`).
6. Avatar: circle `#i-person` display · **không** upload P1.
7. Entry (reuse Me): `#row-profile` → **push** `#sc-me-profile` (thay no-op) · live FullName · phụ **ẩn** nếu không field (`GAP-MOB-MEPROF-ORG-01`) · iOS chevron · Android **không** chevron · back «Tôi» / chevron → `me`.
8. Kit reuse map · **cấm** system alert · **cấm** watermark Gói / device label.
9. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
10. Tab 5 shell giữ · pack `tabs: none` · tab **me** active (`T-QA-TAB-01`).
11. Offline / fail: toast · giữ form · **cấm** fake 200 · **cấm** OfflineQueue P1 · **cấm** full-screen block.
12. Leave dirty (optional `DES-MOB-LEAVE`): in-app modal · **cấm** system alert.
13. Store: account profile + password · **không** GPS/camera claim mới (`GAP-SA-STORE-01`) · **cấm** localhost/LAN · family `1` **cấm** iPad listing claim.
14. **Cấm** ship sibling `me-settings` / `login-logout` / web admin `users` trên pack này.
15. App chỉ `{BffPrefix}` · Bearer Keychain / Encrypted · **cấm** biết Auth/RMMS `:500x` / `:5101`.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | iOS **Tôi** + chevron · Android icon-only · `go('me')` |
| title | `LinmTopBar` | **Hồ sơ** fixed 17 |
| avatar | circle `#i-person` | 44 iOS / 40 Android · **không** upload |
| fullName | `LinmTextField` | label **13** / ≥**16** · required · PUT `FullName` |
| phoneNumber | `LinmTextField` phone | PUT `PhoneNumber` |
| email | `LinmTextField` | PUT `Email` · GET optional empty OK |
| userName | Text readonly | GET only |
| citizenId | Text readonly opt | hide nếu thiếu · **cấm** PUT |
| btnSave | `LinmPrimaryButton` | PUT · busy · toast |
| sectionPwd | `LinmSectionLabel` **13** | **Đổi mật khẩu** |
| currentPassword | `LinmSecureField` | POST `CurrentPassword` |
| newPassword | `LinmSecureField` | POST `NewPassword` |
| confirmPassword | `LinmSecureField` | local only |
| btnChangePwd | `LinmSecondaryButton` | POST change-password |
| toastSaveOk / toastPwdOk / toastErr | `LinmToast` | **cấm** alert · **cấm** fake ok |
| leave* | feature overlay / Material dialog card | optional dirty back |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | optional `dotnet build` nếu đụng Mobile.Bff | PASS |
| BE | **n/a** pack này | — |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Load | `GET auth/profile` | `MobileAuthUser` · extend decode email/userName/citizenId |
| Save | `PUT auth/profile` | `FullName`* · `PhoneNumber` · `Email` · flat · **cấm** parent JSON |
| Change pwd | `POST auth/change-password` | `CurrentPassword` · `NewPassword` only · Confirm local |
| Invent | `me-profile` / RMMS `users/me` / MeProfileController | **cấm** |

### Demo fallback SSOT (Design mock only — **không** ship fake API)

| Field | Value |
|-------|-------|
| Title | Hồ sơ |
| CTA save | Lưu |
| Toast save | Đã cập nhật hồ sơ |
| Section pwd | Đổi mật khẩu |
| CTA pwd | Đổi mật khẩu |
| Toast pwd | Đã đổi mật khẩu |
| Back | Tôi |

Runtime: **bind live** hoặc empty/toast — **cấm** fake khi fail.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline / fail → toast · giữ form · **cấm** fake · **cấm** full-screen block |
| AC-D-02 | GPS — **N/A** |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / leave overlay |
| AC-D-06 | Safe area · TopBar + form + section + CTAs + tab |
| AC-D-10 | Tab **Tôi** active · **cấm** invent tab / segment |
| AC-D-11 | Camera — **N/A** · avatar display only |
| AC-F-01 | Appear GET profile → bind fields |
| AC-F-02 | Lưu → PUT · toast OK/fail · refresh hub tên |
| AC-F-03 | Empty fullName → disable/toast · **cấm** PUT trống |
| AC-F-04 | Đổi MK → local confirm → POST · toast · clear secure |
| AC-F-05 | Confirm mismatch → toast · **cấm** POST |
| AC-F-06 | Email GET thiếu → empty · vẫn PUT (`GAP-MOB-MEPROF-EMAIL-01`) |
| AC-F-07 | citizenId hide nếu thiếu · **cấm** PUT |
| AC-F-08 | Entry `me` → push owner · **cấm** no-op sau ship |
| AC-F-09 | App paths **chỉ** `auth/profile` · `auth/change-password` qua Mobile.Bff |
| AC-F-10 | **Cấm** watermark Gói / device label / invent org subtitle |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `me-settings` | sibling | Cài đặt · **cấm** gộp |
| `login-logout` | sibling / hub | Đăng xuất · **cấm** gộp |
| `users` (web) | peer Kind B | admin CRUD · **OUT** mobile |
| `me` | reuse shipped | entry only · **cấm** reimplement hub |
| `login-forgot` | peer | forgot/reset · **OUT** pack này |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `me-profile`.

---

## Deps

```
T-KIT-ME-PROFILE (n/a)
T-BE-API / T-BE-MIG (n/a) · T-BFF-01 (reuse)
route_a + SA confirmed
  → T-IOS-ME-01 → T-IOS-MP-01
  → T-AND-ME-01 → T-AND-MP-01
T-IOS + T-AND → T-QA-ME-PROFILE (+ T-QA-TAB-01 cite) (QA role)
```

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `me-profile` / **`sheet`** (surface screen) |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-ME-01` · `T-IOS-MP-01` · `T-AND-ME-01` · `T-AND-MP-01` · T-BE **n/a** · T-BFF **reuse** · T-KIT **n/a** |
| BFF | `GET/PUT auth/profile` · `POST auth/change-password` |
| Real-data | `_data-analy/me-profile-real-data.md` + SA field map |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/me-profile.md | **PASS** · T-IOS-ME-01 · T-IOS-MP-01 · T-AND-ME-01 · T-AND-MP-01 · T-BE n/a · T-BFF reuse · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / control |
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
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T19:16:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-control-hint-20260830 |
| realDataHash | sha256:me-profile-real-data-20260830 |
| bffContentHash | sha256:me-profile-bff-20260830 |
| actionTreeHash | sha256:me-profile-action-tree-20260830 |
| poContentHash | sha256:me-profile-po-requirement-20260831 |
| designContentHash | sha256:me-profile-design-20260831 |
| saContentHash | sha256:me-profile-sa-solution-20260831 |
| tlContentHash | sha256:me-profile-tl-task-20260831 |
| taskId | `task_1e652028` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
