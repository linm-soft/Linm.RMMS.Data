# Team lead — tasks — csdl-bieu-07

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **3 section**) |
| formType | `list` |
| resource | `shoulders-fences` |
| formNo | `07` (renumber 10→7 · **T-REN-01**) |
| columns | `20` |
| IdCode | `LE-yyyyMMdd-nnnn` |
| peerSoTs | `SHOULDER` · deep-link only · **cấm** merge form · **≠** road-assets |
| solution_confirm | **approve** (`task_b41ac662`) |
| design_confirm | **approve** (`task_50b066b7`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-07`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_02e3c2e7` |
| saTaskId | `task_b41ac662` |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| updatedAt | `2026-09-05T16:45:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · Guid IdCode · merge Sổ TS form · parent `*Json` · expose FencePanelCount P1.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 07 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=shoulders-fences` | **alias** `/csdl-bieu-07` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| formNo / title | hub Biểu **10** | formNo **07** · title taluy | **T-REN-01** · **GAP-BIEU07-REN-01** |
| Form | 3 ô `detail*` | Typed **20 cột** Kind D Slideout · **3 section** | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU07-TYPED-01** |
| Shoulder | missing | KC + dài/rộng/DT | **T-BE-03** · **GAP-BIEU07-SHOULDER-01** |
| Slope | missing | `slopeLengthM`↔`SlopeClearingM` + `slopeAreaM2` | **T-BE-03** · **GAP-BIEU07-SLOPE-01** |
| Fence | missing | kind · postCount · lengthKm | **T-BE-03** · **GAP-BIEU07-FENCE-01** |
| Fence len unit | — | UI **km** · DB `FenceLengthM` ×1000 | **T-BE-03** · **GAP-BIEU07-FENCE-LEN-01** |
| FencePanelCount | — | **omit_p1** | **T-OUT-02** · **GAP-BIEU07-PANEL-01** |
| Side | generic | shared L/R/Both · 1 field | **T-BE-03** · Q-SIDE |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu7`** 1:1 | **T-BE-01** · **T-BE-02** (Dev/4b) |
| road | Text | SearchInput `road-route` | **T-FE-03** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | `SHOULDER` | deep-link only | **T-FE-05** · **GAP-BIEU07-PEER-01** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-07`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-07`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-07` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-07` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `shoulders-fences` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu7Entity` · `rmms_csdl_bieu7` |
| migration | `Schema_CsdlBieu7` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-07` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=shoulders-fences` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 07 |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `shoulders-fences` |
| DES-GRID-H | History — **n/a P1** (không GAP HIST) · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · **3 section** lề/taluy/HR |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=shoulders-fences&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `LE-` · km→m |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update shell+typed |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · **không** convert km↔m ở BFF. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed | POST · fenceLengthKm→FenceLengthM |
| edit | GET `/{id}` | PUT · same unit convert |
| view | GET `/{id}` | — readOnly · FenceLengthM→km display |
| copy | GET → clear id/code | POST (new `LE-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `fenceKind` · `page`/`pageSize`

### Unit conversion (HARD · API service)

| Direction | Rule |
|-----------|------|
| Write | `FenceLengthM = fenceLengthKm * 1000` |
| Read | `fenceLengthKm = FenceLengthM / 1000` |
| Slope | `slopeLengthM` ↔ `SlopeClearingM` 1:1 (rename only) |

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-07`→Asset |
| T-REN-01 | Dev | **pending** | — | `/agent-dev` | hub formNo 10→07 · title Biểu 07 taluy |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu7Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu7` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join · SlopeClearingM↔slopeLengthM · FenceLengthM↔km · **stop detail* write** |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `LE-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + kmFrom/kmTo + side + fenceKind |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic / no unit convert) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC seed · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout 20 cột · 3 section |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · 3 section · **cấm** FencePanelCount P1 |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer SHOULDER · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 3 section |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | FencePanelCount · org SearchInput |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 20 cột typed · 3 section · **cấm** detail* only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side/fenceKind |
| T-QA-UNIT-01 | QA | **pending** | T-BE-03 | `/agent-qa` | fenceLengthKm↔m · slopeLengthM↔SlopeClearingM |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-07` + hub + T-REN-01 |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-07` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-REN-01 — Renumber hub label

- Hub formNo **10→07** · title Biểu 07 (lề / taluy / hàng rào) cùng typed.
- DoD: hub card + alias title consistent · **GAP-BIEU07-REN-01**.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlBieu7Entity` · table `rmms_csdl_bieu7` · FK `CatalogRecordId` unique 1:1.
- Columns: Side, ShoulderStructure, ShoulderLengthM, ShoulderWidthM, ShoulderAreaM2, SlopeClearingM, SlopeAreaM2, FenceKind, FencePostCount, FenceLengthM, BuiltYear.
- Shell: KmFrom/KmTo · RoadCode (ensure nếu thiếu).
- Migration name **`Schema_CsdlBieu7`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · **cấm** parent `*Json` · **cấm** FencePanelCount P1 column expose.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO `CsdlBieu7Dtos` · join shell↔typed on `resource=shoulders-fences`.
- Map: `slopeLengthM`↔`SlopeClearingM` · `fenceLengthKm`↔`FenceLengthM` (×1000).
- **Stop** writing detail* for this resource at runtime.
- IdCode `LE-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `fenceKind`, search, province, status.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · 3 khối typed · unit convert đúng.

### T-BFF-01 — BFF proxy

- Forward only · no remap · **không** convert km↔m.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-07`**.
- Kind B A–D+F · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side · fenceKind · roadCode SearchInput · kmFrom/kmTo Line.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **3 section** lề/taluy/HR · **cấm** Full-page.
- Typed **20 cột** · controlHint 1:1 · **cấm** 3 ô detail* only.
- Section lề: shoulderStructure * · length/width * · area optional.
- Section taluy: slopeLengthM · slopeAreaM2.
- Section HR: fenceKind · fencePostCount ≥0 · fenceLengthKm (UI km).
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** FencePanelCount P1.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=shoulders-fences` still works · label Biểu 07 (T-REN-01).
- Peer Sổ TS `SHOULDER` deep-link only · **cấm** merge form · **≠** road-assets.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06)

- catalogKind `shoulders-fences` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export + skip-bridge · **không block P1**.
- FencePanelCount · org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 20-col form · 3 section · filter V1–V5 · unit convert · route alias+hub · renumber · leave · copy · soft delete · **cấm** detail*-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side/fenceKind | Dropdown | LOOKUP_STATIC |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Line |
| code | Text ro | LE- |
| shoulderStructure | Dropdown | lookup_seed * |
| shoulderLengthM/WidthM | Number | * m |
| shoulderAreaM2 | Number | optional |
| slopeLengthM/AreaM2 | Number | =SlopeClearingM |
| fencePostCount | Number | ≥0 |
| fenceLengthKm | Number | UI km |
| builtYear | Number | typed |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-07`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-REN · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu7 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 3 section |
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
| Form | Slideout 2col · typed 20 · 3 section · **cấm** Full-page / detail* only |
| Route | alias + hub · renumber 07 |
| Persist | shell+typed · **cấm** parent JSON |
| Units | fenceLengthKm↔m · slopeLengthM↔SlopeClearingM |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-SIDE · Q-SLOPE · Q-FENCE-LEN · Q-PANEL · Q-STRUCT · Q-REN-LABEL chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-07.md · T-* theo matrix · migration @ 4b |
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
| writtenAt | 2026-09-05T16:45:00.000Z |
| contentHashPrior | sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 |
| taskId | task_02e3c2e7 |
