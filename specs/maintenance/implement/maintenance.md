# Implement — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_d4dee8dc` |
| updatedAt | 2026-08-14T20:20:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form · list-form-quality  
gaps fixed this turn: **GAP-LKP-SELECT** · **GAP-PROD-SLIDEOUT** · **GAP-VIEW-READONLY** · **GAP-UX-WIDTH**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** list |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** |
| lookup SearchInput (cấm native Select) | **PASS** status + workType |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form full-page (cấm Slideout / Kind D) | **PASS** `MaintenanceFormPage` |
| View display (cấm Input readOnly) | **PASS** `<dl>` |
| IdCode `WO-YYYYMMDD-NNNN` | **PASS** |
| Action inventory → form/API | **PASS** · routes `/maintenance/new` · `/:id` · `?mode=edit` |

## Done this turn (task_d4dee8dc · quality + FormType)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Toolbar/row Delete + C/E/V/Copy → form page |
| T-BE-CRUD-01 | Verified API-01…07 · no Write delta BE |
| T-UI-MAP-FORM | n/a |
| T-UI-LKP-01 | SearchInput master lookups |
| T-UI-FIELD-01 | DTO/API map |
| T-UI-PROD-01 | Removed `MaintenanceFormSlideout` |
| T-UI-UX-01 | 4/8/16 · dropped `filterMaxWidthPx` |
| T-QA-CRUD-01 | Create→Edit→View→Delete + row menu |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 shell (patch filters/nav only) |

## Paths (confirmed)

| Layer | Path |
|-------|-------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Maintenance/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/WorkOrderEntity.cs` |
| Migration | `20260810011933_Schema_RmmsWorkOrders` |
| BFF | `bff/domains/maintenance/LINM.RMMS.Maintenance.Bff/Controllers/WorkOrdersBffController.cs` |
| MFE list | `pages/MaintenanceListPage/MaintenanceListPage.tsx` |
| MFE form | `pages/MaintenanceFormPage/MaintenanceFormPage.tsx` |
| Perm | `services/maintenance/permissions.ts` |
| Route prefix | `api/v1/maintenance/work-orders` |
| mfeStdRoute | `/maintenance` |
| mfeStdUrl | `http://localhost:9304/maintenance` |

**Cấm** ERP.* — void. Step 4b: BE existing CRUD verified · no new endpoint/migration.

## Build (REQUIRED)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, warnings size only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s), 0 Warning(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-KPI | Kind E report UI DEFER — summary API stub only |
| SD-COMMENT | comment entity DEFER |
| SD-SLA | full escalation DEFER Workflow |
| SD-ACCEPT | complete endpoint stub P2 UX |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T20:20:00.000Z |
| versionGate | rechecked |
