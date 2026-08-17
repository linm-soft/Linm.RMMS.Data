# Team lead — tasks — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` (Kind B catalog A–D + **full-page** form) |
| changeScope | `edit_page` · gap=`crud_formtype` + PCI/TZ/ui-schema **KEEP** |
| solution_confirm | **approve** (autoApprove ON · `task_fc6e93dc`) |
| design_confirm | **approve** (autoApprove ON · `task_def5f4d1`) |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T01:25:00.000Z` |
| taskId | `task_a50e37d5` |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `ssot-no-duplicate` · `dev-ui-ux-constitution` |
| **Supersedes** | `task/pavement-section.md` `task_e95b3b89` (2026-08-14) — thiếu PCI/TZ/ui-schema/route dedicated · **cấm** coi mọi T-UI-* = done mà không re-audit live |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/pavement-section/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-CFG F · T-UI-FORM Z1–Z3 · T-CTX |
| Solution | `specs/pavement-section/be/solution-discovery.md` | T-BE-CRUD · T-BE-UISCHEMA · T-BFF · T-PERM · TZ/XCO/SHARE |
| Prototype | `ui/prototype/pavement-section-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/pavement-section-control-hint.md` · hash `sha256:pavement-section-delta-pci-20260816` | T-UI-LKP · T-UI-FIELD |
| PO | `po/requirement.md` | DoD đo được |

**SA chốt:** live CRUD+PCI+filter+schema+View `<dl>` **đã ship**. TL/Dev = **verify / no-op** nếu parity giữ · **cấm** regen migration Pci/LayerCode/MeasuredAt nếu cột đã có · **cấm** invent `GET …/form-init-data` P1.

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` **OUT pack** (stub) |
| **Auth** | `asset.pavement-sections.read\|create\|update\|delete` | FE gate · BE stub |

## Implement HOW (TL — Kind B list + full-page form)

| Topic | Decision |
|-------|----------|
| **Wire** | Page → `services/pavementSection/endpoint.ts` → `apiClient` → `web-bff/api/v1/asset/pavement-sections` → `api/v1/asset/pavement-sections` |
| **Lookups** | **LOOKUP_STATIC P1 FE** (`PROVINCE_LOOKUP` · `STATUS_LOOKUP` · `STRUCTURE_LOOKUP` · `ROAD_CLASS_LOOKUP` · `LAYER_LOOKUP`) — **T-BE-INIT n/a** |
| **Ui-schema** | MFE `catalogUiSchemaService` → `api/v1/integration/catalogs/pavement-sections/ui-schema` (**không** qua Asset BFF) |
| **List state** | Page hooks + `useServerPagedListLoading` · `useCatalogUiSchema('pavement-sections')` |
| **Form state** | Full-page `PavementSectionFormPage` — **cấm** Resource / Slideout / View=`readOnly` Input |
| **Skills** | `/erp-form-context` · catalog toolbar · leave-confirm · `/review-timezone-implement` · `/implement-view-cross-company` · `/implement-shared-table` |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components `Lin*` | nested `CatalogListShell` · raw table pager · `LinListTableConfigModal` editor cột |
| HTTP | `apiClient` | local `ApiClient` |
| Persist | flat `PavementSectionEntity` | parent `*Json` |
| BFF | proxy only | business logic |
| Master | FE constants P1 | invent Asset master GET |
| ERP | — | `ERP.Service.*` · `Domains/Master` · `api/v1/infra` · `api/v1/rmms/*` |

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | List `/asset/pavement-section` · form `/new` · `/:id` · **Design:** `/:id/edit` · `/:id/copy` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `PavementSectionsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/Entities/PavementSectionEntity.cs` |
| `source.migrations` | `Schema_RmmsPavementSectionPci` (`20260816002500`) — **KEEP** |
| `source.uiSchema` | Integration `CatalogUiSchemaRegistry` kind=`pavement-sections` |
| Demo | `Linm.RMMS.Demo/src/demo/features/pavement-section-demo.html` |
| Context | `Linm.RMMS.Data/docs/context/features/pavement-section.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/pavement-section/ui/prototype/pavement-section-list-prototype.html` |
| `mfeStdRoute` | `/asset/pavement-section` |
| `mfeStdUrl` | `http://localhost:9301/asset/pavement-section` |

## API contract (from solution)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/pavement-sections` query `search,province,road,status,kmFrom,kmTo,fromDate,toDate,page,pageSize` |
| API-02 | GET | `/api/v1/asset/pavement-sections/{id}` (**XCO get_only**) |
| API-03 | POST | `/api/v1/asset/pavement-sections` IdCode `MD-yyyyMMdd-nnnn` |
| API-04 | PUT | `/api/v1/asset/pavement-sections/{id}` |
| API-05 | DELETE | `/api/v1/asset/pavement-sections/{id}` soft |
| API-06 | GET | `/api/v1/integration/catalogs/pavement-sections/ui-schema` |
| API-07 | PUT | `/api/v1/integration/catalogs/pavement-sections/ui-schema` |

BFF: `web-bff/api/v1/asset/pavement-sections/**` (CRUD). Ui-schema **không** qua Asset BFF.

## Implement gates (from solution)

| Gate | Decision | Apply | Skill |
|------|----------|-------|-------|
| TZ | **required** | API-01 `fromDate`/`toDate` → `UpdatedAt` UTC · form `measuredAt` timestamptz | `/review-timezone-implement` |
| XCO | **get_only** | API-02 | `/implement-view-cross-company` |
| SHARE | **tenant_keep** | `PavementSectionEntity` : `TenantEntity` | `/implement-shared-table` |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | Lin* only |
| SD-AUTH | stub | `[RequirePermission]` TODO CommonLib **OUT pack** |
| SD-BFF | **required** | proxy-only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TENANT | **required** | tenant_keep |
| SD-NO-JSON | **required** | flat Pci · LayerCode · MeasuredAt |
| SD-SEARCH | **required** | pageSize 50/100/200/500 |
| SD-TZ | **required** | list date + MeasuredAt |
| SD-XCO | **required** | GetById |
| SD-JOB | n/a | |
| Excel / History API | OUT | stub UI OK |
| T-BE-INIT | **n/a P1** | FE constants |
| T-UI-MAP-FORM | **n/a** | packKind=list |

## Retry SSOT re-review (HARD — live MFE **trước Write**)

Live: `PavementSectionPage.tsx` · `PavementSectionFormPage.tsx` · `lookups.ts` · `index.tsx` · `useCatalogUiSchema` · `buildDynamicGridColumns`. Audit `2026-08-16T01:25:00.000Z`.

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | 1× `LinPageLayout` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` + `catalogListTableConfigFromSchema` | **PASS** |
| 3 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` / raw table | footer only `LinCatalogListPagination` | **PASS** |
| 4 | Flex + skeleton + LAYOUT-06 | `data-catalog-list-page` · `skeletonRows={8}` · `useServerPagedListLoading` | **PASS** |
| 5 | Toolbar catalog: refresh · history stub · config · create · delete (perm) · **cấm** Thêm mới trên A | `catalogToolbar` | **PASS** |
| 6 | Filter Zone B: SearchText + SearchInput tỉnh/status · Text road · Number kmFrom/kmTo · date range | present · GET query khớp SA | **PASS** |
| 7 | Grid schema-driven — cấm leftover `const columns` / `LinCatalogDataColumn[]` sau đổi import | `columns={buildDynamicGridColumns(schema, uiColumns)}` · `uiColumns` bootstrap OK | **PASS** |
| 8 | Zone F `LinCatalogUiSchemaEditorModal` title schema · kind=`pavement-sections` — **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột | present · `CATALOG_KIND` | **PASS** |
| 9 | list_parity Kind B | A–D + F | **PASS** |
| 10 | tree_master? | n/a | n/a |
| 11 | Form full-page C/E/V/Copy — cấm Resource / Slideout | `PavementSectionFormPage` · `CatalogFormShell` | **PASS** shell |
| 12 | View = `<dl>` — cấm Input `readOnly`/disabled xám | `data-testid=…-view-dl` | **PASS** |
| 13 | Lookup SearchInput master FE | list+form province/status/structure/roadClass/layer | **PASS** |
| 14 | PCI 0–100 · Layer default `mat-duong` · measuredAt Date | form validate + `toMeasuredAtIso` UTC | **PASS** |
| 15 | Dedicated routes `/asset/pavement-section/:id/edit` · `/:id/copy` (Design §1 · parity Asset) | chỉ `/new` + `/:id` + `?mode=edit` + `/new?copyFrom=` | **GAP-TL-ROUTE-01** |
| 16 | Leave-confirm dirty | `window.confirm` khi dirty | **PASS** |
| 17 | History stub | `LinCatalogHistoryModal` | **PASS** (OUT API) |

**implement.list_parity.layout** = `flex-root + LAYOUT-06`.  
**Cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

`retry.ssot_rereview` — Dev **phải** copy bảng này vào `implement/pavement-section.md` và re-audit sau Write.

## Live GAP → task map

| ID | Gap | Task |
|----|-----|------|
| GAP-TL-ROUTE-01 | Thiếu route `/:id/edit` · `/:id/copy` (Design) | **T-UI-FORM-01** (IN P1) |
| GAP-RPT-SRC-PAV-01 | PCI/Layer/MeasuredAt | **CLOSED** live |
| GAP-LIST-FILTER-ROAD | filter road/km | **CLOSED** live |
| GAP-SCHEMA-SEED | ui-schema kind | **CLOSED** live |
| GAP-VIEW-DL | View `<dl>` | **CLOSED** live |
| GAP-PO-PVT-PROTO | prototype | **CLOSED** Design |
| SD-AUTH | RequirePermission | **OUT pack** |

## Task pack (canonical — `form-type-task-pack`)

### T-CTX-01
**layer:** docs  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] Context `docs/context/features/pavement-section.md` khớp Asset route + PCI fields
- [ ] STATUS `backend` = `Linm.RMMS.WebService` · `api/v1/asset/pavement-sections` + Integration ui-schema
- [ ] **cấm ERP.*** · **cấm** `api/v1/infra`

### T-PERM-01
**layer:** ui+api  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] FE `pavementListPermissions` · codes `asset.pavement-sections.*`
- [ ] BE `[RequirePermission]` **OUT** (stub TODO)

### T-BE-CRUD-01
**layer:** api  
**status:** **pending (verify / no-op)**  
**from_solution:** API-01…05 · **cấm** regen PCI migration  
**source:** backend=`Linm.RMMS.WebService` · domain=`Asset`  
**skills:** `/new-endpoint` · `/implement-view-cross-company` · `/implement-shared-table`  
**DoD:**
- [ ] List filters gồm `road` `kmFrom` `kmTo` `fromDate` `toDate`
- [ ] DTO Pci · LayerCode · MeasuredAt
- [ ] Soft delete · IdCode `MD-*` on create
- [ ] XCO get_only · tenant_keep
- [ ] **cấm ERP.***

### T-BE-TZ-01
**layer:** api+ui  
**status:** **pending (verify)**  
**skills:** `/review-timezone-implement`  
**DoD:**
- [ ] `fromDate`/`toDate` → `UpdatedAt` UTC (`CatalogUpdatedAtRange`)
- [ ] Form `measuredAt` Date local → UTC ISO (live `toMeasuredAtIso` …`T00:00:00.000Z` — verify round-trip display `dateOnly`)

### T-BE-UISCHEMA-01
**layer:** api  
**status:** **pending (verify / no-op)**  
**from_solution:** API-06/07  
**DoD:**
- [ ] Registry + Seed `pavement-sections` gồm pci · layerCode · measuredAt
- [ ] **cấm** `configHint`

### T-BFF-01
**layer:** bff  
**status:** **pending (verify / no-op)**  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy GET list (forward query) · GET/{id} · POST · PUT · DELETE
- [ ] Ui-schema **không** clone vào Asset BFF

### T-UI-LIST-01
**layer:** ui  
**status:** **pending (verify / no-op — A–D PASS · cấm rewrite shell)**  
**DoD:**
- [ ] Zones A · B · C · D
- [ ] 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination
- [ ] Filter search/province/status/road/km + date
- [ ] Cột PCI · Lớp · Ngày đo via schema
- [ ] Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa
- [ ] LAYOUT-06 · list_parity

### T-UI-CFG-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` kind=`pavement-sections`
- [ ] `useCatalogUiSchema` + `buildDynamicGridColumns`
- [ ] **cấm** `LinListTableConfigModal` editor cột · leftover `LinCatalogDataColumn` grid const

### T-UI-FORM-01
**layer:** ui  
**status:** **pending (delta GAP-TL-ROUTE-01)**  
**DoD:**
- [ ] Full-page C/E/V/Copy · View `<dl>` · required fields Design §3.2
- [ ] **IN:** routes `/asset/pavement-section/:id/edit` · `/:id/copy` (parity Asset `index.tsx`) · navigate không phụ thuộc `?mode=` làm SSOT
- [ ] Giữ query `?mode=` / `copyFrom` **alias** nếu cần deep-link cũ
- [ ] PCI 0–100 · layer default `mat-duong`

### T-UI-LEAVE-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] Dirty leave-confirm Create/Edit/Copy

### T-UI-ACT-01
**layer:** ui  
**status:** **pending (verify / no-op)**  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / filters | S-LIST | `applyFilters` page=1 | GET API-01 |
| Refresh | toolbar | `reloadAll` | GET |
| +Tạo | toolbar B | `openCreate` → `/new` | POST |
| Edit / View / Delete | toolbar | `openRow` / `deleteRow` | GET/PUT/DELETE |
| History | toolbar + row | stub modal | OUT |
| Config | toolbar | `setConfigOpen` | API-06/07 |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same |
| Form Save/Cancel / View→Edit / Delete | Z1 | `handleSave` · `goList` · `handleDelete` | POST/PUT/DELETE |
| Map live | form | nav GIS `layerCode=mat-duong` | n/a write |

### T-UI-LKP-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] SearchInput province / pavement-status / structure-type / road-class / gis-layer
- [ ] **cấm** native `<select>` / Text catalog
- [ ] **cấm** bắt buộc master GET P1

### T-UI-FIELD-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] control-map ↔ `PavementSectionDto` / Create·Update (kể cả pci · layerCode · measuredAt)
- [ ] List query keys khớp API-01

### T-UI-PROD-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] **cấm** Resource · Slideout · View=readOnly Input · Kind D
- [ ] Form = `PavementSectionFormPage`

### T-UI-UX-01
**layer:** ui  
**status:** **pending (verify / no-op)**  
**DoD:**
- [ ] spacing 4/8/16 · Lin* · không ad-hoc `filterMaxWidth`
- [ ] `dev-ui-ux-constitution`

### T-UI-HIST-01
**layer:** ui  
**status:** **pending (stub keep)**  
**DoD:**
- [ ] Client history modal · **không** History API

### T-QA-CRUD-01
**layer:** qa  
**status:** **pending** (QA role — **không** làm ở TL)  
**deps:** Dev pack  
**DoD:**
- [ ] Smoke list A–D + Zone F + Create→Edit→View→Copy→Delete + row menu
- [ ] Filter road/km + PCI cols + View `<dl>`
- [ ] Dedicated edit/copy routes sau Dev
- [ ] mfeStdUrl `http://localhost:9301/asset/pavement-section`
- [ ] Update `qa/scenarios.md`

## Deps

```
T-CTX-01 → T-PERM-01
T-BE-CRUD-01 → T-BE-TZ-01 → T-BFF-01
T-BE-UISCHEMA-01 → T-UI-CFG-01 → T-UI-LIST-01
T-UI-LIST-01 → T-UI-FORM-01 (GAP-TL-ROUTE-01) → T-UI-LEAVE-01
T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01
T-UI-FORM-01 → T-UI-PROD-01 → T-UI-UX-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON · roleOnly=`dev` |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 shell (PASS) · **cấm** regen PCI migration |
| Delta IN | **GAP-TL-ROUTE-01** dedicated `/edit` `/copy` |
| Verify | CRUD · PCI · filter · schema · View `<dl>` · TZ · XCO · SHARE |
| UI SSOT | `Linm.Web.RMMS.Asset` · `pages/PavementSectionPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset + Integration ui-schema |
| HARD | `tl-retry-ssot-rereview` · fix_all · stamp `retry.ssot_rereview` trên implement MD |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **cấm** Dev completed nếu fail |
| Out of pack | Excel · History API · RequirePermission mount · form-init-data · GIS write · ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-16T01:25:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.15 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |
| formTypePack | task_a50e37d5 · gap=crud_formtype |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.15.25 · versionGate=rechecked -->
