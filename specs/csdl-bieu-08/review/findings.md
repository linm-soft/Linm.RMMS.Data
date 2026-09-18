# Review — Findings — csdl-bieu-08

> Status: **confirmed** · `2026-09-18T05:50:00.000Z` · task `task_5844adb2` · autoApprove=ON  
> Verdict: **PASS** · `review_confirm=done`

| | |
|--|--|
| Feature | `csdl-bieu-08` |
| Title | CSDL Biểu 08 — Xuất/Nhập Excel (T-XLS-S08) |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `traffic-safety` |
| formNo | `08` |
| IdCode | `AT-` |
| columns | `45` · groups `11` |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| prior QA | `confirmed` · S0/S1/QA-20 + T-XLS-QA-01 PASS · `ok=true` |
| qaTaskId | `task_0bd98d56` |
| priorDevTaskId | `task_ed6e77ce` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |

## review_confirm

**done** (autoApprove ON) — không `fix_gaps`.

## Summary

Delta **edit_page** T-XLS-S08: catalogToolbar **Xuất/Nhập Excel** · BFF binary/multipart · filtered QS (+type) · filename `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · sheet «Biểu 8» · one_sheet_45 · import_now upsert by code · typed CRUD 45/11 **KEEP** · **cấm** filter-bar Xuất · **cấm** 12+8 / wide-row · **cấm** ERP.* · QA E2E PASS · contentHash pipeline unchanged → hash gate **skip**.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Export QS = list filters (+type) | **PASS** | FE `handleExportExcel` → search/province/status/side/assetType/roadCode/kmFrom/kmTo/fromDate/toDate · **không** page |
| Endpoint Asset-only | **PASS** | `BASE='/asset/csdl-records'` + `/export` · `/import` · **không** `ERP.*` |
| Import sheetMap Biểu 8 | **PASS** | `sheetMap: [{ sheetName: 'Biểu 8', resource }]` · `skipBridge: true` |
| Empty export headers-only toast | **PASS** | FE empty toast · QA T-XLS-QA-01 |
| List CRUD query KEEP | **PASS** | prior review + QA smoke S0/S1 |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| No ERP / foreign domain | **PASS** | FE+BE Asset `csdl-records` only |
| Perm keys export/import | **PASS** | `canExportExcel: canRead` · `canImportExcel: canCreate` · Auth wire **DEFER** |
| Soft delete / tenant | **PASS** | KEEP · `share_tenant` · tz_na · xco_get_only |
| Secrets in artifacts | **PASS** | none |
| Peer no-merge Sổ TS | **PASS** | sheet Biểu 8 only · typed+child |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Toolbar Xuất/Nhập | **PASS** | `fromCatalogToolbar` · `onExportExcel`/`onImportExcel` · testid `…-export-excel-btn` / `…-import-excel-btn` |
| **cấm** filter-bar Xuất | **PASS** | GAP-FILTER-BAR-08 · `LinErpListFilterBar` không export |
| Filename pattern | **PASS** | FE fallback + BE `Bieu08_HeThongATGT_{yyyyMMdd}.xls` |
| Blob download + toast | **PASS** | success/fail/empty · xlsBusy gate |
| Typed 45/11 Slideout KEEP | **PASS** | **cấm** reopen · QA-20 PASS |
| Route alias + hub KEEP | **PASS** | `/csdl-bieu-08` · `?resource=traffic-safety` |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| API-XLS-01 export | **PASS** | `GET …/csdl-records/export?resource=traffic-safety` · `CsdlCatalogExcelService` |
| API-XLS-02/03 import | **PASS** | `POST …/import` · multipart · skipBridge |
| Sheet «Biểu 8» · 45 cols | **PASS** | `Bieu8SheetName` · `Bieu8ExportHeaders` · one_sheet_45 |
| Filename + Content-Type | **PASS** | `.xls` name · OOXML content-type |
| Migration | **PASS** | **none** @ XLS · Schema_CsdlBieu8+11 KEEP |
| BFF binary/multipart | **PASS** | T-XLS-BFF-01 · QS/file forward |
| **cấm** 12+8 / wide-row | **PASS** | GAP-BIEU08-XLS comments · typed child |

## QA evidence (reuse — **cấm** re-e2e @ Review)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `138dfa0deb89fe7c` |
| S1 | PASS | `138dfa0deb89fe7c` |
| QA-20 | PASS | `d94fdfd692e4c929` |
| T-XLS-QA-01 export/import | PASS | toolbar + filtered |

manifest `ok=true` · filter **0** Xuất on filter-bar.

## Debt (accepted · không block)

| ID | Sev | Note |
|----|-----|------|
| getBlob CD strip | P2 | FE fallback filename · Dev debt |
| T-PERM-01 Auth | P2 DEFER | RequirePermission runtime |
| GAP-QA-E2E-PW-01 | P2 | chrome createRequire fallback |

## Hash gate

contentHash `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` unchanged vs data_analy→qa compact → **skip** re-hash · **cấm** mở demo HTML.

## Gaps

- **none** → `review_confirm=done`

## Parity snapshot

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed | T-XLS-S08 · 45/11 · AT- |
| po | confirmed | filtered · import_now · one_sheet_45 |
| design | confirmed | toolbar +Xuất/Nhập |
| sa | confirmed | API-XLS · Schema KEEP · no migration |
| team_lead | confirmed | route_a · T-XLS-* |
| dev | confirmed | yarn+dotnet PASS |
| qa | confirmed | e2e + T-XLS-QA-01 PASS |

## Cấm kept

ERP.* · invent API · filter-bar export · 12+8 · wide-row · reopen typed · e2e/build/start:std @ Review · implement @ Review · phase reopen roles
