# PO — requirement — login-forgot

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| title | [Mobile] Quên mật khẩu |
| this role | `po` · `/agent-po-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **shell** |
| stack | `native_dual` |
| parent | `login` |
| thisAction | **Quên mật khẩu?** → màn / flow xác thực (OTP + đặt lại MK) |
| autoApprove | **ON** (run packet Autopilot) |
| updatedAt | `2026-08-19T04:05:00.000Z` |
| taskId | `task_20426736` |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |

**Cấm:** gộp vào slug `login` · toast-only · invent `auth/forgot` · Lin* / erp-form-context · `mfeStdUrl` · `UIAlert` / `AlertDialog` · watermark «bản Gói N».

## 1. Goal

User trên shell Đăng nhập tap **Quên mật khẩu?** → full-page flow Auth platform: nhập SĐT → nhận mã → đặt mật khẩu mới → quay lại Đăng nhập.

## 2. Screens

| Screen | IA | CTA |
|--------|----|-----|
| `#sc-forgot` step Request | Brand + SĐT + **Gửi mã** | POST `auth/forgot-password` |
| `#sc-forgot` step Reset | SĐT (readonly/prefilled) + mã + MK mới + xác nhận + **Đặt lại mật khẩu** | POST `auth/reset-password` |
| Back | Quay lại `#sc-login` | no BFF |

**1 action = 1 feature.** Steps = cùng slug (không enqueue sibling).

## 3. Fields (from analy)

| Field | Required | Kit |
|-------|----------|-----|
| phoneNumber | * | `LinmTextField` |
| resetToken | * step2 | `LinmTextField` |
| newPassword | * step2 | `LinmSecureTextField` |
| confirmPassword | * step2 client | `LinmSecureTextField` |

## 4. API (analy)

| Call | Path |
|------|------|
| Request | `POST mobile-bff/api/v1/auth/forgot-password` `{ phoneNumber }` |
| Reset | `POST mobile-bff/api/v1/auth/reset-password` `{ phoneNumber, resetToken, newPassword }` |

BFF align bắt buộc (Auth NuGet 1.26.0 thiếu route) — xem `_data-analy/login-forgot-bff-endpoints.md`.

## 5. Device AC

| ID | Case | Expect |
|----|------|--------|
| AC-F-01 | Tap Quên MK từ login | Navigate `#sc-forgot` · **không** toast-only |
| AC-F-02 | Empty phone → Gửi mã | Toast cảnh báo · không gọi BFF |
| AC-F-03 | Online Gửi mã | Toast message Auth · chuyển step Reset |
| AC-F-04 | Offline | Toast **Không có mạng** · no queue |
| AC-F-05 | MK mới ≠ xác nhận | Toast · không gọi reset |
| AC-F-06 | Reset success | Toast thành công → pop Login |
| AC-F-07 | Reset 400 | Toast message Auth · stay |
| AC-F-08 | Keyboard | Không đè field · content-type tel / password |
| AC-F-09 | Brand | App logo `logo/mobile` · **cấm** rmms.png |
| AC-F-10 | Native alert | **Cấm** |

## 6. DoD

- Dual native screens + BFF proxy build PASS
- Login link → forgot route (iOS + Android)
- e2eQa ON → Maestro scenarios slug `login-forgot`
- **Cấm** completed khi xcodegen / assembleDebug / `dotnet build` fail

## 7. Out of scope

- `login` submit · `login-logout` · change-password logged-in · admin reset-password · biometric · companyCode

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.01 |
| generatedAt | 2026-08-19T04:05:00.000Z |
