# SA — Solution discovery — csdl-so-06 (CSDL Sổ 06 — QL cầu / phiếu KT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_765e52bc`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout** · integrate-file-upload-web (photoIds)  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · runtime `/api/v1/bridge-inspections` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid` **fixed-20**) |
| status | `confirmed` |
| design_confirm | approve (`task_8dc712d5`) |
| solution_confirm | **approve** (autoApprove=ON · `task_765e52bc`) |
| domain_map | **Asset** (`csdl-so-06` → `asset` · **T-DM-01** add slug — DOMAIN-MAP chưa có row) |
| sa_tz_gate | **`tz_list_and_form`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-06` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| peerSoTs | Biểu 2 `bridges` / passport deep-link · **cấm** merge form |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `bridge-inspections` |
| formNo | `06` · title «Sổ 06 — QL cầu / phiếu KT» · hub card «Phiếu KT cầu» đến T-REN-01 |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `bridge-inspections` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-06-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-06-real-data.md` |
| design | `specs/csdl-so-06/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_765e52bc` |
| priorTask | `task_8dc712d5` (design completed) |
| updatedAt | `2026-09-06T03:40:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`new_page`)

| Area | Current live | New (Sổ 06 typed) | Action |
|------|--------------|-------------------|--------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-06 header + **20 fixed** lines + `photoIds` | **GAP-SO06-TYPED-01** · **GAP-SO06-FIXED20-01** · **GAP-CSDL-CUC-03** |
| List cols | generic road/km/detail | bridgeName · road · kmStation · inspectedAt · inspector · status | typed list projection |
| Route | hub-only | **alias** `/csdl-so-06` + hub | **GAP-SO06-ROUTE-01** |
| formNo label | Live «Phiếu KT cầu» | Title Sổ 06 · hub rename **DEFER** T-REN-01 · key giữ | **GAP-SO06-FORMNO-01** |
| Persist | shell + flat book entries | shell + **Schema_CsdlSo06** + widen entries · **cấm** `DetailJson`/`EntriesJson` | migration Dev |
| API prefix | `api/v1/asset/csdl-records` | **giữ** · widen typed DTO | keep · **GAP-SO06-APILEGACY-01** |
| Legacy doc API | `/api/v1/bridge-inspections` (cite §3.5) | **không** ship path runtime | doc-only |
| road / bridge | Text / generic | SearchInput `road-route` + `bridges` peer | **GAP-CSDL-ROAD-01** · **GAP-SO06-PEER-01** |
| province | FE LOOKUP_STATIC | **keep_static** 5 tỉnh P1 · master P2 | **GAP-CSDL-PROV-01** |
| status | LOOKUP_STATIC | `draft\|done\|cancelled` · **cấm** tot/tb/kem/hong | Q-STATUS |
| manageUnit | Text | Text P1 · org-unit **DEFER P2** | **GAP-CSDL-ORG-01** |
| Media | không | FileService `photoIds` / dòng · optional · max 5 | **GAP-SO06-MEDIA-01** |
| Priority | — | required khi `damageDesc` ≠ empty · `quarter\|before-storm\|immediate` | Q-PRIORITY |
| Peer | không typed | SearchInput/deep-link Biểu 2 · passportRef | **GAP-SO06-PEER-01** |
| Import/XLS | stub | **OUT** pack | **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed lines = report source READY | **GAP-RPT-SRC-CSDL-01** |
| Map | none | none · **cấm** invent map | — |
| DOMAIN-MAP | thiếu row | add `csdl-so-06` → Asset | **GAP-SO06-DMAP-01** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · route alias `/csdl-so-06` · hub reuse `CsdlSoSachPage` entry |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `resource=bridge-inspections` → typed map + seed 20 |
| Models / DTO | `CsdlCatalogDtos.cs` + **`CsdlSo06Dtos.cs`** (typed create/update/detail + entries) |
| Persistence shell | `CsdlCatalogRecordEntity` · `rmms_csdl_catalog_records` |
| Persistence entries | `CsdlBookEntryEntity` · `rmms_csdl_book_entries` · **widen** typed cols |
| Persistence typed header | **`CsdlSo06Entity`** · table **`rmms_csdl_so06`** · FK `CatalogRecordId` 1:1 |
| Schema name | **`Schema_CsdlSo06`** (migration Dev / Step 4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · typed page **reuse** BASE |
| File | FileService integrate-file-upload-web · `photoIds` guid[] / dòng · **cấm** invent file API |
| DOMAIN-MAP | add row `csdl-so-06` → Asset |
| Lookup | Integration `GET /integration/road-routes/search` · bridges peer Biểu 2 |

**Cấm** `ERP.Service.*` · invent `api/v1/infra/*` · invent parallel host · runtime `/api/v1/bridge-inspections` · merge Biểu 2 / Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-06` |
| UI hub | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| Peer Biểu 2 | deep-link bridges / passport · **không** merge ROW |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |
| road-route | `GET /integration/road-routes/search` |
| bridges LKP | Biểu 2 / Integration search (**cite peer** · Text fallback nếu UNREADY) |
| file | FileService upload (SSOT integrate-file-upload-web) |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API host | `Domains/Asset/` · widen existing controller |
| BFF | proxy only = yes |
| MFE | `Linm.Web.RMMS.Asset` · new list page alias + typed Slideout + fixed-20 entries |
| Persist | shell + typed header 1:1 + child entries · **cấm** parent `*Json` · **cấm** chỉ col1–3 runtime |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (reuse hub · Auth debt) |
| Out of pack | XLS OUT · org SearchInput P2 · map canvas · Step 4b @ SA · hub rename T-REN-01 |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid · LeaveConfirmModal · SearchInput · FileMulti — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Persist | `no-parent-json-field` | typed table + entry cols · **không** nhét entries/photoIds blob vào parent JSON |
| BFF | proxy only | no business logic |
| Filter | `filter-bar-layout-hard` | 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng |
| Form | `slideout-form-layout` | footer_actions_only · `data-form-cols=2` · **cấm** Full-page |
| File | integrate-file-upload-web | `photoIds` · max 5 / dòng · optional |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_list_and_form`** | List `fromDate`/`toDate` filter **inspectedAt** · form `inspectedAt` Date | FE local→UTC bound · BE store UTC · list AND |
| XCO | **`xco_get_only`** | GET `/{id}` · View Slideout | AllowedCompanyIds |
| SHARE | **`share_tenant`** | shell + `CsdlSo06Entity` + entries : tenant via parent | `CompanyCode` · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T03:40:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?resource=bridge-inspections` |
| S-FORM-CREATE | Kind D Slideout Z1–Z3 | create | API-03 POST (+ BE/FE seed 20) |
| S-FORM-EDIT | Kind D Slideout | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | Kind D Slideout | view | API-02 GET |
| S-FORM-COPY | Kind D Slideout | create | API-02 GET + API-03 POST (clear id · new SO- · keep/reseed 20) |
| S-ACT-DELETE | Confirm modal | — | API-05 DELETE soft |
| S-ENTRIES | `inline_grid` **fixed-20** | C/E/V | nested `entries[]` · **cấm** add/remove |
| S-HUB-ENTRY | hub card | — | same list API · QS resource |
| S-SKIP-MAP | toolbar → gis | — | deep-link only |
| Lookup road | SearchInput | filter + form | API-LKP-01 |
| Lookup bridge | SearchInput | filter + form | API-LKP-02 |
| File / dòng | FileMulti | C/E | FileService · `photoIds` |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?resource=bridge-inspections` + filters | — | page=1 on filter change |
| create | empty typed form + **seed 20** partCode/partName | POST body `resource` + typed header + `entries[20]` | IdCode `SO-` BE · **cấm** empty entries |
| edit | GET `/{id}` (shell+typed+entries) | PUT `/{id}` | replace typed 1:1 · replace-all 20 entries · **cấm** đổi partCode |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST | new IdCode · copy line fields · keep seed partCodes |
| delete | — | DELETE soft | confirm · reload list |

### List filter query keys (`LinErpListFilterBar`)

| Query key | UI control | Source |
|-----------|------------|--------|
| `resource` | const / QS | required `bridge-inspections` |
| `search` | SearchTextInput | mã · cầu · đường · người KT |
| `province` | Dropdown LOOKUP_STATIC | FE PROVINCES P1 (5 tỉnh) |
| `status` | Dropdown LOOKUP_STATIC | draft/done/cancelled |
| `roadCode` | SearchInput road-route | Integration search |
| `bridgeId` | SearchInput bridges | peer Biểu 2 |
| `fromDate` / `toDate` | Date | filter **inspectedAt** · **TZ** |
| `page` / `pageSize` | pagination | 50/100/200/500 |

---

## 2. Form data analysis (typed header + entries)

### Shell vs typed split

| Store on shell (`rmms_csdl_catalog_records`) | Store on typed (`rmms_csdl_so06`) | Store on entries (`rmms_csdl_book_entries` widen) |
|---------------------------------------------|----------------------------------|--------------------------------------------------|
| Resource, Code, RoadCode, RoadName, Province, Status, Notes, IsActive, timestamps | BridgeId, BridgeName, KmStation, ManageUnit, PassportRef, InspectedAt, Inspector, AdminArea | LineNo, PartCode, PartName, DamageDesc, ProposedActionQty, Priority, PhotoIds, Notes |
| DetailPrimary/Spec/Extra · Col1–3 | — | **deprecated for bridge-inspections** — stop writing runtime; migrate legacy → typed when present |

### Typed DTO shape (API body / response widen) — cite real-data §B

`CsdlSo06Dto`:

- Header: `resource`, `code`, `bridgeId`, `bridgeName`, `roadCode`, `roadName`, `kmStation`, `manageUnit`, `passportRef`, `inspectedAt`, `inspector`, `province`, `adminArea`, `status`, `notes`
- `entries[]` (exactly **20**): `lineNo`, `partCode`, `partName`, `damageDesc`, `proposedActionQty`, `priority`, `photoIds`, `notes`
- Validation: `priority` required when `damageDesc` trimmed ≠ empty · `photoIds` optional max 5 · **cấm** add/remove / đổi `partCode` seed

List projection: `code`, `bridgeName`, `roadCode`/`roadName`, `kmStation`, `inspectedAt`, `inspector`, `status`, `province`, `updatedAt`.

### Seed 20 bộ phận (cố định · cite control-hint / §3.5)

| # | partCode | partName VN |
|---|----------|-------------|
| 1 | `Signage` | Biển báo |
| 2 | `Approach10m` | Đường dẫn 10m |
| 3 | `Lighting` | Chiếu sáng |
| 4 | `ExpansionJoint` | Khe co giãn |
| 5 | `DeckMarking` | Vạch kẻ mặt cầu |
| 6 | `DeckDrainage` | Thoát nước mặt cầu |
| 7 | `Railing` | Lan can |
| 8 | `Abutment` | Mố |
| 9 | `AbutmentCone` | Nón mố |
| 10 | `RiverTraining` | Công trình chỉnh trị |
| 11 | `Pier` | Trụ |
| 12 | `Bearing` | Gối |
| 13 | `DeckSlab` | Bản mặt cầu |
| 14 | `MainGirder` | Dầm chính |
| 15 | `CrossGirder` | Dầm ngang |
| 16 | `LongitudinalBrace` | Liên kết dọc |
| 17 | `Arch` | Vòm |
| 18 | `RiverSignage` | Biển báo sông |
| 19 | `ClearanceEncroachment` | Xâm phạm khổ giới hạn |
| 20 | `AttachedDevices` | Thiết bị gắn kèm |

### Field map (ui → dto → db) — cite §B · **cấm** đoán

| uiField | dtoField | Persist |
|---------|----------|---------|
| resource | Resource | shell · `bridge-inspections` |
| code | Code | shell · SO- |
| bridgeId / bridgeName | BridgeId / BridgeName | typed |
| roadCode / roadName | RoadCode / RoadName | shell |
| kmStation | KmStation | typed |
| manageUnit | ManageUnit | typed · Text P1 |
| passportRef | PassportRef | typed · deep-link Biểu 2 |
| inspectedAt | InspectedAt | typed · UTC |
| inspector | Inspector | typed |
| province / adminArea | Province / AdminArea | shell / typed |
| status | Status | shell · draft/done/cancelled |
| notes | Notes | shell |
| entries[].lineNo | LineNo | entry 1–20 |
| entries[].partCode / partName | PartCode / PartName | entry · seed ro |
| entries[].damageDesc | DamageDesc | entry |
| entries[].proposedActionQty | ProposedActionQty | entry |
| entries[].priority | Priority | entry · LOOKUP_STATIC |
| entries[].photoIds | PhotoIds | entry · guid[] FileService |
| entries[].notes | Notes | entry |
| isActive | IsActive | shell soft-delete |
| updatedAt | UpdatedAt | shell audit UTC |

### UiSchema

catalogKind `bridge-inspections` typed — **cấm** generic 3-col-only schema làm SSOT form.

---

## 3. API catalog

| ID | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=bridge-inspections&…` | list paged · inspectedAt from/to |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | shell+typed+entries[20] |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body resource + typed + seed 20 |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all 20 |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | SearchInput road |
| API-LKP-02 | GET | bridges peer / Integration search | SearchInput bridge · Text fallback UNREADY |
| API-FILE-01 | FileService upload | integrate-file-upload-web | `photoIds` · **cấm** invent |

API mirror: `api/v1/asset/…`. **Cấm** invent mới prefix · **cấm** runtime `/api/v1/bridge-inspections`.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_so06` |
| Typed PK | Guid Id |
| Typed FK | `CatalogRecordId` unique → `rmms_csdl_catalog_records.Id` |
| Typed cols | BridgeId · BridgeName · KmStation · ManageUnit · PassportRef · InspectedAt · Inspector · AdminArea |
| Entries widen | PartCode · PartName · DamageDesc · ProposedActionQty · Priority · PhotoIds (json/array) · Notes · LineNo |
| Indexes | (CatalogRecordId) unique · list via shell · inspectedAt range via typed · (BridgeId) filter |
| Migration name | `Schema_CsdlSo06` |
| Seed rule | Create always materialize 20 lines from seed table above |
| Backfill | map detail*/col1–3 → typed when present · **không** invent partCode ngoài seed |
| **SA** | document only · **cấm** chạy migration |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward query/body · no remap business |
| Validation | API service (required resource, bridgeId/bridgeName, roadCode, kmStation, manageUnit, inspectedAt, inspector, entries exactly 20, priority-when-damage, IdCode) |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 thiếu resource · 404 detail · upload fail toast · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-DM-01 | DOMAIN-MAP add `csdl-so-06` → Asset |
| T-BE-01 | Entity `CsdlSo06Entity` + EF config |
| T-BE-02 | Migration `Schema_CsdlSo06` + widen `CsdlBookEntryEntity` (Dev/4b) |
| T-BE-03 | DTO typed + service map join shell↔typed↔entries · seed 20 · stop detail*/col1–3 write |
| T-BE-04 | IdCode `SO-` generator |
| T-BE-05 | List filter `roadCode`/`bridgeId` + `fromDate`/`toDate` on inspectedAt (TZ) |
| T-BE-06 | Validate priority-when-damage · photoIds max 5 · fixed partCode |
| T-BFF-01 | verify proxy (no logic) |
| T-FE-01 | route alias `/csdl-so-06` + page Kind B |
| T-FE-02 | typed Slideout header + FormMode↔API |
| T-FE-03 | entries `inline_grid` fixed-20 · FileMulti photoIds · **cấm** add/remove |
| T-FE-04 | FilterBar · SearchInput road+bridge · LOOKUP_STATIC · **cấm** nút Tìm |
| T-FE-05 | LeaveConfirm · Copy · soft delete · History modal reuse |
| T-FE-06 | hub entry `?resource=bridge-inspections` · deep-link Biểu 2 · **cấm** merge form |
| T-FE-07 | UiSchema catalogKind `bridge-inspections` typed |
| T-OUT-01 | XLS / org SearchInput P2 / hub rename T-REN-01 — OUT/DEFER (không block P1) |

---

## 7. Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-PRIORITY · Q-MEDIA · Q-BRIDGE · Q-PROV · Q-ORG · Q-DMAP chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Biểu 2 / Sổ TS  
- runtime `/api/v1/bridge-inspections` · add/remove >20 · đổi partCode seed  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e ở role SA  
- parent `*Json` · re-scan demo · DOMAIN invent ngoài Asset  

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
| writtenAt | 2026-09-06T03:40:00.000Z |
| contentHashPrior | sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a |
