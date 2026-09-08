# Team lead — tasks — csdl-bieu-16

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · 5 section Định danh + Đặc trưng nút + Nhánh child + ATGT + Quản lý) |
| formType | `list` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT |
| IdCode | `IX-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · **none_p1** |
| child | `branches[]` embed · **min_1** · replace-all PUT · **cấm** flatten-only |
| solution_confirm | **approve** (`task_5c3d4c6b`) |
| design_confirm | **approve** (`task_e0f9dbb6`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-16`** + hub NEW card |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_4dfa0ca5` |
| saTaskId | `task_5c3d4c6b` |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| updatedAt | `2026-09-05T17:05:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `infra` API · merge `so-ts-interchange` / `road-assets` · flatten-only 1 nhánh · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 catalog entity · Guid IdCode · parent `*Json` · nested branch API P1.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic / MISSING) | New (Biểu 16 typed) | Action |
|------|----------------------------------|---------------------|--------|
| Route | hub MISSING / generic | **alias** `/csdl-bieu-16` + hub NEW card | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` / missing | Typed **39** Kind D Slideout · 5 section + child `branches[]` **min_1** | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU16-TYPED-01** · **GAP-BIEU16-BRANCH-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu16`** 1:1 + **Branch** 1–n | **T-BE-01/02** · migration Dev/4b · **cấm** parent `*Json` |
| Child | Excel flatten `branch*` | embed DTO `branches[]` · replace-all PUT · **cấm** flatten-only | **GAP-CSDL-CUC-09** · Q-CHILD-API **embed** |
| Main* / ATGT | missing | mainBed/Surface/Median/Lane · atgt* qty | **GAP-BIEU16-MAIN-01** · **GAP-BIEU16-ATGT-01** |
| Type / traffic | missing | interchangeType cite_excel · trafficOrg lookup | **GAP-BIEU16-TYPE-01** |
| Km | generic | `kmMain` + `kmAux` point_main | **GAP-BIEU16-KM-01** |
| List cols | generic | **subset** shared+type/status/kmMain/branchCount | **T-FE-02/05** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack Biểu 16 | **T-OUT-01** |
| Peer Sổ TS | so-ts-interchange | cite only · **none_p1** · **cấm** merge | **T-FE-05** · **GAP-CSDL-CUC-11** |
| Hub | thiếu card formNo 16 | NEW card `?resource=interchanges` | **GAP-BIEU16-HUB-01** · **T-UI-PROD-01** |
| DOMAIN-MAP | thiếu slug `16` | add `csdl-bieu-16`→Asset | **T-DM-01** · Q-DMAP add_now |
| Title | — | nut_giao «Biểu 16 — Nút giao» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `IX` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-16`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-16` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-16` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=interchanges` |
| `peerStdUrl` | cite only so-ts-interchange · **cấm** merge toolbar P1 |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `interchanges` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu16Entity` · `rmms_csdl_bieu16` + Branch `rmms_csdl_bieu16_branch` |
| migration | `Schema_CsdlBieu16` (includes Branch) · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-16` (+ hub NEW card) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=interchanges` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 16 — Nút giao» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · peer cite only · **cấm** merge so-ts-interchange |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+interchangeType/status/kmMain/branchCount |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `interchanges` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 + DES-FORM-BRANCH |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=interchanges&…` | list paged · filters · `branchCount` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join + `branches[]` embed · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + branches · IdCode `IX-` · min_1 |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update typed 1:1 · branches replace-all |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed · branches min_1 seed | POST · `IX-` · branches embed |
| edit | GET `/{id}` (+ branches) | PUT · branches replace-all |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `IX-` · keep branches) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `interchangeType` · `status` · `roadCode` · `kmMain` · `page`/`pageSize`

### Header (39) SSOT

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Runtime: Excel flatten `branch*` → child grid `branches[]` (**GAP-CSDL-CUC-09**).

### List subset (Q-LIST-COLS)

`code` · `name` · `roadCode`/`roadName` · `province` · `kmMain` · `interchangeType` · `status` · `branchCount`

### Validation header + branches (BE)

- IdCode `IX-yyyyMMdd-nnnn` BE generate · **cấm** Guid
- interchangeType ∈ cite_excel LOOKUP · trafficOrg LOOKUP · status LOOKUP · side LOOKUP
- kmMain point_main · kmAux optional · main* widths/lanes ≥0 · atgt* qty ≥0
- `branches[]` **min_1** · each: branchName required · km/length/widths/radius ≥0 when set
- Reject 422 khi branches empty / type ngoài set / name trống

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
| SD-NO-JSON | **required** · shell+typed 1:1 + Branch table · **cấm** parent `*Json` / detail* SSOT · **cấm** 2 catalog entity |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-16`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu16Entity` + `CsdlBieu16BranchEntity` + EF |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu16` (+ Branch) · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | `CsdlBieu16Dtos` + service branch `interchanges` · embed replace-all · stop detail* |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `IX-` · validate header + branches **min_1** |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection + `branchCount` |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · UiSchema seed `interchanges` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + type/status/kmMain + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 39 · 5 section + child grid min_1 |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · main*/ATGT/branches · **cấm** detail* |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub NEW card · **cấm** peer merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · Z1–Z3+BRANCH |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 39 typed · 5 section · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + type/status/road/kmMain |
| T-QA-BRANCH-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | child min_1 · add/remove · **cấm** flatten-only |
| T-QA-MAIN-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | mainBed/Surface/Median/Lane |
| T-QA-ATGT-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | atgt* qty ≥0 |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-16` + hub NEW · **cấm** peer merge |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity+Branch · T-BE-02 migration · T-BE-03 DTO/service embed · T-BE-04 IdCode/min_1 · T-BE-05 list · T-BE-06 soft/UiSchema. (SA compact gộp entity+Branch ở T-BE-01 / DTO ở T-BE-02 — TL split theo form-type-task-pack.)

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-16` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu16Entity` · table `rmms_csdl_bieu16` · FK `CatalogRecordId` unique 1:1.
- Child `CsdlBieu16BranchEntity` · table `rmms_csdl_bieu16_branch` · FK `Bieu16Id` 1–n · SortOrder.
- Header cols: Name · KmMain · KmAux · Side · InterchangeType · TrafficOrg · MainBedWidth · MainSurfaceWidth · MainMedianWidth · MainLaneCount · AtgtSign · AtgtMarking · AtgtIsland · AtgtLight · Status · YearBuilt · Lat · Lng (+ shell audit).
- Branch cols: BranchName · BranchKmFrom/To · BranchSide · BranchDirection · BranchLength · BranchBedWidth · BranchSurfaceWidth · BranchMedianWidth · BranchRadius · SortOrder.
- Shell: RoadCode · RoadName · Province · ManageUnit · Notes · CompanyCode · Code (+ shared).
- Migration name **`Schema_CsdlBieu16`** (includes Branch) — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · Branch 1–n · **cấm** parent `*Json` · **cấm** 2 catalog entity · **cấm** nested branch API P1.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed + `branches[]` · join shell↔typed 1:1 · embed replace-all on PUT · **stop** writing detail* for `interchanges`.
- IdCode `IX-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmMain`, `interchangeType`, `status`, search, province · subset projection + `branchCount`.
- Validate branches **min_1** · interchangeType cite_excel · main*/atgt* ≥0.
- UiSchema seed catalogKind `interchanges` typed 39 · 5 section + child grid.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed + embed · no detail* SSOT · no flatten-only.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-16`**.
- Kind B A–D+F · peer cite only · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có nút giao».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** merge peer.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · interchangeType · status · roadCode SearchInput · kmMain Number.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1 Định danh · Z2 Đặc trưng nút · DES-FORM-BRANCH child · Z3 ATGT + Quản lý · footer_actions_only · **cấm** Full-page.
- Z1: code · name · roadCode · roadName · province · kmMain · kmAux · side.
- Z2: interchangeType · trafficOrg · mainBedWidth · mainSurfaceWidth · mainMedianWidth · mainLaneCount.
- BRANCH: `branches[]` add/remove · **min_1** · **cấm** flatten-only.
- Z3: atgtSign/Marking/Island/Light · status · yearBuilt · manageUnit · notes · lat/lng.
- FormMode create/edit/view/copy ↔ API · LOOKUP sets only · **cấm** invent options.
- DoD: all write fields bind typed DTO + branches · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub **NEW** card formNo 16 · `?resource=interchanges` · title nut_giao.
- Peer: cite only · **none_p1** · **cấm** merge so-ts-interchange · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · hub card visible · đóng **GAP-CSDL-CUC-05** khi hub+API PASS.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `interchanges` typed UiSchema (39 + child + ATGT).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 16 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 39 form · child min_1 · main*/ATGT · filter V1–V5 · route alias+hub NEW · leave · copy · soft delete · **cấm** detail*-only / flatten-only / peer merge regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/interchangeType/status | Dropdown | LOOKUP_STATIC · cite_excel |
| roadCode | SearchInput | road-route P1 |
| kmMain | Number | point_main filter |
| code | Text ro | IX- |
| name/kmAux/side | Text/Number/Dropdown | Z1 |
| interchangeType/trafficOrg/main* | Dropdown/Number | Z2 |
| branches[] | child grid | min_1 · add/remove |
| atgt* | Number qty | Z3 |
| manageUnit/notes/lat/lng | Text/Textarea/Number | in_39 · org P2 |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP · DES-FORM-BRANCH
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-16`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu16 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 39 + child · hub NEW · **cấm** peer merge |
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
| Form | Slideout 2col · typed 39 · child min_1 · **cấm** Full-page / detail* only / flatten-only |
| Route | alias + hub NEW · **cấm** peer merge |
| Persist | shell+typed 1:1 + Branch 1–n · **cấm** parent JSON · **cấm** 2 catalog entity |
| List cols | subset shared+type/status/kmMain/branchCount |
| Child | embed min_1 · replace-all · **cấm** nested API P1 |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-TYPE-SET · Q-TRAFFIC-ORG · Q-ATGT · Q-BRANCH-MIN · Q-KM · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-CHILD-API chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-16.md · T-* theo matrix · migration @ 4b · typed 39 + Branch · hub NEW |
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
| writtenAt | 2026-09-05T17:05:00.000Z |
| contentHashPrior | sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b |
| headerFingerprintPrior | sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc |
| taskId | task_4dfa0ca5 |
