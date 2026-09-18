# SA — Solution discovery — dashboard (KPI BDTX hub)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_78265452`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`dashboard` / Kind E) · **filter-bar-layout-hard** · **report-toolbar-actions** · **po-design-report-standard** · **dashboard-count-from-db**  
> Requires: design **confirmed** · controlHint + real-data §B · prototype + reviewUrl  
> **Cấm:** Write MFE/native · invent `api/v1/dashboard/*` · ERP.* · `api/v1/rmms/*` · re-scan demo · yarn build/e2e/start:std · Step 4b/migration ở role SA · mock `dashboard-data.js` số ship · N+1 full list thay `totalCount`

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| title | Dashboard điều hành — KPI BDTX |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** (leaf Kind E KPI hub — **cấm** CRUD form · **cấm** invent dashboard facade khi report/* đủ) |
| packKind | **`dashboard`** (Kind **E** · DES-DSH-* · report_standard **v1**) |
| Feature Kind | **E** |
| status | `confirmed` |
| design_confirm | approve |
| solution_confirm | **approve** (autoApprove=ON) |
| report_export | **`export_yes`** — toolbar **Xuất Excel check-in** → `GET /report/checkins/export` · **cấm** export trên filter bar |
| report_chart | **`chart_none`** P1 — **cấm** stub chart toast giả |
| domain_map | **Report** (slug `dashboard` → `report`) + read **Incident** · cite Patrol/Maintenance/Asset — DOMAIN-MAP đã có |
| sa_tz_gate | **tz_list_only** (`asOf` → `from`/`to` trên Xem aggregate) |
| sa_xco_gate | **xco_na** (không GET/{id} View CRUD trong pack) |
| sa_shared_table | **share_cite** → `rmms_incidents` · report read-models · patrol/asset cite — **không** entity/`Schema_*` mới (`share_na` new) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Report` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | **`/bao-cao/dashboard`** |
| mfeStdUrl | `http://localhost:9311/bao-cao/dashboard` |
| peerStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Report `api/v1/report` · Incident `api/v1/incident` |
| controlHint | `specs/_data-analy/features/dashboard-control-hint.md` |
| realData | `specs/_data-analy/features/dashboard-real-data.md` |
| design | `specs/dashboard/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent control |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_78265452` |
| priorTask | design `task_91d788d6` · po `task_286f6a49` · analy `task_4f5cdaa0` |
| updatedAt | `2026-09-17T17:05:00.000Z` |
| versionGate | `ok` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |

## § Delta Current vs New (`new_page`)

| Area | Current | New (this SA) | Action |
|------|---------|---------------|--------|
| MFE leaf | chưa có `/bao-cao/dashboard` | Full page Kind E · zones DES-DSH-* | **T-FE-DSH-01** |
| Counts | demo `dashboard-data.js` | Parallel GET `page=1&pageSize=1` → `totalCount` / summary avg | **T-FE-COUNT-01** |
| API hub | CTX gợi ý `dashboard/kpis` | **Reuse** live `ReportQueryController` + `IncidentsController` — **0** `api/v1/dashboard/*` | document |
| Filter | — | `asOf` Date · Xem=🔍 · LeaveConfirmModal dirty | **T-UI-FILTER-01** |
| Toolbar | — | Refresh · Export check-in · In · Config FULL · chart_none | **T-UI-TB-01** |
| GAP tiles | — | coverage · road-len lock **0** + toast | document |
| Patrol residual | await_confirm | soft-degrade 0/empty/toast | document |
| Migration / entity | — | **0** Schema_* · **0** bảng mới | document |

**Không đổi:** DOMAIN-MAP `dashboard`→Report · BFF proxy-only · peer CRUD Incident/Patrol/Asset · seed · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route **`/bao-cao/dashboard`** · page Dashboard hub (new) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain KPI/report | **Report** — `Domains/Report/` · `ReportQueryController` · route `api/v1/report` |
| API domain top/map | **Incident** — `IncidentsController` · `api/v1/incident/incidents` |
| BFF | `…Report.Bff` · `…Incident.Bff` · **proxy only = yes** |
| Models | **cite** Report DTOs + Incident list DTO — **không** DashboardDto mới P1 |
| Persistence | **cite** `rmms_incidents` · report read-models · patrol/asset tables peer — **không** bảng dashboard |
| Migrations | **không** Schema_* this pack |
| DOMAIN-MAP | `dashboard` → Report (**đã có**) |

**Cấm** `ERP.Service.*` · domain folder mới · `api/v1/dashboard/*` ad-hoc.

### Route / domain (chốt)

| | Choice |
|--|--------|
| Report prefix | `api/v1/report` · BFF `web-bff/api/v1/report` |
| Incident prefix | `api/v1/incident` · BFF `web-bff/api/v1/incident` |
| UI route | **`/bao-cao/dashboard`** |
| FE BASE | `/report/…` · `/incident/…` (relative `VITE_API_URL`) |
| Auth perm | `report.dashboard.read` (FE gate ON · BE stub OK P1) |

---

## 2. FormMode ↔ API (Kind E · read-only hub)

| Mode / action | API | Notes |
|---------------|-----|-------|
| Filter draft | — | `asOf` local · dirty → LeaveConfirmModal |
| **Xem** / Làm mới | Parallel GETs §3 | Bind `from`/`to` = ngày `asOf` (cùng ngày hoặc period 1 ngày — FE map 1:1) |
| KPI tile click | client focus tab/panel | **không** API riêng |
| Top grid / map | `GET /incident/incidents?status=open&page=1&pageSize=5` | RO · drill → incident MFE |
| Export check-in | `GET /report/checkins/export?from&to…` | toolbar only |
| Config | `LinReportTableConfigModal` local/prefs | **cấm** invent config API |
| Create/Edit/Delete | **n/a** | **cấm** Modal CRUD |

Gates: **tz_list_only** · **xco_na** · **share_cite** · **no parent JSON**.

---

## 3. Bind matrix (SSOT real-data §B — **cấm** invent)

| uiField | controlHint | GET (BFF relative) | Bind | P1 SA |
|---------|-------------|-------------------|------|-------|
| `asOf` | Date | query `from`/`to` | filter | live |
| `tuan-duong.count` | KPI | `/report/patrol-road?page=1&pageSize=1` → `totalCount` | count | soft-degrade nếu patrol residual 4xx/empty |
| `tuan-kiem.count` | KPI | `/report/patrol-inspect?page=1&pageSize=1` → `totalCount` | count | soft-degrade |
| `bao-lu.count` | KPI | `/report/disasters?page=1&pageSize=1` → `totalCount` · typeCode bão/lũ | count | live · **GAP-DASH-COUNT-02** map |
| `tai-nan.count` | KPI | `/report/traffic-accidents?page=1&pageSize=1` → `totalCount` | count | live |
| `vi-pham.count` | KPI | `/report/row-violations?page=1&pageSize=1` → `totalCount` | count | live |
| `cong-viec.count` | KPI | `/report/maintenance-summary` (summary total / open) **ưu tiên**; fallback WO open `totalCount` nếu summary thiếu field | count | live — **cấm** invent path mới |
| `inc-open.count` | KPI | `/incident/incidents?status=open&page=1&pageSize=1` → `totalCount` | count | live · drill |
| `coverage.count` | KPI | — | **0** | **GAP-DASH-COV-01** lock · toast · công thức **P2** |
| `road-len.count` | KPI | — | **0** | **GAP-DASH-ROADLEN-01** lock tới asset/road-route ready |
| `pci.count` | KPI | `/report/pavement-condition?page=1&pageSize=50` (hoặc đủ page) → **avg PCI** client/FE từ rows · nếu DTO có `avg`/`summary` thì dùng field đó | avg | live — **cấm** invent aggregate endpoint |
| `topIncidents[]` | grid RO | `/incident/incidents?status=open&page=1&pageSize=5` | list | live |
| `map.markers` | Map | cùng open list + lat/lng | geo | Leaflet OSM · **cấm** invent SDK |
| `panel.tree` | Tree | patrol sessions/check-ins cite | tree | soft-degrade empty/toast |
| `checkins.export` | toolbar | `/report/checkins/export` | file | live path · residual empty OK |

**GAP-DASH-COUNT-03:** mọi 5xx → tile/grid `0`/empty + ghi endpoint+HTTP (toast/`useAlert`) — **cấm** `catch { return 0 }` im lặng.  
**GAP-DASH-COUNT-01:** đủ `.count` rows cho mọi tile không-GAP.

### PCI avg (OQ chốt)

- P1: FE tính `avg` từ `GET /report/pavement-condition` rows field PCI (cite DTO live) · nếu 0 rows → `0`/`—`.
- **Cấm** thêm `ReportQueryController` action `dashboard/pci-avg` P1.

### Coverage / road-len (OQ-01/02)

| ID | Decision |
|----|----------|
| GAP-DASH-COV-01 | P1 = **0** + toast · formula / derived patrol = **P2** (sau patrol done) |
| GAP-DASH-ROADLEN-01 | P1 = **0** + toast · nguồn = Integration/Asset road length aggregate khi `asset` ready — **cấm** invent tạm |

---

## 4. Architecture / SSOT

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **Report** + read **Incident** |
| BFF | proxy only = yes · QS forward |
| MFE | `Linm.Web.RMMS.Report` · Kind E shell peer `nhat-ky-tuan-duong` |
| UI SSOT | `@linm-soft-org/linm-web-common-components` — `LinErpListFilterBar` · report toolbar · `LinReportTableConfigModal` · LeaveConfirmModal · **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT |
| Map | Leaflet + OSM/Esri basemap (CTX) · markers open incidents |
| Out of pack | SignalR poll (**GAP-F-DSH-01** P2) · ngân sách KPI (**GAP-F-DSH-02** P2) · chart · native |

---

## 5. Tasks (handoff TL — ids only)

| ID | Layer | Do |
|----|-------|----|
| T-FE-DSH-01 | FE | Route `/bao-cao/dashboard` · zones DES-DSH-HDR/FILTER/TB/KPI6/KPI4/TABS/PANEL/MAP/TOP/NAV · peer shell |
| T-UI-FILTER-01 | FE | `asOf` + Xem=🔍 · filter-bar-layout-hard · LeaveConfirmModal |
| T-UI-TB-01 | FE | Refresh · export check-in · In · Config FULL · chart_none · **cấm** Thêm mới |
| T-FE-COUNT-01 | FE | Parallel count binds §3 · skeleton→số · GAP tiles 0 · soft-degrade patrol · COUNT-03 |
| T-FE-MAP-TOP-01 | FE | Top 5 + Leaflet markers · drill incident |
| T-BE-CITE-01 | BE | **0** code P1 nếu live endpoints đủ — chỉ verify BFF proxy QS; **cấm** DashboardController |
| T-QA-DSH-01 | QA | scenarios + e2e queued `/agent-qa*` |

Migration: **none**. Dev Step 4b: **skip** (không Schema_*).

---

## 6. Cấm (HARD)

| ❌ | ✅ |
|----|-----|
| `api/v1/dashboard/*` khi report/* + incident đủ | Reuse `ReportQueryController` · `IncidentsController` |
| ERP.* · invent domain | DOMAIN-MAP Report |
| Mock / `dashboard-data.js` ship | `totalCount` / summary live |
| N+1 full page dump cho KPI | `pageSize=1` count |
| Coverage/road-len invent formula P1 | GAP lock 0 |
| Write MFE ở SA · e2e/start:std/build · Step 4b | Doc + compact only |
| `catch { return 0 }` nuốt 5xx | GAP-DASH-COUNT-03 |

---

## 7. Handoff → team-lead

| Field | Value |
|-------|-------|
| phase_from / phase_to | `sa` → `team_lead` |
| solution_confirm | **approve** |
| STATUS | sa **confirmed** · team-lead **pending** |
| Artifacts | `be/solution-discovery.md` · `handoff/sa-compact.md` |
| Next slash | `/agent-team-lead` (khi chain) |
| e2e | queued QA only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHashPriorDataAnaly | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| versionGate | ok |
| generatedAt | 2026-09-17T17:05:00.000Z |
| taskId | task_78265452 |
| solution_confirm | approve |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHashPriorDataAnaly=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok taskId=task_78265452 solution_confirm=approve -->
