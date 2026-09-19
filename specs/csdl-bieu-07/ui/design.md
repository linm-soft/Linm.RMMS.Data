# Design — csdl-bieu-07 (edit_page · T-XLS-S07 Xuất Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào · **Xuất Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_a41905a5`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S07`) |
| packKind | `list` |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** |
| columns | **20** (Excel Biểu 7 · **unchanged**) |
| IdCode | prefix **`LE`** · **cấm** Guid |
| peerSoTs | `SHOULDER` — deep-link only · **cấm** merge form/export (**GAP-BIEU07-XLS-PEER**) |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_58ae864f` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` · headerFingerprint `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`shoulders-fences`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_a41905a5` · po `task_58ae864f` · analy `task_9ab3979a` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S07` |
| updatedAt | `2026-09-18T04:28:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent map · merge Sổ TS `SHOULDER` · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-07.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S07 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-07-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-07-real-data.md` | §A+§B · export bind |
| PO-01 | `specs/csdl-bieu-07/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior `ui/design.md` typed | **keep** A–D · Slideout 20 · 3 khối · **chỉ** delta toolbar |
| MFE | `CsdlBieu07Page` · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 7 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Create · peer | **Xuất Excel** binary trên `catalogToolbar` · icon+text+title SSOT · Import **ẩn DEFER P1** | GAP-BIEU07-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU07-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · empty=all visible) | Q-XLS-SCOPE |
| Import | stub OUT | **export_only_p0** · Import **DEFER P1** (ẩn · không AC P0) | Q-XLS-IMPORT |
| Filename | — | `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx` (SA chốt ext) | Q-XLS-FILENAME |
| Golden | — | Cục **16-sheet** sheet Biểu 7 · **20 cột** | GAP-BIEU07-XLS-03 |
| Peer export | deep-link only | Export **chỉ** sheet Biểu 7 · **cấm** gộp SHOULDER | GAP-BIEU07-XLS-PEER |
| Form / grid / route | Typed 20 · Slideout 3 khối · alias | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S07 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource `shoulders-fences` · IdCode `LE` · 3 khối lề/taluy/HR · map=`none` · peer deep-link · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx` · open Q Design = **none** · SA: ext `.xls` vs `.xlsx` · page-all vs streaming.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · **3 section** |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` |
| Report | **N/A** · DES-RPT skip |
| Export | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-07` |
| Hub entry | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| Form | Slideout overlay |
| Peer Sổ TS | deep-link `/so-ts?type=SHOULDER` only |
| Export | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter keep · toolbar **+Xuất** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | **DEFER P1** · hidden / không ship AC |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 20 · 3 section |
| S-ACT-DELETE | — | Confirm | soft delete keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 07 — Lề / taluy / hàng rào» · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

**Toolbar (`catalogToolbar`) — delta:**

| Action | Label | Icon (SSOT) | Title | Notes |
|--------|-------|-------------|-------|-------|
| refresh | — | `fa-sync-alt` | Làm mới | keep |
| history | — | `fa-history` | Lịch sử | keep |
| config | — | `fa-cog` | Cấu hình | keep |
| delete | — | `fa-trash` | Xóa | keep |
| peer-sots | Sổ TS | `fa-link` | Sổ TS lề đường | keep · deep-link only |
| **exportExcel** | **Xuất Excel** | `fa-file-excel` | Xuất Excel | binary · filtered · filename PO · disable khi in-flight |
| importExcel | Nhập Excel | `fa-file-import` | Nhập Excel | **DEFER P1** · **ẩn** prototype/UI P0 |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom · kmTo · side · fenceKind · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **KC lề** · **Dài lề** · **Rộng** · **DT lề** · **Dài taluy** · **DT taluy** · **Loại HR** · **Số cột** · **Dài HR (km)** · **Năm** · **TT** · **ĐV QL** · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 20 cột · 3 khối lề/taluy/HR · Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-07-control-hint.md` + prior Design §3.1.

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
| CRUD | keep `…/asset/csdl-records?resource=shoulders-fences` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=shoulders-fences` (+ filter QS) |
| **Import** | `POST …/import?resource=shoulders-fences` — **DEFER P1** |
| Download name | `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx` (Content-Disposition · SA chốt ext) |
| Golden | Cục 16-sheet sheet Biểu 7 · **20 cột** · **cấm** gộp Sổ TS |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar Xuất Excel + mock download |
| Artifact | `ui/prototype/csdl-bieu-07-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** text+icon+title · Import **ẩn** P1 · mock filtered download |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` |

### Wire

```
[S-LIST] DES-GRID-A…D — toolbar FULL + Xuất · filter unchanged · Import hidden P1
[S-XLS-EXPORT] catalogToolbar → mock .xlsx download (filtered note · peer no-merge)
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed keep · 3 section
[Leave] LeaveConfirmModal · cấm native dialog
```

## 5. Leave / alert (keep + XLS)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty slideout | `LeaveConfirmModal` | native confirm |
| Export 4xx/5xx | `useAppToast` | silent / fake success |
| Empty export | file 0-row + header OK · toast info OK | fake demo rows SSOT |
| Export in-flight | Disable nút / loading | double-fire |
| Peer Sổ TS | deep-link only | mix row/cột SHOULDER vào file |

## 6. Grid AC (Design confirm · PO)

Keep AC-GRID-01..05 (typed regression). Report AC **N/A**.

### Delta export AC (Design confirm)

| ID | AC | Pass |
|----|-----|------|
| AC-XLS-01 | Nút **Xuất Excel** trên catalogToolbar (không filter bar) | ✅ prototype |
| AC-XLS-02 | Click → binary download · **cấm** toast-only | ✅ mock blob |
| AC-XLS-03 | Sheet Biểu 7 · **20 cột** | SA/Dev golden |
| AC-XLS-04 | Filter → export filtered | ✅ wire note |
| AC-XLS-05 | Empty → file 0-row OK | ✅ |
| AC-XLS-06 | Fail → toast | Dev |
| AC-XLS-07 | Filename `Bieu07_LeTaluyHangRao_{yyyyMMdd}.*` | ✅ mock |
| AC-XLS-08 | Golden 16-sheet · **cấm** 12+8 | SA/Dev |
| AC-XLS-09 | Peer Sổ TS **không** merge vào sheet | ✅ wire note |

**OUT P0:** Import AC · print-pdf.

## 7. Open questions

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | **`Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx`** · SA chốt ext |
| GAP-FILTER-BAR-08 | **Cấm** Xuất trên filter |
| GAP-BIEU07-XLS-PEER | **Cấm** gộp SHOULDER |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| SA residual | ext `.xls` vs `.xlsx` · page-all vs streaming |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_a41905a5`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **chỉ** export delta |
| Control-map | exportExcel ToolbarButton · Import DEFER |
| Prototype · reviewUrl | § Prototype |
| API | `GET …/csdl-records/export?resource=shoulders-fences` (+ filter QS) · BFF binary |
| Filename / golden | PO pattern · SA chốt ext · Cục 16-sheet Biểu 7 · 20 cột · peer no-merge |
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
| generatedAt | 2026-09-18T04:28:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a |
| headerFingerprintPrior | sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf |
| taskId | `task_a41905a5` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a changeScope=edit_page taskId=task_a41905a5 -->
