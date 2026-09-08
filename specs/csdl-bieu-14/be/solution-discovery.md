# SA — Solution discovery — csdl-bieu-14 (CSDL Biểu 14 — Hệ thống ITS (GTTM))

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_c534e53a`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA · merge peer `so-ts-its-camera` / `road-assets` / ITS AiVision (`its-traffic-detect` · `its-anpr-overload`)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · section Vị trí tuyến + Thiết bị ITS + Hạ tầng gắn kèm) |
| status | `confirmed` |
| design_confirm | approve (`task_d302ab8a`) |
| solution_confirm | **approve** (autoApprove=ON · `task_c534e53a`) |
| domain_map | **Asset** (`csdl-bieu-14` → `asset` · **T-DM-01** add slug — live map có `csdl-bieu-01`…`13` · `csdl-so-sach` · **thiếu `14`**) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-14` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-systems` |
| peerSoTs | `so-ts-its-camera` · **cite only** · Q-PEER-LINK **none_p1** · **cấm** merge · **GAP-CSDL-CUC-11** · **GAP-BIEU14-PEER-ITS-01** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · section vị trí + TB ITS + HT gắn kèm |
| IdCode | `IT-yyyyMMdd-nnnn` (BE generate · prefix `IT` · **cấm** Guid) |
| catalogKind | `its-systems` (typed UiSchema · subset list) |
| controlHint | `specs/_data-analy/features/csdl-bieu-14-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-14-real-data.md` |
| design | `specs/csdl-bieu-14/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_c534e53a` |
| priorTask | `task_d302ab8a` (design completed) |
| updatedAt | `2026-09-05T15:05:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live (hub generic) | New (Biểu 14 typed) | Action |
|------|----------------------------|---------------------|--------|
| Form | 3 ô `detail*` polymorphic | Typed **21 cột** · Kind D Slideout · section Vị trí + TB ITS + HT | **GAP-BIEU14-TYPED-01** |
| Persist | shell `detail*` only | shell + **Schema_CsdlBieu14** 1:1 · **cấm** `DetailJson` · **cấm** 2 entity | migration Dev |
| Device* | missing | `deviceType` · `brand` · `techSpec` · `qtyOrLength` · `operatingStatus` | **GAP-BIEU14-DEV-01** · Q-DEVICE-SET keep_5 |
| Infra* | missing | `infraKind` · `clearanceM` · `infraQty` · `systemStatus` · `yearBuilt` | **GAP-BIEU14-INFRA-01** · Q-INFRA-SET keep_3 |
| GPS | missing | `gpsLat` · `gpsLng` Number | **GAP-BIEU14-GPS-01** |
| direction / side | free / demo | LOOKUP · side L/R/C/Both · direction lookup | **GAP-BIEU14-DIR-01** · Q-DIR |
| qtyOrLength | — | Number ≥0 | Q-QTY-UNIT **number** |
| List cols | generic | **subset** shared + deviceType/brand/operatingStatus/infraKind | Q-LIST-COLS |
| Route | hub-only `?resource=` | **alias_now** `/csdl-bieu-14` + hub NEW card | **GAP-BIEU14-ROUTE-01** · **GAP-BIEU14-HUB-01** |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep · **cấm** invent `api/v1/infra/*` |
| road | Text / roadName | SearchInput `road-route` · `roadCode` | **GAP-CSDL-ROAD-01** |
| province | FE LOOKUP_STATIC | **keep_static** P1 · master P2 | Q-PROV |
| manageUnit | Text | Text P1 · SearchInput org P2 | **GAP-CSDL-ORG-01** DEFER |
| Import/XLS | stub | OUT pack Biểu 14 · skip-bridge | **GAP-CSDL-XLS-01** |
| Peer Sổ TS | `so-ts-its-camera` / `road-assets?type=ITS_CAMERA` | cite only · **none_p1** · **cấm** merge | **GAP-CSDL-CUC-11** |
| ITS AiVision | `its-traffic-detect` · `its-anpr-overload` | **cấm** bind runtime | **GAP-BIEU14-PEER-ITS-01** |
| DOMAIN-MAP | thiếu slug `14` | add `csdl-bieu-14`→Asset | **GAP-BIEU14-DMAP-01** · Q-DMAP **add_now** |
| Map | none | none · gis deep-link only | **cấm** invent |
| Title | CTX | ctx_its «Biểu 14 — Hệ thống ITS (GTTM)» | Q-TITLE |
| Hub CUC-05 | Biểu 14 MISSING | NEW card formNo 14 · resource `its-systems` | **GAP-CSDL-CUC-05** đóng khi hub+API PASS |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `IT` · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-bieu-14` · hub reuse `CsdlSoSachPage` entry + **NEW card** formNo 14 |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=its-systems` → typed map (prefix tuple `IT` / «Hệ thống ITS (GTTM)») |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlBieu14Dtos.cs`** (typed create/update/detail) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence typed | **`CsdlBieu14Entity`** · table **`rmms_csdl_bieu14`** · FK `CatalogRecordId` 1:1 · **cấm** 2 entity · **cấm** merge entity Sổ TS / AiVision |
| Schema name | **`Schema_CsdlBieu14`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| DOMAIN-MAP | add row `csdl-bieu-14` → Asset (**T-DM-01**) |
| Lookup | Integration `GET /integration/road-routes/search` |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/its-systems` · invent parallel host · merge `so-ts-its-camera` · bind biểu Cục vào `road-assets` · bind ITS AiVision APIs.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-14` |
| UI hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| Peer Sổ TS | `so-ts-its-camera` · cite only · **none_p1** |
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
| Persist | shell + typed child 1:1 · Device*/Infra*/Gps*/Direction **flat columns** · **cấm** parent `*Json` · **cấm** chỉ 3 ô detail* · **cấm** 2 entity |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS import/export OUT · org SearchInput P2 · map canvas · Step 4b @ SA · peer toolbar link · AiVision bind |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table · **không** nhét 21 cột vào DetailSpec JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · section TB+HT · **cấm** Full-page |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | **không** filter `fromDate`/`toDate` business · UpdatedAt display-only | PO inventory không có date range |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlBieu14Entity` : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-05T15:05:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H · **no peer toolbar** | list | API-01 list `?resource=its-systems` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 · Z2 Thiết bị ITS · Z3 Hạ tầng gắn kèm | create | API-03 POST |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new IT- code) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-HUB-ENTRY | hub NEW card formNo 14 | — | same list API · QS resource |
| S-SKIP-PEER | — | — | cite `so-ts-its-camera` · **cấm** merge / toolbar P1 · **cấm** AiVision |
| S-SKIP-MAP | toolbar → gis | — | deep-link only · **cấm** invent canvas |
| Lookup road | SearchInput | filter + form | API-LKP-01 |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=its-systems` + filters | — | page=1 on filter change · subset cols |
| create | empty typed form · Z1 vị trí/GPS · Z2 TB · Z3 HT | POST body `resource` + typed fields | IdCode `IT-` BE · Line kmFrom/kmTo · qty/clearance/infraQty/year ≥0 |
| edit | GET `/{id}` (shell+typed join) | PUT `/{id}` | replace typed row 1:1 |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `its-systems` |
| `search` | SearchTextInput | mã · đường · brand · notes |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 |
| `operatingStatus` | Dropdown LOOKUP_STATIC | tot/tb/kem/hong hoặc on/off · align Excel |
| `deviceType` | Dropdown LOOKUP_STATIC | cáp / CCTV / ANPR / VMS / tủ (keep_5) |
| `roadCode` | SearchInput road-route | Integration search |
| `kmFrom` / `kmTo` | Number | Line range filter |
| `side` | Dropdown LOOKUP_STATIC | L / R / C / Both |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (device · infra · gps · shell)

### Header (21) — SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

### Shell fields (catalog record)

| uiField | DB column (shell) | Type | Notes |
|---------|-------------------|------|-------|
| `code` | `Code` | `varchar(32)` | IdCode `IT-yyyyMMdd-nnnn` BE · Text ro |
| `roadCode` | `RoadCode` | `varchar(32)` | SearchInput road-route |
| `roadName` | `RoadName` | `nvarchar(256)` | display from LKP |
| `province` | `Province` | `varchar(16)` | LOOKUP_STATIC keep_static P1 |
| `kmFrom` / `kmTo` | `KmFrom` / `KmTo` | `decimal(10,3)` | Line Number |
| `side` | `Side` | `varchar(8)` | L/R/C/Both · **cấm** free-text |
| `manageUnit` | `ManageUnit` | `nvarchar(256)` | Text P1 · org P2 |
| `notes` | `Notes` | `nvarchar(max)` | Textarea |
| `resource` | `Resource` | const | `its-systems` |
| `companyCode` | `CompanyCode` | tenant | share_tenant |
| `isActive` | `IsActive` | soft-delete | — |
| `updatedAt` | `UpdatedAt` | datetime | display-only |

### Typed — Z1 GPS/direction · Z2 Device* · Z3 Infra*

| uiField | DB column | Type | Rule |
|---------|-----------|------|------|
| `direction` | `Direction` | `varchar(32)` | LOOKUP · Q-DIR **lookup** |
| `gpsLat` | `GpsLat` | `decimal(10,7)` NULL | Number · GPS |
| `gpsLng` | `GpsLng` | `decimal(10,7)` NULL | Number · GPS |
| `deviceType` | `DeviceType` | `varchar(32)` | LOOKUP keep_5 · required create |
| `brand` | `Brand` | `nvarchar(128)` | Text |
| `techSpec` | `TechSpec` | `nvarchar(max)` | Textarea |
| `qtyOrLength` | `QtyOrLength` | `decimal(18,2)` NOT NULL DEFAULT 0 | Number ≥0 · Q-QTY-UNIT **number** |
| `operatingStatus` | `OperatingStatus` | `varchar(16)` | LOOKUP · list filter |
| `infraKind` | `InfraKind` | `varchar(32)` | LOOKUP keep_3 |
| `clearanceM` | `ClearanceM` | `decimal(18,2)` NULL | Number ≥0 |
| `infraQty` | `InfraQty` | `decimal(18,2)` NULL | Number ≥0 |
| `systemStatus` | `SystemStatus` | `varchar(16)` | LOOKUP · align operatingStatus hoặc riêng |
| `yearBuilt` | `YearBuilt` | `int` NULL | Number · năm ≥ 1900 · ≤ current+1 |

**Validation (BE):** create/update require `deviceType` · `qtyOrLength ≥ 0` · `clearanceM/infraQty` null-or-≥0 · GPS pair both-null or both set · yearBuilt range. Business empty reject 422 khi thiếu `deviceType`.

**LOOKUP sets (PO locked):**
- deviceType keep_5: cáp / CCTV / ANPR / VMS / tủ
- infraKind keep_3: cần vươn / long môn / đế BT
- side: L / R / C / Both
- direction: LOOKUP (align Excel / demo sides-dir set — **cấm** invent ngoài cite)

**Cấm:** invent `api/v1/infra/*` · parent `*Json` · Guid IdCode · merge so-ts-its-camera / road-assets / AiVision entity · expand device/infra set không confirm.

### List subset cols (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `deviceType` · `brand` · `operatingStatus` · `infraKind`

### Empty / error

| Case | UX |
|------|-----|
| Empty list | «Chưa có hệ thống ITS» · CTA Tạo mới |
| 422 thiếu resource / deviceType | toast |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · refresh |

---

## 3. API contracts (giữ prefix · widen typed)

| ID | Method | Path | Body / query |
|----|--------|------|--------------|
| API-01 | GET | `/api/v1/asset/csdl-records` | `?resource=its-systems` + filters · page/pageSize |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell + typed join |
| API-03 | POST | `/api/v1/asset/csdl-records` | `resource` + shell + typed 21 |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | replace typed 1:1 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput |
| BFF | mirror | `web-bff/api/v1/asset/csdl-records` | proxy only |

DTO: `CsdlBieu14CreateDto` / `UpdateDto` / `DetailDto` — camelCase uiField map 1:1 DB Pascal (`DeviceType`↔`deviceType` · `GpsLat`↔`gpsLat` · `InfraKind`↔`infraKind` · …).

---

## 4. Persistence / Schema_CsdlBieu14

| Item | Spec |
|------|------|
| Table | `rmms_csdl_bieu14` |
| Entity | `CsdlBieu14Entity` (alias doc `ItsSystem` — **không** domain/API riêng) |
| FK | `CatalogRecordId` UNIQUE → `rmms_csdl_catalog_records.Id` |
| Columns | Direction · GpsLat · GpsLng · DeviceType · Brand · TechSpec · QtyOrLength · OperatingStatus · InfraKind · ClearanceM · InfraQty · SystemStatus · YearBuilt · audit via shell |
| Migration | Dev / Step 4b only · name `Schema_CsdlBieu14` |
| Index | `(CatalogRecordId)` unique · list filter via shell + typed DeviceType/OperatingStatus/InfraKind |

**Cấm** `DetailJson` / `*Json` trên parent · **cấm** chạy migration ở SA.

---

## 5. FE / UiSchema

| Surface | Spec |
|---------|------|
| Route alias | `/csdl-bieu-14` → typed list page (reuse hub services BASE) |
| Hub | NEW card `?resource=its-systems` · formNo 14 · «Hệ thống ITS (GTTM)» |
| UiSchema catalogKind | `its-systems` typed 21 · section TB + HT |
| Form | Kind D Slideout · `data-form-cols=2` · Z1 shell vị trí + GPS/dir · Z2 Thiết bị ITS · Z3 Hạ tầng gắn kèm + notes |
| Filter bar | HARD · search must work · **cấm** nút Tìm |
| Peer | cite only · **none_p1** · **cấm** merge toolbar · **cấm** AiVision |
| Map | none |

---

## 6. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-DM-01 | Dev/BE | DOMAIN-MAP add `csdl-bieu-14` → Asset |
| T-BE-01 | Dev | `CsdlBieu14Entity` + `Schema_CsdlBieu14` migration |
| T-BE-02 | Dev | `CsdlBieu14Dtos` create/update/detail |
| T-BE-03 | Dev | `CsdlCatalogService` branch `its-systems` typed map |
| T-BE-04 | Dev | IdCode `IT-` generate · validation deviceType · qty≥0 · GPS pair |
| T-BE-05 | Dev | List subset projection + join typed |
| T-BE-06 | Dev | Soft-delete + tenant share_tenant |
| T-BFF-01 | Dev | BFF proxy widen (no logic) |
| T-FE-01 | Dev | Route alias `/csdl-bieu-14` |
| T-FE-02 | Dev | Kind B list + filter-bar HARD |
| T-FE-03 | Dev | Kind D Slideout 21 · Z2 TB · Z3 HT · LeaveConfirm |
| T-FE-04 | Dev | SearchInput road-route · static province/deviceType/side/operatingStatus/infraKind |
| T-FE-05 | Dev | Empty copy VN · hub NEW card formNo 14 · **cấm** peer/AiVision merge |
| T-FE-06 | Dev | FormMode wire list/C/E/V/Copy/Delete |
| T-OUT-01 | Dev | XLS import/export OUT stub |
| T-OUT-02 | Dev | org SearchInput P2 DEFER |

---

## 7. PO decisions locked (no reopen)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-DIR | lookup |
| Q-QTY-UNIT | number |
| Q-DEVICE-SET | keep_5 |
| Q-INFRA-SET | keep_3 |
| Q-MANAGE | trail_p2 |
| Q-PREFIX | IT |
| Q-LIST-COLS | subset |
| Q-TITLE | ctx_its |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-SO09 | none_p1 |

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API
- [x] Entity + Schema_CsdlBieu14 (spec only)
- [x] BFF proxy vs API
- [x] Gates tz/xco/share recorded
- [x] solution_confirm approve
- [x] **cấm** Write MFE · **cấm** Step 4b · **cấm** ERP.* · **cấm** invent infra · **cấm** merge so-ts-its-camera / road-assets / AiVision
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-14.md` · T-* · gates |
| Dev | Schema_CsdlBieu14 · typed DTO · alias page · Slideout 21 · hub NEW card |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-05T15:05:00.000Z |
| versionGate | aligned |
| taskId | task_c534e53a |
| packKind | list |
| changeScope | new_page |
