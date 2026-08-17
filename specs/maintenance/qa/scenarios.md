# QA — scenarios — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `done` |
| this role | `qa` · `/agent-qa` |
| pack | T-QA-CRUD-01 · Kind B A–D + Zone F schema · FormType LKP/FIELD/PROD/UX |
| mfeStdUrl | `http://localhost:9304/maintenance` |
| mfeStdRoute | `/maintenance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/maintenance/work-orders` + `…/init-data` + `api/v1/integration/catalogs/work-orders/ui-schema` |
| taskId | `task_707b2054` |
| prior Dev | `task_c0e21b40` · implement `done` |
| updatedAt | `2026-08-16T01:05:00.000Z` |
| method | static review live `MaintenanceListPage` + `MaintenanceFormPage` + `lookups.ts` + endpoint/BFF/API + seed · typecheck/build PASS |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/maintenance` | Route mount · không 404 | **PASS** (`index.tsx` `/maintenance` + `/new` `/:id/edit` `/:id/copy` `/:id`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid hoặc empty · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 · sizes 50/100/200/500 (BE allow-list) | **PASS** |
| S3 | Search | `SearchTextInput` debounce 300ms + Enter · **không** nút Tìm | **PASS** |
| S4 | Status / workType | `SearchInput` từ `useMaintenanceLookups` → `GET …/init-data` · fallback Design §3.3 · **không** native Select | **PASS** |
| S5 | Toolbar B | refresh · history · cog schema · +Tạo mới trên B · view/edit/delete khi `activeRow` | **PASS** |
| S6 | History | `LinCatalogHistoryModal` + stub client | **PASS** (debt P1) |
| S7 | Row menu | View / Sửa / Sao chép / Lịch sử / Delete / Tiến độ / Nghiệm thu · `buildCatalogRowMenuItems` + extras | **PASS** |
| S8 | Form | Full page `/maintenance/new` · `/:id` · `/:id/edit` · `/:id/copy` · View `<dl>` | **PASS** (cấm Slideout) |
| S9 | No ERP.* | FE BASE `/maintenance/work-orders` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Lập lịch sửa chữa / bảo trì» · `fas fa-tools` · **cấm** Thêm mới trên A | **PASS** |
| B | Filters: search · status · workType · Tạo mới chỉ trên B | **PASS** |
| C | `LinCatalogDataGrid` + `tableConfig` resize · `columns={buildDynamicGridColumns(schema, uiColumns)}` · click mã → View · Loại/Trạng thái label lookup | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` catalogKind=`work-orders` · **không** `configHint` / `LinListTableConfigModal` | **PASS** |
| Layout | `.page` flex column height 100% · skeletonRows=8 · `data-catalog-list-page` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→(Delete)

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + deep-link `?form=` remap → `/new` / `/:id` / `/edit` / `/copy` | **PASS** |
| QA-21 | Create | Toolbar +Tạo mới → `/maintenance/new` → POST · **không** gửi `code` | **PASS** |
| QA-22 | Edit | `/maintenance/:id/edit` → PUT | **PASS** |
| QA-23 | View | `/maintenance/:id` · `<dl data-testid=rmms-maintenance-form-view>` · Sửa/Sao chép/Đóng · **không** Input readOnly trên View | **PASS** |
| QA-24 | Copy | `/maintenance/:id/copy` → POST mới · `fromDto` `code: ''` · UI `(tự sinh)` | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + overlay confirm → DELETE soft · toast SSOT | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → overlay · **không** `window.confirm` list | **PASS** |
| QA-27 | Progress / complete | overlay + POST `/{id}/progress` · `/{id}/complete` | **PASS** |
| QA-28 | T-UI-LKP-01 | List+form SearchInput init-data · **cấm** import `maintenanceStore` trong `lookups.ts` | **PASS** |
| QA-29 | T-UI-FIELD-01 | Required routeName/workType/status/dueAt · datetime-local UTC · progress 0–100 · description | **PASS** |
| QA-30 | T-UI-PROD-01 | no Resource / Slideout trên `/maintenance*` form · View `<dl>` | **PASS** |
| QA-31 | T-UI-UX-01 | list flex 100% · SearchInput `dropdownPortal: true` · list delete toast+overlay | **PASS** |
| QA-32 | BE route | `api/v1/maintenance/work-orders` · BFF `web-bff/api/v1/maintenance/work-orders` + `init-data` · domain Maintenance · **cấm ERP.*** | **PASS** |
| QA-33 | Leave dirty | `window.confirm` trước về list (Hủy / Quay lại) | **PASS** (form only) |
| QA-34 | Perm | codes `maintenance.work-orders.*` · local mode all true | **PASS** |
| QA-35 | Filter QS | GET list `search,status,workType,page,pageSize` · apply → page=1 | **PASS** |
| QA-36 | Init-data | GET `…/work-orders/init-data` statuses new/in_progress/done/cancelled · workTypes repair/inspect/emergency | **PASS** (client + BFF + API) |
| QA-37 | Ui-schema seed | list keys Mã·Tuyến·Loại·Đội·Cán bộ·Hạn·Trạng thái·Tiến độ · field `description` · HintText «Cấu hình hiển thị danh mục» | **PASS** |
| QA-38 | Enum remap | BE allow-list Design §3.3 · 1-shot legacy remap | **PASS** (service) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** (code) |
| N2 | GetById fail | navigate list | **PASS** (code) |
| N3 | Delete không perm | toast error | **PASS** |
| N4 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |
| N5 | API down | `maintenanceService` fallback local store | **PASS** (dev fallback — không P0) |
| N6 | Progress ngoài 0–100 | toast error | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/maintenance/work-orders?search=&status=&workType=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/maintenance/work-orders/{id}` XCO | **PASS** |
| API-03 | POST | `/api/v1/maintenance/work-orders` | **PASS** |
| API-04 | PUT | `/api/v1/maintenance/work-orders/{id}` | **PASS** |
| API-05 | DELETE | `/api/v1/maintenance/work-orders/{id}` soft | **PASS** |
| API-06 | POST | `/{id}/progress` | **PASS** |
| API-07 | POST | `/{id}/complete` | **PASS** (stub P2) |
| API-08 | GET | `/summary` | **PASS** (Kind E OUT live) |
| API-09 | GET | `/api/v1/maintenance/work-orders/init-data` | **PASS** |
| API-SCHEMA | GET/PUT | `/api/v1/integration/catalogs/work-orders/ui-schema` | **PASS** |
| BFF-INIT | GET | `web-bff/api/v1/maintenance/work-orders/init-data` | **PASS** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | P2 | `[RequirePermission]` TODO CommonLib NuGet ≥1.4.0 |
| History API | P1 | stub empty `/document-history` |
| SD-KPI | — | Kind E OUT this pack |
| GAP-RPT-SRC-WO-01 | report | Quantity/UnitCode — **out of pack** |
| UX-CODE-DISABLED | P2 | form mã `Input disabled` (không `readOnly`) — không chặn CRUD |
| UX-LEAVE-CONFIRM | P2 | form leave vẫn `window.confirm` (list delete đã overlay+toast) |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_707b2054`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Field) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_c0e21b40`) |

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role done | `qa` |
| next role | `review` · pending chain |
| autoApprove | ON |
| P0 | none |
| mfeStdUrl | `http://localhost:9304/maintenance` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T01:05:00.000Z |
| versionGate | rechecked |
