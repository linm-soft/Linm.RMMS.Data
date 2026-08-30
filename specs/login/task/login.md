# Team lead — Task — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `done` |
| changeScope | `new_page` |
| packKind | **`shell`** (PO confirm) |
| stack | `native_dual` |
| Feature Kind | **shell** auth full-page `#sc-login` · **cấm** Kind A–G web / Lin* list / Slideout / tab 5 |
| route_confirm | **route_a** — cold start `#sc-home` guest · overlay `#sc-login` từ `btn-home-login` → toast success → Home staff · back `btn-login-back` · **cấm** deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · Xcode Simulator + Android emulator · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/login-*.md` · contentHash `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` · bffContentHash `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| prior · po | **confirmed** · `po/requirement.md` · `task_e19d880c` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual prototype · `task_47ebc1c0` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_3be7da84` |
| taskId | `task_5618e40d` |
| updatedAt | `2026-08-18T18:38:28.000Z` |
| thisAction | **Đăng nhập** only · children `login-forgot` · `login-logout` (`#sc-me` / POST `auth/logout`) = backlog · demo Home `btn-logout` = chrome retest login |

**Cấm:** `ERP.Service.*` · invent `auth/forgot` · invent `auth/refresh` · body JSON `username`/`userName` · queue login · `UIAlert`/`AlertDialog` · WebView HTML demo · `mfeStdUrl` · raw `SecureField`/`OutlinedTextField` · gộp forgot/logout vào slug này (`GAP-MOB-ACT-01/02`).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Platform package `Linm.Platform.Authentication.Bff` **1.26.0** (qua Mobile.Bff rewrite) |
| Contract window | live `GET api/v1/contract-accounts/session-window` · BFF proxy |
| kit | `LinmSecureTextField` + eye glyphs **shipped dual** · map `docs/html-to-native-map.md` · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Cold start **không** access token → full-page Login (`DES-MOB-LOGIN` / `#sc-login`) **ngoài** TabView. Submit OK + session-window `allowed` → toast **Đăng nhập thành công** → Home (~350 ms). Có token hợp lệ → vào Home (không ép login lại). |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng |

IA lock (ux-analy §1): `(auth) Login → toast → Home`. **Cấm** swipe-back ra Home khi chưa login · **cấm** UITabBar trên màn login.

---

## Live gap (TL audit 2026-08-18)

| Surface | Live | TL task |
|---------|------|---------|
| iOS Login screen | **MISSING** — `AppRouter` → `PlaceholderHomeView` TabView | **T-IOS-LOGIN** |
| Android Login screen | **MISSING** — chưa `*Login*` | **T-AND-LOGIN** |
| iOS Keychain | access only (`account=access`) | DELTA refresh cùng Keychain |
| Android TokenStore | Encrypted `access` only | DELTA key `refresh` |
| `POST auth/login` | Auth BFF live | app gọi `auth/login` body `{ id, password }` |
| `POST auth/refresh-token` | Auth BFF live | interceptor / infra · **cấm** `auth/refresh` |
| `GET contract-accounts/session-window` | API + BFF proxy live | **bắt buộc** sau login trước Home |
| Mobile.Bff `ContractWindowDefenseMiddleware` | **chưa** (Web BFF DONE) | **T-BE-MW** optional · **không** block P1 |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit password/eye | dual shipped | Dev **cấm** raw |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-SECURE | kit | — | **done** | `/install-mobile-kit-local` (Design) | `LinmSecureTextField` iOS SPM + Android AAR · map row password · gallery Form — **không** giao lại Dev kit |
| **T-IOS-LOGIN** | ios | T-KIT-SECURE · SA | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · `/mobile-app-architecture` (MVVM layer) | Full-page `#sc-login` parity · API-01+03 · token dual · toast · IA · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS · ghi `implement/ios.md` |
| **T-AND-LOGIN** | android | T-KIT-SECURE · SA | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Auth + session-window **live** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` — Schema_ContractAccountLifecycle **DONE** |
| **T-BE-MW** | bff | T-IOS/AND optional | **done** | copy Web middleware · **cấm** invent path | Attach `ContractWindowDefenseMiddleware` vào Mobile.Bff (`UseAuthentication` → MW → `MapControllers`) · same skip `/auth/` + `session-window` · same `CONTRACT_WINDOW_CLOSED` · `dotnet build` PASS |
| T-QA-LOGIN | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `login` only · live capture sim/adb · **cấm** sibling forgot/logout in-scope |

**1 action = 1 feature.** **Cấm** gộp `login-forgot` / `login-logout` vào task file này như in-scope implement.

---

## T-IOS-LOGIN — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-LOGIN` · `DES-MOB-LOGIN-BRAND` · `DES-MOB-LOGIN-FORM` · `#sc-login` |
| Pattern | Full page auth · **không** tab · **không** Modal/Sheet |

### UI (kit cite)

| Field | Kit | Notes |
|-------|-----|-------|
| brand | AppIcon / asset | **alpha** trên surface · **cấm** tile `#000`/`#fff` · **cấm** `rmms.png` |
| tagline | Text | `/agent-design` 22/700/uppercase · logo **192 tĩnh** · **cấm** band 1/3 · **cấm** «Hiện trường · iPhone» |
| userName | `LinmTextField` + `LinmPersonGlyph` | cùng `formFieldHeight` 52 · IME pin `LinmKeyboardAwareScroll` · Enter/`Go` **nếu `#f-pass` có giá trị → login** · Enter + MK rỗng → **focus `#f-pass`** · e2e id `f-user` · Auth seed `linm-soft` · **cấm** mã đơn vị · **cấm** `ignoresSafeArea(.keyboard)` |
| password | **`LinmSecureTextField`** | eye chrome · e2e id `f-pass` · Enter/`Go` → **login** · **reset rỗng khi submit** · giữ `userName` · **cấm** persist MK · Auth seed `Linm@2026` · **cấm** raw `SecureField` |
| submit | `LinmPrimaryButton` | **Đăng nhập** · e2e id `btn-login` |
| forgot | Text/Button link | toast **Quên mật khẩu → hệ thống xác thực** · **không** BFF · `.login-meta` **pin đáy giữa** khi IME ẩn (`GAP-MOB-EDIT-FOOTER-01`) |
| signal | `LinmNetSignalMark` | Display Tốt / TB / Yếu · bind NWPath · **cấm** tap cycle · cùng footer đáy giữa |
| toast | `LinmToast` | success / lỗi / offline / forceLogout |
| buildMeta | — | demo «bản Gói 1» = chrome prototype — **cấm** watermark process lên UI production nếu demo-to-real cấm (`GAP-DEV-MOB-PLACEHOLDER-01`) · Dev theo `demo-to-real-mobile.md` |

### API / store

| Step | Spec |
|------|------|
| Offline | **không** POST · toast/banner · **cấm** queue |
| POST `auth/login` | body `{ "id": "<userName>", "password": "…" }` · **omit** `activeCompanyId` · response root `token`/`refreshToken`/`expiresAt`/`user` |
| Store | Keychain access **và** refresh · **cấm** UserDefaults JWT |
| Company | JWT `company_id` → `CompanyContextStore` / `X-Company-Id` |
| GET `contract-accounts/session-window?authUserId={user.id}` | Bearer · bind `allowed`/`reason` |
| Window fail | clear tokens · toast Web copy · **ở lại** Login |
| Success | toast **Đăng nhập thành công** → Home ~350 ms |
| Refresh infra | `POST auth/refresh-token` `{ refreshToken }` · **cấm** `auth/refresh` |
| 401 retry | một lần refresh → clear + Login |

### Router

`AppRouter`: chưa token → `LoginView` · có token → Home (placeholder/tab IA). Login **không** trong `TabView`.  
Demo Home: `LinmSecondaryButton` **Đăng xuất** (`btn-logout`) → `LogoutUseCase` clear Keychain → `session.markLoggedOut()` → `#sc-login`. **Cấm** POST `auth/logout` · **cấm** `#sc-me`.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-LOGIN — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-login` · frame 412×915 |
| Pattern | Full page · **không** TopAppBar nav 5 · **không** `AlertDialog` system |

### UI / API

Cùng bảng field + API-01/02/03 như T-IOS. Kit: `LinmTextField` + lead · **`LinmSecureTextField`** · `onSubmit` IME Enter (`GAP-MOB-EDIT-IME-ENTER`) · `LinmKeyboardAwareScroll` (IME pin · **cấm** che field) · `LinmPrimaryButton` · `LinmToast` · `LinmNetSignalMark` display (bind NetworkCapabilities · **cấm** signal button / tap cycle). Footer `.login-meta` **pin `Alignment.BottomCenter`** khi IME ẩn (`GAP-MOB-EDIT-FOOTER-01`). Submit **reset `#f-pass`** · giữ last `userName`. Tagline: «Quản lý bảo trì đường bộ» only · **cấm** «Hiện trường · Android».

`TokenStore`: thêm encrypted key refresh · clear cả access+refresh. `ApiService`: Retrofit POST login · POST refresh-token · GET session-window — **cấm** OkHttp trong Composable. Nav: chưa token → Login · sau allowed → Home.  
Demo Home: `LinmSecondaryButton` **Đăng xuất** (`btn-logout`) → `LogoutUseCase` clear Encrypted store → `SessionState.setLoggedIn(false)` → Login. **Cấm** POST `auth/logout`.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-MW (optional · Step 4b BE align)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` (+ tham chiếu Web `Linm.RMMS.WebService/bff/.../ContractWindowDefenseMiddleware.cs`) |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · parity middleware copy |
| Scope | Copy **cùng** middleware Web → Mobile.Bff · **cấm** đổi message/code · **cấm** package mới |
| P1 | App GET session-window **đủ** DoD PO mục 7 — MW **không** block handoff Dev iOS/Android |
| Build | `dotnet build` Mobile.Bff PASS |

**BE ALIGN:** không API/migration mới. Chỉ optional MW parity. Dev BE chạy khi lấy T-BE-MW — **sau hoặc song song** FE nếu cần; P1 login **không** phụ thuộc.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | sau login · GET window · refresh retry |
| `X-Company-Id` | JWT `company_id` |
| `X-Timezone` | shell đã gửi |
| `Content-Type` / `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| Login 200 | **root** `token` — **cấm** giả định `ApiResponse.data` |
| session-window | `allowed` / `reason` · 403/`allowed=false` → forceLogout |
| Middleware (nếu T-BE-MW) | `code==CONTRACT_WINDOW_CLOSED` · `forceLogout:true` |

forceLogout copy: **Hợp đồng hết hạn hoặc tài khoản đang tạm khóa. Liên hệ quản trị.**

---

## Out of scope (this pack)

- `login-forgot` BFF + form
- `login-logout` / `#sc-me`
- Biometric / mã đơn vị trên shell
- Tab 5 / Home hub nghiệp vụ / GPS / camera
- Clone AuthController / local `PasswordHash`
- Web MFE / `mfeStdUrl` / `yarn start:std`

---

## Handoff → Dev

1. Đọc `ui/design.md` · `ui/ux-analy.md` §1–§9 · dual `#sc-login` · `be/solution-discovery.md` — **cấm** assume.
2. Serial hoặc 2 lock `scope=ios` / `scope=android` — **cấm** 2 agent cùng platform.
3. Slash: `/agent-dev-ios` rồi `/agent-dev-android` (hoặc scoped).
4. Kit: **chỉ** `LinmSecureTextField` cho MK — **cấm** raw.
5. Body login field **`id`** (không `username`).
6. VERIFY mỗi platform + BFF `dotnet build` PASS trước handoff QA.
7. Roles sau = **pending** đến lượt · roleOnly TL **không** chain Dev turn này.
8. e2eQa=ON: user test thủ công Simulator/emulator — **cấm** cite MFE localhost.

---

## Handoff → QA (khi Dev xong)

- AC slug **`login` only**
- Device: offline · toast (no system alert) · signal hạng · token secure · IA Login→Home
- Capture live `simctl`/`adb` → `qa/store/login/CAPTURE.md`
- **Cấm** test forgot/logout như in-scope

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.07 |
| rulesVersion | 2026.08.19.08 |
| generatedAt | 2026-08-18T18:38:28.000Z |
| versionGate | rechecked |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017 |
| priorSaTask | task_3be7da84 |
| thisTask | task_5618e40d |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.03 schemaVersion=1 workflowVersion=2026.08.19.07 rulesVersion=2026.08.19.08 versionGate=rechecked -->
