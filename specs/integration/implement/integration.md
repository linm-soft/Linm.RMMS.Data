# Implement — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_805cde43` |
| updatedAt | 2026-08-09T16:45:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: scaffold raw table → Kind G hub + Sync/Partners grids · Integration domain only  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (Sync · Partners · Endpoints) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 (Sync/Partners) |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · config · Import (add) |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** (Sync + Partners) |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `ImportAssetSlideout` · leave-confirm |
| Kind G hub tabs | **PASS** Endpoints · Sync · Partners · Guide |

## Done this turn (task_805cde43 resume)

| Task | Result |
|------|--------|
| PO→TL artifacts | Created + autopilot confirm |
| T-CTX-01 | Updated `docs/context/features/integration.md` API Signed |
| T-BE-01 / T-BE-02 / T-BFF-01 | SyncJob · PartnerAdapter · migration · BFF proxies |
| T-PERM-01 | FE `permissions.ts` · BE Auth stub TODO |
| T-UI-LIST-01 | IntegrationListPage hub A–D |
| T-UI-FORM-01 | ImportAssetSlideout Z1–Z3 |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `SyncJobEntity` · `PartnerAdapterEntity` |
| Migration | `20260809162831_Schema_RmmsIntegrationHub` |
| BFF | `SyncJobsBffController` · `PartnerAdaptersBffController` · `IntegrationHubBffController` |
| MFE list | `pages/IntegrationListPage/IntegrationListPage.tsx` |
| MFE form | `pages/IntegrationListPage/ImportAssetSlideout.tsx` |
| Perm | `services/integration/permissions.ts` |
| Route prefix | `api/v1/integration/*` |
| mfeStdRoute | `/integration` |
| mfeStdUrl | `http://localhost:9314/integration` |

**Cấm** ERP.* — void.

## Verify (2026-08-09 · task_805cde43)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| SD-WEBHOOK | register stub P2 |
| Endpoints filter | BE catalog static · FE client filter |
| Swagger UI | stub panel only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:45:00.000Z |
| versionGate | rechecked |
