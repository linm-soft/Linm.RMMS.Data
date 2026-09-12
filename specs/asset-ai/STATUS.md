# STATUS — asset-ai

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| phase | `done` |
| status | `done` |
| packKind | `sheet` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Demo/src/demo/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset-ai.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T17:28:02.706Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/asset-ai-control-hint.md · asset-ai-bff-endpoints.md · asset-ai-real-data.md · asset-ai-action-tree.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/asset-ai.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/asset-ai/CAPTURE.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_1c830b88 | asset-ai | po | data_analy | **done** | changeScope=new_page · SCORE% P1 · enqueue det-hitl |
| task_a951f813 | asset-ai | design | po | **done** | dual proto · SCORE show% · design_confirm autoApprove · next sa |
| task_e939f217 | asset-ai | sa | design | **done** | solution_confirm approve · Step4b N/A · next TL |
| task_e9f98e82 | asset-ai | team_lead | sa | **done** | route_a · T-IOS-ASSET-AI · T-AND-ASSET-AI · T-BE n/a · next `/agent-dev-ios` |
| task_5bdb7bcf | asset-ai | dev | team_lead | **done** | dual native · VERIFY iOS+Android+BFF PASS · next `/agent-qa-mobile` |
| task_d1226fec | asset-ai | qa | dev | **done** | e2e ok:true · visual Aligned Must0 · next `/agent-review-mobile` |
| task_7bebeca5 | asset-ai | review | qa | **done** | review_confirm=approve · Must0 · pipeline complete |


## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review **done**
- native: e2eQa ON → prior QA `yarn e2e-qa-mobile` PASS — **cấm** mfeStdUrl
- handoff compact: `specs/asset-ai/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- reviewUrl: `ui/prototype/ios/index.html#sc-asset-ai` · `ui/prototype/android/index.html#sc-asset-ai`
- tasks: `T-IOS-ASSET-AI` → `T-AND-ASSET-AI` → `T-QA-ASSET-AI` → review **done** · Step4b N/A
