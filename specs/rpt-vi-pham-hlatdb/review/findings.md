# Review — rpt-vi-pham-hlatdb (Vi phạm HLATĐB) · Review `task_bf056dec`

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| packKind | **`report`** Kind **E** (packet board `list` stale — **cấm** Kind B) |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| mfeStdRoute | `/bao-cao/vi-pham-hlatdb` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| bff | `web-bff/api/v1/report` |
| prior · qa | `qa/scenarios.md` **PASS** · `task_29672bef` |
| prior · dev | implement **done** · GAP-TL-HLATDB-01 closed · `task_17bb2aa6` |
| autoApprove | **ON** |
| chain | **ON** · roleOnly=review · **không** enqueue role sau (pipeline closed) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_bf056dec` |
| method | static re-audit live `RowViolationReportPage` + `RowViolationFilterBar` + `endpoint.ts` GET/export + `lookups.ts` CUC2 strip `QL.22` + `ReportService.FilterRowViolations`/`FilterRoute` exact + BFF Forward + QA PASS + `yarn typecheck` + `yarn build` |
| updatedAt | `2026-08-17T00:30:00.000Z` |

## Verdict

**PASS** · P0 **none** · `review_confirm=approve` · feature pipeline **closed**.

## SSOT surface (live trước confirm)

| # | Gate | Required | Live | Verdict |
|---|------|----------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | yes | 1× `kind="report"` · `pageId` `rpt-vi-pham-hlatdb` | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default **ON** | yes | `resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` + `tableConfig.resizable` | **PASS** |
| 3 | Footer `LinCatalogListPagination` **luôn** | yes | luôn · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | yes | `.page` + `skeletonRows={8}` + `data-catalog-list-page` | **PASS** |
| 5 | Config FULL Kind E | `ReportDisplayConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` / `useCatalogUiSchema` / `LinListTableConfigModal` / `configHint` | `buildRmmsReportToolbar` + `ReportDisplayConfigModal` · grep leftover **0** | **PASS** |
| 6 | Filter SearchInput + Date + Input · **cấm** native `<select>` | yes | `RowViolationFilterBar` · `onSearch` = Xem | **PASS** |
| 7 | Form OUT | **cấm** Resource / Slideout / View=readOnly / Thêm mới Zone A | không CRUD | **PASS** |
| 8 | Xem mới load · draft ≠ applied | yes | `queryParams` applied; `load` gated `viewed` | **PASS** |
| 9 | Query FE canonical | `tab` `status` `routeId` `from` `to` `q` · **cấm** `type`/`search` | `getRowViolations` / `exportRowViolations` | **PASS** |
| 10 | GAP-TL-HLATDB-01 | ẩn default BB xã/HC | seed `visible: false` + migrate `rpt-vi-pham-hlatdb-hide-bb-default-v1` | **PASS** |
| 11 | BE / BFF | `api/v1/report/row-violations` (+ export) · FilterRoute **Equals** · **cấm** ERP.* / `api/v1/rmms/*` / plural leaf `reports` | Report domain + BFF Forward | **PASS** |
| 12 | Toast SSOT | **cấm** `window.alert`/`confirm` | `dispatchAppToast` | **PASS** |
| 13 | Build | typecheck + webpack PASS | Review `task_bf056dec` re-run | **PASS** |

## Align vs prior roles

| Source | Check | Review |
|--------|-------|--------|
| QA T-QA-01 | PASS · P0 none | **đồng ý** |
| QA QA-01…16 / N1…N10 | PASS (code) | **đồng ý** |
| Dev GAP-TL-HLATDB-01 | closed | **đồng ý** — `HIDDEN_DETAIL_KEYS` + migrate 1 lần giữ width |
| TL T-* | Kind E A–D · FORM OUT · LKP SearchInput · BE exact route | **đồng ý** keep |
| Context §3 API `api/v1/reports` (plural) | stale vs SA | **P2 docs** — runtime dùng `api/v1/report` |

## P0 / GAP

Không P0. Không mở GAP mới.

## P1 / P2 (không block ship)

| ID | Severity | Note |
|----|----------|------|
| T-PERM-01 | P1 | `report.vi-pham-hlatdb.read` stub — chưa `[RequirePermission]` CommonLib |
| QA-15 | P2 UX | Kỳ mặc định tháng máy; seed 12 dòng 2026-07-27…08-01 — user đổi kỳ để đủ 12 |
| CTX-API-plural | P2 docs | `docs/context/features/rpt-vi-pham-hlatdb.md` vẫn ghi `/api/v1/reports/...` |
| EF RowViolation | P2 | in-memory 12 · không migration P1 (SA) |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** (webpack 5.109.2 compiled successfully) |
| BE `dotnet build` | **n/a this role** — Review không đụng API/BFF; prior Dev/QA keep contract |

## autoApprove

`review_confirm` = **approve**. Pipeline step 6 **confirmed**. Không enqueue role kế (hết chuỗi data-analy → … → review).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
