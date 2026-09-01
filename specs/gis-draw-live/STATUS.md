# STATUS — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.***) |
| mfeStdRoute | `/gis/draw` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| taskId | `task_6e79dde5` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T01:18:00.000Z` |
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
| route_confirm | `/gis/live` | keep |
| review_confirm | approve | findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/gis-draw-live.md | **done** |
| 4 | dev | implement/gis-draw-live.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **done** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | gis-draw-live | dev | — | done | |
| T-PERM | gis-draw-live | dev | — | done | JWT TODO |
| T-BE-01 | map | dev | — | done | purpose=live + live basemap |
| T-BE-02 | map | dev | T-BE-01 | done | BFF query forward |
| T-UI-MAP | /gis/live | dev | — | done | Kind F · OMS |
| T-FE-CLIENT | client | dev | T-BE-01,T-UI-MAP | done | BFF + fallback |
| T-QA-01 | gis-draw-live | qa | T-UI-MAP,T-BE-02 | done | scenarios.md |
| T-RV-01 | gis-draw-live | review | T-QA-01 | done | findings.md |

## Blockers / open questions

- None open. DEFER: PostGIS persist · multi-user lock · commit → Asset.

## Links
- mfeStdUrl: `http://localhost:9302/gis/draw`
- mfeStdRoute: `/gis/draw`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- Prototype reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`

## Close (`task_6e79dde5`)

- edit_page: mock localStorage → `api/v1/gis/liveings` + OMS R1–R11 · default OSM
- BE only `Linm.RMMS.WebService` domain Gis · `purpose=live`
- Verify gate 2026-08-11: FE typecheck/build + BE Release **PASS**

## Edit (2026-09-01 `/edit-web-feature`)

- Bỏ header Dev/GIS/title · toolbar seed · bottom isolate legend
- Map dock flex fill remaining · click TS trên map không auto zoom
- Attribution ẩn Leaflet · `RMMS.vn` · bỏ map-bar meta cụm/TS
- Context lock: `ui/design.md` · `ui/ux-analy.md` · task · implement Notes

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
