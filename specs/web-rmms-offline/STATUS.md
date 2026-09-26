# STATUS — web-rmms-offline

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-offline.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-25T17:48:29.086Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-offline-control-hint.md · web-rmms-offline-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-offline.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-offline.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_60b39e71 | web-rmms-offline | data_analy | — | **done** | changeScope=new_page · handoff→po |
| task_403601e8 | web-rmms-offline | po | data_analy | **done** | changeScope=new_page · handoff→design · autoApprove |
| task_51030f4d | web-rmms-offline | design | po | **done** | changeScope=new_page · design_confirm=approve · handoff→sa · autoApprove |
| task_a1f562f8 | web-rmms-offline | sa | design | **done** | changeScope=new_page · solution_confirm=approve · handoff→team_lead · autoApprove · DOMAIN-MAP row |
| task_0069a0fe | web-rmms-offline | team_lead | sa | **done** | changeScope=new_page · route_confirm=approve · T-01…T-07 · handoff→dev · autoApprove · T-BE n/a |
| task_b19318b7 | web-rmms-offline | dev | team_lead | **done** | changeScope=new_page · T-01…T-05 · yarn+dotnet PASS · Step4b n/a · handoff→qa · e2e queued |
| task_43cc2b00 | web-rmms-offline | qa | dev | **done** | changeScope=new_page · e2e S0/S1/QA-20 PASS · handoff→review · autoApprove |
| task_9ae8b812 | web-rmms-offline | review | qa | **done** | changeScope=new_page · review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · fix_gaps=none · hash skip |

## Blockers / open questions

- UNCLEAR-INCIDENT-REPLAY (P1 filter-only · P2 deferred) — debt non-blocking
- UNCLEAR-STORE-KEY — **resolved** Dev · key `linm.offline.queue.v1`

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-offline`
- mfeStdRoute: `/web-rmms-offline`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html`
- compact: `specs/web-rmms-offline/handoff/review-compact.md`
- findings: `specs/web-rmms-offline/review/findings.md`
