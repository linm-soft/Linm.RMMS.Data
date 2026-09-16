# html-to-native-map — feedback

**Sources:** dual `#sc-feedback` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `feedback` / `nhan-dan/gop-ys` API · ERP.* · `mfeStdUrl`

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-FEEDBACK | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 · **cấm** badge P1/P2 |
| DES-MOB-FEEDBACK | Back | `.nav-btn` + `#i-chevron-left` · text «Tôi» (iOS) | leading | `icon-btn` chevron only | `go('me')` |
| Body label | Section | `.field label` | FieldLabel Text 13 | same | **Nội dung góp ý** |
| Body | Multiline | `textarea` | `LinmTextArea` | same | placeholder SSOT · value ≥16 · required |
| Send | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `integration/feedbacks` · `isBusy` |
| Toast OK/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake ok |
| DES-MOB-LEAVE | Modal | `#leave-modal` | feature overlay | Material dialog card | dirty back |
| Leave stay/go | Buttons | `.cancel` / `.ok` | secondary / primary | same | Ở lại / Rời |
| Shell Tab 5 | Chrome | `.tab-bar` / `.nav-bar` · `data-tab=me` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | Me `#row-feedback` `#i-info` | `LinmListRow` reuse | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `--md-primary` `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.field label` 13 / `textarea` 16 / `.btn` 16 / title 17 | Dynamic Type / M3 scale |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| `.btn` radius 12 (iOS) / 24 (Android) | platform CTA shape OK |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onSend` → toast «Đã gửi góp ý» | UseCase CreateAppFeedback → `LinmToast` · **chỉ** khi 200 |
| `?fail=1` / `?offline=1` → toast lỗi | network/422 → toast err · giữ body |
| empty body → disable / toast validate | **cấm** POST trống |
| busy «Đang gửi…» | `LinmPrimaryButton.isBusy` |
| `onBack` dirty → leave modal | `DES-MOB-LEAVE` · **cấm** system alert |
| `go('me')` | pop `NavigationStack` / `NavController` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Gửi góp ý | `POST integration/feedbacks` · CreateAppFeedbackRequest |
| Hidden session | SenderName · Role · Category=`de-xuat` · Status=`sent` · SubmittedAt · UserId |
| Nav / textarea / toast | local |

**Cấm** invent `api/v1/feedback` · `FeedbackController` trên Mobile.Bff · app `:5101`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T06:06:00.000Z |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| taskId | `task_fc39397c` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
