# SA — Solution discovery — csdl-bieu-05 (CSDL Biểu 05 — Rãnh các loại)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_e5779496`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_8881f84f`) |
| solution_confirm | **approve** (autoApprove=ON · `task_e5779496`) |
| domain_map | **Asset** (`csdl-bieu-05` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01` · `csdl-bieu-04` · `csdl-so-sach`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-05` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| peerSoTs | `so-ts-ditch` · deep-link only · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `ditches` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-05-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| design | `specs/csdl-bieu-05/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprintPrior | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_e5779496` |
| priorTask | `task_8881f84f` (design completed) |
| updatedAt | `2026-09-05T13:42:46.024Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 05 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **18 cột** Excel Biểu 5 · Kind D Slideout | **GAP-BIEU05-TYPED-01** |
| Kind | — / free | Dropdown hở/kín LOOKUP | **GAP-BIEU05-KIND-01** |
| Shape + KC | missing | Dropdown hình + KC LOOKUP | **GAP-BIEU05-SHAPE-01** |
| Aperture | — | **free_text** `apertureSize` (WxH/m) · Number DEFER | Q-APERTURE |
| Drain | — | **free_text** `drainageCapacity` · number_cms DEFER | **GAP-BIEU05-DRAIN-01** / Q-DRAIN |
| Range | single km / missing | `kmFrom`/`kmTo` filter+form | **GAP-BIEU05-RANGE-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-05` + hub entry | **GAP-BIEU05-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu5** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | `so-ts-ditch` | deep-link only | **GAP-BIEU05-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-05` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=ditches` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu5Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu5Entity`** · table **`rmms_csdl_bieu5`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu5`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-05` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS `so-ts-ditch` form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-05` |
| UI hub | `/so-ts/csdl-so-sach?resource=ditches` |
| Peer Sổ TS | `/so-ts/...` `so-ts-ditch` deep-link |
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
| Persist | `no-parent-json-field` | typed table · **không** nhét 18 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu5Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T13:42:46.024Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=ditches` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new RN- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=ditches` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `RN-` BE |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `ditches` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` | Number | filter range start |
| `kmTo` | Number | filter range end |
| `ditchKind` | Dropdown LOOKUP_STATIC | hở / kín |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (kind · shape · aperture · drain · storage)

### Q-SHAPE → **rect_trap_round** (PO/Design locked)

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `shape` | `Shape` | `varchar(32)` | chữ nhật · thang · tròn (LOOKUP_STATIC) |
| `structure` | `Structure` | `varchar(128)` | BT / BTCT / đá xây / khác LOOKUP_STATIC |

### Q-APERTURE → **free_text** P1

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `apertureSize` | `ApertureSize` | `varchar(64)` | WxH/m free text · Number m DEFER |

### Q-DRAIN → **free_text** P1

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `drainageCapacity` | `DrainageCapacity` | `varchar(64)` | khả năng thoát free text · number_cms DEFER |

### GAP-BIEU05-KIND-01 → LOOKUP_STATIC

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `ditchKind` | `DitchKind` | `varchar(32)` | hở · kín |

### GAP-BIEU05-RANGE-01 → shell km pair

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `kmFrom` | `KmFrom` | `decimal(18,3)?` | shell · filter+form * |
| `kmTo` | `KmTo` | `decimal(18,3)?` | shell · filter+form * |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu5`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom, KmTo, Side, Status, ManageUnit, Notes, IsActive, timestamps | ditchKind, structure, shape, apertureSize, lengthM, drainageCapacity, builtYear, ownerUnit |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu5Dto` fields = real-data §B write fields (resource + 18-col inventory + common side/manageUnit/notes). List projection: code, roadCode/roadName, kmFrom, kmTo, ditchKind, structure, shape, apertureSize, lengthM, drainageCapacity, builtYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `ditches` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=ditches&…` | list paged |
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
| Table | `rmms_csdl_bieu5` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell + typed ditchKind |
| Migration name | `Schema_CsdlBieu5` |
| Backfill | optional: parse legacy detail* → typed when resource=ditches |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| DitchKind | varchar(32) | yes |
| Structure | varchar(128) | no |
| Shape | varchar(32) | no |
| ApertureSize | varchar(64) | no |
| LengthM | decimal(18,3) | yes |
| DrainageCapacity | varchar(64) | no |
| BuiltYear | int? | no |
| OwnerUnit | varchar(256) | no |

### Shell columns (widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmFrom | decimal(18,3)? | range start |
| KmTo | decimal(18,3)? | range end |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, lengthM, ditchKind, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-05` → Asset |
| T-BE-01 | Entity `CsdlBieu5Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu5` (Dev/4b) · shell KmFrom/KmTo nếu thiếu |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `RN-` generator |
| T-BE-05 | List filter `roadCode` + `kmFrom`/`kmTo` + `ditchKind` |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-05` + page Kind B |
| T-FE-02 | typed Slideout 18 cột · FormMode↔API · aperture/drain free_text |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer Sổ TS link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `ditches` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-APERTURE · Q-DRAIN · Q-SHAPE chốt · autoApprove)

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
| writtenAt | 2026-09-05T13:42:46.024Z |
| contentHashPrior | sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117 |
