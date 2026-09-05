# Dev — Implement — so-ts-convex-mirror

> Status: **done** · task `task_035da760` · `/agent-dev`  
> packKind: **list** · typeCode: **CONVEX_MIRROR** · route_a `/so-ts?type=CONVEX_MIRROR`

| | |
|--|--|
| Feature | `so-ts-convex-mirror` |
| Title | Sổ TS — Gương cầu / long môn |
| Role | `dev` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| alias | `/so-ts-convex-mirror` → Navigate live |
| API | `api/v1/asset/road-assets` · BFF proxy |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS |

## Decisions

- changeScope=`new_page` · Kind B · Full page CatalogFormShell 5col · S-ATTR **9 attr** dump editable
- **cấm** ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · Slideout · tab legacy · field gantry
- Persist: scalars + dumpSpecs P1 · flatten **DEFER** · migration **none** (SA)
- LeaveConfirmModal + useAlert (shell reuse)
- Auth align **DEFER**
- new_page.ssot_rereview: **pass** · profile · filter V1–V5 · form 5col · S-ATTR9 · LAYOUT-06 · leave Modal

## T-* done

| Task | Result |
|------|--------|
| T-CTX-01 | context + `so-ts-convex-mirror-filter-bar.md` |
| T-BE-INIT-01 | init-data `assetTypeMsts` · `shapeCutPosts` · `materialPosts` · `locationPosts` |
| T-BE-CRUD-01 | `ResolveConvexMirrorName` (GAP-MIRROR-NAME-01) · qty `total_number_post` (GAP-MIRROR-QTY-01) |
| T-BFF-01 | proxy only (verify · no delta) |
| T-BE-UISCHEMA-01 | catalogKind `road-assets` verify |
| T-PERM-01 | codes stub · Auth DEFER |
| T-UI-LIST-01 | CONVEX_MIRROR profile · hide type/kmTo · ensure 9 dump cols · LAYOUT-06 |
| T-UI-FILTER-01 | filter-bar.md V1–V5 · type lock |
| T-UI-CFG-01 | `LinCatalogUiSchemaEditorModal` catalogKind `road-assets` |
| T-UI-FORM-01 | S-ATTR 9 attr editable · ẩn kmTo · LOOKUP Select |
| T-UI-LEAVE-01 / T-UI-HIST-01 | reuse shell Modal / History |
| T-UI-LKP-01 | asset-type · road-route · org-unit · LOOKUP_STATIC init |
| T-UI-FIELD-01 | controlHint 1:1 · dumpSpecLabels |
| T-UI-PROD-01 / T-UI-UX-01 / T-UI-RESP-01 | shell chrome · 5col · responsive inherit |
| GAP-MIRROR-ROUTE-01 | alias Navigate `so-ts-convex-mirror` |

## Files touched

**FE** `Linm.Web.RMMS.Asset`
- `src/index.tsx` — alias route
- `src/pages/AssetListPage/AssetListPage.tsx` — profile + columns + LOOKUP options
- `src/pages/AssetFormPage/AssetFormPage.tsx` — S-ATTR 9 · kmTo hide · qty sync
- `src/services/asset/lookups.ts` · `endpoint.ts` · `dumpSpecLabels.ts`

**BE** `Linm.RMMS.WebService`
- `RoadAssetDtos.cs` — InitData DTO delta
- `RoadAssetService.cs` — LOOKUP seed + load
- `RoadAssetCatalogHandler.cs` — ResolveConvexMirrorName

**Specs/context**
- `docs/context/features/so-ts-convex-mirror-filter-bar.md`
- `docs/context/features/so-ts-convex-mirror.md`
- `handoff/dev-compact.md`

## Verify

```
yarn build          # PASS (webpack size warnings only)
dotnet build Api    # PASS 0 error
```

## Debt / DEFER

- Flatten dumpSpecs columns (GAP-MIRROR-SCOPE-01)
- Auth permission align
- E2E → `/agent-qa*` only (queued)

## Next

role: **qa** · `/agent-qa`
