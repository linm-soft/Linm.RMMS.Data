# SA — Solution discovery — csdl-bieu-03 (CSDL Biểu 03 — Hầm đường bộ)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_539bb440`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · merge Sổ 6 form

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| status | `confirmed` |
| design_confirm | approve (`task_db02ce1d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_539bb440`) |
| domain_map | **Asset** (`csdl-bieu-03` → `asset` · **T-DM-01** add slug — **thiếu** trên DOMAIN-MAP; có 01/02/04/05/06) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm **deep-link only** · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `road-tunnels` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| design | `specs/csdl-bieu-03/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprintPrior | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_539bb440` |
| priorTask | `task_db02ce1d` (design completed) |
| updatedAt | `2026-09-05T08:55:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 03 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **42 cột** Excel Biểu 3 · Kind D Slideout sectioned | **GAP-BIEU03-TYPED-01** |
| GPS | N/A / free | **six_numbers** lat/lng×3 · **cấm** map canvas | **GAP-BIEU03-GPS-01** |
| Tube | sample tubeCount only | **two_rows** · 2 ống = 2 bản ghi GPS (+ `tubeIndex`) · **cấm** 1 row 2 bộ GPS | **GAP-BIEU03-TUBE-01** |
| Struct | missing | crossingType · tunnelClass · lining* · clearance* · section* · carriage* · pavement* | **GAP-BIEU03-STRUCT-01** |
| Drain | missing | drainLengthM · drainSpacingM · shoulderInTunnelM | **GAP-BIEU03-DRAIN-01** |
| Fire/equip | missing | fire* · fan* · light* · cctv/vms · escape* | **GAP-BIEU03-FIRE-01** |
| Vent/load | missing | **text** `ventilationType` · `designLoad` (enum/unit later) | **GAP-BIEU03-VENT-01** |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-03` + hub entry | **GAP-BIEU03-ROUTE-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu3** pair · **cấm** `DetailJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack | **GAP-CSDL-XLS-01** |
| Peer | Sổ 6 QL cầu/hầm | deep-link only · **cấm** merge | **GAP-BIEU03-PEER-01** |
| DOMAIN-MAP | **thiếu** slug `csdl-bieu-03` | add → Asset | **GAP-BIEU03-DMAP-01** |
| Map | none | none · gis deep-link only | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-03` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=road-tunnels` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu3Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu3Entity`** · table **`rmms_csdl_bieu3`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlBieu3`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-03` → Asset (**GAP-BIEU03-DMAP-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ 6 form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-03` |
| UI hub | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| Peer Sổ 6 | deep-link only |
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
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout |
| Persist | shell + typed child 1:1 · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 42 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · sectioned · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu3Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T08:55:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=road-tunnels` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 sectioned | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new TN- code · giữ/đổi tubeIndex) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-PEER-SO6 | deep-link | — | **cấm** merge |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=road-tunnels` + filters | — | page=1 on filter change |
| create | empty typed form | POST body `resource` + typed fields | IdCode `TN-` BE · 1 tube = 1 row |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · dùng Copy để tạo ống 2 |
| delete | — | DELETE soft | confirm · reload list |

### Tube rule (Q-TUBE = two_rows) — HARD

| Rule | Spec |
|------|------|
| 1 ống | 1 bản ghi · `tubeCount=1` · `tubeIndex` optional/1 |
| 2 ống | **2 POST** (hoặc Create + Copy) · mỗi row GPS riêng · `tubeIndex` 1|2 |
| Payload | **cấm** 1 body chứa 2 bộ GPS |
| Validation | `tubeCount>1` thiếu `tubeIndex` → 422 · GPS thiếu bắt buộc → 422 field |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `road-tunnels` |
| `search` | SearchTextInput | mã · tên hầm · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | range AND |
| `tunnelClass` | Dropdown LOOKUP_STATIC | filter optional ĐB/MN |
| `tubeCount` | Number | filter optional |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (GPS / TUBE / VENT · storage)

### Q-GPS → **six_numbers** (PO/Design locked)

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `gpsStartLat` | `GpsStartLat` | `decimal(18,8)?` | điểm đầu Lat |
| `gpsStartLng` | `GpsStartLng` | `decimal(18,8)?` | điểm đầu Lng |
| `gpsMidLat` | `GpsMidLat` | `decimal(18,8)?` | điểm giữa Lat |
| `gpsMidLng` | `GpsMidLng` | `decimal(18,8)?` | điểm giữa Lng |
| `gpsEndLat` | `GpsEndLat` | `decimal(18,8)?` | điểm cuối Lat |
| `gpsEndLng` | `GpsEndLng` | `decimal(18,8)?` | điểm cuối Lng |

**Cấm** map canvas · **cấm** gộp 1 chuỗi GPS · **cấm** invent gis draw API.

### Q-TUBE → **two_rows**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `tubeCount` | shell / typed `TubeCount` | `int` | số ống · list+form |
| `tubeIndex` | `TubeIndex` | `int?` | ống số · required nếu tubeCount>1 |

**Cấm** child_table · **cấm** 1 row 2 bộ GPS · Copy = tạo ống kế.

### Q-VENT → **text**

| uiField | DB column | Type | Note |
|---------|-----------|------|------|
| `ventilationType` | `VentilationType` | `varchar(128)?` | Thông gió · enum later |
| `designLoad` | `DesignLoad` | `varchar(128)?` | Tải TK · unit later |

**Cấm** ép Number/enum P1 · **cấm** JSON vent shape.

### Struct / Drain / Fire / Equip (typed scalars)

| Group | Fields (camel → Pascal) |
|-------|-------------------------|
| Identity | `tunnelName`, `crossingType`, `tunnelClass` |
| Clearance / section | `liningType`, `clearanceM`, `sectionHeightM`, `sectionWidthM`, `carriageWidthM`, `pavementInTunnel` |
| Drain / shoulder | `drainLengthM`, `drainSpacingM`, `shoulderInTunnelM` |
| Fire / equip | `firePump`, `fireNicheCount`, `fanCount`, `lightCount`, `hasCctv`, `hasVms`, `escapeExitCount` |
| Misc | `lengthM`, `builtYear`, `updatedByName`, `ownerUnit` |

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_bieu3`) |
|---------------------------------------------|-------------------------------------|
| Resource, Code, RoadName (+ RoadCode), Province, KmFrom/KmTo, Side, Status, ManageUnit, Notes, IsActive, timestamps | tunnelName, tubeCount, tubeIndex, gps*×6, crossingType, tunnelClass, lining*, clearance*, section*, carriage*, pavement*, drain*, shoulder*, fire*, fan*, light*, hasCctv, hasVms, lengthM, builtYear, ventilationType, escapeExitCount, designLoad, ownerUnit, updatedByName |
| DetailPrimary/Spec/Extra | **deprecated for this resource** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen)

`CsdlBieu3Dto` fields = real-data §B write fields (resource + 42-col inventory). List projection: code, tunnelName, roadCode/roadName, km*, lengthM, tubeCount, tubeIndex, tunnelClass, status, manageUnit, updatedAt.

### UiSchema

catalogKind `road-tunnels` typed — **cấm** generic 3-col-only schema làm SSOT form · sections GPS / kết cấu / thoát+PCCC / thiết bị.

### LOOKUP_STATIC (P1)

| Field | Values (seed) |
|-------|----------------|
| `tunnelClass` | ĐB · MN |
| `crossingType` | núi · sông · đô thị · khác |
| `side` | L · R · C · Both |
| `status` | tot · tb · kem · hong |
| `province` | FE PROVINCES keep_static |

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=road-tunnels&…` | list paged |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed · 1 tube/row |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** bind CRUD Biểu 3 vào Sổ 6.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu3` |
| PK | Guid Id |
| FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` CASCADE soft via parent |
| Indexes | (CatalogRecordId) unique · list filters via shell |
| Migration name | `Schema_CsdlBieu3` |
| Backfill | optional: parse legacy detail* → typed when resource=road-tunnels |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, km range, IdCode TN-, tubeIndex if tubeCount>1, GPS decimals) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource/tubeIndex/GPS · 404 detail · toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-bieu-03` → Asset |
| T-BE-01 | Entity `CsdlBieu3Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlBieu3` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed · stop detail* write |
| T-BE-04 | IdCode `TN-` generator |
| T-BE-05 | List filter `roadCode` + km + optional tunnelClass/tubeCount · tube validation |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-bieu-03` + page Kind B |
| T-FE-02 | typed Slideout 42 cột sectioned · FormMode↔API |
| T-FE-03 | FilterBar · SearchInput road-route · LOOKUP_STATIC · tunnelClass/tubeCount filter |
| T-FE-04 | LeaveConfirm · Copy (ống 2) · soft delete |
| T-FE-05 | hub deep-link + peer Sổ 6 link · **cấm** merge |
| T-FE-06 | UiSchema catalogKind `road-tunnels` typed · GPS six_numbers · TUBE two_rows · VENT text |
| T-OUT-01 | XLS Biểu 3 — OUT pack (không block P1) |

---

## 7. Open questions

- **none** (Q-GPS · Q-TUBE · Q-VENT · Q-ROUTE · Q-PROV · Q-SECTION chốt · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · form 3 ô only · Guid IdCode · merge Sổ 6 · 1 row 2 bộ GPS  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset  

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
| writtenAt | 2026-09-05T08:55:00.000Z |
| contentHashPrior | sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e |
