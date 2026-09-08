# SA — Solution discovery — csdl-so-10 (CSDL Sổ 10 — Bình đồ duỗi thẳng tuyến)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_70d802d8`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`map`) · **filter-bar-layout-hard** · **slideout-form-layout** · **MapGateSlash** `/agent-dev-oms-map` R1–R11  
> Requires: Design **confirmed** · controlHint + real-data §B/§D · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` inventory · yarn build/e2e/start:std · Step 4b/migration ở role SA · Cesium P1

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| title | CSDL Sổ 10 — Bình đồ duỗi thẳng tuyến |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`map`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · Kind **F** map host→bar · entries `inline_grid` T-SO-10) |
| status | `confirmed` |
| design_confirm | approve (`task_7d13ee8d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_70d802d8`) |
| domain_map | **Asset** (`csdl-so-10` → `asset` · **T-DM-01** add slug — hiện thiếu) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-10` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=route-strip-maps` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `route-strip-maps` (**NEW** seed) |
| formNo | `10` · label «Sổ 10 — Bình đồ duỗi thẳng tuyến» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `route-strip-maps` (typed UiSchema) |
| MapGateSlash | `/agent-dev-oms-map` · R1–R11 (+ R4b/R4c/R4e/R5b/R7b/R7c · R-UX · R-LEAVE) |
| controlHint | `specs/_data-analy/features/csdl-so-10-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-10-real-data.md` |
| design | `specs/csdl-so-10/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| headerFingerprintPrior | `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_70d802d8` |
| priorTask | `task_7d13ee8d` (design completed) |
| updatedAt | `2026-09-06T00:43:16.088Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Sổ 10 typed + map) | Action |
|------|----------------------------|-------------------------|--------|
| Resource | **MISSING** catalog | Seed `route-strip-maps` + hub card formNo 10 | **GAP-SO10-RES-01** · **GAP-CSDL-CUC-05** |
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-10 header + strip entries theo Km | **GAP-SO10-TYPED-01** |
| Route | hub-only / missing | **alias** `/csdl-so-10` + hub entry | **GAP-SO10-ROUTE-01** |
| Map | none | Kind F OMS R1–R11 · LineString corridor · OSRM · Fit · line levels | **GAP-SO10-MAP-01** · **GAP-CSDL-CUC-10** |
| Geometry | — | **jsonb GeoJSON** on typed P1 · PostGIS **DEFER P2** | **Q-GEOM** SA chốt |
| Fallback media | — | `stripImageUrl` File khi empty geom | **GAP-SO10-FALLBACK-01** · Q-SO10 |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo10** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO + geometry | keep |
| DOMAIN-MAP | thiếu `csdl-so-10` | add slug → Asset | **GAP-SO10-DM-01** · **T-DM-01** |
| road | Text / roadName | SearchInput `road-route` · `roadCode` (+ display `roadName`) | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | Q-PROV |
| status | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | list + form |
| align/struct/surf | — | LOOKUP_STATIC enums PO | Q-ALIGN · Q-STRUCT · Q-SURF |
| contractor / manageUnit | detail* | Text P1 · org SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Cesium / Twin | — | **OUT** P1 · chain `/agent-dev-3d-map` later | **cấm** invent |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-10` · hub reuse `CsdlSoSachPage` entry · Kind F map page |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=route-strip-maps` → typed map |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo10Dtos.cs`** (typed create/update/detail + entries + geometry) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo10Entity`** · table **`rmms_csdl_so10`** · FK `CatalogRecordId` 1:1 |
| Geometry P1 | typed cols `Geometry` (jsonb GeoJSON) · `GeomType` · `Srid` · `StripImageUrl` |
| Geometry P2 | PostGIS `geometry(LineString/MultiLineString,4326)` nullable — **DEFER** · **GAP-SO10-POSTGIS-02** |
| Schema name | **`Schema_CsdlSo10`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| File | `stripImageUrl` → `/integrate-file-upload-web` (MinIO) · fallback only |
| DOMAIN-MAP | add row `csdl-so-10` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |
| Map Dev | `/agent-dev-oms-map` R1–R11 · MFE clip SSOT · **cấm** OSM.org/Esri CDN chip |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel GIS host · invent `api/v1/gis/*` cho strip · merge Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-10` |
| UI hub | `/so-ts/csdl-so-sach?resource=route-strip-maps` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| file upload | integrate-file-upload-web (stripImageUrl) |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list+map page alias + typed Slideout + Kind F + entries grid |
| Persist | shell + typed header 1:1 + child entries · geom jsonb typed · **cấm** parent `*Json` inventory · **cấm** chỉ col1–3 runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · PostGIS P2 · Cesium · e-sign · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table + entry cols · **không** nhét entries vào JSON |
| Geom | typed jsonb columns | opaque GeoJSON **không** phải inventory lines — OK P1 |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |
| Map | `/agent-dev-oms-map` | host→bar · clip basemap · OSRM · Fit · line levels · LeaveConfirm dirty draw |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **period** · form `periodStart`/`periodEnd` | FE local→UTC bound · BE store UTC · list period AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo10Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T00:43:16.088Z`

---

## FormType pack (`map`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=route-strip-maps` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- code · clear/copy geom) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` typed T-SO-10 | C/E/V | nested `entries[]` on API-02/03/04 |
| S-MAP | Kind F host→bar dock | C/E/V | load/save geom API-02/03/04 · empty → stripImageUrl |
| S-MAP-FALLBACK | File stripImageUrl | C/E | API-FILE-01 + body `stripImageUrl` |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=route-strip-maps` + filters | — | page=1 on filter change |
| create | empty typed form + empty entries + empty map | POST body `resource` + typed + `entries[]` + `geometry`/`geomType`/`srid`/`stripImageUrl` | IdCode `SO-` BE |
| edit | GET `/{id}` (shell+typed+entries+geom) | PUT `/{id}` | replace typed 1:1 · replace-all entries · replace geom |
| view | GET `/{id}` | — | readOnly · map view-only · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy entries · geom optional copy |
| delete | — | DELETE soft | confirm · reload list |
| map draw | GET geom | PUT/POST geom fields | dirty draw → LeaveConfirm · OSRM snap |
| map empty | — | show File fallback CTA | Q-SO10 |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `route-strip-maps` |
| `search` | SearchTextInput | mã · sổ · thầu · đường |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `fromDate` / `toDate` | Date | filter **period** (periodStart/End) · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries + geom)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so10`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, BookNo, RoadCode, RoadName, Province, KmFrom/KmTo, Status, ManageUnit, Notes, IsActive, timestamps | Contractor, PeriodStart, PeriodEnd, **Geometry** (jsonb), **GeomType**, **Srid**, **StripImageUrl** | LineNo, KmFrom, KmTo, BaseWidthM, SurfaceWidthM, MedianWidthM, ThicknessM, GradePct, AlignType, StructureType, StructureName, AtgtLeft/Right, Junction, DitchLeft/Right, WallLeft/Right, ScdkDa, SurfaceStatus, Notes |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for route-strip-maps** — stop writing runtime |

### Q-GEOM (SA chốt)

| Option | Decision |
|--------|----------|
| P1 | **jsonb GeoJSON** trên typed `rmms_csdl_so10.Geometry` + `GeomType` (`LineString`/`MultiLineString`) + `Srid` default **4326** |
| P1 API | cùng CRUD body — **cấm** invent `api/v1/gis/*` riêng cho strip |
| P2 | PostGIS geography/geometry column + spatial index — **DEFER** · **GAP-SO10-POSTGIS-02** (không block P1) |
| Empty geom | toast «Chưa có bình đồ» + CTA vẽ · **hoặc** File `stripImageUrl` (Q-SO10) |

### Typed DTO shape (API body / response widen)

`CsdlSo10Dto` = real-data §B write fields:

- Header: `resource`, `code`, `bookNo`, `contractor`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `periodStart`, `periodEnd`, `manageUnit`, `province`, `status`, `notes`, `stripImageUrl`, `geometry`, `geomType`, `srid`
- `entries[]`: `lineNo`, `kmFrom`, `kmTo`, `baseWidthM`, `surfaceWidthM`, `medianWidthM`, `thicknessM`, `gradePct`, `alignType`, `structureType`, `structureName`, `atgtLeft`, `atgtRight`, `junction`, `ditchLeft`, `ditchRight`, `wallLeft`, `wallRight`, `scdkDa`, `surfaceStatus`, `notes`

List projection: `code`, `bookNo`, `contractor`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `periodStart`/`periodEnd`, `status`, `province`, `hasGeometry` (derived), `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell |
| code | Code | shell · SO- |
| bookNo | BookNo | shell |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | shell · bbox strip |
| province / status | Province / Status | shell |
| manageUnit / notes | ManageUnit / Notes | shell |
| contractor | Contractor | typed `rmms_csdl_so10` |
| periodStart / periodEnd | PeriodStart / PeriodEnd | typed · UTC |
| geometry | Geometry | typed jsonb GeoJSON |
| geomType | GeomType | typed |
| srid | Srid | typed · 4326 |
| stripImageUrl | StripImageUrl | typed · File URL |
| entries[].* | (T-SO-10 cols) | entry widen |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### LOOKUP_STATIC enums (FE P1 · init-data BE optional DEFER)

| Field | Values |
|-------|--------|
| status | tot\|tb\|kem\|hong |
| alignType | thang\|cong |
| structureType | none\|cau\|ham\|cong |
| surfaceStatus | tot\|tb\|kem |
| province | FE PROVINCES 5 tỉnh |

### File bind

| Field | Control | API / service | Rule |
|-------|---------|---------------|------|
| stripImageUrl | File | integrate-file-upload-web | fallback khi empty geom · **không** thay map P1 nếu GIS READY |

### UiSchema

catalogKind `route-strip-maps` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Validation (API)

Required header: `resource`, `bookNo`, `contractor`, `roadCode`, `kmFrom`, `kmTo`, `periodStart`.  
Geometry: optional P1 — nếu có thì `geomType` + `srid` required · validate GeoJSON LineString/MultiLineString.  
Required entry row (khi có dòng): `kmFrom`, `kmTo`.  
Optional: widths · grade · align · structure · ATGT · ditch · wall · scdk · surfaceStatus · notes · stripImageUrl.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=route-strip-maps&…` | list paged · period from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries+geometry |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + entries + geom |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries · replace geom |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |
| API-FILE-01 | POST | integrate-file-upload-web | stripImageUrl fallback |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** invent GIS-only CRUD path.

### API-01 detail (list)

| | |
|--|--|
| Purpose | Paged list Sổ 10 bình đồ strip |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | `resource=route-strip-maps` · search · province · status · roadCode · fromDate · toDate · page · pageSize |
| Response | list DTO + `hasGeometry` · total |
| Errors | 422 thiếu resource · empty grid VN |
| Form surfaces | S-LIST · S-HUB-ENTRY |
| Migration | Seed_* resource + Schema_CsdlSo10 |

### API-02..05 (CRUD) — cùng pattern csdl-records

Body/detail gồm typed header + `entries[]` + `geometry`/`geomType`/`srid`/`stripImageUrl`. Context: `docs/context/features/csdl-so-10.md`. Demo: zone-only `csdl-so-sach-demo.html` · **cấm** demo-json SSOT. data-import: **OUT** XLS pack.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so10` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | Contractor nvarchar · PeriodStart/PeriodEnd datetime2 UTC · Geometry jsonb · GeomType nvarchar · Srid int · StripImageUrl nvarchar |
| Entries widen | KmFrom/KmTo decimal · BaseWidthM · SurfaceWidthM · MedianWidthM · ThicknessM · GradePct · AlignType · StructureType · StructureName · AtgtLeft/Right · Junction · DitchLeft/Right · WallLeft/Right · ScdkDa · SurfaceStatus · Notes · LineNo |
| Indexes | (CatalogRecordId) unique · list filters via shell · period via typed |
| Catalog seed | resource key `route-strip-maps` · formNo `10` · label Cục Sổ 10 |
| Migration name | `Schema_CsdlSo10` |
| PostGIS | **DEFER P2** · GAP-SO10-POSTGIS-02 |
| Backfill | optional: map legacy detail*/col1–3 → typed when resource=route-strip-maps |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business · **cấm** remap geom |
| Validation | API service (required fields §2 · IdCode · soft-delete · GeoJSON shape) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · geom invalid · **cấm** alert |

---

## 6. Map pack (SA → TL/Dev)

| Item | Spec |
|------|------|
| Dev slash | **`/agent-dev-oms-map`** R1–R11 |
| Engine | Leaflet OMS · MFE clip TileUrl · **cấm** Cesium P1 · **cấm** OSM.org chip |
| Tools | Select · Fit · zoom · LineString/MultiLineString · pin CT · measure Km |
| Load/Save | API-02/03/04 geometry fields · empty → toast + File CTA |
| OSRM | R8/R9 · routeAlongStreets · snap · fallback nét đứt + toast |
| Fit | `fitVnClipMap` load · Fit tài sản = bbox Km corridor |
| Line levels | R7b corridor underlay + track · R7c click = popup only |
| Leave | dirty form **hoặc** dirty draw → `LeaveConfirmModal` |
| Grid AC | G-01…G-10 (Design) |
| Map AC | M-01…M-12 (Design) |

---

## 7. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-10` → Asset |
| T-BE-01 | Entity `CsdlSo10Entity` + EF config (jsonb Geometry) |
| T-BE-02 | Migration `Schema_CsdlSo10` + widen `CsdlBookEntryEntity` + seed `route-strip-maps` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries↔geom · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode` + period `fromDate`/`toDate` (TZ) · GeoJSON validate |
| T-BFF-01 | verify proxy (no logic · geom passthrough) |
| T-FE-01 | route alias `/csdl-so-10` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | entries `inline_grid` typed T-SO-10 strip cols |
| T-FE-04 | FilterBar · SearchInput road-route · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub deep-link + label «Sổ 10» · **cấm** merge Sổ TS |
| T-FE-07 | UiSchema catalogKind `route-strip-maps` typed + seed catalog |
| T-FE-MAP-01 | Kind F map · `/agent-dev-oms-map` R1–R11 · OSRM · Fit · line levels |
| T-FE-MAP-02 | empty geom → File stripImageUrl fallback (Q-SO10) |
| T-OUT-01 | XLS / org SearchInput P2 / PostGIS P2 / Cesium — OUT/DEFER (không block P1) |

---

## 8. Open questions

- **none** (Q-SO10 · Q-ALIGN · Q-STRUCT · Q-SURF · Q-PROV · Q-ORG chốt PO/Design · **Q-GEOM** SA = jsonb P1 · PostGIS DEFER P2)

## 9. Cấm (SA)

- ERP.* · invent API · invent `api/v1/gis/*` strip · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS · Cesium P1  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` inventory · re-scan demo · DOMAIN invent ngoài Asset · OSM.org chip trên MFE  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| packKind | map |
| changeScope | new_page |
| solution_confirm | approve |
| MapGateSlash | /agent-dev-oms-map |
| writtenAt | 2026-09-06T00:43:16.088Z |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `csdl-so-10` / `map` |
| phase_from / phase_to | sa → team_lead |
| STATUS | confirmed |
| Context / Demo / DI | CTX `csdl-so-10.md` · demo zone-only · XLS OUT |
| controlHint / UNCLEAR | cite analy · open Q **none** |
| Screens / Pattern / devSlash | Kind B+D+F · `/agent-dev-oms-map` |
| peerStdUrl / reviewUrl | hub resource · prototype reviewUrl |
| APIs / FormMode↔API | API-01..05 · LKP-01 · FILE-01 · § FormMode table |
| Gates | tz_list_and_form · xco_get_only · share_tenant |
| Entity / migration | Schema_CsdlSo10 · jsonb geom P1 · PostGIS DEFER |
| Open questions | none |
| Next AskQuestion | TL `route_confirm` / task pack |
