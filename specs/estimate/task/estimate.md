# Team lead — tasks — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `ai` · Kind **B+D** (S-LIST required · **no** S-DETECT capture) |
| featureClass | `ai` |
| solution_confirm | **approve** (autoApprove=ON · packet `task_a88111e4`) |
| design_confirm | **approve** (prior board) |
| route_confirm | **route_a** (locked · `/ai-vision/estimate`) |
| autoApprove | **ON** |
| be_repo_confirm | **pending** (board tick · **không auto**) |
| ui_repo_confirm | **pending** (board tick · **không auto**) |
| taskId | `task_a88111e4` |
| updatedAt | `2026-08-17T14:50:00.000Z` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| contentHash (data-analy) | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `form-type-task-pack.md` · `tl-grid-task-template.md` · **`tl-filter-bar-task.md`** · `tl-design-grid-component-map.md` · `tl-grid-full-flow.md` · `tl-list-shell-height.md` · `tl-catalog-list-parity.md` · `tl-retry-ssot-rereview.md` · `slideout-form-layout.md` · `list-form-quality-gates.md` · `agent-dev-assign.md` · `rmms-form-agent-map.md` |
| **devSlash** | **`/agent-dev`** — **cấm** `/agent-dev-ai-detect` (Design + `rmms-form-agent-map` · `estimate`) |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/estimate/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-CFG · T-UI-FORM · T-UI-ACT · T-UI-LEAVE · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-UI-HIST · T-CTX |
| Solution | `specs/estimate/be/solution-discovery.md` · **confirmed** | T-BE-CRUD · T-BE-INIT · T-BE-UISCHEMA · T-MIG · T-BFF · T-PERM · gates TZ/XCO/SHARE |
| Prototype | `ui/prototype/estimate-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/estimate-control-hint.md` | T-UI-LKP · T-UI-FIELD · lines grid |
| PO | `specs/estimate/po/requirement.md` | Config FULL · Leave · no AI badge · no auto WO |

**SA chốt:** live CRUD/BFF/migration **đã có** · Must-fix P0 **GAP-SA-EST-01…04** · catalogKind=`ai-estimates` · **cấm ERP.*** · **cấm** `*LinesJson` · **cấm** `/ai-estimate`.

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` stub OK |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | `ai-vision.estimates.*` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local `authSlice` / `uiSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity + **EstimateLineEntity** | parent `*LinesJson` |
| BFF | proxy only | business logic in BFF |
| Dropdown | GET `…/estimates/init-data` | hardcode enum FE |
| Config | `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema` | `configHint` · `LinListTableConfigModal` cột |
| Path | `api/v1/ai-vision/estimates` | legacy `/ai-estimate` · **ERP.*** |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| `source.routes` | `/ai-vision/estimate` · Slideout `?form=` · **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **AiVision** (`ai-vision`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| `source.bff` | `bff/domains/ai-vision/` · proxy `web-bff/api/v1/ai-vision/estimates/**` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| `source.uiSchema` | Integration `CatalogUiSchemaRegistry` + Seed · kind **`ai-estimates`** |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/estimate.html` |
| Context | `Linm.RMMS.Data/docs/context/features/estimate.md` · **filter-bar** `docs/context/features/estimate-filter-bar.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/estimate-list-prototype.html` |
| `mfeStdRoute` | `/ai-vision/estimate` (**locked**) |
| `mfeStdUrl` | `http://localhost:9303/ai-vision/estimate` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| beRepo / uiRepo | **pending board** trước Dev |

### route_confirm (autoApprove=ON · keep prior lock)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/ai-vision/estimate` | PO+Design+SA · MFE AiVision |
| B | `/ai-vision/uoc-luong` | **không chọn** |
| C custom | — | n/a |

## API contract (from solution)

Base BE: `api/v1/ai-vision/estimates` · BFF: `web-bff/api/v1/ai-vision/estimates` · FE BASE: **`/ai-vision/estimates`**.

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/estimates` |
| API-02 | GET | `/api/v1/ai-vision/estimates/init-data` |
| API-03 | GET | `/api/v1/ai-vision/estimates/{id}` |
| API-04 | POST | `/api/v1/ai-vision/estimates/from-incident/{incidentId}` |
| API-05 | POST | `/api/v1/ai-vision/estimates/from-defects` |
| API-06 | PUT | `/api/v1/ai-vision/estimates/{id}` |
| API-07 | POST | `/api/v1/ai-vision/estimates/{id}/draft` |
| API-08 | POST | `/api/v1/ai-vision/estimates/{id}/confirm` |
| API-09 | DELETE | `/api/v1/ai-vision/estimates/{id}` |
| L-01 | init-data `hostIncidents` (P1) · Incident search reuse | SearchInput `incidentId` |
| UI-S | GET/PUT | `/api/v1/integration/catalogs/ai-estimates/ui-schema` |

## Implement gates

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_required** | API-01 from/to · timestamps · mutate |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/draft load) |
| SHARE | **share_tenant** | EstimateAudit + EstimateLine |

## DES-GRID → Lin* (HARD)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-calculator` · **no AI badge** |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` |
| FILTER | DES-GRID-FILTER | Search + Dropdown status/**sourceType** · Date from/to · clear |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C1 | DES-GRID-C1 | `SearchTextInput` — **cấm** nút Tìm |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** · kind=`ai-estimates` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

---

## retry.ssot_rereview (TL **trước** handoff Dev · live 2026-08-17 · `task_a88111e4`)

Live: `Linm.Web.RMMS.AiVision/src/pages/EstimateListPage/EstimateListPage.tsx` · `EstimateFormSlideout.tsx` · BE `AiVisionEstimatesController`.

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` · cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | **PARTIAL** — grid present · **FAIL leftover** `const columns` / `LinCatalogDataColumn[]` (chưa `buildDynamicGridColumns`) |
| 3 | Footer `LinCatalogListPagination` · cấm footerPagination / pageSizeBar | **PASS** |
| 4 | flex + skeleton / LAYOUT-06 | **PASS** (`useServerPagedListLoading` · title+toolbar+grid) |
| 5 | Toolbar config FULL · `LinCatalogUiSchemaEditorModal` | **FAIL** — `configHint` placeholder (**GAP-SA-EST-03** / GAP-P2-CC-06) |
| 6 | Filter Zone B: **`LinErpListFilterBar`** + status · **sourceType** · from/to · context `estimate-filter-bar.md` | **FAIL** — `ErpListHeaderFilters` · thiếu sourceType + Date (**GAP-SA-EST-04** / **GAP-TL-FILTER-01**) |
| 7 | List API `sourceType` query | **FAIL** — controller/service thiếu (**GAP-SA-EST-01**) |
| 8 | BE ui-schema seed `ai-estimates` | **FAIL** — registry/seed missing (**GAP-SA-EST-02**) |
| 9 | list_parity Kind B A–D+F | **FAIL** — F missing · filter incomplete |
| 10 | tree_master? | **n/a** |
| 11 | Form Kind D footer-only + LeaveConfirmModal | **PASS** (footer + `useLeaveConfirm`) |
| 12 | View display (cấm Input readOnly xám toàn form) | **FAIL** — `readOnly={mode==='view'}` trên Input (**T-UI-PROD** / GAP-DES-VIEW-DL style) |
| 13 | Dropdown từ init-data only | **PASS** form Select · list status từ init |
| 14 | T-UI-UX cấm `filterMaxWidthPx` | **FAIL** — `filterMaxWidthPx={720}` (**T-UI-UX-01**) |
| 15 | no AI badge header | **PASS** |
| 16 | Confirm **không** auto WO | **PASS** (live confirm status only) |

**Cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface list/form. Ghi `retry.ssot_rereview` trên implement MD.

### Gaps (this pack — Must-fix trước QA)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| **GAP-SA-EST-01** | List API thiếu `sourceType` | **T-BE-CRUD-01** | **CLOSED** |
| **GAP-SA-EST-02** | CatalogUiSchema `ai-estimates` missing | **T-BE-UISCHEMA-01** | **OPEN P0** |
| **GAP-SA-EST-03** | MFE `configHint` placeholder | **T-UI-CFG-01** · **T-UI-LIST-01** | **OPEN P0** |
| **GAP-SA-EST-04** | FE list thiếu `sourceType` (+ Date from/to Design) | **T-UI-FILTER-01** · **T-UI-LIST-01** | **CLOSED** |
| **GAP-TL-FILTER-01** | Filter chưa `LinErpListFilterBar` / chưa load `estimate-filter-bar.md` | **T-UI-FILTER-01** | **CLOSED** |
| GAP-TL-GRID-BOOTSTRAP-01 | leftover `const columns` | **T-UI-LIST-01** · **T-UI-CFG-01** | **OPEN P0** |
| GAP-DES-VIEW-DL | View Input readOnly xám | **T-UI-FORM-01** · **T-UI-PROD-01** | **OPEN P0** |
| GAP-TL-UX-FILTER-MAX-01 | `filterMaxWidthPx={720}` | **T-UI-UX-01** | **OPEN P1** |
| GAP-F-EST-01 / EVT / UnitPrice | Auto WO · event · catalog UI | — | **DEFER P2** |

---

## FormType pack (canonical — `form-type-task-pack` §2a list + §2c ai · S-LIST)

`packKind=ai` + S-LIST → **list pack ids REQUIRED** · detect capture ids **n/a** (estimate generate = toolbar API-04/05 · **devSlash=/agent-dev**).

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context + ownership · DOMAIN-MAP path |
| T-PERM-01 | Dev | **pending** | `ai-vision.estimates.*` |
| T-BE-CRUD-01 | Dev | **partial** | API-01…09 · **sourceType query CLOSED** (GAP-SA-EST-01) |
| T-BE-INIT-01 | Dev | **pending** | API-02 init-data verify |
| T-BE-UISCHEMA-01 | Dev | **pending** | Registry + Seed **`ai-estimates`** (GAP-SA-EST-02) |
| T-MIG-01 | Dev | **verify / no-op** | `Schema_RmmsAiVisionEstimates` exists · **cấm** regen trừ delta seed |
| T-BFF-01 | Dev | **verify / extend** | proxy estimates · forward `sourceType` query |
| T-UI-LIST-01 | Dev | **pending** | A–D+F · no AI badge · **cấm** leftover columns |
| T-UI-FILTER-01 | Dev | **done** | `/filter-bar-context` · `estimate-filter-bar.md` · `LinErpListFilterBar` V1–V5 · sourceType+Date |
| T-UI-CFG-01 | Dev | **pending** | `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout · lines grid · footer only · View `<dl>` |
| T-UI-ACT-01 | Dev | **pending** | Action inventory → form/API |
| T-UI-LEAVE-01 | Dev | **verify / harden** | LeaveConfirmModal already · cover all dirty paths |
| T-UI-LKP-01 | Dev | **pending** | incident SearchInput · Dropdowns init-data |
| T-UI-FIELD-01 | Dev | **pending** | control-map ↔ DTO/API · lines amount |
| T-UI-PROD-01 | Dev | **pending** | end-user · cấm Dev note · View ≠ Input xám |
| T-UI-UX-01 | Dev | **pending** | spacing · **bỏ filterMaxWidthPx** · slideout 2-col |
| T-UI-HIST-01 | Dev | **pending** | `LinCatalogHistoryModal` stub OK · cấm native alert |
| T-UI-AI-01 | — | **n/a** | no S-DETECT capture · **cấm** ai-detect slash |
| T-UI-AI-FORM-01 | — | **n/a** | HITL = confirm modal trên form list (T-UI-ACT) |
| T-BE-AI-01 | — | **n/a** | generate stub = API-04/05 trong T-BE-CRUD |
| T-UI-MAP-01 | — | **n/a** | no S-MAP |
| T-QA-CRUD-01 | QA | **pending** | Create→Edit→View→Confirm→Delete + config FULL |
| T-QA-LEAVE-01 | QA | **pending** | dirty leave Modal |
| T-QA-AI-01 | QA | **pending** | from-incident/from-defects smoke · **0** AI badge · e2eQa ON |
| T-LIB-01 | — | **n/a** | Lin* đã có |

**GAP-TL-FORMTYPE-01:** closed — đủ list + ai(S-LIST) ids · LKP/FIELD/PROD/CFG/UISCHEMA.  
**GAP-TL-DEV-ASSIGN-01:** closed — `devSlash=/agent-dev`.

---

## Task pack (detail)

### T-CTX-01
**layer:** docs  
**status:** **done** (TL)  
**ssot.reuse:** DOMAIN-MAP · design · solution · controlHint  
**DoD:**
- [x] Context + control-map khớp design+solution
- [x] Path canonical `api/v1/ai-vision/estimates` (not `/ai-estimate`)
- [x] route locked `/ai-vision/estimate`
- [x] MFE ownership `Linm.Web.RMMS.AiVision` documented

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.estimates.read|create|update|delete|confirm`  
**devSlash:** `/agent-dev`  
**ssot.reuse:** `Linm.Platform.Authentication` · catalog-list-permissions  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments
- [ ] Confirm perm riêng

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**from_solution:** API-01…09 · `EstimateAuditEntity` · `EstimateLineEntity`  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**skills:** `/new-endpoint` · `/review-query` · `/implement-view-cross-company` · `/review-timezone-implement` · `/implement-shared-table`  
**gates:** TZ · XCO get_only · SHARE tenant  
**DoD:**
- [ ] ApiResponse / paged · search must work · pageSize ∈{50,100,200,500}
- [x] **IN:** API-01 query **`sourceType`** (GAP-SA-EST-01)
- [ ] from-incident / from-defects stub generate · draft/confirm/delete
- [ ] Lines child table — **cấm** `*LinesJson`
- [ ] Confirm **không** tạo WO
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**from_solution:** API-02  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [ ] `{ statuses[], sourceTypes[], defectTypes[], severities[], unitCatalog[], hostIncidents[] }`
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** hardcode enum
- [ ] Status values **Draft** / **Confirmed**

### T-BE-UISCHEMA-01
**layer:** api Integration  
**status:** pending  
**from_solution:** GAP-SA-EST-02 · catalogKind=`ai-estimates`  
**skills:** CatalogUiSchemaRegistry · Seed  
**DoD:**
- [ ] `CatalogUiSchemaRegistry` + Seed columns (code · incident · source · route · defect · total · status · model · createdAt)
- [ ] GET/PUT `/api/v1/integration/catalogs/ai-estimates/ui-schema`
- [ ] **cấm** `configHint`

### T-MIG-01
**layer:** migration  
**status:** **verify / no-op** (exists)  
**ssot.reuse:** `/database-migration`  
**DoD:**
- [x] Named migration **`Schema_RmmsAiVisionEstimates`** (audits + lines) — live present
- [ ] Only delta if UISCHEMA seed needs migration companion
- [ ] **cấm** parent JSON · **cấm** regen full table without need
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff  
**status:** pending (verify + forward sourceType)  
**ssot.reuse:** `/create-bff-api-feature` · proxy-only  
**DoD:**
- [ ] Proxy-only `web-bff/api/v1/ai-vision/estimates/**`
- [ ] Forward `Authorization` · `X-Company-Id` · list query incl. **`sourceType`**
- [ ] Ui-schema **không** clone vào AiVision BFF (Integration)
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/ai-vision/estimate`  
**devSlash:** `/agent-dev`  
**from_design:** zones A,B,FILTER,C0–C3,D,F,H · reviewUrl  
**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,C0,C1,C2,C2a,C3,D,F,H,Z
  ui_page: LinPageLayout (kind=catalog) · flex root (GAP-P2-LAYOUT-06)
  ui_filter: **T-UI-FILTER-01** · `estimate-filter-bar.md` · LinErpListFilterBar + status + **sourceType** + Date from/to — cấm ErpListHeaderFilters / nút Tìm
  ui_toolbar: catalogToolbar FULL + from-incident/from-defects/export · **no AI badge**
  ui_grid: LinCatalogDataGrid · `columns={buildDynamicGridColumns(schema, uiColumns)}` · resizable ON
  ui_footer: LinCatalogListPagination ONLY
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/estimates/init-data only

**APIs:** API-01 · API-02  
**deps:** T-BE-CRUD-01 · T-BE-UISCHEMA-01 · T-PERM-01 · T-UI-CFG-01  

**DoD:**
- [ ] A–D+F parity · search work · **không** AI badge header
- [ ] Filter = **T-UI-FILTER-01** (không wire lệch context)
- [ ] **IN:** remove leftover `const columns` / static `LinCatalogDataColumn[]`
- [ ] BASE list = `/ai-vision/estimates`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-FILTER-01 — List filter bar

**status:** **done**  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`
  - context: `Linm.RMMS.Data/docs/context/features/estimate-filter-bar.md`

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · `data-lin-list-layout="erp-filter-bar"`
  ui_layout: title trái · mọi input + 🔍 cụm phải
  init_data: statuses + sourceTypes từ GET `…/estimates/init-data`
  http: `search` · `status` · `sourceType` · `from` · `to`

**implement.filter:**
  bar: LinErpListFilterBar · onSearch trên bar
  leading: Search + Status + Nguồn — **cấm** wrapper `.filterRow`
  date: from/to empty = tất cả (cấm default Hôm nay)
  cấm: ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · export trên bar

**deps:** T-BE-CRUD-01 (`sourceType` query) · T-BE-INIT-01  
**DoD:**
- [x] Context fields 1:1 · V1–V5 PASS
- [x] Search + status + sourceType + from/to work
- [x] `rg` 0 `ErpListHeaderFilters` / `LinListFilterField` trên EstimateListPage
- [x] `yarn build` PASS

### T-UI-CFG-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-BE-UISCHEMA-01  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · kind=`ai-estimates`
- [ ] `useCatalogUiSchema` · bảng cột List/width/filter/sort/Thêm cột
- [ ] **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột (GAP-SA-EST-03 / GAP-P2-CC-06)
- [ ] `yarn build` PASS

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**from_design:** Kind D Slideout Z1–Z3 · footer_actions_only · lines `pattern_inline_grid`  
**ssot.reuse:** `/erp-form-context` · `slideout-form-layout` · `dev-form-review-checklist`  
**APIs:** API-03 · API-04 · API-05 · API-06 · API-07 · API-08 · API-09  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View · **View = `<dl>` / display** — **cấm** Input `readOnly` xám toàn form
- [ ] Footer only: Hủy / Lưu nháp / Xác nhận / Gắn CV — **cấm** top actions Z1
- [ ] Lines Thêm/Sửa/Xóa · total computed
- [ ] Dropdown từ init-data only
- [ ] `yarn build` PASS

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  
**ssot.reuse:** design action map · apiClient  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST C1 | SearchTextInput | GET `?search=` |
| Filters | FILTER | Dropdown/Date | GET `status` · **`sourceType`** · `from` · `to` |
| Clear filter | FILTER | reset | GET |
| Refresh | toolbar | reloadAll | GET |
| + Tạo | toolbar | openCreate | — / POST from-* |
| Từ sự cố | toolbar | from-incident | POST `/from-incident/{id}` |
| Từ detections | toolbar | from-defects | POST `/from-defects` |
| Export | toolbar | stub toast | — |
| Config | toolbar | ui-schema modal | GET/PUT `ai-estimates` |
| History | toolbar/row | LinCatalogHistoryModal | stub |
| Row View/Edit | row menu | openRow | GET · PUT |
| Row Confirm | row/form | confirm modal | POST `/{id}/confirm` |
| Row Delete | row | soft-delete draft | DELETE |
| Lưu nháp | footer | draft | POST `/{id}/draft` |
| Gắn CV | footer | stub toast | — **no auto WO** |

**DoD:**
- [ ] Inventory đủ · search work · no dead Create/Edit
- [ ] `yarn build` PASS

### T-UI-LEAVE-01
**layer:** ui  
**status:** pending (verify/harden)  
**ssot.reuse:** `/implement-show-leave-confirm`  
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] leave-confirm khi dirty (Đóng / backdrop / route leave)
- [ ] snapshot restore on Hủy
- [ ] **cấm** `window.confirm` / `alert`
- [ ] `yarn build` PASS

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-INIT-01  
**DoD:**
- [ ] List/form Dropdown status · sourceType · defectType · severity = Lin `Select` từ init-data — **cấm** native `<select>` · **cấm** hardcode
- [ ] `incidentId` = SearchInput / hostIncidents P1 (Text OK nếu stub) — **cấm** free invent API
- [ ] UnitPriceCatalog lookup **DEFER P2**

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-CRUD-01  
**DoD:**
- [ ] control-map §5 ↔ EstimateDto / UpdateEstimateRequest / lines DTO
- [ ] List query keys: `search` · `status` · `sourceType` · `from` · `to` · `page` · `pageSize`
- [ ] lineAmount = qty × unitPrice · totalAmount computed
- [ ] Date TZ → UTC bounds

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-UI-LIST-01  
**DoD:**
- [ ] End-user copy · **cấm** note Dev / demo chrome trên production surface
- [ ] **cấm** Resource shell · **cấm** View=`readOnly` Input xám — CLOSED cùng T-UI-FORM
- [ ] Form = Kind D Slideout (Design) — **không** đổi Full-page

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**ssot.reuse:** `dev-ui-ux-constitution` · spacing 4/8/16 · slideout 2-col  
**deps:** T-UI-FORM-01 · T-UI-LIST-01  
**DoD:**
- [ ] **IN:** bỏ `filterMaxWidthPx={720}` trên `LinPageLayout` / `ErpListHeaderFilters`
- [ ] Spacing / typography parity catalog
- [ ] View mode display · footer View actions
- [ ] `yarn build` PASS

### T-UI-HIST-01
**layer:** ui  
**status:** pending  
**ssot.reuse:** `dev-history-alert-overlay`  
**DoD:**
- [ ] `LinCatalogHistoryModal` stub OK P1
- [ ] Delete/confirm = `Modal` / `useAlert` — **cấm** native dialog
- [ ] Overlay `stacked` với form/confirm

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-UI-FORM-01 · T-UI-CFG-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Confirm→Delete draft + row menu
- [ ] Search/filter(sourceType/dates)/pagination · lines edit · no auto WO
- [ ] Config FULL editor (không Zone F-only / configHint)
- [ ] Update `qa/scenarios.md`

### T-QA-LEAVE-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-LEAVE-01  
**DoD:**
- [ ] Dirty leave-confirm paths covered (Modal · không native)
- [ ] Update `qa/scenarios.md`

### T-QA-AI-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**e2eQa:** **ON** — `yarn start:std` + docker + `yarn e2e-qa` + screenshot  
**DoD:**
- [ ] from-incident / from-defects smoke
- [ ] **0** AI badge header
- [ ] mfeStdUrl `http://localhost:9303/ai-vision/estimate`
- [ ] Update `qa/scenarios.md`

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 (verify)
  → T-BE-INIT-01
  → T-BE-UISCHEMA-01
  → T-BE-CRUD-01 (+ sourceType)
  → T-BFF-01
  → T-PERM-01
  → T-UI-CFG-01 → T-UI-LIST-01 · **T-UI-FILTER-01**
  → T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01 → T-UI-PROD-01
  → T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-HIST-01 · T-UI-UX-01
  → verify: MFE yarn build PASS · BE dotnet build PASS
  → T-QA-CRUD-01 · T-QA-LEAVE-01 · T-QA-AI-01 → Review
```

## System design flags

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | required | common-components only |
| SD-LIB-BE | required | CommonLib ApiResponse |
| SD-AUTH | stub | RequirePermission when CommonLib ready |
| SD-BFF | required | Proxy only |
| SD-HEADER | required | `X-Company-Id` |
| SD-TENANT | required | share_tenant |
| SD-NO-JSON | required | child lines table |
| SD-SEARCH | required | search must work |
| SD-TZ | required | tz_required |
| SD-XCO | required | xco_get_only |
| SD-SHARE | required | share_tenant |
| SD-INIT | required | Dropdown từ init-data |
| SD-CONFIG | required | ui-schema `ai-estimates` FULL |

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · implement `specs/estimate/implement/estimate.md` |
| Gate trước Dev | board tick **beRepo && uiRepo** (**không auto**) |
| Priority | T-BE-UISCHEMA + T-BE-CRUD(sourceType) + T-UI-CFG → **T-UI-FILTER-01** (`estimate-filter-bar.md`) → T-UI-LIST/FORM/ACT/LEAVE/LKP/FIELD/PROD/UX |
| Anti-dup | reuse AiVision list/form patterns · **tách** estimate tables · **cấm** rewrite migration nếu PASS |
| HARD | `tl-retry-ssot-rereview` · fix **all** GAP cùng surface · build PASS trước completed |
| Must-fix | GAP-SA-EST-01…04 · leftover columns · View dl · filterMaxWidthPx |
| Cấm | ERP.* · `*LinesJson` · `/ai-estimate` · AI badge header · auto WO · nested CatalogListShell · `configHint` · `/agent-dev-ai-detect` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T14:50:00.000Z |
| versionGate | ok |
| taskId | `task_a88111e4` |
| contentHash (data-analy) | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=2 · workflowVersion=2026.08.16.02 · versionGate=ok -->
