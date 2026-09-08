# STATUS — csdl-bieu-12

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| qaTaskId | `task_d2312fac` |
| qaVerdict | **PASS** |
| reviewTaskId | `task_9d0c01b9` |
| reviewVerdict | **PASS** |
| review_confirm | `done` (autoApprove ON · `task_9d0c01b9`) |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-12.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-12` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hubRoute | `/so-ts/csdl-so-sach?resource=green-assets` |
| resource | `green-assets` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| updatedAt | `2026-09-05T13:39:44.844Z` |
| design_confirm | `approve` (autoApprove ON · `task_8d909c44`) |
| solution_confirm | `approve` (autoApprove ON · `task_a36be038`) |
| route_confirm | `route_a` (autoApprove ON · `task_04119979`) |
| team_lead_confirm | `approve` (autoApprove ON · `task_04119979`) |
| yarnBuild | **PASS** |
| yarnTypecheck | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | **PASS** · S0/S1/QA-20 · manifest `ok=true` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| — | — | — | unlocked (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-12-control-hint.md · csdl-bieu-12-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-12.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-12.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_94fca237 | csdl-bieu-12 | data_analy | — | **completed** | changeScope=new_page · resource=green-assets · 15 cols · CX- |
| task_65010473 | csdl-bieu-12 | po | data_analy | **completed** | autoApprove · alias_now · keep_other · allow_either · side_only · subset · add_now |
| task_8d909c44 | csdl-bieu-12 | design | po | **completed** | design_confirm=approve · typed 15 · 2 section · reviewUrl · no peer |
| task_a36be038 | csdl-bieu-12 | sa | design | **completed** | solution_confirm=approve · Schema_CsdlBieu12 · gates tz_na/xco_get_only/share_tenant · T-DM-01 |
| task_04119979 | csdl-bieu-12 | team_lead | sa | **completed** | route_a · T-* matrix · team_lead_confirm=approve · no peer · Schema_CsdlBieu12 @ 4b |
| task_b5ce8177 | csdl-bieu-12 | dev | team_lead | **completed** | FE+BE typed · Schema_CsdlBieu12 · yarn/dotnet PASS · no peer |
| task_d2312fac | csdl-bieu-12 | qa | dev | **completed** | e2e S0/S1/QA-20 PASS · typecheck fix · no peer |
| task_9d0c01b9 | csdl-bieu-12 | review | qa | **completed** | review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · hash-skip |

## Blockers / open questions

- (none) — Review PASS · chain end · apply migration on DB before live CRUD · GAP-QA-E2E-PW-01 accepted P2

## Links

- data-analy → po → ui → be → task → implement → qa → review **done**
- mfeStdUrl: `http://localhost:9301/csdl-bieu-12`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html`
- handoff: `specs/csdl-bieu-12/handoff/review-compact.md`
