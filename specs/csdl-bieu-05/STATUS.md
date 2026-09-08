# STATUS — csdl-bieu-05

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-05.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-05` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-05T07:11:48.925Z` |
| data_analy | `done` · control-hint + real-data · compact `handoff/data_analy-compact.md` · task `task_fdcb7c28` |
| po | `done` · `po/requirement.md` · compact `handoff/po-compact.md` · task `task_0ccf0f40` |
| design | `done` · `ui/design.md` + prototype + reviewUrl · compact `handoff/design-compact.md` · task `task_8881f84f` |
| sa | `done` · `be/solution-discovery.md` · compact `handoff/sa-compact.md` · task `task_e5779496` |
| team_lead | `done` · `task/csdl-bieu-05.md` · compact `handoff/team_lead-compact.md` · task `task_c0b3e6ef` |
| dev | `done` · `implement/csdl-bieu-05.md` · compact `handoff/dev-compact.md` · task `task_83252c99` · build PASS |
| qa | `done` · `qa/scenarios.md` · compact `handoff/qa-compact.md` · task `task_6983c8c2` · e2e S0/S1/QA-20 PASS · verdict PASS |
| review | `done` · `review/findings.md` · compact `handoff/review-compact.md` · task `task_d12c1bda` · verdict PASS · review_confirm approve |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-05-control-hint.md · csdl-bieu-05-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-05.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-05.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DM-01 | csdl-bieu-05 | Dev | — | done | DOMAIN-MAP → Asset |
| T-CTX-01 | csdl-bieu-05 | Dev | — | done | context sync |
| T-BE-01..05 | csdl-bieu-05 | Dev | T-DM | done | Entity/DTO/`Schema_CsdlBieu5` |
| T-BFF-01 | csdl-bieu-05 | Dev | T-BE-03 | done | proxy + ditchKind qs |
| T-UI-* | csdl-bieu-05 | Dev | T-BFF | done | LIST/FORM/FILTER · 18 cột |
| T-OUT-01 | csdl-bieu-05 | — | — | OUT | XLS/skip-bridge |
| T-QA-* | csdl-bieu-05 | QA | T-UI-* | done | e2e S0/S1/QA-20 PASS · `/agent-qa` |
| T-REV-01 | csdl-bieu-05 | Review | T-QA-* | done | findings PASS · approve |

## Blockers / open questions

- none · pipeline complete · GAP-QA-E2E-PW-01 P2 · Auth DEFER · ORG P2 · XLS OUT

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-05`
- mfeStdRoute: `/csdl-bieu-05`
- hub: `/so-ts/csdl-so-sach?resource=ditches`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html`
- handoff: `…/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
