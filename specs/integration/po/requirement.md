# PO — integration (Open API và tích hợp)

| Field | Value |
|-------|-------|
| feature | `integration` |
| changeScope | `edit_page` (autopilot · STATUS + packet) |
| packKind | `list` |
| Feature Kind | **G** system hub + **Kind B** Endpoints/Sync/Partners catalogs + **Kind B full-page** Import/Job/Partner |
| status | `confirmed` (autopilot · task_23f4a691) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data-analy `confirmed` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/integration-control-hint.md` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/*`** (**cấm ERP.***) |
| domain | **Integration** |
| mfeStdUrl | `http://localhost:9314/integration` |
| updatedAt | `2026-08-16T06:10:00.000+07:00` |
| taskId | `task_23f4a691` |
| autoApprove | `ON` |
| versionGate | `rechecked` (SSOT agent-po `2026.08.15.17` · workflow `2026.08.15.19`) |

## 1. Goal

Chỉnh **Open API và tích hợp** (`edit_page`) theo controlHint `task_47bcb9ae` / PO `task_23f4a691`: hub Kind G tabs Endpoints · Sync · Partners · Guide; list Kind B A–D + **config FULL cột**; form **full-page** Import / Sync job / Partner (View=`<dl>`). Align demo → MFE `Linm.Web.RMMS.Integration` · BE `Linm.RMMS.WebService` domain **Integration**.

**≠** `feedback` · **≠** `citizen` · **≠** partner-unit master.

## 2. Current → New (edit_page · REQUIRED)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind G hub · Import wizard · localStorage · chrome SKIP | Giữ zone/field/action SSOT; **cấm** clone note/chrome |
| MFE | Hub + grids; **Slideout** Import/Job; View Input `readOnly`; `configHint`; leftover `const columns` / native `Select` | Full-page forms · View=`<dl>` · `LinCatalogUiSchemaEditorModal` · `useCatalogUiSchema` · `buildDynamicGridColumns` · Zone B `SearchInput` enum |
| API | `api/v1/integration/*` health/CRUD jobs/partners/import | Giữ; **seed** 3 `catalogKind` ui-schema · GET/PUT schema |
| BE | Integration domain | `CatalogUiSchemaRegistry` seed `integration-sync-jobs` · `integration-partners` · `integration-endpoints` · **cấm ERP.*** |
| Docs | Prior PO (2026-08-09) Kind D slideout | **Supersede:** Pattern Full page (`/integration/import` · `/integration/jobs/:id` · `/integration/partners/:id`) |

### GAP IDs (data-analy — PO bắt buộc Design/Dev đóng)

| ID | New |
|----|-----|
| GAP-F-SLIDE-01 | `ImportAssetFormPage` · `SyncJobFormPage` · `PartnerFormPage` · **cấm** Slideout/Resource |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | seed 3 catalogKind · **cấm** leftover `LinCatalogDataColumn` / `const columns` |
| GAP-LIST-FILTER-SELECT | Zone B `SearchInput` static enum · **cấm** native Select |
| GAP-FORM-LKP-01 | Form lookup `SearchInput` · **cấm** native Select |

**Không đổi:** Kind G tabs · IdCode `SYNC-YYYYMMDD-NNNN` · 1× `LinPageLayout` · `LinCatalogListPagination` 50/100/200/500 · webhook P2 stub.

## 3. Personas / DoD

- Persona: Dev tích hợp · IT khách
- DoD:
  1. Hub tabs Endpoints · Sync · Partners · Guide; **cấm** Thêm mới trên Zone A
  2. Sync list: SearchTextInput + SearchInput type/status · row menu Xem log · Retry · Xem/Sửa
  3. Partners list: health · Bật/Tắt · pagination A–D
  4. Endpoints grid: SearchTextInput path · SearchInput phase
  5. Import / Job / Partner **full-page** · leave-confirm dirty · IdCode `SYNC-*`
  6. Offline-batch **Modal** contract · Swagger stub panel (không full Swagger host)
  7. Config FULL 3 tab · **cấm** `configHint` · **cấm** `LinListTableConfigModal` làm editor cột
  8. FE typecheck + `yarn build` PASS (Dev) · BE Release PASS nếu đụng API
  9. 1× `LinPageLayout` — **cấm** nested CatalogListShell

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-INT | `docs/context/features/integration.md` | Hub · Import · Sync · Partners |
| DEM-INT | `Linm.RMMS.Demo/src/demo/features/integration-demo.html` → `integration/integration.html` | 19 actions · chrome SKIP |
| DI-INT | — | No Excel this pack |
| DA-INT | `specs/_data-analy/features/integration-control-hint.md` | **REQUIRED** controlHint |

### Sync columns (schema seed)

STT · Mã job · Loại · Partner · Trạng thái · Số bản ghi · Bắt đầu · Kết thúc · Lỗi · actions

### Partner columns (schema seed)

Partner · Loại hệ thống · Auth · Health · Phase · Enabled · actions

### Endpoint columns (schema seed)

Method · Path · Mô tả · Phase · Auth · Trạng thái

## 5. Control hints (copy data-analy · cấm Dev đoán)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| epSearch | Lọc path / mô tả | `SearchTextInput` | text | method · path · mô tả |
| epPhase | Phase | `SearchInput` | enum integration-phase | P1/P2/P3 · trống = tất cả |
| jobSearch | Tìm kiếm | `SearchTextInput` | text | mã · partner |
| jobType | Loại sync | `SearchInput` | enum integration-sync-type | import · offline-batch · webhook |
| jobStatus | Trạng thái | `SearchInput` | enum integration-job-status | draft/running/done/failed |
| partnerSearch | Tìm partner | `SearchTextInput` | text | name · systemType |

### Form — Import

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã job | `Text` | auto | IdCode `SYNC-*` readonly |
| assetType | Loại tài sản | `SearchInput` | * | static FE |
| region | Địa bàn | `SearchInput` | * | static FE |
| route | Tuyến đường | `SearchInput` | * | static FE |
| section | Đoạn đường | `Text` | | |
| fileName | File nguồn | `File` | * | xlsx/xls/csv |
| note | Ghi chú | `Text` | | |

### Form — Sync job

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã job | `Text` | auto | readonly |
| syncType | Loại sync | `Text` | | display |
| partner | Partner | `Text` | * | |
| status | Trạng thái | `SearchInput` | * | enum job-status |
| note | Ghi chú | `Text` | | |
| logText | Log | `Text` | | view/display |

Lookup static (handoff SA): `integration-phase` · `integration-sync-type` · `integration-job-status` · `integration-asset-type` · `integration-region` · `integration-route` · ui-schema kinds 3 list catalogs.

## 6. Grid list AC (REQUIRED · Kind B)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer (Sync + Partners; Endpoints grid + D nếu paged) |
| **Toolbar FULL** | Làm mới · Lịch sử (job) · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** (job/import) — **cấm** Thêm mới trên A |
| **Grid menu** | Sync: Xem · Sửa · Xem log · Retry · Lịch sử · Xóa · help «nhấn đúp / Ctrl+chuột phải». Partners: Xem · Bật/Tắt |
| **Config** | `LinCatalogUiSchemaEditorModal` «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột · kéo cột default ON · **cấm** Zone F-only `LinListTableConfigModal` · **cấm** `configHint` |
| **Grid flow** | Sort cột · filter cột (panel: tìm · chọn tất cả · Đã chọn N · Xác nhận) · chọn dòng |
| **Filter Zone B/C** | SearchTextInput + SearchInput enum — **không** nút Tìm trùng toolbar · **cấm** native Select |
| **Form pair** | Create/Edit/View → **Full page** URL `/new` · `:id` · Design clone `form-surface-prototype` 5 cột `data-form-cols="5"` |
| **Tree?** | Không |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-grid-task-template` |

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** trên Sync & Partners |
| AC-G-02 | Search + filters → page=1 |
| AC-G-03 | Row menu Sync: Xem log · Retry · Partners: Bật/Tắt |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Config FULL 3 `catalogKind` · `columns={buildDynamicGridColumns(schema, uiColumns)}` |

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | devSlash |
|---------|---------|----------|-----|---------|----------|
| S-HUB | Full page (Kind G host) | — | `/integration` | Swagger · Copy OpenAPI · Health · Xuất catalog · Refresh · Offline-batch Modal · Webhook stub P2 · Import nav · tabs | `/agent-dev` |
| S-LIST-EP | Kind B grid (tab) | — | `/integration` tab Endpoints | filter · config schema `integration-endpoints` | `/agent-dev` |
| S-LIST-SYNC | Kind B grid (tab) | — | `/integration` tab Sync | filter · row menu · config `integration-sync-jobs` | `/agent-dev` |
| S-LIST-PARTNER | Kind B grid (tab) | — | `/integration` tab Partners | toggle · config `integration-partners` | `/agent-dev` |
| S-FORM-IMPORT | **Full page** | Create/Edit/View | `/integration/import` · `/integration/import/:id` | Chạy import · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-JOB | **Full page** | Create/Edit/View | `/integration/jobs/new` · `/integration/jobs/:id` | Lưu · Retry · View `<dl>` | `/agent-dev` |
| S-FORM-PARTNER | **Full page** | View (+ toggle from list) | `/integration/partners/:id` | View `<dl>` · Bật/Tắt | `/agent-dev` |
| S-MODAL-OFFLINE | **Modal** | View | overlay | JSON contract mock | `/agent-dev` |
| S-MODAL-CONFIG | **Modal** | — | overlay | ui-schema editor | `/agent-dev` |

**Cấm** Pattern Slideout trên Import/Job/Partner (**GAP-F-SLIDE-01** / **GAP-PO-SCREEN-01** nếu Design clone slideout).

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Import/Job form dirty (Quay lại / đổi route / đóng) | `LeaveConfirmModal` + `useFormLeaveGuard` | `window.confirm` / native dialog (**GAP-PO-LEAVE-01**) |
| Xóa job / chặn | `useAlert` / `Modal` | `alert` / `prompt` |
| History job | `LinCatalogHistoryModal` + `useCatalogHistoryModal` | overlay z-index lệch |

## 9. Out of scope

- Public citizen API P3 — DEFER
- Real SAP/ETC webhook runtime — DEFER
- Full Swagger UI host — stub panel P1
- Clone demo chrome / localStorage-only as product UX

## 10. Handoff → Design (`/agent-design`)

- Content-only prototype zones **A–D** (`list-shell-prototype` + `shared-grid-example`) + **reviewUrl**
- Form surfaces Full page 5 cột · **cấm** Kind D slideout
- Control map = bảng §5 · grid_standard = §6 · Screens = §7
- peerStdUrl gợi ý: `http://localhost:9314/integration`
- packKind confirm: **`list`**
- autoApprove=ON → Design tự confirm gate sau prototype
- Roles sau Design (SA → TL → Dev → QA → Review) = **pending** đến lượt · chain ON

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:10:00.000+07:00 |
| versionGate | rechecked |
| taskId | task_23f4a691 |
