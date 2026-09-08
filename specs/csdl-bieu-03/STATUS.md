# STATUS — csdl-bieu-03

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-03.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| updatedAt | `2026-09-05T09:13:05.832Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-03-control-hint.md · csdl-bieu-03-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-03.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-03.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens/{S0,S1,QA-20}.png | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_df175ffd | csdl-bieu-03 | data_analy | — | **done** | changeScope=new_page · resource=road-tunnels · 42 cột · GPS 3 điểm · 2 ống=2 bản ghi |
| task_69bca3c6 | csdl-bieu-03 | po | data_analy | **done** | packKind=list · Q-GPS=six_numbers · Q-TUBE=two_rows · Q-VENT=text · Q-ROUTE=alias_now · Q-PROV=keep_static · Q-SECTION=sectioned · autoApprove=ON |
| task_db02ce1d | csdl-bieu-03 | design | po | **done** | design_confirm=approve · reviewUrl prototype · typed 42 · sectioned · hash skip · autoApprove=ON |
| task_539bb440 | csdl-bieu-03 | sa | design | **done** | solution_confirm=approve · Schema_CsdlBieu3 · GPS/TUBE/VENT · T-DM-01 slug · gates tz_na/xco_get_only/share_tenant · autoApprove=ON |
| task_fb34ebd6 | csdl-bieu-03 | team_lead | sa | **done** | route_confirm=route_a · team_lead_confirm=approve · T-* matrix · Schema_CsdlBieu3 @4b · autoApprove=ON |
| task_8650b573 | csdl-bieu-03 | dev | team_lead | **done** | FE CsdlBieu03Page · BE CsdlBieu3+Schema_CsdlBieu3 · yarn+dotnet build PASS · autoApprove=ON |
| task_677b9487 | csdl-bieu-03 | qa | dev | **done** | e2e S0/S1/QA-20 PASS · typecheck PASS · GAP-QA-E2E-PW-01 fallback · **cấm** phase=done |
| task_50bbebc7 | csdl-bieu-03 | review | qa | **done** | review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · autoApprove=ON · phase=done |

## Blockers / open questions

- (none) · deploy: `dotnet ef database update` Schema_CsdlBieu3 · GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT · GAP-QA-E2E-PW-01 P2 · Auth DEFER

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-03`
- mfeStdRoute: `/csdl-bieu-03`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html`
- handoff: `…/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- findings: `specs/csdl-bieu-03/review/findings.md`
- scenarios: `specs/csdl-bieu-03/qa/scenarios.md`
- implement: `specs/csdl-bieu-03/implement/csdl-bieu-03.md`
- solution: `specs/csdl-bieu-03/be/solution-discovery.md`
- task: `specs/csdl-bieu-03/task/csdl-bieu-03.md`
