# Design — csdl-bieu-16 (Biểu 16 — Nút giao · edit_page T-XLS-S16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep** typed) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_4db008e6`) |
| changeScope | `edit_page` · Wave 1 `T-XLS-S16` · epic `csdl-export-print` |
| packKind | `list` |
| resource | `interchanges` |
| formNo | `16` · title VN **Nút giao** |
| columns | **39** · header + child `branches[]` + ATGT · export flatten 1 row/nhánh |
| IdCode | prefix **`IX`** · **cấm** Guid |
| peerSoTs | `so-ts-interchange` · **cấm** merge vào export · **GAP-CSDL-CUC-11** |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_de6499fc` · Q-XLS-* chốt |
| prior · data_analy | `done` · hash skip · contentHash `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` · headerFingerprint `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · design typed | `task_e0f9dbb6` · **keep** CRUD/list/form/branches · **chỉ** delta toolbar export |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` · hub `?resource=interchanges` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`interchanges`** (typed keep) |
| ui_repo_confirm | `approve` |
| be_repo_confirm | `approve` — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_4db008e6` · po `task_de6499fc` · analy `task_e344020d` · prior typed design `task_e0f9dbb6` **keep** |
| updatedAt | `2026-09-18T03:10:00.000Z` |

**Cấm:** re-scan demo · toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · Import P0 · merge so-ts-interchange / road-assets · ERP.* · new_page typed re-CRUD · yarn build/e2e/start:std · start role SA trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-16.md` | feature · hash c71543b6… |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 `T-XLS-S16` |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-16-control-hint.md` | controlHint · § Delta XLS |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-16-real-data.md` | §A+§B bind export |
| PO-01 | `specs/csdl-bieu-16/po/requirement.md` · `handoff/po-compact.md` | Q-XLS-* chốt |
| DES-PRIOR | typed design `task_e0f9dbb6` | **keep** zones A–D · form Z1–Z3 · branches[] |
| LIVE | `CsdlBieu16Page` · `fromCatalogToolbar` | CRUD+branches shipped · **thiếu** Xuất binary |
| GOLDEN | Cục 16-sheet xls sheet Biểu 16 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page` · `T-XLS-S16`)

| Area | Current (live / typed design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| List / Form / Hub / Route | Kind B A–D · Slideout 39 + branches[] · alias `/csdl-bieu-16` · hub card | **Unchanged** · **cấm** reopen new_page | — |
| Toolbar | Refresh · History · Schema · Delete · **Import/Export stub toast** | **Xuất Excel** binary trên `catalogToolbar` · Import **ẩn** (P1 DEFER) | GAP-BIEU16-XLS-01 · 02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất | GAP-BIEU16-XLS-04 |
| Export UX | Toast «OUT stub» | Download file · empty=0 row OK · fail toast · **cấm** fake blob | GAP-BIEU16-XLS-02 · G-05/G-06 |
| Sheet | — | **1 sheet** «Biểu 16» · **39** cột · flatten 1 row/nhánh (repeat header) | GAP-BIEU16-XLS-06 · Q-XLS-SHEET |
| Filename | — | `Bieu16_NutGiao_{yyyyMMdd}.xls(x)` · SA ext · Content-Disposition | Q-XLS-FILENAME |
| Scope | — | **filtered** (QS filter · empty=all tenant resource) | Q-XLS-SCOPE |
| Branch 0 | — | **header_blank** · 1 row · branch* trống | Q-XLS-BRANCH · G-09 |
| Golden | stub / 12+8 STALE | Cục **16-sheet** Biểu 16 · checksum 39 | GAP-BIEU16-XLS-03 |
| Peer | cite so-ts-interchange | **cấm** merge/dump vào file | GAP-BIEU16-XLS-07 |
| Import | stub on toolbar | **DEFER P1** · **ẩn** nút | Q-XLS-IMPORT |

**Không đổi:** API prefix CRUD · resource `interchanges` · Kind B A–D · Kind D Slideout · filter slots · IdCode `IX` · formNo 16 · section Định danh + Đặc trưng nút + Nhánh + ATGT + Quản lý · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu16_NutGiao_{yyyyMMdd}` · Q-XLS-BRANCH=`header_blank` · Q-XLS-SHEET=`name_cuc` · typed Q-* **keep**.

## 1. Kind + UI pattern (HARD — keep + delta)

| | |
|--|--|
| Feature Kind | **B+D** (**keep**) |
| List | `LinPageLayout` kind=`catalog` · **cấm** nested CatalogListShell |
| Grid / Filter / Footer / Form / Zone F·H / Leave / Typography | **keep** typed design `task_e0f9dbb6` |
| Toolbar icons | `erp-control-icon-map` · **+** export=`fa-file-excel` trên **catalogToolbar** |
| Export surface | **catalogToolbar / report-toolbar-actions** · **cấm** `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) |
| Import | **hidden** P0 · P1 DEFER |
| Map | `none` |
| Report | **N/A** packKind list · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report **N/A** · Export AC **YES** (G-04…G-09) |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-16` |
| Hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| Form | Slideout overlay |
| Export | same list · action toolbar · **không** route mới |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C · D · F · H** | **+ export** trên B toolbar · filter unchanged |
| S-FORM-* | create/edit/view/copy | DES-GRID-Z Z1–Z3 · DES-FORM-BRANCH | **keep** · export **không** dirty Leave |
| S-ACT-DELETE / S-HIST / S-HUB-ENTRY | — | keep | — |
| S-EXPORT | — | DES-GRID-B · **DES-EXPORT** | ToolbarButton **Xuất Excel** · binary download |
| S-SKIP-IMPORT | — | — | Import **ẩn** P0 |
| S-SKIP-MAP / S-SKIP-PEER | — | — | **keep** cấm |

**devSlash (hand-off):** `/implement-export-import-excel` · **không** map / e2e ở Design.

### Zone A — Header (**keep**)

- Back hub · title «Biểu 16 — Nút giao» · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

| key / action | Label | Control | Notes |
|--------------|-------|---------|-------|
| refresh / history / config / delete / create | keep | ToolbarButton | typed keep |
| **exportExcel** | **Xuất Excel** | `ToolbarButton` | **catalogToolbar** · binary · filter QS áp dụng · **GAP-BIEU16-XLS-01** |
| importExcel | Nhập Excel | — | **hidden** P0 · DEFER P1 |
| search…kmMain | keep filter | per controlHint | **cấm** Xuất trên filter bar |

Filter đổi → page=1 · export dùng **current filter QS** (Q-XLS-SCOPE=filtered).

### Zone C / D — Grid + pagination (**keep**)

Typed subset cols · pagination 50/100/200/500 · empty «Chưa có nút giao».

## 3. Field inventory

### 3.1–3.3 Form Z1–Z3 + branches — **unchanged** (cite typed · 39)

Control = controlHint prior · **cấm** đổi form controlHint trong pack này · child `branches[]` **min_1** keep.

### 3.4 Actions — **delta**

| Action | Surface | controlHint | Notes |
|--------|---------|-------------|-------|
| export-excel | catalogToolbar | ToolbarButton | Label **Xuất Excel** · GET export · filename `Bieu16_NutGiao_{yyyyMMdd}` · sheet «Biểu 16» · flatten 1 row/nhánh |
| import-excel | — | — | **DEFER** · không mount P0 |
| create/view/edit/copy/delete/history/schema/refresh | Toolbar | keep | Unchanged |
| branch add/remove | Child grid | keep | Unchanged · min_1 |
| save/cancel | Form footer | keep | Unchanged · export không mở Leave dirty |

### 3.5 Export UX states

| Case | UX |
|------|-----|
| Success | Browser download · Content-Disposition · **cấm** toast-only done |
| Empty filtered set | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK (G-05) |
| Fail | toast error · **cấm** silent · **cấm** CSV generic lưới (G-06) |
| Golden | Cục 16-sheet sheet Biểu 16 · 39 cột flatten · **cấm** 12+8 (G-07) |
| Scope | filtered QS · empty filter = all tenant resource (G-08) |
| 0 nhánh | **header_blank** · 1 row · branch* trống (G-09) |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| README | `specs/csdl-bieu-16/ui/prototype/README.md` |
| Zones | DES-GRID-A · B(**+Xuất**) · B-FILTER(0 export) · C · D · Z · BRANCH · Leave · Delete |
| Delta UI | Nút **Xuất Excel** visible · Import **removed/hidden** · click = download sim (**≠** stub OUT) |
| Sample | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA chốt binary)

| Op | Path |
|----|------|
| CRUD | `…/web-bff/api/v1/asset/csdl-records` · resource=`interchanges` · **keep** · `branches[]` embed |
| **Export** | `GET …/csdl-records/export?resource=interchanges` (+ filter QS) → binary |
| Import | `POST …/import` · **DEFER P1** · không wire UI P0 |
| road-route | keep typed |

**Cấm** ERP.* · invent `api/v1/infra/*` · bind peer `road-assets` / so-ts-interchange · toast stub = done · invent sheet Branch riêng.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint · typed keep · export ToolbarButton | PASS |
| catalogToolbar Xuất · **cấm** filter-bar export | PASS |
| Import ẩn P0 · name_cuc «Biểu 16» · 39 flatten · filtered · header_blank | PASS |
| reviewUrl browser-openable · prototype +nút | PASS |
| Grid AC YES · Leave YES · Export G-04…G-09 | PASS |
| design_confirm (autoApprove ON) | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | BFF binary path · Content-Disposition filename · checksum 39 · flatten branches · golden 16-sheet · **cấm** đổi typed entity · **cấm** invent infra |
| TL/Dev | `/implement-export-import-excel` · wire `fromCatalogToolbar` export · **cấm** filter export · **cấm** toast-stub done · **cấm** merge peer |
| QA | e2e queued `/agent-qa*` only · G-04…G-09 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-18T03:10:00.000Z |
| versionGate | ok |
| taskId | task_4db008e6 |
| packKind | list |
| changeScope | edit_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072 -->
