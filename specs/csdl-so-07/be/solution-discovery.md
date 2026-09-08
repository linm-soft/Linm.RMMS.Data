# SA — Solution discovery — csdl-so-07 (CSDL Sổ 07 — HL + GPTC + Dự án)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_451a2571`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · Tab A/B nested `inline_grid` **add/remove**) |
| status | `confirmed` |
| design_confirm | approve (`task_66a57fe0`) |
| solution_confirm | **approve** (autoApprove=ON · `task_451a2571`) |
| domain_map | **Asset** (`csdl-so-07` → `asset` · **T-DM-01** — DOMAIN-MAP thiếu row · **GAP-SO07-DMAP-01**) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-07` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=row-violations` |
| peerReport | `rpt-vi-pham-hlatdb` drill sau typed READY · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `row-violations` |
| formNo | `07` · title «Sổ 07 — HL + GPTC + Dự án» · hub card formNo `6` đến T-REN-01 |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `row-violations` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-07-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-07-real-data.md` |
| design | `specs/csdl-so-07/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_451a2571` |
| priorTask | `task_66a57fe0` (design completed) |
| updatedAt | `2026-09-06T04:25:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live | New (Sổ 07 typed) | Action |
|------|--------------|-------------------|--------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed header + **2 tab** `violations[]` / `permits[]`(+QLDA) | **GAP-SO07-TYPED-01** · **GAP-SO07-TABS-01** · **GAP-CSDL-CUC-03** |
| List cols | generic road/km/detail | code · road · km · contractor · status · updatedAt | typed list projection |
| Route | hub-only | **alias** `/csdl-so-07` + hub | **GAP-SO07-ROUTE-01** |
| formNo label | Live formNo 6 «HL ATĐB + GP TC» | Title Sổ 07 · hub rename **DEFER** T-REN-01 · key giữ | **GAP-SO07-FORMNO-01** |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo07** + child VP/GP · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| Nested | flatten Col1–3 | **2 arrays** add/remove · **cấm** flatten | **GAP-SO07-TABS-01** |
| Project | không QLDA | `projectMgmtUnit` Text optional P1 | **GAP-SO07-PROJECT-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep · **GAP-SO07-APILEGACY-01** |
| Legacy doc API | `/api/v1/row-violations` · `/construction-permits` | **không** ship path runtime | doc-only |
| road | Text / generic | SearchInput `road-route` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | **GAP-CSDL-PROV-01** |
| status sổ | LOOKUP_STATIC | `draft\|active\|closed` · **cấm** tot/tb/kem/hong | Q-STATUS |
| status VP | — | `open\|processing\|resolved\|dismissed` | Q-STATUS |
| org | Text | Text P1 · org-unit **DEFER P2** | **GAP-CSDL-ORG-01** |
| permitDays | — | Integer lưu riêng · UI derive OK | Q-PERMITDAYS |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed lines = report source READY | **GAP-RPT-SRC-CSDL-01** |
| Map | none | none · **cấm** invent map | — |
| DOMAIN-MAP | thiếu row | add `csdl-so-07` → Asset | **GAP-SO07-DMAP-01** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-07` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=row-violations` → typed map + nested arrays |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo07Dtos.cs`** (typed create/update/detail + `violations[]` + `permits[]`) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed header | **`CsdlSo07Entity`** · table **`rmms_csdl_so07`** · FK `CatalogRecordId` 1:1 |
| Persistence Tab A | **`CsdlSo07ViolationEntity`** · **`rmms_csdl_so07_violations`** · FK CatalogRecordId · LineNo |
| Persistence Tab B | **`CsdlSo07PermitEntity`** · **`rmms_csdl_so07_permits`** · FK CatalogRecordId · LineNo |
| Schema name | **`Schema_CsdlSo07`** (migration Dev / Step 4b — **không** chạy ở SA) |
| Book entries | **deprecated** for `row-violations` runtime — stop writing Col1–3 / detail* |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-so-07` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` · org-unit DEFER P2 |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · merge Sổ TS / report form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-07` |
| UI hub | `/so-ts/csdl-so-sach?resource=row-violations` |
| Peer report | `rpt-vi-pham-hlatdb` drill `?resource=row-violations&id=` · **không** merge ROW |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout 2-tab |
| Persist | shell + typed header 1:1 + **2 child tables** · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime · **cấm** flatten tabs |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · Step 4b @ SA · hub rename T-REN-01 · report drill block list DoD |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed + child tables · **không** nhét violations/permits blob vào parent JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page · **2 tab** nested |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter shell **UpdatedAt** · form `at`/`expiresAt`/`extendedAt` Date | FE local→UTC bound · BE store UTC · list AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo07*` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T04:25:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=row-violations` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST (header + arrays · 0 dòng OK) |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- · copy arrays) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-TAB-A | `inline_grid` **add/remove** | C/E/V | nested `violations[]` |
| S-TAB-B | `inline_grid` **add/remove** | C/E/V | nested `permits[]` (+QLDA) |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=row-violations` + filters | — | page=1 on filter change |
| create | empty typed form · arrays `[]` | POST body `resource` + typed header + `violations[]` + `permits[]` | IdCode `SO-` BE · 0 dòng OK · validate req khi có dòng |
| edit | GET `/{id}` (shell+typed+arrays) | PUT `/{id}` | replace typed 1:1 · **replace-all** both arrays by LineNo |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy header + array rows |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `row-violations` |
| `search` | SearchTextInput | mã · đường · tổ chức VP · số GP · QLDA |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 (5 tỉnh) |
| `status` | Dropdown LOOKUP_STATIC | draft/active/closed (sổ) |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter shell **UpdatedAt** · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + nested arrays)

### Shell vs typed vs children

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so07`) | Store on children |
|---------------------------------------------|----------------------------------|-------------------|
| Resource, Code, RoadCode, RoadName, Province, Status, Notes, IsActive, timestamps | Contractor, KmFrom, KmTo, ManageUnit | **violations** · **permits** (tables riêng) |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated** for `row-violations` — stop write; backfill → typed when present |

### Typed DTO shape (API body / response widen) — cite real-data §B

`CsdlSo07Dto`:

- Header: `resource`, `code`, `contractor`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `manageUnit`, `province`, `status`, `notes`
- `violations[]` (0..n · add/remove): `lineNo`, `at`, `stationKm`, `adminArea`, `violationStatus`, `orgName`, `minutesDepot`, `minutesCommune`, `minutesAdmin`, `currentState`, `unitConfirm`
- `permits[]` (0..n · add/remove): `lineNo`, `permitNo`, `permitDays`, `issuer`, `investor`, `projectMgmtUnit`, `contractor`, `workName`, `stationKm`, `expiresAt`, `extendedAt`, `progress`
- Validation: header req (contractor, roadCode, roadName, kmFrom, kmTo, manageUnit, province) · when violation row present → `at`, `stationKm`, `violationStatus`, `orgName` req · when permit row present → `permitNo`, `issuer`, `investor`, `workName`, `stationKm`, `expiresAt` req · `projectMgmtUnit` optional · `permitDays` Integer optional · status sổ `draft|active|closed` · VP `open|processing|resolved|dismissed` · **cấm** flatten arrays

List projection: `code`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `contractor`, `status`, `province`, `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell · `row-violations` |
| code | Code | shell · SO- |
| contractor | Contractor | typed |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | typed |
| manageUnit | ManageUnit | typed · Text P1 |
| province | Province | shell · LOOKUP_STATIC |
| status | Status | shell · draft/active/closed |
| notes | Notes | shell |
| violations[].at | At | child VP · UTC |
| violations[].stationKm | StationKm | child VP |
| violations[].adminArea | AdminArea | child VP |
| violations[].violationStatus | ViolationStatus | child VP |
| violations[].orgName | OrgName | child VP |
| violations[].minutesDepot/Commune/Admin | Minutes* | child VP |
| violations[].currentState | CurrentState | child VP |
| violations[].unitConfirm | UnitConfirm | child VP |
| permits[].permitNo | PermitNo | child GP |
| permits[].permitDays | PermitDays | child GP · Integer |
| permits[].issuer / investor | Issuer / Investor | child GP |
| permits[].projectMgmtUnit | ProjectMgmtUnit | child GP · QLDA optional |
| permits[].contractor | Contractor | child GP |
| permits[].workName | WorkName | child GP |
| permits[].stationKm | StationKm | child GP |
| permits[].expiresAt / extendedAt | ExpiresAt / ExtendedAt | child GP · UTC |
| permits[].progress | Progress | child GP |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### UiSchema

catalogKind `row-violations` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=row-violations&…` | list paged · UpdatedAt from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+violations[]+permits[] |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + arrays |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all arrays |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** runtime `/api/v1/row-violations` · `/api/v1/construction-permits`.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so07` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | Contractor · KmFrom · KmTo · ManageUnit |
| Child VP | `rmms_csdl_so07_violations` · CatalogRecordId · LineNo · At · StationKm · AdminArea · ViolationStatus · OrgName · MinutesDepot · MinutesCommune · MinutesAdmin · CurrentState · UnitConfirm |
| Child GP | `rmms_csdl_so07_permits` · CatalogRecordId · LineNo · PermitNo · PermitDays · Issuer · Investor · ProjectMgmtUnit · Contractor · WorkName · StationKm · ExpiresAt · ExtendedAt · Progress |
| Indexes | (CatalogRecordId) unique on header · (CatalogRecordId, LineNo) on children · list via shell · UpdatedAt range |
| Migration name | `Schema_CsdlSo07` |
| Seed rule | no fixed seed · arrays start empty · add/remove FE |
| Backfill | map detail*/col1–3 → typed/children when present · **không** invent field ngoài §B |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, header req, per-row req when present, enums sổ/VP, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-07` → Asset |
| T-BE-01 | Entity `CsdlSo07Entity` + Violation/Permit entities + EF config |
| T-BE-02 | Migration `Schema_CsdlSo07` (Dev/4b) · deprecate book_entries write for resource |
| T-BE-03 | DTO typed + service map join shell↔typed↔arrays · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + `fromDate`/`toDate` on UpdatedAt (TZ) |
| T-BE-06 | Validate header + per-row · replace-all arrays · enums |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-07` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | Tab A/B `inline_grid` add/remove · **cấm** flatten |
| T-FE-04 | FilterBar · SearchInput road · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub entry `?resource=row-violations` · report drill READY · **cấm** merge form |
| T-FE-07 | UiSchema catalogKind `row-violations` typed |
| T-OUT-01 | XLS / org SearchInput P2 / hub rename T-REN-01 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-TABS · Q-PROJECT · Q-PERMITDAYS · Q-PROV · Q-ORG · Q-DMAP · Q-RPT chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS / report form  
- runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · flatten Tab A+B  
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
| writtenAt | 2026-09-06T04:25:00.000Z |
| contentHashPrior | sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69 |
