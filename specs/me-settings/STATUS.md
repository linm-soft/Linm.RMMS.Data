# STATUS — me-settings

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| phase | `done` |
| status | `done` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · Cài đặt quyền/OS + about · surface **screen** `#sc-me-settings` · **không** bottom-sheet) |
| demo | Entry `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row-settings · screen `#sc-me-settings` · pack `specs/me-settings/ui/prototype/{ios,android}/index.html` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/me-settings.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · **local/OS only P1** · **cấm invent** preferences |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** · Step 4b Skip |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** · `review_confirm=done` · pipeline complete |
| autoApprove | `ON` |
| e2eQa | ON — `ok:true` · phase1_iphone · iPhone 17 Pro Max · store run_store · align **Aligned** Must 0 |
| contentHash | `sha256:me-settings-control-hint-20260830` |
| realDataHash | `sha256:me-settings-real-data-20260830` |
| bffContentHash | `sha256:me-settings-bff-local-only-20260830` |
| actionTreeHash | `sha256:me-settings-action-tree-20260830` |
| poContentHash | `sha256:me-settings-po-requirement-20260830` |
| designContentHash | `sha256:me-settings-design-20260830` |
| saContentHash | `sha256:me-settings-sa-solution-20260830` |
| tlContentHash | `sha256:me-settings-tl-task-20260830` |
| iosImplementHash | `sha256:me-settings-ios-implement-20260831` |
| androidImplementHash | `sha256:me-settings-android-implement-20260831` |
| qaContentHash | `sha256:me-settings-qa-scenarios-20260831` |
| reviewHash | `sha256:me-settings-review-20260831` |
| demoHash | `sha256:me-settings-sc-me-settings-20260830` |
| skillVersion | `2026.08.29.1` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=review · findings **PASS** · Must align 0 · ACT-03 none · REAL-02 closed · **cấm** yarn build/e2e/start:std · Step 4b Skip |
| updatedAt | `2026-08-30T21:06:53.273Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/me-settings-control-hint.md · me-settings-bff-endpoints.md · me-settings-real-data.md · me-settings-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/me-settings.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/me-settings/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_43c37168 | me-settings | data_analy | — | **completed** | changeScope=new_page · DoR PASS · handoff PO |
| task_27ff3357 | me-settings | po | data_analy | **completed** | changeScope=new_page · DoR PASS · handoff Design · hash skip · **cấm** re-scan |
| task_d7095795 | me-settings | design | po | **completed** | changeScope=new_page · dual `#sc-me-settings` · design_confirm=approve · hash skip · GAP-MOB-MESET-DEMO-01 closed |
| task_7d695bcc | me-settings | sa | design | **completed** | changeScope=new_page · local/OS only · solution_confirm=approve · Step 4b Skip · **cấm invent** preferences · handoff TL |
| task_9ebfc60b | me-settings | team_lead | sa | **completed** | changeScope=new_page · route_a · T-IOS-ME-01+MS-01 · T-AND-ME-01+MS-01 · T-BE/T-BFF n/a · T-KIT n/a · handoff Dev |
| task_82661df5 | me-settings | dev | team_lead | **completed** | dual native · local/OS only · build triple PASS · Step 4b Skip · handoff QA |
| task_ce3a18c1 | me-settings | qa | dev | **completed** | e2e ok:true · align Aligned Must 0 · store PNG · handoff Review |
| task_73a51e55 | me-settings | review | qa | **completed** | review_confirm=done · Must 0 · ACT-03 none · pipeline done |

## Blockers / open questions

- GAP-MOB-MESET-PRIVACY-01 — Privacy HTTPS URL khi khách giao · P1 static `home.privacy.*` (SA closed ship static; URL vẫn chờ khách) · **non-block** Review

## Links

- data-analy → po → ui → be → task → implement → qa → review **done**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- post_review: **skip** · Next `/edit-mobile-feature` nếu sửa · **cấm** re-run full pipeline
