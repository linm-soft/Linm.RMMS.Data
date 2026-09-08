# SA — Solution discovery — csdl-bieu-01 (CSDL Biểu 01 — Phân loại mặt đường)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_2a18844f`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_4d4cd4ac`) |
| solution_confirm | **approve** (autoApprove=ON · `task_2a18844f`) |
| domain_map | **Asset** (`csdl-bieu-01` → `asset` · **T-DM-01** add slug) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-01` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| peerSoTs | `pavement-section` · deep-link only · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `pavement-sections` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| design | `specs/csdl-bieu-01/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprintPrior | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_2a18844f` |
| priorTask | `task_4d4cd4ac` (design completed) |
| updatedAt | `2026-09-05T12:20:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 01 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **38 cột** Excel Biểu 1 · Kind D Slideout | **GAP-BIEU01-TYPED-01** |
| WIDTH | N/A / free text | **four_buckets** `surfWGe14`·`surfW14To10`·`surfW10To5`·`surfWLe5` | **GAP-BIEU01-WIDTH-01** |
| STRUCT | free-text / flags | **one_enum** `structureType` | **GAP-BIEU01-STRUCT-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-01` + hub entry | **GAP-BIEU01-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu1** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** / **SKIP-01** |
| Peer Sổ TS | `pavement-section` | deep-link only | **GAP-BIEU01-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-01` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=pavement-sections` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu1Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu1Entity`** · table **`rmms_csdl_bieu1`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu1`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-01` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS `pavement-section` form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-01` |
| UI hub | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| Peer Sổ TS | `/so-ts/...` `pavement-section` deep-link |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout |
| Persist | shell + typed child 1:1 · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 38 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu1Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T12:20:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=pavement-sections` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new MD- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=pavement-sections` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `MD-` BE |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `pavement-sections` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | range AND |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (WIDTH / STRUCT · storage)

### Q-WIDTH → **four_buckets** (PO/Design locked)

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `surfWGe14` | `SurfWGe14` | `decimal(18,3)?` | B mặt ≥14 |
| `surfW14To10` | `SurfW14To10` | `decimal(18,3)?` | 14–10 |
| `surfW10To5` | `SurfW10To5` | `decimal(18,3)?` | 10–5 |
| `surfWLe5` | `SurfWLe5` | `decimal(18,3)?` | ≤5 |

**Cấm** gộp 1 cột width · **cấm** encode JSON bucket.

### Q-STRUCT → **one_enum**

| uiField | DB column | Type | Values (LOOKUP_STATIC) |
|---------|-----------|------|------------------------|
| `structureType` | `StructureType` | `varchar(64)` | BTXM · BTN · Đá nhựa · Cấp phối |

**Cấm** 4 flag boolean · **cấm** free-text kết cấu P1.

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu1`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode scalar/DTO), Province, KmFrom/KmTo, Side, Status, ManageUnit, Notes, IsActive, timestamps | lengthKm, baseWidthM, surfW*×4, structureType, surfaceThicknessCm, plainClass, mountainClass, yearsInServiceBand, handoverMinistry, handoverLocal, lastMajorRehabYear, lastSurfaceRepairYear, updatedByName |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu1Dto` fields = real-data §B write fields (resource + 38-col inventory). List projection: code, roadCode/roadName, km*, lengthKm, baseWidthM, structureType, status, manageUnit, updatedAt (+ optional surf summary).

### UiSchema

catalogKind `pavement-sections` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=pavement-sections&…` | list paged |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu1` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell |
| Migration name | `Schema_CsdlBieu1` |
| Backfill | optional: parse legacy detail* → typed when resource=pavement-sections |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, km range, structureType enum, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-01` → Asset |
| T-BE-01 | Entity `CsdlBieu1Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu1` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `MD-` generator |
| T-BE-05 | List filter `roadCode` + km range |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-01` + page Kind B |
| T-FE-02 | typed Slideout 38 cột · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer Sổ TS link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `pavement-sections` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-WIDTH · Q-STRUCT · Q-ROUTE · Q-PROV chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS form  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | new_page |
| solution_confirm | approve |
| writtenAt | 2026-09-05T12:20:00.000Z |
| contentHashPrior | sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e |
