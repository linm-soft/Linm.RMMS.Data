# PO — Requirement — job-title

> Status: **confirmed** · task `task_a5766ebc` · source `scan` (queue `/agent-po`)  
> Hash skip: analy `done` · `contentHash` khớp · **cấm** re-scan demo (`data-analy-hash-gate` · **GAP-PO-DEMO-RESCAN-01**).

| | |
|--|--|
| Feature | `job-title` |
| Title | Danh mục chức vụ |
| Role | `po` |
| packKind | `master` (**PO confirm**) |
| changeScope | `new_page` (STATUS + data_analy compact — không hỏi lại) |
| formType | Kind **B** catalog list + form |
| demo | **N/A** (`master-catalog-no-demo`) |
| lane | web |

## Mục tiêu

Trang danh mục chức vụ trên MFE Master: list phẳng + form Slideout, dữ liệu từ seed/DB qua Integration `job-titles`. Không demo HTML. Không `ERP.*`. Không invent package Cục/VP.

## DoD (đo được)

1. Mở `http://localhost:9318/mas/chuc-vu` thấy grid từ `GET …/integration/job-titles` (seed/DB). **Cấm** `demoItems` / hàng giả.
2. Filter đúng controlHint: `SearchTextInput` + `Dropdown` nhóm, trên `LinErpListFilterBar` (1 hàng, lấp hàng rồi wrap, 🔍 mép phải, không nút Tìm).
3. Tạo / Sửa / Xem mở **Slideout** đủ field P0; View readonly; dirty → `LeaveConfirmModal`.
4. `code` không phải Guid; create dùng `IIdCodeService.GenerateAsync` hoặc nhập chuẩn; lock khi sửa.
5. `packageHint` gợi ý từ `titleGroup` (LEAD→`MANAGER-RMMS` · TECH/PATROL→`RMMS-TDTK`).
6. Xóa / chặn dùng `useAlert` / `Modal`. **Cấm** `alert` / `confirm` native.
7. Menu trang chỉ `MANAGER-RMMS` / `ADMIN-RMMS` (GAP-JOB-04).

## Inventory — Context / Demo / DI

| ID | Path | Loại | Bắt buộc? |
|----|------|------|-----------|
| CTX-01 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title.md` | feature | P0 |
| CTX-02 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/master.md` | hub peer | cite |
| CTX-03 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/users.md` | consumer staff | cite |
| CTX-04 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/20-ORG-STRUCTURE-DRVN.md` | AppUser.JobTitle | cite |
| DEM-* | — | demo HTML | **skip** · `demo: N/A` |
| DI-01 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json` | seed ~19 | P0 import (GAP-JOB-05) |
| DI-02 | `D:/AI-QLBD/Linm.RMMS.Data/data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` | alias Excel | import |
| PROT-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/` | prototype | P0 từ Design |

controlHint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-control-hint.md`  
real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-real-data.md`  
contentHash: `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab`  
UNCLEAR: **none**

## § Tab index

`tabs: none` — một surface list + Slideout. **Cấm** invent tab (control-hint không có tab).

## § Screens (REQUIRED)

| Surface | Pattern | FormMode | Route | Actions | devSlash |
|---------|---------|----------|-------|---------|----------|
| List shell | Full page | — | `/mas/chuc-vu` | filter · refresh · thêm · row menu · config | `/agent-dev` |
| Form tạo | **Slideout** | Create | `/mas/chuc-vu/tao-moi` mở Slideout trên list (không thay Full page) | Lưu · Hủy | `/agent-dev` |
| Form sửa | **Slideout** | Edit | `/mas/chuc-vu/sua?id=` | Lưu · Hủy · `code` lock | `/agent-dev` |
| Form xem | **Slideout** | View | `/mas/chuc-vu/:id` | Đóng · readonly | `/agent-dev` |

Pattern chốt từ analy: Slideout vì &lt;10 field. Deep-link giữ list phía sau. Design clone `form-surface-prototype` Slideout · zone `DES-GRID-Z`. Không map / camera / AI.

## Zones (control-hint)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Danh mục chức vụ» — **cấm** Thêm mới trên A |
| B | Toolbar FULL + filter | `LinErpListFilterBar` · Tạo mới · Refresh · config · chọn dòng |
| C | Grid | Mã · Tên · Nhóm · Package gợi ý · Hiệu lực · row menu |
| D | Pagination | flat · `LinCatalogListPagination` · **không** tree |
| Form | Slideout | C/E/V · footer Lưu/Hủy |

## Grid list AC (REQUIRED · Kind B)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** (trên B, không trên A) |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới (ui-schema hoặc Zone F) · kéo cột default ON |
| **Grid flow** | Sort cột · filter cột (panel: tìm · chọn tất cả · Đã chọn N · Xác nhận) · chọn dòng |
| **Filter** | **`LinErpListFilterBar`** trên Zone B · 1 hàng wrap · field **lấp hàng rồi wrap** · 🔍 mép phải (`filter-bar-layout-hard` · **GAP-FILTER-WRAP-02**) — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · `/filter-bar-context` |
| **Form pair** | Create/Edit/View = **Slideout** (`DES-GRID-Z`) · Design clone `form-surface-prototype` |
| **Tree?** | Không — list phẳng |
| **SSOT Design** | **`shared-grid-example`** (HTML + `DES-GRID-*`) · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | **`tl-design-grid-component-map`** · `tl-grid-full-flow` · `tl-grid-task-template` · **T-UI-FILTER-01** |

**Handoff → Design:** clone **`shared-grid-example.html`** · giữ `data-des-id` — **cấm** gen list chỉ table giữa trang. `grid_standard: v1`.

Filter fields: `search` (`SearchTextInput`, mã/tên/alias CI) · `titleGroup` (`Dropdown`, `LEAD`/`TECH`/`PATROL` từ init-data).

## § Leave / alert (REQUIRED)

| Sự kiện | Control | Cấm |
|---------|---------|-----|
| Dirty rời form / đổi route / Hủy khi đã sửa | `LeaveConfirmModal` (`/implement-show-leave-confirm`) | native `confirm` |
| Xóa · chặn · lỗi nghiệp vụ | `useAlert` / `Modal` | native `alert` |
| Lỗi API | toast | `alert` |

## Control hints (copy analy)

### List filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · alias CI |
| titleGroup | Nhóm chức vụ | `Dropdown` | LOOKUP_STATIC / init-data | `LEAD` · `TECH` · `PATROL` |

### Form (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã chức vụ | `Text` code | * | `HAT-TRUONG` · `TUAN-DUONG` — **cấm** Guid · create: `IIdCodeService.GenerateAsync` hoặc nhập chuẩn · lock khi edit |
| name | Tên chức vụ | `Text` | * | tên chuẩn (gộp alias Excel) |
| titleGroup | Nhóm | `Dropdown` | * | LEAD · TECH · PATROL · init-data |
| packageHint | Package gợi ý | `Dropdown` / derived | * | LEAD→`MANAGER-RMMS` · TECH/PATROL→`RMMS-TDTK` — gợi ý · Auth package vẫn SSOT · **cấm** invent Cục/VP |
| legacyAliases | Alias Excel | `Text` / tags | | chuỗi lệch chính tả |
| isActive | Hiệu lực | `Switch` | | |

### Consumer (không phải surface catalog — contract)

Persist `jobTitleCode` · hiển thị `name`. **Cấm** free-text sau khi catalog live.

| Surface | Field key | controlHint | Notes |
|---------|-----------|-------------|-------|
| Staff list `/admin/user` | jobTitleCode | lookup label | cột Chức vụ ≠ `roleCode` |
| Staff form | jobTitleCode | `SearchInput` | `GET …/job-titles/search` · GAP-JOB-02 |
| ProfileTab / Auth Position | jobTitleCode | `SearchInput` hoặc readonly resolve | GAP-JOB-06 · **cấm** placeholder «Chuyên viên IT» |

| titleGroup | packageHint | AppUser `role_code` |
|------------|-------------|---------------------|
| LEAD | `MANAGER-RMMS` | VanPhong |
| TECH | `RMMS-TDTK` | KyThuat |
| PATROL | `RMMS-TDTK` | Ban.TK |

Org scope = `OrgCode` trên `/mas/co-cau-tc`. Menu không theo node Cục/VP.

## Real-data §A + §B (copy)

Prefix target: `web-bff/api/v1/integration` → `api/v1/integration` · resource `job-titles`.  
BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm** `ERP.*` · **cấm** `open-api` · **cấm** `api/v1/rmms/*`.  
UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master`. `sameMfe=gap` đến khi Dev PASS.

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/integration/job-titles?search=&titleGroup=` |
| Search | `GET /web-bff/api/v1/integration/job-titles/search` |
| Init | `GET /web-bff/api/v1/integration/job-titles/init-data` |
| Detail | `GET /web-bff/api/v1/integration/job-titles/{id}` |
| Create | `POST /web-bff/api/v1/integration/job-titles` |
| Update | `PUT /web-bff/api/v1/integration/job-titles/{id}` |
| Delete | `DELETE /web-bff/api/v1/integration/job-titles/{id}` |

| uiField | controlHint | GET / write |
|---------|-------------|-------------|
| search | SearchTextInput | `?search=` |
| titleGroup | Dropdown | `?titleGroup=` · init-data · write `titleGroup` |
| code | Text code | detail / by-code · write `code` (GenerateAsync) |
| name | Text | write `name` |
| packageHint | Dropdown / derived | write `packageHint` |
| legacyAliases | Text/tags | write `legacyAliases` |
| isActive | Switch | write `isActive` |
| jobTitleCode (peer) | SearchInput | `GET …/search` · AppUser.`jobTitleCode` |

`map: none` · `progress: none`.

## Gaps (giữ — không đóng ở PO)

| ID | Sev | Owner |
|----|-----|-------|
| GAP-JOB-DM-01 | P0 | SA — DOMAIN-MAP thiếu slug `job-title` |
| GAP-JOB-BE-01 | P0 | SA/Dev — chưa entity/controller |
| GAP-JOB-MFE-01 | P0 | Dev — chưa page `/mas/chuc-vu` |
| GAP-JOB-05 | P0 | SA/Dev — seed JSON chưa vào DB |
| GAP-JOB-01 | P1 | import alias Excel |
| GAP-JOB-02 | P1 | peer users free-text → `jobTitleCode` |
| GAP-JOB-06 | P1 | ProfileTab / Position |
| GAP-JOB-04 | P1 | menu MANAGER-RMMS / ADMIN-RMMS |
| GAP-JOB-03 | P2 | Auth INTERNAL/CONTRACTOR ngoài seed |

## Open questions

none (analy UNCLEAR none · Autopilot).

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `job-title` / `master` (PO confirm) |
| phase_from / phase_to | po → design |
| STATUS | confirmed |
| Context / Demo / DI | CTX-01 P0 · DEM **N/A** · DI-01 seed · DI-02 Excel |
| controlHint / UNCLEAR | control-hint abs · UNCLEAR none |
| Screens / Pattern / devSlash | List Full page · Form **Slideout** C/E/V · `/agent-dev` |
| Tab index | `tabs: none` |
| grid_standard | **v1** · § Grid list AC · Report AC **N/A** |
| Leave | `LeaveConfirmModal` + `useAlert`/`Modal` |
| peerStdUrl / reviewUrl | gợi ý consumer `http://localhost:9318` không áp — peer staff `/admin/user` (formType khác). Catalog greenfield: clone `shared-grid-example`, không live peer Kind B. reviewUrl = Design |
| APIs / FormMode↔API | Integration `job-titles` CRUD/search/init · Create/Edit/View |
| Open questions | none |
| Next | `/agent-design` · prototype + `design_confirm` · **cấm** demo HTML SSOT |

## Version meta

| Field | Value |
|-------|-------|
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| versionGate | `ok` |
| sourceContentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| taskId | `task_a5766ebc` |
| writtenAt | `2026-09-18T19:30:00.000Z` |
| status | `confirmed` |
