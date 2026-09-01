# SA — Solution — me-profile (mobile · Hồ sơ)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_99a8707a`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design chốt · form hồ sơ + đổi MK · surface **full screen** `#sc-me-profile` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-ME-PROFILE` · **cấm** web Kind B admin `users` · invent tab · ERP.* |
| thisAction | **Hồ sơ** only · entry reuse `me` `#row-profile` · **cấm** gộp `me-settings` / `login-logout` / web `users` (`GAP-MOB-ACT-01/02`) |
| domain | **Auth** · NuGet `GetProfile` / `UpdateProfile` / `ChangePassword` via Mobile.Bff rewrite · **cấm** invent `api/v1/me-profile` / RMMS `users/me` · **cấm** ERP.* |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` **approve** (same API host · Auth via BFF · **không** RMMS profile controller) |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` **approve** |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` **approve** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · `AuthPrefixRewriteMiddleware` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_0e0676c6` · designContentHash `sha256:me-profile-design-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_4f343d6b` · poContentHash `sha256:me-profile-po-requirement-20260831` |
| prior · data_analy | **confirmed** · `_data-analy/me-profile-control-hint.md` · `me-profile-bff-endpoints.md` · `me-profile-action-tree.md` · `me-profile-real-data.md` · contentHash `sha256:me-profile-control-hint-20260830` · realDataHash `sha256:me-profile-real-data-20260830` · bffContentHash `sha256:me-profile-bff-20260830` · actionTreeHash `sha256:me-profile-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA (sau Dev) · **cấm** `yarn e2e*` / `yarn start:std` / `mfeStdUrl` / Step 4b / migration ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new`) |
| taskId | `task_99a8707a` |
| confirmedBy | agent autoApprove · `task_99a8707a` |
| updatedAt | `2026-08-30T19:12:00.000Z` |

**Cấm:** invent `api/v1/me-profile` · invent RMMS `api/v1/users/me` · invent `MeProfileController` / `ProfileController` trên Mobile.Bff · fork DTO · assume bảng mới · app `:500x` / `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake toast «Đã cập nhật hồ sơ» / «Đã đổi mật khẩu» khi PUT/POST fail · invent org/role subtitle API · avatar upload P1 · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip` · `GAP-DES-DEMO-RESCAN-01`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`) · typography-web-mobile · tab-index-analy-review.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **không** invent RMMS profile |
| Domain | **Auth Identity** (downstream Auth service) · **không** RMMS Integration users admin |
| API downstream | Auth `users/me` (GET) · profile update · change-password — app **không** biết host `:500x` |
| Models / DTO (overlay) | Mobile.Bff `MobileAuthUser` · `MobileAuthProfileUpdateRequest` · `MobileAuthChangePasswordRequest` · `MobileAuthMessageResponse` |
| Persistence | Auth `ApplicationUser` / Identity — **DONE** · **không** bảng RMMS mới |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · Auth NuGet + `AuthPrefixRewriteMiddleware` · OpenAPI overlay typed · **không** dedicated MeProfile controller |
| Web BFF (cite only) | `web-bff/api/v{version}/auth` · **OUT** mobile app path |
| App | iOS SwiftUI + Android Compose · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Entry | Me `#row-profile` `#i-person` → push `#sc-me-profile` (thay no-op `break` / `Unit`) |
| GPS | **n/a** |
| Camera | **n/a P1** — avatar display only · **không** upload |
| Offline | GET fail → fallback `lastUserName` / `lastWho` + toast lỗi · PUT/POST fail → toast lỗi · **cấm** fake 200 |
| Push | **n/a** |
| Sibling | entry `me` · **cấm** re-own hub · **cấm** `me-settings` / `login-logout` |
| Out of pack | web admin `users` · forgot/reset password · switch-company · avatar upload · invent org subtitle |

### Route decision

| | Choice |
|--|--------|
| Slug | `me-profile` → **sheet→screen** · owner `DES-MOB-ME-PROFILE` |
| App prefix | `mobile-bff/api/v1` |
| App paths P1 | `GET auth/profile` · `PUT auth/profile` · `POST auth/change-password` |
| Downstream | Auth NuGet rewrite → Auth service profile / change-password |
| Dedicated Mobile.Bff controller | **không** · rewrite đủ |
| Step 4b / migration | **n/a** — Auth Identity/profile **DONE** · **cấm** SA chạy `/database-migration` |
| Rationale | Reuse live Auth overlay · cùng slug load/save/pwd · **cấm** invent path · **cấm** RMMS `users/me` |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | Auth NuGet + `AuthPrefixRewriteMiddleware` | **cấm** `MeProfileController` / `ProfileController` local |
| OpenAPI | `AuthOpenApiOperationFilter` · typed overlay | GET/PUT `auth/profile` · POST `auth/change-password` **live** |
| Request PUT | `MobileAuthProfileUpdateRequest` | flat `FullName` · `PhoneNumber` · `Email` — **cấm** parent JSON |
| Request POST | `MobileAuthChangePasswordRequest` | `CurrentPassword` · `NewPassword` only · Confirm **local** |
| Response GET/PUT | `MobileAuthUser` (+ app decode optional wrap/`CitizenId`) | **cấm** invent org/role fields |
| HTTP app | extend Auth repository / use cases via `ApiClient` | **cấm** raw HTTP trong View/VM · **cấm** VM→ApiClient |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` |
| Kit | `LinmTopBar` · `LinmTextField` · `LinmSecureField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmSectionLabel` · `LinmToast` · Me `LinmListRow` | `kit_missing_confirm` **N/A** |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`me`** active | **cấm** invent (`GAP-TAB-01`) |
| Store | account profile + password change · no GPS/camera claim mới | **cấm** `localhost` / LAN IP · family `1` **cấm** iPad listing claim (`GAP-SA-STORE-01`) |

---

## BFF / API contract (live audit 2026-08-30 · `task_99a8707a`)

Nguồn: `_data-analy/me-profile-bff-endpoints.md` + Mobile.Bff `AuthOpenApiDocuments` / `AuthOpenApiOperationFilter` · **hash skip** · **cấm** re-scan demo · **cấm** invent.

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Load form | `GET auth/profile` | Auth NuGet `GetProfile` `[Authorize]` + rewrite | Auth `users/me` · user DTO | **PASS** (hub `me` đã gọi) |
| Lưu hồ sơ | `PUT auth/profile` | Auth NuGet `UpdateProfile` | Auth update profile | **PASS** overlay typed |
| Đổi mật khẩu | `POST auth/change-password` | Auth NuGet `ChangePassword` | Auth change-password | **PASS** overlay typed |
| Toast ok / err / leave | — | — | local UI | **N/A** API |
| Entry hub tên | `GET auth/profile` | (reuse) | same | **không** duplicate controller |
| Invent `me-profile` / RMMS `users/me` | — | — | — | **cấm invent** |
| Dedicated BFF MeProfileController | — | — | — | **không** · **cấm invent** |
| Admin `integration/users*` | — | — | web `users` | **OUT** |

### GET / response — `MobileAuthUser` (+ app decode)

| Field | Wire | UI bind | Notes |
|-------|------|---------|-------|
| `Id` | yes | readonly / bind | |
| `FullName` | yes | `fullName` | required trim on PUT |
| `UserName` | yes (overlay) | display readonly | app DTO **thiếu** → Dev extend decode |
| `PhoneNumber` | yes | `phoneNumber` | |
| `Email` | **có thể thiếu** trên GET overlay | `email` empty OK | **GAP-MOB-MEPROF-EMAIL-01** · PUT vẫn gửi |
| `CitizenId` | optional (app decode nếu Auth trả) | display-only nếu có | **cấm** PUT · **GAP-MOB-MEPROF-CITIZEN-01** |

### PUT body — `MobileAuthProfileUpdateRequest`

| Field | Required P1 | Notes |
|-------|-------------|-------|
| `FullName` | yes (trim non-empty) | empty → disable Lưu **hoặc** toast «Nhập họ và tên» · **cấm** PUT trống |
| `PhoneNumber` | optional | |
| `Email` | optional | GET thiếu → user nhập · vẫn PUT |

### POST body — `MobileAuthChangePasswordRequest`

| Field | Required | Notes |
|-------|----------|-------|
| `CurrentPassword` | yes | |
| `NewPassword` | yes | |
| Confirm | **không wire** | local match only · mismatch → toast · **cấm** POST |

Response POST: `MobileAuthMessageResponse` · toast UI copy SSOT «Đã đổi mật khẩu» (không phụ thuộc message body).

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| Authenticated Bearer | GET/PUT profile · POST change-password | FE gate session · Auth `[Authorize]` |
| Admin users CRUD | `integration/users*` | **OUT** |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới cho pack này.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | không form date edit | |
| XCO | **xco_na** | không XCO trên profile self | |
| SHARE | **share_na** | Auth Identity user · **không** bảng RMMS mới · **cấm** invent `rmms_me_profile_*` | |
| Offline | **toast err + lastWho fallback** | GET fail → `lastWho` + toast · PUT/POST fail → toast · giữ form · **cấm** fake 200 | offline-sync |
| GPS | **n/a** | — | |
| Camera | **n/a** | avatar display · **không** upload P1 | |
| Push | **n/a** | — | |
| Store | **account / credentials** | PrivacyInfo + Play Data safety đã cover account · **cấm** localhost/LAN · family `1` **cấm** iPad · **không** claim xóa TK mới (signup N/A) | `GAP-SA-STORE-01` |
| Step 4b | **n/a** | Auth DONE | **cấm** SA chạy migration |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `ios_repo_confirm` approve · `android_repo_confirm` approve · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=N/A` · `solution_confirm=approve` · `2026-08-30T19:12:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** — flat Auth profile scalars |
| Child tables this pack (BE) | **none** — reuse Auth Identity · **không** invent bảng RMMS |
| Client store | screen form state · secure fields ephemeral · Keychain/Encrypted token · lastDisplayName refresh sau PUT 200 |
| Migration | **n/a** this pack |
| T-BE-API | **n/a** — Auth endpoints live · **không** endpoint mới trên RMMS |
| T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-30 / `task_99a8707a`)

| Surface | Live (native) | SA chốt P1 |
|---------|---------------|------------|
| `GET auth/profile` | iOS/Android hub `me` `FetchProfileUseCase` | **Giữ** · bind form fields trên `#sc-me-profile` |
| `PUT auth/profile` | **chưa** repository method | **Ship** · `UpdateProfileUseCase` / AuthRepository.put |
| `POST auth/change-password` | **chưa** | **Ship** · `ChangePasswordUseCase` / AuthRepository.post |
| `UserProfile` / DTO | `id` · `fullName` · `phoneNumber` (± `citizenId` DTO) · **thiếu** `email` · `userName` | Dev **extend** decode khớp §B · **cấm** invent org |
| Screen `#sc-me-profile` | **không** | **Ship** dual Design kit |
| Me `#row-profile` | iOS `break` · Android `Unit` | **Push** `#sc-me-profile` |
| Org subtitle hub | demo mock | **ẩn** nếu không field live (**GAP-MOB-MEPROF-ORG-01**) |
| Tab 5 shell | dưới Me | **Giữ** · `tabs: none` pack · tab `me` active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-me-profile` | profile form + change-password | GET/PUT/POST Auth | Auth ApplicationUser |
| Leave dirty (optional) | modal | local UI | — |
| Me entry | list row | local nav + live FullName | — |

### Field map (ui → dto → store) — khớp real-data §B + controlHint

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tôi | — | local | `go('me')` · Android icon-only OK |
| title | Hồ sơ | — | local | `LinmTopBar` 17 · **cấm** badge P1/P2 |
| avatar | (person) | — | local | `#i-person` 44/40 · **không** upload |
| fullName | Họ và tên | `FullName` | GET/PUT | `LinmTextField` · required |
| phoneNumber | Số điện thoại | `PhoneNumber` | GET/PUT | `LinmTextField` phone |
| email | Email | `Email` | PUT (+ GET nếu có) | empty OK nếu GET thiếu |
| userName | Tên đăng nhập | `UserName` / Id | GET | readonly · **không** PUT |
| citizenId | CCCD/CMND | `CitizenId` | GET optional | display-only · **cấm** PUT |
| btnSave | Lưu | `MobileAuthProfileUpdateRequest` | PUT | `LinmPrimaryButton` · busy · cùng slug |
| sectionPwd | Đổi mật khẩu | — | local | `LinmSectionLabel` 13 |
| currentPassword | Mật khẩu hiện tại | `CurrentPassword` | POST | `LinmSecureField` |
| newPassword | Mật khẩu mới | `NewPassword` | POST | `LinmSecureField` |
| confirmPassword | Xác nhận mật khẩu mới | — | local only | match · **không** wire |
| btnChangePwd | Đổi mật khẩu | body 2 field | POST | `LinmSecondaryButton` · busy · cùng slug |
| toastSaveOk | Đã cập nhật hồ sơ | — | after PUT 200 | `LinmToast` · refresh hub tên · **cấm** fake |
| toastPwdOk | Đã đổi mật khẩu | — | after POST 200 | clear secure fields |
| toastErr / validate | SSOT Design copy | — | fail / empty / mismatch | giữ form |
| leave* | Rời màn? … | — | local optional | in-app modal · **cấm** system alert |
| rowProfile | (live FullName) | — | local nav | reuse Me · `#i-person` · `row-profile` |
| rowProfileSub | (ẩn nếu không field) | — | — | **không** invent org |

**Demo fallback SSOT** (không fake PUT/POST 200): Title/CTA/Toast/Back = real-data § Demo · Design dual.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Me **Hồ sơ** `#row-profile` `#i-person` | push `#sc-me-profile` (thay no-op) | **owner** `me-profile` (entry reuse `me`) |
| Appear | GET `auth/profile` bind | owner · **cấm** enqueue |
| Lưu | validate → PUT · busy · toast · refresh hub tên | owner · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Đổi mật khẩu | local confirm match → POST · busy · toast · clear secure | owner · **cấm** enqueue |
| Toast ok / err | feedback UI | owner |
| Back «Tôi» / chevron | `go('me')` · leave-confirm nếu dirty | chrome |
| Tab 5 | shell giữ · `me` active | **cấm** invent |
| settings / logout / admin users | **không** ship | siblings / OUT |

**Cấm** start sibling `me-settings` / `login-logout` (`GAP-MOB-ACT-06`) · **cấm** enqueue Lưu / Đổi MK / confirm.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-MEPROF-NAV-01 | **CLOSED** · Me push `#sc-me-profile` |
| GAP-MOB-MEPROF-SCR-01 | **CLOSED** · ship screen dual Design |
| GAP-MOB-MEPROF-LOAD-01 | **CLOSED** · GET bind form |
| GAP-MOB-MEPROF-SAVE-01 | **CLOSED** · PUT + toast |
| GAP-MOB-MEPROF-PWD-01 | **CLOSED** · POST change-password + toast |
| GAP-MOB-MEPROF-DEMO-01 | **CLOSED** (Design dual) · SA **cấm** re-scan |
| GAP-MOB-MEPROF-EMAIL-01 | **CLOSED** · GET thiếu → empty · PUT vẫn gửi Email |
| GAP-MOB-MEPROF-ORG-01 | **CLOSED** · **không** invent org/role API · ẩn phụ |
| GAP-MOB-MEPROF-CITIZEN-01 | **CLOSED** · display-only nếu GET có · **cấm** PUT |
| GAP-MOB-MEPROF-CONFIRM-01 | **CLOSED** · Confirm local · body 2 field |
| GAP-MOB-BFF-01 | **Không** — Auth rewrite đủ |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp · kit mapped · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-DES-DEMO-RESCAN-01 | **CLOSED** · SA **cấm** re-scan |
| GAP-SA-STORE-01 | **cấm** localhost/LAN · family `1` **cấm** iPad claim |

---

## Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-BE-01 | api | **verified PASS** Auth profile/change-password live — **no-op** RMMS · **cấm** invent |
| T-BE-02 | migration | **n/a** |
| T-BFF-01 | mobile-bff | **verified PASS** Auth rewrite + OpenAPI overlay — **no-op** · **cấm** dedicated MeProfileController |
| T-IOS-MP-01 | ios | pending — screen `#sc-me-profile` · kit map · PUT/POST Auth use cases · extend DTO `email`/`userName`/(optional `citizenId`) |
| T-AND-MP-01 | android | pending — cùng §B · parity copy |
| T-IOS-ME-01 | ios | pending — `MeViewModel` `.profile` `break` → navigate push · refresh tên sau PUT |
| T-AND-ME-01 | android | pending — `row-profile` `Unit` → push · cùng |
| T-KIT-01 | kit | **reuse** TopBar/TextField/Secure/Primary/Secondary/Section/Toast/ListRow — **cấm** invent |
| T-QA-* | qa | pending — Maestro slug `me-profile` only · **cấm** web e2e / start:std |

---

## Confirm

`solution_confirm` = **approve** — `autoApprove=ON` · agent tự confirm · `task_99a8707a`.

Roles sau = **pending** đến lượt. Chain **`/agent-tl-mobile`** (không start trong task SA này · GAP-PKT-ROLE-01).

**This SA role: no FE/BE/native source write · no Step 4b · no e2e · no yarn build/start:std.**

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ios_repo_confirm` / `android_repo_confirm` = approve (STATUS ticks).

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| lane | `mobile` |
| from | `sa` · PASS · `task_99a8707a` |
| phase | `team-lead` |
| Next | `/agent-tl-mobile` · `task/me-profile.md` |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface screen) |
| solution | `be/solution-discovery.md` **confirmed** |
| BFF P1 | `GET/PUT auth/profile` · `POST auth/change-password` |
| autoApprove | ON |
| e2eQa | ON — queued QA (sau Dev) |
| STATUS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/STATUS.md` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T19:12:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.29.1 |
| orchestratorWorkflowVersion | 2026.08.29.1 |
| orchestratorSchemaVersion | qldb-mobile-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| designSkillVersion | 2026.08.25.01 |
| contentHashPriorDataAnaly | sha256:me-profile-control-hint-20260830 |
| priorRealDataHash | sha256:me-profile-real-data-20260830 |
| priorBffHash | sha256:me-profile-bff-20260830 |
| priorActionTreeHash | sha256:me-profile-action-tree-20260830 |
| priorPoHash | sha256:me-profile-po-requirement-20260831 |
| priorDesignHash | sha256:me-profile-design-20260831 |
| contentHash | sha256:me-profile-sa-solution-20260831 |
| taskId | `task_99a8707a` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
