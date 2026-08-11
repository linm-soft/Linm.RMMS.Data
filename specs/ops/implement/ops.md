# Implement — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_02070244` |
| updatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-TL-FORMTYPE-01**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** · status · priority · type · unread toggle |
| list_parity Kind B | **PASS** (prior · không rewrite) |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** (prior) `NotificationFormSlideout` · view readOnly · leave-confirm |
| ≠ GOVOne giamsat / map cấm | **PASS** · nav stubs · Command P2 stub |

## Done this turn (task_02070244 · FormType CRUD gap)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar/row **Delete** → soft DELETE · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…07 · domain Notification · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | scenarios Create→Edit→View→Delete + toolbar/row Delete · Mark-read/Mark-all |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Notification/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/NotificationEntity.cs` |
| Migration | `20260809172000_Schema_RmmsNotifications` |
| BFF | `bff/domains/notification/.../NotificationInboxBffController.cs` |
| MFE list | `pages/NotificationListPage/NotificationListPage.tsx` |
| MFE form | `pages/NotificationListPage/NotificationFormSlideout.tsx` |
| Perm | `services/notification/permissions.ts` |
| Route prefix | `api/v1/notification/inbox` · `api/v1/notification/overview` |
| mfeStdRoute | `/ops` |
| mfeStdUrl | `http://localhost:9308/ops` |

**Cấm** ERP.* — void.

## Code delta (this turn)

- `NotificationListPage.tsx` — `catalogToolbar.canDelete` / `onDelete` → shared `deleteRow` (GAP-P2-ACT-DELETE)
- Specs: task/implement/qa/review/STATUS FormType stamp

## Verify (2026-08-10 · task_02070244)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 3 size warnings only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s) · 0 Warning(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-SIGNALR | OpsHub DEFER P2 |
| SD-COMMAND | Command center full hub DEFER P2 |
| SD-MAP | realtime map **cấm** trong MFE · nav stubs |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |
| Overview KPI | staffOnline/openIncidents/woInProgress stub constants |
| Assign row | DEFER P2 stub |

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
