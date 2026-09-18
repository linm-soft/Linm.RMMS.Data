# Team lead — Task pack — dashboard

> Status: **done** · `task_1533257e` · `/agent-team-lead` · autoApprove=ON  
> packKind: **dashboard** · Kind **E** · changeScope: **new_page**  
> **Cấm** implement code ở TL · **cấm** ERP.* · **cấm** `api/v1/dashboard/*` · **cấm** e2e/start:std/build

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| title | Dashboard điều hành — KPI BDTX |
| formType / packKind | **dashboard** |
| formPattern | Full page (Kind E KPI hub) |
| report_standard | v1 · chart=`chart_none` P1 · export=`export_yes` (check-in toolbar) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Report (+ read Incident) |
| **source.routes** | `/bao-cao/dashboard` · **route_confirm=`route_a`** (autoApprove ON · giữ STATUS/SA) |
| **mfeStdRoute** | `/bao-cao/dashboard` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dashboard` (Dev điền live) |
| peerStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html` |
| contentHashPriorDataAnaly | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| migration | **none** · Step 4b **skip** |
| next | `/agent-dev` (roleOnly chain) · e2e queued `/agent-qa*` |

---

## route_confirm (autoApprove)

| Option | Path | Result |
|--------|------|--------|
| **A (chốt)** | `/bao-cao/dashboard` | **selected** — đồng bộ prior PO/Design/SA/STATUS |
| B | `/bc/dsh` | alternate VN abbrev — không chọn |
| C | custom | — |

---

## Screens / zones → tasks

| Zone / surface | Task | devSlash |
|----------------|------|----------|
| DES-DSH-HDR · KPI6 · KPI4 · TABS · PANEL · NAV · P2 | **T-UI-DASH-01** | `/agent-dev` + `/erp-report-context` |
| DES-RPT-C · FILTER · asOf · Xem=🔍 | **T-UI-RPT-01** (+ Leave) | `/agent-dev` · `/filter-bar-context` |
| DES-RPT-A · TB | **T-UI-RPT-TB-01** · **T-UI-RPT-EXPORT-01** | `/agent-dev` |
| DES-RPT-F · Config FULL | **T-UI-RPT-CONFIG-01** | `/agent-dev` |
| DES-RPT-CHART | **T-UI-RPT-CHART-01** = **N/A** (`chart_none`) | — |
| Counts / GAP tiles | **T-UI-DASH-COUNT-01** | `/agent-dev` |
| MAP · TOP | **T-UI-DASH-MAP-01** | `/agent-dev` (Leaflet embed · **không** OMS full) |
| UX / DTM | **T-UI-UX-01** · **T-UI-RESP-01** | `/agent-dev` · `/dev-web-responsive` · `/dev-ui-review` |
| Leave dirty filter | **T-UI-LEAVE-01** | `/implement-show-leave-confirm` |
| BE cite | **T-BE-DASH-01** | `/agent-dev` (verify BFF only) |
| Perm | **T-PERM-01** | `/agent-dev` |
| QA | **T-QA-DASH-01** | `/agent-qa` (+ e2e runtime) |

Alias SA ids: `T-FE-DSH-01`→DASH-01 · `T-UI-FILTER-01`→RPT-01 · `T-UI-TB-01`→RPT-TB · `T-FE-COUNT-01`→DASH-COUNT · `T-FE-MAP-TOP-01`→DASH-MAP · `T-BE-CITE-01`→BE-DASH · `T-QA-DSH-01`→QA-DASH.

---

## ssot.reuse (HARD)

| Area | Reuse | Cấm |
|------|-------|-----|
| Filter | `LinErpListFilterBar` · `filter-bar-layout-hard` V1–V10 · leading fragment · 🔍 mép phải | `ErpListHeaderFilters` · Tìm · Xuất trên bar · wrap sớm · **GAP-FILTER-WRAP-02** |
| Toolbar | `reportToolbar` · Làm mới · In · Config · Xuất Excel check-in | Thêm mới · action trong filter · **GAP-DEV-RPT-TB-01** |
| Config | `LinReportTableConfigModal` FULL · `load/saveErpReportDisplayConfig` | `configHint` · Zone F-only · **GAP-P2-REPORT-CONFIG-01** |
| Chart | **skip P1** | stub toast / Chart.js page-local |
| Count | `pageSize=1` → `totalCount` / summary · typeCode khớp | mock · `dashboard-data.js` · silent 0 · **GAP-DASH-COUNT-*** |
| Leave | `LeaveConfirmModal` · `useFormLeaveGuard` | `window.confirm`/`alert` |
| HTTP | `apiClient` · BFF proxy Report + Incident | invent DashboardController |
| Map | Leaflet + OSM · markers từ open incidents | invent map SDK / OMS full-page |
| Shell peer | `nhat-ky-tuan-duong` report shell | clone ERP list Kind B CRUD |

**GAP lock P1:** `GAP-DASH-COV-01` · `GAP-DASH-ROADLEN-01` → tile **0** + toast. Patrol residual → soft-degrade 0/empty/toast.

---

## Tasks (canonical · form-type-task-pack §2e + DES-RPT)

### T-UI-DASH-01 — Shell KPI hub
- **Role:** Dev · **devSlash:** `/agent-dev` + `/erp-report-context`
- **deps:** none (FE-first; BE cite parallel)
- **DoD:** Route `/bao-cao/dashboard` · zones DES-DSH-HDR/FILTER/TB/KPI6/KPI4/TABS/PANEL/MAP/TOP/NAV · peer shell · FormMode Read/Xem only · **cấm** CRUD Modal
- **implement.wire:** page module + router entry MFE Report · title VN
- **ssot.reuse:** peer report page layout · common components only

### T-UI-RPT-01 — Filter kỳ (`asOf`)
- **Role:** Dev · **devSlash:** `/agent-dev` · load `/filter-bar-context` **trước Write**
- **deps:** T-UI-DASH-01
- **DoD:** `LinErpListFilterBar` · `asOf` Date · Xem=`onSearch`=🔍 · `data-lin-list-layout="erp-filter-bar"` · **lấp hàng rồi wrap** V1–V10 · **0** action button trên bar · map `asOf`→`from`/`to` (tz_list_only)
- **Fail:** stack dọc · 2 nút Tìm · export trên bar · **GAP-FILTER-BAR-*** / **GAP-FILTER-WRAP-02**

### T-UI-LEAVE-01 — Dirty leave
- **Role:** Dev · **devSlash:** `/implement-show-leave-confirm`
- **deps:** T-UI-RPT-01
- **DoD:** dirty `asOf` → `LeaveConfirmModal` · **cấm** native dialog · **GAP-TL-LEAVE-01** / **GAP-DEV-LEAVE-01**

### T-UI-RPT-TB-01 — Toolbar
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-UI-DASH-01
- **DoD:** `reportToolbar` — Làm mới · In · Config · **không** Chart (chart_none) · **cấm** Thêm mới / Phê duyệt · **GAP-DEV-RPT-TB-01**

### T-UI-RPT-EXPORT-01 — Export check-in
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-UI-RPT-TB-01 · T-PERM-01
- **DoD:** `onExport` toolbar → `GET /report/checkins/export?from&to` · **cấm** `<Button>` trong filter · residual empty OK

### T-UI-RPT-CONFIG-01 — Config FULL
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-UI-RPT-TB-01
- **DoD:** `LinReportTableConfigModal` (grid+footer+chart prefs) · persist display config · **cấm** hint-only

### T-UI-RPT-CHART-01 — N/A P1
- **Status:** **skip** · `report_chart=chart_none` · **cấm** stub · P2 optional

### T-UI-DASH-COUNT-01 — Counts live DB
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-UI-RPT-01 · T-BE-DASH-01 (cite)
- **DoD:** Parallel binds (SA §3): patrol-road/inspect · disasters · traffic-accidents · row-violations · maintenance-summary · incidents open · pavement PCI avg · coverage/road-len=0+toast · skeleton→số · typeCode khớp · 5xx→0+toast **GAP-DASH-COUNT-03** · **cấm** mock · **GAP-DASH-COUNT-01/02/04**
- **soft-degrade:** tuần đường/kiểm + panel tree khi patrol residual

### T-UI-DASH-MAP-01 — Top + Map
- **Role:** Dev · **devSlash:** `/agent-dev` (Leaflet embed)
- **deps:** T-UI-DASH-COUNT-01
- **DoD:** Top 5 open incidents RO grid · Leaflet markers lat/lng · drill → Incident MFE · empty/toast OK · **cấm** invent GIS API

### T-UI-UX-01 — UI constitution
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-UI-DASH-01
- **DoD:** `dev-ui-ux-constitution` · end-user chrome · **cấm** Dev notes seed · **GAP-DEV-UX-01**

### T-UI-RESP-01 — D/T/M
- **Role:** Dev · **devSlash:** `/dev-web-responsive` + `/dev-ui-review`
- **deps:** T-UI-DASH-01 · T-UI-RPT-01
- **DoD:** verify 1280/768/375 · 1 layout D+T · mobile không shrink-broken · **GAP-DEV-UX-RESP-***

### T-BE-DASH-01 — Aggregate cite (0 new API P1)
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** none
- **DoD:** Verify BFF proxy QS Report + Incident endpoints live · **0** `DashboardController` · **0** Schema_* · **0** migration · nếu thiếu proxy → fix BFF only · **cấm** ERP.*
- **implement.wire:** cite SA bind matrix only

### T-PERM-01 — Permission
- **Role:** Dev · **devSlash:** `/agent-dev`
- **deps:** T-BE-DASH-01
- **DoD:** FE gate `report.dashboard.read` ON · BE stub OK P1 · hide export nếu thiếu perm

### T-QA-DASH-01 — QA scenarios (+ e2e queued)
- **Role:** QA · **devSlash:** `/agent-qa*`
- **deps:** all T-UI-* + T-BE + T-PERM Done
- **DoD:** KPI card = COUNT DB cùng filter · GAP tiles = 0 · drill · filter V1+V5+V10 · export/config trên **toolbar** · Leave Modal · fail nếu card 0 khi summary > 0 · e2eQa ON → runtime + PNG · **cấm** TL viết scenario chi tiết (QA owns)

---

## implement.architecture (HOW)

1. **State:** `asOf` local · dirty flag · parallel query keys per tile · no global dashboard store invent.
2. **Wire:** Xem → Promise.all GETs `page=1&pageSize=1` (PCI pageSize đủ) · bind `totalCount`/avg · map markers from same open list.
3. **BFF:** proxy-only Report + Incident · QS `from`/`to`/`status`/`page`/`pageSize`.
4. **Order:** T-BE-DASH-01 cite → T-UI-DASH-01 shell → RPT filter/TB/config/export → COUNT → MAP → UX/RESP → PERM gate polish → QA.
5. **Out of pack P2:** SignalR · ngân sách KPI · Coverage formula · road-len asset · chart.

---

## Skills pack (Dev load)

`/agent-dev` · `/erp-report-context` · `/filter-bar-context` · `filter-bar-layout-hard` · `report-toolbar-actions` · `po-design-report-standard` · `dashboard-count-from-db` · `dev-ui-ux-constitution` · `/dev-web-responsive` · `/dev-ui-review` · `/implement-show-leave-confirm`

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHashPriorDataAnaly | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| versionGate | ok |
| route_confirm | route_a `/bao-cao/dashboard` |
| autoApprove | ON |
| e2eQa | ON (queued QA only) |
| taskId | task_1533257e |
| generatedAt | 2026-09-17T17:10:00.000Z |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHashPriorDataAnaly=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok taskId=task_1533257e route_confirm=route_a -->
