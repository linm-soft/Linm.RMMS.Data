# Implement — rpt-tuan-kiem

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` Kind E |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-kiem` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-inspect` |
| BFF | `web-bff/api/v1/report` |
| taskId | `task_7f4faa5b` |
| prior | TL `confirmed` · `task/rpt-tuan-kiem.md` |
| autoApprove | **ON** |
| chain | **ON** → enqueue **qa** (role này không chạy QA) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T22:50:00.000Z` |

## retry.ssot_rereview (HARD · live MFE trước/sau Write)

Audit `PatrolInspectReportPage.tsx` + `PatrolInspectFilterBar.tsx` + `reportEndpoint` `/patrol-inspect` + `ReportQueryController` + BFF `patrol-inspect` — **không** Kind B schema · **không** path API mới.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested CatalogListShell | **PASS** | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `visibleColumns` `resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` luôn | **PASS** kể cả `!viewed` · `totalCount=0` | — |
| 4 | flex + skeleton | **PASS** `.page` + `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `buildRmmsReportToolbar` + `ReportDisplayConfigModal` | **cấm** `LinListTableConfigModal` / `configHint` / Kind B editor |
| 6 | Filter V1–V5 `LinErpListFilterBar` | **PASS** SearchInput ×3 + Date + Input · Xem=`onSearch` · 0 Excel trên bar | — |
| 7 | list_parity SearchInput · **cấm** native `<select>` | **PASS** | — |
| 8 | tree_master Company→QL→Km | n/a P1 OUT | — |
| 9 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** | — |
| 10 | Thêm mới Zone A | **PASS** không nút | — |
| 11 | Xem mới load · empty hint | **PASS** | — |
| 12 | Làm mới `!viewed` toast không fetch | **PASS** | — |
| 13 | Excel viewed + `patrol-inspect.csv` | **PASS** | — |
| 14 | Lookup CUC2 · **cấm QL.22** | **PASS** `lookups.ts` filter | — |
| 15 | pageSize 50/100/200/500 | **PASS** pager SSOT + BE allow-list | — |
| 16 | TZ `formatDayVi` từ `day` | **PASS** | — |
| 17 | ERP.* / `api/v1/reports` | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast · **cấm** alert/confirm | **PASS** | — |
| 20 | Drill `/patrol?id=` | **PASS** | — |
| 21 | Chart SoCai client | **PASS** | — |
| 22 | Seed inspect only | **PASS** BE keep | — |
| 23 | Query `q` | **PASS** FE gửi `q` | — |
| 24 | Title Zone A **Báo cáo tuần kiểm** | **PASS** (Dev sửa casing lowercase → title case) | GAP-DEV-BTK-TITLE-01 **fixed** |

## Code

### FE (`Linm.Web.RMMS.Report`) — keep Kind E

- `src/pages/PatrolInspectReportPage/PatrolInspectReportPage.tsx` — title/subtitle **Báo cáo tuần kiểm**
- `src/pages/PatrolInspectReportPage/PatrolInspectFilterBar.tsx` — unchanged
- route `bao-cao/tuan-kiem` · `reportService.getPatrolInspect` / `exportPatrolInspect`

### BE (`Linm.RMMS.WebService`) — Step 4b **keep** (không đụng API P1)

- `GET api/v1/report/patrol-inspect` + `/export` live
- BFF proxy `web-bff/api/v1/report/patrol-inspect`
- **không** migration · **không** folder domain mới · **không** ERP.*

## T-* Dev

| id | Result |
|----|--------|
| T-UI-LIST-01 … T-UI-UX-01 | **PASS** |
| T-UI-FORM / LEAVE | **OUT PASS** |
| T-BE-01/02 · T-BFF-01 · T-LKP-01 | **keep PASS** (không rewrite) |
| T-PERM-01 | stub document only |

## Build

| Gate | Command | Result |
|------|---------|--------|
| MFE typecheck | `yarn typecheck` | **PASS** `tsc --noEmit` exit 0 |
| MFE build | `yarn build` | **PASS** webpack compiled successfully |
| BE `dotnet build` | **skip** — Dev **không** đụng API/DTO/BFF (TL T-BE keep) | N/A |

**Cấm** `completed` nếu build fail — cả hai MFE gate **PASS**.

## Handoff QA

- mfeStdUrl `http://localhost:9311/bao-cao/tuan-kiem`
- Kind E · Xem · filter SearchInput · Excel toolbar · chỉ `inspect` · form OUT
- Roles sau = **pending** đến lượt · **cấm** nhảy Review

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
