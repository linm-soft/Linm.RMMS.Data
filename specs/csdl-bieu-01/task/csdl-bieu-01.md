# Team lead — tasks — csdl-bieu-01 (edit_page · T-XLS-S01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Xuất/Nhập Excel (Wave 1) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** (T-XLS-S01) |
| packKind | **`list`** (Kind **B** A–D+F+H KEEP · Kind **D** Slideout KEEP) |
| formType | `list` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-yyyyMMdd-nnnn` |
| peerSoTs | `pavement-section` · deep-link only · **cấm** merge form |
| solution_confirm | **approve** (`task_24cf3664`) |
| design_confirm | **approve** (`task_8009a294`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep) — hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-01` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_56b657af` |
| saTaskId | `task_24cf3664` |
| contentHashPrior | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprintPrior | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| updatedAt | `2026-09-18T01:12:11.784Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · reopen typed 38 as `new_page` · start role khác (**GAP-PKT-ROLE-01**) · golden 12+8 hồ sơ · parent `*Json`.

---

## § Delta Current vs New (`edit_page` · T-XLS-S01)

| Area | Current (typed live) | New (Wave 1 XLS) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD 38-col | DONE prior | **KEEP** | **cấm** reopen · T-* CRUD = KEEP |
| Route | hub + alias `/csdl-bieu-01` | **keep `route_a`** | no new route · **route_confirm=route_a** |
| Toolbar | CRUD actions | **+Xuất Excel +Nhập Excel** | **T-XLS-FE-01** · **GAP-BIEU01-XLS-UI-01** |
| Export | CSV stub · no filter QS · wrong name | filtered · golden Cục **Biểu 1** · `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · binary | **T-XLS-BE-01/03** · **GAP-BIEU01-XLS-EXP-01** |
| Import | generic shell | import_now · sheet Biểu 1 → shell+typed · skipBridge | **T-XLS-BE-02** · **GAP-BIEU01-XLS-IMP-01** |
| Filter bar | KEEP | **cấm** nút Xuất trên bar | **T-XLS-FE-02** · GAP-FILTER-BAR-08 |
| Migration | Schema_CsdlBieu1 KEEP | **none mới** @ XLS | **cấm** Step 4b @ TL |
| BFF | proxy | binary + multipart passthrough | **T-XLS-BFF-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · typed entity · filter keys · LeaveConfirm · pageSize · peer deep-link · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | hub `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` · `route_confirm=route_a` (keep) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `pavement-sections` |
| entity | shell + `CsdlBieu1Entity` · **KEEP** · XLS migration **none** |
| implement skill | `/implement-export-import-excel` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect |

### Route confirm (autoApprove · keep)

| Option | Path | Decision |
|--------|------|----------|
| A | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-01` | **SELECTED** — keep |
| B | invent new URL | rejected |
| C | drop alias | rejected |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · KEEP + XLS delta)

| Zone | Component | Wave |
|------|-----------|------|
| DES-GRID-A..D/F/H/Z | prior Lin\* map | **KEEP** |
| DES-GRID-B toolbar | `catalogToolbar` / `buildCatalogListToolbarActions` | **+exportExcel +importExcel** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên bar |
| S-XLS-EXPORT | ToolbarButton `fa-file-excel` | **T-XLS-FE-01/02** |
| S-XLS-IMPORT | ToolbarButton+file `fa-file-import` | **T-XLS-FE-01** |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=pavement-sections&…` | filtered · binary · filename locked |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=pavement-sections` | multipart · import_now · typed |
| API-XLS-03 | POST | `/api/v1/asset/csdl-records/import/preview?resource=…` | optional preview · KEEP proxy |
| API-01..05 · API-LKP-01 | — | prior CRUD / road-route | **KEEP** |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · binary + multipart passthrough.

Gates (SA): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (delta)

| FormMode | Load | Save / action |
|----------|------|---------------|
| list / C/E/V/Copy/delete | KEEP | KEEP |
| **export** | — | GET export + **same filter QS** (ignore page) |
| **import** | file (+ optional preview) | POST import multipart · skipBridge |

### Export filter QS (= list keys)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · **export ignores `page`/`pageSize`**

---

## System design checklist

| ID | Value |
|----|-------|
| SD-BFF | **required** · proxy · binary/multipart |
| SD-AUTH | reuse `asset.csdl-records.read|create|update` · Auth debt DEFER |
| SD-NO-JSON | **required** · typed child · **cấm** DetailJson on import |
| SD-LIB-UI | Common.Components · catalogToolbar |
| SD-XLS | `/implement-export-import-excel` · golden Cục sheet **Biểu 1** · **cấm** 12+8 |

---

## FormType pack — task matrix (`list` · §2a KEEP + XLS delta)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-UI-LIST-01 | Dev | **KEEP** | — | `/agent-dev` | Kind B shell · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | **KEEP** | — | `/agent-dev` | FilterBar V1–V10 · **cấm** Xuất trên bar |
| T-UI-CFG-01 | Dev | **KEEP** | — | `/agent-dev` | Zone F full cột |
| T-UI-FORM-01 | Dev | **KEEP** | — | `/agent-dev` | Slideout 38 · **cấm** reopen |
| T-UI-LEAVE-01 | Dev | **KEEP** | — | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **KEEP+delta** | T-XLS-FE-01 | `/agent-dev` | +export/+import handlers |
| T-UI-LKP-01 | Dev | **KEEP** | — | `/agent-dev` | road-route |
| T-UI-FIELD-01 | Dev | **KEEP** | — | `/agent-dev` | typed 38 |
| T-UI-PROD-01 | Dev | **KEEP** | — | `/agent-dev` | hub + peer · **cấm** merge |
| T-UI-UX-01 | Dev | **KEEP** | — | `/agent-dev` | constitution |
| T-UI-RESP-01 | Dev | **KEEP** | — | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | — | **n/a P1** | — | — | — |
| T-BE-CRUD-01 | Dev | **KEEP** | — | `/agent-dev` | typed CRUD |
| T-BE-UISCHEMA-01 | Dev | **KEEP** | — | `/agent-dev` | catalogKind |
| T-BE-INIT-01 | — | **n/a P1** | — | — | LOOKUP_STATIC |
| T-PERM-01 | Dev | **KEEP** | — | `/agent-dev` | reuse codes + export/import |
| T-QA-CRUD-01 | QA | **KEEP** | — | `/agent-qa` | prior CRUD |
| T-QA-FORM-01 | QA | **KEEP** | — | `/agent-qa` | 38-col |
| T-QA-FILTER-01 | QA | **KEEP** | — | `/agent-qa` | V1–V5+V10 · no export on bar |
| T-QA-FILTER-02 | QA | **KEEP** | — | `/agent-qa` | D+T+M |
| **T-XLS-BE-01** | Dev | **pending** | — | `/agent-dev` | ExportAsync widen · golden · filename |
| **T-XLS-BE-02** | Dev | **pending** | — | `/agent-dev` | Import commit/preview typed |
| **T-XLS-BE-03** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Controller bind filter QS |
| **T-XLS-BFF-01** | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | binary + multipart proxy |
| **T-XLS-FE-01** | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | toolbar Xuất/Nhập · blob · file · toast |
| **T-XLS-FE-02** | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | pass filter QS · **cấm** filter-bar export |
| **T-XLS-QA-01** | QA | **pending** | T-XLS-FE-* | `/agent-qa` | E2E S-XLS-EXPORT/IMPORT |

**SA id map:** T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01 (as above).

---

### T-XLS-BE-01 — ExportAsync widen

- Load `/implement-export-import-excel`.
- Replace CSV stub: apply **list filter QS** · project typed Biểu 1 (38-col) · golden Cục sheet **Biểu 1** · **cấm** 12+8.
- Filename `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` via `Content-Disposition`.
- Empty → headers-only file **or** FE toast (Dev chốt 1 · document in implement).
- DoD: closes **GAP-BIEU01-XLS-EXP-01** · binary Excel · filter parity list (ignore page).

### T-XLS-BE-02 — Import typed

- Multipart commit (+ preview KEEP): sheet **Biểu 1** → shell + `CsdlBieu1` · `skipBridge` default true.
- Response `CsdlImportResultDto` · row errors in DTO · **cấm** DetailJson / parent `*Json`.
- DoD: closes **GAP-BIEU01-XLS-IMP-01** · import_now upsert typed.

### T-XLS-BE-03 — Controller filter bind

- Bind export query: `resource` required + `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo`.
- DoD: QS parity list filters · 422 thiếu resource.

### T-XLS-BFF-01 — BFF proxy

- Forward export QS · multipart · binary passthrough · **no business logic**.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export|import|/import/preview`.

### T-XLS-FE-01 — Toolbar Xuất/Nhập (= UI-01)

- `catalogToolbar`: Xuất Excel (`fa-file-excel`) · Nhập Excel (`fa-file-import` + hidden file input).
- Blob download dùng server filename · toast success/error · **cấm** `window.alert`/`confirm`.
- DoD: closes **GAP-BIEU01-XLS-UI-01** · actions on DES-GRID-B only.

### T-XLS-FE-02 — Filter QS → export

- Pass **current** filter state as export QS · **cấm** Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**).
- After import success → reload list.
- DoD: filtered export matches visible filter · filter-bar layout HARD unchanged.

### T-XLS-QA-01 — E2E (queued `/agent-qa*` only)

- S-XLS-EXPORT: filter → Xuất → file name + binary · **fail** CSV stub / wrong name / no filter.
- S-XLS-IMPORT: pick golden-like xls → import_now → list reflects typed rows · skipBridge soft.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS + KEEP cite)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · filtered |
| importExcel | ToolbarButton+file | import_now · P1 |
| (form 38) | typed prior | **KEEP** · **cấm** reopen |
| filter fields | prior | **KEEP** · **cấm** export btn |

---

## Screens / zones (ids)

- S-LIST · S-FORM-* · **S-XLS-EXPORT** · **S-XLS-IMPORT** · S-HUB-ENTRY · S-PEER-SOTS
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-01`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE | `/agent-dev` | T-XLS-BE-01..03 · T-PERM reuse |
| BFF | `/agent-dev` | T-XLS-BFF-01 |
| FE | `/agent-dev` | T-XLS-FE-01..02 · T-UI-ACT delta |
| Excel skill | `/implement-export-import-excel` | golden sheet · binary |
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
| XLS | filtered · golden Biểu 1 · filename locked · import_now typed |
| Filter | **cấm** Xuất trên bar |
| Persist | shell+typed · **cấm** parent JSON · **no new migration** |
| API | keep `asset/csdl-records` · **cấm** ERP.* |
| Shell height | KEEP LAYOUT-06 |

---

## Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · FILENAME locked · design/sa/route approve)

## Next

| Role | Need |
|------|------|
| **Dev** | `implement/csdl-bieu-01.md` · T-XLS-* · `/implement-export-import-excel` |
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
| writtenAt | 2026-09-18T01:12:11.784Z |
| contentHashPrior | sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 |
| taskId | task_56b657af |
