# Dev — Implement — login-forgot (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call` · `/dev-ui-review`  
> task `task_41503568`

| | |
|--|--|
| Feature | `login-forgot` |
| Title | [Mobile] Quên mật khẩu |
| Role | `dev` · iOS |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` — **cấm** iPad listing |
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

- `#sc-login` **Quên mật khẩu?** → full-page `#sc-forgot` step Request · **cấm** toast-only.
- POST `auth/forgot-password` `{ phoneNumber }` · toast Auth `message` → step Reset · giữ SĐT VM.
- POST `auth/reset-password` `{ phoneNumber, resetToken, newPassword }` · toast **Đặt lại mật khẩu thành công** → pop Login · **không** auto-login · **ignore** `temporaryPassword`.
- Client: empty phone / OTP+MK / mismatch / min 6 · offline **Không có mạng** · **cấm** queue.
- Back step 1 / step 2 sạch → Login. Step 2 dirty → **`LinmLeaveConfirm`** (`btn-leave-cancel` / `btn-leave-ok`).
- Busy = overlay only · **cấm** spinner nút + overlay.
- E2E: `btn-back` · `f-phone` · `btn-forgot-send` · `f-otp` · `f-new-pass` · `f-confirm-pass` · `btn-forgot-reset`.
- **Cấm** watermark · `UIAlert` · invent `auth/forgot` · `mfeStdUrl`.
