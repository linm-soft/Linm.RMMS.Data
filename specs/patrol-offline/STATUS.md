# STATUS — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| phase | `done` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (**PO confirm**) |
| stack | `native_dual` |
| demo | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| context | `docs/context/features/patrol-offline.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | `/patrol-offline` |
| mfeStdUrl | `http://localhost:9301/patrol-offline` |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/ios/index.html#sc-patrol-offline` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/android/index.html#sc-patrol-offline` |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/integration/sync/offline-batch` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Integration — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/patrol-offline-control-hint.md` · `patrol-offline-bff-endpoints.md` · `patrol-offline-action-tree.md` |
| po | `specs/patrol-offline/po/requirement.md` |
| design | `specs/patrol-offline/ui/design.md` · `ui/ux-analy.md` · `prototype/{ios,android}` |
| sa | `specs/patrol-offline/be/solution-discovery.md` |
| tl | `specs/patrol-offline/task/patrol-offline.md` |
| implement | `specs/patrol-offline/implement/ios.md` · `implement/android.md` (**confirmed**) |
| qa | `specs/patrol-offline/qa/scenarios.md` · `qa/store/patrol-offline/` (**confirmed**) |
| review | `specs/patrol-offline/review/findings.md` · `review/REVIEW-META.json` (**done**) |
| taskId | `task_94592434` |
| skillVersion | `2026.08.19.29` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.29` |
| rulesVersion | `2026.08.19.34` |
| versionGate | `rechecked` |
| contentHash | `sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad` |
| bffContentHash | `sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** ✓ · Android `assembleDebug` **PASS** ✓ · BFF `dotnet build` **PASS** ✓ · e2e-qa-mobile **ok:true** ✓ · roleOnly=`review` · Step 4b **N/A** · **cấm** mfeStdUrl |
| updatedAt | `2026-08-19T14:12:37.913Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Review `task_94592434` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-offline-control-hint.md · patrol-offline-bff-endpoints.md · patrol-offline-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/{ios,android} | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/patrol-offline.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/patrol-offline | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`list`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **implement_kit** · `LinmTopBar` text leading «Trang Chủ» + trailing «Đồng bộ» dual ✓ |
| route_confirm | **route_a** (autoApprove=ON · TL) |
| autoApprove | **ON** |
| e2eQa | **ON** · runtime khi QA |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |
| Step 4b | **N/A** — reuse `POST integration/sync/offline-batch` · không endpoint mới |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_6e4103ce | patrol-offline | dev | data_analy | **done** | iOS + Android + BFF proxy (prior scaffold) |
| task_eefc9116 | patrol-offline | po | data_analy | **done** | `/agent-po-mobile` · requirement confirmed |
| task_bb1e90a6 | patrol-offline | design | po | **done** | `/agent-design-mobile` · dual proto + ux-analy · autoApprove=ON |
| task_06ebc4bc | patrol-offline | sa | design | **done** | `/agent-sa-mobile` · solution-discovery confirmed · autoApprove=ON |
| task_6a33be43 | patrol-offline | team_lead | sa | **completed** | `/agent-tl-mobile` · route_a · T-KIT-TOPBAR-TEXT · T-IOS-PAT-OFFLINE · T-AND-PAT-OFFLINE |
| task_b2425570 | patrol-offline | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · kit TopBar text · GAP-F-OFFLINE-01 fix · VERIFY PASS |
| task_694706b6 | patrol-offline | qa | dev | **completed** | `/agent-qa-mobile` · e2e-qa-mobile **ok:true** · store PNG live · roleOnly |
| task_94592434 | patrol-offline | review | qa | **completed** | `/agent-review-mobile` · review_confirm approve · verifyGate PASS · roleOnly · post_review skip |

## Blockers / open questions

- Patrol-home nav «Đồng bộ» wire khi sibling ship (stub OK P1 · GAP-MOB-ACT-PAT-OFFLINE-01 · **Defer**)
- P2: `PrivacyInfo.xcprivacy` · Android mappin icon · store submit → `/review-app-submit`

## Links
- mfeStdUrl: `http://localhost:9301/patrol-offline`
- mfeStdRoute: `/patrol-offline`

- data-analy → po → design → sa → tl → dev → qa → **review done** → pipeline **complete**
- closeout Review: `task_94592434` · `/agent-review-mobile` · roleOnly=`review` · `review_confirm=approve` · P0 **none** · Must align **0** · VERIFY GATE PASS · iOS xcodegen+xcodebuild iPhone 17 Pro · Android assembleDebug · BFF dotnet build · prior e2e **ok:true** · post_review **skip** · pipeline **complete** · at: `2026-08-19T14:15:00.000Z`
- closeout QA: `task_694706b6` · `/agent-qa-mobile` · roleOnly=`qa` · autoApprove=ON · ios_test_phase **phase1_iphone** · VERIFY GATE PASS · docker API :5101 + BFF :5202 · `yarn e2e-qa-mobile` **ok:true** · iPhone 17 Pro Max · Pixel_2 · Maestro iOS+Android PASS · PNG `qa/screens` + `qa/store/patrol-offline` · at: `2026-08-19T14:10:00.000Z`
- native: e2eQa ON → `yarn e2e-qa-mobile` — **cấm** mfeStdUrl
