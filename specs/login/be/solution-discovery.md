# SA — Solution — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_3be7da84`) |
| changeScope | `new_page` |
| packKind | **`shell`** (PO confirm) |
| stack | `native_dual` |
| Feature Kind | **shell** auth full-page `#sc-login` · **cấm** Kind A–G web / Lin* list / Slideout |
| domain | **Auth (Platform)** × **Contract** session-window · **không** domain RMMS mới |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-login` · `task_47ebc1c0` |
| prior · po | **confirmed** · `po/requirement.md` · `task_e19d880c` |
| prior · data_analy | **confirmed** · `_data-analy/login-*.md` · contentHash `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` · bffContentHash `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| autoApprove | **ON** |
| versionGate | `rechecked` (stub SA không Version meta → `recheck_new` · backup `20260818T183223Z`) |
| taskId | `task_3be7da84` |
| confirmedBy | agent autoApprove · `task_3be7da84` |
| updatedAt | `2026-08-18T18:32:23.000Z` |
| thisAction | **Đăng nhập** only · `login-forgot` · `login-logout` = backlog |

**Cấm:** `ERP.Service.*` · `ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` · clone `AuthController` · fork DTO · invent `auth/forgot` · invent `auth/refresh` · parent `*Json` · mật khẩu local `rmms_users.PasswordHash` · app gọi `:5001` / `:5101` · `mfeStdUrl` / `yarn start:std`.

Standards: api-endpoint · bff-api-structure · bff-service-token · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (login = **no queue**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Auth = **Platform package** · cửa sổ HĐ = **Contract** `api/v1/contract-accounts` |
| API host login | **không** RMMS controller — `Linm.Platform.Authentication` qua BFF NuGet |
| API host window | `api/src/RMMS.Service.Api/Domains/Contract/Controllers/ContractSessionWindowController.cs` · **DONE** |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `AddLinmAuthenticationBff` 1.26.0 + `AuthPrefixRewriteMiddleware` + `MobileApiProxyController` |
| BFF web (peer) | `bff/src/RMMS.Service.Bff` · cùng Auth NuGet · **có** `ContractWindowDefenseMiddleware` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Response Auth | `LoginResponseDto` **root** `{ token, refreshToken, expiresAt, user }` — live `jq -r .token` · **không** envelope RMMS `ApiResponse` |
| Auth perm | JWT sau login · login/refresh/logout = **anonymous + BFF service token** (app **không** gắn service token) |
| Persist | **không** bảng mới pack này · identity = Auth DB · HĐ = `rmms_contract_accounts` + `rmms_contracts` (Schema_ContractAccountLifecycle **DONE**) |
| Out of pack | `login-forgot` · `login-logout` · tab 5 · Home hub · switch-company · đổi MK · biometric · mã đơn vị trên form |

### Route decision

| | Choice |
|--|--------|
| Slug | `login` → **shell** · 1 nút primary |
| App prefix | `mobile-bff/api/v1` |
| Auth rewrite | `/mobile-bff/api/v1/auth` → `/web-bff/api/v1/auth` (package route) |
| Downstream Auth | BFF-only `ServiceEndpoints:AuthenticationService` |
| Resource proxy | `contract-accounts/*` → `api/v1/contract-accounts` (`docs/bff-route-map.md`) |
| Rationale | Live package + live session-window — **không** endpoint mới · **không** clone Auth |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Auth HTTP | `Linm.Platform.Authentication.Bff` **1.26.0** | **cấm** `AuthController` local RMMS / Mobile.Bff |
| Auth DTO | `Linm.Platform.Authentication.Models` `LoginRequestDto` / `LoginResponseDto` / `RefreshTokenRequestDto` | same Web MFE / curl |
| Cửa sổ HĐ | `ContractSessionWindowController` + `ContractWindowEvaluator` | **cấm** fork DTO / path |
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | **cấm** UserDefaults / plaintext prefs cho JWT |
| Kit | `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmNetSignalMark` | Design `implement_kit` **done** · **cấm** raw SecureField |
| Persist | no-parent-json-field | login **không** ghi inventory JSON |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | API-01/02/03 — **không** DATE filter / form date | `/review-timezone-implement` | `expiresAt` UTC store only · `EffectiveFrom/To` evaluate **server** UTC · UI login không field ngày |
| XCO | **xco_na** | **không** GET/{id} View catalog | `/implement-view-cross-company` | session-window = user đang login (`authUserId` từ `user.id`) · controller đã `IgnoreQueryFilters` — app **cấm** query user khác |
| SHARE | **tenant_keep** | `ContractAccountEntity` : `TenantEntity` | `/implement-shared-table` | **không** master shared · **không** bảng mới · INTERNAL không row = evaluator `hasBinding:false` → **Allowed** (SPEC GAP-LOGIN-03) |

AskQuestion: `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · autoApprove=ON · `2026-08-18T18:32:23.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — không Create/Update HĐ |
| API shape | Auth scalars · session-window scalars `allowed` / `reason` |
| Migration | **không** `Schema_*` — `20260815065113_Schema_ContractAccountLifecycle` **DONE** |

---

## Live vs delta (audit 2026-08-18)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/auth/login` | Auth BFF 1.26.0 `Login` + rewrite | **Giữ** · app path `auth/login` |
| `POST …/auth/refresh-token` | DLL `RefreshToken` / `refresh-token` | **Giữ** · **GAP-MOB-BFF-02 đóng** — **cấm** `auth/refresh` |
| `POST …/auth/logout` | DLL `logout` | **Backlog** slug `login-logout` |
| `GET …/contract-accounts/session-window` | `ContractSessionWindowController` | **Giữ** · app GET sau login **bắt buộc** |
| `ContractWindowDefenseMiddleware` Web BFF | **DONE** `Program.cs` | Mobile.Bff **chưa gắn** — xem § middleware |
| Forgot / reset | Models 1.18.0 có `ForgotPasswordRequestDto` · **BFF 1.26.0 không route** | **GAP-MOB-BFF-01 đóng** — toast only · **cấm** bịa path |
| Native Login screen | **MISSING** (shell placeholder) | **DELTA UI** iOS + Android — **không** DELTA API |
| Keychain access only | iOS `KeychainTokenStore` account `access` | **DELTA** thêm **refresh** cùng Keychain · Android Encrypted thêm key refresh |
| `CompanyContextStore` | UserDefaults / prefs `companyCode` | **Giữ** cho tenant code (không JWT) · fill từ JWT `company_id` sau login |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-login` session login | brand · tagline · userName · password · submit · forgot chrome · signal · buildMeta | command Auth + GET window | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| userName | Tài khoản | **`id`** (`LoginRequestDto.Id`) | body | Username **hoặc** SĐT · **cấm** JSON `username` / `userName` trên Auth live · **cấm** ô mã đơn vị |
| password | Mật khẩu | `password` | body | **cấm** persist |
| — | — | `activeCompanyId` | **omit** Gói 1 | `LoginRequestDto.ActiveCompanyId` optional · UI ẩn company |
| — | access | `token` | Keychain / Encrypted | response `LoginResponseDto.Token` |
| — | refresh | `refreshToken` | Keychain / Encrypted | **cấm** plaintext |
| — | expiry | `expiresAt` | optional local | UTC · không field UI |
| — | authUserId | `user.id` | memory + query | `UserInfoDto.Id` Guid → `authUserId` session-window |
| — | tenant | JWT `company_id` | `CompanyContextStore` → `X-Company-Id` | CTX · **cấm** field UI |
| brand / tagline / signal / buildMeta | chrome | — | — | không API |
| forgot | Quên mật khẩu? | — | **không BFF** | toast demo · slug `login-forgot` backlog |

**Cấm** persist `PasswordHash` trên `rmms_users`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-BFF-01 | **Toast only** · copy **Quên mật khẩu → hệ thống xác thực** · **cấm** `auth/forgot` |
| GAP-MOB-BFF-02 | App **`POST auth/refresh-token`** body `{ refreshToken }` · **cấm** `auth/refresh` |
| GAP-MOB-BFF-MW | **P1 login:** app **GET** session-window sau login OK. **Không** block màn. Middleware Mobile.Bff = **T-BE** (parity Web) — **không** path mới |
| GAP-MOB-ACT-01/02 | **none** — 1 CTA = `login` · không child form |
| GAP-SA-LOGIN-ID | UI `userName` → body **`id`** (live `LoginRequestDto`) — **cấm** gửi `username` |
| GAP-SA-LOGIN-ENV | Login JSON **root** `token` (curl `jq -r .token`) — **cấm** giả định `ApiResponse.data` trừ khi live khác |
| Kit password | `LinmSecureTextField` **shipped** — Dev **cấm** raw |

### Middleware + DTO (REQUIRED — PO hỏi SA)

**Hai envelope khác nhau — cấm nhầm:**

| Trigger | HTTP | Body (camelCase live) | App |
|---------|------|------------------------|-----|
| GET `contract-accounts/session-window?authUserId=` | 200 | `ContractSessionWindow`: **`allowed`: true** (+ `reason` nếu có) | tiếp tục Home |
| GET same | 403 (hoặc 400 `invalid_user`) | **`allowed`: false**, `reason` string | **forceLogout** · **không** Home |
| Web BFF middleware (sau này Mobile.Bff) trên API khác | 403 | `{ code: "CONTRACT_WINDOW_CLOSED", message, forceLogout: true }` | interceptor: toast `message` · clear token · login |

Live GET fields **đã dùng trên controller:** `Allowed`, `Reason`. App bind `allowed` / `reason`. Extra JSON (nếu evaluator thêm) **ignore** — **cấm** invent field.

**forceLogout P1 (app):** 403 GET **hoặc** `allowed==false` → xóa access+refresh · clear company · `LinmToast` copy Web middleware: **Hợp đồng hết hạn hoặc tài khoản đang tạm khóa. Liên hệ quản trị.** · ở lại `#sc-login`.

**INTERNAL** (không `ContractAccount`): evaluator `hasBinding:false` → **Allowed** — **cấm** chặn login nội bộ Cục.

**T-BE-MW (không invent path):** copy **cùng** `ContractWindowDefenseMiddleware` từ `Linm.RMMS.WebService/bff/src/RMMS.Service.Bff/Startup/ContractWindowDefenseMiddleware.cs` vào Mobile.Bff · `UseAuthentication` → middleware → `MapControllers`. Skip `/auth/` + `session-window` (class live đã skip). **Cấm** sửa message/code. **Cấm** package mới. P1 login **không** phụ thuộc T-BE (app GET đủ DoD PO mục 7).

---

## API catalog

Base app: `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.  
Permission login: **anonymous**. Session-window: Bearer user JWT (proxy forward).  
Tenant: sau login `X-Company-Id` = JWT `company_id`.  
Errors: 401 generic (sai MK / Inactive — SPEC P0) · 403 cửa sổ HĐ · **cấm** native alert.

### API-01: POST auth/login

| | |
|--|--|
| Purpose | Đăng nhập shell — **1 action = slug `login`** |
| Permission | anonymous · BFF gắn service token downstream |
| BFF | Auth NuGet `AuthController` + rewrite |
| Downstream | `AuthenticationService` `POST auth/login` |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | n/a |

**Request** `LoginRequestDto`

| JSON | Type | Required | UI |
|------|------|----------|-----|
| `id` | string | * | field Tài khoản |
| `password` | string | * | field Mật khẩu |
| `activeCompanyId` | guid? | no | **omit** |

**Response 200** `LoginResponseDto` (root)

| JSON | Type | App |
|------|------|-----|
| `token` | string | access JWT |
| `refreshToken` | string | refresh |
| `expiresAt` | DateTime | UTC |
| `user` | `UserInfoDto` | `user.id` = `authUserId` · **`user.fullName`** = hero/me `.who` (fallback JWT `full_name` · `userName` · `lastUserName` · «Tài khoản») |

**Errors:** 401 → `LinmToast` in-app (dùng `message` body nếu có · **cấm** lộ Inactive vs sai MK nếu Auth generic). Offline → **không** gọi · toast/banner · **cấm** queue.

**Sau 200 (cùng turn login, trước Home):** lưu token → GET API-03. Chỉ Home khi window **allowed**.

### API-02: POST auth/refresh-token

| | |
|--|--|
| Purpose | Session infra (401 interceptor / pre-emptive) — **không** nút trên `#sc-login` |
| Permission | anonymous + body refresh |
| BFF | same Auth package |
| gates.tz | n/a |

**Request** `RefreshTokenRequestDto`: `{ "refreshToken": "…" }`  
**Response:** cùng shape login (`token` / `refreshToken` / …).  
**Cấm** path `auth/refresh`.

### API-03: GET contract-accounts/session-window

| | |
|--|--|
| Purpose | Defense cửa sổ HĐ (SPEC L5 / CTX) sau login |
| Permission | Bearer |
| BFF | `MobileApiProxyController` `{**path}` |
| Downstream | `GET api/v1/contract-accounts/session-window?authUserId={guid}` |
| Query | `authUserId` = `user.id` (Guid `D`) |
| gates.tz | n/a (server UTC) |
| gates.xco | n/a — chỉ self id |

**Response:** `ContractSessionWindow` — bind `allowed` · `reason`. 200 + `allowed=true` → toast **Đăng nhập thành công** → Home. 403/`allowed=false` → § middleware + DTO.

### Không thuộc slug `login`

| Method | Path | Note |
|--------|------|------|
| POST | `auth/logout` | `login-logout` |
| POST | `auth/switch-company` | Web shell |
| POST | `users/me/change-password` | pack `users` |
| — | forgot/reset | **không route** 1.26.0 |

---

## Offline / GPS / camera / push

| Factor | Decision |
|--------|----------|
| Offline submit | **cấm** · **cấm** `{Feature}OfflineStore` cho login · **cấm** hash local |
| GPS / camera / push / map | **N/A** |
| Biometric | **Ẩn Gói 1** |
| Token refresh | online only · fail → login |

---

## Client contract (iOS + Android — same DTO)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | sau login · GET API-03 · refresh retry |
| `X-Company-Id` | sau decode JWT `company_id` |
| `X-Timezone` | shell đã gửi — login **không** date filter |
| `Content-Type` / `Accept` | `application/json` |

Store: access **và** refresh trên Keychain (iOS) / Encrypted prefs (Android). `CompanyContextStore` **không** chứa JWT.

401 trên API sau login → một lần `API-02` → retry; vẫn 401 → clear + màn login. Interceptor đọc `code==CONTRACT_WINDOW_CLOSED` **nếu** T-BE-MW đã gắn.

---

## FormMode ↔ API

| Surface | FormMode | Success | Fail |
|---------|----------|---------|------|
| `#sc-login` | session login | API-01 200 **và** API-03 allowed → Home | 401 toast · offline no-submit · window closed forceLogout |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `login` / **`shell`** |
| phase_from / phase_to | sa **confirmed** → team-lead **pending** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Screens | Full page `#sc-login` · **không** tab 5 |
| Kit | `LinmSecureTextField` dual **bắt buộc** |
| API | API-01 + API-03 **in slug** · API-02 infra · **không** T-BE endpoint mới |
| T-BE | **optional** T-BE-MW middleware copy Web · **không** `database-migration` · **không** `/new-endpoint` |
| T-IOS / T-AND | Login UI + token dual + GET window + toast + IA Login→Home |
| Open | `login-forgot` / `login-logout` backlog |
| Chain this turn | **không** (roleOnly=`sa`) |
| Next slash | `/agent-tl-mobile` |

**Cấm** TL/Dev: invent path · `username` body · `auth/refresh` · queue login · `UIAlert`/`AlertDialog` · WebView HTML · `mfeStdUrl`.

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.04 |
| rulesVersion | 2026.08.19.06 |
| generatedAt | 2026-08-18T18:32:23.000Z |
| versionGate | rechecked |
| staleNote | Stub `be/solution-discovery.md` không Version meta → autoApprove `recheck_new` · backup `specs/login/_backup/20260818T183223Z` |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.04 rulesVersion=2026.08.19.06 versionGate=rechecked -->
