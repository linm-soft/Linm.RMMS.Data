# Review — Findings — cam-patrol (mobile screen · Thu thập camera)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_e487ff4f` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-CAM-PATROL` + finder `DES-MOB-CAM-FINDER`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · T-BE detect expand · MIG n/a |
| prior · sa | `be/solution-discovery.md` · **confirmed** · GAP-MOB-CAM-DETECT-01 closed on Dev |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · AiVision + Incident + Patrol · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_6ba51c44` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-28T22:03:40.000Z` |
| taskId | `task_e487ff4f` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `CamPatrol/*` · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · Keychain · GpsDenyModal · AVCapture finder |
| Android | `presentation/feature/campatrol/*` · same use cases · EncryptedSharedPreferences · GpsDenyDialog · CameraX |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `CamPatrolController` |
| API | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` · expand `DetectAiVisionRequest` |
| QA store | `qa/store/cam-patrol/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:cam-patrol-control-hint-20260828` · unchanged |
| realDataHash | `sha256:cam-patrol-real-data-20260828` · unchanged |
| bffContentHash | `sha256:cam-patrol-mobile-bff-20260828` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF forward) |
| IDOR / tenant | **PASS** — Incident create stamps `CompanyCode` from claim · cross-company view denied · detect stub tenant-scoped |
| Location Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE/COARSE_LOCATION` | **PASS** |
| Camera `NSCameraUsageDescription` · Manifest `CAMERA` | **PASS** |
| `PrivacyInfo.xcprivacy` PreciseLocation + PhotosorVideos · AppFunctionality | **PASS** (declared) |
| Deny in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** · `GpsDenyModal` / `GpsDenyDialog` |
| Fake lat/lng | **PASS** — live CL / Fused · Confirm gated `hasGps` · no fake SC on fail |
| Invent `api/v1/cam-patrol` / BFF controller | **PASS** — reuse AiVision + Incident paths only |
| Fake HTTP 200 khi POST fail | **PASS** — queue `OfflineQueueKind.incident` |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Score % ship / watermark / process text / `mfeStdUrl` | **PASS** — score ẩn · không ship |
| ImageBase64 on wire P1 | **Accept** — body fields present · frame upload optional P1 stub |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| Detect `engine` · `note` · `imageBase64` · `lat` · `lng` · `accuracyM` · `videoRef` | **OK** dual = `DetectAiVisionRequest` |
| Detection card `id` · `code` · `defectClass` · `severity` · `routeLabel` · `sectionId` · `lat`/`lng` | **OK** · **cấm** bind Score to UI |
| Confirm `title` · `routeName` · `incidentType` · `status` · `severity` · `kmStart` · `requestedAt` · `detectionId` · `description` · `causesCongestion` · `hasGps` | **OK** dual = `CreateIncidentRequest` |
| Prefill `GET patrol/sessions` active / demo SSOT `QL.1 · Km 1556+040` | **OK** dual (`CamPatrolCopy`) |
| Tab invent | **OK** · pack `tabs: none` · shell Tab 5 · tab **field** · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-cam-patrol` | **PASS** — title · FOV `#5AC8FA` · route stamp · detect/action **no-icon** · CTA Confirm/Skip · tab field · score **ẩn** |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — live camera + FOV · GPS đã chốt · same rows/CTA · fold2 |
| Pict leading tile | **PASS** · **không** GAP-MOB-UX-COMP-03 (`no-icon` / EmptyView / leadingSlot 0) |
| Dual copy VN · watermark / device label | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · tenant Incident create | **OK** |
| R-02 | API | — | detect + incident live · expand request · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | Camera/GPS | — | plist + Manifest · PrivacyInfo · deny in-app · Confirm GPS gate | **OK** |
| R-04 | DTO | — | Dual body = BE DetectAiVisionRequest / CreateIncidentRequest | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · score ẩn | **OK** |
| R-06 | GPS timing | Should | `GAP-QA-CAM-GPS-TIMING-01` iOS CORE «Đang lấy định vị…» vs Android locked | **Defer** non-block |
| R-07 | Frame upload | P2 | ImageBase64 optional · continuous finder P1 · media bind P2 | **Accept** |
| R-08 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-09 | Store | P2 | Play Data safety / READY_TO_SUBMIT → `/review-app-submit` | **Accept** |
| R-10 | Step 4b | — | T-BE-CAM-DETECT-API **PASS** · MIG **n/a** · review **skip** re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-CAM-PAT | PASS (prior Dev) |
| T-AND-CAM-PAT | PASS (prior Dev) |
| T-BE-CAM-DETECT-API | PASS (prior Dev) |
| T-BE-CAM-DETECT-MIG | **n/a** |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_e487ff4f` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · prior Dev closed GAP-MOB-CAM-DETECT-01 |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Screen Thu thập camera dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · detect/confirm/offline + camera/GPS privacy declared · GPS timing Should non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | `GAP-QA-CAM-GPS-TIMING-01` · frame media bind P2 · Play Data safety submit |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-08-28T22:03:40.000Z |
| versionGate | rechecked |
| taskId | `task_e487ff4f` |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:cam-patrol-control-hint-20260828 -->
