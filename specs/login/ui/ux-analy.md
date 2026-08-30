# UX analy — login

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · peer `specs/mobile-p1/ui/prototype/{ios,android}#sc-login`  
**Brand tokens:** primary `#0C84C0` · header `#086A9A→#0C84C0` · success `#3CB448` · warning `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`

## 1. IA

```
Cold start → #sc-home guest (Khách + Đăng nhập tách)
  → btn-home-login → overlay #sc-login
  → btn-login-back → #sc-home guest
  → toast «Đăng nhập thành công» → #sc-home staff
  → #sc-me Đăng xuất → #sc-home guest
```

- Login = overlay · **không** cổng bắt buộc.
- **Cấm** invent tab · guest **được** về Home.
- Child backlog (không vẽ form `#sc-me`): `login-forgot` (link) · `login-logout` BFF.  
- Demo Home **Đăng xuất** = chrome test login · local clear · **không** POST `auth/logout`.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-LOGIN `#sc-login` | Đăng nhập | Full page · `LinmKeyboardAwareScroll` · no tab | Full page · `LinmKeyboardAwareScroll` · no TopAppBar | **Đăng nhập** |
| DES-MOB-LOGIN-BRAND | Brand | Logo 192 tĩnh top · **cấm** band 1/3 | Same | — |
| DES-MOB-LOGIN-FORM | Form | Dưới title · field 52 | Same | — |
| DES-MOB-HOME-DEMO | Home demo | Kit gallery + `LinmSecondaryButton` đáy | Same | **Đăng xuất** |

## 3. Zone

### DES-MOB-LOGIN / `#sc-login`

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Brand | `app-logo.png` · «Quản lý bảo trì đường bộ» | B `img` · A static text | Logo 192 tĩnh top · **alpha** trên surface · **cấm** tile `#000`/`#fff` · **cấm** band 1/3 | same |
| Body user | placeholder **Tài khoản** · lead person · value mẫu · Enter nếu MK có giá trị → login | B `input type=text` | `LinmTextField` (+ lead · `onSubmit`) | `LinmTextField` (+ lead · `onSubmit` `ImeAction.Go`) |
| Body pass | placeholder **Mật khẩu** · lead lock · eye trail · Enter → login | B `input type=password` + `.trail` eye | **`LinmSecureTextField`** `onSubmit` | **`LinmSecureTextField`** `onSubmit` `ImeAction.Go` |
| CTA | **Đăng nhập** full width | A `.btn-ok` / B `button` primary | `LinmPrimaryButton` | `LinmPrimaryButton` |
| Meta | «Tín hiệu» + hạng · link **Quên mật khẩu?** · **đáy giữa** (`.login-meta` `margin-top: auto`) | A `data-net-signal` · B `a` | `LinmNetSignalMark` overlay `alignment: .bottom` · ẩn khi IME · **cấm** tap cycle · **cấm** «bản Gói 1» | `Box` `Alignment.BottomCenter` · ẩn khi `WindowInsets.ime` |
| Toast | success / lỗi / forgot / đã đăng xuất | A toast / banner | `LinmToast` | `LinmToast` |

### DES-MOB-HOME-DEMO (Placeholder Home · kit gallery)

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Gallery | catalog kit local | A kit gallery | `LinmKitGallery` | `LinmKitGallery` |
| Logout | **Đăng xuất** đáy · e2e `btn-logout` | A `.btn-skip` | `LinmSecondaryButton` · `LogoutUseCase` | same |

**States:** tap → toast **Đã đăng xuất** · clear access+refresh · `isLoggedIn=false` → `#sc-login`. **Cấm** `#sc-me` · **cấm** `AlertDialog`.

**States:**

| State | Hành vi |
|-------|---------|
| default | `#f-user` last id (nếu đã login) · `#f-pass` **rỗng** · **cấm** prefill MK native |
| after submit | password **reset** · username giữ |
| empty | field trống · CTA vẫn bấm (validate Dev) |
| loading | `LinmBusyOverlay` full page · blur nền `busyBlur` 12 · spinner giữa · CTA giữ title — **cấm** spinner trong nút + overlay cùng lúc · **cấm** block system alert |
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
| Đăng xuất · Đã đăng xuất | Logout / Signed out |
| Quên mật khẩu → hệ thống xác thực | invent BFF copy |
| Tốt / Trung bình / Yếu | «Có mạng» / «Không mạng» |
| Quản lý bảo trì đường bộ | Hiện trường · iPhone / · Android (chrome prototype) · bản Gói 1 |

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

4 cột + nhãn **Tốt / Trung bình / Yếu** (`LinmNetSignalMark`). **Cấm** wifi glyph trên mark. Bind OS path (NWPath / NetworkCapabilities).  
`net-signal.js` click-cycle = **designer helper** — **cấm** tap trên native. Tone light trên nền surface. **Cấm** boolean «Có mạng».

## 7. Pictogram

| Demo | Native |
|------|--------|
| `#i-person` · `#i-lock` | App truyền leading icon vào field kit |
| `#i-eye` / `#i-eye-off` | `LinmEyeGlyph` / `LinmEyeOffGlyph` (kit — không SF/M3 lệch) |
| Logo | AppIcon 1024 → assets |

Không lưới loại TS trên màn login.

## 8. Motion

Không `/wf-anim` trên pack này.  
Brand **tĩnh** top: logo **192** **alpha** trên surface + title + user/pass + CTA. **Cấm** tile `#000`/`#fff` · **cấm** band 1/3 · **cấm** animation / 2 layout IME. Footer `.login-meta` **pin đáy giữa** khi IME ẩn (signal + Quên mật khẩu?). IME hiện → ẩn footer. Mắt giữ IME. **cấm** ×3. (`GAP-MOB-EDIT-LOGO-BG` · `GAP-MOB-EDIT-FOOTER-01`)  
IME: `LinmKeyboardAwareScroll` — field focus **pin** trên bàn phím (`imeFocusGap` 12). **Cấm** `ignoresSafeArea(.keyboard)` / che `#f-user` `#f-pass`. (`GAP-MOB-EDIT-IME`)  
IME Enter (`GAP-MOB-EDIT-IME-ENTER`): `#f-user` Enter/`Go` **chỉ login khi `#f-pass` có giá trị** · `#f-pass` Enter/`Go` **luôn login** (cùng CTA / validate). `#f-user` Enter + MK rỗng → **focus `#f-pass`** · **không** toast / **không** POST.  
Success: toast → navigate Home ~350 ms (parity `loginOk`).

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-KIT-PASS | password/eye thiếu map | **closed** — `LinmSecureTextField` + map row |
| GAP-MOB-BFF-01 | quên MK không path | Giữ link + toast · backlog `login-forgot` |
| GAP-MOB-BFF-02 | refresh vs refresh-token | App `auth/refresh-token` (PO) — SA/Dev |
| GAP-MOB-UX-07 | design stub vs HTML | **closed** — design.md khớp `#sc-login` |
| company / biometric | ẩn Gói 1 | **không** vẽ |
| GAP-MOB-EDIT-LOGO-BG | logo nền đen/trắng (AppIcon plate + elevation) | **closed** — punch plate → alpha · Fit · **cấm** tile |
| GAP-MOB-EDIT-DEMO-LOGOUT | sau login không về được `#sc-login` | **closed** — demo Home `btn-logout` local clear · **không** slug `login-logout` |
| GAP-MOB-EDIT-IME | Android IME che `#f-user` / pass / CTA (`ADJUST_NOTHING` không scroll) | **closed** — kit `LinmKeyboardAwareScroll` dual · focus pin trên IME · logo 192 tĩnh |
| GAP-MOB-EDIT-PASS | sau login / logout `#f-pass` còn nhớ | **closed** — submit reset MK · giữ last `#f-user` · **cấm** persist MK |
| GAP-MOB-EDIT-FOOTER-01 | Footer `.login-meta` dính dưới CTA · trống đáy (Android) | **closed** — pin `BottomCenter` / `.bottom` · giữa ngang · ẩn khi IME |
| GAP-MOB-EDIT-IME-ENTER | Enter `#f-user` / `#f-pass` không login | **closed** — kit `onSubmit` dual · user Enter + MK có giá trị → login · user Enter + MK rỗng → focus pass · pass Enter → login |

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
