# Data-analy — controlHint — dashboard

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| title | Dashboard điều hành — KPI BDTX |
| packKind | `dashboard` (Kind E · KPI home Báo cáo) |
| mode | `feature_context` |
| changeScope | `new_page` |
| status | `blocked` |
| blocker | `source_form_missing` — `patrol` STATUS ≠ done (`phase=qa` · `await_confirm`) |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |
| contentHash | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| versionGate | `ok` |
| analyzedAt | `2026-09-17T16:45:00.000Z` |
| taskId | `task_4f5cdaa0` |

> KPI home MFE Report `/bao-cao/dashboard` · **khác** host `@linm/dashboard` / `asset-kcht-dashboard`.  
> Domain SSOT: **Report** (`DOMAIN-MAP` · `dashboard` → `report`) · **cấm ERP.*** · **cấm** invent `api/v1/dashboard/*` khi Report/domain nguồn đã có list+`totalCount`.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/dashboard.md` |
| Demo | `Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html` (+ `js/dashboard-data.js`) |
| Control-map | `docs/context/_raw/legacy-govone/demo-maps/dashboard-control-map.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug `dashboard` → Report |
| MFE | `Linm.Web.RMMS.Report` · `mfeStdRoute=/bao-cao/dashboard` |

## Source form → tables (HARD)

| Field | Value |
|-------|-------|
| sourceFeature | **multi** — `incident` · `maintenance` · `pavement-section` · `patrol` · (`asset`/`road-route` cho chiều dài QL) |
| sourceTables | `rmms_incidents` · `rmms_work_orders` · `rmms_pavement_sections` · `rmms_patrol_sessions` · `rmms_patrol_check_ins` · `rmms_road_routes` |
| sourceFormReady | **no** |
| missing | `patrol` — specs/patrol STATUS `phase=qa` · `status=await_confirm` (chưa `done`) · chặn KPI Tuần đường / Tuần kiểm / Coverage / panel check-in |
| readyRows | `incident` **done** · `maintenance` **done** · `pavement-section` **done** · `attendance` **done** |
| missingFormFields | — (entity cột đủ; blocker = STATUS form nguồn) |

**Gate:** `data-analy-report-source-form.md` · **GAP-DA-RPT-SRC-01** — **cấm** handoff PO / chain `roleOnly=po` đến khi `patrol` STATUS done **hoặc** board Approve `report_source_form_confirm` (park Autopilot).

### Map KPI → form / table nguồn

| KPI / zone (demo id) | sourceFeature | sourceTables | Nguồn count |
|----------------------|---------------|--------------|-------------|
| `tuan-duong` | `patrol` | `rmms_patrol_sessions` | `GET …/report/patrol-road?page=1&pageSize=1` → `totalCount` |
| `tuan-kiem` | `patrol` | `rmms_patrol_sessions` | `GET …/report/patrol-inspect?page=1&pageSize=1` → `totalCount` |
| `bao-lu` | `incident` | `rmms_incidents` | `GET …/report/disasters` · filter type bão lũ · `totalCount` |
| `tai-nan` | `incident` | `rmms_incidents` | `GET …/report/traffic-accidents` → `totalCount` |
| `vi-pham` | `incident` | `rmms_incidents` | `GET …/report/row-violations` → `totalCount` |
| `cong-viec` | `maintenance` | `rmms_work_orders` | `GET …/report/maintenance-summary` hoặc WO open `totalCount` |
| `inc-open` | `incident` | `rmms_incidents` | `GET …/incident/incidents?status=open&pageSize=1` → `totalCount` |
| `coverage` | `patrol` | `rmms_patrol_sessions` · check-ins | derived % — SA chốt; P1 có thể GAP toast |
| `road-len` | `asset` / route master | `rmms_road_routes` | aggregate length — SA; `asset` STATUS chưa done → GAP count 0 OK |
| `pci` | `pavement-section` | `rmms_pavement_sections` | `GET …/report/pavement-condition` avg PCI — SA |
| Top incidents grid | `incident` | `rmms_incidents` | `GET …/incident/incidents?status=open&pageSize=5` |
| Mini map markers | `incident` | `rmms_incidents` (+ lat/lng) | cùng list open · Leaflet |
| Panel tree / check-in | `patrol` | `rmms_patrol_check_ins` | `GET …/report/checkins` · sessions tree |
| Export Excel check-in | `patrol` | `rmms_patrol_check_ins` | `GET …/report/checkins/export` |

## § Delta Current vs New

| Current | New |
|---------|-----|
| Demo HTML Kind E · mock KPI · no BE | MFE Report page live aggregate |
| CTX gợi ý `/api/v1/dashboard/kpis` | **Reuse** `api/v1/report/*` + domain list `totalCount` · **cấm** hub `dashboard/*` ad-hoc |
| Host `@linm/dashboard` widget KCHT | **Tách** — KPI BDTX ở `/bao-cao/dashboard` |
| P2 SignalR | Badge only · GAP-F-DSH-01 |

## Control hint — zones (demo)

| Zone id | Pattern | controlHint | notes |
|---------|---------|-------------|-------|
| DES-DSH-HDR | Full page H1 | Text title | «Tổng hợp công tác QL & BDTX» |
| DES-DSH-FILTER | Filter bar 1 hàng | **Date** `asOf` · Refresh | `LinErpListFilterBar` · **Xem**/Làm mới = search · **cấm** Xuất Excel trên bar |
| DES-DSH-TB | Toolbar 2C | Refresh · Export check-in · Config (P2) | `reportToolbar` · `po-design-report-standard` |
| DES-DSH-KPI6 | KPI strip 6 | Tile button → focus panel | count **DB aggregate** · `dashboard-count-from-db` |
| DES-DSH-KPI4 | Extra KPI 4 | Tile · 2 drill link | `inc-open`→incident · `coverage`→patrol |
| DES-DSH-TABS | Tabs 3 | Tab | Tuần đường / Tuần kiểm / Công việc |
| DES-DSH-PANEL | Focus panel | Tree + chips + status | SearchInput tree org/route · status chip |
| DES-DSH-MAP | Mini map | Map Leaflet | markers open incidents · basemap OSM/Esri |
| DES-DSH-TOP | Top incidents | Read-only grid | columns: mã · loại · tuyến · Km · mức · TT · drill |
| DES-DSH-NAV | Quick nav | Nav buttons | reports · gis · incident · patrol |
| DES-DSH-P2 | Badge | Static / toast | P2 realtime — **không** poll 5s P1 |

### Filter / period fields

| uiField | Label | controlHint | catalogKind |
|---------|-------|-------------|-------------|
| `asOf` / `from`–`to` | Ngày tổng hợp / Kỳ | Date / period | — |
| (P2) `zoneOrg` | Đơn vị | SearchInput tree | `org-unit` |
| (P2) `route` | Tuyến QL | SearchInput | `road-route` |

## Report / dashboard AC (handoff PO khi unblocked)

| Area | Acceptance |
|------|------------|
| Shell 2C | Toolbar: Làm mới · (Chart nếu SA bật) · Xuất Excel check-in · In · Config — **cấm** Thêm mới |
| Filter | `LinErpListFilterBar` 1 hàng wrap · Date · 🔍 = Xem |
| KPI counts | Aggregate DB · typeCode khớp · **cấm** mock demo số |
| Chart | P1 `chart_none` trừ SA chốt khác |
| Config | `LinReportTableConfigModal` FULL nếu có grid config |

## API bind (đề xuất SA — cite có sẵn)

| UI | Method | Path | Notes |
|----|--------|------|-------|
| Tuần đường count | GET | `/report/patrol-road?page=1&pageSize=1` | BFF `web-bff/api/v1` · `totalCount` |
| Tuần kiểm count | GET | `/report/patrol-inspect?page=1&pageSize=1` | |
| Bão lũ | GET | `/report/disasters?page=1&pageSize=1` | typeCode khớp entity |
| TNGT | GET | `/report/traffic-accidents?page=1&pageSize=1` | |
| Vi phạm HL | GET | `/report/row-violations?page=1&pageSize=1` | |
| Công việc | GET | `/report/maintenance-summary` hoặc WO list | open only |
| Sự cố mở | GET | `/incident/incidents?status=open&page=1&pageSize=1` | `IncidentsController` |
| Top N + map | GET | `/incident/incidents?status=open&pageSize=5` | lat/lng entity |
| Check-ins / export | GET | `/report/checkins` · `/report/checkins/export` | |
| PCI / chiều dài | GET | `/report/pavement-condition` · route aggregate | SA |

**Cấm** N+1 full list thay `totalCount` · **cấm** hardcode số tile · **cấm** ERP.*.

## Gaps (PO confirm)

| ID | Default |
|----|---------|
| GAP-DA-RPT-SRC-01 | `patrol` chưa STATUS done → **park** pipeline · không PO |
| GAP-F-DSH-01 | Live 5–10s → P2 SignalR only |
| GAP-F-DSH-02 | Ngân sách KPI → stub / P2 Contract |
| GAP-DASH-COUNT-01 | Mọi tile không-GAP phải có hàng `{tile}.count` trong real-data |
| GAP-DASH-COUNT-02 | typeCode tile = `IncidentType` / report `type` filter |
| GAP-DASH-COV-01 | Coverage % — SA công thức hoặc PO lock 0 + toast |
| GAP-DASH-ROADLEN-01 | Chiều dài QL — chờ `asset`/`road-route` ready hoặc Integration list |

## Handoff

→ **PO:** chỉ sau `sourceFormReady=yes` · Kind E dashboard · Report AC · gaps  
→ **Design:** DES-DSH-* + reviewUrl · filter+toolbar SSOT  
→ **SA:** reuse ReportQuery · **cấm** domain mới · DOMAIN-MAP Report  
→ **TL/Dev:** MFE Report `/bao-cao/dashboard`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHash | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| generatedAt | 2026-09-17T16:45:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHash=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok -->
