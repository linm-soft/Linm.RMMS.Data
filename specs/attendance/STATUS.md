# STATUS — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (**PO confirm** · UI hub DES-MOB-ATT) |
| stack | `native_dual` |
| demo | `specs/attendance/ui/prototype/ios/index.html` `#sc-attendance` · `specs/attendance/ui/prototype/android/index.html` `#sc-attendance` · `DES-MOB-ATT` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/attendance-logs` (GET+POST) |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/attendance-control-hint.md` · `attendance-bff-endpoints.md` · `attendance-action-tree.md` · `attendance-real-data.md` |
| po | `specs/attendance/po/requirement.md` |
| design | `specs/attendance/ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · `ui/review/align-ux.md` · `prototype/ios/index.html` · `prototype/android/index.html` |
| sa | `specs/attendance/be/solution-discovery.md` |
| tl | `specs/attendance/task/attendance.md` |
| dev | `specs/attendance/implement/{ios,android}.md` |
| qa | `specs/attendance/qa/scenarios.md` · `qa/e2e/{ios,android}.yaml` |
| review | `specs/attendance/review/findings.md` · `review/REVIEW-META.json` (**confirmed**) |
| taskId | `task_f617b718` |
| skillVersion | `2026.08.19.29` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.29` |
| rulesVersion | `2026.08.19.34` |
| versionGate | `rechecked` |
| contentHash | `sha256:attendance-mobile-hub-20260819` |
| bffContentHash | `sha256:attendance-mobile-bff-20260819` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** ✓ · Android `assembleDebug` **PASS** ✓ · BFF `dotnet build` **PASS** ✓ · `yarn e2e-qa-mobile` **ok:true** ✓ · roleOnly=`review` · Step 4b **N/A** · **cấm** mfeStdUrl |
| updatedAt | `2026-08-19T20:56:39.814Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after review `task_f617b718` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/attendance-control-hint.md · attendance-bff-endpoints.md · attendance-action-tree.md · attendance-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/review/demo-parity.md · ui/review/align-ux.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/attendance.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/e2e/{ios,android}.yaml · qa/store/attendance/ | **confirmed** |
| 6 | review | review/findings.md · review/REVIEW-META.json | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `edit_page` |
| packKind | **`list`** (PO confirm · UI hub DES-MOB-ATT) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — reuse LargeTitle / Segment / Hero / ListRow / Toast |
| route_confirm | **route_a** (TL autoApprove) — tab field → patrol-home seg **Chấm công** → push `#sc-attendance` |
| autoApprove | **ON** |
| e2eQa | **ON** · runtime **PASS** · `ok:true` |
| ios_test_phase | **phase1_iphone** · dest **iPhone 17 Pro** · A4-IPAD DEFER |
| store_qa | **run_store** |
| align_confirm | **approve** (autoApprove=ON · Review) · Must **0** |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |
| Step 4b | **N/A** — reuse `GET`+`POST` `patrol/attendance-logs` |
| sibling_assign | `attendance-report` · `attendance-day-detail` · **pending_confirm** (**cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_9035ee40 | attendance | full_pipeline | — | **completed** | mobile hub DES-MOB-ATT · autopilot · VERIFY GATE PASS |
| task_35851eba | attendance | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `list` |
| task_a59566c2 | attendance | design | po | **completed** | `/agent-design-mobile` · roleOnly · autoApprove=ON · demo-parity Must closed · VERIFY GATE PASS |
| task_58acefd1 | attendance | sa | design | **completed** | `/agent-sa-mobile` · roleOnly · autoApprove=ON · solution_confirm=approve · VERIFY GATE PASS |
| task_53a68d8f | attendance | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly · autoApprove=ON · route_confirm=route_a · VERIFY GATE PASS |
| task_a728ce1a | attendance | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · roleOnly · autoApprove=ON · VERIFY GATE PASS |
| task_e1ae0770 | attendance | qa | dev | **completed** | `/agent-qa-mobile` · e2e-qa-mobile **ok:true** · store PNG live · roleOnly |
| task_f617b718 | attendance | review | qa | **completed** | `/agent-review-mobile` · review_confirm=approve · Must **0** · VERIFY GATE PASS · roleOnly |
| T-IOS-ATTENDANCE | attendance | ios | SA | **completed** | AttendanceView · GET/POST · xcodegen+xcodebuild PASS |
| T-AND-ATTENDANCE | attendance | android | SA | **completed** | AttendanceScreen · assembleDebug PASS |
| T-BE-* | attendance | be | — | **n/a** | Step 4b N/A |

## Blockers / open questions

- Sibling `attendance-report` · `attendance-day-detail` — **pending_confirm**
- P2: `PrivacyInfo.xcprivacy` · store submit → `/review-app-submit`
- BFF build tracked separately (proxy reuse · no new endpoint)

## Links

- data-analy → po **confirmed** → design **confirmed** → sa → tl → dev **confirmed** → qa **confirmed** → review **confirmed** → **done**
- closeout Review: `task_f617b718` · `/agent-review-mobile` · roleOnly=`review` · autoApprove=ON · `review_confirm=approve` · Must **0** · VERIFY GATE PASS · Step 4b **N/A** · post_review **skip** · at: `2026-08-19T20:56:00.000Z`
- closeout QA: `task_e1ae0770` · `/agent-qa-mobile` · roleOnly=`qa` · autoApprove=ON · ios_test_phase **phase1_iphone** · VERIFY GATE PASS · docker API :5101 + BFF :5202 · `yarn e2e-qa-mobile` **ok:true** · iPhone 17 Pro Max · Pixel_2 · Maestro iOS+Android PASS · PNG `qa/screens` + `qa/store/attendance` · at: `2026-08-19T20:52:23.954Z`
- closeout Dev: `task_a728ce1a` · `/agent-dev-ios` + `/agent-dev-android` · roleOnly=`dev` · autoApprove=ON · VERIFY GATE PASS · Step 4b **N/A** · at: `2026-08-20T03:48:49.000Z`
- closeout TL: `task_53a68d8f` · `/agent-tl-mobile` · roleOnly=`team_lead` · autoApprove=ON · route_confirm=route_a · VERIFY GATE PASS · Step 4b **N/A** · at: `2026-08-20T03:50:00.000Z`
- closeout SA: `task_58acefd1` · `/agent-sa-mobile` · roleOnly=`sa` · autoApprove=ON · solution_confirm=approve · VERIFY GATE PASS · Step 4b **N/A** · at: `2026-08-19T20:45:22.000Z`
- closeout Design: `task_a59566c2` · `/agent-design-mobile` · roleOnly=`design` · autoApprove=ON · demo-parity Must closed · VERIFY GATE PASS · at: `2026-08-19T20:48:00.000Z`
- closeout PO: `task_35851eba` · `/agent-po-mobile` · roleOnly=`po` · autoApprove=ON · packKind `list` · VERIFY GATE PASS · at: `2026-08-19T20:42:17.000Z`
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/ios/index.html#sc-attendance`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/android/index.html#sc-attendance`
- native: e2eQa ON → `yarn e2e-qa-mobile` — **cấm** mfeStdUrl

## VERIFY GATE

| Check | Result |
|-------|--------|
| iOS xcodegen | **PASS** (`task_f617b718`) |
| iOS xcodebuild iPhone 17 Pro | **BUILD SUCCEEDED** (`task_f617b718` · scheme LinmRmms) |
| Android assembleDebug | **BUILD SUCCESSFUL** (`task_f617b718`) |
| Mobile.Bff dotnet build | **Build succeeded** · 0W 0E (`task_f617b718`) |
| yarn e2e-qa-mobile | **PASS** (`ok: true` · `task_e1ae0770`) |
| Store PNG | A11/A9/A3 1320×2868 RGB · P6/P6-2 1080×1920 RGB |
| Step 4b | **N/A** — reuse GET+POST `patrol/attendance-logs` |
| review_confirm | **approve** · Must **0** |
