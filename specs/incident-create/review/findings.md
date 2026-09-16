# Review — Findings — incident-create (mobile screen · Ghi sự cố)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_a2abb578` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-INC-FORM` + kind `DES-MOB-INC-KIND`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_2c51c707` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · Step 4b media Signed skip · `task_c05490fb` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · BFF reuse · Detect LIVE · media Signed deferred |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Incident + Integration + AiVision · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_2c51c707` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-29T01:20:25.000Z` |
| taskId | `task_a2abb578` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `IncidentCreate/*` · `FetchAssetTypesUseCase` · `CreateIncidentUseCase` · Keychain · GpsDenyModal · still `FieldReflectCameraPicker` |
| Android | `presentation/feature/incidentcreate/*` · same use cases · EncryptedSharedPreferences · GpsDenyDialog · CameraX ImageCapture |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `IncidentCreateController` |
| API | `GET integration/asset-types` · optional sessions · `POST ai-vision/detect` · `POST incident/incidents` · local CHK · **không** `media[]` P1 |
| QA store | `qa/store/incident-create/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:incident-create-control-hint-20260829` · unchanged |
| realDataHash | `sha256:incident-create-real-data-20260829` · unchanged |
| bffContentHash | `sha256:incident-create-mobile-bff-20260829` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF forward) |
| IDOR / tenant | **PASS** — Incident create stamps company from claim · no GET `{id}` invent trên slug · detect/create reuse peer paths |
| Location Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Camera `NSCameraUsageDescription` · Manifest `CAMERA` | **PASS** |
| `PrivacyInfo.xcprivacy` PreciseLocation + PhotosorVideos · AppFunctionality | **PASS** (declared) |
| Deny in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** · `GpsDenyModal` / `GpsDenyDialog` · toast kit |
| Fake lat/lng | **PASS** — live CL / Fused · Create gated `hasGps` · no fake SC on fail |
| Invent `api/v1/incident-create` / BFF controller | **PASS** — reuse asset-types + AiVision + Incident only |
| Fake HTTP 200 khi POST fail | **PASS** — queue `OfflineQueueKind.incident` · Draft `forceOffline` |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Score % ship / watermark / process text / `mfeStdUrl` | **PASS** — detect Score **không** bind UI · không watermark |
| ImageBase64 on wire P1 · Create không `media[]` | **Accept** — Detect body fields · GAP-MOB-INC-CREATE-MEDIA-01 Signed deferred |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| Detect `engine` · `note` · `imageBase64` · `lat` · `lng` · `accuracyM` · `videoRef` | **OK** dual = `DetectAiVisionBody` / BE `DetectAiVisionRequest` |
| Detection card `id` · `code` · `defectClass` · `severity` · `routeLabel` · `sectionId` · `lat`/`lng` | **OK** · **cấm** bind Score to UI |
| Create `title` · `routeName` · `incidentType` · `status` · `severity` · `assetLabel` · `kmStart` · `requestedAt` · `detectionId` · `description` · `causesCongestion` · `hasGps` | **OK** dual = `CreateIncidentBody` / BE Create |
| Catalog `GET integration/asset-types` · local 32 fallback · **cấm** invent checklist API | **OK** dual |
| Kind pills Hư/Mất/Hỏng · checklist local `asset-kcht-32` | **OK** · **GAP-MOB-INC-CREATE-CHK-01** closed |
| Tab invent | **OK** · pack `tabs: none` · shell Tab 5 · tab **home** · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-inc-form` | **PASS** — title Ghi sự cố · WalletCard CULVERT_X · kind Hư · `#i-camera` · card **no-icon** · loc «— · chưa chốt» · toast GPS · tab home |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — camera · checklist · severity Cao · desc · CTA Create + 3 Secondary · tab home |
| Pict leading tile | **PASS** · **không** GAP-MOB-UX-COMP-03 (demo `.row` no-icon) |
| Dual copy VN · watermark / device label | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · tenant Incident create | **OK** |
| R-02 | API | — | asset-types + detect + incident live · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | Camera/GPS | — | plist + Manifest · PrivacyInfo · deny in-app · Create GPS gate | **OK** |
| R-04 | DTO | — | Dual body = BE DetectAiVisionRequest / CreateIncidentRequest · `assetLabel` | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · score ẩn | **OK** |
| R-06 | GPS timing | Should | `GAP-QA-INC-GPS-TIMING-01` iOS CORE «— · chưa chốt» + toast «Chưa lấy được vị trí» | **Defer** non-block |
| R-07 | Media Create | P2 | GAP-MOB-INC-CREATE-MEDIA-01 · Create không media[] · T-BE-INC-CREATE-MEDIA-API Signed deferred | **Accept** |
| R-08 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-09 | Store | P2 | Play Data safety / READY_TO_SUBMIT → `/review-app-submit` | **Accept** |
| R-10 | Step 4b | — | media Signed skip · Detect bind LIVE · review **skip** re-run | **OK** |
| R-11 | family | — | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** · **cấm** listing A4 | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-INC-CREATE | PASS (prior Dev) |
| T-AND-INC-CREATE | PASS (prior Dev) |
| T-BE-INC-CREATE-MEDIA-API | **Signed deferred** · P1 app không block |
| T-BE-INC-CREATE-DETECT-BIND | **n/a** · LIVE |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_a2abb578` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · media Signed deferred |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Screen Ghi sự cố dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · pick→form·detect/create/draft/offline + camera/GPS privacy declared · GPS timing Should non-block · media Create P2 Accept. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | `GAP-QA-INC-GPS-TIMING-01` · `GAP-MOB-INC-CREATE-MEDIA-01` Signed · Play Data safety submit |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-08-29T01:20:25.000Z |
| versionGate | rechecked |
| taskId | `task_a2abb578` |
| contentHash | sha256:incident-create-control-hint-20260829 |
| realDataHash | sha256:incident-create-real-data-20260829 |
| bffContentHash | sha256:incident-create-mobile-bff-20260829 |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:incident-create-control-hint-20260829 -->
