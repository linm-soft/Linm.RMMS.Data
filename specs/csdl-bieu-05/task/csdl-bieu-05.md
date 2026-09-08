# Team lead — tasks — csdl-bieu-05

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout 2col) |
| formType | `list` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-ditch` · deep-link only · **cấm** merge form |
| solution_confirm | **approve** (`task_e5779496`) |
| design_confirm | **approve** (`task_8881f84f`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-bieu-05`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_c0b3e6ef` |
| saTaskId | `task_e5779496` |
| contentHashPrior | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprintPrior | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| updatedAt | `2026-09-05T13:46:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` only · Guid IdCode · merge Sổ TS form · parent `*Json`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (hub generic) | New (Biểu 05 typed) | Action |
|------|------------------------|---------------------|--------|
| Route | hub-only `?resource=ditches` | **alias** `/csdl-bieu-05` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** |
| Form | 3 ô `detail*` | Typed **18 cột** Kind D Slideout | **T-FE-02** / **T-UI-FORM-01** · **GAP-BIEU05-TYPED-01** |
| ditchKind | missing / free | Dropdown hở/kín LOOKUP | **T-BE-03** · **GAP-BIEU05-KIND-01** |
| Shape + KC | free / missing | Dropdown hình + KC LOOKUP | **T-BE-03** · **GAP-BIEU05-SHAPE-01** |
| Aperture / drain | — | **free_text** apertureSize · drainageCapacity | **T-UI-FIELD-01** · Q-APERTURE · Q-DRAIN |
| Range | — / kmPoint | **kmFrom/kmTo** filter+form | **T-BE-05** · **GAP-BIEU05-RANGE-01** |
| Persist | shell detail* only | shell + **`Schema_CsdlBieu5`** 1:1 | **T-BE-01** · **T-BE-02** (Dev/4b) |
| road | Text | SearchInput `road-route` | **T-FE-03** / **T-UI-LKP-01** · **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC | **keep_static** P1 | **T-UI-FILTER-01** |
| manageUnit | Text | Text P1 · SearchInput P2 | **DEFER P2** · **GAP-CSDL-ORG-01** |
| XLS | stub | **OUT** pack | **T-OUT-01** |
| Peer Sổ TS | `so-ts-ditch` | deep-link only | **T-FE-05** · **GAP-BIEU05-PEER-01** |
| DOMAIN-MAP | thiếu slug | add `csdl-bieu-05`→Asset | **T-DM-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-bieu-05`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-bieu-05` |
| `mfeStdUrl` | `http://localhost:9301/csdl-bieu-05` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=ditches` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `ditches` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu5Entity` · `rmms_csdl_bieu5` |
| migration | `Schema_CsdlBieu5` · **Dev / Step 4b only** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-05` (+ hub entry) | **SELECTED** — Q-ROUTE `alias_now` · Design/SA locked |
| B | hub-only `?resource=ditches` | rejected — thiếu alias P1 |
| C | custom / invent so-ts API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title Biểu 05 |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `ditches` |
| DES-GRID-H | History — **n/a P1** (không GAP HIST) · optional verify reuse |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| Tree / Map | **n/a** — map=none · gis deep-link only |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=ditches&…` | list paged · filters |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed join · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed · IdCode `RN-` |
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
| copy | GET → clear id/code | POST (new `RN-`) |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `ditchKind` · `roadCode` · `kmFrom` · `kmTo` · `page`/`pageSize`

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
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-bieu-05`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlBieu5Entity` + EF config |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlBieu5` · shell KmFrom/KmTo nếu thiếu · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · **stop detail* write** |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `RN-` generator · **cấm** Guid |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filter `roadCode` + `kmFrom`/`kmTo` + `ditchKind` |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-06** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status/ditchKind LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-03** FilterBar + road-route |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout 18 cột typed |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-04** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-04** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · Q-SHAPE · aperture/drain free_text |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-05** hub + peer deep-link · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | no HIST GAP |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / skip-bridge · không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | 18 cột typed · **cấm** detail* only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + roadCode/kmFrom/kmTo/ditchKind |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-bieu-05` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-FILTER-01+LKP · T-FE-04→T-UI-LEAVE+ACT · T-FE-05→T-UI-PROD-01 · T-FE-06→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-bieu-05` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlBieu5Entity` · table `rmms_csdl_bieu5` · FK `CatalogRecordId` unique 1:1.
- Columns: DitchKind, Structure, Shape, ApertureSize, LengthM, DrainageCapacity, BuiltYear, OwnerUnit (+ SA types).
- Shell: KmFrom, KmTo (ensure nếu thiếu).
- Migration name **`Schema_CsdlBieu5`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · **cấm** parent `*Json`.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO `CsdlBieu5Dtos` · join shell↔typed on `resource=ditches`.
- **Stop** writing detail* for this resource at runtime.
- IdCode `RN-yyyyMMdd-nnnn` BE generate.
- List filters: `roadCode`, `kmFrom`, `kmTo`, `ditchKind`, search, province, status.
- Gates: TZ **n/a** · XCO on GET detail · tenant `CompanyCode`.
- DoD: FormMode↔API green · shape rect/trap/round · aperture/drain free_text.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-bieu-05`**.
- Kind B A–D+F · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-03)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status · ditchKind · roadCode SearchInput · kmFrom · kmTo.
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed **18 cột** · controlHint 1:1 · **cấm** 3 ô detail* only.
- ditchKind Dropdown · shape rect_trap_round · apertureSize/drainageCapacity free_text · lengthM Number *.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-LEAVE-01 + T-UI-ACT-01 (= T-FE-04)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm.
- DoD: leave gate · copy clears id/code · reload list after delete.

### T-UI-PROD-01 (= T-FE-05)

- Hub card entry `?resource=ditches` still works.
- Peer Sổ TS `so-ts-ditch` deep-link only · **cấm** merge form.
- Map: toolbar → gis deep-link only · **cấm** invent map.
- DoD: alias + hub both list same resource.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-06)

- catalogKind `ditches` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col SSOT.

### T-OUT-01 — OUT pack

- XLS import/export + skip-bridge · **không block P1**.
- org SearchInput · province master · aperture/drain Number · **DEFER P2**.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · 18-col form · filter V1–V5 · route alias+hub · leave · copy · soft delete · **cấm** detail*-only regression.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | notes |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status/ditchKind | Dropdown | LOOKUP_STATIC |
| roadCode | SearchInput | road-route P1 |
| kmFrom/kmTo | Number | filter+form |
| code | Text ro | RN- |
| side | Dropdown | L/R/C/Both |
| structure | Dropdown | BT/BTCT/… |
| shape | Dropdown | rect_trap_round |
| apertureSize | Text | free_text Q-APERTURE |
| lengthM | Number | typed * |
| drainageCapacity | Text | free_text Q-DRAIN |
| builtYear | Number | typed |
| manageUnit/ownerUnit | Text | org P2 DEFER |
| notes/status | Textarea/Dropdown | shell |

---

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl prototype · mfeStdUrl `/csdl-bieu-05`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-DM · T-BE-* · T-BFF · T-PERM · Schema_CsdlBieu5 @ 4b |
| FE | `/agent-dev` | T-UI-* · typed page · FilterBar · Slideout |
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
| Form | Slideout 2col · typed 18 · **cấm** Full-page / detail* only |
| Route | alias + hub |
| Persist | shell+typed · **cấm** parent JSON |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-ROUTE · Q-PROV · Q-APERTURE · Q-DRAIN · Q-SHAPE chốt · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-05.md · T-* theo matrix · migration @ 4b |
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
| writtenAt | 2026-09-05T13:46:00.000Z |
| contentHashPrior | sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117 |
| taskId | task_c0b3e6ef |
