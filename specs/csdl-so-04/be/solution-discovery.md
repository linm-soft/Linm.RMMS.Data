# SA — Solution discovery — csdl-so-04 (CSDL Sổ 04 — Tổng hợp đếm xe)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_ae910ab6`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · runtime `/api/v1/traffic-counts` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · count matrix **không** journal) |
| status | `confirmed` |
| design_confirm | approve (`task_e5edcfa3`) |
| solution_confirm | **approve** (autoApprove=ON · `task_ae910ab6`) |
| domain_map | **Asset** (`csdl-so-04` → `asset` · **T-DM-01** add slug — chưa có trên DOMAIN-MAP) |
| sa_tz_gate | **`tz_none`** (year/quarter int · **không** Date/DateTime form/list filter) |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-04` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| peerSoTs | LOOKUP `COUNT_STATION` / `so-ts-count-station` · **cấm** merge ROW |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `traffic-counts` (**giữ** key) |
| formNo | `04` · label «Sổ 04 — Tổng hợp đếm xe» · **không** «(+ TNGT)» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `traffic-counts` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-04-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-04-real-data.md` |
| design | `specs/csdl-so-04/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprintPrior | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_ae910ab6` |
| priorTask | `task_e5edcfa3` (design completed) |
| updatedAt | `2026-09-06T05:30:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Sổ 04 typed) | Action |
|------|----------------------------|-------------------|--------|
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-04 header + **16 class** + `totalCars` derived · **1 row / trạm / quý** · **cấm** journal | **GAP-SO04-TYPED-01** · **GAP-SO04-ROW-01** |
| Title | «đếm xe (+ TNGT)» | «Sổ 04 — Tổng hợp đếm xe» · TNGT → `csdl-so-05` | **GAP-SO04-SPLIT-01** · **GAP-CSDL-CUC-07** |
| Route | hub-only `?resource=traffic-counts` | **alias** `/csdl-so-04` + hub | **GAP-SO04-ROUTE-01** |
| formNo label | live lẫn TNGT · formNo `4` | Cục **04** · **giữ** key `traffic-counts` | **GAP-SO04-FORMNO-01** |
| Station | free text / detail* | SearchInput `count-station` / `COUNT_STATION` | **GAP-SO04-STATION-01** |
| Method | — | `countMethod` `manual\|auto` | **GAP-SO04-METHOD-01** |
| Unique | — | hard **422** `stationCode+year+quarter` (+ tenant) | **Q-UNIQUE** |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo04** · **không** AccidenSummary · **cấm** parent `*Json` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO · **cấm** runtime `/api/v1/traffic-counts` | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | Q-PROV |
| status | LOOKUP_STATIC | `draft\|active\|closed` | Q-STATUS |
| contractor | Text | Text P1 · org-unit SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| totalCars | flat / nhập | **readonly derived** = sum(`class01`…`class16`) BE+FE | Q-TOTAL |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed 16 class = source READY `rpt-dem-xe` · **cấm** CRUD report | **GAP-RPT-SRC-CSDL-01** |
| Map / File | none | none · **cấm** invent | — |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-04` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=traffic-counts` → typed map · drop TNGT fields |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo04Dtos.cs`** (typed create/update/detail · **không** `entries[]` journal) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed header | **`CsdlSo04Entity`** · table **`rmms_csdl_so04`** · FK `CatalogRecordId` 1:1 · class01…16 + totalCars + year/quarter/station*/countMethod |
| Book entries | **không** dùng journal runtime cho `traffic-counts` · stop write `col1–3` / `detail*` |
| Schema name | **`Schema_CsdlSo04`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-so-04` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` · peer `COUNT_STATION` / count-station |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · runtime `/api/v1/traffic-counts` · merge Sổ TS form · AccidentSummary / TNGT trên resource này · invent file API.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-04` |
| UI hub | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| count-station | peer Asset LOOKUP `COUNT_STATION` / catalogKind `count-station` (`so-ts-count-station`) · Dev bind live peer path · **cấm** invent host |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + count matrix |
| Persist | shell + typed header 1:1 (matrix on typed) · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime · **cấm** journal entries |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · FileService · Step 4b @ SA · so-05 TNGT |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table cols · **không** nhét class* vào JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_none`** | year int · quarter 1–4 · **không** Date filter/form | audit `updatedAt` shell UTC only |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo04Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_none` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T05:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=traffic-counts` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- · **clear** year/quarter if unique clash risk) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-COUNT-MATRIX | Z2 16 Number + totalCars ro | C/E/V | typed fields on API-02/03/04 · **không** `entries[]` |
| S-HUB-ENTRY | hub card title **không** TNGT | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |
| Lookup station | SearchInput | filter + form | API-LKP-02 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=traffic-counts` + filters | — | page=1 on filter change |
| create | empty typed form + class*=0 | POST body `resource` + typed header (class01…16) | IdCode `SO-` BE · `totalCars` derived |
| edit | GET `/{id}` (shell+typed) | PUT `/{id}` | replace typed 1:1 · unique check |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · may need new year/quarter if unique |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `traffic-counts` |
| `search` | SearchTextInput | mã · sổ · trạm · đường |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 (5 tỉnh) |
| `status` | Dropdown LOOKUP_STATIC | draft/active/closed |
| `roadCode` | SearchInput road-route | Integration search |
| `stationCode` | SearchInput count-station | peer COUNT_STATION |
| `year` | Integer / Dropdown | kỳ năm |
| `quarter` | Dropdown LOOKUP_STATIC | 1–4 |
| `countMethod` | Dropdown LOOKUP_STATIC | manual\|auto |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header · **no journal**)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so04`) | Book entries |
|---------------------------------------------|----------------------------------|--------------|
| Resource, Code, BookNo, Contractor, RoadCode, RoadName, Province, KmFrom/KmTo, Status, Notes, IsActive, timestamps | StationCode, StationName, Year, Quarter, CountMethod, Class01…Class16, TotalCars | **unused** runtime · stop col1–3 / detail* write for this resource |

### Typed DTO shape (API body / response widen) — cite real-data §B

`CsdlSo04Dto`:

- Header: `resource`, `code`, `bookNo`, `contractor`, `stationCode`, `stationName`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `year`, `quarter`, `countMethod`, `province`, `status`, `notes`
- Matrix: `class01`…`class16` (int ≥0) · `totalCars` (readonly derived = sum class*)
- **Cấm** `entries[]` journal · **cấm** TNGT / AccidentSummary fields · **cấm** detail*/col1–3 SSOT

List projection: `code`, `bookNo`, `contractor`, `stationCode`/`stationName`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `year`, `quarter`, `countMethod`, `totalCars`, `status`, `province`, `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell · `traffic-counts` |
| code | Code | shell · SO- |
| bookNo | BookNo | shell |
| contractor | Contractor | shell |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | shell |
| province / status | Province / Status | shell |
| notes | Notes | shell |
| stationCode / stationName | StationCode / StationName | typed |
| year / quarter | Year / Quarter | typed · int |
| countMethod | CountMethod | typed · `manual\|auto` |
| class01…class16 | Class01…Class16 | typed · int ≥0 |
| totalCars | TotalCars | typed · **derived** sum · **cấm** client override on write |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### UiSchema

catalogKind `traffic-counts` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Unique / validation

| Rule | Spec |
|------|------|
| Unique | hard **422** · `(CompanyCode, StationCode, Year, Quarter)` among `IsActive=true` · resource=`traffic-counts` |
| totalCars | BE compute on create/update = sum(class01…16) · FE display readonly |
| Required | bookNo, contractor, stationCode, roadCode, kmFrom, year, quarter, countMethod, class01…16 |
| Split | **cấm** TNGT fields · so-05 độc lập |

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=traffic-counts&…` | list paged · filters §list |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed · unique 422 |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · unique 422 |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |
| API-LKP-02 | GET | peer LOOKUP count-station / `COUNT_STATION` | SearchInput station · Dev cite live peer · **cấm** invent |
| API-LKP-03 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** runtime `/api/v1/traffic-counts` · **cấm** invent file API · **cấm** CRUD `rpt-dem-xe` / Report `traffic-counts`.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so04` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | StationCode, StationName, Year, Quarter, CountMethod, Class01…Class16, TotalCars |
| Indexes | (CatalogRecordId) unique · **UX** unique (CompanyCode via join, StationCode, Year, Quarter) active |
| Migration name | `Schema_CsdlSo04` |
| Backfill | map legacy detail*/col1–3 → typed when present · **không** migrate AccidentSummary vào so-04 |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business · **không** derive totalCars ở BFF |
| Validation | API service (required fields, class ≥0, unique station+year+quarter, IdCode, totalCars derived) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource / unique clash · 404 detail · toast · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-04` → Asset |
| T-BE-01 | Entity `CsdlSo04Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo04` (Dev/4b) · unique index plan |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail*/col1–3 · derive totalCars · unique 422 |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filters stationCode/year/quarter/countMethod/roadCode |
| T-BE-06 | Hub title drop «(+ TNGT)» · catalog label formNo 04 (split so-05 OUT pack) |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-04` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | count matrix 16 class + totalCars ro · **cấm** journal / col1–3 |
| T-FE-04 | FilterBar · SearchInput road + station · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub card title không TNGT · **cấm** merge Sổ TS |
| T-FE-07 | UiSchema catalogKind `traffic-counts` typed |
| T-OUT-01 | XLS / org SearchInput P2 / so-05 TNGT — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (PO/Design chốt · class Excel overlay = pending cite keys ổn định · autoApprove)
- Class label interim «Hạng xe {nn}» — Design overlay khi file Cục có

## 8. Cấm (SA)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS · gộp TNGT/AccidentSummary · runtime `/api/v1/traffic-counts` · journal entries  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset · CRUD rpt-dem-xe  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | new_page |
| solution_confirm | approve |
| writtenAt | 2026-09-06T05:30:00.000Z |
| contentHashPrior | sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d |
