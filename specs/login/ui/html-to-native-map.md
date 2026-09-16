# HTML → native map — login (feature cite)

**Parent map:** `docs/html-to-native-map.md` (SSOT kit)  
**Feature:** `login` · `#sc-login` · Design `task_47ebc1c0`

Mọi field packet `ui/ux-analy.md` §3 **cite** 1 hàng dưới hoặc parent map.

## Chrome / zone

| Demo | Ý nghĩa | iOS | Android |
|------|---------|-----|---------|
| `.login` full page | Auth shell · không tab · IME không che field | `LinmKeyboardAwareScroll` · **cấm** `ignoresSafeArea(.keyboard)` | `LinmKeyboardAwareScroll` · ADJUST_NOTHING in kit |
| `.login-brand` / `DES-MOB-LOGIN-BRAND` | Logo 192 tĩnh · **alpha** trên surface · title 22/700/uppercase · **cấm** tile `#000`/`#fff` · **cấm** band 1/3 | `Image` `scaledToFit` | `Image` `ContentScale.Fit` |
| `.login-field` | Field row card · IME pin trên bàn phím · typed `onSurface` trên `card` | `formFieldHeight` 52 · `LinmPlainInput` + `LinmFieldChrome` · **cấm** SwiftUI `TextField` raw | same · `textStyle` `onSurface` · `cursorBrush` primary · **cấm** Force Dark |
| `.login-actions` `.btn-primary` | CTA Đăng nhập · `isBusy` spinner giữa nút | `LinmPrimaryButton` `isBusy` | `LinmPrimaryButton` `isBusy` |
| Home `.btn-home-login` | CTA tách guest · e2e `btn-home-login` | Button card trên hero | same |
| `#btn-login-back` | Về Trang Chủ | Text button `login.backHome` | `TextButton` `testTag("btn-login-back")` |
| `.login-meta` | tín hiệu · forgot · **pin đáy giữa** (`margin-top: auto`) · ẩn khi IME | overlay `alignment: .bottom` · `LinmNetSignalMark` + Text | `Box` `Alignment.BottomCenter` · same |
| toast JS | thông báo | `LinmToast` | `LinmToast` |
| Kill / reopen | Root `tryRefreshToken` + exp−60s · guest Home nếu 401 | `RestoreSessionUseCase` + `scenePhase.active` | `repeatOnLifecycle(STARTED)` + `SessionTokenRefresher` |
| loading | Full-page spinner + blur nền | `.linmBusyOverlay` | `LinmBusyOverlay` |

## HTML element

| HTML | Ý nghĩa | iOS | Android |
|------|---------|-----|---------|
| `img.app-logo` / `.login-logo img` | Brand AppIcon | Asset catalog | mipmap / drawable |
| `input#f-user` `type=text` | Tài khoản + lead person · e2e id `f-user` · seed `linm-soft` · Enter + MK có giá trị → login · Enter + MK rỗng → focus pass · **chữ `onSurface`** | `LinmTextField` + `LinmPersonGlyph` + `onSubmit` + `focused` + `LinmPlainInput` + `accessibilityIdentifier("f-user")` | `testTag("f-user")` · `onSubmit` `ImeAction.Next`/`Go` · `textStyle` `onSurface` |
| `input#f-pass` `type=password` + `.trail` eye | Mật khẩu + hiện/ẩn · Enter → login · **reset khi login OK** · **giữ khi fail** · **cấm** persist · e2e id `f-pass` · **chữ `onSurface`** | **`LinmSecureTextField`** + `LinmFieldChrome` + `onSubmit` + `accessibilityIdentifier("f-pass")` | `testTag("f-pass")` · `onSubmit` `ImeAction.Go` · eye `canFocus=false` · `cursorBrush` |
| `button.btn-primary` `loginOk()` | Đăng nhập · e2e id `btn-login` · loading spinner giữa | `LinmPrimaryButton` `isBusy` + `accessibilityIdentifier("btn-login")` | `testTag("btn-login")` `isBusy` |
| Home demo button **Đăng xuất** | Clear local session → `#sc-login` · e2e `btn-logout` | `LinmSecondaryButton` + `accessibilityIdentifier("btn-logout")` | `testTag("btn-logout")` |
| `a` Quên mật khẩu? | child backlog toast | `Button`/`Text` + toast | same |
| `[data-net-signal]` | hạng Tốt/TB/Yếu · display | `LinmNetSignalMark` · bind OS · **cấm** tap | same |

## Cấm

- `SecureField` / `OutlinedTextField` raw ngoài kit
- `alert` / `UIAlert` / `AlertDialog`
- WebView bọc HTML demo
- «Có mạng» / «Không mạng»
- Invent companyCode / biometric trên shell
- «Hiện trường · iPhone» / «· Android» / tap cycle tín hiệu
- `ignoresSafeArea(.keyboard)` trên `#sc-login` · IME che `#f-user` / `#f-pass`
- Typed field ink `Color.primary` / OEM Force Dark — **cấm** chữ trắng trên `card` (`GAP-MOB-EDIT-FIELD-INK`)
- `/session-expired` · tự mở `#sc-login` khi refresh fail · logout restore khi mất mạng (`GAP-MOB-EDIT-SESSION-REFRESH`)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.01 |
| generatedAt | 2026-08-18T18:30:00.000Z |
| mapParent | docs/html-to-native-map.md |
| kitAdded | LinmSecureTextField · LinmPrimaryButton isBusy · LinmBusyOverlay |
