# STATUS — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| phase | `data_analy` |
| status | `blocked` |
| packKind | `sheet` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol-checkin.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-21T04:05:19.846Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-checkin-control-hint.md · patrol-checkin-bff-endpoints.md · patrol-checkin-real-data.md · patrol-checkin-action-tree.md | **blocked** (failed) |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/patrol-checkin.md | **pending** |
| 4 | dev | implement/ios.md · implement/android.md | **pending** |
| 5 | qa | qa/scenarios.md · qa/store/patrol-checkin/CAPTURE.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl