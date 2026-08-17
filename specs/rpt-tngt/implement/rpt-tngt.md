# Implement — rpt-tngt (Dev · task_63b4bc17)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tngt` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_63b4bc17` |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T20:35:00.000Z` |

## retry.ssot_rereview (live trước Write · `TrafficAccidentReportPage`)

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | **PASS** pageId `rpt-tngt` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn | — |
| 4 | flex + skeleton | **PASS** `.page` · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema | — |
| 6 | `LinErpListFilterBar` SearchInput tab/tuyến/mức | **PASS** | — |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** | — |
| 8 | Thêm mới Zone A | **PASS** không nút | — |
| 9 | Xem mới load | **PASS** `viewed` | — |
| 10 | Làm mới `!viewed` | **PASS** toast «Chưa xem» | — |
| 11 | Excel viewed + applied + subset cột | **PASS** | — |
| 12 | Lookup SearchInput · cấm QL.22 · cấm filter type | **PASS** | — |
| 13 | pageSize 50/100/200/500 | **PASS** | — |
| 14 | TZ `formatAtVi` | **PASS** | — |
| 15 | Drill `/incident?id=` | **PASS** | — |
| 16 | Chart SoCai | **PASS** | — |
| 17 | Tab `serious` / `half-year` default **draft** | **GAP-TL-TNGT-01** → **closed** `handleTabDraftChange` | — |
| 18 | leftover Kind B schema | **OK** Kind E | — |

Cùng surface: **không** rewrite Kind E → Kind B. **không** path API mới.

## GAP-TL-TNGT-01 (closed)

Đổi tab trên **draft** (không fetch · không đổi applied grid):

- `serious` + mức trống → `sevDraft = 'Nghiêm trọng'`
- `half-year` → `fromDraft`/`toDraft` = `halfYearRange()` (6 tháng)

`applyAndView` giữ fallback lúc Xem (BE `serious` + severity trống vẫn gán Nghiêm trọng).

## FE

- `TrafficAccidentFilterBar` `onTabChange={handleTabDraftChange}`
- Route `/bao-cao/tngt` · testid `rmms-tngt-report` · pageId `rpt-tngt`
- Query canonical `search` · type khóa `TNGT`

## BE / BFF Step 4b

**Không đụng API** (SA keep). Verify DOMAIN-MAP `rpt-tngt` → Report · `GET api/v1/report/traffic-accidents` + export. **Cấm** ERP.* · **cấm** migration.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** `tsc --noEmit` |
| MFE `yarn build` | **PASS** webpack 5.109.2 · `linm-rmms-report.b44af9b2.js` |
| BE `dotnet build` | **skip** — Dev không đụng API |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
