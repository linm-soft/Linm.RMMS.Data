# Review — Findings — vis-capture (mobile screen · Nhận diện mặt đường)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_3be26d66` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-VIS-CAPTURE` · `#sc-vis-capture`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · T-BE Signed detect · MIG n/a |
| prior · sa | `be/solution-discovery.md` · **confirmed** · GAP-MOB-VIS-DETECT-01 closed on Dev |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · AiVision + Incident + Patrol · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_752e74c9` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-29T10:31:54.000Z` |
| taskId | `task_3be26d66` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `VisCapture/*` · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · Keychain · `GpsDenyModal` · still `FieldReflectCameraPicker` |
| Android | `presentation/feature/viscapture/*` · same use cases · EncryptedSharedPreferences · `GpsDenyDialog` · CameraX still Dialog |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `VisCaptureController` |
| API | `GET patrol/sessions` · `POST ai-vision/detect` (SourceKind=`detect-signed`) · `POST incident/incidents` · AccuracyM request-only |
| QA store | `qa/store/vis-capture/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` Should only |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:vis-capture-control-hint-20260829` · unchanged |
| realDataHash | `sha256:vis-capture-real-data-20260829` · unchanged |
| bffContentHash | `sha256:vis-capture-mobile-bff-20260829` · unchanged |
| actionTreeHash | `sha256:vis-capture-action-tree-20260829` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF forward) |
| IDOR / tenant | **PASS** — Incident create stamps `CompanyCode` from claim · cross-company view denied |
| Location Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE/COARSE_LOCATION` | **PASS** |
| Camera `NSCameraUsageDescription` · Manifest `CAMERA` | **PASS** |
| `PrivacyInfo.xcprivacy` PreciseLocation + PhotosorVideos · AppFunctionality | **PASS** (declared) |
| Deny in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** · `GpsDenyModal` / `GpsDenyDialog` |
| Fake lat/lng | **PASS** — live CL / Fused · GPS gate AccuracyM ≤ 30 · no fake SC on fail |
| Invent `api/v1/vis-capture` / BFF controller | **PASS** — reuse AiVision + Incident + Patrol only |
| Fake HTTP 200 khi POST fail | **PASS** — queue `OfflineQueueKind.incident` · toast fail |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Score % ship / watermark / process text / `mfeStdUrl` | **PASS** — score ẩn · không ship |
| ImageBase64 on wire P1 | **Accept** — still PhotoRow → detect body · optional uploads P2 |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| Detect `engine` · `note` · `imageBase64` · `lat` · `lng` · `accuracyM` · `videoRef` | **OK** dual = `DetectAiVisionRequest` |
| Detection card `id` · `code` · `defectClass` · `severity` · `routeLabel` · `sectionId` · `lat`/`lng` | **OK** · **cấm** bind Score to UI |
| Attach `title` · `routeName` · `incidentType` · `status` · `severity` · `kmStart` · `requestedAt` · `detectionId` · `hasGps` | **OK** dual = `CreateIncidentRequest` |
| Prefill `GET patrol/sessions` / demo SSOT `QL.1 · Km 1556+050` | **OK** dual (`VisCaptureCopy`) · live Km from session |
| GPS gate `maxAccuracyM` / `MAX_ACCURACY_M` = **30** | **OK** dual |
| Tab invent | **OK** · pack `tabs: none` · shell Tab 5 · tab **incident** · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-vis-capture` | **PASS** — title · section **Ảnh hiện trường** · `#i-camera` · Loc/Acc/Class/Sev · CTA Gắn/Bỏ qua · tab incident · no watermark |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — same dual · Android section + **Bỏ qua** (GAP-MOB-VIS-DUAL-01) · TopBar overflow Observe |
| Pict leading tile | **PASS** · rows `.no-icon` · **không** GAP-MOB-UX-COMP-03 |
| Dual copy VN · watermark / device label | **PASS** none |
| Live Class/Sev `—` vs demo post-detect | **state** pre-detect · **không** Must |
| Must align / demo-parity / COLOR / COMP / bugs OPEN Must | **0** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · tenant Incident create | **OK** |
| R-02 | API | — | detect Signed + incident live · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | Camera/GPS | — | plist + Manifest · PrivacyInfo · deny in-app · AccuracyM ≤ 30 gate | **OK** |
| R-04 | DTO | — | Dual body = BE DetectAiVisionRequest / CreateIncidentBody | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · score ẩn | **OK** |
| R-06 | A11y Maestro | Should | `GAP-MOB-A11Y-VIS-01` «±»/«đã chốt» NFC·NFD flake | **Defer** non-block |
| R-07 | Frame upload | P2 | ImageBase64 on detect · continuous finder OUT · media uploads optional | **Accept** |
| R-08 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-09 | Store | P2 | Play Data safety / READY_TO_SUBMIT → `/review-app-submit` | **Accept** |
| R-10 | Step 4b | — | T-BE-VIS-DETECT-ENGINE **PASS** · MIG **n/a** · review **skip** re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-VIS-CAP | PASS (prior Dev) |
| T-AND-VIS-CAP | PASS (prior Dev) |
| T-BE-VIS-DETECT-ENGINE | PASS (prior Dev · SourceKind=`detect-signed`) |
| T-BE-VIS-DETECT-MIG | **n/a** |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_3be26d66` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · prior Dev closed GAP-MOB-VIS-DETECT-01 |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Screen Nhận diện mặt đường dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · still PhotoRow + GPS ≤30 + Signed detect + attach/offline · A11y Should non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | `GAP-MOB-A11Y-VIS-01` · media uploads P2 · Play Data safety submit |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T10:31:54.000Z |
| versionGate | rechecked |
| taskId | `task_3be26d66` |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| realDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked contentHash=sha256:vis-capture-control-hint-20260829 -->
