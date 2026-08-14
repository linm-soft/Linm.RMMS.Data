# Implement — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | **done** |
| changeScope | `edit_page` · gap=`crud_formtype` |
| domain | Integration · `api/v1/integration/asset-types` |
| mfe | `Linm.Web.RMMS.Master` · `/master/asset-type` |
| mfeStdRoute | `/master/asset-type` |
| mfeStdUrl | `http://localhost:9318/master/asset-type` |
| verify | FE `yarn typecheck` PASS · `yarn build` PASS (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) · BE API+BFF `dotnet build` PASS |
| updatedAt | `2026-08-10T15:35:00.000Z` |
| task | `task_b7d98891` · form-type pack closeout |

## retry.ssot_rereview: **pass**

```
checklist: tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · list_parity · tree_master=N/A · form · tl-dropdown-from-backend · form-type-task-pack
gaps (task_b7d98891):
  - GAP-TL-FORMTYPE-01 CLOSED — stamped T-UI-ACT-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-QA-CRUD-01
  - GAP-SA-FORMTYPE-01 CLOSED — FormMode↔API in solution-discovery
  - GAP-P2-ACT-* none — toolbar/row menu all wired
  (prior): 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination
    · SearchTextInput · useServerPagedListLoading · CatalogRowActionMenu · View readOnly
    · Dropdown groupCode ← init-data only (GAP-DEV-DROPDOWN-HARDCODE-01)
then: verify_build PASS (typecheck · yarn build · API · BFF)
```

## Done checklist

- [x] T-CTX-01 — context API path Integration · seed JSON 23
- [x] T-BE-CRUD-01 — Entity · DTOs · Service · Controller (+ alias-map) · list/search/C/U/D/getById
- [x] T-BE-INIT-01 — GET `/init-data` groupCodes `{value,label}`
- [x] T-BE-02 — `Schema_RmmsAssetTypes` (+ seed 23 in Up)
- [x] T-SEED-01 — seed in schema migration · JSON SSOT
- [x] T-BFF-01 — `AssetTypesBffController` proxy
- [x] T-PERM-01 — `useAssetTypePermissions` · codes `master.asset-types.*` · local mode
- [x] T-UI-LIST-01 — LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · DES-GRID · list_parity · mfeStdUrl
- [x] T-UI-FORM-01 — Modal · group Dropdown ← init-data only · legacyAliases · View readOnly
- [x] T-UI-ACT-01 — action inventory → form/API (search/create/edit/view/copy/delete/history/config)
- [x] T-QA-CRUD-01 — scenarios.md Create→Edit→View→Delete + row menu
- [x] VERIFY — yarn typecheck · yarn build · dotnet API · dotnet BFF (task_b7d98891)

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
lookup: groupCode Select ← init-data only (cấm KIND_LABEL FE)
leave: N/A Modal (dirty confirm DEFER)
toast: BE error banner in modal · delete toast on list
perm: toolbar + menu gated
```

## Debt

- RequirePermission attribute stub until CommonLib ≥1.4.0 (same org-unit)
- History API DEFER (toolbar opens catalog history modal stub)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.1 |
| rulesVersion | 2026.08.10.2 |
| generatedAt | 2026-08-10T15:35:00.000Z |
| versionGate | rechecked |
