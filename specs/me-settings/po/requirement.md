# PO — Requirement — me-settings (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| title | [Mobile] [Tôi] -> Cài đặt |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · Cài đặt quyền/OS + about từ Me · khớp STATUS/scan `_form-type-mobile`) · surface demo = **full screen** `#sc-me-settings` (`.screen` · **không** bottom-sheet chrome) |
| stack | `native_dual` |
| thisAction | **Cài đặt** `#sc-me-settings` only · owner `DES-MOB-ME-SETTINGS` · entry Me `#sc-me` `row-settings` · **cấm** gộp `me-profile` / `login-logout` / `ops` / `feedback` / web `users` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_27ff3357` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/me-settings` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/me-settings-control-hint.md` · `me-settings-bff-endpoints.md` · `me-settings-action-tree.md` · `me-settings-real-data.md` · contentHash `sha256:me-settings-control-hint-20260830` · real-data `sha256:me-settings-real-data-20260830` · bffContentHash `sha256:me-settings-bff-local-only-20260830` · action-tree `sha256:me-settings-action-tree-20260830` · cluster `specs/me-settings/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/me-settings-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-30T20:17:00.000Z` |
| taskId | `task_27ff3357` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/me-settings` / `preferences` / `device-settings` · invent `MeSettingsController` / `SettingsController` trên Mobile.Bff · invent preference sync API · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `me-profile` / `ops` / `login-logout` / `feedback` (`GAP-MOB-ACT-06`) · enqueue openAppSettings / version / privacy / offline (`GAP-MOB-ACT-07`) · fake toast «Đã lưu cài đặt» khi không write API · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Cài đặt** native dual (iOS SwiftUI + Android Compose): mở quyền hệ thống (Vị trí · Camera · Thông báo) · phiên bản app · chính sách quyền riêng tư · shortcut hàng đợi offline — từ hub **Tôi**. Persona: Tuần đường · Hạt · hiện trường (tab Tôi). App **chỉ** `{BffBase}/mobile-bff/api/v1/…` khi gọi API khác — **slug này P1 = local / OS / Bundle · không** Auth/RMMS settings controller. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**≠** `me-profile` (hồ sơ / đổi MK) · **≠** `login-logout` · **≠** `ops` inbox · **≠** web admin `users`.

**1 action = 1 feature.** Slug `me-settings` = screen `#sc-me-settings` `DES-MOB-ME-SETTINGS`. **Cấm** gộp Hồ sơ / Đăng xuất / Góp ý / Camera xem / inbox Thông báo (`GAP-MOB-ACT-01`). openAppSettings · version display · privacy copy · nav offline = **cùng slug hoặc reuse** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: Me row **Cài đặt** `row-settings` · `#i-gear` · `go('me-settings')` (thay toast `me.row.settings`).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub `me` live · `row-settings` = **toast** cả 2 OS · **chưa** `#sc-me-settings`.

| Layer | Current (native) | New (CTX + OS local + entry) |
|-------|------------------|------------------------------|
| Me entry | `row-settings` toast `me.row.settings` | **Push** `#sc-me-settings` «Cài đặt» · back → Me |
| Screen | Không màn Cài đặt | Full `#sc-me-settings` · `DES-MOB-ME-SETTINGS` · quyền + about |
| OS deep-link | Deny modals copy «Mở Cài đặt → …» only | openAppSettings từ màn + CTA |
| Version | — | Bundle version display `x.y.z (build)` |
| Privacy | Privacy chỉ guest Home | Row reuse `home.privacy.*` |
| Offline | Me / Home entry riêng | Row nav `reuse=patrol-offline` |
| Demo screen | Chỉ entry toast trên `#sc-me` | Design dual `#sc-me-settings` (**GAP-MOB-MESET-DEMO-01**) |

**Không** đổi (OUT): hub rows Hồ sơ / Góp ý / Camera xem / Thông báo inbox / Đăng xuất · invent preference sync API.

**Không** bảng Current vs New web admin. SSOT visual = Design dual HTML `#sc-me-settings` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Tôi» + chevron · Android icon-btn chevron only — **OK**). Entry SSOT đã có trên `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row gear · iOS `.chev` · Android **không** chevron (peer GAP-MOB-UX-04b).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-me-settings` `DES-MOB-ME-SETTINGS`: nav back → `me` · title **Cài đặt** · section **Quyền ứng dụng** · rows Vị trí / Camera / Thông báo hệ thống · CTA **Mở Cài đặt hệ thống** · section **Đồng bộ** · row **Hàng đợi mất sóng** · section **Thông tin** · **Phiên bản** · row **Chính sách quyền riêng tư** · toast lỗi OS. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`me`** active · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header · **cấm** segment.
2. Appear / onResume → đọc OS permission status (Vị trí · Camera) → phụ ListRow «Đã cấp / Chưa cấp / Không xác định» · **không** request permission từ settings (request thuộc attendance/patrol) · **không** BFF.
3. Tap row Vị trí / Camera / Thông báo hệ thống **hoặc** CTA **Mở Cài đặt hệ thống** → `openAppSettings` (iOS `UIApplication.openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS`) · fail → toast **Không mở được Cài đặt hệ thống** · **cấm** fake success · **cấm** native alert.
4. **Phiên bản** readonly từ Bundle (`CFBundleShortVersionString` + build / `versionName` + `versionCode`) format `x.y.z (build)` · empty → «—» · **không** API.
5. Row **Chính sách quyền riêng tư** → push/sheet nội dung local `LinmCopy` `home.privacy.title` / `home.privacy.body` · **cấm** invent HTTPS landing URL (URL khi khách giao — **GAP-MOB-MESET-PRIVACY-01**).
6. Row **Hàng đợi mất sóng** → nav `reuse=patrol-offline` · **cấm** reimplement queue · **cấm** enqueue sibling.
7. Entry (reuse Me, **cấm** reimplement hub): Me **row-settings** → **push** `#sc-me-settings` (thay toast) · `#i-gear` · iOS chevron · Android **không** chevron (peer GAP-MOB-UX-04b) · `testTag`/`accessibilityId` `row-settings` · back «Tôi» / chevron → `me`.
8. Kit reuse: `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmSecondaryButton` · `LinmToast` · Me entry `LinmListRow` `#i-gear`. Icons: `#i-chevron-left` · `#i-mappin` · `#i-camera` · `#i-bell` · `#i-sync` · `#i-info` · **cấm** invent icon / tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
9. App chỉ `{BffPrefix}` khi gọi API — **slug này không** gọi settings resource · **cấm** invent preferences path · token Keychain / Encrypted (n/a Auth call trên slug).
10. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS (không đổi BFF P1) — **cấm** `yarn start:std` / `yarn build` web.
11. QA (role sau): Maestro slug `me-settings` only · live sim 6.9" + emulator · store PNG `qa/store/me-settings` · **cấm** `yarn e2e-qa` web · **cấm** test sibling profile/logout/ops/feedback in-scope.
12. BE align: **không** invent path — P1 local/OS only · Step 4b **Skip** · **cấm** dedicated MeSettingsController · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/me-settings.md` | feature · local/OS settings sheet |
| CTX-02 | `docs/context/features/me.md` | entry hub |
| CTX-03 | `docs/context/features/me-profile.md` | peer — **OUT** gộp |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse offline queue |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-me` row gear | entry iOS · `row-settings` · toast → wire |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-me` row gear | entry Android · **không** chevron |
| DEM-03 | `specs/me-settings/ui/prototype/{ios,android}/index.html` `#sc-me-settings` | pack dual — **Design tạo** (**GAP-MOB-MESET-DEMO-01**) |
| DES | `DES-MOB-ME-SETTINGS` | IA dưới Tôi · Design chốt |
| MAP | `docs/html-to-native-map.md` | TopBar / Section / ListRow / Secondary / Toast |
| STR | demo rows SSOT real-data § Demo · `docs/mobile-strings.json` `home.privacy.*` | VN copy |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/me-settings-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/me-settings-bff-endpoints.md` | BFF · **local/OS only** |
| DA-03 | `specs/_data-analy/me-settings-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/me-settings-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | packKind `sheet` · ACTION-TREE |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · row-settings toast |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · row-settings toast |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` · **không** settings P1 |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | **cấm ERP.*** · **cấm** invent `me-settings` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / Section / ListRow / Secondary / Toast |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

### Demo rows SSOT (Design mock only — **không** fake BFF / «Đã lưu»)

| Field | Value |
|-------|-------|
| Title | Cài đặt |
| Entry (hub) | Cài đặt · `#i-gear` · `row-settings` |
| Section perm | Quyền ứng dụng |
| CTA OS | Mở Cài đặt hệ thống |
| Section sync | Đồng bộ |
| Offline | Hàng đợi mất sóng |
| Section about | Thông tin |
| Version label | Phiên bản |
| Privacy | Chính sách quyền riêng tư |
| Toast OS fail | Không mở được Cài đặt hệ thống |
| Back | Tôi |

## 5. controlHint (PO chốt — Design map kit · SA xác nhận no API)

Nguồn DA-01 `#sc-me-settings`. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tôi | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('me')` · iOS text «Tôi» · Android icon-only OK |
| title | Cài đặt | TopBar title | * | `LinmTopBar` | fixed 17 · **cấm** badge P1/P2 |
| sectionPerm | Quyền ứng dụng | SectionLabel | * | `LinmSectionLabel` | **13** |
| rowLocation | Vị trí | ListRow + status | * | `LinmListRow` `#i-mappin` | phụ OS status · tap → openAppSettings |
| rowCamera | Camera | ListRow + status | * | `LinmListRow` `#i-camera` | phụ OS status · tap → openAppSettings |
| rowNotifyOs | Thông báo hệ thống | ListRow | * | `LinmListRow` `#i-bell` | **≠** `ops` inbox · tap → openAppSettings |
| btnOpenOs | Mở Cài đặt hệ thống | SecondaryButton | * | `LinmSecondaryButton` | cùng deep-link · toast lỗi nếu OS từ chối |
| sectionSync | Đồng bộ | SectionLabel | * | `LinmSectionLabel` | **13** |
| rowOffline | Hàng đợi mất sóng | ListRow nav | * | `LinmListRow` `#i-sync` | `reuse=patrol-offline` |
| sectionAbout | Thông tin | SectionLabel | * | `LinmSectionLabel` | **13** |
| appVersion | Phiên bản | Text display | * | | Bundle · format `x.y.z (build)` · readonly |
| rowPrivacy | Chính sách quyền riêng tư | ListRow nav | * | `LinmListRow` `#i-info` | reuse `home.privacy.*` · **cấm** invent URL |
| toastOsFail | Không mở được Cài đặt hệ thống | Toast | * | `LinmToast` | **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowSettings | Cài đặt | ListRow nav | `LinmListRow` `#i-gear` · iOS chevron | `me` · `go('me-settings')` · `testTag`/`accessibilityId` `row-settings` |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map. Icon FaceID/Finger **không** bind P1.

## 6. BFF (PO chốt — **cấm** invent · P1 local/OS)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. **Slug này không gọi** resource settings trên P1. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `me-settings`? |
|---------------|--------|------|------------------------|
| Mở Cài đặt hệ thống | — | — | **yes** — OS Settings URL / App details |
| Status Vị trí / Camera | — | — | **yes** — OS permission APIs · display |
| Phiên bản | — | — | **yes** — Bundle / BuildConfig · readonly |
| Chính sách | — | — | **yes** — `LinmCopy` `home.privacy.*` local |
| Hàng đợi mất sóng | — | — | **nav** `reuse=patrol-offline` · **không** API trên slug |
| Toast OS fail | — | — | UI after OS open fail |
| Nav back | — | — | local → `me` |
| Profile / Đổi MK | GET/PUT/POST | `auth/profile` · `auth/change-password` | **OUT** — `me-profile` |
| Logout | POST | `auth/logout` | **OUT** — `login-logout` |
| Inbox thông báo | * | `ops/*` | **OUT** — `ops` · **≠** Thông báo hệ thống |
| Preferences | * | `me-settings` / `preferences` / `device-settings` | **cấm invent** |

**Cấm** `MeSettingsController` · DbContext trên Mobile.Bff · app `:500x` / `:5101` · ERP.*.

### Bind map (P1) — khớp real-data §B

| uiField | → Wire |
|---------|--------|
| rowLocation | OS location auth status · write = openAppSettings |
| rowCamera | OS camera auth status · write = openAppSettings |
| rowNotifyOs | openAppSettings |
| btnOpenOs | openAppSettings |
| appVersion | Bundle / BuildConfig · readonly |
| rowPrivacy | local copy `home.privacy.*` |
| rowOffline | nav `patrol-offline` |
| toastOsFail | after OS open fail |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-MESET-NAV-01 | row-settings toast | **IN P1:** push `#sc-me-settings` · back → Me |
| GAP-MOB-MESET-SCR-01 | Thiếu màn | **IN P1:** full `#sc-me-settings` `DES-MOB-ME-SETTINGS` |
| GAP-MOB-MESET-OS-01 | Deep-link OS | **IN P1:** iOS `openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` · toast fail · **cấm** fake ok |
| GAP-MOB-MESET-STATUS-01 | Status quyền | **IN P1:** phụ «Đã cấp / Chưa cấp / Không xác định» từ OS · **không** request từ settings · **không** BFF |
| GAP-MOB-MESET-VER-01 | Version | **IN P1:** Bundle `x.y.z (build)` display |
| GAP-MOB-MESET-PRIVACY-01 | Privacy URL Store | **IN P1:** reuse static `home.privacy.*` · HTTPS URL **khi khách giao** — **không** invent |
| GAP-MOB-MESET-DEMO-01 | Chưa dual HTML | **IN Design:** tạo dual `#sc-me-settings` + reviewUrl **cả hai** trước Approve · **không** block PO DoR |
| GAP-MOB-MESET-API-01 | Preference sync server | **P1 skip** · **cấm invent** path |
| GAP-MOB-MESET-DATA-01 | Bind nguồn | **IN P1:** OS + Bundle + privacy copy + nav offline |
| Biometric rows | FaceID / Finger icons | **DEFER** — **không** bind P1 |
| Sibling enqueue | openAppSettings / privacy / offline / profile / ops | **none** — cùng slug / reuse / pack riêng (`GAP-MOB-ACT-06/07`) |
| Cluster path | `specs/me-settings/specs/_data-analy/` | **N/A.** Dùng `_data-analy/me-settings-*.md` |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup trên pack này |
| UNCLEAR fields | — | **none** — hash skip · **cấm** re-crawl CTX/demo |
| Step 4b | schema settings | **Skip** — không entity · **cấm** migration ở PO |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Cài đặt | `#sc-me-settings` `DES-MOB-ME-SETTINGS` · iOS + Android | **Screen** (tab me · packKind meta `sheet` · **không** Modal/Sheet chrome) | display + OS deep-link | openAppSettings · OS status · Bundle version · privacy copy · nav offline · back Me | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: web admin users · `me-profile` · `login-logout` · `ops` inbox · invent preferences API · watermark Gói · invent path · bottom-sheet chrome.

Reuse only: `me` (entry / back) · `patrol-offline` (row) · `home.privacy.*` copy.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn local vẫn mở · OS deep-link vẫn thử · offline row → `patrol-offline` · **cấm** fake «Đã lưu» · **cấm** require BFF |
| AC-D-02 | GPS | Status-only đọc authorization · **không** request từ settings · tap → openAppSettings |
| AC-D-03 | Leave dirty | **N/A** — không form editable P1 |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app |
| AC-D-05 | Keyboard | **N/A** — không TextField P1 |
| AC-D-06 | Safe area | TopBar + scroll + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** P1 (icon FaceID/Finger **không** bind) |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | **N/A** Auth call trên slug · session vẫn Keychain/Encrypted cho app |
| AC-D-10 | Tab / swipe | Tab **Tôi** active · **cấm** segment trên surface · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Status-only · **không** request · tap → openAppSettings |
| AC-D-12 | Push | OS only «Thông báo hệ thống» · **≠** inbox `ops` |
| AC-F-01 | Appear / resume | Refresh OS permission status phụ rows |
| AC-F-02 | openAppSettings | Rows + CTA cùng deep-link · fail → toast «Không mở được Cài đặt hệ thống» · **cấm** fake ok |
| AC-F-03 | Version | Bundle `x.y.z (build)` · empty «—» · readonly |
| AC-F-04 | Privacy | Reuse `home.privacy.*` · **cấm** invent HTTPS |
| AC-F-05 | Offline nav | Row → `patrol-offline` · **cấm** reimplement |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome / Android no entry chevron) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Entry | Me `row-settings` → push owner · **cấm** toast-only sau ship |
| AC-F-08 | ≠ siblings | **Cấm** gộp profile / logout / ops inbox / feedback · **cấm** invent preferences API |
| AC-F-09 | No fake save | **Cấm** toast «Đã lưu cài đặt» khi không write API |

Typography: label/tab/section **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **N/A** — không form dirty P1 |
| OS open fail | `LinmToast` «Không mở được Cài đặt hệ thống» · **cấm** alert · **cấm** toast ok giả |
| Offline | Màn vẫn mở · **cấm** block · **cấm** fake save |
| Permission denied (OS) | Phụ «Chưa cấp» · CTA mở OS settings · **không** system alert từ app |
| Success save prefs | **N/A** — **cấm** fake «Đã lưu cài đặt» |

## 11. Out of scope (this pack)

- invent `api/v1/me-settings` / `preferences` / `device-settings` / push-token register
- `me-profile` · `login-logout` · `ops` inbox · `feedback` · `cam-view`
- Request GPS/Camera permission từ settings (thuộc attendance/patrol)
- Biometric bind / FaceID rows P1
- Preference sync server
- Step 4b / migration settings entity
- Watermark Gói / device label / mfeStdUrl / ERP.* / badge P1/P2
- Enqueue sibling · re-scan demo HTML
- Bottom-sheet chrome / `#sheet-*`
- web admin `users`

## 12. KPI (HĐ Gói 1 — màn này)

Cài đặt = mở quyền hệ thống + phiên bản + chính sách + shortcut offline từ hub Tôi → deep-link OS thật · Bundle thật · **không** invent API. DoD pack: `#sc-me-settings` dual + Me nav wire thay toast — **không** omni-implement profile / logout / ops trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `me-settings` / **`sheet`** (confirmed · surface **screen** · **không** bottom-sheet) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/me-settings/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM entry `#sc-me` · Design tạo `#sc-me-settings` dual · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-me-settings` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web trên pack mobile |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-me-settings` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar / Section / ListRow / Secondary / Toast · icons `#i-mappin`/`#i-camera`/`#i-bell`/`#i-sync`/`#i-info`/`#i-chevron-left` · `kit_missing_confirm` nếu cần · **cấm** bottom-sheet chrome · **cấm** invent icon |
| BFF | `me-settings-bff-endpoints.md` · **local/OS only** · **cấm invent** |
| Open questions | §7 đã chốt — Design **tạo dual** GAP-MOB-MESET-DEMO-01 · privacy static · OS deep-link · **không** invent prefs API |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | Step 4b Skip · no Domain settings · GAP-MOB-MESET-PRIVACY-01 · **cấm** ERP.* |

Design: HIG + Material · IA lock Tab 5 me · copy VN khớp controlHint · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`) · **bắt buộc** dual `#sc-me-settings` trước Approve.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T20:17:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:me-settings-po-requirement-20260830 |
| priorControlHintHash | sha256:me-settings-control-hint-20260830 |
| priorRealDataHash | sha256:me-settings-real-data-20260830 |
| bffContentHash | sha256:me-settings-bff-local-only-20260830 |
| actionTreeHash | sha256:me-settings-action-tree-20260830 |
| taskId | `task_27ff3357` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
