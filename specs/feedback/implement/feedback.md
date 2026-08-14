# Implement — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_4ff7bc4b` |
| updatedAt | 2026-08-14T19:20:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form (`slideout-form-layout` footer_only)  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-P2-SLIDE-TOP-ACT** · **GAP-P2-SLIDE-DUP-SAVE**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (`DEFAULT_CATALOG_LIST_TABLE_CONFIG` + `resizable: true`) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist · `actions=footer_only` | **PASS** — no Z1 Quay lại/Hủy/Lưu; View Đóng/Sửa/Sao chép in footer |

## Done this turn (task_4ff7bc4b · crud_formtype)

Live page audit (Integration `FeedbackListPage` + `FeedbackFormSlideout`): **no LIST rewrite**.

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired Delete toolbar + row menu · action inventory closed |
| T-BE-CRUD-01 | Verified API list/get/create/update/soft-delete + BFF DELETE · domain Integration |
| Form polish | `FeedbackFormSlideout` footer-only (GAP-P2-SLIDE-*) |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AppFeedbackEntity.cs` |
| Migration | `20260809160018_Schema_RmmsAppFeedbacks` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/AppFeedbacksBffController.cs` |
| MFE list | `pages/FeedbackListPage/FeedbackListPage.tsx` |
| MFE form | `pages/FeedbackListPage/FeedbackFormSlideout.tsx` |
| Perm | `services/feedback/permissions.ts` |
| Route prefix | `api/v1/integration/feedbacks` |
| mfeStdRoute | `/integration/feedback` |
| mfeStdUrl | `http://localhost:9314/integration/feedback` |

**Cấm** ERP.* — void.

## LAYOUT-06 checklist

| # | File | Result |
|---|------|--------|
| 1 | `AppLayout.module.css` `.mainStandalone` height calc | **PASS** (prior) |
| 2 | `StandaloneShell.module.css` `.shell` height/max-height | **PASS** (prior) |
| 3 | `.content:has([data-catalog-list-page])` flex fill | **PASS** (prior) |
| 4 | Page `data-catalog-list-page` + flex root | **PASS** |

## Verify (task_4ff7bc4b · 2026-08-14)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-NOTIFY | email/notify DEFER |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T19:20:00.000Z |
| versionGate | rechecked |
| taskId | `task_4ff7bc4b` |
