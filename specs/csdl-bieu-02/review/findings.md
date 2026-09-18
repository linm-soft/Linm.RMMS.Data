# Review — Findings — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu · T-XLS-S02 Xuất Excel |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **done** (autoApprove=ON · accept · **0** fix_gaps) |
| changeScope | `edit_page` |
| packKind | `list` · Kind B keep · Kind D Slideout keep · **+** catalogToolbar Xuất |
| resource | `bridges` · formNo `02` · columns `48` · IdCode `BR-` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S02` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| autoApprove | **ON** |
| e2eQa | QA **PASS** · **cấm** e2e/start:std this role |
| chain | **ON** · pipeline leaf · GAP-PKT-ROLE-01 |
| prior · qa | **confirmed** · `handoff/qa-compact.md` · `task_eaf98be4` |
| prior · dev | **confirmed** · `handoff/dev-compact.md` · `task_a201197f` |
| taskId | `task_ae24b362` |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T02:17:30.000Z` |

**Method:** static re-audit FE (`CsdlBieu02Page` export toolbar · `csdlSoSach/endpoint.exportExcel`) + BE (`CsdlCatalogRecordsController.Export` · `CsdlCatalogExcelService` bridges · BFF export proxy) + compact chain (analy→qa) + QA evidence (T-XLS-QA-01 · S0/S1/QA-20). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std / Step 4b / migration. **FORBIDDEN** ERP.*.

**Hash:** contentHash unchanged across edit_page XLS chain · full audit (scope delta vs prior `new_page` review) · **no** SKIP.

## SSOT surface (edit_page XLS + typed KEEP)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | changeScope edit_page · **cấm** reopen 48-col | CRUD KEEP · XLS delta only | **PASS** |
| 2 | Route `route_a` hub + alias | `/so-ts/csdl-so-sach` · `/csdl-bieu-02` | **PASS** (prior KEEP) |
| 3 | catalogToolbar Xuất · **cấm** filter-bar export | `onExportExcel` · **0** export on `LinErpListFilterBar` | **PASS** |
| 4 | Import DEFER P1 ẩn | **0** `onImportExcel` / `canImportExcel` | **PASS** |
| 5 | FILENAME SA `.xls` | BE `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · FE fallback same | **PASS** |
| 6 | Q-XLS-SCOPE filtered · filter-all | Export QS = list filters · page=1 · ExportPageSizeCap · ignore client page | **PASS** |
| 7 | Golden sheet Biểu 2 · 48 cols · GPS×3 | `CsdlCatalogExcelService` bridges row map · **cấm** 12+8 | **PASS** |
| 8 | Empty = headers-only + toast | BE headers-only · FE toast when `totalCount===0` | **PASS** |
| 9 | API Asset csdl-records/export · **cấm** ERP.* | FE `/asset/csdl-records/export` · BE Asset · Grep page **0** ERP | **PASS** |
| 10 | BFF binary proxy | `CsdlCatalogRecordsBffController` GET export | **PASS** |
| 11 | QA E2E T-XLS-QA-01 · S0/S1/QA-20 | qa-compact PASS · sha16 evidence | **PASS** (prior) |
| 12 | yarn/dotnet build | prior Dev | **PASS** (not re-run) |

## Findings

No P0 / P1 blocking. **review_confirm = done** · accept.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-XLS-01 | query | — | Export QS resource/search/province/status/roadCode/km/fromDate/toDate/beamType | Controller + FE `exportExcel` | **PASS** |
| REV-XLS-02 | query | — | filter-all ignore page/pageSize | `ExportAsync` page=1 · cap | **PASS** |
| REV-XLS-03 | be-fn | — | bridges OOXML · 48 cols · GPS×6 · filename `.xls` | `CsdlCatalogExcelService` | **PASS** |
| REV-XLS-04 | be-fn | — | BFF GET export binary | BffController | **PASS** |
| REV-XLS-05 | ui-fn | — | catalogToolbar Xuất · Import ẩn · GAP-FILTER-BAR-08 | `CsdlBieu02Page` | **PASS** |
| REV-XLS-06 | ui-fn | — | empty toast · fail toast · busy gate | `handleExportExcel` | **PASS** |
| REV-XLS-07 | security | — | `canExportExcel` ← `perms.canRead` | toolbar | **PASS** |
| REV-XLS-08 | security | P2 | RequirePermission TODO CommonLib | Controller comments · Auth DEFER | Accept · prior debt |
| REV-XLS-09 | security | — | ERP.* / invent infra | Grep FE page + Asset API | **None** |
| REV-XLS-10 | note | P2 | getBlob strips Content-Disposition | FE fallback filename | Accept · non-blocking |
| REV-XLS-11 | note | P2 | Import P1 · GAP-QA-E2E-PW-01 · migrate apply | OUT/DEFER | Accept · pack scope |
| REV-XLS-12 | note | — | PO `.xlsx` vs SA `.xls` | SA locked · live `.xls` | Accept · resolved |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | export/list/get | — | **None** blocking |

## Query (/review-query)

- Export: `GET …/csdl-records/export?resource=bridges` + search/province/status/roadCode/kmFrom/kmTo/fromDate/toDate/beamType · **parity list filters**.
- Mode: **filter-all** · server forces page=1 · `ExportPageSizeCap` · **cấm** streaming P0 · ignore client page/pageSize.
- Empty match → headers-only OOXML (AC-XLS empty OK).
- List/CRUD QS KEEP (prior review) · soft DELETE · typed join · **0** demo/localStorage SSOT.
- N+1: list batch Bieu2 KEEP · export single list call · accept.

## Security

- FE: `canExportExcel: perms.canRead && !xlsBusy` · Import UI absent P0.
- BE: export same Auth stub as list read · `TODO RequirePermission` · **P2 DEFER** (T-PERM).
- Company claim get-by-id KEEP · xco_get_only · share_tenant (SA gates).
- **0** ERP.* / invent infra on FE page + Asset export path.
- IDOR: export uses same list filter + tenant service path as list · **no** new P0.

## UI-FN

- Zones: S-LIST KEEP · S-XLS-EXPORT · S-XLS-IMPORT hidden · S-FORM-* KEEP.
- testid: `rmms-csdl-bieu-02-list-page` · `…-export-excel-btn` (QA).
- LeaveConfirm · FilterBar **0** invent Tìm · Q-LEGACY hidden · **KEEP PASS** (prior).
- Filename download: FE fallback `Bieu02_ThongKeCau_{yyyyMMdd}.xls` (SA).

## BE-FN

- `CsdlCatalogRecordsController.Export` binds filter QS · File() with contentType OOXML + `.xls` name.
- Bridges sheet Biểu 2 · typed fields · GPS start/mid/end · legacy cols · **cấm** 12+8.
- BFF forwards QS to API export · binary.
- Migration: **none mới** @ XLS · entity typed KEEP.
- Gaps closed: GAP-BIEU02-XLS-01/02/04 · 03 Import deferred.

## AC map (XLS)

| AC | Verdict |
|----|---------|
| AC-XLS-01 toolbar Xuất | **PASS** |
| AC-XLS-02 binary download | **PASS** |
| AC-XLS-03 48 cols / golden | **PASS** |
| AC-XLS-04 filtered QS | **PASS** |
| AC-XLS-05 empty OK | **PASS** |
| AC-XLS-06 toast fail | **PASS** |
| AC-XLS-07 filename `.xls` | **PASS** |
| AC-XLS-08 Import ẩn P0 | **PASS** |
| AC-GRID-* typed | **PASS** KEEP (prior + QA-20) |

## Gate

| Gate | Result |
|------|--------|
| DoR review | **PASS** |
| review_confirm | **done** |
| fix_gaps | **0** |
| next | pipeline leaf · phase **done** |

## Full paths

- implement: `specs/csdl-bieu-02/implement/csdl-bieu-02.md`
- scenarios: `specs/csdl-bieu-02/qa/scenarios.md`
- solution: `specs/csdl-bieu-02/be/solution-discovery.md`
- compact: `specs/csdl-bieu-02/handoff/review-compact.md`
