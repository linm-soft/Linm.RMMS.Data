# PO — Requirement — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| changeScope | `new_page` (native shell · CTX web đã có) |
| packKind | **`shell`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_e19d880c` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · user mở Xcode Simulator + Android emulator · test thủ công · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` |
| prior | data-analy **done** · confirmed · `specs/_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` · contentHash `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` · bffContentHash `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` · cluster `specs/login/specs/_data-analy/clusters/login.md` **không tồn tại** — SSOT = 3 file `_data-analy/login-*` · **no Excel** |
| thisAction | **Đăng nhập** only · children `login-forgot` · `login-logout` = backlog |
| updatedAt | `2026-08-18T18:18:19.000Z` |
| taskId | `task_e19d880c` |

## 1. Goal

Màn **Đăng nhập** native dual (iOS SwiftUI + Android Compose) cho hiện trường Gói 1: username/SĐT + mật khẩu → `POST {BffPrefix}/auth/login` (platform Auth qua Mobile.Bff) → toast in-app → **Trang Chủ**. Persona: Tuần đường · Hạt · vận hành ITS.

**1 action = 1 feature.** Slug `login` = nút primary **Đăng nhập** trên `#sc-login`. **Cấm** gộp quên mật khẩu / đăng xuất (`GAP-MOB-ACT-01`). `#sc-login` không child form/sheet (`GAP-MOB-ACT-02` = none).

Auth = package sẵn (`Linm.Platform.Authentication.Bff` 1.26.0). App **chỉ** gọi `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone `AuthController` · mật khẩu local `rmms_users.PasswordHash` · WebView bọc HTML demo · `mfeStdUrl` / localhost MFE.

## 2. changeScope `new_page`

Native chưa có màn Login (không file `*Login*` trên iOS/Android). Không bảng Current vs New (đó là `edit_page`). SSOT visual = dual HTML `#sc-login`. Field + API khớp CTX `docs/context/features/login.md` + SPEC §7.1 — **cấm** clone layout desktop / Lin* grid.

## 3. DoD (đo được)

1. iOS **và** Android cùng field `#sc-login`: logo AppIcon · tagline title only · Tài khoản + lead · Mật khẩu + eye · CTA **Đăng nhập** · meta tín hiệu display + link quên MK · **cấm** «bản Gói 1» trên UI production.
2. Submit online → `POST mobile-bff/api/v1/auth/login` · body username (hoặc SĐT) + password · **cấm** ô mã đơn vị · **cấm** app biết `:5001` / `:5101`.
3. Thành công → `LinmToast` copy demo **Đăng nhập thành công** → Home (`go('home')` / tab IA lock) trong ~350 ms như proto.
4. Sai MK / Inactive / hết hạn HĐ → toast in-app — **cấm** `UIAlert` / `AlertDialog` / `window.alert`.
5. Offline → **không** submit · toast/banner in-app · **cấm** queue login · **cấm** hash local.
6. Token access/refresh → Keychain (iOS) / Encrypted store (Android) · **cấm** plaintext UserDefaults / SharedPreferences.
7. Sau login: GET `mobile-bff/api/v1/contract-accounts/session-window?authUserId=` — 403 cửa sổ HĐ đóng → forceLogout (SA chốt DTO / `CONTRACT_WINDOW_CLOSED`). **Cấm** invent path.
8. Link **Quên mật khẩu?** hiện (parity demo) · tap = toast **Quên mật khẩu → hệ thống xác thực** · **không** gọi BFF (GAP-MOB-BFF-01) · **không** implement slug `login-forgot`.
9. Eye hiện/ẩn MK = chrome field — **không** slug riêng.
10. Tín hiệu hạng **Tốt / Trung bình / Yếu** (`net-signal.js`) · **cấm** «Có mạng» / «Không mạng».
11. Logo = `logo/mobile` AppIcon 1024 → `assets/app-logo.png` · **cấm** `rmms.png` wordmark.
12. Login **không** tab 5 · **không** toolbar Hồ sơ / Đổi MK.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): AC slug `login` only · live capture sim/adb · **cấm** test sibling `login-forgot` / `login-logout` (`#sc-me`) như in-scope.
15. Demo Home (kit gallery): chrome **Đăng xuất** `btn-logout` · clear local session → `#sc-login` · toast **Đã đăng xuất** · **cấm** POST `auth/logout` · **cấm** coi đây là slug `login-logout`.
16. IME: focus `#f-user` / `#f-pass` **luôn trên** bàn phím (iOS + Android) · kit `LinmKeyboardAwareScroll` · logo **192 tĩnh** · **cấm** che input · **cấm** compact logo.
17. Submit login → **reset `#f-pass`** · **giữ `#f-user`** (last id, kể cả sau Đăng xuất) · **cấm** persist mật khẩu.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/login.md` | feature · §2 UI · §3 API |
| CTX-02 | `docs/plan/login-contract-lifecycle/SPEC.md` §7.1 | login shell / BFF · leave N/A |
| CTX-03 | `specs/mobile-p1/mobile/context.md` § login | field Gói 1 · ẩn company/biometric |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-login` | iOS 390×844 · `DES-MOB-LOGIN` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-login` | Android 412×915 · cùng copy |
| DEM-03 | `specs/mobile-p1/ui/prototype/net-signal.js` | hạng Tốt / Trung bình / Yếu |
| LOGO | `logo/mobile` AppIcon 1024 → `specs/mobile-p1/ui/prototype/assets/app-logo.png` | brand |
| MAP | `docs/html-to-native-map.md` | kit · password/eye **thiếu** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/login-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/login-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/login-action-tree.md` | tree 1 nút = 1 slug |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | session-window · **cấm ERP.*** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/login` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-login` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| brand | Logo app | Image (AppIcon) | * | logo pack — không kit form | `DES-MOB-LOGIN-BRAND` · **alpha** trên surface · **cấm** tile `#000`/`#fff` · **cấm** `rmms.png` |
| tagline | QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ | Static text | | — | `/agent-design` 22/700/uppercase · logo **192 tĩnh** · **cấm** band 1/3 · **cấm** «Hiện trường · iPhone» / «· Android» |
| userName | Tài khoản | Text | * | `LinmTextField` + lead person | Username **hoặc** SĐT · cùng `formFieldHeight` 52 · iOS `autocomplete=username` · **cấm** ô mã đơn vị |
| password | Mật khẩu | SecureText | * | **`LinmSecureTextField`** | Eye + lead lock · cùng chrome user · **cấm** Dev `SecureField` / `OutlinedTextField` raw |
| submit | Đăng nhập | Button primary | * | `LinmPrimaryButton` | **1 action = `login`** · `loginOk()` |
| forgot | Quên mật khẩu? | Text link | | chrome / text | Child **`login-forgot`** · tap toast only P1 · `.login-meta` pin **đáy giữa** khi IME ẩn |
| signal | Tín hiệu | SignalQuality | | `LinmNetSignalMark` | Display Tốt / TB / Yếu · bind OS path · **cấm** tap cycle |
| buildMeta | bản Gói 1 | **Ẩn production** | | — | Chrome prototype — **cấm** ship |
| companyCode | Mã đơn vị | **Ẩn Gói 1** | | — | Đơn vị theo JWT `company_id` |
| biometric | Khuôn mặt / vân tay | **Ẩn Gói 1** | | — | Demo không nút · **cấm** invent |

Toast lỗi / success → `LinmToast`.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action | Method | Path | In slug `login`? |
|--------|--------|------|------------------|
| Đăng nhập | POST | `auth/login` | **yes** — Auth package + `AuthPrefixRewriteMiddleware` |
| Làm mới phiên | POST | `auth/refresh-token` | session infra · **GAP-MOB-BFF-02** — **cấm** `auth/refresh` |
| Cửa sổ HĐ | GET | `contract-accounts/session-window?authUserId=` | sau login · proxy RMMS · SA chốt |
| Đăng xuất | POST | `auth/logout` | **no** — slug `login-logout` backlog |
| Quên MK | — | — | **no** — GAP-MOB-BFF-01 |

Không thuộc slug: `auth/switch-company` · `users/me/change-password` · profile.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-BFF-01 | Quên MK không path CTX §3 / Mobile.Bff / Auth BFF 1.26.0 | **Backlog `login-forgot`.** P1: giữ link demo · tap toast **Quên mật khẩu → hệ thống xác thực** · **cấm** bịa `auth/forgot`. Không block DoD login. |
| GAP-MOB-BFF-02 | CTX/`init-bff-auth.md` ghi `refresh` vs package `refresh-token` | **App dùng `POST auth/refresh-token`** (DLL 1.26.0). CTX = doc drift. **Cấm** `auth/refresh`. |
| GAP-MOB-BFF-MW | Mobile.Bff chưa `ContractWindowDefenseMiddleware` | **P1:** app GET `session-window` sau login thành công. Gắn middleware = SA/BE — **cấm** PO invent path. Không block màn login. |
| Kit password/eye | Không hàng `type=password` / eye trên map | Design **`kit_missing_confirm`** (`implement_kit` dual) **trước** Dev Write. **Cấm** `kit_skip` im lặng · **cấm** Dev raw. |
| company / biometric | Field CTX ẩn Gói 1 | **Ẩn.** **Cấm** hiện trên shell. |
| packKind | data-analy đề xuất `shell` | **Confirm `shell`.** **Cấm** Grid AC / Report AC / Lin* list. |
| `login-logout` | POST logout đã có | **Backlog `#sc-me` + POST `auth/logout`.** Demo Home `btn-logout` = chrome retest login (local clear) — **không** mở slug. |
| Cluster web path | `specs/login/specs/_data-analy/clusters/login.md` | **N/A.** Dùng `_data-analy/login-*.md`. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Login shell | `#sc-login` `DES-MOB-LOGIN` · iOS + Android | **Full page** (auth · không tab · không Modal/Sheet) | session login | **Đăng nhập** (`LinmPrimaryButton`) | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: tab 5 · Home 6 ô · `#sc-me` Đăng xuất / Góp ý / Camera / Thông báo / Cài đặt / Hàng đợi · child form/sheet trên login.

Forgot link + eye + tín hiệu display = chrome / child backlog — Design skip proto OS label; Dev **không** ship BFF forgot · **cấm** «bản Gói 1».

Frame: iOS 390×844 · Android 412×915 · safe area · keyboard không đè input.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Submit **chặn** · toast/banner in-app · **cấm** queue login · **cấm** `PasswordHash` local |
| AC-D-02 | GPS deny | **N/A** — login không GPS |
| AC-D-03 | Leave dirty | **N/A** — SPEC §7.1 không dirty nghiệp vụ |
| AC-D-04 | Native alert | **Cấm** system alert/confirm. Lỗi + success = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Tránh overlap `#f-user` / `#f-pass` · iOS content-type username / password |
| AC-D-06 | Safe area | Brand + form + meta không đè notch / home indicator / gesture inset |
| AC-D-07 | Biometric | **Ẩn Gói 1** — không Face ID / BiometricPrompt trên màn này |
| AC-D-08 | Signal | Copy **Tốt / Trung bình / Yếu** · **cấm** «Có mạng» |
| AC-D-09 | Token | Keychain / Encrypted store · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Màn auth **không** UITabBar / NavigationBar 5 · không swipe-back ra Home khi chưa login |
| AC-D-11 | Camera / push | **N/A** |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** (SPEC §7.1) |
| Sai MK / Inactive / HĐ đóng | `LinmToast` — **cấm** native alert (`GAP-PO-LEAVE-01` / mobile-device-behavior) |
| Forgot tap | Toast in-app (demo copy) |
| Success | Toast rồi Home |

## 11. Out of scope (this pack)

- `login-forgot` BFF + flow xác thực
- `login-logout` (`#sc-me`)
- Biometric / mã đơn vị trên shell
- `auth/switch-company` · đổi MK toolbar login
- Tab 5 / Home hub / map / GPS / camera
- Clone AuthController / RMMS local password
- Web MFE `Linm.Web.RMMS.Contract` `/login` · `mfeStdUrl`
- Gắn `ContractWindowDefenseMiddleware` (SA/BE)
- Grid list / Report / LinErpListFilterBar

## 12. KPI (HĐ Gói 1 — màn này)

Login là cổng: Tuần đường không vào ca / CI / SC offline nếu chưa phiên. DoD pack mobile-p1 yêu cầu slug `login` có field + API reuse + mock **cả hai** OS — PO chốt implement native dual khớp DEM-01/02 + POST Auth BFF.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `login` / **`shell`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/login/STATUS.md` |
| Context / Demo / DI | CTX-01 · SPEC §7.1 · mobile-p1 § login · DEM dual `#sc-login` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / devSlash | Full page `#sc-login` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-login` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | password/eye → `kit_missing_confirm` · text/button/toast/signal đã map |
| BFF | `login-bff-endpoints.md` · prefix `mobile-bff/api/v1` |
| Open questions | GAP-MOB-BFF-01/02 đã chốt §7 — Design **không** vẽ form forgot / biometric / companyCode |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |

Design: HIG + Material · IA lock Login → Home · brand AppIcon · copy VN đúng HTML · **cấm** skin Ministry / «Có mạng».

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.02 |
| rulesVersion | 2026.08.19.03 |
| generatedAt | 2026-08-18T18:18:19.000Z |
| versionGate | rechecked |
| staleNote | Artifact draft không Version meta → autoApprove `recheck_new` · backup `specs/login/_backup/20260818T181819Z` · SSOT workflow `2026.08.19.02` (kit IP) · rules `2026.08.19.03` · **agent-po-mobile vẫn 2026.08.19.01** |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.02 rulesVersion=2026.08.19.03 versionGate=rechecked -->
