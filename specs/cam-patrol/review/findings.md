# Review — Findings — cam-patrol (mobile screen · Thu thập camera · FRAME re-check)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_503535a1` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-CAM-PATROL` + finder `DES-MOB-CAM-FINDER`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · FRAME (`GAP-MOB-CAM-FRAME-01/02/03`) |
| prior · qa | `handoff/qa-compact.md` · **confirmed** · e2eQa ON · `ok:true` · visual **Aligned** Must **0** · `task_8051fbb6` |
| prior · dev | `handoff/dev-compact.md` · **confirmed** · T-IOS/AND-CAM-FRAME · builds PASS · `task_2122aa0b` |
| prior · tl/sa/design/po/da | **confirmed** · compact exists · route_a **giữ** · Step 4b **SKIP** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all · paths unchanged |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_8051fbb6` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-12T11:47:37.000Z` |
| taskId | `task_503535a1` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `CamPatrol/*` · capture JPEG → `imageBase64` · fail toast · live route |
| Android | `presentation/feature/campatrol/*` · CameraX parity |
| BFF | catch-all · DetectAiVisionBody.ImageBase64 live · **cấm** invent controller |
| API | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` |
| QA store | `qa/store/cam-patrol/` A11/A9/A3/P6/P6-2 · manifest **ok:true** · CAPTURE PASS |
| align | QA Read A3↔P6↔demo **Aligned** · Must **0** · score ẩn · TopBar+finder+Confirm/Skip |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:cam-patrol-control-hint-20260912-frame` |
| realDataHash | `sha256:cam-patrol-real-data-20260912-frame` |
| bffContentHash | `sha256:cam-patrol-mobile-bff-20260912-frame` |

## Security + permission

| Check | Result |
|-------|--------|
| Token Keychain / EncryptedSharedPreferences | **PASS** (prior · unchanged) |
| Bearer + `X-Company-Id` | **PASS** |
| IDOR / tenant Incident create | **PASS** |
| Location + Camera plist/Manifest · PrivacyInfo | **PASS** |
| Deny in-app GpsDenyModal / GpsDenyDialog | **PASS** |
| Fake lat/lng · Confirm `hasGps` gate | **PASS** |
| Invent cam-patrol slug / fake HTTP 200 | **PASS** |
| Score % / watermark / mfeStdUrl | **PASS** — score ẩn · none |
| Fake class on detect fail | **PASS** — toast detectFail · card nil · **cấm** fake class |
| Null ImageBase64 on detect POST | **PASS** — FRAME capture → non-null dual |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| DetectAiVisionBody.ImageBase64 | **OK** — dual capture JPEG · GAP-MOB-CAM-FRAME-01/03 **CLOSED** |
| Detection card / Confirm bodies | **OK** (prior · unchanged) |
| Route stamp source | **OK** — live `GET patrol/sessions` · cleanup_mock giữ |
| Tab invent | **OK** · pack tabs none · shell Tab field |

## UI align (vision · prior QA + store)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-cam-patrol` | **PASS** — QA Aligned · finder+Confirm/Skip · score ẩn |
| P6-CORE / P6-CORE-2 | **PASS** — dual parity |
| Must align / bugs OPEN | **0** |
| GAP-MOB-CAM-FRAME-01/02/03 | **CLOSED client** |
| GAP-MOB-EDIT-DEMO-01 | **CLOSED** (prior) |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain/Encrypted · Bearer · tenant · camera/GPS privacy | **OK** |
| R-02 | API | — | sessions + detect + incident · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | FRAME | — | Capture → non-null ImageBase64 dual · fail toast sạch | **OK** · FRAME-01/02/03 **CLOSED** |
| R-04 | DTO | — | DetectAiVisionBody parity dual = BE | **OK** |
| R-05 | Align | — | A3+P6(+2) vs demo · Must **0** · Aligned | **OK** |
| R-06 | GPS timing | Should | `GAP-QA-CAM-GPS-TIMING-01` | **Defer** non-block |
| R-07 | cleanup_mock | — | live-only route · cấm demoRouteStamp (prior giữ) | **OK** |
| R-08 | QA | — | e2eQa ON · Maestro · store live · `task_8051fbb6` PASS | **OK** |
| R-09 | Store | P2 | Play Data safety / READY_TO_SUBMIT | **Accept** |
| R-10 | Step 4b | — | SKIP · DTO live · review skip re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-CAM-FRAME | PASS (Dev `task_2122aa0b`) |
| T-AND-CAM-FRAME | PASS (Dev `task_2122aa0b`) |
| T-BE / T-BFF | n/a · Step 4b SKIP |
| T-QA-CAM-FRAME / T-QA-TAB-01 | PASS (`ok:true` · Must 0 · `task_8051fbb6`) |
| T-REVIEW-SEC / DTO / ALIGN / FRAME | PASS · Must align = **0** |

## VERIFY GATE (`task_503535a1` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

FRAME re-review: capture JPEG → ImageBase64 dual · fail toast sạch · security/DTO/align Must **0** · prior QA `ok:true` · GAP-MOB-CAM-FRAME-01/02/03 closed · GPS timing Should non-block. **review_confirm=done**. Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | — · FRAME epic child **DONE** · **cấm** re-run full pipeline |
| Should follow-ups | `GAP-QA-CAM-GPS-TIMING-01` · Play Data safety P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-09-12T11:47:37.000Z |
| versionGate | rechecked |
| taskId | `task_503535a1` |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:cam-patrol-control-hint-20260912-frame -->
