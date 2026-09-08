# SA — Solution discovery — csdl-so-01 (CSDL Sổ 01 — Nhật ký tuần kiểm)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_71adf8b1`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid`) |
| status | `confirmed` |
| design_confirm | approve (`task_09c37ee7`) |
| solution_confirm | **approve** (autoApprove=ON · `task_71adf8b1`) |
| domain_map | **Asset** (`csdl-so-01` → `asset` · **T-DM-01** add slug) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-01` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| peerSoTs | — · **cấm** merge Sổ TS |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `inspection-logs` |
| formNo | `01` · label «Sổ 01 — Nhật ký tuần kiểm» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `inspection-logs` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-01-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-01-real-data.md` |
| design | `specs/csdl-so-01/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_71adf8b1` |
| priorTask | `task_09c37ee7` (design completed) |
| updatedAt | `2026-09-06T01:05:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Sổ 01 typed) | Action |
|------|----------------------------|-------------------|--------|
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-01 header + typed entries + media sau SC | **GAP-SO01-TYPED-01** |
| Route | hub-only `?resource=inspection-logs` | **alias** `/csdl-so-01` + hub entry | **GAP-SO01-ROUTE-01** |
| formNo label | Live «Sổ 8» | Cục **Sổ 01** · key `inspection-logs` giữ | **GAP-SO01-FORMNO-01** |
| File | không | FileService `postRepairMediaIds` max 10/entry · ≥1 nếu `repairRequest` ≠ empty | **GAP-SO01-MEDIA-01** |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo01** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| status | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | Q-STATUS |
| manageUnit / org | Text | Text P1 · org SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY (report riêng) | **GAP-RPT-SRC-CSDL-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-01` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=inspection-logs` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo01Dtos.cs`** (typed create/update/detail + entries) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo01Entity`** · table **`rmms_csdl_so01`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlSo01`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| File | FileService `integrate-file-upload-web` · **cấm** invent file API |
| DOMAIN-MAP | add row `csdl-so-01` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-01` |
| UI hub | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| File upload | FileService integrate-file-upload-web |

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
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table + entry cols · **không** nhét entries vào JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |
| File | FileService | postRepairMediaIds · **cấm** invent |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **period** · form `periodStart`/`periodEnd` · entries `inspectDate`/`dueDate` Date | FE local→UTC bound · BE store UTC · list period AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo01Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T01:05:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=inspection-logs` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` typed | C/E/V | nested `entries[]` on API-02/03/04 |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |
| File | FileMulti | entry | FileService upload · postRepairMediaIds |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=inspection-logs` + filters | — | page=1 on filter change |
| create | empty typed form + empty entries | POST body `resource` + typed header + `entries[]` | IdCode `SO-` BE |
| edit | GET `/{id}` (shell+typed+entries) | PUT `/{id}` | replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy entries optional |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `inspection-logs` |
| `search` | SearchTextInput | mã · sổ · đường · TK |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter **period** (periodStart/End) · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so01`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, BookNo, RoadCode, RoadName, Province, KmFrom/KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Inspector, PeriodStart, PeriodEnd | LineNo, InspectDate, ItemProposal, KmFrom, KmTo, Location, Description, EstQuantity, InspectorOpinion, RemarkSign, RepairRequest, DueDate, ActualQtyQualityDate, PostRepairMediaIds |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for inspection-logs** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlSo01Dto` = real-data §B write fields:

- Header: `resource`, `code`, `bookNo`, `manageUnit`, `inspector`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `periodStart`, `periodEnd`, `province`, `status`, `notes`
- `entries[]`: `lineNo`, `inspectDate`, `itemProposal`, `kmFrom`, `kmTo`, `location`, `description`, `estQuantity`, `inspectorOpinion`, `remarkSign`, `repairRequest`, `dueDate`, `actualQtyQualityDate`, `postRepairMediaIds[]` (max 10 · ≥1 nếu `repairRequest` ≠ empty)

List projection: `code`, `bookNo`, `manageUnit`, `inspector`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `periodStart`/`periodEnd`, `status`, `province`, `updatedAt`.

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
| inspector | Inspector | typed `rmms_csdl_so01` |
| periodStart / periodEnd | PeriodStart / PeriodEnd | typed · UTC |
| entries[].inspectDate | InspectDate | entry · UTC Date |
| entries[].itemProposal | ItemProposal | entry |
| entries[].kmFrom / kmTo | KmFrom / KmTo | entry |
| entries[].location | Location | entry |
| entries[].description | Description | entry |
| entries[].estQuantity | EstQuantity | entry |
| entries[].inspectorOpinion | InspectorOpinion | entry |
| entries[].remarkSign | RemarkSign | entry |
| entries[].repairRequest | RepairRequest | entry |
| entries[].dueDate | DueDate | entry · UTC Date |
| entries[].actualQtyQualityDate | ActualQtyQualityDate | entry |
| entries[].postRepairMediaIds | PostRepairMediaIds | entry · CSV file ids · **cấm** JSON blob parent |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### File bind

| Field | Control | API / service | Rule |
|-------|---------|---------------|------|
| `postRepairMediaIds` | FileMulti | FileService integrate-file-upload-web | optional; **≥1** nếu `repairRequest` ≠ empty · max **10**/entry · Q-MEDIA |

**Cấm** invent file path · **cấm** OMS map canvas.

### UiSchema

catalogKind `inspection-logs` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=inspection-logs&…` | list paged · period from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + entries |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |
| API-FILE | POST | FileService upload | postRepairMediaIds · existing |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so01` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | Inspector nvarchar · PeriodStart/PeriodEnd datetime2 UTC |
| Entries widen | InspectDate · ItemProposal · KmFrom · KmTo · Location · Description · EstQuantity · InspectorOpinion · RemarkSign · RepairRequest · DueDate · ActualQtyQualityDate · PostRepairMediaIds (nvarchar CSV) |
| Indexes | (CatalogRecordId) unique · list filters via shell · period range via typed |
| Migration name | `Schema_CsdlSo01` |
| Backfill | optional: map legacy detail*/col1–3 → typed when resource=inspection-logs |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, bookNo, manageUnit, inspector, roadCode, kmFrom, periodStart, entries inspectDate/itemProposal/kmFrom/description; media ≥1 nếu repairRequest; max 10; IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · upload fail toast · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-01` → Asset |
| T-BE-01 | Entity `CsdlSo01Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo01` + widen `CsdlBookEntryEntity` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + period `fromDate`/`toDate` (TZ) |
| T-BE-06 | File bind postRepairMediaIds validation (cond + max 10) |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-01` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | entries `inline_grid` typed · FileMulti postRepair |
| T-FE-04 | FilterBar · SearchInput road-route · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub deep-link + label «Sổ 01» · **cấm** merge Sổ TS |
| T-FE-07 | UiSchema catalogKind `inspection-logs` typed |
| T-OUT-01 | XLS / org SearchInput P2 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-MEDIA · Q-PROV · Q-ORG chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS form  
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
| writtenAt | 2026-09-06T01:05:00.000Z |
| contentHashPrior | sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3 |
