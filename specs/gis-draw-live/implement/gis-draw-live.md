# Implement — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `map` |
| taskId | `task_b9cb81b3` |
| priorTaskId | `task_efbc1d08` |
| mfeStdRoute | `/gis/tai-san` |
| peerStdRoute | `/gis/draw` · `/gis` · `/gis/ha-tang` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| route_confirm | `/gis/tai-san` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `rechecked` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| updatedAt | `2026-09-06T20:57:00.000Z` |

## Scope

GAP NEW only (KEEP OMS/Carto/locate/props text):

| GAP | Done |
|-----|------|
| GAP-MAP-INSPECT-FILE-HARD | `filesEndpoint.getObject` · FileService.Bff reuse · **0** local FilesController |
| GAP-MAP-INSPECT-PHOTO-01 | Z-PHOTO 3 tabs · ImageGallery blob preview |
| GAP-MAP-INSPECT-XSECT-01 | Z-XSECT gallery · empty copy OK |
| GAP-MAP-INSPECT-KPI-01 | Z-KPI · soft toast · 3 GETs |
| GAP-MAP-OMS-KEEP | No paint change · R1–R11 KEEP |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-BE-GIS-01 | **done** | `summary-by-type?route=` · `work-orders?routeName=` · migration **none** |
| T-BE-FILE-01 | **done** | `AddLinmFileServiceBff` confirmed · FE `/files/{id}/object` |
| T-UI-MAP-01 | **done** | `/gis/tai-san` shell KEEP · no paint |
| T-UI-MAP-FORM-01 | **done** | PHOTO/XSECT/KPI + LeaveConfirmModal |
| T-PERM-01 | **done** | local-mode OK · JWT TODO platform |
| T-UI-UX-01 | **done** | zones + D/T/M dock · no alert native |
| T-QA-MAP-01 | pending | queued `/agent-qa*` |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/shared/map/GisAssetInspectPanel.tsx` — Z-PHOTO/XSECT/KPI
- `src/shared/map/GisInspectImageGallery.tsx` — getObject blob
- `src/shared/map/inspectFileIds.ts`
- `src/services/files/endpoint.ts`
- `src/services/gis/inspectKpi.ts` · `endpoint.ts` `getSummaryByType(route?)`
- `src/pages/GisDrawLivePage/GisDrawLivePage.tsx` — LeaveConfirm + item wire
- `src/pages/GisDrawLivePage/GisDrawLivePage.module.css`

### BE (`Linm.RMMS.WebService`)

- `GisService` / `GisMapController` / `GisBffController` — `?route=`
- `GisInventoryMapper` — `assetFileIds` · `patrolCheckFileIds` · `roadPatrolFileIds` · `xsectFileIds` (+ dumpSpecs parse)
- `WorkOrderService` / `WorkOrdersController` — `routeName` filter (BFF QS forward KEEP)

## APIs

| Op | Path |
|----|------|
| KPI assets | `GET …/gis/summary-by-type?route=` |
| KPI incidents | `GET …/incident/incidents?routeName=&page=1&pageSize=1` |
| KPI repairs | `GET …/maintenance/work-orders?routeName=` |
| Files preview | `GET …/files/{id}/object` (blob · **cấm** `/url` img src) |
| Map load | purpose=live KEEP |

## Build

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` | **PASS** (size warnings only) |
| BE `dotnet build … -c Release` | **PASS** (0 errors) |
| Migration / Step 4b | **none** (query-only) |

## Debt

- JWT Authorize codes — platform TODO (T-PERM prior)
- Empty galleries until DumpSpecs / source fileIds populated
- PostGIS persist / multi-user lock / commit→Asset — DEFER prior

## Handoff next

QA (`T-QA-MAP-01`) — PHOTO/XSECT/KPI empty + soft toast · Leave Modal · OMS smoke · **cấm** start:std ở Dev

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · taskId=task_b9cb81b3 · packKind=map -->
