# Implement — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_e0173ab6` |
| updatedAt | 2026-08-10T17:10:00.000Z |
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
| filter SearchTextInput — no Tìm btn | **PASS** (Enter + status Select apply) |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `PatrolFormSlideout` Create/Edit/View/Copy · view readOnly |
| Action inventory → form/API | **PASS** · Delete wired toolbar + row menu |

## Done this turn (task_e0173ab6 · FormType)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar/row **Delete** → soft DELETE · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…05 · domain Patrol · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | scenarios Create→Edit→View→Delete + toolbar/row Delete |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 / T-UI-FORM-01 (already PASS) |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/PatrolSessionEntity.cs` |
| Migration | `20260810013053_Schema_RmmsPatrolSessions` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/PatrolSessionsBffController.cs` |
| MFE list | `pages/PatrolListPage/PatrolListPage.tsx` |
| MFE form | `pages/PatrolListPage/PatrolFormSlideout.tsx` |
| Perm | `services/patrol/permissions.ts` |
| Route prefix | `api/v1/patrol/sessions` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |

**Cấm** ERP.* — void.

## Code delta (FormType)

- `PatrolListPage.tsx` — `catalogToolbar.canDelete` / `onDelete` · row menu `showDelete` · shared `deleteRow` → `patrolService.delete` (GAP-P2-ACT-DELETE)

## Verify (2026-08-10 · task_e0173ab6)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack compiled · size warnings only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |
| Kind E map/tracks/coverage/kpi | P2 out of list pack |
| GAP-F-PAT-01 | Offline conflict merge — flag only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:10:00.000Z |
| versionGate | rechecked |
