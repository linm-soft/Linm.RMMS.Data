# Control hint — login (mobile)

| | |
|---|---|
| feature | `login` |
| kind | shell |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` |
| ctx | `docs/context/features/login.md` |
| agent | `agent-data-analy-mobile` |
| at | 2026-08-18T16:48:00.000Z |

## Fields

| Field | VN | controlHint | Source | Notes |
|-------|----|-------------|--------|-------|
| brand | Logo app | Image (AppIcon) | `DES-MOB-LOGIN-BRAND` | SSOT `logo/mobile` AppIcon 1024 → `assets/app-logo.png` · **cấm** `rmms.png` wordmark |
| userName | Tài khoản | Text | CTX login shell | Username / SĐT · autocomplete username |
| password | Mật khẩu | SecureText | CTX | Toggle hiện/ẩn = chrome · không slug |
| submit | Đăng nhập | Button primary | demo `loginOk()` | 1 action = `login` |
| forgot | Quên mật khẩu? | Text link | demo + CTX §2 | Child `login-forgot` |
| signal | Tín hiệu | SignalQuality | demo meta | Tốt / TB / Yếu · **cấm** «Có mạng» |

## Tech factors

| Factor | Login form | Note |
|--------|------------|------|
| GPS | no | — |
| camera | no | — |
| offline | no submit | Queue sau login · **cấm** local `PasswordHash` |
| map | no | — |
| biometric | defer | Demo không có nút · không invent slug |
| push | no | — |

## Cấm

- Clone `AuthController` / mật khẩu local `rmms_users`
- `window.alert` / `confirm`
- Toolbar Hồ sơ / Đổi MK trên chrome login
