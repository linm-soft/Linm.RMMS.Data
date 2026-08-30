# Review — Findings — feedback (mobile · Góp ý)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_de25913a` · autoApprove=ON) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (surface full screen `#sc-feedback` · GAP-MOB-FB-PACK-01 closed) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e ở role này |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_bee5e97e` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · `task_f834eb68` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · `task_69588f17` |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| priorWeb | **giữ** · `review/findings-web.md` (Kind B list · `/agent-review` · `task_7996cabb`) · **OUT** mobile P1 |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Integration · `api/v1/integration/feedbacks` · **cấm ERP.*** |
| domain | **Integration** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA done · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-29T00:22:10.000Z` |
| taskId | `task_de25913a` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `Presentation/Features/Feedback/*` · `CreateAppFeedbackUseCase` · `IntegrationRepository.createAppFeedback` · Keychain · leave modal · LinmToast |
| Android | `presentation/feature/feedback/*` · `CreateAppFeedbackUseCase` · `ApiService` POST · EncryptedSharedPreferences · leave modal |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `FeedbackController` |
| API | `POST integration/feedbacks` · `CreateAppFeedbackRequest` · `rmms_app_feedbacks` · schema Signed |
| QA store | `qa/store/feedback/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:feedback-mobile-control-hint-20260829` · unchanged |
| realDataHash | `sha256:feedback-mobile-real-data-20260829` · unchanged |
| bffContentHash | `sha256:feedback-mobile-bff-20260829` · unchanged |
| reviewHash | `sha256:feedback-mobile-review-20260829` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` (+ timezone) | **PASS** (`ApiClient` / `AuthInterceptor`) |
| IDOR `{id}` | **N/A P1** — mobile chỉ POST Create · không GET by id UI |
| Location Info.plist / Manifest | **N/A** — không GPS trên `#sc-feedback` |
| Camera plist / Manifest | **N/A P1** — media attach = P2 |
| Deny / leave in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** — `FeedbackLeaveModal` dual · toast only |
| Invent `api/v1/feedback` / `nhan-dan/gop-ys` / BFF FeedbackController | **PASS** — path `integration/feedbacks` only |
| Fake HTTP 200 khi POST fail | **PASS** — toast err · **cấm** toast ok on fail |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |
| FE create gate `hasAccessToken` · BE `[RequirePermission]` | **Accept** — stub OK · BE attr debt P1 (CommonLib) |
| Tenant CompanyCode | **PASS** — server `ICompanyContext` · client header |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| `senderName` · `role` · `submittedAt` · `category` · `body` · `status` · `userId?` | **OK** dual = `CreateAppFeedbackRequest` |
| Defaults `role=tuan-duong` · `category=de-xuat` · `status=sent` · UTC `submittedAt` | **OK** dual use case |
| Response `id` · `code` | **OK** · toast ok copy SSOT · code show P2 optional |
| Parent JSON | **none** — flat scalars |
| Tab invent / GAP-TAB-01 | **OK** · pack `tabs: none` · shell Tab 5 · **me** active |
| Typo GAP-TYP-01 label 13 · value/btn 16 · title 17/~20 | **OK** dual |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#sc-feedback` | **PASS** — title **Góp ý** · back **Tôi**+chevron · label · body filled ≥16 · CTA **Gửi góp ý** · tab me · no pills |
| P6-CORE / P6-CORE-2 (1080×1920) vs demo | **PASS** — same zones · Android icon-only back (GAP-MOB-ALIGN-01 OK) · kit `…` overflow Observe |
| Category pills | **PASS** none P1 |
| Watermark / device label | **PASS** none |
| IME chrome (iOS keyboard / Android Gboard float) | OS · **không** Must (align-ux) |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |
| GAP-MOB-E2E-VIS-01 | **none** — CORE PNG **Read** done this review |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 RGB | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (app-level · Body = user content) |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Signup / delete account | **N/A** — form feature |
| READY_TO_SUBMIT | **không** (Review) |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · no plaintext JWT | **OK** |
| R-02 | API | — | POST `integration/feedbacks` live · catch-all BFF · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | Perm | P1 | BE `[RequirePermission("integration.feedbacks.create")]` TODO CommonLib | **Accept** (debt · FE gate stub OK) |
| R-04 | DTO | — | Dual Create body = BE `CreateAppFeedbackRequest` · flat scalars | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · vision Read | **OK** |
| R-06 | Scope | P2 | Email/notify · media attach · category pills UI · Code toast | **Accept** (OUT P1) |
| R-07 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-08 | Store | P2 | PrivacyInfo / Data safety user-content claim | **Accept** |
| R-09 | Step 4b | — | n/a · schema Signed · Create live · review **skip** re-run | **OK** |
| R-10 | Web | — | Kind B list findings → `findings-web.md` **giữ** · không gộp mobile | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 | PASS |
| T-BE-01 | n/a verify (Create live) |
| T-BE-02 | n/a (schema Signed) |
| T-BFF-01 | n/a verify (catch-all) |
| T-PERM-01 | PASS (FE stub) · BE attr debt P1 |
| T-IOS-ME-01 · T-IOS-FB-01 | PASS (prior Dev) |
| T-AND-ME-01 · T-AND-FB-01 | PASS (prior Dev) |
| T-QA-TAB-01 · T-QA-FB-01 | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_de25913a` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Mobile sheet→screen `#sc-feedback` dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · POST `integration/feedbacks` live · no invent path · P1 debt RequirePermission / media P2 non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | BE RequirePermission · media attach P2 · PrivacyInfo submit · email/notify P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:22:10.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| taskId | `task_de25913a` |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| realDataHash | sha256:feedback-mobile-real-data-20260829 |
| bffContentHash | sha256:feedback-mobile-bff-20260829 |
| reviewHash | sha256:feedback-mobile-review-20260829 |
| priorQaTaskId | `task_bee5e97e` |
| priorDevTaskId | `task_f834eb68` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked reviewHash=sha256:feedback-mobile-review-20260829 -->
