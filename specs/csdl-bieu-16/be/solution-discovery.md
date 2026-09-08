# SA — Solution discovery — csdl-bieu-16 (CSDL Biểu 16 — Nút giao)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_5c3d4c6b`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · merge peer `so-ts-interchange` / `road-assets` · flatten-only 1 nhánh

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · 5 section Định danh + Đặc trưng nút + Nhánh child + ATGT + Quản lý) |
| status | `confirmed` |
| design_confirm | approve (`task_e0f9dbb6`) |
| solution_confirm | **approve** (autoApprove=ON · `task_5c3d4c6b`) |
| domain_map | **Asset** (`csdl-bieu-16` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`15` · **thiếu `16`**) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-16` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=interchanges` |
| peerSoTs | `so-ts-interchange` · **cite only** · Q-PEER-LINK **none_p1** · **cấm** merge · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT (Excel flatten `branch*` → runtime child) |
| IdCode | `IX-yyyyMMdd-nnnn` (BE generate · prefix `IX` · **cấm** Guid) |
| catalogKind | `interchanges` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-16-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-16-real-data.md` |
| design | `specs/csdl-bieu-16/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_5c3d4c6b` |
| priorTask | `task_e0f9dbb6` (design completed) |
| updatedAt | `2026-09-05T16:35:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 16 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **39** · Kind D Slideout · 5 section + child `branches[]` **min_1** | **GAP-BIEU16-TYPED-01** · **GAP-BIEU16-BRANCH-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu16** 1:1 + **Branch** 1–n · **cấm** `DetailJson` · **cấm** 2 catalog entity | migration Dev |
| Child | flatten Excel 1 dòng `branch*` | embed DTO `branches[]` · table Branch · **cấm** flatten-only | **GAP-CSDL-CUC-09** · Q-CHILD-API **embed** |
| Main* / ATGT | missing | mainBed/Surface/Median/Lane · atgt* qty | **GAP-BIEU16-MAIN-01** · **GAP-BIEU16-ATGT-01** |
| Type / traffic | missing | interchangeType cite_excel · trafficOrg lookup | **GAP-BIEU16-TYPE-01** |
| Km | generic | `kmMain` + `kmAux` point_main | **GAP-BIEU16-KM-01** |
| List cols | generic | **subset** shared + type/status/kmMain/branchCount | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-16` + hub NEW card | **GAP-BIEU16-ROUTE-01** · **GAP-BIEU16-HUB-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed + embed branches | keep · **cấm** invent `api/v1/infra/*` |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 · **in_39** | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack Biểu 16 · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | so-ts-interchange · `road-assets?type=…` | cite only · **none_p1** · **cấm** merge | **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug `16` | add `csdl-bieu-16`→Asset | **GAP-BIEU16-DMAP-01** · Q-DMAP **add_now** |
| DB SSOT | thiếu § Biểu 16 | Schema_CsdlBieu16 + Branch | **GAP-BIEU16-DB-01** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Title | CTX | nut_giao «Biểu 16 — Nút giao» | Q-TITLE |
| Hub CUC-05 | Biểu 16 MISSING | NEW card formNo 16 · resource `interchanges` | **GAP-CSDL-CUC-05** đóng khi hub+API PASS |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `IX` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-16` · hub reuse `CsdlSoSachPage` entry + **NEW card** formNo 16 |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=interchanges` → typed map (prefix tuple `IX` / «Nút giao») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu16Dtos.cs`** (typed create/update/detail + `branches[]`) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu16Entity`** · table **`rmms_csdl_bieu16`** · FK `CatalogRecordId` 1:1 · **cấm** 2 catalog entity · **cấm** merge entity Sổ TS |
| Persistence child | **`CsdlBieu16BranchEntity`** · table **`rmms_csdl_bieu16_branch`** · FK `Bieu16Id` 1–n · Q-CHILD-API **embed** |
| Schema name | **`Schema_CsdlBieu16`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-16` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/interchanges` · invent parallel host · merge `so-ts-interchange` · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-16` |
| UI hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| Peer Sổ TS | so-ts-interchange · cite only · **none_p1** |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + child grid · hub NEW card |
| Persist | shell + typed 1:1 + Branch 1–n · flat columns · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** flatten-only |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA · peer toolbar link |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed + branch tables · **không** nhét 39 cột / branches vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 5 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu16Entity` + Branch : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T16:35:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · **no peer toolbar** | list | API-01 list `?resource=interchanges` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2 Đặc trưng · DES-FORM-BRANCH · Z3 ATGT+QL | create | API-03 POST (+ `branches[]` min_1) |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT (replace branches embed) |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new IX- code · copy branches) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft (cascade soft / orphan policy Dev) |
| S-HUB-ENTRY | hub NEW card formNo 16 | — | same list API · QS resource |
| S-SKIP-PEER | — | — | cite so-ts-interchange · **cấm** merge / toolbar P1 |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=interchanges` + filters | — | page=1 on filter change · subset cols · `branchCount` derived |
| create | empty typed form · seed **1** empty branch row | POST body `resource` + typed + `branches[]` | IdCode `IX-` BE · `branches.length ≥ 1` · widths/qty ≥0 |
| edit | GET `/{id}` (shell+typed+branches join) | PUT `/{id}` | replace typed 1:1 · **replace-all** branches embed |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · keep branches payload |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `interchanges` |
| `search` | SearchTextInput | mã · tên nút · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `interchangeType` | Dropdown LOOKUP_STATIC | cite_excel |
| `status` | Dropdown LOOKUP_STATIC | TT |
| `roadCode` | SearchInput road-route | Integration search |
| `kmMain` | Number | point_main filter |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (header · branches · ATGT · shell)

### Header (39) — SSOT Excel / runtime

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Runtime: Excel `branch*` flatten → child grid `branches[]` (**GAP-CSDL-CUC-09**).

### Shell fields (catalog record)

| uiField | DB column (shell) | Type | Notes |
|---------|-------------------|------|-------|
| `code` | `Code` | `varchar(32)` | IdCode `IX-yyyyMMdd-nnnn` BE · Text ro |
| `roadCode` | `RoadCode` | `varchar(32)` | SearchInput road-route |
| `roadName` | `RoadName` | `nvarchar(256)` | display from LKP |
| `province` | `Province` | `varchar(16)` | LOOKUP_STATIC keep_static P1 |
| `manageUnit` | `ManageUnit` | `nvarchar(256)` | Text P1 · org P2 · **in_39** |
| `notes` | `Notes` | `nvarchar(max)` | Textarea |
| `resource` | `Resource` | const | `interchanges` |
| `companyCode` | `CompanyCode` | tenant | share_tenant |
| `isActive` | `IsActive` | soft-delete | — |
| `updatedAt` / `updatedBy` | `UpdatedAt` / `UpdatedBy` | datetime / varchar | display-only |

### Typed — Z1 định danh extras · Z2 Đặc trưng · Z3 ATGT · Quản lý trail

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `name` | `Name` | `nvarchar(256)` | Text · required create |
| `kmMain` | `KmMain` | `decimal(10,3)` | Number · point_main · required |
| `kmAux` | `KmAux` | `decimal(10,3)` NULL | Number optional |
| `side` | `Side` | `varchar(8)` | LOOKUP L/R/C |
| `interchangeType` | `InterchangeType` | `varchar(32)` | LOOKUP cite_excel · required · list filter |
| `trafficOrg` | `TrafficOrg` | `varchar(32)` | LOOKUP |
| `mainBedWidth` | `MainBedWidth` | `decimal(10,2)` NULL | ≥0 |
| `mainSurfaceWidth` | `MainSurfaceWidth` | `decimal(10,2)` NULL | ≥0 |
| `mainMedianWidth` | `MainMedianWidth` | `decimal(10,2)` NULL | ≥0 |
| `mainLaneCount` | `MainLaneCount` | `int` NULL | ≥0 |
| `atgtSign` | `AtgtSign` | `int` NULL | qty ≥0 · Q-ATGT **qty** |
| `atgtMarking` | `AtgtMarking` | `int` NULL | qty ≥0 |
| `atgtIsland` | `AtgtIsland` | `int` NULL | qty ≥0 |
| `atgtLight` | `AtgtLight` | `int` NULL | qty ≥0 |
| `status` | `Status` | `varchar(16)` | LOOKUP · list filter · required |
| `yearBuilt` | `YearBuilt` | `int` NULL | 1900–current+1 |
| `lat` / `lng` | `Lat` / `Lng` | `decimal(12,8)` NULL | optional GPS |
| `formNo` | — | const | `16` (DTO / UiSchema · không cột riêng bắt buộc) |
| `branchCount` | derived | int | `COUNT(branches)` · list/detail readonly |

### Child — `branches[]` (table Branch · embed)

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `branchName` | `BranchName` | `nvarchar(256)` | required per row |
| `branchKmFrom` / `branchKmTo` | `BranchKmFrom` / `BranchKmTo` | `decimal(10,3)` | required |
| `branchSide` | `BranchSide` | `varchar(8)` | LOOKUP L/R/C |
| `branchDirection` | `BranchDirection` | `nvarchar(64)` | LOOKUP / Text |
| `branchLength` | `BranchLength` | `decimal(12,2)` NULL | ≥0 |
| `branchBedWidth` | `BranchBedWidth` | `decimal(10,2)` NULL | ≥0 |
| `branchSurfaceWidth` | `BranchSurfaceWidth` | `decimal(10,2)` NULL | ≥0 |
| `branchMedianWidth` | `BranchMedianWidth` | `decimal(10,2)` NULL | ≥0 |
| `branchRadius` | `BranchRadius` | `decimal(10,2)` NULL | ≥0 |
| `sortOrder` | `SortOrder` | `int` | UI order |

**Validation (BE):** create/update require `name` · `roadCode` · `province` · `kmMain` · `interchangeType` · `status` · **`branches.length ≥ 1`** · mỗi branch `branchName` + kmFrom/To · widths/qty null-or-≥0 · yearBuilt range. 422 khi thiếu min_1 branches hoặc header required.

**LOOKUP sets (PO locked):**
- interchangeType: **cite_excel** (LOOKUP_STATIC — **cấm** invent ngoài cite)
- trafficOrg: **lookup** LOOKUP_STATIC
- status / side / branchSide: LOOKUP_STATIC
- ATGT: **qty** Number (không free-text mô tả P1)

**Cấm:** invent `api/v1/infra/*` · parent `*Json` · Guid IdCode · merge so-ts-interchange / road-assets · flatten-only 1 nhánh cố định · nested CRUD API riêng (embed only P1).

### List subset cols (Q-LIST-COLS)

`code` · `name` · `roadCode`/`roadName` · `province` · `kmMain` · `interchangeType` · `status` · `branchCount` · `yearBuilt`

### Empty / error

| Case | UX |
|------|----|
| Empty list | «Chưa có nút giao» · CTA Tạo mới |
| 422 thiếu resource / branches min_1 / name | toast |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · refresh |

---

## 3. API contracts (giữ prefix · widen typed + embed)

| ID | Method | Path | Body / query |
|----|--------|------|--------------|
| API-01 | GET | `/api/v1/asset/csdl-records` | `?resource=interchanges` + filters · page/pageSize |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell + typed join + `branches[]` |
| API-03 | POST | `/api/v1/asset/csdl-records` | `resource` + shell + typed + `branches[]` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | replace typed 1:1 · replace-all branches |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput |
| BFF | mirror | `web-bff/api/v1/asset/csdl-records` | proxy only |

DTO: `CsdlBieu16CreateDto` / `UpdateDto` / `DetailDto` — camelCase uiField map 1:1 DB Pascal · `branches: CsdlBieu16BranchDto[]` embed (**không** nested resource path P1).

---

## 4. Persistence / Schema_CsdlBieu16

| Item | Spec |
|------|------|
| Table header | `rmms_csdl_bieu16` |
| Entity header | `CsdlBieu16Entity` (alias doc `Interchange` — **không** domain/API riêng) |
| FK header | `CatalogRecordId` UNIQUE → `rmms_csdl_catalog_records.Id` |
| Table child | `rmms_csdl_bieu16_branch` |
| Entity child | `CsdlBieu16BranchEntity` |
| FK child | `Bieu16Id` → `rmms_csdl_bieu16.Id` · cascade on hard-delete Dev |
| Columns header | Name · KmMain · KmAux · Side · InterchangeType · TrafficOrg · MainBedWidth · MainSurfaceWidth · MainMedianWidth · MainLaneCount · AtgtSign · AtgtMarking · AtgtIsland · AtgtLight · Status · YearBuilt · Lat · Lng · audit via shell |
| Columns branch | BranchName · BranchKmFrom · BranchKmTo · BranchSide · BranchDirection · BranchLength · BranchBedWidth · BranchSurfaceWidth · BranchMedianWidth · BranchRadius · SortOrder |
| Migration | Dev / Step 4b only · name `Schema_CsdlBieu16` (includes Branch) |
| Index | `(CatalogRecordId)` unique · list filter via shell + typed InterchangeType/Status/KmMain · branch `(Bieu16Id, SortOrder)` |

**Cấm** `DetailJson` / `*Json` trên parent · **cấm** chạy migration ở SA · **cấm** lưu `branches` chỉ trong JSON shell.

---

## 5. FE / UiSchema

| Surface | Spec |
|---------|------|
| Route alias | `/csdl-bieu-16` → typed list page (reuse hub services BASE) |
| Hub | NEW card `?resource=interchanges` · formNo 16 · «Nút giao» |
| UiSchema catalogKind | `interchanges` typed · sections + child grid |
| Form | Kind D Slideout · `data-form-cols=2` · Z1 Định danh · Z2 Đặc trưng · DES-FORM-BRANCH · Z3 ATGT + Quản lý |
| Child grid | add/remove · **min_1** · **cấm** flatten-only |
| Filter bar | HARD · search must work · **cấm** nút Tìm |
| Peer | cite only · **none_p1** · **cấm** merge toolbar |
| Map | none |

---

## 6. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-DM-01 | Dev/BE | DOMAIN-MAP add `csdl-bieu-16` → Asset |
| T-BE-01 | Dev | `CsdlBieu16Entity` + `CsdlBieu16BranchEntity` + `Schema_CsdlBieu16` migration |
| T-BE-02 | Dev | `CsdlBieu16Dtos` create/update/detail + `branches[]` |
| T-BE-03 | Dev | `CsdlCatalogService` branch `interchanges` typed map + embed replace-all |
| T-BE-04 | Dev | IdCode `IX-` generate · validation header + branches min_1 |
| T-BE-05 | Dev | List subset projection + join typed + `branchCount` |
| T-BE-06 | Dev | Soft-delete + tenant share_tenant |
| T-BFF-01 | Dev | BFF proxy widen (no logic) |
| T-FE-01 | Dev | Route alias `/csdl-bieu-16` |
| T-FE-02 | Dev | Kind B list + filter-bar HARD |
| T-FE-03 | Dev | Kind D Slideout typed · 5 section · child grid min_1 · LeaveConfirm |
| T-FE-04 | Dev | SearchInput road-route · static province/interchangeType/status/trafficOrg/side |
| T-FE-05 | Dev | Empty «Chưa có nút giao» · hub NEW card formNo 16 · **cấm** peer merge |
| T-FE-06 | Dev | FormMode wire list/C/E/V/Copy/Delete |
| T-OUT-01 | Dev | XLS import/export OUT stub |
| T-OUT-02 | Dev | org SearchInput P2 DEFER |

---

## 7. PO decisions locked (no reopen)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-TYPE-SET | cite_excel |
| Q-TRAFFIC-ORG | lookup |
| Q-ATGT | qty |
| Q-BRANCH-MIN | min_1 |
| Q-KM | point_main |
| Q-MANAGE | in_39 |
| Q-PREFIX | IX |
| Q-LIST-COLS | subset |
| Q-TITLE | nut_giao |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-CHILD-API | embed |

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API
- [x] Entity + Schema_CsdlBieu16 + Branch (spec only)
- [x] BFF proxy vs API
- [x] Gates tz/xco/share recorded
- [x] solution_confirm approve
- [x] **cấm** Write MFE · **cấm** Step 4b · **cấm** ERP.* · **cấm** invent infra · **cấm** merge so-ts-interchange / road-assets · **cấm** flatten-only
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-16.md` · T-* · gates |
| Dev | Schema_CsdlBieu16 + Branch · typed DTO embed · alias page · Slideout + child · hub NEW card |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-05T16:35:00.000Z |
| versionGate | aligned |
| taskId | task_5c3d4c6b |
| packKind | list |
| changeScope | new_page |
