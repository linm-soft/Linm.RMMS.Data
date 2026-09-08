# SA — Solution discovery — csdl-so-03 (CSDL Sổ 03 — Trực BĐGT + chốt + SC)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_7d37d683`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid`) |
| status | `confirmed` |
| design_confirm | approve (`task_0fc07693`) |
| solution_confirm | **approve** (autoApprove=ON · `task_7d37d683`) |
| domain_map | **Asset** (`csdl-so-03` → `asset` · **T-DM-01** add slug — chưa có trên DOMAIN-MAP) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-03` |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| peerSoTs | — · **cấm** merge Sổ TS |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` (soft-retire same release · Q-MERGE) |
| formNo | `03` · label «Sổ 03 — Trực BĐGT + chốt + sự cố» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `duty-incident-logs` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-03-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-03-real-data.md` |
| design | `specs/csdl-so-03/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_7d37d683` |
| priorTask | `task_0fc07693` (design completed) |
| updatedAt | `2026-09-06T02:35:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live | New (Sổ 03 typed + merge) | Action |
|------|--------------|---------------------------|--------|
| Resource | 2 keys `duty-logs` + `checkpoint-duties` | **1** `duty-incident-logs` | **GAP-SO03-MERGE-01** · **GAP-CSDL-CUC-06** |
| Hub cards | 2 card Sổ 2+3 | **1** card «Sổ 03 — Trực BĐGT + chốt + sự cố» | **GAP-SO03-FORMNO-01** |
| Legacy QS | `?resource=duty-logs` / `checkpoint-duties` | redirect → `duty-incident-logs` | Q-MERGE |
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-03 header + typed entries · **cấm** `dutyKind` col | **GAP-SO03-TYPED-01** · **GAP-CSDL-CUC-03** |
| Route | hub-only | **alias** `/csdl-so-03` + hub | **GAP-SO03-ROUTE-01** |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo03** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | Q-PROV |
| status | LOOKUP_STATIC | `draft\|active\|closed` P1 | Q-STATUS |
| contractor | Text | Text P1 · org-unit SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** · Q-ORG |
| shift | — | Text free P1 (entry) · **cấm** invent enum | Q-SHIFT |
| dutyKind | — | **không** cột · gộp BĐGT/chốt/SC trong `content` | Q-DUTYKIND |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY | **GAP-RPT-SRC-CSDL-01** |
| Map / File | none | none · **cấm** invent map/file API | — |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-03` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=duty-incident-logs` → typed map · retire 2 legacy keys |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo03Dtos.cs`** (typed create/update/detail + entries) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo03Entity`** · table **`rmms_csdl_so03`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlSo03`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-so-03` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form · invent file API.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-03` |
| UI hub | `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| Legacy QS | `?resource=duty-logs` / `checkpoint-duties` → redirect `duty-incident-logs` |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + entries grid |
| Persist | shell + typed header 1:1 + child entries · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · FileService · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table + entry cols · **không** nhét entries vào JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **period** · form `periodStart`/`periodEnd` · entries `dutyDate` Date | FE local→UTC bound · BE store UTC · list period AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo03Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T02:35:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=duty-incident-logs` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` typed | C/E/V | nested `entries[]` on API-02/03/04 |
| S-HUB-ENTRY | **1** hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=duty-incident-logs` + filters | — | page=1 on filter change |
| create | empty typed form + empty entries | POST body `resource` + typed header + `entries[]` | IdCode `SO-` BE |
| edit | GET `/{id}` (shell+typed+entries) | PUT `/{id}` | replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy entries optional |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `duty-incident-logs` |
| `search` | SearchTextInput | mã · sổ · đường · người · nội dung |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 (5 tỉnh) |
| `status` | Dropdown LOOKUP_STATIC | draft/active/closed |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter **period** (periodStart/End) · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so03`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, BookNo, Contractor, RoadCode, RoadName, Province, KmFrom/KmTo, Status, Notes, IsActive, timestamps | PeriodStart, PeriodEnd | LineNo, DutyDate, Shift, PersonName, Content, Handling, SignRemark |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for duty-incident-logs** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen) — cite real-data §B

`CsdlSo03Dto`:

- Header: `resource`, `code`, `bookNo`, `contractor`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `periodStart`, `periodEnd`, `province`, `status`, `notes`
- `entries[]`: `lineNo`, `dutyDate`, `shift`, `personName`, `content`, `handling`, `signRemark`
- **Cấm** `dutyKind` field · BĐGT/chốt/SC gộp trong `content`

List projection: `code`, `bookNo`, `contractor`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `periodStart`/`periodEnd`, `status`, `province`, `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell · `duty-incident-logs` |
| code | Code | shell · SO- |
| bookNo | BookNo | shell |
| contractor | Contractor | shell |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | shell |
| province / status | Province / Status | shell |
| notes | Notes | shell |
| periodStart / periodEnd | PeriodStart / PeriodEnd | typed · UTC |
| entries[].dutyDate | DutyDate | entry · UTC Date |
| entries[].shift | Shift | entry · nvarchar free |
| entries[].personName | PersonName | entry |
| entries[].content | Content | entry · req · gộp loại trực |
| entries[].handling | Handling | entry |
| entries[].signRemark | SignRemark | entry |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### UiSchema

catalogKind `duty-incident-logs` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Merge / retire (Q-MERGE)

| Step | Spec |
|------|------|
| Target resource | `duty-incident-logs` only P1 |
| Migrate | rows `duty-logs` + `checkpoint-duties` → Resource=`duty-incident-logs` + typed backfill when possible |
| Soft-retire | stop accept create/update on legacy keys · list GET legacy → empty or redirect hint |
| Hub | 1 card formNo=`03` · remove dual cards |
| FE | legacy QS redirect to `duty-incident-logs` |
| **SA** | plan only · **cấm** chạy migration |

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=duty-incident-logs&…` | list paged · period from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + entries |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** invent file API.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so03` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | PeriodStart/PeriodEnd datetime2 UTC |
| Entries widen | DutyDate · Shift · PersonName · Content · Handling · SignRemark |
| Indexes | (CatalogRecordId) unique · list filters via shell · period range via typed |
| Migration name | `Schema_CsdlSo03` |
| Backfill | Resource remap legacy 2 keys → `duty-incident-logs` · map detail*/col1–3 → typed when present |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, bookNo, contractor, roadCode, kmFrom, periodStart, entries dutyDate/personName/content, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-03` → Asset |
| T-BE-01 | Entity `CsdlSo03Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo03` + widen `CsdlBookEntryEntity` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + period `fromDate`/`toDate` (TZ) |
| T-BE-06 | Merge migrate Resource `duty-logs`+`checkpoint-duties` → `duty-incident-logs` · soft-retire keys |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-03` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | entries `inline_grid` typed · **cấm** dutyKind col |
| T-FE-04 | FilterBar · SearchInput road-route · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub **1** card «Sổ 03» + legacy QS redirect · **cấm** merge Sổ TS |
| T-FE-07 | UiSchema catalogKind `duty-incident-logs` typed |
| T-OUT-01 | XLS / org SearchInput P2 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-MERGE · Q-DUTYKIND · Q-FORMNO · Q-STATUS · Q-PROV · Q-ORG · Q-SHIFT chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS form · dutyKind P1 · 2 resource song song P1  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset  

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
| writtenAt | 2026-09-06T02:35:00.000Z |
| contentHashPrior | sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d |
