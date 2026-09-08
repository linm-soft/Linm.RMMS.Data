# SA — Solution discovery — csdl-bieu-09 (CSDL Biểu 09 — Mốc lộ giới / GPMB)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_fe29c657`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section kind**) |
| status | `confirmed` |
| design_confirm | approve (`task_0eed32b7`) |
| solution_confirm | **approve** (autoApprove=ON · `task_fe29c657`) |
| domain_map | **Asset** (`csdl-bieu-09` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`08` · `csdl-so-sach`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-09` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| peerSoTs | **none** · **cấm** merge Sổ TS · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `boundary-markers` |
| formNo | `09` (renumber 8→9 · T-REN-01) |
| columns | `17` · **2 section** theo `markerKind` |
| IdCode | `MK-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `boundary-markers` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| design | `specs/csdl-bieu-09/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_fe29c657` |
| priorTask | `task_0eed32b7` (design completed) |
| updatedAt | `2026-09-05T18:00:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 09 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **17 cột** · Kind D Slideout · **2 section kind** | **GAP-BIEU09-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu9** 1:1 · **cấm** `DetailJson` | migration Dev |
| formNo / title | hub Biểu **8** | formNo **09** · title mốc LG/GPMB | **GAP-BIEU09-REN-01** / T-REN-01 |
| markerKind | free / detailPrimary | LOOKUP `RoadLimit`/`GPMB` · code_en · UI label VN | **GAP-BIEU09-KIND-01** |
| markerStructure | free | LOOKUP_STATIC Excel seed | **GAP-BIEU09-STRUCT-01** |
| Dim / Qty | missing / generic | L/W/Area optional · Qty show_always default 1 | **GAP-BIEU09-DIM-01** / Q-QTY |
| completedYear | missing | Number required | **GAP-BIEU09-YEAR-01** |
| Section UX | flat | 2 khối LG/GPMB theo `markerKind` | **GAP-BIEU09-BLOCK-01** |
| List cols | generic | **subset** shared+marker · schema-config | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-09` + hub | **GAP-BIEU09-ROUTE-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | — | **none** · ROW riêng | **GAP-CSDL-CUC-11** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-09` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=boundary-markers` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu9Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu9Entity`** · table **`rmms_csdl_bieu9`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu9`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-09` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-09` |
| UI hub | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| Peer Sổ TS | **none** |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout 2 section kind |
| Persist | shell + typed child 1:1 · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* runtime · **cấm** 2 entity |
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
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 2 section kind · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu9Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T18:00:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=boundary-markers` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · 2 section kind | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new MK- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 09 |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=boundary-markers` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · Qty default 1 | POST body `resource` + typed fields | IdCode `MK-` BE · Point kmFrom≈kmTo |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `boundary-markers` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Point range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both |
| `markerKind` | Dropdown LOOKUP_STATIC | RoadLimit / GPMB |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (marker · kind · dim · qty)

### Header (17) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

### Q-KIND-LABEL → **code_en**

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `markerKind` | `MarkerKind` | `varchar(16)` | `RoadLimit` · `GPMB` · UI label VN · drives **2 section** visibility |

### Q-STRUCT → **excel_seed**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `markerStructure` | `MarkerStructure` | `varchar(64)` | LOOKUP_STATIC Excel Biểu 9 seed · **cấm** free-text khi đã LOOKUP |

### Q-DIM → **full_dim** + Q-QTY → **show_always**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `markerLengthM` | `MarkerLengthM` | `decimal(18,3)?` | optional m |
| `markerWidthM` | `MarkerWidthM` | `decimal(18,3)?` | optional m |
| `markerAreaM2` | `MarkerAreaM2` | `decimal(18,3)?` | optional m² |
| `markerQty` | `MarkerQty` | `int` | **show_always** · default **1** · ≥1 |

### GAP-BIEU09-YEAR-01

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `completedYear` | `CompletedYear` | `int` | required · năm hoàn thành |

### Q-SIDE

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `side` | `Side` | `varchar(8)` | `L` · `R` · `C` · `Both` |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu9`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom, KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Side, MarkerKind, MarkerStructure, MarkerLengthM, MarkerWidthM, MarkerAreaM2, MarkerQty, CompletedYear |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu9Dto` fields = real-data §B write fields (resource + 17-col inventory). List projection (subset): code, roadCode/roadName, province, kmFrom, kmTo, side, markerKind, markerStructure, markerQty, completedYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `boundary-markers` typed — **cấm** generic 3-col-only schema làm SSOT form · 2 section kind theo `markerKind`.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=boundary-markers&…` | list paged |
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
| Table | `rmms_csdl_bieu9` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell + typed MarkerKind / Side |
| Migration name | `Schema_CsdlBieu9` |
| Backfill | optional: parse legacy detail* → typed when resource=boundary-markers |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| Side | varchar(8) | yes |
| MarkerKind | varchar(16) | yes · RoadLimit/GPMB |
| MarkerStructure | varchar(64) | yes (*) |
| MarkerLengthM | decimal(18,3)? | no |
| MarkerWidthM | decimal(18,3)? | no |
| MarkerAreaM2 | decimal(18,3)? | no |
| MarkerQty | int | yes · default 1 · ≥1 |
| CompletedYear | int | yes |

### Shell columns (reuse / widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmFrom / KmTo | decimal(18,3)? | Point · thường bằng nhau |
| RoadCode | varchar | SearchInput road-route |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, markerKind, markerStructure, completedYear, markerQty≥1, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-09` → Asset |
| T-REN-01 | hub formNo 8→09 · title Biểu 09 mốc LG/GPMB (cùng typed) |
| T-BE-01 | Entity `CsdlBieu9Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu9` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `MK-` generator |
| T-BE-05 | List filter `roadCode` + kmFrom/kmTo + side + markerKind |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-09` + page Kind B |
| T-FE-02 | typed Slideout 17 cột · 2 section kind · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC (kind/struct/side/prov/status) |
| T-FE-04 | LeaveConfirm · Copy · soft delete · Qty default 1 |
| T-FE-05 | hub deep-link Biểu 09 · **cấm** peer Sổ TS merge |
| T-FE-06 | UiSchema catalogKind `boundary-markers` typed · list subset |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |
| T-OUT-02 | org SearchInput — P2 |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-KIND-LABEL · Q-STRUCT · Q-DIM · Q-QTY · Q-LIST-COLS · Q-REN-LABEL chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS · bind `road-assets` · 2 entity  
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
| writtenAt | 2026-09-05T18:00:00.000Z |
| contentHashPrior | sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4 |
