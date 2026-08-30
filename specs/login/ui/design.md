# Design — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_47ebc1c0`) |
| changeScope | `new_page` |
| packKind | **`shell`** |
| stack | `native_dual` |
| prior | PO `confirmed` · `po/requirement.md` · data-analy hash `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| autoApprove | **ON** |
| kit_missing_confirm | **implement_kit** · `LinmSecureTextField` dual + map + gallery |
| updatedAt | `2026-08-18T18:30:00.000Z` |
| taskId | `task_47ebc1c0` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/login.md` | §2 UI · §3 API |
| CTX-02 | `docs/plan/login-contract-lifecycle/SPEC.md` §7.1 | login shell |
| CTX-03 | `specs/mobile-p1/mobile/context.md` § login | ẩn company/biometric |
| DEM-01 | `specs/login/ui/prototype/ios/index.html` `#sc-login` | board **`ios/index.html`** · iOS 390×844 · `DES-MOB-LOGIN` |
| DEM-02 | `specs/login/ui/prototype/android/index.html` `#sc-login` | board **`android/index.html`** · Android 412×915 · cùng copy |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` | peer SSOT pack |
| DEM-03 | `specs/mobile-p1/ui/prototype/net-signal.js` | Tốt / Trung bình / Yếu |
| LOGO | `logo/mobile` → `assets/app-logo.png` | **cấm** `rmms.png` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | password row added |
| DA | `_data-analy/login-*.md` | controlHint · BFF · tree |

**Cấm** `mfeStdUrl` / localhost MFE · WebView HTML-as-app · skin Ministry / CCCD.

## 1. Pattern

| | |
|--|--|
| Surface | Full page auth · **không** tab 5 · **không** Modal/Sheet |
| FormMode | session login |
| Action this slug | **Đăng nhập** only (`loginOk`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area · **`LinmKeyboardAwareScroll`** — focus field pin trên IME (`imeFocusGap` 12) · logo **192 tĩnh** · **cấm** compact IME |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-LOGIN` `#sc-login` | Đăng nhập | Brand · Form · Actions · Meta | **Đăng nhập** |
| `DES-MOB-LOGIN-BRAND` | Brand | Logo AppIcon 96 · tagline | — |
| `DES-MOB-LOGIN-FORM` | Form | Tài khoản · Mật khẩu+eye | — |
| `DES-MOB-HOME-HELLO` | Home guest | `.who` **Khách** + `btn-home-login` | **Đăng nhập** tách · e2e `btn-home-login` |
| `DES-MOB-LOGIN-BACK` | Back overlay | `btn-login-back` **Về Trang Chủ** | pin **trên** scroll · tap 44 · dismiss · **không** submit |

### IA lock

```
Cold start → #sc-home guest (Khách + btn-home-login)
btn-home-login / Dành cho cán bộ → overlay #sc-login
btn-login-back → #sc-home guest
success toast → #sc-home staff (ẩn nút login)
#sc-me Đăng xuất → #sc-home guest (không ép #sc-login)
```

**Cấm** invent tab · **cấm** cổng login bắt buộc lúc launch · toolbar Hồ sơ / Đổi MK trên login.  
Logout production = `#sc-me` · **không** POST `auth/logout` P1 · **không** kit gallery `btn-logout` trên Home.

## 3. Field inventory (Design chốt kit)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| brand | Logo | Image | * | AppIcon / mipmap | **Tĩnh** top · logo **192** · **alpha** trên surface · **cấm** tile `#000`/`#fff` · **cấm** clip+shadow card · gap title **24** · **cấm** band 1/3 · **cấm** animation / compact IME · **cấm** ×3 |
| tagline | QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ | Static | | Text | `/agent-design` DES-GRID-A: **22px · 700 · uppercase · onSurface** · title only · **cấm** «Hiện trường · iPhone» / «· Android» |
| userName | Tài khoản | Text | * | `LinmTextField` + lead | username hoặc SĐT · **cùng** `formFieldHeight` 52 · **giữ** last id sau login · IME Enter/`Go` · **nếu `#f-pass` có giá trị → login** · **cấm** mã đơn vị |
| password | Mật khẩu | SecureText | * | **`LinmSecureTextField`** | eye + lead lock · IME Enter/`Go` → **login** · **reset rỗng** khi submit login · **cấm** persist · **cấm** raw SecureField |
| submit | Đăng nhập | Button primary | * | `LinmPrimaryButton` | 1 action = `login` |
| forgot | Quên mật khẩu? | Text link | | chrome Text | child `login-forgot` · toast only P1 |
| signal | Tín hiệu | SignalQuality | | `LinmNetSignalMark` | Tốt / TB / Yếu |
| buildMeta | bản Gói 1 | Static | | Text | `.login-meta` |
| companyCode | — | **Ẩn** | | — | JWT `company_id` |
| biometric | — | **Ẩn** | | — | **cấm** invent |

Toast success/error → `LinmToast`. **Cấm** `UIAlert` / `AlertDialog` / `window.alert`.

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit glyph) | Android (Material / kit glyph) |
|-------------|---------|----------------------|--------------------------------|
| `#i-person` | lead Tài khoản | SF `person` / app slot | Material `Person` / app slot |
| `#i-lock` | lead Mật khẩu | SF `lock` / app slot | Material `Lock` / app slot |
| `#i-eye` / `#i-eye-off` | hiện/ẩn MK | **`LinmEyeGlyph` / `LinmEyeOffGlyph`** | same kit |
| cột sóng | tín hiệu | `LinmNetSignalMark` | same |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|-----|------|
| primary / tint | `#0C84C0` | CTA · eye · link quên MK |
| headerStart → headerEnd | `#086A9A` → `#0C84C0` | (Home — ngoài pack) |
| success | `#3CB448` | toast success |
| warning | `#FCB43C` | tín hiệu TB |
| danger | `#F03C30` | toast lỗi · tín hiệu Yếu |
| surface | `#F2F2F7` | nền login |
| card | `#FFFFFF` | field row |

**Cấm** skin đỏ Ministry / CCCD / «hộ chiếu».

## 6. Behaviors (parity demo)

| Case | UI |
|------|-----|
| Submit online OK | `LinmToast` **Đăng nhập thành công** → Home ~350 ms · `#f-pass` **reset** · giữ `#f-user` |
| Về `#sc-login` (logout / lỗi) | Tài khoản = last id · Mật khẩu **rỗng** · **cấm** nhớ MK |
| Demo Home **Đăng xuất** | `LinmToast` **Đã đăng xuất** · clear token · về `#sc-login` · **cấm** BFF logout |
| Sai MK / Inactive / HĐ | `LinmToast` in-app |
| Offline | **không** submit · toast/banner |
| Forgot tap | toast **Quên mật khẩu → hệ thống xác thực** · **không** BFF |
| Eye | toggle `isSecureTextEntry` / VisualTransformation · **giữ IME** · **cấm** swap SecureField↔TextField · không slug |
| Signal | Display `LinmNetSignalMark` · bind OS path · **cấm** tap cycle |
| Brand motion | **Tĩnh** top stack · logo **192** · **alpha** trên surface · **cấm** tile đen/trắng · **cấm** band 1/3 · **cấm** animation / compact IME · mắt giữ IME |
| IME focus | Focus `#f-user` / `#f-pass` **pin** ngay trên bàn phím · kit `LinmKeyboardAwareScroll` · **cấm** che input · footer meta **pin đáy giữa** khi IME ẩn · IME hiện thì ẩn footer |
| IME Enter | `#f-user` Enter/`Go`: **nếu `#f-pass` có giá trị → cùng `loginOk`** · `#f-pass` Enter/`Go` → **luôn login** · `#f-user` Enter khi MK rỗng → **focus `#f-pass`** · **không** toast / **không** POST |

## 7. reviewUrl (dual — REQUIRED)

| OS | reviewUrl |
|----|-----------|
| iOS | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/ios/index.html#sc-login` |
| Android | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/android/index.html#sc-login` |

Peer SSOT: `specs/mobile-p1/ui/prototype/{ios,android}/index.html#sc-login`.

## 8. Kit gate

| Gate | Decision |
|------|----------|
| `kit_missing_confirm` | **implement_kit** (autoApprove) |
| Control | `LinmSecureTextField` + `LinmEyeGlyph` / `LinmEyeOffGlyph` |
| Map | `docs/html-to-native-map.md` hàng `input type=password` |
| Gallery | section **2. Form** — iOS + Android cùng thứ tự |
| Pack | `/install-mobile-kit-local` trước VERIFY GATE |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.03 |
| rulesVersion | 2026.08.19.04 |
| generatedAt | 2026-08-18T18:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.03 rulesVersion=2026.08.19.04 versionGate=rechecked -->
