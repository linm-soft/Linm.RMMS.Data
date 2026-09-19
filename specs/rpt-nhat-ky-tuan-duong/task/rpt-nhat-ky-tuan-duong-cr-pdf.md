# Team-lead — CR PDF Wave B · `rpt-nhat-ky-tuan-duong`

> Status: **done** · `task_8cbb2073` · `/agent-team-lead` · autoApprove=ON  
> packKind: **report** · Kind **E** · changeScope: **edit_page** · cr: `nktd-pdf-20260917`  
> Prior pack: `task/rpt-nhat-ky-tuan-duong.md` (**giữ** · Wave A shell) · **cấm** overwrite Kind E scaffold  
> **Cấm** implement code ở TL · **cấm** ERP.* · **cấm** path API mới · **cấm** e2e/start:std/build

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| formType / packKind | **report** |
| formPattern | Full page report + Modal config/chart/export |
| report_standard | v1 · chart=`socai` (client items) · export=`export_yes` |
| route_confirm | **route_a** `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` (**giữ** · URL không mới) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Report |
| API | **giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) |
| sourceFeature | `csdl-so-02` · `sourceFormReady=yes` · Wave A done |
| sourceTables | `rmms_csdl_catalog_records` · So02 · `rmms_csdl_book_entries` |
| migration | **none** · Step 4b skip |
| gates | `tz_day` · `xco_na` · `share_na` · lookup road-route `share_a` |
| design_confirm | **confirmed** |
| solution_confirm | **confirmed** |
| contentHash | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-09-18T17:55:00.000Z` |

## § Delta Current vs New (Wave B)

| Area | Current (Wave A live) | New (CR Wave B) | Task |
|------|----------------------|-----------------|------|
| Load | check-in/seed 12 CUC2 | Query sổ `resource=patrol-logs` + So02 + entries · empty=`[]` · **cấm** seed | **T-BE-RPT-01** · GAP-NKTD-SRC-01 |
| Drill | `?kind=patrol-logs` | `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id=` · **cấm** `?kind=` | **T-FE-02** · GAP-NKTD-DRILL-01 |
| Ký | SupervisorNote `""` / MatchOk | `RemarkSign` → `supervisorNote` · signed nếu RemarkSign ≠ rỗng | GAP-NKTD-SIGN-01 (trong T-BE-RPT-01) |
| Vị trí | Km | `locationText` (Wave A) fallback Km string | T-UI-RPT-01 |
| HDSD | «Tạo mới» trên report | bỏ · tạo data `/csdl-so-02` | T-HDSD-01 |
| Print bìa PDF | `window.print` grid | **P2** GAP-NKTD-PRINT-01 — không block P1 | T-UI-RPT-PRINT-01 |
| Filter/toolbar | Kind E | **giữ** V1–V10 + `reportToolbar` | T-UI-RPT-01 / TB / EXPORT |
| CRUD | — | **OUT** | T-OUT-CRUD |

## Screens

| id | Surface | Pattern | Route | FormMode | Actions | devSlash |
|----|---------|---------|-------|----------|---------|----------|
| S-RPT | Report A–D + SoCai | Full page Kind E | `/bao-cao/nhat-ky-tuan-duong` | report | Xem · refresh · Excel · chart · config · print · drill | `/agent-dev` |
| S-CFG | Config FULL | Modal | toolbar cog | — | `LinReportTableConfigModal` | `/agent-dev` |
| S-CHART | Chart | Modal | toolbar chart | — | SoCai from `items` | `/agent-dev` |
| S-EXPORT | Export | Modal/confirm | toolbar Excel | — | CSV applied filters | `/agent-dev` |
| S-FORM | CRUD | — | — | — | **OUT** | — |

## FormType pack — report §2d (+ Wave B)

| Task id | Role | deps | status | `devSlash` | DoD Wave B |
|---------|------|------|--------|------------|------------|
| **T-CTX-01** | docs | — | **done** | — | control-hint + real-data + SA Wave B · `sourceFormReady=yes` |
| **T-BE-RPT-01** | Dev | T-CTX-01 | **pending** | `/agent-dev` | Rewrite load → sổ `patrol-logs` · filter `from/to` trên `EventAt` (`tz_day`) · map cột dưới · RemarkSign→supervisorNote · **cấm** seed khi query sổ chạy (kể cả 0 rows) · **cấm** path mới · **cấm** N+1 · **cấm** ERP.* |
| **T-BE-02** | Dev | T-BE-RPT-01 | **pending** | `/agent-dev` | Export CSV cùng filter · UTF-8 BOM · `patrol-log-road.csv` · gồm `supervisorNote`/`locationText` nếu grid có |
| **T-BFF-01** | Dev | T-BE-RPT-01 | **reuse** | `/agent-dev` | Proxy keep · **không** business |
| **T-PERM-01** | Dev | — | **reuse** | `/agent-dev` | `report.nhat-ky-tuan-duong.read` search+export |
| **T-UI-RPT-01** | Dev | T-BE-RPT-01 | **pending** | `/agent-dev` | `LinErpListFilterBar` + `filter-bar-pipeline` + `/filter-bar-context` · V1–V10 · **lấp hàng rồi wrap** · 🔍 mép phải · **0** action trên bar · Xem work · staff SearchInput P1 · Note visible · **cấm** Thêm mới / `ErpListHeaderFilters` / export trên bar — **GAP-FILTER-WRAP-02** |
| **T-UI-RPT-TB-01** | Dev | T-UI-RPT-01 | **pending** | `/agent-dev` | `reportToolbar` only: Làm mới · Chart · Xuất Excel · In · Config — **GAP-FILTER-BAR-08** / **GAP-DEV-RPT-TB-01** |
| **T-UI-RPT-CONFIG-01** | Dev | T-UI-RPT-01 | **reuse** | `/agent-dev` | `LinReportTableConfigModal` FULL · **cấm** `configHint` / chỉ `LinListTableConfigModal` |
| **T-UI-RPT-EXPORT-01** | Dev | T-BE-02 | **pending** | `/agent-dev` | Excel **chỉ** toolbar · sau Xem · applied filters |
| **T-UI-RPT-CHART-01** | Dev | T-UI-RPT-01 | **pending** | `/agent-dev` | SoCai từ `items` live · **cấm** stub toast |
| **T-UI-RPT-PRINT-01** | Dev | T-UI-RPT-01 | **P2** | `/agent-dev` | P1 print grid OK · bìa PDF = **P2** GAP-NKTD-PRINT-01 — không block |
| **T-UI-UX-01** | Dev | T-UI-RPT-01 | **reuse** | `/agent-dev` | `dev-ui-ux-constitution` · **GAP-DEV-UX-01** |
| **T-FE-02** | Dev | T-UI-RPT-01 | **pending** | `/agent-dev` | Drill `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id={bookId}` (+ entry) · **cấm** `?kind=` — GAP-NKTD-DRILL-01 |
| **T-HDSD-01** | Dev | T-UI-RPT-01 | **pending** | `/agent-dev` | HDSD bỏ «Tạo mới» · ghi tạo data `/csdl-so-02` |
| **T-QA-RPT-01** | QA | T-FE-02 | **pending** | `/agent-qa` | Kỳ có sổ → lưới khớp · kỳ trống → empty **không** 12 CUC2 · drill không `?kind=` · Excel/In **không** trên filter · V1+V5+V10 · e2eQa ON → chỉ `/agent-qa*` |
| **T-RV-01** | review | T-QA-RPT-01 | **pending** | `/agent-review` | `/review-query` join sổ · **cấm** N+1 |

### Map cột (HARD · T-BE-RPT-01)

| Report DTO | Form / table |
|------------|----------------|
| `bookId` | `CsdlCatalogRecord.Id` |
| `bookNo` | `BookNo` |
| `entryId` | `CsdlBookEntry.Id` |
| `day` / `checkedAt` | `EventAt` UTC→local |
| `route` | `RoadCode` / `RoadName` |
| `patrolStaff` / `patrolStaffId` | `CsdlSo02.PatrolStaff` (+ staffId query P1) |
| `locationKm` | `LocationKm` |
| `locationText` | **`LocationText`** else Km string |
| `weatherAndEvent` | `WeatherEvent` |
| `onSiteAction` | `OnSiteAction` |
| `supervisorNote` | **`RemarkSign`** |
| `status` / `statusLabel` | entry/book status |
| `note` | Note (visible P1) |

### T-BE-RPT-01 DoD

1. Keep controller path `GetPatrolLogRoad` / export.
2. Replace check-in/seed branch when sổ query runs (incl. 0 rows → `items=[]`).
3. Tenant + `resource=patrol-logs` + `EventAt` in `[from,to]` day bounds.
4. Seed 0 PatrolSessions + 1 sổ Wave A → Xem đúng dòng. Kỳ không sổ → totalCount 0 · **không** 12 CUC2.

## ssot.reuse

| Layer | Reuse | Cấm |
|-------|-------|-----|
| UI | `PatrolLogRoadReportPage` · `PatrolLogRoadFilterBar` · `reportEndpoint` · `LinErpListFilterBar` · `reportToolbar` | nested CatalogListShell · Kind B schema · export trên filter · invent chart lib |
| BE | `ReportQueryController` · **đổi service load** join sổ | path mới · ERP.* · seed fallback · N+1 |
| Lookup | Integration `road-routes/search` Type A | copy catalog vào Report DTO |
| BFF | proxy only | business in BFF |
| Persist | consume Csdl* · migration=none | warehouse mới · parent JSON |

## implement.wire (HOW)

1. BE: `LoadPatrolLogRoadAsync` → query catalog/So02/book_entries · map RemarkSign · tz_day EventAt.
2. FE: keep Xem→API-01 · Excel→API-02 · đổi drill URL · verify filter V10 + toolbar.
3. State: `viewed` gate refresh/export/chart **giữ**.
4. Empty: `[]` + hint · **không** toast seed.

## Out of pack

CRUD sổ · gộp `rpt-tuan-duong` GPS · Mẫu 8 · print bìa P2 block · `api/v1/reports` · invent API · ERP.* · Kind B · yarn build/e2e ở TL.

## Handoff Dev

- Wave B **edit_page** — **không** rewrite Kind E shell · **chỉ** load sổ + drill + SIGN map + HDSD + verify report T-*.
- deps: **T-BE-RPT-01 → T-BE-02 → T-UI-*** · T-FE-02 sau filter/grid.
- `devSlash` = **`/agent-dev`** + `/erp-report-context` · load `filter-bar-pipeline` trước Write filter.
- autoApprove ON → enqueue **dev** sau TL completed. QA/Review pending. **Cấm** e2e ở TL/Dev trừ `/agent-qa*`.
- This task = `roleOnly=team_lead` · **không** chạy Dev trong `task_8cbb2073`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 -->
