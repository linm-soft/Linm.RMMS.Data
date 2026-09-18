# PO — Requirement — csdl-bieu-02 (Biểu 02 — Thống kê cầu · edit_page export)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu · Xuất Excel (T-XLS-S02) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · Wave 1 `T-XLS-S02` · **giữ** typed CRUD 48 cột) |
| packKind | **`list`** (**PO confirm** · Kind B list A–D + Kind D Slideout · **không** report) |
| Feature Kind | **B** catalog A–D · **D** Slideout · **cấm** Full-page · **cấm** map canvas |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| columns | **48** (Excel Biểu 2) + legacy 64–69 keep_hidden P1 |
| IdCode | prefix **`BR`** · **cấm** Guid |
| gap | **GAP-BIEU02-XLS-01..06** (delta) · keep closed typed GAP-BIEU02-TYPED/ROUTE/GPS/BEAM/SUB/LOAD/FURN/LEGACY · **GAP-FILTER-BAR-08** · **GAP-TYP-01** |
| mode | `feature_context` · analy hash skip · sourceKind=`context`+`api` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_f1ae575f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** board gate. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` · headerFingerprint `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` · analy `task_55ac6074` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed PO | `task_ba5815a6` · **keep** Grid/Form/Leave AC · **cấm** reopen `new_page` typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S02` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet **Biểu 2** · **16-sheet** · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 2 |
| taskId | `task_f1ae575f` · analy `task_55ac6074` · prior typed `task_ba5815a6` |
| updatedAt | `2026-09-18T01:47:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` — Kind **B** list + Kind **D** Slideout · **không** report pack · **không** Kind F map.

**Cấm:** implement · re-scan DEM · reopen typed CRUD `new_page` · toast stub = done · Xuất trên filter bar · golden 12+8 · ERP.* · invent API · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **T-XLS-S02**: thêm **Xuất Excel** binary đúng mẫu Cục sheet Biểu 2 (48 cột · GPS 3 điểm · merge-header) trên `catalogToolbar` · **giữ** list+Slideout typed đã ship · Import **DEFER P1**.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT từ analy `task_55ac6074`):**

1. Toolbar **Xuất Excel** trên `catalogToolbar` / `report-toolbar-actions` — **GAP-BIEU02-XLS-01**.
2. Download **binary** qua BFF — **cấm** toast-only / fake blob — **GAP-BIEU02-XLS-02**.
3. Golden = Cục **16-sheet** xls sheet Biểu 2 — **cấm** hồ sơ 12+8 — **GAP-BIEU02-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU02-XLS-04**.
5. API `GET …/csdl-records/export?resource=bridges` (+ filter QS) — **GAP-BIEU02-XLS-05** (SA chốt path).
6. Sheet Biểu 2 đúng 48 cột + legacy map khi import P1 — **GAP-BIEU02-XLS-06**.
7. Typed form/list/route/GPS/CRUD — **không đổi** · **cấm** reopen.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / prior typed) | New (this pack) |
|-------|------------------------------|-----------------|
| Form / list | Typed 48 cột Slideout + grid **PASS** · GPS ×3 | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **+ Xuất Excel** (`ToolbarButton`) |
| Filter Zone B | Field + 🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub | `GET …/export?resource=bridges` → binary |
| Import API | Missing | **DEFER P1** (`POST …/import`) — không AC P0 |
| Golden | — | Cục 16-sheet · Biểu 2 · checksum 48 |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

## 3. Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter/search hiện tại (QS) · empty filter = all visible tenant set · empty result → file 0 row + header OK |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 S02 = Xuất P0 · Import DEFER P1 (nút có thể ẩn / không ship AC) |
| **Q-XLS-FILENAME** | **`Bieu02_ThongKeCau_{yyyyMMdd}.xlsx`** | PO đề xuất · SA chốt extension `.xls` vs `.xlsx` theo engine |
| formPattern | **Slideout keep** | **cấm** new_page CRUD |
| print-pdf | **OUT** | Wave 1 S02 Biểu = Excel only |
| Auth | **DEFER** residual P2 | **cấm** invent permission path |

## 4. Screens / zones

| Zone | Pattern | DoD this edit |
|------|---------|---------------|
| DES-GRID-A | Header | Giữ title · back hub |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · icon map · **cấm** filter |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged |
| DES-GRID-C/D | Grid + pagination | Unchanged typed cols |
| Form Kind D | Slideout | Unchanged 48 · GPS 3 điểm |
| Map | none | GPS fields only |

**reviewUrl (keep · Design cập nhật nút):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html`

**peerStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`

## 5. Inventory (slim · delta)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | ToolbarButton+file | **DEFER P1** |

## 6. Grid AC (list · keep + export)

### Keep (typed — regression · không reopen)

| ID | AC |
|----|-----|
| AC-GRID-01 | List load `resource=bridges` · empty grid VN |
| AC-GRID-02 | Filter search/province/status/road/km/beamType work |
| AC-GRID-03 | Create/Edit/View/Copy/Delete · LeaveConfirmModal dirty |
| AC-GRID-04 | Slideout 48 cột typed · GPS 6 Number · **cấm** chỉ 3 ô `detail*` |
| AC-GRID-05 | IdCode `BR-*` · soft-delete |

### Delta export (P0)

| ID | AC | Pass |
|----|-----|------|
| **AC-XLS-01** | Nút **Xuất Excel** trên catalogToolbar (không trên filter bar) | Visible · clickable |
| **AC-XLS-02** | Click → download binary file · Content-Disposition · **cấm** toast-only | File mở được |
| **AC-XLS-03** | Sheet = Biểu 2 · merge-header · **48** cột data map typed · GPS 3 điểm | So mẫu Cục |
| **AC-XLS-04** | Filter đang áp → export **filtered** set (Q-XLS-SCOPE) | Row count khớp list (trong giới hạn page-all export SA) |
| **AC-XLS-05** | Empty data → file vẫn tải · 0 data row · header đúng · toast info OK | Không lỗi silent |
| **AC-XLS-06** | Export fail 4xx/5xx → toast · **cấm** silent · **cấm** CSV generic lưới | Toast |
| **AC-XLS-07** | Filename ≈ `Bieu02_ThongKeCau_{yyyyMMdd}.*` (SA chốt ext) | Match pattern |
| **AC-XLS-08** | Golden checksum vs Cục 16-sheet · **cấm** 12+8 | SA/Dev |

**OUT P0:** Import AC · print-pdf · Auth path invent.

## 7. Leave / UX

| Rule | Value |
|------|-------|
| LeaveConfirm | Keep typed dirty form — **không** đổi |
| Export in-flight | Disable nút / loading · **cấm** double-fire |
| Typography | label 13 · input D14/M16 (**GAP-TYP-01**) |

## 8. API / tasks (ids · SA chốt)

| Op | Path |
|----|------|
| CRUD keep | `GET/POST/PUT/DELETE …/csdl-records?resource=bridges` |
| Export P0 | `GET …/csdl-records/export?resource=bridges` (+ filter QS) |
| Import P1 | `POST …/csdl-records/import?resource=bridges` — **DEFER** |
| Entity | typed `rmms_csdl_bieu2` / Schema_CsdlBieu2 — **không** đổi trừ export gap |
| Dev | `/implement-export-import-excel` · BFF binary |

## 9. NFR / cấm

- **Cấm** ERP.* · invent `infra` · demo/LS SSOT  
- **Cấm** Xuất trên filter bar (**GAP-FILTER-BAR-08**)  
- **Cấm** toast stub = done (**GAP-BIEU02-XLS-02**)  
- **Cấm** golden hồ sơ 12+8  
- **Cấm** reopen typed CRUD / đổi 48 cột không gap  
- yarn build / e2e / start:std — **chỉ** Dev/QA  

## 10. Handoff Design

1. **Giữ** prototype typed list+slideout.  
2. **Chỉ** thêm nút **Xuất Excel** trên toolbar (Import ẩn/P1).  
3. Cập nhật reviewUrl zone toolbar · **cấm** đặt action trên filter.  
4. Icon theo `erp-control-icon-map`.  
5. Compact + design.md delta only.

## 11. Handoff SA

1. Chốt binary export path BFF/BE · filter QS · filename ext.  
2. Golden 16-sheet Biểu 2 checksum 48.  
3. Import DEFER P1 — ghi backlog.  
4. **Cấm** đổi typed entity trừ export gap · **cấm** ERP.*.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| generatedAt | 2026-09-18T01:47:00.000Z |
| versionGate | ok |
| taskId | task_f1ae575f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 changeScope=edit_page taskId=task_f1ae575f -->
