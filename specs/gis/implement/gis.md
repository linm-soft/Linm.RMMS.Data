# Implement — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| status | `done` |
| taskId | `task_54063d94` |
| mfeStdRoute | `/gis` |
| mfeStdUrl | `http://localhost:9302/gis` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| versionMismatchAction | `keep_current` |
| updatedAt | `2026-08-10T02:10:00.000Z` |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| LinPageLayout / CatalogListShell | N/A Kind F |
| CatalogListPagination | N/A |
| flex + skeleton | map-host flex · loading overlay |
| toolbar | zone B actions |
| OMS R1 live Leaflet | PASS |
| OMS R2 basemap OSM/Esri/sat | PASS |
| OMS R3 title/aria | PASS |
| OMS R4b full flex | PASS (full mode) |
| OMS R4c host→bar→legend | PASS |
| OMS R5b sat maxNativeZoom 17 | PASS |
| OMS R7b corridor + track panes | **FIXED** `mapLineLevels.ts` · corridorStyle + trackLineStyle |
| OMS R7c isolate + Fit focus | **FIXED** legend/line/table · `fitIsolateSelection` |
| OMS R8/R9 OSRM route + snap | PASS |
| OMS R11 Fit overview ≤13 | PASS |

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-CTX | done | context + demo + controlHint |
| T-PERM | done | JWT TODO (health pattern) |
| T-BE-01 | done | layers · geojson · heatmap seed |
| T-BE-02 | done | BFF proxy |
| T-UI-MAP | done | Kind F `/gis` · R7b/R7c |
| T-FE-CLIENT | done | BFF + local-seed fallback |
| T-UI-FORM | skipped | P1 out of scope |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/pages/GisListPage/GisListPage.tsx` — Kind F monitor + isolate
- `src/shared/map/mapLineLevels.ts` — R7b/R7c helpers
- `src/demo/useLeaflet.ts` · `gisMapSeed.ts`
- `src/services/gis/endpoint.ts` · `mapModels.ts`
- `src/shared/map/*` — MapPointConfig · OSRM helpers · icons

### BE (`Linm.RMMS.WebService`)

- `api/domains/gis/.../DTOs/GisMapDtos.cs`
- `Domains/Gis/Services/GisMapSeed.cs` · `GisService.cs` · `IGisService.cs`
- `Domains/Gis/Controllers/GisMapController.cs`
- `bff/domains/gis/.../GisBffController.cs`

## Verify (`task_54063d94` · 2026-08-10)

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | PASS |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS |
| BE `dotnet build Linm.RMMS.WebService.sln -c Release` | PASS (0 errors) |

## Debt

- PostGIS / vector tiles PBF — DEFER
- SignalR GisHub — stub status only
- Unit tests — pending
- Cesium Twin embed — link/badge only
- JWT Authorize — TODO when platform auth lands

## Permissions

Local mode OK · Authorize TODO when platform auth lands.

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok · versionMismatchAction=keep_current -->
