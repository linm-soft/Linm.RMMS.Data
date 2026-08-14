# Implement — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_47576cf0` |
| updatedAt | 2026-08-14T20:25:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · `list-form-quality-gates` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-SLIDE-KIND-D** · **GAP-P2-LKP-SELECT** · **GAP-P2-UX-WIDTH**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · delete |
| filter SearchTextInput — no Tìm btn | **PASS** · SearchInput status/priority/type · unread toggle |
| list_parity Kind B | **PASS** (không rewrite grid shell) |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `NotificationFormPage` · View `<dl>` · leave-confirm |
| ≠ GOVOne giamsat / map cấm | **PASS** · nav stubs · Command P2 stub |
| Lookup SearchInput master | **PASS** |
| No Slideout / Kind D / View readOnly Input | **PASS** |
| No `filterMaxWidthPx` | **PASS** |

## Done this turn (task_47576cf0 · list-form quality)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Kept · toolbar/row → `/ops/new` · `/ops/:id` |
| T-BE-CRUD-01 | Verified API-01…07 · no BE write |
| T-UI-MAP-FORM | n/a |
| T-UI-LKP-01 | `services/notification/lookups.ts` · SearchInput list+form |
| T-UI-FIELD-01 | Fields map NotificationDto / Create·Update |
| T-UI-PROD-01 | Removed `NotificationFormSlideout` · full-page form · View `<dl>` |
| T-UI-UX-01 | spacing 4/8/16 · no ad-hoc filterMaxWidth |
| T-QA-CRUD-01 | Smoke C/E/V/D + row actions on full-page |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Notification/` |
| BFF | `bff/domains/notification/.../NotificationInboxBffController.cs` |
| MFE list | `pages/NotificationListPage/NotificationListPage.tsx` |
| MFE form | `pages/NotificationFormPage/NotificationFormPage.tsx` |
| Route prefix | `api/v1/notification/inbox` · `api/v1/notification/overview` |
| mfeStdRoute | `/ops` |
| mfeStdUrl | `http://localhost:9304/ops` |

**Cấm** ERP.* — void.

## Code delta (this turn)

- `lookups.ts` — master SearchInput configs
- `NotificationListPage.tsx` — SearchInput filters · navigate form routes · drop Slideout / filterMaxWidthPx
- `NotificationFormPage.tsx` — full-page C/E/V/Copy · View `<dl>`
- Deleted `NotificationFormSlideout.tsx` (+ css)

## Verify (2026-08-14 · task_47576cf0)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 3 size warnings only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s) · 0 Warning(s))
```

## Build

- MFE `Linm.Web.RMMS.Field` `yarn typecheck` + `yarn build` **PASS**
- BE `dotnet build Linm.RMMS.WebService.sln -c Release` **PASS** (no API delta this turn)

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| SD-SIGNALR | OpsHub DEFER P2 |
| SD-COMMAND | Command center DEFER P2 |
| SD-MAP | realtime map **cấm** · nav stubs |
| History API | window.alert stub |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T20:25:00.000Z |
| versionGate | rechecked |
