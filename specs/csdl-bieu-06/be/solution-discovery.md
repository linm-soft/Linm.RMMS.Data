# SA — Solution discovery — csdl-bieu-06 (CSDL Biểu 06 — Hầm chui DS + hộp KT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_789a57e3`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_2224e771`) |
| solution_confirm | **approve** (autoApprove=ON · `task_789a57e3`) |
| domain_map | **Asset** (`csdl-bieu-06` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01` · `csdl-bieu-04` · `csdl-bieu-05` · `csdl-so-sach`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-06` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=underpasses` |
| peerSoTs | `so-ts-underpass` · deep-link only · **cấm** merge form · **≠** `road-assets` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `underpasses` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-06-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| design | `specs/csdl-bieu-06/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprintPrior | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_789a57e3` |
| priorTask | `task_2224e771` (design completed) |
| updatedAt | `2026-09-05T07:35:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 06 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **19 cột** Excel Biểu 6 · Kind D Slideout · gồm hộp KT | **GAP-BIEU06-TYPED-01** |
| Kind | — / free | Dropdown hầm chui DS / hộp KT | **GAP-BIEU06-KIND-01** / Q-KIND |
| Aperture | — | **number_m** `apertureM` (DB `ApertureM`) | Q-APERTURE |
| Pipe | missing | `pipeCount` optional int ≥1 khi nhập | **GAP-BIEU06-PIPE-01** |
| Structure | missing | `bodyStructure` + `portalStructure` LOOKUP | **GAP-BIEU06-STRUCT-01** |
| Load | missing | `designLoad` lookup_hl (HL93/H30/khác) | **GAP-BIEU06-LOAD-01** |
| Pavement | missing | `pavementInside` BTXM/BTN | **GAP-BIEU06-PAVE-01** |
| Light / drain | missing | `lighting` / `drainage` **yes_no** | Q-LIGHT / Q-DRAIN |
| Point | generic km / ép range | `kmPoint` Point · **không** ép `kmTo` | **GAP-BIEU06-POINT-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-06` + hub entry | **GAP-BIEU06-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu6** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | `so-ts-underpass` | deep-link only · **≠** road-assets | **GAP-BIEU06-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-06` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=underpasses` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu6Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu6Entity`** · table **`rmms_csdl_bieu6`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu6`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-06` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS `so-ts-underpass` form · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-06` |
| UI hub | `/so-ts/csdl-so-sach?resource=underpasses` |
| Peer Sổ TS | `/so-ts/...` `so-ts-underpass` deep-link |
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
| Persist | `no-parent-json-field` | typed table · **không** nhét 19 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu6Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T07:35:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=underpasses` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new HC- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=underpasses` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `HC-` BE |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `underpasses` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmPoint` | Number | Point filter · **không** `kmTo` |
| `underpassKind` | Dropdown LOOKUP_STATIC | hầm chui DS / hộp KT |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (kind · aperture · pipe · struct · load · pave · light/drain)

### Q-KIND → **hc_ds_hop_kt** (PO/Design locked)

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `underpassKind` | `UnderpassKind` | `varchar(32)` | `hc_ds` · `hop_kt` (LOOKUP_STATIC) |

### Q-APERTURE → **number_m** P1

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `apertureM` | `ApertureM` | `decimal(18,3)?` | * m · Number control |

### GAP-BIEU06-PIPE-01 → **optional** P1

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `pipeCount` | `PipeCount` | `int?` | optional · ≥1 khi nhập |

### GAP-BIEU06-STRUCT-01

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `bodyStructure` | `BodyStructure` | `varchar(128)` | BT / BTCT / đá xây / khác LOOKUP |
| `portalStructure` | `PortalStructure` | `varchar(128)` | cùng set LOOKUP |

### Q-LOAD → **lookup_hl**

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `designLoad` | `DesignLoad` | `varchar(32)` | HL93 · H30 · khác |

### GAP-BIEU06-PAVE-01

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `pavementInside` | `PavementInside` | `varchar(32)` | BTXM · BTN |

### Q-LIGHT / Q-DRAIN → **yes_no**

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `lighting` | `Lighting` | `varchar(8)` | yes · no |
| `drainage` | `Drainage` | `varchar(8)` | yes · no |

### GAP-BIEU06-POINT-01 → shell Point

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `kmPoint` | `KmPoint` | `decimal(18,3)?` | shell · filter+form · **không** ép `KmTo` |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu6`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmPoint, Status, ManageUnit, Notes, IsActive, timestamps | underpassKind, apertureM, pipeCount, bodyStructure, portalStructure, lengthM, designLoad, pavementInside, lighting, drainage, builtYear |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu6Dto` fields = real-data §B write fields (resource + 19-col inventory). List projection: code, roadCode/roadName, kmPoint, underpassKind, apertureM, pipeCount, bodyStructure, portalStructure, lengthM, designLoad, pavementInside, lighting, drainage, builtYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `underpasses` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=underpasses&…` | list paged |
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
| Table | `rmms_csdl_bieu6` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell + typed underpassKind |
| Migration name | `Schema_CsdlBieu6` |
| Backfill | optional: parse legacy detail* → typed when resource=underpasses |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| UnderpassKind | varchar(32) | yes |
| ApertureM | decimal(18,3)? | yes (*) |
| PipeCount | int? | no (optional) |
| BodyStructure | varchar(128) | no |
| PortalStructure | varchar(128) | no |
| LengthM | decimal(18,3) | yes |
| DesignLoad | varchar(32) | no |
| PavementInside | varchar(32) | no |
| Lighting | varchar(8) | no |
| Drainage | varchar(8) | no |
| BuiltYear | int? | no |

### Shell columns (widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmPoint | decimal(18,3)? | Point · **không** require KmTo |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, lengthM, underpassKind, apertureM, IdCode; pipeCount ≥1 when set) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-06` → Asset |
| T-BE-01 | Entity `CsdlBieu6Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu6` (Dev/4b) · shell KmPoint nếu thiếu |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `HC-` generator |
| T-BE-05 | List filter `roadCode` + `kmPoint` + `underpassKind` |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-06` + page Kind B |
| T-FE-02 | typed Slideout 19 cột · FormMode↔API · aperture number_m · pipe optional · light/drain yes_no |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer Sổ TS link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `underpasses` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-APERTURE · Q-PIPE · Q-LOAD · Q-LIGHT · Q-DRAIN · Q-KIND chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS form · bind `road-assets`  
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
| writtenAt | 2026-09-05T07:35:00.000Z |
| contentHashPrior | sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 |
