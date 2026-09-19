# STATUS — nghiem-thu-detail

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `sheet` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` row tap · **GAP-MOB-NT-DETAIL-01** (chưa `#sc-nghiem-thu-detail`) |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu-detail.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-19T13:51:16.806Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/nghiem-thu-detail-control-hint.md · nghiem-thu-detail-bff-endpoints.md · nghiem-thu-detail-real-data.md · nghiem-thu-detail-action-tree.md | **pending** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/nghiem-thu-detail.md | **pending** |
| 4 | dev | implement/ios.md · implement/android.md | **pending** |
| 5 | qa | qa/scenarios.md · qa/store/nghiem-thu-detail/CAPTURE.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

-

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl