# SA — Solution — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| title | [Mobile] Quên mật khẩu |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_4b1d6de2`) |
| changeScope | `new_page` |
| packKind | **`shell`** (PO confirm) |
| stack | `native_dual` |
| Feature Kind | **shell** auth child full-page `#sc-forgot` · **cấm** Kind A–G web / Lin* list |
| domain | **Auth (Platform)** only · **không** domain RMMS mới |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| Auth live | `ServiceEndpoints:AuthenticationService` (`http://localhost:5001`) · swagger `Auth/forgot-password` · `Auth/reset-password` **verified 200** |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-forgot` · `task_9607fe43` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7b4f79ea` |
| prior · data_analy | **confirmed** · `_data-analy/login-forgot-*.md` · contentHash `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` · bffContentHash `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` (stub SA cũ skill `2026.08.19.01` → `recheck_new` · backup `20260818T214250Z`) |
| taskId | `task_4b1d6de2` |
| confirmedBy | agent autoApprove · `task_4b1d6de2` |
| updatedAt | `2026-08-18T21:43:00.000Z` |
| thisAction | **Quên mật khẩu?** hyperlink → `#sc-forgot` (request OTP + reset) · **không** gộp `login` |

**Cấm:** invent `auth/forgot` · clone `AuthController` · app `:5001` / Auth host · ERP.* · parent JSON · fork DTO · `mfeStdUrl` / `yarn start:std` · queue offline · local password hash · auto-login sau reset · admin `users/{id}/reset-password`.

Standards: api-endpoint · bff-api-structure · bff-service-token · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (forgot = **no queue**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` — **cấm ERP.*** |
| Identity API | Platform Auth **live** (swagger verified) — **không** RMMS controller |
| Auth NuGet BFF | `Linm.Platform.Authentication.Bff` **1.26.0** — routes login/logout/refresh/… · **không** forgot/reset |
| Auth Models | `ForgotPasswordRequestDto` · `ResetPasswordRequestDto` · response `message` / `temporaryPassword?` |
| Mobile.Bff delta | Thin `AuthPasswordRecoveryController` + ServiceClient token · **skip** `AuthPrefixRewriteMiddleware` cho 2 path |
| App paths | `POST auth/forgot-password` · `POST auth/reset-password` (base `{BffBase}/mobile-bff/api/v1`) |
| Domain RMMS | **không** bảng mới · **không** `Domains/*` · **không** `/database-migration` |
| Persist | none — anonymous recovery · **không** ghi JWT mới (P1 **không** auto-login) |

### Route decision

| | Choice |
|--|--------|
| Slug | `login-forgot` → **shell** child · 1 hyperlink = 1 feature |
| App prefix | `mobile-bff/api/v1` |
| Package rewrite | `/mobile-bff/api/v1/auth/{login\|logout\|…}` → `/web-bff/api/v1/auth/…` |
| Recovery skip | `/forgot-password` · `/reset-password` **không** rewrite → local thin controller |
| Downstream Auth | BFF-only `ServiceEndpoints:AuthenticationService` + `ServiceClient:TokenEndpoint` |
| Rationale | Auth live có path · package thiếu surface → **thin proxy** · **cấm** invent app path · **cấm** clone full Auth |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Auth HTTP recovery | Mobile.Bff `AuthPasswordRecoveryController` | **cấm** second proxy · **cấm** clone AuthController |
| Auth DTO | Live swagger `ForgotPasswordRequestDto` / `ResetPasswordRequestDto` | same Web Auth · **cấm** fork field names |
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** hardcode `:5001` |
| Token | Keychain / EncryptedSharedPreferences | Forgot/reset **không** gắn user Bearer · **không** ghi token mới P1 |
| Kit | `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmLeaveConfirm` | Design `kit_skip` · **cấm** raw |
| Persist | no-parent-json-field | **không** inventory JSON / password hash local |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | API-01/02 — **không** DATE filter / form date | `/review-timezone-implement` | OTP SMS ngoài app · không field ngày |
| XCO | **xco_na** | **không** GET/{id} View catalog | `/implement-view-cross-company` | anonymous · không cross-company read |
| SHARE | **n/a** | **không** bảng RMMS | `/implement-shared-table` | identity = Auth DB only |
| Offline | **no queue** | toast **Không có mạng** | offline-sync | **cấm** enqueue forgot/reset |
| GPS / Camera / Push | **n/a** | — | — | SMS OTP = Auth platform ngoài app |
| Store | **N/A** / **kit_skip** Privacy claim | no signup trên slug | GAP-SA-STORE-01 | Account deletion / Privacy URL = pack khác · **cấm** `localhost` trong listing |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-18T21:43:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** |
| API shape | Auth scalars only |
| Migration | **không** `Schema_*` · **không** `/database-migration` |

---

## Live vs delta (audit 2026-08-18 · Auth swagger HTTP 200)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST api/v1/Auth/forgot-password` | Auth service **live** · body `{ phoneNumber }` · 200 `{ message }` · 422 | **Giữ** via BFF proxy |
| `POST api/v1/Auth/reset-password` | Auth **live** · `{ phoneNumber, resetToken, newPassword minLength 6 }` · 200 / 400/422 | **Giữ** via BFF proxy |
| Auth BFF NuGet 1.26.0 forgot/reset | **không** route | **GAP-MOB-BFF-01 đóng** = thin Mobile.Bff controller |
| `AuthPasswordRecoveryController` | **DONE** trong Mobile.Bff | **Giữ** · Dev verify build · **cấm** rewrite |
| `AuthPrefixRewriteMiddleware` skip | **DONE** | **Giữ** skip `/forgot-password` · `/reset-password` |
| Admin `users/{id}/reset-password` | Auth live | **Ngoài** slug |
| Native `#sc-forgot` iOS/Android | shipped / DELTA UI | Navigation + screen + use cases · **không** invent path |
| Parent `#sc-login` toast-only forgot | override | Tap → navigate full-page · **cấm** toast-only |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-forgot` request | brand · productTitle · phone · submitRequest · hint · back | command Auth anonymous | **không** RMMS form entity |
| `#sc-forgot` reset | otp · newPassword · confirmPassword · submitReset · back · leave modal | command Auth anonymous | same · `phoneNumber` giữ VM |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| phoneNumber | Số điện thoại | `phoneNumber` | body forgot + reset | e2e `f-phone` · **ẩn** step 2 · giữ VM |
| submitRequest | Gửi mã | — | POST `auth/forgot-password` | e2e `btn-forgot-send` |
| resetToken | Mã xác thực | `resetToken` | body reset | e2e `f-otp` · SMS ngoài app |
| newPassword | Mật khẩu mới | `newPassword` | body reset | minLength 6 · e2e `f-new-pass` |
| confirmPassword | Xác nhận mật khẩu | — | **client only** | **không** gửi BFF · e2e `f-confirm-pass` |
| submitReset | Đặt lại mật khẩu | — | POST `auth/reset-password` | e2e `btn-forgot-reset` |
| toast | — | `message` | response | Auth copy · **cấm** system alert |
| brand / titles / back / leave | chrome | — | — | không API |

**Cấm** persist `PasswordHash` local · **cấm** auto-login (không ghi token từ reset response).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-BFF-01 | **Đóng.** Mobile.Bff thin `AuthPasswordRecoveryController` + skip rewrite · app path `auth/forgot-password` / `auth/reset-password` · **cấm** invent `auth/forgot` · **cấm** chờ NuGet upgrade để block UI |
| GAP-MOB-ACT-01/02 | **none** — 1 hyperlink = 1 slug · OTP + reset = steps cùng `#sc-forgot` · **không** enqueue sibling |
| GAP-MOB-ACT-05 | Kit reuse map login · **cấm** Dev raw |
| GAP-PO-STORE-01 | **N/A** — không signup trên pack |
| GAP-SA-STORE-01 | **N/A** listing claim · **cấm** `localhost` / IP LAN trong solution ship notes cho store |
| Offline | Toast **Không có mạng** · **cấm** queue |
| Auto-login | **Không** P1 — toast thành công → pop Login |

### Middleware + DTO (REQUIRED)

| Call | App Bearer | BFF → Auth | Body (camelCase live) |
|------|------------|------------|------------------------|
| POST `auth/forgot-password` | **không** | ServiceClient `accessToken` | `{ "phoneNumber": "<tel>" }` |
| POST `auth/reset-password` | **không** | same | `{ "phoneNumber", "resetToken", "newPassword" }` (min 6) |

Response 200 forgot: `{ "message": "Nếu số điện thoại tồn tại, mã xác thực sẽ được gửi đến bạn." }` (Auth live copy).  
Response 200 reset: `{ temporaryPassword?, message? }` — app toast success copy PO · **ignore** temporaryPassword P1.  
400/422 → toast Auth / ProblemDetails message · **stay**.

`MobileApiProxyController` vẫn bỏ qua `auth/*` (không forward RMMS `ApiBase`).

---

## API catalog

Base app: `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.  
Permission: **anonymous** (app) · BFF gắn **service token** downstream.  
Errors: toast only · **cấm** native alert.

### API-01: POST auth/forgot-password

| | |
|--|--|
| Purpose | Gửi mã xác thực — step Request `#sc-forgot` |
| Permission | anonymous · BFF service token → Auth |
| BFF | `AuthPasswordRecoveryController.ForgotPassword` |
| Downstream | `POST api/v1/Auth/forgot-password` |
| gates.tz / xco / shared | n/a |

**Request** `ForgotPasswordRequestDto`

| JSON | Type | Required | UI |
|------|------|----------|-----|
| `phoneNumber` | string (tel) | * | `#f-phone` |

**Response 200:** `{ message }` — toast rồi chuyển step Reset.

### API-02: POST auth/reset-password

| | |
|--|--|
| Purpose | Đặt lại mật khẩu — step Reset cùng màn |
| Permission | anonymous · BFF service token → Auth |
| BFF | `AuthPasswordRecoveryController.ResetPassword` |
| Downstream | `POST api/v1/Auth/reset-password` |
| gates.tz / xco / shared | n/a |

**Request** `ResetPasswordRequestDto`

| JSON | Type | Required | UI |
|------|------|----------|-----|
| `phoneNumber` | string | * | VM từ step 1 (không ô UI) |
| `resetToken` | string | * | `#f-otp` |
| `newPassword` | string minLength 6 | * | `#f-new-pass` |

**Response 200:** toast **Đặt lại mật khẩu thành công** → pop Login · **không** auto-login.

### Out of slug

| Path | Note |
|------|------|
| `auth/login` · `auth/logout` · `auth/refresh-token` | parent / sibling packs |
| `users/me/change-password` | đã login |
| `admin/users/{id}/reset-password` | admin only |

---

## DELTA (TL / Dev)

| Surface | Action | Skill |
|---------|--------|-------|
| BFF | **T-BE-FORGOT** — verify/keep thin proxy + middleware skip + service token · `dotnet build` PASS | Step 4b · `/create-bff-api-feature` thin only nếu thiếu · **cấm** clone Auth · **cấm** `/new-endpoint` RMMS · **cấm** `/database-migration` |
| iOS | **T-IOS-FORGOT** — AuthRoute `.forgot` · `LoginForgotView` + VM · use cases · DTO · entry từ Login · e2e ids | `/agent-dev-ios` |
| Android | **T-AND-FORGOT** — NavHost route · screen + VM · Retrofit · interceptor skip Bearer · e2e tags | `/agent-dev-android` |
| Auth NuGet upgrade | **không** bắt buộc P1 nếu proxy PASS | — |
| QA | Maestro slug `login-forgot` · `yarn e2e-qa-mobile` | `/agent-qa-mobile` |

**Audit note (repo hiện tại):** BFF controller + middleware skip + dual native screens **đã có** — TL/Dev xác nhận parity DoD + VERIFY GATE; **không** invent surface thứ hai.

---

## Client behaviors (SA lock → Dev)

| Case | Behavior |
|------|----------|
| Empty phone | Toast **Nhập số điện thoại** · no BFF |
| Offline request/reset | Toast **Không có mạng** · no queue |
| Send 200 | Toast Auth `message` · step Reset · giữ `phoneNumber` |
| Empty OTP/MK | Toast **Nhập mã và mật khẩu mới** |
| MK ≠ confirm | Toast **Mật khẩu xác nhận không khớp** |
| MK &lt; 6 | Toast **Mật khẩu tối thiểu 6 ký tự** |
| Reset 200 | Toast thành công → pop Login |
| Reset 400/422 | Toast Auth · stay |
| Back step 1 | pop Login |
| Back step 2 dirty | `LinmLeaveConfirm` · **cấm** `UIAlert` / `AlertDialog` |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `login-forgot` / **`shell`** |
| phase_from / phase_to | sa **confirmed** → tl pending |
| STATUS | `specs/login-forgot/STATUS.md` |
| solution_confirm | **approve** (autoApprove) |
| API | API-01 + API-02 **in slug** · **T-BE-FORGOT** thin proxy (keep) · **không** RMMS migration |
| T-BE | Step 4b Mobile.Bff only · **cấm** ERP.* · **cấm** invent `auth/forgot` |
| T-IOS / T-AND | Full-page `#sc-forgot` 2 steps · kit reuse · e2e ids |
| Offline / Persist | no queue · none |
| Gates | TZ `tz_na` · XCO `xco_na` · SHARE n/a |
| Next AskQuestion | autoApprove=ON — `route_confirm` khi TL xong |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=sa) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-18T21:43:00.000Z |
| versionGate | rechecked |
| staleNote | Artifact SA cũ skillVersion `2026.08.19.01` · autoApprove `recheck_new` · backup `specs/login-forgot/_backup/20260818T214250Z` · SSOT workflow `2026.08.19.19` · agent-sa-mobile `2026.08.19.10` |
| contentHash | sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c |
| bffContentHash | sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.10 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
