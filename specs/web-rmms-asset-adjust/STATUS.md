# STATUS — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-adjust.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-25T16:45:32.457Z` |
| dataAnalyHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| handoffCompact | `specs/web-rmms-asset-adjust/handoff/review-compact.md` |
| route_confirm | **approve** |
| review_confirm | **approve** |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_801c8901 | 2026-09-25T16:50:00.000Z · **released** (DoR PASS · review_confirm=approve · P0=0) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-asset-adjust-control-hint.md · web-rmms-asset-adjust-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-asset-adjust.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-asset-adjust.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_03996285 | web-rmms-asset-adjust | data_analy | — | **completed** | changeScope=new_page · packKind=list · Mobile · T19 `/asset/adjust` |
| task_4e113e81 | web-rmms-asset-adjust | po | data_analy | **completed** | List AC L-01…10 · soft-delete UX · edit→peer · STD=STATUS |
| task_17437bf8 | web-rmms-asset-adjust | design | po | **completed** | AA-00…08 · reviewUrl · soft-delete confirm · design_confirm=approve |
| task_72b4150a | web-rmms-asset-adjust | sa | design | **completed** | DOMAIN-MAP Asset · GET+DELETE Live · solution_confirm=approve · no migration |
| task_8e7fe12d | web-rmms-asset-adjust | team_lead | sa | **completed** | T-01…T-07 · route_confirm=approve · soft DELETE + peer edit · Step4b skip |
| task_fc91c814 | web-rmms-asset-adjust | dev | team_lead | **completed** | T-01…T-05 · MFE+BE build PASS · soft DELETE · edit peer |
| task_54a0eee2 | web-rmms-asset-adjust | qa | dev | **completed** | S0/S1/QA-20 PASS · capture_aadjust · stock soft :5101 |
| task_801c8901 | web-rmms-asset-adjust | review | qa | **completed** | QUERY/SEC/UI-FN/BE-FN PASS · review_confirm=approve · P0=0 |

## Blockers / open questions

- RESOLVED-DOMAIN-MAP-ADJUST — DOMAIN-MAP row `web-rmms-asset-adjust` (Asset)
- RESOLVED-STD-ROUTE — STATUS `/web-rmms-asset-adjust` canonical · SCREENS `/asset/adjust` alias
- RESOLVED-EDIT-SURFACE — Sửa → peer list detail · no PUT P1
- RESOLVED-SOFT-DELETE-UX — confirm + toast keys · reload list
- GAP-QA-E2E-STOCK-PORT — soft · stock CLI `:5101` vs compose `:5111` (non-blocking debt)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-asset-adjust`
- mfeStdRoute: `/web-rmms-asset-adjust`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html`
- compact: `specs/web-rmms-asset-adjust/handoff/review-compact.md`
- findings: `specs/web-rmms-asset-adjust/review/findings.md`
- scenarios: `specs/web-rmms-asset-adjust/qa/scenarios.md`
- implement: `specs/web-rmms-asset-adjust/implement/web-rmms-asset-adjust.md`
- task: `specs/web-rmms-asset-adjust/task/web-rmms-asset-adjust.md`
- solution: `specs/web-rmms-asset-adjust/be/solution-discovery.md`
