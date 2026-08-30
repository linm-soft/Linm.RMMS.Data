# Dev — Implement — reports-filter-bar

> Status: **confirmed** · autoApprove=ON · task `task_f76f0fe2`  
> Role: `/agent-dev` · packKind=`report` · changeScope=`edit_page`  
> contentHash: `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a`

| | |
|--|--|
| Feature | `reports-filter-bar` |
| Title | Báo cáo Web (hub) — filter bar (Tuyến · Khu · Đoạn) |
| Role | `dev` |
| MFE | `Linm.Web.RMMS.Report` · `/bao-cao` |
| BE | `Linm.RMMS.WebService` · Integration Search + Report Xem |
| Build | **PASS** — `yarn build` (MFE) · `dotnet build` API + Integration.Bff + Report.Bff |
| Migration | **0** Schema_* |
| E2E | **queued** — cấm chạy ở role Dev |
| mfeStdUrl | `http://localhost:9311/bao-cao` |

## Delivered

### BE (T-BE-FILTER-01 · T-BE-RPT-FILTER-01 · T-BFF-01)

| Item | Path / note |
|------|-------------|
| Search extend | `RoadRoutesController` + `RoadRouteService.SearchAsync` — `routeKind?` · `excludeRouteKinds?` (comma CI) |
| Report hub query | `ReportQueryController` assets/incidents/checkins (+ export) — `zoneOrgCode?` · `segmentCode?` |
| Semantics | `ReportService.ResolveHubRouteFilterAsync` — segment dump/Guid→mother · zone scopes allow-list · 0 gán = no-op |
| BFF | **0 code** — Integration + Report BFF đã proxy `Request.QueryString` (T-BFF-01 verify) |
| Perm | stub docs: `master.road-routes.read` · `report.*.read` · lookup master.* |
| Migration | **không** |

### FE (T-UI-RPT-01 · T-UI-FILTER-01 · T-UI-LKP-01)

| Item | Path / note |
|------|-------------|
| Filter bar | `ReportFilterBar.tsx` — family · kind · route · **zone** · **segment** · search · period · Xem 🔍 |
| Lookups | `lookups.ts` — Tuyến `excludeRouteKinds=NHANH,TRANH,GOM` · Khu `org-units?kind=REG` leaf · Đoạn scopes **hoặc** dump + FIL-04 helper |
| Page wire | `ReportListPage.tsx` — draft/viewed · cascade clear zone/segment · forward `zoneOrgCode`/`segmentCode` |
| Query | `requestModel` + `endpoint.qs` — zone/segment |
| OUT | toolbar/config/chart/grid · leaf `rpt-*` — **không** sửa |
| Anti-dup | 0 `ErpListHeaderFilters` / `LinListFilterField` trên hub filter |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `yarn build` MFE Report | **PASS** |
| `dotnet build` RMMS.Service.Api | **PASS** |
| `dotnet build` Integration.Bff | **PASS** |
| `dotnet build` Report.Bff | **PASS** |
| e2e / start:std | **cấm** Dev — queued QA |

## DoR

| Check | Pass |
|-------|------|
| Task + Design + SA + filter CTX đọc · controlHint không đổi | ✅ |
| sourceFormReady=yes · 0 stub/configHint | ✅ |
| T-BE-FILTER-01 + T-BE-RPT-FILTER-01 + T-UI hub only | ✅ |
| V1–V5 layout shell (LinErpListFilterBar + fragment leading) | ✅ |
| yarn + dotnet build PASS | ✅ |
| No invent-seed · no ERP.* · no e2e/start:std · no leaf rpt-* | ✅ |

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa*` · T-QA-RPT-01 / T-QA-FILTER-01 / T-QA-TYP-01 |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| Focus | Xem · cascade · V1–V5 · Tuyến 0 KM* · helper FIL-04 · toolbar ≠ filter |
| E2E | e2eQa=ON — **chỉ** QA chạy |


## QA verdict

| Field | Value |
|-------|-------|
| verdict | **PASS** |
| taskId | `task_0a95bf82` |
| e2e | S0 · S1 · QA-20 PNG · manifest `ok:true` · `http://localhost:9311/bao-cao` |
| notes | GAP-QA-E2E-PW-01 fallback · GAP-QA-PKT-URL-01 packet URL rejected |
| handoff | `/agent-review` · **cấm** `phase=done` |
## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T16:10:00.000Z |
| versionGate | rechecked |
| taskId | task_f76f0fe2 |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_f76f0fe2 -->
