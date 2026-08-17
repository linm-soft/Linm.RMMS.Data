# Implement — integration (`task_5aa247d6`)

| Field | Value |
|-------|-------|
| feature | `integration` |
| this role | `dev` · `/agent-dev` |
| status | `completed` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| autoApprove | ON |
| taskId | `task_5aa247d6` |
| mfeStdUrl | `http://localhost:9314/integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/*` |
| prior · team_lead | `confirmed` · `task/integration.md` · `task_4d837bc9` |
| updatedAt | `2026-08-16T06:30:00.000+07:00` |

## retry.ssot_rereview (HARD — live trước Write)

Checklist: `tl-grid-ssot` · `list_parity` · form full-page.

| Check | Live after Dev | Result |
|-------|----------------|--------|
| 1× `LinPageLayout` kind=catalog · **cấm** nested CatalogListShell | `IntegrationListPage` | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `catalogListTableConfigFromSchema` · 3 tabs | **PASS** |
| Footer `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | Sync + Partners | **PASS** |
| flex + skeleton · `data-catalog-list-page` | `skeletonRows={8}` | **PASS** |
| toolbar config FULL · `LinCatalogUiSchemaEditorModal` · `useCatalogUiSchema` · `buildDynamicGridColumns` | 3 kinds | **PASS** |
| **cấm** `LinListTableConfigModal` · **cấm** `configHint` · leftover grid `const columns` | none | **PASS** |
| list_parity Kind B A–D + F · Zone A badge Kind G + P1 · C title theo tab | patched | **PASS** |
| tree_master? | — | **n/a** |
| Form full-page Import/Job/Partner · View=`<dl>` · **cấm** Slideout | routes `import`/`import/:id`/`jobs/new`/`jobs/:id`/`partners/:id` | **PASS** |
| SearchInput enums · **cấm** native `<select>` | lookups.ts static | **PASS** |
| Delete Lin `Modal` · leave-confirm · **cấm** `window.confirm`/`alert` | patched | **PASS** |
| History `LinCatalogHistoryModal` | patched | **PASS** |

## Delta implemented (fix_all GAP TL)

| Task | Result |
|------|--------|
| T-CTX-01 | context §8 stamp `task_5aa247d6` |
| T-BE-01 | verify hub CRUD + IdCode `SYNC-*` server · **no rewrite** |
| T-BE-SCHEMA-01 | Registry 3 kinds exists · **no rewrite** |
| T-BFF-01 | Sync/Partners `BuildListPath` PASS · Hub endpoints **delta** forward `QueryString` |
| T-PERM-01 | FE `integration.endpoints.read` · BE `[RequirePermission]` debt P1 keep TODO |
| T-UI-LIST-01 | Zone C titles · Zone A badges |
| T-UI-FORM-01 | `/import/:id` · `/jobs/new` |
| T-UI-LKP-01 | phase `p1`/`p2`/`p3` map P1 · Đèn · CT01 · lookups.ts SSOT |
| T-UI-FIELD-01 | note textarea · fileName * |
| T-UI-PROD-01 | Import code `(tự sinh)` · không `genSyncCode` trên form |
| T-UI-UX-01 | bỏ `filterMaxWidthPx` · toast thay `alert` |
| T-UI-ACT-01 | Import + Thêm job Zone B · Modal delete · Retry footer · History modal |
| T-UI-LEAVE-01 | Import/Job `LeaveConfirmModal` keep |

**Cấm ERP.*** · **cấm** Slideout/Resource/View Input xám (trừ IdCode).

## § Build

| Target | Command | Result |
|--------|---------|--------|
| MFE | `yarn build` (cwd Integration) | **PASS** (webpack size warnings only) |
| BE | `dotnet build RMMS.Service.Api.csproj -o _buildcheck-integration` | **PASS** 0 error |
| BE BFF | `dotnet build LINM.RMMS.Integration.Bff.csproj` | **PASS** 0 error |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:30:00.000+07:00 |
| versionGate | rechecked |
| taskId | `task_5aa247d6` |
