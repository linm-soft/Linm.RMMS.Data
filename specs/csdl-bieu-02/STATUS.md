# STATUS — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-02.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hubRoute | `/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| updatedAt | `2026-09-05T08:33:57.414Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review DoR PASS · review_confirm=done · phase=done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-02-control-hint.md · csdl-bieu-02-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-02.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-02.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_dd8553f8 | csdl-bieu-02 | data_analy | — | **done** | control-hint + real-data + compact · packKind=list · resource=bridges · 48 cột |
| task_ba5815a6 | csdl-bieu-02 | po | data_analy | **done** | requirement + po-compact · Q chốt · Grid AC · Leave · packKind=list |
| task_388b210f | csdl-bieu-02 | design | po | **done** | design.md + prototype + design-compact · reviewUrl · design_confirm=approve · hash skip |
| task_547af74d | csdl-bieu-02 | sa | design | **done** | solution-discovery + sa-compact · Schema_CsdlBieu2 · GPS/LOAD/LEGACY · T-DM-01 · solution_confirm=approve |
| task_361a0ea2 | csdl-bieu-02 | team_lead | sa | **done** | task + team_lead-compact · route_a · T-* matrix · team_lead_confirm=approve |
| task_f8854c01 | csdl-bieu-02 | dev | team_lead | **done** | implement + Schema_CsdlBieu2 · FE alias · yarn+dotnet PASS · e2e queued QA |
| task_ac771056 | csdl-bieu-02 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · chrome fallback · qa-compact |
| task_38fe4842 | csdl-bieu-02 | review | qa | **done** | findings + review-compact · review_confirm=done · **0** fix_gaps · phase=done |

## Blockers / open questions

- none (review PASS · pipeline done · residual P2: Auth DEFER · migrate apply · GAP-QA-E2E-PW-01 · org/XLS)

## Links

- data-analy → po → ui → be → task → implement → qa → review → **done**
- mfeStdUrl: `http://localhost:9301/csdl-bieu-02`
- mfeStdRoute: `/csdl-bieu-02`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html`
- handoff: `specs/csdl-bieu-02/handoff/review-compact.md`
- findings: `specs/csdl-bieu-02/review/findings.md`
- screens: `specs/csdl-bieu-02/qa/screens/{S0,S1,QA-20}.png`
