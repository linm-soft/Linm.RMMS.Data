# Implement — gis-draw-google

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| status | `done` |
| taskId | `task_e8a0c8a8` |
| mfeStdRoute | `/gis/draw-google` |
| mfeStdUrl | `http://localhost:9302/gis/draw-google` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:30:00.000Z` |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| LinPageLayout / CatalogListShell | N/A Kind F |
| CatalogListPagination | N/A |
| flex + skeleton | map-host flex · loading overlay |
| toolbar | zone B + map-bar |
| OMS R1 live Leaflet | PASS |
| OMS R2 basemap OSM/Esri/sat + Google proxy default | PASS (feature default Google · OSM VN on bar) |
| OMS R3 title/aria | PASS |
| OMS R4b full flex | PASS |
| OMS R4c host→bar→legend | PASS |
| OMS R5b sat maxNativeZoom 17 | PASS |
| OMS R7b corridor + track panes | PASS `corridorStyle` / `trackLineStyle` |
| OMS R7c isolate + Fit focus | PASS legend/line/results |
| OMS R8/R9 OSRM route + snap | PASS (fallback raw) |
| OMS R11 Fit overview ≤13 | PASS |

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-CTX | done | context + demo + control-map |
| T-PERM | done | JWT TODO (health pattern) |
| T-BE-01 | done | basemap-config · layers?purpose=draw · drawings CRUD |
| T-BE-02 | done | BFF proxy GET/POST/PUT/DELETE |
| T-UI-MAP | done | Kind F `/gis/draw-google` · OMS R1–R11 |
| T-FE-CLIENT | done | BFF + local-seed fallback |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/pages/GisDrawGoogleDemoPage/GisDrawGoogleDemoPage.tsx` — Kind F draw + OMS chrome
- `src/pages/GisDrawGoogleDemoPage/gisDrawHelpers.ts`
- `src/services/gis/endpoint.ts` · `gisService.ts` · `mapModels.ts`

### BE (`Linm.RMMS.WebService`)

- `api/domains/gis/.../DTOs/GisDrawingDtos.cs` · extend `GisMapDtos.cs`
- `Domains/Gis/Services/GisDrawingStore.cs` · `GisService.cs` · `IGisService.cs`
- `Domains/Gis/Controllers/GisMapController.cs`
- `bff/domains/gis/.../GisBffController.cs`

## Verify (`task_e8a0c8a8` · 2026-08-11)

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | PASS |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS |
| BE `dotnet build Linm.RMMS.WebService.sln -c Release` | PASS (0 errors) |

## Debt

- PostGIS persist — DEFER
- Google Maps JS runtime — P2 (GAP-F-GDG-01)
- JWT Authorize — TODO when platform auth lands
- Unit tests — pending

## Permissions

Local mode OK · Authorize TODO when platform auth lands.

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
