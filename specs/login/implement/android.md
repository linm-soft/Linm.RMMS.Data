# Dev — Implement — login (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` · `/dev-ui-review`  
> task `task_1e440396`

| | |
|--|--|
| Feature | `login` |
| Title | [Mobile] Đăng nhập |
| Role | `dev` · Android |
| Build | `./gradlew :app:assembleDebug` **PASS** |
| Kit | `LinmTextField` + `LinmPersonGlyph` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToastHost` · `LinmNetSignalMark` display |

## Layers

| Layer | Files |
|-------|--------|
| presentation | `presentation/feature/login/LoginScreen.kt` · `LoginViewModel.kt` · `LoginUiState.kt` · `LoginToastHub.kt` |
| domain | `LoginUseCase` · `AuthRepository` · `NetworkStatusRepository` |
| data | `AuthRepositoryImpl` · `ApiService` login/refresh-token/session-window · `TokenStore` access+refresh encrypted · `TokenAuthenticator` · `AuthInterceptor` skip `/auth/login`+`/auth/refresh-token` · `JwtCompanyClaims` |

## IA / API

Cùng iOS: body `{ id, password }` · GET session-window · forceLogout copy · offline no-queue · forgot toast only · **cấm** `auth/refresh` · **cấm** `AlertDialog` · **cấm** `bản Gói 1`.

Nav: `AppNavHost` — chưa token → `LoginScreen` · allowed → `PlaceholderHomeScreen`. **Không** NavigationBar 5 trên login.

## Notes

- Layout **tĩnh** top: logo **192** **alpha** (`ContentScale.Fit` · **cấm** `Color.Black` tile / Material elevation) + title + form + CTA · footer `Box` bottom · login `SOFT_INPUT_ADJUST_NOTHING` (restore khi rời) · **cấm** band 1/3 · **cấm** animation / compact IME. Eye `canFocus=false`. **cấm** ×3 · **cấm** «Hiện trường · Android».
- Signal: bind `NetworkCapabilities` · **cấm** tap cycle.
- Field: user + pass cùng `formFieldHeight` 52 + lead person/lock.
- Pack kit local `ui:0.1.0` trước assemble (leading + height 52).
- Emulator Pixel_9a `adb` **offline** lúc capture `/dev-ui-review` (qemu 100% CPU) — QA live `adb` khi emulator sẵn.
- Cleartext `10.0.2.2` / localhost cho BFF Debug.
