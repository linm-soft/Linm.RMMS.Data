# Team lead — Task — job-title

> Status: **confirmed** · roleOnly=`team_lead` · task `task_7017698c`  
> changeScope=`new_page` · packKind=`master` · Kind B catalog · formPattern=Slideout  
> **Cấm** ERP.* · **cấm** `api/v1/rmms/*` · **cấm** `open-api` · **cấm** clone Lin* / pager / grid

| Field | Value |
|-------|-------|
| feature | `job-title` |
| title | Danh mục chức vụ |
| formType | `master` |
| devSlash | `/agent-dev` (+ `/dev-web-responsive` · `/dev-ui-review` trên T-UI-RESP-01) |
| catalogKind | `job-title` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Domain Integration |
| mfeStdRoute | `/mas/chuc-vu` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` (Dev live — TL không `start:std`) |
| demo | N/A (`master-catalog-no-demo`) |
| tree | **none** — cấm `DES-GRID-T` / `/implement-tree-master` |
| retry | n/a (retry data_analy đã resolved `task_fe86d194` — không `retryFrom` TL) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | `agent-team-lead` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| sourceContentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| taskId | `task_7017698c` |
| versionGate | `ok` |
| generatedAt | `2026-09-18T19:50:00.000Z` |

## route_confirm

| | |
|--|--|
| gate | Autopilot ON · URL **không mới** · không AskQuestion |
| path | `/mas/chuc-vu` — viết tắt VN «chức vụ» |
| authority | STATUS `mfeStdRoute` + Design §1 + PO/SA compact (đã confirm) |

```yaml
source.routes:
  list: /mas/chuc-vu
  create: /mas/chuc-vu/tao-moi          # deep-link → Slideout Create
  edit: /mas/chuc-vu/sua?id={id}        # deep-link → Slideout Edit
  view: /mas/chuc-vu/{id}               # deep-link → Slideout View
formSurface: slideout                   # cấm Full page 5 cột
```

## Screens

| id | Surface | Pattern | Route | FormMode | Actions | devSlash |
|----|---------|---------|-------|----------|---------|----------|
| S-LIST | List | Full page · DES-GRID-A…D F H | `/mas/chuc-vu` | — | filter · refresh · history · config · create · row menu | `/agent-dev` |
| S-FORM | Form | Slideout DES-GRID-Z · `data-form-cols="2"` | routes trên | C/E/V/Copy | save · cancel · leave | `/agent-dev` |
| DES-LEAVE | Modal | LeaveConfirmModal | dirty ✕/Hủy | — | ở lại / rời | `/agent-dev` |

reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html`  
peerStdUrl: `file:///D:/AI-Rules/Linm.Development.Rules/common/skill/agent-design/example/shared-grid-example.html`

## ssot.reuse

```yaml
ssot.reuse:
  design_zones: DES-GRID-A,B,C0,C1,C2,C2a,C3,D,F,H,Z,LEAVE
  design_example: agent-design/example/shared-grid-example
  package: "@linm-soft-org/linm-web-common-components"
  ui_page: LinPageLayout (kind=catalog)          # DES-GRID-A
  ui_toolbar: catalogToolbar / buildCatalogListToolbarActions  # DES-GRID-B
  ui_filter: LinErpListFilterBar · T-UI-FILTER-01 · docs/context/features/job-title-filter-bar.md  # DES-GRID-C1
  ui_grid: LinCatalogDataGrid                    # DES-GRID-C2
  ui_grid_flow: useLinCatalogColumnFilterSort    # DES-GRID-C2a
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems  # DES-GRID-C3
  ui_footer: LinCatalogListPagination            # DES-GRID-D
  ui_config: LinCatalogUiSchemaEditorModal       # DES-GRID-F
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal  # DES-GRID-H
  ui_form: Slideout 2 cột + footer only          # DES-GRID-Z
  ui_leave: LeaveConfirmModal + useLeaveConfirm  # DES-LEAVE
  http: apiClient · unwrap · FE BASE /integration/job-titles
  auth: Linm.Platform.Authentication · master.job-titles.*
  be: Linm.Platform.CommonLib ApiResponse · ISharedMasterCatalogEntity
  cấm: local table/pager · ErpListHeaderFilters · LinListFilterField · KIND_LABEL · window.alert/confirm · ERP.*
```

## implement.wire / state (feature)

| Surface | Wire | State |
|---------|------|-------|
| List | GET API-01 `search` · `titleGroup` · `page` · `pageSize` · `isActive?` | `items` · `totalCount` · `page` · `pageSize` (default 50) · `search` · `titleGroup` · `activeRow` · `schema` |
| Filter đổi | reset `page=1` rồi GET API-01 | query keys = context §1 |
| Init | GET API-03 trước Dropdown filter + form | `titleGroups` · `packageHints` · `titleGroupPackageMap` |
| Create | POST API-05 | FormMode `create` · slideout open · dirty |
| Edit | GET API-04 → PUT API-06 (không gửi `code`) | FormMode `edit` · code readonly |
| View | GET API-04 · xco get_only | FormMode `view` · readOnly · footer chỉ Đóng/Hủy |
| Copy | GET API-04 → POST API-05 (code mới GenerateAsync) | FormMode `copy` |
| Delete | useAlert/Modal → DELETE API-07 (`IsActive=false`) | không `window.confirm` · 409 nếu consumer đang reference |
| Config | GET/PUT `/integration/catalogs/job-title/ui-schema` | `hasSavedOverride` bootstrap |
| History | `useCatalogHistoryModal` documentType=`job-title` | stacked nếu Slideout đang mở |
| BFF | proxy `web-bff/api/v1/integration/job-titles/**` | không business logic BFF |

## DES-GRID map

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Danh mục chức vụ» · `titleIconClass=fa-id-badge` · **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` FULL · `editConfig=fa-cog` · Thêm mới mép phải |
| DES-GRID-C0 | listTitle «Danh sách chức vụ» · `listRowMenuHelp` |
| DES-GRID-C1 | `LinErpListFilterBar` · `search` + `titleGroup` · 🔍 mép phải · **cấm** nút Tìm |
| DES-GRID-C2 | `LinCatalogDataGrid` · cột dynamic schema |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` · filter panel full-list |
| DES-GRID-C3 | `LinCatalogRowActionMenu` · Xem/Sửa/Sao chép/Lịch sử/Xóa |
| DES-GRID-D | `LinCatalogListPagination` · pageSize 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` full cột · resize default ON · filter/sort cột default OFF |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-GRID-Z | Slideout `data-form-cols="2"` · footer Hủy/Lưu · **cấm** `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` |

## Deps

```
T-PERM-01 ─┬─ T-BE-CRUD-01 ─┬─ T-SEED-01
T-DM-01    │                ├─ T-BFF-01 ─┐
           └─ T-BE-INIT-01 ─┤            │
T-BE-UISCHEMA-01 ───────────┴─ T-UI-FILTER-01
                               T-UI-LIST-01 ─┬─ T-UI-CFG-01
                                             ├─ T-UI-FORM-01 ─┬─ T-UI-LEAVE-01
                                             ├─ T-UI-ACT-01   ├─ T-UI-FIELD-01
                                             ├─ T-UI-HIST-01  ├─ T-UI-UX-01
                                             ├─ T-UI-PROD-01  └─ T-UI-RESP-01
                                             └─ T-UI-LKP-01
T-QA-*  ← queued /agent-qa* (e2eQa ON · TL không chạy)
```

BE (T-BE-*) **trước** T-UI-* — endpoint mới. QA không chạy trong role này.

## Out of pack (note — không task CRUD)

- GAP-JOB-02 / GAP-JOB-06: consumer `jobTitleCode` SearchInput trên staff `/admin/user` + ProfileTab — API-02 ship ở T-BE-CRUD-01 · **không** sửa page users trong feature này.
- GAP-JOB-01 / 03 / 04: alias Excel ngoài seed · Auth package CRUD · menu — ngoài core API.
- Report / chart / export / map / camera / tree: N/A.

---

### T-PERM-01 — Permission codes

**status:** pending · **role:** Dev · **devSlash:** `/agent-dev` · **deps:** none

**ssot.reuse:** Linm.Platform.Authentication · `RequirePermission` · FE `VITE_PERMISSIONS_LOCAL_MODE`

**implement.wire:**
- `master.job-titles.read` — API-01 · API-02 · API-03 · API-04
- `master.job-titles.create` — API-05
- `master.job-titles.update` — API-06
- `master.job-titles.delete` — API-07
- Toolbar/row menu gate cùng code (create/update/delete/read)

**implement.state:** perm flags trên toolbar + row menu · thiếu perm → ẩn action (không toast stub)

**DoD:** 4 code gắn controller + UI · không hardcode bypass ngoài local mode.

---

### T-DM-01 — DOMAIN-MAP note

**status:** pending · **role:** Dev · **deps:** none  
**path:** `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

**implement.wire:** row stub `job-title` → Integration · note LKP→CRUD · `share_a` · resource `job-titles` (GAP-JOB-DM-01). **Cấm** đổi domain sang ERP.

**DoD:** DOMAIN-MAP ghi CRUD catalog shared, không còn note lookup-only.

---

### T-BE-CRUD-01 — CRUD + search + detail

**status:** pending · **role:** Dev · **deps:** T-PERM-01  
**repo:** `D:/AI-QLBD/Linm.RMMS.WebService` · `Domains/Integration/` · `JobTitlesController`  
**skills:** CommonLib ApiResponse · `/implement-shared-table` · `/implement-view-cross-company` (API-04 only) · `/review-timezone-implement` (gate **tz_na** — không date filter)

**ssot.reuse:**
- entity `JobTitleEntity` : `ISharedMasterCatalogEntity` · table `rmms_job_titles`
- UK `code` · columns `id` · `code` · `name` · `title_group` · `package_hint` · `legacy_aliases` (scalar text) · `is_active` · `sort_order` · audit/tenant shared
- **cấm** parent `*Json` / `*LinesJson` · **cấm** Guid làm mã nghiệp vụ
- code create: `IIdCodeService.GenerateAsync` nếu body thiếu `code` · edit **lock** (PUT không đổi code)

**implement.wire:**

| id | Method | Path | Perm | Body / query |
|----|--------|------|------|----------------|
| API-01 | GET | `/api/v1/integration/job-titles` | read | `search?` `titleGroup?` `page` `pageSize` `isActive?` → paged DTO |
| API-02 | GET | `…/search` | read | `search` `page` `pageSize` `excludeCode?` `titleGroup?` → `{code,name,titleGroup,packageHint,isSelectable}` |
| API-04 | GET | `…/{id}` | read | Guid · **xco_get_only** AllowedCompanyIds · shared Scope |
| API-05 | POST | `…/` | create | `code?` `name*` `titleGroup*` `packageHint*` `legacyAliases?` `isActive?` · 409 trùng code · 422 |
| API-06 | PUT | `…/{id}` | update | `name*` `titleGroup*` `packageHint*` `legacyAliases?` `isActive` — **không** `code` |
| API-07 | DELETE | `…/{id}` | delete | soft `IsActive=false` · 409 nếu consumer reference |

**implement.state:** paged list · detail DTO · validation errors 422/409/404. packageHint default từ `titleGroupPackageMap` (LEAD→`MANAGER-RMMS` · TECH/PATROL→`RMMS-TDTK`) khi client không gửi — client vẫn được override.

**DoD:** API-01…07 trừ init (T-BE-INIT-01) · migration `Schema_RmmsJobTitles` do Dev (TL không chạy migration) · response `ApiResponse`.

---

### T-BE-INIT-01 — init-data

**status:** pending · **role:** Dev · **deps:** T-BE-CRUD-01  
**skills:** `tl-dropdown-from-backend`

**implement.wire:** API-03 GET `/api/v1/integration/job-titles/init-data` · perm `master.job-titles.read`  
Response: `{ titleGroups:[{value,label}], packageHints:[{value,label}], titleGroupPackageMap:{ LEAD:MANAGER-RMMS, TECH:RMMS-TDTK, PATROL:RMMS-TDTK } }`  
Labels: LEAD=Lãnh đạo · TECH=Kỹ thuật · PATROL=Tuần kiểm.

**implement.state:** options chỉ từ endpoint này. **Cấm** `KIND_LABEL` / enum FE (GAP-DEV-DROPDOWN-HARDCODE-01 · GAP-TL-DROPDOWN-01).

**DoD:** filter `titleGroup` + form `titleGroup`/`packageHint` bind init-data.

---

### T-SEED-01 — Seed catalog

**status:** pending · **role:** Dev · **deps:** T-BE-CRUD-01  
**source:** `D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json` (~19)

**implement.wire:** migration/CatalogHandler Up nạp seed vào `rmms_job_titles`. Sample `HAT-TRUONG` / Hạt trưởng / LEAD / MANAGER-RMMS. **Cấm** `demoItems` FE (GAP-JOB-05).

**DoD:** DB có seed · list API trả row thật · FE không nhúng JSON demo.

---

### T-BFF-01 — BFF proxy

**status:** pending · **role:** Dev · **deps:** T-BE-CRUD-01  
**path:** `bff/domains/integration/…`

**implement.wire:** proxy-only `web-bff/api/v1/integration/job-titles/**` → API host. FE `apiClient` BASE `/integration/job-titles`. **Cấm** map/validate business trên BFF.

**DoD:** list/init/CRUD đi qua BFF · không endpoint `open-api` / `api/v1/rmms/*`.

---

### T-BE-UISCHEMA-01 — Catalog UI schema

**status:** pending · **role:** Dev · **deps:** none (song song BE) · trước T-UI-LIST-01  
**skills:** `/implement-catalog-ui-schema-registry`

**implement.wire:**
- `CatalogUiSchemaRegistry` + seed `{catalogKind}=job-title`
- GET/PUT `/integration/catalogs/job-title/ui-schema`
- fields: `code` `name` `titleGroup` `packageHint` `isActive` (+ `sortOrder` optional, default ẩn)
- bootstrap: `hasSavedOverride!==true` → gen từ `uiColumns` → PUT `bootstrapFromUi:true`

**implement.state:** schema.list order/visible/width. Filter/sort **từng cột default OFF**.

**DoD:** editor mở được · không Zone F-only (GAP-P2-CC-06 · GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01).

---

### T-UI-FILTER-01 — List filter bar

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-BE-CRUD-01 · T-BE-INIT-01

**skills (REQUIRED load trước Write):**
- `/filter-bar-context` · `/erp-filter-form` · `filter-bar-pipeline.md` · `filter-bar-layout-hard.md`
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title-filter-bar.md`  
  File **chưa có**. Dev chạy `/filter-bar-context` `mode=context_only` **trước Write** page, fields **đúng bảng dưới** (cấm tự bịa).

**ssot.reuse:**
- `ui_filter`: `LinErpListFilterBar` · fragment leading · `data-lin-list-layout="erp-filter-bar"`
- `ui_layout`: title trái · field lấp hàng (`flex 1 1 180px`) rồi wrap · 🔍 mép phải (V10) · GAP-FILTER-WRAP-02
- `init_data`: `titleGroup` từ API-03 only
- query keys: `search` · `titleGroup`

**Fields (1:1 context §1):**

| slot | uiField | label | control | query |
|------|---------|-------|---------|-------|
| 1 | titleGroup | Nhóm chức vụ | Dropdown | `titleGroup` |
| 2 | search | Tìm kiếm | SearchTextInput (mã · tên · alias CI) | `search` |

Không from/to (tz_na). Catalog date = empty · **cấm** default Hôm nay.

**implement.filter:**
- bar: `LinErpListFilterBar` · `onSearch` trên bar (🔍)
- leading: fragment — **cấm** wrapper cả block
- **cấm:** `ErpListHeaderFilters` · `LinListFilterField` · `filterMaxWidthPx` · export/print trên bar · `SearchTextInput` `onSearch` riêng · nút Tìm · grid 3 cột hàng loạt · «SearchTextInput only»

**implement.state:** đổi filter → `page=1` → API-01.

**DoD:**
- [ ] Context file tồn tại · fields 1:1 bảng trên
- [ ] V1–V5 + V10 PASS trên `mfeStdUrl` (🔍 mép phải card · lấp hàng rồi wrap)
- [ ] Query `search` + `titleGroup` work
- [ ] `rg` 0 `ErpListHeaderFilters` / `LinListFilterField` trên page

---

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-BE-CRUD-01 · T-BE-UISCHEMA-01 · T-BFF-01 · T-UI-FILTER-01

**skills (REQUIRED load trước Write):**
- `/agent-dev` · `tl-design-grid-component-map` · `tl-grid-ssot` · `tl-grid-full-flow` · `tl-catalog-list-parity` · `tl-list-shell-height`
- design_zones: DES-GRID-A B C0 C1 C2 C2a C3 D F H (không T)
- `/erp-form-context` · `/review-grid` · `/erp-filter-form` · `/filter-bar-context` · T-UI-FILTER-01
- `/lin-list-table-config-modal` · `/implement-catalog-list-toolbar` · `/implement-history`
- `/implement-catalog-ui-schema-registry` (FE bootstrap)
- form_pair → T-UI-FORM-01 + `dev-form-review-checklist`
- **không** `/implement-tree-master`

**ssot.reuse:**
- ui_page: `LinPageLayout` (kind=catalog) · `data-catalog-list-page` · flex root
- ui_filter: `LinErpListFilterBar` · T-UI-FILTER-01 · `job-title-filter-bar.md`
- ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · `fa-cog`
- ui_grid: `LinCatalogDataGrid`
- ui_footer: `LinCatalogListPagination` ONLY — cấm `footerPagination` · `pageSizeBar` · local `*Pagination*`
- ui_config: `LinCatalogUiSchemaEditorModal`
- ui_row: `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` · `listRowMenuHelp` (GAP-P2-94)
- ui_history: `LinCatalogHistoryModal` + `useCatalogHistoryModal` · stacked · `dev-history-alert-overlay`
- ui_load: `useServerPagedListLoading` · `CatalogTableSkeleton` (filter) · overlay (page)
- ui_grid_flow: `useLinCatalogColumnFilterSort` · `useErpListSelection` · `filterSourceRows=full`
- http: `apiClient` · unwrap
- grid: no local table/pager/clone · resizable default ON
- perm: `master.job-titles.*`

**implement.page_shell:**
- layout: page root `flex:1; min-height:0` · standalone `--app-height`
- shell: 1× `LinPageLayout` — **cấm** nested `CatalogListShell` trong children
- header: title «Danh mục chức vụ» · `titleIconClass=fa-id-badge` · `pageId=job-title`
- filterBarLayout: `standard` · **cấm** `filterMaxWidthPx` (T-UI-FILTER-01 thắng template ≤1000)
- listTitle: «Danh sách chức vụ»
- footer: `<LinCatalogListPagination testIdPrefix page pageSize totalCount onPageChange onPageSizeChange />` · options 50/100/200/500

**implement.toolbar:**
- wire: `catalogToolbar` trên `LinPageLayout` — `buildCatalogListToolbarActions`
- actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig
- selection: showEdit/onEdit · showView/onView · canDelete/onDelete (activeRow + perm)
- form_pair: onAdd→Create · onEdit/onView→FormMode · cùng T-UI-FORM-01
- **cấm** thiếu Create/Refresh/Config · History stub · icon lệch `erp-control-icon-map` · Thêm mới trên header A

**implement.grid:**
- component: `LinCatalogDataGrid`
- columns: `buildDynamicGridColumns(schema, uiColumns)` — **cấm** leftover `const columns` / `LinCatalogDataColumn`
- visible default: Mã chức vụ · Tên chức vụ · Nhóm · Package gợi ý · Hiệu lực (+ chrome STT · checkbox · menu)
- tableConfig: `catalogListTableConfigFromSchema(schema.list)`
- resizable: DEFAULT true — **cấm** `resizable:false` init (GAP-DEV-GRID-RESIZE-01)
- selection: `useErpListSelection` sync toolbar
- empty: empty state trong grid wrap (không blank 0px) khi `items:[]`

**implement.grid_menu:**
- `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems`
- open: `onRowOpenActionMenu` · dbl/Ctrl/long-press · `listRowMenuHelp`
- items: view · edit · copy · history · delete (perm)
- history: `useCatalogHistoryModal` documentType=`job-title` id/code
- **cấm** local `CatalogRowActionMenu`

**implement.config:**
- mode: ui-schema · kind=`job-title`
- editor: `LinCatalogUiSchemaEditorModal` — List/width/filter/sort/Thêm cột
- resize default ON · filter/sort cột default OFF (`showFilter`/`allowSort=false`) — cấm bật hàng loạt
- **cấm** Zone F-only · `configHint` · toast «chưa làm»

**implement.grid_flow:**
- `useLinCatalogColumnFilterSort` trên FULL list rồi page — **cấm** chỉ trang hiện tại
- filter panel: search · checkbox Chọn tất cả · Đã chọn N · Confirm = visible∩checked khi đang search
- paginate server (API-01) · footer `LinCatalogListPagination`
- loading: `useServerPagedListLoading` + `CatalogTableSkeleton`

**implement.list_parity:**
- pilot_ux: DoiTuongPage (behavior) — **không** copy file ERP
- layout: flex-root + **GAP-P2-LAYOUT-06 live smoke** (không DEFER)
- filter: `LinErpListFilterBar` (search + titleGroup) — không nút Tìm · không SearchTextInput-only
- footer: `LinCatalogListPagination` (common ONLY)
- tree: **none**

**implement.init_data:** Dropdown `titleGroup` = API-03 only.

**Shell height (GAP-P2-LAYOUT-06) — DoD live, cấm chỉ ghi «flex root»:**
- `AppLayout.module.css` standalone: `height` + `max-height: calc(var(--app-height, 100dvh) − topbar)` · flex column · `overflow:hidden` · `min-height:0` — fail nếu chỉ `min-height`
- `StandaloneShell.module.css`: definite `height` — **cấm** chỉ `min-height: 100vh`
- `.content:has([data-catalog-list-page])` flex fill
- page root `data-catalog-list-page` + `height:100%` / `flex:1` / `min-height:0`
- Live `mfeStdUrl`: thấy title + toolbar + filter + grid **hoặc** empty state — fail màn trắng / title cắt pixel

**DoD:**
- [ ] 1× `LinPageLayout` catalog · grid visible khi API có data
- [ ] Toolbar FULL refresh·create·config·history·selection edit/view/delete
- [ ] `LinCatalogDataGrid` dynamic cols · 0 raw `<table>`
- [ ] Row menu common + history modal · GAP-P2-94
- [ ] Config = `LinCatalogUiSchemaEditorModal` · kéo cột ON · filter/sort cột OFF
- [ ] Grid flow full-list · footer common only
- [ ] Filter = T-UI-FILTER-01 (không nút Tìm)
- [ ] Loading skeleton + overlay
- [ ] Form pair Create/Edit/View/Copy từ toolbar+menu
- [ ] Live shell height PASS · `rg` anti-clone PASS
- [ ] `yarn build` là Dev — **không** TL

---

### T-UI-CFG-01 — Sửa config full cột

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-BE-UISCHEMA-01 · T-UI-LIST-01

**ssot.reuse:** `LinCatalogUiSchemaEditorModal` · kind `job-title`

**implement.wire:** toolbar `onEditConfig` mở editor full cột (List / width / filter / sort / Thêm cột) · save PUT ui-schema · grid rebind `buildDynamicGridColumns`.

**implement.state:** `schema` sau save · `hasSavedOverride=true` không bootstrap đè.

**DoD:** không `configHint` · không modal chỉ Zone F (GAP-P2-CC-06).

---

### T-UI-FORM-01 — Slideout Create / Edit / View / Copy

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-UI-LIST-01  
**skills:** `dev-form-review-checklist` · `form-field-grid.md` · `/erp-form-context`  
**pattern:** Slideout · `data-form-cols="2"` · footer only · **cấm** Full page 5 cột · **cấm** nút Quay lại header (GAP-P2-FORM-GRID-05)

**ssot.reuse:** common Slideout · Dropdown init-data · `LeaveConfirmModal` (T-UI-LEAVE-01)

**implement.wire:**

| Mode | Open | Load | Save | Badge |
|------|------|------|------|-------|
| create | toolbar + `/mas/chuc-vu/tao-moi` | API-03 | POST API-05 | Tạo mới |
| edit | toolbar/menu + `/sua?id=` | API-04 + API-03 | PUT API-06 | Sửa |
| view | toolbar/menu + `/{id}` | API-04 | none · footer Đóng/Hủy | Xem |
| copy | row menu Sao chép | API-04 | POST API-05 · code mới | Sao chép |

Fields:

| uiField | Label | Control | Required | Lock |
|---------|-------|---------|----------|------|
| code | Mã chức vụ | Text code | * create | edit/view readonly · cấm Guid · GenerateAsync nếu trống |
| name | Tên chức vụ | Text | * | view readOnly |
| titleGroup | Nhóm | Dropdown | * | view readOnly · đổi → default packageHint từ map (user override được) |
| packageHint | Package gợi ý | Dropdown | * | view readOnly · cấm invent Cục/VP |
| legacyAliases | Alias Excel | Text/tags | | view readOnly |
| isActive | Hiệu lực | Switch | | view readOnly |

Layout body: Mã | Nhóm · Tên wide · Package wide · Alias wide · Hiệu lực.  
View: `readOnly` / `.viewDisabled` — **cấm** disabled xám.

**implement.state:** `formMode` · `draft` · `dirty` · `saving` · `fieldErrors` · slideout open độc lập list selection.

**DoD:** `dev-form-review-checklist` Slideout 0b · submit UI value = body · edit không gửi `code` · deep-link mở Slideout trên list (không rời page).

---

### T-UI-LEAVE-01 — Dirty leave

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-FORM-01  
**skills:** `/implement-show-leave-confirm`

**ssot.reuse:** `LeaveConfirmModal` · slideout `useLeaveConfirm` (không `useFormLeaveGuard` — đó là full page)

**implement.wire:** dirty + ✕ / Hủy / đổi route deep-link → modal Ở lại / Rời đi. Clean → đóng ngay. Delete/block dùng `useAlert` / Modal — **cấm** `window.alert` / `confirm` / `prompt` (GAP-TL-LEAVE-01 · GAP-DEV-LEAVE-01 · GAP-DEV-ALERT-01 · GAP-P2-36).

**implement.state:** `dirty` so draft vs loaded. View mode không dirty-guard.

**DoD:** prototype DES-LEAVE · 0 native dialog.

---

### T-UI-ACT-01 — Action inventory

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-LIST-01 · T-UI-FORM-01

**implement.wire:** mọi action có handler — không nút chết (GAP-P2-ACT-*):

| Action | Handler |
|--------|---------|
| 🔍 filter | API-01 |
| Làm mới | refetch API-01 |
| Lịch sử | T-UI-HIST-01 |
| Sửa config | T-UI-CFG-01 |
| Thêm mới | FormMode create |
| Xem / Sửa | FormMode view / edit (selection hoặc row) |
| Sao chép | FormMode copy |
| Xóa | useAlert → API-07 |
| Lưu | API-05 hoặc API-06 |
| Hủy / ✕ | T-UI-LEAVE-01 |

**implement.state:** selection `activeRow` bật Xem/Sửa/Xóa toolbar.

**DoD:** không action stub / toast «chưa làm».

---

### T-UI-LKP-01 — Lookup scan

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-BE-CRUD-01

**implement.wire:**
- Catalog form + filter: **không** SearchInput. `titleGroup` / `packageHint` = Dropdown API-03.
- API-02 GET `/search` cho peer `jobTitleCode` (catalogKind `job-title`). **Không** sửa `/admin/user` / ProfileTab trong task này (GAP-JOB-02/06 non-blocking).
- **Cấm** free Text cho `jobTitleCode` ở consumer sau này · **cấm** Text lookup trên form catalog (GAP-LIST-LKP-01).

**DoD:** form catalog không SearchInput · API-02 contract đúng SA.

---

### T-UI-FIELD-01 — Field ↔ DTO

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-FORM-01

**implement.wire:** uiField → dto → db đúng SA field map (`code`/`Code`/`code` · `name` · `titleGroup`/`title_group` · `packageHint`/`package_hint` · `legacyAliases`/`legacy_aliases` · `isActive`/`is_active`). Control = controlHint (không đổi Text↔Dropdown).

**implement.state:** form draft keys = dto camelCase.

**DoD:** GAP-LIST-FIELD-01 đóng · không field thừa Cục/VP.

---

### T-UI-PROD-01 — End-user chrome

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-LIST-01  
**skills:** `demo-to-real-enduser`

**implement.wire:** UI tiếng Việt § Design. **Cấm** note Dev, seed badge, demo chrome, `demoItems`.

**DoD:** page trống/có data đều là UI vận hành.

---

### T-UI-UX-01 — Form grid + constitution

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-FORM-01  
**skills:** `dev-ui-ux-constitution` · `form-field-grid.md`

**implement.wire:** Slideout **2 cột** `data-form-cols="2"` + footer Hủy/Lưu. **Cấm** 5 cột · **cấm** footer-only ghi nhầm Full page.

**DoD:** GAP-DEV-UX-01 / GAP-P2-FORM-GRID-01 / GAP-P2-FORM-GRID-05 không phát sinh.

---

### T-UI-RESP-01 — Responsive

**status:** pending · **devSlash:** `/agent-dev` + `/dev-web-responsive` + `/dev-ui-review` · **deps:** T-UI-LIST-01 · T-UI-FORM-01

**implement.wire:** Desktop+Tablet **1 layout** · Mobile Web **không** shrink · verify 1280 / 768 / 375.

**DoD:** GAP-DEV-UX-RESP-* / GAP-DEV-UX-REVIEW-01. Verify thuộc Dev — không TL `start:std`.

---

### T-UI-HIST-01 — History + overlay

**status:** pending · **devSlash:** `/agent-dev` · **deps:** T-UI-LIST-01  
**skills:** `/implement-history` · `dev-history-alert-overlay`

**ssot.reuse:** `LinCatalogHistoryModal` + `useCatalogHistoryModal` · documentType=`job-title`

**implement.wire:** toolbar Lịch sử + row menu. Slideout đang mở → history `stacked`. **Cấm** clone `DocumentHistoryModal` · **cấm** `window.alert`.

**implement.state:** `historyOpen` · `historyId` không xoá `formMode`.

**DoD:** timeline theo mã · 0 native dialog (GAP-DEV-HIST-*).

---

### T-CTX-01 — Context verify

**status:** pending · **role:** Dev · **deps:** none  
**path:** `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title.md` (đã có)

**implement.wire:** đọc CTX · không bịa field · không re-scan demo (DEM N/A). Filter context tạo ở T-UI-FILTER-01.

**DoD:** page fields ⊆ CTX + Design §3.

---

### T-QA-CRUD-01 — QA CRUD

**status:** pending · **role:** QA · **devSlash:** `/agent-qa*` · **deps:** T-UI-ACT-01 · T-UI-LEAVE-01 · T-SEED-01  
**e2e:** queued — **TL không chạy e2e / start:std / không viết scenario.**

Gate: Create→Edit→View→Delete + row menu + Sửa config = bảng cột + dirty leave = Modal. QA tự viết scenario.

---

### T-QA-FORM-01 — QA form fields

**status:** pending · **role:** QA · **deps:** T-UI-FORM-01 · T-UI-FIELD-01

Gate: từng field required/min (code, name, titleGroup, packageHint) · submit UI value = request body · edit body không có `code` · `form-field-e2e.md`. **Cấm** TL viết scenario (GAP-QA-FORM-FIELD-01 / GAP-QA-FORM-BODY-01).

---

### T-QA-FILTER-01 — QA filter live

**status:** pending · **role:** QA · **deps:** T-UI-FILTER-01

Gate: V1–V5 + V10 live `mfeStdUrl` · fields 1:1 `job-title-filter-bar.md` · 🔍 mép phải · fail grep-only / stack / 2 nút Tìm / export trên bar. **Cấm** TL viết scenario.

---

### T-QA-FILTER-02 — QA filter D+T+M

**status:** pending · **role:** QA · **deps:** T-UI-FILTER-01 · T-UI-RESP-01

Gate: headed 1280 + 768 + 375 · `filter-bar-dtm-gate.md` · fail lệch D hoặc leak M (GAP-QA-FILTER-DTM-01). **Cấm** TL viết scenario.

---

### T-QA-TYP-01 — Typography

**status:** pending · **role:** QA · **deps:** T-UI-UX-01  
**skills:** `typography-analy-qa.md`

Gate: label 13 · input D14 / M16 · GAP-TYP-01. **Cấm** TL viết scenario.

---

### T-QA-TAB-01 — Tab index

**status:** pending · **role:** QA · **deps:** T-UI-FORM-01 · T-UI-FILTER-01  
**skills:** `tab-index-analy-review.md`

Gate: thứ tự tab filter rồi form · GAP-TAB-01. **Cấm** TL viết scenario.

---

## DoD (TL)

- [x] `route_confirm` — `/mas/chuc-vu` (URL không mới · Autopilot · viết tắt VN)
- [x] Mọi task UI/API: `ssot.reuse` + wire + state
- [x] formType `master` pack §2a đủ id + `devSlash=/agent-dev`
- [x] Kind B: map DES-GRID → Lin* + canonical grid task + full-flow + shell height live DoD
- [x] T-UI-FILTER-01 + T-QA-FILTER-01 + T-QA-FILTER-02
- [x] T-UI-FORM-01 + T-UI-ACT-01 + T-UI-LEAVE-01
- [x] Dropdown init-data only
- [x] Không tree · không clone control · không task ERP
- [x] Retry TL: n/a
