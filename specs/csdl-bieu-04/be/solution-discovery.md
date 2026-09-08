# SA — Solution discovery — csdl-bieu-04 (CSDL Biểu 04 — Cống các loại)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_c8366fab`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_95985c62`) |
| solution_confirm | **approve** (autoApprove=ON · `task_c8366fab`) |
| domain_map | **Asset** (`csdl-bieu-04` → `asset` · **T-DM-01** add slug) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-04` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| peerSoTs | `so-ts-culvert-x` · deep-link only · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `culverts` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-04-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| design | `specs/csdl-bieu-04/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprintPrior | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_c8366fab` |
| priorTask | `task_95985c62` (design completed) |
| updatedAt | `2026-09-05T06:20:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 04 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **17 cột** Excel Biểu 4 · Kind D Slideout | **GAP-BIEU04-TYPED-01** |
| GPS | — / optional latlng | **four_xy** `gpsCulvertX/Y` · `gpsRoadX/Y` | **GAP-BIEU04-GPS-01** |
| Shape | free / missing | Dropdown hộp/tròn + thân/đầu TL/HL | **GAP-BIEU04-SHAPE-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-04` + hub entry | **GAP-BIEU04-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu4** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| loadClass | — | **free_text** P1 · lookup DEFER | Q-LOAD |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** / **SKIP-01** |
| Peer Sổ TS | `so-ts-culvert-x` | deep-link only | **GAP-BIEU04-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-04` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=culverts` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu4Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu4Entity`** · table **`rmms_csdl_bieu4`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu4`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-04` → Asset (live map có `csdl-bieu-01` · `csdl-so-sach`) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS `so-ts-culvert-x` form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-04` |
| UI hub | `/so-ts/csdl-so-sach?resource=culverts` |
| Peer Sổ TS | `/so-ts/...` `so-ts-culvert-x` deep-link |
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
| Persist | `no-parent-json-field` | typed table · **không** nhét 17 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu4Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T06:20:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=culverts` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new CG- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=culverts` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `CG-` BE |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `culverts` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmPoint` | Number | filter exact/near |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (GPS · shape · storage)

### Q-GPS → **four_xy** (PO/Design locked)

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `gpsCulvertX` | `GpsCulvertX` | `decimal(18,6)?` | tim cống X |
| `gpsCulvertY` | `GpsCulvertY` | `decimal(18,6)?` | tim cống Y |
| `gpsRoadX` | `GpsRoadX` | `decimal(18,6)?` | tim đường X |
| `gpsRoadY` | `GpsRoadY` | `decimal(18,6)?` | tim đường Y |

**CRS/storage:** store raw projected XY as entered (road-survey / VN-2000 local) · **không** convert latlng P1 · **cấm** gộp 2 field · **cấm** encode JSON pair · FE `Number` ×4 optional (not required).

### Q-SHAPE → LOOKUP_STATIC + text ends

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `shape` | `Shape` | `varchar(32)` | hộp · tròn (LOOKUP_STATIC) |
| `bodyMaterial` | `BodyMaterial` | `varchar(128)` | LOOKUP_STATIC hoặc Text P1 |
| `inletUpstream` | `InletUpstream` | `varchar(256)` | đầu thượng lưu Text |
| `outletDownstream` | `OutletDownstream` | `varchar(256)` | đầu hạ lưu Text |

### Q-LOAD → **free_text** P1

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `loadClass` | `LoadClass` | `varchar(64)` | free text P1 · lookup DEFER |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu4`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode scalar/DTO), Province, KmPoint (or KmFrom scalar), Side, Status, ManageUnit, Notes, IsActive, timestamps | apertureM, shape, bodyMaterial, inletUpstream, outletDownstream, lengthM, loadClass, builtYear, gpsCulvertX/Y, gpsRoadX/Y |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu4Dto` fields = real-data §B write fields (resource + 17-col inventory + common side/manageUnit/notes). List projection: code, roadCode/roadName, kmPoint, apertureM, shape, lengthM, loadClass, builtYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `culverts` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=culverts&…` | list paged |
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
| Table | `rmms_csdl_bieu4` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell |
| Migration name | `Schema_CsdlBieu4` |
| Backfill | optional: parse legacy detail* → typed when resource=culverts |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| ApertureM | decimal(18,3) | yes |
| Shape | varchar(32) | yes |
| BodyMaterial | varchar(128) | no |
| InletUpstream | varchar(256) | no |
| OutletDownstream | varchar(256) | no |
| LengthM | decimal(18,3) | yes |
| LoadClass | varchar(64) | no |
| BuiltYear | int? | no |
| GpsCulvertX/Y | decimal(18,6)? | no |
| GpsRoadX/Y | decimal(18,6)? | no |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, apertureM/lengthM/shape, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-04` → Asset |
| T-BE-01 | Entity `CsdlBieu4Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu4` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `CG-` generator |
| T-BE-05 | List filter `roadCode` + `kmPoint` |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-04` + page Kind B |
| T-FE-02 | typed Slideout 17 cột · FormMode↔API · GPS ×4 |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer Sổ TS link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `culverts` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-GPS · Q-ROUTE · Q-PROV · Q-LOAD · Q-SHAPE chốt · autoApprove)

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
| writtenAt | 2026-09-05T06:20:00.000Z |
| contentHashPrior | sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 |
