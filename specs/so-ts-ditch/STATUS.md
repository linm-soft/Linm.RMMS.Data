# STATUS — so-ts-ditch

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ditch.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-ditch` |
| mfeStdUrl | `http://localhost:9301/so-ts-ditch` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T11:04:20.961Z` |
| data_analy | `done` · contentHash `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` · task `task_58be7ac6` |
| design | `confirmed` · `ui/design.md` · prototype `ui/prototype/so-ts-ditch-list-prototype.html` · compact `handoff/design-compact.md` · reviewUrl `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html` · task `task_5b77b576` |
| sa | `confirmed` · `be/solution-discovery.md` · compact `handoff/sa-compact.md` · solution_confirm=approve · task `task_8f67882d` |
| team_lead | `confirmed` · `task/so-ts-ditch.md` · compact `handoff/team_lead-compact.md` · route_confirm=`route_a` · task `task_4cb3181d` |
| dev | `done` · `implement/so-ts-ditch.md` · compact `handoff/dev-compact.md` · task `task_25267e6c` |
| qa | `confirmed` · `qa/scenarios.md` · compact `handoff/qa-compact.md` · verdict=PASS · task `task_10b1c919` |
| review | `confirmed` · `review/findings.md` · compact `handoff/review-compact.md` · review_confirm=done · verdict=PASS · task `task_ba1d67c1` |
| handoff | `specs/so-ts-ditch/handoff/review-compact.md` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-ditch-control-hint.md · so-ts-ditch-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/so-ts-ditch.md | **confirmed** |
| 4 | dev | implement/so-ts-ditch.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | so-ts-ditch | Dev | — | **done** | filter-bar.md |
| T-BE-CRUD-01 | so-ts-ditch | Dev | — | **done** | CD- · name optional · dumpSpecs P1 |
| T-BE-INIT-01 | so-ts-ditch | Dev | T-BE-CRUD-01 | **done** | ditchTypes · culvertShapes LOOKUP |
| T-UI-LIST-01 | so-ts-ditch | Dev | T-BFF-01 | **done** | DITCH profile · peer DITCH-only |
| T-UI-FILTER-01 | so-ts-ditch | Dev | T-CTX-01 | **done** | filter-bar V1–V5 |
| T-UI-FORM-01 | so-ts-ditch | Dev | T-UI-LIST-01 · T-BE-INIT-01 | **done** | S-ATTR · S-LOC-RANGE · CD- |
| T-UI-LEAVE-01 | so-ts-ditch | Dev | T-UI-FORM-01 | **done** | LeaveConfirmModal |
| T-QA-* | so-ts-ditch | QA | T-UI-* | **done** | e2e S0/S1/QA-20 PASS · chrome contract |
| T-REV-01 | so-ts-ditch | Review | T-QA-* | **done** | review_confirm=done · P0 none |

## Blockers / open questions

- (none · Review PASS · review_confirm=done · debt P2 flatten / Auth DEFER / QA-E2E info only)

## Links
- mfeStdUrl: `http://localhost:9301/so-ts-ditch`
- mfeStdRoute: `/so-ts-ditch`

- data-analy → po → ui → be → task → implement → qa → review
- live: `http://localhost:9301/so-ts?type=DITCH`
- alias board: `http://localhost:9301/so-ts-ditch`
- mfeStdRoute live: `/so-ts?type=DITCH`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html`
- scenarios: `specs/so-ts-ditch/qa/scenarios.md`
- findings: `specs/so-ts-ditch/review/findings.md`
- review-compact: `specs/so-ts-ditch/handoff/review-compact.md`
- screens: `specs/so-ts-ditch/qa/screens/` (manifest ok=true)
- implement: `specs/so-ts-ditch/implement/so-ts-ditch.md`
- solution: `specs/so-ts-ditch/be/solution-discovery.md`
