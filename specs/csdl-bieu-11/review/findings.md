# Review — Findings — csdl-bieu-11

| | |
|--|--|
| Feature | `csdl-bieu-11` |
| Title | CSDL Biểu 11 — Hệ thống chiếu sáng · T-XLS-S11 |
| Role | `review` · `/agent-review` |
| TaskId | `task_79bbf628` |
| Prior review | `task_20e43f26` (typed · PASS · KEEP) |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `edit_page` · `T-XLS-S11` |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` · **unchanged** · hash-skip OK (typed 24/2) |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T07:25:00.000Z` |

## Scope reviewed

| Layer | Evidence |
|-------|----------|
| Prior | data_analy→po→design→sa→TL→dev→qa **confirmed** · compact OK · UNCLEAR none |
| FE XLS | `CsdlBieu11Page` catalogToolbar Xuất/Nhập · `csdlService.exportExcel` + `importCommit` · filename `Bieu11_ChieuSang_*` |
| BE XLS | `CsdlCatalogExcelService` Bieu11ExportHeaders **24** · sheet `Biểu 11` · `gridStatus` QS · import validate |
| BFF | `CsdlCatalogRecordsBffController` proxy binary/multipart |
| QA | S0/S1/QA-20 + S-XLS-EXPORT/IMPORT **PASS** · `task_735d8dfc` |
| Build | yarnBuild + yarnTypecheck + dotnetBuild **PASS** (prior Dev/QA · **cấm** re-run @ Review) |
| Typed KEEP | Schema_CsdlBieu11 · 24/2 Slideout · **cấm** reopen |

## Gate summary

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** (Auth DEFER — debt) |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Hash | **skip** (contentHash unchanged · typed) · XLS delta spot-check PASS |
| ERP.* | **PASS** — domain Asset only |
| GAP-FILTER-BAR-08 | **PASS** — 0 Xuất on LinErpListFilterBar |
| review_confirm | **done** |

## QUERY

| Check | Result | Note |
|-------|--------|------|
| resource=`lighting-systems` | PASS | FE + BE + hub + export QS |
| API `asset/csdl-records` CRUD | PASS | KEEP · **cấm** invent / ERP.* |
| API-XLS-01 GET `…/export` | PASS | filter QS + `side` + `gridStatus` · ignore page |
| API-XLS-02 POST `…/import` | PASS | multipart · sheetMap Biểu 11 · import_now |
| BFF proxy only | PASS | no business remap |
| Filename | PASS | `Bieu11_ChieuSang_{yyyyMMdd}.xls` |
| Sheet | PASS | one_sheet · **24** cols · LED+NLMT cùng hàng · **cấm** 12+8 · **cấm** 2-sheet |
| formNo=11 · IdCode LT- | PASS | KEEP |

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain Asset | PASS | DOMAIN-MAP · **cấm** ERP.* |
| FE page ERP.* | PASS | no matches in `CsdlBieu11Page` |
| Auth/perm | DEFER | T-PERM stub · export canRead · import canCreate |
| Soft DELETE | PASS | catalog pattern KEEP |
| share_tenant / tz_na / xco_get_only | PASS | SA gates KEEP |

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| catalogToolbar Xuất/Nhập | PASS | `onExportExcel` / `onImportExcel` · testid `…-export-excel-btn` / `…-import-excel-btn` |
| Filter-bar export | PASS | **0** Xuất on `LinErpListFilterBar` (GAP-FILTER-BAR-08) |
| Export filter QS | PASS | search/province/status/side/gridStatus/road/km/dates |
| Import_now | PASS | hidden file input · reload after commit |
| Alias `/csdl-bieu-11` · hub | PASS | KEEP |
| Kind D Slideout 24/2 | PASS | KEEP typed · LeaveConfirm |
| Peer toolbar ≠ merge | PASS | `/so-ts-lighting` |
| QA e2e XLS | PASS | export/import + S0/S1/QA-20 |

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Bieu11ExportHeaders | PASS | 24 keys match TL header24 |
| Sheet name `Biểu 11` | PASS | BuildXlsx one sheet |
| Export filter-all + gridStatus | PASS | Controller `[FromQuery] gridStatus` |
| Import gridStatus required | PASS | validate tot/tb/kem/hong |
| Upsert by code | PASS | lighting-systems branch |
| Schema_CsdlBieu11 | PASS | KEEP · migration **none** @ XLS |
| BFF Forward | PASS | export QS + multipart |

## Findings (severity)

| ID | Sev | Gate | Note | Action |
|----|-----|------|------|--------|
| — | — | — | No blocker / major | — |

## Debt (non-blocking)

| ID | Note |
|----|------|
| Auth DEFER | T-PERM wire |
| GAP-QA-E2E-PW-01 | P2 playwright resolve |
| migrate apply | prior typed env |
| org SearchInput | P2 |
| getBlob CD strip | FE fallback filename OK |

## review_confirm

**done** — autoApprove ON · verdict **PASS** · handoff compact written · **cấm** start role khác (GAP-PKT-ROLE-01) · chain complete (e2eQa already PASS @ QA).

## Full paths

- findings: `specs/csdl-bieu-11/review/findings.md`
- compact: `specs/csdl-bieu-11/handoff/review-compact.md`
- STATUS: `specs/csdl-bieu-11/STATUS.md`
- prior QA: `handoff/qa-compact.md`
