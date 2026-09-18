# Review findings — dashboard

> Status: **done**  
> Mode: `review_only` · autoApprove=**ON** · `review_confirm`=**done**  
> reviewHash: `sha256:3a6dd1662d815a8cfc317e25046519267134909041b3668adc5d766aa8f4220f` · rulesVersion: `2026.09.17.3`

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| title | Dashboard điều hành — KPI BDTX |
| packKind | `dashboard` |
| changeScope | `new_page` |
| taskId | `task_78482116` |
| contentHash | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| route_confirm | `route_a` `/bao-cao/dashboard` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dashboard` |
| prior QA | `task_c3665e67` · S0/S1/QA-20 **PASS** · manifest `qa/screens/manifest.json` |
| live shell | **skip** roleOnly=review · **cấm** start:std · evidence = QA PNG+manifest + code |
| hashSkip | **no** · prior `REVIEW-META` draft |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI Kind E hub | `Linm.Web.RMMS.Report` · `/bao-cao/dashboard` · `DashboardPage` + FilterBar + Map |
| BE | `Linm.RMMS.WebService` · ReportQuery + Incident cite · **0** new API · **cấm ERP.*** · **cấm** `api/v1/dashboard/*` |
| BFF | report/* + incident open · Step 4b N/A |
| Delta | GAP-DASH-COV/ROADLEN lock 0 · patrol soft-degrade · chart_none |

## Findings

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-Q-01 | query | — | reportService totalCount + incident open · asOf→from/to | Xem KPI | **PASS** |
| REV-Q-02 | query | — | coverage / road-len | GAP lock → 0 + toast | **PASS** (PO/SA) |
| REV-S-01 | security | P2 | ReportQuery `[RequirePermission]` stub | Auth DEFER peer | **Debt** keep |
| REV-S-02 | security | — | `data-required-permission=report.dashboard.read` · 0 secrets FE | page gate | **PASS** |
| REV-UI-01 | ui-fn | — | DES-RPT-A/C/F · chart_none · LeaveConfirmModal | QA S0/S1/QA-20 | **PASS** |
| REV-UI-HDR-01 | ui-fn | — | title VN · **0** CREATE badge | manifest `bodyHasCreateBadge=false` | **PASS** |
| REV-UI-FILTER-RIGHT-01 | ui-fn | — | `LinErpListFilterBar` via RmmsReportFilterBar · asOf Date · Xem=🔍 | QA S1 + code | **PASS** |
| REV-UI-TB-01 | ui-fn | — | `buildRmmsReportToolbar` refresh/export/print/config · **0** action in filter | code + QA-20 | **PASS** |
| REV-BE-01 | be-fn | — | cite existing report/* + incident · **0** dashboard controller | path scan | **PASS** |
| REV-BE-02 | be-fn | — | COUNT live totalCount · countOrToast (no silent 5xx) | COUNT-03/04 | **PASS** |
| REV-INFO-01 | info | P3 | patrol residual soft-degrade | tuan-duong/kiem toast 0 | Accept |
| REV-INFO-02 | info | P3 | marker lat/lng optional · panel tree P2 | map soft-empty | Accept |

**P0/P1 open:** none · **fix_gaps:** none

## Query (`/review-query`)

- KPI bind: `getPatrolRoad|Inspect|Disasters|TrafficAccidents|RowViolations|MaintenanceSummary|PavementCondition` + `incidentService.getList(status=open)` · `pageSize=1` → `totalCount` (PCI avg pageSize=50)
- Filter: `asOf` Date → `{from,to}` same day · Xem applies draft
- GAP tiles: coverage / road-len hard **0** + warning toast (SA lock) · **cấm** invent API
- N+1: parallel count tasks · top incidents pageSize=5 · **0** full-list fan-out
- FE endpoints under `/report/*` + `/incident/*` only · **0** `ERP.*` · **0** `api/v1/dashboard/*`

## Security

- Page perm `report.dashboard.read` on shell · JWT/BFF peer Report MFE
- BE `[RequirePermission]` TODO stub = peer debt (**REV-S-01** P2) · **không** escalate fix_gaps
- Export check-ins blob download · no secrets in DashboardPage path
- Tenant via existing report/incident services · IDOR N/A (read aggregates)

## UI / BE function

| Gate | Result | Evidence |
|------|--------|----------|
| Kind E shell / zones | PASS | DES-DSH-* + DES-RPT-A/C/F · QA S0 hasPage |
| HDR / VI / CREATE | PASS | manifest · VN labels KPI |
| Filter V10 / Xem | PASS | RmmsReportFilterBar · `data-lin-list-layout=erp-filter-bar` |
| Toolbar 2C | PASS | buildRmmsReportToolbar · export checkins · config FULL |
| Config FULL | PASS | ReportDisplayConfigModal · QA-20 · chart forced off |
| Leave | PASS | LeaveConfirmModal dirty asOf |
| COUNT DB | PASS | live totalCount · QA hasDigitAfterView · GAP tiles 0 |
| Map + Top | PASS | Leaflet markers from incidents · grid RO |
| BE cite | PASS | 0 new Schema_/dashboard API · yarn+dotnet prior PASS |
| Demo note | PASS | toast GAP/soft-degrade only · **0** stub copy as product |

## Confirm

`review_confirm` = **done** (autoApprove ON) · verdict **PASS** · no Dev fix_gaps

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Debt (carry)

- REV-S-01 Auth permission stub P2
- GAP-DASH-COV-01 / GAP-DASH-ROADLEN-01 lock 0 (P2)
- patrol STATUS residual · soft-degrade KPI tuần đường/kiểm
- chart_none P1 · panel tree / SignalR P2 · marker geo optional

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| reviewHash | `sha256:3a6dd1662d815a8cfc317e25046519267134909041b3668adc5d766aa8f4220f` |
| contentHash | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| generatedAt | 2026-09-17T17:34:20.000Z |
| versionGate | keep_current (autopilot · SSOT 2026.09.17.3 vs chain .2) |
| taskId | task_78482116 |
| review_confirm | done |

<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.17.3 · versionGate=keep_current · taskId=task_78482116 · contentHash=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f · reviewHash=sha256:3a6dd1662d815a8cfc317e25046519267134909041b3668adc5d766aa8f4220f · review=PASS · review_confirm=done -->
