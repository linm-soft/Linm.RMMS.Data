# Implement — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_2eb59012` |
| updatedAt | `2026-08-14T21:20:00.000Z` |
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
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · delete |
| filter SearchTextInput — no Tìm btn | **PASS** |
| lookup SearchInput (cấm native Select) | **PASS** status + incidentType |
| list_parity Kind B | **PASS** (không rewrite grid shell) |
| tree_master? | n/a |
| form full-page (cấm Slideout / Kind D / Resource) | **PASS** `CitizenFormPage` |
| View display (cấm Input readOnly) | **PASS** `<dl>` |
| IdCode `CIT-YYYYMMDD-NNNN` | **PASS** |
| Action inventory → form/API | **PASS** · `/integration/citizen/new` · `/:id` · `?mode=edit` |
| footer-only Save/Cancel/View actions | **PASS** · Z1 chỉ Quay lại |
| no `filterMaxWidthPx` | **PASS** |

## Done this turn (task_2eb59012 · list-form quality)

| Task | Result |
|------|--------|
| T-UI-LIST-01 | Kept · SearchInput status filter · drop filterMaxWidthPx |
| T-UI-FORM-01 | Full-page C/E/V/Copy |
| T-UI-ACT-01 | Toolbar/row → form routes · Delete kept |
| T-BE-CRUD-01 | Verified API list/get/create/update/soft-delete + BFF · no Write delta BE |
| T-UI-MAP-FORM | n/a |
| T-UI-LKP-01 | `services/citizen/lookups.ts` · SearchInput list+form |
| T-UI-FIELD-01 | DTO/API map Create/UpdateCitizenIncidentRequest |
| T-UI-PROD-01 | Removed `CitizenFormSlideout` |
| T-UI-UX-01 | spacing 4/8/16 · no ad-hoc filterMaxWidth |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 shell |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CitizenIncidentEntity.cs` |
| Migration | `20260809143845_Schema_RmmsCitizenIncidents` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/CitizenIncidentsBffController.cs` |
| MFE list | `pages/CitizenListPage/CitizenListPage.tsx` |
| MFE form | `pages/CitizenFormPage/CitizenFormPage.tsx` |
| Perm | `services/citizen/permissions.ts` |
| Route prefix | `api/v1/integration/citizen-incidents` |
| Public | `api/v1/public/incidents` · alias `api/v1/citizen/incident` |
| mfeStdRoute | `/integration/citizen` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |

**Cấm** ERP.* — void. Step 4b: BE existing CRUD verified · no new endpoint/migration.

## LAYOUT-06 checklist

| # | File | Result |
|---|------|--------|
| 1–3 | AppLayout / StandaloneShell / content:has | **PASS** (prior) |
| 4 | Page `data-catalog-list-page` + flex root | **PASS** |

## Build (REQUIRED)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, 3 size warnings only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s), 0 Warning(s))
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
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T21:20:00.000Z |
| versionGate | rechecked |
| taskId | `task_2eb59012` |
