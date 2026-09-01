# STATUS — me-profile

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| phase | `done` |
| status | `done` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · form hồ sơ + đổi MK · surface **screen** `#sc-me-profile` · **không** bottom-sheet) |
| demo | Entry `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row-profile · screen `#sc-me-profile` · pack `specs/me-profile/ui/prototype/{ios,android}/index.html` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/me-profile.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/profile` · `auth/change-password` |
| backend | Auth service via Mobile.Bff rewrite · **cấm ERP.*** · **cấm** invent RMMS `users/me` |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** · review_confirm=done · Must align 0 · handoff phase=done |
| autoApprove | `ON` |
| e2eQa | ON — prior QA `ok:true` · Review **cấm** re-run e2e/start:std |
| ios_test_phase | `phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | `run_store` |
| contentHash | `sha256:me-profile-control-hint-20260830` |
| realDataHash | `sha256:me-profile-real-data-20260830` |
| bffContentHash | `sha256:me-profile-bff-20260830` |
| actionTreeHash | `sha256:me-profile-action-tree-20260830` |
| poContentHash | `sha256:me-profile-po-requirement-20260831` |
| designContentHash | `sha256:me-profile-design-20260831` |
| saContentHash | `sha256:me-profile-sa-solution-20260831` |
| tlContentHash | `sha256:me-profile-tl-task-20260831` |
| iosContentHash | `sha256:me-profile-ios-implement-20260831` |
| androidContentHash | `sha256:me-profile-android-implement-20260831` |
| qaContentHash | `sha256:me-profile-qa-scenarios-20260831` |
| reviewHash | `sha256:me-profile-review-20260831` |
| skillVersion | `2026.08.29.1` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=review · findings **PASS** · Must align **0** · ACT-03 none · REAL-02 closed · **cấm** yarn build/e2e/start:std |
| updatedAt | `2026-08-30T20:09:00.178Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/me-profile-control-hint.md · me-profile-bff-endpoints.md · me-profile-real-data.md · me-profile-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/me-profile.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/me-profile/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md · qa/e2e/CLICKABLES.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (autoApprove TL) |
| ios_repo_confirm | approve · reuse |
| android_repo_confirm | approve · reuse |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · approve |
| kit_missing_confirm | **N/A** — kit đã map · **cấm** T-KIT-* |
| version_mismatch_action | **recheck_new** (autoApprove) |
| ios_test_phase | **phase1_iphone** (autoApprove) |
| store_qa | **run_store** (autoApprove · e2eQa=ON) |
| align_confirm | **approve** (autoApprove · Must 0) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_c7b0196a | me-profile | data_analy | — | **done** | control-hint + BFF + real-data + action-tree · handoff PO |
| task_4f343d6b | me-profile | po | data_analy | **completed** | roleOnly · `/agent-po-mobile` · requirement confirmed · handoff Design · **cấm** e2e |
| task_0e0676c6 | me-profile | design | po | **completed** | roleOnly · `/agent-design-mobile` · dual `#sc-me-profile` · design_confirm approve · handoff SA |
| task_99a8707a | me-profile | sa | design | **completed** | roleOnly · `/agent-sa-mobile` · solution confirmed · Auth reuse · handoff TL · **cấm** e2e/Step 4b |
| task_1e652028 | me-profile | team_lead | sa | **completed** | roleOnly · `/agent-tl-mobile` · T-IOS-ME/MP + T-AND-ME/MP · route_a · T-BE n/a · handoff Dev · **cấm** e2e |
| task_bd696c31 | me-profile | dev | team_lead | **completed** | roleOnly · `/agent-dev-ios` + `/agent-dev-android` · T-IOS-ME/MP + T-AND-ME/MP · verify PASS · handoff QA · **cấm** e2e |
| task_b53c3814 | me-profile | qa | dev | **completed** | roleOnly · `/agent-qa-mobile` · e2e ok:true · Aligned · handoff Review |
| task_b5e30af4 | me-profile | review | qa | **completed** | roleOnly · `/agent-review-mobile` · review_confirm=done · Must 0 · phase=done · **cấm** e2e |

## Blockers / open questions

- GAP-MOB-MEPROF-DEMO-01 — **closed** (Design dual `#sc-me-profile`)
- GAP-MOB-MEPROF-EMAIL-01 — GET có thể thiếu Email · PUT vẫn gửi — **PO/SA/TL chốt** empty OK
- GAP-MOB-MEPROF-ORG-01 — **không** invent org/role subtitle API — **PO/SA/TL chốt**
- GAP-MOB-MEPROF-CITIZEN-01 — display-only nếu GET có · **cấm** PUT — **SA/TL chốt**
- GAP-MOB-MEPROF-CONFIRM-01 — Confirm local · body 2 field — **SA/TL chốt**

## Links

- data-analy → po → ui → be → task → implement → qa → review **DONE**
- native: e2eQa ON → prior `yarn e2e-qa-mobile` — **cấm** mfeStdUrl
- analy: `specs/_data-analy/me-profile-control-hint.md` · `me-profile-bff-endpoints.md` · `me-profile-real-data.md` · `me-profile-action-tree.md`
- po: `specs/me-profile/po/requirement.md`
- design: `specs/me-profile/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `prototype/{ios,android}/index.html` · `review/demo-parity.md` · `review/align-ux.md`
- sa: `specs/me-profile/be/solution-discovery.md`
- tl: `specs/me-profile/task/me-profile.md`
- API: GET/PUT `auth/profile` · POST `auth/change-password`
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/ios/index.html`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-profile/ui/prototype/android/index.html`
- implement: `specs/me-profile/implement/ios.md` · `implement/android.md`
- qa: `specs/me-profile/qa/scenarios.md` · `qa/store/me-profile/CAPTURE.md` · `qa/e2e/CLICKABLES.md`
- review: `specs/me-profile/review/findings.md` · `REVIEW-META.json`
- next: phase=`done` · `/edit-mobile-feature` nếu cần · **cấm** re-run full pipeline
