# QA — scenarios — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType (LKP/FIELD/PROD/UX) · delta route/`onlyOutZone` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |
| mfeStdRoute | `/patrol/attendance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/attendance-logs` |
| bff | `web-bff/api/v1/patrol/attendance-logs` |
| lookup | `GET /integration/road-routes/search` |
| taskId | `task_35eccf28` |
| prior Dev | `task_47f14701` · implement `done` |
| autoApprove | ON |
| method | static review live `AttendanceListPage` + `AttendanceFormSlideout` + `lookups.ts` + endpoint/service + Patrol API/BFF · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-14T17:30:00.000Z` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/patrol/attendance` | Route mount · không 404 | **PASS** (`index.tsx` `patrol/attendance`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · grid/empty · **không** nested `CatalogListShell` · **không** blank 0px / title clip | **PASS** (LAYOUT-06 · `.page` + skeletonRows=8) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search Enter (không nút Tìm) | `SearchTextInput` `onSearch` · `pulseSearch` · page=1 | **PASS** |
| S4 | Status Select change | refetch page=1 | **PASS** (`handleStatusChange` → `applyFilters`) |
| S5 | Toolbar Refresh / +Tạo mới / Config | catalogToolbar · Config hint · Tạo mới **chỉ Zone B** | **PASS** |
| S6 | History toolbar/menu | alert stub | **PASS** |
| S7 | Row menu View/Edit/Copy/Delete/History | Slideout modes · Delete confirm soft | **PASS** (`buildCatalogRowMenuItems`) |
| S8 | Form Create/Edit/View/Copy | Footer-only Hủy/Lưu · View Đóng/Sửa/Sao chép · no Z1 top Save | **PASS** (`customFooter` · no `attendance-btn-save-top`) |
| S9 | No ERP.* | FE BASE `/patrol/attendance-logs` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` · **cấm** `/api/v1/attendance/*` | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title «Chấm công và định vị» · `fas fa-user-clock` · **cấm** Thêm mới trên A | **PASS** (GAP-TL-ATT-ICON) |
| B | SearchTextInput + status Select + **SearchInput tuyến** + **Checkbox Chỉ lệch zone** · refresh · history · cog · add · delete · **không** `filterMaxWidthPx` · **không** nút Tìm | **PASS** (GAP-PO-ATT-04 · GAP-TL-ATT-FILTER-MAX) |
| C | `LinCatalogDataGrid` `resizable: true` · STT/□/Mã/NV/Tuyến/Thời điểm/Lý trình/InZone/Trạng thái/GPS · click mã → View · **không** `QL.22` trên mock | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `data-catalog-list-page` · `useServerPagedListLoading` · filter đổi → page=1 | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | Toolbar + row menu + `?form=` deep-link | **PASS** |
| QA-21 | Create | Toolbar +Thêm → Slideout create → footer Lưu → POST | **PASS** (API + demo fallback) |
| QA-22 | Edit | Row/toolbar Edit → PUT | **PASS** |
| QA-23 | View | Code link / menu → `readOnly` Input/Select · footer Đóng · Sửa · Sao chép · **không** disabled xám toàn form | **PASS** |
| QA-24 | Copy | Copy → POST new · code tự sinh | **PASS** (`genCode` / API `CC-yyyyMMdd-nnn`) |
| QA-25 | Delete toolbar/row | confirm → soft delete · toast · refresh | **PASS** |
| QA-26 | No duplicate Save on form top | `attendance-btn-save-top` absent | **PASS** |
| QA-27 | Leave dirty | confirm trước đóng Slideout | **PASS** |
| QA-28 | Perm | `patrol.attendance-logs.*` · local all true | **PASS** |

## Delta Dev (`task_47f14701`) — QA re-smoke (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| D1 | Filter `route` | Zone B SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` · `getList` qs `route` · BE exact `AttendanceLog.Route` | **PASS** |
| D2 | Filter `onlyOutZone` | Checkbox → qs `onlyOutZone=true` · BE `InZone==false` · demo `filterRows` | **PASS** |
| D3 | GPS search | `search` Contains `Lat`/`Lng` ToString (API) + local store | **PASS** |
| D4 | T-UI-LKP-01 | Form `route` SearchInput · persist **code** · `GET /integration/road-routes/search` · fallback seed 38 · **cấm** Text tuyến · **cấm** Patrol proxy lookup | **PASS** · `dropdownPortal: true` |
| D5 | Seed 38 | `ROAD_ROUTE_SEED` length 38 · có `QL.1` · **không** `QL.22` · attendanceStore mock `QL.1` | **PASS** (GAP-PO-ATT-01 · GAP-SA-ATT-SEED) |
| D6 | T-BE-VAL-01 | Create/Update Route ∈ `rmms_road_routes` IsActive · FE `assertWritable` chặn `QL.22` · status allow-list 3 enum · 422/Error VN | **PASS** |
| D7 | T-BFF-01 | `BuildListPath` = `Request.QueryString` passthrough · no business logic | **PASS** |
| D8 | T-UI-FIELD-01 | userName Text P1 · datetime-local UTC ISO · lat/lng number · InZone Trong/Ngoài · status Dropdown 3 | **PASS** (GAP-PO-ATT-03 KEEP) |
| D9 | T-UI-PROD-01 | Slideout KEEP · **cấm** Resource · **cấm** full-page | **PASS** |
| D10 | T-UI-UX-01 | `fa-user-clock` · no `filterMaxWidthPx` · portal | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Lưu thiếu required | Banner + `fieldInvalid` | **PASS** |
| N2 | Persist `QL.22` | FE throw VN · BE `ArgumentException` QL.22 | **PASS** |
| N3 | Status ngoài allow-list | Error VN 3 enum | **PASS** |
| N4 | API/BFF down | `attendanceService` fallback `attendanceStore` | **PASS** (dev · không P0) |
| N5 | Lookup API empty/fail | `filterSeed` 38 | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/patrol/attendance-logs?search&status&route&onlyOutZone&page&pageSize` | **PASS** |
| API-02 | GET | `/api/v1/patrol/attendance-logs/{id}` | **PASS** |
| API-03 | POST/PUT/DELETE | same prefix · validate route/status | **PASS** |
| BFF-01 | * | `web-bff/api/v1/patrol/attendance-logs` + QS | **PASS** |
| LKP-01 | GET | `/integration/road-routes/search` | **PASS** (FE client) |

**Cấm** `ERP.*` · `Domains/Master` write · `api/v1/rmms/*` — **PASS** (không thấy path).

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | — | GAP-PO-ATT-* / GAP-SA-ATT-* / GAP-TL-ATT-* **CLOSED** (Dev + QA re-audit) |
| GAP-P2-PERM-ATTR | P2 | Controller `TODO [RequirePermission]` khi CommonLib ≥1.4.0 — **không block** (T-PERM stub) |
| Out of pack | P2 | Kind E / Leaflet / Face NFC / Excel / users LKP — **DEFER** |

## Verdict

**PASS** · T-QA-01 · T-QA-CRUD-01 · handoff `/agent-review`.

## Build gate (`task_35eccf28`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (Field MFE) | **PASS** (`tsc --noEmit` 0) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API + Patrol BFF Release | **PASS** (`task_47f14701`) |

## Handoff → Review

| Field | Value |
|-------|-------|
| Next | `/agent-review` · `review/findings.md` |
| autoApprove | ON → enqueue review (roleOnly QA **không** chạy Review trong task này) |
| Notes | Kind B Slideout · filter route + onlyOutZone · seed QL.1 · no ERP |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:30:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_35eccf28` |
| contentHashPriorDev | `task_47f14701` |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| devSkillVersion | 2026.08.14.5 |
