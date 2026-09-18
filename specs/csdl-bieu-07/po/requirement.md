# PO — Requirement — csdl-bieu-07 (Biểu 07 — Lề / taluy / hàng rào · edit_page export)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào · Xuất Excel (T-XLS-S07) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · Wave 1 `T-XLS-S07` · **giữ** typed CRUD 20 cột) |
| packKind | **`list`** (**PO confirm** · Kind B list A–D + Kind D Slideout · **không** report) |
| Feature Kind | **B** catalog A–D · **D** Slideout · **cấm** Full-page · **cấm** map canvas |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** |
| columns | **20** (Excel Biểu 7) |
| IdCode | prefix **`LE`** · **cấm** Guid |
| peerSoTs | `SHOULDER` (type-grid) — deep-link OK · **cấm** gộp sheet/export |
| gap | **GAP-BIEU07-XLS-01..05** · **GAP-BIEU07-XLS-PEER** · **GAP-FILTER-BAR-08** · keep closed typed GAP-BIEU07-TYPED/REN/ROUTE/SHOULDER/SLOPE/FENCE/FENCE-LEN/PANEL/PEER · ROAD/PROV · ORG P2 · **GAP-TYP-01** · prior GAP-CSDL-XLS-01 **supersede** |
| mode | `feature_context` · analy hash skip · sourceKind=`context`+`api` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_58ae864f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** board gate. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` · headerFingerprint `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` · analy `task_9ab3979a` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed PO | `task_8566976f` / analy `task_480d8882` · **keep** Grid/Form/Leave AC · **cấm** reopen `new_page` typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S07` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet **Biểu 7** · **16-sheet** · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 7 |
| taskId | `task_58ae864f` · analy `task_9ab3979a` · prior typed `task_8566976f` |
| updatedAt | `2026-09-18T04:25:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` — Kind **B** list + Kind **D** Slideout · **không** report pack · **không** Kind F map.

**Cấm:** implement · re-scan demo · reopen typed CRUD `new_page` · toast stub = done · Xuất trên filter bar · golden 12+8 · gộp Sổ TS vào sheet · ERP.* · invent API · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **T-XLS-S07**: thêm **Xuất Excel** binary đúng mẫu Cục sheet Biểu 7 (**20 cột** · merge-header · 3 khối lề/taluy/HR) trên `catalogToolbar` · **giữ** list+Slideout typed đã ship · Import **DEFER P1**.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT từ analy `task_9ab3979a`):**

1. Toolbar **Xuất Excel** trên `catalogToolbar` / `report-toolbar-actions` — **GAP-BIEU07-XLS-01**.
2. Download **binary** qua BFF — **cấm** toast-only / fake blob — **GAP-BIEU07-XLS-02**.
3. Golden = Cục **16-sheet** xls sheet Biểu 7 — **cấm** hồ sơ 12+8 — **GAP-BIEU07-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU07-XLS-04**.
5. API `GET …/csdl-records/export?resource=shoulders-fences` (+ filter QS) — **GAP-BIEU07-XLS-05** (SA chốt path).
6. Export **chỉ** sheet Biểu 7 · **cấm** gộp cột/row Sổ TS `SHOULDER` — **GAP-BIEU07-XLS-PEER**.
7. Typed form/list/route/3 khối/CRUD — **không đổi** · **cấm** reopen. Prior **GAP-CSDL-XLS-01 OUT** / **T-OUT-01** supersede bởi GAP-BIEU07-XLS-*.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / prior typed) | New (this pack) |
|-------|------------------------------|-----------------|
| Form / list | Typed 20 cột Slideout + grid **PASS** · 3 khối lề/taluy/HR | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất binary | **+ Xuất Excel** (`ToolbarButton`) |
| Filter Zone B | Field + 🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub · T-OUT-01 · ExcelService peer Biểu 1–6 | `GET …/export?resource=shoulders-fences` → binary |
| Import API | Missing | **DEFER P1** (`POST …/import`) — không AC P0 |
| Golden | prior OUT / STALE 12+8 | Cục 16-sheet · Biểu 7 · checksum **20** |
| Peer | type `SHOULDER` deep-link | **Cấm** mix row/cột SHOULDER vào file |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

## 3. Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter/search hiện tại (QS) · empty filter = all visible tenant set · empty result → file 0 row + header OK |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 S07 = Xuất P0 · Import DEFER P1 (nút ẩn / không ship AC) — align S02–S06 |
| **Q-XLS-FILENAME** | **`Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx`** | PO đề xuất · SA chốt extension `.xls` vs `.xlsx` theo engine |
| formPattern | **Slideout keep** | **cấm** new_page CRUD |
| print-pdf | **OUT** | Wave 1 S07 Biểu = Excel only |
| Auth | **DEFER** residual P2 | **cấm** invent permission path · ORG P2 keep |
| peer export | **no_merge** | Deep-link Sổ TS OK · **cấm** 1 sheet hai chuẩn |

## 4. Screens / zones

| Zone | Pattern | DoD this edit |
|------|---------|---------------|
| DES-GRID-A | Header | Giữ «Biểu 07 — Lề / taluy / hàng rào» · back hub |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · icon map · **cấm** filter |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · search/province/status/road/km/side/fenceKind |
| DES-GRID-C/D | Grid + pagination | Unchanged typed cols |
| Form Kind D | Slideout | Unchanged 20 · 3 khối lề / taluy / HR |
| Map | none | — |

**reviewUrl (keep · Design cập nhật nút):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html`

**peerStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`

## 5. Inventory (slim · delta)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | 3 khối · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | ToolbarButton+file | **DEFER P1** |

## 6. Grid AC (list · keep + export)

### Keep (typed — regression · không reopen)

| ID | AC |
|----|-----|
| AC-GRID-01 | List load `resource=shoulders-fences` · empty grid VN |
| AC-GRID-02 | Filter search/province/status/road/km/side/fenceKind work |
| AC-GRID-03 | Create/Edit/View/Copy/Delete · LeaveConfirmModal dirty |
| AC-GRID-04 | Slideout 20 cột typed · 3 khối · **cấm** chỉ 3 ô `detail*` |
| AC-GRID-05 | IdCode `LE-*` · soft-delete · FenceLengthM↔km |

### Delta export (P0)

| ID | AC | Pass |
|----|-----|------|
| **AC-XLS-01** | Nút **Xuất Excel** trên catalogToolbar (không trên filter bar) | Visible · clickable |
| **AC-XLS-02** | Click → download binary file · Content-Disposition · **cấm** toast-only | File mở được |
| **AC-XLS-03** | Sheet = Biểu 7 · merge-header · **20** cột data map typed | So mẫu Cục |
| **AC-XLS-04** | Filter đang áp → export **filtered** set (Q-XLS-SCOPE) | Row count khớp list (page-all SA) |
| **AC-XLS-05** | Empty data → file vẫn tải · 0 data row · header đúng · toast info OK | Không lỗi silent |
| **AC-XLS-06** | Export fail 4xx/5xx → toast · **cấm** silent · **cấm** CSV generic lưới | Toast |
| **AC-XLS-07** | Filename ≈ `Bieu07_LeTaluyHangRao_{yyyyMMdd}.*` (SA chốt ext) | Match pattern |
| **AC-XLS-08** | Golden checksum vs Cục 16-sheet · **cấm** 12+8 | SA/Dev |
| **AC-XLS-09** | File **không** chứa cột/row Sổ TS SHOULDER | Peer no-merge |

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
| CRUD keep | `GET/POST/PUT/DELETE …/csdl-records?resource=shoulders-fences` |
| Export P0 | `GET …/csdl-records/export?resource=shoulders-fences` (+ filter QS) |
| Import P1 | `POST …/csdl-records/import?resource=shoulders-fences` — **DEFER** |
| Entity | typed `rmms_csdl_bieu7` / Schema_CsdlBieu7 — **không** đổi trừ export gap |
| Dev | `/implement-export-import-excel` · BFF binary |

## 9. NFR / cấm

- **Cấm** ERP.* · invent `infra` · demo/LS SSOT  
- **Cấm** Xuất trên filter bar (**GAP-FILTER-BAR-08**)  
- **Cấm** toast stub = done (**GAP-BIEU07-XLS-02**)  
- **Cấm** golden hồ sơ 12+8  
- **Cấm** gộp Sổ TS `SHOULDER` / `road-assets` vào sheet Biểu 7  
- **Cấm** reopen typed CRUD / đổi 20 cột không gap  
- yarn build / e2e / start:std — **chỉ** Dev/QA  

## 10. Handoff Design

1. **Giữ** prototype typed list+slideout.  
2. **Chỉ** thêm nút **Xuất Excel** trên toolbar (Import ẩn/P1).  
3. Cập nhật reviewUrl zone toolbar · **cấm** đặt action trên filter.  
4. Icon theo `erp-control-icon-map`.  
5. Compact + design.md delta only.

## 11. Handoff SA

1. Chốt binary export path BFF/BE · filter QS · filename ext.  
2. Golden 16-sheet Biểu 7 checksum **20**.  
3. Import DEFER P1 — ghi backlog.  
4. Peer no-merge SHOULDER / `road-assets`.  
5. **Cấm** đổi typed entity trừ export gap · **cấm** ERP.*.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-18T04:25:00.000Z |
| versionGate | ok |
| taskId | task_58ae864f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a changeScope=edit_page taskId=task_58ae864f -->
