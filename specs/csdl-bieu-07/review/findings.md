# Review — Findings — csdl-bieu-07

> Status: **confirmed** · `2026-09-18T04:55:00.000Z` · task `task_a4e8f967` · autoApprove=ON  
> Verdict: **PASS** · `review_confirm=done`

| | |
|--|--|
| Feature | `csdl-bieu-07` |
| Title | CSDL Biểu 07 — Xuất Excel (T-XLS-S07) |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `shoulders-fences` |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| prior QA | `confirmed` · S0/S1/QA-20 + T-XLS-QA-01 PASS · `ok=true` |
| qaTaskId | `task_c04c6ac3` |
| priorDevTaskId | `task_5db71cfd` |

## review_confirm

**done** (autoApprove ON) — không `fix_gaps`.

## Summary

Delta **edit_page** T-XLS-S07: catalogToolbar **Xuất Excel** · BFF binary · filter-all · filename `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · sheet «Biểu 7» · 20 cols · typed CRUD **KEEP** · Import **DEFER P1 ẩn** · **cấm** filter-bar Xuất · **cấm** merge SHOULDER · **cấm** ERP.* · QA E2E PASS · contentHash pipeline unchanged → hash gate **skip**.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Export QS = list filters | **PASS** | FE `handleExportExcel` → search/province/status/side/fenceKind/roadCode/kmFrom/kmTo/fromDate/toDate · **không** page/pageSize |
| Endpoint Asset-only | **PASS** | `BASE='/asset/csdl-records'` + `/export` · **không** `ERP.*` |
| filter-all ignore page | **PASS** | BE `ExportAsync` page=1 · `ExportPageSizeCap=10000` |
| side / fenceKind on export | **PASS** | Controller `[FromQuery] side,fenceKind` → ExcelService → CatalogService join Bieu7 |
| Empty export headers-only | **PASS** | FE toast empty OK · QA T-XLS-QA-01 |
| List CRUD query KEEP | **PASS** | prior review + QA smoke S0/S1 |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| No ERP / foreign domain | **PASS** | FE+BE Asset `csdl-records` only |
| Perm keys export | **PASS** | `canExportExcel: perms.canRead` · Auth wire **DEFER** (debt) |
| Soft delete / tenant | **PASS** | KEEP · `share_tenant` |
| Secrets in artifacts | **PASS** | none |
| Peer no-merge | **PASS** | GAP-BIEU07-XLS-PEER · sheet Biểu 7 only |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Toolbar Xuất Excel | **PASS** | `fromCatalogToolbar` · `onExportExcel` · testid `…-export-excel-btn` |
| Import ẩn P1 | **PASS** | **cấm** `onImportExcel` / `canImportExcel` |
| **cấm** filter-bar Xuất | **PASS** | GAP-FILTER-BAR-08 · export chỉ catalogToolbar |
| Filename pattern | **PASS** | FE fallback + BE `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · QA verified |
| Blob download + toast | **PASS** | success/fail/empty · xlsBusy gate |
| Typed 20 / Slideout KEEP | **PASS** | **cấm** reopen · QA-20 PASS |
| Route alias + hub KEEP | **PASS** | `/csdl-bieu-07` · `?resource=shoulders-fences` |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| API-XLS-01 | **PASS** | `GET …/csdl-records/export?resource=shoulders-fences` |
| Sheet «Biểu 7» · 20 cols | **PASS** | `Bieu7ExportHeaders` · FenceLengthKm · SlopeLengthM |
| Filename + Content-Type | **PASS** | `.xls` name · OOXML content-type |
| Units KEEP | **PASS** | FenceLengthKm DTO · SlopeLengthM↔SlopeClearingM |
| Migration | **PASS** | **none** @ XLS · Schema_CsdlBieu7 KEEP |
| BFF binary proxy | **PASS** | T-XLS-BFF-01 KEEP · QS forward |
| **cấm** 12+8 / SHOULDER merge | **PASS** | comments + row map · peer gap closed |

## QA evidence (reuse — **cấm** re-e2e @ Review)

| Case | Result | sha16 / file |
|------|--------|--------------|
| S0 | PASS | `1f79799145ee11e3` |
| S1 | PASS | `1f79799145ee11e3` |
| QA-20 | PASS | `688d925f66aac512` |
| T-XLS-QA-01 export | PASS | `Bieu07_LeTaluyHangRao_20260918.xls` |

manifest `ok=true` · Import ẩn P1 verified.

## Debt (accepted · không block)

| ID | Sev | Note |
|----|-----|------|
| Import Excel | P1 DEFER | GAP-BIEU07-XLS-03 · UI ẩn |
| T-PERM-01 Auth | P2 DEFER | RequirePermission runtime |
| GAP-QA-E2E-PW-01 | P2 | chrome createRequire fallback |
| GAP-CSDL-ORG-01 | P2 | manageUnit Text · prior |
| FencePanelCount | P2 | omit P1 · prior |

## Hash gate

contentHash `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` unchanged vs data_analy→qa compact → **skip** re-hash · **cấm** mở demo HTML.

## Gaps

- **none** → `review_confirm=done`

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-07/review/findings.md` |
| meta | `specs/csdl-bieu-07/review/REVIEW-META.json` |
| compact | `specs/csdl-bieu-07/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-07/STATUS.md` |
