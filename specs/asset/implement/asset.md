# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| changeScope | `edit_page` |
| updatedAt | 2026-08-08T19:20:00.000Z |
| versionGate | rechecked |

## Done this turn (T-UI-LIST · T-UI-FORM · T-PERM · QA · Review)

| Task | Result |
|------|--------|
| T-UI-LIST-01 | Zones A–D · title GTVT · toolbar refresh/history/cog/excel/create · search+type · checkbox 24×24 · columns VN · pageSize `[50,100,200,500]` · `LinPageLayout` + `CatalogListShell` |
| T-UI-FORM-01 | `AssetFormSlideout` (common `Slideout`) · Z1/Z1h/Z2/Z3 · Create/Edit/View/Copy · view **readOnly** · leave-confirm · deep-link bridge |
| T-PERM-01 | FE `permissions.ts` codes `asset.road-assets.*` · local mode all-allow · BE TODO Auth |
| T-QA-01 | `qa/scenarios.md` updated (route `/asset/road-assets`) |
| Review | `review/findings.md` · no P0 |

## Prior (kept)

| Task | Result |
|------|--------|
| T-CTX-01 | Context route `api/v1/asset/road-assets` |
| T-BE-01 | `RoadAssetEntity` · CRUD · XCO GetById · IdCode stub |
| T-BE-02 | Migration `Schema_RmmsRoadAssets*` |
| T-BFF-01 | `RoadAssetsBffController` proxy |
| FE BASE | `/asset/road-assets` |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` |
| MFE list | `pages/AssetListPage/AssetListPage.tsx` |
| MFE form | `pages/AssetListPage/AssetFormSlideout.tsx` |
| Perm | `services/asset/permissions.ts` |

**Cấm** ERP.* — void.

## Verify

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 0 errors)
dotnet build RMMS.Service.Api → 0 Error(s)
dotnet build RMMS.Service.Bff → 0 Error(s)
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| SD-LIB-BE | Local ApiResponse stub → CommonLib |
| Excel/History/Config | UI stubs |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.17 |
| rulesVersion | 2026.08.08.17 |
| generatedAt | 2026-08-08T19:20:00.000Z |
| versionGate | rechecked |
