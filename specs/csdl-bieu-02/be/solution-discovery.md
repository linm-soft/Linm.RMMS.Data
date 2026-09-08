# SA — Solution discovery — csdl-bieu-02 (CSDL Biểu 02 — Thống kê cầu)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_547af74d`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · CRUD qua `/bridges/{id}/passport`

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_388b210f`) |
| solution_confirm | **approve** (autoApprove=ON · `task_547af74d`) |
| domain_map | **Asset** (`csdl-bieu-02` → `asset` · **T-DM-01** add slug — hiện thiếu trên DOMAIN-MAP) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| peerSoTs | none (—) · Sổ 6 / passport **deep-link only** · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `bridges` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| design | `specs/csdl-bieu-02/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_547af74d` |
| priorTask | `task_388b210f` (design completed) |
| updatedAt | `2026-09-05T08:25:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 02 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **48 cột** Excel Biểu 2 · Kind D Slideout sectioned | **GAP-BIEU02-TYPED-01** |
| GPS | N/A / free | **six_numbers** lat/lng×3 (`gpsStart*`·`gpsMid*`·`gpsEnd*`) · **cấm** map canvas | **GAP-BIEU02-GPS-01** |
| Beam | free / missing | spanCount · spanScheme · beamLengthM · beamType | **GAP-BIEU02-BEAM-01** |
| Substructure | missing | abutment* · pier* | **GAP-BIEU02-SUB-01** |
| Load | missing | **text** `designLoad` · `actualLoad` (unit later) | **GAP-BIEU02-LOAD-01** |
| Furniture | missing | bearing* · railing* · drain* · PQ · crown · steelComposite | **GAP-BIEU02-FURN-01** |
| Legacy | detail* dump | **keep_hidden** `legacyCol64` · `legacyCol69` P1 | **GAP-BIEU02-LEGACY-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-02` + hub entry | **GAP-BIEU02-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu2** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack | **GAP-CSDL-XLS-01** |
| Peer | passport / Sổ 6 | deep-link only · **cấm** merge · **cấm** CRUD passport | **GAP-BIEU02-PEER-01** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-02` → Asset | **GAP-BIEU02-DMAP-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-02` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=bridges` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu2Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu2Entity`** · table **`rmms_csdl_bieu2`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu2`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-02` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge passport/Sổ 6 form · CRUD `GET/PUT /api/v1/bridges/{id}/passport`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-02` |
| UI hub | `/so-ts/csdl-so-sach?resource=bridges` |
| Peer Sổ 6 / passport | deep-link only |
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
| Persist | `no-parent-json-field` | typed table · **không** nhét 48 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · sectioned · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu2Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T08:25:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=bridges` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 sectioned | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new BR- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SO6 | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=bridges` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `BR-` BE |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `bridges` |
| `search` | SearchTextInput | mã · tên cầu · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | range AND |
| `beamType` | Dropdown LOOKUP_STATIC | filter optional |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (GPS / LOAD / LEGACY · storage)

### Q-GPS → **six_numbers** (PO/Design locked)

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `gpsStartLat` | `GpsStartLat` | `decimal(18,8)?` | điểm đầu Lat |
| `gpsStartLng` | `GpsStartLng` | `decimal(18,8)?` | điểm đầu Lng |
| `gpsMidLat` | `GpsMidLat` | `decimal(18,8)?` | điểm giữa Lat |
| `gpsMidLng` | `GpsMidLng` | `decimal(18,8)?` | điểm giữa Lng |
| `gpsEndLat` | `GpsEndLat` | `decimal(18,8)?` | điểm cuối Lat |
| `gpsEndLng` | `GpsEndLng` | `decimal(18,8)?` | điểm cuối Lng |

**Cấm** map canvas · **cấm** gộp 1 chuỗi GPS · **cấm** invent gis draw API.

### Q-LOAD → **text**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `designLoad` | `DesignLoad` | `varchar(128)?` | Tải TK · unit later |
| `actualLoad` | `ActualLoad` | `varchar(128)?` | Tải TT · unit later |

**Cấm** ép Number/enum P1 · **cấm** JSON load shape.

### Q-LEGACY → **keep_hidden**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `legacyCol64` | `LegacyCol64` | `varchar(512)?` | hidden P1 · import map |
| `legacyCol69` | `LegacyCol69` | `varchar(512)?` | hidden P1 · import map |

**Cấm** drop cột P1 · **cấm** surface trên form visible.

### Beam / Sub / Furniture (typed scalars)

| Group | Fields (camel → Pascal) |
|-------|-------------------------|
| Identity form | `bridgeName`, `beamType` |
| Beam | `spanCount`, `spanScheme`, `beamLengthM` |
| Abutment | `abutmentCondition`, `abutmentFoundation`, `abutmentBody` |
| Pier | `pierCondition`, `pierFoundation`, `pierBody` |
| Bearing | `bearingCount`, `bearingType` |
| Railing / curb | `railingLengthM`, `curbAreaM2`, `handrailType` |
| Drain / PQ | `drainPipeCount`, `drainPipeLengthM`, `reflectiveArea10mM2` |
| Misc typed | `steelCompositeBeam` (bool), `pierAbutmentCrown`, `lengthM`, `carriageWidthM`, `builtYear`, `waterClearanceM`, `approachType`, `navigationClass`, `updatedByName` |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu2`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom/KmTo, Side, Status, ManageUnit, Notes, IsActive, timestamps | bridgeName, beamType, gps*×6, span*/beam*, abutment*, pier*, design/actualLoad, bearing*, railing*, curb*, handrail*, drain*, reflective*, steelCompositeBeam, pierAbutmentCrown, lengthM, carriageWidthM, builtYear, waterClearanceM, approachType, navigationClass, updatedByName, legacyCol64/69 |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu2Dto` fields = real-data §B write fields (resource + 48-col inventory). List projection: code, bridgeName, roadCode/roadName, km*, lengthM, beamType, spanCount, status, manageUnit, updatedAt.

### UiSchema

catalogKind `bridges` typed — **cấm** generic 3-col-only schema làm SSOT form · sections GPS/dầm/phần dưới/tải+gối/lan can+thoát.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=bridges&…` | list paged |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** bind CRUD Biểu 2 vào passport.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu2` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell |
| Migration name | `Schema_CsdlBieu2` |
| Backfill | optional: parse legacy detail* + legacyCol64/69 → typed when resource=bridges |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, km range, IdCode BR-, GPS optional decimals) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-02` → Asset |
| T-BE-01 | Entity `CsdlBieu2Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu2` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `BR-` generator |
| T-BE-05 | List filter `roadCode` + km range + optional `beamType` |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-02` + page Kind B |
| T-FE-02 | typed Slideout 48 cột sectioned · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC · beamType filter |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer Sổ 6/passport link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `bridges` typed · GPS six_numbers · LOAD text · LEGACY hidden |
| T-OUT-01 | XLS Biểu 2 — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-GPS · Q-LOAD · Q-LEGACY · Q-ROUTE · Q-PROV · Q-SECTION chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge passport/Sổ 6 · passport CRUD  
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
| writtenAt | 2026-09-05T08:25:00.000Z |
| contentHashPrior | sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 |
