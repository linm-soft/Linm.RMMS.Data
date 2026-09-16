# HTML → native map — login-forgot

> **LIVE LOCK 2026-09-16** — cite `forgot-contact` Text. **Cấm** restore `LinmTextField` phone/OTP trên live.  
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
| `#forgot-contact` | A static text muted | Text `LinmCopy.t("forgot.contactAdmin")` | Text same | `forgot-contact` |

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
