# STATUS — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol+AiVision+Incident — **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` |
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |
| updatedAt | `2026-09-25T18:28:47.143Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-cam-patrol-control-hint.md · web-rmms-cam-patrol-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-cam-patrol.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-cam-patrol.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_c661fa52 | web-rmms-cam-patrol | data_analy | — | completed | changeScope=new_page · CP-01 /field/cam · hash cd46c948… |
| task_d475fea0 | web-rmms-cam-patrol | po | data_analy | completed | DEC-FRAME/SCORE/ENTRY · DEC-DETECT-DTO→SA · packKind=list |
| task_feb572c6 | web-rmms-cam-patrol | design | po | completed | CP-01 zones · reviewUrl · ẩn score · Android 1-1 · design_confirm approve |
| task_c2290c20 | web-rmms-cam-patrol | sa | design | completed | DetectAiVisionRequest cite · DOMAIN-MAP row · solution_confirm approve |
| task_ef34d1a3 | web-rmms-cam-patrol | team_lead | sa | completed | T-01…T-05 · route_confirm · team_lead_confirm approve · next /agent-dev |
| task_8af6ffa0 | web-rmms-cam-patrol | dev | team_lead | completed | T-01…T-05 · yarn+dotnet build PASS · Step 4b N/A · next /agent-qa |
| task_14cd1dcc | web-rmms-cam-patrol | qa | dev | completed | S0/S1/QA-20 e2e PASS · `_capture_cam.mjs` · stock DUP soft · next /agent-review |
| task_305defbf | web-rmms-cam-patrol | review | qa | completed | QUERY/SEC/UI-FN/BE-FN PASS · review_confirm approve · fix_gaps=none |

## Blockers / open questions

- (none) · review PASS · debt soft only (stock DUP · file-input capture · planPointLabel km)

## Links

- data-analy → po → ui → be → task → implement → qa → review ✓
- mfeStdUrl: `http://localhost:9301/web-rmms-cam-patrol`
- mfeStdRoute: `/web-rmms-cam-patrol`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html`
- handoff: `specs/web-rmms-cam-patrol/handoff/review-compact.md`


## Retry

- from: `data_analy` · at: `2026-09-25T17:54:43.277Z` · board user Retry step
