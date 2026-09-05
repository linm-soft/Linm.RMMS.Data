# Dev — Implement — so-ts-delineator

> Status: **done** · task `task_584278f1` · `/agent-dev`  
> packKind: **list** · typeCode: **DELINEATOR** · route_a `/so-ts?type=DELINEATOR`

| | |
|--|--|
| Feature | `so-ts-delineator` |
| Title | Sổ TS — Cọc tiêu / cọc H |
| Role | `dev` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| alias | `/so-ts-delineator` → Navigate live |
| API | `api/v1/asset/road-assets` · BFF proxy |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS |

## Decisions

- changeScope=`new_page` · Kind B · Full page CatalogFormShell 5col · S-ATTR **2 nhóm** tiêu/H
- **cấm** ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · Slideout · tab legacy
- Persist: scalars + dumpSpecs P1 · flatten **DEFER** (GAP-DELIM-FLAT-01) · migration **none**
- LeaveConfirmModal + useAlert (đã có trên shell)
- Auth align **DEFER**

## T-* done

| Task | Result |
|------|--------|
| T-CTX-01 | context + `so-ts-delineator-filter-bar.md` |
| T-BE-INIT-01 | init-data `postTypes` · `guidePostMaterials` · `hGuidePostMaterials` · `installedLocations` |
| T-BE-CRUD-01 | `ResolveDelineatorName` (GAP-DELIM-NAME-01) · qty dump `total_number_*` (GAP-DELIM-QTY-01) |
| T-BFF-01 | proxy only (verify) |
| T-UI-LIST-01 | DELINEATOR profile · hide type/kmTo · ensure dump cols · LAYOUT-06 shell |
| T-UI-FILTER-01 | filter-bar.md V1–V5 · type lock |
| T-UI-CFG-01 | `LinCatalogUiSchemaEditorModal` catalogKind `road-assets` |
| T-UI-FORM-01 | S-ATTR 2 nhóm editable · ẩn kmTo · LOOKUP Select |
| T-UI-LEAVE-01 / T-UI-HIST-01 | reuse shell Modal / History |
| T-UI-LKP-01 | asset-type · road-route · org-unit · LOOKUP_STATIC init |
| GAP-DELIM-ROUTE-01 | alias Navigate `so-ts-delineator` |

## Files touched

**FE** `Linm.Web.RMMS.Asset`
- `src/index.tsx` — alias route
- `src/pages/AssetListPage/AssetListPage.tsx` — profile + columns
- `src/pages/AssetFormPage/AssetFormPage.tsx` — 2 nhóm S-ATTR · kmTo hide · qty sync
- `src/services/asset/lookups.ts` · `endpoint.ts` — init fields

**BE** `Linm.RMMS.WebService`
- `RoadAssetDtos.cs` — InitData DTO delta
- `RoadAssetService.cs` — LOOKUP seed + load
- `RoadAssetCatalogHandler.cs` — ResolveDelineatorName

**Specs/context**
- `docs/context/features/so-ts-delineator-filter-bar.md`
- `docs/context/features/so-ts-delineator.md`
- `handoff/dev-compact.md`

## Verify

```
yarn build          # PASS (webpack warnings size only)
dotnet build Api    # PASS 0 error
```

## Debt / DEFER

- GAP-DELIM-FLAT-01 flatten dumpSpecs columns
- Auth permission align
- E2E → `/agent-qa*` only (queued)

## Next

role: **qa** · `/agent-qa`
