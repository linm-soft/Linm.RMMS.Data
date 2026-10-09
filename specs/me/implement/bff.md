# Dev — BFF — me

> Status: **done** · no new controller

| Action | GET `mobile-bff/api/v1/auth/profile` |
| Host | Auth NuGet 1.26.0 `GetProfile` + `AuthPrefixRewriteMiddleware` |
| New code | **không** — live |
| Build | `dotnet build` `RMMS.Mobile.Bff.csproj` **PASS** · 0 warning · 0 error |
| T-BE-API / MIG | **n/a** |

Phone `/toi/thiet-bi` gọi `mobile-bff/api/v1/auth/sessions` (proxy JWT → Auth `users/me/sessions`). Admin xem `web-bff/api/v1/admin/login-devices` và `login-history`. Lịch sử là bảng `UserLoginEvents`, một dòng mỗi lần đăng nhập thành công.
