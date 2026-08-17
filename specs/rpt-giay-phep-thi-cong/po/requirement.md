# PO — rpt-giay-phep-thi-cong (Giấy phép thi công)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| Feature Kind | **E** · leaf `/bao-cao/giay-phep-thi-cong` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_9678d5da` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-giay-phep-thi-cong-control-hint.md` (handoff path `specs/rpt-giay-phep-thi-cong/specs/_data-analy/clusters/rpt-giay-phep-thi-cong.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-giay-phep-thi-cong-context-20260816` |
| sourceFormReady | **yes** · entity `ConstructionPermit` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `ConstructionPermit` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T04:20:00.000Z` |
| taskId | `task_9678d5da` |

## 1. Goal

Trang **Giấy phép thi công** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · kỳ · trạng thái GP** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có dòng KPI (không gộp dashboard slug khác). Drill dòng về CSDL sổ 6 (`ConstructionPermit`).

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/giay-phep-thi-cong` · mfeStdUrl `http://localhost:9311/bao-cao/giay-phep-thi-cong` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`** (DOMAIN-MAP). **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `csdl-so-sach` giữ sổ nguồn. **Cấm** copy CRUD cấp phép vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (context / DA) | New (PO chốt) |
|-------|------------------------|---------------|
| Demo | N/A · hub `bao-cao/reports.html` | Design prototype content-only A–D + reviewUrl |
| Context API | `GET /api/v1/reports/construction-permits` **stale** | `GET /api/v1/report/construction-permits` + `/export` |
| MFE | leaf route packet | `LinPageLayout` kind=`report` · 1 layout · **cấm** nested CatalogListShell |
| CSDL sổ 6 | `ConstructionPermit` (`PermitNo` `PermitDate` `Issuer` `Investor` `Contractor` `WorkName` `StationKm` `IssuedAt` `ExpiresAt` `ExtendedAt`) | Query read-model P2; P1 in-memory seed CUC2 **8–15** dòng |
| CRUD nguồn | `POST /api/v1/construction-permits` trên sổ | **Không** expose trên trang báo cáo |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ + TT GP → **Xem** → lưới số GP · km · CĐT · hiệu lực.
2. Khu QLĐB lọc `hieu-luc` / `het-han` / `gia-han` → Excel cột đúng schema.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub `configHint`.
4. Drill một dòng → `/csdl-so-sach?kind=construction-permits&id={id}` (MFE nguồn sổ).

## 4. DoD (PO)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/construction-permits`. Chưa Xem: empty hint, không gọi API. Làm mới = re-fetch cùng filter đã Xem.
2. Zone A: title «Giấy phép thi công» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form cấp phép.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** (road-route CUC2, **cấm QL.22**) · SearchInput **trạng thái GP** (`hieu-luc` / `het-han` / `gia-han` / empty=Tất cả) · Date **từ/đến** trên `PermitDate` · Input **tìm** (số GP · CĐT · công trình) · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — **cấm** `LinListTableConfigModal` / leftover `const columns` / `configHint`).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · skeleton khi loading · cột: số GP · tuyến · km · CĐT · công trình · hiệu lực (`IssuedAt`→`ExpiresAt` + `ExtendedAt`) · TT · ngày GP · drill.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM (`construction-permits.csv`) theo cột schema đang hiện.
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.giay-phep-thi-cong.read`.
10. Dev (role sau): `yarn build` MFE PASS · `dotnet build` BE PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`.

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · **cấm QL.22** |
| status | Trạng thái GP | `SearchInput` | `hieu-luc` / `het-han` / `gia-han` / empty=Tất cả |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `PermitDate` |
| qSearch | Tìm kiếm | `Input` | số GP · CĐT · công trình |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/construction-permits?from=&to=&routeId=&status=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/construction-permits/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

## 6. Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Số GP | `PermitNo` |
| Tuyến | `RouteId` / mã tuyến gắn GP (P1 seed CUC2) |
| Km | `StationKm` |
| Chủ đầu tư | `Investor` |
| Công trình | `WorkName` |
| Nhà thầu (ẩn default, Config thêm) | `Contractor` |
| Cơ quan cấp (ẩn default, Config thêm) | `Issuer` |
| Hiệu lực | `IssuedAt` → `ExpiresAt` (+ `ExtendedAt`) |
| TT | `hieu-luc` / `het-han` / `gia-han` |
| Ngày GP | `PermitDate` |

Seed P1: **8–15** dòng CUC2 từ domain `ConstructionPermit`. Không bảng báo cáo riêng bắt buộc P1.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-GPTC-01 | API **`api/v1/report/construction-permits`** — đóng context plural `reports` trên **trang này** |
| GAP-PO-GPTC-02 | Pack **report** / Kind E · leaf `/bao-cao/giay-phep-thi-cong` · tách hub `reports` |
| GAP-PO-GPTC-03 | Filter tuyến · kỳ (`PermitDate`) · TT GP · qSearch; **Xem** mới load |
| GAP-PO-GPTC-04 | Seed **8–15** CUC2 · **cấm QL.22** |
| GAP-PO-GPTC-05 | Config FULL (`LinReportTableConfigModal`) · pager luôn · Chart SoCai sau Xem |
| GAP-PO-GPTC-06 | Không CRUD cấp phép · drill `/csdl-so-sach?kind=construction-permits&id=` |
| GAP-PO-GPTC-07 | Read-model EF `ConstructionPermit` **P2** · P1 in-memory Report domain |
| GAP-PO-GPTC-08 | mfeStdUrl **`http://localhost:9311/bao-cao/giay-phep-thi-cong`** |
| GAP-PO-GPTC-09 | Cluster MD handoff không có file → SSOT = control-hint + context + CSDL §3.6 |
| GAP-PO-GPTC-10 | autoApprove **ON** — Design/SA/Review agent tự confirm khi tới lượt; role này **không** chạy Design |
| GAP-FILTER-BAR | `LinErpListFilterBar` 1 hàng wrap — title trái · input + tìm cụm phải |

## 8. Out of scope (PO)

- Form / CRUD cấp phép (`POST /api/v1/construction-permits`) trên slug này.
- CRUD `RowViolation` (cùng mẫu sổ 6) trên slug này.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Code MFE/BE / `yarn build` / `dotnet build` — Dev.

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report); **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput. `autoApprove=ON` → Design tự confirm prototype khi chạy role Design — **không** làm trong task PO này.

Chain: enqueue **design** sau khi queue task PO `task_9678d5da` `completed`. Roles SA/TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI đã tick trên STATUS (board HARD trước Dev).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
