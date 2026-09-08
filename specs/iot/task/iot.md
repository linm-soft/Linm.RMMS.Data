# Team lead — Task — iot

| Field | Value |
|-------|-------|
| feature | `iot` |
| title | Danh sách thiết bị IoT |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `list` (Kind B CatalogListShell + Full page Kind D form) |
| formPattern | List Kind B · Form **Full page** `data-form-cols="5"` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** (autoApprove) |
| route_confirm | **route_a** `/iot` (autoApprove · peerStdUrl giữ) |
| domain_map | **Iot** · `api/v1/iot` · **cấm ERP.*** |
| gates | TZ=`tz_na` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| catalogKind | `iot-devices` |
| entity | `IotDeviceEntity` · table `rmms_iot_devices` · soft-delete |
| IdCode | prefix **`IOT-`** |
| type | `sensor` \| `logger` |
| status enum | `online` \| `offline` |
| taskId | `task_903b7df2` |
| updatedAt | `2026-09-05T04:35:00.000Z` |
| skillVersion | `2026.08.19.04` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| `source.routes` | List `/iot` · Create `/iot/tao-moi` · Edit/View `/iot/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Iot** (DOMAIN-MAP) |
| `source.api` | `api/v1/iot/devices` (+ `…/init-data` · health `api/v1/iot/health`) |
| `source.bff` | BFF proxy domain Iot · **cấm** ERP.* |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9309/iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` (Dev điền khi serve) |
| filterBar | `specs/iot/ui/iot-filter-bar.md` |
| controlHint | `specs/_data-analy/features/iot-control-hint.md` |
| solution | `specs/iot/be/solution-discovery.md` |

## Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/iot` | **CHỐT** — khớp MFE · STATUS · Design |
| B | `/dm/iot` | alternate (không chọn) |
| C | custom | N/A |

Form child routes (cùng confirm): `/iot/tao-moi` · `/iot/:id`.

## DES-GRID → Lin\* map

| Zone | Design | Component / wire |
|------|--------|------------------|
| A | Header | `LinPageLayout` kind=catalog · title «Danh sách thiết bị IoT» |
| B | Toolbar | `catalogToolbar` FULL · `buildCatalogListToolbarActions` |
| C0/C1 | Filter | `LinErpListFilterBar` · `iot-filter-bar.md` · V1–V5 |
| C2/C2a/C3 | Grid | `LinCatalogDataGrid` · resize ON · filter/sort hooks |
| D | Footer | `LinCatalogListPagination` only |
| F | Config | `LinCatalogUiSchemaEditorModal` · catalogKind=`iot-devices` |
| H | History | `LinCatalogHistoryModal` · **cấm** `window.alert` |
| Leave | Dirty | `LeaveConfirmModal` · `useFormLeaveGuard` (full page) |
| Z | Form Full | 5 cột `data-form-cols="5"` · header chrome · **cấm** footer Lưu |

**GAP-IOT-01:** 1× `LinPageLayout` — **cấm** nested `CatalogListShell` trong children · shell height live (GAP-P2-LAYOUT-06).

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/iotDevices/endpoint.ts` → apiClient → BFF → API Iot |
| List↔API | List API-01 · init-data API-02 · GET API-03 · POST API-04 · PUT API-05 · soft DEL API-06 |
| Health | API-00 keep · **cấm** map health → grid rows |
| State | server paged list · `useServerPagedListLoading` · form route state dirty |
| Dropdown | **chỉ** init-data BE · **cấm** `KIND_LABEL` FE |
| routeCode | SearchInput road-routes · exists 422 · **cấm** free-text |
| code | IdCode `IOT-` readonly create |
| Perm FE | `rmms-iot:devices:read` · `rmms-iot:devices:write` |
| Perm BE | `iot.devices.read\|create\|update\|delete` |
| Menu | ADMIN only · **GAP-IOT-03** T-MENU-01 |
| Migration | `Schema_RmmsIotDevices` · **flag Dev** · **cấm** Step 4b @ TL |
| ssot.reuse | Common.Components Lin\* only · **cấm** clone grid/pager/ERP |

## Field → control map (T-UI-LKP / FIELD)

| id | label | controlHint | UI | BE |
|----|-------|-------------|----|----|
| search | Tìm | SearchTextInput | filter | query |
| status | Trạng thái | Dropdown | init-data | scalar |
| type | Loại | Dropdown | init-data | scalar |
| routeCode | Tuyến | SearchInput | road-routes | FK |
| code | Mã | Text/IdCode | IdCode `IOT-` | string |
| name | Tên | Text | Text | string |
| km | Lý trình | Number | Number | decimal? optional |

## Task pack (`list` · form-type-task-pack §2a)

**devSlash default:** `/agent-dev` · Web leaves: `/dev-web-responsive` + `/dev-ui-review` trên T-UI-RESP-01.

### T-BE-SCHEMA-01
**layer:** api/migration · **deps:** — · **devSlash:** `/agent-dev`  
**DoD:** `Schema_RmmsIotDevices` · table `rmms_iot_devices` · soft-delete · UK code · **Dev flag migration** · **cấm** ERP.* · build PASS

### T-BE-CRUD-01
**layer:** api · **deps:** T-BE-SCHEMA-01 · **devSlash:** `/agent-dev`  
**DoD:** Entity/DTO/Service/Controller API-01…06 · FormMode↔API · filter keys 1:1 filter-bar · soft delete · gates tz_na/xco_get_only/share_tenant · **cấm** invent ERP controllers

### T-BE-INIT-01
**layer:** api · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`  
**DoD:** `GET …/devices/init-data` → status + type `{value,label}` · **cấm** FE hardcode

### T-BE-UISCHEMA-01
**layer:** api · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`  
**DoD:** `CatalogUiSchemaRegistry` + seed `{catalogKind=iot-devices}` · GET/PUT `/integration/catalogs/iot-devices/ui-schema`

### T-BFF-01
**layer:** bff · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`  
**DoD:** proxy `api/v1/iot/**` · health + devices · **cấm** ERP.* routes

### T-PERM-01
**layer:** fe+be · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`  
**DoD:** BE `iot.devices.*` · FE `rmms-iot:devices:read|write` · gate toolbar/row/form

### T-MENU-01
**layer:** fe/menu · **deps:** T-PERM-01 · **devSlash:** `/agent-dev`  
**DoD:** ADMIN menu entry → `/iot` · **GAP-IOT-03** · ẩn non-ADMIN

### T-UI-LIST-01 — List page + grid (Kind B)

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height
  - design_zones: DES-GRID-A/B/C0/C1/C2/C2a/C3/D/F/H (shared-grid-example v1)
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - /implement-catalog-ui-schema-registry · form_pair → T-UI-FORM-01
**deps:** T-BFF-01 · T-BE-UISCHEMA-01 · T-PERM-01  
**devSlash:** `/agent-dev`  
**page:** `/iot`

**ssot.reuse:**
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06) · **cấm** nested CatalogListShell (GAP-IOT-01)
  ui_filter: LinErpListFilterBar · iot-filter-bar.md
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create)
  ui_grid: LinCatalogDataGrid · resizable default ON
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal · kind=`iot-devices`
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal · cấm window.alert
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient · unwrap

**implement.page_shell / toolbar / grid / grid_menu / config / grid_flow:** theo `tl-grid-task-template` canonical (paste SSOT) — DoD live title+toolbar+grid/empty.

**DoD:** yarn typecheck PASS · **cấm** leftover `const columns` · health **không** đổ grid

### T-UI-FILTER-01
**deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`  
**DoD:** Load `/filter-bar-context` + `specs/iot/ui/iot-filter-bar.md` **trước Write** · `LinErpListFilterBar` V1–V5 · fields search/status/type/routeCode 1:1 · **cấm** ErpListHeaderFilters / nút Tìm / invent field — **GAP-TL-FILTER-01**

### T-UI-CFG-01
**deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`  
**DoD:** Sửa config = `LinCatalogUiSchemaEditorModal` full cột · **cấm** Zone F-only / configHint — **GAP-P2-CC-06**

### T-UI-FORM-01
**deps:** T-UI-LIST-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`  
**skills:** /erp-form-context · dev-form-review-checklist · form-field-grid.md  
**routes:** Create `/iot/tao-moi` · Edit/View `/iot/:id`  
**DoD:** Full page Kind D · **5 cột** `data-form-cols="5"` + header chrome · **cấm** footer Lưu · **cấm** copy slideout 2-cột · modes Create/Edit/View · field map § trên · IdCode `IOT-` · **GAP-P2-FORM-GRID-05**

### T-UI-LEAVE-01
**deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**skills:** /implement-show-leave-confirm  
**DoD:** dirty → `LeaveConfirmModal` · `useFormLeaveGuard` · **cấm** `window.confirm`/`alert` — **GAP-DEV-LEAVE-01**

### T-UI-ACT-01
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**DoD:** mọi action Search/Tạo/Sửa/Xem/Copy/Xóa/History → handler + FormMode/API — **GAP-P2-ACT-***

### T-UI-LKP-01
**deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**DoD:** routeCode = SearchInput road-routes · status/type = Dropdown init-data — **GAP-LIST-LKP-01**

### T-UI-FIELD-01
**deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**DoD:** field type + DTO/API 1:1 bảng trên — **GAP-LIST-FIELD-01**

### T-UI-PROD-01
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**DoD:** end-user chrome only · **cấm** note Dev/GAP/SSOT trên UI — demo-to-real-enduser

### T-UI-UX-01
**deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`  
**skills:** `/dev-ui-ux-constitution`  
**DoD:** Principles 1–7 · Full **5 cột** · spacing 4/8/12/16/24/32 — **GAP-DEV-UX-01**

### T-UI-RESP-01
**deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive` + `/dev-ui-review`  
**DoD:** verify 1280/768/375 · D+T 1 layout · M không shrink mù

### T-UI-HIST-01
**deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`  
**skills:** dev-history-alert-overlay  
**DoD:** History SSOT · **cấm** window.alert/confirm/prompt · overlay stacked

### T-QA-CRUD-01
**deps:** T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-CFG-01 · **role:** QA · **devSlash:** `/agent-qa`  
**DoD:** Create→Edit→View→Delete + row menu + config full cột + dirty leave Modal

### T-QA-FORM-01
**deps:** T-UI-FORM-01 · **role:** QA  
**DoD:** từng field required/min/max · submit UI = body — **GAP-QA-FORM-FIELD-01**

### T-QA-FILTER-01
**deps:** T-UI-FILTER-01 · **role:** QA  
**DoD:** filter V1–V5 + fields 1:1 `iot-filter-bar.md` · 🔍 work · fail ErpListHeaderFilters

### T-QA-FILTER-02
**deps:** T-UI-FILTER-01 · **role:** QA  
**DoD:** headed 1280+768+375 · `filter-bar-dtm-gate.md` — **GAP-QA-FILTER-DTM-01**

### T-QA-TYP-01 / T-QA-TAB-01
**deps:** T-UI-UX-01 · **role:** QA  
**DoD:** typography label 13 · input D14/M16 · tab-index PASS

## Open / handoff notes

- GAP-IOT-02 → covered by T-BE-SCHEMA/CRUD (Dev ship)
- GAP-IOT-01 → T-UI-LIST-01 shell
- GAP-IOT-03 → T-MENU-01
- E2E: queued `/agent-qa*` only · **cấm** e2e/start:std @ TL
- Migration Step 4b: **Dev only**

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.05.2 |
| generatedAt | 2026-09-05T04:35:00.000Z |
| versionGate | ok |
| route_confirm | route_a `/iot` (autoApprove) |
