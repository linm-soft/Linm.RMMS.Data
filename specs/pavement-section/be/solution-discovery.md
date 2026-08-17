# Solution discovery — pavement-section

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_fc6e93dc`)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind B catalog + full-page form) |
| status | `confirmed` |
| changeScope | `edit_page` |
| design_confirm | **approve** (`task_def5f4d1`) |
| solution_confirm | **approve** (autoApprove ON) |
| version_mismatch_action | **recheck_new** — stamp SSOT `2026.08.15.19` / agent-sa `2026.08.15.15` |
| prior · design | `ui/design.md` confirmed · prototype A–D + full-page + PCI |
| prior · po | `po/requirement.md` confirmed |
| prior · data_analy | controlHint hash `sha256:pavement-section-delta-pci-20260816` |
| taskId | `task_fc6e93dc` |
| updatedAt | `2026-08-16T01:20:00.000Z` |

## 1. Ownership (DOMAIN-MAP Asset)

| Layer | Repo / path |
|-------|-------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/asset/pavement-section` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` · `PavementSectionsController` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/PavementSectionDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/PavementSectionEntity.cs` |
| Migrations | `api/shared/RMMS.Service.Migrations/` · `Schema_RmmsPavementSectionPci` (`20260816002500`) |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/PavementSectionsBffController.cs` |
| Ui-schema | `api/src/RMMS.Service.Api/Domains/Integration/` · kind=`pavement-sections` |

**Cấm** `ERP.Service.*` · `Domains/Master` · invent `api/v1/infra` · `api/v1/rmms/*`.

### Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/asset` · BFF `web-bff/api/v1/asset` |
| Resource | `/pavement-sections` |
| Persist | `PavementSectionEntity` → `rmms_pavement_sections` · **flat scalars** (**cấm** parent `*Json`) |
| BFF | **proxy only** (passthrough query + body) |
| Auth perm | `asset.pavement-sections.read\|create\|update\|delete` — BE `[RequirePermission]` **OUT pack** (stub TODO CommonLib) |
| IdCode | `MD-yyyyMMdd-nnnn` (server generate on Create) |
| Tenant | `TenantEntity` + `X-Company-Id` |

### Route decision

Context skeleton `/api/v1/infra/pavement-sections` **lệch DOMAIN-MAP**. SA chốt **`api/v1/asset/pavement-sections`**. Ui-schema **không** nằm Asset — SSOT Integration: `api/v1/integration/catalogs/pavement-sections/ui-schema`.

### SSOT / anti-duplicate

Một resource CRUD Asset. Không clone controller ERP. Không dual prefix. List columns = schema seed `CatalogUiSchemaRegistry.PavementSections` — FE `useCatalogUiSchema('pavement-sections')`.

## 2. FormType pack (`packKind=list`)

| Surface | Pattern | FormMode ↔ API |
|---------|---------|----------------|
| List A–D + F | Kind B catalog | API-01 list · API-06/07 ui-schema |
| Form create | full-page `/new` | API-03 POST |
| Form edit | full-page `/:id/edit` | API-02 GET + API-04 PUT |
| Form view | full-page `/:id` · **`<dl>`** | API-02 GET |
| Form copy | full-page `/:id/copy` | API-02 GET + API-03 POST (code empty) |
| Delete | toolbar + row | API-05 DELETE soft |
| History | stub client | **OUT** — không API |
| Excel | stub toolbar | **OUT** — không import/export API |
| Map live | nav GIS `layerCode=mat-duong` | **không** GIS write trong pack |

Dev slash: **`/agent-dev`**. **Cấm** Resource · Slideout · View=`readOnly` Input.

Canonical TL ids (handoff, SA không viết HOW): T-CTX · T-PERM · T-UI-LIST · T-UI-CFG · T-UI-FORM · T-UI-LEAVE · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-UI-HIST · T-BE-CRUD · T-BE-UISCHEMA · T-BFF · T-QA-CRUD. T-BE-INIT **OUT P1**. T-UI-MAP-FORM **n/a**.

## 3. Form data inventory (controlHint → API)

| Screen / FormMode | Fields (UI) | Source type | Persist | Notes |
|-------------------|-------------|----------------|---------|-------|
| List filter | search · province · road · kmFrom · kmTo · status · fromDate · toDate | query | — | SearchInput tỉnh/status = **FE constants P1** (không GET master) |
| List grid | code · roadName · provinceName · km · structureType · roadClass · status · pci · layerCode · measuredAt · manageUnit | transaction | Entity | schema-driven |
| Create/Edit/Copy | Design §3.2 | body | Entity | PCI 0–100 · LayerCode default `mat-duong` |
| View | same as form | GET | Entity | display only |
| Zone F | catalogKind=`pavement-sections` | Integration | ui-schema row | **cấm** `configHint` |

### 3a. controlHint → API shape

| controlHint (Design) | SA decision |
|----------------------|-------------|
| SearchTextInput `search` | query `search` API-01 |
| SearchInput **province** / **pavement-status** / **structure-type** / **road-class** / **gis-layer** | **LOOKUP_STATIC P1 FE** (`PROVINCES` · status · `STRUCTURE_TYPES` · class · `mat-duong`) — **không** bắt buộc master GET / `form-init-data` this pack (Design + PO) |
| Text road / km / widths / years / units / notes / pci | scalar DTO |
| Date `measuredAt` | DTO `MeasuredAt` UTC · FE Date |
| Date range list | query `fromDate`/`toDate` → `UpdatedAt` UTC (`CatalogUpdatedAtRange`) |
| Dropdown | **không dùng** trên Design — **cấm** invent `GET …/init-data` P1 |

### 3b. Persist gate

| ✅ | ❌ |
|----|-----|
| Scalar columns trên `rmms_pavement_sections` gồm `Pci` · `LayerCode` · `MeasuredAt` | Parent `*Json` blob |

## 4. Field map (ui → dto → db)

| uiField | dtoField | dbColumn / property |
|---------|----------|---------------------|
| code | Code | `Code` |
| roadName | RoadName | `RoadName` |
| provinceName | ProvinceName | `ProvinceName` |
| kmFrom / kmTo / lengthKm | KmFrom / KmTo / LengthKm | decimal |
| baseWidthM / surfaceWidthM | BaseWidthM / SurfaceWidthM | decimal? |
| structureType | StructureType | `StructureType` |
| surfaceThicknessCm | SurfaceThicknessCm | decimal? |
| roadClass | RoadClass | `RoadClass` |
| yearsInService | YearsInService | `YearsInService` |
| handoverMaintenance / handoverConstruction | HandoverMaintenance / HandoverConstruction | bool |
| lastMajorRehabYear / lastSurfaceRepairYear | LastMajorRehabYear / LastSurfaceRepairYear | int? |
| status | Status | `Status` |
| constructionUnit / manageUnit / ownerUnit | ConstructionUnit / ManageUnit / OwnerUnit | string |
| notes | Notes | `Notes` |
| pci | Pci | `Pci` numeric(5,2) |
| layerCode | LayerCode | `LayerCode` varchar(64) |
| measuredAt | MeasuredAt | `MeasuredAt` timestamptz |
| updatedAt / updatedBy | UpdatedAt / UpdatedBy | audit |

Create body **không** gửi `Code` (server IdCode). Update **không** đổi Code.

## 5. API catalog

### API-01: GET `/api/v1/asset/pavement-sections`

| | |
|--|--|
| Purpose | Paged list Kind B · filter Zone B |
| Permission | `asset.pavement-sections.read` (stub) |
| Tenant | `X-Company-Id` · `IsActive=true` |
| Request | query: `search` string · `province` · `road` · `status` · `kmFrom` decimal? · `kmTo` decimal? · `fromDate` · `toDate` · `page` int default 1 · `pageSize` 50\|100\|200\|500 |
| Response | `PavementSectionPagedResult` `{ items, totalCount, page, pageSize, totalPages }` items = `PavementSectionDto` |
| Errors | 200 empty list |
| Form surfaces | list search |
| Field map | filter → query; grid ← DTO |
| Context | `docs/context/features/pavement-section.md` §3 |
| Demo | `Linm.RMMS.Demo/src/demo/features/pavement-section-demo.html` Zone B–C |
| data-import | **N/A** (no Excel this pack · synthetic Biểu 1) |
| Sample | `search=MD-2026&road=QL1&kmFrom=0&page=1&pageSize=50` |
| Migration | none (read) |
| Live | `PavementSectionsController.GetList` |

### API-02: GET `/api/v1/asset/pavement-sections/{id}` · **XCO**

| | |
|--|--|
| Purpose | Load form View/Edit/Copy |
| Permission | `asset.pavement-sections.read` |
| Tenant | company filter; **XCO** `IgnoreQueryFilters` + `allowed_company_ids` → 403 nếu ngoài allow-list |
| Request | path `id` guid |
| Response | `PavementSectionDto` (Pci · LayerCode · MeasuredAt) |
| Errors | 404 · 403 |
| Form surfaces | view · edit · copy prefill |
| Context / Demo | CTX-01 form · prototype `#screen-form` |
| data-import | N/A |
| Migration | none |
| Live | `GetByIdAsync` |

### API-03: POST `/api/v1/asset/pavement-sections`

| | |
|--|--|
| Purpose | Create · IdCode `MD-*` |
| Permission | `asset.pavement-sections.create` |
| Request | `CreatePavementSectionRequest` — required: RoadName · ProvinceName · KmFrom · KmTo (KmTo≥KmFrom) · StructureType · Status · ManageUnit; optional Pci 0–100 · LayerCode · MeasuredAt · widths · units · notes |
| Response | `PavementSectionDto` 200 |
| Errors | 422 `ArgumentException` |
| Form surfaces | create · copy-save |
| Context / Demo | CTX-01 · prototype create |
| data-import | N/A |
| Migration | table exists |
| Live | `CreateAsync` |

### API-04: PUT `/api/v1/asset/pavement-sections/{id}`

| | |
|--|--|
| Purpose | Update scalars (KEEP Pci/Layer/MeasuredAt) |
| Permission | `asset.pavement-sections.update` |
| Request | path id + `UpdatePavementSectionRequest` (+ optional `IsActive`) |
| Response | DTO 200 |
| Errors | 404 · 422 |
| Form surfaces | edit save |
| data-import | N/A |
| Live | `UpdateAsync` |

### API-05: DELETE `/api/v1/asset/pavement-sections/{id}`

| | |
|--|--|
| Purpose | Soft delete (`IsActive=false`) |
| Permission | `asset.pavement-sections.delete` |
| Request | path id |
| Response | `{ id }` + message Deleted |
| Errors | 404 |
| Form surfaces | list/form delete |
| data-import | N/A |
| Live | `SoftDeleteAsync` |

### API-06: GET `/api/v1/integration/catalogs/pavement-sections/ui-schema`

| | |
|--|--|
| Purpose | Zone F + `buildDynamicGridColumns` |
| Permission | catalog ui-schema (Integration) |
| Request | path kind=`pavement-sections` · query `configMode` bool |
| Response | `CatalogUiSchemaDto` seed fields: code · roadName · provinceName · km · structureType · roadClass · status · pci · layerCode · measuredAt · manageUnit |
| Errors | 404 unknown kind |
| Form surfaces | list Zone C/F |
| Context | Design DES-GRID-F |
| Demo | prototype Zone F |
| data-import | N/A |
| Live | `CatalogUiSchemaController` + `CatalogUiSchemaSeed.PavementSections` |

### API-07: PUT `/api/v1/integration/catalogs/pavement-sections/ui-schema`

| | |
|--|--|
| Purpose | Persist user column config |
| Request | `SaveCatalogUiSchemaDto` |
| Response | schema DTO |
| Errors | 400 · 404 |
| Form surfaces | Zone F save |
| Live | `SaveAsync` |

### BFF

`web-bff/api/v1/asset/pavement-sections` GET list (forward query) · GET/{id} · POST · PUT/{id} · DELETE/{id}. Ui-schema **không** qua Asset BFF — MFE gọi Integration prefix.

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | API-01 `fromDate`/`toDate` → `UpdatedAt` UTC · form `measuredAt` timestamptz | `/review-timezone-implement` | FE Date local → UTC; **không** `tz_na` (delta PCI date) |
| XCO | **get_only** | API-02 GET/{id} | `/implement-view-cross-company` | `AllowedCompanyIds` claim · list stays tenant filter |
| SHARE | **tenant_keep** | `PavementSectionEntity` : `TenantEntity` | `/implement-shared-table` | asset theo đơn vị — **không** Type A/B/C |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-16T01:20:00.000Z`

**Sửa so với SA cũ (`tz_na`):** list date filter + `MeasuredAt` → TZ required.

## Live vs delta (`edit_page`)

Live BE/MFE **đã ship** CRUD + PCI + filter road/km + schema seed + View `<dl>`. SA **không** invent endpoint mới. TL/Dev = **verify / no-op** nếu parity giữ. **Cấm** regen migration nếu cột Pci/LayerCode/MeasuredAt đã có.

## Out of pack

- Excel import/export API
- History API
- `[RequirePermission]` CommonLib mount
- `GET …/form-init-data` master
- PostGIS Geom / GIS draw write
- ERP.* / `api/v1/infra`

## Handoff → TL (`/agent-team-lead`)

- Keep Asset route + Integration ui-schema
- Gates: TZ required · XCO GET only · SHARE tenant_keep
- Lookup P1 FE constants — T-BE-INIT n/a P1
- FormType list: T-UI-* + T-BE-CRUD + T-BE-UISCHEMA + T-BFF
- `autoApprove=ON` → SA **confirmed** · next TL **pending** đến lượt (roleOnly=sa this task)
- Repo: BE `Linm.RMMS.WebService` · UI `Linm.Web.RMMS.Asset` (run packet)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-16T01:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.16 (SSOT file; prior artifact stamped 2026.08.15.5) |
| poSkillVersion | 2026.08.15.17 |
| dataAnalySkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.15.25 · versionGate=rechecked -->
