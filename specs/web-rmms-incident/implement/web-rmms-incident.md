# Implement — web-rmms-incident

> Status: **done** · writtenAt `2026-09-26T04:45:00.000Z` · task `task_32cbc24f`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> role: `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-incident` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `mobile-bff/api/v1` · domain Incident (+ Patrol / Integration / AiVision) |
| Step 4b | **skip** · API/entity/migration **none** (SA · T-BE N/A) · cite existing `IncidentsController` |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |

## Delivered (T-01…T-06)

| id | DoD |
|----|-----|
| T-01 | Route `/web-rmms-incident` + nested `new` / `:id` · aliases `/incident*` · chunk `web-rmms-incident` |
| T-02 | INC-L Search+Chip status/severity · CardList Title/Type/Code/Route/Km/Status/**HasGps** · **no Lat** · FAB→new · live GET |
| T-03 | INC-N asset LookupGrid · kind Segment · checklist local→Description · photos≤10 · session stamp · GPS deny block · draft offline peer |
| T-04 | Detect Acc≤30 · POST create `HasGps=true` · DetectionId opt · **no Lat** · fail toast |
| T-05 | INC-D GET{id} · POST close Note opt · peer Vis/Chat/Estimate nav-only |
| T-06 | Mobile.Bff wire · useFormOptions · empty sessions toast · **cấm** itemsOrDemo |
| T-BE | N/A |

## Files (slim)

- `src/pages/WebRmmsIncident/*` — Layout · List · Create · Detail · paths · lookup · checklist · styles · aliases
- `src/services/incident/*` — getList / getById / close + cite camPatrol/fieldReflect
- `src/index.tsx` · `src/dev/devRoutes.ts` · shell/home paths · `IncidentTabPage`

## APIs (live Mobile.Bff)

- `GET/POST /incident/incidents` · `GET …/{id}` · `POST …/{id}/close`
- `GET /patrol/sessions` · `GET /integration/asset-types`
- `POST /ai-vision/uploads/*` · `POST /ai-vision/detect`

## Verify

- `yarn build` (MFE) — PASS (warnings size only)
- `dotnet build` (Api) — PASS
- E2E — **queued** `/agent-qa*` · not run in Dev

## Debt / note

- Lat column MIG deferred (GAP-PGC-BE-01) · peer INC-V/C/E full screens out of scope
- Shell tab SH-05 redirects to STD incident (no invent CRUD in shell)
