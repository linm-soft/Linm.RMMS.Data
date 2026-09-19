# Design — csdl-bieu-11 (edit_page · T-XLS-S11 Xuất/Nhập Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng · **Xuất/Nhập Excel** |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** (**keep typed**) |
| formSurface | **slideout** · `footer_actions_only` · **cấm** Full-page / Modal form · **cấm** new_page typed reopen |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_ec751c18`) |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S11`) |
| packKind | `list` |
| resource | `lighting-systems` |
| formNo | `11` · title VN **Biểu 11 — Hệ thống chiếu sáng** |
| columns | **24** · **2 section UX** lưới điện + NLMT (**unchanged**) |
| IdCode | prefix **`LT`** · **cấm** Guid |
| peerSoTs | `so-ts-lighting` · toolbar deep-link · **≠** merge · qty ≠ điểm (**GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_b2950eab` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` · headerFingerprint `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems` |
| peerUrl | `http://localhost:9301/so-ts-lighting` (toolbar · **cấm** merge) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** |
| catalogKind UI schema | **`lighting-systems`** (keep) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_ec751c18` · po `task_b2950eab` · analy `task_55dac8de` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S11` |
| updatedAt | `2026-09-18T06:50:00.000Z` |

**Cấm:** re-scan demo · toast-only «export done» · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent 2 sheet LED/NLMT · dump điểm Sổ TS · invent map · merge Sổ TS · ERP.* · native alert · yarn build/e2e/start:std · start role SA/Dev (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-11.md` | feature |
| EPIC | `docs/context/features/csdl-export-print.md` | Wave 1 T-XLS-S11 |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` | controlHint SSOT · delta toolbar |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-11-real-data.md` | §A+§B · export/import bind |
| PO-01 | `specs/csdl-bieu-11/po/requirement.md` | Q-XLS-* chốt |
| PRIOR-DES | prior typed Design | **keep** A–D · Slideout 24/2 · **chỉ** delta toolbar |
| MFE | `CsdlBieu11Page` / hub lighting-systems · `fromCatalogToolbar` | typed shipped · thiếu binary Xuất |
| GOLDEN | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 11 | **cấm** 12+8 |
| PEER | `so-ts-lighting` | deep-link only · qty ≠ điểm |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

### § Delta Current vs New (`edit_page`)

| Area | Current (live / prior Design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Toolbar | Refresh · History · Config · Delete · Import/Export **stub OUT** · Peer · Create | **Xuất Excel** + **Nhập Excel** binary trên `catalogToolbar` · icon+text+title SSOT | GAP-BIEU11-XLS-01/02 |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Nhập | GAP-BIEU11-XLS-04 · GAP-FILTER-BAR-08 |
| Export scope | — | **filtered** (active filter QS) | Q-XLS-SCOPE |
| Import | stub OUT | **import_now** P1 · file picker · skip-bridge keep | Q-XLS-IMPORT |
| Filename | — | `Bieu11_ChieuSang_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Sheet layout | — | **1 sheet** 24 cột · LED + NLMT cùng hàng · **cấm** 2 sheet invent | GAP-BIEU11-XLS-06 · Q-XLS-SHEET |
| Peer qty | Sổ TS điểm ≠ bucket | Export **qty bucket** biểu Cục · **cấm** dump điểm | GAP-BIEU11-XLS-07 |
| Golden | — | Cục **16-sheet** sheet Biểu 11 · 24 cột | GAP-BIEU11-XLS-03 |
| Form / grid / route | Typed 24/2 · Slideout · alias · peer | **Unchanged** · **cấm** reopen typed CRUD | — |
| Print PDF | — | **OUT** Wave 1 S11 | — |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · pagination 50/100/200/500 · API prefix CRUD · resource · IdCode `LT` · map=`none` · peer deep-link · **cấm ERP.***.

**PO chốt (Design khóa):** Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`import_now` · Q-XLS-FILENAME=`Bieu11_ChieuSang_{yyyyMMdd}.xls` · Q-XLS-SHEET=`one_sheet` · open Q = **none**.

## 1. Kind + UI pattern (HARD — keep)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` |
| Grid | `LinCatalogDataGrid` · kéo cột ON · shared + LED/grid subset |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · 🔍 mép phải · **cấm** Xuất trên bar |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form | **Slideout** · `data-form-cols="2"` · `footer_actions_only` · 2 section lưới + NLMT |
| Zone F / H | UiSchema + History — keep |
| Leave | Dirty → **`LeaveConfirmModal`** |
| Map | `none` · peer toolbar keep |
| Report | **N/A** · DES-RPT skip |
| Export/Import | **`catalogToolbar`** · `/implement-export-import-excel` · BFF binary |

### Routes (keep)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-11` |
| Hub entry | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| Form | Slideout overlay |
| Peer | Navigate `so-ts-lighting` · deep-link only |
| Export/Import | same list surface · no new route |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C · D · F · H** | Filter keep · toolbar **+Xuất +Nhập** · peer keep |
| S-XLS-EXPORT | — | DES-GRID-B toolbar | ToolbarButton Xuất · filtered QS · binary download |
| S-XLS-IMPORT | — | DES-GRID-B toolbar | ToolbarButton+file · multipart |
| S-FORM-* | C/E/V/Copy | DES-GRID-Z | **Unchanged** typed 24/2 section lưới+NLMT |
| S-ACT-DELETE | — | Confirm | keep |
| S-HIST / S-HUB / S-PEER | — | — | keep |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/implement-export-import-excel` (delta) · typed CRUD **không** reopen.

### Zone A — Header (keep)

- Back hub · title «Biểu 11 — Hệ thống chiếu sáng» · **cấm** Thêm mới trên A

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
| peer | Sổ TS | `fa-book` | Sổ TS chiếu sáng | deep-link · **cấm** merge |
| create | Tạo mới | `fa-plus` | Tạo mới | primary phải · keep |

**Filter (`LinErpListFilterBar`) — unchanged:** search · province · status · roadCode · kmFrom/kmTo · side · 🔍 cụm phải · **cấm** nút Tìm riêng · **cấm** Xuất/Nhập trên bar (**GAP-FILTER-BAR-08**).

### Zone C / D — Grid + pagination (keep typed)

Default: STT · □ · Mã · Đường · Tỉnh · Km từ–đến · Vị trí · LED 600/240/150/125 · TT lưới · Số cột · Số tủ · TT · ĐV QL · ⋯  
Pagination 50/100/200/500.

## 3. Field inventory

### 3.1 Form Slideout — **unchanged** (cite prior · controlHint)

Typed 24 · 2 section lưới điện + NLMT — Control = controlHint prior. **Cấm** đổi form control trong pack này. Cite: `specs/_data-analy/features/csdl-bieu-11-control-hint.md` + prior Design §3 (`task_94e69c1a`).

### 3.2 Actions control-map (**delta** · Design chốt)

| Surface | Action | Control | Notes |
|---------|--------|---------|-------|
| catalogToolbar | exportExcel | `ToolbarButton` | Label **Xuất Excel** · `fas fa-file-excel` · filtered QS |
| catalogToolbar | importExcel | `ToolbarButton` + file | Label **Nhập Excel** · `fas fa-file-import` · multipart |
| Filter bar | — | — | **0** export/import actions |
| Form footer | save / cancel | keep | unchanged |
| Toolbar | peer-sots | keep | deep-link `so-ts-lighting` |

## 4. Real-data bind (cite DA-REAL)

| Operation | Path |
|-----------|------|
| CRUD | keep `…/asset/csdl-records?resource=lighting-systems` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=lighting-systems` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=lighting-systems` |
| Download name | `Bieu11_ChieuSang_{yyyyMMdd}.xls` (Content-Disposition · SA) |
| Row layout | 1 sheet 24 · GridLed* + Solar* cùng hàng · **Q-XLS-SHEET** one_sheet |
| Peer | Export qty bucket · **cấm** dump điểm `so-ts-lighting` |
| Golden | Cục 16-sheet sheet Biểu 11 · 24 cột · 1 sheet · **cấm** 2 sheet / 12+8 |
| Empty export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic |

**Cấm** fake blob done · toast-only · ERP.* · invent `/infra/`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | prior typed prototype · **delta** toolbar labels/icons + mock XLS |
| Artifact | `ui/prototype/csdl-bieu-11-list-prototype.html` |
| Zones | **DES-GRID-A · B · B-FILTER · C · D · F · H · Z** · content-only |
| Filter mock | `LinErpListFilterBar` · **không** Xuất trên bar |
| Toolbar | **Xuất Excel** + **Nhập Excel** text+icon+title · mock download / file pick · peer keep |
| Form | Slideout typed keep · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems` |
| **mfeStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| **peerUrl** | `http://localhost:9301/so-ts-lighting` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter keep · toolbar +Xuất +Nhập · peer
[S-XLS-EXPORT] catalogToolbar → mock .xls download (filtered · Bieu11_ChieuSang_{yyyyMMdd}.xls)
[S-XLS-IMPORT] catalogToolbar → file picker · skip-bridge toast mock
[S-FORM] DES-GRID-Z Slideout keep · 2 section lưới+NLMT · LeaveConfirmModal
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
| Q-XLS-FILENAME | **Bieu11_ChieuSang_{yyyyMMdd}.xls** |
| Q-XLS-SHEET | **one_sheet** |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| Typed Q-* prior | **keep** · **cấm** reopen |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_ec751c18`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout keep · **delta** catalogToolbar Xuất/Nhập |
| Field inventory | form keep · actions exportExcel/importExcel |
| Filters | unchanged · **cấm** XLS trên bar |
| Prototype · reviewUrl | § Prototype |
| API | Export GET · Import POST · resource `lighting-systems` · filtered QS · filename PO · 1 sheet 24 |
| Golden | Cục 16-sheet sheet Biểu 11 · 24 · 1 sheet · **cấm** 2 sheet · **cấm** dump điểm |
| Next | SA **pending** đến lượt · chain ON · `/implement-export-import-excel` · keep Schema_CsdlBieu11 |

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
| generatedAt | 2026-09-18T06:50:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 |
| headerFingerprintPrior | sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a |
| orchestratorSkillVersion | 2026.09.05.03 |
| orchestratorWorkflowVersion | 2026.09.05.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.09.05.03 |
| poSkillVersion | 2026.09.05.03 |
| taskId | `task_ec751c18` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHashPrior=sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 changeScope=edit_page taskId=task_ec751c18 -->
