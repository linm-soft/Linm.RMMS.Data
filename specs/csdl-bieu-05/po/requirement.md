# PO — Requirement — csdl-bieu-05 (Biểu 05 — Rãnh các loại · edit_page export)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại · Xuất Excel (T-XLS-S05) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · Wave 1 `T-XLS-S05` · **giữ** typed CRUD 18 cột) |
| packKind | **`list`** (**PO confirm** · Kind B list A–D + Kind D Slideout · **không** report) |
| Feature Kind | **B** catalog A–D · **D** Slideout · **cấm** Full-page · **cấm** map canvas |
| resource | `ditches` |
| formNo | `05` · title VN **Rãnh các loại** |
| columns | **18** (Excel Biểu 5) |
| IdCode | prefix **`RN`** · **cấm** Guid |
| peerSoTs | `so-ts-ditch` (DITCH) — deep-link OK · **cấm** gộp sheet/export |
| gap | **GAP-BIEU05-XLS-01..05** · **GAP-BIEU05-XLS-PEER** · **GAP-FILTER-BAR-08** · keep closed typed GAP-BIEU05-TYPED/ROUTE/KIND/SHAPE/DRAIN/RANGE · ROAD/PROV · ORG P2 · **GAP-TYP-01** · prior GAP-CSDL-XLS-01 **supersede** |
| mode | `feature_context` · analy hash skip · sourceKind=`context`+`api` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_95f9a16f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** board gate. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` · headerFingerprint `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` · analy `task_a1caeb3f` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed PO | `task_0ccf0f40` / analy `task_fdcb7c28` · **keep** Grid/Form/Leave AC · **cấm** reopen `new_page` typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S05` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet **Biểu 5** · **16-sheet** · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 5 |
| taskId | `task_95f9a16f` · analy `task_a1caeb3f` · prior typed `task_0ccf0f40` |
| updatedAt | `2026-09-18T03:40:10.155Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` — Kind **B** list + Kind **D** Slideout · **không** report pack · **không** Kind F map.

**Cấm:** implement · re-scan DEM · reopen typed CRUD `new_page` · toast stub = done · Xuất trên filter bar · golden 12+8 · gộp Sổ TS vào sheet · ERP.* · invent API · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **T-XLS-S05**: thêm **Xuất Excel** binary đúng mẫu Cục sheet Biểu 5 (**18 cột** · merge-header · ditchKind/shape/range) trên `catalogToolbar` · **giữ** list+Slideout typed đã ship · Import **DEFER P1**.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT từ analy `task_a1caeb3f`):**

1. Toolbar **Xuất Excel** trên `catalogToolbar` / `report-toolbar-actions` — **GAP-BIEU05-XLS-01**.
2. Download **binary** qua BFF — **cấm** toast-only / fake blob — **GAP-BIEU05-XLS-02**.
3. Golden = Cục **16-sheet** xls sheet Biểu 5 — **cấm** hồ sơ 12+8 — **GAP-BIEU05-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU05-XLS-04**.
5. API `GET …/csdl-records/export?resource=ditches` (+ filter QS) — **GAP-BIEU05-XLS-05** (SA chốt path).
6. Export **chỉ** sheet Biểu 5 · **cấm** gộp cột/row Sổ TS `so-ts-ditch` — **GAP-BIEU05-XLS-PEER**.
7. Typed form/list/route/ditchKind/shape/drainage/CRUD — **không đổi** · **cấm** reopen. Prior **GAP-CSDL-XLS-01 OUT** / **T-OUT-01** supersede bởi GAP-BIEU05-XLS-*.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / prior typed) | New (this pack) |
|-------|------------------------------|-----------------|
| Form / list | Typed 18 cột Slideout + grid **PASS** · ditchKind · shape · range | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất binary | **+ Xuất Excel** (`ToolbarButton`) |
| Filter Zone B | Field + 🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub · T-OUT-01 · ExcelService peer Biểu 1–4 | `GET …/export?resource=ditches` → binary |
| Import API | Missing | **DEFER P1** (`POST …/import`) — không AC P0 |
| Golden | prior OUT / STALE 12+8 | Cục 16-sheet · Biểu 5 · checksum **18** |
| Peer | `so-ts-ditch` deep-link | **Cấm** mix row/cột DITCH vào file |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

## 3. Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter/search hiện tại (QS) · empty filter = all visible tenant set · empty result → file 0 row + header OK |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 S05 = Xuất P0 · Import DEFER P1 (nút ẩn / không ship AC) — align S02–S04 |
| **Q-XLS-FILENAME** | **`Bieu05_RanhCacLoai_{yyyyMMdd}.xlsx`** | PO đề xuất · SA chốt extension `.xls` vs `.xlsx` theo engine |
| formPattern | **Slideout keep** | **cấm** new_page CRUD |
| print-pdf | **OUT** | Wave 1 S05 Biểu = Excel only |
| Auth | **DEFER** residual P2 | **cấm** invent permission path · ORG P2 keep |
| peer export | **no_merge** | Deep-link Sổ TS OK · **cấm** 1 sheet hai chuẩn |

## 4. Screens / zones

| Zone | Pattern | DoD this edit |
|------|---------|---------------|
| DES-GRID-A | Header | Giữ «Biểu 05 — Rãnh các loại» · back hub |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · icon map · **cấm** filter |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · search/province/status/road/km/ditchKind |
| DES-GRID-C/D | Grid + pagination | Unchanged typed cols |
| Form Kind D | Slideout | Unchanged 18 · ditchKind · shape · aperture · drainage · range |
| Map | none | — |

**reviewUrl (keep · Design cập nhật nút):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html`

**peerStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches`

## 5. Inventory (slim · delta)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 18) | typed prior | keep | ditchKind · shape · range · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | ToolbarButton+file | **DEFER P1** |

## 6. Grid AC (list · keep + export)

### Keep (typed — regression · không reopen)

| ID | AC |
|----|-----|
| AC-GRID-01 | List load `resource=ditches` · empty grid VN |
| AC-GRID-02 | Filter search/province/status/road/km/ditchKind work |
| AC-GRID-03 | Create/Edit/View/Copy/Delete · LeaveConfirmModal dirty |
| AC-GRID-04 | Slideout 18 cột typed · ditchKind · shape · drainage · **cấm** chỉ 3 ô `detail*` |
| AC-GRID-05 | IdCode `RN-*` · soft-delete |

### Delta export (P0)

| ID | AC | Pass |
|----|-----|------|
| **AC-XLS-01** | Nút **Xuất Excel** trên catalogToolbar (không trên filter bar) | Visible · clickable |
| **AC-XLS-02** | Click → download binary file · Content-Disposition · **cấm** toast-only | File mở được |
| **AC-XLS-03** | Sheet = Biểu 5 · merge-header · **18** cột data map typed | So mẫu Cục |
| **AC-XLS-04** | Filter đang áp → export **filtered** set (Q-XLS-SCOPE) | Row count khớp list (page-all SA) |
| **AC-XLS-05** | Empty data → file vẫn tải · 0 data row · header đúng · toast info OK | Không lỗi silent |
| **AC-XLS-06** | Export fail 4xx/5xx → toast · **cấm** silent · **cấm** CSV generic lưới | Toast |
| **AC-XLS-07** | Filename ≈ `Bieu05_RanhCacLoai_{yyyyMMdd}.*` (SA chốt ext) | Match pattern |
| **AC-XLS-08** | Golden checksum vs Cục 16-sheet · **cấm** 12+8 | SA/Dev |
| **AC-XLS-09** | File **không** chứa cột/row Sổ TS DITCH | Peer no-merge |

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
| CRUD keep | `GET/POST/PUT/DELETE …/csdl-records?resource=ditches` |
| Export P0 | `GET …/csdl-records/export?resource=ditches` (+ filter QS) |
| Import P1 | `POST …/csdl-records/import?resource=ditches` — **DEFER** |
| Entity | typed `rmms_csdl_bieu5` / Schema_CsdlBieu5 — **không** đổi trừ export gap |
| Dev | `/implement-export-import-excel` · BFF binary |

## 9. NFR / cấm

- **Cấm** ERP.* · invent `infra` · demo/LS SSOT  
- **Cấm** Xuất trên filter bar (**GAP-FILTER-BAR-08**)  
- **Cấm** toast stub = done (**GAP-BIEU05-XLS-02**)  
- **Cấm** golden hồ sơ 12+8  
- **Cấm** gộp Sổ TS `so-ts-ditch` vào sheet Biểu 5  
- **Cấm** reopen typed CRUD / đổi 18 cột không gap  
- yarn build / e2e / start:std — **chỉ** Dev/QA  

## 10. Handoff Design

1. **Giữ** prototype typed list+slideout.  
2. **Chỉ** thêm nút **Xuất Excel** trên toolbar (Import ẩn/P1).  
3. Cập nhật reviewUrl zone toolbar · **cấm** đặt action trên filter.  
4. Icon theo `erp-control-icon-map`.  
5. Compact + design.md delta only.

## 11. Handoff SA

1. Chốt binary export path BFF/BE · filter QS · filename ext.  
2. Golden 16-sheet Biểu 5 checksum **18**.  
3. Import DEFER P1 — ghi backlog.  
4. Peer no-merge DITCH / `so-ts-ditch`.  
5. **Cấm** đổi typed entity trừ export gap · **cấm** ERP.*.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-18T03:40:10.155Z |
| versionGate | ok |
| taskId | task_95f9a16f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728 changeScope=edit_page taskId=task_95f9a16f -->
