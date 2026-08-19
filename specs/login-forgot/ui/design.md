# Design — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| title | [Mobile] Quên mật khẩu |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_9607fe43`) |
| changeScope | `new_page` |
| packKind | **`shell`** |
| stack | `native_dual` |
| prior | PO `confirmed` · `po/requirement.md` · data-analy contentHash `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` · bffContentHash `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| kit_missing_confirm | **kit_skip** / **N/A** — reuse map login (`LinmTextField` · `LinmSecureTextField` · `LinmPrimaryButton` · `LinmToast` · `LinmLeaveConfirm`) |
| updatedAt | `2026-08-18T21:40:00.000Z` |
| taskId | `task_9607fe43` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/login-forgot.md` | child `login` · API forgot/reset |
| CTX-02 | `docs/context/features/login.md` | parent shell · **cấm** gộp |
| DEM-01 | `specs/login-forgot/ui/prototype/ios/index.html` `#sc-forgot` | board **`ios/index.html`** · iOS 390×844 · `DES-MOB-FORGOT` |
| DEM-02 | `specs/login-forgot/ui/prototype/android/index.html` `#sc-forgot` | board **`android/index.html`** · Android 412×915 · cùng copy |
| DEM-03 | `specs/login/ui/prototype/{ios,android}/index.html` `#sc-login` `.login-meta a` | entry **Quên mật khẩu?** |
| LOGO | `logo/mobile` → `ui/prototype/assets/app-logo.png` | **cấm** `rmms.png` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | text / password / button / toast / leave |
| DA | `_data-analy/login-forgot-*.md` | controlHint · BFF · action-tree |
| UX | `ui/ux-analy.md` §1–§9 | **REQUIRED** trước confirm |

**Cấm** `mfeStdUrl` / localhost MFE · WebView HTML-as-app · skin Ministry / CCCD · invent tab · «Có mạng».

## 1. Pattern

| | |
|--|--|
| Surface | Full-page auth child · **không** tab 5 · **không** Modal/Sheet **route** (leave = in-app modal chrome) |
| FormMode | anonymous recovery |
| Action this slug | **Quên mật khẩu?** → `#sc-forgot` (Request + Reset steps) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area · keyboard không đè field |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-FORGOT` `#sc-forgot` | Quên mật khẩu | Nav · Brand · step body · toast · leave modal | Gửi mã / Đặt lại |
| `DES-MOB-FORGOT-BRAND` | Brand | Logo AppIcon 96 · title uppercase | — |
| `DES-MOB-FORGOT-REQUEST` | Request OTP | phone · hint | **Gửi mã** `#btn-forgot-send` |
| `DES-MOB-FORGOT-RESET` | Reset MK | otp · new · confirm | **Đặt lại mật khẩu** `#btn-forgot-reset` |

### IA lock

```
Login (#sc-login) → Quên mật khẩu? → #sc-forgot (request)
  → Gửi mã OK → #sc-forgot (reset) cùng màn
  → Đặt lại OK → toast → pop Login
Back (#btn-back) → Login (step 2 dirty → LinmLeaveConfirm)
```

**Cấm** invent tab · signup · biometric · companyCode · ô SĐT trên step Reset · tín hiệu trên forgot · watermark / device label trên product UI.

## 3. Field inventory (Design chốt kit)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| brand | Logo | Image | * | AppIcon / mipmap | `DES-MOB-FORGOT-BRAND` · demo 96 · native scale dest · **alpha** · **cấm** `rmms.png` · **cấm** tile đen/trắng |
| productTitle | QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ | Static | * | Text | 22 · 700 · uppercase · **cấm** «Hiện trường · iPhone» |
| navTitle | Quên mật khẩu | Static | * | Nav title | header title only |
| phoneNumber | Số điện thoại | Text (tel) | * step 1 | `LinmTextField` | e2e `f-phone` · `formFieldHeight` 52 · **ẩn** step 2 |
| submitRequest | Gửi mã | Button primary | * step 1 | `LinmPrimaryButton` | POST `auth/forgot-password` · e2e `btn-forgot-send` · `isBusy` |
| hint | Nhập số điện thoại đã đăng ký… | Static | | Text | copy demo step 1 |
| resetToken | Mã xác thực | Text | * step 2 | `LinmTextField` | e2e `f-otp` · `autocomplete=one-time-code` |
| newPassword | Mật khẩu mới | SecureText | * step 2 | `LinmSecureTextField` | min 6 · eye chrome · e2e `f-new-pass` |
| confirmPassword | Xác nhận mật khẩu | SecureText | * step 2 | `LinmSecureTextField` | client only · e2e `f-confirm-pass` |
| submitReset | Đặt lại mật khẩu | Button primary | * step 2 | `LinmPrimaryButton` | POST `auth/reset-password` · e2e `btn-forgot-reset` · `isBusy` |
| backLogin | Quay lại | Text / Back | | Nav chrome | e2e `btn-back` · **không** BFF |
| leave | Dirty leave | Leave modal | step 2 dirty | `LinmLeaveConfirm` | Hủy = stay · Đồng ý = pop Login · **cấm** `UIAlert` / `AlertDialog` |
| toast | Thông báo | Toast | | `LinmToast` | Auth / client / offline · **cấm** system alert |

Eye hiện/ẩn MK = chrome `LinmSecureTextField` — **không** slug (`GAP-MOB-ACT` chrome skip). Proto `.note` = reviewer only — **cấm** ship (`GAP-DEV-MOB-PLACEHOLDER-01`).

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit glyph) | Android (Material / kit glyph) |
|-------------|---------|----------------------|--------------------------------|
| `#btn-back` chevron / arrow | Quay lại Login | SF `chevron.left` + «Quay lại» | Material `arrow_back` + «Quay lại» |
| `#i-lock` / `#i-lock-confirm` | lead MK | SF `lock` / app slot | Material `Lock` / app slot |
| `#i-eye-new` / `#i-eye-confirm` | hiện/ẩn MK | **`LinmEyeGlyph` / `LinmEyeOffGlyph`** | same kit |
| brand logo | AppIcon | Asset catalog | mipmap |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|-----|------|
| primary / tint | `#0C84C0` | CTA · back · eye · link |
| success | `#3CB448` | toast success (optional) |
| danger | `#F03C30` | toast lỗi |
| surface iOS | `#F2F2F7` | nền forgot iOS |
| surface Android | `#FFFBFE` | nền forgot Android |
| card | `#FFFFFF` | field row |

**Cấm** skin đỏ Ministry / CCCD / «hộ chiếu».

## 6. Behaviors (parity demo)

| Case | UI |
|------|-----|
| Entry from Login | Push/navigate `#sc-forgot` step Request · **cấm** toast-only |
| Empty phone | `LinmToast` **Nhập số điện thoại** · no BFF |
| Send online OK | Toast Auth copy · chuyển step Reset · giữ `phoneNumber` VM |
| Empty OTP/MK | Toast **Nhập mã và mật khẩu mới** · no BFF |
| MK ≠ confirm | Toast **Mật khẩu xác nhận không khớp** |
| MK &lt; 6 | Toast **Mật khẩu tối thiểu 6 ký tự** |
| Reset 200 | Toast **Đặt lại mật khẩu thành công** → pop Login · **không** auto-login |
| Reset 400/422 | Toast Auth · stay |
| Offline | Toast **Không có mạng** · **cấm** queue / local hash |
| Back step 1 | pop Login · không modal |
| Back step 2 dirty | `LinmLeaveConfirm` · Hủy stay · Đồng ý pop |
| Eye | toggle secure · **giữ IME** · không slug |
| Busy POST | `LinmBusyOverlay` / button `isBusy` — **cấm** spinner nút + overlay cùng lúc |
| Signal | **Không** vẽ trên `#sc-forgot` |

## 7. reviewUrl (dual — REQUIRED)

| OS | reviewUrl |
|----|-----------|
| iOS | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login-forgot/ui/prototype/ios/index.html#sc-forgot` |
| Android | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login-forgot/ui/prototype/android/index.html#sc-forgot` |

## 8. Kit gate

| Gate | Decision |
|------|----------|
| `kit_missing_confirm` | **kit_skip** / **N/A** (autoApprove) |
| Controls | reuse login map — **cấm** Dev raw `TextField` / `OutlinedTextField` / `UIAlert` |
| Map cite | `docs/html-to-native-map.md` rows text · password · primary · toast · leave · busy |
| Feature map | `ui/html-to-native-map.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-18T21:40:00.000Z |
| versionGate | rechecked |
| staleNote | Artifact design cũ `2026.08.19.01` · autoApprove `recheck_new` · SSOT workflow `2026.08.19.19` · rules `2026.08.19.22` · agent-design-mobile `2026.08.19.07` |
| contentHash | sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c |
| bffContentHash | sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
