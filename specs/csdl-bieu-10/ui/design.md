# Design — csdl-bieu-10 (edit_page · T-XLS-S10 Xuất/Nhập Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn · **Xuất/Nhập Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_00ebbcea`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S10`) |
| packKind | `list` |
| resource | `retaining-walls` |
| formNo | `10` · title VN **Kè, tường chắn** |
| columns | **21** · **2 section UX** tường chắn + rãnh đỉnh (**unchanged**) |
| IdCode | prefix **`KE`** · **cấm** Guid |
| peerSoTs | `so-ts-retaining` · toolbar deep-link · **≠** merge (**GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_f96b7dc8` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` · headerFingerprint `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls` |
| peerUrl | `http://localhost:9301/so-ts-retaining` (toolbar · **cấm** merge) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`retaining-walls`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_00ebbcea` · po `task_f96b7dc8` · analy `task_0fb02546` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S10` |
| updatedAt | `2026-09-18T06:20:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent 2 sheet tường/rãnh · invent map · merge Sổ TS · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-10.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S10 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-10-real-data.md` | §A+§B · export/import bind |
| PO-01 | `specs/csdl-bieu-10/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior typed Design | **keep** A–D · Slideout 21/2 · **chỉ** delta toolbar |
| MFE | `CsdlBieu10Page` / hub retaining-walls · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 10 | **cấm** 12+8 |
| PEER | `so-ts-retaining` | deep-link only |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Peer · Create | **Xuất Excel** + **Nhập Excel** binary trên `catalogToolbar` · icon+text+title SSOT | GAP-BIEU10-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 (+ `wallKind`) | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU10-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS · gồm `wallKind`) | Q-XLS-SCOPE |
| Import | stub OUT | **import_now** P1 · file picker · skip-bridge keep | Q-XLS-IMPORT |
| Filename | — | `Bieu10_KeTuongChan_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Sheet layout | — | **1 sheet** 21 cột · crest* cùng hàng · **cấm** 2 sheet invent | GAP-BIEU10-XLS-06 |
| heightM | UI heightM ↔ DB WidthM typed | Export/import map **height_alias** · **cấm** đổi entity | Q-XLS-HEIGHT · GAP-BIEU10-XLS-07 |
| Golden | — | Cục **16-sheet** sheet Biểu 10 · 21 cột | GAP-BIEU10-XLS-03 |
| Form / grid / route | Typed 21/2 · Slideout · alias · peer | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S10 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource · IdCode `KE` · map=`none` · peer deep-link · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`import_now` · Q-XLS-FILENAME=`Bieu10_KeTuongChan_{yyyyMMdd}.xls` · Q-XLS-HEIGHT=`height_alias` · open Q = **none**.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON · shared + wall/dim/year subset |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · 2 section tường + rãnh đỉnh |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` · peer toolbar keep |
| Report | **N/A** · DES-RPT skip |
| Export/Import | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-10` |
| Hub entry | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| Form | Slideout overlay |
| Peer | Navigate `so-ts-retaining` · deep-link only |
| Export/Import | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C · D · F · H** | Filter keep · toolbar **+Xuất +Nhập** · peer keep |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | ToolbarButton+file · multipart |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 21/2 section tường+rãnh |
| S-ACT-DELETE | — | Confirm | keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 10 — Kè, tường chắn» · **cấm** Thêm mới trên A

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
| peer | Sổ TS | `fa-book` | Sổ TS tường chắn | deep-link · **cấm** merge |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · side · wallKind · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

Default: STT · □ · Mã · Đường · Tỉnh · Km từ–đến · Vị trí · Loại kè/tường · Kết cấu · Dài · Cao · Năm SD · TT · ĐV QL · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 21 · 2 section tường + rãnh đỉnh — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-10-control-hint.md` + prior Design §3 (`task_652820eb`).

### 3.2 Actions control-map (**delta** · Design chốt)

| Surface | Action | Control | Notes |
|---------|--------|---------|-------|
| catalogToolbar | exportExcel | `ToolbarButton` | Label **Xuất Excel** · `fas fa-file-excel` · filtered QS |
| catalogToolbar | importExcel | `ToolbarButton` + file | Label **Nhập Excel** · `fas fa-file-import` · multipart |
| Filter bar | — | — | **0** export/import actions |
| Form footer | save / cancel | keep | unchanged |
| Toolbar | peer-sots | keep | deep-link `so-ts-retaining` |

## 4. Real-data bind (cite DA-REAL)

| Operation | Path |
|-----------|------|
| CRUD | keep `…/asset/csdl-records?resource=retaining-walls` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=retaining-walls` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=retaining-walls` |
| Download name | `Bieu10_KeTuongChan_{yyyyMMdd}.xls` (Content-Disposition · SA) |
| height map | export cột «cao» = `heightM` (UI) ↔ DB `WidthM` · **Q-XLS-HEIGHT** height_alias |
| Golden | Cục 16-sheet sheet Biểu 10 · 21 cột · 1 sheet · crest* cùng hàng · **cấm** 2 sheet / 12+8 |
| Empty export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar labels/icons + mock XLS |
| Artifact | `ui/prototype/csdl-bieu-10-list-prototype.html` |
| Zones | **DES-GRID-A · B · B-FILTER · C · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** + **Nhập Excel** text+icon+title · mock download / file pick · peer keep |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| **peerUrl** | `http://localhost:9301/so-ts-retaining` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter keep · toolbar +Xuất +Nhập · peer
[S-XLS-EXPORT] catalogToolbar → mock .xls download (filtered · Bieu10_KeTuongChan_{yyyyMMdd}.xls)
[S-XLS-IMPORT] catalogToolbar → file picker · skip-bridge toast mock
[S-FORM] DES-GRID-Z Slideout keep · 2 section tường+rãnh · LeaveConfirmModal
[Filter] 0 XLS actions (GAP-FILTER-BAR-08)
```

## 5. Leave / alert (keep)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| Export/Import fail | `useAppToast` | silent / toast-only done |
| Delete | Confirm modal | native `confirm` |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS** · toolbar +export+import. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **import_now** |
| Q-XLS-FILENAME | **Bieu10_KeTuongChan_{yyyyMMdd}.xls** |
| Q-XLS-HEIGHT | **height_alias** (heightM↔WidthM) |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| Typed Q-* prior | **keep** · **cấm** reopen |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_00ebbcea`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **delta** catalogToolbar Xuất/Nhập |
| Field inventory | form keep · actions exportExcel/importExcel |
| Filters | unchanged · **cấm** XLS trên bar |
| Prototype · reviewUrl | § Prototype |
| API | Export GET · Import POST · resource `retaining-walls` · filtered QS · filename PO · heightM↔WidthM |
| Golden | Cục 16-sheet sheet Biểu 10 · 21 · 1 sheet · **cấm** 2 sheet |
| Next | SA **pending** đến lượt · chain ON · `/implement-export-import-excel` · keep Schema_CsdlBieu10 |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` (**+export+import**) + peer + `LinErpListFilterBar` |
| C | DES-GRID-C | `LinCatalogDataGrid` · typed subset |
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
| generatedAt | 2026-09-18T06:20:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 |
| headerFingerprintPrior | sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598 |
| orchestratorSkillVersion | 2026.09.05.03 |
| orchestratorWorkflowVersion | 2026.09.05.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.09.05.03 |
| poSkillVersion | 2026.09.05.03 |
| taskId | `task_00ebbcea` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 changeScope=edit_page taskId=task_00ebbcea -->
