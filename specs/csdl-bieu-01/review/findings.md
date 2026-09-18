# Review — Findings — csdl-bieu-01 (edit_page · T-XLS-S01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường · Xuất/Nhập Excel |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **done** (autoApprove=ON · accept · **0** fix_gaps) |
| changeScope | `edit_page` |
| packKind | `list` · Kind B A–D+F · Kind D Slideout 2col |
| resource | `pavement-sections` · formNo `01` · columns `38` · IdCode `MD-` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| autoApprove | **ON** |
| e2eQa | prior QA **PASS** (`task_795fd15b`) · **cấm** e2e/start:std this role |
| chain | **ON** · pipeline leaf · GAP-PKT-ROLE-01 |
| prior · qa | **confirmed** · `handoff/qa-compact.md` · `task_795fd15b` |
| prior · dev | **confirmed** · `handoff/dev-compact.md` · `task_742f5820` |
| taskId | `task_f77bd354` |
| contentHashPrior | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| reviewHash | `sha256:c9e4f1a82b7d6053` |
| updatedAt | `2026-09-18T01:41:00.000Z` |

**Method:** static re-audit delta XLS — FE (`CsdlBieu01Page` catalogToolbar export/import · `csdlSoSach/endpoint` getBlob+filename fallback · filter bar **0** Xuất) + BE (`CsdlCatalogExcelService` OOXML Biểu 1 · filtered Export · import_now skipBridge) + BFF forward + prior compact chain (analy→qa) + QA evidence (S0/S1/QA-20 + S-XLS-EXPORT/IMPORT · manifest ok). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std / Step 4b / migration. **FORBIDDEN** ERP.*.

**Hash:** prior REVIEW-META `new_page` / hash `3545960f…` ≠ current `b48e58e6…` → **NO SKIP** · full delta audit T-XLS.

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | Route `route_a` hub + alias | `/so-ts/csdl-so-sach` · `/csdl-bieu-01` | **PASS** (prior KEEP) |
| 2 | Kind B list + FilterBar | `LinPageLayout` · `LinErpListFilterBar` · **0** Xuất trên bar | **PASS** · GAP-FILTER-BAR-08 |
| 3 | Toolbar Xuất/Nhập | `catalogToolbar` `onExportExcel`/`onImportExcel` · testid `…-export-excel-btn` / `…-import-excel-btn` | **PASS** |
| 4 | Export filtered + filename | QS = list filters · FE/BE `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` | **PASS** |
| 5 | Import import_now | hidden file + `importCommit` sheet `Biểu 1` · `skipBridge` | **PASS** |
| 6 | Golden sheet Biểu 1 · **cấm** 12+8 | `CsdlCatalogExcelService` `Bieu1SheetName` | **PASS** |
| 7 | Kind D Slideout 2col KEEP | `data-form-cols=2` · LeaveConfirmModal | **PASS** (prior) |
| 8 | Typed 38 · **cấm** reopen | compact chain · **cấm** new_page | **PASS** |
| 9 | API Asset · **cấm** ERP.* | FE `/asset/csdl-records` · BE Asset · BFF | **PASS** |
| 10 | Gaps EXP/IMP/UI closed | Dev compact · QA PASS | **PASS** |
| 11 | QA E2E S0/S1/QA-20 + XLS | qa-compact verdict PASS · sha16 evidence | **PASS** (prior · not re-run) |
| 12 | yarn/dotnet build | Dev `task_742f5820` | **PASS** (not re-run) |

## Findings

No P0 / P1 blocking. **review_confirm = done** · accept · **0** fix_gaps.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-XLS-01 | be-fn | — | `CsdlCatalogExcelService.ExportAsync` | filename + sheet Biểu 1 + filtered | **PASS** |
| REV-XLS-02 | be-fn | — | Import Commit multipart | import_now upsert · skipBridge | **PASS** |
| REV-XLS-03 | ui-fn | — | catalogToolbar Xuất/Nhập | testid export/import · **0** filter Xuất | **PASS** |
| REV-XLS-04 | query | — | Export QS = list filters | FE endpoint QS mirror | **PASS** |
| REV-XLS-05 | security | — | ERP.* / invent path | FE page + Asset API/BFF | **None** |
| REV-XLS-06 | security | P2 | Auth/permission | RequirePermission DEFER | Accept · Auth DEFER |
| REV-XLS-07 | note | P2 | getBlob strips CD | FE fallback filename = PO lock | Accept · debt |
| REV-XLS-08 | note | P2 | BIFF .xls read | OOXML OK · BIFF N/A | Accept · debt |
| REV-XLS-09 | note | P2 | GAP-QA-E2E-PW-01 | chrome createRequire | Accept · non-blocking |
| REV-BIEU01-KEEP | ui/be | — | prior typed CRUD review | `task_c53d69d9` | **PASS** KEEP |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/export/import | — | **None** blocking |

## Query (/review-query)

- List KEEP: `resource=pavement-sections` + search/province/status/roadCode/km/fromDate/toDate/page.
- Export: same filter QS → OOXML Biểu 1 · empty = headers-only + toast.
- Import: multipart · sheetMap Biểu 1 → shell+typed upsert by code · skipBridge.
- N+1: export batch typed join accept · **0** ERP.*.

## Security

- FE perms gate export `canRead` · import `canCreate`.
- BFF binary/multipart forward only · **0** secrets in repo delta.
- Auth CommonLib TODO = DEFER P2 (unchanged).
- IDOR: company claim get-by-id KEEP · export scoped by list filters + tenant share_tenant.

## UI / BE function

- Toolbar SSOT via `fromCatalogToolbar` · VN labels Xuất/Nhập Excel.
- Filter bar: SearchTextInput **no** onSearch invent · 🔍 bar `onSearch` · **cấm** Xuất trên bar.
- Form Slideout KEEP · LeaveConfirmModal · **0** `window.confirm`.
- BE: API-XLS-01/02/03 · BFF export/import · migration none @ XLS.

## Confirm

`review_confirm` = **done** (autoApprove ON) · accept · **cấm** fix_gaps.

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| reviewHash | sha256:c9e4f1a82b7d6053 |
| contentHashPrior | sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 |
| generatedAt | 2026-09-18T01:41:00.000Z |
| versionGate | ok |
| changeScope | edit_page |
| taskId | task_f77bd354 |
