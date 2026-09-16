# Team-lead — nghiem-thu (Công tác nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| packKind | `list` |
| featureKind | `B` |
| changeScope | `new_page` |
| formPattern | **Full page** · `data-form-cols="5"` |
| runMode | `full_pipeline` |
| taskId | `task_9bf1287f` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · `task_25cd95bb` |
| prior · design | `confirmed` · `ui/design.md` + reviewUrl · `task_16791ccc` |
| prior · po | `confirmed` · `po/requirement.md` · `task_8d642b15` |
| prior · data_analy | `confirmed` · control-hint + real-data · `task_01b899ee` |
| updatedAt | `2026-09-12T09:27:42.000Z` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` only · **cấm** e2e ở TL |

> TL emit đủ **form-type-task-pack §2a** + **list-form-quality-gates** + grid/filter Leave.  
> **Cấm** ERP.* · **cấm** maintenance WO · **cấm** sessions reuse · lane **web** only.  
> Peer clone UX: `http://localhost:9304/patrol` · **không** copy ERP file.

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** | `be_repo_confirm=approve` |
| Routes | `mfeStdRoute=/nghiem-thu` · form `/nghiem-thu/new` · `/nghiem-thu/:id` | **`route_confirm=approve`** (autoApprove · A) |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` (Dev set live) | draft OK |
| API | `api/v1/patrol/nghiem-thu` | SA CLOSED |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` | proxy-only |
| Files | `web-bff/api/v1/files/*` · FileService reuse | **cấm** invent file API |
| Perm | `patrol.nghiem-thu.read` · `patrol.nghiem-thu.write` | T-PERM-01 |
| catalogKind | `nghiem-thu` | ui-schema registry |
| peerStdUrl | `http://localhost:9304/patrol` | clone ref |

### route_confirm

| Option | Path | Chọn |
|--------|------|------|
| A | `/nghiem-thu` | **✅ autoApprove** |
| B | `/cong-tac-nghiem-thu` | — |
| C | URL mới | — |

`source.routes` = `/nghiem-thu` · `/nghiem-thu/new` · `/nghiem-thu/:id`

## DES-GRID → Lin\* (`tl-design-grid-component-map`)

| Zone | Component | Task |
|------|-----------|------|
| DES-GRID-A | `LinPageLayout` header · title «Nghiệm thu» · FA icon | `implement.page_shell` |
| DES-GRID-B | `catalogToolbar` FULL · `buildCatalogListToolbarActions` · fa-cog | `implement.toolbar` |
| DES-GRID-C0 | listTitle «Danh sách nghiệm thu» · `listRowMenuHelp` | page_shell · grid_menu |
| DES-GRID-C2a / FILTER | **`LinErpListFilterBar`** · T-UI-FILTER-01 · `nghiem-thu-filter-bar.md` | `implement.filter` |
| DES-GRID-C | `LinCatalogDataGrid` · dynamic cols | `implement.grid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` | `implement.grid_flow` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` | `implement.grid_menu` |
| DES-GRID-D | `LinCatalogListPagination` ONLY | page_shell footer |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` full cột | `implement.config` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` | history |
| DES-GRID-Z | Full page form · `data-form-cols="5"` + header chrome | T-UI-FORM-01 |
| DES-NT-UPLOAD | FileMulti · FileService guid · resign | T-UI-FORM-01 · API-FILE |
| DES-LEAVE | `LeaveConfirmModal` · **cấm** native confirm | T-UI-LEAVE-01 |
| Tree | n/a | — |

**Map PASS** → **GAP-TL-GRID-MAP-01** closed.

## Tasks (canonical — `form-type-task-pack` §2a)

| id | layer | Role | Status | deps | devSlash | DoD (tóm tắt) |
|----|-------|------|--------|------|----------|---------------|
| T-PERM-01 | ui+api | Dev | pending | — | `/agent-dev` | `patrol.nghiem-thu.read\|write` FE+BE · local mode OK |
| T-BE-MIG-01 | api | Dev | pending | — | `/agent-dev` | Migration **Schema_NghiemThu** · entity `NghiemThu` + child `NghiemThuMedia` · mediaIds guid[] **not** JSON · TZ/XCO/SHARE=tenant_keep |
| T-BE-CRUD-01 | api | Dev | pending | T-BE-MIG-01 · T-PERM-01 | `/agent-dev` | API-00…05 · list/search/page · getById · create · update · delete · FormMode↔API SA |
| T-BE-INIT-01 | api | Dev | pending | T-BE-CRUD-01 | `/agent-dev` | `GET …/init-data` · status 4 · templateType mau-01…10 · **cấm** KIND_LABEL FE |
| T-BE-UISCHEMA-01 | api | Dev | pending | T-BE-CRUD-01 | `/agent-dev` | Registry+seed `catalogKind=nghiem-thu` · GET/PUT `/integration/catalogs/nghiem-thu/ui-schema` |
| T-BFF-01 | bff | Dev | pending | T-BE-CRUD-01 | `/agent-dev` | Proxy `web-bff/api/v1/patrol/nghiem-thu` · QueryString passthrough · **cấm** ERP |
| T-FE-API-01 | ui | Dev | pending | T-BFF-01 | `/agent-dev` | Service+endpoint Field MFE · unwrap apiClient |
| T-UI-LIST-01 | ui | Dev | pending | T-FE-API-01 · T-PERM-01 · T-BE-UISCHEMA-01 | `/agent-dev` | Paste § Canonical dưới · shell height GAP-P2-LAYOUT-06 |
| T-UI-FILTER-01 | ui | Dev | pending | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | `nghiem-thu-filter-bar.md` · V1–V10 · lấp hàng rồi wrap · 🔍 mép phải |
| T-UI-CFG-01 | ui | Dev | pending | T-UI-LIST-01 | `/agent-dev` | Editor full cột · **cấm** Zone F-only / configHint |
| T-UI-FORM-01 | ui | Dev | pending | T-UI-LIST-01 · T-BE-CRUD-01 | `/agent-dev` | Full page C/E/V/Copy · 5 cột · DES-NT-UPLOAD FileService |
| T-UI-LEAVE-01 | ui | Dev | pending | T-UI-FORM-01 | `/agent-dev` | `LeaveConfirmModal` · useFormLeaveGuard · **cấm** window.confirm |
| T-UI-ACT-01 | ui | Dev | pending | T-UI-FORM-01 | `/agent-dev` | Mọi action → form/API (inventory dưới) |
| T-UI-LKP-01 | ui | Dev | pending | T-UI-FORM-01 · T-UI-FILTER-01 | `/agent-dev` | road-route · org-unit · enum init-data |
| T-UI-FIELD-01 | ui | Dev | pending | T-UI-LKP-01 | `/agent-dev` | controlHint↔DTO (bảng dưới) |
| T-UI-PROD-01 | ui | Dev | pending | T-UI-FORM-01 | `/agent-dev` | End-user only · **cấm** note Dev/GAP/SSOT trên UI |
| T-UI-UX-01 | ui | Dev | pending | T-UI-PROD-01 | `/agent-dev` | `dev-ui-ux-constitution` · Full 5 cột · spacing 4/8/16 |
| T-UI-RESP-01 | ui | Dev | pending | T-UI-UX-01 | `/dev-web-responsive` · `/dev-ui-review` | 1280/768/375 · 1 layout D+T |
| T-UI-HIST-01 | ui | Dev | pending | T-UI-LIST-01 | `/agent-dev` | History modal · **cấm** alert · stacked overlay |
| T-QA-CRUD-01 | qa | QA | pending | all T-UI + T-BE | `/agent-qa` | Create→Edit→View→Delete · row menu · config · leave Modal |
| T-QA-FORM-01 | qa | QA | pending | T-UI-FORM-01 | `/agent-qa` | Từng field · body = UI value |
| T-QA-FILTER-01 | qa | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5+V10 live mfeStdUrl · filter-bar.md 1:1 |
| T-QA-FILTER-02 | qa | QA | pending | T-QA-FILTER-01 | `/agent-qa` | Headed 1280+768+375 · DTM gate |

**devSlash chính:** `/agent-dev` (list/form) · responsive `/dev-web-responsive` + `/dev-ui-review`.  
**GAP-TL-FORMTYPE-01 / GAP-TL-DEV-ASSIGN-01 / GAP-TL-FILTER-01 / GAP-TL-LEAVE-01:** closed by pack above.

---

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height
  - design_zones: DES-GRID-A…D · C2a · C3 · F · H · Z
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - /implement-catalog-ui-schema-registry (BE) · FE bootstrap
  - form_pair → T-UI-FORM + dev-form-review-checklist
  - /implement-show-leave-confirm · /integrate-file-upload-web (DES-NT-UPLOAD)

**ssot.reuse:**
  design_zones: DES-GRID-A,B,C0,C1/FILTER,C2,C2a,C3,D,F,H,Z
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar · **T-UI-FILTER-01** · `specs/_data-analy/features/nghiem-thu-filter-bar.md` — cấm ErpListHeaderFilters / LinListFilterField / nút Tìm
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · fa-cog
  ui_grid: LinCatalogDataGrid (PREFERRED)
  ui_footer: LinCatalogListPagination ONLY — cấm footerPagination · pageSizeBar · local *Pagination*
  ui_config: LinCatalogUiSchemaEditorModal (Kind B)
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal · cấm window.alert
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient · unwrap — cấm clone ApiClient
  grid: no local table/pager/clone · resizable default ON
  files: FileService `web-bff/api/v1/files/*` only

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: title «Nghiệm thu» + titleIconClass + pageId
  filterBarLayout: standard · **cấm** filterMaxWidthPx lệch SSOT
  listTitle: «Danh sách nghiệm thu»
  footer: `<LinCatalogListPagination testIdPrefix page pageSize totalCount onPageChange onPageSizeChange />`
  smoke: live title+toolbar+grid/empty visible — **cấm** DEFER GAP-P2-LAYOUT-06

**implement.toolbar:** (tl-grid-full-flow §1)
  wire: catalogToolbar trên LinPageLayout — buildCatalogListToolbarActions
  actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig
  selection: showEdit/onEdit · showView/onView · canDelete/onDelete
  form_pair: onAdd→`/nghiem-thu/new` · onEdit/onView→`/nghiem-thu/:id`
  cấm: thiếu Create/Refresh/Config · History stub · icon lệch erp-control-icon-map

**implement.grid:**
  component: LinCatalogDataGrid
  columns: buildDynamicGridColumns(schema, uiColumns) — cấm leftover `const columns`
  tableConfig: catalogListTableConfigFromSchema · resizable DEFAULT true
  selection: useErpListSelection
  empty: empty state trong grid wrap

**implement.grid_menu:**
  component: LinCatalogRowActionMenu + buildCatalogRowMenuItems
  open: onRowOpenActionMenu · dbl/Ctrl · listRowMenuHelp
  items: view·edit·copy·history·delete (perm gate)
  history: useCatalogHistoryModal

**implement.config:**
  mode: ui-schema · kind=`nghiem-thu`
  editor: LinCatalogUiSchemaEditorModal — List/width/filter/sort/Thêm cột
  filter_sort: default OFF mỗi cột
  cấm: Zone F-only · configHint · toast «chưa làm»

**implement.grid_flow:**
  hook: useLinCatalogColumnFilterSort
  source: filter/sort FULL list rồi page
  filter_panel: search · Chọn tất cả · Đã chọn N · Confirm
  loading: useServerPagedListLoading + CatalogTableSkeleton

**implement.init_data:**
  options: GET `…/patrol/nghiem-thu/init-data` only — cấm KIND_LABEL

**DoD (Dev):**
- [ ] LinPageLayout catalog · 1 shell · data-catalog-list-page · GAP-P2-LAYOUT-06 smoke
- [ ] Toolbar FULL · Grid LinCatalogDataGrid · menu · Config ui-schema · grid_flow
- [ ] Footer LinCatalogListPagination · 0 local pager
- [ ] Form pair routes `/nghiem-thu/new` · `/:id`
- [ ] `rg` anti-clone PASS · yarn build (Dev role) · mfeStdUrl

**Fail:** GAP-TL-GRID-TASK-01 · GAP-TL-GRID-FLOW-01 · GAP-DEV-DUP-GRID · GAP-P2-LAYOUT-06 · GAP-P2-87 · GAP-P2-94 · GAP-P2-CC-06

---

### T-UI-FILTER-01 — List filter bar

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /filter-bar-context · /erp-filter-form · filter-bar-pipeline · filter-bar-layout-hard
  - context: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-filter-bar.md`

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · data-lin-list-layout="erp-filter-bar"
  ui_layout: title trái · field lấp hàng (flex 1 1 180px) rồi wrap · 🔍 mép phải (V10) · GAP-FILTER-WRAP-02
  init_data: status · templateType từ GET init-data
  http: query keys `search` · `status` · `route` · `templateType` · `fromDate` · `toDate`

**implement.filter:**
  leading: `templateType` · `status` · `route` (SearchInput road-route) · `search` (SearchTextInput **không** onSearch)
  date: fromDate/toDate trên bar
  onSearch: 🔍 bar only
  cấm: ErpListHeaderFilters · LinListFilterField · wrapper cả leading · nút Tìm · export trên bar · grid 3 cột hàng loạt

**DoD:**
- [ ] Context 1:1 · V1–V5 **+ V10** PASS · yarn build (Dev)

---

### T-UI-FORM-01 — Full page form

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** /erp-form-context · form-field-grid · dev-form-review-checklist · /integrate-file-upload-web · /implement-show-leave-confirm

**ssot.reuse:**
  pattern: Full page · `data-form-cols="5"` + header chrome — **cấm** footer Lưu Slideout · **cấm** copy 2-cột (GAP-P2-FORM-GRID-05)
  upload: FileService · mediaIds guid[] · MIME 10MB/50MB · max 10 · resign
  leave: LeaveConfirmModal (T-UI-LEAVE-01)

**Fields (controlHint):**

| id | label | control | notes |
|----|-------|---------|-------|
| code | Mã NT | Text readonly | IdCode NT-* |
| status | TT | SearchInput/Dropdown | init-data · Nháp/Đang NT/Hoàn thành/Hủy |
| templateType | Mẫu NT | SearchInput | mau-01…10 |
| route | Tuyến | SearchInput | road-route |
| zoneOrgCode | Khu | SearchInput | org-unit |
| vpOrgCode | VP | SearchInput | org-unit |
| assigneeCode | Cán bộ NT | SearchInput | required · org |
| inspectedAt | Ngày NT | Date | required · TZ |
| kmFrom/kmTo | Km | Number | chainage |
| fieldInfo | Hiện trường | Text | required |
| note | Ghi chú | Text | |
| mediaIds | Ảnh/video | FileMulti | DES-NT-UPLOAD |
| updatedAt | Cập nhật | Date | readonly |

**DoD:** C/E/V/Copy · View readOnly · header chrome · 5 cột · upload work · **cấm** ERP/WO

---

### T-UI-LEAVE-01 — Dirty leave

**devSlash:** `/agent-dev` · skills: `/implement-show-leave-confirm`  
**DoD:** dirty → `LeaveConfirmModal` · useFormLeaveGuard · **0** `window.confirm`/`alert` · GAP-TL-LEAVE-01 / GAP-DEV-LEAVE-01

---

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search/filter | S-LIST | LinErpListFilterBar onSearch | GET `?search&status&route&templateType&fromDate&toDate` |
| Refresh | toolbar | reload | GET `/` |
| +Thêm mới | toolbar | navigate `/nghiem-thu/new` | — |
| View/Edit/Delete | toolbar+selection | navigate / delete | GET/PUT/DELETE `/{id}` |
| History | toolbar/menu | LinCatalogHistoryModal | history API |
| Config fa-cog | toolbar | LinCatalogUiSchemaEditorModal | ui-schema GET/PUT |
| Row View/Edit/Copy/Delete/History | C3 menu | FormMode | same |
| Form Save/Cancel | Z header chrome | save · leave guard | POST/PUT |
| Upload media | DES-NT-UPLOAD | FileService | API-FILE |

---

### T-UI-LKP-01 — lookup

| catalogKind / enum | Surface | API | Persist |
|--------------------|---------|-----|---------|
| road-route | filter `route` + form | Integration road-route search | code |
| org-unit | zoneOrgCode · vpOrgCode · assigneeCode | org-unit search | code |
| status (4) | filter+form | init-data | enum VN |
| templateType (10) | filter+form | init-data mau-01…10 | value |

**Cấm:** native select · KIND_LABEL hardcode · TextInput cho catalog lớn.

---

### T-BE-CRUD-01 — FormMode ↔ API (SA)

| FormMode | API |
|----------|-----|
| List | API-01 GET list |
| View/Edit/Copy | API-02 GET by id |
| Create | API-03 POST |
| Edit-save | API-04 PUT |
| Delete | API-05 DELETE |
| Lookups | API-00 init-data |
| Files | API-FILE FileService |

Gates: TZ=**required** · XCO=**required** · SHARE=**tenant_keep** · domain **Patrol** only.

---

### T-QA-* (QA only — e2eQa ON)

- **T-QA-CRUD-01** · **T-QA-FORM-01** · **T-QA-FILTER-01** · **T-QA-FILTER-02**  
- **Cấm** TL viết scenario chi tiết · QA viết `qa/scenarios.md`  
- **Cấm** start:std / e2e ở role TL

## Shell height (HARD)

DoD **tl-list-shell-height**: live title+toolbar+grid/empty · flex root · **cấm** DEFER **GAP-P2-LAYOUT-06**.

## Retry

`retryFrom` = none · **không** load tl-retry-ssot-rereview.

## Handoff → Dev

| Field | Value |
|-------|-------|
| next | `/agent-dev` |
| task | `specs/nghiem-thu/task/nghiem-thu.md` |
| compact | `specs/nghiem-thu/handoff/team_lead-compact.md` |
| filter context | `specs/_data-analy/features/nghiem-thu-filter-bar.md` |
| solution | `specs/nghiem-thu/be/solution-discovery.md` |
| design | `specs/nghiem-thu/ui/design.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html` |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=2 · artifactSchema.task=2 · versionGate=ok · route_confirm=approve -->
