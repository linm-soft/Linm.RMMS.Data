# STATUS — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| productRoute | `/field/cam` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol+AiVision+Incident — **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| updatedAt | `2026-09-27T11:04:34.488Z` |
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
| task_9bdd3978 | web-rmms-cam-patrol | data_analy | — | completed | changeScope=edit_page · Pattern B SUBMIT-VALIDATE · Delta · hash c46ae566… · next /agent-po |
| task_20b3107a | web-rmms-cam-patrol | po | data_analy | completed | edit_page · DEC-PATTERN-B · keep DEC-* · packKind=list · next /agent-design |
| task_9531bc76 | web-rmms-cam-patrol | design | po | completed | edit_page · Pattern B banner · keep zones · reviewUrl · design_confirm approve · next /agent-sa |
| task_9f9e4a81 | web-rmms-cam-patrol | sa | design | completed | edit_page · Pattern B FE · keep Live cite · solution_confirm approve · next /agent-team-lead |
| task_252dd44f | web-rmms-cam-patrol | team_lead | sa | completed | edit_page · T-01…T-05 Pattern B · route_confirm keep /camera-tuan · team_lead_confirm approve · next /agent-dev |
| task_37051747 | web-rmms-cam-patrol | dev | team_lead | completed | edit_page · Pattern B CTA+banner · yarn+dotnet PASS · Step 4b N/A · next /agent-qa |
| task_67343748 | web-rmms-cam-patrol | qa | dev | completed | edit_page · S0/S1/QA-20 capture PASS · /trang-chu+/dang-nhap · stock soft · next /agent-review |
| task_1224f6b9 | web-rmms-cam-patrol | review | qa | completed | edit_page · Pattern B QUERY/SEC/UI-FN/BE-FN PASS · review_confirm approve · fix_gaps=none |

## Blockers / open questions

- (none) · review edit_page DoR PASS · autoApprove ON · next `/agent-done` · **cấm** phase=done ở review (pipeline end via done slash)

## Links

- review (edit) → done · Pattern B · mfeStdUrl `/camera-tuan`
- mfeStdUrl: `http://localhost:9301/camera-tuan`
- mfeStdRoute: `/camera-tuan`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html`
- handoff: `specs/web-rmms-cam-patrol/handoff/review-compact.md`
- findings: `specs/web-rmms-cam-patrol/review/findings.md`
- deltaCite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md`

## Retry

- from: `data_analy` · at: `2026-09-25T17:54:43.277Z` · board user Retry step
