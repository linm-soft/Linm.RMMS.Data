# SA — Solution discovery — csdl-bieu-07 (CSDL Biểu 07 — Lề / taluy / hàng rào)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_b41ac662`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · 3 section) |
| status | `confirmed` |
| design_confirm | approve (`task_50b066b7`) |
| solution_confirm | **approve** (autoApprove=ON · `task_b41ac662`) |
| domain_map | **Asset** (`csdl-bieu-07` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`06` · `csdl-so-sach`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-07` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| peerSoTs | `SHOULDER` · deep-link only · **cấm** merge form · **≠** `road-assets` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `shoulders-fences` |
| formNo | `07` (renumber 10→7 · T-REN-01) |
| columns | `20` |
| IdCode | `LE-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `shoulders-fences` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-07-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| design | `specs/csdl-bieu-07/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_b41ac662` |
| priorTask | `task_50b066b7` (design completed) |
| updatedAt | `2026-09-05T16:30:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 07 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **20 cột** Excel Biểu 7 · Kind D Slideout · **3 section** lề/taluy/HR | **GAP-BIEU07-TYPED-01** |
| formNo / title | hub Biểu **10** | formNo **07** · title taluy | **GAP-BIEU07-REN-01** / T-REN-01 |
| Shoulder block | missing | `shoulderStructure` + length/width/area | **GAP-BIEU07-SHOULDER-01** |
| Slope block | missing | `slopeLengthM`↔`SlopeClearingM` + `slopeAreaM2` | **GAP-BIEU07-SLOPE-01** / Q-SLOPE |
| Fence block | missing | `fenceKind` · `fencePostCount` · `fenceLengthKm` | **GAP-BIEU07-FENCE-01** |
| Fence length unit | — | UI **km** · DB `FenceLengthM` (×1000) | **GAP-BIEU07-FENCE-LEN-01** / Q-FENCE-LEN |
| FencePanelCount | — | **omit_p1** | **GAP-BIEU07-PANEL-01** |
| Side | generic | shared L/R/Both · 1 field 3 khối | Q-SIDE |
| Structure / kind | free | LOOKUP_STATIC seed | Q-STRUCT |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-07` + hub | **GAP-BIEU07-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu7** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | `SHOULDER` | deep-link only · **≠** road-assets | **GAP-BIEU07-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-07` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=shoulders-fences` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu7Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu7Entity`** · table **`rmms_csdl_bieu7`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu7`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-07` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS `SHOULDER` form · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-07` |
| UI hub | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| Peer Sổ TS | `/so-ts/...` `SHOULDER` deep-link |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout 3 section |
| Persist | shell + typed child 1:1 · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · FencePanelCount · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 20 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 3 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu7Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T16:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=shoulders-fences` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · 3 section | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new LE- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 07 |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=shoulders-fences` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `LE-` BE · convert fenceLengthKm→FenceLengthM |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 · same unit convert |
| view | GET `/{id}` | — | readOnly · **không** disabled xám · FenceLengthM→km display |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `shoulders-fences` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / Both |
| `fenceKind` | Dropdown LOOKUP_STATIC | lưới / tôn / bê tông / khác (opt) |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (shoulder · slope · fence · side · units)

### Header (20) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

### Q-SIDE → **shared** L/R/Both

| uiField | DB column | Type | Values / note |
|---------|-----------|------|---------------|
| `side` | `Side` | `varchar(8)` | `L` · `R` · `Both` · 1 field dùng chung 3 khối |

### GAP-BIEU07-SHOULDER-01

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `shoulderStructure` | `ShoulderStructure` | `varchar(64)` | LOOKUP cứng/mềm/khác · * |
| `shoulderLengthM` | `ShoulderLengthM` | `decimal(18,3)` | * m |
| `shoulderWidthM` | `ShoulderWidthM` | `decimal(18,3)` | * m |
| `shoulderAreaM2` | `ShoulderAreaM2` | `decimal(18,3)?` | optional m² |

### Q-SLOPE → **map_clearing**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `slopeLengthM` | `SlopeClearingM` | `decimal(18,3)?` | UI name `slopeLengthM` ↔ DB `SlopeClearingM` |
| `slopeAreaM2` | `SlopeAreaM2` | `decimal(18,3)?` | riêng · không map clearing |

### GAP-BIEU07-FENCE-01 + Q-FENCE-LEN → **km**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `fenceKind` | `FenceKind` | `varchar(64)` | LOOKUP lưới/tôn/bê tông/khác |
| `fencePostCount` | `FencePostCount` | `int?` | ≥0 |
| `fenceLengthKm` | `FenceLengthM` | `decimal(18,3)?` | **UI km** · persist **m** · API map `valueKm * 1000` write · `/1000` read |

### Q-PANEL → **omit_p1**

`FencePanelCount` **không** có cột UI/DTO P1 — Dev **cấm** expose field này trên form.

### Q-STRUCT → **lookup_seed**

`shoulderStructure` + `fenceKind` = LOOKUP_STATIC seed từ Excel Biểu 7 · **cấm** free-text khi đã LOOKUP.

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu7`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom, KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Side, ShoulderStructure, ShoulderLengthM, ShoulderWidthM, ShoulderAreaM2, SlopeClearingM, SlopeAreaM2, FenceKind, FencePostCount, FenceLengthM, BuiltYear |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Unit conversion (HARD · service layer)

| Direction | Rule |
|-----------|------|
| Write (POST/PUT) | `FenceLengthM = fenceLengthKm * 1000` (null-safe) |
| Read (GET list/detail) | `fenceLengthKm = FenceLengthM / 1000` |
| Slope | `slopeLengthM` ↔ `SlopeClearingM` **1:1** (same unit m) — rename only |

### Typed DTO shape (API body / response widen)

`CsdlBieu7Dto` fields = real-data §B write fields (resource + 20-col inventory). List projection: code, roadCode/roadName, province, kmFrom, kmTo, side, shoulderStructure, shoulderLengthM, shoulderWidthM, shoulderAreaM2, slopeLengthM, slopeAreaM2, fenceKind, fencePostCount, fenceLengthKm, builtYear, status, manageUnit, updatedAt.

### UiSchema

catalogKind `shoulders-fences` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=shoulders-fences&…` | list paged |
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
| Table | `rmms_csdl_bieu7` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell + typed Side / FenceKind |
| Migration name | `Schema_CsdlBieu7` |
| Backfill | optional: parse legacy detail* → typed when resource=shoulders-fences |
| **SA** | document only · **cấm** chạy migration |

### Typed columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| Side | varchar(8) | yes |
| ShoulderStructure | varchar(64) | yes (*) |
| ShoulderLengthM | decimal(18,3) | yes (*) |
| ShoulderWidthM | decimal(18,3) | yes (*) |
| ShoulderAreaM2 | decimal(18,3)? | no |
| SlopeClearingM | decimal(18,3)? | no · ↔ slopeLengthM |
| SlopeAreaM2 | decimal(18,3)? | no |
| FenceKind | varchar(64) | no |
| FencePostCount | int? | no · ≥0 |
| FenceLengthM | decimal(18,3)? | no · UI fenceLengthKm |
| BuiltYear | int? | no |

### Shell columns (reuse / widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmFrom / KmTo | decimal(18,3)? | Line range · filter+form |
| RoadCode | varchar | SearchInput road-route |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business · **không** convert km↔m ở BFF |
| Validation | API service (required resource, side, shoulderStructure/Length/Width, IdCode; fencePostCount ≥0; unit convert FenceLength) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-07` → Asset |
| T-REN-01 | hub formNo 10→07 · title Biểu 07 taluy (cùng typed) |
| T-BE-01 | Entity `CsdlBieu7Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu7` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · SlopeClearingM↔slopeLengthM · FenceLengthM↔km · stop detail* write |
| T-BE-04 | IdCode `LE-` generator |
| T-BE-05 | List filter `roadCode` + kmFrom/kmTo + side + fenceKind |
| T-BFF-01 | verify proxy (no logic / no unit convert) |
| T-FE-01 | route alias `/csdl-bieu-07` + page Kind B |
| T-FE-02 | typed Slideout 20 cột · 3 section · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer SHOULDER link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `shoulders-fences` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |
| T-OUT-02 | FencePanelCount · org SearchInput — P2 |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-SIDE · Q-SLOPE · Q-FENCE-LEN · Q-PANEL · Q-STRUCT · Q-REN-LABEL chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS form · bind `road-assets`  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset · expose FencePanelCount P1  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | new_page |
| solution_confirm | approve |
| writtenAt | 2026-09-05T16:30:00.000Z |
| contentHashPrior | sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 |
