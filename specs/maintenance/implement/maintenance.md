# Implement — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_6d32b46f` |
| updatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-TL-FORMTYPE-01**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** (prior · giữ) |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** · status + workType |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `MaintenanceFormSlideout` Create/Edit/View/Copy · view readOnly · leave-confirm |
| IdCode `WO-YYYYMMDD-NNNN` | **PASS** |
| Action inventory → form/API | **PASS** · Delete wired · progress/complete dedicated API |

## Done this turn (task_6d32b46f · FormType)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar/row **Delete** → soft DELETE · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…07 · domain Maintenance · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | scenarios Create→Edit→View→Delete + toolbar/row Delete · Progress/Complete |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 / T-UI-FORM-01 (already PASS) |

## Paths (confirmed)

| Layer | Path |
|-------|-------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Maintenance/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/WorkOrderEntity.cs` |
| Migration | `20260810011933_Schema_RmmsWorkOrders` |
| BFF | `bff/domains/maintenance/LINM.RMMS.Maintenance.Bff/Controllers/WorkOrdersBffController.cs` |
| MFE list | `pages/MaintenanceListPage/MaintenanceListPage.tsx` |
| MFE form | `pages/MaintenanceListPage/MaintenanceFormSlideout.tsx` |
| Perm | `services/maintenance/permissions.ts` |
| Route prefix | `api/v1/maintenance/work-orders` |
| mfeStdRoute | `/maintenance` |
| mfeStdUrl | `http://localhost:9306/maintenance` |

**Cấm** ERP.* — void.

## Verify (2026-08-10 · task_6d32b46f)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
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
| generatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |
