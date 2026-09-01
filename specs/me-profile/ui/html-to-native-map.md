# html-to-native-map — me-profile

**Sources:** dual `#sc-me-profile` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `me-profile` / `users/me` API · ERP.* · `mfeStdUrl`

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-ME-PROFILE | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 · **cấm** badge P1/P2 |
| DES-MOB-ME-PROFILE | Back | `.nav-btn` + `#i-chevron-left` · text «Tôi» (iOS) | leading | `icon-btn` chevron only | `go('me')` |
| Avatar | Display | `.avatar` + `#i-person` | circle Image 44 | same 40 | **không** upload |
| fullName | Text | `input#f-fullName` + label | `LinmTextField` | same | label 13 / ≥16 · required · PUT `FullName` |
| phoneNumber | Tel | `input#f-phone` type=tel | `LinmTextField` | same | PUT `PhoneNumber` |
| email | Email | `input#f-email` type=email | `LinmTextField` | same | PUT `Email` · GET optional |
| userName | Readonly | `#f-userName` `.readonly` | Text | same | GET only |
| citizenId | Readonly opt | `#f-citizenId` `.readonly` | Text if GET | same | **cấm** PUT |
| Save | CTA | `.btn-primary` | `LinmPrimaryButton` | same | PUT `auth/profile` · `isBusy` |
| sectionPwd | Section | `.section-label` | `LinmSectionLabel` | same | **13** |
| currentPassword | Secure | `input#f-curPwd` password | `LinmSecureField` | same | POST `CurrentPassword` |
| newPassword | Secure | `input#f-newPwd` password | `LinmSecureField` | same | POST `NewPassword` |
| confirmPassword | Secure | `input#f-confirmPwd` password | `LinmSecureField` | same | local only |
| Change pwd | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | POST `auth/change-password` |
| Toast OK/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake ok |
| DES-MOB-LEAVE | Modal | `#leave-modal` | feature overlay | Material dialog card | dirty back |
| Leave stay/go | Buttons | `.cancel` / `.ok` | secondary / primary | same | Ở lại / Rời |
| Shell Tab 5 | Chrome | `.tab-bar` / `.nav-bar` · `data-tab=me` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | Me `row-profile` `#i-person` | `LinmListRow` reuse | reuse · no chevron Android | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `--md-primary` `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.field label` / `.section-label` 13 / input 16 / `.btn` 16 / title 17 | Dynamic Type / M3 scale |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| `.btn` radius 12 (iOS) / 24 (Android) | platform CTA shape OK |
| `.btn-secondary` outline | bordered / OutlinedButton |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| Appear mock GET bind | UseCase GetProfile → bind fields · fail → lastName + toast |
| `onSave` → toast «Đã cập nhật hồ sơ» | UseCase UpdateProfile → `LinmToast` · **chỉ** khi 200 |
| `onChangePwd` → toast «Đã đổi mật khẩu» | UseCase ChangePassword → toast · clear secure |
| confirm ≠ new → toast mismatch | local validate · **cấm** POST |
| empty fullName → disable / toast | **cấm** PUT trống tên |
| `?fail=1` / `?offline=1` → toast lỗi | network/422 → toast err · giữ form |
| busy «Đang lưu…» / «Đang đổi…» | `isBusy` on primary/secondary |
| `onBack` dirty → leave modal | `DES-MOB-LEAVE` · **cấm** system alert |
| `go('me')` | pop `NavigationStack` / `NavController` |
| `?nocitizen=1` ẩn CCCD | if GET thiếu citizenId → hide row |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Load | `GET auth/profile` · `MobileAuthUser` |
| Lưu | `PUT auth/profile` · `MobileAuthProfileUpdateRequest` |
| Đổi MK | `POST auth/change-password` · 2 field |
| Confirm / nav / toast | local |

**Cấm** invent `api/v1/me-profile` · `MeProfileController` trên Mobile.Bff · app `:5101`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-31T02:15:00.000Z |
| contentHash | sha256:me-profile-control-hint-20260830 |
| designContentHash | sha256:me-profile-design-20260831 |
| taskId | `task_0e0676c6` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
