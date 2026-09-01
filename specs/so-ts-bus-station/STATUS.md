# STATUS — so-ts-bus-station

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| phase | `po` |
| status | `in_progress` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-station.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-bus-station` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-station` |
| liveFilter | `http://localhost:9301/so-ts?type=BUS_STATION` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset — **cấm ERP.*** |
| updatedAt | `2026-09-01T03:10:38.527Z` |
| dataAnaly | `done` · contentHash `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` · task `task_dc06532d` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-bus-station-control-hint.md · so-ts-bus-station-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **in_progress** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/so-ts-bus-station.md | pending |
| 4 | dev | implement/so-ts-bus-station.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

- PO: GAP-BX-LOOKUP-01 · GAP-BX-ROUTE-01 · grid hide-empty vs always-ON (DT / tuyến VT / DT sàn / cấp nhà)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- handoff compact: `specs/so-ts-bus-station/handoff/data_analy-compact.md`
- mfeStdUrl: `http://localhost:9301/so-ts-bus-station`
- mfeStdRoute: `/so-ts-bus-station`
- liveFilter: `/so-ts?type=BUS_STATION`
