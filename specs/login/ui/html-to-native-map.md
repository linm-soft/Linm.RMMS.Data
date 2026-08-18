# HTML → native map — login (feature cite)

**Parent map:** `docs/html-to-native-map.md` (SSOT kit)  
**Feature:** `login` · `#sc-login` · Design `task_47ebc1c0`

Mọi field packet `ui/ux-analy.md` §3 **cite** 1 hàng dưới hoặc parent map.

## Chrome / zone

| Demo | Ý nghĩa | iOS | Android |
|------|---------|-----|---------|
| `.login` full page | Auth shell · không tab | `NavigationStack` root auth | Nav host auth |
| `.login-brand` / `DES-MOB-LOGIN-BRAND` | Logo 192 tĩnh · **alpha** trên surface · title 22/700/uppercase · **cấm** tile `#000`/`#fff` · **cấm** band 1/3 | `Image` `scaledToFit` | `Image` `ContentScale.Fit` |
| `.login-field` | Field row card | `formFieldHeight` 52 · cùng lead | same |
| `.login-actions` `.btn-primary` | CTA Đăng nhập | `LinmPrimaryButton` | `LinmPrimaryButton` |
| `.login-meta` | tín hiệu · forgot · bản Gói 1 | `LinmNetSignalMark` + Text | same |
| toast JS | thông báo | `LinmToast` | `LinmToast` |

## HTML element

| HTML | Ý nghĩa | iOS | Android |
|------|---------|-----|---------|
| `img.app-logo` / `.login-logo img` | Brand AppIcon | Asset catalog | mipmap / drawable |
| `input#f-user` `type=text` | Tài khoản + lead person | `LinmTextField` + `LinmPersonGlyph` | same |
| `input#f-pass` `type=password` + `.trail` eye | Mật khẩu + hiện/ẩn · **giữ IME** | **`LinmSecureTextField`** (`isSecureTextEntry`) | VisualTransformation · eye `canFocus=false` |
| `button.btn-primary` `loginOk()` | Đăng nhập | `LinmPrimaryButton` | `LinmPrimaryButton` |
| `a` Quên mật khẩu? | child backlog toast | `Button`/`Text` + toast | same |
| `[data-net-signal]` | hạng Tốt/TB/Yếu · display | `LinmNetSignalMark` · bind OS · **cấm** tap | same |

## Cấm

- `SecureField` / `OutlinedTextField` raw ngoài kit
- `alert` / `UIAlert` / `AlertDialog`
- WebView bọc HTML demo
- «Có mạng» / «Không mạng»
- Invent companyCode / biometric trên shell
- «Hiện trường · iPhone» / «· Android» / tap cycle tín hiệu

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.01 |
| generatedAt | 2026-08-18T18:30:00.000Z |
| mapParent | docs/html-to-native-map.md |
| kitAdded | LinmSecureTextField |
