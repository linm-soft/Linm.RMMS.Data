# Design — csdl-bieu-02 (edit_page · T-XLS-S02 Xuất Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu · **Xuất Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_d763be35`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S02`) |
| packKind | `list` |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| columns | **48** (Excel Biểu 2 · **unchanged**) |
| IdCode | prefix **`BR`** · **cấm** Guid |
| peerSoTs | Sổ 6 / passport — deep-link only · **cấm** merge |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_f1ae575f` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` · headerFingerprint `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`bridges`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_d763be35` · po `task_f1ae575f` · analy `task_55ac6074` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S02` |
| updatedAt | `2026-09-18T01:55:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent map · merge passport/Sổ 6 · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-02.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S02 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-02-real-data.md` | §A+§B · export bind |
| PO-01 | `specs/csdl-bieu-02/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior `ui/design.md` typed | **keep** A–D · Slideout 48 · **chỉ** delta toolbar |
| MFE | Biểu 02 / hub bridges · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 2 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Create | **Xuất Excel** binary trên `catalogToolbar` · icon+text+title SSOT · Import **ẩn DEFER P1** | GAP-BIEU02-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU02-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · empty=all visible) | Q-XLS-SCOPE |
| Import | stub OUT | **export_only_p0** · Import **DEFER P1** (ẩn · không AC P0) | Q-XLS-IMPORT |
| Filename | — | `Bieu02_ThongKeCau_{yyyyMMdd}.xlsx` (SA chốt ext) | Q-XLS-FILENAME |
| Golden | — | Cục **16-sheet** sheet Biểu 2 · 48 cột · GPS 3 điểm | GAP-BIEU02-XLS-03/06 |
| Form / grid / route | Typed 48 · Slideout · alias | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S02 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource `bridges` · IdCode `BR` · map=`none` · peer deep-link · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu02_ThongKeCau_{yyyyMMdd}.xlsx` · open Q Design = **none** · SA: ext `.xls` vs `.xlsx` · page-all vs streaming.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` |
| Report | **N/A** · DES-RPT skip |
| Export | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-02` |
| Hub entry | `/so-ts/csdl-so-sach?resource=bridges` |
| Form | Slideout overlay |
| Peer Sổ 6 / passport | deep-link only |
| Export | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter keep · toolbar **+Xuất** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | **DEFER P1** · hidden / không ship AC |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 48 · GPS six_numbers |
| S-ACT-DELETE | — | Confirm | soft delete keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 02 — Thống kê cầu» · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

**Toolbar (`catalogToolbar`) — delta:**

| Action | Label | Icon (SSOT) | Title | Notes |
|--------|-------|-------------|-------|-------|
| refresh | — | `fa-sync-alt` | Làm mới | keep |
| history | — | `fa-history` | Lịch sử | keep |
| config | — | `fa-cog` | Cấu hình | keep |
| delete | — | `fa-trash` | Xóa | keep |
| **exportExcel** | **Xuất Excel** | `fa-file-excel` | Xuất Excel | binary · filtered · filename PO · disable khi in-flight |
| importExcel | Nhập Excel | `fa-file-import` | Nhập Excel | **DEFER P1** · **ẩn** prototype/UI P0 |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · beamType · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

STT · □ · **Mã** · **Tên cầu** · **Đường** · **Tỉnh** · **Lý trình** · **Cdài** · **Loại dầm** · **GPS** · **TT** · **ĐV QL** · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 48 cột + GPS ×3 · dầm · phần dưới · gối/lan can · legacy hidden — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-02-control-hint.md` + prior Design §3.1.

### 3.2 Actions control-map (**delta** · Design chốt)

| Surface | Action | Control | Notes |
|---------|--------|---------|-------|
| catalogToolbar | exportExcel | `ToolbarButton` | Label **Xuất Excel** · `fas fa-file-excel` · filtered QS |
| catalogToolbar | importExcel | — | **DEFER P1** · ẩn · không AC P0 |
| Filter bar | — | — | **0** export/import actions |
| Form footer | save / cancel | keep | unchanged |

## 4. Real-data bind (cite DA-REAL)

| Operation | Path |
|-----------|------|
| CRUD | keep `…/asset/csdl-records?resource=bridges` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=bridges` (+ filter QS) |
| **Import** | `POST …/import?resource=bridges` — **DEFER P1** |
| Download name | `Bieu02_ThongKeCau_{yyyyMMdd}.xlsx` (Content-Disposition · SA chốt ext) |
| Golden | Cục 16-sheet sheet Biểu 2 · 48 cột · GPS 3 điểm |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar Xuất Excel + mock download |
| Artifact | `ui/prototype/csdl-bieu-02-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** text+icon+title · Import **ẩn** P1 · mock filtered download |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |

### Wire

```
[S-LIST] DES-GRID-A…D — toolbar FULL + Xuất · filter unchanged · Import hidden P1
[S-XLS-EXPORT] catalogToolbar → mock .xlsx download (filtered note)
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed keep
[Leave] LeaveConfirmModal · cấm native dialog
```

## 5. Leave / alert (keep + XLS)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty slideout | `LeaveConfirmModal` | native confirm |
| Export 4xx/5xx | `useAppToast` | silent / fake success |
| Empty export | file 0-row + header OK · toast info OK | fake demo rows SSOT |
| Export in-flight | Disable nút / loading | double-fire |

## 6. Grid AC (Design confirm · PO)

Keep AC-GRID-01..05 (typed regression). Report AC **N/A**.

### Delta export AC (Design confirm)

| ID | AC | Pass |
|----|-----|------|
| AC-XLS-01 | Nút **Xuất Excel** trên catalogToolbar (không filter bar) | ✅ prototype |
| AC-XLS-02 | Click → binary download · **cấm** toast-only | ✅ mock blob |
| AC-XLS-03 | Sheet Biểu 2 · 48 cột · GPS 3 điểm | SA/Dev golden |
| AC-XLS-04 | Filter → export filtered | ✅ wire note |
| AC-XLS-05 | Empty → file 0-row OK | ✅ |
| AC-XLS-06 | Fail → toast | Dev |
| AC-XLS-07 | Filename `Bieu02_ThongKeCau_{yyyyMMdd}.*` | ✅ mock |
| AC-XLS-08 | Golden 16-sheet · **cấm** 12+8 | SA/Dev |

**OUT P0:** Import AC · print-pdf.

## 7. Open questions

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | **`Bieu02_ThongKeCau_{yyyyMMdd}.xlsx`** · SA chốt ext |
| GAP-FILTER-BAR-08 | **Cấm** Xuất trên filter |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| SA residual | ext `.xls` vs `.xlsx` · page-all vs streaming |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_d763be35`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **chỉ** export delta |
| Control-map | exportExcel ToolbarButton · Import DEFER |
| Prototype · reviewUrl | § Prototype |
| API | `GET …/csdl-records/export?resource=bridges` (+ filter QS) · BFF binary |
| Filename / golden | PO pattern · SA chốt ext · Cục 16-sheet Biểu 2 · 48 cột |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` (**+Xuất**) + `LinErpListFilterBar` (no XLS) |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` keep |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F / H / Z | keep | UiSchema · History · Slideout |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D keep · **cấm** new_page reopen | ✅ |
| Toolbar **Xuất Excel** · Import ẩn P1 | ✅ |
| Filter **0** XLS (**GAP-FILTER-BAR-08**) | ✅ |
| Control-map = controlHint delta | ✅ |
| Prototype + reviewUrl · mock binary | ✅ |
| AC-XLS-01..08 Design confirm (SA/Dev golden) | ✅ |
| Hash skip analy · **cấm** re-scan | ✅ |
| Report DES-RPT N/A | ✅ |
| design_confirm approve · compact | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-18T01:55:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 |
| headerFingerprintPrior | sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591 |
| taskId | `task_d763be35` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 -->
