# Review — Findings — csdl-bieu-12 (T-XLS-S12)

| | |
|--|--|
| Feature | `csdl-bieu-12` |
| Title | CSDL Biểu 12 — Cây xanh, thảm cỏ · Xuất Excel |
| Role | `review` · `/agent-review` |
| TaskId | `task_acb2eabe` |
| Prior typed review | `task_9d0c01b9` PASS keep |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `edit_page` · epic `T-XLS-S12` |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` · **changed vs typed** · full XLS re-review |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T01:05:00.000Z` |

## Scope reviewed

| Layer | Evidence |
|-------|----------|
| Prior | data_analy→po→design→sa→TL→dev→qa **confirmed** · compact OK · UNCLEAR none |
| Delta | T-XLS-S12 export · typed 15/2 KEEP · Schema_CsdlBieu12 KEEP · **cấm** reopen |
| FE | `CsdlBieu12Page` toolbar `onExportExcel` · `csdlEndpoint.exportExcel` · Import **không wire** |
| BE | `CsdlCatalogRecordsController` GET export · `CsdlCatalogExcelService` Biểu 12 · 15 cols · `.xls` name |
| BFF | `CsdlCatalogRecordsBffController` GET export proxy-only |
| QA | S0/S1/QA-20 + export `Bieu12_CayXanh_20260918.xls` PASS · `task_96b70a9a` |
| Build | yarnBuild PASS · dotnet Api+Bff PASS · `task_051369c1` |

## Gate summary

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** (Auth DEFER — debt) |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Hash | **re-review** (hash đổi vs typed · XLS delta) |
| ERP.* | **PASS** — domain Asset only |
| review_confirm | **done** |

## QUERY

| Check | Result | Note |
|-------|--------|------|
| resource=`green-assets` | PASS | FE + BE + export QS |
| GET `…/csdl-records/export` | PASS | filter QS · **no page** · filter-all cap 10k |
| BFF binary proxy | PASS | mirror QS · no business logic |
| Filename `Bieu12_CayXanh_{yyyyMMdd}.xls` | PASS | BE Content-Disposition + FE fallback |
| one_sheet · 15 cols · khóm+cỏ cùng hàng | PASS | `Bieu12ExportHeaders` · sheet `Biểu 12` |
| **cấm** streaming / 2-sheet / 12+8 | PASS | BuildXlsx buffer · single sheet |
| Typed CRUD keep | PASS | Schema_CsdlBieu12 · **cấm** reopen |

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain Asset | PASS | DOMAIN-MAP · `api/v1/asset/csdl-records` |
| **cấm** ERP.* | PASS | no ERP namespace |
| Auth/perm | DEFER | T-PERM stub · not blocker |
| share_tenant / tz_na / xco_get_only | PASS | SA gates keep |
| **cấm** invent so-ts-green | PASS | peer none |
| Soft DELETE keep | PASS | catalog pattern |

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| Toolbar Xuất Excel | PASS | `onExportExcel` · `canExportExcel` · catalogToolbar |
| GAP-FILTER-BAR-08 | PASS | **0** export trên LinErpListFilterBar |
| Import DEFER P1 ẩn | PASS | không `onImportExcel` · export_only_p0 |
| Filtered export | PASS | search/province/status/side/road/km/date → QS |
| Toast real export | PASS | success/fail · empty-header toast · **≠** stub |
| Alias + hub keep | PASS | `/csdl-bieu-12` · `?resource=green-assets` |
| Typed Kind B+D keep | PASS | Slideout 15/2 · QA-20 PASS |
| QA e2e XLS | PASS | S0/S1/QA-20 + export file |

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Schema_CsdlBieu12 keep | PASS | **cấm** entity/migration XLS |
| Export green-assets branch | PASS | 15 cols · Int clumps · Dec grass |
| filter-all | PASS | page=1 · ExportPageSizeCap · ignore client page |
| Content-Type OOXML + `.xls` name | PASS | SA/Cục Wave1 chốt |
| BFF Forward export | PASS | binary stream |
| Import P0 | OUT | DEFER P1 · API exists unused by FE |

## Findings

| ID | Sev | Area | Summary | Disposition |
|----|-----|------|---------|-------------|
| — | — | — | **No P0/P1 blockers** | — |
| GAP-QA-E2E-PW-01 | P2 | QA | e2e-qa playwright resolve → chrome fallback | Carry |
| GAP-QA-ROAD-TESTID | P3 | QA | road SearchInput testid | Carry |
| DEBT-AUTH | P2 | SEC | Auth wire DEFER | Carry |
| DEBT-IMPORT-P1 | P2 | Scope | Import Excel OUT P0 | DEFER P1 |
| GAP-BIEU12-XLS-01…08 | — | XLS | Closed by Dev+QA | Closed |

## review_confirm

- **done** (autoApprove ON · `task_acb2eabe`)
- No fix_gaps — no P0/P1
- Pipeline Review XLS **complete** · qldb chain end for `csdl-bieu-12`

## Next

| Role | Need |
|------|------|
| — | **end** · no further role in qldb chain |

## Cấm respected

ERP.* · implement · e2e/build/start:std/Step4b @ Review · invent API · invent so-ts-green · reopen typed · filter-bar export · streaming · Import P0 · fix_gaps without P0/P1
