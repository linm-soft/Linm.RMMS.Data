# SA — solution-discovery — rpt-nhat-ky-tuan-duong (report · Kind E · Wave B delta)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` · `task_5f0a988e` — agent tự confirm) |
| changeScope | `edit_page` |
| packKind | **`report`** · Kind **E** |
| cr | `nktd-pdf-20260917` · Wave B · cite `SRC-NKTD-PDF` |
| contentHash | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| sourceFeature | **`csdl-so-02`** · `sourceFormReady=yes` · resource `patrol-logs` |
| sourceTables | `rmms_csdl_catalog_records` · typed So02 · `rmms_csdl_book_entries` (+ `LocationText`) |
| entity | `CsdlCatalogRecord` · `CsdlSo02` · `CsdlBookEntry` |
| migration | **none** — **cấm** Schema_* báo cáo · LocationText đã Wave A |
| prior · design | **confirmed** · `task_6d170bb5` · compact + design.md |
| prior · po | **confirmed** · `task_74fe0220` |
| prior · data_analy | **confirmed** · `task_54f0fb60` · control-hint + real-data |
| prior · sa | **giữ** shell/`task_b2d605ba` — **supersede** load seed/check-in + drill `?kind=` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| autoApprove | **ON** |
| taskId | `task_5f0a988e` |
| updatedAt | `2026-09-18T17:45:00.000Z` |

> **Cấm** `ERP.*` · `api/v1/reports` (plural) · invent path · parent JSON · POST/PUT/DELETE trên slug · gộp `rpt-tuan-duong` GPS · seed/check-in SSOT · CRUD new_page.  
> **Giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) · BFF proxy · Kind E shell.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — filter `from`/`to` inclusive trên `EventAt`/`day` `yyyy-MM-dd` |
| sa_xco_gate | **xco_na** — report read · tenant `X-Company-Id` · không cross-company GetById |
| sa_shared_table | **share_na** P1 — không warehouse mới · join sổ sẵn có |
| lookup_share | road-route **share_a** Integration Type A |
| parent_json | **cấm** |
| report_export | **export_yes** — toolbar Excel · API-02 |
| report_chart | **socai** — client từ `items` · **cấm** API chart riêng P1 |
| design_confirm | **approve** |
| solution_confirm | **approve** (autoApprove) |
| be_repo_confirm | `Linm.RMMS.WebService` (board tick giữ) |
| ui_repo_confirm | `Linm.Web.RMMS.Report` (board tick giữ) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API | `Domains/Report/` · `ReportQueryController` · `api/v1/report` |
| Service | `ReportService` / `IReportService` — **delta**: load join sổ `patrol-logs` |
| DTO | `ReportPatrolLogRoadRowDto` — **giữ** + map `RemarkSign`→`supervisorNote`/`status` |
| Entity / migration | **none** report · consume `CsdlCatalogRecord`/`CsdlSo02`/`CsdlBookEntry` |
| BFF | `ReportBffController` proxy only |
| FE | `reportEndpoint.getPatrolLogRoad` / `exportPatrolLogRoad` · `PatrolLogRoadReportPage` |
| Lookup | `GET api/v1/integration/road-routes/search` |

## § Delta Wave B (edit_page · HARD)

| ID | Prior / live | This solution |
|----|--------------|---------------|
| **GAP-NKTD-SRC-01** | check-in / in-memory seed 12 | Read-model sổ `csdl-so-02` · catalog + book_entries · empty=`items=[]` · **cấm** seed |
| **GAP-NKTD-DRILL-01** | `?kind=patrol-logs` | FE `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id={bookId}` · **cấm** `?kind=` |
| **GAP-NKTD-SIGN-01** | MatchOk · `supervisorNote=""` | `RemarkSign` → `supervisorNote` / signed statusLabel |
| LOC | Km only | `locationText` \|\| Km string |
| NOTE | optional | grid Note **visible** P1 (PO default) |
| PRINT | window.print | P1 grid print · **P2** bìa TT41 **GAP-NKTD-PRINT-01** không block |
| API path | patrol-log-road | **giữ** — **cấm** path mới |
| Staff | enum FE P1 | SearchInput P1 → query `staffId` · **cấm** native Select |

## SSOT / anti-duplicate

| Concern | Note |
|---------|------|
| UI | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` · `LinCatalogListPagination` |
| Config | **`LinReportTableConfigModal` FULL** — **cấm** Kind B schema editor / configHint |
| Filter | **`LinErpListFilterBar`** + **filter-bar-layout-hard** · **0** action trên bar |
| Toolbar | **`reportToolbar`** — Refresh·Chart·Excel·In·Config · **report-toolbar-actions** |
| Chart | SoCai client · **cấm** stub toast |
| BFF | proxy only |
| Persist | sổ SSOT · **cấm** parent JSON · **cấm** bảng báo cáo riêng |

## FormType pack (`packKind=report`)

### Screens

| id | Surface | Pattern | FormMode | Notes |
|----|---------|---------|----------|-------|
| S-RPT | A–D + SoCai | Full `LinPageLayout` report | report | Xem load · no Add |
| S-CFG | Config | Modal FULL | — | DES-RPT-F |
| S-CHART | Chart | SoCai modal | — | DES-RPT-CHART |
| S-EXPORT | Excel | toolbar + confirm if needed | — | API-02 |
| S-PRINT | In | modal stub OK P1 | — | bìa PDF **P2** |
| S-FORM | CRUD | — | — | **OUT** |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** `GET api/v1/report/patrol-log-road` |
| Xuất Excel | **API-02** `GET api/v1/report/patrol-log-road/export` |
| SearchInput tuyến | **API-LKP-01** `GET api/v1/integration/road-routes/search` |
| SearchInput cán bộ | P1 staff lookup → query `staffId` · **cấm** invent master path |
| Health | **API-00** `GET api/v1/report/health` (giữ) |

**Cấm** POST/PUT/DELETE PatrolLog* / Csdl* trên slug report này.

### Filter query keys (list/report)

`routeId` · `staffId` · `from` · `to` · `q` (alias `search`) · `page` · `pageSize` · `type` **ignored**.  
Component: `LinErpListFilterBar` — **cấm** `filterItems` / HOW (TL).

## API catalog

Envelope: `ApiResponse<ReportPagedResult<ReportPatrolLogRoadRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Patrol log road (Xem)

`GET /api/v1/report/patrol-log-road?staffId=&routeId=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/patrol-log-road` + cùng query.

| Query | Rule |
|-------|------|
| `staffId` | empty/omit/`all` = all · exact staff id |
| `routeId` | empty/omit/`all` = all · exact road code |
| `from`/`to` | tz_day trên EventAt/`day` inclusive |
| `q` | Contains Weather/OnSite/Route/Staff/BookNo/LocationText/Note · alias `search` |
| `type` | **ignored** |
| `page`/`pageSize` | allow **50/100/200/500** · invalid → 50 |

**Load (Wave B):** join `rmms_csdl_catalog_records` (resource=`patrol-logs`) + So02 + `rmms_csdl_book_entries` · tenant company · **0 entries → `items=[]`** · **cấm** PatrolSessions/check-in/seed.

**Row DTO** (giữ shape): `id` `bookId` `bookNo` `entryId` `day` `checkedAt`/`eventAt` `route` `patrolStaffId` `patrolStaff` `locationKm` `locationText` `weatherAndEvent` `onSiteAction` `supervisorNote` (**← RemarkSign**) `note` `status` `statusLabel` `bookNo`.

| Context | `docs/context/features/rpt-nhat-ky-tuan-duong.md` · real-data §B |
| Demo | **N/A** (master/report live) |
| data-import | N/A report — nguồn sổ `csdl-so-02` |
| Migration | **none** |

### API-02 — Export

`GET /api/v1/report/patrol-log-road/export` — cùng filter API-01 trừ paging.  
CSV UTF-8 BOM · `patrol-log-road.csv` · cột gồm `locationText` · `supervisorNote` · `note` nếu grid có.

### API-LKP-01 — Road routes

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=` · Report consume only · share_a.

## Query / UX rules (LOCKED)

- Chưa **Xem** = không gọi list. Draft filter không fetch đến Xem.
- Làm mới = re-fetch applied · `!viewed` → toast, không load.
- Drill FE: `/csdl-so-02` hoặc hub `?resource=patrol-logs&id={bookId}` (+ entryId nếu hỗ trợ) — **không** Report GetById · **cấm** `?kind=`.
- Chart P1: client từ `items` trang hiện tại.
- Print bìa PDF = **P2** · không block P1.

## Lookup map (SA chốt)

| Field | controlHint | API |
|-------|-------------|-----|
| routeId | SearchInput · road-route | API-LKP-01 |
| staffId | SearchInput · staff P1 | query `staffId` |
| from/to | Date · tz_day | `from`/`to` |
| qSearch | Input | `q` |

Grid = DTO scalars readonly.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.nhat-ky-tuan-duong.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 |

## Out of pack

CRUD trên slug · seed/check-in · `?kind=` drill · invent API · ERP.* · warehouse Schema · GPS `rpt-tuan-duong` · Kind B · Print bìa P2 block · parent JSON.

## Handoff TL

- Emit T-BE load-join sổ · T-UI drill/SIGN/cols · T-UI-RPT-TB-01 · EXPORT-01 · RPT-01 · CONFIG-01 · CHART-01 · PRINT-01=P2 · T-UI-LKP.
- DoD: Kind E shell · filter 0 action · Config FULL · SoCai · empty=`[]` · drill resource/id · RemarkSign map · **cấm** seed.
- autoApprove **ON** → SA **confirmed** · enqueue TL.
- This task = `roleOnly=sa` · **cấm** TL/Dev/QA trong `task_5f0a988e`.

## Build (this role)

SA **không** sửa MFE/BE runtime · **cấm** yarn build/e2e/start:std · **cấm** migration.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 · taskId=task_5f0a988e -->
