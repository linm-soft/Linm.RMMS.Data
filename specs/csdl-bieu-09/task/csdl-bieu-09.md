# Team lead — tasks — csdl-bieu-09

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col · **2 section kind**) |
| formType | `list` |
| resource | `boundary-markers` |
| formNo | `09` (renumber 8→9 · **T-REN-01**) |
| columns | `17` · **2 section** theo `markerKind` |
| IdCode | `MK-yyyyMMdd-nnnn` |
| peerSoTs | **none** · **cấm** merge Sổ TS · **≠** road-assets · **GAP-CSDL-CUC-11** |
| solution_confirm | **approve** (`task_fe29c657`) |
| design_confirm | **approve** (`task_0eed32b7`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-09`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_f4dc1618` |
| saTaskId | `task_fe29c657` |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| updatedAt | `2026-09-05T18:05:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · 2 entity · Guid IdCode · merge Sổ TS · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 09 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=boundary-markers` | **alias** `/csdl-bieu-09` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| formNo / title | hub Biểu **8** | formNo **09** · title mốc LG/GPMB | **T-REN-01** · **GAP-BIEU09-REN-01** |
| Form | 3 ô `detail*` | Typed **17** Kind D Slideout · **2 section kind** | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU09-TYPED-01** · **GAP-BIEU09-BLOCK-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu9`** 1:1 | **T-BE-01** · **T-BE-02** (Dev/4b) · **cấm** parent `*Json` |
| markerKind | free / detailPrimary | LOOKUP `RoadLimit`/`GPMB` · code_en · UI VN | **T-BE-03** · **T-FE-03** · **GAP-BIEU09-KIND-01** |
| markerStructure | free | LOOKUP_STATIC Excel seed | **GAP-BIEU09-STRUCT-01** |
| Dim / Qty / Year | missing | L/W/Area optional · Qty default 1 · completedYear required | **GAP-BIEU09-DIM-01** / YEAR-01 |
| List cols | generic | **subset** shared+marker · schema-config | **T-FE-06** · Q-LIST-COLS |
| road | Text | SearchInput `road-route` | **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | — | **none** · ROW riêng | **T-FE-05** · **GAP-CSDL-CUC-11** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-09`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-09`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-09` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-09` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| `peerStdUrl` | — (peer **none**) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `boundary-markers` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + `CsdlBieu9Entity` · `rmms_csdl_bieu9` |
| migration | `Schema_CsdlBieu9` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-09` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=boundary-markers` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 09 mốc LG/GPMB |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset** shared+marker cols |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `boundary-markers` |
| DES-GRID-H | History — **n/a P1** (không GAP HIST) · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 · **2 section kind** |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=boundary-markers&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `MK-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update typed |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |
| API-LKP-02 | GET | `/api/v1/integration/org-units/search` | **DEFER P2** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed · Qty default 1 | POST · `MK-` |
| edit | GET `/{id}` | PUT |
| view | GET `/{id}` | — readOnly |
| copy | GET → clear id/code | POST (new `MK-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `markerKind` · `page`/`pageSize`

### markerKind enum (2 · LOOKUP_STATIC · code_en)

`RoadLimit` · `GPMB` (UI label VN)

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-09`→Asset |
| T-REN-01 | Dev | **pending** | — | `/agent-dev` | hub formNo 8→09 · title Biểu 09 mốc LG/GPMB |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu9Entity` + EF |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu9` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + join shell↔typed · stop detail* |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `MK-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + km + side + markerKind |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC seed · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + markerKind + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full typed · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout 17 · 2 section kind |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · 2 section kind · **cấm** detail* only |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub · **cấm** peer Sổ TS |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 2 section kind |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-OUT-02 | — | **OUT/P2** | — | — | org SearchInput · province master |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 17 typed · 2 section kind · **cấm** detail* |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/km/side/markerKind |
| T-QA-KIND-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | RoadLimit↔GPMB section switch |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-09` + hub + T-REN-01 |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-09` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-REN-01 — Renumber hub label

- Hub formNo **8→09** · title Biểu 09 (Mốc lộ giới / GPMB) cùng typed (**with_typed**).
- DoD: hub card + alias title consistent · **GAP-BIEU09-REN-01**.

### T-BE-01 / T-BE-02 — Entity + migration

- Typed `CsdlBieu9Entity` · table `rmms_csdl_bieu9` · FK `CatalogRecordId` unique 1:1.
- Typed cols: MarkerKind · MarkerStructure · MarkerLengthM · MarkerWidthM · MarkerAreaM2 · MarkerQty · CompletedYear (+ shell Side/Road/Km/…).
- Shell: KmFrom/KmTo · RoadCode (ensure nếu thiếu).
- Migration name **`Schema_CsdlBieu9`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · **cấm** parent `*Json` · **cấm** 2 entity.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO typed · join shell↔typed 1:1 · **stop** writing detail* for this resource.
- IdCode `MK-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`/`kmTo`, `side`, `markerKind`, search, province, status.
- Qty default 1 · ≥1 · completedYear required · L/W/Area optional.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · typed 17 · no detail* SSOT.

### T-BFF-01 — BFF proxy

- Forward only · no remap.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-09`**.
- Kind B A–D+F · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500 · **subset** columns.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · side · **markerKind** · roadCode SearchInput · kmFrom/kmTo Point.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **2 section kind** · **cấm** Full-page.
- Shared: code (ro MK-) · roadCode · province · kmFrom/kmTo · side · markerKind · manageUnit · notes · status.
- Section by kind: RoadLimit / GPMB khối · markerStructure · L/W/Area · Qty (show_always default 1) · completedYear.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey · **cấm** detail* only.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · Qty default 1 · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=boundary-markers` still works · label Biểu 09 (T-REN-01).
- Peer Sổ TS **none** · **cấm** merge form · **≠** road-assets · **GAP-CSDL-CUC-11**.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06)

- catalogKind `boundary-markers` typed UiSchema (17 + 2 section).
- DoD: editor full typed · **cấm** generic 3-col SSOT.

### T-OUT-01 / T-OUT-02 — OUT / P2

- XLS import/export Biểu 9 + skip-bridge · **không block P1**.
- org SearchInput · province master · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 17 form · 2 section kind · filter V1–V5 · route alias+hub · renumber · leave · copy · soft delete · **cấm** detail*-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/side/markerKind | Dropdown | LOOKUP_STATIC · RoadLimit/GPMB |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | Point thường bằng |
| code | Text ro | MK- |
| markerStructure | Dropdown | Excel seed |
| markerLengthM/WidthM/AreaM2 | Number | optional |
| markerQty | Number | default 1 · show_always |
| completedYear | Number | required |
| manageUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · **cấm** peer Sổ TS
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-09`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-REN · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu9 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout 17 · 2 section kind |
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
| Form | Slideout 2col · typed 17 · 2 section kind · **cấm** Full-page / detail* only |
| Route | alias + hub · renumber 09 |
| Persist | shell+typed 1:1 · **cấm** parent JSON · **cấm** 2 entity |
| List cols | subset shared+marker |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-KIND-LABEL · Q-STRUCT · Q-DIM · Q-QTY · Q-LIST-COLS · Q-REN-LABEL chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-09.md · T-* theo matrix · migration @ 4b |
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
| writtenAt | 2026-09-05T18:05:00.000Z |
| contentHashPrior | sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4 |
| taskId | task_f4dc1618 |
