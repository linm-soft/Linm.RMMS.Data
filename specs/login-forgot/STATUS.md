# STATUS — login-forgot

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| phase | `done` |
| status | `done` |
| packKind | `shell` (**PO confirm**) |
| stack | `native_dual` |
| changeScope | `new_page` |
| demo | `specs/login-forgot/ui/prototype/{ios,android}/index.html` `#sc-forgot` · entry parent `#sc-login` `.login-meta a` |
| context | `docs/context/features/login-forgot.md` · parent `login.md` |
| logo | `logo/mobile` AppIcon 1024 → proto `assets/app-logo.png` |
| mfe | — (native · **cấm** mfeStdUrl / yarn start:std) |
| mfeStdRoute | `/login-forgot` |
| mfeStdUrl | `http://localhost:9301/login-forgot` |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/forgot-password` · `auth/reset-password` |
| backend | `Linm.RMMS.WebService` · Auth platform live · **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/login-forgot-control-hint.md` · `login-forgot-bff-endpoints.md` · `login-forgot-action-tree.md` |
| po | `specs/login-forgot/po/requirement.md` |
| design | `specs/login-forgot/ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · proto ios+android |
| sa | `specs/login-forgot/be/solution-discovery.md` |
| tl | `specs/login-forgot/task/login-forgot.md` |
| implement | `implement/ios.md` · `implement/android.md` · `implement/bff.md` · `ui/review/login-forgot.md` |
| qa | `qa/scenarios.md` · `qa/store/login-forgot/` · `qa/e2e/{ios,android}.yaml` · e2e **ok:true** |
| review | `review/findings.md` · `review/REVIEW-META.json` · review_confirm **done** |
| backup | `specs/login-forgot/_backup/20260818T214250Z` |
| taskId | `task_e3916a45` |
| skillVersion | `2026.08.19.10` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.19` |
| rulesVersion | `2026.08.19.22` |
| versionGate | `rechecked` |
| contentHash | `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` |
| bffContentHash | `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` |
| reviewHash | `sha256:login-forgot-review-task_e3916a45-20260818` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · e2e-qa-mobile **ok:true** (prior QA) |
| e2e_toolchain | `ok` · Maestro 2.8.0 · iPhone 17 Pro Max · Pixel_2 1080×1920 |
| updatedAt | `2026-08-18T22:06:05.437Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-forgot-control-hint.md` · `login-forgot-bff-endpoints.md` · `login-forgot-action-tree.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios+android | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/login-forgot.md | **confirmed** |
| 4 | dev | implement/ios.md · android.md · bff.md · ui/review/login-forgot.md | **confirmed** |
| 5 | qa | qa/scenarios.md · store CAPTURE · e2e ok:true | **confirmed** |
| 6 | review | review/findings.md · REVIEW-META.json | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` (STATUS + data-analy · autoApprove) |
| packKind | **`shell`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| version_mismatch_action | **recheck_new** (SA cũ · backup `20260818T214250Z`) |
| autoApprove | **ON** |
| kit_missing_confirm | **N/A** / **kit_skip** — reuse map login |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (autoApprove · TL `task_8814e09a`) |
| ios_test_phase | **phase1_iphone** (autoApprove · A4-IPAD DEFER) |
| store_qa | **run_store** (autoApprove · e2eQa=ON) |
| e2eQa | **ON** · `yarn e2e-qa-mobile` **ok:true** |
| review_confirm | **confirmed** (user Approve board) |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_20426736 | login-forgot | — | — | **completed** | Autopilot · builds + e2e PASS |
| task_7b4f79ea | login-forgot | po | data-analy | **completed** | `/agent-po-mobile` · roleOnly=po · requirement confirmed |
| task_9607fe43 | login-forgot | design | po | **completed** | `/agent-design-mobile` · roleOnly=design · design_confirm approve · VERIFY GATE PASS |
| task_4b1d6de2 | login-forgot | sa | design | **completed** | `/agent-sa-mobile` · roleOnly=sa · solution_confirm approve · VERIFY GATE PASS |
| task_8814e09a | login-forgot | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly=team_lead · route_confirm route_a · task pack · VERIFY GATE PASS |
| task_41503568 | login-forgot | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · T-IOS-FORGOT · T-AND-FORGOT · T-BE-FORGOT · `LinmLeaveConfirm` dual · VERIFY GATE PASS · **không** chain QA |
| task_c019702a | login-forgot | qa | dev | **completed** | `/agent-qa-mobile` · roleOnly=qa · e2e ok:true · store PNG 6.9" + Pixel_2 · VERIFY GATE PASS · **không** chain Review |
| task_e3916a45 | login-forgot | review | qa | **completed** | `/agent-review-mobile` · roleOnly=review · review_confirm done · no P0 · VERIFY GATE PASS · pipeline complete |

## Blockers / open questions

- none — GAP-MOB-BFF-01 đóng · GAP-PO-STORE-01 N/A · e2e **ok:true** · A5/A6 privacy URL = pack store (không READY_TO_SUBMIT) · R-08 store PrivacyInfo **Accept** ngoài slug

## Handoff → (pipeline complete)

| Field | Value |
|-------|-------|
| feature / packKind | `login-forgot` / **`shell`** |
| phase_from / phase_to | review **confirmed** → **done** |
| STATUS | `specs/login-forgot/STATUS.md` |
| review | `review/findings.md` · `REVIEW-META.json` · review_confirm **done** |
| qa | `qa/scenarios.md` · `qa/store/login-forgot/CAPTURE.md` · Maestro `qa/e2e/{ios,android}.yaml` |
| e2e | prior `yarn e2e-qa-mobile` **ok:true** |
| route_confirm | **route_a** — Login → Forgot full-page → Login |
| Kit | `LinmLeaveConfirm` dual — **cấm** `UIAlert`/`AlertDialog` |
| BFF | `auth/forgot-password` · `auth/reset-password` · skip rewrite · **cấm** invent `auth/forgot` |
| BE | T-BE-FORGOT **done** (keep) · **không** `/new-endpoint` RMMS |
| Next slash | — (pipeline complete · không role sau) |
| Chain this turn | **không** (roleOnly=review) |
| e2eQa | ON · prior PNG store · **cấm** yarn start:std / mfeStdUrl |

## Links
- mfeStdUrl: `http://localhost:9301/login-forgot`
- mfeStdRoute: `/login-forgot`

- review findings: `specs/login-forgot/review/findings.md`
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login-forgot/ui/prototype/ios/index.html#sc-forgot`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login-forgot/ui/prototype/android/index.html#sc-forgot`
- e2e: `yarn e2e-qa-mobile` · **cấm** mfeStdUrl
- task: `specs/login-forgot/task/login-forgot.md`
- solution: `specs/login-forgot/be/solution-discovery.md`
- qa: `specs/login-forgot/qa/scenarios.md`
