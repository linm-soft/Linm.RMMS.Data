# Review — Findings — patrol-checkin (mobile sheet · Ghi điểm tuần)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_370526d9` · autoApprove=ON) |
| packKind | **`sheet`** (`DES-MOB-PAT-CHECKIN-SHEET` + `DES-MOB-CI-DETAIL`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · re-review post `cleanup_mock` |
| prior · qa | `handoff/qa-compact.md` · **confirmed** · `task_753d9648` · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `handoff/dev-compact.md` · **confirmed** · `task_2f18d421` · live-only · VERIFY GATE PASS |
| prior · sa / design / po / data_analy | prior pipeline **confirmed** · compact missing → evidence via STATUS + QA/Dev compact |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy `POST …/check-ins` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-01T07:19:03.000Z` |
| taskId | `task_370526d9` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolCheckIn/*` · live-only `prepare()` · **cấm** demoRoute/demoPlan/itemsOrDemo · `SubmitPatrolCheckInUseCase` · GPS deny/leave |
| Android | `presentation/feature/patrolcheckin/*` · same live-only stamp · POST check-ins · GpsDenyDialog |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent controller |
| API | `GET patrol/sessions` · `POST patrol/sessions/{id}/check-ins` · BE `MatchOk` gate |
| QA store | `qa/store/patrol-checkin/` A11/A9/A3/P6/P6-2 · `ok:true` · live QL.1 |
| align | `ui/review/align-ux.md` · Must **0** · Should 2 non-block |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:patrol-checkin-control-hint-20260828` · unchanged |
| bffContentHash | `sha256:patrol-checkin-mobile-bff-20260828` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** (prior + unchanged) |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| IDOR `{id}` session · tenant filter | **PASS** |
| Location plist / Manifest | **PASS** |
| Camera open device P1 | **N/A P1** — PhotoRow local UUID · upload P2 |
| Deny / leave in-app · **cấm** system alert | **PASS** |
| Fake lat/lng / demo stamp on check-in | **PASS** — live session + live GPS pin · empty/fail copy |
| Invent slug / BFF controller | **PASS** |
| Fake HTTP 200 khi POST fail | **PASS** — offline queue checkIn |
| Plaintext JWT | **PASS** |
| Watermark / `mfeStdUrl` | **PASS** none |
| BE `MatchOk=false` → 422 | **PASS** (prior) |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| `planPointLabel` · `route` | **OK** · live active `.route` · empty = `patrol.empty.active.route` |
| `lat` · `lng` · `accuracyM` | **OK** live GPS |
| `distanceToPlanM` · `matchOk` | **OK** · plan pin = live GPS until BE plan-points P2 |
| `content` · `photoLocalIds[]` | **OK** |
| Prefill demo Phước Dinh | **REMOVED** · GAP-MOB-EDIT-DEMO-01 **CLOSED** on this sheet |
| Tab invent | **OK** · pack `tabs: none` |

## UI align (vision · prior QA `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sheet-checkin` | **PASS** · live `QL.1` (không demo Phước Dinh) |
| P6-CORE / P6-CORE-2 | **PASS** · Android green match · fold2 CTA |
| Pict `#i-camera` · **Ảnh** | **PASS** |
| Form matchOk gate · dual VN | **PASS** |
| Watermark | **PASS** none |
| Must align open | **0** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 · P6/P6-2 · `ok:true` | **PASS** (`task_753d9648`) |
| A4-IPAD | **DEFER** Phase 1 |
| PrivacyInfo / Play Data safety | **Accept** P2 app-level |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · tenant | **OK** |
| R-02 | API | — | POST `…/check-ins` · **cấm ERP.*** | **OK** |
| R-03 | GPS | — | Live fix · haversine · deny/leave in-app | **OK** |
| R-04 | cleanup_mock | — | Dual VMs live-only · cấm itemsOrDemo on sheet | **OK** · CLOSED |
| R-05 | Align | — | Must **0** · Aligned live QL.1 | **OK** |
| R-06 | Photo | P2 | Local UUID stub · capture/upload | **Accept** |
| R-07 | A11y | Should | `GAP-QA-A11Y-SHEET-TAG-01` | **Defer** |
| R-08 | GPS timing | Should | `GAP-QA-GPS-TIMING-01` iOS A3 loading | **Defer** |
| R-09 | Plan-points | P2 | plan lat/lng = live pin until BE | **Accept** |
| R-10 | Store / submit | P2 | PrivacyInfo / Data safety | **Accept** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-CI (+ cleanup) | PASS (prior Dev) |
| T-AND-PAT-CI (+ cleanup) | PASS (prior Dev) |
| T-BE-PAT-CI-API / MIG | PASS (prior) · review skip re-run |
| T-QA cleanup re-e2e | PASS (`ok:true` · Must 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must = **0** |

## VERIFY GATE (`task_370526d9` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META · review-compact | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** yarn build/e2e/start:std |
| Step 4b / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Sheet Ghi điểm tuần dual-native post cleanup_mock: security + DTO + UI align Must **0** · live session QL.1 · demo stamp removed · prior QA/Dev PASS · Should A11y/GPS timing + Photo/plan-points P2 non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| next | — (roleOnly=review · mark queue completed) |
| queue | `yarn queue -- --queue qlbd-mobile --yes status --id task_370526d9 --status completed` |
| Should follow-ups | `GAP-QA-A11Y-SHEET-TAG-01` · `GAP-QA-GPS-TIMING-01` · Photo P2 · plan-points BE P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-09-01T07:19:03.000Z |
| versionGate | rechecked |
| taskId | `task_370526d9` |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:patrol-checkin-control-hint-20260828 taskId=task_370526d9 -->
