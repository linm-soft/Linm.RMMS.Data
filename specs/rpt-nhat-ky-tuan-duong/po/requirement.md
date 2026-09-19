# PO — rpt-nhat-ky-tuan-duong (Nhật ký tuần đường)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** |
| packKind | **`report`** · Kind **E** AnalyticsReportShell — **confirm** |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_74fe0220` · CR `nktd-pdf-20260917` Wave B · cite `SRC-NKTD-PDF` · prior analy `task_54f0fb60` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only — **cấm** e2e/start:std ở PO) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · compact=`handoff/data_analy-compact.md` · control-hint + real-data abs dưới `specs/_data-analy/features/` · contentHash `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` · **hash skip** — **cấm** re-scan demo |
| sourceFeature | **`csdl-so-02`** · resource `patrol-logs` · formNo `02` |
| sourceTables | `rmms_csdl_catalog_records` · typed So02 · `rmms_csdl_book_entries` (+ `LocationText`) |
| sourceFormReady | **yes** (Wave A Review PASS) |
| cr | `nktd-pdf-20260917` · Wave B |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-09-18T17:15:00.000Z` |
| taskId | `task_74fe0220` |
| priorArtifacts | `po|ui|be|task|…` **giữ** — PO ghi **§ Delta** · không wipe Kind E shell |

## 1. Goal

Báo cáo **Nhật ký tuần đường** (Kind E) — filter tuyến · cán bộ · kỳ · tìm → **Xem** load lưới dòng sổ BDTX mẫu 1 từ **`csdl-so-02`** (`patrol-logs` + So02 + book entries). Toolbar: Làm mới · Chart SoCai · Xuất Excel · In · Config FULL. Drill về form nguồn. **Cấm** Thêm mới · **cấm** typed CRUD · **cấm** gộp `rpt-tuan-duong` GPS · **cấm** ERP.*.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · mfeStdRoute `/bao-cao/nhat-ky-tuan-duong` · mfeStdUrl `http://localhost:9311/bao-cao/nhat-ky-tuan-duong`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **`GET api/v1/report/patrol-log-road`** (+ `/export`) — **giữ path** · **cấm** path mới · **cấm** `api/v1/reports`

## 2. Current → New (`edit_page` · CR Wave B)

| ID | Current (live) | New (this PO) | Surface |
|----|----------------|---------------|---------|
| **GAP-NKTD-SRC-01** | Load check-in/`PatrolSessions` · empty → **12-row seed** | Query sổ `resource=patrol-logs` + So02 + entries · **0 dòng = empty** · **cấm** seed | BE |
| **GAP-NKTD-DRILL-01** | Drill `?kind=patrol-logs` | `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id={bookId}` · **cấm** `?kind=` | FE |
| **GAP-NKTD-SIGN-01** | `MatchOk` · `supervisorNote=""` | `RemarkSign` → `supervisorNote` · signed nếu RemarkSign ≠ rỗng | BE+grid |
| GAP-NKTD-LOC-RPT | Vị trí từ check-in Km | `locationText` fallback Km string | grid |
| GAP-NKTD-NOTE-01 | thiếu cột ghi chú | map `Note` · Config FULL · **default visible** | grid |
| **GAP-NKTD-PRINT-01** | `window.print` / CSV | P1 print grid OK · **P2** bìa+bảng TT41 PL VIII — **không** block P1 DoD | toolbar In |
| GAP-NKTD-HDSD-01 | HDSD «Tạo mới» | bỏ · tạo data tại `/csdl-so-02` | HDSD |
| Shell Kind E | zones A–D · toolbar · filter · API path | **giữ** | FE |
| Entity stale | `PatrolLogBook` / check-in seed | **OUT** load SSOT | BE |

## 3. DoD (đo được)

1. Draft filter → **Xem** (`onSearch`) mới `GET …/patrol-log-road`. Làm mới = re-fetch filter đã Xem; chưa Xem → toast SSOT, **không** fetch. Empty kỳ = `items=[]` · **không** 12 seed (**GAP-NKTD-SRC-01**).
2. Zone A title «Nhật ký tuần đường» — **cấm** Thêm mới.
3. Filter = `LinErpListFilterBar` · **1 hàng wrap** · lấp hàng rồi wrap · 🔍 mép phải · **0** action button trên bar (**GAP-FILTER-WRAP-02** / **GAP-FILTER-BAR-08**).
4. Toolbar (`reportToolbar`): Làm mới · Xem biểu đồ · Xuất Excel · In · Sửa config — **cấm** action trên filter (`report-toolbar-actions`).
5. Config = `LinReportTableConfigModal` FULL (grid+footer+chart) — **cấm** `configHint` / `LinListTableConfigModal`.
6. Grid cột §5 · drill §2 · pager 50/100/200/500 **luôn**.
7. Chart SoCai từ `items` live khi đã Xem + ≥1 dòng — **cấm** stub toast.
8. Excel UTF-8 BOM · cùng filter đã Xem · cột theo config (gồm `supervisorNote` nếu hiện).
9. In: P1 grid; P2 bìa PDF = debt **GAP-NKTD-PRINT-01** — không fail P1.
10. Auth JWT · tenant · perm `report.nhat-ky-tuan-duong.read`.
11. **Cấm ERP.*** · **cấm** invent API · **cấm** CRUD trên slug này.

## 4. CTX / DEM / DI

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | feature Kind E |
| CTX-02 | extract `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | **SRC-NKTD-PDF** · T-SO-02 |
| CTX-03 | CR `specs/_cr/nktd-pdf-20260917/review.md` + `task-rpt-nhat-ky-tuan-duong.md` | GAP SRC/DRILL/SIGN/PRINT |
| DEM-01 | — | **N/A** · hash skip · Design prototype **giữ** |
| DI-01 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` | controlHint · **done** |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md` | §A+§B bind · **done** |
| DI-03 | form `csdl-so-02` control-hint/real-data | sourceFormReady=yes |
| MFE | `Linm.Web.RMMS.Report` · `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` | UI |
| BE | `Linm.RMMS.WebService` · `api/v1/report/patrol-log-road` | API |

## 5. controlHint + grid bind (từ analy — hash skip)

### Filters

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · Integration Type A · CUC2 38 · **cấm QL.22** |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd **P1** |
| fromDate / toDate | Kỳ | `Date` | `EventAt` / `day` · `tz_day` |
| qSearch | Tìm kiếm | `Input` | nội dung · tuyến · cán bộ · số sổ |

### Grid ← `csdl-so-02` / T-SO-02

| Cột lưới | Field nguồn | note |
|----------|-------------|------|
| Ngày | `EventAt` → `day`/`checkedAt` | |
| Tuyến | `RoadCode`/`RoadName` | |
| Cán bộ | `PatrolStaff` | |
| Km | `LocationKm` | |
| Vị trí | `LocationText` \|\| Km string | Wave A |
| Nội dung nhật ký | `WeatherEvent` → `weatherAndEvent` | |
| Xử lý tại chỗ | `OnSiteAction` | |
| Nhận xét / ký | `RemarkSign` → `supervisorNote` | **GAP-NKTD-SIGN-01** |
| Trạng thái | RemarkSign ≠ rỗng → `signed` else `pending` | **cấm** MatchOk |
| Ghi chú | `Note` | default visible |
| Số sổ | `BookNo` | |
| bookId / entryId | catalog Id · entry Id | drill |

### Lookup / API

| Op | API |
|----|-----|
| Xem | `GET api/v1/report/patrol-log-road` |
| Excel | `GET api/v1/report/patrol-log-road/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| Drill | `/csdl-so-02` or hub `?resource=patrol-logs&id=` — **cấm** `?kind=` |

Perm: `report.nhat-ky-tuan-duong.read`.

## 6. Report AC (REQUIRED · packKind=report)

| Area | Acceptance |
|------|------------|
| **Shell 2C** | Toolbar trái: Làm mới · Xem biểu đồ · **Xuất Excel** · In · Sửa config · **cấm** Thêm mới / Phê duyệt · **cấm** action button trên filter (`report-toolbar-actions`) |
| **Config FULL** | Sửa config = `LinReportTableConfigModal` (grid+footer+chart) — **không** Zone F-only / `configHint` |
| **Filter** | `LinErpListFilterBar` · **1 hàng wrap** · field **lấp hàng rồi wrap** · 🔍 mép phải · Xem = 🔍 · **không** Tìm · **không** stack · **không** Xuất Excel/In/Làm mới trên bar |
| **Grid** | Report grid + footer pager theo config · **không** header-filter cột catalog |
| **Chart** | SoCai pattern · live `items` · `report_chart` ≠ none |
| **SSOT** | `/erp-report-context` · `po-design-report-standard` · `report-toolbar-actions` |

**Handoff → Design:** prototype DES-RPT-A/C/F (+ CHART) delta drill+cols · **giữ** prior · **cấm** stub toolbar.

Map TL: **T-UI-RPT-TB-01** · **T-UI-RPT-EXPORT-01** · **T-UI-RPT-01** · **T-UI-RPT-CONFIG-01** · **T-UI-RPT-CHART-01** · **T-UI-RPT-PRINT-01**=P2.

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | Actions | devSlash |
|---------|---------|----------|---------|----------|
| S-RPT — Nhật ký tuần đường | **Full page** | Report view (read-only) | Xem · Refresh · Chart · Excel · In · Config · drill | `/agent-dev` |
| S-CFG — Config cột/chart | **Modal** (`LinReportTableConfigModal`) | Config | Save/Cancel | `/agent-dev` |
| S-CHART — Biểu đồ | **Modal** (SoCai / LedgerReportChartModal) | Chart | Close | `/agent-dev` |
| S-EXPORT — Xác nhận xuất (nếu 2 scope) | **Modal** (`ExportConfirmModal`) | Export | Confirm/Cancel | `/agent-dev` |
| Form nguồn CRUD | **OUT** pack | — | tạo/sửa tại `/csdl-so-02` | — |

Zones: **DES-RPT-A** toolbar · **DES-RPT-C** filter · **DES-RPT-F** config · **DES-RPT-CHART** · grid Zone C · pager Zone D. map=`none`.

peerStdUrl gợi ý: cùng Kind E report trên MFE Report (SoCai / peer report leaf) — Design chọn peer live cùng formType.

## 8. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty config modal / unsaved display config | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) — **cấm** native `confirm` |
| Export / In / chặn lỗi BE | **`useAlert` / `Modal`** — **cấm** `window.alert` |
| Report page draft filter (chưa Xem) | không Leave — draft local OK |
| Xóa / phê duyệt | **N/A** (report read-only) |

## 9. GAP PO (Wave B)

| ID | Decision |
|----|----------|
| GAP-NKTD-SRC-01 | Load sổ `csdl-so-02` · empty=`[]` · **cấm** seed/check-in |
| GAP-NKTD-DRILL-01 | Drill resource/id hoặc `/csdl-so-02` · **cấm** `?kind=` |
| GAP-NKTD-SIGN-01 | `RemarkSign` → supervisorNote/signed |
| GAP-NKTD-PRINT-01 | In bìa PDF = **P2** · không block P1 |
| GAP-NKTD-HDSD-01 | Bỏ «Tạo mới» trên HDSD report |
| GAP-PO-RPT-01 | § Report AC FULL · toolbar vs filter tách |
| GAP-PO-LEAVE-01 | LeaveConfirmModal / useAlert — **cấm** native dialog |
| GAP-PO-NKTD-01 (prior) | API `api/v1/report/patrol-log-road` — **giữ** |
| packKind | **report** / Kind E — **confirm** |

## 10. Open questions (Autopilot defaults — không block)

| Q | Default |
|---|---------|
| Q-PRINT-P2 timing | P2 debt · không block P1 DoD |
| Q-NOTE-COL default visible | **yes** |
| Q-STAFF catalog P1 | SearchInput nva/ttb/lvc/pmd — giữ |

## 11. Out of pack

- CRUD / Slideout / typed `new_page` trên slug này
- `rpt-tuan-duong` GPS · `rpt-nhat-ky-tuan-kiem` Mẫu 8 · `rpt-checkin`
- Invent `POST` patrol / `api/v1/reports` · ERP.*
- Re-OCR CamScanner · Step 4b / migration / e2e ở role PO
- Wipe prior Design/SA/TL artifacts

## 12. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `rpt-nhat-ky-tuan-duong` · **`report`** Kind E · **confirm** |
| phase_from / phase_to | po → design |
| changeScope | `edit_page` · CR Wave B · **giữ** prior prototype/design |
| controlHint | §5 + analy abs paths |
| Screens / Pattern / devSlash | §7 · Full page + Modals · `/agent-dev` |
| Report AC / Leave | §6 · §8 |
| peerStdUrl | Design chọn peer Kind E report live |
| reviewUrl | **giữ** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` — delta drill+cols+toolbar |
| Open questions | §10 defaults |
| Next | Design delta · autoApprove ON · **cấm** start Design trong task PO này |
| This task | `roleOnly=po` · `task_74fe0220` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-09-18T17:15:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703 |
| taskId | `task_74fe0220` |
| cr | `nktd-pdf-20260917` |
| changeScope | edit_page |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 -->
