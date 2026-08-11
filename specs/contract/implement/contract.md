# Implement — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| packKind | `list` |
| taskId | `task_6b3f9c9c` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/contracts` |
| mfeStdRoute | `/contract` |
| mfeStdUrl | `http://localhost:9312/contract` |
| updatedAt | 2026-08-10T16:35:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-TL-FORMTYPE-01**  
then: **fix_all**

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — no nested CatalogListShell | **PASS** (`ContractListPage.tsx`) |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 3 | Flex + `useServerPagedListLoading` + LAYOUT-06 | **PASS** |
| 4 | Toolbar catalog refresh · history · config · add · **delete** | **PASS** |
| 5 | Filter SearchTextInput + type/status Select — no Tìm btn | **PASS** |
| 6 | `LinCatalogDataGrid` + column resize | **PASS** |
| 7 | Zone F schema editor | **PASS** |
| 8 | History modal stub | **PASS** |
| 9 | tree_master | n/a |
| 10 | Form Create/Edit/View/Copy + payment lines | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Done this turn (task_6b3f9c9c · crud_formtype)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired Delete toolbar + row menu · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…05 · domain Contract · no Write delta BE |
| T-QA-CRUD-01 | scenarios.md Create→Edit→View→Delete + row Delete |
| Verify | typecheck + webpack build + API/BFF Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Contract/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/ContractEntity.cs` |
| Migration | `20260809145758_Schema_RmmsContracts` |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/Controllers/ContractsBffController.cs` |
| MFE list | `pages/ContractListPage/ContractListPage.tsx` |
| MFE form | `pages/ContractListPage/ContractFormSlideout.tsx` |
| Perm | `services/contract/permissions.ts` |
| Route prefix | `api/v1/contract/contracts` |

**Cấm** ERP.* — void.

## Verify (task_6b3f9c9c)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS 0 err
dotnet build RMMS.Service.Bff -c Release → PASS 0 err
```

## Gaps / nợ

- `[RequirePermission]` chờ CommonLib NuGet
- History API stub empty
- Excel / quyết toán full / inventory CRUD / sign+kpi dedicated endpoints = out of pack

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T16:35:00.000Z |
| versionGate | rechecked |
| taskId | `task_6b3f9c9c` |
