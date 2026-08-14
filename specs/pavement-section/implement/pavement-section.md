# Implement — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_e95b3b89` |
| updatedAt | 2026-08-14T13:45:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-LKP** · **GAP-LKP-SELECT** · **GAP-PROD-VIEW-RO** · **GAP-TL-QUALITY-01**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** (list) |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · delete |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `PavementSectionFormPage` · View `<dl>` |
| Lookup SearchInput master | **PASS** province/status/structure/roadClass |
| View ≠ readOnly inputs | **PASS** |
| no Resource / Slideout / Kind D | **PASS** |
| no `filterMaxWidthPx` | **PASS** |
| Zone F | **PASS** `LinCatalogUiSchemaEditorModal` |
| History | **PASS** stub client |

## Done this turn (task_e95b3b89 · list-form-quality)

| Task | Result |
|------|--------|
| T-UI-LKP-01 | SearchInput master lookups · cấm native Select |
| T-UI-FIELD-01 | control-map ↔ DTO/request |
| T-UI-PROD-01 | Form page + View `<dl>` |
| T-UI-UX-01 | spacing 4/8/16 · Lin* · no ad-hoc width |
| T-BE-CRUD-01 | Verified API-01…05 · **no Write delta BE** |
| T-QA-CRUD-01 | C/E/V/D + SearchInput + View display |
| Anti-dup | **cấm** rewrite list shell A–D |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Entity | `Entities/PavementSectionEntity.cs` |
| Migration | `Migrations/20260810010657_Schema_RmmsPavementSections.cs` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/PavementSectionsBffController.cs` |
| MFE list | `pages/PavementSectionPage/PavementSectionPage.tsx` |
| MFE form | `pages/PavementSectionPage/PavementSectionFormPage.tsx` |
| Lookups | `services/pavementSection/lookups.ts` |
| mfeStdRoute | `/asset/pavement-section` |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |

**Cấm** ERP.* — void. Step 4b: BE CRUD already on Asset domain — verify only.

## Code delta (quality)

- `lookups.ts` — master SearchInput configs
- List filters: `Select` → `SearchInput`; drop `filterMaxWidthPx`
- Form split `PavementSectionFormPage` · routes `/new` · `/:id`
- View mode: `<dl>` not disabled/readOnly inputs
- Form fields: `Input` / `SearchInput` / `Checkbox` / `Button` / `LinPageHeader`

## Verify (2026-08-14 · task_e95b3b89)

```
yarn typecheck → PASS
yarn build → PASS (webpack compiled · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Excel import/export | OUT pack stub |
| History API | Stub client empty |
| form-init-data | master constants (no remote GET) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T13:45:00.000Z |
| versionGate | rechecked |
