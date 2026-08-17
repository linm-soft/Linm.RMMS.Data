# Implement — rpt-kiem-tra-cau

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` (Kind **E**) |
| changeScope | `edit_page` |
| mfeStdRoute | `/bao-cao/kiem-tra-cau` |
| mfeStdUrl | `http://localhost:9311/bao-cao/kiem-tra-cau` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/bridge-inspections` |
| taskId | `task_31c75947` |
| autoApprove | **ON** |
| prior · team_lead | `confirmed` · `task/rpt-kiem-tra-cau.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T14:30:00.000Z` |

**Cấm ERP.*** · **cấm** path API mới · **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** `configHint`.

## retry.ssot_rereview (HARD · live 2026-08-16)

Re-audit `BridgeInspectionReportPage.tsx` + `BridgeInspectionFilterBar.tsx` **trước Write**. **Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | After Dev | Gap |
|---|-------|-----------|-----|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested CatalogListShell | **PASS** | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn | — |
| 4 | flex + skeleton | **PASS** `skeletonRows={8}` | — |
| 5 | reportToolbar + Config FULL analog | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor | — |
| 6 | Filter `LinErpListFilterBar` SearchInput | **PASS** | — |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** | — |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load | **PASS** | — |
| 11 | Làm mới `!viewed` | **PASS** toast «Chưa xem» · **không** `applyAndView` (**T-UI-ACT-01** / DES-KTC-01) | closed |
| 12 | Excel viewed + applied | **PASS** | — |
| 13 | Tab draft đến Xem | **PASS** | — |
| 14 | Lookup SearchInput · **cấm QL.22** | **PASS** | — |
| 15 | pageSize 50/100/200/500 | **PASS** | — |
| 16 | TZ `vi-VN` từ `day` | **PASS** | — |
| 17 | ERP.* / plural reports | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast SSOT | **PASS** | — |
| 20 | Drill `/csdl-so-sach?kind=bridge-inspections&id=` | **PASS keep live** | — |
| 21 | Chart SoCai KPI | **PASS** **Dòng · Tuyến · Ưu tiên cao** (**T-UI-RPT-CHART-01**) | closed |
| 22 | Seed 12 CUC2 | **PASS** BE keep | — |
| 23 | `FilterRoute` exact | **PASS** BE keep | — |
| 24 | leftover Kind B schema | n/a Kind E | — |
| 25 | Query `search`+`tab`+`type` | **PASS** | — |
| 26 | Summary BE GroupBy | **PASS** · **không** FE GroupBy | — |
| 27 | Một slug 3 tab | **PASS** | — |

## FE (this role)

- `src/pages/BridgeInspectionReportPage/BridgeInspectionReportPage.tsx`
  - `reloadAll`: nếu `!viewed` → `dispatchAppToast` «Chưa xem» · return · **không** fetch.
  - Chart KPI: Dòng = số dòng trang; Tuyến = unique `route`; Ưu tiên cao = `highPriorityCount` (summary) hoặc `priority===immediate` (kết quả).
- **Không** đổi route / filter bar / export / tab draft / drill.

## BE / BFF (Step 4b — **không** đụng API)

- **Keep** `GET api/v1/report/bridge-inspections` + `/export` · BFF proxy QS.
- **Không** migration · **không** path mới · **không** folder domain mới · **không** `ERP.*`.
- FilterRoute exact · summary GroupBy BE · pageSize allow-list — **giữ**.

## Build

- MFE `yarn typecheck` **PASS** (exit 0)
- MFE `yarn build` **PASS** (webpack 5.109.2 · 3 size warnings · exit 0)
- BE `dotnet build` **không chạy** — Dev **không** đụng API/DTO/BFF (Step 4b keep live `ReportQueryController` + `ReportBffController`)

## Handoff QA

- Scenarios: Xem · Làm mới chưa xem = toast không lưới · KPI 3 nhãn · Excel sau Xem · tab draft · form OUT.
- Roles Review = **pending**. **Cấm** nhảy Review.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
