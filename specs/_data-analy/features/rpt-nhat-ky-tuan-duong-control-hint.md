# Data-analy — controlHint — rpt-nhat-ky-tuan-duong (Kind E · edit_page CR)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| analyzedAt | `2026-09-18T16:56:00.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-02 · TT 41 PL VIII · **cấm** CamScanner scan làm golden |
| taskId | `task_54f0fb60` |
| cr | `nktd-pdf-20260917` · cite `SRC-NKTD-PDF` · Wave B report |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md` |
| sourceFeature | **`csdl-so-02`** (resource `patrol-logs` · formNo `02`) |
| sourceTables | `rmms_csdl_catalog_records` · `rmms_csdl_so02` / typed So02 · `rmms_csdl_book_entries` |
| sourceFormReady | **yes** — Wave A `csdl-so-02` STATUS **done** · Review PASS · LocationText |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · `api/v1/report/patrol-log-road` · **cấm ERP.*** · **cấm** path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` · alias live `/bao-cao/nk-td` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| priorAnaly | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` (new_page Kind E) — **giữ** zones/toolbar · **không** wipe |
| priorPoDesign | `specs/rpt-nhat-ky-tuan-duong/po|ui|be|task|…` — **giữ** · NEW AutocodeTask only |

> **Cấm** typed CRUD `new_page` · **cấm** Thêm mới Zone A · **cấm** gộp `rpt-tuan-duong` GPS.  
> Layout In Kind E: bìa+bảng sổ TT41 PL VIII = **P2** `GAP-NKTD-PRINT-01` / `T-UI-RPT-PRINT-01` — P1 = print grid OK.  
> Golden cột = Word **T-SO-02** + extract `nhat-ky-tuan-duong-pdf.md` — **không** re-OCR CamScanner.

## Sources

| Source | Path | note |
|--------|------|------|
| Context | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | Kind E · GAP-NKTD-SRC-01 |
| Extract CR | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | **SRC-NKTD-PDF** · bìa+cột TT 41 |
| Review CR | `specs/_cr/nktd-pdf-20260917/review.md` | **GAP-NKTD-PRINT-01** · SRC/DRILL/SIGN |
| TL pack CR | `specs/_cr/nktd-pdf-20260917/task-rpt-nhat-ky-tuan-duong.md` | T-CTX-CR-02 · map cột HARD |
| Form nguồn | `csdl-so-02` · control-hint/real-data | Wave A **done** |
| Entity live | `CsdlCatalogRecord` · `CsdlSo02` · `CsdlBookEntry` (+ `LocationText`) | **cấm** Col1–3 |
| Prior entity (stale) | `PatrolLogBook` / `PatrolLogEntry` / check-in seed | **OUT** load SSOT |
| Shared lookup | Integration `road-routes/search` Type A · CUC2 38 tuyến · **cấm QL.22** | |

## § Delta Current vs New (`edit_page` · CR · `task_54f0fb60`)

| ID | Current (live done) | New (this analy) | Surface |
|----|---------------------|------------------|---------|
| **GAP-NKTD-SRC-01** | `LoadPatrolLogAsync` → `PatrolSessions`+check-in · empty → **12-row seed** | Query sổ `resource=patrol-logs` + So02 + book entries · **0 dòng = empty** · **cấm** seed fallback | BE report |
| **GAP-NKTD-DRILL-01** | Drill `?kind=patrol-logs` | `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id=` · **cấm** `?kind=` | FE |
| **GAP-NKTD-SIGN-01** | `MatchOk` check-in · `SupervisorNote=""` | `RemarkSign` → `supervisorNote` · signed nếu RemarkSign ≠ rỗng | BE+grid |
| GAP-NKTD-LOC-RPT | Vị trí từ check-in Km | `locationText` fallback Km string (form Wave A) | grid |
| GAP-NKTD-NOTE-01 | thiếu cột ghi chú dòng | map `Note` → cột ghi chú (Config FULL) | grid |
| **GAP-NKTD-PRINT-01** | `window.print` / CSV — không layout bìa | P1 print grid · **P2** bìa+bảng TT41 PL VIII — **không** block DoD | toolbar In |
| GAP-NKTD-HDSD-01 | HDSD «Tạo mới» trên report | bỏ · ghi tạo data `/csdl-so-02` | HDSD |
| T-OUT-CRUD | — | **OUT** CRUD / typed new_page / Resource slideout | pack |
| GPS peer | — | **cấm** gộp `rpt-tuan-duong` | pack |

## § Delta Current vs New (`new_page` · prior) — **giữ**

| Area | Kept |
|------|------|
| Kind E zones A–D | Header · toolbar+filter · grid · pager |
| Toolbar | Xem · Làm mới · Chart · In · Config FULL · Xuất Excel · **cấm** filter-button actions |
| Filter | tuyến SearchInput · kỳ Date · cán bộ · qSearch |
| API path | `GET api/v1/report/patrol-log-road` (+ `/export`) — **giữ** · **cấm** `api/v1/reports` |
| Perm | `report.nhat-ky-tuan-duong.read` |

## Grid ← form nguồn (`csdl-so-02` / T-SO-02)

| Cột lưới | Field nguồn | note |
|----------|-------------|------|
| Ngày | `CsdlBookEntry.EventAt` → `day` / `checkedAt` | tz_day filter |
| Tuyến | `CsdlSo02.RoadCode` / `RoadName` | |
| Cán bộ | `CsdlSo02.PatrolStaff` | |
| Km | `LocationKm` | |
| Vị trí | `LocationText` fallback Km string | Wave A |
| Nội dung nhật ký | `WeatherEvent` → `weatherAndEvent` | |
| Xử lý tại chỗ | `OnSiteAction` | |
| Nhận xét / ký | `RemarkSign` → `supervisorNote` | GAP-NKTD-SIGN-01 |
| Trạng thái | RemarkSign ≠ rỗng → `signed` else `pending` | **cấm** MatchOk |
| Ghi chú | `Note` | |
| Số sổ | `BookNo` | |
| bookId / entryId | catalog Id · entry Id | drill |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Nhật ký tuần đường» — **cấm** Thêm mới |
| B | Toolbar + `LinErpListFilterBar` | Xem · Làm mới · Chart · In · Config FULL · Excel · SearchInput tuyến/cán bộ · Date · Input · **0** action trên filter bar |
| C | `LinCatalogDataGrid` | kéo cột ON · map trên · drill sổ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |
| Chart | SoCai | từ `items` **live** · **cấm** stub toast |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 |
| fromDate / toDate | Kỳ | `Date` | trên `EventAt` / `day` · tz_day |
| qSearch | Tìm kiếm | `Input` | nội dung · tuyến · cán bộ · số sổ |

## Lookup / report APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-log-road` |
| Excel | `GET api/v1/report/patrol-log-road/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| Form nguồn (không gọi từ report) | `api/v1/asset/csdl-records?resource=patrol-logs` |

## Toolbar / export (pack report)

| Action | Zone | Rule |
|--------|------|------|
| Xem | toolbar | applied filters → grid |
| Làm mới | toolbar | clear + re-query sau Xem |
| Chart | toolbar | SoCai live items |
| In | toolbar | P1 grid · P2 bìa PDF = GAP-NKTD-PRINT-01 |
| Config | toolbar | `LinReportTableConfigModal` FULL · **cấm** `configHint` |
| Xuất Excel | toolbar | sau Xem · cùng filter · UTF-8 BOM |
| — | filter bar | **cấm** Excel/In/Thêm |

## Handoff

→ PO Kind E `edit_page` · § Delta CR · `sourceFormReady=yes` · `sourceFeature=csdl-so-02` · **giữ** prior requirement/design · route `/bao-cao/nhat-ky-tuan-duong` · **cấm** CRUD new_page

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 -->
