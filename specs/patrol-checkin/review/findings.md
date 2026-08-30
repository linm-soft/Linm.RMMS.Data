# Review — Findings — patrol-checkin (mobile sheet · Ghi điểm tuần)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_84636908` · autoApprove=ON) |
| packKind | **`sheet`** (`DES-MOB-PAT-CHECKIN-SHEET` + `DES-MOB-CI-DETAIL`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · T-BE check-ins + MIG |
| prior · sa | `be/solution-discovery.md` · **confirmed** · GAP-MOB-BFF-01 closed on Dev |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy `POST …/check-ins` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_2b5905e4` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-28T20:56:00.000Z` |
| taskId | `task_84636908` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolCheckIn/*` · `SubmitPatrolCheckInUseCase` · `CreatePatrolCheckInBody` · `GetCurrentLocationUseCase` · Keychain · GpsDenyModal · leave modal |
| Android | `presentation/feature/patrolcheckin/*` · `SubmitPatrolCheckInUseCase` · `ApiService` POST check-ins · EncryptedSharedPreferences · GpsDenyDialog |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `PatrolCheckInController` |
| API | `GET patrol/sessions` · `POST patrol/sessions/{id}/check-ins` · `rmms_patrol_check_ins` · BE `MatchOk` gate |
| QA store | `qa/store/patrol-checkin/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:patrol-checkin-control-hint-20260828` · unchanged |
| bffContentHash | `sha256:patrol-checkin-mobile-bff-20260828` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF forward) |
| IDOR `{id}` session | **PASS** — `PatrolSessions` `HasQueryFilter(CompanyCode)` · missing session → 404 · child via session |
| Location Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Camera plist / Manifest | **N/A P1** — PhotoRow appends local UUID stub · **cấm** open device camera P1 (upload P2) |
| Deny / leave in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** |
| Fake lat/lng | **PASS** — live CL / Fused · haversine 50 m · deny modal · timeout toast |
| Invent `api/v1/patrol-checkin` / BFF controller | **PASS** — Kind E path only |
| Fake HTTP 200 khi POST fail | **PASS** — queue `OfflineQueueKind.checkIn` |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |
| BE `MatchOk=false` → 422 | **PASS** (`CreateCheckInAsync`) |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| `planPointLabel` · `route` | **OK** dual + `CreatePatrolCheckInRequest` |
| `lat` · `lng` · `accuracyM` | **OK** |
| `distanceToPlanM` · `matchOk` | **OK** · client + BE gate |
| `content` · `photoLocalIds[]` | **OK** |
| Prefill `GET patrol/sessions` active / demo SSOT | **OK** dual |
| Demo plan `Km 1561+134 · Phước Dinh` · route `QL.1 · Km 1561+134` · radius 50 | **OK** dual `PatrolCheckInCopy` |
| Tab invent | **OK** · pack `tabs: none` · shell Tab 5 · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sheet-checkin` | **PASS** — Hủy/Lưu · banner đúng điểm · fields SSOT · Nội dung filled · `#i-camera` · primary/secondary |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — same zones · fold2 camera + **Ghi nhận điểm tuần** / **Hủy** |
| Pict `#i-camera` · section **Ảnh** | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Form matchOk gate · dual copy VN | **PASS** |
| Watermark / device label | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 RGB | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (app-level) |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Signup / delete account | **N/A** — sheet feature |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · tenant session filter | **OK** |
| R-02 | API | — | POST `…/check-ins` live · MIG table · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | GPS | — | Live fix · haversine 50 · deny/leave in-app · match gate dual+BE | **OK** |
| R-04 | DTO | — | Dual body = BE `CreatePatrolCheckInRequest` | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned | **OK** |
| R-06 | Photo | P2 | PhotoRow local UUID stub · real capture/upload P2 | **Accept** |
| R-07 | A11y | Should | `GAP-QA-A11Y-SHEET-TAG-01` Android ModalBottomSheet testTag | **Defer** non-block |
| R-08 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-10 | Step 4b | — | T-BE-PAT-CI-API + MIG **PASS** (prior Dev) · review **skip** re-run | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-CI | PASS (prior Dev) |
| T-AND-PAT-CI | PASS (prior Dev) |
| T-BE-PAT-CI-API | PASS (prior Dev) |
| T-BE-PAT-CI-MIG | PASS (prior Dev) |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_84636908` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · prior Dev closed GAP-MOB-BFF-01 |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Sheet Ghi điểm tuần dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · POST check-ins + MIG live · Photo stub / A11y Should non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | `GAP-QA-A11Y-SHEET-TAG-01` · Photo capture P2 · PrivacyInfo submit |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-08-28T20:56:00.000Z |
| versionGate | rechecked |
| taskId | `task_84636908` |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:patrol-checkin-control-hint-20260828 -->
