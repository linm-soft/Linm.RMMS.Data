# Dev — Implement — dashboard

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `dashboard` · Kind E |
| changeScope | `new_page` |
| taskId | `task_9f189622` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |
| versionGate | `ok` |
| contentHashPriorDataAnaly | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| updatedAt | `2026-09-17T17:20:00.000Z` |

## FE (MFE `Linm.Web.RMMS.Report`)

- Route **`/bao-cao/dashboard`** · page `DashboardPage` (lazy chunk).
- Shell: `LinPageLayout` kind=`report` · `LinErpListFilterBar` (`RmmsReportFilterBar`) · `asOf` Date · Xem=🔍 · **0** action trên filter.
- Toolbar `buildRmmsReportToolbar`: Làm mới · Xuất Excel check-in · In · Config FULL · **chart_none** (`canChart=false`).
- Config: `ReportDisplayConfigModal` (= `LinReportTableConfigModal` FULL path) · `load/saveErpReportDisplayConfig` · **cấm** `configHint`.
- Leave: dirty `asOfDraft≠asOf` → `LeaveConfirmModal` / `useFormLeaveGuard`.
- KPI6+KPI4 live counts (parallel) · GAP tiles coverage/road-len = **0** + toast · patrol soft-degrade toast.
- Top 5 open incidents + Leaflet OSM map (markers khi có lat/lng; empty overlay OK).
- Perm gate: `data-required-permission=report.dashboard.read`.
- Dep: `leaflet@1.9.4`.

## Counts bind (cite SA)

| Tile | API |
|------|-----|
| tuan-duong | `GET /report/patrol-road?page=1&pageSize=1` |
| tuan-kiem | `GET /report/patrol-inspect?page=1&pageSize=1` |
| bao-lu | `GET /report/disasters` type `Bão`+`Lũ` sum totalCount |
| tai-nan | `/report/traffic-accidents` |
| vi-pham | `/report/row-violations` |
| cong-viec | `/report/maintenance-summary` → kpis.totalCount |
| inc-open | `/incident/incidents?status=open&pageSize=1` |
| coverage / road-len | lock **0** (GAP-DASH-COV-01 / ROADLEN-01) |
| pci | `/report/pavement-condition` avg `pci` |
| export | `/report/checkins/export` toolbar |

## BE (`Linm.RMMS.WebService`)

- **T-BE-DASH-01 cite only** — BFF Report + Incident proxy live · **0** `DashboardController` · **0** Schema_* · Step 4b **skip**.
- **cấm** ERP.* · **cấm** `api/v1/dashboard/*`.

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` `RMMS.Service.Api` | **PASS** (0 warn/err) |

## Debt / soft

- Map markers: Incident list DTO thường thiếu lat/lng → empty map + overlay (soft-degrade).
- Panel tree: placeholder org/route (P2 SearchInput) · patrol residual soft-degrade.
- Chart P1 skip · SignalR/budget/Coverage formula P2.

## Handoff QA

- mfeStdUrl: `http://localhost:9311/bao-cao/dashboard`
- next: `/agent-qa*` · **cấm** start:std ở Dev
- Verify: KPI = DB totalCount · GAP tiles 0 · filter V1+V10 · export/config toolbar · Leave Modal

## QA verdict

| Field | Value |
|-------|-------|
| taskId | `task_c3665e67` |
| verdict | **PASS** |
| e2e | S0/S1/QA-20 · manifest `ok=true` · PNG `qa/screens/` |
| next | `/agent-review` · **cấm** `phase=done` |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.17.2 · versionGate=ok -->
