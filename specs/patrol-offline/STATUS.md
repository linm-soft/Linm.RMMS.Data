# STATUS — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| packKind | `list` (**PO confirmed · keep**) |
| stack | `native_dual` |
| demo | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| context | `docs/context/features/patrol-offline.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/ios/index.html#sc-patrol-offline` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/android/index.html#sc-patrol-offline` |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · proxy `patrol/sessions/{id}/check-ins` + `integration/sync/offline-batch` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + Integration — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/patrol-offline-control-hint.md` · `patrol-offline-real-data.md` · `patrol-offline-bff-endpoints.md` · `patrol-offline-action-tree.md` · handoff `data_analy-compact.md` |
| po | `specs/patrol-offline/po/requirement.md` · handoff `po-compact.md` (**confirmed**) |
| design | `specs/patrol-offline/ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · `prototype/{ios,android}` · handoff `design-compact.md` (**confirmed**) |
| sa | `specs/patrol-offline/be/solution-discovery.md` · handoff `sa-compact.md` (**confirmed**) |
| tl | `specs/patrol-offline/task/patrol-offline.md` · handoff `team_lead-compact.md` (**confirmed**) |
| implement | `specs/patrol-offline/implement/ios.md` · `implement/android.md` · handoff `dev-compact.md` (**confirmed**) |
| qa | `specs/patrol-offline/qa/scenarios.md` · `qa/store/patrol-offline/` · handoff `qa-compact.md` (**confirmed**) |
| review | `specs/patrol-offline/review/findings.md` · handoff `review-compact.md` (**confirmed**) |
| taskId | `task_0e218573` |
| skillVersion | `2026.08.19.29` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.29` |
| rulesVersion | `2026.08.19.34` |
| versionGate | `rechecked` |
| contentHash | `sha256:patrol-offline-delta-apply-checkins-20260912` |
| bffContentHash | `sha256:patrol-offline-bff-apply-checkins-20260912` |
| verifyGate | iOS xcodegen+xcodebuild iPhone 17 Pro **PASS** · Android assembleDebug **PASS** · BFF dotnet build **PASS** · e2e-qa-mobile **ok:true** · Review artifact **PASS** · Step 4b **N/A** · **cấm** start:std/mfeStdUrl |
| updatedAt | `2026-09-12T14:52:44.446Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after review `task_0e218573` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-offline-*.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md · ux-analy · map · prototype · design-compact | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/patrol-offline.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store · qa-compact | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `edit_page` · gap=`offline_sync_apply_checkins` |
| packKind | **`list`** |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | prior implement_kit TopBar text · **unchanged UI** · T-KIT **n/a** |
| route_confirm | **route_a** (keep) |
| autoApprove | **ON** |
| e2eQa | **ON** · **PASS** `ok:true` · A11/A10/A9/A3/P6/P6-2 · align Aligned · Must 0 |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| team_lead_confirm | **confirmed** |
| dev_confirm | **confirmed** (autoApprove ON · implement + compact · VERIFY PASS) |
| qa_confirm | **confirmed** (autoApprove ON · e2e ok:true · qa-compact · Must 0) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |
| Step 4b | **N/A** — reuse `POST patrol/sessions/{id}/check-ins` + optional offline-batch |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_94929183 | patrol-offline | review | qa | **completed** | prior cleanup_mock_offline_storage |
| task_82f104b5 | patrol-offline | data_analy | — | **completed** | edit_page apply-checkins · § Delta |
| task_d268d5b7 | patrol-offline | po | data_analy | **completed** | `/agent-po-mobile` · delta confirm |
| task_1f9f2ea2 | patrol-offline | design | po | **completed** | `/agent-design-mobile` · keep UI · annotate replay |
| task_c7ddb8a3 | patrol-offline | sa | design | **completed** | `/agent-sa-mobile` · delta apply · sa-compact |
| task_1618aef2 | patrol-offline | team_lead | sa | **completed** | `/agent-tl-mobile` · T-IOS/T-AND apply · team_lead-compact |
| task_8bf4b63c | patrol-offline | dev | team_lead | **completed** | `/agent-dev-ios`+`/agent-dev-android` · apply check-ins · VERIFY PASS |
| task_53265cb6 | patrol-offline | qa | dev | **completed** | `/agent-qa-mobile` · e2e ok:true · apply-checkins · qa-compact |
| task_0e218573 | patrol-offline | review | qa | **completed** | `/agent-review-mobile` · approve apply-checkins · review-compact |

## Blockers / open questions

- Incident sync replay API — P2 keep pending
- Patrol-home nav «Đồng bộ» wire khi sibling ship (stub OK P1 · GAP-MOB-ACT-PAT-OFFLINE-01 · **Defer**)
- P2: `PrivacyInfo.xcprivacy` · Android mappin icon · store submit → `/review-app-submit`

## Links

- closeout review: `task_0e218573` · `/agent-review-mobile` · roleOnly=`review` · gap=`offline_sync_apply_checkins` · review_confirm=approve · Must 0 · at: `2026-09-12T14:55:00.000Z`
- closeout qa: `task_53265cb6` · `/agent-qa-mobile` · roleOnly=`qa` · gap=`offline_sync_apply_checkins` · e2e **ok:true** · align Aligned · Must 0 · at: `2026-09-12T14:48:06.000Z`
- closeout dev: `task_8bf4b63c` · `/agent-dev-ios`+`/agent-dev-android` · roleOnly=`dev` · gap=`offline_sync_apply_checkins` · T-IOS-PAT-OFF-APPLY · T-AND-PAT-OFF-APPLY · VERIFY PASS · at: `2026-09-12T14:45:00.000Z`
- closeout team_lead: `task_1618aef2` · `/agent-tl-mobile` · roleOnly=`team_lead`
- closeout sa: `task_c7ddb8a3` · `/agent-sa-mobile` · roleOnly=`sa`
- closeout design: `task_1f9f2ea2` · `/agent-design-mobile` · roleOnly=`design`
- closeout po: `task_d268d5b7` · `/agent-po-mobile` · roleOnly=`po`
- closeout data_analy: `task_82f104b5` · `/agent-data-analy-mobile` · roleOnly=`data_analy`
- prior closeout Review: `task_94929183` · cleanup_mock_offline_storage · approve
- native: **cấm** mfeStdUrl · pipeline **done**
