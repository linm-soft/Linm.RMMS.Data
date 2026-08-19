# PO — Requirement — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| title | [Mobile] Quên mật khẩu |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`shell`** (PO confirm · data-analy) |
| stack | `native_dual` |
| parent | `login` |
| thisAction | **Quên mật khẩu?** hyperlink `#sc-login` `.login-meta a` → full-page `#sc-forgot` (request OTP + đặt lại MK) · **không** toast-only · **không** gộp vào slug `login` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_7b4f79ea` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/login-forgot` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/login-forgot-control-hint.md` · `login-forgot-bff-endpoints.md` · `login-forgot-action-tree.md` · contentHash `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` · bffContentHash `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` · cluster `specs/login-forgot/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/login-forgot-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-18T21:34:00.000Z` |
| taskId | `task_7b4f79ea` |

**Cấm:** gộp vào `login` (`GAP-MOB-ACT-01`) · toast-only · invent `auth/forgot` · clone `AuthController` · ERP.* · Lin* / erp-form-context · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «bản Gói N» / «gen realapp» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu.

## 1. Goal

User trên shell Đăng nhập tap **Quên mật khẩu?** → màn native dual `#sc-forgot`: nhập SĐT → **Gửi mã** (`POST auth/forgot-password`) → nhập mã + MK mới + xác nhận → **Đặt lại mật khẩu** (`POST auth/reset-password`) → toast thành công → pop `#sc-login`.

Persona: Tuần đường · Hạt · vận hành ITS (cùng parent `login`). Auth = package platform. App **chỉ** gọi `{BffBase}/mobile-bff/api/v1/…`. **Cấm** app biết `:5001` / Auth host.

**1 action = 1 feature.** Slug `login-forgot` = hyperlink **Quên mật khẩu?** trên `#sc-login`. Step request OTP + step reset = **cùng slug** (không child form route · **không** enqueue sibling · `GAP-MOB-ACT-02` = none). Eye trên MK / Back / tín hiệu parent = chrome (`GAP-MOB-ACT-01` chrome skip).

## 2. changeScope `new_page`

Màn `#sc-forgot` là surface auth **mới** (không chỉnh field trên `#sc-login`). Không bảng Current vs New (`edit_page`). SSOT visual = dual HTML `#sc-forgot` (`DES-MOB-FORGOT`). Field + API khớp CTX `docs/context/features/login-forgot.md` + data-analy — **cấm** clone layout desktop / Lin* grid.

Parent `login` P1 từng chốt tap forgot = toast-only (GAP-MOB-BFF-01 backlog). **Pack này đóng gap đó:** navigate full-page + BFF proxy. Login slug **không** implement recovery.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** field dual demo `#sc-forgot` (Request + Reset). Frame proto iOS 390×844 · Android 412×915.
2. Từ `#sc-login` tap **Quên mật khẩu?** → push/navigate `#sc-forgot` step Request · **cấm** toast-only · **cấm** gộp submit `login`.
3. Step Request: brand AppIcon + title **Quên mật khẩu** + SĐT (`#f-phone` tel) + CTA **Gửi mã** (`#btn-forgot-send`) + hint demo. Empty phone → toast **Nhập số điện thoại** · không gọi BFF.
4. Online **Gửi mã** → `POST mobile-bff/api/v1/auth/forgot-password` body `{ phoneNumber }` · anonymous (không Bearer) · toast **message Auth** (copy live: *Nếu số điện thoại tồn tại, mã xác thực sẽ được gửi đến bạn.*) → chuyển step Reset **cùng màn**.
5. Step Reset: `#f-otp` + `#f-new-pass` + `#f-confirm-pass` + CTA **Đặt lại mật khẩu** (`#btn-forgot-reset`). **Không** vẽ lại ô SĐT (demo) — `phoneNumber` giữ VM gửi kèm reset.
6. Client: OTP/MK trống → toast **Nhập mã và mật khẩu mới**. MK ≠ xác nhận → toast **Mật khẩu xác nhận không khớp**. MK dưới 6 ký tự → toast **Mật khẩu tối thiểu 6 ký tự**. Không gọi BFF khi fail client.
7. Online reset → `POST mobile-bff/api/v1/auth/reset-password` `{ phoneNumber, resetToken, newPassword }` · 200 → toast **Đặt lại mật khẩu thành công** → pop Login. 400/422 → toast message Auth · **stay**.
8. Offline (request hoặc reset) → toast **Không có mạng** · **cấm** queue forgot/reset · **cấm** hash local.
9. Back `#btn-back` → `#sc-login` (không BFF). Step 2 dirty (đã gõ OTP hoặc MK) → in-app confirm modal · **cấm** native alert.
10. Logo = `logo/mobile` AppIcon → `assets/app-logo.png` · **cấm** `rmms.png`. Title sản phẩm **Quản lý bảo trì đường bộ** · **cấm** ship proto note `DES-MOB-FORGOT · iOS 390×844` / device label.
11. Kit **reuse map** (đã có trên login): `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `docs/html-to-native-map.md`. **Cấm** AC / Dev implement raw control (`GAP-MOB-ACT-05`).
12. Path **đúng** `auth/forgot-password` · `auth/reset-password` · **cấm** invent `auth/forgot`.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (lab **iPhone 17 Pro** OK) PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `login-forgot` only · live sim/emulator · store PNG · **cấm** test sibling `login` submit / `login-logout` như in-scope.
15. BE align (Dev Step 4b, không turn PO): Mobile.Bff thin proxy + skip `AuthPrefixRewriteMiddleware` cho 2 path · service token → Auth live · **cấm** clone AuthController · **cấm** RMMS `Domains/*` · **cấm** ERP.*

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/login-forgot.md` | child `login` · API forgot/reset |
| CTX-02 | `docs/context/features/login.md` | parent shell · **cấm** gộp |
| DEM-01 | `specs/login-forgot/ui/prototype/ios/index.html` `#sc-forgot` | iOS 390×844 · `DES-MOB-FORGOT` |
| DEM-02 | `specs/login-forgot/ui/prototype/android/index.html` `#sc-forgot` | Android 412×915 · cùng copy |
| DEM-03 | `specs/login/ui/prototype/{ios,android}/index.html` `#sc-login` `.login-meta a` | entry hyperlink |
| LOGO | `logo/mobile` AppIcon 1024 → proto `../assets/app-logo.png` | brand |
| MAP | `docs/html-to-native-map.md` | kit text/password/button/toast **đã map** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/login-forgot-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/login-forgot-bff-endpoints.md` | BFF table · GAP-MOB-BFF-01 reopen |
| DA-03 | `specs/_data-analy/login-forgot-action-tree.md` | 1 hyperlink = 1 slug |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | sibling `login-forgot` |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | **cấm ERP.*** · recovery = Auth platform, không domain RMMS mới |

**Cấm** cite `mfeStdUrl` / localhost MFE trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn dual `#sc-forgot` + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (reuse map · **cấm** implement lại) | Notes |
|-------|----|-------------|----------|------------------------------------------|-------|
| brand | Logo app | Image (AppIcon) | * | AppIcon / mipmap — không kit form | `DES-MOB-FORGOT-BRAND` · `logo/mobile` · **cấm** `rmms.png` |
| productTitle | QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ | Static | * | Text | uppercase · **cấm** «Hiện trường · iPhone» |
| navTitle | Quên mật khẩu | Static | * | Nav title | header only |
| phoneNumber | Số điện thoại | Text (tel) | * step 1 | `LinmTextField` | Auth DTO · e2e `f-phone` · `formFieldHeight` 52 · **không** hiện step 2 |
| submitRequest | Gửi mã | Button primary | * step 1 | `LinmPrimaryButton` | POST `auth/forgot-password` · e2e `btn-forgot-send` · busy `isBusy` |
| hint | Nhập số điện thoại đã đăng ký… | Static | | Text | copy demo step 1 |
| resetToken | Mã xác thực | Text | * step 2 | `LinmTextField` | OTP / SMS ngoài app · e2e `f-otp` · `autocomplete=one-time-code` |
| newPassword | Mật khẩu mới | SecureText | * step 2 | `LinmSecureTextField` | minLength 6 · eye chrome · e2e `f-new-pass` |
| confirmPassword | Xác nhận mật khẩu | SecureText | * step 2 client | `LinmSecureTextField` | không gửi BFF · e2e `f-confirm-pass` |
| submitReset | Đặt lại mật khẩu | Button primary | * step 2 | `LinmPrimaryButton` | POST `auth/reset-password` · e2e `btn-forgot-reset` |
| backLogin | Quay lại | Text / Back | | Nav chrome | e2e `btn-back` · pop Login · **không** BFF |
| toast | Thông báo | Toast | | `LinmToast` | message Auth / client · **cấm** `UIAlert` / `AlertDialog` |

Eye hiện/ẩn MK = chrome `LinmSecureTextField` — **không** slug. Proto `.note` process text = **cấm** ship (`GAP-DEV-MOB-PLACEHOLDER-01`).

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / screen | Method | `{BffPrefix}` path | In slug `login-forgot`? | Downstream |
|-----------------|--------|--------------------|-------------------------|------------|
| Gửi mã (`#sc-forgot` request) | POST | `auth/forgot-password` | **yes** | Auth `api/v1/Auth/forgot-password` + **service token** (app anonymous) |
| Đặt lại MK (`#sc-forgot` reset) | POST | `auth/reset-password` | **yes** | Auth `api/v1/Auth/reset-password` + service token |

Body: `{ "phoneNumber" }` · `{ "phoneNumber", "resetToken", "newPassword" }` (minLength 6).

Auth BFF NuGet **1.26.0 không** route forgot/reset → **GAP-MOB-BFF-01** đóng bằng thin `AuthPasswordRecoveryController` trên Mobile.Bff (Dev/SA) · skip rewrite 2 path · **cấm** clone full `AuthController` · **cấm** app gọi `:5001`.

Không thuộc slug: `auth/login` · `auth/logout` · `auth/refresh-token` · `users/me/change-password` · admin `api/v1/admin/users/{id}/reset-password`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-BFF-01 | Auth package 1.26.0 thiếu forgot/reset | **Đóng trên pack này.** Mobile.Bff thin proxy + skip middleware. App path `auth/forgot-password` / `auth/reset-password`. **Cấm** invent `auth/forgot`. **Cấm** chờ upgrade NuGet để block UI. |
| GAP-MOB-ACT-01/02 | Gộp login + forgot? Steps = 2 slug? | **Không.** 1 hyperlink = 1 slug. OTP + reset = steps cùng `#sc-forgot`. Không enqueue sibling. |
| GAP-MOB-ACT-05 | Kit text/password/button/toast | **Reuse map** login · `kit_missing_confirm` = **N/A** (đã map). Design **không** `implement_kit`. **Cấm** Dev raw. |
| GAP-PO-STORE-01 | CTX signup / xóa tài khoản Apple 5.1.1 | **N/A.** CTX `login-forgot` **không** signup. Account deletion / Privacy URL = pack store/login khác — **cấm** ôm vào slug này. |
| packKind | data-analy `shell` | **Confirm `shell`.** **Cấm** Grid AC / Report AC / Lin* list. |
| Step 2 phone field | Analy DTO có `phoneNumber`; demo không ô | **Ẩn ô.** Giữ giá trị step 1 trong VM. |
| SMS OTP | Push/SMS trong app? | **Ngoài app** (Auth platform). **Cấm** invent in-app OTP inbox. |
| Cluster path board | `specs/login-forgot/specs/_data-analy/` | **N/A.** Dùng `_data-analy/login-forgot-*.md`. |
| `login` toast-only | Parent P1 | **Override** cho child pack: navigate màn thật. |

UNCLEAR field = **none** — không AskQuestion field (Autopilot).

## 8. Screens (REQUIRED)

Tree screen → detail → **action** (DA-03):

```
login                         ← ngoài pack (parent)
└── login-forgot              ← **this** · `#sc-forgot`
    ├── (step) request OTP    ← cùng slug · CTA Gửi mã
    └── (step) reset password ← cùng slug · CTA Đặt lại mật khẩu
```

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Forgot Request | `#sc-forgot` `data-step=request` `DES-MOB-FORGOT-REQUEST` | **Full page** auth child (không tab · không Modal/Sheet route) | anonymous recovery | **Gửi mã** (`LinmPrimaryButton`) | `/agent-dev-ios` + `/agent-dev-android` |
| Forgot Reset | `#sc-forgot` `data-step=reset` `DES-MOB-FORGOT-RESET` | **Cùng page** đổi step | anonymous recovery | **Đặt lại mật khẩu** (`LinmPrimaryButton`) | same |

**Không** trên pack này: `#sc-login` submit · tab 5 · Home · `#sc-me` Đăng xuất · admin reset · đổi MK đã login · biometric · companyCode.

`reuse=login` kit · `shared_kit` map → AC **dùng kit** · **cấm** AC implement lại field/button/toast.

Frame: iOS 390×844 · Android 412×915 · safe area · keyboard không đè input.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Gửi mã / Đặt lại **chặn** · `LinmToast` **Không có mạng** · **cấm** queue · **cấm** local password hash |
| AC-D-02 | GPS deny | **N/A** — forgot không GPS (DA tech) |
| AC-D-03 | Leave dirty | Step 2 đã gõ OTP hoặc MK + Back → **in-app modal** xác nhận rời · Hủy = stay · Đồng ý = pop Login. Step 1 (chỉ SĐT / trống) → pop Login **không** modal (parity proto). **Cấm** `UIAlert` / `AlertDialog` |
| AC-D-04 | Native alert | **Cấm** system alert/confirm mọi lỗi/success — chỉ `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Không đè `#f-phone` / `#f-otp` / MK · content-type tel / one-time-code / new-password |
| AC-D-06 | Safe area | Nav + brand + form không đè notch / home indicator / gesture inset |
| AC-D-07 | Biometric | **N/A** — không Face ID / BiometricPrompt trên màn này |
| AC-D-08 | Signal | **Không** vẽ tín hiệu trên `#sc-forgot` (demo không có) · **cấm** invent «Có mạng» / tap-cycle |
| AC-D-09 | Token | Forgot/reset **không** gắn user Bearer. Không ghi token mới trừ khi Auth trả session (P1: **không** auto-login — pop Login để user đăng nhập MK mới) |
| AC-D-10 | Tab / swipe | Auth child **không** UITabBar 5. iOS swipe-back = cùng Back AC-D-03. Android predictive back = cùng |
| AC-D-11 | Camera / push | **N/A** — SMS OTP ngoài app |
| AC-F-01 | Entry | Tap Quên MK từ login → `#sc-forgot` · **không** toast-only |
| AC-F-02 | Empty phone | Toast **Nhập số điện thoại** · no BFF |
| AC-F-03 | Send online | Toast Auth message · step Reset |
| AC-F-04 | Client reset | Trống / mismatch / dưới 6 ký tự → toast demo · no BFF |
| AC-F-05 | Reset 200 | Toast thành công → Login |
| AC-F-06 | Reset 400/422 | Toast Auth · stay |
| AC-F-07 | Brand | AppIcon `logo/mobile` · **cấm** `rmms.png` · **cấm** watermark / process / device label |
| AC-F-08 | Kit | Text/secure/button/toast = mapped kit · **cấm** raw |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave step 2 | In-app confirm modal (`AC-D-03`) — **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Empty / validation | `LinmToast` copy demo |
| Offline | `LinmToast` **Không có mạng** |
| Auth 200/4xx | `LinmToast` message Auth |
| Success | Toast rồi pop Login |

## 11. Out of scope (this pack)

- `login` submit / session-window / token login
- `login-logout` (`#sc-me`)
- `users/me/change-password` (đã login)
- Admin `reset-password` theo user id
- Biometric / mã đơn vị / tab 5 / GPS / camera / map
- Auto-login sau reset
- In-app SMS inbox / resend-OTP **nút riêng** (không có trên demo — **cấm** invent slug)
- Clone AuthController / RMMS local password / ERP.*
- Web MFE / `mfeStdUrl` / `yarn start:std`
- Grid list / Report / LinErpListFilterBar
- Apple 5.1.1 account deletion (không signup trên màn này)

## 12. KPI (HĐ Gói 1 — màn này)

Cổng hiện trường: user quên MK không vào được ca nếu kẹt toast-only. DoD = dual native `#sc-forgot` khớp DEM-01/02 + 2 POST Auth qua Mobile.Bff + e2e Maestro slug `login-forgot`. Login parent hết backlog GAP-MOB-BFF-01 trên child pack.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `login-forgot` / **`shell`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/login-forgot/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-forgot` · entry DEM-03 · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / devSlash | Full page `#sc-forgot` 2 steps · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design dual `file://…/prototype/{ios,android}/index.html` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` N/A |
| BFF | `login-forgot-bff-endpoints.md` · prefix `mobile-bff/api/v1` |
| Open questions | §7 đã chốt — Design **không** vẽ signup / biometric / companyCode / ô SĐT step 2 / tab / «Có mạng» |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |

Design: HIG + Material · IA lock Login → Forgot → Login · brand AppIcon · copy VN đúng HTML · skip proto `.note` · **cấm** skin Ministry.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-18T21:34:00.000Z |
| versionGate | rechecked |
| staleNote | Artifact PO cũ skillVersion `2026.08.19.01` · autoApprove `recheck_new` · backup `specs/login-forgot/_backup/20260819T043347Z` · SSOT workflow `2026.08.19.19` · rules `2026.08.19.22` · agent-po-mobile `2026.08.19.15` |
| contentHash | sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c |
| bffContentHash | sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.15 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
