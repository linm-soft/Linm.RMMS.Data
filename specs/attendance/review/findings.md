# Review — Findings — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Mobile] [Tuần đường] → Chấm công |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_f617b718` · autoApprove=ON) |
| packKind | **`list`** (UI hub DES-MOB-ATT) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET+POST `patrol/attendance-logs` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** |
| updatedAt | `2026-08-19T20:56:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AttendanceView` · `AttendanceViewModel` · `AttendanceRepositoryImpl` · `FetchAttendanceHistoryUseCase` · `CreateAttendanceCheckInUseCase` · Keychain |
| Android | `AttendanceScreen` · `AttendanceViewModel` · `AttendanceRepositoryImpl` · EncryptedSharedPreferences |
| BFF | catch-all proxy → GET+POST `patrol/attendance-logs` |
| API | GET history · POST check-in · demo fallback SSOT |
| QA store | `qa/store/attendance/` A11/A9/A3/P6/P6-2 live PNG |
| skillVersion | agent-review-mobile **2026.08.19.29** |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor`) |
| GPS Info.plist `NSLocationWhenInUseUsageDescription` · Manifest FINE/COARSE | **PASS** (deny → toast · no POST) |
| `alert` / `UIAlert` / `AlertDialog` trên Attendance | **PASS** — toast only |
| Invent report/zones / `mfeStdUrl` / watermark | **PASS** — không ship |
| IDOR `{id}` | **N/A** — list hub · no detail by id |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| GET `patrol/attendance-logs` → day aggregate | **OK** |
| POST body `userName` · `route` QL.1 · lat/lng · `inZone` · `status` | **OK** dual |
| Demo fallback `AttendanceCopy.demoDays` / hero | **OK** — CN/T7/T6 SSOT |
| Hero checked-in after POST | **OK** |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-attendance` | **PASS** — title · seg · hero · 7d · badges · tab field active |
| P6-CORE-2 vs demo | **PASS** — same zones dual |
| P6-CORE | Home entry context (route_a) · feature CORE = P6-CORE-2 — **OK** store pack |
| Copy **Chấm công** · **Chấm vào** · **Báo cáo** · day badges | **PASS** |
| Hero gradient | live = TokenFile `headerStart`/`headerEnd` blue · dual same · HTML green = prototype chrome — **Accept** (TokenFile SSOT) |
| Toast Báo cáo / day detail · cấm push sibling | **PASS** |
| Must align / demo-parity / COLOR / COMP | **0** open |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 RGB · P6/P6-2 1080×1920 RGB | **PASS** |
| `PrivacyInfo.xcprivacy` | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** family `1` · `GAP-SUBMIT-IMG-08` N/A Phase 1 |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · GPS gate | **OK** |
| R-02 | API | — | Chỉ GET+POST attendance-logs · Step 4b N/A · **cấm ERP.*** | **OK** |
| R-03 | DTO | — | Dual parity · demo SSOT | **OK** |
| R-04 | UX | P2 | Report / day-detail toast-only P1 | **Accept** |
| R-05 | Align | — | A3 + P6-2 vs demo zone parity · Must **0** | **OK** |
| R-06 | Color | P2 | HTML hero green vs kit/TokenFile blue | **Accept** (TokenFile) |
| R-07 | QA | — | e2eQa ON · Maestro · store live | **OK** |
| R-08 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-09 | Scope | — | sibling report/day **pending_confirm** | **Defer** |
| R-10 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ATTENDANCE | PASS |
| T-AND-ATTENDANCE | PASS |
| T-BE-* | **n/a** |
| T-QA | PASS (`ok:true`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_f617b718`)

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| Mobile.Bff `dotnet build` | **PASS** · 0 Warning · 0 Error |
| yarn e2e-qa-mobile | **PASS** (prior QA `task_e1ae0770` · `ok:true`) |
| Step 4b BE align | **N/A** — reuse GET+POST |

## Verdict

Chấm công hub dual-native: security + DTO + UI align Must **0** · VERIFY GATE iOS/Android/BFF PASS · Step 4b N/A · sibling toast-only Accept. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Sibling | `attendance-report` · `attendance-day-detail` · **pending_confirm** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T20:56:00.000Z |
| versionGate | rechecked |
| taskId | `task_f617b718` |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
