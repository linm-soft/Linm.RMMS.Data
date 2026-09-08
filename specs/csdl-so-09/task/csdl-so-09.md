# Team lead — tasks — csdl-so-09

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid` **9 cột**) |
| formType | `list` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| peerBieu14 | `its-systems` · `/csdl-bieu-14` · LOOKUP/deep-link · **cấm** embed/merge |
| peerSoTs | — · **cấm** merge Sổ TS form |
| ≠ Biểu 9 | **HARD** · key `its-ops-logs` · **≠** `boundary-markers` |
| solution_confirm | **approve** (`task_05d75fc7`) |
| design_confirm | **approve** (`task_f109cd8d`) |
| team_lead_confirm | **approve** (autoApprove ON · `task_f3c35413`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-09`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_f3c35413` |
| saTaskId | `task_05d75fc7` |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| updatedAt | `2026-09-06T00:00:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `slideout-form-layout` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` / `col1–3` only · Guid IdCode · merge Biểu 14 / Sổ TS · parent `*Json` · invent file/map API · invent media/FileMulti · nhầm Biểu 9.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Sổ 09 typed) | Action |
|------|------------------------|-------------------|--------|
| Resource | **MISSING** catalog | Seed `its-ops-logs` + hub card formNo 09 | **T-BE-02** / **T-FE-07** · **GAP-SO09-RES-01** · **GAP-CSDL-CUC-05** |
| Route | hub-only / missing | **alias** `/csdl-so-09` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** · **GAP-SO09-ROUTE-01** |
| Form | 3 ô `detail*` + entries `col1–3` | Typed T-SO-09 header (thầu · Km · kỳ · link14) + entries **9 cột** ca trực | **T-FE-02/03** / **T-UI-FORM-01** · **GAP-SO09-TYPED-01** |
| formNo label | — / confuse Biểu 9 | Cục **Sổ 09** · key `its-ops-logs` · **≠** `boundary-markers` | **T-UI-PROD-01** · **GAP-SO09-FORMNO-01** |
| Link Biểu 14 | — | optional `linkBieu14Id` SearchInput `its-systems` + deep-link | **T-UI-LKP-02** · **GAP-SO09-LINK14-01** |
| Persist | shell + flat book entries | shell + **`Schema_CsdlSo09`** + widen entries | **T-BE-01** · **T-BE-02** (Dev/4b) |
| File / media | không | **N/A** · **cấm** invent FileMulti | — |
| road | Text / roadName | SearchInput `road-route` | **T-FE-04** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | **T-UI-FILTER-01** |
| status (list) | LOOKUP_STATIC | tot\|tb\|kem\|hong P1 | **T-UI-FILTER-01** |
| shift / systemStatus | — | Dropdown ca1\|ca2\|ca3 · tot\|tb\|kem\|hong | **T-UI-ENTRIES-01** · Q-SHIFT/SYS-STATUS |
| contractor / manageUnit | detail* | Text P1 · org SearchInput **DEFER P2** | **T-OUT-01** · **GAP-CSDL-ORG-01** |
| period | — | list `fromDate`/`toDate` + form `periodStart`/`periodEnd` · **TZ** | **T-BE-05** · `tz_list_and_form` |
| Signature | — | Text tên P1 · e-sign **DEFER** | Q-SIGN · **T-OUT-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** · **GAP-CSDL-XLS-01** |
| Report | flat Col1–3 | typed entries = report source READY (report riêng) | **GAP-RPT-SRC-CSDL-01** · không block P1 |
| DOMAIN-MAP | thiếu slug | add `csdl-so-09`→Asset | **T-DM-01** |
| Map | none | none · gis deep-link only | **S-SKIP-MAP** · **cấm** invent |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-so-09`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-so-09` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-09` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| `peerStdUrl` | `http://localhost:9301/csdl-bieu-14` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `its-ops-logs` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo09Entity` · `rmms_csdl_so09` · widen `CsdlBookEntryEntity` |
| migration | `Schema_CsdlSo09` · **Dev / Step 4b only** |
| File | **N/A** · **cấm** invent media/FileMulti |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-so-09` (+ hub entry) | **SELECTED** — GAP-SO09-ROUTE-01 · Design/SA locked |
| B | hub-only `?resource=its-ops-logs` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Sổ 09 — QL vận hành ITS/ETC/KSTTX» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `its-ops-logs` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · reuse · **cấm** invent History API |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| DES-ENTRIES | entries `inline_grid` typed **9 cột** · media **N/A** |
| DES-LINK14 | SearchInput `its-systems` + deep-link `/csdl-bieu-14` · **cấm** embed |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=its-ops-logs&…` | list paged · period from/to · **TZ** |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed+entries · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + entries · IdCode `SO-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed · replace-all entries |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/asset/csdl-records?resource=its-systems&…` | SearchInput linkBieu14 · peer Biểu 14 |
| API-LKP-03 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed + empty entries | POST body resource + typed + `entries[]` |
| edit | GET `/{id}` | PUT · replace typed 1:1 · replace-all entries |
| view | GET `/{id}` | — readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST (new `SO-`) · copy entries optional · clear/keep linkBieu14Id per UX |
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
| SD-FILE | **n/a** · media N/A · **cấm** invent FileMulti |
| SD-TZ | `tz_list_and_form` · FE local→UTC · BE store UTC |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-so-09`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlSo09Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlSo09` + widen entries + seed `its-ops-logs` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · **stop detail*/col1–3 write** |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `SO-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + period `fromDate`/`toDate` (**TZ**) |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-07** catalogKind typed + seed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status/shift LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-04** FilterBar + road-route + period |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout typed header + link14 |
| T-UI-ENTRIES-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = **T-FE-03** inline_grid **9 cột** · **cấm** media |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-05** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-05** |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | History modal reuse · part **T-FE-05** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput road-route |
| T-UI-LKP-02 | Dev | **pending** | API-LKP-02 | `/agent-dev` | **GAP-SO09-LINK14-01** SearchInput its-systems + deep-link |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · shift/status LOOKUP · period TZ |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-06** hub + label «Sổ 09» · **≠** Biểu 9 · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / org SearchInput P2 / e-sign — không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete + entries |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | typed header+entries 9 cột · **cấm** detail*/col1–3 only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode + period TZ |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-so-09` + hub · **≠** Biểu 9 |
| T-QA-LINK14-01 | QA | **pending** | T-UI-LKP-02 | `/agent-qa` | optional link14 SearchInput + deep-link · **cấm** embed |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-ENTRIES-01 · T-FE-04→T-UI-FILTER-01+LKP-01 · T-FE-05→T-UI-LEAVE+ACT+HIST · T-FE-06→T-UI-PROD-01 · T-FE-07→T-BE-UISCHEMA-01 · link14→T-UI-LKP-02.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-so-09` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-CTX-01 — Context sync

- Sync `docs/context/features/csdl-so-09.md` with alias route + typed form notes for Dev.
- DoD: context points mfeStdUrl + hub + resource `its-ops-logs` · **≠** Biểu 9.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlSo09Entity` · table `rmms_csdl_so09` · FK `CatalogRecordId` unique 1:1.
- Typed cols: `Contractor` nvarchar · `PeriodStart`/`PeriodEnd` datetime2 UTC · `LinkBieu14Id` uniqueidentifier NULL.
- Widen `CsdlBookEntryEntity`: `LineNo` · `OccurredAt` · `Shift` · `OperatorName` · `SystemStatus` · `Anomaly` · `Action` · `Result` · `Recommendation` · `Signature` (nvarchar).
- Seed catalog resource key `its-ops-logs` · formNo `09` · label Cục Sổ 09.
- Migration name **`Schema_CsdlSo09`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- Optional backfill: legacy detail*/col1–3 → typed when `resource=its-ops-logs`.
- DoD: EF config · unique FK · seed · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO `CsdlSo09Dtos` · join shell↔typed↔entries on `resource=its-ops-logs`.
- **Stop** writing detail*/col1–3 for this resource at runtime.
- IdCode `SO-yyyyMMdd-nnnn` BE generate · **cấm** Guid.
- List filters: `search`, `province`, `status`, `roadCode`, `fromDate`/`toDate` (period AND · **TZ**).
- Gates: `tz_list_and_form` · XCO on GET detail · tenant `CompanyCode` (`share_tenant`).
- DoD: FormMode↔API green · required header `bookNo`, `contractor`, `roadCode`, `kmFrom`, `periodStart` · entry req `occurredAt`, `shift`, `operatorName`, `systemStatus`, `action`, `result`, `signature`.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-so-09`**.
- Kind B A–D+F+H · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- List cols: code · bookNo · contractor · road · km · period · status · province · linkBieu14Id · updatedAt.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · roadCode SearchInput · fromDate/toDate.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change · period TZ bound.

### T-UI-FORM-01 + T-UI-FIELD-01 + T-UI-LKP-02 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed header: code(ro) · bookNo · contractor · roadCode/roadName · kmFrom/kmTo · periodStart/End · manageUnit · province · status · linkBieu14Id · notes.
- linkBieu14Id optional · SearchInput `its-systems` (API-LKP-02) + deep-link `/csdl-bieu-14` · **cấm** embed Biểu 14.
- controlHint 1:1 · **cấm** 3 ô detail* / col1–3 only.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey · link14 optional.

### T-UI-ENTRIES-01 (= T-FE-03)

- Entries `inline_grid` typed **9 cột**: occurredAt · shift · operatorName · systemStatus · anomaly · action · result · recommendation · signature (+ lineNo).
- LOOKUP_STATIC: shift `ca1|ca2|ca3` · systemStatus `tot|tb|kem|hong`.
- **Cấm** invent FileMulti / media.
- Nested on create/edit/view/copy · replace-all on PUT.
- DoD: required occurredAt/shift/operatorName/systemStatus/action/result/signature · optional anomaly/recommendation · **cấm** col1–3 runtime SSOT.

### T-UI-LEAVE-01 + T-UI-ACT-01 + T-UI-HIST-01 (= T-FE-05)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm · History reuse.
- DoD: leave gate · copy clears id/code · reload list after delete · **cấm** invent History API.

### T-UI-PROD-01 (= T-FE-06)

- Hub card entry `?resource=its-ops-logs` still works.
- Label «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · key `its-ops-logs` · **≠** Biểu 9 `boundary-markers`.
- **Cấm** merge Biểu 14 / Sổ TS form.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-07)

- catalogKind `its-ops-logs` typed UiSchema + seed catalog.
- DoD: editor full cột · **cấm** generic 3-col / col1–3 SSOT.

### T-OUT-01 — OUT / DEFER pack

- XLS import/export **OUT** · không block P1.
- org SearchInput · province master · e-sign · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · typed form+entries **9 cột** · filter V1–V5 · period TZ · route alias+hub · leave · copy · soft delete · link14 optional · **cấm** detail*/col1–3-only · **cấm** nhầm Biểu 9 · **cấm** embed Biểu 14.
- **Cấm** e2e ở TL/Dev trừ QA role.
- Media/file AC: **n/a**.

---

## Inventory (slim · controlHint)

| id | controlHint | write |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status | Dropdown LOOKUP_STATIC | filter + shell |
| roadCode | SearchInput road-route | filter + shell |
| fromDate/toDate | Date | filter period · TZ |
| code | Text ro | shell SO- |
| bookNo/contractor | Text | shell / typed req |
| roadCode/roadName | SearchInput+display | shell req |
| kmFrom/kmTo | Number | shell · kmFrom req |
| periodStart/End | Date | typed · TZ |
| manageUnit/notes | Text/Textarea | shell |
| linkBieu14Id | SearchInput its-systems | typed optional |
| entries.* | DateTime/Dropdown/Text/Textarea | entry widen · **9 cột** · media N/A |

---

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-LINK14 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · LeaveConfirmModal
- mfeStdUrl=`http://localhost:9301/csdl-so-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs`
- peer=`http://localhost:9301/csdl-bieu-14`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html`

---

## Open questions

- **none** (Q-SHIFT · Q-SYS-STATUS · Q-LINK14 · Q-PROV · Q-ORG · Q-SIGN chốt PO/Design/SA · autoApprove)

## Cấm (TL)

- ERP.* · invent API · invent map/file/media API · form 3 ô / col1–3 only · Guid IdCode · merge Biểu 14 / Sổ TS · nhầm Biểu 9  
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
| writtenAt | 2026-09-06T00:00:00.000Z |
| contentHashPrior | sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc |
| headerFingerprintPrior | sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9 |
