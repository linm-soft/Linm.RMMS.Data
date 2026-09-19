# STATUS — csdl-bieu-07

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| phase | `done` |
| status | `done` |
| qaTaskId | `task_c04c6ac3` |
| qa_verdict | `PASS` |
| review_confirm | `done` |
| packKind | `list` |
| demo | N/A (edit_page export · zone-only prior) |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-07.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| changeScope | `edit_page` |
| resource | `shoulders-fences` |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| route_confirm | `route_a` |
| epicCite | `csdl-export-print` · `T-XLS-S07` |
| solution_confirm | `approve` |
| team_lead_confirm | `approve` |
| updatedAt | `2026-09-17T21:52:54.272Z` |
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
| task_9ab3979a | csdl-bieu-07 | data_analy | — | **done** | changeScope=edit_page · T-XLS-S07 · Xuất Excel catalogToolbar · golden Cục 16-sheet · **cấm** filter-bar · **cấm** new_page typed |
| task_58ae864f | csdl-bieu-07 | po | data_analy | **done** | edit_page · Q-XLS SCOPE=filtered · IMPORT=export_only_p0 · FILENAME=Bieu07_… · AC-XLS-01..09 · handoff Design |
| task_a41905a5 | csdl-bieu-07 | design | po | **done** | edit_page · design_confirm=approve · Xuất Excel toolbar · Import ẩn P1 · reviewUrl · hash skip · compact |
| task_8aedafae | csdl-bieu-07 | sa | design | **done** | edit_page · solution_confirm=approve · `.xls` · filter-all · GAP-BIEU07-XLS-* · handoff TL |
| task_f95a30db | csdl-bieu-07 | team_lead | sa | **done** | edit_page · T-KEEP · T-XLS-* · route_a KEEP · team_lead_confirm=approve · handoff Dev |
| task_5db71cfd | csdl-bieu-07 | dev | team_lead | **done** | edit_page XLS · FE toolbar + BE Bieu7 export · yarn/dotnet PASS · e2e queued QA |
| task_c04c6ac3 | csdl-bieu-07 | qa | dev | **done** | edit_page XLS · e2e S0/S1/QA-20 + T-XLS-QA-01 PASS · Import ẩn P1 · verdict PASS |
| task_a4e8f967 | csdl-bieu-07 | review | qa | **done** | edit_page XLS · review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · hash skip |

## Blockers / open questions

- (none) · Q-XLS-* **chốt** · FILENAME `.xls` verified · Import DEFER P1
- **Cấm** golden hồ sơ 12+8 · **cấm** GAP-FILTER-BAR-08 · **cấm** merge SHOULDER sheet
- Review PASS · phase=**done** · debt: Import P1 · T-PERM-01 · GAP-QA-E2E-PW-01 P2

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html`
- handoff: `specs/csdl-bieu-07/handoff/review-compact.md`
- findings: `specs/csdl-bieu-07/review/findings.md`
- scenarios: `specs/csdl-bieu-07/qa/scenarios.md`
- implement: `specs/csdl-bieu-07/implement/csdl-bieu-07.md`
- task: `specs/csdl-bieu-07/task/csdl-bieu-07.md`
- solution: `specs/csdl-bieu-07/be/solution-discovery.md`
- epic: `docs/context/features/csdl-export-print.md` · `T-XLS-S07`
