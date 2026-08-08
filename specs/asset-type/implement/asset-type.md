# Implement — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | **done** |
| domain | Integration · `api/v1/integration/asset-types` |
| mfe | `Linm.Web.RMMS.Master` · `/master/asset-type` |
| mfeStdRoute | `/master/asset-type` |
| mfeStdUrl | `http://localhost:9314/master/asset-type` |
| verify | FE `yarn build` PASS (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) · `yarn typecheck` PASS · BE API+BFF `dotnet build` PASS |
| updatedAt | 2026-08-08T13:10:00.000Z |
| task | task_caaa21b4 · retry from team_lead |

## retry.ssot_rereview: **pass**

```
checklist: tl-grid-ssot · list_parity · tree_master=N/A · form
gaps (fixed this retry):
  - GAP-P2-LAYOUT — removed nested CatalogListShell; 1× LinPageLayout
  - GAP-P2-62 — footer CatalogListPagination (cấm footerPagination)
  - pageSizeBar — removed from grid body
  - GAP-P2-LAYOUT-06 — flex root + data-catalog-list-page + useServerPagedListLoading
  - GAP-P2-87 — SearchTextInput only (removed nút Tìm)
  - toolbar/config — refresh · history · LinListTableConfigModal fa-cog · row actions
  - GAP-P2-94 — CatalogRowActionMenu
  - GAP-P2-VIEW-DISABLED — View readOnly / Input display, không disabled xám
  - T-PERM-01 — useAssetTypePermissions + toolbar/menu gate
then: fix_all
```

## Done checklist

- [x] T-CTX-01 — context API path Integration · seed JSON 23
- [x] T-BE-01 — Entity · DTOs · Service · Controller (+ alias-map)
- [x] T-BE-02 — `Schema_RmmsAssetTypes` (+ seed 23 in Up)
- [x] T-SEED-01 — seed in schema migration · JSON SSOT
- [x] T-BFF-01 — `AssetTypesBffController` proxy
- [x] T-PERM-01 — `useAssetTypePermissions` · codes `master.asset-types.*` · local mode
- [x] T-UI-LIST-01 — LinPageLayout · CatalogListPagination · list_parity · mfeStdUrl
- [x] T-UI-FORM-01 — Modal · group Dropdown · legacyAliases · View readOnly
- [x] T-QA-01 — scenarios.md

## Key paths

| Layer | Path |
|-------|------|
| Entity | `RMMS.Service.Persistence/Entities/AssetTypeEntity.cs` |
| DTOs | `LINM.RMMS.Integration.Models/DTOs/AssetTypeDtos.cs` |
| API | `Domains/Integration/Controllers/AssetTypesController.cs` |
| BFF | `LINM.RMMS.Integration.Bff/Controllers/AssetTypesBffController.cs` |
| Migration | `Migrations/20260808115552_Schema_RmmsAssetTypes.cs` |
| FE page | `pages/AssetTypeListPage/` |
| FE perm | `hooks/useAssetTypePermissions.ts` |
| FE svc | `services/assetType/` |
| Seed | `docs/context/seed/asset-type-seed.json` |

## review.form

```
pattern: Modal
modes: Create|Edit|View|Copy
wire: endpoint + unwrap OK
lock: View readOnly (no grey disabled)
validate: Pattern B (required code/name/group)
lookup: groupCode Select ← init-data (static small enum)
leave: N/A Modal (dirty confirm DEFER)
toast: BE error banner in modal · delete toast on list
perm: toolbar + menu gated
```

## Debt

- RequirePermission attribute stub until CommonLib ≥1.4.0 (same org-unit)
- DEBT-T-LIB promote CatalogListPagination → common-components (Master-wide)
- History API DEFER (toolbar toast info)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.25 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.25 |
| rulesVersion | 2026.08.08.20 |
| generatedAt | 2026-08-08T13:10:00.000Z |
| versionGate | ok |
