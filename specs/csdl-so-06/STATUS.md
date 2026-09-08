# STATUS — csdl-so-06

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-06.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-06` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubEntry | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| resource | `bridge-inspections` |
| route_confirm | `route_a` |
| yarnBuild | **PASS** |
| yarnTypecheck | **PASS** |
| dotnetBuild | **PASS** |
| qa_verdict | **PASS** |
| e2eQa | **PASS** (S0/S1/QA-20 · chrome capture · GAP-QA-E2E-PW-01) |
| review_confirm | **done** |
| review_verdict | **PASS** |
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| updatedAt | `2026-09-05T21:05:15.426Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| — | — | — | — · **released** (review DoR PASS · task_d3c248b6) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-so-06-control-hint.md · csdl-so-06-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md · prototype · reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-so-06.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-so-06.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_ff0beb8e | csdl-so-06 | data_analy | — | **done** | control-hint + real-data + compact · GAP-PKT-ROLE-01 |
| task_bc56fa9c | csdl-so-06 | po | data_analy | **done** | requirement + po-compact · open Q resolved · GAP-PKT-ROLE-01 |
| task_8dc712d5 | csdl-so-06 | design | po | **done** | design.md + prototype + design-compact · design_confirm approve · GAP-PKT-ROLE-01 |
| task_765e52bc | csdl-so-06 | sa | design | **done** | solution-discovery + sa-compact · solution_confirm approve · GAP-PKT-ROLE-01 |
| task_17056b99 | csdl-so-06 | team_lead | sa | **done** | task pack + team_lead-compact · route_a · team_lead_confirm approve · GAP-PKT-ROLE-01 |
| task_e9296e25 | csdl-so-06 | dev | team_lead | **done** | FE+BE typed So06 · yarn+dotnet PASS · GAP-PKT-ROLE-01 |
| task_81900df5 | csdl-so-06 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · qa-compact · GAP-PKT-ROLE-01 |
| task_d3c248b6 | csdl-so-06 | review | qa | **done** | review_confirm done · QUERY/SEC/UI-FN/BE-FN PASS · compact · GAP-PKT-ROLE-01 |

## Blockers / open questions

- (none — Review PASS · pipeline complete @ review)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-so-06`
- hubEntry: `/so-ts/csdl-so-sach?resource=bridge-inspections`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html`
- handoff: `specs/csdl-so-06/handoff/review-compact.md`
- findings: `specs/csdl-so-06/review/findings.md`
- screens: `specs/csdl-so-06/qa/screens/{S0,S1,QA-20}.png`
