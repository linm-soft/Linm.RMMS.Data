# Dev — Implement — login-forgot (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` · `/dev-ui-review`  
> task `task_41503568`

| | |
|--|--|
| Feature | `login-forgot` |
| Title | [Mobile] Quên mật khẩu |
| Role | `dev` · Android |
| dest | `./gradlew :app:assembleDebug` **PASS** · apk `app-debug.apk` |
| Kit | `LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmBusyOverlay` · **`LinmLeaveConfirm`** |

## Layers

| Layer | Files |
|-------|--------|
| Presentation | `LoginForgotScreen.kt` · `LoginForgotViewModel.kt` · `LoginForgotUiState.kt` |
| Domain | `ForgotPasswordUseCase` · `ResetPasswordUseCase` |
| Data | `AuthRepositoryImpl` · `AuthDto` · Retrofit `auth/forgot-password` · `auth/reset-password` · interceptor **skip Bearer** |
| Nav | `SessionState.authRoute` `Forgot` · `AppNavHost` ngoài nav 5 · Login `btn-forgot` |

## IA / API

Parity iOS: 2 steps cùng `#sc-forgot` · API-01/02 · toast PO reset · **cấm** `AlertDialog` · **cấm** queue.
- System back + `#btn-back` → cùng `LoginForgotIntent.Back`.
- Step 2 dirty → `LinmLeaveConfirm` · testTags `btn-leave-cancel` · `btn-leave-ok`.
- testTags: `btn-back` · `f-phone` · `btn-forgot-send` · `f-otp` · `f-new-pass` · `f-confirm-pass` · `btn-forgot-reset`.
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-THEME-01** / **GAP-MOB-COPY-01** — `LinmCopy.t` · toast BFF `message` giữ.
