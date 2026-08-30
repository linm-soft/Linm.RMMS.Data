# Team lead — Task — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

> Team lead · `/agent-team-lead` · `task_968c1d06` · autoApprove ON  
> Status: **confirmed** · `route_confirm` = Design/SA (autopilot) · `2026-08-29T05:00:00.000Z`  
> Serial by page+layer · **cấm** parallel same parcel/common file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build  
> Wave 1 PH1 (`task_ed77c1b0`…`task_10be583d`) **done** · wave này = **PH2–PH4 only**

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| title | [Team lead] Công trình KCHT — PH2 đoạn/BH · PH3 tiến độ tuần · PH4 sổ GN + KBN |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | **`list`** (Kind **B** nested đoạn/tuần/sổ + full-page CT 4 tab **giữ** + forms **5 cột**) |
| formType | **`list`** + nested Kind B + full-page multi-tab / 5-col forms |
| changeScope | `edit_page` (PH2–PH4) |
| gap | `edit_page` · GAP-KCT-PH2-* · GAP-KCT-PH3-* · GAP-KCT-PH4-* · GAP-KCT-SEG-ENT-01 |
| mode | `feature_context` · sourceKind=synthetic · **no Excel rescan** · **no GOVOne demo** |
| design_confirm | **approve** (`task_92f4685f`) |
| solution_confirm | **approve** (`task_210b1351`) |
| route_confirm | **locked** (autopilot) — § route_confirm |
| be_repo_confirm | **`Linm.RMMS.WebService`** |
| ui_repo_confirm | **`Linm.Web.RMMS.Contract`** |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` only |
| Dev slash | **`/agent-dev`** · Step 4b `/database-migration` + `/new-endpoint` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** live × PH2–PH4 **NEW** |
| mfeStdRoute | `/kcht-cong-trinh` |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` (Dev stamp) |
| prior · data_analy | **confirmed** · control-hint + real-data · hash `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` |
| prior · po | **confirmed** · `po/requirement.md` · `task_5e779467` |
| prior · design | **confirmed** · `ui/design.md` + prototype · `task_92f4685f` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_210b1351` |
| taskId | `task_968c1d06` |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `ssot-no-duplicate` · `dev-ui-ux-constitution` · `form-field-grid` · `slideout-form-layout` (cấm CT Slideout) |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** Slideout form CT/đoạn/tuần · **cấm** thêm tab vào 4 tab PH1 · **cấm** PH5 Kind E · **cấm** API KBNN · **cấm** invent nested path = DONE trước Dev.

---

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/kcht-cong-trinh/ui/design.md` + prototype PH2–PH4 | T-UI-KCT-PH2…4 · T-UI-FILTER-* · T-UI-NAV-01 |
| Solution | `specs/kcht-cong-trinh/be/solution-discovery.md` | T-BE-KCT-PH2…4 · T-BFF-KCT-02 · TZ/XCO/SHARE · Schema |
| Prototype | `ui/prototype/kcht-cong-trinh-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · hash `4652f633…` | T-UI-LKP · T-UI-FIELD |
| Filter bar | `docs/context/features/kcht-cong-trinh-*-filter-bar.md` | T-UI-FILTER-* |
| PO | `po/requirement.md` | DoD · Leave § · AC |
| Context | `docs/context/features/kcht-cong-trinh.md` | T-CTX-01 · DOMAIN-MAP |
| Wave 1 | `task/kcht-cong-trinh.md` (prior) · implement/qa/review **done** | PH1 **giữ** — **cấm** regress |

**SA chốt:** prefix **`api/v1/kcht-ct`** · nest `…/projects/{id}/segments|weekly-progress|capital-plans|disbursements|kbn-compare` · Schema CLI **`Schema_KchtCongTrinhDisburse`** · BFF proxy-only · **NEW** `KchtRouteSegment` (không `ContractRoute`) · province **FE static P1** · FileService bind **dòng GD**.

---

## route_confirm (LOCKED · autopilot)

AskQuestion `route_confirm` **skipped wait** (`autoApprove=ON`) · chốt Design + SA § Route decision + STATUS Confirms.

| Key | Path | Notes |
|-----|------|-------|
| **mfeStdRoute** | `/kcht-cong-trinh` | List Kind B catalog PH1 **giữ** |
| S-LIST | `/kcht-cong-trinh` | Zone A–D+F+H |
| S-FORM-CREATE | `/kcht-cong-trinh/tao-moi` | full-page 4 tab · create |
| S-FORM-EDIT/VIEW | `/kcht-cong-trinh/:id` | `?mode=view` · edit default |
| S-SEG-LIST | `/kcht-cong-trinh/:id/doan-tuyen` | PH2 Kind B |
| S-SEG-CREATE | `/kcht-cong-trinh/:id/doan-tuyen/tao-moi` | full-page 5 cột |
| S-SEG-EDIT/VIEW | `/kcht-cong-trinh/:id/doan-tuyen/:segId` | |
| S-WEEK-LIST | `/kcht-cong-trinh/:id/tien-do` | PH3 Kind B |
| S-WEEK-CREATE | `/kcht-cong-trinh/:id/tien-do/tao-moi` | full-page 5 cột |
| S-WEEK-EDIT/VIEW | `/kcht-cong-trinh/:id/tien-do/:weekId` | |
| S-DISB-BOOK | `/kcht-cong-trinh/:id/giai-ngan` | PH4 · **1 URL** · layout SCĐK\|SCTX |
| S-HD-HANDOFF | `/hd-ns/:contractId?from=kcht&projectId={id}` | PH1 **giữ** |
| PH5 | — | **PARK** · **cấm** |

**source.routes (confirmed):**

```text
list:       /kcht-cong-trinh
create:     /kcht-cong-trinh/tao-moi
detail:     /kcht-cong-trinh/:id
segments:   /kcht-cong-trinh/:id/doan-tuyen · /tao-moi · /:segId
weekly:     /kcht-cong-trinh/:id/tien-do · /tao-moi · /:weekId
disburse:   /kcht-cong-trinh/:id/giai-ngan
handoff:    /hd-ns/:contractId?from=kcht&projectId={projectId}
```

**Dev MUST:** register nested routes trong `src/index.tsx` · `devRoutes.ts` · **cấm** break PH1 `/kcht-cong-trinh` · `/hd-ns`.

---

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinErpListFilterBar` · `LinCatalogUiSchemaEditorModal` · `LeaveConfirmModal` · `LinCatalogHistoryModal` |
| **MFE cite** | `KchtProjectListPage` · `KchtProjectFormPage` (PH1 live) | extend secondary nav · NEW nested pages |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` · **Contract** widen | nested controllers/services · NEW entities |
| **BFF** | `LINM.RMMS.Contract.Bff` | widen `KchtProjectsBffController` proxy nested |
| **Integration** | road-route · org-unit · partner-unit · users P2 | SearchInput live |
| **File** | FileService `/integrate-file-upload-web` | bind trên **dòng GD** |
| **Auth** | `kcht.projects.*` + `kcht.segments.*` · `kcht.weekly.*` · `kcht.disbursements.*` · `kcht.capital-plans.*` | FE gate · BE stub OUT pack |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| List shell | PH1 `KchtProjectListPage` pattern · Contract Kind B | nested `CatalogListShell` · raw pager · KPI strip |
| Form CT | PH1 4 tab **giữ** | Slideout · reorder tab · gộp PH2–PH4 vào tab |
| Form đoạn/tuần | full-page **`data-form-cols="5"`** + header chrome | 2-cột CSS · footer Lưu Slideout-style |
| Sổ GN | Kind B + header sổ · layout switch `projectType` | 2 URL sổ · fake KBNN API |
| HTTP | `apiClient` → BFF | local ApiClient fork |
| Ui-schema | Integration kinds NEW | clone schema vào Contract BFF |
| ERP | — | `ERP.Service.*` · `api/v1/rmms/*` |

---

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| `source.routes` | § route_confirm |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Contract** (`Domains/Contract/`) |
| `source.api` | widen `KchtProjectsController` + nested · prefix `api/v1/kcht-ct` |
| `source.bff` | `KchtProjectsBffController` proxy nested |
| `source.persistence` | **NEW** `KchtRouteSegmentEntity` · `KchtWeeklyProgressEntity` · `KchtCapitalPlanEntity` · `KchtDisbursementEntity` · `KchtDisbursementAttachmentEntity` · `KchtKbnCompareLineEntity` |
| `source.migrations` | CLI **`Schema_KchtCongTrinhDisburse`** · 6 tables · **IN P1** · Step 4b Dev |
| `source.uiSchema` | NEW kinds `kcht-segments` · `kcht-weekly-progress` · `kcht-disbursements` (+ PH1 `kcht-projects` giữ) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/kcht-cong-trinh/ui/prototype/kcht-cong-trinh-prototype.html` |
| `mfeStdUrl` | `http://localhost:9312/kcht-cong-trinh` |

---

## API contract (from SA — Dev P1 PH2–PH4)

Base: `api/v1/kcht-ct` · BFF `web-bff/api/v1/kcht-ct` · FE `/kcht-ct/projects`.

| id | Method | Path | Perm |
|----|--------|------|------|
| API-S01…05 | CRUD | `/kcht-ct/projects/{id}/segments[/{segId}]` | `kcht.segments.*` |
| API-W01…05 | CRUD | `/kcht-ct/projects/{id}/weekly-progress[/{weekId}]` | `kcht.weekly.*` |
| API-C01–02 | GET/PUT | `/kcht-ct/projects/{id}/capital-plans` | `kcht.capital-plans.*` |
| API-D01…05 | CRUD | `/kcht-ct/projects/{id}/disbursements[/{lineId}]` | `kcht.disbursements.*` |
| API-D06…08 | GET/POST/DELETE | `…/disbursements/{lineId}/attachments` | bind FileService |
| API-K01–02 | GET/PUT | `/kcht-ct/projects/{id}/kbn-compare` | disbursements.* |
| API-K03 | POST | `…/kbn-compare/import` | Excel · **cấm** KBNN API |
| UI-schema | GET/PUT | `/integration/catalogs/{kcht-segments\|kcht-weekly-progress\|kcht-disbursements}/ui-schema` | |

PH1 API-01…11 projects/contracts/attachments — **PASS live** · **cấm** regress.

BFF: **proxy only** · forward `Request.QueryString` (**T-BFF-KCT-02**).

---

## Implement gates (from SA)

| Gate | Decision | Apply | Skill |
|------|----------|-------|-------|
| TZ | **tz_required** | segment dates · weekOf · voucherDate · warranty* | `/review-timezone-implement` |
| XCO | **xco_get_only** | GET project live · nested GET inherit parent company | `/implement-view-cross-company` |
| SHARE | **share_tenant** | All NEW under `KchtProject` / `ICompanyContext` | `/implement-shared-table` |

---

## DES-GRID map → Lin\* (`tl-design-grid-component-map`)

| Zone | DES-GRID | Component | Surfaces |
|------|----------|-----------|----------|
| A | DES-GRID-A | `LinPageLayout` header | mọi Kind B |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` | list CT/đoạn/tuần/sổ |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu | |
| D | DES-GRID-D | `LinCatalogListPagination` | |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` | CT · đoạn · sổ (tuần theo Design) |
| H | DES-GRID-H | `LinCatalogHistoryModal` | |
| Z CT | DES-GRID-Z | full-page 4 tab | PH1 giữ |
| Z đoạn/tuần | DES-GRID-Z | full-page `data-form-cols="5"` | PH2–PH3 |
| Sổ | DES-GRID + header | Kind B sổ SCĐK\|SCTX | PH4 |

**Fail thiếu map → GAP-TL-GRID-MAP-01.**

---

## Wave 1 PH1 — status (cite · không re-implement)

| id | status | notes |
|----|--------|-------|
| T-CTX-01 (wave1) · T-BE-KCT-01…03 · T-BE-SCHEMA-KCT-01 · T-BFF-KCT-01 | **done** | projects CRUD live |
| T-UI-ROUTE-01 · T-UI-LIST-01 · T-UI-FORM-01 · tabs · handoff | **done** | `/kcht-cong-trinh` live |
| T-QA / Review wave 1 | **done** | `task_10be583d` approve PH1 |

**Dev wave PH2–PH4:** **cấm** phá PH1 · delta only.

---

## Live GAP → task map (PH2–PH4)

| ID | Gap | Task |
|----|-----|------|
| GAP-KCT-PH2-01/02/03 | NEW segment + API + routes · BH | **T-BE-KCT-PH2-01** · **T-UI-KCT-PH2-*** |
| GAP-KCT-SEG-ENT-01 | NEW `KchtRouteSegment` | **T-BE-KCT-PH2-01** |
| GAP-KCT-PH3-01/02 | weekly + API + job thiếu tuần | **T-BE-KCT-PH3-01** · **T-BE-JOB-WEEK-01** · **T-UI-KCT-PH3-*** |
| GAP-KCT-PH4-01…05 | capital · disburse · attach · 1 URL · KBN | **T-BE-KCT-PH4-01** · **T-UI-KCT-PH4-*** |
| GAP-KCT-DM-01 | DOMAIN-MAP row | **T-CTX-01** |
| GAP-TAB-01 | Tab 0–3 lock | **T-UI-NAV-01** · **cấm** reorder |
| GAP-PO-SO-ROUTE-01 | 1 URL `/giai-ngan` | **T-UI-ROUTE-PH2-01** · **T-UI-KCT-PH4-01** |
| GAP-PO-KBNN-01 | Cấm API KBNN | **T-UI-KCT-PH4-KBN-01** · Excel import only |
| GAP-DES-FORM-SURFACE-01 | 5 cột forms NEW | **T-UI-FORM-SEG-01** · **T-UI-FORM-WEEK-01** |
| GAP-KCT-PH5-01 | PARK | **cấm** enqueue |

---

## FormType pack (canonical — `form-type-task-pack` §2a + nested Kind B)

### T-CTX-01
**layer:** docs  
**status:** **pending**  
**DoD:**
- [ ] DOMAIN-MAP row `kcht-cong-trinh` → Contract · prefix `kcht-ct` (SA may have started — Dev/docs verify)
- [ ] Context align nested routes PH2–PH4 + secondary links
- [ ] **cấm ERP.*** · **cấm** `api/v1/rmms/*`

### T-PERM-KCT-02
**layer:** ui+api  
**status:** **pending**  
**DoD:**
- [ ] FE codes: `kcht.segments.read|create|update|delete` · `kcht.weekly.*` · `kcht.disbursements.*` · `kcht.capital-plans.*` (+ projects PH1 giữ)
- [ ] BE `[RequirePermission]` stub **OUT pack**

### T-BE-SCHEMA-KCT-02
**layer:** api Integration  
**status:** **pending**  
**deps:** T-BE-KCT-PH2-01 (tables)  
**DoD:**
- [ ] Registry + Seed kinds **`kcht-segments`** · **`kcht-weekly-progress`** · **`kcht-disbursements`**
- [ ] GET/PUT `api/v1/integration/catalogs/{kind}/ui-schema`
- [ ] **cấm** `configHint` · **cấm** clone schema vào Contract BFF

### T-BE-KCT-PH2-01
**layer:** api+migration  
**status:** **pending**  
**skills:** `/new-endpoint` · `/database-migration` · `/implement-view-cross-company` · `/implement-shared-table` · `/review-timezone-implement`  
**from_solution:** API-S01…05 · Schema_KchtCongTrinhDisburse (segment table)  
**DoD:**
- [ ] Entity `KchtRouteSegmentEntity` · table `rmms_kcht_route_segments`
- [ ] CRUD nested under project · soft delete · XCO inherit · share_tenant
- [ ] List filters: search · status · roadRouteCode · warrantyAlert · page · pageSize
- [ ] `warrantyAlert` derived DTO (warrantyEnd vs UtcNow)
- [ ] Field map SA § PH2 · UTC dates
- [ ] **cấm** `ContractRoute` · **cấm** parent JSON · **cấm ERP.***

### T-BE-KCT-PH3-01
**layer:** api+migration  
**status:** **pending**  
**deps:** Schema migration shared OK  
**skills:** `/new-endpoint` · `/database-migration` · TZ/XCO/SHARE  
**DoD:**
- [ ] Entity `KchtWeeklyProgressEntity` · unique (projectId, weekOf, companyId)
- [ ] CRUD API-W01…05 · 422 on dup weekOf
- [ ] Header read-model on GET · `prevWeekPct` · `weekDeltaPct` · `alerts[]` derived P1
- [ ] **cấm** silent overwrite dup

### T-BE-KCT-PH4-01
**layer:** api+migration  
**status:** **pending**  
**skills:** `/new-endpoint` · `/database-migration` · FileService bind  
**DoD:**
- [ ] Entities capital · disbursement · attachment · kbn_compare_line
- [ ] CLI schema name **`Schema_KchtCongTrinhDisburse`** covers all 6 tables (coord with PH2/PH3)
- [ ] API-C01–02 · API-D01…08 · API-K01…03
- [ ] Attachments metadata only · FileService · **cấm** bytes DB
- [ ] **cấm** invent KBNN live API · import Excel only

### T-BE-JOB-BH-01
**layer:** job  
**status:** **pending**  
**deps:** T-BE-KCT-PH2-01  
**skills:** `/review-event-job`  
**DoD:**
- [ ] warrantyEnd → badge/alert thresholds 90/60/30 (job or on-read; SA: job NEW)
- [ ] Document schedule · **cấm** block CRUD P1 if job deferred — stamp implement if deferred with reason

### T-BE-JOB-WEEK-01
**layer:** job  
**status:** **pending**  
**deps:** T-BE-KCT-PH3-01  
**DoD:**
- [ ] Missing weekly for current week → alert surface (list chips / derived)
- [ ] Align Design RAG/alerts

### T-BFF-KCT-02
**layer:** bff  
**status:** **pending**  
**deps:** T-BE-KCT-PH2-01 (first nest)  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Widen `KchtProjectsBffController` proxy segments · weekly · capital · disbursements · kbn · attachments
- [ ] Forward QueryString · proxy-only = yes
- [ ] **cấm** business logic in BFF

### T-UI-ROUTE-PH2-01
**layer:** ui  
**status:** **pending**  
**deps:** T-CTX-01  
**DoD:**
- [ ] Register nested routes § route_confirm in `index.tsx` · `devRoutes.ts`
- [ ] Lazy pages: Segment list/form · Weekly list/form · Disburse book
- [ ] **cấm** break PH1 routes · **cấm** PH5

### T-UI-NAV-01
**layer:** ui  
**status:** **pending**  
**deps:** T-UI-ROUTE-PH2-01 · PH1 form live  
**DoD:**
- [ ] On CT form edit/view: secondary links **Đoạn tuyến** · **Tiến độ tuần** · **Giải ngân**
- [ ] Tab 0–3 **lock** — **cấm** reorder / **cấm** add tab (**GAP-TAB-01**)
- [ ] Tab 0: `routeSegmentSummary` readonly derived when segments≥1 (or omit write)
- [ ] Tab 0: `capitalPlanAmount` P1 display · sổ = SSOT capital plan

### T-UI-FILTER-01
**layer:** ui  
**status:** **pending**  
**devSlash:** `/agent-dev`  
**skills:** `/filter-bar-context` · `filter-bar-layout-hard`  
**context:** `docs/context/features/kcht-cong-trinh-filter-bar.md`  
**DoD:**
- [ ] Load context **trước Write** · fields 1:1
- [ ] `LinErpListFilterBar` V1–V5 · **cấm** `ErpListHeaderFilters` / `LinListFilterField`
- [ ] PH1 list CT — verify/align if already live (edit_page delta)

### T-UI-FILTER-SEG-01
**layer:** ui  
**status:** **pending**  
**context:** `kcht-cong-trinh-doan-tuyen-filter-bar.md`  
**DoD:** same SSOT as T-UI-FILTER-01 · segment list filters

### T-UI-FILTER-WEEK-01
**layer:** ui  
**status:** **pending**  
**context:** `kcht-cong-trinh-tien-do-filter-bar.md`  
**DoD:** weekOf · rag · V1–V5

### T-UI-FILTER-DISB-01
**layer:** ui  
**status:** **pending**  
**context:** `kcht-cong-trinh-giai-ngan-filter-bar.md`  
**DoD:** costGroup · party · voucher · quarter SCTX · V1–V5

### T-UI-LIST-SEG-01 — List đoạn (Kind B · `tl-grid-task-template`)

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height
  - design_zones: DES-GRID-A…D · F · H
  - /filter-bar-context · **T-UI-FILTER-SEG-01**
  - /implement-catalog-list-toolbar · /implement-history · /implement-catalog-ui-schema-registry

**ssot.reuse:**
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (**GAP-P2-LAYOUT-06** live smoke)
  ui_filter: LinErpListFilterBar · context doan-tuyen-filter-bar
  ui_toolbar: catalogToolbar FULL · Thêm đoạn primary · fa-cog
  ui_grid: LinCatalogDataGrid · schema `kcht-segments`
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal
  ui_row: LinCatalogRowActionMenu · view/edit/delete/history
  ui_history: LinCatalogHistoryModal · **cấm** window.alert
  http: apiClient · `/kcht-ct/projects/{id}/segments`

**implement.page_shell / toolbar / grid / grid_menu / config / grid_flow / list_parity:** per `tl-grid-task-template` canonical (paste FULL on implement).

**DoD:**
- [ ] Columns Design Zone C đoạn · badge BH 90/60/30
- [ ] Empty «Chưa có đoạn tuyến»
- [ ] LAYOUT-06 live title+toolbar+grid/empty
- [ ] filter → page=1 · resizable default ON
- [ ] **cấm** leftover `const columns` · **cấm** Zone F-only configHint

### T-UI-FORM-SEG-01
**layer:** ui  
**status:** **pending**  
**deps:** T-BFF-KCT-02 · T-UI-ROUTE-PH2-01  
**skills:** `dev-form-review-checklist` · `form-field-grid.md` · `/implement-show-leave-confirm`  
**DoD:**
- [ ] Full-page C/E/V · **`data-form-cols="5"`** + header chrome
- [ ] View = `<dl>` · fields Design §3.2 · status 6 enum
- [ ] Dirty → **`LeaveConfirmModal`** · **cấm** `window.confirm`
- [ ] **cấm** Slideout · **cấm** 2-cột proto CSS (**GAP-P2-FORM-GRID-05**)

### T-UI-LIST-WEEK-01 — List tuần (Kind B)

**skills / ssot:** same template as T-UI-LIST-SEG-01 · kind `kcht-weekly-progress` · context tien-do-filter-bar  
**DoD:**
- [ ] Columns tuần · RAG chips · alerts
- [ ] Empty «Chưa cập nhật tuần»
- [ ] CTA **Cập nhật tuần** · LAYOUT-06
- [ ] schema-driven columns · **cấm** configHint

### T-UI-FORM-WEEK-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] Full-page 5 cột · header readonly auto (Design §3.3) · body user
- [ ] derived prevWeekPct · weekDeltaPct · alerts readonly
- [ ] dup weekOf → toast validation
- [ ] LeaveConfirmModal · View `<dl>`

### T-UI-KCT-PH4-01 — Sổ giải ngân (1 URL)

**layer:** ui  
**status:** **pending**  
**deps:** T-BFF-KCT-02 · T-UI-ROUTE-PH2-01  
**DoD:**
- [ ] Route `/giai-ngan` **only** · layout **SCĐK** vs **SCTX** by `projectType`
- [ ] Header sổ + capital plan GET/PUT
- [ ] Grid dòng GD Kind B · schema `kcht-disbursements`
- [ ] Filter bar T-UI-FILTER-DISB-01 · Thêm giao dịch
- [ ] Empty «Chưa có giao dịch»
- [ ] LAYOUT-06 · **cấm** 2nd sổ URL

### T-UI-KCT-PH4-LINE-01
**layer:** ui  
**status:** **pending**  
**deps:** T-UI-KCT-PH4-01  
**DoD:**
- [ ] Create/Edit/View dòng GD (modal hoặc inline per Design) · fields §3.4
- [ ] LeaveConfirm when dirty
- [ ] File attach FileService presign + bind API-D06…08 · **cấm** stub-only
- [ ] Lin confirm delete

### T-UI-KCT-PH4-KBN-01
**layer:** ui  
**status:** **pending**  
**deps:** T-UI-KCT-PH4-01  
**DoD:**
- [ ] Panel/grid 3 cột pmValue · kbnValue · diff
- [ ] GET/PUT kbn-compare · POST import Excel
- [ ] **cấm** call API KBNN

### T-UI-CFG-02
**layer:** ui  
**status:** **pending**  
**deps:** T-BE-SCHEMA-KCT-02 · list pages  
**DoD:**
- [ ] `useCatalogUiSchema` for NEW kinds · `buildDynamicGridColumns`
- [ ] **cấm** `LinListTableConfigModal` as column editor · leftover `const columns`

### T-UI-ACT-02
**layer:** ui  
**status:** **pending**  
**deps:** list+form PH2–PH4  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Secondary nav đoạn/tuần/GN | S-FORM-CT | navigate nested | — |
| Segment CRUD + filter | S-SEG-* | list/form | API-S* |
| Weekly CRUD + filter | S-WEEK-* | list/form | API-W* |
| Sổ + capital | S-DISB-BOOK | layout switch | API-C* · API-D* |
| Dòng GD + attach | line | CRUD + FileService | API-D* |
| KBN compare + import | S-KBN | grid/Excel | API-K* |
| History / Config / Delete | toolbars | SSOT modals | ui-schema · soft del |

**DoD:** mọi action → surface/API · Lin confirm · **cấm** native dialog trên pages NEW.

### T-UI-LEAVE-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] Dirty leave trên form đoạn · tuần · dòng GD · sổ header edit
- [ ] `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- [ ] `/implement-show-leave-confirm`

### T-UI-LKP-02
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] NEW enums via `useFormOptions()`: segment-status · delay-cause · rag · cost-group · voucher-kind · party-kind · disb-doc-kind
- [ ] Integration SearchInput: road-route · org-unit · partner-unit · project contracts picker
- [ ] Province FE static P1
- [ ] **cấm** native `<select>` · **cấm** KIND_LABEL hardcode VN

### T-UI-FIELD-02
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] controlHint ↔ DTO SA field maps PH2–PH4
- [ ] Money · Date UTC write · local display
- [ ] Query keys khớp filter-bar contexts

### T-UI-HIST-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] `LinCatalogHistoryModal` + `useCatalogHistoryModal` trên list đoạn/tuần/sổ
- [ ] **cấm** `window.alert`/`confirm`/`prompt` · overlay stacked rules

### T-UI-PROD-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] **cấm** Dev note / GOVOne chrome / KPI strip / PH5
- [ ] demo-to-real-enduser

### T-UI-UX-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] Typography label 13 · input D14/M16 · spacing 4/8/16
- [ ] Form grid 5 cột NEW forms · CT 4 tab giữ
- [ ] `dev-ui-ux-constitution` · toast 4xx/5xx
- [ ] **cấm** `filterMaxWidthPx` ad-hoc

### T-UI-RESP-01
**layer:** ui  
**status:** **pending**  
**devSlash:** `/dev-web-responsive` + `/dev-ui-review`  
**DoD:**
- [ ] Verify 1280 / 768 / 375 · 1 layout desktop+tablet · mobile không shrink break

### T-UI-SVC-02
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] Services: segments · weekly · capital · disbursements · kbn · attachments
- [ ] FE BASE under `/kcht-ct/projects/{id}/…` via BFF
- [ ] catalogUiSchemaService NEW kinds

### T-QA-CRUD-02
**layer:** qa  
**status:** **pending** (QA role — **cấm** TL/Dev e2e)  
**deps:** all Dev tasks PH2–PH4  
**DoD:**
- [ ] Smoke nested list A–D+F + Create→Edit→View→Delete đoạn/tuần
- [ ] Sổ 1 URL SCĐK\|SCTX · dòng GD · attach · KBN import
- [ ] Secondary nav from CT · tab 0–3 lock
- [ ] Leave Modal · Lin confirm · filter V1–V5
- [ ] mfeStdUrl nested paths
- [ ] Update `qa/scenarios.md`

### T-QA-FILTER-01
**layer:** qa  
**status:** **pending**  
**DoD:**
- [ ] V1–V5 + fields 1:1 từng `*-filter-bar.md` (CT · đoạn · tuần · sổ)
- [ ] fail nếu `ErpListHeaderFilters` / export trên bar

### T-QA-FORM-01
**layer:** qa  
**status:** **pending**  
**DoD:**
- [ ] Form field e2e đoạn/tuần/dòng GD · UI value = request body
- [ ] required/min/max · **GAP-QA-FORM-FIELD-01**

---

## Screens (form-type-task-pack)

| id | Surface | Pattern | Route | Actions |
|----|---------|---------|-------|---------|
| S-LIST | Kind B CT | list | `/kcht-cong-trinh` | PH1 giữ |
| S-FORM-CT | full-page 4 tab | C/E/V | `/tao-moi` · `/:id` | secondary nav PH2–PH4 |
| S-SEG-LIST | Kind B | list | `/:id/doan-tuyen` | filter · Thêm đoạn · config |
| S-SEG-FORM | full-page 5 cột | C/E/V | `…/tao-moi` · `…/:segId` | Lưu · Hủy · leave |
| S-WEEK-LIST | Kind B | list | `/:id/tien-do` | RAG · Cập nhật tuần |
| S-WEEK-FORM | full-page 5 cột | C/E/V | `…/tao-moi` · `…/:weekId` | |
| S-DISB-BOOK | Kind B sổ | list/edit | `/:id/giai-ngan` | SCĐK\|SCTX · dòng GD |
| S-KBN-COMPARE | edit grid | panel | trên sổ | pm×kbn×diff · Excel |
| S-HD-HANDOFF | Contract | view | `/hd-ns/…` | PH1 giữ |
| S-SKIP-PH5 | — | — | — | **Cấm** |

---

## Deps

```
T-CTX-01 → T-PERM-KCT-02 · T-UI-ROUTE-PH2-01
T-BE-KCT-PH2-01 ∥ T-BE-KCT-PH3-01 ∥ T-BE-KCT-PH4-01  (shared Schema_KchtCongTrinhDisburse — serial migration preferred)
T-BE-KCT-PH2-01 → T-BE-JOB-BH-01 · T-BE-SCHEMA-KCT-02
T-BE-KCT-PH3-01 → T-BE-JOB-WEEK-01
T-BE-KCT-PH2-01 → T-BFF-KCT-02
T-BFF-KCT-02 + T-UI-ROUTE-PH2-01 → T-UI-LIST-SEG-01 · T-UI-FORM-SEG-01 · T-UI-LIST-WEEK-01 · T-UI-FORM-WEEK-01 · T-UI-KCT-PH4-01
T-UI-ROUTE-PH2-01 → T-UI-NAV-01
T-BE-SCHEMA-KCT-02 → T-UI-CFG-02
T-UI-KCT-PH4-01 → T-UI-KCT-PH4-LINE-01 · T-UI-KCT-PH4-KBN-01
T-UI-FILTER-* parallel with lists
(all UI) → T-UI-ACT-02 · T-UI-LEAVE-01 · T-UI-LKP-02 · T-UI-FIELD-02 · T-UI-HIST-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-SVC-02
(all Dev) → T-QA-CRUD-02 · T-QA-FILTER-01 · T-QA-FORM-01
```

**Serial:** cùng file entity/controller/BFF — **cấm** parallel writers.

---

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON · roleOnly=`dev` |
| Step 4b | `/database-migration` **Schema_KchtCongTrinhDisburse** · `/new-endpoint` nested Contract domain |
| Anti-dup | **cấm** ERP.* · Slideout · PH5 · KBNN API · regress PH1 · parent JSON |
| Delta IN | PH2–PH4 surfaces §Live GAP · reuse PH1 Kcht* pages + Kind B patterns |
| Verify | API-S/W/C/D/K · nested lists · 5-col forms · 1 URL sổ · FileService dòng GD · TZ · XCO GET · SHARE |
| UI SSOT | `Linm.Web.RMMS.Contract` · `/kcht-cong-trinh` + nested |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Contract widen + Integration ui-schema |
| HARD | `tl-retry-ssot-rereview` · stamp `retry.ssot_rereview` on implement MD |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS — **chỉ Dev** (TL **cấm**) |
| Out of pack | PH5 · KPI · province Integration GET P2 · RequirePermission mount · ERP.* · e2e (QA) |

**This TL role: no FE/BE product write · no migration · no e2e · no yarn build/start:std.**

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.23 |
| generatedAt | 2026-08-29T05:00:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | **recheck_new** (autoApprove ON · align SSOT `qldb-workflow-skill-version.json`) |
| contentHashPriorDataAnaly | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprintPrior | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| orchestratorSkillVersion | 2026.08.29.03 |
| saSkillVersion | 2026.08.29.01 |
| designSkillVersion | 2026.08.29.01 |
| poSkillVersion | 2026.08.21.01 |
| dataAnalySkillVersion | 2026.08.21.01 |
| formTypePack | task_968c1d06 · gap=edit_page · changeScope=edit_page · PH2–PH4 |
| taskId | `task_968c1d06` |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.23 versionGate=rechecked contentHashPriorDataAnaly=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprintPrior=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_968c1d06 -->
