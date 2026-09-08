# SA — Solution discovery — csdl-bieu-15 (CSDL Biểu 15 — TMC / thu phí / hạt / kho)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_4d337ade`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · merge peer `so-ts-toll` / `so-ts-rest-area` / `so-ts-station-house` / `road-assets`

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · section Vị trí + Cơ sở/công trình + Thiết bị + Quản lý) |
| status | `confirmed` |
| design_confirm | approve (`task_dbeaf01a`) |
| solution_confirm | **approve** (autoApprove=ON · `task_4d337ade`) |
| domain_map | **Asset** (`csdl-bieu-15` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`14` · `csdl-so-sach` · **thiếu `15`**) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-15` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cite only** · Q-PEER-LINK **none_p1** · **cấm** merge · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · section vị trí + công trình + thiết bị + quản lý |
| IdCode | `OF-yyyyMMdd-nnnn` (BE generate · prefix `OF` · **cấm** Guid) |
| catalogKind | `ops-facilities` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-15-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-15-real-data.md` |
| design | `specs/csdl-bieu-15/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_4d337ade` |
| priorTask | `task_dbeaf01a` (design completed) |
| updatedAt | `2026-09-05T15:30:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 15 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **20 cột** · Kind D Slideout · 4 section | **GAP-BIEU15-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu15** 1:1 · **cấm** `DetailJson` · **cấm** 2 entity | migration Dev |
| Facility* | missing | `facilityKind` keep_5 · `facilityName` · `status` · `yearBuilt` | **GAP-BIEU15-KIND-01** · **GAP-BIEU15-STATUS-01** |
| Area* | missing | `courtyardAreaM2` · `buildingQty`/`buildingAreaM2` · `otherStructQty`/`otherStructAreaM2` · number_m2 | **GAP-BIEU15-AREA-01** |
| Equipment* | missing | `equipmentKind` free_text · `equipmentQty` · `equipmentStatus` | **GAP-BIEU15-EQ-01** |
| List cols | generic | **subset** shared + facilityKind/name/status/yearBuilt | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-15` + hub NEW card | **GAP-BIEU15-ROUTE-01** · **GAP-BIEU15-HUB-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep · **cấm** invent `api/v1/infra/*` |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 · **in_20** | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack Biểu 15 · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | so-ts-toll / rest-area / station-house · `road-assets?type=…` | cite only · **none_p1** · **cấm** merge | **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug `15` | add `csdl-bieu-15`→Asset | **GAP-BIEU15-DMAP-01** · Q-DMAP **add_now** |
| DB SSOT | thiếu § Biểu 15 | Schema_CsdlBieu15 | **GAP-BIEU15-DB-01** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Title | CTX | ctx_tmc «Biểu 15 — TMC / thu phí / hạt / kho» | Q-TITLE |
| Hub CUC-05 | Biểu 15 MISSING | NEW card formNo 15 · resource `ops-facilities` | **GAP-CSDL-CUC-05** đóng khi hub+API PASS |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `OF` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-15` · hub reuse `CsdlSoSachPage` entry + **NEW card** formNo 15 |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=ops-facilities` → typed map (prefix tuple `OF` / «TMC / thu phí / hạt / kho») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu15Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu15Entity`** · table **`rmms_csdl_bieu15`** · FK `CatalogRecordId` 1:1 · **cấm** 2 entity · **cấm** merge entity Sổ TS |
| Schema name | **`Schema_CsdlBieu15`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-15` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/ops-facilities` · invent parallel host · merge `so-ts-toll` / `so-ts-rest-area` / `so-ts-station-house` · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-15` |
| UI hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| Peer Sổ TS | so-ts-toll / rest-area / station-house · cite only · **none_p1** |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout · hub NEW card |
| Persist | shell + typed child 1:1 · Facility*/Area*/Equipment* **flat columns** · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** 2 entity |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA · peer toolbar link |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 20 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 4 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu15Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T15:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · **no peer toolbar** | list | API-01 list `?resource=ops-facilities` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2 Cơ sở/công trình · Z3 Thiết bị+Quản lý | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new OF- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub NEW card formNo 15 | — | same list API · QS resource |
| S-SKIP-PEER | — | — | cite so-ts-toll/rest/station · **cấm** merge / toolbar P1 |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=ops-facilities` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · Z1 vị trí · Z2 công trình · Z3 TB+QL | POST body `resource` + typed fields | IdCode `OF-` BE · Line kmFrom/kmTo · area/qty/year ≥0 |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `ops-facilities` |
| `search` | SearchTextInput | mã · đường · facilityName · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | TT công trình |
| `facilityKind` | Dropdown LOOKUP_STATIC | keep_5 |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (facility · area · equipment · shell)

### Header (20) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

### Shell fields (catalog record)

| uiField | DB column (shell) | Type | Notes |
|---------|-------------------|------|-------|
| `code` | `Code` | `varchar(32)` | IdCode `OF-yyyyMMdd-nnnn` BE · Text ro |
| `roadCode` | `RoadCode` | `varchar(32)` | SearchInput road-route |
| `roadName` | `RoadName` | `nvarchar(256)` | display from LKP |
| `province` | `Province` | `varchar(16)` | LOOKUP_STATIC keep_static P1 |
| `kmFrom` / `kmTo` | `KmFrom` / `KmTo` | `decimal(10,3)` | Line Number · Q-KM **range** |
| `manageUnit` | `ManageUnit` | `nvarchar(256)` | Text P1 · org P2 · **in_20** |
| `notes` | `Notes` | `nvarchar(max)` | Textarea |
| `resource` | `Resource` | const | `ops-facilities` |
| `companyCode` | `CompanyCode` | tenant | share_tenant |
| `isActive` | `IsActive` | soft-delete | — |
| `updatedAt` | `UpdatedAt` | datetime | display-only |

### Typed — Z2 Facility*/Area* · Z3 Equipment*

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `facilityKind` | `FacilityKind` | `varchar(32)` | LOOKUP keep_5 · required create · list filter |
| `facilityName` | `FacilityName` | `nvarchar(256)` | Text · required create |
| `courtyardAreaM2` | `CourtyardAreaM2` | `decimal(18,2)` NULL | Number ≥0 · m² · Q-AREA-UNIT **number_m2** |
| `buildingQty` | `BuildingQty` | `int` NULL | Number ≥0 |
| `buildingAreaM2` | `BuildingAreaM2` | `decimal(18,2)` NULL | Number ≥0 · m² |
| `otherStructQty` | `OtherStructQty` | `int` NULL | Number ≥0 |
| `otherStructAreaM2` | `OtherStructAreaM2` | `decimal(18,2)` NULL | Number ≥0 · m² |
| `status` | `Status` | `varchar(16)` | LOOKUP · list filter |
| `yearBuilt` | `YearBuilt` | `int` NULL | Number · năm ≥ 1900 · ≤ current+1 |
| `equipmentKind` | `EquipmentKind` | `nvarchar(128)` | Text · Q-EQ-SET **free_text** |
| `equipmentQty` | `EquipmentQty` | `int` NULL | Number ≥0 |
| `equipmentStatus` | `EquipmentStatus` | `varchar(16)` | LOOKUP |

**Validation (BE):** create/update require `facilityKind` · `facilityName` · area/qty null-or-≥0 · yearBuilt range. Business empty reject 422 khi thiếu `facilityKind`/`facilityName`.

**LOOKUP sets (PO locked):**
- facilityKind keep_5: TMC / thu phí (toll) / dừng chân (rest) / nhà hạt (station) / kho (warehouse)
- status / equipmentStatus: LOOKUP_STATIC (align Excel — **cấm** invent ngoài cite)
- equipmentKind: **free_text** (không enum P1)

**Cấm:** invent `api/v1/infra/*` · parent `*Json` · Guid IdCode · merge so-ts-toll/rest/station / road-assets · expand facilityKind set không confirm.

### List subset cols (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `facilityKind` · `facilityName` · `status` · `yearBuilt`

### Empty / error

| Case | UX |
|------|-----|
| Empty list | «Chưa có cơ sở TMC / thu phí / hạt / kho» · CTA Tạo mới |
| 422 thiếu resource / facilityKind | toast |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · refresh |

---

## 3. API contracts (giữ prefix · widen typed)

| ID | Method | Path | Body / query |
|----|--------|------|--------------|
| API-01 | GET | `/api/v1/asset/csdl-records` | `?resource=ops-facilities` + filters · page/pageSize |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell + typed join |
| API-03 | POST | `/api/v1/asset/csdl-records` | `resource` + shell + typed 20 |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | replace typed 1:1 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput |
| BFF | mirror | `web-bff/api/v1/asset/csdl-records` | proxy only |

DTO: `CsdlBieu15CreateDto` / `UpdateDto` / `DetailDto` — camelCase uiField map 1:1 DB Pascal (`FacilityKind`↔`facilityKind` · `CourtyardAreaM2`↔`courtyardAreaM2` · `EquipmentKind`↔`equipmentKind` · …).

---

## 4. Persistence / Schema_CsdlBieu15

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu15` |
| Entity | `CsdlBieu15Entity` (alias doc `OpsFacility` — **không** domain/API riêng) |
| FK | `CatalogRecordId` UNIQUE → `rmms_csdl_catalog_records.Id` |
| Columns | FacilityKind · FacilityName · CourtyardAreaM2 · BuildingQty · BuildingAreaM2 · OtherStructQty · OtherStructAreaM2 · Status · YearBuilt · EquipmentKind · EquipmentQty · EquipmentStatus · audit via shell |
| Migration | Dev / Step 4b only · name `Schema_CsdlBieu15` |
| Index | `(CatalogRecordId)` unique · list filter via shell + typed FacilityKind/Status |

**Cấm** `DetailJson` / `*Json` trên parent · **cấm** chạy migration ở SA.

---

## 5. FE / UiSchema

| Surface | Spec |
|---------|------|
| Route alias | `/csdl-bieu-15` → typed list page (reuse hub services BASE) |
| Hub | NEW card `?resource=ops-facilities` · formNo 15 · «TMC / thu phí / hạt / kho» |
| UiSchema catalogKind | `ops-facilities` typed 20 · section công trình + thiết bị + quản lý |
| Form | Kind D Slideout · `data-form-cols=2` · Z1 shell vị trí · Z2 Cơ sở/công trình · Z3 Thiết bị + Quản lý |
| Filter bar | HARD · search must work · **cấm** nút Tìm |
| Peer | cite only · **none_p1** · **cấm** merge toolbar |
| Map | none |

---

## 6. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-DM-01 | Dev/BE | DOMAIN-MAP add `csdl-bieu-15` → Asset |
| T-BE-01 | Dev | `CsdlBieu15Entity` + `Schema_CsdlBieu15` migration |
| T-BE-02 | Dev | `CsdlBieu15Dtos` create/update/detail |
| T-BE-03 | Dev | `CsdlCatalogService` branch `ops-facilities` typed map |
| T-BE-04 | Dev | IdCode `OF-` generate · validation facilityKind/name · area/qty≥0 |
| T-BE-05 | Dev | List subset projection + join typed |
| T-BE-06 | Dev | Soft-delete + tenant share_tenant |
| T-BFF-01 | Dev | BFF proxy widen (no logic) |
| T-FE-01 | Dev | Route alias `/csdl-bieu-15` |
| T-FE-02 | Dev | Kind B list + filter-bar HARD |
| T-FE-03 | Dev | Kind D Slideout 20 · Z2 công trình · Z3 TB+QL · LeaveConfirm |
| T-FE-04 | Dev | SearchInput road-route · static province/facilityKind/status/equipmentStatus |
| T-FE-05 | Dev | Empty copy VN · hub NEW card formNo 15 · **cấm** peer merge |
| T-FE-06 | Dev | FormMode wire list/C/E/V/Copy/Delete |
| T-OUT-01 | Dev | XLS import/export OUT stub |
| T-OUT-02 | Dev | org SearchInput P2 DEFER |

---

## 7. PO decisions locked (no reopen)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-KIND-SET | keep_5 |
| Q-EQ-SET | free_text |
| Q-AREA-UNIT | number_m2 |
| Q-MANAGE | in_20 |
| Q-PREFIX | OF |
| Q-LIST-COLS | subset |
| Q-TITLE | ctx_tmc |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-KM | range |

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API
- [x] Entity + Schema_CsdlBieu15 (spec only)
- [x] BFF proxy vs API
- [x] Gates tz/xco/share recorded
- [x] solution_confirm approve
- [x] **cấm** Write MFE · **cấm** Step 4b · **cấm** ERP.* · **cấm** invent infra · **cấm** merge so-ts-toll/rest/station / road-assets
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-15.md` · T-* · gates |
| Dev | Schema_CsdlBieu15 · typed DTO · alias page · Slideout 20 · hub NEW card |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-05T15:30:00.000Z |
| versionGate | aligned |
| taskId | task_4d337ade |
| packKind | list |
| changeScope | new_page |
