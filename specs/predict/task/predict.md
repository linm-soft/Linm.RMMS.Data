# Team lead — tasks — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `ai` · Kind **B+D** (S-LIST required · **no** S-DETECT capture) |
| featureClass | `ai` |
| solution_confirm | **approve** (autoApprove=ON · task_fe23f841) |
| design_confirm | **approve** (autoApprove=ON · reviewUrl) |
| route_confirm | **route_a** (locked · `/ai-kd/du-bao-bt`) |
| autoApprove | **ON** |
| be_repo_confirm | **pending** (board tick · **không auto**) |
| ui_repo_confirm | **pending** (board tick · **không auto**) |
| taskId | `task_16a1a724` |
| updatedAt | `2026-08-24T17:30:00.000Z` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| contentHash (data-analy) | `sha256:predict-ctx-demo-20260817` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `form-type-task-pack.md` · `tl-grid-task-template.md` · `tl-design-grid-component-map.md` · `tl-grid-full-flow.md` · `tl-list-shell-height.md` · `tl-catalog-list-parity.md` · `tl-retry-ssot-rereview.md` · `slideout-form-layout.md` · `list-form-quality-gates.md` · `agent-dev-assign.md` · `rmms-form-agent-map.md` |
| **devSlash** | **`/agent-dev`** — **cấm** `/agent-dev-ai-detect` (Design + `rmms-form-agent-map` · `predict`) |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/predict/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-CFG · T-UI-FORM · T-UI-ACT · T-UI-LEAVE · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-UI-HIST · T-CTX |
| Solution | `specs/predict/be/solution-discovery.md` · **confirmed** | T-BE-CRUD · T-BE-INIT · T-BE-UISCHEMA · T-MIG · T-BFF · T-PERM · gates TZ/XCO/SHARE |
| Prototype | `ui/prototype/predict-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/predict-control-hint.md` | T-UI-LKP · T-UI-FIELD · filters + grid |
| PO | `specs/predict/po/requirement.md` | Config FULL · Leave · no AI badge · no auto WO |

**SA chốt:** live CRUD/BFF/migration **đã có** · Must-fix P0 **GAP-SA-PRD-JSON-01** · **GAP-SA-PRD-01** · **GAP-SA-PRD-02** · catalogKind=`ai-predict` · **cấm ERP.*** · **cấm** parent `DriversJson` · **cấm** `/ai-predict`.

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` stub OK |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | `ai-vision.predict.*` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local `authSlice` / `uiSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity + **PredictDriverEntity** child | parent `DriversJson` |
| BFF | proxy only | business logic in BFF |
| Dropdown | GET `…/predict/init-data` | hardcode enum FE (fallback OK P1 stub) |
| Config | `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema` | `configHint` · `LinListTableConfigModal` cột |
| Path | `api/v1/ai-vision/predict` | legacy `/ai-predict` · **ERP.*** |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| `source.routes` | `/ai-kd/du-bao-bt` · Slideout `?section=` · **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **AiVision** (`ai-vision`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/AiVision/` · `AiVisionPredictController` |
| `source.bff` | `bff/domains/ai-vision/` · proxy `web-bff/api/v1/ai-vision/predict/**` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| `source.uiSchema` | Integration `CatalogUiSchemaRegistry` + Seed · kind **`ai-predict`** |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/predict.html` |
| Context | `Linm.RMMS.Data/docs/context/features/predict.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/predict/ui/prototype/predict-list-prototype.html` |
| `mfeStdRoute` | `/ai-kd/du-bao-bt` (**locked**) |
| `mfeStdUrl` | `http://localhost:9303/ai-kd/du-bao-bt` |
| peerStdUrl | `http://localhost:9303/ai-kd/uoc-luong-sc` |
| beRepo / uiRepo | **pending board** trước Dev |

### route_confirm (autoApprove=ON · keep prior lock)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/ai-kd/du-bao-bt` | MFE AiVision · live `index.tsx` |
| B | `/ai-vision/predict` | legacy slug · **không chọn** |
| API (canonical) | `api/v1/ai-vision/predict` | BFF proxy · **không đổi** theo MFE slug |

## API contract (from solution)

Base BE: `api/v1/ai-vision/predict` · BFF: `web-bff/api/v1/ai-vision/predict` · FE BASE: **`/ai-vision/predict`**.

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/predict/priority-list` |
| API-02 | GET | `/api/v1/ai-vision/predict/init-data` |
| API-03 | GET | `/api/v1/ai-vision/predict/sections/{sectionId}` |
| API-04 | POST | `/api/v1/ai-vision/predict/sections/{sectionId}` |
| API-05 | POST | `/api/v1/ai-vision/predict/batch` |
| API-06 | GET | `/api/v1/ai-vision/predict/sections/{sectionId}/history` |
| API-07 | PUT | `/api/v1/ai-vision/predict/sections/{sectionId}/note` |
| API-08 | POST | `/api/v1/ai-vision/predict/sections` |
| API-09 | DELETE | `/api/v1/ai-vision/predict/sections/{sectionId}` |
| L-01 | init-data `routes` / `recommends` / `drivers` | Dropdown Zone B + form |
| UI-S | GET/PUT | `/api/v1/integration/catalogs/ai-predict/ui-schema` |

## Implement gates

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_required** | API-01/03/04/06/07 · `predictedAt` · audit `at` |
| XCO | **xco_get_only** | API-03 GET `/sections/{sectionId}` |
| SHARE | **share_tenant** | PredictResult + Audit + Drivers |

## DES-GRID → Lin* (HARD)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-road` · **no AI badge** |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` |
| FILTER | DES-GRID-FILTER | Dropdown routeId · Text horizon/topN/scoreMin · Áp dụng/Xóa lọc |
| KPI | DES-GRID-KPI | Strip count · avg score · major_rehab · horizon |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** · kind=`ai-predict` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

---

## retry.ssot_rereview (TL **trước** handoff Dev · live 2026-08-24 · `task_16a1a724`)

Live: `Linm.Web.RMMS.AiVision/src/pages/PredictListPage/PredictListPage.tsx` · `PredictFormSlideout.tsx` · BE `AiVisionPredictController`.

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` · cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | **FAIL** — grid present · leftover `const columns` / `LinCatalogDataColumn[]` (chưa `buildDynamicGridColumns`) |
| 3 | Footer `LinCatalogListPagination` · cấm footerPagination / pageSizeBar | **PASS** |
| 4 | flex + skeleton / LAYOUT-06 | **PASS** (`useServerPagedListLoading` · title+toolbar+grid) |
| 5 | Toolbar config FULL · `LinCatalogUiSchemaEditorModal` | **FAIL** — `configHint` placeholder (**GAP-SA-PRD-02** / GAP-P2-CC-06) |
| 6 | Filter Zone B: routeId · horizon · topN · scoreMin work | **PARTIAL** — filters work · **FAIL** `ErpListHeaderFilters` + `filterMaxWidthPx={960}` (**GAP-TL-FILTER-01**) |
| 7 | KPI strip | **PASS** (domainBar KPI) |
| 8 | BE ui-schema seed `ai-predict` | **FAIL** — registry/seed missing (**GAP-SA-PRD-01**) |
| 9 | BE parent `DriversJson` | **FAIL** — vi phạm `no-parent-json-field` (**GAP-SA-PRD-JSON-01**) |
| 10 | list_parity Kind B A–D+F | **FAIL** — F missing · filter wrapper lệch SSOT |
| 11 | tree_master? | **n/a** |
| 12 | Form Kind D footer-only + LeaveConfirmModal | **PASS** (`useLeaveConfirm` + footer actions) |
| 13 | View display (cấm Input readOnly xám toàn form) | **FAIL** — view mode dùng `Input readOnly` (**T-UI-PROD** / GAP-DES-VIEW-DL) |
| 14 | Dropdown từ init-data | **PARTIAL** — Select init-data OK · fallback hardcode khi empty |
| 15 | History modal | **FAIL** — custom `Modal` markup thay vì `LinCatalogHistoryModal` (**GAP-SA-PRD-03**) |
| 16 | T-UI-UX cấm `filterMaxWidthPx` | **FAIL** — `filterMaxWidthPx={960}` (**T-UI-UX-01**) |
| 17 | no AI badge header | **PASS** |
| 18 | Confirm **không** auto WO | **PASS** (stub toast only) |
| 19 | `[RequirePermission]` wire | **PARTIAL** — TODO comment (**GAP-SA-PRD-04** P1 stub OK) |

**Cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface list/form. Ghi `retry.ssot_rereview` trên implement MD.

### Gaps (this pack — Must-fix trước QA)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| **GAP-SA-PRD-JSON-01** | Parent `DriversJson` vi phạm `no-parent-json-field` | **T-MIG-02** · **T-BE-CRUD-01** | **OPEN P0** |
| **GAP-SA-PRD-01** | CatalogUiSchema `ai-predict` missing | **T-BE-UISCHEMA-01** | **OPEN P0** |
| **GAP-SA-PRD-02** | MFE `configHint` + leftover columns | **T-UI-CFG-01** · **T-UI-LIST-01** | **OPEN P0** |
| **GAP-SA-PRD-03** | History custom Modal | **T-UI-HIST-01** · **T-UI-ACT-01** | **OPEN P1** |
| **GAP-SA-PRD-04** | `[RequirePermission]` TODO | **T-PERM-01** | **OPEN P1 stub OK** |
| **GAP-TL-FILTER-01** | `ErpListHeaderFilters` + filterMaxWidthPx | **T-UI-LIST-01** · **T-UI-UX-01** | **OPEN P1** |
| GAP-TL-GRID-BOOTSTRAP-01 | leftover `const columns` | **T-UI-LIST-01** · **T-UI-CFG-01** | **OPEN P0** |
| GAP-DES-VIEW-DL | View Input readOnly xám | **T-UI-FORM-01** · **T-UI-PROD-01** | **OPEN P0** |
| GAP-F-PRD-01 / 04 / EVT | Local train · auto WO · event | — | **DEFER P2** |

---

## FormType pack (canonical — `form-type-task-pack` §2a list + §2c ai · S-LIST)

`packKind=ai` + S-LIST → **list pack ids REQUIRED** · detect capture ids **n/a** (predict batch/rerun = toolbar API-04/05 · **devSlash=/agent-dev**).

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context + ownership · DOMAIN-MAP path |
| T-PERM-01 | Dev | **pending** | `ai-vision.predict.read\|create\|update\|delete\|run` |
| T-BE-CRUD-01 | Dev | **partial** | API-01…09 · drivers child migration |
| T-BE-INIT-01 | Dev | **verify** | API-02 init-data verify |
| T-BE-UISCHEMA-01 | Dev | **pending** | Registry + Seed **`ai-predict`** (GAP-SA-PRD-01) |
| T-MIG-01 | Dev | **verify / no-op** | `Schema_RmmsAiVisionPredict` exists |
| T-MIG-02 | Dev | **pending** | `Schema_RmmsAiVisionPredictDrivers` · drop DriversJson |
| T-BFF-01 | Dev | **verify / extend** | proxy predict |
| T-UI-LIST-01 | Dev | **pending** | A–D+F+KPI · no AI badge · **cấm** leftover columns |
| T-UI-CFG-01 | Dev | **pending** | `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout · drivers · chart stub · footer only · View `<dl>` |
| T-UI-ACT-01 | Dev | **pending** | batch · rerun · major/attach stub · row menu |
| T-UI-LEAVE-01 | Dev | **verify / harden** | LeaveConfirmModal already · cover dirty note |
| T-UI-LKP-01 | Dev | **pending** | routes/recommends/drivers init-data · cấm hardcode |
| T-UI-FIELD-01 | Dev | **pending** | control-map ↔ DTO/API · filter query keys |
| T-UI-PROD-01 | Dev | **pending** | end-user · cấm Dev note · View ≠ Input xám |
| T-UI-UX-01 | Dev | **pending** | score badge · **bỏ filterMaxWidthPx** · spacing |
| T-UI-HIST-01 | Dev | **pending** | `LinCatalogHistoryModal` · cấm custom history Modal |
| T-UI-AI-01 | — | **n/a** | no S-DETECT capture · **cấm** ai-detect slash |
| T-QA-CRUD-01 | QA | **pending** | list+form+config FULL smoke |
| T-QA-LEAVE-01 | QA | **pending** | dirty leave Modal |
| T-QA-AI-01 | QA | **pending** | batch/rerun smoke · **0** AI badge · e2eQa ON |
| T-RV-01 | Review | **pending** | findings |

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
- [x] Path canonical `api/v1/ai-vision/predict` (not `/ai-predict`)
- [x] route locked `/ai-kd/du-bao-bt` (MFE) · API giữ `ai-vision/predict`
- [x] MFE ownership `Linm.Web.RMMS.AiVision` documented

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.predict.read|create|update|delete|run`  
**devSlash:** `/agent-dev`  
**ssot.reuse:** `Linm.Platform.Authentication` · catalog-list-permissions  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments → wire when ready
- [ ] Run perm riêng `ai-vision.predict.run`

### T-BE-CRUD-01
**layer:** api  
**status:** partial (live present · drivers delta)  
**from_solution:** API-01…09 · `PredictAuditEntity` · **PredictDriverEntity**  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**skills:** `/new-endpoint` · `/review-query` · `/implement-view-cross-company` · `/review-timezone-implement` · `/implement-shared-table`  
**gates:** TZ · XCO get_only · SHARE tenant  
**DoD:**
- [x] ApiResponse / paged · filters route/scoreMin/topN/sort work
- [ ] Drivers child table — **cấm** parent `DriversJson` (GAP-SA-PRD-JSON-01)
- [ ] Batch + rerun + note CRUD + soft-delete
- [ ] Confirm **không** auto WO
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** verify  
**from_solution:** API-02  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [x] `{ routes[], recommends[], drivers[], defaultHorizonMonths, defaultTopN }` live present
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** hardcode fallback production

### T-BE-UISCHEMA-01
**layer:** api Integration  
**status:** pending  
**from_solution:** GAP-SA-PRD-01 · catalogKind=`ai-predict`  
**skills:** CatalogUiSchemaRegistry · Seed  
**DoD:**
- [ ] `CatalogUiSchemaRegistry` + Seed columns (rank · sectionId · name · score · remainingLife · recommend · model · predictedAt · meta optional)
- [ ] GET/PUT `/api/v1/integration/catalogs/ai-predict/ui-schema`
- [ ] **cấm** `configHint`

### T-MIG-01
**layer:** migration  
**status:** **verify / no-op** (exists)  
**ssot.reuse:** `/database-migration`  
**DoD:**
- [x] Named migration **`Schema_RmmsAiVisionPredict`** (results + audits) — live present
- [ ] **cấm** regen full table without need
- [ ] `dotnet build` PASS

### T-MIG-02
**layer:** migration  
**status:** pending  
**from_solution:** GAP-SA-PRD-JSON-01  
**DoD:**
- [ ] Named migration **`Schema_RmmsAiVisionPredictDrivers`**
- [ ] Backfill DriversJson → child rows · drop parent column
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff  
**status:** verify (live present)  
**ssot.reuse:** `/create-bff-api-feature` · proxy-only  
**DoD:**
- [x] Proxy-only `web-bff/api/v1/ai-vision/predict/**`
- [ ] Forward `Authorization` · `X-Company-Id` · list query params
- [ ] Ui-schema **không** clone vào AiVision BFF (Integration)
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/ai-kd/du-bao-bt`  
**devSlash:** `/agent-dev`  
**from_design:** zones A,B,FILTER,KPI,C0–C3,D,F,H · reviewUrl  
**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,KPI,C0,C2,C2a,C3,D,F,H,Z
  ui_page: LinPageLayout (kind=catalog) · flex root (GAP-P2-LAYOUT-06)
  ui_filter: Zone B Dropdown routeId · Text horizon/topN/scoreMin · apply/clear — cấm duplicate toolbar search
  ui_toolbar: catalogToolbar FULL + batch/export/dashboard/sort KPI/history · **no AI badge**
  ui_grid: LinCatalogDataGrid · `columns={buildDynamicGridColumns(schema, uiColumns)}` · resizable ON
  ui_footer: LinCatalogListPagination ONLY
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/predict/init-data only

**APIs:** API-01 · API-02  
**deps:** T-BE-CRUD-01 · T-BE-UISCHEMA-01 · T-PERM-01 · T-UI-CFG-01  

**DoD:**
- [ ] A–D+F+KPI parity · filters work · **không** AI badge header
- [ ] **IN:** remove leftover `const columns` / static `LinCatalogDataColumn[]`
- [ ] **IN:** remove `ErpListHeaderFilters` / `filterMaxWidthPx` (→ T-UI-UX-01)
- [ ] BASE list = `/ai-vision/predict`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-CFG-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-BE-UISCHEMA-01  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · kind=`ai-predict`
- [ ] `useCatalogUiSchema` · bảng cột List/width/filter/sort/Thêm cột
- [ ] **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột (GAP-SA-PRD-02)
- [ ] `yarn build` PASS

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**from_design:** Kind D Slideout Z1–Z3 · footer_actions_only · drivers · chart stub  
**ssot.reuse:** `/erp-form-context` · `slideout-form-layout` · `dev-form-review-checklist`  
**APIs:** API-03 · API-04 · API-07  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode View/Edit note · **View = `<dl>` / display** — **cấm** Input `readOnly` xám toàn form
- [ ] Footer only: Hủy · Lưu ghi chú · Ưu tiên đại tu · Gắn kế hoạch BT · Chạy lại · Đóng
- [ ] Drivers list · chart PCI stub bars
- [ ] Dropdown recommend từ init-data
- [ ] `yarn build` PASS

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Filters apply/clear | FILTER | applyFilters / reset | GET priority-list |
| Refresh | toolbar | reloadAll | GET |
| Batch predict | toolbar | handleBatchPredict | POST `/batch` |
| Export stub | toolbar | toast | — |
| Dashboard stub | toolbar | toast | — |
| Sort score | toolbar | sortDesc toggle | GET |
| Refresh KPI | toolbar | reloadAll | GET |
| Config | toolbar | ui-schema modal | GET/PUT `ai-predict` |
| History | toolbar/row | LinCatalogHistoryModal | GET `/history` |
| Row View/Edit | row menu | openForm | GET · PUT note |
| Row predict one | row menu | handlePredictOne | POST `/sections/{id}` |
| Row major rehab | row menu | stub toast | — **no auto WO** |
| Lưu ghi chú | footer | handleSaveNote | PUT `/note` |
| Gắn kế hoạch BT | footer | stub toast | — |
| Chạy lại | footer | predict one | POST |

**DoD:**
- [ ] Inventory đủ · no dead actions
- [ ] `yarn build` PASS

### T-UI-LEAVE-01
**layer:** ui  
**status:** verify/harden (live present)  
**ssot.reuse:** `/implement-show-leave-confirm`  
**deps:** T-UI-FORM-01  
**DoD:**
- [x] leave-confirm khi dirty note (`useLeaveConfirm`)
- [ ] cover all dirty paths (backdrop · route leave)
- [ ] **cấm** `window.confirm` / `alert`
- [ ] `yarn build` PASS

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-INIT-01  
**DoD:**
- [ ] List/form Dropdown routeId · recommend = Lin `Select` từ init-data — **cấm** native `<select>` · **cấm** hardcode production
- [ ] drivers[] labels từ init-data `drivers`
- [ ] P2 road-route SearchInput **DEFER**

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-CRUD-01  
**DoD:**
- [ ] controlHint §7 ↔ PredictSectionDto / UpdateNoteRequest
- [ ] List query keys: `routeId` · `horizonMonths` · `topN` · `scoreMin` · `page` · `pageSize` · `sortDesc`
- [ ] Date TZ → UTC bounds on `predictedAt`
- [ ] drivers[] mapped from child entity (post T-MIG-02)

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-UI-LIST-01  
**DoD:**
- [ ] End-user copy · **cấm** note Dev / demo chrome on production surface
- [ ] **cấm** Resource shell · **cấm** View=`readOnly` Input xám
- [ ] Form = Kind D Slideout (Design) — **không** đổi Full-page

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**ssot.reuse:** `dev-ui-ux-constitution` · score badge severity · spacing 4/8/16  
**deps:** T-UI-FORM-01 · T-UI-LIST-01  
**DoD:**
- [ ] **IN:** bỏ `filterMaxWidthPx={960}` trên filter wrapper
- [ ] Score badge stOk/stWarn/stBad parity design
- [ ] View mode display · footer View actions
- [ ] `yarn build` PASS

### T-UI-HIST-01
**layer:** ui  
**status:** pending  
**ssot.reuse:** `dev-history-alert-overlay` · `LinCatalogHistoryModal`  
**DoD:**
- [ ] Replace custom history `Modal` with `LinCatalogHistoryModal` (GAP-SA-PRD-03)
- [ ] Delete = `Modal` / `useAlert` — **cấm** native dialog
- [ ] Overlay `stacked` với form

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-UI-FORM-01 · T-UI-CFG-01  
**DoD:**
- [ ] Smoke list filters · batch · row predict · note save · config FULL
- [ ] Pagination · KPI · no auto WO
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
- [ ] batch + rerun smoke
- [ ] **0** AI badge header
- [ ] mfeStdUrl `http://localhost:9303/ai-kd/du-bao-bt`
- [ ] Update `qa/scenarios.md`

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 (verify)
  → T-MIG-02 (drivers child)
  → T-BE-INIT-01 (verify)
  → T-BE-UISCHEMA-01
  → T-BE-CRUD-01 (+ drivers mapping)
  → T-BFF-01 (verify)
  → T-PERM-01
  → T-UI-CFG-01 → T-UI-LIST-01
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
| SD-NO-JSON | required | child drivers table |
| SD-TZ | required | tz_required |
| SD-XCO | required | xco_get_only |
| SD-SHARE | required | share_tenant |
| SD-INIT | required | Dropdown từ init-data |
| SD-CONFIG | required | ui-schema `ai-predict` FULL |
| SD-AI-CHROME | required | no AI badge header |

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · implement `specs/predict/implement/predict.md` |
| Gate trước Dev | board tick **beRepo && uiRepo** (**không auto**) |
| Priority | T-MIG-02 + T-BE-UISCHEMA + T-BE-CRUD(drivers) → T-UI-CFG → T-UI-LIST/FORM/ACT/LEAVE/LKP/FIELD/PROD/UX/HIST |
| Anti-dup | reuse AiVision list/form patterns · peer Estimate · **cấm** rewrite migration nếu PASS |
| HARD | `tl-retry-ssot-rereview` · fix **all** GAP cùng surface · build PASS trước completed |
| Must-fix | GAP-SA-PRD-JSON-01 · GAP-SA-PRD-01 · GAP-SA-PRD-02 |
| Cấm | ERP.* · parent DriversJson · nested CatalogListShell · `/ai-predict` · `configHint` · AI header badge · auto WO · `/agent-dev-ai-detect` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-24T17:30:00.000Z |
| versionGate | ok |
| taskId | `task_16a1a724` |
| contentHash (data-analy) | `sha256:predict-ctx-demo-20260817` |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=2 · workflowVersion=2026.08.16.02 · versionGate=ok -->
