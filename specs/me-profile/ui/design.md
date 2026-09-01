# Design — me-profile (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| design_confirm | **approve** (`task_0e0676c6`) |
| packKind | **`sheet`** (PO chốt · form hồ sơ + đổi MK · surface **full screen** `#sc-me-profile` · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| stack | `native_dual` |
| taskId | `task_0e0676c6` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/me-profile-control-hint.md` + `me-profile-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:me-profile-control-hint-20260830` |
| realDataHash | `sha256:me-profile-real-data-20260830` |
| designContentHash | `sha256:me-profile-design-20260831` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · **cấm** e2e / `yarn start:std` ở Design |
| kit_missing_confirm | **N/A** — kit đã map (`LinmTopBar` · `LinmTextField` · `LinmSecureField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmSectionLabel` · `LinmToast` · `LinmListRow`) |
| updatedAt | `2026-08-31T02:15:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/ios/index.html` |
| iOS offline/fail | same + `?offline=1` / `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/ios/index.html?offline=1` |
| iOS entry hint | same + `?entry=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/ios/index.html?entry=1` |
| iOS no citizen | same + `?nocitizen=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/ios/index.html?nocitizen=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/android/index.html` |
| Android offline/fail | same + `?offline=1` / `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/android/index.html?offline=1` |
| Android entry hint | same + `?entry=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/android/index.html?entry=1` |
| Entry SSOT (cite) | mobile-p1 `#sc-me` row-profile | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tôi** | icon-btn chevron only (parity OK) |
| Title | **Hồ sơ** 17 | TopAppBar **Hồ sơ** ~20 |
| Shell | Tab 5 · tab **`me`** active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-me-profile` — **cấm** bottom-sheet | same |
| Badge | **cấm** P1/P2 trên header | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-ME-PROFILE` | Screen owner `#sc-me-profile` | push từ Me | same | `data-tab="me"` |
| Avatar | circle `#i-person` | 44 | 40 | **không** upload P1 |
| fullName | Họ và tên | `LinmTextField` | same | required · GET/PUT `FullName` · label 13 / ≥16 |
| phoneNumber | Số điện thoại | `LinmTextField` phone | same | GET/PUT `PhoneNumber` |
| email | Email | `LinmTextField` | same | PUT `Email` · GET thiếu → empty |
| userName | Tên đăng nhập | Text display | same | readonly · GET `UserName` |
| citizenId | CCCD/CMND | Text display | same | **chỉ nếu** GET có · **cấm** PUT |
| Save | Primary **Lưu** | `LinmPrimaryButton` | same | PUT · busy · toast |
| sectionPwd | **Đổi mật khẩu** | `LinmSectionLabel` 13 | same | |
| currentPassword | Mật khẩu hiện tại | `LinmSecureField` | same | |
| newPassword | Mật khẩu mới | `LinmSecureField` | same | |
| confirmPassword | Xác nhận mật khẩu mới | `LinmSecureField` | same | local match · **không** wire |
| Change pwd | Secondary **Đổi mật khẩu** | `LinmSecondaryButton` | same | POST change-password |
| Toast OK save | **Đã cập nhật hồ sơ** | `LinmToast` | same | sau PUT 200 · **cấm** fake |
| Toast OK pwd | **Đã đổi mật khẩu** | `LinmToast` | same | sau POST 200 |
| Toast Err | lỗi mạng / 422 | `LinmToast` | same | giữ form |
| `DES-MOB-LEAVE` | leave dirty | in-app modal | Material dialog card | optional · **cấm** system alert |
| Entry (reuse) | Me `#row-profile` `#i-person` | `LinmListRow` | same · **không** chevron Android | **không** reimplement hub |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT) | SF Symbol | Material |
|--------|--------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-person` | circle r=3.5 + shoulders | `person` | `Person` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Hồ sơ** |
| Back (iOS) | **Tôi** |
| fullName | **Họ và tên** |
| phoneNumber | **Số điện thoại** |
| email | **Email** |
| userName | **Tên đăng nhập** |
| citizenId | **CCCD/CMND** |
| Primary | **Lưu** |
| Busy save | **Đang lưu…** |
| Toast save OK | **Đã cập nhật hồ sơ** |
| Toast save empty | **Nhập họ và tên** |
| Section pwd | **Đổi mật khẩu** |
| currentPassword | **Mật khẩu hiện tại** |
| newPassword | **Mật khẩu mới** |
| confirmPassword | **Xác nhận mật khẩu mới** |
| Secondary | **Đổi mật khẩu** |
| Busy pwd | **Đang đổi…** |
| Toast pwd OK | **Đã đổi mật khẩu** |
| Toast pwd mismatch | **Mật khẩu xác nhận không khớp** |
| Toast pwd empty | **Nhập đủ mật khẩu hiện tại và mật khẩu mới** |
| Toast err | **Không lưu được · kiểm tra mạng** / **Không đổi được mật khẩu · kiểm tra mạng** |
| Leave title | **Rời màn?** |
| Leave body | **Thay đổi chưa lưu sẽ mất.** |
| Leave stay | **Ở lại** |
| Leave go | **Rời** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake toast ok khi PUT/POST fail · invent org subtitle · avatar upload.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · title |
| Avatar circle | `#i-person` display | 44/40 · **không** upload |
| `.field input` | `LinmTextField` | label 13 / value ≥16 |
| `.field input[type=password]` | `LinmSecureField` | |
| `.readonly` | Text display | userName · citizenId |
| `.section-label` | `LinmSectionLabel` | **13** |
| `.btn-primary` | `LinmPrimaryButton` | Lưu · `isBusy` |
| `.btn-secondary` | `LinmSecondaryButton` | Đổi mật khẩu · `isBusy` |
| toast | `LinmToast` | OK / err / validation |
| `#leave-modal` | in-app leave confirm | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · `me` active |
| Me entry | `LinmListRow` `#i-person` | reuse Me · **cấm** reimplement |

### kit_missing_confirm

**N/A** — tất cả control đã có trong map / kit (`GAP-MOB-ACT-05`). **Cấm** invent tên kit.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Lưu / Đổi MK / confirm local = **cùng slug** (`GAP-MOB-ACT-07`).

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Load form | `GET auth/profile` |
| Lưu hồ sơ | `PUT auth/profile` · `MobileAuthProfileUpdateRequest` |
| Đổi mật khẩu | `POST auth/change-password` · `{ CurrentPassword, NewPassword }` |
| Nav back / toast / confirm | local UI |
| Logout / settings / admin users | **OUT** |

**Cấm** invent `api/v1/me-profile` · `users/me` RMMS · `MeProfileController` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `me-settings` / `login-logout` | sibling |
| Avatar upload | **P2** |
| Invent org/role API | **cấm** · GAP-MOB-MEPROF-ORG-01 |
| CCCD / DOB PUT | **cấm** · display-only nếu GET |
| Bottom-sheet chrome | **cấm** (surface = screen) |
| Web admin `users` | **OUT** |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | — | **N/A** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`sheet` · surface screen · GET/PUT `auth/profile` · POST `auth/change-password` · hash skip (no re-scan) · GAP-MOB-MEPROF-DEMO-01 closed.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-31T02:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-control-hint-20260830 |
| realDataHash | sha256:me-profile-real-data-20260830 |
| designContentHash | sha256:me-profile-design-20260831 |
| poContentHash | sha256:me-profile-po-requirement-20260831 |
| demoHash | sha256:me-profile-sc-me-profile-20260831 |
| ctxHash | sha256:me-profile-ctx-20260830 |
| taskId | `task_0e0676c6` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
