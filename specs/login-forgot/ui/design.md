# Design — login-forgot (mobile)

> **LIVE LOCK 2026-09-16** `/edit-mobile-feature` — **cấm** vẽ lại SĐT / OTP / MK. Body = 1 dòng `LinmCopy.t("forgot.contactAdmin")` = «Liên hệ admin để được cung cấp». Entry Login **Quên mật khẩu?** vẫn push `#sc-forgot`. API forgot/reset **giữ** trong VM/BFF, **không** gọi từ UI.

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
| `DES-MOB-FORGOT` `#sc-forgot` | Quên mật khẩu | Nav · Brand · contact line | Back |
| `DES-MOB-FORGOT-BRAND` | Brand | Logo AppIcon 96 · title uppercase | — |
| `DES-MOB-FORGOT-CONTACT` | Contact admin | Static copy · **không** input | — |

### IA lock

```
Login (#sc-login) → Quên mật khẩu? → #sc-forgot (contact line only)
Back (#btn-back) → Login (không leave modal)
```

**Cấm** invent tab · signup · biometric · companyCode · ô SĐT / OTP / MK · tín hiệu trên forgot · watermark / device label trên product UI. **Cấm** Gửi mã / Đặt lại trên live UI (SMS OTP chưa ship).

## 3. Field inventory (Design chốt kit)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| brand | Logo | Image | * | AppIcon / mipmap | `DES-MOB-FORGOT-BRAND` · demo 96 · native scale dest · **alpha** · **cấm** `rmms.png` · **cấm** tile đen/trắng |
| productTitle | QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ | Static | * | Text | 22 · 700 · uppercase · **cấm** «Hiện trường · iPhone» |
| navTitle | Quên mật khẩu | Static | * | Nav title | header title only |
| contactAdmin | Liên hệ admin để được cung cấp | Static | * | Text muted | e2e `forgot-contact` · **LIVE LOCK** · **cấm** SĐT/OTP/MK |
| backLogin | Quay lại | Text / Back | | Nav chrome | e2e `btn-back` · **không** BFF |

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
| Entry from Login | Push/navigate `#sc-forgot` · contact line · **cấm** toast-only · **cấm** input OTP |
| Back | pop Login · không modal (không dirty form) |
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
