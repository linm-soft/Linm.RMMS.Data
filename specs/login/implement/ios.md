# Dev — Implement — login (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call` · `/dev-ui-review`  
> task `task_1e440396`

| | |
|--|--|
| Feature | `login` |
| Title | [Mobile] Đăng nhập |
| Role | `dev` · iOS |
| dest | **iPhone 17 Pro Max** PASS · **iPad Pro 13-inch (M4)** không có trên lab · **iPad Pro 13-inch (M5)** PASS (`store_sim_confirm` autoApprove · skill dest A4 M5) |
| xcodegen | PASS |
| Kit | `LinmTextField` + `LinmPersonGlyph` · `LinmSecureTextField` · `LinmPrimaryButton` `isBusy` · `LinmToast`/`LinmToastHost` · `LinmNetSignalMark` display |

## Layers

| Layer | Files |
|-------|--------|
| Presentation | `Presentation/Features/Login/LoginView.swift` · `LoginViewModel.swift` · `LoginUiState.swift` · `LoginIntent.swift` |
| Domain | `LoginUseCase` · `AuthRepository` · `NetworkStatusRepository` · `AuthSession` · `SessionWindow` |
| Data | `AuthRepositoryImpl` · `AuthDto` · `AuthDtoMapper` · `ApiClient` (401 → `auth/refresh-token` 1 lần) · `KeychainTokenStore` access+refresh · `JwtCompanyClaims` |

## IA / API

- Cold start không access token → `LoginView` ngoài `TabView`. Có token → Home placeholder (kit gallery).
- Demo Home **Đăng xuất** (`btn-logout`) → `LogoutUseCase` clear Keychain + company → toast **Đã đăng xuất** → `#sc-login`. **Cấm** POST `auth/logout` · **cấm** `#sc-me`.
- POST `auth/login` body `{ id, password }` — **omit** `activeCompanyId`. Root `token`/`refreshToken`/`user.id`.
- GET `contract-accounts/session-window?authUserId=` sau login · `allowed=false` / 403 `CONTRACT_WINDOW_CLOSED` → clear token · toast Web copy · ở lại Login.
- Offline: **không** POST · toast **Không có mạng**.
- Forgot: toast **Quên mật khẩu → hệ thống xác thực** · **không** BFF.
- **Cấm** watermark `bản Gói 1` trên UI (`GAP-DEV-MOB-PLACEHOLDER-01`).

## Notes

- Rebuild local XCFramework sau kit `formFieldHeight` 52 + `LinmTextField(leading:)`.
- Layout **tĩnh** top: logo **192** **alpha** (`scaledToFit` · **cấm** `Color.black` tile) + title + form + CTA · footer `.login-meta` **pin `.bottom` giữa** khi IME ẩn (`GAP-MOB-EDIT-FOOTER-01`) · IME hiện thì ẩn footer · `LinmKeyboardAwareScroll` · **cấm** `ignoresSafeArea(.keyboard)` · focus field pin trên IME. **cấm** band 1/3 · **cấm** animation / compact IME. Mắt giữ IME. **cấm** ×3.
- Signal: bind `NWPath` · **cấm** tap cycle (GAP-MOB-SIGNAL-01/02).
- Field: user + pass cùng 52 + lead (GAP-MOB-FIELD-CHROME-01). Submit **reset `#f-pass`** · giữ last `userName` (Keychain `lastUserName` · **không** xóa khi logout) · **cấm** persist MK.
- E2E: `accessibilityIdentifier` `f-user` / `f-pass` / `btn-login` · demo Home `btn-logout` · Maestro `qa/e2e/ios.yaml` · Auth docker seed `linm-soft` / `Linm@2026`.
- `/edit-mobile-feature` 2026-08-19: IME pin `LinmKeyboardAwareScroll` · **cấm** `ignoresSafeArea(.keyboard)` · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** **PASS**.
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-FOOTER-01** footer pin `.bottom` giữa · ẩn khi IME · `xcodebuild` dest **iPhone 17 Pro Max** **PASS**.
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-PASS** submit reset `#f-pass` · giữ last user · `xcodebuild` dest **iPhone 17 Pro Max** **PASS**.
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-IME-ENTER** `#f-user` Enter + MK có giá trị → login · Enter + MK rỗng → focus `#f-pass` · `#f-pass` Enter → login · kit `onSubmit` · `xcodebuild` dest **iPhone 17 Pro Max** **PASS** · **iPad Pro 13-inch (M5)** **PASS**.
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-THEME-01** / **GAP-MOB-COPY-01** — `LinmTokens` + `LinmCopy.t` · **cấm** hex/VN literal · API `userMessage` giữ.
