# SA — Solution discovery — csdl-bieu-08 (CSDL Biểu 08 — Hệ thống ATGT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_53a8d473`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · shared + **1 child**) |
| status | `confirmed` |
| design_confirm | approve (`task_daa7f8e9`) |
| solution_confirm | **approve** (autoApprove=ON · `task_53a8d473`) |
| domain_map | **Asset** (`csdl-bieu-08` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`07` · `csdl-so-sach`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| peerSoTs | ATGT types (TRAFFIC_SIGN / KM_POST / DELINEATOR / GUARDRAIL / MEDIAN / CONVEX_MIRROR …) · deep-link only · **cấm** merge · **≠** `road-assets` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `traffic-safety` |
| formNo | `08` (renumber 7→8 · T-REN-01) |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `traffic-safety` (typed UiSchema · per-type subset) |
| controlHint | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| design | `specs/csdl-bieu-08/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_53a8d473` |
| priorTask | `task_daa7f8e9` (design completed) |
| updatedAt | `2026-09-05T10:25:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 08 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **45/11** · Kind D Slideout · shared + **1 child** theo `assetType` | **GAP-BIEU08-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu8** parent + **11 child tables** · **cấm** wide 45 · **cấm** `DetailJson` | **GAP-BIEU08-CHILD-01** / Q-CHILD |
| formNo / title | hub Biểu **7** | formNo **08** · title ATGT | **GAP-BIEU08-REN-01** / T-REN-01 |
| assetType | free / detailPrimary | LOOKUP 11 enum · filter `?type=` | **GAP-BIEU08-TYPE-01** |
| Type change UX | — | **confirm** → clear child payload | Q-TYPE-UX |
| List cols | generic | **subset_by_type** · **cấm** 45 cols cùng lúc | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-08` + hub | **GAP-BIEU08-ROUTE-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO + child | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| markerKind | — | LOOKUP_STATIC Excel seed | Q-MARKER-KIND |
| Import/XLS | stub | OUT pack · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | ATGT types | deep-link optional · **≠** road-assets | **GAP-BIEU08-PEER-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-08` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=traffic-safety` → typed map + child load/save |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu8Dtos.cs`** (parent + discriminator child payload) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed parent | **`CsdlBieu8Entity`** · table **`rmms_csdl_bieu8`** · FK `CatalogRecordId` 1:1 · `AssetType` |
| Persistence children | **11** tables 0..1 / parent (see §4) · FK `Bieu8Id` |
| Schema name | **`Schema_CsdlBieu8`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-08` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS ATGT form · bind biểu Cục vào `road-assets`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-08` |
| UI hub | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| Peer Sổ TS | `/so-ts/...` ATGT type deep-link |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout shared+1 child |
| Persist | shell + parent typed + **child_tables** · **cấm** parent `*Json` · **cấm** 1 entity wide 45 · **cấm** chỉ 3 ô detail* runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` · Q-CHILD **child_tables** | typed parent + 11 children · **không** nhét 45 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · shared+1 child · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu8Entity` + children : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T10:25:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=traffic-safety` (+ optional `type=`) |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · shared+1 child | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new AT- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 08 |
| S-PEER-SOTS | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=traffic-safety` + filters (+ `type=`/`assetType`) | — | page=1 on filter change · grid **subset_by_type** |
| create | empty shared + child section theo `assetType` | POST body `resource` + parent typed + **1** child block | IdCode `AT-` BE · chỉ ghi child khớp type |
| edit | GET `/{id}` (shell+parent+active child) | PUT `/{id}` | replace parent 1:1 · upsert/delete child theo type · Q-TYPE-UX **confirm** clear |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · giữ type+child values |
| delete | — | DELETE soft | confirm · cascade soft via parent · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `traffic-safety` |
| `search` | SearchTextInput | mã · đường · signCode · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line/Point range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both |
| `type` / `assetType` | Dropdown LOOKUP_STATIC | 11 enum · maps `?type=` |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (shared + 11 children)

### Header flatten (45) — SSOT Excel · runtime = shared + 1 child

`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

Trail (không đếm 45): `manageUnit` · `notes`.

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on parent typed (`rmms_csdl_bieu8`) | Store on **one** child table |
|---------------------------------------------|------------------------------------------|------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom, KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Side, AssetType, BuiltYear | Fields of active `assetType` only |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present | — |

### Q-CHILD → **child_tables** (HARD)

- **Cấm** 1 bảng wide 45 cột.  
- Parent `CsdlBieu8Entity` 1:1 shell · discriminator `AssetType`.  
- Exactly **one** child row active per parent (0..1 per child table · enforce by service).  
- List API optional `?type=` filters parent `AssetType`.

### Q-TYPE-UX → **confirm**

On edit: đổi `assetType` → LeaveConfirm-style modal → **clear** previous child DTO + delete old child row on save · load empty section cho type mới.

### assetType enum (11)

`TRAFFIC_SIGN` · `MARKER_POST` · `MEDIAN` · `ANTI_GLARE` · `TRAFFIC_ISLAND` · `ROAD_STUD` · `GUARDRAIL` · `ROAD_MARKING` · `CRASH_CUSHION` · `CONVEX_MIRROR` · `TRAFFIC_SIGNAL`

### Child field map (uiField → DB · cite DB SSOT `TrafficSafetyAsset` children · formNo remapped 7→08)

| assetType | Entity / table | Columns (Pascal) | uiFields |
|-----------|----------------|------------------|----------|
| `TRAFFIC_SIGN` | `CsdlBieu8TrafficSign` / `rmms_csdl_bieu8_traffic_sign` | SignCode, SignSize, PoleCount, PoleHeightM | signCode, signSize, signPoleCount, signPoleHeightM |
| `MARKER_POST` | `CsdlBieu8RoadMarkerPost` / `…_marker_post` | Kind, Qty, Structure, AreaM2 | markerKind, markerQty, markerStructure, markerAreaM2 |
| `MEDIAN` | `CsdlBieu8MedianBarrier` / `…_median` | Kind, Structure, LengthM, HeightM | medianKind, medianStructure, medianLengthM, medianHeightM |
| `ANTI_GLARE` | `CsdlBieu8AntiGlarePanel` / `…_anti_glare` | Kind, Structure, Qty, LengthM | antiGlareKind, antiGlareStructure, antiGlareQty, antiGlareLengthM |
| `TRAFFIC_ISLAND` | `CsdlBieu8TrafficIsland` / `…_island` | IslandType, Structure, AreaM2 | islandType, islandStructure, islandAreaM2 |
| `ROAD_STUD` | `CsdlBieu8RoadStud` / `…_road_stud` | Size, Qty | studSize, studQty |
| `GUARDRAIL` | `CsdlBieu8Guardrail` / `…_guardrail` | Kind, Structure, LengthM, Reflector | guardrailKind, guardrailStructure, guardrailLengthM, guardrailReflector |
| `ROAD_MARKING` | `CsdlBieu8RoadMarking` / `…_road_marking` | MarkCode, LengthM, WidthM, AreaM2 | markCode, markLengthM, markWidthM, markAreaM2 |
| `CRASH_CUSHION` | `CsdlBieu8CrashCushion` / `…_crash_cushion` | Qty | cushionQty |
| `CONVEX_MIRROR` | `CsdlBieu8ConvexMirror` / `…_convex_mirror` | Qty | mirrorQty |
| `TRAFFIC_SIGNAL` | `CsdlBieu8TrafficSignal` / `…_traffic_signal` | PoleKind, HeightM, LampKind, Qty | signalPoleKind, signalHeightM, lampKind, lampQty |

### Parent typed fields

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `side` | `Side` | `varchar(8)` | L/R/C/Both · * |
| `assetType` | `AssetType` | `varchar(32)` | 11 enum · * · list `?type=` |
| `builtYear` | `BuiltYear` | `int?` | year |

### Typed DTO shape (API body / response widen)

`CsdlBieu8Dto` = shell projection + parent fields + **discriminated** child object (chỉ 1 block non-null khớp `assetType`). List projection: shared cols + type-specific subset (Q-LIST-COLS) · **cấm** trả đủ 45 null-padded làm grid default.

### UiSchema

catalogKind `traffic-safety` typed (+ per-type section) — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=traffic-safety&…` | list paged · optional `type=` |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+parent+active child |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed parent + 1 child |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+parent+child |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** `api/v1/infra/*`.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Parent table | `rmms_csdl_bieu8` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Children | 11 tables · FK `Bieu8Id` → `rmms_csdl_bieu8.Id` · unique per parent |
| Indexes | (CatalogRecordId) unique · (AssetType) · list filters via shell + AssetType/Side |
| Migration name | `Schema_CsdlBieu8` |
| Backfill | optional: parse legacy detail* → parent+child when resource=traffic-safety |
| **SA** | document only · **cấm** chạy migration |

### Parent columns (plan)

| Column | CLR / SQL | Required |
|--------|-----------|----------|
| Side | varchar(8) | yes |
| AssetType | varchar(32) | yes |
| BuiltYear | int? | no |

### Child columns

Theo bảng §2 Child field map (decimal(18,3) cho *M / *M2 · int? qty · varchar kind/code).

### Shell columns (reuse / widen if missing — Dev)

| Column | CLR / SQL | Note |
|--------|-----------|------|
| KmFrom / KmTo | decimal(18,3)? | filter+form |
| RoadCode | varchar | SearchInput road-route |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap · **không** child orchestration ở BFF |
| Validation | API service (required resource, side, assetType, matching child block; IdCode AT-; reject wide/all-children payload) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource / type mismatch · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-08` → Asset |
| T-REN-01 | hub formNo 7→08 · title Biểu 08 ATGT (cùng typed) |
| T-BE-01 | Entity `CsdlBieu8Entity` + 11 child entities + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu8` (Dev/4b) |
| T-BE-03 | DTO typed + service join shell↔parent↔child · stop detail* write · type-change clear |
| T-BE-04 | IdCode `AT-` generator |
| T-BE-05 | List filter `roadCode` + km + side + `type`/`assetType` |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-08` + page Kind B |
| T-FE-02 | typed Slideout shared+1 child · FormMode↔API · Q-TYPE-UX confirm |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC · subset_by_type grid |
| T-FE-04 | LeaveConfirm · Copy · soft delete |
| T-FE-05 | hub deep-link + peer ATGT link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `traffic-safety` typed |
| T-OUT-01 | XLS / skip-bridge — OUT pack (không block P1) |
| T-OUT-02 | org SearchInput — P2 |

---

## 7. Open questions

- **none** (Q-ROUTE · Q-PROV · Q-CHILD · Q-TYPE-UX · Q-MARKER-KIND · Q-LIST-COLS · Q-REN-LABEL · Q-PEER chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ TS form · bind `road-assets`  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · **1 entity wide 45** · re-scan demo · DOMAIN invent ngoài Asset  

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
| writtenAt | 2026-09-05T10:25:00.000Z |
| contentHashPrior | sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be |
