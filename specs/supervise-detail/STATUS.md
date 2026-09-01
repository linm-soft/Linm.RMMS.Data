# STATUS — supervise-detail

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| phase | `done` |
| status | `done` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-SUP-DET-PACK-01 · was scan `sheet`) |
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
| lastRole | `review` · `/agent-review-mobile` · **PASS** · `review_confirm=done` · pipeline complete |
| autoApprove | `ON` |
| e2eQa | ON — `ok:true` · phase1_iphone · iPhone 17 Pro Max · store run_store · align **Aligned** Must 0 |
| contentHash | `sha256:supervise-detail-control-hint-20260831` |
| realDataHash | `sha256:supervise-detail-real-data-20260831` |
| bffContentHash | `sha256:patrol-attendance-logs-getbyid-passthrough` |
| actionTreeHash | `sha256:supervise-detail-action-tree-20260831` |
| poContentHash | `sha256:supervise-detail-po-requirement-20260831` |
| designContentHash | `sha256:supervise-detail-design-20260831` |
| saContentHash | `sha256:supervise-detail-sa-solution-20260831` |
| tlContentHash | `sha256:supervise-detail-tl-task-20260831` |
| iosImplementHash | `sha256:supervise-detail-implement-ios-20260831` |
| androidImplementHash | `sha256:supervise-detail-implement-android-20260831` |
| qaContentHash | `sha256:supervise-detail-qa-scenarios-20260831` |
| reviewHash | `sha256:supervise-detail-review-20260831` |
| skillVersion | `2026.08.29.1` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=review · findings **PASS** · Must align 0 · ACT-03 none · REAL-02 closed · **cấm** yarn build/e2e/start:std · Step 4b N/A |
| updatedAt | `2026-08-31T02:49:23.233Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/supervise-detail-control-hint.md · supervise-detail-bff-endpoints.md · supervise-detail-real-data.md · supervise-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/supervise-detail.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/supervise-detail/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md · review/REVIEW-META.json | **done** |
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

## Blockers / open questions

- GAP-MOB-SUP-DET-DEMO-01: **closed** — Dev rewire card → push `#sc-supervise-detail`
- GAP-MOB-SUP-DET-PACK-01: **closed** — packKind **`screen`**
- GAP-MOB-SUP-DET-ORG-01: **PO chốt** — `Note` / demo fallback «Tổ tuần đường · VP-IV.1»
- Step 4b / T-BE: **N/A** — reuse `GET patrol/attendance-logs/{id}` live
- GAP-QA-SUP-DET-DEMO-404-01: demo card 404 → offline SSOT · **non-block** Review

## Links

- data-analy → po → ui → be → task → implement → qa → review **done**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- BFF: `GET mobile-bff/api/v1/patrol/attendance-logs/{id}` · **cấm** invent path
- QA: `qa/scenarios.md` · PNG `qa/screens/` · store `qa/store/supervise-detail/` · align `ui/review/align-ux.md`
- post_review: **skip** · Next `/edit-mobile-feature` nếu sửa · **cấm** re-run full pipeline
