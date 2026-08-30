# Design — feedback (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| design_confirm | **approve** (`task_fc39397c`) |
| packKind | **`sheet`** (PO chốt · form send · surface **full screen** `#sc-feedback` · **cấm** bottom-sheet chrome) |
| changeScope | `edit_page` |
| stack | `native_dual` |
| taskId | `task_fc39397c` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/feedback-control-hint.md` + `feedback-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:feedback-mobile-control-hint-20260829` |
| realDataHash | `sha256:feedback-mobile-real-data-20260829` |
| priorWeb | **giữ** · `ui/design-web.md` (Kind B list) · **OUT** mobile P1 |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · **cấm** e2e / `yarn start:std` ở Design |
| kit_missing_confirm | **N/A** — kit đã map (`LinmTopBar` · FieldLabel · `LinmTextArea` · `LinmPrimaryButton` · `LinmToast` · `LinmListRow`) |
| updatedAt | `2026-08-29T06:06:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/ios/index.html` |
| iOS offline/fail | same + `?offline=1` / `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/ios/index.html?offline=1` |
| iOS entry hint | same + `?entry=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/ios/index.html?entry=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/android/index.html` |
| Android offline/fail | same + `?offline=1` / `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/android/index.html?offline=1` |
| Android entry hint | same + `?entry=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/android/index.html?entry=1` |
| Workflow (ref) | mobile-p1 `#sc-feedback` | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tôi** | icon-btn chevron only (parity OK) |
| Title | **Góp ý** 17 | TopAppBar **Góp ý** ~20 |
| Shell | Tab 5 · tab **`me`** active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-feedback` — **cấm** bottom-sheet | same |
| Badge | **cấm** P1/P2 trên header | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-FEEDBACK` | Screen owner `#sc-feedback` | push từ Me | same | `data-tab="me"` |
| FieldLabel | **Nội dung góp ý** | Text 13 | same | |
| Body | MultilineText | `LinmTextArea` | same | placeholder SSOT · value ≥16 · required |
| Send | Primary | `LinmPrimaryButton` | same | POST create · `isBusy` |
| Toast OK | **Đã gửi góp ý** | `LinmToast` | same | sau 200 · **cấm** fake |
| Toast Err | lỗi mạng / 422 | `LinmToast` | same | giữ form |
| `DES-MOB-LEAVE` | leave dirty | in-app modal | Material dialog card | optional · **cấm** system alert |
| Entry (reuse) | Me `#row-feedback` `#i-info` | `LinmListRow` | same | **không** reimplement hub trên pack |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-info` | circle r=9 + stem + dot | `info.circle` | `Info` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Góp ý** |
| Back (iOS) | **Tôi** |
| Body label | **Nội dung góp ý** |
| Placeholder | **Mô tả tính năng cần sửa / bổ sung…** |
| Primary | **Gửi góp ý** |
| Busy | **Đang gửi…** |
| Toast OK | **Đã gửi góp ý** |
| Toast empty | **Nhập nội dung góp ý** |
| Toast err | **Không gửi được · kiểm tra mạng** |
| Leave title | **Rời màn?** |
| Leave body | **Nội dung đã gõ sẽ mất nếu chưa gửi.** |
| Leave stay | **Ở lại** |
| Leave go | **Rời** |
| Me row title | **Góp ý** |
| Me row sub | **Phản ánh tính năng phần mềm** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake toast ok khi POST fail · category pills P1 · citizen copy.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · title |
| `.field label` | FieldLabel Text 13 | |
| `textarea` | `LinmTextArea` | MultilineText · placeholder SSOT |
| `.btn-primary` | `LinmPrimaryButton` | Send · `isBusy` |
| toast | `LinmToast` | OK / err / validation |
| `#leave-modal` | in-app leave confirm | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · `me` active |
| Me entry | `LinmListRow` `#i-info` | reuse Me · **cấm** reimplement |

### kit_missing_confirm

**N/A** — tất cả control đã có trong map / kit (`GAP-MOB-ACT-05`). **Cấm** invent tên kit.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Body / Gửi / toast = **cùng slug** (`GAP-MOB-ACT-07`). Category default `de-xuat` **không** UI P1 (**GAP-MOB-FB-CAT-01** → P2 optional pills).

## Hidden bind (không UI P1)

| Field | Source | Create DTO |
|-------|--------|------------|
| senderName | Me / auth display name | `SenderName` |
| role | session map | `Role` |
| category | default `de-xuat` | `Category` |
| status | `sent` on submit | `Status` |
| submittedAt | device UTC | `SubmittedAt` |
| userId | auth subject | `UserId` optional |

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Gửi góp ý | `POST integration/feedbacks` |
| Nav back / textarea / toast | local UI |
| GET list / detail | **OUT** mobile P1 UI |

**Cấm** invent `api/v1/feedback` · `nhan-dan/gop-ys` · `FeedbackController` trên Mobile.Bff · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| Web Kind B list / schema / full-page 7-field | prior `design-web.md` · **OUT** |
| `citizen` cổng dân | sibling |
| Category pills | **P2** · GAP-MOB-FB-CAT-01 |
| Media attach / email notify | **P2** |
| CTX path alias `nhan-dan/gop-ys` | SA · GAP-MOB-FB-CTX-PATH-01 |
| Bottom-sheet chrome | **cấm** (surface = screen) |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | — | **N/A** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`sheet` · surface screen · POST `integration/feedbacks` · hash skip (no re-scan) · GAP-MOB-FB-PACK-01 closed · GAP-MOB-FB-CAT-01 P1 no pills.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:06:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| realDataHash | sha256:feedback-mobile-real-data-20260829 |
| demoHash | sha256:mobile-p1-sc-feedback-20260829 |
| ctxHash | sha256:feedback-ctx-20260829 |
| taskId | `task_fc39397c` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
