# PO — rpt-dem-xe (Đếm xe)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| Feature Kind | **E** · leaf `/bao-cao/dem-xe` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_45faf47e` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **OFF** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-dem-xe-control-hint.md` (handoff path `specs/rpt-dem-xe/specs/_data-analy/clusters/rpt-dem-xe.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-dem-xe-context-20260815` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T16:32:00.000Z` |
| taskId | `task_45faf47e` |

## 1. Goal

Trang **Đếm xe** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · điểm đếm · kỳ** → bấm **Xem** mới load lưới. Ba tab: **KQ đếm xe** · **bảng B.1** · **tổng hợp B.2**. Xuất Excel theo tab đang xem. Config cột FULL. Chart SoCai khi đã Xem và có dòng. Drill dòng về CSDL sổ 4.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/dem-xe` · mfeStdUrl `http://localhost:9311/bao-cao/dem-xe` (`yarn start:std` port **9311**). Packet `:9301/rpt-dem-xe` **không** dùng.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`** (DOMAIN-MAP). **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `csdl-so-sach` giữ sổ nguồn. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (context / DA) | New (PO chốt) |
|-------|------------------------|---------------|
| Demo | N/A · hub `bao-cao/reports.html` | Design prototype content-only A–D + 3 tab + reviewUrl |
| MFE | leaf `/bao-cao/dem-xe` (pipeline trước) | Giữ Kind E · `LinPageLayout` kind=`report` · 1 layout · **cấm** nested CatalogListShell |
| API context | `GET /api/v1/reports/traffic-counts` **stale** | `GET /api/v1/report/traffic-counts` + `/export` |
| CSDL sổ 4 | `TrafficCountSummary` 1 row / trạm / kỳ · ~18 class xe + `TotalCars` | Query read-model P2; P1 in-memory seed CUC2 |
| CRUD nguồn | `POST /api/v1/traffic-counts` trên sổ | **Không** expose trên trang báo cáo |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ → **Xem** → tab KQ xem từng trạm.
2. Khu QLĐB chuyển tab **B.1** (chi tiết biểu) / **B.2** (cộng dồn theo tuyến) → Excel.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/csdl-so-sach?kind=traffic-counts&id={id}` (MFE nguồn sổ).

## 4. DoD (PO)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/traffic-counts`. Làm mới = re-fetch cùng filter đã Xem.
2. Zone A: title «Đếm xe» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** (road-route CUC2, **cấm QL.22**) · SearchInput **điểm đếm** (seed P1) · SearchInput **tab** `kq`/`b1`/`b2` · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — cấm stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột theo tab · skeleton khi loading · drill CSDL.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM theo tab (`traffic-counts.csv` / `traffic-counts-b1.csv` / `traffic-counts-b2.csv`); cột B.1/B.2 đúng mẫu sổ 4 (phân loại xe + tổng).
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.dem-xe.read`.
10. Dev (role sau): `yarn build` MFE PASS · `dotnet build` BE PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`.

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| viewTab | Bảng | `SearchInput` | `kq` / `b1` / `b2` |
| routeId | Tuyến | `SearchInput` | road-route · 38 tuyến CUC2 · **cấm QL.22** |
| stationId | Điểm đếm | `SearchInput` | count-station seed P1 |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | trạm · tuyến |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/traffic-counts?from=&to=&routeId=&stationId=&q=&tab=&page=&pageSize=` |
| Excel | `GET api/v1/report/traffic-counts/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| điểm đếm | enum seed FE P1 |

## 6. Grid / tabs (cùng DTO, cột FE khác)

| Tab | Ý nghĩa | Cột tối thiểu |
|-----|---------|----------------|
| KQ | 1 dòng / trạm / kỳ | tuyến · điểm đếm · kỳ · tổng xe · drill |
| B.1 | Chi tiết biểu đếm | như KQ + ~18 class xe (Excel/Word sổ 4) |
| B.2 | Tổng hợp theo tuyến | tuyến · kỳ · cộng dồn class + tổng |

Seed P1: **12** dòng CUC2. B.2 = aggregate FE hoặc BE theo `routeId` — SA chốt, PO yêu cầu **cùng payload list**, không CRUD.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-DX-01 | API **`api/v1/report/traffic-counts`** — đóng context/CSDL plural `reports` và `GET /api/v1/reports/traffic-count/{quarter}/{year}` trên **trang này** |
| GAP-PO-DX-02 | Pack **report** / Kind E · leaf `/bao-cao/dem-xe` · tách hub `reports` |
| GAP-PO-DX-03 | 3 tab KQ / B.1 / B.2 cùng DTO; B.2 aggregate theo tuyến |
| GAP-PO-DX-04 | Seed **12** CUC2 · **cấm QL.22** |
| GAP-PO-DX-05 | Config FULL · pager luôn · Chart SoCai sau Xem |
| GAP-PO-DX-06 | Không CRUD · drill `/csdl-so-sach?kind=traffic-counts&id=` |
| GAP-PO-DX-07 | Read-model EF `TrafficCountSummary` **P2** · P1 in-memory Report domain |
| GAP-PO-DX-08 | mfeStdUrl **`http://localhost:9311/bao-cao/dem-xe`** |
| GAP-PO-DX-09 | Cluster MD handoff không có file → SSOT = control-hint + context + CSDL §3.4 |
| GAP-PO-DX-10 | autoApprove **OFF** — Design/SA/Review **await_confirm** (user board); PO **không** dừng confirm |

## 8. Out of scope (PO)

- CRUD sổ đếm xe / TNGT (`AccidentSummary`) trên slug này.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report) + 3 tab; **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput. **Không** auto-confirm prototype (`autoApprove=OFF`).

Chain: enqueue **design** sau khi queue task PO `completed`. Roles TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI tick **trước Dev** (board — không auto trong role PO).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
