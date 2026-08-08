# Team lead — tasks — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `master` (Kind B tree + Modal) |
| solution_confirm | **approve** (2026-08-08) |
| domain_map | **Integration** (`D1`) |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| updatedAt | 2026-08-08T17:51:00.000Z |
| Version meta | rules `2026.08.08.14` · task `2026.08.08.1` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-implement-architecture.md` |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/org-unit/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-CTX — A–D · tree · Modal · VN labels · **parentCode=SearchInput** |
| Solution | `specs/org-unit/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · T-SEED — API-01…07 · `OrgUnitEntity` shared Type A · route `/api/v1/integration/org-units` |
| Prototype | `ui/prototype/org-unit-list-prototype.html` | UI DoD parity |
| Seed | `docs/context/seed/org-unit-seed.json` (60 · keep_legacy) | T-SEED · T-BE |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` · **SearchInput** · LinTree* |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | perm `master.org-units.*` |
| **Shared** | SharedMasterCatalog / `ISharedMasterCatalogEntity` | `/implement-shared-table` Type A |

## Implement HOW (TL — ref erp-form-context)

| Topic | Decision (org-unit pack) |
|-------|--------------------------|
| **Wire** | Page → `services/orgUnit/endpoint.ts` → `apiClient` → `web-bff/api/v1/integration/org-units` → `api/v1/integration/org-units` |
| **List state** | page-hooks + optional slice cache — **không** local auth/ui slice |
| **Form state** | Kind B **Modal** local — `/erp-form-context` · View `readOnly` |
| **Tree** | `LinTreeNav` / `LinTreeGridLayout` — `/implement-grid-tree-context` |
| **parentCode** | **SearchInput** → API-03 search — **cấm** Text · display `code — name` |
| **Labels** | design §3 tiếng Việt — `useFormOptions` / init-data kinds |
| **FE BASE fix** | GAP-SA-ROUTE-01: đổi `/rmms/org-units` → `/integration/org-units` |
| **Ref** | `tl-implement-architecture.md` · `form-catalog-lookup-input` · Step **2li** · **2s** |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` / `SearchInput` | local Button/Input/Modal/Table/Pager/lookup |
| HTTP | `apiClient` re-export | `class ApiClient` local |
| State | page-hooks + common reducers | local `authSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope |
| Auth | `[RequirePermission]` + Auth codes | custom perm attr |
| Persist | flat `OrgUnitEntity` | parent `*Json` / ChildrenJson |
| Shared | Type A registry | tenant_keep giả trên master |
| BFF | proxy only | business logic in BFF |

**Cấm** fork · `ERP.*` · parent JSON · Dev invent wire · duplicate SearchInput.

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/org-unit` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** (`integration`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` · `api/domains/integration/…Models/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| Context | `Linm.RMMS.Data/docs/context/features/org-unit.md` · `20-ORG-STRUCTURE-DRVN.md` |
| Seed | `docs/context/seed/org-unit-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-unit/ui/prototype/org-unit-list-prototype.html` |
| **Board** | `be_repo_confirm` + `ui_repo_confirm` **REQUIRED** trước mọi Write Dev |

## API contract (from solution)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/integration/org-units` |
| API-02 | GET | `/api/v1/integration/org-units/tree` |
| API-03 | GET | `/api/v1/integration/org-units/search` |
| API-04 | GET | `/api/v1/integration/org-units/{id}` |
| API-05 | POST | `/api/v1/integration/org-units` |
| API-06 | PUT/DELETE | `/api/v1/integration/org-units/{id}` |
| API-07 | GET | init-data kinds (optional) |

BFF: `web-bff/api/v1/integration/org-units/**`. FE BASE: **`/integration/org-units`**.

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **n/a** | — | không date filter |
| XCO | **n/a** | — | shared Scope — không cross-company IgnoreQueryFilters |
| SHARE | **Type A** (`share_a`) | `OrgUnitEntity` · T-BE-01 | `/implement-shared-table` Type A |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only · SearchInput |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | codes `master.org-units.*` |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` (audit; entity shared) |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | |
| SD-TENANT | **shared** | skip tenant filter · Type A |
| SD-NO-JSON | **required** | Flat scalars · parent_code FK |
| SD-SEARCH | **required** | API-01 + API-03 CI không dấu · pageSize 50/100/200/500 |
| SD-TZ | **n/a** | |
| SD-XCO | **n/a** | shared |
| SD-SHARE | **required** | Type A |
| SD-TREE | **required** | API-02 · LinTreeNav |
| SD-LKP | **required** | parentCode SearchInput · API-03 |

## Task pack

### T-CTX-01
**layer:** docs  
**from_design:** Kind B · A–D · Modal · VN labels · SearchInput parent  
**from_solution:** field map · Integration route · share_a  
**ssot:** design + solution + context · DOMAIN-MAP patch note  
**skills:** `/erp-form-context` · Step **2s** · **2li**  
**DoD:**
- [ ] Context/control-map khớp design+solution · DOMAIN-MAP `org-unit`→Integration documented

### T-BE-01
**layer:** api  
**from_solution:** API-01…07 · `OrgUnitEntity` · `api/v1/integration/org-units` · shared Type A · no-parent-json  
**source:** backend=`Linm.RMMS.WebService` · domain=`Integration`  
**ssot.platform_be:** CommonLib  
**ssot.platform_auth:** codes `master.org-units.read|create|update|delete|approve`  
**ssot.reuse:** ApiResponse · RequirePermission · SharedMasterCatalog registry  
**gates:** TZ=n/a · XCO=n/a · SHARE=**share_a**  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · **`/implement-shared-table`**  
**system_design:** SD-LIB-BE · SD-SHARE · SD-SEARCH · SD-TREE · SD-LKP · SD-NO-JSON · SD-HEADER · SD-TZ=n/a · SD-XCO=n/a  
**DoD:**
- [ ] Entity + register **shared Type A** (`/implement-shared-table`)
- [ ] API-01 list/search · API-02 tree · API-03 SearchInput · API-04…06 CRUD · optional API-07 kinds
- [ ] ApiResponse / paged · `[RequirePermission]` (hoặc TODO + codes documented)
- [ ] Unique `code` · parent exists · no cycle · **cấm** ChildrenJson
- [ ] Patch `docs/DOMAIN-MAP.md`: `org-unit` → Integration
- [ ] `dotnet build` API PASS

### T-BE-02
**layer:** api (migration Schema)  
**from_solution:** `Schema_RmmsOrgUnits`  
**skills:** `/database-migration` · `/new-migration`  
**deps:** T-BE-01  
**DoD:**
- [ ] Pair `.cs` + `.Designer.cs` · UK code · IX parent · build PASS

### T-SEED-01
**layer:** api (migration Seed)  
**from_solution:** `Seed_RmmsOrgUnits` · SEED-01 60 · keep_legacy VP-II.1/II.6  
**skills:** `/new-migration` (Seed_* riêng)  
**deps:** T-BE-02  
**DoD:**
- [ ] Seed file **riêng** Schema — load JSON SSOT · `is_legacy_extra` đúng · build PASS

### T-BFF-01
**layer:** bff  
**from_solution:** proxy API-01…06  
**ssot.reuse:** bff=proxy only  
**skills:** `/create-bff-api-feature`  
**deps:** T-BE-01  
**DoD:**
- [ ] `web-bff/api/v1/integration/org-units/**` · no business logic · build PASS

### T-PERM-01
**layer:** ui+api  
**from_design:** toolbar + Modal Lưu  
**from_solution:** `master.org-units.*`  
**skills:** `/implement-erp-form-permissions` · `api-permission-gate` · shared catalog approve nếu có  
**deps:** T-BE-01  
**DoD:**
- [ ] Codes documented · FE toolbar/form gated

### T-UI-LIST-01
**layer:** ui  
**page:** `/master/org-unit`  
**from_design:**
- zones: **A,B,C (tree+grid),D**
- reviewUrl: prototype
- labels VN · badge «hệ cũ»
- controls: toolbar FA · SearchTextInput · LinTreeNav · CatalogListPagination `[50,100,200,500]`
**implement.wire:** ui → `services/orgUnit/endpoint.ts` → apiClient → BFF → API (`/integration/org-units`)  
**implement.state:** list=page-hooks · redux_common=yes  
**source.mfe:** `Linm.Web.RMMS.Master`  
**ssot.platform_ui:** common-components  
**ssot.reuse:** Lin*/Erp*/SearchTextInput · apiClient · no local tree/pager  
**skills:** `/erp-form-context` · `/implement-grid-tree-context` · `/implement-catalog-list-toolbar` · `/review-grid`  
**APIs:** API-01 · API-02  
**deps:** T-BE-01 · T-BFF-01  
**DoD:**
- [ ] A–D + tree parity prototype · BASE=`/integration/org-units` (fix GAP-SA-ROUTE-01)
- [ ] Chỉ Lin* — build PASS

### T-UI-FORM-01
**layer:** ui  
**from_design:** Modal · 6 fields · **parentCode=SearchInput** · kind LOOKUP VN · View readOnly  
**from_solution:** API-03…06 · field map  
**implement.wire:** same BASE + search endpoint  
**implement.state:** form=modal-local · leave-confirm nếu dirty  
**ssot.reuse:** **SearchInput** common · cấm Text parent  
**skills:** `/erp-form-context` Step **2li** · `/implement-show-leave-confirm`  
**APIs:** API-03 · API-04 · API-05 · API-06 · API-07  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy · SearchInput đơn vị cha work · nhãn VN §3
- [ ] Build PASS

### T-QA-01
**layer:** qa  
**deps:** T-UI-FORM-01 · T-SEED-01 · T-PERM-01  
**DoD:**
- [ ] `qa/scenarios.md` — tree · search · SearchInput · CRUD · seed II.1/II.6 «hệ cũ» · shared · no ERP

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-02 → T-SEED-01
                ↘ T-BFF-01
                ↘ T-PERM-01
T-BE-01 → T-BFF-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-QA-01
T-SEED-01 ────────────────────────────↗
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — **T-CTX-01** + **T-BE-01** (sau board tick) |
| Gate | **be_repo_confirm** + **ui_repo_confirm** trên `/qldb-workflow` — **cấm** Write nếu false |
| Anti-dup | `ssot-no-duplicate.md` |
| UI SSOT | common-components · SearchInput · LinTree* |
| BE SSOT | CommonLib · shared Type A · Integration domain |
| Design / Solution / Seed | paths trên |
