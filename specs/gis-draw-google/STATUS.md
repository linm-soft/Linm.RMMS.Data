# STATUS — gis-draw-google

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| phase | `data_analy` |
| status | `in_progress` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/gis/gis-draw-google.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-draw-google.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.***) |
| mfeStdRoute | `/gis/ha-tang` |
| mfeStdUrl | `http://localhost:9302/gis/ha-tang` |
| taskId | `task_e8a0c8a8` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-23T16:57:19.849Z` |
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
| route_confirm | `/gis/ha-tang` | keep |
| review_confirm | approve | findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/gis-draw-google.md | **pending** |
| 4 | dev | implement/gis-draw-google.md | **pending** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | gis-draw-google | dev | — | done | |
| T-PERM | gis-draw-google | dev | — | done | JWT TODO |
| T-BE-01 | map | dev | — | done | basemap + drawings |
| T-BE-02 | map | dev | T-BE-01 | done | BFF proxy |
| T-UI-MAP | /gis/ha-tang | dev | — | done | Kind F · OMS |
| T-FE-CLIENT | client | dev | T-BE-01,T-UI-MAP | done | BFF + fallback |
| T-QA-01 | gis-draw-google | qa | T-UI-MAP,T-BE-02 | done | scenarios.md |
| T-RV-01 | gis-draw-google | review | T-QA-01 | done | findings.md |

## Blockers / open questions

- None open. DEFER: Google JS key · snap Roads API · multi-user lock · PostGIS persist.

## Links
- mfeStdUrl: `http://localhost:9302/gis/ha-tang`
- mfeStdRoute: `/gis/ha-tang`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- Prototype reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-google/ui/prototype/gis-draw-google-prototype.html`

## Close (`task_e8a0c8a8`)

- edit_page: mock localStorage → `api/v1/gis/liveings` + OMS R1–R11
- **2026-08-23 `/edit-web-feature`:** overlay DB **khu-2-gov** (`rmms_road_assets` → geojson) · skip `16,110` · Fit tổng quan
- **2026-08-23 import:** `RoadAssetCatalogHandler` upsert same-batch duplicate `code` + round/swap lat/lng (`decimal(12,8)`)
- **2026-08-23 verify:** geojson drawings **69** pin DB (65 cầu · 4 hầm) · `/gis/ha-tang` :9302 HTTP 200
- **2026-08-24 `/agent-dev-oms-map` R6/R6b:** pin QCVN pictogram = chú giải · bỏ vòng trắng · badge `status` DB
- **2026-08-24 `/edit-web-feature`:** click pin = inspect + tab Thuộc tính · không isolate (vẫn show all)
- BE only `Linm.RMMS.WebService` domain Gis
- Verify gate 2026-08-11: FE typecheck/build + BE Release **PASS**

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
