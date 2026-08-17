# PO — rpt-tai-san (BC Tài sản)

| Field | Value |
|-------|-------|
| feature | `rpt-tai-san` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — run packet `pack kind: list` **không** dùng; SSOT = context + data-analy |
| Feature Kind | **E** · leaf `/bao-cao/tai-san` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_0fd2c3c0` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tai-san-control-hint.md` (handoff path `specs/rpt-tai-san/specs/_data-analy/clusters/rpt-tai-san.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-tai-san-context-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T17:20:00.000Z` |
| taskId | `task_0fd2c3c0` |
| sourceFormReady | **yes** |
| sourceFeature | `asset` |
| sourceTables | `rmms_road_assets` |

## 1. Goal

Trang **BC Tài sản** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **hạng mục · tuyến · TT · kỳ · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có dòng. Drill dòng về MFE Asset `/asset?id=`. **Không** CRUD tài sản trên slug này.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/tai-san` · mfeStdUrl `http://localhost:9311/bao-cao/tai-san` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `asset` giữ CRUD (`api/v1/asset/road-assets`). **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (live / pipeline trước) | New (PO chốt `task_0fd2c3c0`) |
|-------|--------------------------------|--------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-tai-san-prototype.html` | Design **re-review** content-only A–D + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `AssetReportPage` · `/bao-cao/tai-san` · 1× `LinPageLayout` kind=`report` | Giữ Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family `assets` làm trang này |
| API context | `GET /api/v1/reports/assets` **stale** trong feature context | **`GET /api/v1/report/assets`** + `/export` — **không** đổi plural |
| CSDL | `rmms_road_assets` · `RoadAssetEntity` · P1 seed in-memory Report (`Qty`/`Unit` trên DTO, entity không cột Qty) | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 |
| CRUD nguồn | Asset `/asset` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-tai-san` có thể thiếu dòng feature → domain | SA thêm/xác nhận `rpt-tai-san` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ → **Xem** → lưới hạng mục / SL / ĐVT / TT.
2. Khu QLĐB lọc hạng mục + TT → Excel.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/asset?id={id}` (MFE Asset).

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/assets`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «BC Tài sản» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **hạng mục** · **tuyến** (CUC2, **cấm QL.22**) · **TT** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột tuyến · hạng mục · SL · ĐVT · TT · cập nhật (`formatAtVi` vi-VN) · nguồn/drill · skeleton.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `assets.csv` · `canExport` chỉ khi đã Xem.
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.tai-san.read`.
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`. **Cấm** Kind B catalog list / `LinCatalogUiSchemaEditorModal` trên slug này (đó là list pack `asset`).

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| type | Hạng mục | `SearchInput` | enum hạng mục P1 (`Item` DTO) |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · **cấm QL.22** |
| status | Trạng thái | `SearchInput` | Tốt / Theo dõi / Cần bảo trì (`RoadAssetEntity.Status`) |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `UpdatedAt` |
| qSearch | Tìm kiếm | `Input` | tuyến · hạng mục · TT |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/assets?from=&to=&routeId=&type=&status=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/assets/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| hạng mục / TT | enum seed FE P1 (khớp `RoadAssetEntity.Status` + hạng mục seed) |

## 6. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| tuyến | `Route` | `rmms_road_assets` |
| hạng mục | `Name` / `Type` (P1 DTO `Item` aggregate) | same |
| SL | read-model `Qty` (P1 seed Report; entity không cột Qty) | Report DTO |
| ĐVT | read-model `Unit` | Report DTO |
| trạng thái | `Status` → DTO `Condition` | same |
| cập nhật | `UpdatedAt` | same |

Seed P1: **8–15** dòng map domain Asset / CSDL hạng mục. Không CRUD.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-TS-01 | API **`api/v1/report/assets`** — đóng context plural `api/v1/reports/assets` trên **trang này** |
| GAP-PO-TS-02 | Pack **report** / Kind E · leaf `/bao-cao/tai-san` · tách hub `reports` · **không** Kind B list |
| GAP-PO-TS-03 | Config FULL `LinReportTableConfigModal` · pager luôn · Chart SoCai sau Xem · Excel khi viewed |
| GAP-PO-TS-04 | Seed CUC2 · **cấm QL.22** |
| GAP-PO-TS-05 | Không CRUD · drill `/asset?id=` |
| GAP-PO-TS-06 | Read-model EF `rmms_road_assets` **P2** · P1 in-memory Report domain · Qty/Unit DTO |
| GAP-PO-TS-07 | mfeStdUrl **`http://localhost:9311/bao-cao/tai-san`** |
| GAP-PO-TS-08 | Cluster MD handoff không có file → SSOT = control-hint + context |
| GAP-PO-TS-09 | DOMAIN-MAP slug `rpt-tai-san` → SA xác nhận Report |
| GAP-PO-TS-10 | autoApprove **ON** — Design/SA/Review agent tự confirm; chain enqueue Design sau PO `completed` |
| GAP-PO-TS-11 | edit_page: Current = leaf đã ship pipeline trước; New = giữ DoD Kind E, Design re-prototype A–D |
| GAP-PO-TS-12 | Packet `pack kind: list` + list-form gate **không** áp dụng slug này — Kind E `/erp-report-context` |

## 8. Out of scope (PO)

- CRUD tài sản trên slug này (thuộc `asset` · `api/v1/asset/road-assets`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.
- Finance `api/v1/assets` (TSCĐ).

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report); **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput. `autoApprove=ON` → Design tự confirm prototype sau khi artifact đủ.

Chain: enqueue **design** sau khi queue task PO `task_0fd2c3c0` `completed`. Roles SA/TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
