# Design — job-title (Danh mục chức vụ)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| Feature Kind | **B** — Catalog **flat** list + **Slideout** form |
| status | `confirmed` |
| design_confirm | `approve` (`autoApprove=ON` · `task_a6e54864`) |
| changeScope | `new_page` |
| packKind | `master` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/chuc-vu` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `api/v1/integration/job-titles` · **cấm ERP.*** |
| prior | PO `confirmed` · analy hash `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | **ON** → agent confirm Design |
| updatedAt | `2026-09-19T02:30:00.000Z` |
| taskId | `task_a6e54864` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/job-title.md` | Kind B · fields · §5b consumer |
| CTX-02 | `docs/context/features/master.md` | hub Master |
| CTX-03 | `docs/context/features/users.md` | consumer staff SearchInput |
| DI-01 | `docs/context/seed/job-title-seed.json` | ~19 canonical |
| DI-02 | control-hint + real-data | hash skip — **cấm** re-scan demo |
| DEM-* | **N/A** | `packKind=master` · `master-catalog-no-demo` |

## 0b. Delta Current → New (`new_page`)

| Surface | Current | New |
|---------|---------|-----|
| MFE page | **0** `/mas/chuc-vu` | Kind B list A–D + Slideout Z |
| Filter | — | `LinErpListFilterBar`: SearchTextInput + Dropdown `titleGroup` · 🔍 mép phải · **cấm** nút Tìm |
| Form | — | Slideout C/E/V · 2 cột · LeaveConfirmModal |
| Consumer | free-text JobTitle | SearchInput `jobTitleCode` (peer users / ProfileTab — document only) |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog · `LinCatalogDataGrid` · **cấm** nested CatalogListShell |
| Form pattern | **Slideout** (`formSurface: slideout` · `data-form-cols="2"`) — PO chốt &lt;10 fields · deep-link mở overlay trên list |
| Routes | List `/mas/chuc-vu` · Create `/mas/chuc-vu/tao-moi` · Edit `/mas/chuc-vu/sua?id=` · View `/mas/chuc-vu/:id` (mở Slideout) |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| Grid | `grid_standard: v1` · Report AC **N/A** · `tabs: none` |
| Leave | **LeaveConfirmModal** — **cấm** native `alert`/`confirm` |
| Delete | `useAlert` / Modal |
| shared_grid_example | **v1** |
| real_view_parity | **v1** |
| peerStdUrl | SSOT `shared-grid-example` (greenfield — chưa live peer cùng formType) · consumer ref Integration users `/admin/user` |
| devSlash | `/agent-dev` |

## 2. Screens / zones

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | List | Full page · DES-GRID-A…D | `/mas/chuc-vu` | — | filter · refresh · history · config · create · row menu |
| S-FORM | Form | **Slideout** DES-GRID-Z | `/tao-moi` · `/sua?id=` · `/:id` | C/E/V/Copy | save · cancel · leave-confirm |

### Zones (stable ids)

| Zone | UI | DoD |
|------|-----|-----|
| **DES-GRID-A** | Header icon + «Danh mục chức vụ» | **cấm** Thêm mới trên A |
| **DES-GRID-B** | Toolbar FULL sticky | Làm mới · Lịch sử · Sửa config(`fa-cog`) · Xem/Sửa/Xóa (khi chọn) · **+ Thêm mới** phải |
| **DES-GRID-C0** | Grid card chrome | title «Danh sách chức vụ» · row-menu help |
| **DES-GRID-C1** | `LinErpListFilterBar` | SearchTextInput + Dropdown nhóm · 1 hàng wrap · 🔍 mép phải · **cấm** nút Tìm |
| **DES-GRID-C2** | Data grid | STT · □ · Mã · Tên · Nhóm · Package gợi ý · Hiệu lực · ⋯ |
| **DES-GRID-C2a** | Column filter panel | Chọn tất cả · Đã chọn N · Hủy/Xác nhận |
| **DES-GRID-C3** | Row menu | Xem · Sửa · Sao chép · Lịch sử · Xóa |
| **DES-GRID-D** | Pagination | Tổng · pageSize 50/100/200/500 · ««‹›»» |
| **DES-GRID-F** | Config modal | kéo cột default ON |
| **DES-GRID-H** | History modal | timeline theo mã |
| **DES-GRID-Z** | Form Slideout | 2 cột · footer Hủy/Lưu · View readonly |
| **DES-LEAVE** | LeaveConfirmModal | dirty ✕/Hủy |

## 3. Field inventory (Control = controlHint)

### List filters (Zone C1)

| uiField | Label VN | Control | Notes |
|---------|----------|---------|-------|
| search | Tìm kiếm | `SearchTextInput` | mã · tên · alias CI |
| titleGroup | Nhóm chức vụ | `Dropdown` | LEAD · TECH · PATROL · init-data |

### Form fields (DES-GRID-Z)

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | **Mã chức vụ** | Text code | * | create editable · edit/view **readonly** | **cấm** Guid · GenerateAsync |
| name | **Tên chức vụ** | Text | * | view=readOnly | canonical |
| titleGroup | **Nhóm** | Dropdown | * | view=readOnly | LEAD · TECH · PATROL |
| packageHint | **Package gợi ý** | Dropdown / derived | * | view=readOnly | LEAD→`MANAGER-RMMS` · TECH/PATROL→`RMMS-TDTK` · **cấm** invent Cục/VP |
| legacyAliases | **Alias Excel** | Text / tags | | view=readOnly | Tuần kiềm → Tuần kiểm |
| isActive | **Hiệu lực** | Switch | | view=readOnly | |

### Consumer (peer — không thuộc form catalog)

| uiField | Label | Control | Surface |
|---------|-------|---------|---------|
| jobTitleCode | Chức vụ | **SearchInput** | staff `/admin/user` · ProfileTab · **cấm** Text free |

### Nhóm (LOOKUP)

| value | Nhãn hiển thị |
|-------|----------------|
| `LEAD` | Lãnh đạo |
| `TECH` | Kỹ thuật |
| `PATROL` | Tuần kiểm |

### List columns

STT · □ · **Mã chức vụ** · **Tên chức vụ** · **Nhóm** · **Package gợi ý** · **Hiệu lực** · ⋯

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

### Typography

Label **13** · input D14 / M16 (**GAP-TYP-01**).

## 4. Control map / hooks

- Shell: `LinPageLayout` · `LinCatalogDataGrid` · `LinErpListFilterBar` · `LinCatalogListPagination` · `useCatalogTableBusy`
- **A** title «Danh mục chức vụ» — **cấm** Thêm mới
- **B** toolbar icon+label VN · Thêm mới chỉ bên phải B
- **C1** filter đổi → page=1
- **Z** Slideout footer only — **cấm** top Quay lại
- View: `readOnly` / `.viewDisabled` — **cấm** disabled xám
- Delete/block: Modal / useAlert — **cấm** native dialog
- Labels: init-data — **cấm** hardcode lệch §3
- API outline: `GET/POST/PUT/DELETE …/integration/job-titles` (+ `/search` · `/init-data`)

## § Grid list AC (from PO · Design chốt)

| AC | Pass |
|----|------|
| Toolbar FULL (refresh · history · config · create) | ✅ |
| Row menu Xem/Sửa/Copy/History/Xóa | ✅ |
| Config kéo cột ON | ✅ |
| Sort/filter cột | ✅ |
| Pagination D | ✅ |
| Filter bar 1 hàng wrap · 🔍 phải · không nút Tìm | ✅ |
| Không tree | ✅ |

Report AC: **N/A**.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | `ui/prototype/job-title-list-prototype.html` |
| List zones | **DES-GRID-A · B · C0–C3 · D · F · H** |
| Form | **Slideout** DES-GRID-Z · `data-form-cols="2"` · LeaveConfirmModal |
| SSOT | `list-shell-prototype` · `form-surface-prototype` · `po-design-grid-standard` · `design-real-view-parity` |
| Scope | content-only · **cấm** chrome demo |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html` |
| **peerStdUrl** | `file:///D:/AI-Rules/Linm.Development.Rules/common/skill/agent-design/example/shared-grid-example.html` (SSOT peer · greenfield) |
| **real_view_parity** | `v1` |
| **shared_grid_example** | `v1` |

### Wire (list)

```
[A] fa-id-badge + Danh mục chức vụ (**no** Thêm mới)
[B] Làm mới · Lịch sử · config · Xem/Sửa/Xóa  |  [+ Thêm mới]
[C] card: Danh sách chức vụ · row-menu help · LinErpListFilterBar (Nhóm + Tìm 🔍) · grid
[D] pageSize · Tổng · «‹ ‹ x/y › ›»
```

### Wire (form — Slideout)

```
[Header] Thêm/Sửa/Xem chức vụ · badge · ✕
[Body 2 cột] Mã* | Nhóm* · Tên* (wide) · Package* (wide) · Alias (wide) · Hiệu lực
[Footer] Hủy · Lưu   ← View: chỉ Đóng/Hủy
Dirty ✕/Hủy → LeaveConfirmModal (Ở lại / Rời đi)
```

## Handoff → SA

| Field | Value |
|-------|-------|
| feature | `job-title` |
| controlHint | code=Text · name=Text · titleGroup=Dropdown · packageHint=Dropdown/derived · legacyAliases=Text · isActive=Switch · consumer jobTitleCode=**SearchInput** |
| Labels | §3 tiếng Việt |
| Zones | DES-GRID-A…D · F · H · Z · LEAVE |
| reviewUrl | file://…/job-title-list-prototype.html |
| API | Integration `job-titles` · GenerateAsync · DOMAIN-MAP GAP-JOB-DM-01 |
| GAP | GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0 · 01/02/04/06 P1 · 03 P2 |
| Next | `/agent-sa` · design_confirm **approve** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| generatedAt | `2026-09-19T02:30:00.000Z` |
| versionGate | `ok` |
| taskId | `task_a6e54864` |
