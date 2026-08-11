# Team lead — tasks — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` (Kind B) |
| solution_confirm | **approve** (autopilot · task_79203f46) |
| updatedAt | 2026-08-10T16:00:00.000Z |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · **`form-type-task-pack.md`** |
| **Recheck** | full_pipeline · task_79203f46 · **`tl-retry-ssot-rereview` + LAYOUT-06 HARD** |
| **CRUD gap** | `task_98b1aa0e` · `gap=crud_formtype` · mode=`fix_gaps` · **cấm** rewrite T-UI-LIST |
| **Supersedes** | task/implement cũ ERP · **rework RMMS** |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/asset/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-CTX — zones **A–D** · Slideout Z1–Z3 · type select · icon map |
| Solution | `specs/asset/be/solution-discovery.md` | T-BE · T-BFF · T-PERM — API-01…05 · `RoadAssetEntity` · route `/api/v1/asset/road-assets` · no-parent-json |
| Prototype | `ui/prototype/asset-list-prototype.html` | UI DoD parity |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | perm codes · admin/event |

## Implement HOW (TL — ref erp-form-context)

| Topic | Decision (asset pack) |
|-------|------------------------|
| **Wire** | Page → `services/asset/endpoint.ts` → `apiClient` (common) → `web-bff/api/v1/asset/road-assets` → `api/v1/asset/road-assets` |
| **List state** | Page hooks + optional feature slice cache — **không** local auth/ui slice |
| **Form state** | Kind B Slideout — form local/controller nhẹ theo `/erp-form-context` |
| **Redux common** | `authReducer` / toast từ common-components |
| **Skills** | `/erp-form-context` · catalog toolbar · review-grid · leave-confirm · **`tl-retry-ssot-rereview`** |
| **Ref** | `tl-implement-architecture.md` · `tl-catalog-list-parity.md` · `tl-grid-ssot.md` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local `authSlice` / `uiSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity columns | parent `*LinesJson` |
| BFF | proxy only | business logic in BFF |

**Cấm** fork component/envelope · `ERP.*` · parent `*Json` · Dev tự invent wire/state · duplicate common capability.

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | `/asset` · Slideout form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `api/domains/asset/LINM.RMMS.Asset.Models/` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| Demo | `Linm.RMMS.Demo/src/demo/asset/` |
| Context | `Linm.RMMS.Data/docs/context/features/asset.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/asset-list-prototype.html` |
| `mfeStdRoute` | `/asset` (**route_confirm** locked) |

## API contract (from solution)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/road-assets` |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` |
| API-03 | POST | `/api/v1/asset/road-assets` |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` (soft) |

BFF: `web-bff/api/v1/asset/road-assets/**`. FE BASE: **`/asset/road-assets`**.

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **n/a** | — | không date filter P1 |
| XCO | **required** (`get_only`) | API-02 · T-BE-01 | `/implement-view-cross-company` |
| SHARE | **tenant_keep** | `RoadAssetEntity` | giữ tenant filter |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | Align codes với Authentication khi NuGet sẵn |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | |
| SD-TENANT | **required** | `CompanyCode` · **tenant_keep** |
| SD-NO-JSON | **required** | Flat scalars |
| SD-SEARCH | **required** | search/type · pageSize 50/100/200/500 |
| SD-TZ | **n/a** | |
| SD-XCO | **required** | GetById cross-company |
| SD-SHARE | **n/a** | tenant_keep |

## Retry SSOT re-review (HARD — trước Dev Write)

Live page audit checklist (`tl-retry-ssot-rereview.md` + `tl-list-shell-height.md`):

| # | Check | Target |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` + **LAYOUT-06** (`AppLayout`/`StandaloneShell` definite height) | **PASS** · live title+toolbar+grid/empty |
| 4 | Toolbar catalog: refresh · history · config `fa-cog` · +Thêm · row actions | **PASS** |
| 5 | Filter: `SearchTextInput` + type `Select` — **cấm nút Tìm** (GAP-P2-87) | **PASS** |
| 6 | Grid `LinCatalogDataGrid` · kéo cột default ON | **PASS** |
| 7 | Zone F: `LinCatalogUiSchemaEditorModal` (catalog schema SSOT) | **PASS** |
| 8 | History: `LinCatalogHistoryModal` (+ stub client nếu BE history chưa sẵn) | **PASS** |
| 9 | tree_master? | n/a |
| 10 | Form Create/Edit/View/Copy slideout | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke` · DoD: live title+toolbar+grid/empty visible.  
**Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

## Task pack

### T-CTX-01
**layer:** docs  
**status:** done  
**DoD:**
- [x] Context/control-map/readonly-lock khớp design+solution

### T-BE-01
**layer:** api  
**status:** done (verify on retry)  
**from_solution:** API-01…05 · `RoadAssetEntity` · route `api/v1/asset/road-assets`  
**source:** backend=`Linm.RMMS.WebService` · domain=`Asset`  
**ssot.platform_be:** `Linm.Platform.CommonLib`  
**ssot.platform_auth:** `Linm.Platform.Authentication` — codes `asset.road-assets.*`  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company`  
**DoD:**
- [x] ApiResponse / paged envelope · XCO GetById · no ERP · `dotnet build` API PASS

### T-BE-02
**layer:** api (migration)  
**status:** done  
**DoD:**
- [x] Pair `.cs` + `.Designer.cs` · build PASS

### T-BFF-01
**layer:** bff  
**status:** done (verify on retry)  
**DoD:**
- [x] `web-bff/api/v1/asset/road-assets/**` · proxy only · build PASS

### T-PERM-01
**layer:** ui+api  
**status:** done  
**DoD:**
- [x] FE toolbar/form gated · BE Auth stub documented

### T-UI-LIST-01
**layer:** ui  
**status:** **done** (retry)  
**page:** `/asset`  
**from_design:**
- zones: **A,B,C,D**
- reviewUrl: prototype HTML
- controls: refresh · history · editConfig=`fa-cog` · create · SearchTextInput · type Select · CatalogListPagination `[50,100,200,500]`
**implement.wire:** ui → `services/asset/endpoint.ts` → apiClient → BFF → API  
**implement.state:** list=page-hooks · redux_common=yes  
**implement.page_shell:** 1× `LinPageLayout` kind=catalog · no nested CatalogListShell · flex root · `data-catalog-list-page`  
**implement.grid:** `LinCatalogDataGrid` · dynamic cols · `tableConfig` resizable default ON  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`  
**ssot.reuse:** ui=Lin*/Erp* · http=apiClient · state=page-hooks  
**skills:** `/erp-form-context` · `/implement-catalog-list-toolbar` · `/review-grid` · `tl-grid-ssot` · `tl-catalog-list-parity` · **`tl-retry-ssot-rereview`**  
**APIs:** API-01  
**deps:** T-BE-01  
**implement.list_parity:**
  pilot_ux: DoiTuongPage
  layout: flex-root + GAP-P2-LAYOUT-06 smoke
  tree: n/a
  filter: SearchTextInput + Select type — **no Tìm btn** (GAP-P2-87)
  loading: useServerPagedListLoading
  footer: LinCatalogListPagination (common ONLY)
  row_menu: LinCatalogRowActionMenu · GAP-P2-94
  zone_f: LinListTableConfigModal + load/saveErpListTableConfig
  history: LinCatalogHistoryModal
  grid_resize: resizable default ON
  perm: asset.road-assets.* + local mode
**DoD:**
- [x] Dev re-review checklist § HARD trước Write (`tl-retry-ssot-rereview`)
- [x] Chỉ Lin*/Erp* từ common — không local pager/toolbar/ApiClient
- [x] A–D parity · filter no Tìm · Zone F modal · History modal
- [x] BASE=`/asset/road-assets` · pageSize 50
- [x] Build PASS · ghi `retry.ssot_rereview` trên implement MD

### T-UI-FORM-01
**layer:** ui  
**status:** done (re-smoke)  
**from_design:** Slideout Z1–Z3 · 11 fields · View readOnly  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist`  
**DoD:**
- [x] FormMode Create/Edit/View/Copy · Lin* controls
- [x] Build PASS

### T-QA-01
**layer:** qa  
**status:** done  
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-BFF-01 · T-PERM-01  
**DoD:**
- [x] `qa/scenarios.md` — A–D · CRUD · filter no Tìm · Zone F · mfeStdUrl · no ERP

## FormType pack (canonical — `form-type-task-pack` master · task_98b1aa0e)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `asset.road-assets.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema migration |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Type filter | S-LIST filter | `Select` → `handleTypeChange` | GET `?type=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Thêm | toolbar | `openCreate` → Slideout create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `openHistory(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |

**GAP-P2-ACT-\* (pre-Dev audit):**
| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `assetService.delete` + API-05 sẵn | **CLOSED** — wired `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/asset/road-assets` · domain Asset · no ERP
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-02 → T-BFF-01
                ↘ T-PERM-01
T-BE-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-QA-01
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — **chỉ** T-UI-ACT-01 (wire Delete) + T-BE-CRUD-01 verify · **cấm** rewrite T-UI-LIST |
| Anti-dup | `ssot-no-duplicate.md` — reuse only |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `API-LIB/Linm.Platform.CommonLib` |
| Auth SSOT | `API-CORE/Linm.Platform.Authentication` |
| HARD | `tl-retry-ssot-rereview` · cấm patch mù 1 chỗ · fix GAP-P2-ACT-DELETE |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T16:00:00.000Z |
| versionGate | rechecked |
| taskId | `task_98b1aa0e` |
