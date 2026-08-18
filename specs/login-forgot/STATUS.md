# STATUS — login-forgot

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `shell` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/login-forgot.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-18T20:36:23.003Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/login-forgot-control-hint.md · login-forgot-bff-endpoints.md · login-forgot-action-tree.md | **pending** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/login-forgot.md | **pending** |
| 4 | dev | implement/ios.md · implement/android.md | **pending** |
| 5 | qa | qa/scenarios.md · qa/store/login-forgot/CAPTURE.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_20426736 | login-forgot | data_analy | — | **pending_confirm** | sibling_assign · hyperlink Quên MK · chờ Approve board · autoApprove=0 |

## Blockers / open questions

- **GAP-MOB-ACT-06** nếu start trước Approve
- BFF forgot: analy đọc Auth BFF — **cấm** invent `auth/forgot`

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl