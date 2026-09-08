# SA — Solution discovery — csdl-bieu-12 (CSDL Biểu 12 — Cây xanh, thảm cỏ)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_a36be038`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · invent peer `so-ts-green`

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** khóm + thảm cỏ) |
| status | `confirmed` |
| design_confirm | approve (`task_8d909c44`) |
| solution_confirm | **approve** (autoApprove=ON · `task_a36be038`) |
| domain_map | **Asset** (`csdl-bieu-12` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`11` · `csdl-so-sach` · **thiếu `12`**) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-12` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=green-assets` |
| peerSoTs | **none** · **cấm** invent `so-ts-green` · **≠** Sổ TS merge · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ |
| IdCode | `CX-yyyyMMdd-nnnn` (BE generate · prefix `CX` · **cấm** Guid) |
| catalogKind | `green-assets` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-12-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |
| design | `specs/csdl-bieu-12/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_a36be038` |
| priorTask | `task_8d909c44` (design completed) |
| updatedAt | `2026-09-05T13:25:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 12 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **15 cột** · Kind D Slideout · **2 section** khóm + thảm cỏ | **GAP-BIEU12-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu12** 1:1 · **cấm** `DetailJson` · **cấm** 2 entity | migration Dev |
| Khóm | missing / generic | `oleander/ngau/palm/otherClumps` Number ≥0 · **keep_other** | **GAP-BIEU12-CLUMP-01** · Q-OTHER-CLUMP |
| Thảm cỏ | missing / dump | `grassAreaM2` `decimal` · **allow_either** vs khóm | **GAP-BIEU12-GRASS-01** · Q-GRASS-REQ |
| Section UX | flat | 2 khối Khóm cây + Thảm cỏ | design Z2 / Z2b |
| side | free / taluy | LOOKUP **side_only** L/R/C/Both | **GAP-BIEU12-SIDE-01** · Q-TALUY |
| List cols | generic | **subset** shared + 4 khóm + grassAreaM2 + status | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-12` + hub | **GAP-BIEU12-ROUTE-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack Biểu 12 · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | — | **none** · **cấm** invent so-ts-green | **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug `12` | add `csdl-bieu-12`→Asset | **GAP-BIEU12-DMAP-01** · Q-DMAP **add_now** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Title | demo | keep_demo «Biểu 12 — Cây xanh, thảm cỏ» | Q-TITLE |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `CX` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-12` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=green-assets` → typed map (prefix tuple `CX` / «Cây xanh, thảm cỏ») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu12Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu12Entity`** · table **`rmms_csdl_bieu12`** · FK `CatalogRecordId` 1:1 · **cấm** 2 entity · **cấm** GreenAsset child ngoài 1:1 |
| Schema name | **`Schema_CsdlBieu12`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-12` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · invent/merge `so-ts-green` · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-12` |
| UI hub | `/so-ts/csdl-so-sach?resource=green-assets` |
| Peer Sổ TS | **none** · **cấm** invent |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout 2 section |
| Persist | shell + typed child 1:1 · clumps/grass **flat columns** · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** 2 entity |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA · peer Sổ TS |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 15 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 2 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu12Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T13:25:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · **no peer** | list | API-01 list `?resource=green-assets` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2b Thảm cỏ | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new CX- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 12 |
| S-SKIP-PEER | — | — | **cấm** invent so-ts-green |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=green-assets` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · 2 section | POST body `resource` + typed fields | IdCode `CX-` BE · Line kmFrom/kmTo · clumps ≥0 · grass **allow_either** |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `green-assets` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both · **side_only** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (clump · grass · shell)

### Header (15) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

### Shell fields (catalog record)

| uiField | DB column (shell) | Type | Notes |
|---------|-------------------|------|-------|
| `code` | `Code` | `varchar(32)` | IdCode `CX-yyyyMMdd-nnnn` BE · Text ro |
| `roadCode` | `RoadCode` | `varchar(32)` | SearchInput road-route |
| `roadName` | `RoadName` | `nvarchar(256)` | display from LKP |
| `province` | `Province` | `varchar(16)` | LOOKUP_STATIC keep_static P1 |
| `kmFrom` / `kmTo` | `KmFrom` / `KmTo` | `decimal(10,3)` | Line Number |
| `side` | `Side` | `varchar(8)` | L/R/C/Both · **side_only** · **cấm** free taluy |
| `status` | `Status` | `varchar(16)` | tot/tb/kem/hong |
| `manageUnit` | `ManageUnit` | `nvarchar(256)` | Text P1 · org P2 |
| `notes` | `Notes` | `nvarchar(max)` | Textarea |
| `resource` | `Resource` | const | `green-assets` |
| `companyCode` | `CompanyCode` | tenant | share_tenant |
| `isActive` | `IsActive` | soft-delete | — |
| `updatedAt` | `UpdatedAt` | datetime | display-only |

### Typed — section Khóm cây (Clump*)

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `oleanderClumps` | `OleanderClumps` | `int` NOT NULL DEFAULT 0 | Number ≥0 |
| `ngauClumps` | `NgauClumps` | `int` NOT NULL DEFAULT 0 | Number ≥0 |
| `palmClumps` | `PalmClumps` | `int` NOT NULL DEFAULT 0 | Number ≥0 |
| `otherClumps` | `OtherClumps` | `int` NOT NULL DEFAULT 0 | Number ≥0 · **keep_other** (Excel có) |

### Typed — section Thảm cỏ (Grass*)

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `grassAreaM2` | `GrassAreaM2` | `decimal(18,2)` NOT NULL DEFAULT 0 | Number ≥0 · **allow_either** |

**Validation `allow_either` (BE):** chấp nhận khi `sum(4 khóm) > 0` **hoặc** `grassAreaM2 > 0` (hoặc cả hai). Reject 422 chỉ khi cả khóm=0 và grass=0 trên create/update (empty business row).

**Cấm:** invent peer so-ts · parent `*Json` · Guid IdCode · taluy free-text side.

### List subset cols (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `oleanderClumps` · `ngauClumps` · `palmClumps` · `otherClumps` · `grassAreaM2` · `status`

### Empty / error

| Case | UX |
|------|-----|
| Empty list | «Chưa có cây xanh, thảm cỏ» · CTA Tạo mới |
| 422 thiếu resource / allow_either fail | toast |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · refresh |

---

## 3. API contracts (giữ prefix · widen typed)

| ID | Method | Path | Body / query |
|----|--------|------|--------------|
| API-01 | GET | `/api/v1/asset/csdl-records` | `?resource=green-assets` + filters · page/pageSize |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell + typed join |
| API-03 | POST | `/api/v1/asset/csdl-records` | `resource` + shell + typed 15 |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | replace typed 1:1 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput |
| BFF | mirror | `web-bff/api/v1/asset/csdl-records` | proxy only |

DTO: `CsdlBieu12CreateDto` / `UpdateDto` / `DetailDto` — camelCase uiField map 1:1 DB Pascal (`OleanderClumps`↔`oleanderClumps` · … · `GrassAreaM2`↔`grassAreaM2`).

---

## 4. Persistence / Schema_CsdlBieu12

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu12` |
| Entity | `CsdlBieu12Entity` |
| FK | `CatalogRecordId` UNIQUE → `rmms_csdl_catalog_records.Id` |
| Columns | OleanderClumps · NgauClumps · PalmClumps · OtherClumps · GrassAreaM2 · audit via shell |
| Migration | Dev / Step 4b only · name `Schema_CsdlBieu12` |
| Index | `(CatalogRecordId)` unique · list filter via shell indexes |

**Cấm** `DetailJson` / `*Json` trên parent · **cấm** chạy migration ở SA.

---

## 5. FE / UiSchema

| Surface | Spec |
|---------|------|
| Route alias | `/csdl-bieu-12` → typed list page (reuse hub services BASE) |
| Hub | `?resource=green-assets` entry |
| UiSchema catalogKind | `green-assets` typed 15 · 2 section |
| Form | Kind D Slideout · `data-form-cols=2` · Z1 shell · Z2 Khóm · Z2b Thảm cỏ · Z3 status/notes |
| Filter bar | HARD · search must work · **cấm** nút Tìm |
| Peer | **none** · **cấm** invent so-ts-green |
| Map | none |

---

## 6. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-DM-01 | Dev/BE | DOMAIN-MAP add `csdl-bieu-12` → Asset |
| T-BE-01 | Dev | `CsdlBieu12Entity` + `Schema_CsdlBieu12` migration |
| T-BE-02 | Dev | `CsdlBieu12Dtos` create/update/detail |
| T-BE-03 | Dev | `CsdlCatalogService` branch `green-assets` typed map |
| T-BE-04 | Dev | IdCode `CX-` generate · validation clumps≥0 · allow_either |
| T-BE-05 | Dev | List subset projection + join typed |
| T-BE-06 | Dev | Soft-delete + tenant share_tenant |
| T-BFF-01 | Dev | BFF proxy widen (no logic) |
| T-FE-01 | Dev | Route alias `/csdl-bieu-12` |
| T-FE-02 | Dev | Kind B list + filter-bar HARD |
| T-FE-03 | Dev | Kind D Slideout 15 · 2 section · LeaveConfirm |
| T-FE-04 | Dev | SearchInput road-route · static province/status/side |
| T-FE-05 | Dev | Empty copy VN · **cấm** peer toolbar invent |
| T-FE-06 | Dev | FormMode wire list/C/E/V/Copy/Delete |
| T-OUT-01 | Dev | XLS import/export OUT stub |
| T-OUT-02 | Dev | org SearchInput P2 DEFER |

---

## 7. PO decisions locked (no reopen)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-OTHER-CLUMP | keep_other |
| Q-GRASS-REQ | allow_either |
| Q-TALUY | side_only |
| Q-LIST-COLS | subset |
| Q-TITLE | keep_demo |
| Q-DMAP | add_now |

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API
- [x] Entity + Schema_CsdlBieu12 (spec only)
- [x] BFF proxy vs API
- [x] Gates tz/xco/share recorded
- [x] solution_confirm approve
- [x] **cấm** Write MFE · **cấm** Step 4b · **cấm** ERP.* · **cấm** invent so-ts-green
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-12.md` · T-* · gates |
| Dev | Schema_CsdlBieu12 · typed DTO · alias page · Slideout 15 · 2 section |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| generatedAt | 2026-09-05T13:25:00.000Z |
| versionGate | aligned |
| taskId | task_a36be038 |
| packKind | list |
| changeScope | new_page |
