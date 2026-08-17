# Implement — rpt-nhat-ky-cong-viec

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-cong-viec` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `report` (Kind **E**) |
| changeScope | `edit_page` |
| mfeStdRoute | `/bao-cao/nhat-ky-cong-viec` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-cong-viec` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-work-logs` |
| taskId | `task_8c5ea930` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T14:55:00.000Z` |

**Cấm ERP.*** · **cấm** ghi đè `WorklogReportPage` / `api/v1/report/worklogs` · **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** path API mới P1.

## retry.ssot_rereview (HARD trước Write · live MFE 2026-08-16)

Audit `MaintenanceWorkLogReportPage.tsx` + `MaintenanceWorkLogFilterBar.tsx` + DTO FE + BE export header — **không** chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | After Dev |
|---|-------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `resizable: true` |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn |
| 4 | flex + skeleton | **PASS** `skeletonRows={8}` |
| 5 | reportToolbar + Config FULL | **PASS** `ReportDisplayConfigModal` · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema |
| 6 | Filter SearchInput | **PASS** tuyến/loại/đội · Date · Input q |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | **PASS** |
| 8 | Xem mới load · empty hint | **PASS** |
| 9 | Làm mới `!viewed` | **PASS** toast · không fetch |
| 10 | Excel viewed + applied | **PASS** `canExport: viewed` · subset gồm PP/kết quả |
| 11 | Lookup SearchInput · cấm QL.22 | **PASS** |
| 12 | pageSize 50/100/200/500 | **PASS** |
| 13 | TZ `formatDayVi` từ `day` | **PASS** |
| 14 | Drill WO | **PASS** `/maintenance?id=` |
| 15 | Chart SoCai client | **PASS** |
| 16 | **Cột PP / kết quả** | **PASS** `methodSummary` (PP) + `mainResult` (Kết quả) trước `drill` |
| 17 | Config seed prefs | **PASS** `columnSeeds` từ `columns` (mergePrefs thêm key mới) |
| 18 | `CSV_COL_BY_GRID` | **PASS** map `methodSummary`/`mainResult` |
| 19 | leftover Kind B schema | **n/a** Kind E report `const columns` OK |
| 20 | Query `q` + `workType` | **PASS** |
| 21 | Prefix singular | **PASS** `maintenance-work-logs` |
| 22 | ERP.* / `api/v1/reports` | **none** |

## FE (T-UI-LIST-01 · T-UI-RPT-CONFIG-01 · T-UI-ACT-01)

- `src/pages/MaintenanceWorkLogReportPage/MaintenanceWorkLogReportPage.tsx`
  - Grid: cột **PP** (`methodSummary`) + **Kết quả** (`mainResult`) trước `drill`.
  - `CSV_COL_BY_GRID`: `methodSummary` → CSV `methodSummary` · `mainResult` → CSV `mainResult`.
  - Config: `columnSeeds` derive từ `columns` → prefs FULL gồm 2 cột mới.
- Route keep `bao-cao/nhat-ky-cong-viec`.
- Form OUT. **Không** Kind B catalog schema.

## BE / BFF (Step 4b — align, không path mới)

- **Keep** `GET api/v1/report/maintenance-work-logs` + `/export`.
- DTO `ReportMaintenanceWorkLogRowDto` đã có `methodSummary`/`mainResult` · export header đã gồm 2 field.
- BFF proxy QS keep.
- **Không** migration · **không** folder domain mới · **không** FilterRoute đổi · **không** ghi `ERP.*`.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only) |
| BE `dotnet build` API | **PASS** (`RMMS.Service.Api` · 0 warning · 0 error — P1 **không** đổi source API) |
| BE `dotnet build` BFF Report | **PASS** (`LINM.RMMS.Report.Bff` · 0 warning) |

## Handoff QA

Roles QA/Review = **pending**. Chain autoApprove ON → enqueue **qa** sau `completed` task Dev. **Cấm** nhảy Review.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
