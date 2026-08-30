# SA — Solution discovery — csdl-so-sach (CSDL 12 biểu + 8 sổ BDTX)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_d16cef3e`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| title | CSDL sổ sách — hub 12 biểu + 8 sổ BDTX |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **G** hub + **B** catalog A–D+F + **D** Slideout) |
| status | `confirmed` |
| design_confirm | approve (`task_01f113ac`) |
| solution_confirm | **approve** (autoApprove=ON · `task_d16cef3e`) |
| domain_map | **Asset** (`csdl-so-sach` → `asset`) |
| sa_tz_gate | **`tz_list_only`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/csdl-so-sach-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-sach-real-data.md` |
| design | `specs/csdl-so-sach/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| headerFingerprintPrior | `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_d16cef3e` |
| priorTask | `task_01f113ac` (design completed) |
| updatedAt | `2026-08-29T11:15:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · STATUS) |

## § Delta Current vs New (`edit_page` · SA recheck)

| Area | Current (prior solution 2026-08-09) | New (this turn · Design+analy 2026-08-29) | Action |
|------|-------------------------------------|-------------------------------------------|--------|
| Version meta | skill 2026.08.08 · workflow 2026.08.09 | skill **2026.08.24.01** · workflow **2026.08.29.03** · rules **2026.08.29.31** | rewrite |
| UI route | `/asset/csdl-so-sach` | **`/so-ts/csdl-so-sach`** (live `index.tsx`) | **GAP-CSDL-ROUTE-UI** docs |
| API prefix | `api/v1/asset/csdl-records` | **giữ** live controller · **cấm** `so-ts` / `infra` | keep |
| TZ gate | `tz_na` | **`tz_list_only`** — list `fromDate`/`toDate` + `CatalogUpdatedAtRange` UTC | chốt |
| `roadName` | Text free | **SearchInput** `road-route` filter+form · lookup Integration | **GAP-CSDL-ROAD-01** |
| List `?roadName=` | không có | optional AND query trên API-01 (cột đã có) · **không** migration | delta BE |
| province/status/side | FE LOOKUP_STATIC | **giữ** P1 (PO Q-PROV) · **cấm** invent init-data P1 | keep_static |
| Hub card | slug meta | title VN từ catalog DTO | **GAP-QA-HUB-SLUG** |
| History | invent path risk | **`LinCatalogHistoryModal`** · **cấm** invent History API | **GAP-CSDL-HIST-01** |
| FormMode↔API | thin | Full hub/list/C/E/V/Copy/delete map | write |
| Entity / BFF | live CRUD | **giữ** · **cấm** parent JSON · BFF proxy-only | keep |

**Không đổi:** Kind G+B+D · `CsdlCatalogRecordEntity` + child `CsdlBookEntryEntity` · BFF proxy · IdCode prefixes · soft-delete · pageSize 50/100/200/500 · Excel OUT · org SearchInput DEFER P2 · typed sổ DEFER report.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route live `/so-ts/csdl-so-sach` · `ui_repo_confirm` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Service | `CsdlCatalogService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/CsdlCatalogDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/CsdlCatalogRecordEntity.cs` · `CsdlBookEntryEntity.cs` |
| Tables | `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` |
| Migrations | **đã có** (T-BE-02 done) · **không** Schema mới trừ delta query-only |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/CsdlCatalogRecordsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/csdlSoSach/endpoint.ts` · `BASE=/asset/csdl-records` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · `csdl-so-sach` → Asset |
| Docs | `docs/context/features/csdl-so-sach.md` · `11-CSDL-SO-SACH-DATABASE-API.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/csdl-records`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI hub/list | `/so-ts/csdl-so-sach` · `?resource=` · Slideout overlay |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| road-route lookup | `GET /integration/road-routes/search` (Master/Integration · **không** Asset) |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` · DOMAIN-MAP |
| API host | `Domains/Asset/` · `CsdlCatalogRecordsController` |
| BFF | `bff/domains/asset/…` · **proxy only = yes** (T-BFF-01) |
| MFE | `Linm.Web.RMMS.Asset` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged (stub → CommonLib) |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` · attr TODO (**GAP-CSDL-AUTH-01**) |
| Persist | no-parent-json · parent flat scalars + child `entries[]` · **cấm** `EntriesJson` / `DetailJson` |
| Out of pack | Excel import/export · PostGIS · report typed sổ · Biểu 1 deep (`pavement-section`) · map canvas |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · `LinCatalogHistoryModal` · `LeaveConfirmModal` · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth · debt GAP-CSDL-AUTH-01 |
| Persist | `no-parent-json-field` | child `rmms_csdl_book_entries` |
| BFF | proxy only | no business logic |
| Config | catalogKind `csdl-records` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` / `configHint` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input cụm phải · **cấm** nút Tìm riêng |
| Form surface | `slideout-form-layout` | footer_actions_only · `data-form-cols="2"` |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_list_only`** | API-01 `fromDate`/`toDate` · filter Zone B · **không** form business date | `/review-timezone-implement` | BE live `CatalogUpdatedAtRange.ResolveUtc` · FE gửi local→UTC bound |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View Slideout | `/implement-view-cross-company` | live 403 path · AllowedCompanyIds |
| SHARE | **`share_tenant`** | `CsdlCatalogRecordEntity` : `TenantEntity` · child entries | `/implement-shared-table` | tenant `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_only` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-08-29T11:15:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-HUB | Kind G | hub | API-00 catalog |
| S-LIST | Kind B A–D+F+H | list | API-01 list |
| S-FORM-CREATE | Kind D Slideout | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent · shared history pattern only |
| S-ENTRIES | inline_grid (sổ) | C/E/V | nested `entries[]` trên API-02/03/04 |
| Lookup road | SearchInput | filter + form | API-LKP-01 Integration |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| hub | GET catalog | — | KPI/card counts · title VN |
| list | GET list `?resource=` + filters | — | page=1 on filter change |
| create | empty form · resource from QS | POST body | IdCode BE generate |
| edit | GET `/{id}` | PUT `/{id}` | replace entries when book |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm modal · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | QS / hub card | required list |
| `search` | SearchTextInput | mã · đường · chi tiết · bookNo · contractor |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `fromDate` | Date | UpdatedAt ≥ UTC bound · **TZ** |
| `toDate` | Date | UpdatedAt < UTC exclusive · **TZ** |
| `roadName` | SearchInput `road-route` | **delta** optional AND contains · GAP-CSDL-ROAD-01 |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis

| Screen | Fields | Source type | Persist | Notes |
|--------|--------|-------------|---------|-------|
| Hub | tab · KPI · resource cards | derived + API-00 | — | title VN · **cấm** slug meta |
| List filter | search · province · status · from/to · roadName · resource | query | — | LinErpListFilterBar |
| List grid | code · roadName · province · km · status · manageUnit · detailPrimary | transaction | `CsdlCatalogRecordEntity` | |
| Form Z | § Field map | transaction | record + child entries | Slideout 2col |
| Entries | lineNo · col1/2/3 · note | transaction | `CsdlBookEntryEntity` | sổ only · typed DEFER |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| roadName | **SearchInput** `road-route` | Lookup **API-LKP-01** · write scalar `roadName` · list optional `?roadName=` |
| province | Dropdown LOOKUP_STATIC | FE static P1 (PO keep_static) · **cấm** invent init-data P1 · master P2 |
| status / side | Dropdown LOOKUP_STATIC | FE static enums · same P1 exception |
| search | SearchTextInput | `?search=` |
| fromDate / toDate | Date | `?fromDate=` / `?toDate=` · TZ list_only |
| code | Text readonly IdCode | BE generate · không Guid làm mã |
| kmFrom / kmTo | Number | scalar decimal |
| manageUnit / ownerUnit | Text | scalar · org SearchInput **DEFER P2** |
| detail* / notes / bookNo / contractor | Text / Textarea | scalar |
| entries[] | pattern_inline_grid | child rows · **cấm** parent JSON |
| catalogTab / cards | Tab / Card | client + API-00 |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| resource | Resource | `resource` |
| code | Code | `code` |
| roadName | RoadName | `road_name` |
| province | Province | `province` |
| kmFrom | KmFrom | `km_from` |
| kmTo | KmTo | `km_to` |
| side | Side | `side` |
| status | Status | `status` |
| manageUnit | ManageUnit | `manage_unit` |
| ownerUnit | OwnerUnit | `owner_unit` |
| detailPrimary | DetailPrimary | `detail_primary` |
| detailSpec | DetailSpec | `detail_spec` |
| detailExtra | DetailExtra | `detail_extra` |
| notes | Notes | `notes` |
| bookNo | BookNo | `book_no` |
| contractor | Contractor | `contractor` |
| entries[].lineNo | LineNo | child `line_no` |
| entries[].col1/2/3 | Col1/2/3 | child flat |
| entries[].note | Note | child `note` |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `EntriesJson` / `DetailJson`.

### Persist / migration

| Item | Decision |
|------|----------|
| Parent entity | `CsdlCatalogRecordEntity` · table `rmms_csdl_catalog_records` · **đã có** |
| Child entity | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · FK parent · **đã có** |
| New Schema_* | **none** (query `roadName` only) |
| Seed | resource map + IdCode prefixes trong service · UI schema `csdl-records` |
| data-import | **N/A** this pack · Excel **OUT** (GAP-CSDL-XLS-01) · default đơn vị II.1/QL.1 nếu reopen import |

---

## 3. API catalog

### API-00: GET `/api/v1/asset/csdl-records/catalog`

| | |
|--|--|
| Purpose | Hub KPI + per-resource counts + title |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · CompanyCode filter |
| Request | — |
| Response | `CatalogSummaryDto` · `items[{ resource, title, count }]` · `totalCount` |
| Errors | toast · empty items OK |
| Form surfaces | S-HUB |
| Field map | kpi ← count · card.title ← title |
| Context | `docs/context/features/csdl-so-sach.md` |
| Demo | `csdl-so-sach-demo.html` zone hub · **cấm** SSOT data |
| data-import | N/A |
| Migration | none |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/csdl-records/catalog`

### API-01: GET `/api/v1/asset/csdl-records`

| | |
|--|--|
| Purpose | Paged list theo resource + filter |
| Permission | `asset.csdl-records.read` |
| Tenant | CompanyCode |
| Request | query: `resource*` · `search` · `province` · `status` · `fromDate` · `toDate` · **`roadName`** (delta optional AND) · `page` · `pageSize` |
| Response | `CsdlCatalogPagedResult` |
| Errors | 422 thiếu/invalid resource · toast |
| Form surfaces | S-LIST |
| Field map | list columns ← DTO scalars (entries empty trên list) |
| Context | CTX + `11-CSDL-SO-SACH-DATABASE-API.md` |
| Demo | list zone · ref only |
| data-import | N/A |
| Migration | none · filter `RoadName` column existing |
| gates.tz | **yes** (fromDate/toDate → UTC) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/csdl-records?**`

### API-02: GET `/api/v1/asset/csdl-records/{id}`

| | |
|--|--|
| Purpose | Detail + nested entries · View/Edit/Copy load |
| Permission | `asset.csdl-records.read` |
| Tenant | XCO get_only · 403 nếu ngoài AllowedCompanyIds |
| Request | path `id` Guid |
| Response | `CsdlCatalogRecordDto` + `entries[]` |
| Errors | 404 → đóng slideout · 403 |
| Form surfaces | view · edit · copy |
| Field map | full § Field map |
| Context / Demo | form zones |
| data-import | N/A |
| Migration | none |
| gates.tz | n/a |
| gates.xco | **yes** |
| gates.shared | inherit |

BFF: `GET web-bff/api/v1/asset/csdl-records/{id}`

### API-03: POST `/api/v1/asset/csdl-records`

| | |
|--|--|
| Purpose | Create · IdCode `{PREFIX}-yyyyMMdd-nnnn` |
| Permission | `asset.csdl-records.create` |
| Tenant | current company |
| Request | `CreateCsdlCatalogRecordRequest` (+ `entries[]` nếu book) |
| Response | `CsdlCatalogRecordDto` |
| Errors | 422 required roadName/province/status/detailPrimary · invalid resource |
| Form surfaces | create · copy |
| Field map | body → entity · entries → child rows |
| Context / Demo | form create |
| data-import | N/A |
| Migration | none |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | inherit |

### API-04: PUT `/api/v1/asset/csdl-records/{id}`

| | |
|--|--|
| Purpose | Update scalars · replace entries (book) |
| Permission | `asset.csdl-records.update` |
| Tenant | same company write |
| Request | `UpdateCsdlCatalogRecordRequest` |
| Response | `CsdlCatalogRecordDto` |
| Errors | 404 · 422 |
| Form surfaces | edit |
| Field map | same · **cấm** JSON blob |
| Migration | none |
| gates | inherit |

### API-05: DELETE `/api/v1/asset/csdl-records/{id}`

| | |
|--|--|
| Purpose | Soft delete `IsActive=false` |
| Permission | `asset.csdl-records.delete` |
| Request | path id |
| Response | 200 / empty |
| Form surfaces | S-ACT-DELETE |
| Migration | none |
| gates | inherit |

### API-LKP-01: GET `/api/v1/integration/road-routes/search` (lookup · **không** Asset)

| | |
|--|--|
| Purpose | SearchInput `road-route` cho filter + form `roadName` |
| Permission | master/integration read (live Master pack) |
| Request | search query (cite Integration live) |
| Response | road items → UI bind **label** vào `roadName` string (P1) |
| Form surfaces | list filter · form C/E |
| Note | **GAP-CSDL-ROAD-01** · **cấm** free-text substitute khi đã chọn · **cấm** invent Asset road API |
| gates | n/a (shared Integration) |

### IdCode prefixes (live service)

| Resources | Prefix |
|-----------|--------|
| 12 biểu CSDL (`pavement-sections` … `green-assets`) | MD·BR·TN·CV·RN·HC·AT·MK·KE·LE·LT·CX |
| 8 sổ BDTX (`patrol-logs` … `inspection-logs`, `book=true`) | SO |

Format: `{PREFIX}-yyyyMMdd-nnnn`.

### Catalog / lookup summary

| catalogKind | API | P1 decision |
|-------------|-----|-------------|
| road-route | API-LKP-01 | **REQUIRED** SearchInput |
| LOOKUP_STATIC province | FE `PROVINCES` | keep_static · **cấm** invent init-data |
| LOOKUP_STATIC status/side | FE enums | keep_static |
| org-unit | Integration search | **DEFER P2** |
| partner-unit | Integration search | optional P2 sổ |
| ui-schema `csdl-records` | Integration catalog schema | Zone F FULL |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-CSDL-ROAD-01 | SearchInput + API-LKP-01 · optional `?roadName=` on API-01 | Dev UI + BE delta |
| GAP-CSDL-PROV-01 | keep_static P1 | Dev keep · P2 master |
| GAP-QA-HUB-SLUG | card.title VN từ API-00 | Dev UI |
| GAP-CSDL-API-DOC | cite `api/v1/asset/csdl-records` only | docs done |
| GAP-CSDL-ROUTE-UI | `/so-ts/csdl-so-sach` | docs/shell |
| GAP-CSDL-HIST-01 | LinCatalogHistoryModal · **cấm** invent API | Dev UI |
| GAP-CSDL-ORG-01 | DEFER P2 Text | — |
| GAP-RPT-SRC-CSDL-01 | DEFER report | — |
| GAP-CSDL-AUTH-01 | DEFER SD-AUTH | BE later |
| GAP-CSDL-XLS-01 | OUT pack | — |

---

## Out of pack

Import Excel API · PostGIS Geom · report Excel 12 sheet · Biểu 7 multi-entity facade · map canvas · invent History path · ERP fork.

---

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm gates TZ/XCO/SHARE (`task_d16cef3e`).  
Handoff → **Team-lead** pending (roles sau = pending đến lượt). **Cấm** start TL/Dev/QA trong task SA này (**GAP-PKT-ROLE-01**). **Cấm** Write MFE/native · e2e · start:std · Step 4b.

## Handoff → TL

| Field | Value |
|-------|-------|
| Kind / pattern | G hub + B A–D+F+H + D Slideout `data-form-cols="2"` footer_only |
| FormMode↔API | § FormType pack |
| Filter keys | resource · search · province · status · fromDate · toDate · roadName · page · pageSize |
| API list | API-00…05 · API-LKP-01 |
| Entity | flat + child entries · **cấm** parent JSON |
| Gates | tz_list_only · xco_get_only · share_tenant |
| Delta Dev | GAP-CSDL-ROAD-01 · GAP-QA-HUB-SLUG · GAP-CSDL-HIST-01 UI · optional `?roadName=` |
| Migration | **none** this SA turn |
| Next | TL enqueue khi tới lượt · **cấm** start trong task này |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Design confirmed + controlHint + real-data §B | ✅ |
| Architecture · SSOT · Ownership · DOMAIN-MAP Asset | ✅ |
| FormType list · FormMode↔API đủ | ✅ |
| Filter query keys + LinErpListFilterBar (no HOW) | ✅ |
| controlHint → SearchInput/Dropdown/Text | ✅ |
| Persist no-parent-json · migration none | ✅ |
| API catalog blocks + BFF proxy | ✅ |
| Implement gates TZ/XCO/SHARE recorded | ✅ |
| solution_confirm approve (autoApprove) | ✅ |
| **Cấm** MFE write / e2e / Step 4b | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| generatedAt | 2026-08-29T11:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |
| headerFingerprintPrior | sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14 |
| orchestratorSkillVersion | 2026.08.29.03 |
| orchestratorWorkflowVersion | 2026.08.29.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.29.03 |
| taskId | task_d16cef3e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=rechecked taskId=task_d16cef3e contentHashPriorDataAnaly=sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad -->
