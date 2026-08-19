# Team lead — Task — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| title | [Mobile] Quên mật khẩu |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`shell`** (PO confirm) |
| stack | `native_dual` |
| Feature Kind | **shell** auth child full-page `#sc-forgot` · **cấm** Kind A–G web / Lin* list / tab 5 |
| route_confirm | **route_a** (autoApprove=ON) — `#sc-login` tap **Quên mật khẩu?** → full-page `#sc-forgot` (request → reset cùng màn) → toast reset OK → **pop Login** · **cấm** deep-link web / `mfeStdUrl` / toast-only |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim + emulator + Maestro · PNG `qa/screens` + `qa/store/login-forgot` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/login-forgot-*.md` · contentHash `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` · bffContentHash `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7b4f79ea` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual prototype · `task_9607fe43` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_4b1d6de2` |
| taskId | `task_8814e09a` |
| updatedAt | `2026-08-18T21:47:00.000Z` |
| thisAction | **Quên mật khẩu?** hyperlink only · OTP + reset = steps **cùng** `#sc-forgot` · **không** gộp `login` |

**Cấm:** `ERP.Service.*` · invent `auth/forgot` · clone `AuthController` · app `:5001` · queue forgot/reset · auto-login sau reset · `UIAlert`/`AlertDialog` · raw `SecureField`/`OutlinedTextField` · `mfeStdUrl` · watermark/device label · admin `users/{id}/reset-password`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** · recovery = Auth platform (không domain RMMS mới) |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth live | `ServiceEndpoints:AuthenticationService` · `POST api/v1/Auth/forgot-password` · `POST api/v1/Auth/reset-password` |
| Auth NuGet BFF | `Linm.Platform.Authentication.Bff` **1.26.0** — **không** route forgot/reset → thin Mobile.Bff proxy |
| kit | reuse map login · `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmLeaveConfirm` · **không** `T-KIT-*` (`kit_skip`) |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Login → push/navigate `#sc-forgot` full-page (ngoài TabView) · step Request → Gửi mã OK → step Reset **cùng màn** · Reset OK → toast → pop Login. Back step 1 → Login. Back step 2 dirty → `LinmLeaveConfirm`. |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng |

IA lock (ux-analy): `(auth) Login → Forgot → Login`. **Cấm** tab trên forgot · **cấm** toast-only entry.

AskQuestion (autoApprove=ON · không chờ board): `route_confirm=route_a` · `2026-08-18T21:47:00.000Z`.

---

## Live gap (TL audit 2026-08-18T21:47Z)

| Surface | Live | TL task |
|---------|------|---------|
| BFF `AuthPasswordRecoveryController` | **DONE** thin proxy + ServiceClient token | **T-BE-FORGOT** verify/keep · `dotnet build` |
| `AuthPrefixRewriteMiddleware` skip forgot/reset | **DONE** | keep · **cấm** rewrite 2 path |
| iOS `LoginForgotView` + VM + use cases + DTO | **DONE** nav + 2 steps + API + e2e ids | **T-IOS-FORGOT** parity DoD + **DELTA leave** |
| Android `LoginForgotScreen` + VM + Retrofit | **DONE** NavHost Forgot + API + tags | **T-AND-FORGOT** parity DoD + **DELTA leave** |
| Parent Login entry → Forgot (không toast-only) | **DONE** dual | keep |
| `LinmLeaveConfirm` step 2 dirty Back | **DONE** dual | kit overlay + e2e `btn-leave-cancel` / `btn-leave-ok` |
| Auth NuGet upgrade forgot/reset | **không** bắt buộc P1 nếu proxy PASS | — |
| New BE endpoint / Schema_* / ERP.* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit text/password/button/toast/leave | dual kit shipped | Dev **cấm** raw · **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-* | kit | — | **n/a** | — | `kit_skip` · map cite login · **cấm** implement kit mới |
| **T-BE-FORGOT** | bff | SA | **done** | Step 4b · `/create-bff-api-feature` thin only nếu thiếu · **cấm** `/new-endpoint` RMMS · **cấm** `/database-migration` | Keep `AuthPasswordRecoveryController` + middleware skip + service token · paths `auth/forgot-password` · `auth/reset-password` · `dotnet build` Mobile.Bff **PASS** · **cấm** clone AuthController · **cấm** invent `auth/forgot` |
| **T-IOS-FORGOT** | ios | T-BE-FORGOT (verify) · SA | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet | Full-page `#sc-forgot` parity · API-01+02 · leave confirm · e2e ids · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** (+ lab Max / **iPad Pro 13-inch (M5)** nếu skill) **PASS** · ghi `implement/ios.md` |
| **T-AND-FORGOT** | android | T-BE-FORGOT (verify) · SA | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` | Same field/API/DoD dual · leave confirm · `./gradlew :app:assembleDebug` **PASS** · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | Auth recovery **live** — **không** `/new-endpoint` RMMS |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` · không bảng RMMS |
| T-QA-FORGOT | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | Maestro slug `login-forgot` only · `yarn e2e-qa-mobile` · store PNG · **cấm** sibling `login` submit / `login-logout` in-scope |

**1 action = 1 feature.** OTP + reset = steps cùng slug — **cấm** enqueue sibling / gộp vào `login`.

---

## T-BE-FORGOT — detail (Step 4b · BE ALIGN)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| Downstream Auth | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` config only · Auth host qua `ServiceEndpoints:AuthenticationService` |
| Skill | thin proxy keep · **cấm** `/database-migration` · **cấm** ERP.* · **cấm** fork DTO |

### Contract

| Call | App Bearer | BFF → Auth | Body |
|------|------------|------------|------|
| POST `auth/forgot-password` | **không** | ServiceClient `accessToken` | `{ "phoneNumber" }` |
| POST `auth/reset-password` | **không** | same | `{ "phoneNumber", "resetToken", "newPassword" }` (minLength 6) |

Response 200 forgot: Auth `message` → app toast rồi step Reset.  
Response 200 reset: toast **Đặt lại mật khẩu thành công** (PO) · **ignore** `temporaryPassword` P1 · **không** ghi JWT.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff/bff && dotnet build
```

Fail → `build_fail_confirm` · **cấm** mark Dev BE done.

---

## T-IOS-FORGOT — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-FORGOT` · `DES-MOB-FORGOT-BRAND` · `DES-MOB-FORGOT-REQUEST` · `DES-MOB-FORGOT-RESET` · `#sc-forgot` |
| Pattern | Full page auth child · **không** tab · leave = in-app modal chrome |

### UI (kit cite)

| Field | Kit | Notes |
|-------|-----|-------|
| brand | AppLogo / AppIcon | **alpha** · **cấm** `rmms.png` · **cấm** tile đen/trắng |
| productTitle | Text | uppercase · **cấm** «Hiện trường · iPhone» |
| navTitle | Text | Quên mật khẩu |
| phoneNumber | `LinmTextField` | e2e `f-phone` · ẩn step 2 · giữ VM |
| submitRequest | `LinmPrimaryButton` | e2e `btn-forgot-send` · POST forgot |
| hint | Text | copy demo step 1 |
| resetToken | `LinmTextField` | e2e `f-otp` · one-time-code |
| newPassword | `LinmSecureTextField` | e2e `f-new-pass` · min 6 · eye chrome |
| confirmPassword | `LinmSecureTextField` | e2e `f-confirm-pass` · client only |
| submitReset | `LinmPrimaryButton` | e2e `btn-forgot-reset` · POST reset |
| back | Nav chrome | e2e `btn-back` |
| leave | **`LinmLeaveConfirm`** | step 2 dirty · e2e `btn-leave-cancel` · `btn-leave-ok` · **DELTA** |
| toast | `LinmToast` / session banner | **cấm** `UIAlert` |

### API / client

| Case | Behavior |
|------|----------|
| Empty phone | Toast **Nhập số điện thoại** · no BFF |
| Offline | Toast **Không có mạng** · **cấm** queue |
| Send 200 | Toast Auth `message` · step Reset |
| Empty OTP/MK | Toast **Nhập mã và mật khẩu mới** |
| MK ≠ confirm | Toast **Mật khẩu xác nhận không khớp** |
| MK &lt; 6 | Toast **Mật khẩu tối thiểu 6 ký tự** |
| Reset 200 | Toast thành công → pop Login · **không** auto-login |
| Reset 400/422 | Toast Auth · stay |
| Back step 1 | pop Login |
| Back step 2 dirty | `LinmLeaveConfirm` |

### Router

`SessionController` / `AppRouter`: Login `onForgot` → `.forgot` · Forgot ngoài TabView. Entry **cấm** toast-only.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-FORGOT — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-forgot` · frame 412×915 |
| Pattern | Full page · **không** TopAppBar nav 5 · **không** `AlertDialog` system |

### UI / API

Cùng bảng field + API-01/02 như T-IOS. Kit dual. Interceptor **skip Bearer** trên `auth/forgot-password` · `auth/reset-password`. Nav: `AuthRoute.Forgot` · Back → Login · dirty leave = `LinmLeaveConfirm`.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization` (app) | **không** trên forgot/reset |
| BFF → Auth | ServiceClient Bearer |
| `Content-Type` / `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| Forgot 200 | `{ message }` — toast rồi step Reset |
| Reset 200 | toast success copy PO · **không** persist token |
| 400/422 | toast ProblemDetails / Auth message · stay |

---

## Out of scope (this pack)

- Parent `#sc-login` submit / session-window / refresh
- `login-logout` / `#sc-me`
- Biometric / mã đơn vị / signup / account deletion Privacy claim
- Admin reset · `users/me/change-password`
- Tab 5 / Home hub / GPS / camera / SMS inbox in-app
- Auth NuGet upgrade (optional sau proxy PASS)

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `login-forgot` / **`shell`** |
| phase_from / phase_to | tl **confirmed** → dev pending |
| STATUS | `specs/login-forgot/STATUS.md` |
| route_confirm | **route_a** (autoApprove) |
| Order | **T-BE-FORGOT** verify → **T-IOS-FORGOT** + **T-AND-FORGOT** (parallel OK) → QA |
| DELTA hard | wire `LinmLeaveConfirm` dual · verify BFF proxy · field/API parity · VERIFY GATE |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (+ Step 4b BFF) |
| Chain this turn | **không** (roleOnly=team_lead) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-18T21:47:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c |
| bffContentHash | sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.15 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
