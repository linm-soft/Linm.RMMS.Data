# Implement — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_d0fcb3d7` |
| updatedAt | 2026-08-10T17:30:00.000Z |
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
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** full page Create/Edit/View/Copy · view readOnly |
| Action inventory → form/API | **PASS** · Delete wired toolbar + row menu |
| Zone F | **PASS** `LinCatalogUiSchemaEditorModal` |
| History | **PASS** stub client |

## Done this turn (task_d0fcb3d7 · FormType)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar/row **Delete** → soft DELETE · action inventory closed |
| T-BE-CRUD-01 | Verified API-01…05 · domain Asset · no Write delta BE |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | scenarios Create→Edit→View→Delete + toolbar/row Delete |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 / T-UI-FORM-01 (already PASS) |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Entity | `Entities/PavementSectionEntity.cs` |
| Migration | `Migrations/20260810010657_Schema_RmmsPavementSections.cs` |
| BFF | `bff/.../PavementSectionsBffController.cs` |
| MFE list+form | `pages/PavementSectionPage/PavementSectionPage.tsx` |
| Service | `services/pavementSection/` |
| mfeStdRoute | `/asset/pavement-section` |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |

**Cấm** ERP.* — void.

## Code delta (FormType)

- `PavementSectionPage.tsx` — `catalogToolbar.canDelete` / `onDelete` · row menu `showDelete` · shared `deleteRow` → `pavementService.delete` (GAP-P2-ACT-DELETE)

## Verify (2026-08-10 · task_d0fcb3d7)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack compiled · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 Error(s))
```
## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Excel import/export | OUT pack stub |
| History API | Stub client empty |
| form-init-data | OUT pack |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T17:30:00.000Z |
| versionGate | rechecked |
