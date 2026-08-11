# Implement — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_377c866b` |
| updatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-P2-ACT-ASSIGN-CLOSE** · **GAP-TL-FORMTYPE-01**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **Delete** |
| filter SearchTextInput — no Tìm btn | **PASS** · status + severity |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `IncidentFormSlideout` Create/Edit/View/Copy · view readOnly · leave-confirm |
| ≠ citizen badge | **PASS** |

## Done this turn (task_377c866b · FormType CRUD gap)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar/row **Delete** + assign/close → dedicated API · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…07 · domain Incident · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | scenarios Create→Edit→View→Delete + toolbar/row Delete · Assign/Close |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Incident/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/IncidentEntity.cs` |
| Migration | `20260809161922_Schema_RmmsIncidents` |
| BFF | `bff/domains/incident/LINM.RMMS.Incident.Bff/Controllers/IncidentsBffController.cs` |
| MFE list | `pages/IncidentListPage/IncidentListPage.tsx` |
| MFE form | `pages/IncidentListPage/IncidentFormSlideout.tsx` |
| Perm | `services/incident/permissions.ts` |
| Route prefix | `api/v1/incident/incidents` |
| mfeStdRoute | `/incident` |
| mfeStdUrl | `http://localhost:9305/incident` |

**Cấm** ERP.* — void.

## Verify (2026-08-10 · task_377c866b)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-MAP | Leaflet Kind F map DEFER |
| SD-COMMENT | comment entity + related WO DEFER |
| SD-SLA | full escalation DEFER Workflow |
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
