# Implement — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_ae6e4e92` |
| updatedAt | 2026-08-09T14:50:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **LAYOUT-06** (AppLayout + StandaloneShell) · common-components local tgz align Patrol  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (`DEFAULT_CATALOG_LIST_TABLE_CONFIG` + `resizable: true`) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `AppLayout.module.css` height calc · `StandaloneShell` · `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create |
| filter SearchTextInput — no Tìm btn | **PASS** (Enter + status Select apply) |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `CitizenFormSlideout` Create/Edit/View/Copy · view readOnly · leave-confirm |
| ≠ feedback badge | **PASS** |

## Done this turn (task_ae6e4e92 resume)

| Task | Result |
|------|--------|
| PO→TL artifacts | Created + autopilot confirm |
| T-CTX-01 | Updated `docs/context/features/citizen.md` API Signed |
| T-BE-01 / T-BE-02 / T-BFF-01 | Integration domain · migration `rmms_citizen_incidents` · public + alias |
| T-PERM-01 | FE `permissions.ts` · BE Auth stub TODO |
| T-UI-LIST-01 | CitizenListPage A–D · LAYOUT-06 |
| T-UI-FORM-01 | CitizenFormSlideout Z1–Z3 |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CitizenIncidentEntity.cs` |
| Migration | `20260809143845_Schema_RmmsCitizenIncidents` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/CitizenIncidentsBffController.cs` |
| MFE list | `pages/CitizenListPage/CitizenListPage.tsx` |
| MFE form | `pages/CitizenListPage/CitizenFormSlideout.tsx` |
| Perm | `services/citizen/permissions.ts` |
| Route prefix | `api/v1/integration/citizen-incidents` |
| Public | `api/v1/public/incidents` · alias `api/v1/citizen/incident` |
| mfeStdRoute | `/integration/citizen` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |

**Cấm** ERP.* — void.

## LAYOUT-06 checklist

| # | File | Result |
|---|------|--------|
| 1 | `AppLayout.module.css` `.mainStandalone` height calc | **PASS** |
| 2 | `StandaloneShell.module.css` `.shell` height/max-height | **PASS** |
| 3 | `.content:has([data-catalog-list-page])` flex fill | **PASS** |
| 4 | Page `data-catalog-list-page` + flex root | **PASS** |

## Verify (2026-08-09 · task_ae6e4e92)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-PII | enc-at-rest DEFER |
| SD-MEDIA | mediaMeta string · presign DEFER |
| SD-TOKEN | Citizen temp token / rate-limit IP DEFER stub |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |
| Kind G+F public/map | keep demo · MFE map later |
| GAP-F-CIT-01 | Incident adapter source=citizen OUT P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:50:00.000Z |
| versionGate | rechecked |
