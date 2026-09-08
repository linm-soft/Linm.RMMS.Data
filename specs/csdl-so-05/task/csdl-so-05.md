# Team lead — tasks — csdl-so-05

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · **3 tabs** C.1/C.2/BS `inline_grid` **add-row**) |
| formType | `list` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| peerReport | `rpt-tngt` read-only drill sau typed READY · **cấm** CRUD / merge form |
| peerSo04 | `traffic-counts` ROW riêng · **cấm** merge · CUC-07 khi so-04+so-05 PASS |
| solution_confirm | **approve** (`task_9c8cec8e`) |
| design_confirm | **approve** (`task_0332f55e`) |
| team_lead_confirm | **approve** (autoApprove ON · `task_fa602126`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-05`** + hub entry |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_fa602126` |
| saTaskId | `task_9c8cec8e` |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| updatedAt | `2026-09-06T06:15:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `slideout-form-layout` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/accident-summaries` / `infra/*` · start role khác (**GAP-PKT-ROLE-01**) · form 3 ô `detail*` / `col1–3` only · Guid IdCode · 16 hạng xe · merge Sổ TS / so-04 · parent `*Json` · invent map/file API · CRUD `rpt-tngt`.

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Sổ 05 typed) | Action |
|------|----------------|-------------------|--------|
| Resource | thiếu / gắn so-04 «(+ TNGT)» | **NEW** `accident-summaries` typed T-SO-05 | **T-BE-03/04** · GAP-SO05-RES-01 · GAP-SO05-SPLIT-01 |
| Hub card | chưa có card | NEW card formNo **05** · title «Sổ 05 — TNGT + điểm đen» | **T-BE-06** · **T-UI-PROD-01** · GAP-SO05-FORMNO-01 |
| Route | hub-only / missing | **alias** `/csdl-so-05` + hub | **route_confirm=route_a** · **T-FE-01** / **T-UI-LIST-01** · GAP-SO05-ROUTE-01 |
| Form | generic detail*/col1–3 | Typed header + **3 tabs** C.1 / C.2 / BS | **T-FE-02/03** · GAP-SO05-TYPED/C1/C2/BS-01 |
| Persist | shell / flat | shell + **`Schema_CsdlSo05`** + C1/C2/BS children | **T-BE-01** · **T-BE-02** (Dev/4b) |
| Period | — | month→1–12 · half→1\|2 · year=year sync | **T-BE-03** · **T-UI-FIELD-01** · Q-PERIOD |
| Cause/damage | — | 3× Number cause · damage Number + «triệu đồng» | **T-UI-ENTRIES-01** · Q-CAUSE · Q-DAMAGE |
| BS assess | — | `blackspot\|potential\|under_watch` | **T-BE-03** · **T-UI-ENTRIES-01** · Q-BS-ASSESS |
| Status | — | `draft\|active\|closed` | **T-UI-FILTER-01** · Q-STATUS |
| road | Text / weak | SearchInput road-route | **T-FE-04** / **T-UI-LKP-01** · GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** 5 tỉnh P1 | **T-UI-FILTER-01** · GAP-CSDL-PROV-01 |
| org / XLS | — | contractor Text P1 · org **DEFER P2** · XLS **OUT** | **T-OUT-01** |
| Peer so-04 | title «(+ TNGT)» | drop khi cả 2 PASS (CUC-07) | **T-BE-06** · GAP-CSDL-CUC-07 |
| Peer report | — | `rpt-tngt` RO READY · **cấm** CRUD | **T-UI-PROD-01** · GAP-RPT-SRC-CSDL-01 |
| DOMAIN-MAP | thiếu slug | add `csdl-so-05`→Asset | **T-DM-01** |
| API | — | **giữ** `asset/csdl-records` | **cấm** runtime `/api/v1/accident-summaries` |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/csdl-so-05`** · `route_confirm=route_a` (autoApprove · PO/Design/SA) |
| `mfeStdRoute` | `/csdl-so-05` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-05` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries` |
| `peerReport` | `rpt-tngt` drill RO · **cấm** CRUD / merge |
| `peerSo04` | `traffic-counts` ROW riêng · **cấm** merge / 16 hạng |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent · **cấm** runtime `/accident-summaries` |
| catalogKind | `accident-summaries` (typed UiSchema) |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo05Entity` · `rmms_csdl_so05` + `_c1` / `_c2` / `_bs` |
| migration | `Schema_CsdlSo05` · **Dev / Step 4b only** |
| File | **none** (no photoIds this pack) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-so-05` (+ hub entry) | **SELECTED** — GAP-SO05-ROUTE-01 · Design/SA locked |
| B | hub-only `?resource=accident-summaries` | rejected — thiếu alias P1 |
| C | custom / invent so-ts / accident-summaries API | n/a · **cấm** |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Sổ 05 — TNGT + điểm đen» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · 🔍 cụm phải · **cấm** nút Tìm riêng |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `accident-summaries` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · reuse · **cấm** invent History API |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only · Z1–Z3 |
| DES-TAB-C1 | `entriesC1[]` `inline_grid` **add-row** · Number/Text/Textarea |
| DES-TAB-C2 | `entriesC2[]` `inline_grid` **add-row** |
| DES-TAB-BS | `entriesBlackSpot[]` `inline_grid` **add-row** · assess enum |
| Tree / Map | **n/a** — map=none · **cấm** invent map |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=accident-summaries&…` | list paged · filters year/period/tableKind |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | shell+typed+3 arrays · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · typed + 3 arrays · IdCode `SO-` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update · replace-all lines per collection |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only**. Permissions: `asset.csdl-records.read|create|update|delete` (reuse · Auth debt DEFER).

Gates (SA recorded): `sa_tz_gate=tz_none` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | GET list + filters | — |
| create | empty typed + 3×`[]` | POST body resource + header + 3 arrays |
| edit | GET `/{id}` | PUT · replace-all lines per collection |
| view | GET `/{id}` | — readOnly · **không** disabled xám |
| copy | GET → clear id/code | POST (new `SO-`) · keep lines |
| delete | — | DELETE soft |

### List filter query keys

`resource` · `search` · `province` · `status` · `roadCode` · `year` · `periodType` · `tableKind` · `page`/`pageSize`

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | **gap** · reuse codes · wire DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership · so-05 ship độc lập vs so-04 |
| SD-NO-JSON | **required** · typed + 3 child tables · **cấm** parent `*Json` / detail*/col1–3 SSOT |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |
| SD-FILE | **n/a** · no photoIds this pack |
| SD-TZ | `tz_none` · year/period int · audit `updatedAt` shell UTC only |
| SD-MERGE | n/a · **cấm** merge so-04 / Sổ TS / rpt-tngt CRUD |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-DM-01 | Dev | **pending** | — | `/agent-dev` | DOMAIN-MAP `csdl-so-05`→Asset |
| T-CTX-01 | Dev | **pending** | — | `/agent-dev` | context sync feature page |
| T-BE-01 | Dev | **pending** | T-DM-01 | `/agent-dev` | `CsdlSo05Entity` + C1/C2/BS entities + EF |
| T-BE-02 | Dev | **pending** | T-BE-01 | `/agent-dev` | Migration `Schema_CsdlSo05` · **Step 4b only** |
| T-BE-03 | Dev | **pending** | T-BE-01 | `/agent-dev` | DTO typed + service join · stop detail*/col1–3 · period/enum 422 · rollups |
| T-BE-04 | Dev | **pending** | T-BE-03 | `/agent-dev` | IdCode `SO-` · register resource `accident-summaries` |
| T-BE-05 | Dev | **pending** | T-BE-03 | `/agent-dev` | list filters year/periodType/tableKind/roadCode/province/status/search |
| T-BE-06 | Dev | **pending** | T-BE-04 | `/agent-dev` | hub NEW card formNo 05 · peer so-04 drop «(+ TNGT)» when both PASS |
| T-BFF-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | verify proxy (no logic) |
| T-PERM-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | Dev | **pending** | T-BE-03 | `/agent-dev` | = **T-FE-07** catalogKind typed |
| T-BE-INIT-01 | — | **n/a P1** | — | — | province/status/period/BS LOOKUP_STATIC · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** | T-BFF-01 | `/agent-dev` | = **T-FE-01** route alias + Kind B shell |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-05 | `/agent-dev` | = **T-FE-04** FilterBar + road + year/period/tableKind |
| T-UI-CFG-01 | Dev | **pending** | T-BE-UISCHEMA-01 | `/agent-dev` | Zone F full cột · **cấm** Zone F-only SSOT |
| T-UI-FORM-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-02** Slideout typed header |
| T-UI-ENTRIES-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = **T-FE-03** 3 tabs C.1/C.2/BS add-row · **cấm** 16 hạng / col1–3 |
| T-UI-LEAVE-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | = part **T-FE-05** LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete · = **T-FE-05** |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | History modal reuse · part **T-FE-05** |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | road-route SearchInput |
| T-UI-FIELD-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · period sync · status LOOKUP |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | = **T-FE-06** hub NEW card · rpt-tngt RO · **cấm** merge |
| T-UI-UX-01 | Dev | **pending** | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only · 3 tabs |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-MAP-FORM | — | **n/a** | — | — | map=none |
| T-OUT-01 | — | **OUT** | — | — | XLS / org SearchInput P2 — không block P1 |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* | `/agent-qa` | CRUD + soft delete + 3 collections |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | typed header+3 tab · **cấm** detail*/col1–3 only |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + year/period/tableKind/road |
| T-QA-TABS-01 | QA | **pending** | T-UI-ENTRIES-01 | `/agent-qa` | C.1/C.2/BS add-row · cause/damage/BS enum |
| T-QA-SPLIT-01 | QA | **pending** | T-UI-PROD-01 | `/agent-qa` | so-05 ≠ so-04 · **cấm** 16 hạng · CUC-07 when both PASS |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | typography |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-QA-ROUTE-01 | QA | **pending** | T-UI-LIST-01 | `/agent-qa` | alias `/csdl-so-05` + hub |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

**SA id map:** T-FE-01→T-UI-LIST-01 · T-FE-02→T-UI-FORM-01 · T-FE-03→T-UI-ENTRIES-01 · T-FE-04→T-UI-FILTER-01+LKP · T-FE-05→T-UI-LEAVE+ACT+HIST · T-FE-06→T-UI-PROD-01 · T-FE-07→T-BE-UISCHEMA-01.

---

### T-DM-01 — DOMAIN-MAP

- Add row `csdl-so-05` → **Asset** in `DOMAIN-MAP.md`.
- DoD: slug resolve Asset · **cấm** ERP.* / invent domain.

### T-CTX-01 — Context sync

- Sync `docs/context/features/csdl-so-05.md` with alias route + typed form + 3-tab grids + split so-04 notes for Dev.
- DoD: context points mfeStdUrl + hub + resource `accident-summaries`.

### T-BE-01 / T-BE-02 — Entity + migration

- `CsdlSo05Entity` · table `rmms_csdl_so05` · FK `CatalogRecordId` unique 1:1.
- Typed cols: Year · PeriodType · PeriodValue · TableKind · AccidentCount · Fatalities · Injuries (rollups).
- Child C1 `rmms_csdl_so05_c1`: roadName · location · accidentCount · causeRoad/Person/Vehicle · fatalities · injuries · damageInfra/Vehicle · remarks.
- Child C2 `rmms_csdl_so05_c2`: roadName · accidentCount · fatalities · injuries · damageInfra/Vehicle · remarks.
- Child BS `rmms_csdl_so05_bs`: location · kmFrom/kmTo · accident12m · fatalities12m · injuries12m · assessment · stateFoundation/Geometry/Atgt · preliminaryAction · measures · followUp.
- Migration name **`Schema_CsdlSo05`** — **chỉ Dev / Step 4b** · **cấm** TL chạy.
- DoD: EF config · unique FK · **cấm** parent `*Json` · **cấm** col1–3 SSOT.

### T-BE-03 / T-BE-04 / T-BE-05 — Service + IdCode + filters

- Widen DTO · join shell↔typed↔`entriesC1[]`/`entriesC2[]`/`entriesBlackSpot[]` on `resource=accident-summaries`.
- **Stop** writing detail*/col1–3 for this resource at runtime · **cấm** class01…16.
- IdCode `SO-yyyyMMdd-nnnn` BE generate · **cấm** Guid · register resource.
- List filters: `search`, `province`, `status`, `roadCode`, `year`, `periodType`, `tableKind`.
- Period validate: month→1–12 · half→1|2 · year=year · BS assess enum · status draft|active|closed · 422 on violation.
- Rollups list: accidentCount/fatalities/injuries từ collection khớp `tableKind`.
- Gates: `tz_none` · XCO on GET detail · tenant `CompanyCode` (`share_tenant`).
- Soft unique advisory (TL: keep advisory unless product hardens) · DoD: FormMode↔API green.

### T-BE-06 — Hub catalog + CUC-07 peer

- NEW hub card `accident-summaries` formNo **05** · title page «Sổ 05 — TNGT + điểm đen».
- When so-04 + so-05 both PASS → drop «(+ TNGT)» from so-04 title (GAP-CSDL-CUC-07).
- DoD: catalog lists NEW resource · **cấm** merge so-04 ROW · so-05 ship độc lập.

### T-BFF-01 — BFF proxy

- Forward only · no remap business.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records`.

### T-UI-LIST-01 (= T-FE-01) — List page

- Register route **`/csdl-so-05`**.
- Kind B A–D+F+H · `tl-grid-task-template` · LAYOUT-06 shell height.
- Grid AC YES · pageSize 50/100/200/500.
- List cols: code · bookNo · contractor · road · km · year · period · tableKind · accidentCount · fatalities · injuries · status · province · updatedAt.
- Empty VN «Chưa có sổ TNGT / điểm đen».
- DoD: mfeStdUrl opens · DES-GRID zones mapped · **cấm** demo chrome.

### T-UI-FILTER-01 + T-UI-LKP-01 (= T-FE-04)

- `LinErpListFilterBar` 1 hàng wrap · 🔍 cụm phải · **cấm** nút Tìm riêng.
- Controls: search · province · status(`draft|active|closed`) · roadCode SearchInput · year · periodType · tableKind(`c1|c2|blackspot|all`).
- road-route → API-LKP-01.
- DoD: filter-bar-layout-hard V1–V5 · page=1 on change.

### T-UI-FORM-01 + T-UI-FIELD-01 (= T-FE-02)

- Kind D Slideout · `data-form-cols=2` · Z1–Z3 · footer_actions_only · **cấm** Full-page.
- Typed header: code(ro) · bookNo · contractor · roadCode/roadName · kmFrom/kmTo · province · year · periodType · periodValue · tableKind · status · notes.
- periodValue sync Q-PERIOD · controlHint 1:1 · **cấm** 3 ô detail* / col1–3 only.
- FormMode create/edit/view/copy ↔ API.
- DoD: all write fields bind typed DTO · view not disabled-grey.

### T-UI-ENTRIES-01 (= T-FE-03)

- Tab C.1 `entriesC1[]` add-row: roadName · location · accidentCount · causeRoad/Person/Vehicle (≥0) · fatalities · injuries · damageInfra/Vehicle (≥0 + overlay «triệu đồng») · remarks.
- Tab C.2 `entriesC2[]` add-row: roadName · accidentCount · fatalities · injuries · damageInfra/Vehicle · remarks.
- Tab BS `entriesBlackSpot[]` add-row: location · kmFrom/kmTo · *12m counts · assessment enum · state* · preliminaryAction · measures · followUp.
- Nested on create/edit/view/copy · replace-all on PUT · **cấm** 16 hạng xe · **cấm** journal col1–3.
- DoD: 3 tabs work · enums/overlay OK · GAP-SO05-C1/C2/BS-01.

### T-UI-LEAVE-01 + T-UI-ACT-01 + T-UI-HIST-01 (= T-FE-05)

- LeaveConfirmModal dirty.
- Row/toolbar: Create · Edit · View · Copy · soft Delete confirm · History reuse.
- DoD: leave gate · copy clears id/code · reload list after delete · **cấm** invent History API.

### T-UI-PROD-01 (= T-FE-06)

- Hub NEW card `?resource=accident-summaries` · page title «Sổ 05 — TNGT + điểm đen».
- Peer `rpt-tngt` RO drill sau typed READY · **cấm** CRUD / merge.
- **Cấm** merge Sổ TS / so-04 · map none · **cấm** invent map.
- DoD: alias + hub both list same resource · GAP-SO05-RES-01 · GAP-RPT-SRC-CSDL-01 form READY.

### T-UI-CFG-01 / T-BE-UISCHEMA-01 (= T-FE-07)

- catalogKind `accident-summaries` typed UiSchema.
- DoD: editor full cột · **cấm** generic 3-col / col1–3 SSOT.

### T-OUT-01 — OUT / DEFER pack

- XLS import/export **OUT** · không block P1.
- org SearchInput · province master · **DEFER P2**.
- File API: **n/a** this pack · **cấm** invent.

### T-QA-* (queued `/agent-qa*` only)

- Cover CRUD · typed form+3 tab · filter V1–V5 · period/cause/damage/BS · route alias+hub · leave · copy · soft delete · split so-04 · rpt-tngt RO · **cấm** detail*/col1–3-only · **cấm** 16 hạng.
- **Cấm** e2e ở TL/Dev trừ QA role.

---

## Inventory (slim · controlHint)

| id | controlHint | write |
|----|-------------|-------|
| search | SearchTextInput | filter |
| province/status | Dropdown LOOKUP_STATIC | filter + shell · draft\|active\|closed |
| roadCode | SearchInput | filter + shell + LKP |
| year/periodType/tableKind | Integer/Dropdown | filter + typed |
| code | Text ro | shell SO- |
| bookNo/contractor | Text | shell req · NT Text P1 |
| road*/km* | SearchInput+Number | shell/typed req |
| periodValue | Dropdown/Integer | typed · sync Q-PERIOD |
| notes | Textarea | shell |
| c1* | Number/Text/Textarea | child C1 · add-row |
| c2* | Number/Text/Textarea | child C2 · add-row |
| bs* | Number/Text/Dropdown/Textarea | child BS · assess enum |

---

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-C1 · S-TAB-C2 · S-TAB-BS · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · LeaveConfirmModal
- mfeStdUrl=`http://localhost:9301/csdl-so-05`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries`
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html`

---

## Open questions

- **none** (Q-PERIOD · Q-CAUSE · Q-DAMAGE · Q-BS-ASSESS · Q-GRID-MODEL · Q-SPLIT · Q-PROV · Q-ORG · Q-STATUS · Q-RPT chốt PO/Design/SA · autoApprove)
- Soft unique: advisory (SA) — không harden 422 trừ product yêu cầu

## Cấm (TL)

- ERP.* · invent API · invent map · invent file API · form 3 ô / col1–3 only · Guid IdCode · 16 hạng xe · merge so-04 / Sổ TS · CRUD rpt-tngt
- runtime `/api/v1/accident-summaries` · implement product code · yarn build/e2e/start:std · Step 4b/migration/e2e ở role TL
- parent `*Json` · start role khác (**GAP-PKT-ROLE-01**) · re-scan demo

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
| writtenAt | 2026-09-06T06:15:00.000Z |
| contentHashPrior | sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce |
| headerFingerprintPrior | sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a |
