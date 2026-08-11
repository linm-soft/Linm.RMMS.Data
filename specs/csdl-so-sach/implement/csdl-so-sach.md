# Implement — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_9106e8fa` |
| pack | FormType ACT/CRUD gap |
| updatedAt | 2026-08-10T16:45:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-P2-ACT-DEEPLINK** · **GAP-TL-FORMTYPE-01**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** (list mode) |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** · `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · + Delete |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| hub Kind G | **PASS** · tabs + KPI + cards |
| form checklist Z1–Z3 | **PASS** `CsdlFormSlideout` footer-only |
| Zone F / History | **PASS** stub |
| Deep-link `?resource=&form=` | **PASS** |

## Done this turn (FormType)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired toolbar Delete + shared `deleteRow` · deep-link form · action inventory closed |
| T-BE-CRUD-01 | Verified API-00…05 · domain Asset · no Write delta BE |
| T-QA-CRUD-01 | scenarios.md Create→Edit→View→Delete + toolbar/row Delete |
| Prior LIST/FORM | **unchanged** (no rewrite) |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `Domains/Asset/Controllers/CsdlCatalogRecordsController.cs` |
| Entity | `CsdlCatalogRecordEntity` + `CsdlBookEntryEntity` |
| BFF | `CsdlCatalogRecordsBffController.cs` |
| MFE | `pages/CsdlSoSachPage/` |
| mfeStdRoute | `/asset/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/asset/csdl-so-sach` |

**Cấm** ERP.* — void.

## Verify (task_9106e8fa)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build RMMS.Service.Api -c Release → PASS (0 errors)
dotnet build LINM.RMMS.Asset.Bff + RMMS.Service.Bff -c Release → PASS (0 errors)
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Excel import | OUT pack · toast stub later |
| History API | Stub empty |
| Per-entity tables | P1 polymorphic facade — split later if needed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T16:45:00.000Z |
| versionGate | rechecked |
| formTypePack | task_9106e8fa |
