# Real-data bind — dashboard

| | |
|---|---|
| feature | `dashboard` |
| packKind | `dashboard` |
| prefix | `web-bff/api/v1` |
| domain | Report (`dashboard` → `report`) + read Incident / Patrol / Maintenance / Asset |
| sourceFeature | multi — xem § Source readiness |
| sourceTables | `rmms_incidents` · `rmms_work_orders` · `rmms_pavement_sections` · `rmms_patrol_sessions` · `rmms_patrol_check_ins` · `rmms_road_routes` |
| sourceFormReady | **no** (`patrol` STATUS await_confirm) |
| status | `blocked` · GAP-DA-RPT-SRC-01 |
| taskId | `task_4f5cdaa0` |
| contentHash | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |

## § Source readiness

| sourceFeature | STATUS | tables | Ready for PO? |
|---------------|--------|--------|---------------|
| `incident` | done | `rmms_incidents` | yes |
| `maintenance` | done | `rmms_work_orders` | yes |
| `pavement-section` | done | `rmms_pavement_sections` | yes |
| `attendance` | done | (patrol attendance) | yes (peer) |
| `patrol` | qa / await_confirm | `rmms_patrol_sessions` · `rmms_patrol_check_ins` | **no** |
| `asset` | qa / await_confirm | `rmms_road_routes` / assets | **no** (road-len) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `ReportQueryController` `api/v1/report/*` — `D:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api/Domains/Report/Controllers/ReportQueryController.cs` | KPI `0` · empty panel/grid | Hub mở · count 0 + **GAP-DASH-COUNT-03** (ghi endpoint+HTTP) — **cấm** nuốt 5xx im lặng |
| `api` | `IncidentsController` `api/v1/incident/incidents` — `…/Domains/Incident/Controllers/IncidentsController.cs` | Top grid empty · map no markers | toast lỗi list |
| `api` | `PatrolSessionsController` `api/v1/patrol/sessions` (+ check-ins) | empty tree | toast |
| `derived` | Coverage % · PCI avg · road length | tile `—` / 0 | SA |
| `geo` | Incident lat/lng trên mini map Leaflet | empty map OK | basemap still loads |

Demo HTML / `dashboard-data.js` = zone tham chiếu **không** SSOT số.

## §B — Bind field (HARD) + count rows

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| `asOf` | Ngày tổng hợp | Date | — | query `from`/`to` trên report GETs | — | n/a | n/a |
| `tuan-duong.count` | Tuần đường | KPI tile | — | `/report/patrol-road?page=1&pageSize=1` → `totalCount` | — | gap | n/a |
| `tuan-kiem.count` | Tuần kiểm | KPI tile | — | `/report/patrol-inspect?page=1&pageSize=1` → `totalCount` | — | gap | n/a |
| `bao-lu.count` | Tình hình bão lũ | KPI tile | — | `/report/disasters?page=1&pageSize=1` → `totalCount` · typeCode bão/lũ | — | gap | n/a |
| `tai-nan.count` | Tai nạn GT | KPI tile | — | `/report/traffic-accidents?page=1&pageSize=1` → `totalCount` | — | gap | n/a |
| `vi-pham.count` | Vi phạm xâm phạm | KPI tile | — | `/report/row-violations?page=1&pageSize=1` → `totalCount` | — | gap | n/a |
| `cong-viec.count` | Công việc | KPI tile | — | `/report/maintenance-summary` hoặc WO open `totalCount` | — | gap | n/a |
| `inc-open.count` | Sự cố mở | KPI tile | — | `/incident/incidents?status=open&page=1&pageSize=1` → `totalCount` | — | gap | n/a |
| `coverage.count` | Coverage tuần tra | KPI tile | — | derived patrol — **GAP-DASH-COV-01** · PO có thể lock 0 | — | gap | n/a |
| `road-len.count` | Chiều dài QL | KPI static | — | route length aggregate — **GAP-DASH-ROADLEN-01** | — | gap | n/a |
| `pci.count` | PCI TB | KPI static | — | `/report/pavement-condition` avg — SA | — | gap | n/a |
| `topIncidents[]` | Top sự cố mở | grid RO | — | `/incident/incidents?status=open&pageSize=5` | — | gap | n/a |
| `map.markers` | Mini map | Map | — | cùng open incidents + lat/lng | — | gap | n/a |
| `panel.tree` | Cây ĐV/QL/Km | Tree | `org-unit` / `road-route` | patrol sessions + check-ins (blocked tới patrol done) | — | gap | n/a |
| `checkins.export` | Xuất Excel check-in | toolbar | — | `/report/checkins/export` | — | gap | n/a |

**GAP-DASH-COUNT-01:** đủ hàng `.count` cho mọi tile không-GAP.  
**GAP-DASH-COUNT-02:** map `IncidentType` / report `type` ↔ tile id (`bao-lu`·`tai-nan`·`vi-pham`).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| `org-unit` | Integration / org tree (CTX) | master org | Dropdown cứng demo |
| `road-route` | `/integration/road-routes` (peer) | master tuyến | free text khi đã master |

## §D — Map

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OSM — CTX + demo `dashboard.html` · **không** invent SDK |
| Tools | View + marker click drill — **không** vẽ polygon P1 |
| Layer | Open incidents |
| Load | GET incidents open (+ bbox nếu SA thêm) |
| Save | none (read-only) |
| Pick | n/a |

`map: leaflet-mini` · không GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` trên dashboard (read-only hub). Drill → incident/patrol đổi status trên form nguồn.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | **blocked** tới sourceFormReady · DoD «màn mở = count DB» |
| Design | DES-DSH-* khớp §B · report standard |
| SA | Giữ path Report/Incident đã cite · optional thin facade — **cấm** ERP |
| Dev | Bind `vi-VN` · skeleton→số · typeCode SSOT |

## § G — Cấm

| ❌ | ✅ |
|----|-----|
| Mock / `dashboard-data.js` số ship | Aggregate GET + `totalCount` |
| `api/v1/dashboard/*` ad-hoc khi report/* đủ | Reuse `ReportQueryController` |
| `catch { return 0 }` giấu 5xx | GAP-DASH-COUNT-03 |
| Handoff PO khi patrol chưa done | Park · GAP-DA-RPT-SRC-01 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHash | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| generatedAt | 2026-09-17T16:45:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHash=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok -->
