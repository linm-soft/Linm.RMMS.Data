# Design — csdl-bieu-15 (Biểu 15 — TMC / thu phí / hạt / kho · edit_page T-XLS-S15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep** typed) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_c0f936f4`) |
| changeScope | `edit_page` · Wave 1 `T-XLS-S15` · epic `csdl-export-print` |
| packKind | `list` |
| resource | `ops-facilities` |
| formNo | `15` · title VN **Biểu 15 — TMC / thu phí / hạt / kho** |
| columns | **20** · facility+area+equipment cùng hàng (export) · form section vị trí + công trình + thiết bị + quản lý (**keep**) |
| IdCode | prefix **`OF`** · **cấm** Guid |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge vào export · **GAP-CSDL-CUC-11** |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_18337e1c` · Q-XLS-* chốt |
| prior · data_analy | `done` · hash skip · contentHash `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` · headerFingerprint `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · design typed | `task_dbeaf01a` · **keep** CRUD/list/form · **chỉ** delta toolbar export |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-15` · hub `?resource=ops-facilities` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`ops-facilities`** (typed keep) |
| ui_repo_confirm | `approve` |
| be_repo_confirm | `approve` — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_c0f936f4` · po `task_18337e1c` · analy `task_4b6f0c6e` · prior typed design `task_dbeaf01a` **keep** |
| updatedAt | `2026-09-18T02:20:00.000Z` |

**Cấm:** re-scan demo · toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · Import P0 · merge so-ts-toll/rest/station / road-assets · ERP.* · new_page typed re-CRUD · yarn build/e2e/start:std · start role SA trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-15.md` | feature · hash 8a85d68e… |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 `T-XLS-S15` |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-15-control-hint.md` | controlHint · § Delta XLS |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-15-real-data.md` | §A+§B bind export |
| PO-01 | `specs/csdl-bieu-15/po/requirement.md` · `handoff/po-compact.md` | Q-XLS-* chốt |
| DES-PRIOR | `specs/csdl-bieu-15/ui/design.md` (typed) | **keep** zones A–D · form Z1–Z3 |
| LIVE | `CsdlBieu15Page` · `fromCatalogToolbar` | CRUD shipped · **thiếu** Xuất binary |
| GOLDEN | Cục 16-sheet xls sheet Biểu 15 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page` · `T-XLS-S15`)

| Area | Current (live / typed design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| List / Form / Hub / Route | Kind B A–D · Slideout 20 · alias `/csdl-bieu-15` · hub card | **Unchanged** · **cấm** reopen new_page | — |
| Toolbar | Refresh · History · Schema · Delete · **Import/Export stub toast** | **Xuất Excel** binary trên `catalogToolbar` · Import **ẩn** (P1 DEFER) | GAP-BIEU15-XLS-01 · 02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất | GAP-BIEU15-XLS-04 |
| Export UX | Toast «OUT stub» | Download file · empty=0 row OK · fail toast · **cấm** fake blob | GAP-BIEU15-XLS-02 · G-05/G-06 |
| Sheet | — | **1 sheet** 20 cột · facility+area+equipment cùng hàng | GAP-BIEU15-XLS-06 |
| Filename | — | `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls(x)` · SA ext | Q-XLS-FILENAME |
| Scope | — | **filtered** (QS filter · empty=all tenant resource) | Q-XLS-SCOPE |
| Golden | stub / 12+8 STALE | Cục **16-sheet** Biểu 15 · checksum 20 | GAP-BIEU15-XLS-03 |
| Peer | cite so-ts-toll/rest/station | **cấm** merge/dump vào file | GAP-BIEU15-XLS-07 |
| Import | stub on toolbar | **DEFER P1** · **ẩn** nút | Q-XLS-IMPORT |

**Chrome UTF-8 (edit web 2026-09-18):** standalone title/nav = `DEV_MODULES` UTF-8 · copy **Biểu 15 — TMC / thu phí / hạt / kho** · **cấm** mojibake `Biá»ƒu` / `â€"` (**GAP-DEV-VI-ENC-01**).

**Không đổi:** API prefix CRUD · resource `ops-facilities` · Kind B A–D · Kind D Slideout · filter slots · IdCode `OF` · formNo 15 · section vị trí + công trình + thiết bị · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu15_TMC_Tram_Hat_{yyyyMMdd}` · Q-XLS-SHEET=`one_sheet` · typed Q-* **keep**.

## 1. Kind + UI pattern (HARD — keep + delta)

| | |
|--|--|
| Feature Kind | **B+D** (**keep**) |
| List | `LinPageLayout` kind=`catalog` · **cấm** nested CatalogListShell |
| Grid / Filter / Footer / Form / Zone F·H / Leave / Typography | **keep** typed design `task_dbeaf01a` |
| Toolbar icons | `erp-control-icon-map` · **+** export=`fa-file-excel` trên **catalogToolbar** |
| Export surface | **catalogToolbar / report-toolbar-actions** · **cấm** `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) |
| Import | **hidden** P0 · P1 DEFER |
| Map | `none` |
| Report | **N/A** packKind list · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report **N/A** · Export AC **YES** (G-04…G-08) |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-15` |
| Hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| Form | Slideout overlay |
| Export | same list · action toolbar · **không** route mới |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C · D · F · H** | **+ export** trên B toolbar · filter unchanged |
| S-FORM-* | create/edit/view/copy | DES-GRID-Z Z1–Z3 | **keep** · export **không** dirty Leave |
| S-ACT-DELETE / S-HIST / S-HUB-ENTRY | — | keep | — |
| S-EXPORT | — | DES-GRID-B | ToolbarButton **Xuất Excel** · binary download |
| S-SKIP-IMPORT | — | — | Import **ẩn** P0 |
| S-SKIP-MAP / S-SKIP-PEER | — | — | **keep** cấm |

**devSlash (hand-off):** `/implement-export-import-excel` · **không** map / e2e ở Design.

### Zone A — Header (**keep**)

- Back hub · title «Biểu 15 — TMC / thu phí / hạt / kho» · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

| key / action | Label | Control | Notes |
|--------------|-------|---------|-------|
| refresh / history / config / delete / create | keep | ToolbarButton | typed keep |
| **exportExcel** | **Xuất Excel** | `ToolbarButton` | **catalogToolbar** · binary · filter QS áp dụng · **GAP-BIEU15-XLS-01** |
| importExcel | Nhập Excel | — | **hidden** P0 · DEFER P1 |
| search…side | keep filter | per controlHint | **cấm** Xuất trên filter bar |

Filter đổi → page=1 · export dùng **current filter QS** (Q-XLS-SCOPE=filtered).

### Zone C / D — Grid + pagination (**keep**)

Typed subset cols · pagination 50/100/200/500 · empty «Chưa có cơ sở TMC / thu phí / hạt / kho».

## 3. Field inventory

### 3.1–3.3 Form Z1–Z3 — **unchanged** (cite typed · 20)

Control = controlHint prior · **cấm** đổi form controlHint trong pack này.

### 3.4 Actions — **delta**

| Action | Surface | controlHint | Notes |
|--------|---------|-------------|-------|
| export-excel | catalogToolbar | ToolbarButton | Label **Xuất Excel** · GET export · filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}` · 1 sheet 20 |
| import-excel | — | — | **DEFER** · không mount P0 |
| create/view/edit/copy/delete/history/schema/refresh | Toolbar | keep | Unchanged |
| save/cancel | Form footer | keep | Unchanged · export không mở Leave dirty |

### 3.5 Export UX states

| Case | UX |
|------|-----|
| Success | Browser download · Content-Disposition · **cấm** toast-only done |
| Empty filtered set | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK (G-05) |
| Fail | toast error · **cấm** silent · **cấm** CSV generic lưới (G-06) |
| Golden | Cục 16-sheet sheet Biểu 15 · 20 cột · **cấm** 12+8 (G-07) |
| Scope | filtered QS · empty filter = all tenant resource (G-08) |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| README | `specs/csdl-bieu-15/ui/prototype/README.md` |
| Zones | DES-GRID-A · B(**+Xuất**) · B-FILTER(0 export) · C · D · Z · Leave · Delete |
| Delta UI | Nút **Xuất Excel** visible · Import **removed/hidden** · click = download sim (**≠** stub OUT) |
| Sample | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA chốt binary)

| Op | Path |
|----|------|
| CRUD | `…/web-bff/api/v1/asset/csdl-records` · resource=`ops-facilities` · **keep** |
| **Export** | `GET …/csdl-records/export?resource=ops-facilities` (+ filter QS) → binary |
| Import | `POST …/import` · **DEFER P1** · không wire UI P0 |
| road-route | keep typed |

**Cấm** ERP.* · invent `api/v1/infra/*` · bind peer `road-assets` / so-ts-* · toast stub = done.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint · typed keep · export ToolbarButton | PASS |
| catalogToolbar Xuất · **cấm** filter-bar export | PASS |
| Import ẩn P0 · one_sheet 20 · filtered scope | PASS |
| reviewUrl browser-openable · prototype +nút | PASS |
| Grid AC YES · Leave YES · Export G-04…G-08 | PASS |
| design_confirm (autoApprove ON) | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | BFF binary path · Content-Disposition filename · checksum 20 · golden 16-sheet · **cấm** đổi typed entity · **cấm** invent infra |
| TL/Dev | `/implement-export-import-excel` · wire `fromCatalogToolbar` export · **cấm** filter export · **cấm** toast-stub done · **cấm** merge peer |
| QA | e2e queued `/agent-qa*` only · G-04…G-08 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-18T02:20:00.000Z |
| versionGate | ok |
| taskId | task_c0f936f4 |
| packKind | list |
| changeScope | edit_page |
| design_confirm | approve |
| epic | csdl-export-print · T-XLS-S15 |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok design_confirm=approve changeScope=edit_page taskId=task_c0f936f4 contentHash=sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8 -->
