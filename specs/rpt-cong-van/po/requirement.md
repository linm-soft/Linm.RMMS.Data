# PO — rpt-cong-van (Công văn đi — đến)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `po` · `/agent-po` |
| prior | `data-analy` · `confirmed` · `specs/_data-analy/features/rpt-cong-van-control-hint.md` (cluster file `specs/rpt-cong-van/specs/_data-analy/clusters/rpt-cong-van.md` **không tồn tại** — dùng control-hint feature) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — **không** Kind B CRUD · packet `list` **stale** |
| Feature Kind | **E** · leaf `/bao-cao/cong-van` · AnalyticsReportShell |
| status | `done` |
| autoApprove | **OFF** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP `rpt-cong-van` → **Report** · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T15:52:00.000Z` |
| taskId | `task_63988352` |

> **Cấm ERP.*** · **cấm** `ERP.Service.*` · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** prefix `api/v1/reports`.  
> Parent hub `reports` / list pack `ops` — **cấm** copy CRUD vào leaf này.  
> Chrome GOVOne **OUT**. **Cấm** `window.alert` / `window.confirm`.

## 1. Goal

Trang **Công văn đi — đến**: báo cáo Kind **E** tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo.

Người dùng chọn kỳ (từ/đến) · chiều đi|đến · đơn vị · từ khóa → **Xem** mới nạp lưới. Có lưới thì **Xuất Excel**, Config cột FULL, drill về Ops. Không tạo/sửa/xóa công văn trên trang này.

Align MFE: `http://localhost:9311/bao-cao/cong-van` (`yarn start:std` port **9311** — packet `:9301/rpt-cong-van` **stale**).

## 2. Current → New

| Layer | Current (đọc live / context) | New (PO chốt) |
|-------|------------------------------|---------------|
| Context | Kind E · filter kỳ · chiều · đơn vị | Giữ · leaf `/bao-cao/cong-van` |
| data-analy | controlHint SearchInput/Date/Input · API singular | Binding bắt buộc Design/SA/Dev |
| Demo | N/A · hub `bao-cao/reports.html` | Prototype A–D content-only (Design) |
| MFE | leaf đã có từ cycle `task_6f9f0ca2` | Giữ surface Kind E · **không** CRUD |
| API | `GET api/v1/report/official-docs` + `/export` | Giữ prefix **singular** `report` |
| Seed | OfficialDocument P1 in-memory | 8–15 dòng · Chi cục II.* · **cấm QL.22** trên seed tuyến (N/A P1) |

## 3. DoD (Design / TL / Dev)

1. **Xem** mới load lưới · đổi filter reset page=1 · chưa Xem → empty hint (không fetch).
2. Zone A: title «Công văn đi — đến» — **cấm** Thêm mới / CRUD.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap · controlHint dưới · toolbar Làm mới · In · Config **FULL** (`LinReportTableConfigModal` — cấm stub) · Xuất Excel · chart SoCai khi đã Xem + có dòng.
4. Zone C: **1×** `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell · `LinCatalogDataGrid` kéo cột default **ON** · cột: số CV · ngày · trích yếu · chiều · đơn vị · drill Ops `/ops?id=`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Excel theo cột đang hiện · CSV UTF-8 BOM (P1).
7. Perm `report.cong-van.read` · JWT · tenant.
8. Flex + skeleton khi loading.
9. **Cấm** Resource/Slideout/View=`readOnly` giả form trên UI.
10. Build MFE `yarn build` + BE `dotnet build` khi đụng API.

## 4. controlHint (binding Design Control · SA lookup)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| direction | Chiều | `SearchInput` | `di` / `den` / empty=Tất cả |
| orgUnitId | Đơn vị | `SearchInput` | **org-unit** |
| fromDate | Từ (kỳ) | `Date` | |
| toDate | Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | số CV · trích yếu |

**Cấm** native `<select>` cho chiều/đơn vị.

## 5. API / BE (PO scope — SA chốt chi tiết)

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/v1/report/official-docs` | Xem paged · query `from` `to` `direction` `orgUnitId` `q` `page` `pageSize` |
| GET | `/api/v1/report/official-docs/export` | Excel |

Context `api/v1/reports/official-docs` **stale**. BFF `web-bff/api/v1/report/...`. Entity nguồn OfficialDocument — P1 read in-memory / P2 EF nếu SA chốt. **Không** bảng báo cáo riêng bắt buộc P1.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-CV-01 | Prefix **`api/v1/report`** — đóng `reports` (plural). |
| GAP-PO-CV-02 | Pack **report** / Kind **E** — đóng packet `list` / Kind B. |
| GAP-PO-CV-03 | Route **`/bao-cao/cong-van`** · mfeStdUrl **`http://localhost:9311/bao-cao/cong-van`**. |
| GAP-PO-CV-04 | Seed 8–15 dòng · chiều đi/đến · org-unit Chi cục II.*. |
| GAP-PO-CV-05 | **Không** CRUD · **cấm** Thêm mới Zone A · drill `/ops?id=`. |
| GAP-PO-CV-06 | Config FULL P1 · footer luôn · In stub OK P1. |
| GAP-PO-CV-07 | P1 in-memory OK · EF OfficialDocument **P2**. |
| GAP-PO-CV-08 | autoApprove **OFF** → Design/SA/Review **await_confirm** board — **không** auto-confirm. |
| GAP-PO-CV-09 | Repo BE+UI **user tick** trước Dev — **không** auto. |

## 7. Out of scope P1

- CRUD công văn · form Resource/Slideout.
- Dashboard KPI gộp slug này.
- Publish domain events.
- Filter tuyến (road-route) trên leaf này.
- Clone chrome GOVOne / hub `reports` tabs 3 loại.

## 8. Handoff Design

Prototype **content-only** zones **A–D** (`list-shell-prototype.md` analog report) + **reviewUrl**. Skip note/sidebar/menu/chrome. Mock 8–15 dòng OfficialDocument.

Chain **ON** · autoApprove **OFF** → Design = **pending** đến lượt · **không** auto-confirm prototype.

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
