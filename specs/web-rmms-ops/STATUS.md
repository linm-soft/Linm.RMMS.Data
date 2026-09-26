# STATUS — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-ops.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Notification — **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| updatedAt | `2026-09-25T12:57:46.186Z` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-ops-control-hint.md · web-rmms-ops-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md · DOMAIN-MAP `web-rmms-ops` | **confirmed** |
| 3 | team-lead | task/web-rmms-ops.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-ops.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/screens/{S0,S1,QA-20}.png · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_f2f7b48c | web-rmms-ops | data_analy | — | **PASS** | changeScope=new_page · inbox `/ops` · Mobile.Bff |
| task_8986d89a | web-rmms-ops | po | data_analy | **PASS** | changeScope=new_page · list AC · desktop compose out · detail P1=no |
| task_0a112c4e | web-rmms-ops | design | po | **PASS** | OP-00…06 · reviewUrl · design_confirm=approve · autoApprove |
| task_320abfbb | web-rmms-ops | sa | design | **PASS** | solution_confirm=approve · DOMAIN-MAP row · FormMode↔API Live · autoApprove |
| task_133133c0 | web-rmms-ops | team_lead | sa | **PASS** | route_confirm=approve · T-UI-OPS-01 · FormType waive · autoApprove |
| task_0390e4a3 | web-rmms-ops | dev | team_lead | **PASS** | `/web-rmms-ops` inbox+mark-read · yarn build+BFF PASS · mobile-bff align |
| task_8c3445e6 | web-rmms-ops | qa | dev | **PASS** | e2e S0/S1/QA-20 PASS · Aligned · Must 0 · compact · autoApprove |
| task_ec7dfc02 | web-rmms-ops | review | qa | **PASS** | review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · Must 0 · autoApprove |

## Blockers / open questions

- (none)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-ops`
- mfeStdRoute: `/web-rmms-ops`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html`
- compact: `specs/web-rmms-ops/handoff/review-compact.md`
