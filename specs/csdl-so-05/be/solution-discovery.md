# SA — Solution discovery — csdl-so-05 (CSDL Sổ 05 — TNGT + điểm đen)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_9c8cec8e`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · runtime `/api/v1/accident-summaries` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · **3 grid** C.1/C.2/BS add-row) |
| status | `confirmed` |
| design_confirm | approve (`task_0332f55e`) |
| solution_confirm | **approve** (autoApprove=ON · `task_9c8cec8e`) |
| domain_map | **Asset** (`csdl-so-05` → `asset` · **T-DM-01** add slug — chưa có trên DOMAIN-MAP; peers so-01…04/06…08 đã có) |
| sa_tz_gate | **`tz_none`** (year/period int · **không** Date/DateTime form/list filter) |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-05` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| peerSoTs | LOOKUP `road-route` · report `rpt-tngt` RO · peer so-04 `traffic-counts` **ROW riêng** · **cấm** merge |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `accident-summaries` (**NEW** catalog key) |
| formNo | `05` · label «Sổ 05 — TNGT + điểm đen» · **không** reuse formNo 4 |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `accident-summaries` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-05-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-05-real-data.md` |
| design | `specs/csdl-so-05/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_9c8cec8e` |
| priorTask | `task_0332f55e` (design completed) |
| updatedAt | `2026-09-06T06:05:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live | New (Sổ 05 typed) | Action |
|------|--------------|-------------------|--------|
| Resource | **MISSING** `accident-summaries` · TNGT trong title `traffic-counts` | **NEW** key · formNo `05` · title «TNGT + điểm đen» | **GAP-SO05-RES-01** |
| Form | generic detail* / col1–3 (hub shell) | Typed header + **3 collections** `entriesC1` / `entriesC2` / `entriesBlackSpot` | **GAP-SO05-TYPED-01** · C1/C2/BS |
| List cols | N/A | bookNo · contractor · road · Km · year/period · tableKind · fatalities · injuries · accidentCount | list projection |
| Route | hub-only (chưa card) | alias `/csdl-so-05` + hub QS | **GAP-SO05-ROUTE-01** |
| formNo | lẫn Sổ 4 | Cục **05** · **không** reuse 4 | **GAP-SO05-FORMNO-01** |
| Split | live «(+ TNGT)» trên so-04 | so-05 ship độc lập · CUC-07 khi cả 2 PASS | **GAP-SO05-SPLIT-01** |
| Persist | shell + flat entries | shell + **Schema_CsdlSo05** header 1:1 + **3 child tables** · **cấm** parent `*Json` · **cấm** col1–3 SSOT | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO · **cấm** runtime `/api/v1/accident-summaries` | keep |
| Period | — | `periodType` month\|half\|year · `periodValue` 1–12 / 1\|2 / =year | Q-PERIOD |
| Cause / damage | — | 3× Number ≥0 · damage Number ≥0 «triệu đồng» | Q-CAUSE · Q-DAMAGE |
| BS assess | — | `blackspot\|potential\|under_watch` | Q-BS-ASSESS |
| Status | LOOKUP_STATIC | `draft\|active\|closed` | Q-STATUS |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | Q-PROV |
| contractor | Text | Text P1 · org-unit SearchInput **DEFER P2** | **GAP-CSDL-ORG-01** |
| road | Text / free | SearchInput `road-route` · `roadCode` (+ display) | **GAP-CSDL-ROAD-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat / thiếu typed | typed = source READY `rpt-tngt` · **cấm** CRUD report | **GAP-RPT-SRC-CSDL-01** |
| Map / File / 16 hạng | — | none · **cấm** invent · **cấm** class01…16 trên resource này | — |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-05` · hub card NEW `accident-summaries` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=accident-summaries` → typed map · **cấm** 16 hạng / traffic-counts fields |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo05Dtos.cs`** (typed create/update/detail + 3 arrays) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed header | **`CsdlSo05Entity`** · table **`rmms_csdl_so05`** · FK `CatalogRecordId` 1:1 · year/periodType/periodValue/tableKind + list rollups |
| Persistence entries | **3 child tables** (1:N) — **không** reuse journal `col1–3` runtime |
| Schema name | **`Schema_CsdlSo05`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | **T-DM-01** add row `csdl-so-05` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` · org-unit **DEFER P2** |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · runtime `/api/v1/accident-summaries` · merge Sổ TS / so-04 · invent file API · CRUD `rpt-tngt`.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-05` |
| UI hub | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` · **DEFER P2** |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + 3 tabs grid |
| Persist | shell + typed header 1:1 + 3 entry collections · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · FileService · Step 4b @ SA · 16 hạng xe |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed tables · **không** nhét lines vào JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_none`** | year int · periodValue int · **không** Date filter/form | audit `updatedAt` shell UTC only |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo05Entity` + child entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_none` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T06:05:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=accident-summaries` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO-) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-TAB-C1 | DES-TAB-C1 add-row | C/E/V | `entriesC1[]` on API-02/03/04 |
| S-TAB-C2 | DES-TAB-C2 add-row | C/E/V | `entriesC2[]` |
| S-TAB-BS | DES-TAB-BS add-row | C/E/V | `entriesBlackSpot[]` |
| S-HUB-ENTRY | NEW catalog card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=accident-summaries` + filters | — | page=1 on filter change |
| create | empty typed form · 3 grids `[]` | POST body `resource` + header + 3 arrays | IdCode `SO-` BE · replace-all collections |
| edit | GET `/{id}` (shell+typed+3 arrays) | PUT `/{id}` | replace-all lines per collection |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · keep lines |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `accident-summaries` |
| `search` | SearchTextInput | mã · sổ · đường · vị trí |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 (5 tỉnh) |
| `status` | Dropdown LOOKUP_STATIC | draft/active/closed |
| `roadCode` | SearchInput road-route | Integration search |
| `year` | Integer / Dropdown | kỳ năm |
| `periodType` | Dropdown LOOKUP_STATIC | month\|half\|year |
| `tableKind` | Dropdown LOOKUP_STATIC | c1\|c2\|blackspot\|(all) |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + 3 collections)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so05`) | Store on child collections |
|---------------------------------------------|----------------------------------|----------------------------|
| Resource, Code, BookNo, Contractor, RoadCode, RoadName, Province, KmFrom/KmTo, Status, Notes, IsActive, timestamps | Year, PeriodType, PeriodValue, TableKind, AccidentCount, Fatalities, Injuries (list rollups) | **C1** / **C2** / **BS** tables 1:N · FK CatalogRecordId (hoặc So05Id) |

### Typed DTO shape (API body / response widen) — cite real-data §B

`CsdlSo05Dto`:

- Header: `resource`, `code`, `bookNo`, `contractor`, `roadCode`, `roadName`, `kmFrom`, `kmTo`, `province`, `year`, `periodType`, `periodValue`, `tableKind`, `status`, `notes`
- Collections:
  - `entriesC1[]`: `roadName`, `location`, `accidentCount`, `causeRoad`, `causePerson`, `causeVehicle`, `fatalities`, `injuries`, `damageInfra`, `damageVehicle`, `remarks`
  - `entriesC2[]`: `roadName`, `accidentCount`, `fatalities`, `injuries`, `damageInfra`, `damageVehicle`, `remarks`
  - `entriesBlackSpot[]`: `location`, `kmFrom`, `kmTo`, `accident12m`, `fatalities12m`, `injuries12m`, `assessment`, `stateFoundation`, `stateGeometry`, `stateAtgt`, `preliminaryAction`, `measures`, `followUp`
- List rollups (readonly on list / derived on write): `accidentCount`, `fatalities`, `injuries` = sum từ collection khớp `tableKind` (default ưu tiên C.1 khi all)
- **Cấm** `detail*` / `col1–3` SSOT · **cấm** class01…16 · **cấm** traffic-counts fields

List projection: `code`, `bookNo`, `contractor`, `roadCode`/`roadName`, `kmFrom`/`kmTo`, `year`, `periodType`/`periodValue`, `tableKind`, `accidentCount`, `fatalities`, `injuries`, `status`, `province`, `updatedAt`.

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell · `accident-summaries` |
| code | Code | shell · SO- |
| bookNo | BookNo | shell |
| contractor | Contractor | shell |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmFrom / kmTo | KmFrom / KmTo | shell |
| province / status | Province / Status | shell |
| notes | Notes | shell |
| year | Year | typed |
| periodType | PeriodType | typed · `month\|half\|year` |
| periodValue | PeriodValue | typed · int (sync Q-PERIOD) |
| tableKind | TableKind | typed · `c1\|c2\|blackspot` |
| c1* | entriesC1[] | child `rmms_csdl_so05_c1` |
| c2* | entriesC2[] | child `rmms_csdl_so05_c2` |
| bs* | entriesBlackSpot[] | child `rmms_csdl_so05_bs` |
| cause* | CauseRoad/Person/Vehicle | C1 · Number ≥0 |
| damage* | DamageInfra/Vehicle | C1/C2 · Number ≥0 |
| bsAssessment | Assessment | BS · enum |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### UiSchema

catalogKind `accident-summaries` typed — **cấm** generic 3-col-only schema làm SSOT form.

### Unique / validation

| Rule | Spec |
|------|------|
| Period sync | month→periodValue 1–12 · half→1\|2 · year→periodValue=year · **422** nếu lệch |
| Cause / damage | Number ≥0 · **422** nếu <0 |
| BS assessment | `blackspot\|potential\|under_watch` |
| Status | `draft\|active\|closed` |
| Required header | bookNo, contractor, roadCode, kmFrom, year, periodType, periodValue, province |
| Required lines | per control-hint * · empty collection allowed on create (toast soft OK) · ≥1 line khi save active (P1 soft — TL confirm) |
| Unique | **không** hard unique PO · soft advisory optional `(CompanyCode, RoadCode, Year, PeriodType, PeriodValue)` — **không** block P1 |
| Split | **cấm** 16 hạng / traffic-counts fields · so-04 ROW riêng |

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=accident-summaries&…` | list paged · filters §list |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+3 arrays |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed · period 422 |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all lines |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |
| API-LKP-02 | GET | `/web-bff/api/v1/integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** runtime `/api/v1/accident-summaries` · **cấm** invent file API · **cấm** CRUD `rpt-tngt` / Report write.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed header | `rmms_csdl_so05` · PK Guid · FK `CatalogRecordId` unique |
| Typed cols header | Year, PeriodType, PeriodValue, TableKind, AccidentCount, Fatalities, Injuries |
| Child C1 | `rmms_csdl_so05_c1` · FK CatalogRecordId · SortOrder · road/location/counts/causes/damage/remarks |
| Child C2 | `rmms_csdl_so05_c2` · FK CatalogRecordId · SortOrder · road/counts/damage/remarks |
| Child BS | `rmms_csdl_so05_bs` · FK CatalogRecordId · SortOrder · location/km*/12m metrics/assessment/state*/actions |
| Indexes | CatalogRecordId unique on header · IX children (CatalogRecordId, SortOrder) |
| Migration name | `Schema_CsdlSo05` |
| Backfill | **không** migrate traffic-counts / AccidentSummary legacy runtime path · NEW empty OK |
| Book entries generic | **stop write** col1–3 / detail* for `accident-summaries` |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap · **không** derive rollups ở BFF |
| Validation | API service (required, period sync, ≥0, enums, IdCode, replace-all collections, list rollups) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource / period · 404 detail · toast · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-05` → Asset |
| T-BE-01 | Entity `CsdlSo05Entity` + C1/C2/BS children + EF config |
| T-BE-02 | Migration `Schema_CsdlSo05` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔3 arrays · stop detail*/col1–3 · period/enum 422 · rollups |
| T-BE-04 | IdCode `SO-` generator · register resource `accident-summaries` |
| T-BE-05 | List filters year/periodType/tableKind/roadCode/province/status/search |
| T-BE-06 | Hub catalog NEW card formNo 05 · peer so-04 drop «(+ TNGT)» when both PASS (CUC-07) |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-05` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | 3 tabs grids C.1/C.2/BS add-row · **cấm** journal col1–3 / 16 hạng |
| T-FE-04 | FilterBar · SearchInput road · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub NEW card `accident-summaries` · **cấm** merge Sổ TS / so-04 |
| T-FE-07 | UiSchema catalogKind `accident-summaries` typed |
| T-OUT-01 | XLS / org SearchInput P2 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (PO/Design chốt · autoApprove)
- Soft unique advisory — TL có thể promote hard 422 nếu product yêu cầu

## 8. Cấm (SA)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS · gộp đếm xe 16 hạng · runtime `/api/v1/accident-summaries`  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset · CRUD rpt-tngt  

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
| writtenAt | 2026-09-06T06:05:00.000Z |
| contentHashPrior | sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce |
