# Team lead — tasks — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col sectioned) |
| formType | `list` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-yyyyMMdd-nnnn` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only · **cấm** merge form |
| solution_confirm | **approve** (`task_547af74d`) |
| design_confirm | **approve** (`task_388b210f`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-02`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_361a0ea2` |
| saTaskId | `task_547af74d` |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| updatedAt | `2026-09-05T08:35:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · Guid IdCode · merge passport/Sổ 6 · passport CRUD · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 02 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=bridges` | **alias** `/csdl-bieu-02` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` | Typed **48 cột** Kind D Slideout sectioned | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU02-TYPED-01** |
| GPS | N/A | **six_numbers** lat/lng×3 | **T-BE-01..03** · **GAP-BIEU02-GPS-01** |
| Beam / Sub / Furn | missing | span*/beam* · abutment*/pier* · bearing*/railing*/drain*/PQ | **T-BE-03** · **GAP-BIEU02-BEAM/SUB/FURN-01** |
| LOAD | missing | **text** design/actualLoad | **T-BE-03** · **GAP-BIEU02-LOAD-01** |
| LEGACY | detail* dump | **keep_hidden** legacyCol64/69 | **T-BE-03** · **GAP-BIEU02-LEGACY-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu2`** 1:1 | **T-BE-01** · **T-BE-02** (Dev/4b) |
| road | Text | SearchInput `road-route` | **T-FE-03** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ 6 / passport | — | deep-link only · **cấm** merge · **cấm** passport CRUD | **T-FE-05** · **GAP-BIEU02-PEER-01** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-02`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-02`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-02` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-02` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=bridges` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `bridges` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu2Entity` · `rmms_csdl_bieu2` |
| migration | `Schema_CsdlBieu2` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-02` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=bridges` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 02 |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `bridges` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 sectioned |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=bridges&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `BR-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed | POST |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `BR-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `beamType` (optional) · `page`/`pageSize`

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
| SD-NO-JSON | **required** · typed child · **cấm** parent `*Json` / detail* SSOT |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-02`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu2Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu2` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · **stop detail* write** |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `BR-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + km + optional `beamType` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + road-route + beamType |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout 48 cột sectioned |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · GPS six_numbers · LOAD text · LEGACY hidden |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer deep-link · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · sectioned |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS Biểu 2 · không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 48 cột typed · **cấm** detail* only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/beamType |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-02` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-02` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlBieu2Entity` · table `rmms_csdl_bieu2` · FK `CatalogRecordId` unique 1:1.
- Columns: bridgeName, gps*×6, span*/beam*, abutment*/pier*, design/actualLoad, bearing*/railing*/curb*/handrail*/drain*/reflective*, steelCompositeBeam, pierAbutmentCrown, lengthM, carriageWidthM, builtYear, waterClearanceM, approachType, navigationClass, updatedByName, legacyCol64/69 (+ SA types).
- Migration name **`Schema_CsdlBieu2`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO `CsdlBieu2Dtos` · join shell↔typed on `resource=bridges`.
- **Stop** writing detail* for this resource at runtime.
- IdCode `BR-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, optional `beamType`, search, province, status.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · GPS six_numbers decimal · LOAD text · LEGACY keep_hidden.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-02`**.
- Kind B A–D+F · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · roadCode SearchInput · kmFrom/kmTo · beamType optional.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 sectioned (GPS/dầm/phần dưới/tải+gối/lan can+thoát) · footer_actions_only · **cấm** Full-page.
- Typed **48 cột** · controlHint 1:1 · **cấm** 3 ô detail* only.
- Q-GPS six_numbers · Q-LOAD text · Q-LEGACY keep_hidden.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=bridges` still works.
- Peer Sổ 6 / passport deep-link only · **cấm** merge form · **cấm** passport CRUD.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06)

- catalogKind `bridges` typed UiSchema · GPS six_numbers · LOAD text · LEGACY hidden.
- DoD: editor full cột · **cấm** generic 3-col SSOT.

### T-OUT-01 — OUT pack

- XLS import/export Biểu 2 · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 48-col form · filter V1–V5 · route alias+hub · leave · copy · soft delete · **cấm** detail*-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/beamType | Dropdown | LOOKUP_STATIC |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | filter+form |
| code | Text ro | BR- |
| bridgeName | Text | * typed |
| gps* ×6 | Number | six_numbers |
| span*/beam* | Number/Text/Dropdown | BEAM |
| abutment*/pier* | Dropdown/Text | SUB |
| design/actualLoad | Text | Q-LOAD |
| bearing*/railing*/drain*/PQ | Number/Text/Checkbox | FURN |
| lengthM/carriageWidthM | Number | * |
| manageUnit | Text | P2 SearchInput DEFER |
| legacyCol64/69 | Text hidden | Q-LEGACY |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-02`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu2 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout sectioned |
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
| Form | Slideout 2col sectioned · typed 48 · **cấm** Full-page / detail* only |
| Route | alias + hub |
| Persist | shell+typed · **cấm** parent JSON |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-GPS · Q-LOAD · Q-LEGACY · Q-ROUTE · Q-PROV · Q-SECTION chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-02.md · T-* theo matrix · migration @ 4b |
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
| writtenAt | 2026-09-05T08:35:00.000Z |
| contentHashPrior | sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 |
| taskId | task_361a0ea2 |
