# Team lead — tasks — csdl-so-01

| Field | Value |
|-------|-------|
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid`) |
| formType | `list` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| peerSoTs | — · **cấm** merge Sổ TS form |
| solution_confirm | **approve** (`task_71adf8b1`) |
| design_confirm | **approve** (`task_09c37ee7`) |
| team_lead_confirm | **approve** (autoApprove ON · `task_bf0fa3d0`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-01`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_bf0fa3d0` |
| saTaskId | `task_71adf8b1` |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| updatedAt | `2026-09-06T01:10:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `slideout-form-layout` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` / `col1–3` only · Guid IdCode · merge Sổ TS form · parent `*Json` · invent file/map API.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Sổ 01 typed) | Action |
|------|------------------------|-------------------|--------|
| Route | hub-only `?resource=inspection-logs` | **alias** `/csdl-so-01` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-01 header + typed entries + media sau SC | **T-FE-02/03** / **T-UI-FORM-01** · **GAP-SO01-TYPED-01** |
| formNo label | Live «Sổ 8» | Cục **Sổ 01** · key `inspection-logs` giữ | **T-UI-PROD-01** · **GAP-SO01-FORMNO-01** |
| Persist | shell + flat book entries | shell + **`Schema_CsdlSo01`** + widen entries | **T-BE-01** · **T-BE-02** (Dev/4b) |
| File | không | FileService `postRepairMediaIds` max 10 · ≥1 nếu repairRequest ≠ empty | **T-BE-06** · **T-FE-03** · **GAP-SO01-MEDIA-01** |
| road | Text / roadName | SearchInput `road-route` | **T-FE-04** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| status | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | **T-UI-FILTER-01** · **T-UI-FIELD-01** |
| manageUnit / org | Text | Text P1 · org SearchInput **DEFER P2** | **T-OUT-01** · **GAP-CSDL-ORG-01** |
| period | — | list `fromDate`/`toDate` + form `periodStart`/`periodEnd` · **TZ** | **T-BE-05** · `tz_list_and_form` |
| XLS | stub | **OUT** pack | **T-OUT-01** · **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY (report riêng) | **GAP-RPT-SRC-CSDL-01** · không block P1 |
| DOMAIN-MAP | thiếu slug | add `csdl-so-01`→Asset | **T-DM-01** |
| Map | none | none · gis deep-link only | **S-SKIP-MAP** · **cấm** invent |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-so-01`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-so-01` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-01` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `inspection-logs` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo01Entity` · `rmms_csdl_so01` · widen `CsdlBookEntryEntity` |
| migration | `Schema_CsdlSo01` · **Dev / Step 4b only** |
| File | FileService `integrate-file-upload-web` · **cấm** invent |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-so-01` (+ hub entry) | **SELECTED** — GAP-SO01-ROUTE-01 · Design/SA locked |
| B | hub-only `?resource=inspection-logs` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Sổ 01 — Nhật ký tuần kiểm» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `inspection-logs` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · reuse · **cấm** invent History API |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| DES-ENTRIES | entries `inline_grid` typed · FileMulti `postRepairMediaIds` |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=inspection-logs&…` | list paged · period from/to · **TZ** |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed+entries · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + entries · IdCode `SO-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |
| API-FILE | POST | FileService upload | postRepairMediaIds · existing |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed + empty entries | POST body resource + typed + `entries[]` |
| edit | GET `/{id}` | PUT · replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST (new `SO-`) · copy entries optional |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `fromDate`/`toDate` (period) · `page`/`pageSize`

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
| SD-FILE | FileService only · max 10 media/entry · cond ≥1 nếu repairRequest |
| SD-TZ | `tz_list_and_form` · FE local→UTC · BE store UTC |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-so-01`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlSo01Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlSo01` + widen entries · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · **stop detail*/col1–3 write** |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `SO-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + period `fromDate`/`toDate` (**TZ**) |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | File bind postRepairMediaIds validation max 10 · cond ≥1 nếu repairRequest |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-07** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-04** FilterBar + road-route + period |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout typed header |
| T-UI-ENTRIES-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = **T-FE-03** inline_grid + FileMulti |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-05** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-05** |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | History modal reuse · part **T-FE-05** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · status LOOKUP · period TZ |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-06** hub + label «Sổ 01» · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / org SearchInput P2 — không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete + entries |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | typed header+entries · **cấm** detail*/col1–3 only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode + period TZ |
| T-QA-FILE-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | postRepairMediaIds max 10 · cond repairRequest |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-so-01` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-ENTRIES-01 · T-FE-04→T-UI-FILTER-01+LKP · T-FE-05→T-UI-LEAVE+ACT+HIST · T-FE-06→T-UI-PROD-01 · T-FE-07→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-so-01` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-CTX-01 — Context sync

- Sync `docs/context/features/csdl-so-01.md` with alias route + typed form notes for Dev.
- DoD: context points mfeStdUrl + hub + resource `inspection-logs`.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlSo01Entity` · table `rmms_csdl_so01` · FK `CatalogRecordId` unique 1:1.
- Typed cols: `Inspector` nvarchar · `PeriodStart`/`PeriodEnd` datetime2 UTC.
- Widen `CsdlBookEntryEntity`: InspectDate · ItemProposal · KmFrom · KmTo · Location · Description · EstQuantity · InspectorOpinion · RemarkSign · RepairRequest · DueDate · ActualQtyQualityDate · PostRepairMediaIds (nvarchar CSV).
- Migration name **`Schema_CsdlSo01`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- Optional backfill: legacy detail*/col1–3 → typed when `resource=inspection-logs`.
- DoD: EF config · unique FK · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + file

- Widen DTO `CsdlSo01Dtos` · join shell↔typed↔entries on `resource=inspection-logs`.
- **Stop** writing detail*/col1–3 for this resource at runtime.
- IdCode `SO-yyyyMMdd-nnnn` BE generate · **cấm** Guid.
- List filters: `search`, `province`, `status`, `roadCode`, `fromDate`/`toDate` (period AND · **TZ**).
- File: validate `postRepairMediaIds` max **10**/entry · **≥1** nếu `repairRequest` ≠ empty · FileService ids only.
- Gates: `tz_list_and_form` · XCO on GET detail · tenant `CompanyCode` (`share_tenant`).
- DoD: FormMode↔API green · required fields (bookNo, manageUnit, inspector, roadCode, kmFrom, periodStart, entries inspectDate/itemProposal/kmFrom/description).

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-so-01`**.
- Kind B A–D+F+H · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- List cols: code · bookNo · manageUnit · inspector · road · km · period · status · province · updatedAt.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · roadCode SearchInput · fromDate/toDate.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change · period TZ bound.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed header: code(ro) · bookNo · manageUnit · inspector · roadCode/roadName · kmFrom/kmTo · periodStart/End · province · status · notes.
- controlHint 1:1 · **cấm** 3 ô detail* / col1–3 only.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-ENTRIES-01 (= T-FE-03)

- Entries `inline_grid` typed: inspectDate · itemProposal · kmFrom · kmTo · location · description · estQuantity · inspectorOpinion · remarkSign · repairRequest · dueDate · actualQtyQualityDate · postRepairMediaIds.
- FileMulti via FileService · max 10 · **≥1** nếu repairRequest ≠ empty.
- Nested on create/edit/view/copy · replace-all on PUT.
- DoD: required inspectDate/itemProposal/kmFrom/description · **cấm** col1–3 runtime SSOT.

### T-UI-LEAVE-01 + T-UI-ACT-01 + T-UI-HIST-01 (= T-FE-05)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm · History reuse.
- DoD: leave gate · copy clears id/code · reload list after delete · **cấm** invent History API.

### T-UI-PROD-01 (= T-FE-06)

- Hub card entry `?resource=inspection-logs` still works.
- Label «Sổ 01 — Nhật ký tuần kiểm» · key `inspection-logs` giữ.
- **Cấm** merge Sổ TS form.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-07)

- catalogKind `inspection-logs` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col / col1–3 SSOT.

### T-OUT-01 — OUT / DEFER pack

- XLS import/export **OUT** · không block P1.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · typed form+entries · filter V1–V5 · period TZ · file max 10 + cond repairRequest · route alias+hub · leave · copy · soft delete · **cấm** detail*/col1–3-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | write |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status | Dropdown LOOKUP_STATIC | filter + shell |
| roadCode | SearchInput road-route | filter + shell |
| fromDate/toDate | Date | filter period · TZ |
| code | Text ro | shell SO- |
| bookNo/manageUnit | Text | shell req |
| roadCode/roadName | SearchInput+display | shell req |
| kmFrom/kmTo | Number | shell |
| inspector | Text | typed req |
| periodStart/End | Date | typed · TZ |
| notes | Textarea | shell |
| entries.* | Date/Text/Number/Textarea/File | entry widen · FileService |

---

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · LeaveConfirmModal
- mfeStdUrl=`http://localhost:9301/csdl-so-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html`

---

## Open questions

- **none** (Q-FORMNO · Q-STATUS · Q-MEDIA · Q-PROV · Q-ORG chốt PO/Design/SA · autoApprove)

## Cấm (TL)

- ERP.* · invent API · invent map/file API · form 3 ô / col1–3 only · Guid IdCode · merge Sổ TS  
- implement product code · yarn build/e2e/start:std · Step 4b/migration/e2e ở role TL  
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
| writtenAt | 2026-09-06T01:10:00.000Z |
| contentHashPrior | sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3 |
| headerFingerprintPrior | sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da |
