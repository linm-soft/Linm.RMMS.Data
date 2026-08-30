# Implement — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `dev` · `/agent-dev` |
| status | `completed` |
| changeScope | `edit_page` · GAP-SA-OPS-SCHEMA column order |
| packKind | `list` |
| taskId | `task_cae114b0` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/ops` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/notification/inbox` |
| domain | **Notification** |
| updatedAt | `2026-08-16T02:20:00.000Z` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.15.5` |
| versionGate | `recheck_new` |

> **Cấm** ERP.* · `Domains/Master` · `api/v1/rmms/*` · domain `Ops`.

## retry.ssot_rereview (live Field `/ops`)

Audit **trước Write**. Surface: `NotificationListPage` + `NotificationFormPage`.

| Check | Live | Verdict |
|-------|------|---------|
| 1× `LinPageLayout` — **cấm** nested CatalogListShell | `NotificationListPage.tsx` 1× `LinPageLayout` | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `resizable: true` + `buildDynamicGridColumns` | **PASS** |
| Footer `LinCatalogListPagination` | layout `footer` | **PASS** |
| flex + skeleton | `showTableLoading` · `skeletonRows={8}` | **PASS** |
| toolbar config FULL | `LinCatalogUiSchemaEditorModal` «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · kind=`ops-inbox` | **PASS** |
| **cấm** `LinListTableConfigModal` editor cột | không import | **PASS** |
| **cấm** leftover `const columns` / `LinCatalogDataColumn` | `uiColumns` + dynamic grid | **PASS** |
| **cấm** `configHint` | removed unused CSS leftover | **PASS** |
| list_parity Kind B A–D | A header · B toolbar+filter · C grid · D pagination · F modal | **PASS** |
| tree_master | n/a | **n/a** |
| form Z1–Z3 full-page | `NotificationFormPage` C/E/V/Copy · View `<dl>` · **5 cột** `data-form-cols="5"` | **PASS** (edit-web 2026-08-29) |
| OfficialDoc keys | `documentNumber` · `direction` · `summary` · `orgUnitName` | **PASS** |
| Default list order | title **sau** direction/summary/orgUnitName | **PASS** (this turn) |

## Delta this turn

| Task | Result |
|------|--------|
| T-BE-SCHEMA-01 | `CatalogUiSchemaSeed.OpsInbox()` `Field.List.Order` = Design bootstrap. Lookup/List `SearchFieldKeys` gồm `summary`. |
| T-UI-LIST-02 | FE `uiColumns` cùng thứ tự. |
| T-CTX-01 | `docs/context/features/ops.md` — `LinPageLayout` · API Signed · OfficialDoc · Zone F · bỏ «Mock no BE». |
| Verify no-op | T-PERM · T-UI-LIST-01 · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE-CRUD · T-BE-02 · T-BFF |

**Default order:** `code` · `documentNumber` · `direction` · `summary` · `orgUnitName` · `title` · `sender` · `recipient` · `priority` · `type` · `status` · `sentAt`

GAP-SA-OPS-SCHEMA **CLOSED**.

## Notes — `/edit-web-feature` 2026-08-29 (form 5 cột)

**GAP-P2-FORM-GRID-05** live: `NotificationFormPage` full-page (`/chi-dao/tao-moi`) dùng `grid-template-columns: 1fr 1fr` (copy proto Slideout) dù Design/PO đã chốt **cấm** Kind D.

**This turn:** `.fields` / `.viewGrid` = `repeat(5, minmax(0,1fr))` · `data-form-cols="5"` · medium 3 (`1200px`) · small 2 (`720px`) · textarea/title `spanFull` · input 100% cột. Proto + design/ux/task/po lock cùng turn — **cấm** worker revert 2-cột.

## Build

- MFE `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` `yarn build` **PASS** (webpack 5.109.2 · 3 size warnings only · 0 errors)
- BE `dotnet build Linm.RMMS.WebService.sln -c Release` **PASS** (0 Error(s) · 0 Warning(s))

**Cấm** ERP.* — void.

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · versionGate=recheck_new -->
