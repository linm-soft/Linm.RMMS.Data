# Design — csdl-bieu-01 (edit_page · T-XLS-S01 Xuất/Nhập Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường · **Xuất/Nhập Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_8009a294`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S01`) |
| packKind | `list` |
| resource | `pavement-sections` |
| formNo | `01` · title VN **Phân loại mặt đường** |
| columns | **38** (Excel Biểu 1 · **unchanged**) |
| IdCode | prefix **`MD`** · **cấm** Guid |
| peerSoTs | `pavement-section` — deep-link only · **cấm** merge |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_3e372741` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`pavement-sections`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_8009a294` · po `task_3e372741` · analy `task_7168eb6e` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S01` |
| updatedAt | `2026-09-17T18:05:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent map · merge Sổ TS · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-01.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S01 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-01-real-data.md` | §A+§B · export/import bind |
| PO-01 | `specs/csdl-bieu-01/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior `ui/design.md` typed | **keep** A–D · Slideout 38 · **chỉ** delta toolbar |
| MFE | `CsdlBieu01Page` · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 1 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Create | **Xuất Excel** + **Nhập Excel** binary trên `catalogToolbar` · icon+text+title SSOT | GAP-BIEU01-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU01-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS) | Q-XLS-SCOPE |
| Import | stub OUT / skip-bridge rule | **import_now** P1 · file picker · skip-bridge keep | Q-XLS-IMPORT · GAP-BIEU01-SKIP-01 |
| Filename | — | `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Golden | — | Cục **16-sheet** sheet Biểu 1 · 38 cột | GAP-BIEU01-XLS-03 |
| Form / grid / route | Typed 38 · Slideout · alias | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S01 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource · IdCode `MD` · map=`none` · peer deep-link · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`import_now` · Q-XLS-FILENAME=`Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · open Q = **none**.

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
| Export/Import | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-01` |
| Hub entry | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| Form | Slideout overlay |
| Peer Sổ TS | deep-link only |
| Export/Import | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter keep · toolbar **+Xuất +Nhập** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | ToolbarButton+file · multipart · skip-bridge toast |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 38 |
| S-ACT-DELETE | — | Confirm | soft delete keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 01 — Phân loại mặt đường» · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

**Toolbar (`catalogToolbar`) — delta:**

| Action | Label | Icon (SSOT) | Title | Notes |
|--------|-------|-------------|-------|-------|
| refresh | — | `fa-sync-alt` | Làm mới | keep |
| history | — | `fa-history` | Lịch sử | keep |
| config | — | `fa-cog` | Cấu hình | keep |
| delete | — | `fa-trash` | Xóa | keep |
| **importExcel** | **Nhập Excel** | `fa-file-import` | Nhập Excel | **P1** · hidden `<input type=file accept=.xls,.xlsx>` |
| **exportExcel** | **Xuất Excel** | `fa-file-excel` | Xuất Excel | binary · filtered · filename PO |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

STT · □ · Mã · Đường · Tỉnh · Lý trình · Cdài · B≥14 · B14–10 · B10–5 · B≤5 · Kết cấu · Cấp ĐB · Cấp MN · Năm SD · TT · ĐV QL · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 38 cột + common — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-01-control-hint.md` form table + prior Design §3.1.

### 3.2 Actions control-map (**delta** · Design chốt)

| Surface | Action | Control | Notes |
|---------|--------|---------|-------|
| catalogToolbar | exportExcel | `ToolbarButton` | Label **Xuất Excel** · `fas fa-file-excel` · filtered QS |
| catalogToolbar | importExcel | `ToolbarButton` + file | Label **Nhập Excel** · `fas fa-file-import` · multipart |
| Filter bar | — | — | **0** export/import actions |
| Form footer | save / cancel | keep | unchanged |

## 4. Real-data bind (cite DA-REAL)

| Operation | Path |
|-----------|------|
| CRUD | keep `…/asset/csdl-records?resource=pavement-sections` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=pavement-sections` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=pavement-sections` |
| Download name | `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` (Content-Disposition · SA) |
| Golden | Cục 16-sheet sheet Biểu 1 · 38 cột · skip-bridge |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar labels/icons + mock XLS |
| Artifact | `ui/prototype/csdl-bieu-01-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** + **Nhập Excel** text+icon+title · mock download / file pick |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |

### Wire

```
[S-LIST] DES-GRID-A…D — toolbar FULL + Xuất/Nhập · filter unchanged
[S-XLS-EXPORT] catalogToolbar → mock .xls download (filtered note)
[S-XLS-IMPORT] catalogToolbar → file picker · skip-bridge toast mock
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed keep
[Leave] LeaveConfirmModal · cấm native dialog
```

## 5. Leave / alert (keep + XLS)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty slideout | `LeaveConfirmModal` | native confirm |
| Export/Import 4xx | `useAppToast` | silent / fake success |
| Import skip-bridge | toast summary count | hide skipped |
| Empty export | file 0-row OK | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS** (keep). Report AC **N/A**. Export/Import = toolbar DoD · **≠** toast stub.

## 7. Open questions

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **import_now** |
| Q-XLS-FILENAME | **`Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls`** |
| Prior Q-WIDTH/STRUCT/ROUTE/PROV | keep · **cấm** reopen |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · `task_8009a294`. Chain **SA** enqueue (roles sau = pending). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B+D keep · **delta** export/import toolbar |
| Control-map | exportExcel / importExcel · filter cấm XLS |
| Scope / file | filtered · `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` |
| Prototype · reviewUrl | § Prototype |
| API | GET export · POST import · BFF binary · golden 16-sheet |
| Next | SA **pending** · path + checksum · **cấm** đổi typed entity trừ gap |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` (**+Xuất +Nhập**) + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F / H / Z | keep | UiSchema / History / Slideout |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Slideout `data-form-cols=2` keep | ✅ |
| Screens + S-XLS-EXPORT / S-XLS-IMPORT | ✅ |
| DES-GRID-A…D · toolbar FULL + XLS buttons SSOT | ✅ |
| Filter bar **không** Xuất (**GAP-FILTER-BAR-08**) | ✅ |
| Control-map = controlHint delta | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal | ✅ |
| real_view_parity v1 + peerStdUrl | ✅ |
| Hash skip · **cấm** re-scan | ✅ |
| PO Grid AC keep · Report N/A | ✅ |
| Q-XLS-* locked | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-17T18:05:00.000Z |
| versionGate | ok (autoApprove bump · align analy/po) |
| contentHashPriorDataAnaly | sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 |
| headerFingerprintPrior | sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2 |
| orchestratorSkillVersion | 2026.09.05.03 |
| orchestratorWorkflowVersion | 2026.09.05.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.09.05.03 |
| poSkillVersion | 2026.09.05.03 |
| taskId | `task_8009a294` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 -->
