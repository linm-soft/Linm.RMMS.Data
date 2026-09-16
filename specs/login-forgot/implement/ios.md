# Dev — Implement — login-forgot (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call` · `/dev-ui-review`  
> task `task_41503568`

| | |
|--|--|
| Feature | `login-forgot` |
| Title | [Mobile] Quên mật khẩu |
| Role | `dev` · iOS |
| dest | **iPhone 17 Pro Max** **BUILD SUCCEEDED** 2026-09-16 · family `1` — **cấm** iPad listing |
| xcodegen | **PASS** |
| Kit | `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast`/`LinmToastHost` · `LinmBusyOverlay` · **`LinmLeaveConfirm`** |

## Layers

| Layer | Files |
|-------|--------|
| Presentation | `Presentation/Features/LoginForgot/LoginForgotView.swift` · `LoginForgotViewModel.swift` · `LoginForgotUiState.swift` · `LoginForgotIntent.swift` |
| Domain | `ForgotPasswordUseCase` · `ResetPasswordUseCase` · `AuthRepository` |
| Data | `AuthRepositoryImpl` · `PasswordRecoveryDto` · `ApiClient` `attachAccessToken: false` |
| Router | `SessionController.authRoute` `.forgot` · `AppRouter` ngoài TabView · Login `onForgot` |

## IA / API

- `#sc-login` **Quên mật khẩu?** → full-page `#sc-forgot` · **cấm** toast-only.
- **LIVE LOCK 2026-09-16:** ẩn phone/OTP/MK. Body = `LinmCopy.t("forgot.contactAdmin")` · e2e `forgot-contact`. Back `btn-back` → Login · **không** leave modal.
- Use-case `ForgotPasswordUseCase` / `ResetPasswordUseCase` **giữ** (không xóa) · **không** gọi từ View.
- **Cấm** watermark · `UIAlert` · invent `auth/forgot` · `mfeStdUrl` · restore OTP input.
- `/edit-mobile-feature` 2026-09-16: GAP-MOB-EDIT-FORGOT-01 · dest iPhone 17 Pro Max.
