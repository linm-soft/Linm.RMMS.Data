# QA — scenarios — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| packKind | `list` (Kind **B** catalog A–D+F + **full-page** form) |
| taskId | `task_c14e28a4` |
| prior | Dev `task_7442b627` · implement **done** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/feedbacks` |
| mfeStdRoute | `/integration/feedback` |
| mfeStdUrl | `http://localhost:9314/integration/feedback` |
| method | code review live MFE + BE seed/BFF · **không** browser E2E |
| updatedAt | `2026-08-16T05:45:00.000Z` |
| autoApprove | ON |

## Scope

Inbox list `/integration/feedback` + form `/integration/feedback/new` · `/:id?mode=` · `?copyFrom=`.  
**≠** Cổng người dân (`citizen`).

**SUPERSEDED:** QA `task_6cb63382` (PASS trước Dev GAP-TL-*) — **không** dùng PASS cũ cho Zone A/C title, lookup labels, form demo store.

## T-QA-01 — List Kind B (A–D+F)

| ID | Scenario | Expect | Result | Evidence |
|----|----------|--------|--------|----------|
| QA-01 | Open `/integration/feedback` | Title «Góp ý phần mềm» · 1× `LinPageLayout` kind=catalog · grid/empty · LAYOUT-06 skeleton | **PASS** | `FeedbackListPage.tsx` header + `showTableLoading` · `skeletonRows={8}` · `data-catalog-list-page` |
| QA-02 | Zone A badges | Kind B + ≠ Cổng người dân trên **header** · **cấm** Thêm mới trên A | **PASS** | `headerBadges` · Create chỉ `catalogToolbar.onAdd` |
| QA-03 | Zone C title | `listTitle="Danh sách góp ý phần mềm"` (GAP-TL-LIST-TITLE) | **PASS** | `listTitle` |
| QA-04 | Filter | SearchTextInput + SearchInput status · debounce page=1 · **cấm** nút Tìm · **cấm** `filterMaxWidthPx` | **PASS** | `ErpListHeaderFilters` · `applyFilters` · no `filterMaxWidthPx` |
| QA-05 | Pagination | `LinCatalogListPagination` only · 50/100/200/500 | **PASS** | footer slot · **cấm** footerPagination / pageSizeBar |
| QA-06 | Grid | `LinCatalogDataGrid` · `columns={buildDynamicGridColumns}` · resize via schema | **PASS** | `uiColumns` + `gridColumns` · no leftover `const columns` / `LinCatalogDataColumn[]` |
| QA-07 | Toolbar | refresh · history stub · cog schema · +Tạo mới **chỉ B** · view/edit/delete khi chọn dòng | **PASS** | `catalogToolbar` |
| QA-08 | Zone F | `LinCatalogUiSchemaEditorModal` kind=`app-feedbacks` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` | **PASS** | list page only |
| QA-09 | Row menu | Xem / Sửa / Sao chép / Lịch sử / Xóa | **PASS** | `buildCatalogRowMenuItems` + `case 'delete'` |
| QA-10 | Nested shell | **cấm** nested `CatalogListShell` | **PASS** | 1× `LinPageLayout` |
| QA-11 | Native select catalog | **cấm** `<select>` Zone B | **PASS** | SearchInput only |
| QA-12 | Code click / dblclick | View full-page | **PASS** | `codeLink` + `onRowDoubleClick` → `mode=view` |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| ID | Scenario | Expect | Result | Evidence |
|----|----------|--------|--------|----------|
| QA-20 | Create | Toolbar +Tạo → `/integration/feedback/new` full-page → POST `/integration/feedbacks` **không** gửi `code` | **PASS** | `openCreate` · `CreateFeedbackRequest` · `feedbackEndpoint.create` |
| QA-21 | Edit | `/integration/feedback/:id?mode=edit` → PUT | **PASS** | `openRow(..., 'edit')` · `feedbackService.update` |
| QA-22 | View | `/:id?mode=view` · body **`<dl>`** · **cấm** View=`readOnly` Input xám toàn form | **PASS** | `isView` → `viewBody` · IdCode `readOnly` chỉ edit/create |
| QA-23 | Copy | `/new?copyFrom=` · POST new · code `(tự sinh)` | **PASS** | `fromDto(..., asCopy)` · `EMPTY_FORM.code` |
| QA-24 | Lookups Design §3 | role 3 · category **Lỗi / Đề xuất / UX / Khác** · status Nháp/Đã gửi | **PASS** | `services/feedback/lookups.ts` (GAP-TL-LKP-LABEL) |
| QA-25 | Form fields | senderName* Text · submittedAt datetime-local · body* TextArea · SearchInput role/category/status | **PASS** | `FeedbackFormPage` Z2 |
| QA-26 | Prod vs demo | Form **không** import `loadRows`/`genFeedbackCode` | **PASS** | form imports `lookups.ts` only (GAP-TL-PROD-DEMO) |
| QA-27 | Delete list | Lin `Modal` · **cấm** `window.confirm` · soft DELETE | **PASS** | `deleteTarget` Modal |
| QA-28 | Dirty leave | `useFormLeaveGuard` + `LeaveConfirmModal` · **cấm** `window.confirm` | **PASS** | form page |
| QA-29 | Required | senderName · role · submittedAt · category · body · status | **PASS** | `REQUIRED[]` |
| QA-30 | Footer | View: Đóng · Sửa · Sao chép · Edit/Create: Xóa nội dung · Hủy · Lưu nháp · Gửi · **cấm** Save Z1 | **PASS** | Z1 back only · Z3 |
| QA-31 | Title 22px | form `.title` 22px | **PASS** | `FeedbackFormPage.module.css` (GAP-TL-FORM-TITLEPX) |
| QA-32 | **cấm** Slideout / Resource | no `FeedbackFormSlideout` · routes full-page | **PASS** | `index.tsx` routes |
| QA-33 | BE list filter | GET `?search=&status=&page=&pageSize=` | **PASS** | FE qs + BFF `BuildListPath()` `Request.QueryString` |
| QA-34 | Ui-schema seed | kind `app-feedbacks` keys `code,senderName,role,category,body,submittedAt,status` | **PASS** | `CatalogUiSchemaSeed.AppFeedbacks()` |
| QA-35 | **cấm ERP.*** | MFE BASE `/integration/feedbacks` · domain Integration | **PASS** | no `ERP.` / `api/v1/rmms` on feedback pages |
| QA-36 | Perm FE | `integration.feedbacks.read\|create\|update\|delete` | **PASS** | `permissions.ts` · BE `[RequirePermission]` **out pack P1** |

## Build

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2 · 3 size warnings only)
BE this role → none (docs only) · prior Dev `task_7442b627` no API write
```

## Verdict

| Gate | Result |
|------|--------|
| T-QA-01 | **PASS** |
| T-QA-CRUD-01 | **PASS** |
| GAP-TL-LIST-TITLE / LIST-BADGE / UX-FILTERMAX / LKP-LABEL / PROD-DEMO / FORM-TITLEPX | **CLOSED** (verify live after Dev) |
| QA overall | **PASS** · handoff Review |

## Out of pack (skip / known)

- `feedbackService` localStorage fallback khi BFF down (`demo/feedbackStore`) — không trên form surface
- History API stub empty
- Email/notify + media P2
- BE `[RequirePermission]` chờ CommonLib
- Lookup.SearchFieldKeys seed không gồm role/category — P2 TL

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| Next | roleOnly=`review` · chain ON · autoApprove ON |
| Artifact | `review/findings.md` |
| Roles sau | — pipeline end |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:45:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.5 |
| taskId | `task_c14e28a4` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
