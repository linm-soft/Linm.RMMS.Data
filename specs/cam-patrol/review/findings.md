# Review — Findings — cam-patrol (mobile screen · Thu thập camera · cleanup_mock re-check)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_20cf4fcb` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-CAM-PATROL` + finder `DES-MOB-CAM-FINDER`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` (cleanup_mock) |
| prior · qa | `handoff/qa-compact.md` · **confirmed** · e2eQa ON · `ok:true` · visual **Aligned** Must **0** · `task_fb828936` |
| prior · dev | `handoff/dev-compact.md` · **confirmed** · cleanup_mock · VERIFY builds PASS · `task_e7101ed6` |
| prior · design/sa/po/tl | **confirmed** (STATUS) · compact missing → rely STATUS + prior findings · scope unchanged |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_fb828936` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-01T06:17:31.000Z` |
| taskId | `task_20cf4fcb` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `CamPatrol/*` · live-only route stamp · **cấm** `demoRouteStamp` / `itemsOrDemo` in CamPatrol VM |
| Android | `presentation/feature/campatrol/*` · dual parity live-only |
| BFF | catch-all · **cấm** invent CamPatrolController |
| API | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` |
| QA store | `qa/store/cam-patrol/` A11/A9/A3/P6/P6-2 · manifest **ok:true** · CAPTURE PASS |
| align | QA Read A3↔P6↔demo **Aligned** · Must **0** · score ẩn · no demoRouteStamp |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:cam-patrol-control-hint-20260828` · unchanged |
| realDataHash | `sha256:cam-patrol-real-data-20260828` · unchanged |
| bffContentHash | `sha256:cam-patrol-mobile-bff-20260828` · unchanged |

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
| cleanup_mock demo SSOT stamp | **PASS** — CamPatrol dual live-only · empty=`patrol.empty.active.route` · fail toast=`cam.toast.sessionFail` |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| Detect / Detection card / Confirm bodies | **OK** (prior · unchanged) |
| Route stamp source | **OK** — live `GET patrol/sessions` active only · **cấm** demo fallback in CamPatrol |
| Tab invent | **OK** · pack tabs none · shell Tab field |

## UI align (vision · prior QA + store)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-cam-patrol` | **PASS** — QA Aligned · live-only route · score ẩn · Confirm/Skip no-icon |
| P6-CORE / P6-CORE-2 | **PASS** — dual parity · fold2 |
| Must align / bugs OPEN | **0** |
| GAP-MOB-EDIT-DEMO-01 | **CLOSED** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain/Encrypted · Bearer · tenant · camera/GPS privacy | **OK** |
| R-02 | API | — | sessions + detect + incident · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | cleanup_mock | — | CamPatrol dual **cấm** demoRouteStamp/itemsOrDemo · empty/fail copy live | **OK** |
| R-04 | DTO | — | Dual = BE Detect/CreateIncident | **OK** |
| R-05 | Align | — | A3+P6(+2) vs demo · Must **0** · Aligned | **OK** |
| R-06 | GPS timing | Should | `GAP-QA-CAM-GPS-TIMING-01` | **Defer** non-block |
| R-07 | Frame upload | P2 | ImageBase64 optional / media bind | **Accept** |
| R-08 | QA | — | e2eQa ON · Maestro · store live · `task_fb828936` PASS | **OK** |
| R-09 | Store | P2 | Play Data safety / READY_TO_SUBMIT | **Accept** |
| R-10 | Step 4b | — | N/A reuse sessions · review skip re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-CAM-PAT-CLEAN | PASS (prior Dev) |
| T-AND-CAM-PAT-CLEAN | PASS (prior Dev) |
| T-BE / T-BFF | n/a |
| T-QA | PASS (`ok:true` · Must 0) |
| T-REVIEW-SEC / DTO / ALIGN / CLEANUP | PASS · Must align = **0** |

## VERIFY GATE (`task_20cf4fcb` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Re-review post cleanup_mock: CamPatrol dual live-only route · security/DTO/align Must **0** · prior QA `ok:true` · GAP-MOB-EDIT-DEMO-01 closed · GPS timing Should non-block. **review_confirm=done**. Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | — · epic child #14 cam-patrol **DONE** · **cấm** re-run full pipeline |
| Should follow-ups | `GAP-QA-CAM-GPS-TIMING-01` · frame media P2 · Play Data safety |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-09-01T06:17:31.000Z |
| versionGate | rechecked |
| taskId | `task_20cf4fcb` |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:cam-patrol-control-hint-20260828 -->
