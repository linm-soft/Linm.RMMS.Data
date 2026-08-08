# Team lead — tasks — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` (Kind B) |
| solution_confirm | **approve** (2026-08-08) |
| updatedAt | 2026-08-08T17:05:00.000Z |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` |
| **Supersedes** | task/implement cũ ERP · **rework RMMS** |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/asset/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-CTX — zones **A–D** · Slideout Z1–Z3 · VatTu typography/pager · icon map |
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
| **Form state** | Kind B Slideout — form local/controller nhẹ theo `/erp-form-context` (không full voucher FormController trừ khi nâng Kind C) |
| **Redux common** | `authReducer` / toast từ common-components (`/mfe-api-review`) |
| **Skills** | `/erp-form-context` · catalog toolbar · review-grid · leave-confirm |
| **Ref** | `tl-implement-architecture.md` · `ssot-no-duplicate.md` · `erp-form-context/spec/2-hooks.md` · `spec/4-api.md` |

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
| TZ | **n/a** | — | không `/review-timezone-implement` trừ khi thêm date filter |
| XCO | **required** (`get_only`) | API-02 · T-BE-01 | `/implement-view-cross-company` trên GetById |
| SHARE | **tenant_keep** | `RoadAssetEntity` | không `/implement-shared-table` — giữ tenant filter |

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
| SD-TENANT | **required** | `CompanyCode` · **tenant_keep** (không shared table) |
| SD-NO-JSON | **required** | Flat scalars |
| SD-SEARCH | **required** | search/type · pageSize 50/100/200/500 |
| SD-TZ | **n/a** | no date filter/fields P1 |
| SD-XCO | **required** | GetById cross-company |
| SD-SHARE | **n/a** | tenant_keep |

## Task pack

### T-CTX-01
**layer:** docs  
**from_design:** Kind B · A–D · Slideout 11 · GTVT labels  
**from_solution:** field map §2 · persist none JSON  
**ssot:** design + solution + context Data/MFE · platform_ui/be (document only)  
**skills:** `/erp-form-context`  
**DoD:**
- [ ] Context/control-map/readonly-lock khớp design+solution

### T-BE-01
**layer:** api  
**from_solution:** API-01…05 · `RoadAssetEntity` · route `api/v1/asset/road-assets` · IdCode `TS-…` · soft delete  
**source:** backend=`Linm.RMMS.WebService` · domain=`Asset`  
**ssot.platform_be:** `Linm.Platform.CommonLib` (`API-LIB/Linm.Platform.CommonLib`)  
**ssot.platform_auth:** `Linm.Platform.Authentication` (`API-CORE/…`) — codes `asset.road-assets.*`  
**ssot.reuse:** be=CommonLib ApiResponse · auth=RequirePermission + Auth codes  
**gates:** TZ=n/a · XCO=required on API-02 · SHARE=tenant_keep  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company`  
**system_design:** SD-LIB-BE · SD-TENANT · SD-HEADER · SD-NO-JSON · SD-SEARCH · SD-XCO · SD-TZ=n/a · SD-SHARE=n/a  
**DoD:**
- [ ] Return **ApiResponse** / paged envelope CommonLib — cấm ad-hoc envelope
- [ ] `[RequirePermission]` (hoặc TODO + codes documented nếu Auth stub)
- [ ] **GetById (API-02):** `/implement-view-cross-company` — tenant first · IgnoreQueryFilters + AllowedCompanyIds · 403/404
- [ ] Không parent JSON · không ERP path · không ProjectReference CommonLib · không shared-table registry
- [ ] `dotnet build` API PASS

### T-BE-02
**layer:** api (migration)  
**from_solution:** `Schema_RmmsRoadAssets`  
**skills:** `/database-migration` · `/new-migration`  
**deps:** T-BE-01  
**DoD:**
- [ ] Pair `.cs` + `.Designer.cs` · build PASS

### T-BFF-01
**layer:** bff  
**from_solution:** proxy API-01…05  
**ssot.platform_be:** CommonLib (passthrough envelope)  
**ssot.reuse:** bff=proxy only · be=CommonLib envelope passthrough  
**skills:** `/create-bff-api-feature`  
**deps:** T-BE-01  
**DoD:**
- [ ] `web-bff/api/v1/asset/road-assets/**` · no business logic · no second ApiClient · build PASS

### T-PERM-01
**layer:** ui+api  
**from_design:** toolbar L1 + Thêm mới · form save/edit  
**from_solution:** `asset.road-assets.read|create|update|delete`  
**ssot.platform_auth:** `API-CORE/Linm.Platform.Authentication`  
**ssot.platform_be:** `[RequirePermission]` CommonLib  
**skills:** `/implement-erp-form-permissions` · `api-permission-gate`  
**deps:** T-BE-01  
**DoD:**
- [ ] Codes khớp Auth registry (hoặc gap documented)
- [ ] FE toolbar/form gated

### T-UI-LIST-01
**layer:** ui  
**page:** `/asset`  
**from_design:**
- zones: **A,B,C,D**
- reviewUrl: prototype HTML
- controls: refresh · history · editConfig=`fa-cog` · excel · create · search · type · CatalogListPagination `[50,100,200,500]`
**implement.wire:** ui → `services/asset/endpoint.ts` → apiClient → BFF `web-bff/api/v1/asset/road-assets` → API  
**implement.state:** list=page-hooks · redux_common=yes · form=n/a  
**source.mfe:** `Linm.Web.RMMS.Asset`  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`  
**ssot.reuse:** ui=Lin*/Erp* · http=apiClient re-export · state=page-hooks+common-reducers  
**skills:** `/erp-form-context` · `/implement-catalog-list-toolbar` · `/review-grid` · `/erp-filter-form`  
**APIs:** API-01  
**deps:** T-BE-01  
**DoD:**
- [ ] Chỉ Lin*/Erp* từ common-components — không local pager/toolbar/ApiClient/authSlice
- [ ] A–D parity · BASE=`/asset/road-assets` · pageSize 50
- [ ] Build PASS

### T-UI-FORM-01
**layer:** ui  
**from_design:** Slideout Z1–Z3 · 11 fields · View readOnly  
**from_solution:** API-02…05 · field map  
**implement.wire:** same endpoint BASE  
**implement.state:** form=slideout-local (+ leave-confirm) · redux_common=yes · ref=`/erp-form-context`  
**ssot.platform_ui:** common-components  
**ssot.reuse:** ui=Lin* · http=apiClient · state=slideout-local+leave-confirm  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm`  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy work · Lin* controls — không fork form shell
- [ ] Build PASS

### T-QA-01
**layer:** qa  
**deps:** T-UI-FORM-01 · T-BFF-01 · T-PERM-01  
**DoD:**
- [ ] `qa/scenarios.md` — A–D · CRUD · CommonLib envelope · route `/asset/road-assets` · no ERP

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-02 → T-BFF-01
                ↘ T-PERM-01
T-BE-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-QA-01
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — T-BE-01 (+ T-CTX-01) |
| Anti-dup | `ssot-no-duplicate.md` — reuse only |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `API-LIB/Linm.Platform.CommonLib` |
| Auth SSOT | `API-CORE/Linm.Platform.Authentication` |
| Design / Solution | paths trên § from design/solution |
