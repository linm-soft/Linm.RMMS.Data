# Design — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — clone tuần kiểm + 10 mẫu |
| Role | `design` |
| status | **confirmed** (autoApprove ON · `design_confirm=approve`) |
| packKind | `list` |
| changeScope | `new_page` |
| Feature Kind | **B** — Catalog list A–D + **Full page** form |
| formPattern | **Full page** · `data-form-cols="5"` |
| demo | **N/A** · `continue_no_demo` · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` |
| peerStdUrl | `http://localhost:9304/patrol` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| taskId | `task_16791ccc` |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| updatedAt | `2026-09-12T09:20:00.000Z` |

## Kind / Pattern

| | |
|--|--|
| Kind | B (list + form pair) |
| Form surface | **Full page** — URL `/nghiem-thu/new` · `/nghiem-thu/:id` · Copy/View |
| `data-form-cols` | **5** · **cấm** `.fields { 1fr 1fr }` / footer Lưu (**GAP-DES-FORM-SURFACE-01**) |
| Leave | **LeaveConfirmModal** · **cấm** native `confirm` (**GAP-DES-LEAVE-01**) |
| Tree | none |
| Report | n/a |

## Zones (list)

| Zone | `data-des-id` | Wire |
|------|---------------|------|
| A Header | `DES-GRID-A` | icon + title «Công tác nghiệm thu» · **cấm** Thêm mới trên A |
| B Toolbar | `DES-GRID-B` | Làm mới · Lịch sử · Sửa config (`fa-cog`) · Xem/Sửa/Xóa · **+ Thêm mới** |
| C Grid card | `DES-GRID-C` | title · row-menu help · grid |
| C2a Filter | `DES-GRID-C2a` | mock **`LinErpListFilterBar`** · leading fields + date · 🔍 **mép phải** · lấp hàng rồi wrap |
| C2 Table | `DES-GRID-C2` | sort · filter cột · chọn dòng |
| C3 Menu | `DES-GRID-C3` | Xem/Sửa/Sao chép/Lịch sử/Xóa |
| D Pagination | `DES-GRID-D` | 50/100/200/500 · Tổng · pager |
| F Config | `DES-GRID-F` | kéo cột default ON |
| H History | `DES-GRID-H` | stub modal |
| Z Form | `DES-GRID-Z` | **Full page** (không Modal Z) |
| Upload | `DES-NT-UPLOAD` | FileMulti · FileService guid |
| Leave | `DES-LEAVE` | LeaveConfirmModal |

`shared_grid_example: v1` · `real_view_parity: v1` · peer = patrol Kind B.

### Wire (list)

```
[A] icon + title (no Thêm mới)
[B] Làm mới · Lịch sử · config · View/Edit/Delete  |  [+ Thêm mới]
[C] card: list title · row-menu help · LinErpListFilterBar · grid
[D] pageSize · Tổng · «‹ ‹ x/y › ›»
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · cấm footer Lưu
View: <dl> + gallery resign · no dirty
Dirty leave → LeaveConfirmModal
```

## Screens

| Screen | Pattern | FormMode | Actions | Leave | devSlash |
|--------|---------|----------|---------|-------|----------|
| List `/nghiem-thu` | Kind B A–D | — | Toolbar + filter + grid | n/a | `/agent-dev` |
| Create `/nghiem-thu/new` | Full page | Create | header Lưu/Hủy · upload · chọn mẫu | dirty → LeaveConfirmModal | `/agent-dev` |
| Edit `/nghiem-thu/:id` | Full page | Edit | Lưu/Hủy · upload | dirty → LeaveConfirmModal | `/agent-dev` |
| View `/nghiem-thu/:id` | Full page | View | `<dl>` + gallery · Đóng | no dirty | `/agent-dev` |
| Copy | Full page | Copy | prefill · new code | dirty → LeaveConfirmModal | `/agent-dev` |

## Control-map (Design chốt = controlHint)

### List filters (Zone C2a)

| Field key | Label | Control | catalogKind |
|-----------|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text |
| status | Trạng thái | `SearchInput` | enum VN |
| route | Tuyến đường | `SearchInput` | road-route |
| templateType | Mẫu NT | `SearchInput` | LOOKUP_STATIC 10 |
| fromDate / toDate | Từ / Đến | `Date` | — |

### Form fields

| Field key | Label | Control | required |
|-----------|-------|---------|----------|
| code | Mã nghiệm thu | `Text` (auto NT-*) | auto |
| templateType | Mẫu nghiệm thu | `SearchInput` | * |
| route | Tuyến đường | `SearchInput` | * |
| zoneOrgCode / zoneOrgName | Khu / Chi cục | `SearchInput` | |
| vpOrgCode / vpOrgName | VP | `SearchInput` | |
| assigneeCode / assigneeName | Cán bộ NT | `SearchInput` | * |
| inspectedAt | Ngày nghiệm thu | `Date` | * |
| kmFrom / kmTo | Km đầu / cuối | `Text` (number) | |
| fieldInfo | Thông tin hiện trường | `Text` multiline | * |
| status | Trạng thái | `SearchInput` | * |
| note | Ghi chú | `Text` | |
| mediaIds | Ảnh / video | `FileMulti` | |
| updatedAt | Cập nhật | `Date` readonly | |

### LOOKUP (PO CLOSED)

- templateType: `mau-01`…`mau-10` · label Mẫu nghiệm thu 01…10
- status: Nháp · Đang NT · Hoàn thành · Hủy

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` · `list.html` · `form.html` |
| List zones | **A–D** + C2a/C3/F/H · grid standard FULL |
| Form zones | Full · `data-form-cols="5"` · DES-NT-UPLOAD · DES-LEAVE |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `po-design-grid-standard` · `design-real-view-parity` · `filter-bar-layout-hard` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9304/patrol` |
| **real_view_parity** | `v1` |
| **shared_grid_example** | `v1` |

## Filter-bar HARD

- mock `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`
- leading = từng `div` field (`display:contents`) · **cấm** wrap cả leading
- `flex: 1 1 180px` · lấp hàng rồi wrap · 🔍 **cuối mép phải**
- **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` · **GAP-FILTER-WRAP-02**

## Upload HARD

- `web-bff/api/v1/files/*` · FileService · persist guid · resign
- MIME image ≤10MB · video ≤50MB · max 10
- **cấm** invent `api/v1/nghiem-thu-files` · persist full URL

## API (proposed · SA)

| Method | Path |
|--------|------|
| GET/POST | `api/v1/patrol/nghiem-thu` |
| GET/PUT/DELETE | `api/v1/patrol/nghiem-thu/{id}` |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` |
| Files | `web-bff/api/v1/files/*` |

**OPEN → SA:** GAP-DA-NT-DOMAIN-01 / API-01

## Cấm

| ❌ | ✅ |
|----|-----|
| Modal/Slideout P1 form | Full page 5 cột |
| re-scan demo | control-hint + real-data |
| ERP.* / maintenance WO | RMMS Field + Patrol sibling |
| footer Lưu / native confirm | header chrome + LeaveConfirmModal |
| yarn build/e2e ở role design | Dev/QA only |

## design_confirm

| | |
|--|--|
| autoApprove | **ON** |
| decision | **approve** |
| at | `2026-09-12T09:20:00.000Z` |
| next | SA · `be/solution-discovery.md` |

## Handoff → SA

| Field | Value |
|-------|-------|
| zone ids | DES-GRID-A…D · C2a · C3 · F · H · Z · DES-NT-UPLOAD · DES-LEAVE |
| Screens | § Screens · Full page · `/agent-dev` |
| control-map | § Control-map |
| reviewUrl | prototype `index.html` |
| peerStdUrl | `http://localhost:9304/patrol` |
| APIs | proposed patrol/nghiem-thu + FileService |
| Open | DOMAIN/API → SA |

---
<!-- Version meta: skillId=agent-design · skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.12.2 · versionGate=ok · shared_grid_example=v1 · real_view_parity=v1 · contentHash=sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea · taskId=task_16791ccc · design_confirm=approve -->
