# Implement — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| autoApprove | **ON** (`task_7442b627`) |
| taskId | `task_7442b627` |
| prior · team_lead | `confirmed` · `task/feedback.md` · `task_d4ec3f5b` |
| updatedAt | `2026-08-16T05:40:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview (HARD — live after delta)

Checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form checklist.

| Check | Live | Result |
|-------|------|--------|
| 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | `FeedbackListPage` only | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `catalogListTableConfigFromSchema` | **PASS** |
| Footer `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar | sizes 50/100/200/500 | **PASS** |
| flex + skeleton · `data-catalog-list-page` | `skeletonRows={8}` | **PASS** |
| toolbar config FULL · `LinCatalogUiSchemaEditorModal` · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` | kind=`app-feedbacks` | **PASS** |
| **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover grid `LinCatalogDataColumn` | none | **PASS** |
| list_parity Kind B A–D + F | Zone C title Design · Zone A badges | **PASS** |
| tree_master? | — | **n/a** |
| Form full-page Z1–Z3 · View=`<dl>` · **cấm** Slideout | no `FeedbackFormSlideout` | **PASS** |
| SearchInput list status + form role/category/status · **cấm** native `<select>` | SearchInput | **PASS** |
| FE perm `integration.feedbacks.*` | `permissions.ts` | **PASS** |
| Delete toolbar + row + Lin `Modal` · **cấm** `window.confirm` | wired | **PASS** |
| Leave-confirm | `useFormLeaveGuard` | **PASS** |

**Cấm** chỉ patch 1 chỗ — `fix_all` GAP-TL-* cùng surface.

## Done this turn (`task_7442b627`)

| Task | Result |
|------|--------|
| T-CTX-01 | context §4 = Code·SenderName·Role·SubmittedAt·Category·Body·Status·UserId · tracking `task_7442b627` |
| T-BE-01 | **verify/no-op** — `AppFeedbacksController` CRUD + GetById · **cấm** ERP.* |
| T-BE-02 | n/a — `Schema_RmmsAppFeedbacks` exists |
| T-BE-SCHEMA-01 | **verify/no-op** — seed keys `code,senderName,role,category,body,submittedAt,status` |
| T-BFF-01 | **verify/no-op** — `BuildListPath()` forwards `Request.QueryString` |
| T-PERM-01 | FE gate keep · BE `[RequirePermission]` debt P1 |
| T-UI-LIST-01 | Zone C **«Danh sách góp ý phần mềm»** · Zone A Kind B + ≠ Cổng người dân (header title node) |
| T-UI-FORM-01 | keep full-page · **cấm** Slideout |
| T-UI-LKP-01 | labels Design §3 Lỗi / Đề xuất / UX / Khác · role 3 · status draft/sent |
| T-UI-FIELD-01 | keep §3 map · code readonly · body textarea |
| T-UI-PROD-01 | form **không** `loadRows`/`genFeedbackCode` · copy/create code `(tự sinh)` · enums `services/feedback/lookups.ts` |
| T-UI-UX-01 | bỏ `filterMaxWidthPx` list · form title **22px** |
| T-UI-ACT-01 | verify Delete Modal + History stub · Tạo mới Zone B |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AppFeedbackEntity.cs` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/AppFeedbacksBffController.cs` |
| MFE list | `pages/FeedbackListPage/FeedbackListPage.tsx` |
| MFE form | `pages/FeedbackFormPage/FeedbackFormPage.tsx` |
| Lookups | `services/feedback/lookups.ts` |
| Perm | `services/feedback/permissions.ts` |
| Route prefix | `api/v1/integration/feedbacks` |
| catalogKind | `app-feedbacks` |
| mfeStdRoute | `/integration/feedback` |
| mfeStdUrl | `http://localhost:9314/integration/feedback` |

**Cấm** ERP.* — void. **No BE write** this turn.

## Build

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2 · 0 error · size warnings only)
dotnet build → skipped (no API/schema write · T-BE-* verify/no-op)
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-NOTIFY | email/notify P2 |
| SD-MEDIA | P2 |
| History API | modal stub until IAM history |

## Handoff → QA (`/agent-qa`)

| Field | Value |
|-------|-------|
| Next | roleOnly=`qa` · chain ON · autoApprove ON |
| Artifact | `qa/scenarios.md` |
| Roles sau | review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.5 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:40:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.5 |
| taskId | `task_7442b627` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
