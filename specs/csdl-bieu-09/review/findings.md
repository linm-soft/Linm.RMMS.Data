# Review — Findings — csdl-bieu-09

> Status: **confirmed** · `2026-09-18T06:15:00.000Z` · task `task_84d8fe34` · autoApprove=ON  
> Verdict: **PASS** · `review_confirm=done`

| | |
|--|--|
| Feature | `csdl-bieu-09` |
| Title | CSDL Biểu 09 — Xuất/Nhập Excel (T-XLS-S09) |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `boundary-markers` |
| formNo | `09` |
| IdCode | `MK-` |
| columns | `17` · blocks `2` |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| prior QA | `confirmed` · S0/S1/QA-20 + T-XLS-QA-01 PASS · `ok=true` |
| qaTaskId | `task_a1a1c430` |
| priorDevTaskId | `task_6056af24` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |

## review_confirm

**done** (autoApprove ON) — không `fix_gaps`.

## Summary

Delta **edit_page** T-XLS-S09: catalogToolbar **Xuất/Nhập Excel** · BFF binary/multipart · filtered QS (+markerKind) · filename `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` · sheet «Biểu 9» · one_sheet_17 · import_now upsert by code · typed CRUD 17/2 **KEEP** · **cấm** filter-bar Xuất · **cấm** 12+8 / 2-sheet invent · **cấm** ERP.* · QA E2E PASS · contentHash pipeline unchanged → hash gate **skip**.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Export QS = list filters (+markerKind) | **PASS** | FE `exportExcel` → search/province/status/side/roadCode/kmFrom/kmTo + **markerKind** · **không** page |
| Endpoint Asset-only | **PASS** | `BASE='/asset/csdl-records'` + `/export` · `/import` · **không** `ERP.*` |
| Import sheetMap Biểu 9 | **PASS** | sheetMap Biểu 9 · import_now · upsert by code |
| Empty export / toast | **PASS** | FE empty/fail/success · QA T-XLS-QA-01 |
| List CRUD query KEEP | **PASS** | prior review new_page + QA smoke S0/S1 |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| No ERP / foreign domain | **PASS** | FE+BE Asset `csdl-records` only |
| Perm keys export/import | **PASS** | `canExportExcel: canRead` · `canImportExcel: canCreate` · Auth wire **DEFER** |
| Soft delete / tenant | **PASS** | KEEP · `share_tenant` · tz_na · xco_get_only |
| Secrets in artifacts | **PASS** | none |
| Peer no-merge Sổ TS | **PASS** | sheet Biểu 9 only · typed KEEP |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Toolbar Xuất/Nhập | **PASS** | `fromCatalogToolbar` · `onExportExcel`/`onImportExcel` · testid `rmms-csdl-bieu-09-*-export-excel-btn` / `…-import-excel-btn` |
| **cấm** filter-bar Xuất | **PASS** | GAP-FILTER-BAR-08 · `LinErpListFilterBar` không export |
| Filename pattern | **PASS** | FE fallback + BE `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` |
| Blob download + toast | **PASS** | success/fail/empty · xlsBusy gate |
| Typed 17/2 Slideout KEEP | **PASS** | **cấm** reopen · QA-20 PASS |
| Route alias + hub KEEP | **PASS** | `/csdl-bieu-09` · `?resource=boundary-markers` |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| API-XLS-01 export | **PASS** | `GET …/csdl-records/export?resource=boundary-markers` · `CsdlCatalogExcelService` |
| API-XLS-02 import | **PASS** | `POST …/import` · multipart · sheetMap Biểu 9 |
| Sheet «Biểu 9» · 17 cols | **PASS** | `Bieu9SheetName` · `Bieu9ExportHeaders` (17) · one_sheet_17 |
| Filename + Content-Type | **PASS** | `.xls` name · OOXML content-type |
| Migration | **PASS** | **none** @ XLS · Schema_CsdlBieu9 KEEP |
| BFF binary/multipart | **PASS** | T-XLS-BFF-01 · QS/file forward |
| **cấm** 12+8 / 2-sheet | **PASS** | GAP-BIEU09-XLS comments · RoadLimit+GPMB 1 sheet |

## QA evidence (reuse — **cấm** re-e2e @ Review)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `0523b566a450c15d` |
| S1 | PASS | `0523b566a450c15d` |
| QA-20 | PASS | `0e5b0fbe05710bbc` |
| T-XLS-QA-01 export/import | PASS | toolbar + filtered · `Bieu09_MocLoGioiGPMB_*.xls` |

manifest `ok=true` · filter **0** Xuất on filter-bar.

## Debt (accepted · không block)

| ID | Sev | Note |
|----|-----|------|
| getBlob CD strip | P2 | FE fallback filename · Dev debt |
| T-PERM-01 Auth | P2 DEFER | RequirePermission runtime |
| GAP-QA-E2E-PW-01 | P2 | chrome createRequire fallback |
| DB migrate apply | P2 | ops `Schema_CsdlBieu9` (prior) |

## Hash gate

contentHash `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` unchanged vs data_analy→qa compact → **skip** re-hash · **cấm** mở demo HTML.

## Gaps

- **none** → `review_confirm=done`

## Parity snapshot

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed | T-XLS-S09 · 17/2 · MK- |
| po | confirmed | filtered · import_now · one_sheet_17 |
| design | confirmed | toolbar +Xuất/Nhập |
| sa | confirmed | API-XLS · Schema KEEP · no migration |
| team_lead | confirmed | route_a · T-XLS-* |
| dev | confirmed | yarn+dotnet PASS |
| qa | confirmed | e2e + T-XLS-QA-01 PASS |

## Cấm kept

ERP.* · invent API · filter-bar export · 12+8 · 2-sheet invent · reopen typed · e2e/build/start:std @ Review · implement @ Review · phase reopen roles
