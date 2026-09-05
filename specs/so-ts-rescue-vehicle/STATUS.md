# STATUS — so-ts-rescue-vehicle

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-vehicle` |
| phase | `sa` |
| status | `pending` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rescue-vehicle.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-rescue-vehicle` |
| mfeStdUrl | `http://localhost:9301/so-ts-rescue-vehicle` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| designCompact | `specs/so-ts-rescue-vehicle/handoff/design-compact.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html` |
| design_confirm | `approve` |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| updatedAt | `2026-09-01T21:21:27.189Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-rescue-vehicle-control-hint.md · so-ts-rescue-vehicle-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **blocked** (failed) |
| 3 | team-lead | task/so-ts-rescue-vehicle.md | pending |
| 4 | dev | implement/so-ts-rescue-vehicle.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_e3204624 | so-ts-rescue-vehicle | data_analy | — | completed | handoff compact written |
| task_0f384c26 | so-ts-rescue-vehicle | po | data_analy | completed | requirement + po-compact |
| task_62893289 | so-ts-rescue-vehicle | design | po | completed | design.md + prototype + design-compact |

## Blockers / open questions

- none (Design autopilot chốt · defer SA: dump key map · LOOKUP seed · DefaultCodePrefix XH-)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- handoff: `specs/so-ts-rescue-vehicle/handoff/design-compact.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html`
- mfeStdUrl: `http://localhost:9301/so-ts-rescue-vehicle`
- mfeStdRoute: `/so-ts-rescue-vehicle`
- peerStdUrl: `http://localhost:9301/so-ts?type=RESCUE_VEHICLE`
