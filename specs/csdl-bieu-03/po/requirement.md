# PO — Requirement — csdl-bieu-03 (Biểu 03 — Hầm đường bộ · edit_page export)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ · Xuất Excel (T-XLS-S03) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · Wave 1 `T-XLS-S03` · **giữ** typed CRUD 42 cột) |
| packKind | **`list`** (**PO confirm** · Kind B list A–D + Kind D Slideout · **không** report) |
| Feature Kind | **B** catalog A–D · **D** Slideout · **cấm** Full-page · **cấm** map canvas |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| columns | **42** (Excel Biểu 3) |
| IdCode | prefix **`TN`** · **cấm** Guid |
| gap | **GAP-BIEU03-XLS-01..05** · **GAP-BIEU03-XLS-TUBE** · **GAP-FILTER-BAR-08** · **GAP-TYP-01** · keep closed typed GAP-BIEU03-TYPED/ROUTE/GPS/TUBE/STRUCT/DRAIN/FIRE/VENT/PEER/DMAP/MAP · ROAD/PROV · ORG P2 |
| mode | `feature_context` · analy hash skip · sourceKind=`context`+`api` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_6861dd5b`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** board gate. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` · headerFingerprint `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` · analy `task_9054a943` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed PO | `task_69bca3c6` · **keep** Grid/Form/Leave AC · **cấm** reopen `new_page` typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S03` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet **Biểu 3** · **16-sheet** · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 3 |
| taskId | `task_6861dd5b` · analy `task_9054a943` · prior typed `task_69bca3c6` |
| updatedAt | `2026-09-18T02:25:43.765Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` — Kind **B** list + Kind **D** Slideout · **không** report pack · **không** Kind F map.

**Cấm:** implement · re-scan DEM · reopen typed CRUD `new_page` · toast stub = done · Xuất trên filter bar · golden 12+8 · ERP.* · invent API · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **T-XLS-S03**: thêm **Xuất Excel** binary đúng mẫu Cục sheet Biểu 3 (42 cột · GPS 3 điểm · **1 Excel row = 1 ống**) trên `catalogToolbar` · **giữ** list+Slideout typed đã ship · Import **DEFER P1**.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT từ analy `task_9054a943`):**

1. Toolbar **Xuất Excel** trên `catalogToolbar` / `report-toolbar-actions` — **GAP-BIEU03-XLS-01**.
2. Download **binary** qua BFF — **cấm** toast-only / fake blob — **GAP-BIEU03-XLS-02**.
3. Golden = Cục **16-sheet** xls sheet Biểu 3 — **cấm** hồ sơ 12+8 — **GAP-BIEU03-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU03-XLS-04**.
5. API `GET …/csdl-records/export?resource=road-tunnels` (+ filter QS) — **GAP-BIEU03-XLS-05** (SA chốt path).
6. Export **1 row Excel / 1 ống** (tubeIndex + GPS bộ) · **cấm** gộp 2 ống 1 hàng — **GAP-BIEU03-XLS-TUBE**.
7. Typed form/list/route/GPS/TUBE/CRUD — **không đổi** · **cấm** reopen.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / prior typed) | New (this pack) |
|-------|------------------------------|-----------------|
| Form / list | Typed 42 cột Slideout + grid **PASS** · GPS ×3 · 2 ống=2 bản ghi | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **+ Xuất Excel** (`ToolbarButton`) |
| Filter Zone B | Field + 🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub · ExcelService Biểu 1/2 only | `GET …/export?resource=road-tunnels` → binary |
| Import API | Missing for Biểu 3 | **DEFER P1** (`POST …/import`) — không AC P0 |
| Golden | — | Cục 16-sheet · Biểu 3 · checksum 42 · 1 row/ống |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

## 3. Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter/search hiện tại (QS) · empty filter = all visible tenant set · empty result → file 0 row + header OK |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 S03 = Xuất P0 · tube/GPS row rule phức tạp → Import DEFER P1 (nút ẩn / không ship AC) |
| **Q-XLS-FILENAME** | **`Bieu03_HamDuongBo_{yyyyMMdd}.xlsx`** | PO đề xuất · SA chốt extension `.xls` vs `.xlsx` theo engine |
| formPattern | **Slideout keep** | **cấm** new_page CRUD |
| tube export | **1 Excel row = 1 ống** | Keep Q-TUBE two_rows · **GAP-BIEU03-XLS-TUBE** |
| print-pdf | **OUT** | Wave 1 S03 Biểu = Excel only |
| Auth | **DEFER** residual P2 | **cấm** invent permission path |
| GAP-CSDL-ORG-01 | **DEFER P2** | keep prior |

## 4. Screens / zones

| Zone | Pattern | DoD this edit |
|------|---------|---------------|
| DES-GRID-A | Header | Giữ «Biểu 03 — Hầm đường bộ» · back hub |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · icon map · **cấm** filter |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · search/province/status/road/km/tunnelClass/tubeCount |
| DES-GRID-C/D | Grid + pagination | Unchanged typed cols |
| Form Kind D | Slideout | Unchanged 42 · GPS/kết cấu/thoát+PCCC/thiết bị |
| Map | none | GPS fields only |

**reviewUrl (keep · Design cập nhật nút):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html`

**peerStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`

## 5. Inventory (slim · delta)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | GPS×3 · tube · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary · filtered |
| importExcel | Nhập Excel | ToolbarButton+file | **DEFER P1** |

## 6. Grid AC (list · keep + export)

### Keep (typed — regression · không reopen)

| ID | AC |
|----|-----|
| AC-GRID-01 | List load `resource=road-tunnels` · empty grid VN «Chưa có hầm đường bộ» |
| AC-GRID-02 | Filter search/province/status/road/km/tunnelClass/tubeCount work |
| AC-GRID-03 | Create/Edit/View/Copy/Delete · LeaveConfirmModal dirty |
| AC-GRID-04 | Slideout 42 cột typed · GPS 6 Number · tubeCount/tubeIndex · **cấm** chỉ 3 ô `detail*` |
| AC-GRID-05 | IdCode `TN-*` · soft-delete · 2 ống = 2 bản ghi |

### Delta export (P0)

| ID | AC | Pass |
|----|-----|------|
| **AC-XLS-01** | Nút **Xuất Excel** trên catalogToolbar (không trên filter bar) | Visible · clickable |
| **AC-XLS-02** | Click → download binary file · Content-Disposition · **cấm** toast-only | File mở được |
| **AC-XLS-03** | Sheet = Biểu 3 · merge-header · **42** cột · GPS 3 điểm | So mẫu Cục |
| **AC-XLS-04** | Filter đang áp → export **filtered** set (Q-XLS-SCOPE) | Row count khớp list (page-all SA) |
| **AC-XLS-05** | Empty data → file vẫn tải · 0 data row · header đúng · toast info OK | Không lỗi silent |
| **AC-XLS-06** | Export fail 4xx/5xx → toast · **cấm** silent · **cấm** CSV generic lưới | Toast |
| **AC-XLS-07** | Filename ≈ `Bieu03_HamDuongBo_{yyyyMMdd}.*` (SA chốt ext) | Match pattern |
| **AC-XLS-08** | Golden checksum vs Cục 16-sheet · **cấm** 12+8 | SA/Dev |
| **AC-XLS-09** | **1 Excel row = 1 ống** (+ GPS bộ) · **cấm** gộp 2 ống 1 hàng | Tube rule |

**OUT P0:** Import AC · print-pdf · Auth path invent · reopen typed CRUD.

## 7. Leave / UX

| Rule | Value |
|------|-------|
| LeaveConfirm | Keep typed dirty form — **không** đổi |
| Export in-flight | Disable nút / loading · **cấm** double-fire |
| Typography | label 13 · input D14/M16 (**GAP-TYP-01**) |

## 8. API / tasks (ids · SA chốt)

| Op | Path |
|----|------|
| CRUD keep | `GET/POST/PUT/DELETE …/csdl-records?resource=road-tunnels` |
| Export P0 | `GET …/csdl-records/export?resource=road-tunnels` (+ filter QS) |
| Import P1 | `POST …/csdl-records/import?resource=road-tunnels` — **DEFER** |
| Entity | typed `rmms_csdl_bieu3` / Schema_CsdlBieu3 — **không** đổi trừ export gap |
| Dev | `/implement-export-import-excel` · BFF binary |

## 9. NFR / cấm

- **Cấm** ERP.* · invent `infra` · demo/LS SSOT  
- **Cấm** Xuất trên filter bar (**GAP-FILTER-BAR-08**)  
- **Cấm** toast stub = done (**GAP-BIEU03-XLS-02**)  
- **Cấm** golden hồ sơ 12+8  
- **Cấm** reopen typed CRUD / đổi 42 cột không gap  
- **Cấm** gộp 2 ống 1 hàng Excel (**GAP-BIEU03-XLS-TUBE**)  
- yarn build / e2e / start:std — **chỉ** Dev/QA  

## 10. Handoff Design

1. **Giữ** prototype typed list+slideout.  
2. **Chỉ** thêm nút **Xuất Excel** trên toolbar (Import ẩn/P1).  
3. Cập nhật reviewUrl zone toolbar · **cấm** đặt action trên filter.  
4. Icon theo `erp-control-icon-map`.  
5. Compact + design.md delta only.

## 11. Handoff SA

1. Chốt binary export path BFF/BE · filter QS · filename ext.  
2. Golden 16-sheet Biểu 3 checksum 42 · **1 row/ống**.  
3. Import DEFER P1 — ghi backlog (tube validation khi import).  
4. **Cấm** đổi typed entity trừ export gap · **cấm** ERP.*.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| generatedAt | 2026-09-18T02:25:43.765Z |
| versionGate | ok |
| taskId | task_6861dd5b |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 changeScope=edit_page taskId=task_6861dd5b -->
