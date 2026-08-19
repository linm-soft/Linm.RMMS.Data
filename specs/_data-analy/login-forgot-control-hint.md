# Control hint — login-forgot (mobile)

| | |
|---|---|
| feature | `login-forgot` |
| kind | `shell` |
| packKind | `shell` |
| changeScope | `new_page` |
| parent | `login` |
| demo | `specs/login/ui/prototype/{ios,android}/index.html` `#sc-login` `.login-meta a` · child `#sc-forgot` (Design) |
| ctx | `docs/context/features/login-forgot.md` · parent `login.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T03:58:00.000Z` |
| thisAction | **Quên mật khẩu?** hyperlink → màn / flow xác thực · **không** toast-only · **không** gộp vào `login` |

## Skill packet

| File | Step |
|------|------|
| **this** | 4–5 controlHint + tech |
| [`login-forgot-bff-endpoints.md`](login-forgot-bff-endpoints.md) | 6 |
| [`login-forgot-action-tree.md`](login-forgot-action-tree.md) | 7 |

## UI control

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| brand | Logo app | Image | * | AppIcon / mipmap | `logo/mobile` · **cấm** `rmms.png` · cùng chrome login |
| title | Quên mật khẩu | Static | * | Text | header title only · **cấm** device label |
| phone | Số điện thoại | Text (tel) | * | `LinmTextField` | Auth DTO `phoneNumber` · e2e `f-phone` |
| submitRequest | Gửi mã | Button primary | * | `LinmPrimaryButton` | POST `auth/forgot-password` · e2e `btn-forgot-send` |
| resetToken | Mã xác thực | Text | * (step 2) | `LinmTextField` | OTP / resetToken từ SMS · e2e `f-otp` |
| newPassword | Mật khẩu mới | SecureText | * (step 2) | `LinmSecureTextField` | min 6 · eye chrome · e2e `f-new-pass` |
| confirmPassword | Xác nhận MK | SecureText | * (step 2) | `LinmSecureTextField` | client validate match · e2e `f-confirm-pass` |
| submitReset | Đặt lại mật khẩu | Button primary | * (step 2) | `LinmPrimaryButton` | POST `auth/reset-password` · e2e `btn-forgot-reset` |
| backLogin | Quay lại đăng nhập | Text link / Back | | Text / nav | pop → `#sc-login` · **không** BFF |
| toast | Thông báo | Toast | | `LinmToast` | message từ Auth · **cấm** `UIAlert` / `AlertDialog` |

## Tech factors

| Factor | Need | Note |
|--------|------|------|
| GPS | no | — |
| Camera | no | — |
| Offline | no queue | Offline → toast **Không có mạng** · **cấm** queue forgot |
| Map | no | — |
| Biometric | no | — |
| Push | no | SMS OTP = Auth platform (ngoài app) |

## Kit map

| Demo / field | Map / kit |
|--------------|-----------|
| phone | `LinmTextField` (đã map text) |
| new/confirm password | `LinmSecureTextField` (login kit) |
| primary CTA | `LinmPrimaryButton` |
| toast | `LinmToast` |
| brand | AppIcon — **không** kit form |

**Cấm** watermark «bản Gói N» / «gen realapp» trên UI ship.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.01 |
| rulesVersion | 2026.08.19.01 |
| generatedAt | 2026-08-19T03:58:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.01 schemaVersion=1 -->
