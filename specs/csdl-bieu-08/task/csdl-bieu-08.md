# Team lead — tasks — csdl-bieu-08

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **shared + 1 child**) |
| formType | `list` |
| resource | `traffic-safety` |
| formNo | `08` (renumber 7→8 · **T-REN-01**) |
| columns | `45` · **11 nhóm** child/`type=` |
| IdCode | `AT-yyyyMMdd-nnnn` |
| peerSoTs | ATGT types (sign/km/guardrail/median/…) · deep-link only · **cấm** merge · **≠** road-assets |
| solution_confirm | **approve** (`task_53a8d473`) |
| design_confirm | **approve** (`task_daa7f8e9`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-08`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_b7d81208` |
| saTaskId | `task_53a8d473` |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| updatedAt | `2026-09-05T17:20:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · wide 45 entity · Guid IdCode · merge Sổ TS form · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 08 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=traffic-safety` | **alias** `/csdl-bieu-08` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| formNo / title | hub Biểu **7** | formNo **08** · title ATGT | **T-REN-01** · **GAP-BIEU08-REN-01** |
| Form | 3 ô `detail*` | Typed **45/11** Kind D Slideout · **shared + 1 child** | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU08-TYPED-01** · **GAP-BIEU08-CHILD-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu8`** parent + **11 children** | **T-BE-01** · **T-BE-02** (Dev/4b) · **cấm** 1 entity wide |
| assetType | generic / missing | LOOKUP 11 · filter `?type=` · Q-TYPE-UX confirm clear | **T-BE-03** · **T-FE-03** · **GAP-BIEU08-TYPE-01** |
| List cols | wide / generic | **subset_by_type** · **cấm** 45 cols cùng lúc | **T-FE-03** · Q-LIST-COLS |
| Child 11 | missing | sign*/marker*/median*/… theo type | **T-BE-01/03** · GAP-BIEU08-SIGN-01…SIGNAL-01 |
| road | Text | SearchInput `road-route` | **T-FE-03** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | ATGT types | deep-link only | **T-FE-05** · **GAP-BIEU08-PEER-01** |
| FE reuse | — | clone `CsdlBieu07Page` + `FormSlideout` + `assetType` child | **T-FE-02** · **cấm** `CsdlFormSlideout` |
| BE scaffold | entity/DTO on disk | wire `CsdlCatalogService` + **Schema_CsdlBieu8** CLI | **T-BE-01/02** · **cấm** invent entity trùng |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-08`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-08`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-08` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-08` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `traffic-safety` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu8Entity` · `rmms_csdl_bieu8` + **11 child tables** |
| migration | `Schema_CsdlBieu8` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-08` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=traffic-safety` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 08 ATGT |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset_by_type** cols |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `traffic-safety` |
| DES-GRID-H | History — **n/a P1** (không GAP HIST) · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · **shared + 1 child** |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=traffic-safety&…` | list paged · filters · optional `type=`/`assetType` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+parent+**1 child** join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `AT-` · matching child only |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update · type-change clear other children |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · **không** child orchestration ở BFF. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters (+ optional type) | — |
| create | empty shared + child by assetType | POST · 1 child block |
| edit | GET `/{id}` | PUT · type-change confirm → clear other children |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `AT-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `type`/`assetType` · `page`/`pageSize`

### assetType enum (11 · LOOKUP_STATIC)

`TRAFFIC_SIGN` · `MARKER_POST` · `MEDIAN` · `ANTI_GLARE` · `TRAFFIC_ISLAND` · `ROAD_STUD` · `GUARDRAIL` · `ROAD_MARKING` · `CRASH_CUSHION` · `CONVEX_MIRROR` · `TRAFFIC_SIGNAL`

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
| SD-NO-JSON | **required** · parent+children · **cấm** parent `*Json` / detail* SSOT · **cấm** wide 45 entity |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-08`→Asset |
| T-REN-01 | Dev | **pending** | — | `/agent-dev` | hub formNo 7→08 · title Biểu 08 ATGT |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu8Entity` + **11 child** entities + EF |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu8` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join shell↔parent↔1 child · stop detail* · type-change clear |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `AT-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + km + side + `type`/`assetType` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic / no child orch) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC seed · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + assetType + road-route · subset_by_type |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout shared+1 child · Q-TYPE-UX |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · 11 child sections · **cấm** detail* only |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer ATGT · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · shared+1 child |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 45/11 typed · shared+1 child · **cấm** detail* / wide |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side/assetType · subset_by_type |
| T-QA-TYPE-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | Q-TYPE-UX confirm clear · 11 type switch |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-08` + hub + T-REN-01 |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-08` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-REN-01 — Renumber hub label

- Hub formNo **7→08** · title Biểu 08 (Hệ thống ATGT) cùng typed (**with_typed**).
- DoD: hub card + alias title consistent · **GAP-BIEU08-REN-01**.

### T-BE-01 / T-BE-02 — Entity + migration

- Parent `CsdlBieu8Entity` · table `rmms_csdl_bieu8` · FK `CatalogRecordId` unique 1:1 · cols: Side, AssetType, BuiltYear (+ shell fields).
- **11 child tables** (1:0..1 per type) — sign / marker / median / antiGlare / island / stud / guardrail / mark / cushion / mirror / signal — theo SA child field map.
- Shell: KmFrom/KmTo · RoadCode (ensure nếu thiếu).
- Migration name **`Schema_CsdlBieu8`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK parent · child FKs · **cấm** parent `*Json` · **cấm** 1 entity wide 45.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO typed · join shell↔parent↔**exactly 1** child by `assetType`.
- Reject payload with multiple/all children · **stop** writing detail* for this resource.
- Type-change: clear other child rows (API) · FE confirm (Q-TYPE-UX).
- IdCode `AT-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `type`/`assetType`, search, province, status.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · 11 child blocks · no wide entity.

### T-BFF-01 — BFF proxy

- Forward only · no remap · **không** child orchestration.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-08`**.
- Kind B A–D+F · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset_by_type** columns.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** 45 cols cùng lúc.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side · **assetType** · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01 · `?type=` sync grid subset.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **shared + 1 child** · **cấm** Full-page.
- Shared: code (ro AT-) · roadCode · province · kmFrom/kmTo · side · assetType · builtYear · manageUnit · notes · status.
- Child section: đúng 1 khối theo assetType (sign* | marker* | … | signal*) · controlHint 1:1.
- Q-TYPE-UX: confirm trước khi đổi assetType → clear child fields.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only · **cấm** show all 11 children.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=traffic-safety` still works · label Biểu 08 (T-REN-01).
- Peer Sổ TS ATGT types deep-link only · **cấm** merge form · **≠** road-assets.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06)

- catalogKind `traffic-safety` typed UiSchema (shared + 11 child sections).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 8 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 45/11 form · shared+1 child · type switch confirm · filter V1–V5 · subset_by_type · route alias+hub · renumber · leave · copy · soft delete · **cấm** detail*-only / wide-entity regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side/assetType | Dropdown | LOOKUP_STATIC · 11 type |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | AT- |
| sign* | Text/Number | TRAFFIC_SIGN child |
| marker* | Dropdown/Number | MARKER_POST · markerKind lookup_static |
| median*/antiGlare*/island*/stud*/guardrail*/mark* | … | child 1 section |
| cushionQty/mirrorQty | Number | CRASH_CUSHION / CONVEX_MIRROR |
| signal*/lamp* | … | TRAFFIC_SIGNAL |
| builtYear | Number | parent |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-08`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-REN · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu8 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout shared+1 child |
| Responsive | `/dev-web-responsive` | T-UI-RESP-01 |
| UI review | `/dev-ui-review` | after FE DoD |
| QA | `/agent-qa` | T-QA-* · e2e only here |

**Parallel OK:** T-DM-01 ∥ T-REN-01 ∥ T-CTX-01 · T-BE-* after T-DM · T-UI-LIST after T-BFF · T-UI-FORM after LIST.

---

## Quality gates (list-form)

| Gate | Expect |
|------|--------|
| Grid AC | YES |
| Leave | YES |
| Report AC | N/A |
| Filter HARD | V1–V5 pass |
| Form | Slideout 2col · typed 45/11 · shared+1 child · **cấm** Full-page / detail* only / wide 45 |
| Route | alias + hub · renumber 08 |
| Persist | shell+parent+children · **cấm** parent JSON |
| Type UX | confirm clear on assetType change |
| List cols | subset_by_type |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-CHILD · Q-TYPE-UX · Q-MARKER-KIND · Q-LIST-COLS · Q-REN-LABEL · Q-PEER chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-08.md · T-* theo matrix · migration @ 4b |
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
| writtenAt | 2026-09-05T17:20:00.000Z |
| contentHashPrior | sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be |
| taskId | task_b7d81208 |
