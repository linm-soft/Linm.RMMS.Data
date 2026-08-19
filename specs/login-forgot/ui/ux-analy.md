# UX analy — login-forgot

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · entry parent `specs/login/ui/prototype/{ios,android}#sc-login`  
**Brand tokens:** primary `#0C84C0` · success `#3CB448` · danger `#F03C30` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
(auth) Login shell (#sc-login)
  → tap «Quên mật khẩu?»
  → Forgot full-page (#sc-forgot) step request
  → CTA «Gửi mã» OK → step reset (cùng màn · cùng slug)
  → CTA «Đặt lại mật khẩu» 200 → toast → pop Login
Back / leave confirm Đồng ý → Login
```

- Forgot **không** nằm trong TabView / NavigationBar 5.
- **Cấm** invent tab · sheet route · signup · biometric · companyCode.
- Steps OTP + reset = **cùng** slug `login-forgot` (`GAP-MOB-ACT-02` = none).
- Parent `login` submit / signal / logout = **ngoài** pack.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-FORGOT `#sc-forgot` | Quên mật khẩu | Nav inline + back · no tab | Top bar + back · no nav bar | Gửi mã / Đặt lại |
| DES-MOB-FORGOT-BRAND | Brand | Logo 96 + title | Same | — |
| DES-MOB-FORGOT-REQUEST | Request | phone 52 · hint | phone 52 · hint | **Gửi mã** |
| DES-MOB-FORGOT-RESET | Reset | otp · secure×2 + eye | Same | **Đặt lại mật khẩu** |

## 3. Zone

### DES-MOB-FORGOT / `#sc-forgot`

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | «Quên mật khẩu» · **Quay lại** | A top bar / nav | Nav title + back | TopAppBar + back |
| Brand | `app-logo.png` · «Quản lý bảo trì đường bộ» | B `img` · A static text | Logo AppIcon · title uppercase | same |
| Body phone (step 1) | placeholder **Số điện thoại** · tel | B `input type=tel` / text | `LinmTextField` | `LinmTextField` |
| CTA send | **Gửi mã** full width | A `.btn-ok` / B `button` primary | `LinmPrimaryButton` `isBusy` | same |
| Hint | copy demo step 1 | A static | Text secondary | Text |
| Body otp (step 2) | placeholder **Mã xác thực** | B `input type=text` | `LinmTextField` | same |
| Body new pass | **Mật khẩu mới** · lead lock · eye | B `input type=password` + `.trail` | **`LinmSecureTextField`** | **`LinmSecureTextField`** |
| Body confirm | **Xác nhận mật khẩu** · lead · eye | B password + eye | **`LinmSecureTextField`** | same |
| CTA reset | **Đặt lại mật khẩu** | A `.btn-ok` | `LinmPrimaryButton` `isBusy` | same |
| Toast | client / Auth / offline | A toast | `LinmToast` | `LinmToast` |
| Leave | dirty step 2 Back | A leave modal | `LinmLeaveConfirm` | `LinmLeaveConfirm` |
| Busy | POST in-flight | A loading full page | `LinmBusyOverlay` | `LinmBusyOverlay` |

**Không** zone: tín hiệu · «bản Gói N» · device label · ô SĐT step 2 · tab 5.

**States:**

| State | Hành vi |
|-------|---------|
| default | step request · phone trống |
| empty | validate toast · no BFF |
| loading | busy overlay / button `isBusy` khi POST |
| error | `LinmToast` Auth 4xx · stay |
| offline | toast **Không có mạng** · **cấm** queue |
| permission | N/A (không GPS/camera) |
| leave dirty | step 2 đã gõ OTP hoặc MK → `LinmLeaveConfirm` · step 1 pop thẳng |

## 4. Copy SSOT

Nhãn lấy từ HTML — không invent.

| ✅ HTML | ❌ Cấm trên máy |
|---------|-----------------|
| Quản lý bảo trì đường bộ | Hiện trường · iPhone / · Android |
| Quên mật khẩu | Forgot password |
| Số điện thoại · Gửi mã | Phone / Send code EN |
| Mã xác thực · Mật khẩu mới · Xác nhận mật khẩu | OTP / New password EN |
| Đặt lại mật khẩu · Quay lại | Reset / Back EN only |
| Nhập số điện thoại | invent empty copy khác |
| Nhập mã và mật khẩu mới | — |
| Mật khẩu xác nhận không khớp | — |
| Mật khẩu tối thiểu 6 ký tự | — |
| Đặt lại mật khẩu thành công | Reset OK |
| Không có mạng | Offline / No network loanword |
| Nếu số điện thoại tồn tại… (Auth) | invent BFF copy |
| — | «Có mạng» · bản Gói N · gen realapp · `.note` process |

## 5. Brand

| Token | Hex |
|-------|-----|
| Primary | `#0C84C0` |
| Success | `#3CB448` |
| Danger | `#F03C30` |
| Surface iOS | `#F2F2F7` |
| Surface Android | `#FFFBFE` |

**Cấm** skin đỏ CCCD / Ministry wordmark / `rmms.png` thay AppIcon.

## 6. Signal

**N/A trên `#sc-forgot`.** Tín hiệu thuộc parent `#sc-login` — **cấm** invent «Có mạng» / tap-cycle trên màn này.

## 7. Pictogram

| Demo | Native |
|------|--------|
| Back chevron / arrow_back | SF `chevron.left` · Material `arrow_back` |
| `#i-lock` · `#i-lock-confirm` | App truyền leading lock vào secure kit |
| `#i-eye-*` | `LinmEyeGlyph` / `LinmEyeOffGlyph` (kit — không SF/M3 lệch) |
| Logo | AppIcon 1024 → assets / mipmap |

Không lưới loại TS trên màn forgot.

## 8. Motion

Không `/wf-anim` trên pack này.  
Toast ~2s. Busy khi POST. Success → pop Login ~350–400 ms sau toast.  
Brand **tĩnh**. Eye **giữ IME**. **Cấm** brand animation / watermark motion.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-BFF-01 | Auth package thiếu forgot/reset | **Đóng pack này** — BFF thin proxy (SA/Dev) · UI path `auth/forgot-password` / `auth/reset-password` |
| GAP-MOB-ACT-01/02 | gộp login / 2 slug steps | **Không** — 1 hyperlink = 1 slug · steps cùng `#sc-forgot` |
| GAP-MOB-ACT-05 | kit text/password/button/toast | **reuse map** · `kit_missing_confirm` N/A |
| GAP-MOB-UX-07 | design stub vs HTML | **closed** — design.md khớp dual `#sc-forgot` + leave + eye |
| GAP-DEV-MOB-PLACEHOLDER-01 | `.note` process | **skip ship** — chỉ reviewer HTML |
| GAP-PO-STORE-01 | Apple signup/deletion | **N/A** — không signup trên màn này |
| Signal / tab / company / biometric | không trên demo | **không** vẽ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-18T21:40:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
