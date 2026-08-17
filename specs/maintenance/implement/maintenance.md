# Implement — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| taskId | `task_c0e21b40` |
| autoApprove | ON |
| updatedAt | `2026-08-16T00:55:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview (live after Write)

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | `MaintenanceListPage` 1× `LinPageLayout` | **PASS** |
| 2 | Footer `LinCatalogListPagination` | only | **PASS** |
| 3 | Flex root + skeleton LAYOUT-06 | `.page` flex · `skeletonRows={8}` | **PASS** |
| 4 | Toolbar catalog | refresh · history · config · +Tạo · delete | **PASS** |
| 5 | Filter SearchTextInput + SearchInput API-09 | `useMaintenanceLookups` → init-data | **PASS** |
| 6 | `LinCatalogDataGrid` resize ON | `buildDynamicGridColumns` | **PASS** |
| 7 | Zone F `LinCatalogUiSchemaEditorModal` | kind=`work-orders` · seed dueAt+progressPercent+description | **PASS** |
| 8 | History stub | present | **PASS** |
| 9 | tree_master? | n/a | n/a |
| 10 | Form full-page `/edit` `/copy` | `index.tsx` dedicated routes | **PASS** |
| 11 | Lookup master API-09 | `lookups.ts` **không** import demo store | **PASS** |
| 12 | Field map + description | form + seed field `description` | **PASS** |
| 13 | View `<dl>` | display | **PASS** |
| 14 | Copy code empty until POST | `fromDto` copy `code: ''` · UI `(tự sinh)` | **PASS** |
| 15 | Dedicated `/edit` `/copy` | routes trước `:id` | **PASS** |
| 16 | Toast SSOT list delete/progress | `dispatchAppToast` + confirm overlay — **cấm** `window.alert`/`confirm` list | **PASS** |
| 17 | BE enum Design §3.3 | `new/in_progress/done/cancelled` · `repair/inspect/emergency` + 1-shot remap | **PASS** |
| 18 | GET init-data + BFF | API + `WorkOrdersBffController` | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`.

## Done this turn (`task_c0e21b40`)

| Task | Result |
|------|--------|
| T-CTX-01 | context enum §3.3 + API-09 Signed |
| T-PERM-01 | FE codes giữ · BE `[RequirePermission]` stub |
| T-UI-LIST-01 | A–D giữ · filter labels Design |
| T-UI-LIST-CONFIG-01 | seed list keys Hạn+Tiến độ · labels VN |
| T-UI-FORM-01 | `/edit` `/copy` · copy code empty |
| T-UI-ACT-01 | action map + routes mới |
| T-UI-LKP-01 | init-data · cấm demo enum SSOT |
| T-UI-FIELD-01 | DTO map · dueAt UTC datetime-local · progress 0–100 |
| T-UI-PROD-01 | cấm Resource/Slideout/readOnly |
| T-UI-UX-01 | toast SSOT list |
| T-BE-CRUD-01 | API-01…07 giữ |
| T-BE-ENUM-01 | allow-list Design + remap 1-shot |
| T-BE-INIT-01 | `GET …/init-data` trước `{id}` |
| T-BE-UISCHEMA-01 | seed keys + description + hint «Cấu hình hiển thị danh mục» |
| T-BFF-01 | proxy init-data |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/v1/maintenance/work-orders` + `…/init-data` |
| Schema | `api/v1/integration/catalogs/work-orders/ui-schema` |
| BFF | `web-bff/api/v1/maintenance/work-orders/**` |
| MFE | `pages/MaintenanceListPage` · `MaintenanceFormPage` |
| mfeStdUrl | `http://localhost:9304/maintenance` |

**Cấm** ERP.* — void.

## Build (REQUIRED)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, warnings size only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s), 0 Warning(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO CommonLib ≥1.4.0 |
| SD-KPI | Kind E OUT |
| GAP-RPT-SRC-WO-01 | Quantity + UnitCode OUT |

## Handoff → QA (`/agent-qa`)

| Field | Value |
|-------|-------|
| next role | `qa` · pending chain |
| autoApprove | ON |
| smoke | list A–D + Zone F + C/E/V/Copy + init-data labels + progress/complete |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T00:55:00.000Z |
| versionGate | rechecked |
