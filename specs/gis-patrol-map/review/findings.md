# Review findings — gis-patrol-map

> Status: **done**  
> Mode: `review_only` · autoApprove=**ON** · `review_confirm`=**done**  
> reviewHash: `sha256:92e744a0988d8843a5c0a22d340eb35fc683a7b9852631ece9126d6a33876998` · rulesVersion: `2026.09.12.2`

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_92f62e9b` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| route_confirm | `route_keep` `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9302/gis-patrol-map` (QA runtime) · alias `/gis-patrol-map` · live `/gis/tuan-duong` |
| prior QA | `task_e337c304` · S0/S1/QA-20 **PASS** · `qa/screens/manifest.json` ok=true |
| live shell | **skip** roleOnly=review · **cấm** start:std · evidence = QA manifest + code spot-check |
| hashSkip | **no** · prior reviewHash reset (edit cycle Delta) · contentHash ≠ prior findings |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI map | `Linm.Web.RMMS.Gis` · `GisPatrolMapPage` · MAP-HOST/MAP-BAR · LAYER-ASSIGNED/KMPOST · MAP-POPUP-INSPECT · GALLERY-PATROL |
| BE | `Linm.RMMS.WebService` · `api/v1/patrol/sessions` (+ check-ins · AssignedSegments) · **cấm ERP.*** |
| BFF/files | `web-bff/api/v1/patrol/*` · `web-bff/api/v1/files/*` · FileService.Bff |
| Delta | REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · keep PHOTO |

## Findings

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-Q-01 | query | — | `patrolEndpoint` → `/patrol/sessions` + `/{id}/check-ins` · `AssignedSegments` · chainage cite `gis/chainage` · PhotoLocalIds guid | list+inspect | **PASS** |
| REV-S-01 | security | P2 | `[RequirePermission]` TODO stub peer Auth · Controllers Patrol* | Auth DEFER | **Debt** keep |
| REV-S-02 | security | — | files resign guid only · no FilesController invent · 0 ERP.* · 0 OSM.org tile on clip | gallery+basemap | **PASS** HARD |
| REV-UI-01 | ui-fn | — | SCR-MAP tabs/list/track/pins · FILTER-BAR · REAL-01 no FALLBACK when sessions | QA S0/S1 | **PASS** |
| REV-UI-02 | ui-fn | — | MAP-POPUP-INSPECT PIN-02 (tên/mã/chainage/GPS6dp/giờ) + GALLERY-PATROL | QA-20 | **PASS** |
| REV-UI-DELTA | ui-fn | — | LAYER-ASSIGNED bake+clamp · LAYER-KMPOST · FIT fitBounds · KM-EMPTY · BASE clip | code `assignedLayers` + page | **PASS** |
| REV-UI-MAP-R1-11 | ui-fn | — | OMS R1–R11: `attachVnClipBasemap` · `fitVnClipMap` · host→bar · OSRM · panes | code+QA | **PASS** |
| REV-UI-LAYOUT-06 | ui-fn | — | Kind B list shell | N/A map pack | **N/A** |
| REV-UI-FILTER-* | ui-fn | — | filter bar Kind B form | N/A map | **N/A** |
| REV-UI-FORM-GRID-05 | ui-fn | — | full form 5-col | N/A read-only map | **N/A** |
| REV-BE-01 | be-fn | — | `PatrolSessionService` · AssignedSegments + PhotoLocalIds guid · migration=none | DTO/service | **PASS** |
| REV-BE-02 | be-fn | — | `PatrolDataScope` TDTK/MANAGER/Admin · domain Patrol only · 0 ERP.* | path scan | **PASS** |
| REV-INFO-01 | info | P3 | FileService seed blob may 404 | gallery toast | Accept · known QA debt |
| REV-INFO-02 | info | P3 | Packet mfeStdUrl :9301 vs QA start:std :9302 (Mobile occupied) | runtime note | Accept · document |

**P0/P1 open:** none · **fix_gaps:** none

## Query (`/review-query`)

- FE SSOT `services/patrol/endpoint.ts` · BASE `/patrol/sessions` · BFF under `web-bff/api/v1`
- Check-ins → `asFileServiceGuids` → gallery getObject · chainageLabel from DTO / `gis/chainage` cite
- Tenant: `PatrolDataScope` + `allowed_company_ids` · SHARE=`tenant_keep` · XCO=`xco_get_only`
- Sessions enrich `AssignedSegments` for LAYER-ASSIGNED · N+1: page list + per-session check-ins cache · P1 OK

## Security

- JWT/BFF peer · FormMode View read-only P1 · no map write PATCH
- Permission attribute stub = peer debt (**REV-S-01** P2) · **cấm** invent FilesController
- Media: guid ids only · blob/object preview · **cấm** persist presigned as `<img src>`
- No secrets in FE patrol path · **0** ERP.* / openstreetmap.org / Esri CDN on MFE clip page

## UI / BE function · OMS map · Delta

- R1 live Leaflet + `attachVnClipBasemap` · **BASE-01** · **cấm** OSM.org/Esri/Google CDN
- LAYER-ASSIGNED bake OSRM + KM_POST clamp (**LAYER-01**/**KMPOST-01**) · FIT-01 `fitBounds` on person select
- REAL-01: seed plan only when API zero sessions · KM-EMPTY empty-ok · CHAIN-01 chainageLabel
- PIN-02 HARD fields in `GisPatrolInspectPanel` · PHOTO guid resign GALLERY-PATROL
- R3–R11 OMS-KEEP · FormMode View · **0** `window.alert`/`confirm` · Leave N/A dirty
- QA e2e S0/S1/QA-20 PASS · manifest ok=true · compile KM_POST tooltip fix carried

## Confirm

`review_confirm` = **done** (autoApprove ON) · verdict **PASS** · no Dev fix_gaps

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Debt (carry)

- REV-S-01 Auth `RequirePermission` stub P2 · CommonLib ≥1.4.0 when available  
- REV-INFO-01 FileService seed blobs may 404  
- REV-INFO-02 port SSOT :9301 vs start:std :9302 when Mobile occupies :9301  
- LAYER-ASSIGNED empty when bake/OSRM index miss (track/pins still paint)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.2 |
| reviewHash | `sha256:92e744a0988d8843a5c0a22d340eb35fc683a7b9852631ece9126d6a33876998` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| generatedAt | 2026-09-30T16:01:38.511Z |
| versionGate | rechecked |
| taskId | task_92f62e9b |

<!-- Version meta: skillId=agent-review · skillVersion=2026.09.05.03 · reviewHash=sha256:92e744a0988d8843a5c0a22d340eb35fc683a7b9852631ece9126d6a33876998 · review_confirm=done · verdict=PASS -->
