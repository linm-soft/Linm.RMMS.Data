# Review findings — gis-patrol-map

> Status: **done**  
> Mode: `review_only` · autoApprove=**ON** · `review_confirm`=**done**  
> reviewHash: `sha256:f2ab1a14889d9ec2a9de6e514a19bc00b2728901e49b6c73abac84f83d67a788` · rulesVersion: `2026.09.12.2`

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_3a72c9b1` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| route_confirm | `route_keep` `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` · alias + live `/gis/tuan-duong` |
| prior QA | `task_e57e18ab` · S0/S1/QA-20 **PASS** · `qa/screens/manifest.json` |
| live shell | **skip** roleOnly=review · **cấm** start:std · evidence = QA manifest + code spot-check |
| hashSkip | **no** · prior `REVIEW-META` draft autoCreated |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI map | `Linm.Web.RMMS.Gis` · `GisPatrolMapPage` · MAP-HOST/MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL |
| BE | `Linm.RMMS.WebService` · `api/v1/patrol/sessions` (+ check-ins) · **cấm ERP.*** |
| BFF/files | `web-bff/api/v1/patrol/*` · `web-bff/api/v1/files/*` · FileService.Bff |
| Delta | leftover map + GAP-MAP-PATROL-PHOTO-01 gallery guid resign |

## Findings

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-Q-01 | query | — | `patrolEndpoint` → `/patrol/sessions` + `/{id}/check-ins` · PhotoLocalIds guid CSV | list+inspect | **PASS** |
| REV-S-01 | security | P2 | `[RequirePermission]` TODO stub peer Auth | Auth DEFER | **Debt** keep |
| REV-S-02 | security | — | files getObject blob · guid only · no FilesController invent · no ERP.* | gallery path | **PASS** HARD |
| REV-UI-01 | ui-fn | — | SCR-MAP tabs/list/track/pins VN labels | QA S0/S1 | **PASS** |
| REV-UI-02 | ui-fn | — | MAP-POPUP-INSPECT + GALLERY-PATROL · `GisInspectImageGallery` | QA-20 | **PASS** |
| REV-UI-MAP-R1-11 | ui-fn | — | OMS R1–R11: clip basemap · fitVnClipMap · host→bar · OSRM snap · aria titles · panes | code+QA | **PASS** |
| REV-UI-LAYOUT-06 | ui-fn | — | Kind B list shell | N/A map pack | **N/A** |
| REV-UI-FILTER-* | ui-fn | — | filter bar Kind B | N/A map | **N/A** |
| REV-UI-FORM-GRID-05 | ui-fn | — | full form 5-col | N/A read-only map | **N/A** |
| REV-BE-01 | be-fn | — | PatrolSessionsController · PhotoLocalIds guid validate · migration=none | DTO/service | **PASS** |
| REV-BE-02 | be-fn | — | domain Patrol only · company claim filter | path scan | **PASS** |
| REV-INFO-01 | info | P3 | FileService seed blob may 404 | gallery error toast | Accept · known QA debt |

**P0/P1 open:** none · **fix_gaps:** none

## Query (`/review-query`)

- FE SSOT `services/patrol/endpoint.ts` · BASE `/patrol/sessions` · BFF under `web-bff/api/v1`
- Check-ins bind `photoLocalIds` → `asFileServiceGuids` → gallery getObject
- Tenant: `PatrolSessionService` `allowed_company_ids` claim · SHARE=`tenant_keep`
- N+1: sessions page + per-session check-ins cache in page ref · no nested OOM gap for map P1

## Security

- JWT/BFF peer · XCO get_only (SA locked)
- Permission attribute stub = peer debt (**REV-S-01** P2) · **cấm** invent FilesController
- Media: guid ids only · blob/object preview · **cấm** persist presigned as `<img src>`
- No secrets in FE patrol path · **0** ERP.* / openstreetmap.org tile on MFE clip

## UI / BE function · OMS map

- R1 live Leaflet + attachVnClipBasemap · **cấm** OSM.org/Esri/Google CDN
- R3/R4/R4b/R4c: MAP-BAR aria/title · full/dock toggle · host→bar (no isolate legend)
- R7/R7b/R8/R9: line panes · `snapPatrolTrack` / OSRM index · projectToPath pins
- R10/R11: inspect overlay · `fitVnClipMap` load + minZoom clip
- GALLERY-PATROL popup + Chi tiết parity (PO/Design locked) · FileService resign
- FormMode View read-only P1 · **0** `window.alert`/`confirm` · Leave N/A dirty
- QA e2e S0/S1/QA-20 PASS · GAP-MAP-PATROL-PHOTO-01 **CLOSED** (seed 404 info only)

## Confirm

`review_confirm` = **done** (autoApprove ON) · verdict **PASS** · no Dev fix_gaps

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Debt (carry)

- REV-S-01 Auth `RequirePermission` stub P2  
- REV-INFO-01 FileService seed blobs may 404  
- Auth CommonLib ≥1.4.0 wire when available  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.2 |
| reviewHash | `sha256:f2ab1a14889d9ec2a9de6e514a19bc00b2728901e49b6c73abac84f83d67a788` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| generatedAt | 2026-09-12T07:00:00.000Z |
| versionGate | rechecked |
| taskId | task_3a72c9b1 |

<!-- Version meta: skillId=agent-review · skillVersion=2026.09.05.03 · reviewHash=sha256:f2ab1a14889d9ec2a9de6e514a19bc00b2728901e49b6c73abac84f83d67a788 · review_confirm=done · verdict=PASS -->
