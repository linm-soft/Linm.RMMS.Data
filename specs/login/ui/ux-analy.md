# UX analy — login

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · peer `specs/mobile-p1/ui/prototype/{ios,android}#sc-login`  
**Brand tokens:** primary `#0C84C0` · header `#086A9A→#0C84C0` · success `#3CB448` · warning `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`

## 1. IA

```
(auth) Login shell (#sc-login)
  → toast «Đăng nhập thành công»
  → Home (tab IA · ngoài pack login)
```

- Login **không** nằm trong TabView / NavigationBar 5.
- **Cấm** invent tab · **cấm** swipe-back ra Home khi chưa phiên.
- Child backlog (không vẽ form): `login-forgot` (link) · `login-logout` (`#sc-me`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-LOGIN `#sc-login` | Đăng nhập | Full page · no nav · no tab | Full page · no TopAppBar · no nav bar | **Đăng nhập** |
| DES-MOB-LOGIN-BRAND | Brand | Logo 96 + tagline | Same | — |
| DES-MOB-LOGIN-FORM | Form | field rows card | Same | — |

## 3. Zone

### DES-MOB-LOGIN / `#sc-login`

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Brand | `app-logo.png` · «Quản lý bảo trì đường bộ» · «Hiện trường · iPhone/Android» | B `img` · A static text | `Image` AppIcon + `Text` | `Image` + `Text` |
| Body user | placeholder **Tài khoản** · lead person · value mẫu | B `input type=text` | `LinmTextField` (+ lead slot) | `LinmTextField` (+ lead) |
| Body pass | placeholder **Mật khẩu** · lead lock · eye trail | B `input type=password` + `.trail` eye | **`LinmSecureTextField`** | **`LinmSecureTextField`** |
| CTA | **Đăng nhập** full width | A `.btn-ok` / B `button` primary | `LinmPrimaryButton` | `LinmPrimaryButton` |
| Meta | «Tín hiệu» + hạng · link **Quên mật khẩu?** · «bản Gói 1» | A `data-net-signal` · B `a` | `LinmNetSignalMark` + `Text`/`Button` | same |
| Toast | success / lỗi / forgot | A toast / banner | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | form sẵn · demo prefill |
| empty | field trống · CTA vẫn bấm (validate Dev) |
| loading | disable CTA · Progress in-kit / overlay — **cấm** block system alert |
| error | `LinmToast` sai MK / Inactive / HĐ |
| offline | **không** submit · toast/banner · **cấm** queue login |
| permission | N/A (không GPS/camera) |
| leave dirty | N/A (SPEC §7.1) |

## 4. Copy SSOT

Nhãn lấy từ HTML — không invent.

| ✅ HTML | ❌ Cấm trên máy |
|---------|-----------------|
| Quản lý bảo trì đường bộ | SLA · GPS · Offline (loanword) |
| Tài khoản · Mật khẩu · Đăng nhập | Username / Password EN |
| Quên mật khẩu? | Forgot password |
| Đăng nhập thành công | Login OK |
| Quên mật khẩu → hệ thống xác thực | invent BFF copy |
| Tốt / Trung bình / Yếu | «Có mạng» / «Không mạng» |
| bản Gói 1 | build number fake |
| Hiện trường · iPhone / Android | Hiện trường · iOS generic lệch demo |

## 5. Brand

| Token | Hex |
|-------|-----|
| Primary | `#0C84C0` |
| Deep / header | `#086A9A` → `#0C84C0` |
| Success | `#3CB448` |
| Warn | `#FCB43C` |
| Danger | `#F03C30` |

**Cấm** skin đỏ CCCD / Ministry wordmark / `rmms.png` thay AppIcon.

## 6. Signal

Wifi glyph + 4 cột + nhãn **Tốt / Trung bình / Yếu** (`net-signal.js` · `LinmNetSignalMark`).  
Tone light trên nền surface login. **Cấm** boolean online.

## 7. Pictogram

| Demo | Native |
|------|--------|
| `#i-person` · `#i-lock` | App truyền leading icon vào field kit |
| `#i-eye` / `#i-eye-off` | `LinmEyeGlyph` / `LinmEyeOffGlyph` (kit — không SF/M3 lệch) |
| Logo | AppIcon 1024 → assets |

Không lưới loại TS trên màn login.

## 8. Motion

Không `/wf-anim` trên pack này.  
Success: toast → navigate Home ~350 ms (parity `loginOk`).

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-KIT-PASS | password/eye thiếu map | **closed** — `LinmSecureTextField` + map row |
| GAP-MOB-BFF-01 | quên MK không path | Giữ link + toast · backlog `login-forgot` |
| GAP-MOB-BFF-02 | refresh vs refresh-token | App `auth/refresh-token` (PO) — SA/Dev |
| GAP-MOB-UX-07 | design stub vs HTML | **closed** — design.md khớp `#sc-login` |
| company / biometric | ẩn Gói 1 | **không** vẽ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.03 |
| rulesVersion | 2026.08.19.04 |
| generatedAt | 2026-08-18T18:30:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.03 rulesVersion=2026.08.19.04 versionGate=rechecked -->
