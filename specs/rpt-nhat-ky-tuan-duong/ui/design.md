# Design — rpt-nhat-ky-tuan-duong (Nhật ký tuần đường)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** · Kind **E** AnalyticsReportShell |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` · **không** CRUD |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_6d170bb5`) |
| cr | `nktd-pdf-20260917` · Wave B · cite `SRC-NKTD-PDF` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| peerStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| real_view_parity | `v1` |
| report_standard | `v1` |
| shared_grid_example | `v1` (report shell · DES-RPT-*) |
| prototype | `specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-road` |
| domain | **Report** · **cấm ERP.*** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_74fe0220` |
| prior · data_analy | `confirmed` · control-hint + real-data · hash `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` · **hash skip** |
| sourceFeature | `csdl-so-02` · `sourceFormReady=yes` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-09-18T17:30:00.000Z` |
| taskId | `task_6d170bb5` |

**Cấm ERP.*** · **cấm** path API mới · **cấm** `api/v1/reports` · **cấm** CRUD new_page · **cấm** gộp `rpt-tuan-duong` GPS · **cấm** re-scan demo (GAP-DES-DEMO-RESCAN-01).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | Kind E leaf |
| CTX-02 | extract `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | **SRC-NKTD-PDF** |
| DEM-01 | — | **N/A** · **không** re-scan |
| DI-01 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` | controlHint · done |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md` | §A+§B · done |
| DI-03 | form `csdl-so-02` | sourceFormReady=yes |

Persona: Hạt trưởng · Khu QLĐB. Prototype **content-only** DES-RPT-A/C/F/CHART + Zone C/D. **Giữ** Kind E shell prior · delta Wave B dưới.

## § Delta Wave B (`edit_page` · CR)

| ID | Prior design | New (this design) | Surface |
|----|--------------|-------------------|---------|
| **GAP-NKTD-SRC-01** | Seed 12 check-in OK P1 | Live empty=`[]` · **cấm** seed · proto mock = sổ form (không check-in) | BE+copy |
| **GAP-NKTD-DRILL-01** | `?kind=patrol-logs` | `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id={bookId}` · **cấm** `?kind=` | FE drill |
| **GAP-NKTD-SIGN-01** | MatchOk / SupervisorSignedAt | `RemarkSign` → `supervisorNote` · signed nếu RemarkSign ≠ rỗng | grid |
| GAP-NKTD-LOC-RPT | locationText | **giữ** · fallback Km string | grid |
| GAP-NKTD-NOTE-01 | thiếu Note | cột **Ghi chú** `note` · Config FULL · **default visible** | grid |
| **GAP-NKTD-PRINT-01** | print-scope stub | P1 grid print · **P2** bìa TT41 = debt · không block | toolbar In |
| GAP-DES-RPT-TB-01 | Excel trên filter cụm | Excel **chỉ** `reportToolbar` · filter **0** action | DES-RPT-A/C |

## 1. Kind + UI pattern

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` |
| 2 | Grid | `LinCatalogDataGrid` resizable ON |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 |
| 4 | Filter | `LinErpListFilterBar` 1 hàng wrap · 🔍 mép phải · **0** action button |
| 5 | Toolbar | `reportToolbar`: Làm mới · Chart · **Xuất Excel** · In · Config FULL (`fa-cog`) |
| 6 | Chart | SoCai live items · **cấm** stub toast |
| 7 | Config | `LinReportTableConfigModal` FULL · **cấm** `configHint` / list-only modal |
| Form | OUT | **cấm** Thêm mới Zone A |
| Leave | N/A report | dirty leave N/A · toast `useAlert` / `dispatchAppToast` · **cấm** native alert |
| Drill | form nguồn | `/csdl-so-02` hoặc hub resource+id |
| map | `none` | |

## 2. Screens / zones

| Screen | FormMode | Pattern | Zones |
|--------|----------|---------|-------|
| S-RPT Nhật ký tuần đường | report | Full page | **DES-RPT-A** toolbar · **DES-RPT-C** filter · Zone C grid · D pager |
| S-CFG Config | — | Modal | **DES-RPT-F** |
| S-CHART Biểu đồ | — | Modal | **DES-RPT-CHART** |
| S-EXPORT Excel | — | Modal confirm (nếu 2 scope) / direct | toolbar onExport |
| Form CRUD | — | — | **OUT** |

### DES-RPT-A — reportToolbar (thứ tự)

Làm mới (`fa-sync-alt`) · Xem biểu đồ (`fa-chart-bar`) · Xuất Excel (`fa-file-excel`) · In (`fa-print`) · Sửa config (`fa-cog`).

### DES-RPT-C — filter (controlHint)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| routeId | Tuyến | `SearchInput` | road-route CUC2 · cấm QL.22 |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 |
| fromDate / toDate | Kỳ | `Date` | tz_day trên `EventAt` |
| qSearch | Tìm | `Input` | |
| onSearch | Xem | 🔍 primary | apply → load · **chưa Xem** = empty hint |

**Cấm** trên filter: Xuất Excel · In · Làm mới · Config · Chart · Thêm mới.

### Zone C — Grid columns (controlHint)

| key | Label | Source | notes |
|-----|-------|--------|-------|
| day / checkedAt | Ngày | `EventAt` | |
| route | Tuyến | RoadCode/Name | |
| patrolStaff | Cán bộ | PatrolStaff | |
| locationKm | Km | LocationKm | |
| locationText | Vị trí | LocationText \|\| Km | |
| weatherAndEvent | Nội dung nhật ký | WeatherEvent | |
| onSiteAction | Xử lý tại chỗ | OnSiteAction | |
| supervisorNote | Nhận xét / ký | RemarkSign | **GAP-NKTD-SIGN-01** |
| note | Ghi chú | Note | default visible |
| statusLabel | Trạng thái | RemarkSign nonempty → signed | **cấm** MatchOk |
| bookNo | Số sổ | BookNo | |
| drill | Nguồn | bookId/entryId | Button «Mở sổ» |

### Zone D — Pagination

Luôn hiện · 50/100/200/500 · total=0 khi chưa Xem.

## 3. Interactions

1. Mở page → empty hint · **không** auto-load.
2. **Xem** → `GET api/v1/report/patrol-log-road` · empty kỳ = `items=[]` (**cấm** seed).
3. Làm mới `!viewed` → toast · không fetch.
4. Excel → `/export` UTF-8 BOM · cùng filter · cột theo config (gồm supervisorNote nếu hiện).
5. Drill → `/csdl-so-02` hoặc hub `?resource=patrol-logs&id={bookId}` · **cấm** `?kind=`.
6. Chart / Print(P1) / Config FULL theo toolbar.
7. Enter trên tìm = Xem.

Perm: `report.nhat-ky-tuan-duong.read`.

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| Report zones | **DES-RPT-A** · **DES-RPT-C** · **DES-RPT-F** · **DES-RPT-CHART** + Zone C/D |
| SSOT | `po-design-report-standard` · `report-toolbar-actions` · `design-prototype-review` · `design-real-view-parity` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| **peerStdUrl** | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| **real_view_parity** | `v1` |
| **report_standard** | `v1` |

### Wire (report)

```
[DES-RPT-A] Làm mới · Chart · Xuất Excel · In · Config   ← toolbar ONLY
[DES-RPT-C] Tuyến·Cán bộ·Từ·Đến·Tìm · 🔍 Xem            ← 0 action button
[C] grid EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign·Note·Status·BookNo·Drill
[D] pageSize 50/100/200/500 · Tổng
[DES-RPT-F] Config FULL modal
[DES-RPT-CHART] SoCai modal
```

## 4. API (handoff SA — giữ path)

| Method | Path |
|--------|------|
| GET | `/api/v1/report/patrol-log-road` |
| GET | `/api/v1/report/patrol-log-road/export` |
| GET | `/api/v1/integration/road-routes/search` |

**Cấm** invent path · **cấm** ERP.*. Load join sổ `patrol-logs` + So02 + entries · **cấm** PatrolSessions/check-in seed.

## 5. GAP Design (Wave B)

| ID | Decision |
|----|----------|
| GAP-DS-NKTD-WB-01 | Drill `?kind=` **OUT** — `/csdl-so-02` / hub resource+id |
| GAP-DS-NKTD-WB-02 | Cột `supervisorNote` + `note` visible · status từ RemarkSign |
| GAP-DS-NKTD-WB-03 | Excel/In/Refresh/Chart/Config = toolbar · filter 0 action (**GAP-DES-RPT-TB-01**) |
| GAP-DS-NKTD-WB-04 | Print P2 bìa = debt **GAP-NKTD-PRINT-01** · P1 grid OK |
| GAP-DS-NKTD-WB-05 | Empty live = `[]` · proto mock sổ form · **cấm** check-in seed copy |
| GAP-DS-NKTD-WB-06 | autoApprove ON → tự `design_confirm` · enqueue SA · **không** chạy SA trong role này |
| GAP-DS-NKTD-03..08 | Prior Kind E / SearchInput / Config FULL / Form OUT — **giữ** |

## 6. Out of pack

CRUD trên slug · GPS `rpt-tuan-duong` · CamScanner golden · warehouse · Kind B · ERP.* · yarn build/e2e role này.

## 7. Handoff SA

- Confirm load join sổ · no seed · no new path.
- Confirm DTO: locationText · supervisorNote · note · bookId/entryId · signed từ RemarkSign.
- Roles sau = **pending**.
- Build gate: Design **không** sửa MFE/BE.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 · report_standard=v1 · real_view_parity=v1 -->
