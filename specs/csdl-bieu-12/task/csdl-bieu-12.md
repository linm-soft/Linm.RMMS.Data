# Team lead — tasks — csdl-bieu-12

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** khóm + thảm cỏ) |
| formType | `list` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ |
| IdCode | `CX-yyyyMMdd-nnnn` |
| peerSoTs | — (không peer · **cấm** invent so-ts-green · **GAP-CSDL-CUC-11**) |
| clumps | 4× int ≥0 · **keep_other** (oleander/ngau/palm/other) |
| grass | `grassAreaM2` · **allow_either** vs sum(khóm) |
| side | **side_only** L/R/C/Both · **cấm** free taluy |
| solution_confirm | **approve** (`task_a36be038`) |
| design_confirm | **approve** (`task_8d909c44`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-12`** + hub entry |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_04119979` |
| saTaskId | `task_a36be038` |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| updatedAt | `2026-09-05T13:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · invent so-ts-green · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · parent `*Json` · free taluy side.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 12 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=green-assets` | **alias** `/csdl-bieu-12` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` | Typed **15** Kind D Slideout · **2 section** khóm + thảm cỏ | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU12-TYPED-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu12`** 1:1 · clumps/grass flat | **T-BE-01** · migration Dev/4b · **cấm** parent `*Json` |
| Khóm | missing / generic | 4× Number ≥0 · **keep_other** | **GAP-BIEU12-CLUMP-01** · Q-OTHER-CLUMP |
| Thảm cỏ | missing / dump | `grassAreaM2` · **allow_either** | **GAP-BIEU12-GRASS-01** · Q-GRASS-REQ |
| side | free / taluy | LOOKUP **side_only** L/R/C/Both | **GAP-BIEU12-SIDE-01** · Q-TALUY |
| List cols | generic | **subset** shared+4 khóm+grass+status | **T-FE-06** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | — | **none** · **cấm** invent so-ts-green | **T-FE-05** · **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug `12` | add `csdl-bieu-12`→Asset | **T-DM-01** · Q-DMAP add_now |
| Title | demo | keep_demo «Biểu 12 — Cây xanh, thảm cỏ» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `CX` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-12`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-12` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-12` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=green-assets` |
| `peerStdUrl` | — (**cấm** invent) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `green-assets` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu12Entity` · `rmms_csdl_bieu12` |
| migration | `Schema_CsdlBieu12` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-12` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=green-assets` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 12 — Cây xanh, thảm cỏ» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · **no peer** · **cấm** invent so-ts-green |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+4 khóm+grassAreaM2+status |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `green-assets` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2b Thảm cỏ · **2 section** |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=green-assets&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `CX-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update typed 1:1 |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed · 2 section | POST · `CX-` · allow_either |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `CX-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `page`/`pageSize`

### Header (15) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

### List subset (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `oleanderClumps` · `ngauClumps` · `palmClumps` · `otherClumps` · `grassAreaM2` · `status`

### Validation `allow_either` (BE)

Accept when `sum(4 khóm) > 0` **OR** `grassAreaM2 > 0` (or both). Reject 422 only when both zero on create/update.

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
| SD-NO-JSON | **required** · shell+typed 1:1 · **cấm** parent `*Json` / detail* SSOT · **cấm** 2 entity |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-12`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu12Entity` + EF · flat clumps/grass |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu12` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join · stop detail* · clumps≥0 · allow_either |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `CX-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection join typed |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · UiSchema seed `green-assets` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + side + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 15 · 2 section khóm+thảm cỏ |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · keep_other · allow_either · side_only · **cấm** detail* only |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub · **cấm** peer invent |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 2 section |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 15 typed · 2 section · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side |
| T-QA-CLUMP-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 4 khóm ≥0 · keep_other |
| T-QA-GRASS-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | allow_either · reject both-zero |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-12` + hub · **cấm** peer invent |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity · T-BE-02 migration · T-BE-03 DTO/service · T-BE-04 IdCode · T-BE-05 list · T-BE-06 soft-delete/UiSchema.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-12` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu12Entity` · table `rmms_csdl_bieu12` · FK `CatalogRecordId` unique 1:1.
- Typed cols: OleanderClumps · NgauClumps · PalmClumps · OtherClumps · GrassAreaM2.
- Shell: RoadCode · KmFrom/KmTo · Side · Province · Status · ManageUnit · Notes · CompanyCode.
- Migration name **`Schema_CsdlBieu12`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat clumps/grass · **cấm** parent `*Json` · **cấm** 2 entity.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for `green-assets`.
- IdCode `CX-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, search, province, status · subset projection.
- Clumps ≥0 · **keep_other** · grass **allow_either** (422 khi cả khóm=0 và grass=0).
- UiSchema seed catalogKind `green-assets` typed 15 · 2 section.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed 15 · no detail* SSOT.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-12`**.
- Kind B A–D+F · **no peer** · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có cây xanh, thảm cỏ».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** invent peer.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side (**side_only**) · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2b Thảm cỏ · footer_actions_only · **2 section** · **cấm** Full-page.
- Section Khóm: oleanderClumps · ngauClumps · palmClumps · otherClumps (+ shared shell).
- Section Thảm cỏ: grassAreaM2 · **allow_either**.
- FormMode create/edit/view/copy ↔ API · side LOOKUP only.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=green-assets` still works · title keep_demo.
- Peer: **none** · **cấm** invent so-ts-green · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `green-assets` typed UiSchema (15 + 2 section).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 12 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 15 form · 2 section · clumps keep_other · grass allow_either · filter V1–V5 · route alias+hub · leave · copy · soft delete · **cấm** detail*-only / peer invent regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side | Dropdown | LOOKUP_STATIC · side_only |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | CX- |
| oleander/ngau/palm/otherClumps | Number | keep_other · ≥0 |
| grassAreaM2 | Number | allow_either |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-12`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu12 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 15 · 2 section · **no peer** |
| Responsive | `/dev-web-responsive` | T-UI-RESP-01 |
| UI review | `/dev-ui-review` | after FE DoD |
| QA | `/agent-qa` | T-QA-* · e2e only here |

**Parallel OK:** T-DM-01 ∥ T-CTX-01 · T-BE-* after T-DM · T-UI-LIST after T-BFF · T-UI-FORM after LIST.

---

## Quality gates (list-form)

| Gate | Expect |
|------|--------|
| Grid AC | YES |
| Leave | YES |
| Report AC | N/A |
| Filter HARD | V1–V5 pass |
| Form | Slideout 2col · typed 15 · 2 section khóm+thảm cỏ · **cấm** Full-page / detail* only |
| Route | alias + hub · **no peer invent** |
| Persist | shell+typed 1:1 · clumps/grass flat · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+4 khóm+grass+status |
| Clump/Grass | keep_other · allow_either · side_only |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-OTHER-CLUMP · Q-GRASS-REQ · Q-TALUY · Q-LIST-COLS · Q-TITLE · Q-DMAP chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-12.md · T-* theo matrix · migration @ 4b · typed 15 · 2 section |
| QA | scenarios + e2e queued `/agent-qa*` |
| Review | findings after QA |

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
| writtenAt | 2026-09-05T13:30:00.000Z |
| contentHashPrior | sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457 |
| headerFingerprintPrior | sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9 |
| taskId | task_04119979 |
