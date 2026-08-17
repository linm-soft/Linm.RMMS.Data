# PO — rpt-tinh-trang-mat-duong (Tình trạng mặt đường)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — run packet `pack kind: list` **không** dùng; SSOT = context + data-analy |
| Feature Kind | **E** · leaf `/bao-cao/tinh-trang-mat-duong` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_ed6460e0` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tinh-trang-mat-duong-control-hint.md` (handoff path `specs/rpt-tinh-trang-mat-duong/specs/_data-analy/clusters/rpt-tinh-trang-mat-duong.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-tinh-trang-mat-duong-context-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T19:28:00.000Z` |
| taskId | `task_ed6460e0` |
| sourceFormReady | **yes** (`pavement-section` pipeline **done**) |
| sourceFeature | `pavement-section` |
| sourceTables | `rmms_pavement_sections` (`PavementSectionEntity`) |

## 1. Goal

Leaf Kind **E** «Tình trạng mặt đường» — tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · PCI band · kỳ đo · tìm** → bấm **Xem** mới load lưới đoạn (mã · tuyến · kmFrom–To · PCI · band · lớp · ngày đo). Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có dòng. Drill dòng về MFE Asset `/asset/pavement-section/{id}`. **Không** CRUD đoạn mặt đường trên slug này.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/tinh-trang-mat-duong` · mfeStdUrl `http://localhost:9311/bao-cao/tinh-trang-mat-duong` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `pavement-section` giữ CRUD (`api/v1/asset` pavement). **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (live / pipeline `task_8ea2e70d`) | New (PO chốt `task_ed6460e0`) |
|-------|------------------------------------------|--------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-tinh-trang-mat-duong-prototype.html` | Design **re-review** content-only A–D + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `PavementConditionReportPage` · `/bao-cao/tinh-trang-mat-duong` · 1× `LinPageLayout` kind=`report` | Giữ Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family pavement làm trang này |
| API context | Feature context `GET /api/v1/reports/pavement-condition` **stale** | **`GET /api/v1/report/pavement-condition`** + `/export` — **không** đổi plural |
| Live API | `GET api/v1/report/pavement-condition` + export (Dev `task_8ea2e70d`) | Giữ prefix DOMAIN-MAP; Design/SA re-confirm; **không** bảng báo cáo riêng P1 |
| CSDL | `rmms_pavement_sections` · `PavementSectionEntity` · P1 seed map Code/RoadName/Km/Pci/LayerCode/MeasuredAt | P1 giữ seed map entity; P2 query EF read-model |
| CRUD nguồn | `pavement-section` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | `rpt-tinh-trang-mat-duong` → Report · `report` | SA xác nhận giữ |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ đo → **Xem** → lưới đoạn / PCI / lớp / ngày đo.
2. Khu QLĐB lọc PCI band (tốt/khá/TB/kém/rất kém) → Excel.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/asset/pavement-section/{id}` (MFE Asset).

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/pavement-condition`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «Tình trạng mặt đường» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** (CUC2, **cấm QL.22**) · SearchInput **PCI band** · Date **từ/đến** kỳ đo · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột đoạn/mã · tuyến · kmFrom · kmTo · PCI · band · lớp · ngày đo (`formatAtVi` vi-VN) · nguồn/drill · skeleton.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `pavement-condition.csv` · `canExport` chỉ khi đã Xem.
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.tinh-trang-mat-duong.read`.
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`. **Cấm** Kind B catalog list / `LinCatalogUiSchemaEditorModal` trên slug này (đó là list pack `pavement-section`).

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · **cấm QL.22** |
| pciBand | PCI band | `SearchInput` | tot / kha / tb / kem / rat-kem |
| fromDate / toDate | Từ / Đến (kỳ đo) | `Date` | `MeasuredAt` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · lớp |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/pavement-condition?from=&to=&routeId=&pciBand=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/pavement-condition/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| PCI band | enum FE P1 (tot / kha / tb / kem / rat-kem) |

## 6. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| đoạn / mã | `Code` | `rmms_pavement_sections` |
| tuyến | `RoadName` | same |
| Từ Km | `KmFrom` | same |
| Đến Km | `KmTo` | same |
| PCI | `Pci` | same |
| Band | derived `Pci` | Report DTO |
| lớp | `LayerCode` | same |
| ngày đo | `MeasuredAt` | same |
| nguồn / drill | `Id` → `/asset/pavement-section/{id}` | same |

Seed P1: **8–15** dòng map domain PavementSection / PCI history. Không CRUD.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-PC-01 | API **`api/v1/report/pavement-condition`** — đóng context plural `api/v1/reports/pavement-condition` trên **trang này** |
| GAP-PO-PC-02 | Pack **report** / Kind E · leaf `/bao-cao/tinh-trang-mat-duong` · tách hub `reports` · **không** Kind B list |
| GAP-PO-PC-03 | Config FULL `LinReportTableConfigModal` · pager luôn · Chart SoCai sau Xem · Excel khi viewed |
| GAP-PO-PC-04 | Seed CUC2 · **cấm QL.22** |
| GAP-PO-PC-05 | Không CRUD · drill `/asset/pavement-section/{id}` |
| GAP-PO-PC-06 | Read-model EF `rmms_pavement_sections` **P2** · P1 in-memory Report domain |
| GAP-PO-PC-07 | mfeStdUrl **`http://localhost:9311/bao-cao/tinh-trang-mat-duong`** |
| GAP-PO-PC-08 | Cluster MD handoff không có file → SSOT = control-hint + context |
| GAP-PO-PC-09 | DOMAIN-MAP slug `rpt-tinh-trang-mat-duong` → Report (đã có dòng) |
| GAP-PO-PC-10 | autoApprove **ON** — Design/SA/Review agent tự confirm; chain enqueue Design sau PO `completed` |
| GAP-PO-PC-11 | edit_page: Current = leaf đã ship `task_8ea2e70d`; New = giữ DoD Kind E, Design re-prototype A–D |
| GAP-PO-PC-12 | Packet `pack kind: list` + list-form gate **không** áp dụng slug này — Kind E `/erp-report-context` |

## 8. Out of scope (PO)

- CRUD đoạn mặt đường trên slug này (thuộc `pavement-section`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.
- Form Biểu 1 PCI (không form trên leaf này).

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report); **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput. `autoApprove=ON` → Design tự confirm prototype sau khi artifact đủ.

Chain: enqueue **design** sau khi queue task PO `task_ed6460e0` `completed`. Roles SA/TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`). Role này **không** sửa MFE/BE — VERIFY GATE build **N/A** (Dev sau).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
