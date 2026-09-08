# implement — csdl-bieu-05

| | |
|--|--|
| feature | `csdl-bieu-05` |
| role | `dev` |
| taskId | `task_83252c99` |
| status | `done` |
| packKind | `list` |
| resource | `ditches` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| writtenAt | `2026-09-05T07:00:00.000Z` |

## Summary

Typed Biểu 05 — Rãnh các loại: alias page Kind B list + Kind D Slideout 18 cột; BE `Schema_CsdlBieu5` 1:1; BFF proxy-only; DOMAIN-MAP Asset.

## FE (MFE Asset)

- `src/pages/CsdlBieu05Page/` — list + form slideout + CSS
- Route `/csdl-bieu-05` · `devRoutes` · topbar
- Filters: search · province · status · ditchKind · roadCode SearchInput · kmFrom/kmTo
- Grid: `uiColumns` + `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal` · **cấm** leftover `const columns`
- Form: C/E/V/Copy · LeaveConfirmModal · ditchKind/shape/structure/apertureSize(free_text)/lengthM*/drainageCapacity/builtYear
- Peer deep-link `/so-ts?type=DITCH` · hub back

## BE (Linm.RMMS.WebService)

- Entity `CsdlBieu5Entity` · table `rmms_csdl_bieu5`
- Migration `20260905065854_Schema_CsdlBieu5`
- DTO widen + `CsdlBieu5Dtos` (kinds/shapes/structures)
- `CsdlCatalogService` typed join create/update/list filter `ditchKind`
- UiSchema registry/seed `ditches`
- DOMAIN-MAP `csdl-bieu-05` → Asset
- BFF: querystring forward (+ `ditchKind` comment)

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `csdl-bieu-05`) |
| API `dotnet build` | **PASS** |
| BFF `dotnet build` | **PASS** |

## Debt / OUT

- ORG SearchInput manageUnit **P2 DEFER**
- XLS **OUT**
- Auth RequirePermission stub (T-PERM-01 shared)
- E2E → `/agent-qa*` only

## APIs

- `GET/POST/PUT/DELETE` `web-bff/api/v1/asset/csdl-records` · `?resource=ditches`
- List filters: `ditchKind` · `kmFrom` · `kmTo` · `roadCode`
- Lookup: `…/integration/road-routes/search`
