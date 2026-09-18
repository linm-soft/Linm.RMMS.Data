# Design — dashboard (Dashboard điều hành — KPI BDTX)

| Field | Value |
|-------|-------|
| feature | `dashboard` |
| this role | `design` · `/agent-design` |
| changeScope | `new_page` |
| packKind | **`dashboard`** (Kind **E** · KPI hub Báo cáo) |
| Feature Kind | **E** · leaf `/bao-cao/dashboard` · read-only hub |
| formPattern | **Full page** |
| status | `confirmed` |
| design_confirm | **approve** (autoApprove=ON · 2026-09-17) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html` |
| peerStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| real_view_parity | `v1` |
| report_standard | `v1` |
| grid_standard | N/A (không Kind B list) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/dashboard` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dashboard` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Report · **cấm ERP.*** · **cấm** `api/v1/dashboard/*` ad-hoc |
| prior · po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · hash skip `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` only · **cấm** e2e / `start:std` ở role design |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |
| versionGate | `ok` |
| updatedAt | `2026-09-17T17:00:00.000Z` |
| taskId | `task_91d788d6` |

**Khác** host `@linm/dashboard` / `asset-kcht-dashboard` (KCHT). Đây là KPI BDTX trên MFE Report.

## 0. Context / Demo / DI (hash skip — không crawl demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/dashboard.md` | Kind E |
| DEM-01 | `Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html` | zone ids only — **không** SSOT số · **không** re-scan |
| DI-01 | `specs/_data-analy/features/dashboard-control-hint.md` | controlHint SSOT |
| DI-02 | `specs/_data-analy/features/dashboard-real-data.md` | §A+§B count rows |
| PO | `specs/dashboard/po/requirement.md` | Report AC · Screens · Leave |

## 1. Kind + pattern

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | Shell | **1×** `LinPageLayout` kind=`report` / dashboard hub — content-only |
| 2 | Form pattern | **Full page** — **không** Modal/Slideout CRUD |
| 3 | Report SSOT | DES-RPT-A / C / F · `report_standard: v1` · `chart_none` P1 |
| 4 | Filter | `LinErpListFilterBar` 1 hàng wrap · Date `asOf` · 🔍 = Xem · **cấm** Xuất Excel/In/Làm mới trên bar |
| 5 | Toolbar | `reportToolbar`: Làm mới · Xuất Excel check-in · In · Config FULL · **cấm** Thêm mới · **cấm** Chart P1 |
| 6 | KPI counts | `dashboard-count-from-db` · placeholder `—` trên proto · **cấm** mock số ship |
| 7 | Leave | Dirty filter chưa Xem → **LeaveConfirmModal** · **cấm** native confirm |
| 8 | Chrome | **Cấm** demo banner / user-menu Hồ sơ·Đổi MK / note GAP trên UI end-user |

## 2. Screens (từ PO)

| Surface | Pattern | FormMode | Actions | Zones | devSlash |
|---------|---------|----------|---------|-------|----------|
| S-DSH Hub KPI | Full page | Read | Xem · Làm mới · Export check-in · In · Config · tile focus · drill | DES-DSH-* + DES-RPT-A/C/F | `/agent-dev` |
| S-DSH Top grid | Full (embedded) | Read | row drill → incident | DES-DSH-TOP | `/agent-dev` |
| S-DSH Map | Full (embedded) | Read | marker click drill | DES-DSH-MAP | `/agent-dev` |

## 3. Zones (DES-DSH + DES-RPT)

| Zone id | DES-RPT map | Control / pattern | Notes |
|---------|-------------|-------------------|-------|
| DES-DSH-HDR | Header | Text H1 | «Tổng hợp công tác QL & BDTX» · icon `fa-gauge-high` |
| DES-DSH-TB | **DES-RPT-A** | reportToolbar | Refresh · Export check-in · In · Config (`fa-cog`) |
| DES-DSH-FILTER | **DES-RPT-C** | Date `asOf` + 🔍 | `LinErpListFilterBar` · **GAP-FILTER-WRAP-02** |
| DES-DSH-KPI6 | — | KPI tile ×6 | `tuan-duong`·`tuan-kiem`·`bao-lu`·`tai-nan`·`vi-pham`·`cong-viec` |
| DES-DSH-KPI4 | — | KPI tile ×4 | `inc-open`·`coverage`·`road-len`·`pci` |
| DES-DSH-TABS | — | Tab ×3 | Tuần đường / Tuần kiểm / Công việc · default 0 |
| DES-DSH-PANEL | — | Tree + chips | SearchInput org/route P2 · soft-degrade patrol |
| DES-DSH-MAP | — | Map Leaflet | markers open incidents · OSM/Esri |
| DES-DSH-TOP | (grid RO) | Read-only grid | mã · loại · tuyến · Km · mức · TT · ≤5 |
| DES-DSH-NAV | — | Nav buttons | reports · gis · incident · patrol |
| DES-DSH-P2 | — | Badge/toast | P2 SignalR only — **không** poll P1 |
| Config modal | **DES-RPT-F** | `LinReportTableConfigModal` FULL | grid + footer + chart slot · **không** Zone F-only |
| Leave | — | LeaveConfirmModal | dirty filter |

**Chart:** P1 `chart_none` — **không** DES-RPT-CHART stub.

## 4. Field inventory (Control = controlHint)

| uiField | Label | controlHint | Bind (real-data §B) | P1 |
|---------|-------|-------------|---------------------|----|
| `asOf` | Ngày tổng hợp | Date | query `from`/`to` | live filter |
| `tuan-duong.count` | Tuần đường | KPI | `/report/patrol-road?page=1&pageSize=1` → `totalCount` | soft-degrade patrol |
| `tuan-kiem.count` | Tuần kiểm | KPI | `/report/patrol-inspect?page=1&pageSize=1` | soft-degrade |
| `bao-lu.count` | Bão lũ | KPI | `/report/disasters?page=1&pageSize=1` | live |
| `tai-nan.count` | TNGT | KPI | `/report/traffic-accidents?page=1&pageSize=1` | live |
| `vi-pham.count` | Vi phạm HL | KPI | `/report/row-violations?page=1&pageSize=1` | live |
| `cong-viec.count` | Công việc | KPI | `/report/maintenance-summary` / WO open | live |
| `inc-open.count` | Sự cố mở | KPI | `/incident/incidents?status=open&pageSize=1` | live · drill |
| `coverage.count` | Coverage | KPI | derived | **GAP-DASH-COV-01** → 0 + toast |
| `road-len.count` | Chiều dài QL | KPI | route aggregate | **GAP-DASH-ROADLEN-01** → 0 + toast |
| `pci.count` | PCI TB | KPI | `/report/pavement-condition` avg | live (SA) |
| `topIncidents[]` | Top sự cố | grid RO | open `pageSize=5` | live |
| `map.markers` | Mini map | Map | open + lat/lng | Leaflet |
| `checkins.export` | Xuất Excel | toolbar | `/report/checkins/export` | soft-degrade |

## 5. Report AC (Design pass)

| Area | Pass |
|------|------|
| Shell 2C DES-RPT-A | ✅ toolbar · không Thêm mới · không Chart P1 · không action trên filter |
| Filter DES-RPT-C | ✅ 1 hàng wrap · Date · 🔍 mép phải |
| Config DES-RPT-F | ✅ FULL modal mock · không configHint-only |
| Chart | ✅ `chart_none` — không stub |
| KPI | ✅ zone ids + bind cite · proto `—` / GAP `0` |
| Leave | ✅ LeaveConfirmModal |

## 6. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/dashboard-prototype.html` |
| Report zones | **DES-RPT-A** · **DES-RPT-C** · **DES-RPT-F** (+ DES-DSH-* hub) |
| Form zones | Full page hub · `formPattern=Full` · không form CRUD cols |
| SSOT | `po-design-report-standard` · `design-prototype-review` · `design-real-view-parity` · `dashboard-count-from-db` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html` |
| **peerStdUrl** | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| **real_view_parity** | `v1` |

### Wire (dashboard hub)

```
[HDR] icon + title «Tổng hợp công tác QL & BDTX»
[TB / DES-RPT-A] Làm mới · Xuất Excel check-in · In · Sửa config
[FILTER / DES-RPT-C] Date asOf · 🔍 Xem (mép phải · 1 hàng wrap)
[KPI6] 6 tiles · click → focus panel/tab
[KPI4] 4 tiles · GAP = 0 + toast
[TABS + PANEL] 3 tabs · tree + chips
[MAP] Leaflet mini · markers open
[TOP] RO grid ≤5
[NAV] quick links
[DES-RPT-F] LinReportTableConfigModal FULL
[Leave] LeaveConfirmModal khi dirty filter
```

## 7. Gaps / open (handoff SA)

| ID | Design note |
|----|-------------|
| GAP-DA-RPT-SRC-01 residual | patrol soft-degrade KPI/panel/export |
| GAP-DASH-COV-01 | Coverage tile = 0 + toast |
| GAP-DASH-ROADLEN-01 | Road-len tile = 0 + toast |
| GAP-F-DSH-01 / 02 | P2 only · không poll · ngân sách stub |
| OQ-01/02 | SA mặc định GAP lock (PO đã default) |

## 8. Handoff → SA

| Field | Value |
|-------|-------|
| phase_from / phase_to | `design` → `sa` |
| reviewUrl / peerStdUrl / zones | §6 · §3 |
| control-map | §4 = controlHint |
| APIs | Reuse `ReportQueryController` + `IncidentsController` — **cấm** `dashboard/*` ad-hoc · **cấm ERP.*** |
| Next slash | `/agent-sa` (sau confirm — đã autoApprove) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| contentHashPriorDataAnaly | sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f |
| versionGate | ok |
| generatedAt | 2026-09-17T17:00:00.000Z |
| taskId | task_91d788d6 |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.2 contentHashPriorDataAnaly=sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f versionGate=ok taskId=task_91d788d6 -->
