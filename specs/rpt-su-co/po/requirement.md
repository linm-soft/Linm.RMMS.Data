# PO — rpt-su-co (BC Sự cố)

| Field | Value |
|-------|-------|
| feature | `rpt-su-co` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| Feature Kind | **E** · leaf `/bao-cao/su-co` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_608c596b` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-su-co-control-hint.md` (handoff path `specs/rpt-su-co/specs/_data-analy/clusters/rpt-su-co.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-su-co-context-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T16:45:00.000Z` |
| taskId | `task_608c596b` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` |

## 1. Goal

Trang **BC Sự cố** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **loại · tuyến · mức · TT · kỳ · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có dòng. Drill dòng về MFE Field `/incident?id=`. **Không** CRUD sự cố trên slug này.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/su-co` · mfeStdUrl `http://localhost:9311/bao-cao/su-co` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `incident` giữ CRUD. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (live / pipeline `task_4906443c`) | New (PO chốt `task_608c596b`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-su-co-prototype.html` | Design **re-review** content-only A–D + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `IncidentReportPage` · `/bao-cao/su-co` · 1× `LinPageLayout` kind=`report` | Giữ Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family `incidents` làm trang này |
| API context | `GET /api/v1/reports/incidents` **stale** trong feature context | **`GET /api/v1/report/incidents`** + `/export` (đã có Dev trước — SA/Dev **không** đổi plural) |
| CSDL | `rmms_incidents` · `IncidentEntity` · P1 seed in-memory Report | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 |
| CRUD nguồn | Field `/incident` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-su-co` **chưa** có dòng feature → domain | SA thêm `rpt-su-co` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ → **Xem** → lưới sự cố.
2. Khu QLĐB lọc loại/mức/TT → Excel.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/incident?id={id}` (MFE Field).

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/incidents`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «BC Sự cố» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **loại** · **tuyến** (CUC2, **cấm QL.22**) · **mức** · **TT** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột mã · tuyến · loại · mức · TT · thời gian (`formatAtVi` vi-VN) · drill · skeleton.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `incidents.csv` · `canExport` chỉ khi đã Xem.
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.su-co.read`.
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`.

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| type | Loại | `SearchInput` | enum loại sự cố (P1 seed = `IncidentType`) |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · **cấm QL.22** |
| severity | Mức | `SearchInput` | Cao / TB / Nghiêm trọng / Thấp |
| status | Trạng thái | `SearchInput` | Mở / Đang xử lý / Đóng |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · loại |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/incidents?from=&to=&routeId=&type=&severity=&status=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/incidents/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại / mức / TT | enum seed FE P1 (khớp `IncidentEntity`) |

## 6. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| mã | `Code` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| loại | `IncidentType` | same |
| mức | `Severity` | same |
| trạng thái | `Status` | same |
| thời gian | `RequestedAt` | same |

Seed P1: **8–15** dòng (implement hiện **12**) map domain Incident. Không CRUD.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-SC-01 | API **`api/v1/report/incidents`** — đóng context plural `api/v1/reports/incidents` trên **trang này** |
| GAP-PO-SC-02 | Pack **report** / Kind E · leaf `/bao-cao/su-co` · tách hub `reports` |
| GAP-PO-SC-03 | Config FULL · pager luôn · Chart SoCai sau Xem · Excel khi viewed |
| GAP-PO-SC-04 | Seed CUC2 · **cấm QL.22** |
| GAP-PO-SC-05 | Không CRUD · drill `/incident?id=` |
| GAP-PO-SC-06 | Read-model EF `rmms_incidents` **P2** · P1 in-memory Report domain |
| GAP-PO-SC-07 | mfeStdUrl **`http://localhost:9311/bao-cao/su-co`** |
| GAP-PO-SC-08 | Cluster MD handoff không có file → SSOT = control-hint + context |
| GAP-PO-SC-09 | DOMAIN-MAP thiếu slug `rpt-su-co` → SA bổ sung Report |
| GAP-PO-SC-10 | autoApprove **ON** — Design/SA/Review agent tự confirm; chain enqueue Design sau PO `completed` |
| GAP-PO-SC-11 | edit_page: Current = leaf đã ship `task_4906443c`; New = giữ DoD Kind E, Design re-prototype A–D |

## 8. Out of scope (PO)

- CRUD sự cố trên slug này (thuộc `incident`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report); **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput. `autoApprove=ON` → Design tự confirm prototype sau khi artifact đủ.

Chain: enqueue **design** sau khi queue task PO `task_608c596b` `completed`. Roles SA/TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
