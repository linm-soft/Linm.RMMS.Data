# Dev — Implement — login-forgot (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` · `/dev-ui-review`  
> task `task_41503568`

| | |
|--|--|
| Feature | `login-forgot` |
| Title | [Mobile] Quên mật khẩu |
| Role | `dev` · Android |
| dest | `./gradlew :app:assembleDebug` **PASS** 2026-09-16 · apk `app-debug.apk` |
| Kit | `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmBusyOverlay` · **`LinmLeaveConfirm`** |

## Layers

| Layer | Files |
|-------|--------|
| Presentation | `LoginForgotScreen.kt` · `LoginForgotViewModel.kt` · `LoginForgotUiState.kt` |
| Domain | `ForgotPasswordUseCase` · `ResetPasswordUseCase` |
| Data | `AuthRepositoryImpl` · `AuthDto` · Retrofit `auth/forgot-password` · `auth/reset-password` · interceptor **skip Bearer** |
| Nav | `SessionState.authRoute` `Forgot` · `AppNavHost` ngoài nav 5 · Login `btn-forgot` |

## IA / API

Parity iOS **LIVE LOCK 2026-09-16:** contact-admin line · **cấm** `AlertDialog` · **cấm** OTP input.
- System back + `#btn-back` → `LoginForgotIntent.Back` · pop Login.
- testTags: `btn-back` · `forgot-contact`.
- Use-case Retrofit **giữ** · **không** bind UI.
- `/edit-mobile-feature` 2026-09-16: GAP-MOB-EDIT-FORGOT-01 · `assembleDebug`.
