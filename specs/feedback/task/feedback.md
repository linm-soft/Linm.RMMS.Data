# TL — Tasks — feedback (Góp ý · mobile sheet→screen)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design + SA chốt · form send · surface **full screen** `#sc-feedback` · **cấm** bottom-sheet chrome · GAP-MOB-FB-PACK-01 **closed**) · ≠ web `list` |
| stack | `native_dual` |
| thisAction | **Góp ý** `DES-MOB-FEEDBACK` only · entry reuse Me `#row-feedback` `#i-info` · **cấm** gộp web Kind B list/schema · `citizen` · media attach (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · Me `#row-feedback` → push `#sc-feedback` · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** · tab **`me`** active |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `FeedbackController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Integration** · `AppFeedbacksController` · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_69588f17` · solution_confirm=approve |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_fc39397c` |
| prior · po | **confirmed** · `po/requirement.md` · `task_fddeb2c5` |
| prior · data_analy | **confirmed** · `_data-analy/feedback-control-hint.md` · `feedback-bff-endpoints.md` · `feedback-real-data.md` · `feedback-action-tree.md` · contentHash `sha256:feedback-mobile-control-hint-20260829` · realDataHash `sha256:feedback-mobile-real-data-20260829` · bffContentHash `sha256:feedback-mobile-bff-20260829` · actionTreeHash `sha256:feedback-mobile-action-tree-20260829` |
| priorWeb | **giữ** · `task/feedback-web.md` (+ `po/requirement-web.md` · `ui/design-web.md` · `be/solution-discovery-web.md`) · Kind B list/full-page — **OUT** mobile P1 UI |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_dc436294` |
| updatedAt | `2026-08-28T23:20:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/feedback` / `api/v1/nhan-dan/gop-ys` trên app · invent `FeedbackController` trên Mobile.Bff · fake toast «Đã gửi góp ý» khi POST fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Gửi/body/toast (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL · rewrite web Kind B artifacts.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Integration · **cấm ERP.*** |
| `route_confirm` | **route_a** — screen owner `feedback` · entry reuse Me `#row-feedback` · không tab mới · không deep link P1 |
| `kit_missing_confirm` | **N/A** — TopBar / FieldLabel / TextArea / Primary / Toast / ListRow **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a verify** — Create live PASS · migration **n/a** · **không** chạy Step 4b / migration ở turn TL |
| `T-BFF-*` | **n/a verify** — Mobile.Bff catch-all đủ path · **cấm** dedicated FeedbackController |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`me`** (Tôi) → `#sc-me` → row **Góp ý** `#row-feedback` `#i-info` → **push** `#sc-feedback` `DES-MOB-FEEDBACK` (thay toast stub). Back → `go('me')` (iOS label **Tôi** + chevron · Android icon-only OK). Body / Gửi / toast = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `kit_missing_confirm=N/A` · `2026-08-28T23:20:00.000Z`.

---

## Live gap (TL audit 2026-08-28)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-feedback` | **DELTA** — Me `.feedback` → **toast only** (`MeViewModel`) · **chưa** feature screen | **T-IOS-FB-01** + **T-IOS-ME-01** |
| Android `#sc-feedback` | **DELTA** — `MeIntent.Feedback` → toast hub · **chưa** feature screen | **T-AND-FB-01** + **T-AND-ME-01** |
| `POST integration/feedbacks` | BE `AppFeedbacksController.Create` + Mobile.Bff proxy **live** | **reuse** · `CreateAppFeedbackUseCase` · **T-BE-01 n/a** |
| GET list / detail | live CRUD | **OUT** mobile P1 UI |
| `api/v1/nhan-dan/gop-ys` | **không** live controller · CTX alias stale | **T-CTX-01** align docs · **cấm** app bind |
| Dedicated BFF FeedbackController | **không** | **cấm invent** · **T-BFF-01 n/a** |
| Kit TopBar/TextArea/Primary/Toast/ListRow | dual map | **reuse** · **T-KIT n/a** |
| Category pills UI | web only | default `de-xuat` · **không** UI P1 · **GAP-MOB-FB-CAT-01** |
| Tab 5 shell | dưới Me | **giữ** · pack `tabs: none` · tab `me` active |
| Prior web Kind B | `task/feedback-web.md` **giữ** | **OUT** mobile P1 |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-CTX-01` | docs | SA GAP-MOB-FB-CTX-PATH-01 | Dev docs stamp | Align `docs/context/features/feedback.md` path → live `api/v1/integration/feedbacks` · alias stale `nhan-dan/gop-ys` · note mobile sheet≠web Kind B |
| `T-BE-01` | BE | — | — | **N/A verify** · Create live PASS · **no-op** unless regression · **cấm** invent path · **cấm** TL chạy |
| `T-BE-02` | BE | — | — | **N/A** · `Schema_RmmsAppFeedbacks` Signed · **cấm** migration TL |
| `T-BFF-01` | mobile-bff | — | — | **N/A verify** · catch-all proxy · **cấm** `FeedbackController` |
| `T-PERM-01` | ui | T-CTX-01 | FE gate | Gate `integration.feedbacks.create` · BE `[RequirePermission]` debt stub OK P1 |
| `T-IOS-ME-01` | iOS | route_a · kit N/A | `/agent-dev-ios` | `MeViewModel.feedback` toast → **navigate push** `#sc-feedback` · **cấm** reimplement hub |
| `T-IOS-FB-01` | iOS | SA · Design · T-IOS-ME-01 · T-PERM-01 | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-FEEDBACK` · TextArea · Primary · Toast · Create use case · leave optional |
| `T-AND-ME-01` | Android | route_a · kit N/A | `/agent-dev-android` | `MeIntent.Feedback` toast → **navigate push** · parity |
| `T-AND-FB-01` | Android | SA · Design · T-AND-ME-01 · T-PERM-01 · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · same BFF bind |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse map |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab `me` active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-FB-01` | QA | T-IOS-FB-01 · T-AND-FB-01 | `/agent-qa-mobile` | Maestro slug `feedback` only · `yarn e2e-qa-mobile` · store PNG `qa/store/feedback` · **chỉ** `/agent-qa*` · **cấm** web e2e / Kind B list |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ME-01` + `T-IOS-FB-01` cùng turn) → `/agent-dev-android` (`T-AND-ME-01` + `T-AND-FB-01`) · T-CTX/T-PERM cùng Dev · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** gộp `citizen`.

---

## Source map (cite live paths)

### T-CTX-01

| | |
|--|--|
| path | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/feedback.md` |
| DoD | §3 API cite live `api/v1/integration/feedbacks` · mark `nhan-dan/gop-ys` = **stale alias** · mobile P1 = sheet→screen Me→`#sc-feedback` · web Kind B **giữ** riêng · **cấm** invent CUC2 · **cấm** app bind alias |

### T-IOS-ME-01 + T-IOS-FB-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/Feedback/*` — screen `DES-MOB-FEEDBACK` · TopBar · FieldLabel · TextArea · Primary · Toast · leave modal optional · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/Me/MeViewModel.swift` — `.feedback` **thay toast** → push owner · `MeView.swift` `#row-feedback` **giữ** · **cấm** reimplement hub |
| Router | `App/AppRouter.swift` · me tab `.navigationDestination` push Feedback (peer `showFieldReflectFromField`) |
| Use case (NEW) | `Domain/UseCases/CreateAppFeedbackUseCase.swift` · via repository · **cấm** URLSession trong View/VM |
| Repo | extend `IntegrationRepository` / `IntegrationRepositoryImpl` · `client.post("integration/feedbacks", body:)` · **cấm** invent path |
| DTO | `CreateAppFeedbackRequest` flat scalars · response `AppFeedbackDto` · **cấm** parent JSON · **cấm** fork app-only shape |
| Session bind | `FetchProfileUseCase` / auth session → `SenderName` · role map `tuan-duong`\|`quan-ly`\|`tuan-kiem` · `UserId` optional |
| Hidden defaults | `Category=de-xuat` · `Status=sent` · `SubmittedAt=UTC now` · **GAP-MOB-FB-CAT-01** |
| Copy | `Presentation/Shared/LinmCopy.swift` · keys `me.row.feedback*` + feedback.* SSOT Design |
| Deny / leave | in-app modal · **cấm** `UIAlertController` |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-FEEDBACK` · `#sc-feedback` · optional `DES-MOB-LEAVE` |
| kit | `LinmTopBar` · FieldLabel · `LinmTextArea` · `LinmPrimaryButton` · `LinmToast` · Me `LinmListRow` `#i-info` · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `POST integration/feedbacks` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `feedback` / `nhan-dan/gop-ys` · **cấm** fake 200 |

### T-AND-ME-01 + T-AND-FB-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/feedback/*` — Compose screen parity |
| Entry wire | `presentation/feature/me/MeViewModel.kt` · `MeIntent.Feedback` thay toast → navigate · `MeScreen.kt` `#row-feedback` **giữ** |
| Use case / repo | same dual · `CreateAppFeedbackUseCase` · Integration repository POST |
| Copy | `presentation/copy/LinmCopy.kt` · parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| Deny / leave | Material dialog card in-app · **cấm** raw system AlertDialog product |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same `POST integration/feedbacks` |

### T-BE-01 / T-BE-02 / T-BFF-01

| | |
|--|--|
| Status | **N/A verify** — Create + proxy live (SA audit) · schema Signed · **no-op** unless regression |
| repo BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `AppFeedbacksController` |
| repo BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all |
| TL turn | **pack only** · **cấm** Step 4b / migration / BE Write |
| HARD | **cấm** invent `FeedbackController` · **cấm** ERP.* · **cấm** `api/v1/rmms/*` |

### T-PERM-01

| | |
|--|--|
| FE | Gate create trước POST · hide/disable nếu thiếu `integration.feedbacks.create` (pattern peer features) |
| BE | `[RequirePermission]` **TODO** CommonLib — debt P1 · **không** block Dev done |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Góp ý** full (`DES-MOB-FEEDBACK`): nav back → `me` · title **Góp ý** · label **Nội dung góp ý** · textarea · primary **Gửi góp ý** · toast · **cấm** bottom-sheet chrome · **cấm** badge P1/P2 header.
2. Textarea required · placeholder **Mô tả tính năng cần sửa / bổ sung…** · empty → validation toast **Nhập nội dung góp ý** · **cấm** POST body trống.
3. Primary → `POST integration/feedbacks` · `isBusy` · toast **Đã gửi góp ý** khi 200 · fail/422/mạng → **Không gửi được · kiểm tra mạng** · giữ form · **cấm** fake ok · **cấm** system alert.
4. Hidden bind: `SenderName` Me/auth · `Role` session map · `Category=de-xuat` · `Status=sent` · `SubmittedAt` UTC · `UserId` optional · **GAP-MOB-FB-CAT-01**.
5. Entry: Me `#row-feedback` **push** (thay toast) · back **Tôi**/chevron → `me` · **cấm** reimplement hub.
6. Kit reuse map · typography label 13 · value ≥16 · **cấm** invent kit · **cấm** watermark Gói / device label.
7. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
8. Tab 5 shell giữ · pack `tabs: none` · tab `me` active (`T-QA-TAB-01` · `GAP-TAB-01`).
9. Leave dirty optional: in-app modal copy SSOT · **cấm** `UIAlert`/`AlertDialog`.
10. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết `:5101`.
11. **Cấm** ship web Kind B list/schema · `citizen` · media attach · category pills P1 trên pack này.
12. CTX: app cite live `integration/feedbacks` only · **T-CTX-01** docs alias.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tôi** · Android icon-only |
| bodyLabel | FieldLabel | **13** · **Nội dung góp ý** |
| body | `LinmTextArea` | placeholder SSOT · value ≥16 · required |
| btnSend | `LinmPrimaryButton` | **Gửi góp ý** · `isBusy` |
| toastOk / toastEmpty / toastErr | `LinmToast` | SSOT copy · **cấm** alert |
| leave* | in-app modal | optional · **cấm** system |
| meRow | `LinmListRow` `#i-info` | reuse Me · title/sub SSOT |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | `dotnet build` Mobile.Bff | PASS (verify / no-op OK) |
| BE | `dotnet build` WebService | only nếu regression fix · else no-op |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` web ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Gửi góp ý | `POST integration/feedbacks` | `CreateAppFeedbackRequest` → `AppFeedbackDto` |
| Nav / body / toast / leave | — | local UI |
| GET list / detail | — | **OUT** mobile P1 UI |

**Cấm** invent `api/v1/feedback` · `api/v1/nhan-dan/gop-ys` trên app.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Web Kind B list A–D / schema / full-page 7-field | prior web · `task/feedback-web.md` **giữ** |
| Cổng người dân | sibling `citizen` · **cấm** gộp |
| Category pills UI | P2 optional · **GAP-MOB-FB-CAT-01** |
| Media attach / email notify | P2 |
| Dedicated Mobile.Bff FeedbackController | **cấm** |
| New kit chrome package | **cấm** `T-KIT-*` |
| Step 4b / migration / e2e | **không** ở TL · QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-ME-01` + `T-IOS-FB-01` + T-CTX + T-PERM) rồi `/agent-dev-android` (`T-AND-ME-01` + `T-AND-FB-01`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/{ios,android}/index.html` · offline `?offline=1` · fail `?fail=1` · entry `?entry=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `feedback` · store PNG `qa/store/feedback` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** — schema Signed · Create live · **cấm** TL chạy |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/feedback.md | **PASS** · T-IOS-ME-01 · T-IOS-FB-01 · T-AND-ME-01 · T-AND-FB-01 · T-CTX-01 · T-PERM-01 · T-BE/BFF **n/a** · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Prior web task | **PASS** · giữ `task/feedback-web.md` |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-28T23:20:00.000Z` |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.25.01 |
| orchestratorWorkflowVersion | 2026.08.25.01 |
| orchestratorSchemaVersion | qldb-mobile-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| designSkillVersion | 2026.08.25.01 |
| saSkillVersion | 2026.08.20.03 |
| contentHashPriorDataAnaly | sha256:feedback-mobile-control-hint-20260829 |
| priorRealDataHash | sha256:feedback-mobile-real-data-20260829 |
| priorBffHash | sha256:feedback-mobile-bff-20260829 |
| priorActionTreeHash | sha256:feedback-mobile-action-tree-20260829 |
| priorPoHash | sha256:feedback-mobile-po-requirement-20260829 |
| priorDesignHash | sha256:feedback-mobile-design-20260829 |
| priorSaHash | sha256:feedback-mobile-sa-solution-20260829 |
| contentHash | sha256:feedback-mobile-tl-task-20260829 |
| taskId | `task_dc436294` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
