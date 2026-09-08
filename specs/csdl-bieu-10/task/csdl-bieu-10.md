# Team lead — tasks — csdl-bieu-10

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** tường + rãnh đỉnh) |
| formType | `list` |
| resource | `retaining-walls` |
| formNo | `10` (renumber 9→10 · **T-REN-01**) |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-retaining` (toolbar deep-link · **≠** merge) · **≠** road-assets · **GAP-CSDL-CUC-11** |
| heightAlias | UI `heightM` ↔ DB `WidthM` |
| crest | optional_flat 4 col · **cấm** CrestDitch child P1 |
| solution_confirm | **approve** (`task_652dcd09`) |
| design_confirm | **approve** (`task_652820eb`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-10`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_dbe17f40` |
| saTaskId | `task_652dcd09` |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| updatedAt | `2026-09-05T18:45:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · merge Sổ TS · CrestDitch child P1 · parent `*Json` · BFF remap heightM.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 10 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=retaining-walls` | **alias** `/csdl-bieu-10` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| formNo / title | hub Biểu **9** | formNo **10** · title Kè/tường chắn | **T-REN-01** · **GAP-BIEU10-REN-01** |
| Form | 3 ô `detail*` | Typed **21** Kind D Slideout · **2 section** tường + rãnh đỉnh | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU10-TYPED-01** · **GAP-BIEU10-BLOCK-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu10`** 1:1 · crest flat | **T-BE-01** · **T-BE-02** (Dev/4b) · **cấm** parent `*Json` · **cấm** CrestDitch child |
| wallKind | free / detailPrimary | LOOKUP Gravity/Gabion/RC/Retaining · label_vn | **T-BE-03** · **T-FE-03** · **GAP-BIEU10-KIND-01** |
| structure / material | free | LOOKUP_STATIC Excel seed / lookup | **GAP-BIEU10-STRUCT-01** · **GAP-BIEU10-MAT-01** |
| Dim | missing | lengthM required · heightM↔WidthM · areaM2 optional | **GAP-BIEU10-DIM-01** · Q-HEIGHT · Q-AREA |
| Crest | missing / child risk | optional_flat 4 field · Z2b | **GAP-BIEU10-CREST-01** |
| Year | missing | inServiceYear required Number | **GAP-BIEU10-YEAR-01** |
| List cols | generic | **subset** shared+kind/dim/year/status · schema-config | **T-FE-06** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | — | toolbar deep-link `so-ts-retaining` · **≠** merge | **T-FE-05** · **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-10`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-10`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-10` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-10` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| `peerStdUrl` | `/so-ts-retaining` (toolbar deep-link only) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `retaining-walls` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu10Entity` · `rmms_csdl_bieu10` |
| migration | `Schema_CsdlBieu10` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-10` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=retaining-walls` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 10 Kè, tường chắn |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · **peer** `so-ts-retaining` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+kind/dim/year/status |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `retaining-walls` |
| DES-GRID-H | History — **n/a P1** (không GAP HIST) · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2b rãnh đỉnh · **2 section** |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=retaining-walls&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `KE-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update typed · heightM↔WidthM |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · **cấm** remap heightM ở BFF. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed · 2 section | POST · `KE-` |
| edit | GET `/{id}` | PUT · heightM↔WidthM |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `KE-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `wallKind` · `page`/`pageSize`

### wallKind enum (4 · LOOKUP_STATIC · label_vn)

`Gravity` · `Gabion` · `RC` · `Retaining` (UI: Trọng lực / Rọ / BTCT / Tường chắn)

### Header (21) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

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
| SD-NO-JSON | **required** · shell+typed 1:1 · **cấm** parent `*Json` / detail* SSOT · **cấm** 2 entity · **cấm** CrestDitch child |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-10`→Asset |
| T-REN-01 | Dev | **pending** | — | `/agent-dev` | hub formNo 9→10 · title Biểu 10 Kè/tường chắn |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu10Entity` + EF · flat crest |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu10` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join · heightM↔WidthM · stop detail* |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `KE-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + km + side + wallKind |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** UiSchema seed `retaining-walls` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic · no height remap) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC seed · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + wallKind + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout 21 · 2 section tường+rãnh |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · heightM↔WidthM · crest flat · **cấm** detail* only |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer toolbar `so-ts-retaining` · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 2 section |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 21 typed · 2 section · crest flat · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side/wallKind |
| T-QA-KIND-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | wallKind label_vn + heightM↔WidthM |
| T-QA-CREST-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | optional_flat 4 · **cấm** child entity |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-10` + hub + peer + T-REN-01 |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-06/T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-10` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-REN-01 — Renumber hub label

- Hub formNo **9→10** · title Biểu 10 (Kè, tường chắn) cùng typed (**with_typed**).
- DoD: hub card + alias title consistent · **GAP-BIEU10-REN-01**.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu10Entity` · table `rmms_csdl_bieu10` · FK `CatalogRecordId` unique 1:1.
- Typed cols: Side · WallKind · Structure · Material · LengthM · **WidthM** (↔heightM) · AreaM2 · CrestDitchKind/Structure/Shape/LengthM · InServiceYear (+ shell Road/Km/…).
- Shell: KmFrom/KmTo · RoadCode (ensure nếu thiếu).
- Migration name **`Schema_CsdlBieu10`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat crest · **cấm** parent `*Json` · **cấm** 2 entity · **cấm** CrestDitch child.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · map `dto.heightM` ↔ `entity.WidthM` · **stop** writing detail* for this resource.
- IdCode `KE-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `wallKind`, search, province, status.
- lengthM/heightM required · areaM2 optional · crest optional · inServiceYear required.
- UiSchema seed catalogKind `retaining-walls` typed 21 · 2 section.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · typed 21 · no detail* SSOT · height alias correct.

### T-BFF-01 — BFF proxy

- Forward only · no remap · **cấm** rename heightM↔WidthM ở BFF.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-10`**.
- Kind B A–D+F · peer toolbar · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có kè / tường chắn».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side · **wallKind** · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2b rãnh đỉnh · footer_actions_only · **2 section** · **cấm** Full-page.
- Section tường: wallKind · structure · material · lengthM · heightM · areaM2 · inServiceYear (+ shared shell fields).
- Section rãnh đỉnh: crestDitchKind/Structure/Shape/LengthM optional_flat.
- FormMode create/edit/view/copy ↔ API · heightM bind DTO (API maps WidthM).
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only · **cấm** CrestDitch child.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=retaining-walls` still works · label Biểu 10 (T-REN-01).
- Peer toolbar → `so-ts-retaining` deep-link · **cấm** merge form · **≠** road-assets · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · peer link only.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `retaining-walls` typed UiSchema (21 + 2 section).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 10 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 21 form · 2 section · crest flat · height alias · filter V1–V5 · route alias+hub+peer · renumber · leave · copy · soft delete · **cấm** detail*-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side/wallKind | Dropdown | LOOKUP_STATIC · label_vn |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | KE- |
| structure/material | Dropdown | Excel seed / lookup |
| lengthM/heightM/areaM2 | Number | height↔WidthM · area opt |
| crestDitch* (4) | Dropdown/Number | optional_flat · Z2b |
| inServiceYear | Number | required |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-10`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-REN · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu10 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 21 · 2 section · peer toolbar |
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
| Form | Slideout 2col · typed 21 · 2 section tường+rãnh · **cấm** Full-page / detail* only / CrestDitch child |
| Route | alias + hub · peer toolbar · renumber 10 |
| Persist | shell+typed 1:1 · heightM↔WidthM · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+kind/dim/year/status |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-KIND · Q-STRUCT · Q-MAT · Q-HEIGHT · Q-CREST · Q-AREA · Q-LIST-COLS · Q-REN-LABEL · Q-PEER chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-10.md · T-* theo matrix · migration @ 4b · heightM↔WidthM |
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
| writtenAt | 2026-09-05T18:45:00.000Z |
| contentHashPrior | sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346 |
| taskId | task_dbe17f40 |
