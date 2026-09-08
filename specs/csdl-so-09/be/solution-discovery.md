# SA — Solution discovery — csdl-so-09 (CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_05d75fc7`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid` 9 cột) |
| status | `confirmed` |
| design_confirm | approve (`task_f109cd8d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_05d75fc7`) |
| domain_map | **Asset** (`csdl-so-09` → `asset` · **T-DM-01** add slug) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-09` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| peerLink | Biểu 14 `its-systems` · `/csdl-bieu-14` · LOOKUP/deep-link · **cấm** embed/merge |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `its-ops-logs` (**NEW** seed) |
| formNo | `09` · label «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · **≠** Biểu 9 `boundary-markers` |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `its-ops-logs` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-09-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-09-real-data.md` |
| design | `specs/csdl-so-09/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_05d75fc7` |
| priorTask | `task_f109cd8d` (design completed) |
| updatedAt | `2026-09-05T23:50:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Sổ 09 typed) | Action |
|------|----------------------------|-------------------|--------|
| Resource | **MISSING** catalog | Seed `its-ops-logs` + hub card formNo 09 | **GAP-SO09-RES-01** · **GAP-CSDL-CUC-05** |
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-09 header (thầu · Km · kỳ · link14) + entries **9 cột** ca trực | **GAP-SO09-TYPED-01** |
| Route | hub-only / missing | **alias** `/csdl-so-09` + hub entry | **GAP-SO09-ROUTE-01** |
| formNo label | — / confuse Biểu 9 | Cục **Sổ 09** · key `its-ops-logs` · **≠** `boundary-markers` | **GAP-SO09-FORMNO-01** |
| Link Biểu 14 | — | optional `linkBieu14Id` SearchInput `its-systems` + deep-link | **GAP-SO09-LINK14-01** |
| File / media | không | **N/A** · **cấm** invent FileMulti | — |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo09** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | Q-PROV |
| status | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | Q-SYS-STATUS (form entry) + list status |
| shift | — | Dropdown `ca1\|ca2\|ca3` LOOKUP_STATIC | Q-SHIFT |
| contractor / manageUnit | detail* | Text P1 · org SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY (report riêng) | **GAP-RPT-SRC-CSDL-01** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Signature | — | Text tên P1 · e-sign **DEFER** | Q-SIGN |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-09` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=its-ops-logs` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo09Dtos.cs`** (typed create/update/detail + entries) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo09Entity`** · table **`rmms_csdl_so09`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlSo09`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| File | **N/A** · **cấm** invent file API |
| DOMAIN-MAP | add row `csdl-so-09` → Asset (**T-DM-01**) — hiện thiếu slug |
| Lookup | Integration `GET /integration/road-routes/search` · peer `its-systems` via same csdl-records |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Biểu 14 / Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-09` |
| UI hub | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| Peer UI | `/csdl-bieu-14` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| peer Biểu 14 | `GET …/csdl-records?resource=its-systems` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + entries grid 9 cột |
| Persist | shell + typed header 1:1 + child entries · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · media · e-sign · Step 4b @ SA |

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
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **period** · form `periodStart`/`periodEnd` · entry `occurredAt` | FE local→UTC bound · BE store UTC · list period AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo09Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T23:50:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=its-ops-logs` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` typed **9 cột** | C/E/V | nested `entries[]` on API-02/03/04 |
| S-LINK14 | SearchInput + deep-link | C/E/V | API-LKP-02 peer · optional |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=its-ops-logs` + filters | — | page=1 on filter change |
| create | empty typed form + empty entries | POST body `resource` + typed header + `entries[]` | IdCode `SO-` BE |
| edit | GET `/{id}` (shell+typed+entries) | PUT `/{id}` | replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy entries optional · clear/keep linkBieu14Id per UX |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `its-ops-logs` |
| `search` | SearchTextInput | mã · sổ · thầu · đường · người ca |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter **period** (periodStart/End) · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so09`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, BookNo, RoadCode, RoadName, Province, KmFrom/KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Contractor, PeriodStart, PeriodEnd, LinkBieu14Id | LineNo, OccurredAt, Shift, OperatorName, SystemStatus, Anomaly, Action, Result, Recommendation, Signature |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for its-ops-logs** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlSo09Dto` = real-data §B write fields:

- Header: `resource`, `code`, `bookNo`, `contractor`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `periodStart`, `periodEnd`, `manageUnit`, `province`, `status`, `linkBieu14Id`, `notes`
- `entries[]`: `lineNo`, `occurredAt`, `shift`, `operatorName`, `systemStatus`, `anomaly`, `action`, `result`, `recommendation`, `signature`

List projection: `code`, `bookNo`, `contractor`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `periodStart`/`periodEnd`, `status`, `province`, `linkBieu14Id`, `updatedAt`.

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
| contractor | Contractor | typed `rmms_csdl_so09` |
| periodStart / periodEnd | PeriodStart / PeriodEnd | typed · UTC |
| linkBieu14Id | LinkBieu14Id | typed · optional Guid/FK logical → its-systems catalog id |
| entries[].lineNo | LineNo | entry |
| entries[].occurredAt | OccurredAt | entry · UTC |
| entries[].shift | Shift | entry · `ca1\|ca2\|ca3` |
| entries[].operatorName | OperatorName | entry |
| entries[].systemStatus | SystemStatus | entry · `tot\|tb\|kem\|hong` |
| entries[].anomaly | Anomaly | entry |
| entries[].action | Action | entry |
| entries[].result | Result | entry |
| entries[].recommendation | Recommendation | entry |
| entries[].signature | Signature | entry · Text P1 |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### File bind

| Field | Control | API / service | Rule |
|-------|---------|---------------|------|
| — | — | **N/A** | media không bắt buộc · **cấm** invent FileMulti / file API |

### UiSchema

catalogKind `its-ops-logs` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Validation (API)

Required header: `resource`, `bookNo`, `contractor`, `roadCode`, `kmFrom`, `periodStart`.  
Required entry row (khi có dòng): `occurredAt`, `shift`, `operatorName`, `systemStatus`, `action`, `result`, `signature`.  
Optional: `kmTo`, `periodEnd`, `manageUnit`, `notes`, `linkBieu14Id`, `entries[].anomaly`, `entries[].recommendation`.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=its-ops-logs&…` | list paged · period from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + entries |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |
| API-LKP-02 | GET | `/web-bff/api/v1/asset/csdl-records?resource=its-systems&…` | SearchInput linkBieu14 · peer Biểu 14 |
| API-LKP-03 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** (contractor / manageUnit) |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so09` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | Contractor nvarchar · PeriodStart/PeriodEnd datetime2 UTC · LinkBieu14Id uniqueidentifier NULL |
| Entries widen | OccurredAt datetime2 · Shift · OperatorName · SystemStatus · Anomaly · Action · Result · Recommendation · Signature (nvarchar) · LineNo |
| Indexes | (CatalogRecordId) unique · list filters via shell · period range via typed · LinkBieu14Id optional |
| Catalog seed | resource key `its-ops-logs` · formNo `09` · label Cục Sổ 09 |
| Migration name | `Schema_CsdlSo09` |
| Backfill | optional: map legacy detail*/col1–3 → typed when resource=its-ops-logs |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required fields trên §2 · IdCode · soft-delete · link14 optional) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-09` → Asset |
| T-BE-01 | Entity `CsdlSo09Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo09` + widen `CsdlBookEntryEntity` + seed `its-ops-logs` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + period `fromDate`/`toDate` (TZ) · optional linkBieu14 filter N/A P1 |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-09` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API · linkBieu14 SearchInput |
| T-FE-03 | entries `inline_grid` typed 9 cột (occurredAt·shift·operator·systemStatus·anomaly·action·result·recommendation·signature) |
| T-FE-04 | FilterBar · SearchInput road-route · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub deep-link + label «Sổ 09» · **≠** Biểu 9 · **cấm** merge Biểu 14 / Sổ TS |
| T-FE-07 | UiSchema catalogKind `its-ops-logs` typed + seed catalog |
| T-OUT-01 | XLS / org SearchInput P2 / e-sign — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-SHIFT · Q-SYS-STATUS · Q-LINK14 · Q-PROV · Q-ORG · Q-SIGN chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô / col1–3 only · Guid IdCode · merge Biểu 14 / Sổ TS · invent media/FileMulti  
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
| writtenAt | 2026-09-05T23:50:00.000Z |
| contentHashPrior | sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc |
