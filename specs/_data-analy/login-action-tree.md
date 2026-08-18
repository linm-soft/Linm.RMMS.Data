# Action tree — login (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md`  
Verify demo iOS + Android `#sc-login` · `#sc-me` — không bịa nút.

| feature | parent | action | demo | enqueue |
|---------|--------|--------|------|---------|
| `login` | — | Đăng nhập | `#sc-login` primary | **this turn** `pilot_one` |
| `login-forgot` | `login` | Quên mật khẩu? | `.login-meta a` (iOS + Android) | backlog |
| `login-logout` | `login` | Đăng xuất | `#sc-me` row | backlog |

Logo: `DES-MOB-LOGIN-BRAND` = app logo `app-logo.png`.
