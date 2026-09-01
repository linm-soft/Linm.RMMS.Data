# STATUS — so-ts-rescue-station

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| phase | `qa` |
| status | `await_confirm` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rescue-station.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=RESCUE_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T02:58:15.511Z` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| dataAnalyAt | `2026-09-01T01:55:00.000Z` |
| poAt | `2026-09-01T02:15:00.000Z` |
| designAt | `2026-09-01T02:35:00.000Z` |
| saAt | `2026-09-01T02:45:00.000Z` |
| teamLeadAt | `2026-09-01T09:25:00.000Z` |
| devAt | `2026-09-01T09:45:00.000Z` |
| handoffCompact | `specs/so-ts-rescue-station/handoff/dev-compact.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html` |
| route_confirm | `route_a` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| dev | feature | task_2f84d6b5 | 2026-09-01T09:45:00.000Z · **released** (DoR PASS · handoff QA) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-rescue-station-control-hint.md · so-ts-rescue-station-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/so-ts-rescue-station.md | **confirmed** |
| 4 | dev | implement/so-ts-rescue-station.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_ce7b30e4 | so-ts-rescue-station | data_analy | — | **done** | control-hint + real-data + compact · handoff PO |
| task_cdbd698e | so-ts-rescue-station | po | task_ce7b30e4 | **done** | requirement + po-compact · handoff Design · autoApprove ON |
| task_64104e4c | so-ts-rescue-station | design | task_cdbd698e | **done** | design.md + prototype + design-compact · design_confirm approve · handoff SA |
| task_784c6afd | so-ts-rescue-station | sa | task_64104e4c | **done** | solution-discovery + sa-compact · solution_confirm approve · handoff TL |
| task_1b274dc7 | so-ts-rescue-station | team_lead | task_784c6afd | **done** | task pack + team_lead-compact · route_a · handoff Dev |
| task_2f84d6b5 | so-ts-rescue-station | dev | task_1b274dc7 | **done** | implement + FE/BE + compact · handoff QA · e2e queued |

## Blockers / open questions

- none · debt: yarn build default parallel OOM Node24 → `--parallelism=1`

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts?type=RESCUE_STATION`
- mfeStdRoute: `/so-ts?type=RESCUE_STATION`
- alias board: `/so-ts-rescue-station` (optional redirect)
- live filter: `/so-ts?type=RESCUE_STATION`
- peerStdUrl: `http://localhost:9301/so-ts?type=RESCUE_STATION`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html`
- compact: `specs/so-ts-rescue-station/handoff/dev-compact.md`
- implement: `specs/so-ts-rescue-station/implement/so-ts-rescue-station.md`
- task: `specs/so-ts-rescue-station/task/so-ts-rescue-station.md`
- sa: `specs/so-ts-rescue-station/be/solution-discovery.md`
- design: `specs/so-ts-rescue-station/ui/design.md`
