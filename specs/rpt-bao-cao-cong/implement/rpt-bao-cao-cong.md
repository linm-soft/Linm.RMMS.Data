# Implement — rpt-bao-cao-cong

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `report` (Kind E) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/bao-cao-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/bao-cao-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · roles sau = pending |
| prior · team_lead | `done` · `task/rpt-bao-cao-cong.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_d4e13f04` |
| updatedAt | `2026-08-15T15:20:00.000Z` |

**Cấm** `ERP.Service.*` · Resource / Slideout / View=`readOnly` · query `staffId` P1.

## retry.ssot_rereview (live trước Write)

Live: `src/pages/WorklogReportPage/WorklogReportPage.tsx` + `WorklogFilterBar.tsx` · `:9311`.

| # | SSOT | Live (sau Dev) | Verdict |
|---|------|----------------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested CatalogListShell | 1× `kind="report"` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` từ display `resizable !== false` + mỗi cột visible `resizable: true` + migrate localStorage | **PASS** (đóng GAP-TL-BCC-RESIZE) |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer **không** gate `showFooterPagination` | **PASS** (đóng GAP-TL-BCC-FOOTER / GAP-DS-BCC-01 / GAP-SA-BCC-FOOTER) |
| 4 | flex + skeleton | `.page` flex · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | refresh/chart/print/`onEditConfig` | **PASS** |
| 6 | list_parity SearchInput + Date | `WorklogFilterBar` | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** | không form / không add Zone A | **PASS** |

Cùng surface: footer + resize đóng cùng page — không patch một chỗ.

## FE (P1)

- Zone D luôn `LinCatalogListPagination` · `totalCount=0` khi chưa Xem · pageSize 50/100/200/500.
- Cột grid `resizable: true` · display config default ON (migrate `rmms-worklog-report-resizable-default-on-v1`).
- Config flag `showFooterPagination` giữ trong modal (print/chart) — **không** ẩn pager.
- Lookup / field / UX giữ prior: SearchInput kỳ/tuyến/NV/zone · `search` không `staffId` · KPI 4 · SVG · drill Field.

## BE / BFF (Step 4b — ALIGN, không endpoint mới)

T-BE/T-BFF đã có trên `Linm.RMMS.WebService` — **không** migration · **không** folder domain mới · **không** `ERP.*`.

| ID | Path | Action |
|----|------|--------|
| T-BE-01 | `GET api/v1/report/worklogs` | giữ |
| T-BE-02 | `GET api/v1/report/worklogs/export` | giữ CSV UTF-8 BOM |
| T-BFF-01 | `web-bff/api/v1/report/worklogs` | giữ proxy |
| T-LKP-01 | `GET api/v1/integration/road-routes/search` | consume only |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack compiled, size warnings only) |
| BE `dotnet build` API | **PASS** (isolated `-o .build-verify/api`) |
| BE `dotnet build` BFF | **PASS** (`LINM.RMMS.Report.Bff`) |

## Handoff QA

QA `qa/scenarios.md` = **pending** đến lượt. Review = pending.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
