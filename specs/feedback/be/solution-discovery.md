# SA — Solution — feedback (mobile · Góp ý)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_69588f17`) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design chốt · form send · surface **full screen** `#sc-feedback` · **cấm** bottom-sheet chrome · GAP-MOB-FB-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-FEEDBACK` · **cấm** web Kind B list/schema · Slideout · invent tab |
| thisAction | **Góp ý** only · entry reuse `me` `#row-feedback` · **cấm** gộp web Kind B · `citizen` · media attach (`GAP-MOB-ACT-01/02`) |
| domain | **Integration** · `AppFeedbacksController` · **cấm** invent `api/v1/feedback` / `nhan-dan/gop-ys` trên app · **cấm** ERP.* |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` **approve** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` **approve** |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` **approve** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_fc39397c` |
| prior · po | **confirmed** · `po/requirement.md` · `task_fddeb2c5` |
| prior · data_analy | **confirmed** · `_data-analy/feedback-control-hint.md` · `feedback-bff-endpoints.md` · `feedback-action-tree.md` · `feedback-real-data.md` · contentHash `sha256:feedback-mobile-control-hint-20260829` · realDataHash `sha256:feedback-mobile-real-data-20260829` · bffContentHash `sha256:feedback-mobile-bff-20260829` · actionTreeHash `sha256:feedback-mobile-action-tree-20260829` |
| priorWeb | **giữ** · `be/solution-discovery-web.md` (Kind B list/full-page · `/agent-sa` · `task_064242e5`) · **OUT** mobile P1 UI |
| autoApprove | **ON** |
| e2eQa | ON — queued QA (sau Dev) · **cấm** `yarn e2e*` / `yarn start:std` / `mfeStdUrl` ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new`) |
| taskId | `task_69588f17` |
| confirmedBy | agent autoApprove · `task_69588f17` |
| updatedAt | `2026-08-28T23:12:00.000Z` |

**Cấm:** invent `api/v1/feedback` · invent `api/v1/nhan-dan/gop-ys` trên app · invent `FeedbackController` trên Mobile.Bff · fork DTO · assume bảng mới · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake toast «Đã gửi góp ý» khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip` · `GAP-DES-DEMO-RESCAN-01`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| Domain | Integration · `AppFeedbacksController` · `AppFeedbackService` |
| API downstream | `POST api/v1/integration/feedbacks` **live** · Create `CreateAppFeedbackRequest` → `AppFeedbackDto` |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/AppFeedbackDtos.cs` |
| Persistence | `AppFeedbackEntity` · table `rmms_app_feedbacks` · migration **đã có** (`Schema_RmmsAppFeedbacks`) |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · **không** dedicated Feedback controller |
| Web BFF (cite only) | `web-bff/api/v1/integration/feedbacks` · **OUT** mobile app path |
| App | iOS SwiftUI + Android Compose · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Entry | Me `#row-feedback` `#i-info` → push `#sc-feedback` (thay toast-only stub) |
| GPS | **n/a** — không trên `#sc-feedback` |
| Camera / media | **n/a P1** — attach = P2 |
| Offline | POST fail → toast lỗi · **cấm** fake 200 · draft offline **DEFER** (demo không «Lưu nháp») |
| Push | **n/a** |
| Sibling | entry `me` · **cấm** re-own hub · **cấm** `citizen` |
| Out of pack | web Kind B list A–D · schema `app-feedbacks` · full-page 7-field · GET list/detail UI · Delete/Copy/View · email/notify · media · category pills UI · `citizen` |

### Route decision

| | Choice |
|--|--------|
| Slug | `feedback` → **sheet→screen** · owner `DES-MOB-FEEDBACK` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 write | `POST integration/feedbacks` |
| Downstream | `POST api/v1/integration/feedbacks` · `AppFeedbacksController.Create` |
| GET list / detail | **OUT** mobile P1 UI (live có — chỉ web Kind B) |
| CTX alias | `api/v1/nhan-dan/gop-ys` = **stale** · app **chỉ** cite `integration/feedbacks` · **GAP-MOB-FB-CTX-PATH-01 CLOSED** (SA cite live · T-CTX align docs) |
| Dedicated Mobile.Bff controller | **không** · catch-all đủ |
| Step 4b / migration | **n/a** — schema Signed · **cấm** SA chạy `/database-migration` |
| Rationale | Reuse live Integration Create · session bind hidden fields · body textarea only UI · **cấm** invent path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `FeedbackController` local trên BFF |
| BE HTTP | `AppFeedbacksController` · Route `api/v1/integration/feedbacks` | live verified this SA |
| Response | `ApiResponse<AppFeedbackDto>` | `Id` · `Code` (`FB-YYYYMMDD-NNNN`) · scalars |
| Request | `CreateAppFeedbackRequest` | flat scalars — **cấm** parent JSON · **cấm** fork app-only DTO |
| Web solution | `be/solution-discovery-web.md` | Kind B CRUD **giữ** · mobile **không** ship list/schema |
| HTTP app | new `CreateAppFeedbackUseCase` / repository via `ApiClient` | **cấm** raw HTTP trong View/VM |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` |
| Kit | `LinmTopBar` · FieldLabel · `LinmTextArea` · `LinmPrimaryButton` · `LinmToast` · Me `LinmListRow` | `kit_missing_confirm` **N/A** |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`me`** active | **cấm** invent (`GAP-TAB-01`) |
| Store | user content `Body` · no GPS/camera claim mới cho pack này | **cấm** `localhost` / LAN IP · family `1` **cấm** iPad listing claim |

---

## BFF / API contract (live audit 2026-08-28 · `task_69588f17`)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Gửi góp ý | `POST integration/feedbacks` | proxy catch-all | `AppFeedbacksController.Create` | **PASS** |
| Nav back / textarea / toast | — | — | local UI | **N/A** API |
| GET list / detail | `integration/feedbacks` · `…/{id}` | proxy | live CRUD | **OUT** mobile P1 UI |
| Invent `feedback` / `nhan-dan/gop-ys` | — | — | — | **cấm invent** |
| Dedicated BFF FeedbackController | — | — | — | **không** · **cấm invent** |

### Create request — `CreateAppFeedbackRequest` (khớp real-data §B)

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `SenderName` | yes | Me / auth profile display name (`fullName` trim · fallback lastUserName) |
| `Role` | yes | session role map → `tuan-duong` \| `quan-ly` \| `tuan-kiem` (static FE · **không** UI select P1) |
| `SubmittedAt` | yes (BE default UTC nếu `default`) | device `DateTime.UtcNow` / ISO UTC |
| `Category` | yes | default **`de-xuat`** · **không** pill UI P1 · **GAP-MOB-FB-CAT-01** |
| `Body` | yes | textarea «Nội dung góp ý» · trim · empty → validation toast · **cấm** POST trống |
| `Status` | yes | `sent` on submit |
| `UserId` | optional | auth subject |

### Response — `AppFeedbackDto`

`Id` · `Code` (`FB-YYYYMMDD-NNNN` server NextCode) · `SenderName` · `Role` · `SubmittedAt` · `Category` · `Body` · `Status` · `UserId` · …

Toast OK = copy «Đã gửi góp ý» (demo SSOT) · `Code` show **P2 optional** (demo không).

BE validate: `ValidateRequired` trên SenderName/Role/Category/Body/Status → 422 · soft-delete `IsActive` · CompanyCode từ `ICompanyContext` (server) · **cấm** client gửi parent JSON.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `integration.feedbacks.create` | POST create | FE gate · BE `[RequirePermission]` **TODO** CommonLib (debt P1 · stub OK) |
| `integration.feedbacks.read\|update\|delete` | list/CRUD | **OUT** mobile P1 UI |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | `SubmittedAt` store UTC · display local nếu show P2 | không form date edit P1 |
| XCO | **xco_na** (mobile Create) | XCO chỉ GET by id (web) · **không** XCO trên POST | reuse web SA |
| SHARE | **share_tenant** / **share_na** mobile | tenant `CompanyCode` server · **không** bảng mới · **cấm** invent `rmms_feedback_mobile_*` | reuse `rmms_app_feedbacks` |
| Offline | **toast err · no draft P1** | POST fail → toast «Không gửi được · kiểm tra mạng» · giữ form · **cấm** fake 200 · draft **DEFER** | offline-sync |
| GPS | **n/a** | — | |
| Camera | **n/a** | media P2 | |
| Push | **n/a** | — | |
| Store | **user-generated content** | PrivacyInfo / Play · claim user feedback text nếu store listing đụng · **cấm** localhost/LAN · family `1` **cấm** iPad | `GAP-SA-STORE-01` |
| Step 4b | **n/a** | schema Signed · CTX alias doc only | **cấm** SA chạy migration |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `ios_repo_confirm` approve · `android_repo_confirm` approve · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` (reuse) · `kit_missing_confirm=N/A` · `solution_confirm=approve` · `2026-08-28T23:12:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** — flat scalars on `AppFeedbackEntity` |
| Child tables this pack (BE) | **reuse** `rmms_app_feedbacks` — **không** invent bảng |
| Client store | screen state (body dirty) · session profile for hidden bind · **không** offline draft queue P1 |
| Migration | **n/a** this pack |
| T-BE-API | **n/a** — Create live PASS · **không** endpoint mới |
| T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-28 / `task_69588f17`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/integration/feedbacks` | BE + Mobile.Bff proxy live | **Giữ** · Create bind §B |
| `GET …/integration/feedbacks` | live | **OUT** mobile UI |
| `api/v1/nhan-dan/gop-ys` | **không** live controller | **Cấm** app bind · CTX alias → T-CTX |
| `api/v1/feedback` / FeedbackController BFF | **không** | **Cấm invent** |
| Screen `#sc-feedback` | Me toast stub only (iOS `MeViewModel.feedback`) | **Ship** dual Design kit · push từ Me |
| Category pills | web form Select | default `de-xuat` · **không** UI P1 |
| Tab 5 shell | dưới Me | **Giữ** · `tabs: none` pack · tab `me` active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-feedback` | body textarea + primary send | session + POST create | `AppFeedbackEntity` |
| Leave dirty (optional) | modal | local UI | — |
| Me entry | list row | local nav | — |

### Field map (ui → dto → store) — khớp real-data §B + controlHint

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tôi | — | local | `go('me')` · Android icon-only OK |
| title | Góp ý | — | local | `LinmTopBar` 17 · **cấm** badge P1/P2 |
| bodyLabel | Nội dung góp ý | — | local | FieldLabel **13** |
| body | (textarea) | `Body` | POST | `LinmTextArea` · placeholder SSOT · value ≥16 · required |
| btnSend | Gửi góp ý | CreateAppFeedbackRequest | POST | `LinmPrimaryButton` · `isBusy` · cùng slug |
| toastOk | Đã gửi góp ý | — | after 200 | `LinmToast` · **cấm** fake |
| toastEmpty | Nhập nội dung góp ý | — | local validate | trước POST |
| toastErr | Không gửi được · kiểm tra mạng | — | fail / 422 / mạng | giữ form |
| leave* | Rời màn? … | — | local optional | in-app modal · **cấm** system alert |
| meRowTitle | Góp ý | — | local nav | reuse Me · `#i-info` |
| meRowSub | Phản ánh tính năng phần mềm | — | local | ≠ citizen |
| (hidden) senderName | — | `SenderName` | session | required |
| (hidden) role | — | `Role` | session map | static enum |
| (hidden) category | — | `Category` | default `de-xuat` | **GAP-MOB-FB-CAT-01** |
| (hidden) status | — | `Status` | `sent` | on submit |
| (hidden) submittedAt | — | `SubmittedAt` | device UTC | |
| (hidden) userId | — | `UserId` | auth optional | |
| code | — | response `Code` | server | P2 optional show |

**Demo fallback SSOT** (không fake POST 200): Title/Label/Placeholder/CTA/Toast = DA §F · Me row copy giữ.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Me **Góp ý** `#row-feedback` `#i-info` | push `#sc-feedback` (thay toast) | **owner** `feedback` (entry reuse `me`) |
| Body textarea | local input · dirty | owner · **cấm** enqueue |
| Gửi góp ý | validate → POST · busy · toast | owner · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Toast ok / err | feedback UI | owner |
| Back «Tôi» / chevron | `go('me')` · leave-confirm nếu dirty | chrome |
| Tab 5 | shell giữ · `me` active | **cấm** invent |
| web list / citizen / media | **không** ship | siblings / P2 |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Gửi/body/toast.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-FB-NAV-01 | **CLOSED** · Me push `#sc-feedback` |
| GAP-MOB-FB-SCR-01 | **CLOSED** · ship screen dual |
| GAP-MOB-FB-BODY-01 | **CLOSED** · textarea bind SSOT |
| GAP-MOB-FB-SEND-01 | **CLOSED** · POST create + toast |
| GAP-MOB-FB-DATA-01 | **CLOSED** · BFF `integration/feedbacks` |
| GAP-MOB-FB-PACK-01 | **CLOSED** · packKind `sheet` · surface screen |
| GAP-MOB-FB-CAT-01 | **CLOSED (P1)** · default `de-xuat` · không pill · P2 optional |
| GAP-MOB-FB-CTX-PATH-01 | **CLOSED** · app cite live `integration/feedbacks` · CTX `nhan-dan/gop-ys` alias stale → **T-CTX-01** align docs · **cấm** app bind alias |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp · kit mapped · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-DES-DEMO-RESCAN-01 | **CLOSED** · SA **cấm** re-scan |
| GAP-SA-STORE-01 | **cấm** localhost/LAN trong solution · family `1` **cấm** iPad claim |

---

## Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | pending — align `docs/context/features/feedback.md` path → live `api/v1/integration/feedbacks` (alias stale) |
| T-BE-01 | api | **verified PASS** Create live — **no-op** unless regression |
| T-BE-02 | migration | **n/a** |
| T-BFF-01 | mobile-bff | **verified PASS** catch-all proxy — **no-op** · **cấm** dedicated FeedbackController |
| T-PERM-01 | ui | pending — FE gate `integration.feedbacks.create` · BE attribute debt OK P1 |
| T-IOS-FB-01 | ios | pending — screen `#sc-feedback` · kit map · Me push · Create use case |
| T-AND-FB-01 | android | pending — cùng §B · parity copy |
| T-IOS-ME-01 | ios | pending — `MeViewModel.feedback` toast → navigate push |
| T-AND-ME-01 | android | pending — cùng entry |
| T-KIT-01 | kit | **reuse** TopBar/TextArea/Primary/Toast/ListRow — **cấm** invent |
| T-QA-* | qa | pending — Maestro slug `feedback` only · **cấm** web e2e |

---

## Confirm

`solution_confirm` = **approve** — `autoApprove=ON` · agent tự confirm · `task_69588f17`.

Roles sau = **pending** đến lượt. Chain **`/agent-tl-mobile`** (không start trong task SA này · GAP-PKT-ROLE-01).

**This SA role: no FE/BE/native source write · no Step 4b · no e2e · no yarn build/start:std.**

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ios_repo_confirm` / `android_repo_confirm` = approve (STATUS ticks).

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature | `feedback` |
| lane | `mobile` |
| from | `sa` · PASS · `task_69588f17` |
| phase | `team-lead` |
| Next | `/agent-tl-mobile` · `task/feedback.md` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (surface screen) |
| solution | `be/solution-discovery.md` **confirmed** |
| priorWeb | `be/solution-discovery-web.md` **giữ** |
| BFF P1 | `POST integration/feedbacks` |
| autoApprove | ON |
| e2eQa | ON — queued QA (sau Dev) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:12:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.25.01 |
| orchestratorWorkflowVersion | 2026.08.25.01 |
| orchestratorSchemaVersion | qldb-mobile-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| designSkillVersion | 2026.08.25.01 |
| contentHashPriorDataAnaly | sha256:feedback-mobile-control-hint-20260829 |
| priorRealDataHash | sha256:feedback-mobile-real-data-20260829 |
| priorBffHash | sha256:feedback-mobile-bff-20260829 |
| priorPoHash | sha256:feedback-mobile-po-requirement-20260829 |
| priorDesignHash | sha256:feedback-mobile-design-20260829 |
| contentHash | sha256:feedback-mobile-sa-solution-20260829 |
| taskId | `task_69588f17` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
