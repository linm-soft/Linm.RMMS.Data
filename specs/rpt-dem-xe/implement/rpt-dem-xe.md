# Implement — rpt-dem-xe (Dev · task_95b28cef)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dem-xe` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_95b28cef` |
| prior | TL `task_05761cf7` confirmed · DES-DX-01/02/03 |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T06:50:00.000Z` |

## retry.ssot_rereview (live trước Write · 2026-08-16)

Audit `TrafficCountReportPage.tsx` + `TrafficCountFilterBar.tsx` — **cấm** chỉ patch Làm mới nếu Excel/tab/`formatDayVi` còn GAP.

| # | Check | Live trước | Sau Write |
|---|-------|------------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | PASS | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default ON | PASS | **PASS** |
| 3 | Footer `LinCatalogListPagination` | PASS | **PASS** |
| 4 | flex + skeleton | PASS | **PASS** |
| 5 | reportToolbar Config FULL analog · cấm `LinListTableConfigModal` / `configHint` / Kind B schema editor | PASS | **PASS** |
| 6 | `LinErpListFilterBar` SearchInput ×3 + Date + Input | PASS | **PASS** |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | PASS | **PASS** |
| 8 | Thêm mới Zone A | PASS không nút | **PASS** |
| 9 | DES-DX-01 Làm mới `!viewed` | GAP `applyAndView` | **PASS** toast «Chưa xem» · không fetch |
| 10 | DES-DX-02 Excel | GAP draft + Excel luôn | **PASS** `canExport: viewed` · params applied (`type` `routeId` `stationId` `from` `to` `search`) · filename `viewTab` |
| 11 | DES-DX-03 tab khi viewed | GAP chỉ `setTabDraft` | **PASS** `handleViewTabChange` set `viewTab` + `page=1` refetch `type` · không apply draft route/station/kỳ/search |
| 12 | T-UI-FIELD `formatDayVi` | GAP ISO raw | **PASS** `formatDayCell` vi-VN · range `min..max` → `a → b` |
| 13 | leftover Kind B schema | OK Kind E | **PASS** giữ `const columns` report |
| 14 | ERP.* / path mới / FilterRoute | none | **PASS keep** không đụng BE |

## FE

- `TrafficCountReportPage`: `reloadAll` gated · `handleExport` applied · `handleViewTabChange` · `formatDayCell` cột Ngày KQ/B.1.
- `TrafficCountFilterBar`: không đổi layout; tab callback nhận handler mới từ page.
- **Cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## BE (Step 4b)

**Không đụng API** (TL T-BE-01/02 keep). Giữ `GET /api/v1/report/traffic-counts` + `/export` · FilterRoute exact · B.2 GroupBy BE · seed 12. **Không** migration · **cấm ERP.*** · **cấm** path mới.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · `linm-rmms-report.cba78c1a.js`) |
| BE `dotnet build` | **N/A** — không sửa `Linm.RMMS.WebService` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
