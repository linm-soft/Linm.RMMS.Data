# SA — Solution discovery — csdl-bieu-10 (CSDL Biểu 10 — Kè, tường chắn)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_652dcd09`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** tường + rãnh đỉnh) |
| status | `confirmed` |
| design_confirm | approve (`task_652820eb`) |
| solution_confirm | **approve** (autoApprove=ON · `task_652dcd09`) |
| domain_map | **Asset** (`csdl-bieu-10` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`09` · `csdl-so-sach` · thiếu `10`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-10` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| peerSoTs | **`so-ts-retaining`** toolbar deep-link · **≠** merge form · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `retaining-walls` |
| formNo | `10` (renumber 9→10 · T-REN-01) |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-yyyyMMdd-nnnn` (BE generate · live prefix `KE` · **cấm** Guid) |
| catalogKind | `retaining-walls` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| design | `specs/csdl-bieu-10/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_652dcd09` |
| priorTask | `task_652820eb` (design completed) |
| updatedAt | `2026-09-05T18:35:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 10 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **21 cột** · Kind D Slideout · **2 section** tường + rãnh đỉnh | **GAP-BIEU10-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu10** 1:1 · **cấm** `DetailJson` · **cấm** CrestDitch child P1 | migration Dev |
| formNo / title | hub Biểu **9** | formNo **10** · title Kè/tường chắn | **GAP-BIEU10-REN-01** / T-REN-01 |
| wallKind | free / detailPrimary | LOOKUP EN codes + UI label VN | **GAP-BIEU10-KIND-01** |
| structure / material | free | LOOKUP_STATIC Excel seed / lookup | **GAP-BIEU10-STRUCT-01** / **MAT-01** |
| Dim | missing / generic | lengthM · heightM↔**WidthM** · areaM2 optional | **GAP-BIEU10-DIM-01** · Q-HEIGHT · Q-AREA |
| Crest | missing / child | **4 field flat** optional · **cấm** child entity P1 | **GAP-BIEU10-CREST-01** · Q-CREST |
| inServiceYear | missing | Number required | **GAP-BIEU10-YEAR-01** |
| Section UX | flat | 2 khối tường + rãnh đỉnh | **GAP-BIEU10-BLOCK-01** |
| List cols | generic | **subset** shared+kind/dim/year/status | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-10` + hub | **GAP-BIEU10-ROUTE-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | — | toolbar deep-link `so-ts-retaining` · **≠** merge | **GAP-CSDL-CUC-11** · Q-PEER |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix live `KE` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-10` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=retaining-walls` → typed map (live prefix tuple `KE` / «Kè, tường chắn») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu10Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu10Entity`** · table **`rmms_csdl_bieu10`** · FK `CatalogRecordId` 1:1 · **cấm** CrestDitch child table P1 |
| Schema name | **`Schema_CsdlBieu10`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-10` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-10` |
| UI hub | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| Peer Sổ TS | toolbar → `/so-ts/so-ts-retaining` (deep-link) |
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
| Persist | shell + typed child 1:1 · crest **flat columns** · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** 2 entity · **cấm** CrestDitch child P1 |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 21 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 2 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu10Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T18:35:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · peer toolbar | list | API-01 list `?resource=retaining-walls` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2b rãnh đỉnh | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new KE- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 10 |
| S-PEER | toolbar → so-ts-retaining | — | deep-link only · **cấm** merge ROW |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=retaining-walls` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · 2 section | POST body `resource` + typed fields | IdCode `KE-` BE · Line kmFrom/kmTo |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 · map heightM↔WidthM |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `retaining-walls` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both |
| `wallKind` | Dropdown LOOKUP_STATIC | Gravity / Gabion / RC / Retaining |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (wall · dim · crest · year)

### Header (21) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

### Q-KIND → **label_vn** (+ stable EN codes)

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `wallKind` | `WallKind` | `varchar(16)` | `Gravity` · `Gabion` · `RC` · `Retaining` · UI label VN: Trọng lực / Rọ / BTCT / Tường chắn |

### Q-STRUCT → **excel_seed** · Q-MAT → **lookup**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `structure` | `Structure` | `varchar(64)` | LOOKUP_STATIC Excel Biểu 10 seed |
| `material` | `Material` | `varchar(64)` | LOOKUP_STATIC Excel / demo cite · **cấm** free-text khi LOOKUP |

### Q-HEIGHT → **height_alias** · Q-AREA → **optional** · GAP-DIM

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `lengthM` | `LengthM` | `decimal(18,3)` | required m |
| `heightM` | **`WidthM`** | `decimal(18,3)` | **alias** UI `heightM` ↔ DB `WidthM` (db-ssot RetainingWall) · API DTO expose `heightM` · persist map WidthM |
| `areaM2` | `AreaM2` | `decimal(18,3)?` | **optional** m² |

### Q-CREST → **optional_flat** (+ crestDitchShape Excel widen)

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `crestDitchKind` | `CrestDitchKind` | `varchar(32)?` | optional · LOOKUP |
| `crestDitchStructure` | `CrestDitchStructure` | `varchar(64)?` | optional · LOOKUP |
| `crestDitchShape` | `CrestDitchShape` | `varchar(32)?` | optional · Excel widen · **SA confirm** flat on typed |
| `crestDitchLengthM` | `CrestDitchLengthM` | `decimal(18,3)?` | optional m |
| — | — | — | **cấm** child `CrestDitch` entity / table P1 |

### GAP-BIEU10-YEAR-01

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `inServiceYear` | `InServiceYear` | `int` | required · năm đưa vào sử dụng |

### Q-SIDE

| uiField | DB column | Type | Values |
|---------|-----------|------|--------|
| `side` | `Side` (↔ WallSide) | `varchar(8)` | `L` · `R` · `C` · `Both` |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu10`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom, KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Side, WallKind, Structure, Material, LengthM, WidthM (↔heightM), AreaM2, CrestDitchKind, CrestDitchStructure, CrestDitchShape, CrestDitchLengthM, InServiceYear |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu10Dto` fields = real-data §B write fields (resource + 21-col inventory). Persist mapper: `dto.heightM` ↔ `entity.WidthM`. List projection (subset): code, roadCode/roadName, province, kmFrom, kmTo, side, wallKind, structure, lengthM, heightM, inServiceYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `retaining-walls` typed — **cấm** generic 3-col-only schema làm SSOT form · 2 section tường + rãnh đỉnh · seed Integration `CatalogUiSchemaSeed` (live **chưa** có retaining-walls).

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=retaining-walls&…` | list paged |
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
| Table | `rmms_csdl_bieu10` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell + typed WallKind / Side |
| Migration name | `Schema_CsdlBieu10` |
| Backfill | optional: parse legacy detail* → typed when resource=retaining-walls |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| Side | varchar(8) | yes |
| WallKind | varchar(16) | yes · Gravity/Gabion/RC/Retaining |
| Structure | varchar(64) | yes (*) |
| Material | varchar(64) | yes (*) |
| LengthM | decimal(18,3) | yes |
| WidthM | decimal(18,3) | yes · API `heightM` |
| AreaM2 | decimal(18,3)? | no |
| CrestDitchKind | varchar(32)? | no |
| CrestDitchStructure | varchar(64)? | no |
| CrestDitchShape | varchar(32)? | no · Excel widen |
| CrestDitchLengthM | decimal(18,3)? | no |
| InServiceYear | int | yes |

### Shell columns (reuse / widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmFrom / KmTo | decimal(18,3)? | Line |
| RoadCode | varchar | SearchInput road-route |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business · **không** rename heightM↔WidthM ở BFF (API DTO = UI contract) |
| Validation | API service (required resource, wallKind, structure, material, lengthM, heightM, inServiceYear, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-10` → Asset |
| T-REN-01 | hub formNo 9→10 · title Biểu 10 Kè/tường chắn (cùng typed) |
| T-BE-01 | Entity `CsdlBieu10Entity` + EF config · flat crest cols |
| T-BE-02 | Migration `Schema_CsdlBieu10` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · heightM↔WidthM · stop detail* write |
| T-BE-04 | IdCode `KE-` generator (reuse live prefix tuple) |
| T-BE-05 | List filter `roadCode` + kmFrom/kmTo + side + wallKind |
| T-BE-06 | UiSchema seed catalogKind `retaining-walls` typed |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-10` + page Kind B |
| T-FE-02 | typed Slideout 21 cột · 2 section tường+rãnh · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC (kind/struct/mat/side/prov/status/crest) |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link Biểu 10 · peer toolbar `so-ts-retaining` · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `retaining-walls` · list subset |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |
| T-OUT-02 | org SearchInput — P2 |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-KIND · Q-STRUCT · Q-MAT · Q-HEIGHT · Q-CREST · Q-AREA · Q-LIST-COLS · Q-REN-LABEL · Q-PEER chốt · autoApprove · crestDitchShape flat confirm)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS · bind `road-assets` · 2 entity · CrestDitch child P1  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset · BFF remap heightM  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| schemaVersion | 1 |
| versionGate | aligned |
| generatedAt | 2026-09-05T18:35:00.000Z |
| taskId | task_652dcd09 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=aligned contentHashPrior=sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346 -->
