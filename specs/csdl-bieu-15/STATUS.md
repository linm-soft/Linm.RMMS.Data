# STATUS — csdl-bieu-15

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-15.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-15` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| resource | `ops-facilities` |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| design_confirm | `approve` |
| solution_confirm | `approve` |
| route_confirm | `route_a` |
| team_lead_confirm | `approve` |
| review_confirm | `approve` |
| yarnBuild | `PASS` |
| yarnTypecheck | `PASS` |
| dotnetBuild | `PASS` |
| e2eQa | **PASS** (S0/S1/QA-20 · chrome fallback) |
| qaTaskId | `task_cb969365` |
| qa_verdict | **PASS** |
| reviewTaskId | `task_0c28671f` |
| review_verdict | **PASS** |
| updatedAt | `2026-09-05T16:00:11.190Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-15-control-hint.md · csdl-bieu-15-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-15.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-15.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_23453ac3 | csdl-bieu-15 | data_analy | — | **done** | changeScope=new_page · 20 cột · ops-facilities |
| task_a73f1c50 | csdl-bieu-15 | po | data_analy | **done** | Q-* autoApprove · alias_now · OF · subset · keep_5 |
| task_dbeaf01a | csdl-bieu-15 | design | po | **done** | design_confirm=approve · reviewUrl · typed 20 · 4 section |
| task_4d337ade | csdl-bieu-15 | sa | design | **done** | solution_confirm=approve · Schema_CsdlBieu15 · T-DM-01 · gates tz_na/xco_get_only/share_tenant |
| task_94727a59 | csdl-bieu-15 | team_lead | sa | **done** | route_a · T-* matrix · team_lead_confirm=approve · handoff compact |
| task_e6ad9bf7 | csdl-bieu-15 | dev | team_lead | **done** | yarn/dotnet PASS · Schema_CsdlBieu15 · CsdlBieu15Page · hub NEW |
| task_cb969365 | csdl-bieu-15 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · qa-compact · typecheck PASS |
| task_0c28671f | csdl-bieu-15 | review | qa | **done** | findings PASS · review_confirm=approve · review-compact |

## Blockers / open questions

- (none — Review PASS · phase=done · pipeline complete)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-15`
- mfeStdRoute: `/csdl-bieu-15`
- hub: `/so-ts/csdl-so-sach?resource=ops-facilities`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html`
- handoff: `specs/csdl-bieu-15/handoff/review-compact.md`
