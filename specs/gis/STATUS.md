# STATUS — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/gis-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.Master**) |
| mfeStdRoute | `/gis` |
| mfeStdUrl | `http://localhost:9302/gis` |
| taskId | `task_026922f7` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| versionMismatchAction | `keep_current` → Autopilot recheck analy (missing real-data) · SSOT=`2026.08.25.01` |
| contentHash | `sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0` |
| updatedAt | `2026-08-25T15:21:55.936Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD · Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Gis` |
| design_confirm | approve | prototype + reviewUrl (giữ) |
| solution_confirm | approve | SA · RMMS Gis only (giữ) |
| route_confirm | `/gis` | keep |
| review_confirm | approve | findings.md (prior) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/gis-control-hint.md` + `gis-real-data.md` | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/gis.md | **done** |
| 4 | dev | implement/gis.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **confirmed** |
## Analy DoR (`task_026922f7`)

| Check | Result |
|-------|--------|
| mode | `feature_context` (queue roleOnly — skip AskQuestion mode) |
| `gis-control-hint.md` | PASS · § Delta · packKind=`map` |
| `gis-real-data.md` | PASS · §A+§B+§D |
| hash skip | N/A — real-data missing → RUN |
| PO/Design/Dev/QA this task | **cấm** · not started |
| yarn build / e2e / start:std | **cấm** (roleOnly=data_analy) |

## Tasks (prior ship — giữ)

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

- None open analy. DEFER: PostGIS tiles · SignalR · Cesium embed.
- Next chain: `roleOnly=po` (không enqueue trong task này).

## Links

- controlHint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-control-hint.md`
- realData: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-real-data.md`
- mfeStdUrl: `http://localhost:9302/gis`
- mfeStdRoute: `/gis`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- Prototype reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis/ui/prototype/gis-map-prototype.html`

## Close prior (`task_54063d94`)

- SSOT re-review: fixed **GAP-MAP-LINE-LEVEL** + **GAP-MAP-LINE-FOCUS** on Kind F `/gis`
- BE unchanged (`api/v1/gis` + BFF) — already aligned DOMAIN-MAP
- Verify gate 2026-08-10: FE typecheck/build + BE Release **PASS**

## Retry / this turn

- from: `data_analy` · task `task_026922f7` · `edit_page` · Autopilot
- reason: thiếu `gis-real-data.md` → **must** `/agent-data-analy` feature_context
- completed: control-hint + real-data · STATUS pipeline 0b done · roles sau pending

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.01 · rulesVersion=2026.08.25.4 · versionGate=rechecked · versionMismatchAction=keep_current→recheck_analy · contentHash=sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0 -->
