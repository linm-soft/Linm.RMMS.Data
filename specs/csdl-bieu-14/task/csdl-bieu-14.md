# Team lead — tasks — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · section vị trí + TB ITS + HT gắn kèm) |
| formType | `list` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · section vị trí + TB ITS + HT gắn kèm |
| IdCode | `IT-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · **none_p1** · **cấm** AiVision |
| device | deviceType keep_5 · brand · techSpec · qtyOrLength number ≥0 · operatingStatus |
| infra | infraKind keep_3 · clearanceM · infraQty · systemStatus · yearBuilt |
| gps | gpsLat/gpsLng Number · direction LOOKUP |
| solution_confirm | **approve** (`task_c534e53a`) |
| design_confirm | **approve** (`task_d302ab8a`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-14`** + hub NEW card |
| team_lead_confirm | **approve** (autoApprove ON) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_b21db737` |
| saTaskId | `task_c534e53a` |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-05T15:20:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `infra` API · merge `so-ts-its-camera` / `road-assets` / AiVision · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic / MISSING) | New (Biểu 14 typed) | Action |
|------|----------------------------------|---------------------|--------|
| Route | hub MISSING / generic | **alias** `/csdl-bieu-14` + hub NEW card | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` / missing | Typed **21** Kind D Slideout · Z2 TB · Z3 HT | **T-FE-03** / **T-UI-FORM-01** · **GAP-BIEU14-TYPED-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu14`** 1:1 · Device*/Infra*/Gps* flat | **T-BE-01/02** · migration Dev/4b · **cấm** parent `*Json` |
| Device | missing / generic | deviceType keep_5 · brand · techSpec · qtyOrLength ≥0 · operatingStatus | **GAP-BIEU14-DEV-01** · Q-DEVICE-SET |
| Infra | missing | infraKind keep_3 · clearanceM · infraQty · systemStatus · yearBuilt | **GAP-BIEU14-INFRA-01** · Q-INFRA-SET |
| GPS / Dir | missing | gpsLat/gpsLng Number · direction LOOKUP | **GAP-BIEU14-GPS-01** · **GAP-BIEU14-DIR-01** |
| List cols | generic | **subset** shared+deviceType/brand/operatingStatus/infraKind | **T-FE-02/05** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack Biểu 14 | **T-OUT-01** |
| Peer Sổ TS | so-ts-its-camera | cite only · **none_p1** · **cấm** merge / AiVision | **T-FE-05** · **GAP-CSDL-CUC-11** · **GAP-BIEU14-PEER-ITS-01** |
| Hub | thiếu card formNo 14 | NEW card `?resource=its-systems` | **GAP-BIEU14-HUB-01** · **T-UI-PROD-01** |
| DOMAIN-MAP | thiếu slug `14` | add `csdl-bieu-14`→Asset | **T-DM-01** · Q-DMAP add_now |
| Title | — | ctx_its «Biểu 14 — Hệ thống ITS (GTTM)» | Q-TITLE |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode prefix `IT` · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-14`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-14` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-14` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=its-systems` |
| `peerStdUrl` | cite only `so-ts-its-camera` · **cấm** merge toolbar P1 · **cấm** AiVision |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `its-systems` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu14Entity` · `rmms_csdl_bieu14` |
| migration | `Schema_CsdlBieu14` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-14` (+ hub NEW card) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=its-systems` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Biểu 14 — Hệ thống ITS (GTTM)» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · peer cite only · **cấm** merge so-ts-its-camera / AiVision |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+deviceType/brand/operatingStatus/infraKind |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `its-systems` |
| DES-GRID-H | History — **n/a P1** · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · Z2 Thiết bị ITS · Z3 Hạ tầng gắn kèm |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=its-systems&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `IT-` |
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
| create | empty typed · Z2 TB · Z3 HT | POST · `IT-` · qty≥0 · GPS pair |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `IT-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `operatingStatus` · `deviceType` · `side` · `roadCode` · `kmFrom`/`kmTo` · `page`/`pageSize`

### Header (21) SSOT

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

### List subset (Q-LIST-COLS)

`code` · `roadCode`/`roadName` · `province` · `kmFrom`–`kmTo` · `side` · `deviceType` · `brand` · `operatingStatus` · `infraKind`

### Validation device/infra/GPS (BE)

- deviceType ∈ keep_5 (cáp/CCTV/ANPR/VMS/tủ) · qtyOrLength number ≥0
- infraKind ∈ keep_3 (cần vươn/long môn/đế BT)
- gpsLat/gpsLng pair · direction LOOKUP
- Reject 422 khi qty âm / deviceType|infraKind ngoài set / GPS không hợp lệ

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-14`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu14Entity` + EF · Device*/Infra*/Gps* flat |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu14` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + `CsdlCatalogService` branch `its-systems` · stop detail* · qty≥0 · GPS pair |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `IT-` generator · **cấm** Guid · validate keep_5/keep_3 |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter + subset projection join typed |
| T-BE-06 | Dev | **pending** | T-BE-03 | `/agent-dev` | soft-delete + tenant · UiSchema seed `its-systems` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-06 | `/agent-dev` | alias T-BE-06 / T-FE-06 |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-02** FilterBar + deviceType/side/operatingStatus + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-03** Slideout 21 · Z2 TB · Z3 HT |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-06** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-06** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput · = **T-FE-04** |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · device/infra/GPS · **cấm** detail* |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub NEW card · **cấm** peer/AiVision merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · Z2/Z3 |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 21 typed · Z2 TB · Z3 HT · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + deviceType/side/operatingStatus/road |
| T-QA-DEV-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | deviceType keep_5 · qty≥0 · brand/techSpec |
| T-QA-INFRA-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | infraKind keep_3 · clearanceM/infraQty/systemStatus/yearBuilt |
| T-QA-GPS-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | gpsLat/gpsLng · direction LOOKUP |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-14` + hub NEW · **cấm** peer/AiVision merge |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FILTER-01 · T-FE-03→T-UI-FORM-01 · T-FE-04→T-UI-LKP-01 · T-FE-05→T-UI-PROD-01 · T-FE-06→T-UI-LEAVE+ACT · T-BE-01 entity · T-BE-02 migration · T-BE-03 DTO/service · T-BE-04 IdCode · T-BE-05 list · T-BE-06 soft-delete/UiSchema. (SA compact gộp entity+migr ở T-BE-01 / DTO ở T-BE-02 — TL split theo form-type-task-pack.)

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-14` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu14Entity` · table `rmms_csdl_bieu14` · FK `CatalogRecordId` unique 1:1.
- Typed cols: DeviceType · Brand · TechSpec · QtyOrLength · OperatingStatus · InfraKind · ClearanceM · InfraQty · SystemStatus · YearBuilt · Direction · GpsLat · GpsLng.
- Shell: RoadCode · KmFrom/KmTo · Side · Province · Notes · CompanyCode (+ shared).
- Migration name **`Schema_CsdlBieu14`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · flat Device*/Infra*/Gps* · **cấm** parent `*Json` · **cấm** 2 entity.

### T-BE-03 / T-BE-04 / T-BE-05 / T-BE-06 — Service + IdCode + filters + UiSchema

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for `its-systems`.
- IdCode `IT-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `deviceType`, `operatingStatus`, search, province · subset projection.
- qtyOrLength ≥0 · deviceType keep_5 · infraKind keep_3 · GPS pair · direction LOOKUP.
- UiSchema seed catalogKind `its-systems` typed 21 · Z2 TB · Z3 HT.
- Soft-delete + tenant `CompanyCode` · Gates: TZ **n/a** · XCO on GET detail.
- DoD: FormMode↔API green · typed 21 · no detail* SSOT.

### T-BFF-01 — BFF proxy

- Forward only · no business logic.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-14`**.
- Kind B A–D+F · peer cite only · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns · empty «Chưa có hệ thống ITS».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome · **cấm** merge peer/AiVision.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-02 / T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · operatingStatus · deviceType · side · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-03)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · Z2 Thiết bị ITS · Z3 Hạ tầng gắn kèm · footer_actions_only · **cấm** Full-page.
- Z1 Vị trí: roadCode · roadName · province · kmFrom/kmTo · side · direction · gpsLat/gpsLng (+ shared shell).
- Z2 TB ITS: deviceType · brand · techSpec · qtyOrLength · operatingStatus.
- Z3 HT: infraKind · clearanceM · infraQty · systemStatus · yearBuilt · notes · manageUnit P2.
- FormMode create/edit/view/copy ↔ API · LOOKUP sets only · **cấm** invent options.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-06)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub **NEW** card formNo 14 · `?resource=its-systems` · title ctx_its.
- Peer: cite only · **none_p1** · **cấm** merge so-ts-its-camera · **cấm** AiVision · **GAP-CSDL-CUC-11** · **GAP-BIEU14-PEER-ITS-01**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource · hub card visible.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06 / T-BE-06)

- catalogKind `its-systems` typed UiSchema (21 + Z2 TB + Z3 HT).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 14 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 21 form · Z2/Z3 · device keep_5 / qty≥0 · infra keep_3 · GPS/dir · filter V1–V5 · route alias+hub NEW · leave · copy · soft delete · **cấm** detail*-only / peer/AiVision merge regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/operatingStatus/deviceType/side | Dropdown | LOOKUP_STATIC |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | IT- |
| direction/gpsLat/gpsLng | Dropdown/Number | Z1 |
| deviceType/brand/techSpec/qtyOrLength/operatingStatus | Dropdown/Text/Textarea/Number | Z2 · qty≥0 · keep_5 |
| infraKind/clearanceM/infraQty/systemStatus/yearBuilt/notes | Dropdown/Number/Textarea | Z3 · keep_3 · manageUnit P2 |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-14`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu14 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 21 · hub NEW · **cấm** peer/AiVision merge |
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
| Form | Slideout 2col · typed 21 · Z2 TB · Z3 HT · **cấm** Full-page / detail* only |
| Route | alias + hub NEW · **cấm** peer/AiVision merge |
| Persist | shell+typed 1:1 · Device*/Infra*/Gps* flat · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+deviceType/brand/operatingStatus/infraKind |
| Device/Infra/GPS | keep_5 · keep_3 · qty≥0 · GPS pair · direction LOOKUP |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-DIR · Q-QTY-UNIT · Q-DEVICE-SET · Q-INFRA-SET · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-SO09 chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-14.md · T-* theo matrix · migration @ 4b · typed 21 · hub NEW |
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
| writtenAt | 2026-09-05T15:20:00.000Z |
| contentHashPrior | sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112 |
| headerFingerprintPrior | sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c |
| taskId | task_b21db737 |
