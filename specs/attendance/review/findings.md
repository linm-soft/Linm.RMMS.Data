# Review — Findings — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Mobile] [Tuần đường] → Chấm công |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_946698fe` · autoApprove=ON) |
| packKind | **`list`** (UI hub DES-MOB-ATT) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · post `cleanup_mock` `task_242d0372` |
| prior · qa | `handoff/qa-compact.md` · **confirmed** · e2eQa ON · `ok:true` · `task_b96fb3d7` |
| prior · dev | `handoff/dev-compact.md` · **confirmed** · cleanup_mock · builds PASS · `task_242d0372` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET+POST `patrol/attendance-logs` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (queued prior QA · **cấm** re-run e2e ở role này) |
| updatedAt | `2026-09-01T08:55:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AttendanceView` · `AttendanceViewModel` · `AttendanceRepositoryImpl` · UseCases · Keychain · **no** `demoUser` |
| Android | `AttendanceScreen` · `AttendanceViewModel` · `AttendanceRepositoryImpl` · EncryptedSharedPreferences · **no** `demoUser` |
| BFF | catch-all proxy → GET+POST `patrol/attendance-logs` |
| API | GET history live-only · POST check-in `userName=auth.lastWho()` |
| QA store | `qa/store/attendance/` A11/A9/A3/P6/P6-2 live PNG · `task_b96fb3d7` |
| skillVersion | agent-review-mobile **2026.08.19.29** |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| GPS Info.plist / Manifest · deny → toast · no POST | **PASS** |
| `alert` / `UIAlert` / `AlertDialog` trên Attendance | **PASS** — toast only |
| Mock ship (`demoUser` / fake name) | **PASS** — gỡ cleanup_mock · Grep Attendance* **0** hit |
| Invent report/zones / `mfeStdUrl` / watermark | **PASS** — không ship |
| IDOR `{id}` | **N/A** — list hub |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| GET `patrol/attendance-logs` → day aggregate | **OK** · empty/fail → `[]` (no demoDays) |
| POST body `userName` · `route` · lat/lng · `inZone` · `status` | **OK** dual · `userName=lastWho()` |
| Hero checked-in after POST | **OK** |
| Live-only seed | **OK** — profile từ login · logs via POST |

## UI align (vision · store PNG + QA Must)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-attendance` | **PASS** — title · seg · hero · days · tab field · Must **0** (QA) |
| P6-CORE-2 vs demo | **PASS** — dual zone parity · Must **0** |
| Store dims | A3 1320×2868 · P6-2 1080×1920 PNG live |
| Copy **Chấm công** · **Chấm vào** · **Báo cáo** | **PASS** |
| Hero gradient TokenFile blue | **Accept** (HTML green = prototype chrome) |
| Toast Báo cáo / sibling pending | **PASS** / **Defer** |
| Must align / demo-parity / COLOR / COMP | **0** open |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3/P6/P6-2 live · CAPTURE + manifest `ok:true` | **PASS** |
| `PrivacyInfo.xcprivacy` | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** Phase 1 |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · GPS gate | **OK** |
| R-02 | API | — | Chỉ GET+POST attendance-logs · Step 4b N/A · **cấm ERP.*** | **OK** |
| R-03 | DTO | — | Dual parity · live-only · `lastWho()` POST | **OK** |
| R-04 | UX | P2 | Report toast-only · sibling pending_confirm | **Accept** |
| R-05 | Align | — | A3 + P6-2 vs `#sc-attendance` · Must **0** | **OK** |
| R-06 | Color | P2 | HTML hero green vs TokenFile blue | **Accept** |
| R-07 | QA | — | e2eQa ON · Maestro · store live `task_b96fb3d7` | **OK** |
| R-08 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-09 | Scope | — | sibling report/day **pending_confirm** | **Defer** |
| R-10 | Mock | — | cleanup_mock `demoUser` removed dual | **OK** |
| R-11 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ATTENDANCE | PASS · cleanup_mock |
| T-AND-ATTENDANCE | PASS · cleanup_mock |
| T-BE-* | **n/a** |
| T-QA | PASS (`ok:true` · `task_b96fb3d7`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_946698fe` · roleOnly=review)

| Gate | Result |
|------|--------|
| Prior Dev builds (`task_242d0372`) | **PASS** — iOS xcodebuild · Android assembleDebug · BFF |
| Prior QA e2e (`task_b96fb3d7`) | **PASS** — `yarn e2e-qa-mobile` `ok:true` · store PNG |
| Visual Must | **0** |
| Step 4b BE align | **N/A** — reuse GET+POST |
| This role | **cấm** yarn build/e2e/start:std — artifact + STATUS only |

## Verdict

Chấm công hub dual-native post-cleanup_mock: security + DTO live-only + UI align Must **0** · prior VERIFY Dev/QA PASS · Step 4b N/A · sibling Accept/Defer. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` nếu edit · **cấm** re-run full pipeline |
| Sibling | `attendance-report` · `attendance-day-detail` · **pending_confirm** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-09-01T08:55:00.000Z |
| versionGate | rechecked |
| taskId | `task_946698fe` |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
