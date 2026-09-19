# STATUS — csdl-bieu-05

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` · T-XLS-S05 · Wave 1 export |
| demo | N/A |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-05.md` |
| epic | `docs/context/features/csdl-export-print.md` · `T-XLS-S05` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-17T21:12:51.053Z` |
| data_analy | `done` · control-hint + real-data · compact `handoff/data_analy-compact.md` · task `task_a1caeb3f` · edit_page export |
| po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` · task `task_95f9a16f` · delta export · Q-XLS-* chốt |
| design | `confirmed` · `ui/design.md` · prototype + reviewUrl · compact `handoff/design-compact.md` · task `task_8d9445b7` · toolbar Xuất · Import DEFER P1 |
| sa | `confirmed` · `be/solution-discovery.md` · compact `handoff/sa-compact.md` · task `task_c949c568` · export filter-all · `.xls` · Import DEFER |
| team_lead | `confirmed` · `task/csdl-bieu-05.md` · compact `handoff/team_lead-compact.md` · task `task_1a82385e` · T-XLS-* · route keep |
| dev | `done` · `implement/csdl-bieu-05.md` · compact `handoff/dev-compact.md` · task `task_e8abedcb` · yarn+dotnet PASS |
| qa | `confirmed` · `qa/scenarios.md` · compact `handoff/qa-compact.md` · task `task_b9a2f418` · T-XLS-QA-01 PASS · e2e S0/S1/QA-20 |
| review | `confirmed` · `review/findings.md` · compact `handoff/review-compact.md` · task `task_0a8478f7` · verdict PASS · review_confirm approve |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-05-control-hint.md · csdl-bieu-05-real-data.md | **confirmed** |
| 1 | po | po/requirement.md (delta export · keep typed AC) | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl (toolbar Xuất) | **confirmed** |
| 2.2 | sa | be/solution-discovery.md (export/import binary) | **confirmed** |
| 3 | team-lead | task/csdl-bieu-05.md | **confirmed** |
| 4 | dev | implement · `/implement-export-import-excel` | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-XLS-S05 | csdl-bieu-05 | — | T-XLS-ENG | **done** | Wave 1 · Xuất Excel sheet Biểu 5 · 18 cột · filtered · export_only_p0 |
| T-XLS-BE-01..02 | csdl-bieu-05 | Dev | T-CTX-XLS-01 | **done** | export filter-all · golden Biểu 5 · filename `.xls` · ditchKind QS |
| T-XLS-BFF-01 | csdl-bieu-05 | Dev | T-XLS-BE-01 | **done** | binary proxy KEEP |
| T-XLS-FE-01..02 | csdl-bieu-05 | Dev | T-XLS-BFF-01 | **done** | toolbar Xuất · blob + QS |
| T-XLS-QA-01 | csdl-bieu-05 | QA | T-XLS-FE-02 | **done** | AC-XLS-01..09 · S0/S1/QA-20 PASS · filename `.xls` |
| T-XLS-REV-01 | csdl-bieu-05 | Review | T-XLS-QA-01 | **done** | QUERY/SEC/UI-FN/BE-FN PASS · approve |
| T-OUT-01 | csdl-bieu-05 | Dev | — | **DEFER P1** | Import UI/API ẩn · supersede skip-bridge |
| (prior) T-DM..T-REV | csdl-bieu-05 | — | — | done | typed CRUD pipeline · **cấm** reopen new_page |

## Blockers / open questions

- Q-XLS-SCOPE = **filtered** · Q-XLS-IMPORT = **export_only_p0** · Q-XLS-FILENAME = `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` (**SA chốt `.xls`**)
- Export mode = **filter-all** · **cấm** streaming P0 (SA chốt)
- ORG P2 · Auth DEFER (keep)
- **Cấm** toast stub = done · **cấm** filter-bar export · golden ≠ 12+8
- SA residual: **closed** · TL open Q: **none**
- Dev: **done** · yarnBuild PASS · dotnetBuild PASS
- QA: **confirmed** · T-XLS-QA-01 PASS · e2e runtime PASS · GAP-QA-E2E-PW-01 open P2
- Review: **confirmed** · verdict PASS · review_confirm approve · **0** fix_gaps
- Next: pipeline complete @ roleOnly=review · debt Import P1 / T-PERM-01 / ORG P2

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach`
- hub: `/so-ts/csdl-so-sach?resource=ditches`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html`
- handoff: `…/handoff/data_analy-compact.md` · `…/handoff/po-compact.md` · `…/handoff/design-compact.md` · `…/handoff/sa-compact.md` · `…/handoff/team_lead-compact.md` · `…/handoff/dev-compact.md` · `…/handoff/qa-compact.md` · `…/handoff/review-compact.md`
- epic: `docs/context/features/csdl-export-print.md`
- solution: `specs/csdl-bieu-05/be/solution-discovery.md`
- task: `specs/csdl-bieu-05/task/csdl-bieu-05.md`
- implement: `specs/csdl-bieu-05/implement/csdl-bieu-05.md`
- scenarios: `specs/csdl-bieu-05/qa/scenarios.md`
- findings: `specs/csdl-bieu-05/review/findings.md`
