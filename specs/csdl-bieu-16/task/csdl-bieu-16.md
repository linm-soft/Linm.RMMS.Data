# Team lead — tasks — csdl-bieu-16 (edit_page · T-XLS-S16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao · Xuất Excel |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · toolbar **+DES-EXPORT** · Kind **D** Slideout keep · `branches[]`) |
| formType | `list` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT · export flatten 1 row/nhánh |
| IdCode | `IX-` (keep) |
| peerSoTs | `so-ts-interchange` · **cấm** merge vào export |
| epic | `csdl-export-print` · Wave 1 **`T-XLS-S16`** |
| solution_confirm | **approve** (`task_17aa79d5`) |
| design_confirm | **approve** (`task_4db008e6`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (**keep**) — alias `/csdl-bieu-16` + hub `?resource=interchanges` |
| team_lead_confirm | **approve** (autoApprove ON · `task_1793bfbe`) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · contentHash `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| priorTyped | `task_4dfa0ca5` · typed CRUD **keep** · review `task_628c95a5` PASS · **cấm** reopen new_page |
| taskId | `task_1793bfbe` |
| saTaskId | `task_17aa79d5` |
| contentHashPrior | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| updatedAt | `2026-09-18T03:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `handoff-compact` · `/implement-export-import-excel` · `filter-bar-layout-hard` · `list-form-quality-gates` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration @ TL · ERP.* · invent `infra` API · toast stub=done · filter-bar export · golden 12+8 · merge `so-ts-interchange` / `road-assets` · reopen typed new_page CRUD · Import wire P0 · flatten-only mất nhánh · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`edit_page` · T-XLS-S16)

| Area | Current (typed keep) | New (XLS P0) | Action |
|------|----------------------|--------------|--------|
| CRUD / entity | Schema_CsdlBieu16 + Branch · shell+typed 1:1 · 39 · Slideout · `branches[]` embed | **keep** · **cấm** reopen | — · typed T-* **DONE** |
| Export | Missing / toast stub / OUT | `GET …/export?resource=interchanges` binary · 1 sheet 39 · flatten 1 row/nhánh | **T-XLS-S16-BE-01** · **GAP-BIEU16-XLS-01/05/06** |
| Import | stub / OUT | **DEFER P1** · nút ẩn · **cấm** wire P0 | **T-XLS-S16-BE-02 OUT** · Q-XLS-IMPORT=`export_only_p0` |
| Toolbar | catalogToolbar CRUD | **+Xuất Excel** · DES-EXPORT | **T-XLS-S16-FE-01** |
| Filter bar | HARD keep | **cấm** nút export trên filter (GAP-FILTER-BAR-08) | **GAP-BIEU16-XLS-04** |
| Filename | — | `Bieu16_NutGiao_{yyyyMMdd}.xls` | **T-XLS-S16-FE-02** · Q-XLS-FILENAME |
| Sheet | — | **name_cuc** «Biểu 16» · 39 · flatten · golden Cục 16-sheet · **cấm** 12+8 | **GAP-BIEU16-XLS-03/06** |
| Branch flatten | embed DTO keep | 1 row/nhánh (repeat header) · 0 nhánh → 1 row `branch*` trống (`header_blank`) | Q-XLS-BRANCH · **T-XLS-S16-BE-01** |
| Scope | — | **filtered** · filter-all (no page) · empty=all tenant resource | Q-XLS-SCOPE · **T-XLS-S16-BE-01** |
| Peer | cite so-ts-interchange | **cấm** merge peer / road-assets vào export | **GAP-BIEU16-XLS-07** |
| Toast | stub | binary download ≠ toast-stub done · empty OK · fail toast | **T-XLS-S16-FE-02** · **GAP-BIEU16-XLS-02** |
| BFF | proxy CRUD | proxy export **binary** · QS forward · **không** JSON wrap | **T-XLS-S16-BFF-01** |
| Route / hub | route_a live | **keep** · **cấm** invent URL | **route_confirm=route_a** |
| QA | typed PASS | golden 39 flatten · filtered · 0-row · header_blank · **cấm** import P0 | **T-XLS-S16-QA-01** (queued `/agent-qa*`) |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy pattern · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode `IX-` · typed entity/migration · FormMode CRUD · `branches[]` embed persist · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **keep** `/csdl-bieu-16` + hub · `route_confirm=route_a` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=interchanges` |
| `peerStdUrl` | cite only so-ts-interchange · **cấm** merge toolbar/export |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP keep |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` · **widen** export |
| `source.bff` | `bff/domains/asset/` · **proxy binary** export |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `interchanges` (typed UiSchema keep) |
| entity | shell + `CsdlBieu16Entity` + Branch · **`Schema_CsdlBieu16`+Branch keep** · **cấm** migration @ XLS |
| `devSlash` | **`/implement-export-import-excel`** · + `/agent-dev` · `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS |

### Route confirm (keep · autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-16` (+ hub card) | **SELECTED keep** — **cấm** invent URL mới |
| B | hub-only | rejected prior |
| C | invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (delta XLS · PASS)

| Zone | Component | XLS delta |
|------|-----------|-----------|
| DES-GRID-A | `LinPageLayout` header | keep |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` | **+DES-EXPORT** Xuất Excel · Import **ẩn** · peer cite only |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` | **cấm** export button (GAP-FILTER-BAR-08) · filter QS → export |
| DES-GRID-C2 | `LinCatalogDataGrid` | keep typed subset |
| DES-GRID-D | `LinCatalogListPagination` | export = **filter-all** (no page) |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` | keep |
| DES-GRID-Z / DES-FORM-BRANCH | Slideout Kind D + `branches[]` | keep · export **không** dirty Leave |
| Tree / Map | n/a | keep |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=interchanges` + filter QS | binary `.xls` · Content-Disposition `Bieu16_NutGiao_{yyyyMMdd}.xls` · filter-all · flatten branches |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=interchanges` | **DEFER P1** · **cấm** P0 |
| API-01..05 | keep | CRUD typed + embed `branches[]` | keep |

**BFF:** `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary · **không** JSON wrap · forward QS.

**MFE:** blob download · `a[download]` · filename từ header hoặc fallback · **cấm** toast stub=done · **cấm** filter-bar export.

---

## Q-XLS decisions (locked · PO)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | `filtered` |
| Q-XLS-IMPORT | `export_only_p0` (Import DEFER) |
| Q-XLS-FILENAME | `Bieu16_NutGiao_{yyyyMMdd}.xls` |
| Q-XLS-BRANCH | `header_blank` (0 nhánh → 1 row · branch* trống) |
| Q-XLS-SHEET | `name_cuc` · sheet «Biểu 16» · 39 cột · flatten 1 row/nhánh |

---

## Task matrix (T-XLS-S16 · assign Dev)

| ID | Owner | Priority | Slash / notes | Deps | AC (slim) |
|----|-------|----------|---------------|------|-----------|
| T-XLS-S16-BE-01 | BE | P0 | `/implement-export-import-excel` · GET export binary · join Schema_CsdlBieu16+Branch · 39 cols · 1 sheet «Biểu 16» · flatten 1 row/nhánh · header_blank · filtered filter-all · filename `.xls` | SA PASS | binary · 39 checksum · empty OK · **cấm** 12+8 · **cấm** ERP.* |
| T-XLS-S16-BFF-01 | BFF | P0 | same slash · proxy binary · QS forward · no JSON wrap | BE-01 | Content-Disposition pass-through |
| T-XLS-S16-FE-01 | FE | P0 | same slash · catalogToolbar Xuất · wire filter QS · Import ẩn · **cấm** filter-bar | Design · BFF | DES-EXPORT visible · GAP-FILTER-BAR-08 |
| T-XLS-S16-FE-02 | FE | P0 | blob download · filename `.xls` · empty OK · fail toast · **cấm** stub done | FE-01 | GAP-BIEU16-XLS-02 |
| T-XLS-S16-QA-01 | QA | P0 | queued `/agent-qa*` only · golden 39 flatten · filtered · 0-row · header_blank · **cấm** import P0 | FE+BE done | e2e @ QA only |
| T-XLS-S16-BE-02 | BE | **OUT P1** | POST import — **DEFER** | — | **cấm** P0 wire |

### Typed prior (keep · DONE — **cấm** reopen)

| ID | Status | Notes |
|----|--------|-------|
| T-FE-* / T-BE-* / T-UI-* / T-DM-01 | **DONE** (`task_4dfa0ca5` · `task_71eac21e`+) | Schema_CsdlBieu16+Branch · CsdlBieu16Page · route_a · hub · branches[] · **cấm** re-CRUD |

---

## GAP close map

| ID | Owner task | One-liner |
|----|------------|-----------|
| GAP-BIEU16-XLS-01 | FE-01 + BE-01 | Toolbar Xuất binary sheet Biểu 16 |
| GAP-BIEU16-XLS-02 | FE-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | BE-01 + QA-01 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | FE-01 | Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | BE-01 + BFF-01 | GET export path (+ QS) |
| GAP-BIEU16-XLS-06 | BE-01 | 1 sheet 39 · flatten 1 row/nhánh · header_blank |
| GAP-BIEU16-XLS-07 | BE-01 + FE-01 | Cấm merge so-ts-interchange/road-assets |

---

## Gates (cite SA · keep)

| Gate | Value |
|------|-------|
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| Grid AC | G keep typed · G-04 Xuất · G-05 empty OK · G-06 fail · G-07 golden 39 flatten · G-08 filtered · G-09 header_blank |
| Leave | YES · export không dirty |
| Report | N/A |

---

## Out of pack

- Import wire P0 · HTTP streaming export · org SearchInput · map canvas · peer toolbar merge · Step 4b / entity change · typed new_page reopen · flatten-only mất nhánh

## Open questions

- **none** — team_lead_confirm=approve (autoApprove ON)

---

## DoR Team lead — PASS

- [x] Prior data_analy / po / design / sa **confirmed** + compact
- [x] changeScope=`edit_page` · control-hint + real-data present
- [x] route_confirm=`route_a` keep · **cấm** invent URL
- [x] T-XLS-S16-* matrix đủ · BE-02 OUT P1
- [x] `devSlash`=`/implement-export-import-excel`
- [x] team_lead_confirm=approve
- [x] **cấm** implement code · e2e · yarn build/start:std · Step 4b @ TL
- [x] handoff compact `handoff/team_lead-compact.md`

## Next

| Role | Need |
|------|------|
| **Dev** | `/implement-export-import-excel` · T-XLS-S16-BE/BFF/FE · flatten branches · **cấm** filter-bar export · Import ẩn |
| QA | queued `/agent-qa*` · T-XLS-S16-QA-01 |
| Review | after QA |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHashPrior | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-18T03:30:00.000Z |
| versionGate | aligned |
| taskId | task_1793bfbe |
| packKind | list |
| changeScope | edit_page |
| epic | T-XLS-S16 |
