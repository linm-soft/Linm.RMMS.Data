# Implement — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_fd8ec33e` |
| updatedAt | 2026-08-14T19:40:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form (`slideout-form-layout` footer_only)  
gaps fixed this turn: **GAP-P2-ACT-CRUD** · **GAP-P2-ACT-ROW** · **GAP-P2-SLIDE-TOP-ACT** · **GAP-P2-BE-CRUD**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (Sync · Partners · Endpoints) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · config · Import · **View/Edit/Delete** |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** (Sync + Partners) |
| tree_master? | n/a |
| form checklist · `actions=footer_only` | **PASS** Import + SyncJobFormSlideout |

## Done this turn (task_fd8ec33e · crud_formtype)

Live page audit (`IntegrationListPage` + `ImportAssetSlideout`): **no LIST rewrite**.

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Toolbar/row View/Edit/Delete · Retry · Partner View/Toggle · footer-only Import |
| T-BE-CRUD-01 | PUT/DELETE sync-jobs · Partner GET by id · BFF proxy · catalog endpoints |
| T-UI-FORM polish | `SyncJobFormSlideout` View/Edit · Import Z1 no Đóng |
| Verify | typecheck + webpack build + BE Release |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `SyncJobEntity` · `PartnerAdapterEntity` |
| BFF | `SyncJobsBffController` · `PartnerAdaptersBffController` |
| MFE list | `pages/IntegrationListPage/IntegrationListPage.tsx` |
| MFE form | `ImportAssetSlideout.tsx` · `SyncJobFormSlideout.tsx` |
| Route prefix | `api/v1/integration/*` |
| mfeStdUrl | `http://localhost:9314/integration` |

**Cấm** ERP.* — void.

## Verify (task_fd8ec33e · 2026-08-14)

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
| Swagger UI | stub panel only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T19:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_fd8ec33e` |
