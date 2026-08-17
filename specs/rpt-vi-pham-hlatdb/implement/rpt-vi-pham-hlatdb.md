# Implement — rpt-vi-pham-hlatdb (Dev · task_17bb2aa6)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | **`report`** Kind **E** |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_17bb2aa6` |
| autoApprove | **ON** |
| updatedAt | `2026-08-17T00:20:00.000Z` |

## retry.ssot_rereview (live trước Write · 2026-08-17)

Audit `src/pages/RowViolationReportPage/RowViolationReportPage.tsx` + `RowViolationFilterBar.tsx` + `src/services/report/endpoint.ts` + route `bao-cao/vi-pham-hlatdb`. Surface Kind E (prior `task_24fb0ec1`). Task này **không** patch 1 chỗ — đóng GAP TL còn lại trên cùng surface.

| # | Check | Required | Live | Verdict |
|---|-------|----------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | yes | 1× `kind="report"` | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default **ON** | yes | `resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | **PASS** |
| 3 | Footer `LinCatalogListPagination` **luôn** | yes | luôn render · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | yes | `.page` + `skeletonRows={8}` | **PASS** |
| 5 | reportToolbar + Config FULL · **cấm** `LinListTableConfigModal` · **cấm** Kind B schema editor | yes | `buildRmmsReportToolbar` · `ReportDisplayConfigModal` | **PASS** |
| 6 | `LinErpListFilterBar` SearchInput tab/tuyến/TT · Date · Input | yes | `RowViolationFilterBar` | **PASS** |
| 7 | Form OUT | yes | không CRUD / Resource / Slideout / View=readOnly | **PASS** |
| 8 | Xem mới load | yes | draft → Xem | **PASS** |
| 9 | list_parity Kind E | yes | 2 tab · drill · Excel subset | **PASS** |
| 10 | tree_master | N/A | — | **N/A** |
| 11 | Cột ẩn default Design | `minutesCommune` `minutesAdmin` ẩn tab detail | seed `visible: false` + migrate `rpt-vi-pham-hlatdb-hide-bb-default-v1` (giữ width) | **PASS** (GAP-TL-HLATDB-01) |
| 12 | Query FE canonical | `tab` `status` `routeId` `from` `to` `q` · **cấm** `type`/`search` | GET/export row-violations **không** set alias | **PASS** |
| 13 | Kind B leftover | **cấm** `useCatalogUiSchema` | Kind E `useMemo` columns + prefs | **PASS** |

Form checklist: **OUT**.

## FE

- Route `/bao-cao/vi-pham-hlatdb` → `RowViolationReportPage` · pageId `rpt-vi-pham-hlatdb` · testId `rmms-row-violation-report`
- Filter draft → **Xem** apply · Enter Input = Xem
- Tab detail: seed ẩn `minutesCommune` / `minutesAdmin`; prefs cũ migrate 1 lần (không reset width)
- `GET /report/row-violations` params `tab` `status` `routeId` `from` `to` `q` `page` `pageSize`
- Export `GET /report/row-violations/export` cùng canonical QS · CSV subset cột hiện

## BE / BFF Step 4b

Không đụng API/DTO/BFF path (delta = FE GAP-01). Giữ:

- `GET api/v1/report/row-violations` + `/row-violations/export`
- BFF `web-bff/api/v1/report/row-violations` (+ export) QS passthrough
- DOMAIN-MAP slug `rpt-vi-pham-hlatdb` → **Report**
- **Không** migration · **không** `ERP.*`

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** webpack 5.109.2 · `linm-rmms-report.6b8f29dc.js` |
| BE `dotnet build` | **N/A** — không sửa API/BFF task này |

## Handoff

enqueue **qa** · Review = pending đến lượt (chain ON · cùng feature · roleOnly=dev xong).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
