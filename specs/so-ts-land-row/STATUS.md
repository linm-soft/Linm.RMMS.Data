# STATUS — so-ts-land-row

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-land-row.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-land-row` |
| mfeStdUrl | `http://localhost:9301/so-ts-land-row` |
| alias | `/so-ts-land-row` (board-only · optional redirect) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T09:04:41.459Z` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| contentHash | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_e0cf058d | 2026-09-01T09:05:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-land-row-control-hint.md · so-ts-land-row-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/so-ts-land-row.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/so-ts-land-row.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_76d3fd4a | so-ts-land-row | data_analy | — | completed | control-hint + real-data + compact · type LAND_ROW · cluster land |
| task_d3a42912 | so-ts-land-row | po | data_analy | completed | requirement + compact · packKind list · prefix DT- · lookup Dropdown · Grid/Leave AC PASS |
| task_0abc91dc | so-ts-land-row | design | po | completed | design.md + prototype + reviewUrl + compact · design_confirm approve · Kind B · S-LOC-RANGE · DT- |
| task_6047e0c0 | so-ts-land-row | sa | design | completed | solution-discovery + sa-compact · solution_confirm approve · dumpSpecs P1 · DT- · T-LAND-* |
| task_0d0d2e8b | so-ts-land-row | team_lead | sa | completed | task pack + team_lead-compact · route_a · T-* matrix · Dev next |
| task_b507cea8 | so-ts-land-row | dev | team_lead | completed | LAND_ROW profile · S-ATTR · LOOKUP · DT- · Leave · yarn/dotnet build PASS · QA next |
| task_0d749c2e | so-ts-land-row | qa | dev | completed | scenarios + e2e S0/S1/QA-20 PASS · qa-compact · Review next |
| task_e0cf058d | so-ts-land-row | review | qa | completed | findings PASS · review_confirm approve · review-compact · QUERY/SEC/UI-FN/BE-FN |

## Blockers / open questions

- none (Review DoR PASS · review_confirm=approve · P0/P1 none · info debt QA-E2E/FLAT/Auth DEFER · **cấm** phase=done)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts-land-row`
- mfeStdRoute: `/so-ts-land-row`
- alias: `http://localhost:9301/so-ts-land-row`
- live filter: `http://localhost:9301/so-ts?type=LAND_ROW`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html`
- handoff: `specs/so-ts-land-row/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- screens: `specs/so-ts-land-row/qa/screens/` · manifest ok
- findings: `specs/so-ts-land-row/review/findings.md`
