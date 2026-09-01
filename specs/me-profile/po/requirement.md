# PO — Requirement — me-profile (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · form hồ sơ + đổi MK từ Me · khớp STATUS/scan `_form-type-mobile`) · surface demo = **full screen** `#sc-me-profile` (`.screen` · **không** bottom-sheet chrome) |
| stack | `native_dual` |
| thisAction | **Hồ sơ** `#sc-me-profile` only · owner `DES-MOB-ME-PROFILE` · entry Me `#sc-me` `row-profile` · **cấm** gộp `me-settings` / `login-logout` / web `users` admin |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_4f343d6b` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/me-profile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/me-profile-control-hint.md` · `me-profile-bff-endpoints.md` · `me-profile-action-tree.md` · `me-profile-real-data.md` · contentHash `sha256:me-profile-control-hint-20260830` · real-data `sha256:me-profile-real-data-20260830` · bffContentHash `sha256:me-profile-bff-20260830` · action-tree `sha256:me-profile-action-tree-20260830` · cluster `specs/me-profile/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/me-profile-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-31T01:05:00.000Z` |
| taskId | `task_4f343d6b` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/me-profile` / `api/v1/users/me` RMMS · invent `MeProfileController` / `ProfileController` trên Mobile.Bff · invent org/role subtitle API · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `me-settings` / `login-logout` (`GAP-MOB-ACT-06`) · enqueue Lưu / Đổi MK / confirm pwd (`GAP-MOB-ACT-07`) · fake toast «Đã cập nhật hồ sơ» / «Đã đổi mật khẩu» khi PUT/POST fail · avatar upload P1 · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Hồ sơ** native dual (iOS SwiftUI + Android Compose): xem / sửa họ tên · SĐT · email phiên · đổi mật khẩu Auth — từ hub **Tôi**. Persona: Tuần đường · Hạt · hiện trường (tab Tôi). App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**≠** web admin `users` · **≠** `me-settings` · **≠** `login-logout`.

**1 action = 1 feature.** Slug `me-profile` = screen `#sc-me-profile` `DES-MOB-ME-PROFILE`. **Cấm** gộp Cài đặt / Đăng xuất / admin users (`GAP-MOB-ACT-01`). GET load · Lưu (PUT) · Đổi MK (POST) · confirm local = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: Me row hồ sơ `row-profile` · `#i-person` · `go('me-profile')` (thay no-op live).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub `me` live · `row-profile` **no-op** (iOS `break` · Android `Unit`) · **chưa** `#sc-me-profile`.

| Layer | Current (native) | New (CTX + Auth live + entry) |
|-------|------------------|-------------------------------|
| Me entry | `row-profile` no-op | **Push** `#sc-me-profile` «Hồ sơ» · back → Me |
| Screen | Không màn Hồ sơ | Full `#sc-me-profile` · `DES-MOB-ME-PROFILE` · form + đổi MK |
| Load | Hub chỉ GET tên | GET `auth/profile` bind form fields |
| Save | — | Primary «Lưu» → PUT `auth/profile` · toast «Đã cập nhật hồ sơ» |
| Password | — | Section Đổi mật khẩu → POST `auth/change-password` · toast «Đã đổi mật khẩu» |
| Email | — | PUT `Email` · GET thiếu → empty (**GAP-MOB-MEPROF-EMAIL-01**) |
| Org subtitle | Demo mock hub | Live **ẩn** phụ nếu không field (**GAP-MOB-MEPROF-ORG-01**) |
| Demo screen | Chỉ entry row trên `#sc-me` | Design dual `#sc-me-profile` (**GAP-MOB-MEPROF-DEMO-01**) |

**Không** bảng Current vs New web admin. SSOT visual = Design dual HTML `#sc-me-profile` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Tôi» + chevron · Android icon-btn chevron only — **OK**). Entry SSOT đã có trên `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row person.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-me-profile` `DES-MOB-ME-PROFILE`: nav back → `me` · title **Hồ sơ** · avatar display · fields · primary **Lưu** · section **Đổi mật khẩu** · 3 SecureField · secondary **Đổi mật khẩu** · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`me`** active · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Appear → GET `auth/profile` · bind `FullName` / `PhoneNumber` / `UserName` (± `Email` nếu GET có · ± `CitizenId` display-only nếu có) · fail → fallback `lastUserName` + toast lỗi · **cấm** hardcode «Nguyễn Văn A» production · **cấm** fake profile.
3. Primary **Lưu** → PUT `auth/profile` body `MobileAuthProfileUpdateRequest` (`FullName` * trim non-empty · `PhoneNumber` · `Email`) · busy · toast **Đã cập nhật hồ sơ** khi 200 · refresh hub tên · **cấm** native alert · **cấm** toast ok khi fail / 422 / mạng. Empty `fullName` → disable Lưu **hoặc** validation toast · **cấm** PUT trống tên.
4. Section **Đổi mật khẩu**: `currentPassword` + `newPassword` + `confirmPassword` (local match only · **không** wire Confirm) · CTA **Đổi mật khẩu** → POST `auth/change-password` `{ CurrentPassword, NewPassword }` · toast **Đã đổi mật khẩu** khi 200 · clear secure fields · mismatch / thiếu → toast validation · **cấm** POST · **cấm** fake ok.
5. Readonly: `userName` / Id display · `citizenId` **chỉ nếu** GET có · **cấm** PUT invent CCCD/DOB (`GAP-MOB-MEPROF-CITIZEN-01`).
6. Avatar: circle `#i-person` display · **không** upload P1.
7. Entry (reuse Me, **cấm** reimplement hub): Me **row-profile** → **push** `#sc-me-profile` (thay no-op) · live FullName · phụ **ẩn** nếu không field live (`GAP-MOB-MEPROF-ORG-01`) · iOS chevron · Android **không** chevron (peer GAP-MOB-UX-04b) · back «Tôi» / chevron → `me`.
8. Kit reuse: `LinmTopBar` · `LinmTextField` · `LinmSecureField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmSectionLabel` · `LinmToast` · Me `LinmListRow` `#i-person`. **Cấm** invent tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
9. App chỉ `{BffPrefix}` · **cấm** biết Auth/RMMS `:500x` / `:5101` · token Keychain / Encrypted.
10. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std` / `yarn build` web.
11. QA (role sau): Maestro slug `me-profile` only · live sim 6.9" + emulator · store PNG `qa/store/me-profile` · **cấm** `yarn e2e-qa` web · **cấm** test sibling settings/logout/admin in-scope.
12. BE align: **không** invent path — reuse Auth NuGet `GetProfile` / `UpdateProfile` / `ChangePassword` qua Mobile.Bff rewrite. Step 4b **Skip** (Auth Identity/profile **DONE**). **Cấm** dedicated MeProfileController · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/me-profile.md` | feature · Auth profile sheet |
| CTX-02 | `docs/context/features/me.md` | entry hub |
| CTX-03 | `docs/context/features/users.md` § Hồ sơ | peer web — **OUT** mobile admin |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-me` row person | entry iOS · `row-profile` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-me` row person | entry Android · **không** chevron |
| DEM-03 | `specs/me-profile/ui/prototype/{ios,android}/index.html` `#sc-me-profile` | pack dual — **Design tạo** (**GAP-MOB-MEPROF-DEMO-01**) |
| DES | `DES-MOB-ME-PROFILE` | IA dưới Tôi · Design chốt |
| MAP | `docs/html-to-native-map.md` | TopBar / TextField / Secure / Primary / Secondary / Section / Toast / ListRow |
| STR | demo rows SSOT real-data § Demo | VN copy |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/me-profile-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/me-profile-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/me-profile-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/me-profile-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | packKind `sheet` · ACTION-TREE |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · row-profile no-op |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · row-profile no-op |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` · Auth rewrite |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | **cấm ERP.*** · Auth via BFF · **cấm** invent RMMS `users/me` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / TextField / Secure / Primary / Secondary / Section / Toast / ListRow |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

### Demo rows SSOT (Design mock only — **không** fake PUT/POST 200)

| Field | Value |
|-------|-------|
| Title | Hồ sơ |
| Entry (hub) | live FullName · phụ ẩn nếu không field · `#i-person` |
| CTA save | Lưu |
| Toast save | Đã cập nhật hồ sơ |
| Section pwd | Đổi mật khẩu |
| CTA pwd | Đổi mật khẩu |
| Toast pwd | Đã đổi mật khẩu |
| Back | Tôi |

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-me-profile`. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tôi | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('me')` · iOS text «Tôi» · Android icon-only OK |
| title | Hồ sơ | TopBar title | * | `LinmTopBar` | fixed 17 · **cấm** badge P1/P2 |
| avatar | (person) | Avatar display | * | circle `#i-person` | **không** upload P1 · 44/40 |
| fullName | Họ và tên | TextField | * | `LinmTextField` | label **13** / field **≥16** · GET/PUT `FullName` |
| phoneNumber | Số điện thoại | TextField phone | | `LinmTextField` | GET/PUT `PhoneNumber` |
| email | Email | TextField | | `LinmTextField` | PUT `Email` · GET thiếu → empty (**GAP-MOB-MEPROF-EMAIL-01**) |
| userName | Tên đăng nhập | Text display | * | | readonly · GET `UserName` / Id · **không** PUT |
| citizenId | CCCD/CMND | Text display | | | **chỉ nếu** GET có · **cấm** PUT |
| btnSave | Lưu | PrimaryButton | * | `LinmPrimaryButton` | PUT · toast ok · busy |
| sectionPwd | Đổi mật khẩu | SectionLabel | * | `LinmSectionLabel` | **13** |
| currentPassword | Mật khẩu hiện tại | SecureField | * (khi đổi) | `LinmSecureField` | required khi đổi |
| newPassword | Mật khẩu mới | SecureField | * (khi đổi) | `LinmSecureField` | required khi đổi |
| confirmPassword | Xác nhận mật khẩu mới | SecureField | * (khi đổi) | `LinmSecureField` | local match · **không** wire |
| btnChangePwd | Đổi mật khẩu | SecondaryButton | * | `LinmSecondaryButton` | POST change-password |
| toastSaveOk | Đã cập nhật hồ sơ | Toast | * | `LinmToast` | sau PUT 200 |
| toastPwdOk | Đã đổi mật khẩu | Toast | * | `LinmToast` | sau POST 200 |
| toastErr | (lỗi mạng / 422) | Toast | * | `LinmToast` | **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowProfile | (live FullName) | ListRow nav | `LinmListRow` person circle · iOS chevron | `me` · `go('me-profile')` · `testTag`/`accessibilityId` `row-profile` |
| rowProfileSub | (live hoặc ẩn) | ListRow sub | | **không** invent org (`GAP-MOB-MEPROF-ORG-01`) |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `me-profile`? |
|---------------|--------|------|---------------------|
| Load form | GET | `auth/profile` | **yes** — `MobileAuthUser` |
| Lưu hồ sơ | PUT | `auth/profile` | **yes** — `MobileAuthProfileUpdateRequest` |
| Đổi mật khẩu | POST | `auth/change-password` | **yes** — `MobileAuthChangePasswordRequest` (2 field) |
| Nav back | — | — | local → `me` |
| Confirm password | — | — | local only · **không** API |
| Toast ok / err | — | — | UI after PUT/POST |
| Logout | POST | `auth/logout` | **OUT** — `login-logout` / hub `me` |
| Admin users | * | `integration/users*` | **OUT** — web `users` |

**Cấm** `GET/PUT me-profile` · `users/me` RMMS trên app · `MeProfileController` · DbContext trên Mobile.Bff · app `:5101`.

### Bind map (P1)

| UI / session | → Wire |
|--------------|--------|
| fullName | GET/PUT `FullName` * |
| phoneNumber | GET/PUT `PhoneNumber` |
| email | PUT `Email` · GET optional |
| userName | GET `UserName` / Id · readonly |
| citizenId | GET optional · display-only |
| currentPassword | POST `CurrentPassword` * |
| newPassword | POST `NewPassword` * |
| confirmPassword | local only |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-MEPROF-NAV-01 | row-profile no-op | **IN P1:** push `#sc-me-profile` · back → Me |
| GAP-MOB-MEPROF-SCR-01 | Thiếu màn | **IN P1:** full `#sc-me-profile` `DES-MOB-ME-PROFILE` |
| GAP-MOB-MEPROF-LOAD-01 | Form load | **IN P1:** GET `auth/profile` bind · fail → lastName + toast |
| GAP-MOB-MEPROF-SAVE-01 | CTA Lưu | **IN P1:** PUT + toast «Đã cập nhật hồ sơ» · **cấm** fake ok |
| GAP-MOB-MEPROF-PWD-01 | Đổi MK | **IN P1:** POST change-password + toast «Đã đổi mật khẩu» · confirm local |
| GAP-MOB-MEPROF-DEMO-01 | Chưa dual HTML | **IN Design:** tạo dual `#sc-me-profile` + reviewUrl **cả hai** trước Approve · **không** block PO DoR |
| GAP-MOB-MEPROF-EMAIL-01 | GET thiếu Email | **IN P1:** empty email nếu GET thiếu · vẫn cho sửa PUT |
| GAP-MOB-MEPROF-ORG-01 | Subtitle org/role | **Không invent** org/role API · ẩn phụ nếu không field live |
| GAP-MOB-MEPROF-CITIZEN-01 | CCCD / DOB | **Display-only** nếu GET có · **cấm** PUT invent |
| GAP-MOB-MEPROF-CONFIRM-01 | Confirm pwd | Confirm = validate local · body chỉ current+new |
| Avatar upload | P2 | **DEFER** — display only |
| Sibling enqueue | Lưu / Đổi MK / settings / logout | **none** — cùng slug hoặc pack riêng (`GAP-MOB-ACT-06/07`) |
| Cluster path | `specs/me-profile/specs/_data-analy/` | **N/A.** Dùng `_data-analy/me-profile-*.md` |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup trên pack này |
| UNCLEAR fields | — | **none** — hash skip · **cấm** re-crawl CTX/demo |
| Step 4b | Auth schema | **Skip** — DONE · **cấm** migration ở PO |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Hồ sơ | `#sc-me-profile` `DES-MOB-ME-PROFILE` · iOS + Android | **Screen** (tab me · packKind meta `sheet` · **không** Modal/Sheet chrome) | edit (profile) + change-password | GET/PUT `auth/profile` · POST `auth/change-password` · toast · back Me | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: web admin users CRUD · `me-settings` · `login-logout` · avatar upload · invent org API · watermark Gói · invent path.

Reuse only: `me` (entry / back) · Auth session / Bearer.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · GET fail → lastName fallback + toast · PUT/POST fail → toast lỗi · **cấm** toast ok · **cấm** fake 200 |
| AC-D-02 | GPS | **N/A** |
| AC-D-03 | Leave dirty | Back với form đã sửa → confirm leave in-app (optional Design) · **cấm** native alert |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | TextField / Secure focus · keyboard **không** đè CTA Lưu / Đổi mật khẩu |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tôi** active · **cấm** segment trên surface · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | **N/A** P1 (avatar upload = P2) |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | GET profile bind · empty email OK nếu GET thiếu |
| AC-F-02 | Validate save | `fullName` trống → không PUT thành công |
| AC-F-03 | Save | PUT `auth/profile` · toast «Đã cập nhật hồ sơ» · **cấm** fake |
| AC-F-04 | Change pwd | POST change-password · confirm local · toast «Đã đổi mật khẩu» · **cấm** fake |
| AC-F-05 | Error | Toast lỗi · giữ form · **cấm** clear fields khi fail (trừ clear secure sau pwd OK) |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome / Android no entry chevron) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Entry | Me `row-profile` → push owner · **cấm** no-op sau ship |
| AC-F-08 | Org | **Cấm** invent org/role subtitle API · ẩn phụ nếu không field |
| AC-F-09 | ≠ admin users | **Cấm** CRUD `integration/users*` · **cấm** gộp settings/logout |

Typography: label/tab/section **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit · optional Design) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| PUT/POST fail | `LinmToast` lỗi · **cấm** alert · **cấm** toast ok |
| Offline GET/PUT/POST | Toast lỗi · fallback lastName cho GET · **cấm** fake 200 |
| Save success | Toast **Đã cập nhật hồ sơ** |
| Pwd success | Toast **Đã đổi mật khẩu** · clear secure fields |
| Empty fullName | Disable Lưu / validation toast · **cấm** PUT |
| Confirm mismatch | Toast validation · **cấm** POST |

## 11. Out of scope (this pack)

- web admin `users` CRUD / schema
- `me-settings` · `login-logout` · `login-forgot`
- Avatar upload / picker
- Invent org/role / CCCD PUT / DOB PUT
- Invent `api/v1/me-profile` / RMMS `users/me`
- Step 4b / migration Auth
- Watermark Gói / device label / mfeStdUrl / ERP.* / badge P1/P2
- Enqueue sibling · re-scan demo HTML
- Bottom-sheet chrome / `#sheet-*`

## 12. KPI (HĐ Gói 1 — màn này)

Hồ sơ = xem/sửa thông tin phiên + đổi mật khẩu Auth từ hub Tôi → GET/PUT/POST thật · toast thành công. DoD pack: `#sc-me-profile` dual + Me nav + form + Auth paths — **không** omni-implement settings / logout / admin users trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `me-profile` / **`sheet`** (confirmed · surface **screen** · **không** bottom-sheet) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/me-profile/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM entry `#sc-me` · Design tạo `#sc-me-profile` dual · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-me-profile` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web trên pack mobile |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-me-profile` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar / TextField / Secure / Primary / Secondary / Section / Toast / ListRow reuse · `kit_missing_confirm` nếu cần · **cấm** bottom-sheet chrome |
| BFF | `me-profile-bff-endpoints.md` · GET/PUT `auth/profile` · POST `auth/change-password` |
| Open questions | §7 đã chốt — Design **tạo dual** GAP-MOB-MEPROF-DEMO-01 · email empty OK · **không** invent org · Lưu/Đổi MK = API thật |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | Step 4b Skip · Auth rewrite live · GAP-MOB-MEPROF-EMAIL-01 · **cấm** ERP.* |

Design: HIG + Material · IA lock Tab 5 me · copy VN khớp controlHint · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`) · **bắt buộc** dual `#sc-me-profile` trước Approve.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-31T01:05:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-profile-po-requirement-20260831 |
| priorControlHintHash | sha256:me-profile-control-hint-20260830 |
| priorRealDataHash | sha256:me-profile-real-data-20260830 |
| bffContentHash | sha256:me-profile-bff-20260830 |
| actionTreeHash | sha256:me-profile-action-tree-20260830 |
| taskId | `task_4f343d6b` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
