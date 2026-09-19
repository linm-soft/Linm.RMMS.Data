# Team lead — tasks — csdl-bieu-02 (edit_page · T-XLS-S02)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Xuất Excel (Wave 1 · export_only_p0) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** (T-XLS-S02) |
| packKind | **`list`** (Kind **B** A–D+F KEEP · Kind **D** Slideout KEEP) |
| formType | `list` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-yyyyMMdd-nnnn` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only · **cấm** merge form |
| solution_confirm | **approve** (`task_5ee91442`) |
| design_confirm | **approve** (`task_d763be35`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep) — hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-02` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_b5696c4c` |
| saTaskId | `task_5ee91442` |
| contentHashPrior | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| updatedAt | `2026-09-18T02:20:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · reopen typed 48 as `new_page` · Import UI P0 · streaming export P0 · golden 12+8 hồ sơ · parent `*Json` · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`edit_page` · T-XLS-S02)

| Area | Current (typed live) | New (Wave 1 XLS) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD 48-col | DONE prior | **KEEP** | **cấm** reopen · T-* CRUD = KEEP |
| Route | hub + alias `/csdl-bieu-02` | **keep `route_a`** | no new route · **route_confirm=route_a** |
| Toolbar | CRUD actions | **+Xuất Excel** · Import **ẩn** | **T-XLS-FE-01** · **GAP-BIEU02-XLS-01** |
| Export | stub / missing filter-all | filtered · **filter-all** · golden Cục **Biểu 2** · `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · binary | **T-XLS-BE-01/02** · **GAP-BIEU02-XLS-02/04** |
| Import | — | **DEFER P1** (`export_only_p0`) | **T-XLS-IMP OUT** · **GAP-BIEU02-XLS-03** |
| Filter bar | KEEP | **cấm** nút Xuất trên bar | **T-XLS-FE-02** · GAP-FILTER-BAR-08 |
| Migration | Schema_CsdlBieu2 KEEP | **none mới** @ XLS | **cấm** Step 4b @ TL |
| BFF | proxy | binary passthrough (export) | **T-XLS-BFF-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · typed entity · filter keys · LeaveConfirm · pageSize · peer deep-link · GPS×3 · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | hub `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` · `route_confirm=route_a` (keep) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=bridges` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `bridges` |
| entity | shell + `CsdlBieu2Entity` · **KEEP** · XLS migration **none** |
| implement skill | `/implement-export-import-excel` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect |

### Route confirm (autoApprove · keep)

| Option | Path | Decision |
|--------|------|----------|
| A | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-02` | **SELECTED** — keep |
| B | invent new URL | rejected |
| C | drop alias | rejected |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · KEEP + XLS delta)

| Zone | Component | Wave |
|------|-----------|------|
| DES-GRID-A..D/F/Z | prior Lin\* map | **KEEP** |
| DES-GRID-B toolbar | `catalogToolbar` / `buildCatalogListToolbarActions` | **+exportExcel** · import **ẩn P1** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên bar |
| S-XLS-EXPORT | ToolbarButton `fa-file-excel` | **T-XLS-FE-01/02** |
| S-XLS-IMPORT | hidden P1 | **OUT** |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=bridges&…` | filtered · **filter-all** · binary · filename `.xls` |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=bridges` | **DEFER P1** · UI ẩn |
| API-01..05 · API-LKP-01 | — | prior CRUD / road-route | **KEEP** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · binary passthrough (export P0).

Gates (SA): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (delta)

| FormMode | Load | Save / action |
|----------|------|---------------|
| list / C/E/V/Copy/delete | KEEP | KEEP |
| **export** | — | GET export + **same filter QS** · **ignore page/pageSize** · **cấm** streaming P0 |
| **import** | — | **DEFER P1** |

### Export filter QS (= list keys)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `beamType` (optional) · **export ignores `page`/`pageSize`** (filter-all)

---

## System design checklist

| ID | Value |
|----|-------|
| SD-BFF | **required** · proxy · binary |
| SD-AUTH | reuse `asset.csdl-records.read|create|update|delete` · Auth debt DEFER |
| SD-NO-JSON | **required** · typed child · **cấm** parent `*Json` |
| SD-LIB-UI | Common.Components · catalogToolbar |
| SD-XLS | `/implement-export-import-excel` · golden Cục sheet **Biểu 2** · 48 cols · GPS×3 · **cấm** 12+8 · Import DEFER |

---

## FormType pack — task matrix (`list` · §2a KEEP + XLS delta)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-UI-LIST-01 | Dev | **KEEP** | — | `/agent-dev` | Kind B shell · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | **KEEP** | — | `/agent-dev` | FilterBar V1–V5 · **cấm** Xuất trên bar |
| T-UI-CFG-01 | Dev | **KEEP** | — | `/agent-dev` | Zone F full cột |
| T-UI-FORM-01 | Dev | **KEEP** | — | `/agent-dev` | Slideout 48 · **cấm** reopen |
| T-UI-LEAVE-01 | Dev | **KEEP** | — | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **KEEP+delta** | T-XLS-FE-01 | `/agent-dev` | +export handler only |
| T-UI-LKP-01 | Dev | **KEEP** | — | `/agent-dev` | road-route |
| T-UI-FIELD-01 | Dev | **KEEP** | — | `/agent-dev` | typed 48 · GPS×3 |
| T-UI-PROD-01 | Dev | **KEEP** | — | `/agent-dev` | hub + peer · **cấm** merge |
| T-UI-UX-01 | Dev | **KEEP** | — | `/agent-dev` | constitution |
| T-UI-RESP-01 | Dev | **KEEP** | — | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | — |
| T-BE-CRUD-01 | Dev | **KEEP** | — | `/agent-dev` | typed CRUD · Schema_CsdlBieu2 |
| T-BE-UISCHEMA-01 | Dev | **KEEP** | — | `/agent-dev` | catalogKind bridges |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC |
| T-PERM-01 | Dev | **KEEP** | — | `/agent-dev` | reuse codes + export read |
| T-QA-CRUD-01 | QA | **KEEP** | — | `/agent-qa` | prior CRUD |
| T-QA-FORM-01 | QA | **KEEP** | — | `/agent-qa` | 48-col |
| T-QA-FILTER-01 | QA | **KEEP** | — | `/agent-qa` | V1–V5 · no export on bar |
| **T-XLS-BE-01** | Dev | **pending** | — | `/agent-dev` | ExportAsync widen · golden · filename `.xls` |
| **T-XLS-BE-02** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Controller bind filter QS · filter-all |
| **T-XLS-IMP** | — | **OUT / DEFER P1** | — | — | Import · GAP-BIEU02-XLS-03 |
| **T-XLS-BFF-01** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | binary export proxy |
| **T-XLS-FE-01** | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | toolbar Xuất · blob · toast · Import ẩn |
| **T-XLS-FE-02** | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | pass filter QS · **cấm** filter-bar export |
| **T-XLS-QA-01** | QA | **pending** | T-XLS-FE-* | `/agent-qa` | E2E S-XLS-EXPORT |

**SA id map:** T-XLS-BE-01..02 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 · Import OUT.

---

### T-XLS-BE-01 — ExportAsync widen

- Load `/implement-export-import-excel`.
- Apply **list filter QS** · project typed Biểu 2 (**48-col** · GPS×3) · golden Cục **16-sheet** sheet **Biểu 2** · **cấm** 12+8.
- Filename `Bieu02_ThongKeCau_{yyyyMMdd}.xls` via `Content-Disposition` (**SA chốt `.xls`**).
- Mode **filter-all** · ignore page/pageSize · **cấm** streaming P0.
- Empty filter match → headers-only file **or** FE toast (Dev chốt 1 · document in implement).
- DoD: closes **GAP-BIEU02-XLS-02** · binary Excel · filter parity list.

### T-XLS-BE-02 — Controller filter bind (filter-all)

- Bind export query: `resource` required + `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · optional `beamType`.
- Ignore `page`/`pageSize` · return all matching rows.
- DoD: closes **GAP-BIEU02-XLS-04** · QS parity list filters · 422 thiếu resource.

### T-XLS-IMP — Import DEFER P1 (OUT)

- POST import / preview · UI Nhập Excel — **không** implement P0.
- DoD: closes tracking **GAP-BIEU02-XLS-03** as deferred · **cấm** show Import button.

### T-XLS-BFF-01 — BFF proxy

- Forward export QS · binary passthrough · **no business logic**.
- Import multipart path may exist but **unused** P0.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export`.

### T-XLS-FE-01 — Toolbar Xuất (= UI · GAP-BIEU02-XLS-01)

- `catalogToolbar`: Xuất Excel (`fa-file-excel`) only · Import **ẩn**.
- Blob download dùng server filename · toast success/error · **cấm** `window.alert`/`confirm` · **cấm** toast stub success without file.
- DoD: closes **GAP-BIEU02-XLS-01** · action on DES-GRID-B only.

### T-XLS-FE-02 — Filter QS → export

- Pass **current** filter state as export QS · **cấm** Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**).
- DoD: filtered export matches visible filter · filter-bar layout HARD unchanged.

### T-XLS-QA-01 — E2E (queued `/agent-qa*` only)

- S-XLS-EXPORT: filter → Xuất → file name `.xls` + binary · 48 cols · **fail** CSV stub / wrong name / no filter / filter-bar export.
- Import scenarios **skip** P0 (DEFER).
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS + KEEP cite)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · filtered · filter-all |
| importExcel | ToolbarButton+file | **DEFER P1** · ẩn |
| (form 48) | typed prior | **KEEP** · GPS×3 · **cấm** reopen |
| filter fields | prior | **KEEP** · **cấm** export btn |

---

## Screens / zones (ids)

- S-LIST · S-FORM-* · **S-XLS-EXPORT** · S-XLS-IMPORT (hidden) · S-HUB-ENTRY · S-PEER-SO6
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-02`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-XLS-BE-01..02 · T-PERM reuse |
| BFF | `/agent-dev` | T-XLS-BFF-01 |
| FE | `/agent-dev` | T-XLS-FE-01..02 · T-UI-ACT delta |
| Excel skill | `/implement-export-import-excel` | golden sheet Biểu 2 · binary |
| Responsive | `/dev-web-responsive` | KEEP T-UI-RESP-01 if touch layout |
| QA | `/agent-qa` | T-XLS-QA-01 · e2e only here |

**Parallel OK:** T-XLS-BE-01 then T-XLS-BE-02 · T-XLS-BFF after BE-01 · T-XLS-FE after BFF · QA after FE.

**Deps:** T-XLS-BE-01 → T-XLS-BE-02 → T-XLS-BFF-01 → T-XLS-FE-01 → T-XLS-FE-02 → T-XLS-QA-01.

---

## Quality gates

| Gate | Expect |
|------|--------|
| Grid AC / Leave / Filter HARD | KEEP prior PASS |
| Report AC | N/A |
| XLS | filtered · filter-all · golden Biểu 2 · filename `.xls` · Import DEFER |
| Filter | **cấm** Xuất trên bar |
| Persist | shell+typed · **cấm** parent JSON · **no new migration** |
| API | keep `asset/csdl-records` · **cấm** ERP.* |
| Shell height | KEEP LAYOUT-06 |

---

## Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=export_only_p0 · FILENAME `.xls` · filter-all · design/sa/route approve)

## Next

| Role | Need |
|------|------|
| **Dev** | `implement/csdl-bieu-02.md` · T-XLS-* · `/implement-export-import-excel` |
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
| writtenAt | 2026-09-18T02:20:00.000Z |
| contentHashPrior | sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 |
| taskId | task_b5696c4c |
