# Design — csdl-bieu-13 (edit_page · T-XLS-S13 Xuất Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn · **Xuất Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_82008258`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S13`) |
| packKind | `list` |
| resource | `noise-barriers` |
| formNo | `13` · title VN **Biểu 13 — Tường chống ồn** |
| columns | **13** · section Vị trí tuyến + Kích thước tường (**unchanged**) |
| IdCode | prefix **`TC`** · **cấm** Guid |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_0a8bfa5d` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` · headerFingerprint `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`noise-barriers`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_82008258` · po `task_0a8bfa5d` · analy `task_4fec1f3f` · prior typed design `task_ba6fcf2c` **keep** |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S13` |
| updatedAt | `2026-09-18T01:15:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent sheet riêng kích thước · merge so-ts-noise-barrier / road-assets · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-13.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S13 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-13-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-13-real-data.md` | §A+§B · export bind |
| PO-01 | `specs/csdl-bieu-13/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior typed Design `task_ba6fcf2c` | **keep** A–D · Slideout 13 · section kích thước · **chỉ** delta toolbar |
| MFE | `CsdlBieu13Page` · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 13 | **cấm** 12+8 |
| PEER | `so-ts-noise-barrier` | cite only · **cấm** merge export |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Create | **Xuất Excel** binary trên `catalogToolbar` · icon+text+title SSOT · Import **ẩn DEFER P1** | GAP-BIEU13-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU13-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · empty=all tenant resource) | Q-XLS-SCOPE |
| Import | stub OUT | **export_only_p0** · Import **DEFER P1** (ẩn · không AC P0) | Q-XLS-IMPORT |
| Filename | — | `Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)` (SA chốt ext) | Q-XLS-FILENAME |
| Sheet layout | — | **1 sheet** 13 cột · dài/cao/DT cùng hàng · **cấm** invent sheet riêng | GAP-BIEU13-XLS-06 · Q-XLS-SHEET |
| Golden | — | Cục **16-sheet** sheet Biểu 13 · **13 cột** | GAP-BIEU13-XLS-03 |
| Peer | so-ts-noise-barrier cite | Export qty/m² biểu Cục · **cấm** merge/dump road-assets | GAP-BIEU13-XLS-07 |
| Form / grid / route | Typed 13 · Slideout · alias · hub | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S13 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource `noise-barriers` · IdCode `TC` · section kích thước · map=`none` · peer none_p1 · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)` · Q-XLS-SHEET=`one_sheet` · open Q Design = **none** · SA: ext `.xls` vs `.xlsx` · page-all vs streaming.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON · shared + lengthM/heightM/areaM2 + status |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · Vị trí tuyến + Kích thước tường |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` · peer **none_p1** |
| Report | **N/A** · DES-RPT skip |
| Export | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-13` |
| Hub entry | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| Form | Slideout overlay |
| Export | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C · D · F · H** | Filter keep · toolbar **+Xuất** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | **DEFER P1** · hidden / không ship AC |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 13 · section kích thước |
| S-ACT-DELETE | — | Confirm | soft delete keep |
| S-HIST / S-HUB | — | — | keep |
| S-SKIP-MAP / S-SKIP-PEER | — | — | **Cấm** map · **cấm** merge so-ts-noise-barrier |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 13 — Tường chống ồn» · **cấm** Thêm mới trên A

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

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · side · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

Default: STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Dài (m)** · **Cao (m)** · **DT (m²)** · **TT** · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 13 · section Vị trí tuyến + Kích thước tường (lengthM/heightM/areaM2) · Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-13-control-hint.md` + prior Design §3 (`task_ba6fcf2c`).

### 3.2 Actions control-map (**delta** · Design chốt)

| Surface | Action | Control | Notes |
|---------|--------|---------|-------|
| catalogToolbar | exportExcel | `ToolbarButton` | Label **Xuất Excel** · `fas fa-file-excel` · filtered QS |
| catalogToolbar | importExcel | — | **DEFER P1** · ẩn · không AC P0 |
| Filter bar | — | — | **0** export/import actions |
| Form footer | save / cancel | keep | unchanged · export **không** dirty Leave |

## 4. Real-data bind (cite DA-REAL)

| Operation | Path |
|-----------|------|
| CRUD | keep `…/asset/csdl-records?resource=noise-barriers` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=noise-barriers` (+ filter QS) |
| **Import** | `POST …/import?resource=noise-barriers` — **DEFER P1** |
| Download name | `Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)` (Content-Disposition · SA chốt ext) |
| Row layout | 1 sheet 13 · LengthM/HeightM/AreaM2 cùng hàng · **Q-XLS-SHEET** one_sheet |
| Peer | **cấm** merge so-ts-noise-barrier / road-assets |
| Golden | Cục 16-sheet sheet Biểu 13 · **13 cột** · 1 sheet · **cấm** 12+8 |
| Empty export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar Xuất Excel + mock download |
| Artifact | `ui/prototype/csdl-bieu-13-list-prototype.html` |
| Zones | **DES-GRID-A · B · B-FILTER · C · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** text+icon+title · Import **ẩn** P1 · mock filtered download |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| **hubUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter keep · toolbar +Xuất · peer none_p1
[S-XLS-EXPORT] catalogToolbar → mock download (filtered · Bieu13_TuongChongOn_{yyyyMMdd}.xls(x))
[S-XLS-IMPORT] DEFER P1 · hidden
[S-FORM] DES-GRID-Z Slideout keep · section kích thước · LeaveConfirmModal
[Filter] 0 XLS actions (GAP-FILTER-BAR-08)
```

## 5. Leave / alert (keep)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| Export fail | `useAppToast` | silent / toast-only done |
| Delete | Confirm modal | native `confirm` |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS** · toolbar +export · G-04..G-08. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | **Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)** (SA chốt ext) |
| Q-XLS-SHEET | **one_sheet** |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| Typed Q-* prior | **keep** · **cấm** reopen |

## 8. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control-map = controlHint · exportExcel (+ import DEFER) | PASS |
| Kind B A–D+F keep · filter-bar hard · **0** XLS on filter | PASS |
| reviewUrl browser-openable · Xuất Excel visible · Import ẩn | PASS |
| Grid AC YES · Leave YES · Report N/A | PASS |
| design_confirm (autoApprove ON) | **approve** |
| ui_repo_confirm / be_repo_confirm | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 9. Handoff next

| Role | Need |
|------|------|
| **SA** | BFF binary path · golden checksum 13 · filename ext · **cấm** đổi typed entity |
| TL/Dev | `/implement-export-import-excel` · wire exportExcel · **cấm** filter-bar export · **cấm** re-CRUD typed · **cấm** merge peer |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHashPrior | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-18T01:15:00.000Z |
| versionGate | ok |
| taskId | task_82008258 |
| packKind | list |
| changeScope | edit_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok design_confirm=approve taskId=task_82008258 changeScope=edit_page -->
