# STATUS — csdl-bieu-07

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-07.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-07` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| hubRoute | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| changeScope | `new_page` |
| resource | `shoulders-fences` |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| route_confirm | `route_a` |
| updatedAt | `2026-09-05T09:57:18.638Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked · Review DoR PASS · phase=done |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-07-control-hint.md · csdl-bieu-07-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-07.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-07.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_480d8882 | csdl-bieu-07 | data_analy | — | **done** | changeScope=new_page · packKind=list · 20 cột · formNo 10→7 |
| task_8566976f | csdl-bieu-07 | po | data_analy | **done** | open Q chốt · alias_now · typed 20 · 3 khối · Grid AC |
| task_50b066b7 | csdl-bieu-07 | design | po | **done** | design_confirm=approve · reviewUrl · typed 20 · Slideout 2col · 3 section · hash skip |
| task_b41ac662 | csdl-bieu-07 | sa | design | **done** | solution_confirm=approve · Schema_CsdlBieu7 · FenceLengthM↔km · SlopeClearingM · T-DM-01 |
| task_02e3c2e7 | csdl-bieu-07 | team_lead | sa | **done** | route_a · T-* matrix · T-REN-01 · team_lead_confirm=approve |
| task_457e5414 | csdl-bieu-07 | dev | team_lead | **done** | FE page + Schema_CsdlBieu7 · yarn/dotnet build PASS · e2e queued QA |
| task_526941ca | csdl-bieu-07 | qa | dev | **done** | e2e S0/S1/QA-20 PASS · verdict PASS |
| task_0af14e10 | csdl-bieu-07 | review | qa | **done** | review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · hash skip |

## Blockers / open questions

- none (Review DoR PASS · phase=done · pipeline complete)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-07`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html`
- handoff: `specs/csdl-bieu-07/handoff/review-compact.md`
