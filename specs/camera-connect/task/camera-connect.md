# Team-lead — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` (Kind B catalog A–D+F + Kind C full-page connect) |
| changeScope | `edit_page` · gap=`list_config_schema` + **GAP-DES-VIEW-DL** |
| mode | `fix_gaps` |
| solution_confirm | **approve** (autoApprove ON · `task_ae3b33f3`) |
| design_confirm | **approve** (autoApprove ON · `task_2eab28c8`) |
| be_repo_confirm | **approved** |
| ui_repo_confirm | **approved** |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T03:50:00.000Z` |
| taskId | `task_06474cab` |
| prior | `task_ae3b33f3` (SA) · `task_fc29c24c` (schema Dev) · `task_6baf42c3` (CRUD) |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `ssot-no-duplicate` · `dev-ui-ux-constitution` |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/camera-connect/ui/design.md` + prototype A–D+F + Kind C Z1–Z4 | T-UI-LIST · T-UI-CONFIG · T-UI-FORM · T-CTX |
| Solution | `be/solution-discovery.md` | T-BE-CRUD · T-BE-SCHEMA · T-BFF · T-PERM · TZ/XCO/SHARE |
| Prototype | `ui/prototype/camera-connect-list-prototype.html` | UI DoD |
| controlHint | `specs/_data-analy/features/camera-connect-control-hint.md` · hash `sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` | T-UI-LKP · T-UI-FIELD |
| PO | `po/requirement.md` | DoD đo được |

**SA chốt:** live CRUD + connect test/snapshot + ingest/events + schema seed `camera-devices` + `LinCatalogUiSchemaEditorModal` **đã ship**. TL/Dev = **verify / no-op** trên list/schema/CRUD · **IN P1** GAP-DES-VIEW-DL + LKP native select + UX `filterMaxWidthPx`. **Cấm** regen migration CameraDevices/Events · **cấm** invent `GET …/form-init-data` · **cấm ERP.***

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Camera** + Integration ui-schema | **cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` |
| **Auth** | `camera.devices.read\|create\|update\|delete` | FE gate · BE `[RequirePermission]` **OUT pack** |

## Implement HOW (TL)

| Topic | Decision |
|-------|----------|
| **Wire** | Page → `services/camera` → `web-bff/api/v1/cameras` → `api/v1/cameras` |
| **Lookups** | modelCode = Dropdown **API-07** `GET /cameras/models` (**T-BE-INIT n/a**) · protocolMode = Dropdown enum FE · online filter = `Select` Lin* |
| **Ui-schema** | `catalogUiSchemaService` → `api/v1/integration/catalogs/camera-devices/ui-schema` (**không** Camera BFF) |
| **List** | `CameraListPage` · `useCatalogUiSchema('camera-devices')` · `buildDynamicGridColumns` |
| **Form** | Full-page `CameraFormPage` C/E/V/Copy — **cấm** Resource / Slideout / View=`readOnly` Input xám |
| **Skills** | `/erp-form-context` · catalog toolbar · leave-confirm · TZ na · XCO get_only · SHARE tenant |

### ssot.reuse

Reuse `CamerasController` · `CameraDeviceService` · connect test/snapshot · BFF `CamerasBffController` · Integration `CatalogUiSchemaController` kind=`camera-devices`. **Cấm** clone ERP catalog.

## retry.ssot_rereview (TL **trước** handoff Dev · live 2026-08-16 · `task_06474cab`)

Live: `Linm.Web.RMMS.Camera/src/pages/CameraListPage/CameraListPage.tsx` · `CameraFormPage.tsx`.

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` · cấm nested `CatalogListShell` | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | **PASS** (`tableConfig` từ schema `resizableColumns`) |
| Footer `LinCatalogListPagination` · cấm footerPagination / pageSizeBar / raw table product | **PASS** (list) |
| flex + skeleton | **PASS** (`showTableLoading` · `skeletonRows={8}`) |
| toolbar config FULL | **PASS** — `LinCatalogUiSchemaEditorModal` kind=`camera-devices` · **cấm** `configHint` live |
| leftover `const columns` / `LinCatalogDataColumn[]` grid | **PASS** — `uiColumns` bootstrap + `buildDynamicGridColumns` |
| list_parity Kind B A–D+F | **PASS** |
| tree_master? | **n/a** |
| form Kind C footer Save/Cancel | **PASS** |
| View = `<dl>` · cấm Input readOnly xám toàn form | **FAIL** — `readOnly = mode === 'view'` + `readOnly={readOnly}` trên Input · **GAP-DES-VIEW-DL** |
| T-UI-LKP Lin Dropdown (cấm native `<select>`) | **FAIL** — form `modelCode` / `protocolMode` = native `<select>` |
| T-UI-UX cấm `filterMaxWidthPx` | **FAIL** — `LinPageLayout` + `ErpListHeaderFilters` `filterMaxWidthPx={1000}` |

**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface form/list filters.

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | title «Kết nối camera ITS» · `fa-video` · **cấm** Thêm trên A |
| B | `catalogToolbar` | refresh · history stub · config cog · create · delete · view/edit |
| B filter | `SearchTextInput` · `Select` Online | apply → page=1 |
| C | `LinCatalogDataGrid` | resize default ON · row menu · schema columns |
| D | `LinCatalogListPagination` | 50/100/200/500 |
| F | `LinCatalogUiSchemaEditorModal` | title «Cấu hình hiển thị danh mục» |

## Gaps (this pack)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| GAP-DES-VIEW-DL | View Input `readOnly` xám | **T-UI-FORM-01** · **T-UI-PROD-01** | **CLOSED** (`task_ba4221ae`) |
| GAP-TL-LKP-SELECT-01 | native `<select>` model/protocol | **T-UI-LKP-01** | **CLOSED** (`task_ba4221ae`) |
| GAP-TL-UX-FILTER-MAX-01 | `filterMaxWidthPx={1000}` | **T-UI-UX-01** | **CLOSED** (`task_ba4221ae`) |
| GAP-P2-CC-06 / CONFIG-PLACEHOLDER / GRID-SCHEMA-BOOTSTRAP | schema editor | T-UI-CONFIG / T-BE-SCHEMA | **CLOSED live** |
| GAP-P2-ACT-* | list shell / CRUD / toolbar | T-UI-LIST / T-UI-ACT / T-BE-CRUD | **CLOSED live** |
| P2 live gateway | MediaMTX | T-UI-LIVE-P2 | **OUT** |
| SD-AUTH | RequirePermission mount | — | **OUT** |

## Task pack (canonical — `form-type-task-pack`)

### T-CTX-01
**layer:** docs  
**status:** **verify / no-op**  
**DoD:**
- [x] Context `docs/context/features/camera-connect.md` CRUD + connect APIs
- [ ] Dev: stamp nếu route/schema lệch (expect `api/v1/cameras` + `camera-devices`)
- [ ] **cấm ERP.*** · **cấm** `api/v1/rmms/*`

### T-PERM-01
**layer:** ui+api  
**status:** **verify / no-op**  
**DoD:**
- [x] FE `CAMERA_PERMS` / `cameraListPermissions` · `camera.devices.*`
- [ ] BE `[RequirePermission]` **OUT** (stub TODO CommonLib)

### T-BE-CRUD-01
**layer:** api  
**status:** **verify / no-op**  
**from_solution:** API-01…05  
**source:** backend=`D:/AI-QLBD/Linm.RMMS.WebService` · domain=`Camera`  
**skills:** `/new-endpoint` · `/implement-view-cross-company` · `/implement-shared-table`  
**DoD:**
- [x] List `search` · `online` · `page` · `pageSize`
- [x] getById XCO get_only · create/update · soft delete
- [x] DTO scalars · **cấm** parent `*Json` · **cấm** regen migration
- [x] **cấm ERP.***

### T-BE-SCHEMA-01
**layer:** api Integration  
**status:** **verify / no-op** (`task_fc29c24c`)  
**from_solution:** API-12/13  
**DoD:**
- [x] `CatalogUiSchemaRegistry.CameraDevices = "camera-devices"`
- [x] Seed: code · name · modelCode · host · sdkPort · road · online
- [x] **cấm** `configHint`

### T-BFF-01
**layer:** bff  
**status:** **verify / no-op**  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [x] Proxy GET list (forward query) · GET/{id} · POST · PUT · DELETE · connect · models · events
- [x] Ui-schema **không** clone vào Camera BFF

### T-UI-LIST-01
**layer:** ui  
**status:** **verify / no-op — A–D+F PASS · cấm rewrite shell**  
**DoD:**
- [x] Zones A · B · C · D · F
- [x] 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination`
- [x] Filter SearchTextInput + Select Online → page=1
- [x] Row menu Xem / Sửa / Copy / Lịch sử / Xóa
- [x] LAYOUT-06 · list_parity

### T-UI-CONFIG-01
**layer:** ui  
**status:** **verify / no-op** (`task_fc29c24c`)  
**DoD:**
- [x] `LinCatalogUiSchemaEditorModal` kind=`camera-devices`
- [x] `useCatalogUiSchema` + `columns={buildDynamicGridColumns(schema, uiColumns)}`
- [x] **cấm** `LinListTableConfigModal` editor cột · leftover `const columns` grid

### T-UI-FORM-01
**layer:** ui  
**status:** **done** (`task_ba4221ae`)  
**DoD:**
- [x] Full-page `/camera/new` · `/camera/:id` · `?mode=view` · `?copyFrom=` · footer Save/Cancel
- [x] **IN:** View Z1–Z2 = **`<dl>`** display — **cấm** Input/`select` `readOnly` xám toàn form
- [x] Z3 JPEG + Z4 events **keep display** ở view (không disable «Tải events»)
- [ ] Required: modelCode · code · host · username · password · sdkPort (TCM403)
- [ ] **cấm** Resource / Slideout / Kind D / Modal form

### T-UI-ACT-01
**layer:** ui  
**status:** **verify / no-op** (list) · form View actions follow T-UI-FORM  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST | `SearchTextInput` → applyFilters page=1 | GET `/cameras` |
| Online filter | S-LIST | `Select` | GET `?online=` |
| Refresh | toolbar | `reloadAll` | GET |
| +Thêm | toolbar | `/camera/new` | POST |
| Edit / View / Delete | toolbar | `openRow` / `deleteRow` | GET/PUT/DELETE |
| History | toolbar + row | `LinCatalogHistoryModal` stub | OUT |
| Config | toolbar | `setConfigOpen` | GET/PUT ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same |
| Form Save/Cancel | Kind C footer | create/update · back | POST/PUT |
| View → Sửa / Sao chép / Đóng | footer view | navigate | GET |
| Test / Live / Events | Kind C toolbar | connect APIs | `/connect/*` · `/events` |

### T-UI-LKP-01
**layer:** ui  
**status:** **done** (`task_ba4221ae`)  
**DoD:**
- [x] Form `modelCode` = Lin `Select`/`Dropdown` bound **API-07** `GET /cameras/models` — **cấm** native `<select>` · **cấm** Text catalog
- [x] Form `protocolMode` = Lin `Select` enum auto/sdk/isapi — **cấm** native `<select>`
- [x] List `online` = Lin `Select` **PASS** live
- [x] road-route SearchInput master **OUT pack** (Text P1)

### T-UI-FIELD-01
**layer:** ui  
**status:** **done** (`task_ba4221ae`)  
**DoD:**
- [x] control-map ↔ `CameraDeviceDto` / Create·Update (ports int · protocols bool · Password write)
- [x] List query `search` · `online` · `page` · `pageSize`
- [x] View `<dl>` labels khớp Design §3.2 (cùng T-UI-FORM)

### T-UI-PROD-01
**layer:** ui  
**status:** **done** (`task_ba4221ae`)  
**DoD:**
- [x] **cấm** Resource · Slideout · Kind D
- [x] **cấm** View=`readOnly` Input xám — **CLOSED** `task_ba4221ae`
- [x] Form = `CameraFormPage` full-page

### T-UI-UX-01
**layer:** ui  
**status:** **done** (`task_ba4221ae`)  
**DoD:**
- [x] Bỏ `filterMaxWidthPx={1000}` trên `LinPageLayout` **và** `ErpListHeaderFilters` — `dev-ui-ux-constitution`
- [x] spacing 4/8/16 · Lin* list filters
- [x] Form View `<dl>` dùng Lin/CSS catalog (không ad-hoc table chrome)

### T-UI-MAP-FORM
**status:** **n/a** (`packKind=list` — không map OMS)

### T-BE-INIT
**status:** **n/a** (models in-process API-07)

### T-UI-LIVE-P2
**status:** **OUT** (plan 21 · `live_gateway_confirm`)

### T-QA-CRUD-01
**layer:** qa  
**status:** **pass** (`task_03f79795`)  
**deps:** Dev pack  
**DoD:**
- [x] Smoke list A–D+F + Create→Edit→**View `<dl>`**→Copy→Delete + row menu
- [x] Zone F schema editor · **cấm** `configHint`
- [x] Model Dropdown không native select
- [x] mfeStdUrl `http://localhost:9316/camera`
- [x] Update `qa/scenarios.md` (QA-40/41 + View dl)

## Deps

```
T-CTX-01 → T-PERM-01
T-BE-CRUD-01 → T-BFF-01
T-BE-SCHEMA-01 → T-UI-CONFIG-01 → T-UI-LIST-01
T-UI-LIST-01 → T-UI-FORM-01 (GAP-DES-VIEW-DL) → T-UI-PROD-01
T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01
T-UI-LIST-01 → T-UI-UX-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON · roleOnly=`dev` |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 / T-UI-CONFIG-01 shell (PASS) · **cấm** regen Camera migration · **cấm** rewrite connect Test/JPEG nếu PASS |
| Delta IN | **GAP-DES-VIEW-DL** · **GAP-TL-LKP-SELECT-01** · **GAP-TL-UX-FILTER-MAX-01** |
| Verify | CRUD · schema `camera-devices` · list A–D+F · TZ na · XCO GET · SHARE tenant |
| UI SSOT | `Linm.Web.RMMS.Camera` · `/camera` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Camera + Integration ui-schema |
| HARD | `tl-retry-ssot-rereview` · fix **all** GAP cùng surface · stamp `retry.ssot_rereview` trên implement MD |
| Build | MFE `yarn build` PASS · BE `dotnet build` **chỉ nếu** đụng API — **cấm** Dev completed nếu fail |
| Out of pack | MediaMTX · History API · RequirePermission mount · form-init-data · road-route master · ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T03:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
