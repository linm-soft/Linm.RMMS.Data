# Design — csdl-bieu-08 (edit_page · T-XLS-S08 Xuất/Nhập Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT · **Xuất/Nhập Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_b2622193`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S08`) |
| packKind | `list` |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** |
| columns | **45** · **11 nhóm** child/`type=` (**unchanged**) |
| IdCode | prefix **`AT`** · **cấm** Guid |
| peerSoTs | ATGT types — deep-link only · **cấm** merge |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_c7498ca2` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` · headerFingerprint `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`traffic-safety`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_b2622193` · po `task_c7498ca2` · analy `task_774ebbde` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S08` |
| updatedAt | `2026-09-18T05:10:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · 1 hàng kéo ngang 45 lệch mẫu · invent map · merge Sổ TS · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-08.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S08 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-08-real-data.md` | §A+§B · export/import bind |
| PO-01 | `specs/csdl-bieu-08/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior typed Design | **keep** A–D · Slideout 45/11 · **chỉ** delta toolbar |
| MFE | `CsdlBieu08Page` · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 8 | **cấm** 12+8 |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Peer · Create | **Xuất Excel** + **Nhập Excel** binary trên `catalogToolbar` · icon+text+title SSOT | GAP-BIEU08-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU08-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · gồm `assetType`) | Q-XLS-SCOPE |
| Import | stub OUT | **import_now** P1 · file picker · skip-bridge keep | Q-XLS-IMPORT |
| Filename | — | `Bieu08_HeThongATGT_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Sheet type | — | **one_sheet_45** · merge-header · map shared+child theo `assetType` | Q-XLS-TYPE · GAP-BIEU08-XLS-06 |
| Golden | — | Cục **16-sheet** sheet Biểu 8 · 45 cột | GAP-BIEU08-XLS-03 |
| Form / grid / route | Typed 45/11 · Slideout · alias · subset_by_type | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S08 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource · IdCode `AT` · map=`none` · peer deep-link · shared+1 child · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`import_now` · Q-XLS-FILENAME=`Bieu08_HeThongATGT_{yyyyMMdd}.xls` · Q-XLS-TYPE=`one_sheet_45` · open Q = **none**.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON · subset_by_type |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · shared + 1 child |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` |
| Report | **N/A** · DES-RPT skip |
| Export/Import | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-08` |
| Hub entry | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| Form | Slideout overlay |
| Peer Sổ TS | deep-link only |
| Export/Import | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter keep · toolbar **+Xuất +Nhập** |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | ToolbarButton+file · multipart · skip-bridge toast |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 45/11 shared+1 child |
| S-ACT-DELETE / TYPE-CHANGE | — | Confirm | keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 08 — Hệ thống ATGT» · **cấm** Thêm mới trên A

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
| peer | Sổ TS | `fa-link` | Sổ TS ATGT | keep optional |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · side · assetType · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

Shared luôn: STT · □ · Mã · Đường · Tỉnh · Km từ–đến · Vị trí · Chủng loại · Năm · TT · ĐV QL · ⋯  
Type-subset khi filter `assetType` · **cấm** hiện đủ 45 cột.  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 45/11 · shared + 1 child theo `assetType` — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-08-control-hint.md` + prior Design §3.

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
| CRUD | keep `…/asset/csdl-records?resource=traffic-safety` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=traffic-safety` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=traffic-safety` |
| Download name | `Bieu08_HeThongATGT_{yyyyMMdd}.xls` (Content-Disposition · SA) |
| Golden | Cục 16-sheet sheet Biểu 8 · 45 cột · one_sheet_45 · **cấm** wide-row / 11-sheet invent |
| Empty export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar labels/icons + mock XLS |
| Artifact | `ui/prototype/csdl-bieu-08-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** + **Nhập Excel** text+icon+title · mock download / file pick |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter keep · toolbar +Xuất +Nhập
[S-XLS-EXPORT] catalogToolbar → mock .xls download (filtered note · Bieu08_HeThongATGT_{yyyyMMdd}.xls)
[S-XLS-IMPORT] catalogToolbar → file picker · skip-bridge toast mock
[S-FORM] DES-GRID-Z Slideout keep · shared + 1 child · LeaveConfirmModal
[Filter] 0 XLS actions (GAP-FILTER-BAR-08)
```

## 5. Leave / alert (keep)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| Đổi assetType (edit) | Confirm clear child | native `confirm` |
| Export/Import fail | `useAppToast` | silent / toast-only done |
| Delete | Confirm modal | native `confirm` |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS** · toolbar +export+import. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **import_now** |
| Q-XLS-FILENAME | **Bieu08_HeThongATGT_{yyyyMMdd}.xls** |
| Q-XLS-TYPE | **one_sheet_45** |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| Typed Q-* prior | **keep** · **cấm** reopen |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_b2622193`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **delta** catalogToolbar Xuất/Nhập |
| Field inventory | form keep · actions exportExcel/importExcel |
| Filters | unchanged · **cấm** XLS trên bar |
| Prototype · reviewUrl | § Prototype |
| API | Export GET · Import POST · resource `traffic-safety` · filtered QS · filename PO |
| Golden | Cục 16-sheet sheet Biểu 8 · 45 · one_sheet_45 · **cấm** wide |
| Next | SA **pending** đến lượt · chain ON · `/implement-export-import-excel` |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` (**+export+import**) + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` · subset_by_type |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F / H / Z | keep | UiSchema · History · Slideout |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D keep · **cấm** new_page typed reopen | ✅ |
| S-XLS-EXPORT / S-XLS-IMPORT + S-LIST keep | ✅ |
| catalogToolbar Xuất/Nhập · icon+text+title | ✅ |
| Filter bar **không** Xuất (**GAP-FILTER-BAR-08**) | ✅ |
| Control-map = controlHint · exportExcel/importExcel | ✅ |
| Q-XLS-* chốt · open Q none | ✅ |
| Prototype + reviewUrl · mock binary | ✅ |
| Hash skip analy · **cấm** re-scan | ✅ |
| Report DES-RPT N/A | ✅ |
| PO Grid AC + Leave keep | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-18T05:10:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c |
| headerFingerprintPrior | sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f |
| orchestratorSkillVersion | 2026.09.05.03 |
| orchestratorWorkflowVersion | 2026.09.05.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.09.05.03 |
| poSkillVersion | 2026.09.05.03 |
| taskId | `task_b2622193` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c -->
