# Design — csdl-bieu-03 (edit_page · T-XLS-S03 Xuất Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ · **Xuất Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_089e1774`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S03`) |
| packKind | `list` |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| columns | **42** (Excel Biểu 3 · **unchanged**) |
| IdCode | prefix **`TN`** · **cấm** Guid |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only · **cấm** merge |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_6861dd5b` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` · headerFingerprint `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`road-tunnels`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_089e1774` · po `task_6861dd5b` · analy `task_9054a943` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S03` |
| updatedAt | `2026-09-18T02:35:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · gộp 2 ống 1 hàng Excel · invent map · merge Sổ 6 · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-03.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S03 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-03-real-data.md` | §A+§B · export bind |
| PO-01 | `specs/csdl-bieu-03/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior `ui/design.md` typed | **keep** A–D · Slideout 42 · **chỉ** delta toolbar |
| MFE | `CsdlBieu03Page` · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 3 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Create | **Xuất Excel** binary trên `catalogToolbar` · icon+text+title SSOT · Import **ẩn DEFER P1** | GAP-BIEU03-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU03-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · empty=all visible) | Q-XLS-SCOPE |
| Import | stub OUT | **export_only_p0** · Import **DEFER P1** (ẩn · không AC P0) | Q-XLS-IMPORT |
| Filename | — | `Bieu03_HamDuongBo_{yyyyMMdd}.xlsx` (SA chốt ext) | Q-XLS-FILENAME |
| Golden | — | Cục **16-sheet** sheet Biểu 3 · 42 cột · GPS 3 điểm · **1 row/ống** | GAP-BIEU03-XLS-03 · XLS-TUBE |
| Form / grid / route | Typed 42 · Slideout · alias | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S03 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource `road-tunnels` · IdCode `TN` · map=`none` · peer deep-link · GPS six_numbers · tube two_rows · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu03_HamDuongBo_{yyyyMMdd}.xlsx` · open Q Design = **none** · SA: ext `.xls` vs `.xlsx` · page-all vs streaming.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · sectioned keep |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` |
| Report | **N/A** · DES-RPT skip |
| Export | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-03` |
| Hub entry | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| Form | Slideout overlay |
| Peer Sổ 6 | deep-link only |
| Export | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter keep · toolbar **+Xuất** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | **DEFER P1** · hidden / không ship AC |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 42 · GPS/kết cấu/thoát+PCCC/thiết bị |
| S-ACT-DELETE | — | Confirm | soft delete keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 03 — Hầm đường bộ» · **cấm** Thêm mới trên A

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

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · tunnelClass · tubeCount · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

STT · □ · **Mã** · **Tên hầm** · **Đường** · **Tỉnh** · **Lý trình** · **Cdài** · **Ống** · **GPS** · **TT** · **ĐV QL** · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 42 cột + GPS ×3 · tubeCount/tubeIndex · kết cấu / thoát+PCCC / thiết bị — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-03-control-hint.md` + prior Design §3.1.

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
| CRUD | keep `…/asset/csdl-records?resource=road-tunnels` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=road-tunnels` (+ filter QS) |
| **Import** | `POST …/import?resource=road-tunnels` — **DEFER P1** |
| Download name | `Bieu03_HamDuongBo_{yyyyMMdd}.xlsx` (Content-Disposition · SA chốt ext) |
| Golden | Cục 16-sheet sheet Biểu 3 · 42 cột · GPS 3 điểm · **1 Excel row = 1 ống** |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/` · gộp 2 ống 1 hàng.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar Xuất Excel + mock download |
| Artifact | `ui/prototype/csdl-bieu-03-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** text+icon+title · Import **ẩn** P1 · mock filtered download |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |

### Wire

```
[S-LIST] DES-GRID-A…D — toolbar FULL + Xuất · filter unchanged · Import hidden P1
[S-XLS-EXPORT] catalogToolbar → mock .xlsx download (filtered note · 1row/ống)
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
| AC-XLS-03 | Sheet Biểu 3 · 42 cột · GPS 3 điểm | SA/Dev golden |
| AC-XLS-04 | Filter → export filtered | ✅ wire note |
| AC-XLS-05 | Empty → file 0-row OK | ✅ |
| AC-XLS-06 | Fail → toast | Dev |
| AC-XLS-07 | Filename `Bieu03_HamDuongBo_{yyyyMMdd}.*` | ✅ mock |
| AC-XLS-08 | Golden 16-sheet · **cấm** 12+8 | SA/Dev |
| AC-XLS-09 | **1 Excel row = 1 ống** (+ GPS bộ) · **cấm** gộp | SA/Dev · wire note |

**OUT P0:** Import AC · print-pdf.

## 7. Open questions

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | **`Bieu03_HamDuongBo_{yyyyMMdd}.xlsx`** · SA chốt ext |
| GAP-FILTER-BAR-08 | **Cấm** Xuất trên filter |
| GAP-BIEU03-XLS-TUBE | **1 row / ống** |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| SA residual | ext `.xls` vs `.xlsx` · page-all vs streaming |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_089e1774`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **chỉ** export delta |
| Control-map | exportExcel ToolbarButton · Import DEFER |
| Prototype · reviewUrl | § Prototype |
| API | `GET …/csdl-records/export?resource=road-tunnels` (+ filter QS) · BFF binary |
| Filename / golden | PO pattern · SA chốt ext · Cục 16-sheet Biểu 3 · 42 cột · 1 row/ống |
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
| AC-XLS-01..09 Design confirm (SA/Dev golden) | ✅ |
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
| generatedAt | 2026-09-18T02:35:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 |
| headerFingerprintPrior | sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8 |
| taskId | `task_089e1774` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 -->
