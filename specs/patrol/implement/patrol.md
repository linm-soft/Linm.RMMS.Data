# Implement — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_1ede6934` |
| updatedAt | 2026-08-14T20:30:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **GAP-TL-LIST-QUALITY-01** (LKP·FIELD·PROD·UX) · Slideout/View=readOnly  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** (debounce + status SearchInput) |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `PatrolFormPage` full-page · View `<dl>` |
| Action inventory → form/API | **PASS** · Delete wired toolbar + row menu |
| Lookup SearchInput master | **PASS** status / patrolType / offline |
| No Resource / Slideout / View=readOnly | **PASS** |
| UI-Ux spacing · no `filterMaxWidthPx` | **PASS** |

## Done this turn (task_1ede6934 · list-form-quality)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Toolbar/row Delete + C/E/V/Copy → `/patrol/new` · `/:id` |
| T-BE-CRUD-01 | Verified API-01…05 · domain Patrol · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-UI-LKP-01 | `src/services/patrol/lookups.ts` · SearchInput |
| T-UI-FIELD-01 | Fields map PatrolDto / Create·Update |
| T-UI-PROD-01 | Removed `PatrolFormSlideout` · View display |
| T-UI-UX-01 | Removed `filterMaxWidthPx` · spacing 4/8/16 |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 grid shell (kept A–D) |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/PatrolSessionEntity.cs` |
| Migration | `20260810013053_Schema_RmmsPatrolSessions` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/PatrolSessionsBffController.cs` |
| MFE list | `pages/PatrolListPage/PatrolListPage.tsx` |
| MFE form | `pages/PatrolFormPage/PatrolFormPage.tsx` |
| Perm | `services/patrol/permissions.ts` |
| Route prefix | `api/v1/patrol/sessions` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |

**Cấm** ERP.* — void.

## Code delta

- `lookups.ts` — STATUS / TYPE / OFFLINE master SearchInput
- `PatrolListPage.tsx` — navigate full-page form · SearchInput status · no Slideout
- `PatrolFormPage.tsx` — Z1–Z3 full page · View `<dl>`
- deleted `PatrolFormSlideout.tsx` (+ css)
- `devRoutes.ts` — `/patrol/new`

## Step 4b BE ALIGN

Existing Patrol domain already implements GET list/getById · POST · PUT · DELETE soft. No new migration/endpoint this turn.

## Verify (2026-08-14 · task_1ede6934)

## Build

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
| generatedAt | 2026-08-14T20:30:00.000Z |
| versionGate | rechecked |
