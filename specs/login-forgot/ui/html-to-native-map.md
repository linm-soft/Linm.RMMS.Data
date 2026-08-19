# HTML → native map — login-forgot

> Status: **confirmed** · `/agent-design-mobile` · task `task_9607fe43`  
> SSOT product: `docs/html-to-native-map.md` · cite hàng dưới — **cấm** đoán kit.

| | |
|--|--|
| Feature | `login-forgot` |
| Demo | `ui/prototype/{ios,android}/index.html` `#sc-forgot` |
| Kit gate | **reuse** login · `kit_missing_confirm` N/A |

## Zone → kit

| Demo zone / element | Map row (docs) | SwiftUI | Compose | e2e |
|---------------------|----------------|---------|---------|-----|
| `#btn-back` | A top bar / nav chrome | Nav back | TopAppBar back | `btn-back` |
| brand `img` | B `img` | AppIcon Image | mipmap Image | — |
| product title | A static text | Text | Text | — |
| `#f-phone` | B `input type=text` / tel · `formFieldHeight` 52 | `LinmTextField` | `LinmTextField` | `f-phone` |
| `#btn-forgot-send` | A `.btn-ok` / B `button` primary · `isBusy` | `LinmPrimaryButton` | `LinmPrimaryButton` | `btn-forgot-send` |
| `#f-otp` | B `input type=text` | `LinmTextField` | `LinmTextField` | `f-otp` |
| `#f-new-pass` + `#i-eye-new` | B `input type=password` + `.trail` eye | `LinmSecureTextField` | `LinmSecureTextField` | `f-new-pass` |
| `#f-confirm-pass` + `#i-eye-confirm` | B password + eye | `LinmSecureTextField` | `LinmSecureTextField` | `f-confirm-pass` |
| `#btn-forgot-reset` | A `.btn-ok` · `isBusy` | `LinmPrimaryButton` | `LinmPrimaryButton` | `btn-forgot-reset` |
| `#toast` | A toast / banner | `LinmToast` | `LinmToast` | — |
| `#leave-modal` | A leave modal | `LinmLeaveConfirm` | `LinmLeaveConfirm` | `btn-leave-cancel` · `btn-leave-ok` |
| busy POST | A loading full page | `LinmBusyOverlay` | `LinmBusyOverlay` | — |

## Tokens

| CSS / design | Hex / value | Native |
|--------------|-------------|--------|
| primary | `#0C84C0` | `LinmTokens.primary` |
| form field | `52` | `formFieldHeight` |
| control / button | `44` | `controlHeight` / `buttonHeight` |
| busy blur | `12` | `busyBlur` |

## Cấm

- Raw `SecureField` / `OutlinedTextField` / `UIAlert` / `AlertDialog` / `window.alert`
- WebView HTML-as-app · `mfeStdUrl` · invent `auth/forgot`
- Ship `.note` process / device label / watermark «bản Gói N»
