# Team lead — tasks — csdl-bieu-11

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section** lưới + NLMT) |
| formType | `list` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-lighting` (toolbar deep-link · **≠** merge) · **≠** road-assets · qty ≠ điểm · **GAP-CSDL-CUC-11** |
| cabinet | **split** `cabinetCount` ≠ `solarCabinetCount` |
| solar | optional_flat 6 col · **cấm** Solar child P1 |
| led | allow_zero · GridLed600/240/150/125 |
| gridStatus | align_status tot/tb/kem/hong |
| solution_confirm | **approve** (`task_e96d7cf9`) |
| design_confirm | **approve** (`task_94e69c1a`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-11`** + hub entry |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_345a7e07` |
| saTaskId | `task_e96d7cf9` |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| updatedAt | `2026-09-05T12:35:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · merge Sổ TS · dump điểm→qty · Solar child P1 · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 11 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=lighting-systems` | **alias** `/csdl-bieu-11` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` | Typed **24** Kind D Slideout · **2 section** lưới + NLMT | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU11-TYPED-01** · **GAP-BIEU11-BLOCK-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu11`** 1:1 · solar flat | **T-BE-01** · migration Dev/4b · **cấm** parent `*Json` · **cấm** Solar child |
| LED qty | missing / generic | `gridLed600/240/150/125` Number · **allow_zero** | **GAP-BIEU11-GRID-01** · Q-LED-ZERO |
| gridStatus | free / missing | LOOKUP **align_status** tot/tb/kem/hong | **GAP-BIEU11-GRID-STATUS-01** |
| Grid qty | missing | pole / cabinet / TBA typed | **GAP-BIEU11-GRID-QTY-01** |
| Cabinet | ambiguous | **split** `cabinetCount` ≠ `solarCabinetCount` | Q-CABINET |
| Solar | missing / dump điểm | **6 field** qty optional · flat | **GAP-BIEU11-SOLAR-01** · Q-SOLAR-REQ |
| List cols | generic | **subset** shared+LED4+gridStatus+pole/cabinet+status | **T-FE-06** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | — | toolbar deep-link `so-ts-lighting` · **≠** merge · qty ≠ điểm | **T-FE-05** · **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-11`→Asset | **T-DM-01** |
| Title | demo | keep_demo «Biểu 11 — Hệ thống chiếu sáng» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `LT` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-11`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-11` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-11` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| `peerStdUrl` | `/so-ts-lighting` (toolbar deep-link only) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `lighting-systems` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu11Entity` · `rmms_csdl_bieu11` |
| migration | `Schema_CsdlBieu11` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-11` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=lighting-systems` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 11 — Hệ thống chiếu sáng» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · **peer** `so-ts-lighting` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+LED4+gridStatus+pole/cabinet+status |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `lighting-systems` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2b NLMT · **2 section** |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=lighting-systems&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `LT-` |
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
| create | empty typed · 2 section | POST · `LT-` |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `LT-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `gridStatus` · `page`/`pageSize`

### Header (24) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

### List subset (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `gridLed600`–`gridLed125` · `gridStatus` · `gridPoleCount` · `cabinetCount` · `status` · (solar* form-only P1)

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
| SD-NO-JSON | **required** · shell+typed 1:1 · **cấm** parent `*Json` / detail* SSOT · **cấm** 2 entity · **cấm** Solar child |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-11`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu11Entity` + EF · flat solar · **cấm** Solar child |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu11` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join · stop detail* · LED/solar ≥0 |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `LT-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection join typed |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · = UiSchema seed `lighting-systems` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + gridStatus + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 24 · 2 section lưới+NLMT |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · LED allow_zero · cabinet split · solar flat · **cấm** detail* only |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer toolbar `so-ts-lighting` · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 2 section |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 24 typed · 2 section · solar flat · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side/gridStatus |
| T-QA-LED-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | LED4 allow_zero · cabinet split |
| T-QA-SOLAR-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | optional_flat 6 · **cấm** child entity · **cấm** dump điểm |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-11` + hub + peer |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity · T-BE-02 migration · T-BE-03 DTO/service · T-BE-04 IdCode · T-BE-05 list · T-BE-06 soft-delete/UiSchema.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-11` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu11Entity` · table `rmms_csdl_bieu11` · FK `CatalogRecordId` unique 1:1.
- Typed cols: GridLed600/240/150/125 · GridStatus · GridPoleCount · CabinetCount · SubstationCount · SolarPoleCount · SolarControllerCount · SolarPanel240Wp · SolarLamp100W · SolarBattery145Ah · SolarCabinetCount.
- Shell: RoadCode · KmFrom/KmTo · Side · Province · Status · ManageUnit · Notes · CompanyCode.
- Migration name **`Schema_CsdlBieu11`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat solar · **cấm** parent `*Json` · **cấm** 2 entity · **cấm** Solar child.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for `lighting-systems`.
- IdCode `LT-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `gridStatus`, search, province, status · subset projection.
- LED/solar qty ≥0 · **allow_zero** · solar optional · cabinet **split**.
- UiSchema seed catalogKind `lighting-systems` typed 24 · 2 section.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed 24 · no detail* SSOT.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-11`**.
- Kind B A–D+F · peer toolbar · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có hệ thống chiếu sáng».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side · **gridStatus** · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2b NLMT · footer_actions_only · **2 section** · **cấm** Full-page.
- Section lưới: gridLed600/240/150/125 · gridStatus · gridPoleCount · cabinetCount · substationCount (+ shared shell).
- Section NLMT: solarPoleCount · solarControllerCount · solarPanel240Wp · solarLamp100W · solarBattery145Ah · solarCabinetCount optional_flat.
- FormMode create/edit/view/copy ↔ API · **cấm** dump điểm→qty.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only · **cấm** Solar child.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=lighting-systems` still works · title keep_demo.
- Peer toolbar → `so-ts-lighting` deep-link · **cấm** merge form · **≠** road-assets · qty ≠ điểm · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · peer link only.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `lighting-systems` typed UiSchema (24 + 2 section).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 11 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 24 form · 2 section · solar flat · LED allow_zero · cabinet split · filter V1–V5 · route alias+hub+peer · leave · copy · soft delete · **cấm** detail*-only / dump điểm regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side | Dropdown | LOOKUP_STATIC |
| gridStatus | Dropdown | align_status tot/tb/kem/hong |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | LT- |
| gridLed600/240/150/125 | Number | allow_zero |
| gridPoleCount/cabinetCount/substationCount | Number | cabinet lưới · split |
| solar* (6) | Number | optional_flat · Z2b |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-11`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu11 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 24 · 2 section · peer toolbar |
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
| Form | Slideout 2col · typed 24 · 2 section lưới+NLMT · **cấm** Full-page / detail* only / Solar child |
| Route | alias + hub · peer toolbar |
| Persist | shell+typed 1:1 · solar flat · cabinet split · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+LED4+gridStatus+pole/cabinet+status |
| LED/Solar | allow_zero · optional_flat · **cấm** dump điểm→qty |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-GRID-STATUS · Q-LED-ZERO · Q-SOLAR-REQ · Q-CABINET · Q-LIST-COLS · Q-PEER · Q-TITLE chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-11.md · T-* theo matrix · migration @ 4b · typed 24 · 2 section |
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
| writtenAt | 2026-09-05T12:35:00.000Z |
| contentHashPrior | sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8 |
| headerFingerprintPrior | sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a |
| taskId | task_345a7e07 |
