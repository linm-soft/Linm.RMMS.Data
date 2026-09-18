# PO — Requirement — csdl-bieu-04 (Biểu 04 — Cống các loại · edit_page export)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại · Xuất Excel (T-XLS-S04) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · Wave 1 `T-XLS-S04` · **giữ** typed CRUD 17 cột) |
| packKind | **`list`** (**PO confirm** · Kind B list A–D + Kind D Slideout · **không** report) |
| Feature Kind | **B** catalog A–D · **D** Slideout · **cấm** Full-page · **cấm** map canvas |
| resource | `culverts` |
| formNo | `04` · title VN **Cống các loại** |
| columns | **17** (Excel Biểu 4) |
| IdCode | prefix **`CG`** · **cấm** Guid |
| peerSoTs | `so-ts-culvert-x` (CULVERT_X) — deep-link OK · **cấm** gộp sheet/export |
| gap | **GAP-BIEU04-XLS-01..05** · **GAP-BIEU04-XLS-PEER** · **GAP-FILTER-BAR-08** · keep closed typed GAP-BIEU04-TYPED/ROUTE/GPS/SHAPE · ROAD/PROV · ORG P2 · **GAP-TYP-01** |
| mode | `feature_context` · analy hash skip · sourceKind=`context`+`api` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_5062adbc`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** board gate. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` · headerFingerprint `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` · analy `task_584ba7e8` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed PO | `task_ad060865` · **keep** Grid/Form/Leave AC · **cấm** reopen `new_page` typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S04` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet **Biểu 4** · **16-sheet** · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 4 |
| taskId | `task_5062adbc` · analy `task_584ba7e8` · prior typed `task_ad060865` |
| updatedAt | `2026-09-18T03:00:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` — Kind **B** list + Kind **D** Slideout · **không** report pack · **không** Kind F map.

**Cấm:** implement · re-scan DEM · reopen typed CRUD `new_page` · toast stub = done · Xuất trên filter bar · golden 12+8 · gộp Sổ TS vào sheet · ERP.* · invent API · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **T-XLS-S04**: thêm **Xuất Excel** binary đúng mẫu Cục sheet Biểu 4 (**17 cột** · merge-header · GPS four_xy) trên `catalogToolbar` · **giữ** list+Slideout typed đã ship · Import **DEFER P1**.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT từ analy `task_584ba7e8`):**

1. Toolbar **Xuất Excel** trên `catalogToolbar` / `report-toolbar-actions` — **GAP-BIEU04-XLS-01**.
2. Download **binary** qua BFF — **cấm** toast-only / fake blob — **GAP-BIEU04-XLS-02**.
3. Golden = Cục **16-sheet** xls sheet Biểu 4 — **cấm** hồ sơ 12+8 — **GAP-BIEU04-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU04-XLS-04**.
5. API `GET …/csdl-records/export?resource=culverts` (+ filter QS) — **GAP-BIEU04-XLS-05** (SA chốt path).
6. Export **chỉ** sheet Biểu 4 · **cấm** gộp cột/row Sổ TS `so-ts-culvert-x` — **GAP-BIEU04-XLS-PEER**.
7. Typed form/list/route/GPS/shape/CRUD — **không đổi** · **cấm** reopen. Prior **GAP-CSDL-XLS-01 OUT** supersede bởi GAP-BIEU04-XLS-*.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / prior typed) | New (this pack) |
|-------|------------------------------|-----------------|
| Form / list | Typed 17 cột Slideout + grid **PASS** · GPS four_xy · shape | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **+ Xuất Excel** (`ToolbarButton`) |
| Filter Zone B | Field + 🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub · ExcelService Biểu 1–3 | `GET …/export?resource=culverts` → binary |
| Import API | Missing | **DEFER P1** (`POST …/import`) — không AC P0 |
| Golden | prior OUT / STALE 12+8 | Cục 16-sheet · Biểu 4 · checksum **17** |
| Peer | `so-ts-culvert-x` deep-link | **Cấm** mix row/cột CULVERT_X vào file |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

## 3. Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter/search hiện tại (QS) · empty filter = all visible tenant set · empty result → file 0 row + header OK |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 S04 = Xuất P0 · Import DEFER P1 (nút ẩn / không ship AC) — align S02/S03 |
| **Q-XLS-FILENAME** | **`Bieu04_CongCacLoai_{yyyyMMdd}.xlsx`** | PO đề xuất · SA chốt extension `.xls` vs `.xlsx` theo engine |
| formPattern | **Slideout keep** | **cấm** new_page CRUD |
| print-pdf | **OUT** | Wave 1 S04 Biểu = Excel only |
| Auth | **DEFER** residual P2 | **cấm** invent permission path · T-PERM-01 / GAP-CSDL-ORG-01 keep |
| peer export | **no_merge** | Deep-link Sổ TS OK · **cấm** 1 sheet hai chuẩn |

## 4. Screens / zones

| Zone | Pattern | DoD this edit |
|------|---------|---------------|
| DES-GRID-A | Header | Giữ «Biểu 04 — Cống các loại» · back hub |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · icon map · **cấm** filter |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · search/province/status/road/km |
| DES-GRID-C/D | Grid + pagination | Unchanged typed cols |
| Form Kind D | Slideout | Unchanged 17 · GPS four_xy · shape · load |
| Map | none | — |

**reviewUrl (keep · Design cập nhật nút):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html`

**peerStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts`

## 5. Inventory (slim · delta)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17) | typed prior | keep | GPS four_xy · shape · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | ToolbarButton+file | **DEFER P1** |

## 6. Grid AC (list · keep + export)

### Keep (typed — regression · không reopen)

| ID | AC |
|----|-----|
| AC-GRID-01 | List load `resource=culverts` · empty grid VN |
| AC-GRID-02 | Filter search/province/status/road/km work |
| AC-GRID-03 | Create/Edit/View/Copy/Delete · LeaveConfirmModal dirty |
| AC-GRID-04 | Slideout 17 cột typed · GPS 4 Number · shape · **cấm** chỉ 3 ô `detail*` |
| AC-GRID-05 | IdCode `CG-*` · soft-delete |

### Delta export (P0)

| ID | AC | Pass |
|----|-----|------|
| **AC-XLS-01** | Nút **Xuất Excel** trên catalogToolbar (không trên filter bar) | Visible · clickable |
| **AC-XLS-02** | Click → download binary file · Content-Disposition · **cấm** toast-only | File mở được |
| **AC-XLS-03** | Sheet = Biểu 4 · merge-header · **17** cột data map typed · GPS four_xy | So mẫu Cục |
| **AC-XLS-04** | Filter đang áp → export **filtered** set (Q-XLS-SCOPE) | Row count khớp list (page-all SA) |
| **AC-XLS-05** | Empty data → file vẫn tải · 0 data row · header đúng · toast info OK | Không lỗi silent |
| **AC-XLS-06** | Export fail 4xx/5xx → toast · **cấm** silent · **cấm** CSV generic lưới | Toast |
| **AC-XLS-07** | Filename ≈ `Bieu04_CongCacLoai_{yyyyMMdd}.*` (SA chốt ext) | Match pattern |
| **AC-XLS-08** | Golden checksum vs Cục 16-sheet · **cấm** 12+8 | SA/Dev |
| **AC-XLS-09** | File **không** chứa cột/row Sổ TS CULVERT_X | Peer no-merge |

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
| CRUD keep | `GET/POST/PUT/DELETE …/csdl-records?resource=culverts` |
| Export P0 | `GET …/csdl-records/export?resource=culverts` (+ filter QS) |
| Import P1 | `POST …/csdl-records/import?resource=culverts` — **DEFER** |
| Entity | typed `rmms_csdl_bieu4` / Schema_CsdlBieu4 — **không** đổi trừ export gap |
| Dev | `/implement-export-import-excel` · BFF binary |

## 9. NFR / cấm

- **Cấm** ERP.* · invent `infra` · demo/LS SSOT  
- **Cấm** Xuất trên filter bar (**GAP-FILTER-BAR-08**)  
- **Cấm** toast stub = done (**GAP-BIEU04-XLS-02**)  
- **Cấm** golden hồ sơ 12+8  
- **Cấm** gộp Sổ TS `so-ts-culvert-x` vào sheet Biểu 4  
- **Cấm** reopen typed CRUD / đổi 17 cột không gap  
- yarn build / e2e / start:std — **chỉ** Dev/QA  

## 10. Handoff Design

1. **Giữ** prototype typed list+slideout.  
2. **Chỉ** thêm nút **Xuất Excel** trên toolbar (Import ẩn/P1).  
3. Cập nhật reviewUrl zone toolbar · **cấm** đặt action trên filter.  
4. Icon theo `erp-control-icon-map`.  
5. Compact + design.md delta only.

## 11. Handoff SA

1. Chốt binary export path BFF/BE · filter QS · filename ext.  
2. Golden 16-sheet Biểu 4 checksum **17**.  
3. Import DEFER P1 — ghi backlog.  
4. Peer no-merge CULVERT_X.  
5. **Cấm** đổi typed entity trừ export gap · **cấm** ERP.*.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| generatedAt | 2026-09-18T03:00:00.000Z |
| versionGate | ok |
| taskId | task_5062adbc |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 changeScope=edit_page taskId=task_5062adbc -->
