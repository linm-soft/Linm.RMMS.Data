# Review — Findings — vis-capture (mobile screen · Nhận diện mặt đường)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_f31fa8eb` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-VIS-CAPTURE` · `#sc-vis-capture`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · cleanup_mock recheck post QA `task_4b69db15` |
| prior · qa | `handoff/qa-compact.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `handoff/dev-compact.md` · **confirmed** · cleanup_mock · builds PASS |
| prior · sa | `be/solution-discovery.md` · **confirmed** (compact missing → full) · GAP-MOB-VIS-DETECT-01 closed |
| prior · design | `ui/design.md` · `align-ux.md` · **confirmed** (compact missing → align + prior) |
| prior · po | `po/requirement.md` · **confirmed** (compact missing → full header) |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · AiVision + Incident + Patrol · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_4b69db15` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-01T06:31:32.000Z` |
| taskId | `task_f31fa8eb` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `VisCapture/*` · live session stamp · **cấm** demoLoc · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · Keychain · `GpsDenyModal` · still `FieldReflectCameraPicker` |
| Android | `presentation/feature/viscapture/*` · live stamp · **cấm** DEMO_LOC · EncryptedSharedPreferences · `GpsDenyDialog` · CameraX still |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `VisCaptureController` |
| API | `GET patrol/sessions` · `POST ai-vision/detect` (SourceKind=`detect-signed`) · `POST incident/incidents` · AccuracyM request-only |
| QA store | `qa/store/vis-capture/` A11/A9/A3/P6/P6-2 · manifest `ok:true` · 1320×2868 · 1080×1920 |
| align | `ui/review/align-ux.md` · Must **0** · Aligned · live Loc stamp |
| skillVersion | agent-review-mobile **2026.08.29.1** |
| contentHash | `sha256:vis-capture-control-hint-20260829` · unchanged |
| realDataHash | `sha256:vis-capture-real-data-20260829` · unchanged |
| bffContentHash | `sha256:vis-capture-mobile-bff-20260829` · unchanged |
| actionTreeHash | `sha256:vis-capture-action-tree-20260829` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| IDOR / tenant Incident create | **PASS** |
| Location + Camera plist/Manifest · PrivacyInfo | **PASS** |
| Deny in-app · **cấm** system alert | **PASS** · `GpsDenyModal` / `GpsDenyDialog` |
| Fake lat/lng · demoLoc seed | **PASS** — live CL/Fused · GPS ≤30 · **GAP-MOB-EDIT-DEMO-01 CLOSED** (no demoLoc/DEMO_LOC/itemsOrDemo) |
| Invent `api/v1/vis-capture` / BFF controller | **PASS** |
| Fake HTTP 200 khi POST fail | **PASS** — offline queue · toast |
| Score % / watermark / `mfeStdUrl` | **PASS** — none |
| ImageBase64 on wire P1 | **Accept** — optional uploads P2 |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| Detect body `engine` · `note` · `imageBase64` · `lat` · `lng` · `accuracyM` · `videoRef` | **OK** dual |
| Detection card · **cấm** Score UI | **OK** |
| Attach `CreateIncidentRequest` + `detectionId` · `hasGps` | **OK** |
| Prefill Loc live `GET patrol/sessions` · empty=`patrol.empty.active.route` | **OK** · **cấm** demoLoc |
| GPS gate `MAX_ACCURACY_M` = **30** | **OK** dual |
| Tab invent | **OK** · tab **incident** · GAP-TAB-01 none |

## UI align (vision · prior QA align)

| Zone | Result |
|------|--------|
| A3-CORE / P6(+2) vs demo `#sc-vis-capture` | **PASS** — title · **Ảnh hiện trường** · `#i-camera` · Loc/Acc/Class/Sev · Gắn/Bỏ qua · tab incident |
| Live Loc stamp cleanup_mock | **PASS** — Android `QL.1 · đã chốt` · iOS `QL.1` · no demo Km seed |
| Dual Android section + **Bỏ qua** | **PASS** (GAP-MOB-VIS-DUAL-01) |
| Must align / bugs OPEN Must | **0** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · tenant · deny in-app | **OK** |
| R-02 | API | — | detect Signed + sessions + incident · **cấm ERP.*** | **OK** |
| R-03 | cleanup_mock | — | live session stamp · **cấm** demoLoc/DEMO_LOC · GAP-MOB-EDIT-DEMO-01 | **OK** |
| R-04 | Camera/GPS | — | still PhotoRow · AccuracyM ≤ 30 · no fake SC | **OK** |
| R-05 | DTO | — | Dual = BE Detect / CreateIncident | **OK** |
| R-06 | Align | — | A3+P6 vs demo · Must **0** · Aligned | **OK** |
| R-07 | A11y Maestro | Should | `GAP-MOB-A11Y-VIS-01` NFC·NFD flake | **Defer** non-block |
| R-08 | Frame upload | P2 | ImageBase64 · media uploads optional | **Accept** |
| R-09 | QA | — | e2eQa ON · store live · `ok:true` · task_4b69db15 | **OK** |
| R-10 | Store | P2 | Play Data safety / READY_TO_SUBMIT | **Accept** |
| R-11 | Step 4b | — | DETECT-ENGINE done · MIG n/a · review **skip** re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-VIS-CAP | PASS (cleanup_mock · prior Dev) |
| T-AND-VIS-CAP | PASS (cleanup_mock · prior Dev) |
| T-BE-VIS-DETECT-ENGINE | PASS (SourceKind=`detect-signed`) |
| T-BE-VIS-DETECT-MIG | **n/a** |
| T-BFF-* | **n/a** · catch-all |
| T-QA-VIS-CAP | PASS (`ok:true` · Must 0 · task_4b69db15) |
| T-REVIEW-VIS-CAP | **PASS** · SEC/DTO/ALIGN · Must align = **0** |

## VERIFY GATE (`task_f31fa8eb` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META · review-compact | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Post cleanup_mock recheck: live Loc stamp dual · security + DTO + UI align Must **0** · prior QA `ok:true` · no demoLoc. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | — pipeline complete · **cấm** re-run full chain |
| Should follow-ups | `GAP-MOB-A11Y-VIS-01` · media uploads P2 · Play Data safety submit |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T06:31:32.000Z |
| versionGate | rechecked |
| taskId | `task_f31fa8eb` |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| realDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked contentHash=sha256:vis-capture-control-hint-20260829 -->
