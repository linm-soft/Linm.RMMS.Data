# Implement — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `done` |
| taskId | `task_6e79dde5` |
| mfeStdRoute | `/gis/draw` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T22:20:00.000Z` |

## retry.ssot_rereview

Live page `/gis/draw` audit before Write:

| Check | Result |
|-------|--------|
| LinPageLayout / CatalogListShell | N/A Kind F — 1 map shell, no nested CatalogListShell |
| CatalogListPagination | N/A |
| flex + skeleton | map-host flex · loading overlay Leaflet / sync |
| toolbar | zone B + map-bar (OSM/Esri/sat · Fit · Full/Dock) |
| list_parity | N/A packKind=map |
| tree_master | layer tree sidebar (checkbox + radio target) |
| form checklist | props panel after draw (not Slideout) |
| OMS R1 live Leaflet | PASS |
| OMS R2 basemap OSM default + Esri/sat | PASS |
| OMS R3 title/aria | PASS map `role=application` · bar aria |
| OMS R4b full flex | PASS · full ẩn sidebar (demo parity) |
| OMS R4c host→bar→legend | PASS |
| OMS R5b sat maxNativeZoom 17 | PASS |
| OMS R7b corridor + track panes | PASS `corridorStyle` / `trackLineStyle` |
| OMS R7c isolate + Fit focus | PASS legend/list |
| OMS R8/R9 OSRM route + snap | PASS (fallback raw) |
| OMS R11 Fit overview ≤13 | PASS |

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-CTX | done | context + demo |
| T-PERM | done | JWT TODO (health pattern) |
| T-BE-01 | done | purpose=live layers + LiveBasemapConfig · reuse drawings |
| T-BE-02 | done | BFF forward `basemap-config?purpose=` |
| T-UI-MAP | done | Kind F `/gis/draw` · OMS R1–R11 |
| T-FE-CLIENT | done | BFF + local-seed fallback |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/pages/GisDrawLivePage/GisDrawLivePage.tsx` — Kind F live + OMS chrome
- `src/pages/GisDrawLivePage/GisDrawLivePage.module.css`
- `src/services/gis/endpoint.ts` · `gisService.ts` — `getBasemapConfig(purpose)`

### BE (`Linm.RMMS.WebService`)

- `Domains/Gis/Services/GisDrawingStore.cs` — `LiveBasemapConfig`
- `Domains/Gis/Services/GisService.cs` · `IGisService.cs` — purpose live
- `Domains/Gis/Controllers/GisMapController.cs` — `basemap-config?purpose=`
- `bff/domains/gis/.../GisBffController.cs` — forward query
- `docs/DOMAIN-MAP.md` — slug `gis-draw-live` → Gis

## Verify (`task_6e79dde5` · 2026-08-11)

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | PASS |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS (webpack 3 size warnings) |
| BE `dotnet build Linm.RMMS.WebService.sln -c Release` | PASS (0 errors) |

## Debt

- PostGIS persist — DEFER
- JWT Authorize — TODO when platform auth lands
- Unit tests — pending
- Demo seed QL.1 vs MFE Cot_km QL.22 — seed file remains QL.22 (existing MFE seed)

## Permissions

Local mode OK · Authorize TODO when platform auth lands.

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
