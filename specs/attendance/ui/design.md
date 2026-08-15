# Design — attendance (Chấm công và định vị)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| Feature Kind | **B** — Catalog list A–D + **Slideout** form (`AttendanceFormSlideout`) |
| status | `await_confirm` (autoApprove=OFF · user Approve board) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (`/patrol/attendance`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/attendance-logs` |
| prior | PO `done` · `po/requirement.md` · GAP-PO-ATT-01..07 · data-analy hash `1ec355a64b…` |
| autoApprove | **OFF** (`task_dcdef46b`) → Design dừng `await_confirm` |
| updatedAt | `2026-08-14T16:50:00.000Z` |
| taskId | `task_dcdef46b` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/attendance.md` | Kind B list + Slideout; demo E+D **không** clone |
| DEM-01 | `Linm.RMMS.Demo/.../attendance-demo.html` → `patrol/attendance.html` | Visual SSOT — skip chrome/map/KPI |
| DI-02 | `specs/_data-analy/features/attendance-control-hint.md` | controlHint SSOT |
| DI-03 | `road-route-seed.json` | **38** tuyến · `QL.1` · **không** `QL.22` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Slideout** (`AttendanceFormSlideout`) C/E/V/Copy — **cấm** Resource · **cấm** full-page (GAP-PO-ATT-05) |
| Routes | List `/patrol/attendance` · form overlay trên list |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | `readOnly` — **cấm** disabled xám toàn form |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Sổ chấm công | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchInput ×2 + Dropdown + Checkbox |
| Form log | create/edit/view/copy | **Slideout Z1 · Z1h · Z2 · Z3** | 10 fields · footer-only Lưu/Hủy |

### Zone A — Header

- Icon `fa-user-clock` + title **Chấm công và định vị** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (PO DoD-2)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchInput` | text — mã · NV · tuyến · status · GPS |
| status | Trạng thái | `Dropdown` | enum: (trống=tất cả) · Đúng tuyến · Lệch zone · Thiếu điểm |
| route | Tuyến đường | `SearchInput` | **road-route** (38) — **cấm** free-text · display `code — name` |
| onlyOutZone | Chỉ lệch zone | `Checkbox` | bool — lọc `inZone=false` / status Lệch zone |
| — | Làm mới | `fa-sync-alt` | clear filter + reload · page=1 |
| — | Lịch sử | `fa-history` | stub P1 (cần 1 dòng) |
| — | Sửa config | `fa-cog` | column config modal |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B**.

**Cấm trên B (pack này):** Xuất Excel (P2) · Đề xuất / Chờ duyệt · Thêm mới trên A.

Filter đổi → **page=1** (search must work).

### Zone C — Grid

- Card title: **Sổ chấm công / check-in**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body (GAP-P2-LAYOUT-06)
- Columns (kéo cột ON): STT · □ · **Mã chấm công** · **Nhân viên** · **Tuyến đường** · **Thời điểm** · **Lý trình** · **InZone** · **Trạng thái** · **GPS** · ⋯
- Tuyến hiển thị `QL.1` (master), **không** `QL.22`
- Row menu: **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1)
- Click mã → View slideout `readOnly`

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã chấm công | `Text` readonly IdCode | auto | all readonly | BE `CC-yyyyMMdd-nnn` · copy = mã mới |
| userName | Nhân viên | `Text` | * | view=readOnly | P1 **không** SearchInput users (GAP-PO-ATT-03) |
| route | Tuyến đường | `SearchInput` | * | view=readOnly | master **road-route** 38 — **cấm** Input Text |
| checkInAt | Thời điểm | `Date` (datetime-local) | * | view=readOnly | |
| kmPoint | Lý trình | `Text` | | view=readOnly | vd km12+000 |
| lat | Vĩ độ | `Text` (number) | * | view=readOnly | GPS pair |
| lng | Kinh độ | `Text` (number) | * | view=readOnly | GPS pair |
| inZone | InZone | `Dropdown` | | view=readOnly | Trong zone / Ngoài zone |
| status | Trạng thái | `Dropdown` | * | view=readOnly | Đúng tuyến · Lệch zone · Thiếu điểm |
| note | Ghi chú | `Text` multiline | | view=readOnly | |
| updatedAt | Cập nhật | `Date` readonly | | all readonly | |

### Alias seed tuyến (PO GAP-PO-ATT-01)

| Demo / MFE cũ | Canonical `road-route.code` |
|---------------|------------------------------|
| QL.22 (context mock · `attendanceStore`) | **`QL.1`** — **cấm** invent `QL.22` vào 38 CUC2 |
| QL.1 (demo HTML live) | **`QL.1`** |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| SearchInput route filter + form — **cấm** Text | GAP-PO-ATT-02 · GAP-DA-ATT-ROUTE |
| Checkbox onlyOutZone Zone B | GAP-PO-ATT-04 |
| Checkbox grid 24×24 · cột 48px | GAP-P2-GRID-CHECK-01 |
| Ellipsis cột | GAP-P2-GRID-ELL-01 |
| AppLayout definite height · title không clip | GAP-P2-LAYOUT-06 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |
| View `readOnly` không disabled xám | GAP-PO-ATT-05 |

## 4. Form Slideout wire

```
[Z1] [← Quay lại]     [📋 Sao chép] [✏ Sửa]   — không Lưu/Hủy trên header (footer-only)
     Title · badge create|edit|view|copy · «Slideout · 10 fields»
[Z1h] hint (view/edit/dirty leave-confirm)
[Z2] sections: Thông tin chấm công · GPS / zone · Audit  (scroll)
[Z3] [Hủy] [Lưu]  — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại / đóng backdrop
- **Cấm** parent JSON string trên field/DTO
- InZone server validate = P2 stub (flag trên form)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/attendance-list-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **Slideout** Z1–Z3 · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock 38-subset route (`QL.1` …) |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` · VatTu pager |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/attendance-list-prototype.html` |

### List wire

```
[A] fa-user-clock + «Chấm công và định vị»
[B] SearchInput · status Dropdown · route SearchInput · Checkbox lệch zone · Làm mới · Lịch sử · fa-cog | [+ Tạo mới]
[C] «Sổ chấm công / check-in» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / report

- Leaflet Kind F + KPI 4 + Kind E report: demo only — **out of pack** (P2)
- Kind D GeoFence zone: **out of pack** (API MISSING)
- Face/NFC: **DEFER**
- Excel export: **out of pack**

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-ATT-01..07 giữ nguyên. SA map lookup `road-routes` + list query `?route=&onlyOutZone=`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `/api/v1/attendance/*`.

## Confirm

`design_confirm` = **pending** — autoApprove **OFF** · user Approve trên `/qldb-workflow` · **không** auto-confirm.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **Slideout** form |
| Field inventory | §3 · SearchInput route · Text userName · Dropdown status/inZone |
| Filters | search · status · route · onlyOutZone → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/patrol/attendance-logs` + BFF `web-bff/api/v1/patrol/attendance-logs` |
| Lookups (SA chốt) | Master `road-routes` · **không** users P1 |
| Entity | `AttendanceLog` · `rmms_attendance_logs` · SHARE=tenant_keep · **cấm** parent JSON |
| Seed | mock `QL.22` → **`QL.1`** |
| Next | SA **pending** đến user Approve Design |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorPo | sha256:po-requirement-task_be41b753 |
| contentHashPriorDataAnaly | sha256:1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4 |
