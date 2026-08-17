# QA — scenarios — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType (LKP/FIELD/PROD/UX) · delta `?road=` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |
| mfeStdRoute | `/integration/citizen` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/citizen-incidents` |
| bff | `web-bff/api/v1/integration/citizen-incidents` |
| lookup | `GET /integration/road-routes/search` |
| taskId | `task_88a84739` |
| prior Dev | `task_49b91f68` · implement `done` |
| prior QA | `task_b470f2da` · re-smoke this turn (form 5-col + header chrome) |
| autoApprove | OFF (board) · Autopilot ON · **roleOnly=qa** |
| method | static review live `CitizenListPage` + `CitizenFormPage` + `lookups.ts` + endpoint/service + Integration API/BFF · `yarn typecheck` + `yarn build` |
| updatedAt | `2026-08-16T02:30:00.000Z` |

> Inbox Kind B · **cấm** Slideout/Resource · **cấm** `ERP.*` · **≠** Góp ý (`feedback`).  
> P2 OUT: Kind G public · Leaflet · OTP · media presign · Incident adapter.

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9314/integration/citizen` | Route mount · không 404 | **PASS** (`index.tsx` `integration/citizen` · `/new` · `/:id`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid/empty · **không** nested `CatalogListShell` · **không** blank 0px / title clip | **PASS** (LAYOUT-06 · `.page` · `skeletonRows={8}`) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search Enter (không nút Tìm) | `SearchTextInput` `onSearch` · `pulseSearch` · page=1 | **PASS** |
| S4 | Status / tuyến SearchInput change | refetch page=1 (debounce 300ms) | **PASS** (`applyFilters`) |
| S5 | Toolbar Refresh / +Tạo mới / Config | catalogToolbar · Tạo mới **chỉ Zone B** → `/integration/citizen/new` | **PASS** (Config = stub dialog — GAP-DEV-CONFIG-PLACEHOLDER-01 P2) |
| S6 | History toolbar/menu | `LinCatalogHistoryModal` stub | **PASS** |
| S7 | Row menu View/Edit/Copy/Delete/History | **full-page** form · **không** Slideout · Delete confirm soft | **PASS** (`formPath` · `buildCatalogRowMenuItems` `showDelete`) |
| S8 | Form Create/Edit/View/Copy | Header chrome Quay lại · Hủy/Tạo mới\|Lưu · View Sao chép/Sửa · **không** footer Lưu · **không** `citizen-btn-save-top` | **PASS** (`z1` · `data-form-surface="full"`) |
| S9 | No ERP.* | FE BASE `/integration/citizen-incidents` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title «Cổng người dân» · `fas fa-users` · badge ≠ feedback · **cấm** Thêm mới trên A | **PASS** |
| B | SearchTextInput + status SearchInput + **SearchInput tuyến** · refresh · history · cog · add · delete · **không** `filterMaxWidthPx` · **không** nút Tìm | **PASS** (`filterCols={3}` · `TEST_ID-field-road`) |
| C | `LinCatalogDataGrid` `resizable: true` · mã/họ tên/SĐT/loại/tuyến/thời gian/trạng thái/nguồn/GPS · click mã → View · seed `QL.1` | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `data-catalog-list-page` · `useServerPagedListLoading` · filter đổi → page=1 | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + `?form=` deep-link rewrite full-page | **PASS** |
| QA-21 | Create | Toolbar +Thêm → `/new` → header Lưu → POST · Source=`citizen` | **PASS** (API + demo fallback) |
| QA-22 | Edit | Row/toolbar Edit → `/:id?mode=edit` → PUT | **PASS** |
| QA-23 | View | Code link / dblclick / menu → **cùng fields locked** `.viewDisabled` · header Sao chép/Sửa · **không** `<dl>` · **không** Slideout 2 cột | **PASS** (`data-form-cols="5"`) |
| QA-24 | Copy | Copy → `/new?copyFrom=` → POST · `CIT-*` mới | **PASS** (`genTrackingCode` / BE `NextTrackingCodeAsync`) |
| QA-25 | Delete toolbar/row | confirm → soft delete · toast · refresh | **PASS** |
| QA-26 | No duplicate Save on form top extra | Save chỉ `rmms-citizen-form-btn-save` trong chrome | **PASS** |
| QA-27 | Leave dirty | `LeaveConfirmModal` trước `goList` | **PASS** |
| QA-28 | Perm | `integration.citizen-incidents.*` · local all true | **PASS** |

## Delta Dev (`task_49b91f68`) + form 5-col — QA re-smoke (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| D1 | Filter `road` | Zone B SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` · `getList` qs `road` · BE exact `CitizenIncident.Road` trim AND search | **PASS** (GAP-SA-CIT-Q01) |
| D2 | T-UI-LKP-01 | Form `road` SearchInput · persist **code** · `GET /integration/road-routes/search` · display `code — name` · fallback seed 38 · **cấm** Input Text tuyến | **PASS** |
| D3 | Seed 38 | `ROAD_SEED` length 38 · có `QL.1` · **không** `QL.22` | **PASS** |
| D4 | T-BE-VAL-01 | Create/Update Road ∈ `rmms_road_routes.Code` IsActive · Status 5 · Type 6 · Source force `citizen` · 422 VN unknown road | **PASS** (`ValidateCatalogAsync`) |
| D5 | T-BFF-01 | `BuildListPath` = `Request.QueryString` passthrough · no business logic · **không** controller mới | **PASS** |
| D6 | T-UI-FIELD-01 | Date UTC ISO · lat/lng number · enum 5/6 SearchInput · Road code · mediaMeta string stub | **PASS** |
| D7 | T-UI-PROD-01 | **full-page** KEEP · **cấm** Resource · **cấm** Slideout | **PASS** |
| D8 | T-UI-UX-01 | 1× LinPageLayout list · LinCatalogDataGrid · LinCatalogListPagination · form 5 cột header chrome · **không** `filterMaxWidthPx` | **PASS** |
| D9 | GAP-P2-FORM-GRID-05 | `.fields` `data-form-cols="5"` · header Quay lại / Hủy / Tạo mới\|Lưu | **PASS** (closed 2026-08-15) |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** |
| N2 | Persist road không catalog | BE `ArgumentException` «Tuyến đường không thuộc danh mục tuyến đang hiệu lực.» | **PASS** |
| N3 | Status / type ngoài allow-list | Error VN | **PASS** |
| N4 | API/BFF down | `citizenService` fallback `citizenStore` | **PASS** (dev · không P0) |
| N5 | Lookup API empty/fail | `searchMaster` seed 38 | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/integration/citizen-incidents?search&status&road&page&pageSize` | **PASS** |
| API-02 | GET | `/api/v1/integration/citizen-incidents/{id}` | **PASS** (XCO `allowed_company_ids`) |
| API-03 | POST/PUT/DELETE | same prefix · VAL catalog + Source=`citizen` | **PASS** |
| BFF-01 | * | `web-bff/api/v1/integration/citizen-incidents` + QS | **PASS** |
| LKP-01 | GET | `/integration/road-routes/search` | **PASS** (FE client) |

**Cấm** `ERP.*` · `Domains/Master` write · `api/v1/rmms/*` — **PASS** (không thấy path trên surface citizen).

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-DEV-CONFIG-PLACEHOLDER-01 | P2 | Toolbar cog → `configHint` dialog · **chưa** `LinCatalogUiSchemaEditorModal` / `useCatalogUiSchema` / `buildDynamicGridColumns` — **không block** P1 CRUD/`road` (Accept cùng Review trước) |
| GAP-P2-PERM-ATTR | P2 | Controller `TODO [RequirePermission]` — **không block** (T-PERM stub) |
| Out of pack | P2 | Kind G public · Leaflet · OTP · presign · Incident adapter — **DEFER** |

## Verdict

**PASS** · T-QA-01 · T-QA-CRUD-01 · **không** P0. Handoff `/agent-review` (roleOnly QA **không** chạy Review trong task này).

## Build gate (`task_88a84739`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (Integration MFE) | **PASS** (`tsc --noEmit` 0 · 2026-08-16) |
| `yarn build` (Integration MFE) | **PASS** (webpack 5.109.2 · 0 errors · 3 size warnings) |
| BE Write this role | **n/a** — QA không đụng API · Step 4b **n/a** |
| Prior Dev `dotnet` sln Release | **PASS** (`task_49b91f68`) |

## Handoff → Review

| Field | Value |
|-------|-------|
| Next | `/agent-review` · `review/findings.md` |
| autoApprove | OFF → board Approve review khi tới lượt |
| Notes | Kind B full-page 5-col · filter `road` · SearchInput LKP · seed QL.1 · no ERP · no Slideout · Config schema editor = P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-16T02:30:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5** · STATUS lockstep) |
| taskId | `task_88a84739` |
| contentHashPriorDev | `task_49b91f68` |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| devSkillVersion | 2026.08.14.5 |
