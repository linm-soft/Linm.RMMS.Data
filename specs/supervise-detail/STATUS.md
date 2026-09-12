# STATUS — supervise-detail

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| phase | `qa` |
| status | `await_confirm` |
| changeScope | `edit_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-SUP-DET-PACK-01 · was scan `sheet`) |
| runMode | `fix_gaps` · gap=`cleanup_mock` · **qaFailFix** · re-QA **FAIL** |
| demo | `specs/supervise-detail/ui/prototype/{ios,android}/index.html` · `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · entry parent `#sc-supervise` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/supervise-detail.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol — **cấm ERP.*** |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| lastRole | `qa` · `/agent-qa-mobile` · e2e ok:false · handoff Dev rollback |
| parent | `mobile-cleanup-mock` |
| autoApprove | `ON` · **cấm** skip `qa_fail_rollback` |
| e2eQa | **ON** · re-QA FAIL · **cấm** start:std / mfeStdUrl |
| contentHash | `sha256:supervise-detail-cleanup-mock-20260901` |
| realDataHash | `sha256:supervise-detail-real-data-20260831` |
| bffContentHash | `sha256:patrol-attendance-logs-getbyid-passthrough` |
| actionTreeHash | `sha256:supervise-detail-action-tree-20260831` |
| poContentHash | `sha256:supervise-detail-po-requirement-20260831` |
| designContentHash | `sha256:supervise-detail-design-20260831` |
| saContentHash | `sha256:supervise-detail-sa-solution-20260831` |
| tlContentHash | `sha256:supervise-detail-tl-task-20260831` |
| iosImplementHash | `sha256:supervise-detail-qa-fix-ios-verify-20260901` |
| androidImplementHash | `sha256:supervise-detail-implement-android-qafix-20260901` |
| qaContentHash | `sha256:supervise-detail-qa-scenarios-20260901-blocked-r2` |
| qaFixPlanContentHash | `sha256:supervise-detail-qa-fix-plan-20260901` |
| reviewHash | `sha256:supervise-detail-review-20260831` |
| skillVersion | `2026.08.19.26` (edit-mobile-feature) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | prior Dev PASS · QA e2e **FAIL** Android list |
| updatedAt | `2026-09-01T15:53:21.879Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (qa blocked · handoff Dev) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/supervise-detail-control-hint.md · supervise-detail-bff-endpoints.md · supervise-detail-real-data.md · supervise-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/supervise-detail.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · implement/supervise-detail-qa-fix-plan.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/supervise-detail/CAPTURE.md · ui/review/align-ux.md · handoff/qa-compact.md | **blocked** |
| 6 | review | review/findings.md · review/REVIEW-META.json | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_950d67b1 | supervise-detail | data_analy | — | **completed** | control-hint + real-data + BFF + action-tree · handoff PO |
| task_bc7c9e03 | supervise-detail | po | data_analy | **completed** | requirement + Device AC · packKind screen · handoff Design |
| task_d9769d91 | supervise-detail | design | po | **completed** | dual `#sc-supervise-detail` · ux-analy · demo-parity · design_confirm approve · handoff SA |
| task_01a1a301 | supervise-detail | sa | design | **completed** | solution GetById + XCO · solution_confirm approve · Step 4b N/A · handoff TL |
| task_9f876bd7 | supervise-detail | team_lead | sa | **completed** | T-IOS-SUP-DETAIL · T-AND-SUP-DETAIL · T-BE n/a · route_a · handoff Dev |
| task_1c63dead | supervise-detail | dev | team_lead | **completed** | dual ship · xcodegen+xcodebuild · assembleDebug · BFF build PASS · handoff QA |
| task_63f14363 | supervise-detail | qa | dev | **completed** | e2e-qa-mobile ok:true · Maestro iOS+Android · align Must 0 · handoff Review |
| task_da5594c4 | supervise-detail | review | qa | **completed** | review_confirm=done · Must 0 · ACT-03 none · pipeline done |
| task_b9997d8c | supervise-detail | dev | — | **completed** | `/edit-mobile-feature` · cleanup_mock · remove OfflineDemo · VERIFY PASS |
| task_02d20b55 | supervise-detail | qa | — | **failed** | e2e ok:false · iOS PASS · Android list no GET · GAP-QA-SUP-DET-AND-LIST-01 |
| task_dcfaf100 | supervise-detail | dev | task_02d20b55 | **completed** | qaFailFix=1 · qaFixPhase=**plan** · `qa_fix_plan` **approved** |
| task_112638ae | supervise-detail | dev | task_dcfaf100 | **completed** | qaFailFix=1 · qaFixPhase=implement · Android ON_RESUME GET · VERIFY PASS · handoff QA |
| task_4063c6a2 | supervise-detail | qa | task_112638ae | **failed** | e2e ok:false · iOS A3 Aligned · Android `sup-empty` · BFF 0 GET from 10.0.2.2 |

## Gates

| Gate | Status |
|------|--------|
| qa_fail_rollback | **await_confirm** · `task_4063c6a2` · **cấm** autoApprove skip · Approve → Dev plan |
| qa_fix_plan | prior approved · implement claim **not closed by re-QA** |

## Blockers / open questions

- GAP-QA-SUP-DET-AND-LIST-01: **OPEN** — Android `#sc-supervise` `sup-empty` · BFF **0** GET attendance-logs from `10.0.2.2` (seed OK curl) · Dev ON_RESUME claim not proven
- GAP-QA-STORE-03: **OPEN** — Maestro-AND / P6 FAIL
- GAP-MOB-SUP-DET-DEMO-01: **closed** — Dev rewire card → push `#sc-supervise-detail`
- GAP-MOB-SUP-DET-PACK-01: **closed** — packKind **`screen`**
- GAP-MOB-SUP-DET-ORG-01: **PO chốt** — live `Note` empty → mapper `SuperviseCopy.orgFallback` (không demo payload)
- Step 4b / T-BE: **N/A** — reuse `GET patrol/attendance-logs/{id}` live · EmptyChrome OK 404/fail
- cleanup_mock: **done** — **cấm** `SuperviseDetailCopy.demo` / OfflineDemo

## Links

- data-analy → po → ui → be → task → implement → **qa FAIL** → qa_fail_rollback → Dev
- native: **cấm** mfeStdUrl · **cấm** e2e ở Dev
- BFF: `GET mobile-bff/api/v1/patrol/attendance-logs/{id}` · **cấm** invent path
- QA fix plan: `specs/supervise-detail/implement/supervise-detail-qa-fix-plan.md`
- Next: Dev qaFailFix · prove emulator GET list · then `/agent-qa-mobile` re-QA
