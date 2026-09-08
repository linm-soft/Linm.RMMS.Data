# Team lead — tasks — csdl-so-06

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid` **fixed-20**) |
| formType | `list` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| peerSoTs | Biểu 2 `bridges` deep-link · **cấm** merge form |
| solution_confirm | **approve** (`task_765e52bc`) |
| design_confirm | **approve** (`task_8dc712d5`) |
| team_lead_confirm | **approve** (autoApprove ON · `task_17056b99`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-06`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_17056b99` |
| saTaskId | `task_765e52bc` |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| updatedAt | `2026-09-06T03:50:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `slideout-form-layout` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` / runtime `/api/v1/bridge-inspections` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` / `col1–3` only · Guid IdCode · merge Biểu 2 form · parent `*Json` · invent map API · add/remove >20 · đổi partCode seed.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Sổ 06 typed) | Action |
|------|----------------|-------------------|--------|
| Resource | hub `bridge-inspections` generic | **typed** T-SO-06 + fixed-20 | **T-BE-03** · GAP-SO06-TYPED-01 |
| Hub card | «Phiếu KT cầu» | title page «Sổ 06 — QL cầu / phiếu KT» · hub label **DEFER** T-REN-01 | **T-UI-PROD-01** · GAP-SO06-FORMNO-01 |
| Route | hub-only | **alias** `/csdl-so-06` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** · GAP-SO06-ROUTE-01 |
| Form | 3 ô `detail*` + entries `col1–3` | Typed header + **20 fixed** entries · photoIds | **T-FE-02/03** · GAP-SO06-FIXED20-01 · GAP-SO06-MEDIA-01 |
| Persist | shell + flat book entries | shell + **`Schema_CsdlSo06`** + widen entries | **T-BE-01** · **T-BE-02** (Dev/4b) |
| road / bridge | Text / weak | SearchInput road-route + bridges | **T-FE-04** / **T-UI-LKP-01** · GAP-CSDL-ROAD-01 · GAP-SO06-PEER-01 |
| province | LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | **T-UI-FILTER-01** · GAP-CSDL-PROV-01 |
| status | LOOKUP / mixed | `draft\|done\|cancelled` · **cấm** tot/tb/kem/hong | **T-UI-FILTER-01** · **T-UI-FIELD-01** |
| manageUnit | — | Text P1 · org **DEFER P2** | **T-OUT-01** · GAP-CSDL-ORG-01 |
| priority | — | required khi `damageDesc` ≠ empty | **T-BE-06** · **T-UI-ENTRIES-01** |
| Media | none / invent risk | FileService `photoIds` / dòng · max 5 optional | **T-FE-03** · API-FILE-01 · GAP-SO06-MEDIA-01 |
| Peer | — | SearchInput/deep-link Biểu 2 · **cấm** merge | **T-UI-PROD-01** · GAP-SO06-PEER-01 |
| XLS | stub | **OUT** | **T-OUT-01** · GAP-CSDL-XLS-01 |
| Report | flat Col1–3 | typed lines = report source READY | GAP-RPT-SRC-CSDL-01 · không block P1 |
| DOMAIN-MAP | thiếu slug | add `csdl-so-06`→Asset | **T-DM-01** · GAP-SO06-DMAP-01 |
| API doc legacy | path cũ ≠ runtime | **giữ** `asset/csdl-records` | GAP-SO06-APILEGACY-01 · **cấm** runtime bridge-inspections |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-so-06`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-so-06` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-06` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections` |
| `peerBridge` | Biểu 2 / `bridges` deep-link · Text fallback nếu SearchInput UNREADY |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent · **cấm** runtime `/api/v1/bridge-inspections` |
| catalogKind | `bridge-inspections` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo06Entity` · `rmms_csdl_so06` · widen `CsdlBookEntryEntity` |
| migration | `Schema_CsdlSo06` · **Dev / Step 4b only** |
| File | FileService `photoIds` / dòng · max 5 · optional · integrate-file-upload-web · **cấm** invent file API |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-so-06` (+ hub entry) | **SELECTED** — GAP-SO06-ROUTE-01 · Design/SA locked |
| B | hub-only `?resource=bridge-inspections` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / bridge-inspections API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Sổ 06 — QL cầu / phiếu KT» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `bridge-inspections` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · reuse · **cấm** invent History API |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| DES-ENTRIES | entries `inline_grid` **fixed-20** · FileMulti photoIds · **cấm** add/remove |
| Tree / Map | **n/a** — map=none · **cấm** invent map |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=bridge-inspections&…` | list paged · inspectedAt from/to · **TZ** |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed+entries[20] · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + seed 20 · IdCode `SO-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all 20 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | bridges peer / Integration search | SearchInput bridge · Text fallback UNREADY |
| API-FILE-01 | FileService upload | integrate-file-upload-web | `photoIds` · max 5 / dòng · **cấm** invent |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed + **seed 20** partCode | POST body resource + typed + `entries[20]` |
| edit | GET `/{id}` | PUT · replace typed 1:1 · replace-all 20 |
| view | GET `/{id}` | — readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST (new `SO-`) · copy 20 lines · **giữ** partCode seed |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `bridgeId` · `fromDate`/`toDate` (inspectedAt) · `page`/`pageSize`

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | **gap** · reuse codes · wire DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **required** · typed child + entry cols · **cấm** parent `*Json` / detail*/col1–3 SSOT |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |
| SD-FILE | **required** · FileService photoIds · **cấm** invent |
| SD-TZ | `tz_list_and_form` · FE local→UTC · BE store UTC |
| SD-MERGE | n/a · **cấm** merge Biểu 2 form |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-so-06`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlSo06Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlSo06` + widen entries · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · seed 20 · **stop** detail*/col1–3 write |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `SO-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode`/`bridgeId` + `fromDate`/`toDate` inspectedAt (**TZ**) |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | validate priority-when-damage · photoIds max 5 · fixed partCode |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-07** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-04** FilterBar + road+bridge + period |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout typed header |
| T-UI-ENTRIES-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = **T-FE-03** fixed-20 + FileMulti · **cấm** add/remove |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-05** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-05** |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | History modal reuse · part **T-FE-05** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01/02 | `/agent-dev` | road-route + bridges · Text fallback bridge |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · status LOOKUP · inspectedAt TZ |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-06** hub + Biểu 2 deep-link · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / org P2 / hub rename T-REN-01 — không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete + entries[20] |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | typed header+fixed-20 · **cấm** detail*/col1–3 only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/bridgeId + inspectedAt TZ |
| T-QA-FIXED20-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | đúng 20 · **cấm** add/remove · partCode seed |
| T-QA-MEDIA-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | photoIds FileService max 5 / dòng |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-so-06` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-ENTRIES-01 · T-FE-04→T-UI-FILTER-01+LKP · T-FE-05→T-UI-LEAVE+ACT+HIST · T-FE-06→T-UI-PROD-01 · T-FE-07→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-so-06` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain · GAP-SO06-DMAP-01.

### T-CTX-01 — Context sync

- Sync `docs/context/features/csdl-so-06.md` with alias route + typed form + fixed-20 + FileService notes for Dev.
- DoD: context points mfeStdUrl + hub + resource `bridge-inspections`.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlSo06Entity` · table `rmms_csdl_so06` · FK `CatalogRecordId` unique 1:1.
- Typed cols: BridgeId · BridgeName · KmStation · ManageUnit · PassportRef · InspectedAt · Inspector · AdminArea.
- Widen `CsdlBookEntryEntity`: PartCode · PartName · DamageDesc · ProposedActionQty · Priority · PhotoIds · Notes · LineNo.
- Migration name **`Schema_CsdlSo06`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- Create always materialize **20** lines from seed (Signage…AttachedDevices) · backfill detail*/col1–3 → typed when present.
- DoD: EF config · unique FK · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO · join shell↔typed↔entries on `resource=bridge-inspections`.
- **Stop** writing detail*/col1–3 for this resource at runtime.
- IdCode `SO-yyyyMMdd-nnnn` BE generate · **cấm** Guid.
- List filters: `search`, `province`, `status`, `roadCode`, `bridgeId`, `fromDate`/`toDate` (inspectedAt · **TZ**).
- Gates: `tz_list_and_form` · XCO on GET detail · tenant `CompanyCode` (`share_tenant`).
- DoD: FormMode↔API green · required (bridgeId/bridgeName, roadCode, kmStation, manageUnit, inspectedAt, inspector, entries exactly 20).

### T-BE-06 — Validate fixed-20 + priority + photo

- Enforce entries length **exactly 20** · partCode ∈ seed · **cấm** add/remove / đổi seed.
- `priority` required khi `damageDesc` ≠ empty.
- `photoIds` optional · max **5** / dòng · FileService guids.
- DoD: 422 on violation · GAP-SO06-FIXED20-01 · GAP-SO06-MEDIA-01.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-so-06`**.
- Kind B A–D+F+H · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- List cols: code · bridge · road · km · inspectedAt · inspector · status · province · updatedAt.
- Empty VN «Chưa có phiếu kiểm tra cầu».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status(`draft|done|cancelled`) · roadCode SearchInput · bridgeId SearchInput · fromDate/toDate.
- road-route → API-LKP-01 · bridges → API-LKP-02 (Text fallback UNREADY).
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change · inspectedAt TZ bound.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed header: code(ro) · bridgeId/bridgeName · roadCode/roadName · kmStation · manageUnit · passportRef(+link) · inspectedAt · inspector · province · status · notes.
- controlHint 1:1 · **cấm** 3 ô detail* / col1–3 only.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-ENTRIES-01 (= T-FE-03)

- Entries `inline_grid` **fixed-20**: partCode/partName (ro seed) · damageDesc · proposedActionQty · priority · photoIds FileMulti · notes.
- **Cấm** add/remove row · **cấm** đổi partCode seed.
- Nested on create/edit/view/copy · replace-all 20 on PUT · FileService upload.
- DoD: priority-when-damage · photo max 5 · **cấm** col1–3 runtime SSOT.

### T-UI-LEAVE-01 + T-UI-ACT-01 + T-UI-HIST-01 (= T-FE-05)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm · History reuse.
- DoD: leave gate · copy clears id/code · reload list after delete · **cấm** invent History API.

### T-UI-PROD-01 (= T-FE-06)

- Hub entry `?resource=bridge-inspections` · page title «Sổ 06 — QL cầu / phiếu KT».
- Hub card label «Phiếu KT cầu» **giữ** đến T-REN-01 (DEFER).
- Peer SearchInput/deep-link Biểu 2 · **cấm** merge form Biểu 2 / Sổ TS.
- Map: none · **cấm** invent map.
- DoD: alias + hub both list same resource · GAP-SO06-PEER-01 PASS.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-07)

- catalogKind `bridge-inspections` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col / col1–3 SSOT.

### T-OUT-01 — OUT / DEFER pack

- XLS import/export **OUT** · không block P1.
- org SearchInput · province master · hub rename T-REN-01 · **DEFER P2**.
- File API: **reuse** FileService only · **cấm** invent.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · typed form+fixed-20 · filter V1–V5 · inspectedAt TZ · photoIds max5 · priority-when-damage · route alias+hub · leave · copy · soft delete · Biểu 2 deep-link · **cấm** detail*/col1–3-only · **cấm** add/remove >20.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | write |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status | Dropdown LOOKUP_STATIC | filter + shell · draft\|done\|cancelled |
| roadCode/bridgeId | SearchInput | filter + shell/typed + LKP |
| fromDate/toDate | Date | filter inspectedAt · TZ |
| code | Text ro | shell SO- |
| bridge*/road* | SearchInput+display | typed/shell req |
| kmStation/manageUnit | Number/Text | typed req · org P2 |
| passportRef | Text+link | typed · Biểu 2 |
| inspectedAt/inspector | Date/Text | typed req · TZ |
| notes | Textarea | shell |
| entries.* | ro part · Textarea/Text/Dropdown/FileMulti | PartCode…PhotoIds · priority* nếu damage |

---

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES fixed-20 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · LeaveConfirmModal
- mfeStdUrl=`http://localhost:9301/csdl-so-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html`

---

## Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-PRIORITY · Q-MEDIA · Q-BRIDGE · Q-PROV · Q-ORG · Q-DMAP chốt PO/Design/SA · autoApprove)

## Cấm (TL)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge Biểu 2 / Sổ TS · add/remove >20 · đổi partCode seed
- runtime `/api/v1/bridge-inspections` · implement product code · yarn build/e2e/start:std · Step 4b/migration/e2e ở role TL
- parent `*Json` · start role khác (**GAP-PKT-ROLE-01**) · re-scan demo

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | new_page |
| route_confirm | route_a |
| team_lead_confirm | approve |
| writtenAt | 2026-09-06T03:50:00.000Z |
| contentHashPrior | sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a |
| headerFingerprintPrior | sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f |
