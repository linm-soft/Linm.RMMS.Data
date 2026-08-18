# BFF endpoints — login (mobile)

| | |
|---|---|
| feature | `login` |
| bff | `Linm.RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | `Linm.Platform.Authentication.Bff` 1.26.0 |
| source | CTX `login.md` §3 · `docs/init-bff-auth.md` |
| **cấm** | invent path · clone AuthController |

## Table

| Action / screen | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|-----------------|--------|--------------------|-----|------------|--------|-----|
| Đăng nhập (`login`) | POST | `auth/login` | Auth NuGet · prefix rewrite | `ServiceEndpoints:AuthenticationService` | CTX + `init-bff-auth.md` | — |
| Làm mới phiên | POST | `auth/refresh` | same | Auth | CTX | — |
| Đăng xuất (`login-logout`) | POST | `auth/logout` | same | Auth | CTX | — |
| Cửa sổ HĐ (sau login) | GET | `contract-accounts/session-window?authUserId=` | RMMS BFF | RMMS Contract | CTX L5 | 403 `CONTRACT_WINDOW_CLOSED` |
| Quên mật khẩu (`login-forgot`) | — | — | Platform Auth | — | CTX §2 «quên MK (platform)» | **GAP-MOB-BFF-01** — không có path trong CTX / Mobile.Bff · **cấm** bịa |

App chỉ gọi `{BffPrefix}`. **Cấm** biết `:500x` / service URL.
