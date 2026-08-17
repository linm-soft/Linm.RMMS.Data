# Implement — rpt-tong-hop-bao-tri

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` (Kind **E**) |
| mfeStdRoute | `/bao-cao/tong-hop-bao-tri` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tong-hop-bao-tri` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-summary` |
| taskId | `task_b6fed297` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T21:25:00.000Z` |
| prior | team_lead `confirmed` · `task/rpt-tong-hop-bao-tri.md` |

**Cấm ERP.*** · **cấm** ghi đè `WorklogReportPage` / `MaintenanceWorkLogReportPage` · **cấm** path API mới P1 · **cấm** Kind B schema.

## retry.ssot_rereview (HARD trước Write)

Live: `MaintenanceSummaryReportPage.tsx` + `MaintenanceSummaryFilterBar.tsx` · BE keep `GET api/v1/report/maintenance-summary`.

| # | Check | After Dev |
|---|-------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `resizable: true` |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn (kể cả chưa Xem) |
| 4 | flex + skeleton | **PASS** `.page` · `skeletonRows={8}` |
| 5 | reportToolbar + Config FULL | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B editor |
| 6 | Filter `LinErpListFilterBar` SearchInput ×3 + Date + Input | **PASS** |
| 7 | tree_master | n/a |
| 8 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** |
| 9 | Thêm mới Zone A | **PASS** không nút |
| 10 | Xem mới load · empty hint | **PASS** |
| 11 | Làm mới `!viewed` toast không fetch | **PASS** |
| 12 | Excel viewed + applied · `maintenance-summary.csv` | **PASS** |
| 13 | Lookup SearchInput · cấm QL.22 | **PASS** |
| 14 | pageSize 50/100/200/500 | **PASS** |
| 15 | TZ `formatDayVi` từ `day` | **PASS** |
| 16 | KPI 6 từ `data.kpis` filtered set | **PASS keep** |
| 17 | toast SSOT · cấm alert | **PASS** |
| 18 | Drill WO `/maintenance?id=` | **PASS** |
| 19 | Chart SoCai client | **PASS** |
| 20 | leftover Kind B `buildDynamicGridColumns` | **OK Kind E** `const columns` report |
| 21 | Query `q` + `workType` | **PASS** |
| 22 | Default kỳ không cắt seed July | **PASS** GAP-TL-THBT-01 |
| 23 | ERP.* / `api/v1/reports` | **none** |

## GAP closed

| ID | Change |
|----|--------|
| **GAP-TL-THBT-01** / **T-UI-FIELD-01** | `defaultSeedCoverRange()`: `from=2026-07-25` · `to` = last day tháng hiện tại. **Xem** không ép fallback tháng: `from`/`to` trống → không gửi query date → FilterDay no-op (all). **Cấm** chỉ widen 1 ngày. |

## FE

- `src/pages/MaintenanceSummaryReportPage/MaintenanceSummaryReportPage.tsx`
- Route `/bao-cao/tong-hop-bao-tri`
- `reportEndpoint.getMaintenanceSummary` / `exportMaintenanceSummary` — **keep** `q` + `workType`

## BE / BFF (Step 4b)

- **Keep** — Dev P1 **không** đụng API/DTO/Entity/Migration.
- Live: `GET api/v1/report/maintenance-summary` + `/export` · BFF proxy · seed 15 CUC2 · KPI filtered set · FilterRoute exact.
- **Không** `ERP.Service.*` · **không** `Domains/Master` · **không** `api/v1/rmms/*`.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 compiled successfully) |
| BE `dotnet build` | **n/a** — không đụng API |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
