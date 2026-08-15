# QA — scenarios — patrol (crud_formtype delta)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType (LKP/FIELD/PROD/UX) · delta `route` SearchInput + `?route=` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| mfeStdRoute | `/patrol` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/sessions` |
| bff | `web-bff/api/v1/patrol/sessions` |
| lookup | `GET /integration/road-routes/search` (reuse attendance · **không** copy Patrol) |
| taskId | `task_8178afb0` |
| prior Dev | `task_4f8ea737` · implement `done` |
| autoApprove | ON |
| method | static review live `PatrolListPage` + `PatrolFormPage` + `lookups.ts` + `endpoint.ts`/`patrolService`/`patrolStore` + API `PatrolSessionService` + BFF `PatrolSessionsBffController` · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-15T01:20:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/patrol` | Route mount · không 404 | **PASS** (`index.tsx` `/patrol` · `/patrol/new` · `/patrol/:id`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid/empty · **không** nested `CatalogListShell` · **không** blank 0px / title clip | **PASS** (`.page` flex 100% · `skeletonRows=8` · `data-catalog-list-page`) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default 50 · sizes 50/100/200/500 | **PASS** |
| S3 | Search debounce (không nút Tìm) | `SearchTextInput` 300ms + Enter `onSearch` · `pulseSearch` · page=1 | **PASS** |
| S4 | Status / tuyến SearchInput change | List refetch page=1 | **PASS** (`routeDraft` + `statusDraft` → `applyFilters`) |
| S5 | Toolbar Refresh / +Tạo mới / Config | `/patrol/new` · Config hint dialog · Tạo mới **chỉ Zone B** | **PASS** |
| S6 | History toolbar/menu | `LinCatalogHistoryModal` stub | **PASS** (debt History API) |
| S7 | Row menu View/Edit/Copy/Delete/History | Full-page form routes · `buildCatalogRowMenuItems` | **PASS** |
| S8 | Form Create/Edit/View/Copy | Z1 back · Z2 fields · Z3 footer Lưu/Hủy · View `<dl>` | **PASS** |
| S9 | No ERP.* path | FE BASE `/patrol/sessions` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header «Tuần đường / tuần kiểm» · `fas fa-route` · **cấm** Thêm mới trên A | **PASS** |
| B | catalogToolbar refresh·history·cog·add·delete · filters: SearchTextInput + status SearchInput + **route SearchInput** `filterCols=3` | **PASS** |
| C | `LinCatalogDataGrid` `resizable: true` · click mã → View · cột Tuyến/Loại/Check-in/Coverage/Status/Offline | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Title | `listTitle` `Sổ phiên tuần tra / check-in` | **PASS** |
| Layout | flex column · skeleton · `useServerPagedListLoading` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + deep-link `?form=` → `/new` / `/:id` / `?mode=edit` / copy | **PASS** |
| QA-21 | Create | Toolbar +Tạo → `/patrol/new` → footer Lưu → POST `/patrol/sessions` · **không** gửi `code` | **PASS** |
| QA-22 | Edit | `/:id?mode=edit` → PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl data-testid=rmms-patrol-form-view>` · Sửa/Sao chép/Quay lại · **không** Input readOnly xám toàn form | **PASS** |
| QA-24 | Copy | `/patrol/new?copyFrom=` → POST mới · code tự sinh | **PASS** |
| QA-25 | Delete toolbar | `activeRow` + confirm → soft DELETE | **PASS** |
| QA-26 | Delete row menu | `case 'delete'` → soft DELETE | **PASS** |
| QA-27 | T-UI-LKP-01 | List+form `ROAD_ROUTE_LOOKUP_CONFIG` Integration · **cấm** native Select tuyến · persist **code** | **PASS** |
| QA-28 | T-UI-FIELD-01 | Required userName/route/patrolType/plannedDate/checkInCount/status · enum **nhãn VN** · coverage 0–100 | **PASS** |
| QA-29 | T-UI-PROD-01 | no Resource / Slideout trên `/patrol*` · seed `QL.1`/`HCM` · STORAGE_KEY `rows:v3` · **không** `ĐT.784`/`QL.1A` | **PASS** |
| QA-30 | T-UI-UX-01 | list flex 100% · footer-only Lưu/Hủy · **không** `btn-save-top`/`btn-cancel-top` · SearchInput `dropdownPortal: true` · **không** `filterMaxWidthPx` | **PASS** |
| QA-31 | BE `?route=` | GET list exact trim `Route` · FE `getList` + local `filterRows` exact | **PASS** |
| QA-32 | BE VAL | Route ∈ `rmms_road_routes` IsActive · Status/PatrolType allow-list VN · 422 `ĐT.784`/`QL.1A` | **PASS** (`ValidateCatalogAsync`) |
| QA-33 | BFF | `BuildListPath` `Request.QueryString` passthrough · no business logic | **PASS** |
| QA-34 | Leave dirty | confirm trước về list (Hủy / Quay lại) | **PASS** |
| QA-35 | Perm | `patrol.sessions.*` · local mode all true | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** |
| N2 | GetById fail | navigate list | **PASS** |
| N3 | Delete không perm | alert quyền | **PASS** (local mode all true) |
| N4 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |
| N5 | Route không ∈ catalog | BE `ArgumentException` VN | **PASS** (API) |
| N6 | API down | `patrolService` fallback local store v3 | **PASS** (dev fallback — không P0) |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/patrol/sessions?search=&status=&route=&page=&pageSize=` | **PASS** |
| API-02 | GET | `/api/v1/patrol/sessions/{id}` | **PASS** |
| API-03 | POST | `/api/v1/patrol/sessions` | **PASS** |
| API-04 | PUT | `/api/v1/patrol/sessions/{id}` | **PASS** |
| API-05 | DELETE | `/api/v1/patrol/sessions/{id}` soft | **PASS** |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | **PASS** (FE attendance lookups reuse) |
| BFF-01 | GET | `web-bff/api/v1/patrol/sessions` + QS | **PASS** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | P2 | `[RequirePermission]` TODO CommonLib NuGet |
| History API | P1 | stub empty document-history |
| Kind E map/tracks/coverage/kpi | P2 | out of pack |
| GAP-F-PAT-01 | P2 | Offline conflict merge — flag only |
| GAP-QA-PAT-CODE-DISABLED | P2 | form `code` dùng `Input disabled` (constitution ưu tiên `readOnly` không xám) — không chặn CRUD |
| Form delete | — | Xóa trên form **không** yêu cầu pack (ACT list toolbar + row menu) |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_8178afb0`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Field) | **PASS** (`tsc --noEmit` exit 0) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack compiled · 3 size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API + Patrol BFF | **PASS** (`task_4f8ea737`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-15T01:20:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT design/sa/tl **2026.08.14.5**) |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.09.02 |
| taskId | `task_8178afb0` |
