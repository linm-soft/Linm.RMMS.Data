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
| updatedAt | `2026-09-01T01:45:00.000Z` |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| LinPageLayout / CatalogListShell | N/A Kind F |
| CatalogListPagination | N/A |
| flex + skeleton | map-host flex · loading overlay |
| toolbar | map-bar + MAP_QUICK_TOOLS overlay — **cấm** zone B seed toolbar |
| OMS R1 live Leaflet | PASS |
| OMS R2 basemap OSM/Esri/sat + Google proxy default | PASS (feature default Google · OSM VN on bar) |
| OMS R3 title/aria | PASS |
| OMS R4b full flex | PASS |
| OMS R4c host→bar | PASS · **không** legend isolate bottom |
| OMS R5b sat maxNativeZoom 17 | PASS |
| OMS R7b corridor + track panes | PASS `corridorStyle` / `trackLineStyle` |
| OMS R7c isolate + Fit focus | List Kết quả only — **cấm** map click auto zoom |
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
| T-FE-CLIENT | done | BFF + **geojson DB khu-2-gov** + local-seed fallback |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/pages/GisDrawGoogleDemoPage/GisDrawGoogleDemoPage.tsx` — Kind F draw + OMS chrome + **DB inventory**
- `src/pages/GisDrawGoogleDemoPage/gisDrawHelpers.ts`
- `src/services/gis/endpoint.ts` · `gisService.ts` · `mapModels.ts`

### BE (`Linm.RMMS.WebService`)

- `api/domains/gis/.../DTOs/GisDrawingDtos.cs` · extend `GisMapDtos.cs`
- `Domains/Gis/Services/GisDrawingStore.cs` · `GisInventoryMapper.cs` · `GisService.cs` · `IGisService.cs`
- `Domains/Gis/Controllers/GisMapController.cs`
- `bff/domains/gis/.../GisBffController.cs`

## Verify (`task_e8a0c8a8` · 2026-08-11)

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | PASS |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS |
| BE `dotnet build Linm.RMMS.WebService.sln -c Release` | PASS (0 errors) |

## Notes (`/edit-web-feature` · 2026-08-23)

- Overlay `/gis/ha-tang` đọc `GET /gis/geojson/drawings` = drawings ∪ **khu-2-gov** trên corridor Khu II ∪ LineString `tuyen-duong` (`coordSource=khu2-corridor`).
- Load **mọi** asset Active. Skip `16,110` **và** lat/lng ngoài bbox Nghệ An (Quảng Ninh ~21,107). Fill: `khu2-corridor` theo km-rank trên QL.1 / QL.48B / CT / QL.HCM.
- Pavement CSV không geom → **không** vẽ mặt đường.
- Pin click = inspect (tab Thuộc tính) · **không** isolate map. Isolate chỉ chú giải lớp / list Kết quả.
- Leaflet.Draw CDN: **chờ `window.L`** rồi mới nạp `leaflet.draw.js` (cấm `L is not defined` · StrictMode/HMR).
- Import `road_assets`: CSV trùng `code` (vidagis Trái/Phải / nhiều cầu 1 id) → upsert in-memory + suffix `#n` — **cấm** `IX_CompanyCode_Code` 23505.
- Import round lat/lng `decimal(12,8)` + swap cột Vidagis (lat~107) — **cấm** `22003` numeric overflow.

## Verify (`/edit-web-feature` · 2026-08-23)

| Check | Result |
|-------|--------|
| GIS MFE `yarn typecheck` | PASS (turn trước) |
| Docker `dotnet build` API | PASS (0 Error) sau csproj forward-slash Content |
| DB `rmms_road_assets` RMMS | BRIDGE 127 / TUNNEL 7 · **plottable 93 pin** (69 import + 10 km-copy + 14 km-lerp) + 9 tuyến km-chain |
| `GET :5101/api/v1/gis/geojson/drawings` | **102** Feature `sourceKind=db` · `cau` 89 · `ham` 4 · `tuyen-duong` 9 · không `16,110` |
| BFF `:5201/web-bff/api/v1/gis/geojson/drawings` | HTTP 200 |
| MFE `http://localhost:9302/gis/ha-tang` | webpack compiled · HTTP 200 (live click Fit: cần browser) |

## Debt

- PostGIS persist — DEFER
- Google Maps JS runtime — P2 (GAP-F-GDG-01)
- JWT Authorize — TODO when platform auth lands
- Unit tests — pending

## Permissions

Local mode OK · Authorize TODO when platform auth lands.

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
