# Team lead — tasks — csdl-bieu-11 (edit_page · T-XLS-S11)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Xuất/Nhập Excel (Wave 1 · T-XLS-S11) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** (T-XLS-S11) |
| packKind | **`list`** (Kind **B** A–D+F KEEP · Kind **D** Slideout **2 section** lưới+NLMT KEEP) |
| formType | `list` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-lighting` (toolbar deep-link · **≠** merge) · qty ≠ điểm · **GAP-CSDL-CUC-11** |
| cabinet | **split** `cabinetCount` ≠ `solarCabinetCount` (KEEP) |
| solar | optional_flat 6 col · **cấm** Solar child |
| led | allow_zero · GridLed600/240/150/125 (KEEP) |
| solution_confirm | **approve** (`task_bb1ffcd0`) |
| design_confirm | **approve** (`task_ec751c18`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep) — hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-11` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_c9c5462f` |
| saTaskId | `task_bb1ffcd0` |
| contentHashPrior | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| updatedAt | `2026-09-18T07:05:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · reopen typed 24/2 as `new_page` · start role khác (**GAP-PKT-ROLE-01**) · golden 12+8 · 2-sheet invent · parent `*Json` · dump điểm Sổ TS → qty · Solar child.

---

## § Delta Current vs New (`edit_page` · T-XLS-S11)

| Area | Current (typed live) | New (Wave 1 XLS) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD 24/2 | DONE prior | **KEEP** | **cấm** reopen · T-* CRUD = KEEP |
| Route | hub + alias `/csdl-bieu-11` | **keep `route_a`** | no new route · **route_confirm=route_a** |
| Toolbar | CRUD + peer | **+Xuất Excel +Nhập Excel** | **T-XLS-FE-01** · **GAP-BIEU11-XLS-01** |
| Export | stub / OUT | filtered · golden Cục **Biểu 11** · `Bieu11_ChieuSang_{yyyyMMdd}.xls` · **1 sheet 24** · LED+NLMT cùng hàng · binary | **T-XLS-BE-01/03** · **GAP-BIEU11-XLS-01/03/05/06** |
| Import | missing / OUT | import_now · sheet Biểu 11 → shell+`Schema_CsdlBieu11` · skipBridge | **T-XLS-BE-02** · **GAP-BIEU11-XLS-05** |
| Toast | stub = done risk | real success/error/empty-info | **GAP-BIEU11-XLS-02** · **T-XLS-FE-02** |
| Filter bar | KEEP | **cấm** nút Xuất trên bar | **T-XLS-FE-02** · **GAP-BIEU11-XLS-04** · GAP-FILTER-BAR-08 |
| Layout | KEEP | **1 sheet** 24 · LED+NLMT cùng hàng · **cấm** 2 sheet · **cấm** 12+8 | **GAP-BIEU11-XLS-03/06** |
| Peer qty | typed bucket | export **qty** · **cấm** dump điểm `so-ts-lighting` | **GAP-BIEU11-XLS-07** · GAP-CSDL-CUC-11 |
| Migration | Schema_CsdlBieu11 KEEP | **none mới** @ XLS | **cấm** Step 4b @ TL |
| BFF | proxy | binary + multipart passthrough · **cấm** remap cột | **T-XLS-BFF-01** |
| Peer | so-ts-lighting toolbar | **KEEP** · **≠** merge | **cấm** đổi peer |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · typed entity Schema_CsdlBieu11 · cabinet split · solar flat · LeaveConfirm · pageSize · peer deep-link · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | hub `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` · `route_confirm=route_a` (keep) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| `peerStdUrl` | `http://localhost:9301/so-ts-lighting` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `lighting-systems` |
| entity | shell + `CsdlBieu11Entity` · `rmms_csdl_bieu11` · **KEEP** · XLS migration **none** |
| implement skill | `/implement-export-import-excel` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect |

### Route confirm (autoApprove · keep)

| Option | Path | Decision |
|--------|------|----------|
| A | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-11` | **SELECTED** — keep |
| B | invent new URL | rejected |
| C | drop alias | rejected |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · KEEP + XLS delta)

| Zone | Component | Wave |
|------|-----------|------|
| DES-GRID-A..D/F/Z | prior Lin\* map · typed 24/2 section lưới+NLMT | **KEEP** |
| DES-GRID-B toolbar | `catalogToolbar` / `buildCatalogListToolbarActions` · peer `so-ts-lighting` | **+exportExcel +importExcel** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên bar |
| DES-GRID-C2 | `LinCatalogDataGrid` · subset shared+LED4+gridStatus+pole/cabinet+status | **KEEP** |
| S-XLS-EXPORT | ToolbarButton `fa-file-excel` | **T-XLS-FE-01/02** |
| S-XLS-IMPORT | ToolbarButton+file `fa-file-import` | **T-XLS-FE-01** |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=lighting-systems&…` | filtered · binary · **1 sheet 24** · LED+NLMT cùng hàng · filename locked |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=lighting-systems` | multipart · import_now · shell+typed · LED≥0 · solar optional |
| API-01..05 · API-LKP | — | prior CRUD / road-route | **KEEP** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · binary + multipart passthrough · **cấm** remap cột.

Gates (SA): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (delta)

| FormMode | Load | Save / action |
|----------|------|---------------|
| list / C/E/V/Copy/delete | KEEP | KEEP |
| **export** | — | GET export + **same filter QS** (ignore page) · **filtered** |
| **import** | file | POST import multipart · skipBridge |

### Export filter QS (= list keys)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · **export ignores `page`/`pageSize`** · **cấm** invent extra date QS

### Header (24) SSOT (export/import 1:1)

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

---

## System design checklist

| ID | Value |
|----|-------|
| SD-BFF | **required** · proxy · binary/multipart · **cấm** remap cột |
| SD-AUTH | reuse `asset.csdl-records.read|create|update` · Auth debt DEFER |
| SD-NO-JSON | **required** · typed Schema_CsdlBieu11 · **cấm** DetailJson on import |
| SD-LIB-UI | Common.Components · catalogToolbar |
| SD-XLS | `/implement-export-import-excel` · golden Cục **16-sheet** sheet **Biểu 11** · **1 sheet 24** · LED+NLMT cùng hàng · cabinet split · **cấm** 12+8 · **cấm** 2 sheet invent · **cấm** dump điểm Sổ TS |

---

## FormType pack — task matrix (`list` · §2a KEEP + XLS delta)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-UI-LIST-01 | Dev | **KEEP** | — | `/agent-dev` | Kind B shell · LAYOUT-06 · alias+hub |
| T-UI-FILTER-01 | Dev | **KEEP** | — | `/agent-dev` | FilterBar V1–V10 · **cấm** Xuất trên bar |
| T-UI-CFG-01 | Dev | **KEEP** | — | `/agent-dev` | Zone F · catalogKind lighting-systems |
| T-UI-FORM-01 | Dev | **KEEP** | — | `/agent-dev` | Slideout 24/2 · **cấm** reopen |
| T-UI-LEAVE-01 | Dev | **KEEP** | — | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **KEEP+delta** | T-XLS-FE-01 | `/agent-dev` | +export/+import handlers |
| T-UI-LKP-01 | Dev | **KEEP** | — | `/agent-dev` | road-route |
| T-UI-FIELD-01 | Dev | **KEEP** | — | `/agent-dev` | typed 24 · LED allow_zero · solar flat · cabinet split |
| T-UI-PROD-01 | Dev | **KEEP** | — | `/agent-dev` | hub · peer so-ts-lighting · **cấm** merge |
| T-UI-UX-01 | Dev | **KEEP** | — | `/agent-dev` | constitution |
| T-UI-RESP-01 | Dev | **KEEP** | — | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | — |
| T-BE-CRUD-01 | Dev | **KEEP** | — | `/agent-dev` | Schema_CsdlBieu11 |
| T-BE-UISCHEMA-01 | Dev | **KEEP** | — | `/agent-dev` | catalogKind |
| T-BE-INIT-01 | — | **n/a P1** | — | — | — |
| T-PERM-01 | Dev | **KEEP** | — | `/agent-dev` | reuse codes + export/import |
| T-QA-CRUD-01 | QA | **KEEP** | — | `/agent-qa` | prior CRUD |
| T-QA-FORM-01 | QA | **KEEP** | — | `/agent-qa` | 24/2 |
| T-QA-FILTER-01 | QA | **KEEP** | — | `/agent-qa` | V1–V5+V10 · no export on bar |
| T-QA-FILTER-02 | QA | **KEEP** | — | `/agent-qa` | D+T+M |
| **T-XLS-BE-01** | Dev | **pending** | — | `/agent-dev` | ExportAsync · 24 cols · golden · filename · LED+NLMT cùng hàng |
| **T-XLS-BE-02** | Dev | **pending** | — | `/agent-dev` | Import commit · shell+Schema_CsdlBieu11 · LED/solar validate |
| **T-XLS-BE-03** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Controller bind filter QS (+side) |
| **T-XLS-BFF-01** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | binary + multipart proxy · no column remap |
| **T-XLS-FE-01** | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | toolbar Xuất/Nhập · blob · file · wire QS |
| **T-XLS-FE-02** | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | filename · toast · **cấm** filter-bar export · **cấm** stub done |
| **T-XLS-QA-01** | QA | **pending** | T-XLS-FE-* | `/agent-qa` | E2E S-XLS-EXPORT/IMPORT |
| T-OUT-01 | — | **OUT** | — | — | org SearchInput P2 · map · keep OUT |

**SA id map:** T-XLS-S11-BE-01/02 · BFF-01 · FE-01/02 · QA-01 → TL ids above (+ BE-03 filter bind).

---

### T-XLS-BE-01 — ExportAsync widen

- Load `/implement-export-import-excel`.
- Replace stub: apply **list filter QS** (incl. `side` · **filtered**) · project typed Biểu 11 (**24** cols · **1 sheet** · LED+NLMT cùng hàng · cabinet split) · golden Cục **16-sheet** sheet **Biểu 11** · checksum 24 · **cấm** 12+8 · **cấm** 2 sheet invent.
- Export **qty bucket** typed · **cấm** dump điểm `so-ts-lighting` (**GAP-BIEU11-XLS-07**).
- Filename `Bieu11_ChieuSang_{yyyyMMdd}.xls` via `Content-Disposition`.
- Empty → headers-only file + FE toast info (Dev chốt 1 · document in implement).
- DoD: closes **GAP-BIEU11-XLS-01/03/05/06/07** · binary Excel · filter parity list (ignore page).

### T-XLS-BE-02 — Import typed

- Multipart commit: sheet **Biểu 11** → shell + `CsdlBieu11` · `skipBridge` default true.
- Validate LED/solar ≥0 · gridStatus LOOKUP · cabinet split · solar optional flat · **cấm** Solar child · **cấm** DetailJson / parent `*Json`.
- Response `CsdlImportResultDto` · row errors in DTO.
- DoD: closes **GAP-BIEU11-XLS-05** · import_now upsert typed.

### T-XLS-BE-03 — Controller filter bind

- Bind export query: `resource` required + `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side`.
- DoD: QS parity list filters · 422 thiếu resource.

### T-XLS-BFF-01 — BFF proxy

- Forward export QS · multipart · binary passthrough · **no business logic** · **cấm** remap cột.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export|import`.

### T-XLS-FE-01 — Toolbar Xuất/Nhập (= UI-01)

- `catalogToolbar`: Xuất Excel (`fa-file-excel`) · Nhập Excel (`fa-file-import` + hidden file input) · **peer keep**.
- Pass **current** filter state as export QS · blob download · **cấm** `window.alert`/`confirm`.
- DoD: closes **GAP-BIEU11-XLS-01** · actions on DES-GRID-B only.

### T-XLS-FE-02 — Filename / toast / filter-bar HARD

- Filename từ `Content-Disposition` hoặc fallback `Bieu11_ChieuSang_{yyyyMMdd}.xls` · toast success/error/empty-info · **cấm** toast-stub=done (**GAP-BIEU11-XLS-02**).
- **Cấm** Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08** / **GAP-BIEU11-XLS-04**).
- After import success → reload list · **cấm** 2-sheet invent (**GAP-BIEU11-XLS-06**).
- DoD: filtered export matches visible filter · filter-bar layout HARD unchanged.

### T-XLS-QA-01 — E2E (queued `/agent-qa*` only)

- S-XLS-EXPORT: filter (+side) → Xuất → file name + binary · checksum 24 · LED+NLMT cùng hàng · **fail** stub / wrong name / no filter / 12+8 / 2-sheet / dump điểm.
- S-XLS-IMPORT: pick golden-like xls → import_now → list reflects typed · skipBridge soft.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS + KEEP cite)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · filtered · 1 sheet 24 · LED+NLMT cùng hàng |
| importExcel | ToolbarButton+file | import_now · typed · LED/solar validate |
| (form 24/2) | typed prior | **KEEP** · **cấm** reopen |
| filter fields | prior + side | **KEEP** · **cấm** export btn |
| peerSoTs | toolbar deep-link | so-ts-lighting · **≠** merge · qty ≠ điểm |

---

## Screens / zones (ids)

- S-LIST · S-FORM-* · **S-XLS-EXPORT** · **S-XLS-IMPORT** · S-HUB-ENTRY · S-PEER
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-11`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-XLS-BE-01..03 · T-PERM reuse |
| BFF | `/agent-dev` | T-XLS-BFF-01 |
| FE | `/agent-dev` | T-XLS-FE-01..02 · T-UI-ACT delta · peer keep |
| Excel skill | `/implement-export-import-excel` | golden sheet Biểu 11 · binary · 1 sheet 24 · LED+NLMT |
| Responsive | `/dev-web-responsive` | KEEP T-UI-RESP-01 if touch layout |
| QA | `/agent-qa` | T-XLS-QA-01 · e2e only here |

**Parallel OK:** T-XLS-BE-01 ∥ T-XLS-BE-02 · T-XLS-BE-03 after BE-01 · T-XLS-FE after BFF · QA after FE.

**Deps:** T-XLS-BE-01 → T-XLS-BE-03 → T-XLS-BFF-01 → T-XLS-FE-01 → T-XLS-FE-02 → T-XLS-QA-01.

---

## Quality gates

| Gate | Expect |
|------|--------|
| Grid AC / Leave / Filter HARD | KEEP prior PASS |
| Report AC | N/A |
| XLS | filtered · golden Biểu 11 · filename locked · 1 sheet 24 · LED+NLMT cùng hàng · import_now typed · qty≠điểm |
| Filter | **cấm** Xuất trên bar |
| Persist | shell+Schema_CsdlBieu11 · **cấm** parent JSON · **no new migration** |
| API | keep `asset/csdl-records` · **cấm** ERP.* |
| Shell height | KEEP LAYOUT-06 |
| Peer | so-ts-lighting deep-link KEEP · **≠** merge |

---

## Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · FILENAME=`Bieu11_ChieuSang_{yyyyMMdd}.xls` · SHEET=one_sheet · design/sa/route approve)

## Next

| Role | Need |
|------|------|
| **Dev** | `implement/csdl-bieu-11.md` · T-XLS-* · `/implement-export-import-excel` |
| QA | T-XLS-QA-01 + e2e queued `/agent-qa*` |
| Review | findings after QA |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| changeScope | edit_page |
| route_confirm | route_a |
| team_lead_confirm | approve |
| writtenAt | 2026-09-18T07:05:00.000Z |
| contentHashPrior | sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 |
| taskId | task_c9c5462f |
