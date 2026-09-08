# SA — Solution discovery — csdl-bieu-11 (CSDL Biểu 11 — Hệ thống chiếu sáng)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_e96d7cf9`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** lưới + NLMT) |
| status | `confirmed` |
| design_confirm | approve (`task_94e69c1a`) |
| solution_confirm | **approve** (autoApprove=ON · `task_e96d7cf9`) |
| domain_map | **Asset** (`csdl-bieu-11` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`10` · `csdl-so-sach` · thiếu `11`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-11` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| peerSoTs | **`so-ts-lighting`** toolbar deep-link · **≠** merge form · **≠** `road-assets` · qty ≠ điểm · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-yyyyMMdd-nnnn` (BE generate · live prefix `LT` · **cấm** Guid) |
| catalogKind | `lighting-systems` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| design | `specs/csdl-bieu-11/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_e96d7cf9` |
| priorTask | `task_94e69c1a` (design completed) |
| updatedAt | `2026-09-05T12:30:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 11 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **24 cột** · Kind D Slideout · **2 section** lưới + NLMT | **GAP-BIEU11-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu11** 1:1 · **cấm** `DetailJson` · **cấm** Solar child table P1 | migration Dev |
| LED qty | missing / generic | `gridLed600/240/150/125` Number · **allow_zero** | **GAP-BIEU11-GRID-01** · Q-LED-ZERO |
| gridStatus | free / missing | LOOKUP_STATIC **align_status** tot/tb/kem/hong | **GAP-BIEU11-GRID-STATUS-01** |
| Grid qty | missing | pole / cabinet / TBA typed Number | **GAP-BIEU11-GRID-QTY-01** |
| Cabinet | ambiguous | **split** `cabinetCount` (lưới) ≠ `solarCabinetCount` (NLMT) | Q-CABINET |
| Solar | missing / dump điểm | **6 field** qty optional · **cấm** dump so-ts điểm | **GAP-BIEU11-SOLAR-01** · Q-SOLAR-REQ |
| Section UX | flat | 2 khối lưới + NLMT | **GAP-BIEU11-BLOCK-01** |
| List cols | generic | **subset** shared + LED4 + gridStatus + pole/cabinet + status | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-11` + hub | **GAP-BIEU11-ROUTE-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack Biểu 11 · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | — | toolbar deep-link `so-ts-lighting` · **≠** merge · qty ≠ điểm | **GAP-CSDL-CUC-11** · Q-PEER |
| Map | none | none · gis deep-link only | **cấm** invent |
| Title | demo | keep_demo «Biểu 11 — Hệ thống chiếu sáng» | Q-TITLE |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix live `LT` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-11` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=lighting-systems` → typed map (live prefix tuple `LT` / «Hệ thống chiếu sáng») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu11Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu11Entity`** · table **`rmms_csdl_bieu11`** · FK `CatalogRecordId` 1:1 · **cấm** Solar child table · **cấm** 2 entity |
| Schema name | **`Schema_CsdlBieu11`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-11` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · merge Sổ TS form · bind biểu Cục vào `road-assets` · dump điểm→qty.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-11` |
| UI hub | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| Peer Sổ TS | toolbar → `/so-ts/so-ts-lighting` (deep-link) |
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
| Persist | shell + typed child 1:1 · solar **flat columns** · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** 2 entity · **cấm** Solar child P1 |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 24 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · 2 section · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu11Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T12:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · peer toolbar | list | API-01 list `?resource=lighting-systems` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2b NLMT | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new LT- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub card | — | same list API · QS resource · label Biểu 11 |
| S-PEER | toolbar → so-ts-lighting | — | deep-link only · **cấm** merge ROW |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=lighting-systems` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · 2 section | POST body `resource` + typed fields | IdCode `LT-` BE · Line kmFrom/kmTo · LED allow_zero · solar optional |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `lighting-systems` |
| `search` | SearchTextInput | mã · đường · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `status` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (grid · solar · shell)

### Header (24) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

### Shell fields (catalog record)

| uiField | DB column (shell) | Type | Notes |
|---------|-------------------|------|-------|
| `code` | `Code` | `varchar(32)` | IdCode `LT-yyyyMMdd-nnnn` BE · Text ro |
| `roadCode` | `RoadCode` | `varchar(32)` | SearchInput road-route |
| `roadName` | `RoadName` | `nvarchar(256)` | display from LKP |
| `province` | `Province` | `varchar(16)` | LOOKUP_STATIC keep_static P1 |
| `kmFrom` / `kmTo` | `KmFrom` / `KmTo` | `decimal(10,3)` | Line Number |
| `side` | `Side` | `varchar(8)` | L/R/C/Both |
| `status` | `Status` | `varchar(16)` | tot/tb/kem/hong |
| `manageUnit` | `ManageUnit` | `nvarchar(256)` | Text P1 · org P2 |
| `notes` | `Notes` | `nvarchar(max)` | Textarea |
| `resource` | `Resource` | const | `lighting-systems` |
| `companyCode` | `CompanyCode` | tenant | share_tenant |
| `isActive` | `IsActive` | soft-delete | — |
| `updatedAt` | `UpdatedAt` | datetime | display-only |

### Typed — section lưới (Grid*)

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `gridLed600` | `GridLed600` | `int` NOT NULL DEFAULT 0 | Number · **allow_zero** · ≥0 |
| `gridLed240` | `GridLed240` | `int` NOT NULL DEFAULT 0 | same |
| `gridLed150` | `GridLed150` | `int` NOT NULL DEFAULT 0 | same |
| `gridLed125` | `GridLed125` | `int` NOT NULL DEFAULT 0 | same |
| `gridStatus` | `GridStatus` | `varchar(16)` | LOOKUP **align_status** tot/tb/kem/hong · nullable OK nếu empty row |
| `gridPoleCount` | `GridPoleCount` | `int` NOT NULL DEFAULT 0 | Number ≥0 |
| `cabinetCount` | `CabinetCount` | `int` NOT NULL DEFAULT 0 | **lưới only** · split ≠ solar |
| `substationCount` | `SubstationCount` | `int` NOT NULL DEFAULT 0 | Number ≥0 |

### Typed — section NLMT (Solar*) · optional_flat

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `solarPoleCount` | `SolarPoleCount` | `int` NOT NULL DEFAULT 0 | optional · allow 0 |
| `solarControllerCount` | `SolarControllerCount` | `int` NOT NULL DEFAULT 0 | optional |
| `solarPanel240Wp` | `SolarPanel240Wp` | `int` NOT NULL DEFAULT 0 | optional |
| `solarLamp100W` | `SolarLamp100W` | `int` NOT NULL DEFAULT 0 | optional |
| `solarBattery145Ah` | `SolarBattery145Ah` | `int` NOT NULL DEFAULT 0 | optional |
| `solarCabinetCount` | `SolarCabinetCount` | `int` NOT NULL DEFAULT 0 | **NLMT tủ** · split ≠ cabinetCount |

**Cấm:** dump điểm Sổ TS → qty · Solar child entity P1 · parent `*Json` · Guid IdCode.

### List subset cols (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `gridLed600`–`gridLed125` · `gridStatus` · `gridPoleCount` · `cabinetCount` · `status` · (solar* form-only P1)

### Empty / error

| Case | UX |
|------|-----|
| Empty list | «Chưa có hệ thống chiếu sáng» · CTA Tạo mới |
| 422 thiếu resource | toast |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · refresh |

---

## 3. API contracts (giữ prefix · widen typed)

| ID | Method | Path | Body / query |
|----|--------|------|--------------|
| API-01 | GET | `/api/v1/asset/csdl-records` | `?resource=lighting-systems` + filters · page/pageSize |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell + typed join |
| API-03 | POST | `/api/v1/asset/csdl-records` | `resource` + shell + typed 24 |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | replace typed 1:1 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput |
| BFF | mirror | `web-bff/api/v1/asset/csdl-records` | proxy only |

DTO: `CsdlBieu11CreateDto` / `UpdateDto` / `DetailDto` — camelCase uiField map 1:1 DB Pascal.

---

## 4. Persistence / Schema_CsdlBieu11

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu11` |
| Entity | `CsdlBieu11Entity` |
| FK | `CatalogRecordId` UNIQUE → `rmms_csdl_catalog_records.Id` |
| Columns | GridLed*×4 · GridStatus · GridPoleCount · CabinetCount · SubstationCount · Solar*×6 · audit via shell |
| Migration | Dev / Step 4b only · name `Schema_CsdlBieu11` |
| Index | `(CatalogRecordId)` unique · list filter via shell indexes |

**Cấm** `DetailJson` / `*Json` trên parent · **cấm** chạy migration ở SA.

---

## 5. FE / UiSchema

| Surface | Spec |
|---------|------|
| Route alias | `/csdl-bieu-11` → typed list page (reuse hub services BASE) |
| Hub | `?resource=lighting-systems` entry |
| UiSchema catalogKind | `lighting-systems` typed 24 · 2 section |
| Form | Kind D Slideout · `data-form-cols=2` · Z1 shell · Z2 lưới · Z2b NLMT · Z3 status/notes |
| Filter bar | HARD · search must work · **cấm** nút Tìm |
| Peer | toolbar deep-link `so-ts-lighting` |
| Map | none |

---

## 6. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-DM-01 | Dev/BE | DOMAIN-MAP add `csdl-bieu-11` → Asset |
| T-BE-01 | Dev | `CsdlBieu11Entity` + `Schema_CsdlBieu11` migration |
| T-BE-02 | Dev | `CsdlBieu11Dtos` create/update/detail |
| T-BE-03 | Dev | `CsdlCatalogService` branch `lighting-systems` typed map |
| T-BE-04 | Dev | IdCode `LT-` generate · validation LED/solar ≥0 |
| T-BE-05 | Dev | List subset projection + join typed |
| T-BE-06 | Dev | Soft-delete + tenant share_tenant |
| T-BFF-01 | Dev | BFF proxy widen (no logic) |
| T-FE-01 | Dev | Route alias `/csdl-bieu-11` |
| T-FE-02 | Dev | Kind B list + filter-bar HARD |
| T-FE-03 | Dev | Kind D Slideout 24 · 2 section · LeaveConfirm |
| T-FE-04 | Dev | SearchInput road-route · static province/status/side/gridStatus |
| T-FE-05 | Dev | Peer toolbar `so-ts-lighting` · empty copy VN |
| T-FE-06 | Dev | FormMode wire list/C/E/V/Copy/Delete |
| T-OUT-01 | Dev | XLS import/export OUT stub |
| T-OUT-02 | Dev | org SearchInput P2 DEFER |

---

## 7. PO decisions locked (no reopen)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-GRID-STATUS | align_status |
| Q-LED-ZERO | allow_zero |
| Q-SOLAR-REQ | optional |
| Q-CABINET | split |
| Q-LIST-COLS | subset |
| Q-PEER | toolbar |
| Q-TITLE | keep_demo |

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API
- [x] Entity + Schema_CsdlBieu11 (spec only)
- [x] BFF proxy vs API
- [x] Gates tz/xco/share recorded
- [x] solution_confirm approve
- [x] **cấm** Write MFE · **cấm** Step 4b · **cấm** ERP.*
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-11.md` · T-* · gates |
| Dev | Schema_CsdlBieu11 · typed DTO · alias page · Slideout 24 · 2 section |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-05T12:30:00.000Z |
| versionGate | aligned |
| taskId | task_e96d7cf9 |
| packKind | list |
| changeScope | new_page |
