# Quên mật khẩu — Feature Context (child `login`)

> **Slug:** `login-forgot` · **Parent:** [`login.md`](login.md)  
> **Kind:** shell · clickable **hyperlink** `#sc-login` `.login-meta a` · **không** submit  
> **Status:** Context draft · enqueue `pending_confirm`  
> **Cấm:** gộp vào slug `login` · invent `auth/forgot` trước analy BFF

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tap **Quên mật khẩu?** → **màn / route / flow** xác thực (không toast-only trên slug `login`) |
| Demo | `specs/login/ui/prototype/{ios,android}/index.html` `#sc-login` · `.login-meta a` |
| Parent screen | `#sc-login` — submit **Đăng nhập** thuộc slug `login` (không tách task) |

## 2. API

Đọc CTX parent §3 + Mobile.Bff + Auth BFF **lúc analy**. **Cấm** bịa path nếu DLL/BFF chưa có route.

## 3. DoD ngắn

- 1 feature = 1 action link  
- Analy ghi BFF table + action tree  
- Start chỉ sau Approve board (`sibling_assign`)
