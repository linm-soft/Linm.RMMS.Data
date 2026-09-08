# Team lead — tasks — csdl-bieu-13

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · section vị trí + kích thước) |
| formType | `list` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · section vị trí + kích thước |
| IdCode | `TC-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · **none_p1** |
| dim | lengthM/heightM/areaM2 decimal ≥0 · area **manual** · reject all-zero |
| side | L/R/C/Both LOOKUP · **cấm** free text |
| barrierType | **no_type_keep_13** |
| solution_confirm | **approve** (`task_66b443d8`) |
| design_confirm | **approve** (`task_ba6fcf2c`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-13`** + hub NEW card |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_a0486d94` |
| saTaskId | `task_66b443d8` |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| updatedAt | `2026-09-05T14:00:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `infra` · merge `so-ts-noise-barrier` / `road-assets` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · parent `*Json` · invent barrierType ngoài 13.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic / MISSING) | New (Biểu 13 typed) | Action |
|------|----------------------------------|---------------------|--------|
| Route | hub MISSING / generic | **alias** `/csdl-bieu-13` + hub NEW card | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` / missing | Typed **13** Kind D Slideout · section kích thước | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU13-TYPED-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu13`** 1:1 · LengthM/HeightM/AreaM2 flat | **T-BE-01/02** · migration Dev/4b · **cấm** parent `*Json` |
| Dim | missing / generic | lengthM · heightM · areaM2 Number ≥0 · area **manual** · reject all-zero | **GAP-BIEU13-DIM-01** · Q-AREA-DERIVE |
| side | free / missing | LOOKUP L/R/C/Both | **GAP-BIEU13-SIDE-01** |
| barrierType | — | **no_type_keep_13** · **cấm** thêm cột | Q-BARRIER-TYPE |
| List cols | generic | **subset** shared+lengthM/heightM/areaM2+status | **T-FE-02/05** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack Biểu 13 | **T-OUT-01** |
| Peer Sổ TS | so-ts-noise-barrier | cite only · **none_p1** · **cấm** merge | **T-FE-05** · **GAP-CSDL-CUC-11** |
| Hub | thiếu card formNo 13 | NEW card `?resource=noise-barriers` | **GAP-BIEU13-HUB-01** · **T-UI-PROD-01** |
| DOMAIN-MAP | thiếu slug `13` | add `csdl-bieu-13`→Asset | **T-DM-01** · Q-DMAP add_now |
| Title | — | ctx_tuong «Biểu 13 — Tường chống ồn» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `TC` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-13`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-13` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-13` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| `peerStdUrl` | cite only `so-ts-noise-barrier` · **cấm** merge toolbar P1 |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `noise-barriers` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu13Entity` · `rmms_csdl_bieu13` |
| migration | `Schema_CsdlBieu13` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-13` (+ hub NEW card) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=noise-barriers` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 13 — Tường chống ồn» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · peer cite only · **cấm** merge so-ts-noise-barrier |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+lengthM/heightM/areaM2+status |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `noise-barriers` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2 Kích thước tường |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=noise-barriers&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `TC-` |
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
| create | empty typed · section kích thước | POST · `TC-` · dim ≥0 · reject all-zero |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `TC-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `page`/`pageSize`

### Header (13) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

### List subset (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `lengthM` · `heightM` · `areaM2` · `status`

### Validation dim (BE)

Accept when lengthM/heightM/areaM2 each ≥0 and **not** all-zero on create/update. Area **manual** (không auto length×height). Reject 422 khi all-zero hoặc giá trị âm.

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-13`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu13Entity` + EF · flat LengthM/HeightM/AreaM2 |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu13` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + `CsdlCatalogService` branch `noise-barriers` · stop detail* · dim≥0 · reject all-zero |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `TC-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection join typed |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · UiSchema seed `noise-barriers` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + side + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 13 · section kích thước |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · dim manual · side LOOKUP · **cấm** detail* / barrierType |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub NEW card · **cấm** peer merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · section kích thước |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 13 typed · section kích thước · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side |
| T-QA-DIM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | lengthM/heightM/areaM2 ≥0 · manual area · reject all-zero |
| T-QA-SIDE-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | side L/R/C/Both LOOKUP |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-13` + hub NEW · **cấm** peer merge |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity · T-BE-02 migration · T-BE-03 DTO/service · T-BE-04 IdCode · T-BE-05 list · T-BE-06 soft-delete/UiSchema.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-13` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu13Entity` · table `rmms_csdl_bieu13` · FK `CatalogRecordId` unique 1:1.
- Typed cols: LengthM · HeightM · AreaM2 (decimal ≥0).
- Shell: RoadCode · KmFrom/KmTo · Side · Province · Status · ManageUnit · Notes · CompanyCode.
- Migration name **`Schema_CsdlBieu13`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat dim · **cấm** parent `*Json` · **cấm** 2 entity.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for `noise-barriers`.
- IdCode `TC-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, search, province, status · subset projection.
- Dim ≥0 · area **manual** · reject all-zero (422).
- UiSchema seed catalogKind `noise-barriers` typed 13 · section kích thước.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed 13 · no detail* SSOT · **cấm** barrierType cột.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-13`**.
- Kind B A–D+F · peer cite only · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có tường chống ồn».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** merge peer.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side (L/R/C/Both) · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2 Kích thước tường · footer_actions_only · **cấm** Full-page.
- Section Vị trí: roadCode · roadName · province · kmFrom/kmTo · side (+ shared shell).
- Section Kích thước: lengthM · heightM · areaM2 · **manual** · **cấm** auto derive.
- FormMode create/edit/view/copy ↔ API · side LOOKUP only · **cấm** barrierType.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub **NEW** card formNo 13 · `?resource=noise-barriers` · title ctx_tuong.
- Peer: cite only · **none_p1** · **cấm** merge so-ts-noise-barrier · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · hub card visible.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `noise-barriers` typed UiSchema (13 + section kích thước).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 13 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 13 form · section kích thước · dim ≥0 / reject all-zero · side LOOKUP · filter V1–V5 · route alias+hub NEW · leave · copy · soft delete · **cấm** detail*-only / peer merge / barrierType regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side | Dropdown | LOOKUP_STATIC · L/R/C/Both |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | TC- |
| lengthM/heightM/areaM2 | Number | ≥0 · area manual · reject all-zero |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-13`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu13 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 13 · hub NEW · **cấm** peer merge |
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
| Form | Slideout 2col · typed 13 · section kích thước · **cấm** Full-page / detail* only |
| Route | alias + hub NEW · **cấm** peer merge |
| Persist | shell+typed 1:1 · dim flat · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+lengthM/heightM/areaM2+status |
| Dim/Side | ≥0 · manual area · reject all-zero · side LOOKUP · no_type_keep_13 |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-BARRIER-TYPE · Q-AREA-DERIVE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-13.md · T-* theo matrix · migration @ 4b · typed 13 · hub NEW |
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
| writtenAt | 2026-09-05T14:00:00.000Z |
| contentHashPrior | sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a |
| headerFingerprintPrior | sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008 |
| taskId | task_a0486d94 |
