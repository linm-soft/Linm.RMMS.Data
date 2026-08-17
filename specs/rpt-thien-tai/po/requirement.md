# PO — rpt-thien-tai (Thiên tai, bão lũ)

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — run packet ghi `list` **stale**; SSOT = context + control-hint + STATUS `report` |
| Feature Kind | **E** · leaf `/bao-cao/thien-tai` · **không** CRUD |
| status | `done` |
| requestSource | run packet `task_601aadfd` · `/agent-qldb-workflow` · roleOnly=`po` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-thien-tai-control-hint.md` (handoff path `specs/rpt-thien-tai/specs/_data-analy/clusters/rpt-thien-tai.md` **không tồn tại** — dùng control-hint SSOT) |
| data_analy.hash | `sha256:rpt-thien-tai-context-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T17:00:00.000Z` |
| taskId | `task_601aadfd` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` |

## 1. Goal

Trang **Thiên tai, bão lũ** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · loại sự kiện · kỳ · tìm** → bấm **Xem** mới load lưới. Chỉ sự kiện thiên tai (subset disaster). Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có dòng. Drill dòng về MFE Field `/incident?id=`. **Không** CRUD sự cố trên slug này.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/thien-tai` · mfeStdUrl `http://localhost:9311/bao-cao/thien-tai` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `incident` giữ CRUD. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New

| Layer | Current (live / pipeline `task_b580eac0`) | New (PO chốt `task_601aadfd`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-thien-tai-prototype.html` | Design **re-review** content-only A–D + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `DisasterReportPage` · `/bao-cao/thien-tai` · 1× `LinPageLayout` kind=`report` · `DisasterFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` | Giữ Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này |
| API context | Feature context ghi `GET /api/v1/reports/disasters` **stale** | **`GET /api/v1/report/disasters`** + `/export` (live API/BFF đã singular — SA/Dev **không** đổi plural) |
| CSDL | `rmms_incidents` · `IncidentEntity` · P1 seed in-memory Report (Review REV-TT-01) | P1 giữ seed map entity type=disaster; P2 query EF read-model — **không** bảng báo cáo riêng P1 |
| CRUD nguồn | Field `/incident` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | `rpt-thien-tai` → Report · `report` | Giữ |
| Config | `ReportDisplayConfigModal` + column prefs local · kéo cột ON | Design/Dev: Config FULL — **cấm** `LinListTableConfigModal` / `configHint` / stub |
| Filter live | SearchInput tuyến (`road-route`) + loại (Bão/Lũ/Sạt lở/Ngập úng/Lốc/Sét) · Date · Input tìm · Xem | Giữ controlHint data-analy — **không** thêm mức/TT trên slug này (khác `rpt-su-co`) |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ → **Xem** → lưới thiên tai.
2. Khu QLĐB lọc loại sự kiện → Excel (`disasters.csv`).
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/incident?id={id}` (MFE Field) — nút «Mở sự cố».

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/disasters`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «Thiên tai, bão lũ» icon `fa-cloud-showers-heavy` — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** (CUC2, **cấm QL.22**) · **loại sự kiện** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` analog — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột ngày (`RequestedAt` / DTO `at`, `formatAtVi` vi-VN) · tuyến · loại · phạm vi km (`KmStart`–`KmEnd`) · mức · thiệt hại tóm tắt (`Description` / DTO `damageSummary`) · drill · skeleton 8.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (theo loại · theo tuyến; KPI không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `disasters.csv` · `canExport` chỉ khi đã Xem · subset theo cột đang hiện.
8. 1× `LinPageLayout` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.thien-tai.read`.
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`. Chỉ loại thiên tai trên query/seed.

## 5. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · **cấm QL.22** |
| type | Loại sự kiện | `SearchInput` | Bão / Lũ / Sạt lở / Ngập úng / Lốc / Sét |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | tuyến · loại · km · thiệt hại |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/disasters?from=&to=&routeId=&type=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/disasters/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại | enum FE P1 (disaster subset) |

## 6. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| ngày | `RequestedAt` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| loại | `IncidentType` | same |
| phạm vi km | `KmStart`–`KmEnd` | same |
| mức | `Severity` | same |
| thiệt hại tóm tắt | `Description` (P1 typed = tóm tắt thiệt hại; **không** Col*) | same |

Seed P1: **8–15** dòng (implement hiện **12**) map Incident type=disaster. Không CRUD.

## 7. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-TT-01 | API **`api/v1/report/disasters`** — đóng context plural `api/v1/reports/disasters` trên **trang này** |
| GAP-PO-TT-02 | Pack **report** / Kind E · leaf `/bao-cao/thien-tai` · tách hub `reports` · **không** Kind B list |
| GAP-PO-TT-03 | Config FULL · pager luôn · Chart SoCai sau Xem · Excel khi viewed |
| GAP-PO-TT-04 | Seed CUC2 · **cấm QL.22** · chỉ loại thiên tai |
| GAP-PO-TT-05 | Không CRUD · drill `/incident?id=` |
| GAP-PO-TT-06 | Read-model EF `rmms_incidents` **P2** · P1 in-memory Report domain · Description = thiệt hại tóm tắt P1 |
| GAP-PO-TT-07 | mfeStdUrl **`http://localhost:9311/bao-cao/thien-tai`** |
| GAP-PO-TT-08 | Cluster MD handoff không có file → SSOT = control-hint + context |
| GAP-PO-TT-09 | autoApprove **ON** — Design/SA/Review agent tự confirm; chain enqueue Design sau PO `completed` |
| GAP-PO-TT-10 | edit_page: Current = leaf đã ship `task_b580eac0`; New = giữ DoD Kind E, Design re-prototype A–D |
| GAP-PO-TT-11 | Run packet `packKind=list` **không** đổi Kind E — cấm resume list-shell Kind B / `LinCatalogUiSchemaEditorModal` catalog trên slug này |

## 8. Out of scope (PO)

- CRUD sự cố trên slug này (thuộc `incident`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.
- Filter mức / trạng thái trên slug này (thuộc `rpt-su-co`).

## 9. Handoff Design (role kế — **pending**)

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report); **skip** note/sidebar/menu/chrome. + **reviewUrl**. Giữ controlHint SearchInput tuyến+loại. `autoApprove=ON` → Design tự confirm prototype sau khi artifact đủ.

Chain: enqueue **design** sau khi queue task PO `task_601aadfd` `completed`. Roles SA/TL/Dev/QA/Review = **pending** đến lượt. Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
