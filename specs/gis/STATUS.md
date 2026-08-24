# STATUS — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| phase | `data_analy` |
| status | `in_progress` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/gis-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.Master**) |
| mfeStdRoute | `/gis` |
| mfeStdUrl | `http://localhost:9302/gis` |
| taskId | `task_54063d94` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| versionMismatchAction | `keep_current` (Autopilot · SSOT file=`2026.08.09.02`) |
| updatedAt | `2026-08-24T15:38:11.296Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD · Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Gis` |
| design_confirm | approve | prototype + reviewUrl |
| solution_confirm | approve | SA · RMMS Gis only |
| route_confirm | `/gis` | keep |
| review_confirm | approve | findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/gis-control-hint.md` | **paused** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/gis.md | **pending** |
| 4 | dev | implement/gis.md | **pending** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | gis | dev | — | done | |
| T-PERM | gis | dev | — | done | JWT TODO |
| T-BE-01 | map | dev | — | done | layers+geojson+heatmap |
| T-BE-02 | map | dev | T-BE-01 | done | BFF proxy |
| T-UI-MAP | /gis | dev | — | done | Kind F · OMS R7b/R7c |
| T-FE-CLIENT | client | dev | T-BE-01,T-UI-MAP | done | fallback seed |
| T-QA-01 | gis | qa | T-UI-MAP,T-BE-02 | done | scenarios.md |
| T-RV-01 | gis | review | T-QA-01 | done | findings.md |

## Blockers / open questions

- None open. DEFER: PostGIS tiles · SignalR · Cesium embed.

## Links
- mfeStdUrl: `http://localhost:9302/gis`
- mfeStdRoute: `/gis`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- Prototype reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis/ui/prototype/gis-map-prototype.html`

## Close (`task_54063d94`)

- SSOT re-review: fixed **GAP-MAP-LINE-LEVEL** + **GAP-MAP-LINE-FOCUS** on Kind F `/gis`
- BE unchanged (`api/v1/gis` + BFF) — already aligned DOMAIN-MAP
- Verify gate 2026-08-10: FE typecheck/build + BE Release **PASS**
- Version: `keep_current` vs SSOT `2026.08.09.02`

## Retry

- from: `data_analy` · at: `2026-08-08T16:05:36.535Z` · completed by Autopilot executor `task_183d3ddf`
- implement close: `task_54063d94` · OMS R7b/R7c · 2026-08-10

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok · versionMismatchAction=keep_current -->
