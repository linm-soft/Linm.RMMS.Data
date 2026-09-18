# Review — Findings — csdl-bieu-10

| | |
|--|--|
| Feature | `csdl-bieu-10` |
| Title | CSDL Biểu 10 — Kè, tường chắn · T-XLS-S10 |
| Role | `review` · `/agent-review` |
| TaskId | `task_e88921b9` |
| Prior QA | `task_1269f635` |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `edit_page` |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` · **changed vs typed** · full gate |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T06:50:00.000Z` |

## Scope reviewed

| Layer | Evidence |
|-------|----------|
| Prior | data_analy→po→design→sa→TL→dev→qa **confirmed** · compact OK · UNCLEAR none · Q-XLS-* chốt |
| FE | `CsdlBieu10Page` catalogToolbar Xuất/Nhập · filter QS (+wallKind) · `endpoint` filename `Bieu10_KeTuongChan_{yyyyMMdd}.xls` · **cấm** filter-bar export |
| BE | `CsdlCatalogExcelService` sheet Biểu 10 · 21 cols · heightM↔WidthM · Schema_CsdlBieu10 KEEP · DOMAIN-MAP Asset |
| QA | S0/S1/QA-20 PASS · export evidence · typecheck PASS · qa-compact |
| Build | buildMfe PASS · buildBe PASS (prior Dev) · **cấm** re-build @ Review |

## Gate summary

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** (Auth DEFER — debt) |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Hash | **full** (edit_page XLS delta · hash ≠ typed prior) |
| ERP.* | **PASS** — domain Asset only |
| review_confirm | **done** |

## QUERY

| Check | Result | Note |
|-------|--------|------|
| resource=`retaining-walls` | PASS | FE + BE + hub |
| API `asset/csdl-records` CRUD KEEP | PASS | **cấm** invent / ERP.* |
| API-XLS-01 GET …/export | PASS | + filter QS · wallKind · ignore page |
| API-XLS-02 POST …/import | PASS | multipart · import_now · upsert by code |
| BFF proxy only | PASS | binary/multipart · no height remap @ BFF |
| Filename | PASS | `Bieu10_KeTuongChan_{yyyyMMdd}.xls` |
| heightM↔WidthM | PASS | Excel/Create HeightM → entity WidthM |
| formNo=10 · IdCode KE- | PASS | typed KEEP |

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain Asset | PASS | DOMAIN-MAP `csdl-bieu-10`→Asset |
| **cấm** ERP.* | PASS | no ERP namespace |
| Auth/perm | DEFER | T-PERM debt · not blocker |
| Soft DELETE | PASS | catalog pattern KEEP |
| share_tenant / tz_na / xco_get_only | PASS | SA gates KEEP |

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| Alias `/csdl-bieu-10` · hub | PASS | route + resource map |
| Toolbar Xuất/Nhập | PASS | `…-export-excel-btn` · `…-import-excel-btn` |
| GAP-FILTER-BAR-08 | PASS | **0** Xuất on LinErpListFilterBar |
| Q-XLS-SCOPE filtered | PASS | export inherits list filters + wallKind |
| Typed 21/2 KEEP | PASS | **cấm** reopen new_page |
| Kind D Slideout · LeaveConfirm | PASS | prior typed |
| Peer toolbar ≠ merge | PASS | `/so-ts-retaining` |
| QA e2e S0/S1/QA-20 + XLS | PASS | qa-compact · T-XLS-QA-01 |

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Schema_CsdlBieu10 KEEP | PASS | **cấm** new migration @ XLS |
| Sheet Biểu 10 · 21 cols | PASS | **cấm** 12+8 · **cấm** 2-sheet |
| crest* cùng hàng | PASS | one_sheet_21 |
| height_alias | PASS | Pick heightM/widthM · Create.HeightM |
| WallKind normalize | PASS | allowlist import |
| Filename stamp | PASS | `Bieu10_KeTuongChan_{yyyyMMdd}.xls` |

## Findings

| ID | Sev | Area | Summary | Disposition |
|----|-----|------|---------|-------------|
| — | — | — | **No P0/P1 blockers** | — |
| GAP-QA-E2E-PW-01 | P2 | QA | e2e-qa playwright resolve → chrome createRequire | Carry debt |
| DEBT-MIGRATE | P2 | BE | DB migrate apply (env) prior typed | Carry · not Review block |
| DEBT-AUTH | P2 | SEC | Auth wire DEFER | Carry |
| DEBT-ORG | P2 | Scope | org SearchInput P2 | Carry |

## Consistency (prior roles)

| Role | Align |
|------|-------|
| data_analy / po / design / sa / TL | contentHash match · Q-XLS-* · GAP-BIEU10-XLS-01…07 |
| Dev | T-XLS-* done · yarn/dotnet PASS · height_alias · filtered export |
| QA | verdict PASS · export `Bieu10_KeTuongChan_*.xls` · handoff Review |

## review_confirm

**done** — edit_page T-XLS-S10 Review PASS · **cấm** fix_gaps (no P0/P1).

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-10/review/findings.md` |
| compact | `specs/csdl-bieu-10/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-10/STATUS.md` |
| QA screens | `specs/csdl-bieu-10/qa/screens/` |

## Next

| Role | Need |
|------|------|
| — | **Pipeline end** (Review last · roleOnly) · debt tracked · **cấm** start role khác |

## Cấm

ERP.* · implement @ Review · e2e/start:std/build @ Review · Step 4b/migration @ Review · invent API · filter-bar export · 12+8 · 2-sheet · reopen typed · phase reopen without GAP
