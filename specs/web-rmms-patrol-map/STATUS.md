# STATUS — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-patrol-map.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-25T20:52:57.656Z` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| changeScope | `new_page` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| (none) | — | — | released after review |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-patrol-map-control-hint.md · web-rmms-patrol-map-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-patrol-map.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-patrol-map.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_842327d7 | web-rmms-patrol-map | data_analy | — | **completed** | changeScope=new_page · roleOnly=data_analy DoR PASS |
| task_e0463d5f | web-rmms-patrol-map | po | data_analy | **completed** | changeScope=new_page · roleOnly=po DoR PASS · autoApprove |
| task_5013ac7a | web-rmms-patrol-map | design | po | **completed** | changeScope=new_page · roleOnly=design DoR PASS · autoApprove · reviewUrl prototype |
| task_fdf2d091 | web-rmms-patrol-map | sa | design | **completed** | changeScope=new_page · roleOnly=sa DoR PASS · autoApprove · DOMAIN-MAP + overlay DTO |
| task_c952b382 | web-rmms-patrol-map | team_lead | sa | **completed** | changeScope=new_page · roleOnly=team_lead DoR PASS · route_confirm · T-01…T-05 · T-BE N/A |
| task_94c320c9 | web-rmms-patrol-map | dev | team_lead | **completed** | changeScope=new_page · roleOnly=dev DoR PASS · yarn build PASS · Step 4b skip · T-01…T-05 |
| task_0ea11a1b | web-rmms-patrol-map | qa | dev | **completed** | changeScope=new_page · roleOnly=qa DoR PASS · e2e S0/S1/QA-20 · capture_patrol_map · autoApprove |
| task_2a03f319 | web-rmms-patrol-map | review | qa | **completed** | changeScope=new_page · roleOnly=review DoR PASS · QUERY/SEC/UI-FN/BE-FN PASS · review_confirm=approve |

## Blockers / open questions

- (none) · Review PASS · soft GAP-QA-E2E-STOCK-PORT · P2 tracks/check-in POST peer OUT

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-patrol-map`
- mfeStdRoute: `/web-rmms-patrol-map`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html`
- compact: `specs/web-rmms-patrol-map/handoff/review-compact.md`
- findings: `specs/web-rmms-patrol-map/review/findings.md`
- pipeline: review **confirmed** · **cấm** invent further roles
