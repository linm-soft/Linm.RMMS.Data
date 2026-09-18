# PO — dashboard (Dashboard điều hành — KPI BDTX)

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`dashboard`** (Kind **E** · KPI hub Báo cáo) — **không** Kind B catalog list/CRUD |
| Feature Kind | **E** · leaf `/bao-cao/dashboard` · read-only hub |
| formPattern | **Full page** |
| status | `done` |
| requestSource | run packet `task_286f6a49` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · prior data_analy **confirmed** · contentHash `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** chờ board. |
| e2eQa | **ON** — queued `/agent-qa*` only · **cấm** e2e / `start:std` ở role PO |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | compact `specs/dashboard/handoff/data_analy-compact.md` · full `specs/_data-analy/features/dashboard-control-hint.md` · `dashboard-real-data.md` · **hash skip** — **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| sourceFeature | multi — `incident` · `maintenance` · `pavement-section` · `patrol` · (`asset`/`road-route` cho chiều dài QL) |
| sourceTables | `rmms_incidents` · `rmms_work_orders` · `rmms_pavement_sections` · `rmms_patrol_sessions` · `rmms_patrol_check_ins` · `rmms_road_routes` |
| sourceFormReady | **yes** — `report_source_form_confirm` **autoApprove=ON** (2026-09-17). Residual: `patrol` STATUS còn `qa/await_confirm` · `asset` chưa done → KPI phụ thuộc **GAP lock** dưới § Gaps |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |
| versionGate | `ok` (khớp data-analy skill/workflow `2026.09.05.03` · rules `2026.09.17.2`) |
| updatedAt | `2026-09-17T16:50:00.000Z` |
| taskId | `task_286f6a49` |
| priorTask | `task_4f5cdaa0` (data_analy) |

## 1. Goal

Trang **Dashboard điều hành** — KPI home BDTX trên MFE Report `/bao-cao/dashboard`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **Ngày tổng hợp** → **Xem**/Làm mới load aggregate count từ DB (không mock). KPI strip + panel focus + mini map + top sự cố mở + quick nav. Xuất Excel **check-in** trên toolbar (không trên filter).

**Khác** host `@linm/dashboard` / `asset-kcht-dashboard` (KCHT). Đây là KPI BDTX leaf Báo cáo.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `mfeStdRoute=/bao-cao/dashboard` · `mfeStdUrl=http://localhost:9311/bao-cao/dashboard`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP slug `dashboard` → **Report** · prefix BFF `web-bff/api/v1` · **cấm ERP.*** · **cấm** invent `api/v1/dashboard/*` khi `report/*` + domain list đã có `totalCount`
- Counts: **`dashboard-count-from-db`** — aggregate live · typeCode khớp · **cấm** `dashboard-data.js` / mock số ship

## 2. Current → New (`new_page`)

| Layer | Current | New |
|-------|---------|-----|
| Demo | `Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html` + mock `js/dashboard-data.js` | MFE live aggregate · Design prototype zones DES-DSH-* · **không** ship mock số |
| MFE | (chưa có leaf) | Full page Kind E · filter bar · KPI6+KPI4 · tabs · panel · map · top grid · nav |
| API | CTX gợi ý `/api/v1/dashboard/kpis` | **Reuse** `ReportQueryController` + `IncidentsController` · **cấm** hub `dashboard/*` ad-hoc |
| Host | `@linm/dashboard` KCHT | **Tách** — KPI BDTX chỉ `/bao-cao/dashboard` |
| P2 | — | SignalR badge only · **GAP-F-DSH-01** · **cấm** poll 5s P1 |

## 3. DoD (đo được)

1. Mở `/bao-cao/dashboard` → skeleton KPI → số live từ GET `totalCount` / summary (cùng filter `asOf`/`from`–`to` đã Xem). **Cấm** hardcode / demo JSON.
2. Filter: `LinErpListFilterBar` 1 hàng wrap · Date `asOf` (hoặc `from`–`to`) · 🔍 = **Xem** · **cấm** Xuất Excel/In/Làm mới trên bar.
3. Toolbar 2C: Làm mới · Xuất Excel check-in · In · Config FULL · **cấm** Thêm mới · **cấm** Chart P1 (`chart_none`).
4. KPI6 live (khi không GAP): `tuan-duong` · `tuan-kiem` · `bao-lu` · `tai-nan` · `vi-pham` · `cong-viec`. Click tile → focus panel/tab tương ứng.
5. KPI4: `inc-open` (drill incident) · `coverage` · `road-len` · `pci` — GAP tiles = `0`/`—` + toast (không invent API).
6. Top incidents: RO grid ≤5 open · mini map Leaflet markers cùng list · basemap OSM/Esri.
7. API 5xx: hub vẫn mở · count `0` + ghi **GAP-DASH-COUNT-03** (endpoint+HTTP) — **cấm** `catch { return 0 }` im lặng.
8. Auth JWT · tenant · perm `report.dashboard.read` (FE gate ON · BE stub OK P1).
9. **Cấm ERP.*** · **cấm** N+1 full list thay `totalCount` · **cấm** native `alert`/`confirm`.
10. Dev build PASS ghi implement — **không** chạy build ở role PO.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/dashboard.md` | feature Kind E |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/dashboard-control-map.md` | control-map |
| DEM-01 | `Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html` | zone ids only — **không** SSOT số |
| DI-01 | `specs/_data-analy/features/dashboard-control-hint.md` | controlHint SSOT |
| DI-02 | `specs/_data-analy/features/dashboard-real-data.md` | §A+§B count rows |
| MFE | `Linm.Web.RMMS.Report` · `/bao-cao/dashboard` | UI |
| BE | `Linm.RMMS.WebService` · Report + Incident read | API |

## 5. controlHint (PO chốt — từ data-analy)

| uiField / zone | Label | controlHint | notes |
|----------------|-------|-------------|-------|
| DES-DSH-HDR | H1 | Text | «Tổng hợp công tác QL & BDTX» |
| DES-DSH-FILTER · `asOf` | Ngày tổng hợp | Date / period | `LinErpListFilterBar` · Xem=🔍 |
| DES-DSH-TB | Toolbar | reportToolbar | Refresh · Export check-in · In · Config |
| DES-DSH-KPI6 | KPI strip 6 | Tile button | DB aggregate |
| DES-DSH-KPI4 | Extra KPI 4 | Tile · drill | GAP tiles lock 0 |
| DES-DSH-TABS | Tabs 3 | Tab | Tuần đường / Tuần kiểm / Công việc |
| DES-DSH-PANEL | Focus panel | Tree + chips | SearchInput org/route |
| DES-DSH-MAP | Mini map | Map Leaflet | open incidents |
| DES-DSH-TOP | Top sự cố | grid RO | mã · loại · tuyến · Km · mức · TT |
| DES-DSH-NAV | Quick nav | Nav buttons | reports · gis · incident · patrol |
| DES-DSH-P2 | Badge | Static/toast | P2 realtime — không poll P1 |

### §B count bind (cite real-data)

| uiField | GET | P1 PO |
|---------|-----|-------|
| `tuan-duong.count` | `/report/patrol-road?page=1&pageSize=1` → `totalCount` | **GAP-DA-RPT-SRC-01 residual** — bind API nếu sẵn; nếu 4xx/empty schema → `0` + toast tới `patrol` done |
| `tuan-kiem.count` | `/report/patrol-inspect?page=1&pageSize=1` | cùng residual patrol |
| `bao-lu.count` | `/report/disasters?page=1&pageSize=1` | **live** · typeCode bão/lũ |
| `tai-nan.count` | `/report/traffic-accidents?page=1&pageSize=1` | **live** |
| `vi-pham.count` | `/report/row-violations?page=1&pageSize=1` | **live** |
| `cong-viec.count` | `/report/maintenance-summary` hoặc WO open `totalCount` | **live** |
| `inc-open.count` | `/incident/incidents?status=open&page=1&pageSize=1` | **live** |
| `coverage.count` | derived patrol | **GAP-DASH-COV-01** lock `0` + toast |
| `road-len.count` | route length aggregate | **GAP-DASH-ROADLEN-01** lock `0` + toast |
| `pci.count` | `/report/pavement-condition` avg | **live** (SA chốt avg) |
| `topIncidents[]` | `/incident/incidents?status=open&pageSize=5` | **live** |
| `map.markers` | cùng open + lat/lng | **live** Leaflet |
| `panel.tree` / `checkins.export` | `/report/checkins` · `/export` | residual patrol — empty/toast OK P1 |

## 6. Report AC (REQUIRED — packKind=dashboard)

| Area | Acceptance |
|------|------------|
| **Shell 2C** | Toolbar: Làm mới · **Xuất Excel** check-in · In · Sửa config · **cấm** Thêm mới / Phê duyệt · **cấm** Chart P1 · **cấm** action button trên filter (`report-toolbar-actions`) |
| **Config FULL** | Sửa config = `LinReportTableConfigModal` (grid+footer+chart slot) — **không** Zone F-only / `configHint` / chỉ `LinListTableConfigModal` |
| **Filter** | `LinErpListFilterBar` · **1 hàng wrap** · field **lấp hàng rồi wrap** · 🔍 mép phải (`filter-bar-layout-hard` · **GAP-FILTER-WRAP-02**) · Xem = 🔍 · **không** Tìm · **không** stack · **không** Xuất Excel/In/Làm mới trên bar |
| **Grid** | Top incidents RO + footer theo config nếu bật · **không** header-filter cột catalog |
| **Chart** | P1 **`chart_none`** — SA có thể bật sau; **cấm** stub chart toast giả |
| **KPI counts** | `dashboard-count-from-db` · typeCode khớp · **cấm** mock |
| **SSOT** | `/erp-report-context` · `po-design-report-standard` · `form-type-task-pack` §2d/§2e |

**report_standard:** `v1` · **grid_standard:** N/A (không Kind B list)

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | Actions | devSlash |
|---------|---------|----------|---------|----------|
| S-DSH Hub KPI | **Full page** | Read | Xem · Làm mới · Export check-in · In · Config · tile focus · drill | `/agent-dev` |
| S-DSH Top grid | Full (embedded) | Read | row drill → incident | `/agent-dev` |
| S-DSH Map | Full (embedded) | Read | marker click drill | `/agent-dev` |
| (không form CRUD) | — | — | **cấm** Modal/Slideout create | — |

**peerStdUrl gợi ý:** `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` (cùng Kind E report shell) · target `http://localhost:9311/bao-cao/dashboard`

## 8. Leave / alert (REQUIRED)

| Case | AC |
|------|----|
| Filter draft chưa Xem / đổi kỳ chưa apply → điều hướng đi | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) |
| API lỗi / GAP tile click | **`useAlert` / `Modal` toast** — **cấm** `window.alert` / `window.confirm` |
| Read-only sau Xem, không dirty | Leave thẳng — không modal |

## 9. Tab index

| Surface | tabs |
|---------|------|
| Hub | `DES-DSH-TABS` — 3 tabs (Tuần đường / Tuần kiểm / Công việc) · default tab 0 |
| Config modal | theo `LinReportTableConfigModal` SSOT |

## 10. Gaps (PO lock)

| ID | Decision |
|----|----------|
| GAP-DA-RPT-SRC-01 | **autoApprove** `report_source_form_confirm` → `sourceFormReady=yes` · residual `patrol` await_confirm: KPI tuần đường/kiểm + panel/check-in soft-degrade (0/empty/toast) tới patrol `done` |
| GAP-DASH-COV-01 | Coverage % = **0** + toast P1 — SA công thức P2 |
| GAP-DASH-ROADLEN-01 | Chiều dài QL = **0** + toast tới `asset`/`road-route` ready |
| GAP-F-DSH-01 | Live 5–10s → **P2** SignalR badge only |
| GAP-F-DSH-02 | Ngân sách KPI → stub / P2 Contract |
| GAP-DASH-COUNT-02 | typeCode tile ↔ `IncidentType` / report `type` — SA/Dev map SSOT |
| GAP-DASH-COUNT-03 | 5xx → count 0 + ghi endpoint+HTTP |

## 11. Open questions

| ID | Question | Owner | Default (autoApprove) |
|----|----------|-------|------------------------|
| OQ-01 | Coverage công thức chính thức? | SA | GAP-DASH-COV-01 lock 0 |
| OQ-02 | Road-len nguồn khi asset chưa done? | SA | GAP-DASH-ROADLEN-01 lock 0 |
| OQ-03 | Patrol confirm trước soft-degrade hay hard-block KPI? | PO | soft-degrade (đã chốt §5) |

## 12. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `dashboard` / **`dashboard`** (Kind E) |
| phase_from / phase_to | `po` → `design` |
| STATUS | po **confirmed** · design **pending** |
| Context / Demo / DI | CTX-01 · DEM-01 · DI-01/DI-02 (abs `_data-analy/features/`) |
| controlHint / UNCLEAR | §5 · OQ-01/02 defaulted |
| Screens / Pattern / devSlash | §7 · Full page · `/agent-dev` |
| Report AC / Leave | §6 · §8 · `report_standard: v1` |
| peerStdUrl / reviewUrl | peer `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` · reviewUrl= (Design ghi) |
| APIs | Reuse `report/*` + `incident/incidents` — **cấm** `dashboard/*` ad-hoc · **cấm ERP.*** |
| Open questions | OQ-01/02 defaulted · OQ-03 chốt soft-degrade |
| Next AskQuestion | `design_confirm` (autoApprove ON) |
| Next slash | `/agent-design` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHashPriorDataAnaly | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| versionGate | ok |
| generatedAt | 2026-09-17T16:50:00.000Z |
| taskId | task_286f6a49 |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHashPriorDataAnaly=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok taskId=task_286f6a49 -->
