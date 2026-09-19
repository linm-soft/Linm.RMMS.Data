# Team lead — tasks — csdl-bieu-08 (edit_page · T-XLS-S08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Xuất/Nhập Excel (Wave 1 · T-XLS-S08) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** (T-XLS-S08) |
| packKind | **`list`** (Kind **B** A–D+F KEEP · Kind **D** Slideout **shared + 1 child** KEEP) |
| formType | `list` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** child/`type=` |
| IdCode | `AT-yyyyMMdd-nnnn` |
| peerSoTs | ATGT types · deep-link only · **cấm** merge form · **≠** road-assets |
| solution_confirm | **approve** (`task_72b0354c`) |
| design_confirm | **approve** (`task_b2622193`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep) — hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-08` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_21f9b30c` |
| saTaskId | `task_72b0354c` |
| contentHashPrior | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| updatedAt | `2026-09-18T05:25:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · reopen typed 45/11 as `new_page` · start role khác (**GAP-PKT-ROLE-01**) · golden 12+8 · wide-row · 11-sheet invent · parent `*Json`.

---

## § Delta Current vs New (`edit_page` · T-XLS-S08)

| Area | Current (typed live) | New (Wave 1 XLS) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD 45/11 | DONE prior | **KEEP** | **cấm** reopen · T-* CRUD = KEEP |
| Route | hub + alias `/csdl-bieu-08` | **keep `route_a`** | no new route · **route_confirm=route_a** |
| Toolbar | CRUD actions | **+Xuất Excel +Nhập Excel** | **T-XLS-FE-01** · **GAP-BIEU08-XLS-01** |
| Export | stub / incomplete | filtered · golden Cục **Biểu 8** · `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · **one_sheet_45** · binary | **T-XLS-BE-01/03** · **GAP-BIEU08-XLS-01/03/05** |
| Import | missing / generic | import_now · sheet Biểu 8 → shell+parent+**1 child** · skipBridge | **T-XLS-BE-02** · **GAP-BIEU08-XLS-05** |
| Toast | stub = done risk | real success/error | **GAP-BIEU08-XLS-02** · **T-XLS-FE-01** |
| Filter bar | KEEP | **cấm** nút Xuất trên bar | **T-XLS-FE-02** · **GAP-BIEU08-XLS-04** · GAP-FILTER-BAR-08 |
| Layout | KEEP | **cấm** 1 hàng kéo ngang lệch mẫu | **GAP-BIEU08-XLS-06** |
| Migration | Schema_CsdlBieu8+11 KEEP | **none mới** @ XLS | **cấm** Step 4b @ TL |
| BFF | proxy | binary + multipart passthrough | **T-XLS-BFF-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · typed entity + 11 children · subset_by_type · LeaveConfirm · pageSize · peer deep-link · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | hub `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` · `route_confirm=route_a` (keep) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `traffic-safety` |
| entity | shell + `CsdlBieu8Entity` + **11 child tables** · **KEEP** · XLS migration **none** |
| implement skill | `/implement-export-import-excel` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect |

### Route confirm (autoApprove · keep)

| Option | Path | Decision |
|--------|------|----------|
| A | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-08` | **SELECTED** — keep |
| B | invent new URL | rejected |
| C | drop alias | rejected |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · KEEP + XLS delta)

| Zone | Component | Wave |
|------|-----------|------|
| DES-GRID-A..D/F/Z | prior Lin\* map · shared+1 child | **KEEP** |
| DES-GRID-B toolbar | `catalogToolbar` / `buildCatalogListToolbarActions` | **+exportExcel +importExcel** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên bar |
| DES-GRID-C2 | `LinCatalogDataGrid` · **subset_by_type** | **KEEP** · **cấm** wide-row 45 |
| S-XLS-EXPORT | ToolbarButton `fa-file-excel` | **T-XLS-FE-01/02** |
| S-XLS-IMPORT | ToolbarButton+file `fa-file-import` | **T-XLS-FE-01** |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=traffic-safety&…` | filtered · binary · **one_sheet_45** · filename locked |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=traffic-safety` | multipart · import_now · shell+parent+1 child |
| API-XLS-03 | POST | `/api/v1/asset/csdl-records/import/preview?resource=traffic-safety` | optional preview · KEEP proxy |
| API-01..05 · API-LKP · type | — | prior CRUD / type / road-route | **KEEP** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · binary + multipart passthrough.

Gates (SA): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (delta)

| FormMode | Load | Save / action |
|----------|------|---------------|
| list / C/E/V/Copy/delete | KEEP | KEEP |
| **export** | — | GET export + **same filter QS** (ignore page) · incl. `type` |
| **import** | file (+ optional preview) | POST import multipart · skipBridge |

### Export filter QS (= list keys)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · **`type`/`assetType`** · **export ignores `page`/`pageSize`**

---

## System design checklist

| ID | Value |
|----|-------|
| SD-BFF | **required** · proxy · binary/multipart |
| SD-AUTH | reuse `asset.csdl-records.read|create|update` · Auth debt DEFER |
| SD-NO-JSON | **required** · typed child · **cấm** DetailJson on import |
| SD-LIB-UI | Common.Components · catalogToolbar |
| SD-XLS | `/implement-export-import-excel` · golden Cục **16-sheet** sheet **Biểu 8** · **one_sheet_45** · **cấm** 12+8 · **cấm** wide-row |

---

## FormType pack — task matrix (`list` · §2a KEEP + XLS delta)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-UI-LIST-01 | Dev | **KEEP** | — | `/agent-dev` | Kind B shell · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | **KEEP** | — | `/agent-dev` | FilterBar V1–V10 · **cấm** Xuất trên bar |
| T-UI-CFG-01 | Dev | **KEEP** | — | `/agent-dev` | Zone F · catalogKind traffic-safety |
| T-UI-FORM-01 | Dev | **KEEP** | — | `/agent-dev` | Slideout 45/11 shared+1 · **cấm** reopen |
| T-UI-LEAVE-01 | Dev | **KEEP** | — | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **KEEP+delta** | T-XLS-FE-01 | `/agent-dev` | +export/+import handlers |
| T-UI-LKP-01 | Dev | **KEEP** | — | `/agent-dev` | road-route |
| T-UI-FIELD-01 | Dev | **KEEP** | — | `/agent-dev` | typed 45 · subset_by_type |
| T-UI-PROD-01 | Dev | **KEEP** | — | `/agent-dev` | hub + peer · **cấm** merge |
| T-UI-UX-01 | Dev | **KEEP** | — | `/agent-dev` | constitution |
| T-UI-RESP-01 | Dev | **KEEP** | — | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | — |
| T-BE-CRUD-01 | Dev | **KEEP** | — | `/agent-dev` | Schema_CsdlBieu8+11 |
| T-BE-UISCHEMA-01 | Dev | **KEEP** | — | `/agent-dev` | catalogKind |
| T-BE-INIT-01 | — | **n/a P1** | — | — | — |
| T-PERM-01 | Dev | **KEEP** | — | `/agent-dev` | reuse codes + export/import |
| T-QA-CRUD-01 | QA | **KEEP** | — | `/agent-qa` | prior CRUD |
| T-QA-FORM-01 | QA | **KEEP** | — | `/agent-qa` | 45/11 |
| T-QA-FILTER-01 | QA | **KEEP** | — | `/agent-qa` | V1–V5+V10 · no export on bar |
| T-QA-FILTER-02 | QA | **KEEP** | — | `/agent-qa` | D+T+M |
| **T-XLS-BE-01** | Dev | **pending** | — | `/agent-dev` | ExportAsync widen · 45 cols · golden · filename |
| **T-XLS-BE-02** | Dev | **pending** | — | `/agent-dev` | Import commit/preview · shell+parent+1 child |
| **T-XLS-BE-03** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Controller bind filter QS (+type) |
| **T-XLS-BFF-01** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | binary + multipart proxy |
| **T-XLS-FE-01** | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | toolbar Xuất/Nhập · blob · file · toast |
| **T-XLS-FE-02** | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | pass filter QS · **cấm** filter-bar export |
| **T-XLS-QA-01** | QA | **pending** | T-XLS-FE-* | `/agent-qa` | E2E S-XLS-EXPORT/IMPORT |

**SA id map:** T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 (as above).

---

### T-XLS-BE-01 — ExportAsync widen

- Load `/implement-export-import-excel`.
- Replace stub: apply **list filter QS** (incl. `type`) · project typed Biểu 8 (**45** cols · **one_sheet_45**) · golden Cục **16-sheet** sheet **Biểu 8** · **cấm** 12+8 · **cấm** wide-row.
- Filename `Bieu08_HeThongATGT_{yyyyMMdd}.xls` via `Content-Disposition`.
- Empty → headers-only file **or** FE toast (Dev chốt 1 · document in implement).
- DoD: closes **GAP-BIEU08-XLS-01/03/05** · binary Excel · filter parity list (ignore page).

### T-XLS-BE-02 — Import typed

- Multipart commit (+ preview KEEP): sheet **Biểu 8** → shell + `CsdlBieu8` + **matching 1 child** · `skipBridge` default true.
- Response `CsdlImportResultDto` · row errors in DTO · **cấm** DetailJson / parent `*Json`.
- DoD: closes **GAP-BIEU08-XLS-05** · import_now upsert typed+child.

### T-XLS-BE-03 — Controller filter bind

- Bind export query: `resource` required + `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · **`type`/`assetType`**.
- DoD: QS parity list filters · 422 thiếu resource.

### T-XLS-BFF-01 — BFF proxy

- Forward export QS · multipart · binary passthrough · **no business logic**.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export|import|/import/preview`.

### T-XLS-FE-01 — Toolbar Xuất/Nhập (= UI-01)

- `catalogToolbar`: Xuất Excel (`fa-file-excel`) · Nhập Excel (`fa-file-import` + hidden file input).
- Blob download dùng server filename · toast success/error · **cấm** toast-stub=done · **cấm** `window.alert`/`confirm`.
- DoD: closes **GAP-BIEU08-XLS-01/02** · actions on DES-GRID-B only.

### T-XLS-FE-02 — Filter QS → export

- Pass **current** filter state (incl. `type`) as export QS · **cấm** Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08** / **GAP-BIEU08-XLS-04**).
- After import success → reload list · **cấm** layout 1 hàng kéo ngang (**GAP-BIEU08-XLS-06**).
- DoD: filtered export matches visible filter · filter-bar layout HARD unchanged.

### T-XLS-QA-01 — E2E (queued `/agent-qa*` only)

- S-XLS-EXPORT: filter (+type) → Xuất → file name + binary · **fail** stub / wrong name / no filter / 12+8.
- S-XLS-IMPORT: pick golden-like xls → import_now → list reflects typed+child · skipBridge soft.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS + KEEP cite)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · filtered · one_sheet_45 |
| importExcel | ToolbarButton+file | import_now · typed+child |
| (form 45/11) | typed prior | **KEEP** · **cấm** reopen |
| filter fields | prior + type | **KEEP** · **cấm** export btn |

---

## Screens / zones (ids)

- S-LIST · S-FORM-* · **S-XLS-EXPORT** · **S-XLS-IMPORT** · S-HUB-ENTRY · S-PEER-SOTS
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-08`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-XLS-BE-01..03 · T-PERM reuse |
| BFF | `/agent-dev` | T-XLS-BFF-01 |
| FE | `/agent-dev` | T-XLS-FE-01..02 · T-UI-ACT delta |
| Excel skill | `/implement-export-import-excel` | golden sheet Biểu 8 · binary · one_sheet_45 |
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
| XLS | filtered · golden Biểu 8 · filename locked · one_sheet_45 · import_now typed+child |
| Filter | **cấm** Xuất trên bar |
| Persist | shell+parent+1 child · **cấm** parent JSON · **no new migration** |
| API | keep `asset/csdl-records` · **cấm** ERP.* |
| Shell height | KEEP LAYOUT-06 |

---

## Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · FILENAME locked · TYPE=one_sheet_45 · design/sa/route approve)

## Next

| Role | Need |
|------|------|
| **Dev** | `implement/csdl-bieu-08.md` · T-XLS-* · `/implement-export-import-excel` |
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
| writtenAt | 2026-09-18T05:25:00.000Z |
| contentHashPrior | sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c |
| taskId | task_21f9b30c |
