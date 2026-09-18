# Team lead — tasks — csdl-bieu-10 (edit_page · T-XLS-S10)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Xuất/Nhập Excel (Wave 1 · T-XLS-S10) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** (T-XLS-S10) |
| packKind | **`list`** (Kind **B** A–D+F KEEP · Kind **D** Slideout **2 section** tường+rãnh KEEP) |
| formType | `list` |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-retaining` (toolbar deep-link · **≠** merge) · **≠** road-assets · **GAP-CSDL-CUC-11** |
| heightAlias | UI `heightM` ↔ DB `WidthM` · **Q-XLS-HEIGHT=height_alias** |
| solution_confirm | **approve** (`task_c2ecf0a6`) |
| design_confirm | **approve** (`task_00ebbcea`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep) — hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-10` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_71a5d419` |
| saTaskId | `task_c2ecf0a6` |
| contentHashPrior | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprintPrior | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| updatedAt | `2026-09-18T06:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · reopen typed 21/2 as `new_page` · start role khác (**GAP-PKT-ROLE-01**) · golden 12+8 · 2-sheet invent · parent `*Json` · BFF remap heightM.

---

## § Delta Current vs New (`edit_page` · T-XLS-S10)

| Area | Current (typed live) | New (Wave 1 XLS) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD 21/2 | DONE prior | **KEEP** | **cấm** reopen · T-* CRUD = KEEP |
| Route | hub + alias `/csdl-bieu-10` | **keep `route_a`** | no new route · **route_confirm=route_a** |
| Toolbar | CRUD + peer | **+Xuất Excel +Nhập Excel** | **T-XLS-FE-01** · **GAP-BIEU10-XLS-01** |
| Export | stub / OUT | filtered · golden Cục **Biểu 10** · `Bieu10_KeTuongChan_{yyyyMMdd}.xls` · **1 sheet 21** · crest* cùng hàng · binary | **T-XLS-BE-01/03** · **GAP-BIEU10-XLS-01/03/05/06** |
| Import | missing / OUT | import_now · sheet Biểu 10 → shell+`Schema_CsdlBieu10` · skipBridge | **T-XLS-BE-02** · **GAP-BIEU10-XLS-05** |
| height map | CRUD heightM↔WidthM | **export/import cùng alias** | **GAP-BIEU10-XLS-07** · Q-HEIGHT=height_alias |
| Toast | stub = done risk | real success/error | **GAP-BIEU10-XLS-02** · **T-XLS-FE-01** |
| Filter bar | KEEP | **cấm** nút Xuất trên bar | **T-XLS-FE-02** · **GAP-BIEU10-XLS-04** · GAP-FILTER-BAR-08 |
| Layout | KEEP | **1 sheet** 21 · **cấm** 2 sheet invent · **cấm** 12+8 | **GAP-BIEU10-XLS-03/06** |
| Migration | Schema_CsdlBieu10 KEEP | **none mới** @ XLS | **cấm** Step 4b @ TL |
| BFF | proxy | binary + multipart passthrough · **cấm** remap height | **T-XLS-BFF-01** |
| Peer | so-ts-retaining toolbar | **KEEP** · **≠** merge | **cấm** đổi peer |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · typed entity Schema_CsdlBieu10 · 2 section tường+rãnh · LeaveConfirm · pageSize · peer deep-link · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | hub `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` · `route_confirm=route_a` (keep) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| `peerStdUrl` | `http://localhost:9301/so-ts-retaining` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `retaining-walls` |
| entity | shell + `CsdlBieu10Entity` · `rmms_csdl_bieu10` · **KEEP** · XLS migration **none** |
| implement skill | `/implement-export-import-excel` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect |

### Route confirm (autoApprove · keep)

| Option | Path | Decision |
|--------|------|----------|
| A | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-10` | **SELECTED** — keep |
| B | invent new URL | rejected |
| C | drop alias | rejected |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · KEEP + XLS delta)

| Zone | Component | Wave |
|------|-----------|------|
| DES-GRID-A..D/F/Z | prior Lin\* map · typed 21/2 section | **KEEP** |
| DES-GRID-B toolbar | `catalogToolbar` / `buildCatalogListToolbarActions` · peer `so-ts-retaining` | **+exportExcel +importExcel** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên bar |
| DES-GRID-C2 | `LinCatalogDataGrid` · subset shared+kind/dim/year/status | **KEEP** |
| S-XLS-EXPORT | ToolbarButton `fa-file-excel` | **T-XLS-FE-01/02** |
| S-XLS-IMPORT | ToolbarButton+file `fa-file-import` | **T-XLS-FE-01** |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=retaining-walls&…` | filtered · binary · **1 sheet 21** · heightM↔WidthM · filename locked |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=retaining-walls` | multipart · import_now · shell+typed · height_alias |
| API-01..05 · API-LKP | — | prior CRUD / road-route | **KEEP** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · binary + multipart passthrough · **cấm** remap heightM.

Gates (SA): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (delta)

| FormMode | Load | Save / action |
|----------|------|---------------|
| list / C/E/V/Copy/delete | KEEP | KEEP |
| **export** | — | GET export + **same filter QS** (ignore page) · **filtered** |
| **import** | file | POST import multipart · skipBridge |

### Export filter QS (= list keys)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `wallKind` · **export ignores `page`/`pageSize`**

### Header (21) SSOT (export/import 1:1)

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

---

## System design checklist

| ID | Value |
|----|-------|
| SD-BFF | **required** · proxy · binary/multipart · **cấm** height remap |
| SD-AUTH | reuse `asset.csdl-records.read|create|update` · Auth debt DEFER |
| SD-NO-JSON | **required** · typed Schema_CsdlBieu10 · **cấm** DetailJson on import |
| SD-LIB-UI | Common.Components · catalogToolbar |
| SD-XLS | `/implement-export-import-excel` · golden Cục **16-sheet** sheet **Biểu 10** · **1 sheet 21** · crest* cùng hàng · heightM↔WidthM · **cấm** 12+8 · **cấm** 2 sheet invent |

---

## FormType pack — task matrix (`list` · §2a KEEP + XLS delta)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-UI-LIST-01 | Dev | **KEEP** | — | `/agent-dev` | Kind B shell · LAYOUT-06 · alias+hub |
| T-UI-FILTER-01 | Dev | **KEEP** | — | `/agent-dev` | FilterBar V1–V10 · **cấm** Xuất trên bar |
| T-UI-CFG-01 | Dev | **KEEP** | — | `/agent-dev` | Zone F · catalogKind retaining-walls |
| T-UI-FORM-01 | Dev | **KEEP** | — | `/agent-dev` | Slideout 21/2 · **cấm** reopen |
| T-UI-LEAVE-01 | Dev | **KEEP** | — | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **KEEP+delta** | T-XLS-FE-01 | `/agent-dev` | +export/+import handlers |
| T-UI-LKP-01 | Dev | **KEEP** | — | `/agent-dev` | road-route |
| T-UI-FIELD-01 | Dev | **KEEP** | — | `/agent-dev` | typed 21 · heightM↔WidthM · crest flat |
| T-UI-PROD-01 | Dev | **KEEP** | — | `/agent-dev` | hub · peer so-ts-retaining · **cấm** merge |
| T-UI-UX-01 | Dev | **KEEP** | — | `/agent-dev` | constitution |
| T-UI-RESP-01 | Dev | **KEEP** | — | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | — |
| T-BE-CRUD-01 | Dev | **KEEP** | — | `/agent-dev` | Schema_CsdlBieu10 |
| T-BE-UISCHEMA-01 | Dev | **KEEP** | — | `/agent-dev` | catalogKind |
| T-BE-INIT-01 | — | **n/a P1** | — | — | — |
| T-PERM-01 | Dev | **KEEP** | — | `/agent-dev` | reuse codes + export/import |
| T-QA-CRUD-01 | QA | **KEEP** | — | `/agent-qa` | prior CRUD |
| T-QA-FORM-01 | QA | **KEEP** | — | `/agent-qa` | 21/2 |
| T-QA-FILTER-01 | QA | **KEEP** | — | `/agent-qa` | V1–V5+V10 · no export on bar |
| T-QA-FILTER-02 | QA | **KEEP** | — | `/agent-qa` | D+T+M |
| **T-XLS-BE-01** | Dev | **pending** | — | `/agent-dev` | ExportAsync · 21 cols · golden · filename · height_alias |
| **T-XLS-BE-02** | Dev | **pending** | — | `/agent-dev` | Import commit · shell+Schema_CsdlBieu10 · height_alias |
| **T-XLS-BE-03** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Controller bind filter QS (+side/wallKind) |
| **T-XLS-BFF-01** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | binary + multipart proxy · no height remap |
| **T-XLS-FE-01** | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | toolbar Xuất/Nhập · blob · file · toast |
| **T-XLS-FE-02** | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | pass filter QS · **cấm** filter-bar export |
| **T-XLS-QA-01** | QA | **pending** | T-XLS-FE-* | `/agent-qa` | E2E S-XLS-EXPORT/IMPORT |

**SA id map:** T-XLS-S10-BE-01/02 · BFF-01 · FE-01/02 · QA-01 → TL ids above.

---

### T-XLS-BE-01 — ExportAsync widen

- Load `/implement-export-import-excel`.
- Replace stub: apply **list filter QS** (incl. `side` · `wallKind` · **filtered**) · project typed Biểu 10 (**21** cols · **1 sheet** · crest* cùng hàng) · golden Cục **16-sheet** sheet **Biểu 10** · **cấm** 12+8 · **cấm** 2 sheet invent.
- Map export col `heightM` ↔ entity `WidthM` (**height_alias** · **GAP-BIEU10-XLS-07**).
- Filename `Bieu10_KeTuongChan_{yyyyMMdd}.xls` via `Content-Disposition`.
- Empty → headers-only file **or** FE toast (Dev chốt 1 · document in implement).
- DoD: closes **GAP-BIEU10-XLS-01/03/05/06/07** · binary Excel · filter parity list (ignore page).

### T-XLS-BE-02 — Import typed

- Multipart commit: sheet **Biểu 10** → shell + `CsdlBieu10` · `skipBridge` default true.
- Map import col `heightM` → entity `WidthM` (**height_alias**).
- Response `CsdlImportResultDto` · row errors in DTO · **cấm** DetailJson / parent `*Json`.
- DoD: closes **GAP-BIEU10-XLS-05/07** · import_now upsert typed.

### T-XLS-BE-03 — Controller filter bind

- Bind export query: `resource` required + `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · `wallKind`.
- DoD: QS parity list filters · 422 thiếu resource.

### T-XLS-BFF-01 — BFF proxy

- Forward export QS · multipart · binary passthrough · **no business logic** · **cấm** remap heightM↔WidthM.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export|import`.

### T-XLS-FE-01 — Toolbar Xuất/Nhập (= UI-01)

- `catalogToolbar`: Xuất Excel (`fa-file-excel`) · Nhập Excel (`fa-file-import` + hidden file input) · **peer keep**.
- Blob download dùng server filename · toast success/error · **cấm** toast-stub=done · **cấm** `window.alert`/`confirm`.
- DoD: closes **GAP-BIEU10-XLS-01/02** · actions on DES-GRID-B only.

### T-XLS-FE-02 — Filter QS → export

- Pass **current** filter state (incl. `side` · `wallKind`) as export QS · **cấm** Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08** / **GAP-BIEU10-XLS-04**).
- After import success → reload list · **cấm** 2-sheet invent (**GAP-BIEU10-XLS-06**).
- DoD: filtered export matches visible filter · filter-bar layout HARD unchanged.

### T-XLS-QA-01 — E2E (queued `/agent-qa*` only)

- S-XLS-EXPORT: filter (+side/wallKind) → Xuất → file name + binary · height col alias · **fail** stub / wrong name / no filter / 12+8 / 2-sheet.
- S-XLS-IMPORT: pick golden-like xls → import_now → list reflects typed · heightM↔WidthM · skipBridge soft.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS + KEEP cite)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · filtered · 1 sheet 21 · height_alias |
| importExcel | ToolbarButton+file | import_now · typed · height_alias |
| (form 21/2) | typed prior | **KEEP** · **cấm** reopen |
| filter fields | prior + side/wallKind | **KEEP** · **cấm** export btn |
| peerSoTs | toolbar deep-link | so-ts-retaining · **≠** merge |

---

## Screens / zones (ids)

- S-LIST · S-FORM-* · **S-XLS-EXPORT** · **S-XLS-IMPORT** · S-HUB-ENTRY · S-PEER
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-10`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-XLS-BE-01..03 · T-PERM reuse · height_alias |
| BFF | `/agent-dev` | T-XLS-BFF-01 |
| FE | `/agent-dev` | T-XLS-FE-01..02 · T-UI-ACT delta · peer keep |
| Excel skill | `/implement-export-import-excel` | golden sheet Biểu 10 · binary · 1 sheet 21 · height_alias |
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
| XLS | filtered · golden Biểu 10 · filename locked · 1 sheet 21 · crest cùng hàng · height_alias · import_now typed |
| Filter | **cấm** Xuất trên bar |
| Persist | shell+Schema_CsdlBieu10 · **cấm** parent JSON · **no new migration** |
| API | keep `asset/csdl-records` · **cấm** ERP.* |
| Shell height | KEEP LAYOUT-06 |
| Peer | so-ts-retaining deep-link KEEP · **≠** merge |

---

## Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · FILENAME locked · Q-XLS-HEIGHT=height_alias · design/sa/route approve)

## Next

| Role | Need |
|------|------|
| **Dev** | `implement/csdl-bieu-10.md` · T-XLS-* · `/implement-export-import-excel` |
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
| writtenAt | 2026-09-18T06:30:00.000Z |
| contentHashPrior | sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 |
| taskId | task_71a5d419 |
