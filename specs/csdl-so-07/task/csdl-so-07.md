# Team lead — tasks — csdl-so-07

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · Tab A/B `inline_grid` **add/remove**) |
| formType | `list` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| peerReport | `rpt-vi-pham-hlatdb` drill sau typed READY · **cấm** merge form |
| solution_confirm | **approve** (`task_451a2571`) |
| design_confirm | **approve** (`task_66a57fe0`) |
| team_lead_confirm | **approve** (autoApprove ON · `task_567ebd2f`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-07`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_567ebd2f` |
| saTaskId | `task_451a2571` |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| updatedAt | `2026-09-06T04:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `slideout-form-layout` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` / `col1–3` only · Guid IdCode · flatten Tab A+B · merge report form · parent `*Json` · invent map/file API.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Sổ 07 typed) | Action |
|------|----------------|-------------------|--------|
| Resource | hub `row-violations` generic | **typed** T-SO-07 + nested VP/GP | **T-BE-03** · GAP-SO07-TYPED-01 |
| Hub card | «HL ATĐB + GP TC» formNo 6 | title page «Sổ 07 — HL + GPTC + Dự án» · hub label **DEFER** T-REN-01 | **T-UI-PROD-01** · GAP-SO07-FORMNO-01 |
| Route | hub-only | **alias** `/csdl-so-07` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** · GAP-SO07-ROUTE-01 |
| Form | 3 ô `detail*` + entries `col1–3` | Typed header + **2 tab** `violations[]` / `permits[]`(+QLDA) | **T-FE-02/03** · GAP-SO07-TABS-01 · GAP-SO07-PROJECT-01 |
| Persist | shell + flat book entries | shell + **`Schema_CsdlSo07`** + VP/GP children | **T-BE-01** · **T-BE-02** (Dev/4b) |
| Nested | flatten Col1–3 | **2 arrays** add/remove · **cấm** flatten | **T-UI-ENTRIES-01** · GAP-SO07-TABS-01 |
| road | Text / weak | SearchInput road-route | **T-FE-04** / **T-UI-LKP-01** · GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | **T-UI-FILTER-01** · GAP-CSDL-PROV-01 |
| status sổ | LOOKUP / mixed | `draft\|active\|closed` · **cấm** tot/tb/kem/hong | **T-UI-FILTER-01** · **T-UI-FIELD-01** |
| status VP | — | `open\|processing\|resolved\|dismissed` | **T-BE-06** · **T-UI-ENTRIES-01** |
| org / QLDA | — | Text P1 · org **DEFER P2** · `projectMgmtUnit` optional | **T-OUT-01** · GAP-CSDL-ORG-01 · GAP-SO07-PROJECT-01 |
| permitDays | — | Integer lưu riêng · UI derive OK | **T-BE-06** · **T-UI-FIELD-01** |
| Peer | — | drill `rpt-vi-pham-hlatdb` READY · **cấm** merge | **T-UI-PROD-01** · GAP-RPT-SRC-CSDL-01 |
| XLS | stub | **OUT** | **T-OUT-01** · GAP-CSDL-XLS-01 |
| DOMAIN-MAP | thiếu slug | add `csdl-so-07`→Asset | **T-DM-01** · GAP-SO07-DMAP-01 |
| API doc legacy | path cũ ≠ runtime | **giữ** `asset/csdl-records` | GAP-SO07-APILEGACY-01 · **cấm** runtime row-violations/construction-permits |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-so-07`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-so-07` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-07` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=row-violations` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations` |
| `peerReport` | `rpt-vi-pham-hlatdb` drill `?resource=row-violations&id=` · **cấm** merge |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent · **cấm** runtime `/row-violations` · `/construction-permits` |
| catalogKind | `row-violations` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo07Entity` · `rmms_csdl_so07` + VP/GP children |
| migration | `Schema_CsdlSo07` · **Dev / Step 4b only** |
| File | **none** (no photoIds this pack) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-so-07` (+ hub entry) | **SELECTED** — GAP-SO07-ROUTE-01 · Design/SA locked |
| B | hub-only `?resource=row-violations` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / row-violations API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Sổ 07 — HL + GPTC + Dự án» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `row-violations` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · reuse · **cấm** invent History API |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| DES-TAB-A | `violations[]` `inline_grid` **add/remove** · Date/Number/Text/Dropdown/Textarea |
| DES-TAB-B | `permits[]`(+QLDA) `inline_grid` **add/remove** · Text/Integer/Date/Textarea |
| Tree / Map | **n/a** — map=none · **cấm** invent map |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=row-violations&…` | list paged · UpdatedAt from/to · **TZ** |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed+violations[]+permits[] · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + arrays · IdCode `SO-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all arrays |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed + empty arrays | POST body resource + typed + `violations[]` + `permits[]` |
| edit | GET `/{id}` | PUT · replace typed 1:1 · replace-all arrays |
| view | GET `/{id}` | — readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST (new `SO-`) · copy arrays |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `fromDate`/`toDate` (UpdatedAt) · `page`/`pageSize`

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
| SD-NO-JSON | **required** · typed child VP/GP · **cấm** parent `*Json` / detail*/col1–3 SSOT |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |
| SD-FILE | **n/a** · no photoIds this pack |
| SD-TZ | `tz_list_and_form` · FE local→UTC · BE store UTC |
| SD-MERGE | n/a · **cấm** merge report form |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-so-07`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlSo07Entity` + VP/GP entities + EF |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlSo07` · deprecate book_entries write · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · stop detail*/col1–3 write |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `SO-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + `fromDate`/`toDate` UpdatedAt (**TZ**) |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | validate header + per-row · replace-all arrays · enums sổ/VP |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-07** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-04** FilterBar + road + period |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout typed header |
| T-UI-ENTRIES-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = **T-FE-03** Tab A/B add/remove · **cấm** flatten |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-05** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-05** |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | History modal reuse · part **T-FE-05** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | road-route SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · status LOOKUP · dates TZ |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-06** hub + report drill READY · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 2 tabs |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / org P2 / hub rename T-REN-01 — không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete + nested arrays |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | typed header+2 tab · **cấm** detail*/col1–3 only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode + UpdatedAt TZ |
| T-QA-TABS-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | Tab A/B add/remove · **cấm** flatten |
| T-QA-PROJECT-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | QLDA `projectMgmtUnit` optional · permitDays Integer |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-so-07` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-ENTRIES-01 · T-FE-04→T-UI-FILTER-01+LKP · T-FE-05→T-UI-LEAVE+ACT+HIST · T-FE-06→T-UI-PROD-01 · T-FE-07→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-so-07` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain · GAP-SO07-DMAP-01.

### T-CTX-01 — Context sync

- Sync `docs/context/features/csdl-so-07.md` with alias route + typed form + 2-tab nested + QLDA notes for Dev.
- DoD: context points mfeStdUrl + hub + resource `row-violations`.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlSo07Entity` · table `rmms_csdl_so07` · FK `CatalogRecordId` unique 1:1.
- Typed cols: Contractor · KmFrom · KmTo · ManageUnit.
- Child VP `rmms_csdl_so07_violations`: LineNo · At · StationKm · AdminArea · ViolationStatus · OrgName · Minutes* · CurrentState · UnitConfirm.
- Child GP `rmms_csdl_so07_permits`: LineNo · PermitNo · PermitDays · Issuer · Investor · ProjectMgmtUnit · Contractor · WorkName · StationKm · ExpiresAt · ExtendedAt · Progress.
- Migration name **`Schema_CsdlSo07`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- Deprecate book_entries write for `row-violations` · backfill detail*/col1–3 → typed/children when present.
- DoD: EF config · unique FK · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO · join shell↔typed↔arrays on `resource=row-violations`.
- **Stop** writing detail*/col1–3 for this resource at runtime.
- IdCode `SO-yyyyMMdd-nnnn` BE generate · **cấm** Guid.
- List filters: `search`, `province`, `status`, `roadCode`, `fromDate`/`toDate` (UpdatedAt · **TZ**).
- Gates: `tz_list_and_form` · XCO on GET detail · tenant `CompanyCode` (`share_tenant`).
- DoD: FormMode↔API green · header req (contractor, roadCode, roadName, kmFrom, kmTo, manageUnit, province).

### T-BE-06 — Validate arrays + enums

- Replace-all `violations[]` / `permits[]` on PUT · add/remove FE · arrays start empty.
- When VP row present → `at`, `stationKm`, `violationStatus`, `orgName` req · VP status `open|processing|resolved|dismissed`.
- When GP row present → `permitNo`, `issuer`, `investor`, `workName`, `stationKm`, `expiresAt` req · `projectMgmtUnit` optional · `permitDays` Integer optional.
- Sổ status `draft|active|closed` · **cấm** tot/tb/kem/hong · **cấm** flatten.
- DoD: 422 on violation · GAP-SO07-TABS-01 · GAP-SO07-PROJECT-01.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-so-07`**.
- Kind B A–D+F+H · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- List cols: code · road · km · contractor · status · province · updatedAt.
- Empty VN «Chưa có sổ vi phạm / GPTC».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status(`draft|active|closed`) · roadCode SearchInput · fromDate/toDate.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change · UpdatedAt TZ bound.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed header: code(ro) · contractor · roadCode/roadName · kmFrom/kmTo · manageUnit · province · status · notes.
- controlHint 1:1 · **cấm** 3 ô detail* / col1–3 only.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-ENTRIES-01 (= T-FE-03)

- Tab A `violations[]` `inline_grid` **add/remove**: at · stationKm · adminArea · violationStatus · orgName · minutes* · currentState · unitConfirm.
- Tab B `permits[]`(+QLDA) `inline_grid` **add/remove**: permitNo · permitDays · issuer · investor · projectMgmtUnit · contractor · workName · stationKm · expiresAt · extendedAt · progress.
- Nested on create/edit/view/copy · replace-all arrays on PUT · **cấm** flatten Tab A+B.
- DoD: per-row req when present · QLDA optional · permitDays Integer · **cấm** col1–3 runtime SSOT.

### T-UI-LEAVE-01 + T-UI-ACT-01 + T-UI-HIST-01 (= T-FE-05)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm · History reuse.
- DoD: leave gate · copy clears id/code · reload list after delete · **cấm** invent History API.

### T-UI-PROD-01 (= T-FE-06)

- Hub entry `?resource=row-violations` · page title «Sổ 07 — HL + GPTC + Dự án».
- Hub card label «HL ATĐB + GP TC» formNo 6 **giữ** đến T-REN-01 (DEFER).
- Peer report drill `rpt-vi-pham-hlatdb` sau typed READY · **cấm** merge form.
- Map: none · **cấm** invent map.
- DoD: alias + hub both list same resource · GAP-RPT-SRC-CSDL-01 form READY.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-07)

- catalogKind `row-violations` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col / col1–3 SSOT.

### T-OUT-01 — OUT / DEFER pack

- XLS import/export **OUT** · không block P1.
- org SearchInput · province master · hub rename T-REN-01 · **DEFER P2**.
- File API: **n/a** this pack · **cấm** invent.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · typed form+2 tab · filter V1–V5 · UpdatedAt TZ · add/remove VP/GP · QLDA optional · permitDays · route alias+hub · leave · copy · soft delete · report drill READY · **cấm** detail*/col1–3-only · **cấm** flatten.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | write |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status | Dropdown LOOKUP_STATIC | filter + shell · draft\|active\|closed |
| roadCode | SearchInput | filter + shell + LKP |
| fromDate/toDate | Date | filter UpdatedAt · TZ |
| code | Text ro | shell SO- |
| contractor/manageUnit | Text | typed req · org P2 |
| road*/km* | SearchInput+Number | shell/typed req |
| notes | Textarea | shell |
| violations.* | Date/Number/Text/Dropdown/Textarea | child VP · add/remove |
| permits.* | Text/Integer/Date/Textarea | child GP · projectMgmtUnit optional |

---

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-A · S-TAB-B · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · LeaveConfirmModal
- mfeStdUrl=`http://localhost:9301/csdl-so-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html`

---

## Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-TABS · Q-PROJECT · Q-PERMITDAYS · Q-PROV · Q-ORG · Q-DMAP · Q-RPT chốt PO/Design/SA · autoApprove)

## Cấm (TL)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · merge report / Sổ TS · flatten Tab A+B
- runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · implement product code · yarn build/e2e/start:std · Step 4b/migration/e2e ở role TL
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
| writtenAt | 2026-09-06T04:30:00.000Z |
| contentHashPrior | sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69 |
| headerFingerprintPrior | sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531 |
