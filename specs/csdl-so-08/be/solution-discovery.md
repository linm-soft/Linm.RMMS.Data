# SA — Solution discovery — csdl-so-08 (CSDL Sổ 08 — Kết quả BDTX)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_cb03edd5`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid`) |
| status | `confirmed` |
| design_confirm | approve (`task_e009f09b`) |
| solution_confirm | **approve** (autoApprove=ON · `task_cb03edd5`) |
| domain_map | **Asset** (`csdl-so-08` → `asset` · **T-DM-01** add slug) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-08` |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| peerSoTs | — · **cấm** merge Sổ TS |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `maintenance-work-logs` |
| formNo | `08` · label «Sổ 08 — Kết quả BDTX» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `maintenance-work-logs` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-08-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-08-real-data.md` |
| design | `specs/csdl-so-08/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprintPrior | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_cb03edd5` |
| priorTask | `task_e009f09b` (design completed) |
| updatedAt | `2026-09-06T01:47:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Sổ 08 typed) | Action |
|------|----------------------------|-------------------|--------|
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-08 header (thầu · VP · Khu · tuyến Km · kỳ) + entries **5 cột** | **GAP-SO08-TYPED-01** |
| Route | hub-only `?resource=maintenance-work-logs` | **alias** `/csdl-so-08` + hub entry | **GAP-SO08-ROUTE-01** |
| formNo label | Live «Sổ 8» | Cục **Sổ 08** · key `maintenance-work-logs` giữ | **GAP-SO08-FORMNO-01** |
| File / media | không | **N/A** · **cấm** invent FileMulti | — |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo08** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | Q-PROV |
| status | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | Q-STATUS |
| contractor / VP / Khu | detail* | Text P1 · org SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY (report riêng) | **GAP-RPT-SRC-CSDL-01** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Entry Km | col / gộp | cặp `kmFrom`/`kmTo` · **cấm** `kmAt` | Q-ENTRY-KM |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-08` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=maintenance-work-logs` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo08Dtos.cs`** (typed create/update/detail + entries) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo08Entity`** · table **`rmms_csdl_so08`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlSo08`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| File | **N/A** · **cấm** invent file API |
| DOMAIN-MAP | add row `csdl-so-08` → Asset (**T-DM-01**) — hiện thiếu slug |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-08` |
| UI hub | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
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
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · media · Step 4b @ SA |

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
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **period** · form `periodStart`/`periodEnd` | FE local→UTC bound · BE store UTC · list period AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo08Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T01:47:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=maintenance-work-logs` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` typed 5 cột | C/E/V | nested `entries[]` on API-02/03/04 |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=maintenance-work-logs` + filters | — | page=1 on filter change |
| create | empty typed form + empty entries | POST body `resource` + typed header + `entries[]` | IdCode `SO-` BE |
| edit | GET `/{id}` (shell+typed+entries) | PUT `/{id}` | replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy entries optional |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `maintenance-work-logs` |
| `search` | SearchTextInput | mã · sổ · thầu · đường · VP/Khu |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter **period** (periodStart/End) · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so08`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, BookNo, RoadCode, RoadName, Province, KmFrom/KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Contractor, OfficeUnit, ZoneUnit, PeriodStart, PeriodEnd | LineNo, WorkItem, KmFrom, KmTo, Solution, MainResult, Note |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for maintenance-work-logs** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlSo08Dto` = real-data §B write fields:

- Header: `resource`, `code`, `bookNo`, `contractor`, `officeUnit`, `zoneUnit`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `periodStart`, `periodEnd`, `manageUnit`, `province`, `status`, `notes`
- `entries[]`: `lineNo`, `workItem`, `kmFrom`, `kmTo`, `solution`, `mainResult`, `note`

List projection: `code`, `bookNo`, `contractor`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `officeUnit`, `zoneUnit`, `periodStart`/`periodEnd`, `status`, `province`, `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell |
| code | Code | shell · SO- |
| bookNo | BookNo | shell |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | shell |
| province / status | Province / Status | shell |
| manageUnit / notes | ManageUnit / Notes | shell |
| contractor | Contractor | typed `rmms_csdl_so08` |
| officeUnit | OfficeUnit | typed |
| zoneUnit | ZoneUnit | typed |
| periodStart / periodEnd | PeriodStart / PeriodEnd | typed · UTC |
| entries[].lineNo | LineNo | entry |
| entries[].workItem | WorkItem | entry |
| entries[].kmFrom / kmTo | KmFrom / KmTo | entry · **cấm** kmAt |
| entries[].solution | Solution | entry |
| entries[].mainResult | MainResult | entry |
| entries[].note | Note | entry |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### File bind

| Field | Control | API / service | Rule |
|-------|---------|---------------|------|
| — | — | **N/A** | media không bắt buộc · **cấm** invent FileMulti / file API |

### UiSchema

catalogKind `maintenance-work-logs` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Validation (API)

Required header: `resource`, `bookNo`, `contractor`, `officeUnit`, `zoneUnit`, `roadCode`, `kmFrom`, `periodStart`.  
Required entry row (khi có dòng): `workItem`, `kmFrom`, `solution`, `mainResult`.  
Optional: `kmTo` (header+entry), `periodEnd`, `manageUnit`, `notes`, `entries[].note`.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=maintenance-work-logs&…` | list paged · period from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + entries |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** (contractor/VP/Khu) |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so08` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | Contractor nvarchar · OfficeUnit nvarchar · ZoneUnit nvarchar · PeriodStart/PeriodEnd datetime2 UTC |
| Entries widen | WorkItem · KmFrom · KmTo · Solution · MainResult · Note (nvarchar) · LineNo |
| Indexes | (CatalogRecordId) unique · list filters via shell · period range via typed |
| Migration name | `Schema_CsdlSo08` |
| Backfill | optional: map legacy detail*/col1–3 → typed when resource=maintenance-work-logs |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required fields trên §2 · IdCode · soft-delete) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-08` → Asset |
| T-BE-01 | Entity `CsdlSo08Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo08` + widen `CsdlBookEntryEntity` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + period `fromDate`/`toDate` (TZ) |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-08` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | entries `inline_grid` typed 5 cột (workItem·kmFrom/To·solution·mainResult·note) |
| T-FE-04 | FilterBar · SearchInput road-route · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub deep-link + label «Sổ 08» · **cấm** merge Sổ TS |
| T-FE-07 | UiSchema catalogKind `maintenance-work-logs` typed |
| T-OUT-01 | XLS / org SearchInput P2 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-VP-KHU · Q-STATUS · Q-PROV · Q-ORG · Q-ENTRY-KM chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS form · invent media/FileMulti  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset · invent file API  

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
| writtenAt | 2026-09-06T01:47:00.000Z |
| contentHashPrior | sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146 |
