# QA — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `formtype_quality` |
| packKind | `list` (Kind **B** catalog A–D+F + **full-page** form) |
| taskId | `task_4e51b293` |
| prior | Dev `task_d7cdf08b` · implement **done** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/contracts` |
| mfeStdRoute | `/contract` |
| mfeStdUrl | `http://localhost:9312/contract` |
| method | code review live MFE + BE seed · **không** browser E2E |
| updatedAt | 2026-08-16T04:55:00.000Z |
| autoApprove | ON |

## Scope

Hợp đồng list `/contract` + form `/contract/new` · `/contract/:id?mode=` · `?copyFrom=`.  
**Out pack (skip):** Inventory `/contract/inventory` · Excel · quyết toán · History data · `[RequirePermission]` BE · partner/org/road SearchInput P2.

**SUPERSEDED:** QA `task_326682fd` (slideout + View readOnly) — **không** dùng PASS cũ cho form shell.

## T-QA-01 — List Kind B (A–D+F)

| ID | Scenario | Expect | Result | Evidence |
|----|----------|--------|--------|----------|
| QA-01 | Open `/contract` | Title «Hợp đồng và ngân sách» · 1× `LinPageLayout` · grid/empty · LAYOUT-06 skeleton | **PASS** | `ContractListPage.tsx` header + `showTableLoading` · `skeletonRows={8}` |
| QA-02 | Filter | SearchTextInput + SearchInput type/status/**contractor** · debounce page=1 · **cấm** nút Tìm | **PASS** | `ErpListHeaderFilters` · `applyFilters` · query `contractor` |
| QA-03 | Pagination | `LinCatalogListPagination` only · 50/100/200/500 | **PASS** | footer slot · **cấm** footerPagination / pageSizeBar |
| QA-04 | Grid | `LinCatalogDataGrid` · `columns={buildDynamicGridColumns}` · resize via schema | **PASS** | `uiColumns` bootstrap · no leftover `const columns` / `LinCatalogDataColumn[]` |
| QA-05 | Toolbar | refresh · history stub · config · +Tạo · view/edit/delete khi chọn dòng | **PASS** | `catalogToolbar` |
| QA-06 | Zone F | `LinCatalogUiSchemaEditorModal` kind=`contracts` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` | **PASS** | list page only |
| QA-07 | KPI | 4 ô beforeToolbar | **PASS** | `kpiStrip` |
| QA-08 | Row menu | Xem / Sửa / Copy / Lịch sử / Xóa | **PASS** | `buildCatalogRowMenuItems` + `case 'delete'` |
| QA-09 | Nested shell | **cấm** nested `CatalogListShell` | **PASS** | 1× `LinPageLayout` |
| QA-10 | Native select catalog | **cấm** `<select>` Zone B | **PASS** | SearchInput only |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| ID | Scenario | Expect | Result | Evidence |
|----|----------|--------|--------|----------|
| QA-20 | Create | Toolbar +Tạo → `/contract/new` full-page → POST `/contract/contracts` | **PASS** | `openCreate` · `contractEndpoint.create` |
| QA-21 | Edit | `/contract/:id?mode=edit` → PUT | **PASS** | `openRow(..., 'edit')` |
| QA-22 | View | `/contract/:id?mode=view` · body **`<dl>`** · **cấm** View=`readOnly` Input xám toàn form | **PASS** | `isView` → `viewBody` · IdCode `readOnly` chỉ trên edit/create display |
| QA-23 | Copy | `/contract/new?copyFrom=` · POST new · code copy placeholder | **PASS** | `dtoToForm(..., asCopy)` |
| QA-24 | Payment lines | inline grid C/E · view table | **PASS** | `contract-payments-section` |
| QA-25 | Delete list | Lin `Modal` · **cấm** `window.confirm` · soft DELETE | **PASS** | `deleteTarget` Modal |
| QA-26 | Delete form | Lin `Modal` | **PASS** | `deleteOpen` Modal |
| QA-27 | Dirty leave | `useFormLeaveGuard` + `LeaveConfirmModal` | **PASS** | form page |
| QA-28 | Required | contractNo · name · type · contractor · amount · status | **PASS** | `REQUIRED[]` |
| QA-29 | Lookups form | SearchInput enum in-memory · **cấm** native Select | **PASS** | type/status/contractor/org/payStatus |
| QA-30 | **cấm** Slideout / Resource | no `ContractFormSlideout` · routes full-page | **PASS** | `index.tsx` routes |
| QA-31 | BE list filter | GET `?search=&type=&status=&contractor=&page=&pageSize=` | **PASS** | FE qs + BFF `Request.QueryString` |
| QA-32 | Ui-schema seed | GET/PUT `api/v1/integration/catalogs/contracts/ui-schema` · seed cols Zone C | **PASS** | `CatalogUiSchemaRegistry.Contracts` + `CatalogUiSchemaSeed.Contracts()` |
| QA-33 | **cấm ERP.*** | MFE + Contract domain | **PASS** | no `ERP.` / `api/v1/rmms` |
| QA-34 | Route | inventory **không** nuốt `:id` | **PASS** | `contract/inventory` trước `contract/:id` |

## Build

```
yarn typecheck → PASS
yarn build → PASS (webpack 5.109.2 · size warnings only)
BE this role → none (docs only) · prior Dev `task_d7cdf08b` Api+Bff Release PASS
```

## Verdict

| Gate | Result |
|------|--------|
| T-QA-01 | **PASS** |
| T-QA-CRUD-01 | **PASS** |
| GAP-SA-SCHEMA-01 / GAP-TL-CONFIRM-01 | **CLOSED** (verify Dev) |
| QA overall | **PASS** · handoff Review |

## Out of pack (skip / known)

- Inventory `window.confirm` / `configHint` — **không** trong pack Hợp đồng
- History API stub empty
- Excel / quyết toán / sign+kpi dedicated
- BE `[RequirePermission]` chờ CommonLib

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:55:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| taskId | `task_4e51b293` |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
