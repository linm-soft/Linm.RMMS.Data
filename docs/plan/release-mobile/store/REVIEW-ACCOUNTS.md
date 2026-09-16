# Store review accounts — RMMS native

> Seed: Auth `Linm.Platform.Authentication` · `data/users/rmms/rmms_users.csv` + runtime `EnsureRmmsStoreReviewAccountsAsync` (tenant **RMMS**).  
> Guideline 2.1: dán vào **App Store Review Notes** / **Play Console** → App access.

Mật khẩu **không** đổi trên listing công khai — chỉ notes nội bộ store.

| Store | Username | Password | Package | Job |
|-------|----------|----------|---------|-----|
| **Apple** (iOS) | `rmms-001` | `RMMS@2026` | `MANAGER-RMMS` | Đăng nhập → Tab Trang Chủ / Hiện trường / Sự cố (staff lists) |
| **Google Play** (Android) | `rmms-002` | `RMMS@2026` | `MANAGER-RMMS` | Cùng flow dual |

Tenant JWT `company_id` = **RMMS**. Backend Store = `{BffBase}` production Mobile BFF.

## Local demo + capture (lab)

Auth RMMS docker `:5003` / CSV `rmms_users.csv` · **cấm** `linm-soft`.

| Dùng | Username | Password | Package |
|------|----------|----------|---------|
| Maestro listing · Debug/Release sim local | `rmms-admin` | `RMMS@2026` | `ADMIN-RMMS` |

Flow yaml: [`e2e-ios-listing.yaml`](e2e-ios-listing.yaml) `inputText` = acc này. **Không** dán `rmms-admin` vào Review Notes trừ khi chốt lại bảng Store ở trên.

## Review notes (copy)

```
Demo login (staff):
iOS: username rmms-001 / password RMMS@2026
Android: username rmms-002 / password RMMS@2026

Open the app → Đăng nhập → use the account above.
Guest home is available without login (FAQ / privacy).
Staff lists (patrol, incidents, work orders) appear after login.
Forgot-password OTP is contact-admin only (no SMS).
```

## Apply seed

| Env | Cách |
|-----|------|
| Docker `AUTH_DOMAIN=rmms` | Restart Auth — `ReImportSeed` + runtime ensure |
| Production | Redeploy / restart Auth RMMS (`DevAuth:DefaultCompanyCode=RMMS`) — runtime ensure **không** phụ thuộc hash CSV |
| CLI one-off | `dotnet run -- import-users rmms_users` từ Auth API |

**Cấm** dùng `linm-soft` (ADMIN platform LINM) trong store notes.
