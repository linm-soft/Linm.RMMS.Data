# Team lead — tasks — csdl-bieu-15

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · section vị trí + công trình + thiết bị + quản lý) |
| formType | `list` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · section vị trí + công trình + thiết bị + quản lý |
| IdCode | `OF-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · **none_p1** |
| facility | facilityKind keep_5 · facilityName · status · yearBuilt |
| area | courtyard/building/other · number_m2 · qty ≥0 |
| equipment | equipmentKind free_text · qty · status |
| solution_confirm | **approve** (`task_4d337ade`) |
| design_confirm | **approve** (`task_dbeaf01a`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-15`** + hub NEW card |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_94727a59` |
| saTaskId | `task_4d337ade` |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| updatedAt | `2026-09-05T15:30:37.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `infra` API · merge `so-ts-toll` / `so-ts-rest-area` / `so-ts-station-house` / `road-assets` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic / MISSING) | New (Biểu 15 typed) | Action |
|------|----------------------------------|---------------------|--------|
| Route | hub MISSING / generic | **alias** `/csdl-bieu-15` + hub NEW card | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` / missing | Typed **20** Kind D Slideout · Z2 công trình · Z3 TB+QL | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU15-TYPED-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu15`** 1:1 · Facility*/Area*/Equipment* flat | **T-BE-01/02** · migration Dev/4b · **cấm** parent `*Json` |
| Facility | missing / generic | facilityKind keep_5 · facilityName · status · yearBuilt | **GAP-BIEU15-KIND-01** · **GAP-BIEU15-STATUS-01** |
| Area | missing | courtyard/building/other · number_m2 · qty≥0 | **GAP-BIEU15-AREA-01** · Q-AREA-UNIT |
| Equipment | missing | equipmentKind free_text · qty · status | **GAP-BIEU15-EQ-01** · Q-EQ-SET |
| List cols | generic | **subset** shared+facilityKind/facilityName/status | **T-FE-02/05** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack Biểu 15 | **T-OUT-01** |
| Peer Sổ TS | so-ts-toll/rest/station | cite only · **none_p1** · **cấm** merge | **T-FE-05** · **GAP-CSDL-CUC-11** |
| Hub | thiếu card formNo 15 | NEW card `?resource=ops-facilities` | **GAP-BIEU15-HUB-01** · **T-UI-PROD-01** |
| DOMAIN-MAP | thiếu slug `15` | add `csdl-bieu-15`→Asset | **T-DM-01** · Q-DMAP add_now |
| Title | — | ctx_tmc «Biểu 15 — TMC / thu phí / hạt / kho» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `OF` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-15`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-15` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-15` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| `peerStdUrl` | cite only so-ts-toll/rest-area/station-house · **cấm** merge toolbar P1 |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `ops-facilities` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu15Entity` · `rmms_csdl_bieu15` |
| migration | `Schema_CsdlBieu15` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-15` (+ hub NEW card) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=ops-facilities` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 15 — TMC / thu phí / hạt / kho» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · peer cite only · **cấm** merge so-ts-toll/rest/station |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+facilityKind/facilityName/status |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `ops-facilities` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2 Cơ sở/công trình · Z3 Thiết bị + Quản lý |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=ops-facilities&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `OF-` |
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
| create | empty typed · Z2 công trình · Z3 TB+QL | POST · `OF-` · area/qty≥0 |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `OF-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `facilityKind` · `roadCode` · `kmFrom`/`kmTo` · `page`/`pageSize`

### Header (20) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

### List subset (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `facilityKind` · `facilityName` · `status`

### Validation facility/area/equipment (BE)

- facilityKind ∈ keep_5 (TMC/thu phí/dừng chân/nhà hạt/kho) · facilityName required
- courtyardAreaM2 / buildingAreaM2 / otherStructAreaM2 number_m2 ≥0 · buildingQty/otherStructQty ≥0
- equipmentKind free_text · equipmentQty ≥0 · equipmentStatus LOOKUP
- Reject 422 khi qty/area âm / facilityKind ngoài set / facilityName trống

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-15`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu15Entity` + EF · Facility*/Area*/Equipment* flat |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu15` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + `CsdlCatalogService` branch `ops-facilities` · stop detail* · area/qty≥0 |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `OF-` generator · **cấm** Guid · validate keep_5 · facilityName |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection join typed |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · UiSchema seed `ops-facilities` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + facilityKind/status + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 20 · Z2 công trình · Z3 TB+QL |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · facility/area/eq · **cấm** detail* |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub NEW card · **cấm** peer merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · Z2/Z3 |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 20 typed · Z2 công trình · Z3 TB+QL · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + facilityKind/status/road |
| T-QA-FAC-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | facilityKind keep_5 · facilityName · status/yearBuilt |
| T-QA-AREA-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | courtyard/building/other · m2 ≥0 · qty≥0 |
| T-QA-EQ-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | equipmentKind free_text · qty · status |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-15` + hub NEW · **cấm** peer merge |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity · T-BE-02 migration · T-BE-03 DTO/service · T-BE-04 IdCode · T-BE-05 list · T-BE-06 soft-delete/UiSchema. (SA compact gộp entity+migr ở T-BE-01 / DTO ở T-BE-02 — TL split theo form-type-task-pack.)

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-15` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu15Entity` · table `rmms_csdl_bieu15` · FK `CatalogRecordId` unique 1:1.
- Typed cols: FacilityKind · FacilityName · CourtyardAreaM2 · BuildingQty · BuildingAreaM2 · OtherStructQty · OtherStructAreaM2 · Status · YearBuilt · EquipmentKind · EquipmentQty · EquipmentStatus.
- Shell: RoadCode · KmFrom/KmTo · Province · ManageUnit · Notes · CompanyCode (+ shared).
- Migration name **`Schema_CsdlBieu15`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat Facility*/Area*/Equipment* · **cấm** parent `*Json` · **cấm** 2 entity.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for `ops-facilities`.
- IdCode `OF-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `facilityKind`, `status`, search, province · subset projection.
- area/qty ≥0 · facilityKind keep_5 · facilityName required · equipmentKind free_text.
- UiSchema seed catalogKind `ops-facilities` typed 20 · Z2 công trình · Z3 TB+QL.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed 20 · no detail* SSOT.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-15`**.
- Kind B A–D+F · peer cite only · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có cơ sở TMC / thu phí / hạt / kho».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** merge peer.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · facilityKind · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2 Cơ sở/công trình · Z3 Thiết bị + Quản lý · footer_actions_only · **cấm** Full-page.
- Z1 Vị trí: roadCode · roadName · province · kmFrom/kmTo (+ shared shell).
- Z2 Công trình: facilityKind · facilityName · courtyardAreaM2 · buildingQty · buildingAreaM2 · otherStructQty · otherStructAreaM2 · status · yearBuilt.
- Z3 TB+QL: equipmentKind · equipmentQty · equipmentStatus · manageUnit · notes.
- FormMode create/edit/view/copy ↔ API · LOOKUP sets only · **cấm** invent options.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub **NEW** card formNo 15 · `?resource=ops-facilities` · title ctx_tmc.
- Peer: cite only · **none_p1** · **cấm** merge so-ts-toll/rest/station · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · hub card visible.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `ops-facilities` typed UiSchema (20 + Z2 công trình + Z3 TB+QL).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 15 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 20 form · Z2/Z3 · facility keep_5 / area≥0 · equipment free_text · filter V1–V5 · route alias+hub NEW · leave · copy · soft delete · **cấm** detail*-only / peer merge regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/facilityKind | Dropdown | LOOKUP_STATIC · keep_5 |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line · range |
| code | Text ro | OF- |
| facilityKind/Name/courtyard*/building*/other*/status/yearBuilt | Dropdown/Text/Number | Z2 |
| equipmentKind/Qty/Status | Text/Number/Dropdown | Z3 · free_text |
| manageUnit/notes | Text/Textarea | in_20 · org P2 |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-15`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu15 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 20 · hub NEW · **cấm** peer merge |
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
| Form | Slideout 2col · typed 20 · Z2 công trình · Z3 TB+QL · **cấm** Full-page / detail* only |
| Route | alias + hub NEW · **cấm** peer merge |
| Persist | shell+typed 1:1 · Facility*/Area*/Equipment* flat · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+facilityKind/facilityName/status |
| Facility/Area/Eq | keep_5 · number_m2 · qty≥0 · free_text eq |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-KIND-SET · Q-EQ-SET · Q-AREA-UNIT · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-KM chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-15.md · T-* theo matrix · migration @ 4b · typed 20 · hub NEW |
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
| writtenAt | 2026-09-05T15:30:37.000Z |
| contentHashPrior | sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7 |
| headerFingerprintPrior | sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4 |
| taskId | task_94727a59 |
