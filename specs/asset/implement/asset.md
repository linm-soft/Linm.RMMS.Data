# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `in_progress` |
| changeScope | `edit_page` |
| updatedAt | 2026-08-08T17:40:00.000Z |
| versionGate | rechecked |

## Done this turn (recheck_new · RMMS)

| Task | Result |
|------|--------|
| T-CTX-01 | Context `docs/context/features/asset.md` → route `api/v1/asset/road-assets` · gates |
| T-BE-01 | `RoadAssetEntity` · CRUD `RoadAssetsController` · ApiResponse stub · XCO GetById · IdCode stub `TS-yyyyMMdd-nnn` |
| T-BE-02 | Migration pair `20260808104033_Schema_RmmsRoadAssets` (+ Designer) · list id pending apply |
| T-BFF-01 | `RoadAssetsBffController` proxy `web-bff/api/v1/asset/road-assets/**` |
| FE route | `endpoint.ts` BASE `/asset/road-assets` · pageSize default 50 |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` |
| Migration | `api/shared/RMMS.Service.Migrations/Migrations/20260808104033_Schema_RmmsRoadAssets*.cs` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` |
| MFE | `Linm.Web.RMMS.Asset` · `services/asset/endpoint.ts` |

**Cấm** ERP.* — prior ERP implement void.

## Gates (from SA)

| Gate | Applied |
|------|---------|
| TZ | n/a |
| XCO | GetById — IgnoreQueryFilters + `allowed_company_ids` · 403/404 |
| SHARE | tenant_keep · HasQueryFilter CompanyCode |

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO — CommonLib / Auth NuGet chưa mount (`/upgrade-common-lib`) |
| SD-LIB-BE | Local `ApiResponse<T>` stub in Asset.Models — replace with CommonLib |
| IdCode | Sequence stub — replace `IIdCodeService` when platform lands |
| Persist | Runtime Sqlite `rmms-local.db` (was InMemory) — apply migration on deploy |
| T-UI-LIST/FORM | Parity Slideout + toolbar A–D — **next** |
| T-PERM-01 | Align Auth registry when NuGet ready |

## Verify

```
dotnet build RMMS.Service.Api → 0 Error(s)
dotnet build RMMS.Service.Bff → 0 Error(s)
dotnet ef migrations list → 20260808104033_Schema_RmmsRoadAssets (Pending)
```

## Handoff → next Dev

| Next | T-UI-LIST-01 → T-UI-FORM-01 · T-PERM-01 stub |
|------|-----------------------------------------------|
| QA | after UI |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.17 |
| rulesVersion | 2026.08.08.17 |
| generatedAt | 2026-08-08T17:40:00.000Z |
| versionGate | rechecked |
