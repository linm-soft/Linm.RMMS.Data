# Implement — road-route

| Field | Value |
|-------|-------|
| feature | `road-route` |
| status | **done** |
| domain | Integration · `api/v1/integration/road-routes` |
| mfe | `Linm.Web.RMMS.Master` · `/master/road-route` |
| mfeStdRoute | `/master/road-route` |
| mfeStdUrl | `http://localhost:9318/master/road-route` |
| verify | FE `yarn build` PASS (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) · `yarn typecheck` PASS · BE `dotnet build` PASS (API + BFF) |
| updatedAt | `2026-08-09T01:40:00.000Z` |
| task | `task_e6f6b6ee` |

## retry.ssot_rereview: **pass**

```
checklist: tl-grid-ssot · list_parity · tree_master=N/A · form · tl-dropdown-from-backend
gaps (fixed this run):
  - GAP-DEV-DROPDOWN-HARDCODE-01 — form routeKind bỏ hardcode VN fallback; chỉ BE init-data
gaps (accepted debt — same Master surface as org-unit):
  - DEBT-T-LIB — CatalogListPagination / CatalogPagerNav still under MFE src/components/catalog (await promote common)
  - DEBT-PERM — [RequirePermission] stub until CommonLib ≥1.4.0
then: fix_all (surface gaps) · debt documented
```

| # | Check | Result |
|---|-------|--------|
| 1 | 1× LinPageLayout — no nested CatalogListShell | **PASS** |
| 2 | Footer LinCatalogListPagination — no footerPagination | **PASS** |
| 3 | No pageSizeBar in grid body | **PASS** |
| 4 | Flex root + useServerPagedListLoading skeleton | **PASS** |
| 5 | Toolbar refresh · history · config fa-cog · +Thêm · row actions | **PASS** |
| 6 | Filter SearchTextInput only + pulseSearch | **PASS** |
| 7 | LinCatalogDataGrid + resize default ON · dynamic cols / ui-schema bootstrap | **PASS** |
| 8 | tree_master | **N/A** (flat) |
| 9 | Form Create/Edit/View/Copy · View readOnly | **PASS** |
| 10 | Dropdown routeKind **chỉ** từ BE `GET …/init-data` | **PASS** |

## Done checklist

- [x] T-CTX-01 — context API path Integration · seed JSON 38
- [x] T-BE-01 — Entity · DTOs · Service · Controller API-01…07
- [x] T-BE-02 — `Schema_RmmsRoadRoutes` (+ seed 38 in Up)
- [x] T-SEED-01 — seed in schema migration · JSON SSOT
- [x] T-BFF-01 — `RoadRoutesBffController` proxy
- [x] T-PERM-01 — codes `master.road-routes.*` · FE `useRoadRoutePermissions` · BE TODO RequirePermission
- [x] T-UI-LIST-01 — LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · CatalogRowActionMenu · pulseSearch
- [x] T-UI-FORM-01 — Modal · SearchInput parent · View readOnly · init-data kinds only

## Paths

### BE (`D:/AI-QLBD/Linm.RMMS.WebService`)
- `api/shared/RMMS.Service.Persistence/Entities/RoadRouteEntity.cs`
- `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/RoadRouteDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Integration/Services/RoadRouteService.cs`
- `api/src/RMMS.Service.Api/Domains/Integration/Controllers/RoadRoutesController.cs`
- `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/RoadRoutesBffController.cs`
- `api/shared/RMMS.Service.Migrations/Migrations/20260808114114_Schema_RmmsRoadRoutes.cs`

### FE (`Linm.Web.RMMS.Master`)
- `services/roadRoute/*`
- `hooks/useRoadRoutePermissions.ts`
- `pages/RoadRouteListPage/*`
- `pages/RoadRouteFormPage/*` (deep-link → list modal)
- routes in `src/index.tsx` · `devRoutes.ts`

## Debt

| ID | Note |
|----|------|
| DEBT-PERM | `[RequirePermission]` stub until CommonLib ≥1.4.0 |
| DEBT-UT | Unit tests pending |
| DEBT-T-LIB | Promote CatalogListPagination/PagerNav → common-components (Master shared) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.25 |
| generatedAt | 2026-08-09T01:40:00.000Z |
| versionGate | rechecked |
