# PO — rpt-kiem-tra-cau (Kiểm tra cầu)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-kiem-tra-cau` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/kiem-tra-cau` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_d07b1adc` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-kiem-tra-cau-control-hint.md`** (handoff path `specs/rpt-kiem-tra-cau/specs/_data-analy/clusters/rpt-kiem-tra-cau.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-kiem-tra-cau-context-20260816` · **no Excel cluster** · sourceKind=`feature_context` |
| sourceFeature | `csdl-so-sach` |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5 — không TBD / Col1–Col3) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T07:20:00.000Z` |
| taskId | `task_d07b1adc` |
| priorChain | `task_5462552a` (pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `csdl-so-sach`) |

## 1. Goal

Trang **Kiểm tra cầu** — Kind **E** leaf tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tab · tuyến · cầu · loại phiếu · kỳ · tìm** → bấm **Xem** mới load lưới. **Một slug · 3 tab** (phiếu · kết quả · tổng hợp). Xuất Excel theo cột lưới. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về sổ `csdl-so-sach` phiếu KT.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/kiem-tra-cau` · mfeStdUrl `http://localhost:9311/bao-cao/kiem-tra-cau` · `yarn start:std` **:9311**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `csdl-so-sach` giữ form nguồn (Mẫu 5 — lý lịch cầu + phiếu KT). **Cấm** copy CRUD phiếu KT vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_5462552a`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `BridgeInspectionReportPage` `/bao-cao/kiem-tra-cau` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tab/tuyến/cầu/loại · Date kỳ · Input tìm · **Xem** mới fetch · 3 tab · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel · Config FULL · chart/print · drill sổ phiếu | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form · **cấm** `LinListTableConfigModal` / `configHint` · **cấm** tách 3 feature |
| API | `GET api/v1/report/bridge-inspections` + `/export` · query `tab` · P1 in-memory seed | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model `BridgePassport` / `BridgeInspection` / `BridgeInspectionLine` **P2** — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/bridge-inspections` | **Bỏ** — GAP-PO-KTC-01 chốt `report/bridge-inspections` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report/bridge-inspections` |
| Nguồn | `BridgePassport` · `BridgeInspection` · `BridgeInspectionLine` · `sourceFormReady=yes` | **Không** expose CRUD trên trang báo cáo |
| Chart | SoCai khi đã Xem + có dòng | **Giữ P1** |

## 3. DoD (đo được)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/bridge-inspections`. Làm mới = re-fetch cùng filter đã Xem. Đổi filter sau Xem → page=1 khi Xem lại. Empty hint khi chưa Xem.
2. Zone A: title «Kiểm tra cầu» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tab** · **tuyến** · **cầu** · **loại phiếu** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · skeleton · cột theo **tab** §5 · drill sổ phiếu.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng.
7. Excel: CSV UTF-8 BOM theo cột đang hiện trên tab hiện tại.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + grid/empty **không** blank/title-clip.
10. Auth JWT · tenant · perm `report.kiem-tra-cau.read` (FE gate ON · BE stub OK P1).
11. Dev: `yarn build` MFE PASS (+ `yarn typecheck` nếu có) · `dotnet build` BE PASS khi đụng API — ghi implement § Build.
12. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.
13. Một slug · **3 tab** — **cấm** tách 3 feature / 3 route.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-kiem-tra-cau.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5 | entity nguồn Mẫu 5 |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-kiem-tra-cau.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-kiem-tra-cau-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/kiem-tra-cau` · `http://localhost:9311/bao-cao/kiem-tra-cau` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| tab | Tab | `SearchInput` | `ticket` / `result` / `summary` — **cấm** native Select · **cấm** 3 route |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| bridgeId | Cầu | `SearchInput` | seed cầu CUC2 P1 |
| inspectionKind | Loại phiếu | `SearchInput` | `dinh-ky` / `dot-xuat` / `truoc-mua` — **cấm** native Select |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | số phiếu · cầu · tuyến |

Grid (readonly — **cấm** Col1–Col3 placeholder):

| Grid column | Source field | Table / tab |
|-------------|--------------|-------------|
| số phiếu | `Id` / ticketNo | `BridgeInspection` · phiếu |
| ngày KT | `InspectedAt` | `BridgeInspection` |
| tuyến | `RoadCode` | `BridgeInspection` |
| cầu | `BridgeId` → passport name | `BridgePassport` |
| địa bàn | `AdminArea` | `BridgeInspection` |
| loại phiếu | inspectionKind (seed P1) | phiếu |
| nguồn | drill label | phiếu |
| bộ phận | line part (`Signage`…`AttachedDevices`) | `BridgeInspectionLine` · kết quả |
| hư hỏng | `DamageDesc` | line |
| đề xuất | `ProposedActionQty` | line |
| ưu tiên | `Priority` | line |
| ảnh | `PhotoIds` count | line |
| số phiếu / ưu tiên cao / lần KT gần nhất | aggregate | tổng hợp |

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/bridge-inspections?tab=&routeId=&bridgeId=&type=&from=&to=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/bridge-inspections/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| tab / loại phiếu / cầu | enum + seed FE P1 |

`type` = loại phiếu (`inspectionKind`). `tab` = `ticket` \| `result` \| `summary`.

Perm: `report.kiem-tra-cau.read`.

Seed P1: **12** phiếu + dòng kết quả mapped `BridgeInspection` / `BridgeInspectionLine` · cầu CUC2.

Drill: `/asset/csdl-so-sach?kind=bridge-inspections&id=`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-KTC-01 | API **`api/v1/report/bridge-inspections`** (+ `/export`) — **đóng** context `GET /api/v1/reports/bridge-inspections`. **Cấm** `api/v1/reports`. |
| GAP-PO-KTC-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/kiem-tra-cau` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-KTC-03 | `sourceFormReady=yes` · nguồn `csdl-so-sach` §3.5. **Cấm** copy CRUD passport/phiếu KT. |
| GAP-PO-KTC-04 | Seed **12** CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-KTC-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-KTC-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/asset/csdl-so-sach?kind=bridge-inspections&id=`. |
| GAP-PO-KTC-07 | Read-model EF join passport/inspection/line **P2** — P1 in-memory Report domain chấp nhận. |
| GAP-PO-KTC-08 | mfeStdUrl **`http://localhost:9311/bao-cao/kiem-tra-cau`**. Dashboard KPI **không** gộp slug này. |
| GAP-PO-KTC-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-KTC-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev. |
| GAP-PO-KTC-11 | **3 tab một slug** — **cấm** tách 3 feature. |

## 7. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 |
| AC-G-03 | Drill dòng → `/asset/csdl-so-sach?kind=bridge-inspections&id=` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` |
| AC-G-09 | Tab `ticket` \| `result` \| `summary` đổi cột lưới đúng §5 |

## 8. Out of pack

- CRUD passport / phiếu KT trên slug này.
- Tách 3 tab thành 3 feature / 3 route.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Warehouse schema P1.
- GOVOne chrome · parent JSON.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal` (catalog Kind B — report dùng report table config FULL).
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
| BE | `api/v1/report/bridge-inspections` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| This task | `roleOnly=po` · **không** chạy Design trong task `task_d07b1adc` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T07:20:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-kiem-tra-cau-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_d07b1adc` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
