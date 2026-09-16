# Quên mật khẩu — Feature Context (child `login`)

> **Slug:** `login-forgot` · **Parent:** [`login.md`](login.md)  
> **Kind:** shell · clickable **hyperlink** `#sc-login` `.login-meta a` · **không** submit  
> **Status:** Implemented native · BFF proxy align  
> **Cấm:** gộp vào slug `login` · invent `auth/forgot` (đúng path = `forgot-password`)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tap **Quên mật khẩu?** → màn `#sc-forgot` hiện **Liên hệ admin để được cung cấp** (SMS OTP chưa live · **cấm** form) |
| Demo | `specs/login-forgot/ui/prototype/{ios,android}/index.html` |
| Parent | `#sc-login` link |

## 2. API

| Method | Path | Host |
|--------|------|------|
| POST | `mobile-bff/api/v1/auth/forgot-password` | Mobile.Bff → Auth `api/v1/Auth/forgot-password` |
| POST | `mobile-bff/api/v1/auth/reset-password` | Mobile.Bff → Auth `api/v1/Auth/reset-password` |

Body: `{ phoneNumber }` · `{ phoneNumber, resetToken, newPassword }`.

## 3. DoD ngắn

- Dual native + BFF build PASS
- Navigate from login (không toast-only)
- Live: `forgot-contact` · **không** `f-phone` / `f-otp`
- e2eQa Maestro ids shipped
