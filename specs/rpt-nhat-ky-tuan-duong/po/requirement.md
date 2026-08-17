# PO — rpt-nhat-ky-tuan-duong (Nhật ký tuần đường)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-nhat-ky-tuan-duong` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_072cb5c8` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md`** (handoff path `specs/rpt-nhat-ky-tuan-duong/specs/_data-analy/clusters/rpt-nhat-ky-tuan-duong.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-nhat-ky-tuan-duong-context-20260816` · **no Excel cluster** · sourceKind=`feature_context` |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `PatrolLogBook` · `PatrolLogEntry` |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.1 — không TBD / Col1–Col3) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy + STATUS feature · SSOT file `qldb-workflow-skill-version.json` live `2026.08.15.19` / agent-po `2026.08.15.17` — **không** regen; Autopilot không AskQuestion) |
| updatedAt | `2026-08-16T08:17:00.000Z` |
| taskId | `task_072cb5c8` |
| priorChain | `task_0e294d3d` (pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `csdl-so-sach`) |

## 1. Goal

Trang **Nhật ký tuần đường** — Kind **E** leaf tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · cán bộ · kỳ · tìm** → bấm **Xem** mới load lưới dòng sổ BDTX mẫu 1 (`PatrolLogEntry` + header `PatrolLogBook`). Xuất Excel CSV UTF-8 BOM theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE nguồn `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` (kèm `entryId` nếu route hỗ trợ).

**Khác** `rpt-nhat-ky-tuan-kiem` (Mẫu 8 `InspectionLogBook`). **Khác** `rpt-checkin` (phiên tuần `PatrolSession`). Đây là nhật ký tuần đường mẫu 1, không phiên GPS.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/nhat-ky-tuan-duong` · mfeStdUrl `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` · `yarn start:std` **:9311**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `csdl-so-sach` giữ CRUD sổ nguồn. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_0e294d3d`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `PatrolLogRoadReportPage` `/bao-cao/nhat-ky-tuan-duong` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tuyến/cán bộ · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel · Config FULL (`ReportDisplayConfigModal`) · drill sổ | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form · **cấm** `LinListTableConfigModal` / `configHint` · **cấm** gộp Mẫu 8 / check-in |
| API | `GET api/v1/report/patrol-log-road` + `/export` · P1 in-memory seed 12 CUC2 | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model `PatrolLogBook`/`PatrolLogEntry` **P2** — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/patrol-log-road` | **Bỏ** — GAP-PO-NKTD-01 chốt `report/patrol-log-road` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report/patrol-log-road` |
| Nguồn | CSDL §3.1 · `sourceFormReady=yes` | **Không** expose CRUD trên trang báo cáo |
| Chart | SoCai khi đã Xem + có dòng | **Giữ P1** |

## 3. DoD (đo được)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/patrol-log-road`. Làm mới = re-fetch cùng filter đã Xem. **Làm mới khi chưa Xem** = toast SSOT, **không** fetch. Đổi filter sau Xem → page=1 khi Xem lại. Empty hint khi chưa Xem.
2. Zone A: title «Nhật ký tuần đường» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** · **cán bộ** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · skeleton · cột §5 · drill `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng.
7. Excel: CSV UTF-8 BOM theo cột đang hiện.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + grid/empty **không** blank/title-clip.
10. Auth JWT · tenant · perm `report.nhat-ky-tuan-duong.read` (FE gate ON · BE stub OK P1).
11. Dev: `yarn build` MFE PASS (+ `yarn typecheck` nếu có) · `dotnet build` BE PASS khi đụng API — ghi implement § Build.
12. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports` · **cấm** reuse API tuần kiểm / check-in.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | feature Kind E — API plural `reports/patrol-log-road` **stale** |
| CTX-02 | CSDL §3.1 + `docs/context/features/csdl-so-sach.md` | parent list / entity nguồn — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-nhat-ky-tuan-duong.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/nhat-ky-tuan-duong` · `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 — **cấm** native Select |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `CheckedAt` / `day` |
| qSearch | Tìm kiếm | `Input` | nội dung · tuyến · cán bộ · số sổ |

Grid (readonly — **cấm** Col1–Col3 placeholder):

| Grid column | Source field | Table |
|-------------|--------------|-------|
| Ngày | `CheckedAt` → `day` | `PatrolLogEntry` |
| Tuyến | `RoadCode` | `PatrolLogBook` |
| Cán bộ | `PatrolStaff` | `PatrolLogBook` |
| Km | `Km` | `PatrolLogEntry` |
| Nội dung nhật ký | `WeatherAndEvent` | `PatrolLogEntry` |
| Xử lý tại chỗ | `OnSiteAction` | `PatrolLogEntry` |
| Trạng thái | `SupervisorSignedAt` → `signed`/`pending` | `PatrolLogEntry` |
| Số sổ | `BookNo` | `PatrolLogBook` |
| Vị trí | `LocationText` | `PatrolLogEntry` |

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-log-road?routeId=&staffId=&from=&to=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/patrol-log-road/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| cán bộ | enum/lookup FE P1 (nva/ttb/lvc/pmd) |

Perm: `report.nhat-ky-tuan-duong.read`.

Seed P1: **12** dòng mapped `PatrolLogBook` + `PatrolLogEntry` · tuyến **CUC2** · **cấm QL.22**.

Drill: `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-NKTD-01 | API **`api/v1/report/patrol-log-road`** (+ `/export`) — **đóng** context `GET /api/v1/reports/patrol-log-road`. **Cấm** `api/v1/reports`. |
| GAP-PO-NKTD-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/nhat-ky-tuan-duong` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-NKTD-03 | `sourceFormReady=yes` · nguồn CSDL §3.1 `PatrolLogBook`/`PatrolLogEntry`. **Cấm** copy CRUD sổ. |
| GAP-PO-NKTD-04 | Seed **12** CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-NKTD-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-NKTD-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/asset/csdl-so-sach?kind=patrol-logs&id=`. |
| GAP-PO-NKTD-07 | Read-model EF join `PatrolLogBook`/`PatrolLogEntry` **P2** — P1 in-memory Report domain chấp nhận. |
| GAP-PO-NKTD-08 | mfeStdUrl **`http://localhost:9311/bao-cao/nhat-ky-tuan-duong`**. Dashboard KPI **không** gộp slug này. **Không** gộp Mẫu 8 / check-in. |
| GAP-PO-NKTD-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-NKTD-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev. |
| GAP-PO-NKTD-11 | Config report: `LinReportTableConfigModal` / `ReportDisplayConfigModal` — **không** bắt `LinCatalogUiSchemaEditorModal` (đó là Kind B catalog). |
| GAP-PO-NKTD-12 | P1 seed read-model · warehouse PatrolLog* **P2**. |

## 7. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 · Làm mới `!viewed` = toast không fetch |
| AC-G-03 | Drill dòng → `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` |
| AC-G-09 | Cột lưới đúng §5 (ngày · tuyến · cán bộ · km · nội dung · xử lý · TT · số sổ · vị trí) |

## 8. Out of pack

- CRUD `csdl-so-sach` / PatrolLog* trên slug này.
- Mẫu 8 tuần kiểm · `rpt-checkin` PatrolSession.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Warehouse schema P1.
- GOVOne chrome · parent JSON.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal` bắt buộc (catalog Kind B — report dùng report table config FULL).
- Lifecycle `/erp-feature`.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §5 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/patrol-log-road` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| This task | `roleOnly=po` · **không** chạy Design trong task `task_072cb5c8` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T08:17:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-nhat-ky-tuan-duong-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| ssotLiveNote | qldb-workflow-skill-version.json `2026.08.15.19` · agent-po `2026.08.15.17` · STATUS schema `4` — **keep_current** |
| taskId | `task_072cb5c8` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
