# PO Requirement — csdl-bieu-16 (edit_page · T-XLS-S16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao · **Xuất Excel** |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S16` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.3` |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| confirmedAt | `2026-09-18T03:00:00.000Z` |
| taskId | `task_de6499fc` |
| priorTyped | `task_593d435f` · requirement **keep** · review `task_628c95a5` PASS · **cấm** reopen new_page CRUD |
| priorAnaly | `task_e344020d` · control-hint + real-data · hash skip |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` |
| hubRoute | `/so-ts/csdl-so-sach?resource=interchanges` |
| formPattern | Kind D Slideout (**keep**) |
| listPattern | Kind B A–D (**keep**) |
| map | `none` |

> Typed CRUD (list + Slideout + `branches[]` + hub + Schema_CsdlBieu16) **đã PASS** (`task_628c95a5`). Pack này **chỉ** delta **Xuất Excel** binary đúng mẫu Cục. Toast stub ≠ done.

## 1. Goal

Cho phép người dùng tải file Excel **Biểu 16 — Nút giao** từ toolbar catalog: binary BFF, **1 sheet**, **39 cột**, flatten **1 row / nhánh** (repeat header), khớp golden Cục 16-sheet — **không** đổi typed CRUD.

## 2. Keep (typed — cấm reopen)

| Area | Keep |
|------|------|
| Route / hub | `/csdl-bieu-16` alias · hub card `interchanges` |
| List Kind B | Zones A/B/C/D · filter slots · paginate 50/100/200/500 |
| Form Kind D | Slideout 2col · 5 section (Định danh · Đặc trưng nút · Nhánh child · ATGT · Quản lý) · LeaveConfirm · View readOnly · IdCode `IX` · `branches[]` min_1 |
| Header 39 | `code\|name\|roadCode\|roadName\|province\|kmMain\|kmAux\|interchangeType\|trafficOrg\|mainBedWidth\|mainSurfaceWidth\|mainMedianWidth\|mainLaneCount\|branchName\|branchKmFrom\|branchKmTo\|branchSide\|branchDirection\|branchLength\|branchBedWidth\|branchSurfaceWidth\|branchMedianWidth\|branchRadius\|atgtSign\|atgtMarking\|atgtIsland\|atgtLight\|status\|yearBuilt\|manageUnit\|notes\|lat\|lng\|updatedBy\|updatedAt\|isActive\|branchCount\|formNo\|side` |
| API CRUD | `api/v1/asset/csdl-records?resource=interchanges` |
| Entity | `Schema_CsdlBieu16` / Interchange + InterchangeBranch · embed `branches[]` |
| Peer | cite `so-ts-interchange` only |
| Prior Q | Q-ROUTE…Q-CHILD-API (`task_593d435f`) **keep** |

## 3. § Delta — T-XLS-S16 (this pack)

| ID | Requirement | DoD |
|----|-------------|-----|
| GAP-BIEU16-XLS-01 | Nút **Xuất Excel** trên `catalogToolbar` (icon `erp-control-icon-map`) | Click → download binary · mở được cạnh mẫu Cục |
| GAP-BIEU16-XLS-02 | Binary qua BFF `/implement-export-import-excel` | **FAIL** nếu chỉ toast/stub |
| GAP-BIEU16-XLS-03 | Golden = Cục **16-sheet** xls sheet Biểu 16 | **Cấm** hồ sơ 12+8 làm golden |
| GAP-BIEU16-XLS-04 | **Cấm** Xuất/Import trên `LinErpListFilterBar` | GAP-FILTER-BAR-08 |
| GAP-BIEU16-XLS-05 | `GET …/csdl-records/export?resource=interchanges` (+ QS filter) | SA chốt path exact · **cấm** invent `/infra/` |
| GAP-BIEU16-XLS-06 | **1 sheet** 39 cột · flatten **1 row / nhánh** (repeat header) | **Cấm** 1 row flatten-only mất nhánh · **cấm** invent sheet Branch riêng |
| GAP-BIEU16-XLS-07 | Export qty/m biểu Cục | **Cấm** merge so-ts-interchange / `road-assets` |

**Import:** P1 DEFER (`Q-XLS-IMPORT=export_only_p0`) — không AC bắt buộc Wave 1 S16; Design ẩn hoặc disable Import.

**Print PDF:** OUT (không Wave 1 S16).

**Supersede:** prior GAP-CSDL-XLS-01 stub → GAP-BIEU16-XLS-*.

## 4. PO decisions (autoApprove · Q-XLS-*)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter hiện tại (road/province/interchangeType/status/kmMain/search) qua QS · empty filter = all visible tenant resource |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 P0 = Xuất only · Import P1 DEFER |
| **Q-XLS-FILENAME** | **`Bieu16_NutGiao_{yyyyMMdd}.xls(x)`** | SA chốt extension theo engine (.xls vs .xlsx) · Content-Disposition BE |
| **Q-XLS-BRANCH** | **`header_blank`** | 0 nhánh → vẫn 1 row header · `branch*` trống · **cấm** skip mất nút · runtime save vẫn min_1 (typed keep) |
| **Q-XLS-SHEET** | **`name_cuc`** | Sheet name đúng «Biểu 16» theo Cục · **cấm** chỉ index_16 không tên |
| typed prior Q-* | **keep** | **cấm** reopen new_page |

## 5. Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** A/B/C/D **keep** · toolbar **+export** |
| Form | Kind **D** Slideout **keep** · 5 section + `branches[]` |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` **keep** |

## 6. § Screens (delta only)

### S1 — List (Kind B)

| Zone | AC (delta) |
|------|------------|
| A Header | **Keep** «Biểu 16 — Nút giao» · back hub |
| B Toolbar | **Thêm** Xuất Excel · **cấm** filter-bar export · CRUD actions **keep** · Import ẩn/disable P0 |
| B Filter | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| C/D Grid+page | **Unchanged** · typed 39 |

### S2 — Form Slideout

**Unchanged** — không AC form mới cho XLS · export **không** dirty Leave.

## 7. Grid AC (list · keep + delta)

| ID | AC |
|----|----|
| G-keep | Filter+search · subset cột · pagination · row CRUD · empty «Chưa có nút giao» — **keep** typed |
| G-04 | Toolbar **Xuất Excel** → binary download (không toast-only) |
| G-05 | Empty list → file vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| G-06 | Export fail → toast VN · **cấm** silent · **cấm** CSV generic lưới |
| G-07 | File mở cạnh golden Cục · checksum 39 cột · flatten 1 row/nhánh |
| G-08 | Export tôn trọng filter QS (`Q-XLS-SCOPE=filtered`) |
| G-09 | Nút 0 nhánh (edge data) → 1 row `header_blank` (`Q-XLS-BRANCH`) |

## 8. Report AC

N/A — packKind=`list`.

## 9. § Leave

| Case | Behavior |
|------|----------|
| Typed dirty form | **Keep** LeaveConfirmModal (`task_593d435f`) |
| Export click | **Không** trigger Leave · không dirty form |
| After export | list **không** reload bắt buộc · toast OK nếu empty/info |

## 10. Bind (cite real-data · delta)

| Op | Path |
|----|------|
| CRUD | **keep** `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) · `resource=interchanges` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=interchanges` (+ filter QS) |
| Import | `POST …/import?resource=interchanges` — **DEFER P1** |
| API mirror | `api/v1/asset/csdl-records[/export]` · **cấm** invent `/infra/` · ERP.* |

## 11. GAP close (when PASS · this pack)

| GAP | Close when |
|-----|------------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất → binary mở được |
| GAP-BIEU16-XLS-02 | BFF binary · **≠** toast stub |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet Biểu 16 · checksum 39 |
| GAP-BIEU16-XLS-04 | 0 Xuất trên filter bar |
| GAP-BIEU16-XLS-05 | GET export live |
| GAP-BIEU16-XLS-06 | Flatten 1 row/nhánh · 1 sheet |
| GAP-BIEU16-XLS-07 | Không merge so-ts-interchange / road-assets |

Typed GAP prior (HUB/TYPED/ROUTE/BRANCH/…) — **already PASS** · **cấm** reopen.

## 12. Non-goals / Cấm

- ERP.* · Domains/Master · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export · golden hồ sơ 12+8  
- Invent sheet riêng nhánh · flatten-only mất nhánh · merge peer so-ts / `road-assets`  
- Re-open new_page typed CRUD · đổi entity Schema_CsdlBieu16  
- yarn build / e2e / start:std ở role PO  

## 13. Handoff Design

| Need | Detail |
|------|--------|
| prototype | **Keep** typed · **chỉ** +nút Xuất trên `catalogToolbar` · Import ẩn/disable P0 |
| reviewUrl | Cập nhật prototype review |
| **cấm** | Đổi form/list zones · filter-bar export · re-scan demo |

## 14. Handoff SA (next after Design)

| Need | Detail |
|------|--------|
| BFF binary | `/implement-export-import-excel` · GET export path |
| Golden | checksum 39 · sheet «Biểu 16» · flatten `branches[]` · filename |
| Entity | **cấm** đổi typed Schema_CsdlBieu16 / InterchangeBranch |
| **cấm** | invent infra · merge road-assets / so-ts-interchange |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-18T03:00:00.000Z |
| versionGate | ok |
| taskId | task_de6499fc |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072 -->
