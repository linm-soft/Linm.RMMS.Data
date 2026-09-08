# STATUS — csdl-bieu-06

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-06.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-06` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hubRoute | `/so-ts/csdl-so-sach?resource=underpasses` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| resource | `underpasses` |
| updatedAt | `2026-09-05T07:53:28.689Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-06-control-hint.md · csdl-bieu-06-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-06.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-06.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_b6ef926c | csdl-bieu-06 | data_analy | — | **completed** | changeScope=new_page · 19 cột · resource=underpasses · IdCode HC- |
| task_93f99dd1 | csdl-bieu-06 | po | data_analy | **completed** | packKind=list · alias_now · typed 19 · open Q chốt autopilot |
| task_2224e771 | csdl-bieu-06 | design | po | **completed** | design_confirm=approve · reviewUrl · typed 19 · Slideout 2col · hash skip |
| task_789a57e3 | csdl-bieu-06 | sa | design | **completed** | solution_confirm=approve · Schema_CsdlBieu6 · FormMode↔API · gates tz_na/xco_get_only/share_tenant |
| task_149f14d2 | csdl-bieu-06 | team_lead | sa | **completed** | route_a · T-* matrix · Schema_CsdlBieu6 · team_lead_confirm=approve |
| task_f79fea88 | csdl-bieu-06 | dev | team_lead | **completed** | FE CsdlBieu06Page · Schema_CsdlBieu6 · yarn+dotnet build PASS · e2e queued QA |
| task_eb952548 | csdl-bieu-06 | qa | dev | **completed** | e2e S0/S1/QA-20 PASS · verdict PASS · next Review |
| task_3c7fa889 | csdl-bieu-06 | review | qa | **completed** | review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · hash skip |

## Blockers / open questions

- none (Review PASS · phase=done · debt Auth/org/XLS/GAP-QA-E2E-PW-01 accepted)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-06`
- mfeStdRoute: `/csdl-bieu-06`
- hub: `/so-ts/csdl-so-sach?resource=underpasses`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/ui/prototype/csdl-bieu-06-list-prototype.html`
- handoff: `specs/csdl-bieu-06/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- screens: `specs/csdl-bieu-06/qa/screens/{S0,S1,QA-20}.png`
- findings: `specs/csdl-bieu-06/review/findings.md`
