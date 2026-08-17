# Team-lead — task pack · maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (Kind **B** catalog A–D + Zone F schema + **full-page** form) |
| Feature Kind | **B** list + form C/E/V/Copy · Kind **E** KPI **OUT** (API-08 stub only) |
| mfeStdRoute | `/maintenance` |
| route_confirm | **route_a** `/maintenance` |
| autoApprove | **ON** |
| solution_confirm | **approve** (autoApprove ON · `task_1e3650ac`) |
| design_confirm | **approve** (autoApprove ON · `task_1e3650ac`) |
| taskId | `task_324395f2` |
| prior | data_analy `done` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| updatedAt | `2026-08-16T00:42:00.000Z` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` · `list-form-quality-gates` · `dev-ui-ux-constitution` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |
| **Supersedes** | `task/maintenance.md` `task_7dc4b841` (T-UI-* stamped **done** trên enum **cũ** · **cấm** Dev coi pack đó = closed) |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/maintenance/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-FORM · T-UI-ACT · T-CTX — SearchInput §3.3 · **cấm** Slideout/`?form=` |
| Solution | `specs/maintenance/be/solution-discovery.md` | T-BE-CRUD · T-BE-ENUM · T-BE-INIT · T-BE-UISCHEMA · T-BFF · T-PERM — API-01…09 · API-SCHEMA |
| Prototype | `ui/prototype/maintenance-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/maintenance-control-hint.md` | T-UI-LKP · T-UI-FIELD |
| PO | `specs/maintenance/po/requirement.md` | AC list/form |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · invent `/api/v1/work-orders` flat · parent JSON trên WO.

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` (stub đến ≥1.4.0) |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | `maintenance.work-orders.read\|create\|update\|delete` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat `WorkOrderEntity` scalars | parent `*Json` blob |
| BFF | proxy only | business logic in BFF |
| Dropdown | **API-09 init-data** Design §3.3 | FE-only `maintenanceStore` enum SSOT · native `<select>` |

## Source assignment (`beRepo` · `uiRepo` — board confirm)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| `source.routes` | List `/maintenance` · form `/maintenance/new` · `/maintenance/:id` · **`/maintenance/:id/edit`** · **`/maintenance/:id/copy`** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Maintenance** (`maintenance`) + ui-schema **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Maintenance/` · `api/domains/maintenance/LINM.RMMS.Maintenance.Models/` |
| `source.api_schema` | `api/src/RMMS.Service.Api/Domains/Integration/` (`CatalogUiSchema*`) |
| `source.bff` | `bff/domains/maintenance/LINM.RMMS.Maintenance.Bff/` |
| `source.bff_schema` | `bff/domains/integration/` `CatalogUiSchemaBffController` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` `WorkOrderEntity` |
| `source.migrations` | `Schema_RmmsWorkOrders` **đã có** — **không** cột mới pack này |
| Demo | `Linm.RMMS.Demo/src/demo/features/maintenance-demo.html` |
| Context | `Linm.RMMS.Data/docs/context/features/maintenance.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html` |
| `mfeStdRoute` | `/maintenance` (**locked**) |
| `mfeStdUrl` | `http://localhost:9304/maintenance` |

### route_confirm

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/maintenance` | PO+Design+SA |
| B | `/work-orders` | **không chọn** |
| C | — | n/a |

## API contract (from SA — Dev delta **chỉ** GAP)

Base BE: `api/v1/maintenance/work-orders` · BFF: `web-bff/api/v1/maintenance/work-orders` · FE BASE: **`/maintenance/work-orders`**.  
Schema: `api/v1/integration/catalogs/work-orders/ui-schema`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-01 | GET | `/work-orders` | DONE pageSize 50/100/200/500 · search/status/workType | keep · filter codes = Design §3.3 sau T-BE-ENUM-01 |
| API-02 | GET | `/work-orders/{id}` | DONE XCO | keep |
| API-03 | POST | `/work-orders` | DONE | keep · enum Design · **no Code** |
| API-04 | PUT | `/work-orders/{id}` | DONE | keep · enum Design |
| API-05 | DELETE | `/work-orders/{id}` | DONE soft | keep |
| API-06 | POST | `/{id}/progress` | DONE | keep |
| API-07 | POST | `/{id}/complete` | DONE stub P2 | keep · `status=done` |
| API-08 | GET | `/summary` | DONE stub | **OUT** live Kind E |
| API-09 | GET | `/work-orders/init-data` | **MISSING** | **GAP-SA-INIT-01** `{ statuses[], workTypes[] }` Design §3.3 |
| API-SCHEMA-01/02 | GET/PUT | `/integration/catalogs/work-orders/ui-schema` | DONE | **GAP-TL-SEED-01** list keys vs Design |

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_required** | `dueAt` persist UTC · FE datetime-local · list `toLocaleString` |
| XCO | **xco_get_only** | API-02 GetById · list **không** XCO |
| SHARE | **share_tenant** | `WorkOrderEntity` : tenant `CompanyCode` |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse |
| SD-AUTH | gap/stub | `maintenance.work-orders.*` · `[RequirePermission]` TODO |
| SD-BFF | **required** | Proxy only · **thêm** init-data |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-JOB | n/a | |
| SD-TENANT | **required** | CompanyCode |
| SD-NO-JSON | **required** | flat WO |
| SD-KPI | Kind E | **OUT** pack |
| SD-COMMENT | DEFER | |
| SD-SLA | DEFER Workflow | |
| SD-ACCEPT | complete stub P2 | keep |

## Retry SSOT re-review (HARD — live MFE 2026-08-16 · trước Dev Write)

Live: `MaintenanceListPage.tsx` + `MaintenanceFormPage.tsx` + `lookups.ts` + `maintenanceStore.ts` + `index.tsx` + `WorkOrderService.cs` + `WorkOrdersBffController.cs` + `CatalogUiSchemaSeed.WorkOrders()`.

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | List: 1× `LinPageLayout` · không CatalogListShell | **PASS** |
| 2 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` / raw table | `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` + LAYOUT-06 | `.page` flex column height 100% · `skeletonRows={8}` | **PASS** |
| 4 | Toolbar catalog: refresh · history · config `fa-cog` · +Tạo mới trên **B** · delete | `catalogToolbar` present | **PASS** |
| 5 | Filter Zone B: SearchTextInput + SearchInput status/workType — **cấm** native Select | `SearchInput` + `SearchTextInput` | **PASS** shell · **GAP-TL-LKP-01** data |
| 6 | Grid `LinCatalogDataGrid` · kéo cột default ON | `tableConfig.resizable: true` + `buildDynamicGridColumns` | **PASS** |
| 7 | Zone F: `LinCatalogUiSchemaEditorModal` kind=`work-orders` — cấm `configHint` / `LinListTableConfigModal` | modal present · không leftover `const columns` / `LinCatalogDataColumn[]` / `configHint` | **PASS** editor · **GAP-TL-SEED-01** bootstrap keys |
| 8 | History: `LinCatalogHistoryModal` stub | present | **PASS** |
| 9 | tree_master? | n/a | n/a |
| 10 | Form Create/Edit/View/Copy **full-page** — cấm Slideout / Resource / `?form=` overlay | `MaintenanceFormPage` · **không** Slideout | **PASS** shell · **GAP-TL-ROUTE-01** |
| 11 | Lookup master API-09 — cấm FE-only enum SSOT | `lookups.ts` copy `maintenanceStore` (`awaiting_accept` / `periodic` / `from-incident` / `bdtx`) | **GAP-TL-LKP-01** |
| 12 | Field map Design §3.2 + description | Form có description · seed **thiếu** field `description` | **GAP-TL-FIELD-01** |
| 13 | View = display (không Input readOnly) | View `<dl>` | **PASS** |
| 14 | Copy = POST new · **code empty** until save | `fromDto` copy gọi `genWorkOrderCode(loadRows())` | **GAP-TL-COPY-CODE-01** |
| 15 | Dedicated form routes `/edit` `/copy` | copy `?copyFrom=` · edit `?mode=edit` · **thiếu** `/maintenance/:id/edit` · `/copy` | **GAP-TL-ROUTE-01** |
| 16 | Confirm toast SSOT | list delete `window.confirm` / `window.alert` | **GAP-TL-UX-TOAST-01** |
| 17 | BE enum = Design §3.3 | `AllowedStatuses` = new/in_progress/**awaiting_accept**/done · workType periodic/from-incident/bdtx · **không** `cancelled`/`repair`/`inspect`/`emergency` | **GAP-SA-ENUM-01** |
| 18 | GET init-data + BFF | Controller/BFF **không** `init-data` | **GAP-SA-INIT-01** · **GAP-SA-BFF-INIT-01** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`.  
**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface (enum + init-data + lookups + seed + routes cùng pack).

`retry.ssot_rereview` (stamp Dev implement MD): copy bảng trên + re-audit sau Write.

## Live GAP → task map

| ID | Gap | Task |
|----|-----|------|
| GAP-SA-ENUM-01 | BE/FE persist codes lệch Design §3.3 | T-BE-ENUM-01 · T-UI-LKP-01 · T-UI-FIELD-01 |
| GAP-SA-INIT-01 | không `GET …/init-data` | T-BE-INIT-01 · T-UI-LKP-01 |
| GAP-SA-BFF-INIT-01 | BFF thiếu forward init-data | T-BFF-01 |
| GAP-TL-LKP-01 | `lookups.ts` = demo store enum cũ | T-UI-LKP-01 |
| GAP-TL-SEED-01 | Seed list keys thiếu **dueAt** · **progressPercent** (Design: Mã·Tuyến·Loại·Đội·Cán bộ·**Hạn**·Trạng thái·**Tiến độ**) · thiếu field `description` | T-BE-UISCHEMA-01 · T-UI-LIST-CONFIG-01 |
| GAP-TL-ROUTE-01 | thiếu `/maintenance/:id/edit` · `/copy` | T-UI-FORM-01 |
| GAP-TL-COPY-CODE-01 | Copy pre-gen mã local | T-UI-FORM-01 |
| GAP-TL-FIELD-01 | schema field description thiếu | T-BE-UISCHEMA-01 · T-UI-FIELD-01 |
| GAP-TL-UX-TOAST-01 | `window.alert`/`confirm` trên list delete | T-UI-UX-01 |
| GAP-RPT-SRC-WO-01 | Quantity + UnitCode | **OUT** this pack |

**Remap 1-shot (SA lock — không cột DB mới):** `awaiting_accept`→`in_progress` · `periodic`→`repair` · `from-incident`→`repair` · `bdtx`→`inspect`. **Cấm** dual enum.

## Task pack

### T-CTX-01
**layer:** docs  
**status:** pending  
**DoD:**
- [ ] `docs/context/features/maintenance.md` khớp Design 2026-08-16: enum §3.3 · API-09 init-data · full-page `/edit` `/copy` · **cấm** Slideout
- [ ] API table + BE status Signed cho init-data
- [ ] **cấm ERP.***

### T-PERM-01
**layer:** ui+api  
**status:** pending (verify giữ)  
**DoD:**
- [ ] FE `maintenance.work-orders.read|create|update|delete` giữ
- [ ] BE `[RequirePermission]` stub TODO CommonLib ≥1.4.0 — **không** block CRUD
- [ ] local mode không chặn toolbar P1

### T-UI-LIST-01
**layer:** ui  
**status:** pending (verify A–D **giữ** · delta filter labels)  
**DoD:**
- [ ] Zones A–D giữ: 1× `LinPageLayout` · `LinCatalogDataGrid` resize ON · `LinCatalogListPagination` 50/100/200/500
- [ ] Filter SearchTextInput + SearchInput status/workType từ **API-09** (không `maintenanceStore`)
- [ ] Apply filter → page=1
- [ ] **cấm** rewrite list shell nếu PASS
- [ ] **cấm** `footerPagination` / `pageSizeBar` / nested CatalogListShell

### T-UI-LIST-CONFIG-01
**layer:** ui  
**status:** pending (verify editor **giữ** · bind labels)  
**deps:** T-BE-UISCHEMA-01  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · kind=`work-orders`
- [ ] `useCatalogUiSchema('work-orders')` · `columns={buildDynamicGridColumns(schema, uiColumns)}`
- [ ] `uiColumns` keys khớp seed: code · routeName · workType · teamName · assigneeName · **dueAt** · status · **progressPercent**
- [ ] workType/status cell render **label VN Design §3.3** (không leftover Định kỳ / Chờ NT)
- [ ] **cấm** `LinListTableConfigModal` editor cột · **cấm** leftover `const columns` / `LinCatalogDataColumn[]` · **cấm** `configHint`

### T-UI-FORM-01
**layer:** ui  
**status:** pending (delta routes + copy code)  
**DoD:**
- [ ] Routes: `/maintenance/new` · `/maintenance/:id` · **`/maintenance/:id/edit`** · **`/maintenance/:id/copy`** trong `index.tsx` (**trước** `:id` generic nếu cần)
- [ ] List/form navigate **không** `?mode=edit` / `?copyFrom=` làm SSOT (query chỉ fallback 1 sprint rồi xóa)
- [ ] Copy: code **empty** đến khi POST (IdCode server) — **cấm** `genWorkOrderCode(loadRows())`
- [ ] View `<dl>` display — **cấm** Input readOnly
- [ ] leave-confirm dirty giữ
- [ ] **cấm** Slideout / Resource / `?form=` overlay

### T-UI-ACT-01
**layer:** ui  
**status:** pending (verify inventory)  
**DoD:** action map giữ + route mới:

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → apply page=1 | GET `/` |
| Status / WorkType | S-LIST filter | `SearchInput` API-09 | GET `?status=&workType=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo | toolbar | `openCreate` → `/maintenance/new` | POST `/` |
| Edit | toolbar / row | `/:id/edit` | GET · PUT |
| View | toolbar / row | `/:id` | GET |
| Copy | row | `/:id/copy` | GET + POST new |
| Delete | toolbar / row | `deleteRow` | DELETE soft |
| History | toolbar / row | stub modal | DEFER |
| Config | toolbar `fa-cog` | Zone F | ui-schema |
| Progress | row | `updateProgress` | POST `/{id}/progress` |
| Complete | row | `completeRow` | POST `/{id}/complete` stub |

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**deps:** T-BE-INIT-01 · T-BFF-01  
**DoD:**
- [ ] `lookups.ts` consume `GET …/work-orders/init-data` (BFF) — **cấm** import `WORK_ORDER_STATUSES` / `WORK_TYPES` / `STATUS_LABELS` từ `demo/maintenanceStore` làm SSOT production
- [ ] SearchInput list + form dùng cùng config
- [ ] Labels **chốt** Design §3.3: Mới / Đang thực hiện / Hoàn thành / Hủy · Sửa chữa / Kiểm tra / Khẩn cấp
- [ ] **cấm** native `<select>`

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**DoD:**
- [ ] Map: search · status · workType · title · routeName · dueAt · teamName · assigneeName · progressPercent · slaHours · incidentId · description · note ↔ DTO
- [ ] persist codes = Design (sau remap)
- [ ] dueAt UTC↔datetime-local (`form-datetime-local-utc`)
- [ ] progress 0–100

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**DoD:**
- [ ] **cấm** Resource · Slideout · View=`readOnly` Input · Kind D
- [ ] **cấm** leftover enum demo trên production lookup
- [ ] demo `maintenanceStore` chỉ fallback offline — không chặn API-09 khi BFF sống

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**DoD:**
- [ ] spacing 4/8/16 · `LinPageLayout` list · `LinPageHeader` form
- [ ] delete/progress errors: `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (GAP-TL-UX-TOAST-01)
- [ ] không `filterMaxWidthPx` ad-hoc

### T-BE-CRUD-01
**layer:** api  
**status:** pending (verify giữ)  
**DoD:**
- [ ] API-01…07 giữ · pageSize 50/100/200/500
- [ ] XCO GetById giữ
- [ ] no ERP · `dotnet build` API PASS
- [ ] **cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`

### T-BE-ENUM-01
**layer:** api  
**status:** pending  
**DoD:**
- [ ] `AllowedStatuses` = `new` · `in_progress` · `done` · `cancelled`
- [ ] `AllowedWorkTypes` = `repair` · `inspect` · `emergency`
- [ ] Data remap 1-shot trên `rmms_work_orders` (không migration cột): mapping SA
- [ ] List filter + create/update 422 invalid enum
- [ ] **cấm** giữ `awaiting_accept` / `periodic` / `from-incident` / `bdtx` trong allow-list

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**deps:** T-BE-ENUM-01  
**DoD:**
- [ ] `GET api/v1/maintenance/work-orders/init-data` **trước** `{id}` route
- [ ] DTO `{ statuses: [{ value, label }], workTypes: [{ value, label }] }` đúng §3.3
- [ ] perm `maintenance.work-orders.read`
- [ ] **cấm** Integration master table mới cho 4+3 values

### T-BE-UISCHEMA-01
**layer:** api (Integration)  
**status:** pending (verify + seed delta)  
**DoD:**
- [ ] Registry `WorkOrders` = `work-orders` **giữ** — **cấm** clone registry dưới Maintenance
- [ ] Seed `List` visible keys = `code, routeName, workType, teamName, assigneeName, dueAt, status, progressPercent`
- [ ] Seed field `description` TEXTAREA listVisible=false
- [ ] HintText «Cấu hình hiển thị danh mục» (không copy lệch)
- [ ] workType/status control LOOKUP hoặc SELECT schema OK — **UI form** vẫn SearchInput

### T-BFF-01
**layer:** bff  
**status:** pending  
**deps:** T-BE-INIT-01  
**DoD:**
- [ ] `WorkOrdersBffController` proxy CRUD/progress/complete/summary **giữ**
- [ ] **Thêm** `GET work-orders/init-data` → `api/v1/maintenance/work-orders/init-data`
- [ ] CatalogUiSchema BFF **giữ**
- [ ] proxy only — không business logic
- [ ] `dotnet build` BFF PASS

### T-QA-01 / T-QA-CRUD-01
**layer:** qa  
**status:** pending (QA role)  
**deps:** Dev pack  
**DoD:**
- [ ] Smoke list A–D + Zone F + Create→Edit→View→Copy→Delete
- [ ] Filter status/workType Design labels · init-data
- [ ] Progress / Complete row
- [ ] mfeStdUrl `http://localhost:9304/maintenance`
- [ ] Update `qa/scenarios.md`

## Deps

```
T-BE-ENUM-01 → T-BE-INIT-01 → T-BFF-01 → T-UI-LKP-01 → T-UI-LIST-01 / T-UI-FORM-01
T-BE-UISCHEMA-01 → T-UI-LIST-CONFIG-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
T-BE-CRUD-01 verify song song
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON |
| Anti-dup | reuse `WorkOrdersController` / BFF / schema editor — **delta** enum · init-data · seed list keys · routes · lookups |
| UI SSOT | `Linm.Web.RMMS.Field` · `pages/MaintenanceListPage` · `MaintenanceFormPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance + Integration schema |
| HARD | `tl-retry-ssot-rereview` · **fix_all** GAPs cùng surface · **cấm** list rewrite A–D PASS |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS · ghi implement § Build — **cấm** completed Dev nếu fail |
| Out of pack | Kind E · comments · Quantity/UnitCode **GAP-RPT-SRC-WO-01** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T00:42:00.000Z |
| versionGate | rechecked |
