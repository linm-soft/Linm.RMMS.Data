# STATUS — attendance-report

| Field | Value |
|-------|-------|
| feature | `attendance-report` |
| phase | `design` |
| status | `in_progress` |
| packKind | `screen` (PO chốt · was scan `sheet`) |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Demo/src/demo/ios/index.html · mobile-p1 `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-attendance` · target `#sc-attendance-report` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance-report.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T08:55:46.509Z` |
| taskId | `task_6ae4da65` |
| data_analy | **PASS** · autoApprove=ON · handoff `handoff/data_analy-compact.md` |
| po | **PASS** · autoApprove=ON · handoff `handoff/po-compact.md` · requirement `po/requirement.md` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/attendance-report-control-hint.md · attendance-report-bff-endpoints.md · attendance-report-real-data.md · attendance-report-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **in_progress** |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/attendance-report.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/store/attendance-report/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_cc8d9202 | attendance-report | data_analy | — | done | roleOnly · DoR PASS · changeScope=new_page |
| task_6ae4da65 | attendance-report | po | data_analy | done | roleOnly · DoR PASS · packKind=screen · hash skip |

## Blockers / open questions

- none (P1 = GetList + client aggregate · dedicated `/attendance/report` = P2 · Excel/map OUT)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl · **queued** `/agent-qa*` only
- compact: `handoff/data_analy-compact.md` · `handoff/po-compact.md`

## Retry

- from: `data_analy` · at: `2026-09-01T00:45:44.775Z` · board user Retry step · completed `2026-09-01T00:48:12.000Z`
