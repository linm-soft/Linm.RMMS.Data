# Implement — reports (Kind E) · Dev `task_cc67808f`

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| taskId | `task_cc67808f` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| retry.ssot_rereview | **done** trước Write — live Kind E shell PASS; GAP cùng surface Date + Dropdown display (không patch 1 chỗ) |
| updatedAt | `2026-08-15T08:35:00.000Z` |

## retry.ssot_rereview (live trước Write · `ReportListPage`)

| # | Check | Live trước | Sau Dev |
|---|-------|------------|---------|
| 1 | 1× `LinPageLayout` · cấm nested CatalogListShell | PASS kind=`report` | giữ |
| 2 | `LinCatalogDataGrid` kéo cột ON | PASS `resizable: true` | giữ |
| 3 | Footer `LinCatalogListPagination` | PASS | giữ |
| 4 | flex + skeleton | PASS | giữ |
| 5 | reportToolbar + config FULL | PASS stub | **`LinReportTableConfigModal`** · persist `load/saveErpReportDisplayConfig` |
| 6 | list_parity Date | native `<input type="date">` **GAP** | **`LinListFilterDateRangeField`** · ẩn family=`assets` |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · cấm Resource/Slideout/View=readOnly | Navigate list | giữ |
| 9 | Thêm mới Zone A | không | giữ |
| 10 | Xem mới load | PASS | giữ |
| 11 | Excel check-in only | PASS | giữ |
| 12 | Dropdown display condition/severity/status | plain Text **GAP** | label VN readonly `data-dropdown-display` |
| 13 | Lookup 38 + empty | PASS | giữ |
| 14 | pageSize 50/100/200/500 | PASS | giữ |
| 15 | TZ vi-VN | PASS | giữ |
| 16 | ERP.* / `api/v1/reports` | none | giữ |
| 17 | `filterMaxWidthPx={null}` | PASS | giữ |
| 18 | toast · cấm alert | PASS | giữ |

## Changes

### FE `Linm.Web.RMMS.Report`

- **T-UI-FIELD-01:** Zone B from/to = `LinListFilterDateRangeField` (SSOT common-components) · query ISO date-only `from`/`to` · **ẩn** khi Loại BC = tài sản.
- **T-UI-FIELD-02:** grid `condition` / `severity` / `status` map label VN (Tốt·TB·Kém · Cao·TB·Nghiêm trọng·Thấp · Mở·Đang xử lý·Đóng) · cell readonly, **không** editor.
- **T-UI-RPT-01:** `LinErpListFilterBar` + `LinReportPeriodSelectorFields` · Xem = 🔍 `onSearch` · **cấm** `ErpListHeaderFilters` + nút Tìm / Xem riêng.
- **T-UI-RPT-CONFIG-01:** `LinReportTableConfigModal` FULL (grid + footer + print batch + chart) · `load/saveErpReportDisplayConfig` · **cấm** `configHint`.
- **T-UI-RPT-CHART-01:** `resolveReportCharts` + `ReportChartModal` (SoCai pattern, không copy Finance) · **cấm** stub toast. In = `LinReportPrintScopeModal`.
- Shell Kind E / SearchInput / Excel / form redirect: **không rewrite**.

### BE `Linm.RMMS.WebService` domain Report (Step 4b)

- **Keep** `GET api/v1/report/assets|incidents|checkins` + `checkins/export` · BFF proxy.
- **Không** migration · **không** endpoint mới · **cấm** ERP.* · **cấm** `api/v1/reports`.

## Build

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** (webpack 0 errors · 3 size warnings) |
| BE `dotnet build` API (`-o` `_build-verify-report`; default bin locked by running `RMMS.Service.Api`) | **PASS** 0 error |
| BE Report.Bff | **PASS** (compiled with solution; Report.Bff.dll) |

Handoff QA: `qa/scenarios.md` · mfeStdUrl `http://localhost:9311/bao-cao`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-dev -->
