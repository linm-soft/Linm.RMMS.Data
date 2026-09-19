# Review — Findings — csdl-bieu-05

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_0a8478f7`  
> Verdict: **PASS** · contentHash chain OK · **cấm** implement / e2e / start:std @ role này

| | |
|--|--|
| Feature | `csdl-bieu-05` |
| Title | CSDL Biểu 05 — Rãnh các loại · Wave 1 Xuất Excel |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` · T-XLS-S05 |
| resource | `ditches` · formNo `05` · columns `18` · IdCode `RN-` |
| peerSoTs | `so-ts-ditch` |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| prior QA | **confirmed** · verdict PASS · e2e S0/S1/QA-20 · sha16 d06efdfff922db25 / b03f59bbe2f24a08 / d8d9db75735bd595 |
| yarnBuild / typecheck / dotnetBuild | **PASS** (dev-compact · STATUS) |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| domain | **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T04:09:28.640Z` |

---

## Gate summary

| Layer | Verdict | Notes |
|-------|---------|-------|
| QUERY | **PASS** | GET export `resource=ditches` · filter QS · filter-all (ignore page) · **0** ERP.* |
| SEC | **PASS** (debt) | Auth DEFER T-PERM-01 · soft DELETE keep · share_tenant · xco_get_only · tz_na |
| UI-FN | **PASS** | catalogToolbar Xuất · Import ẩn · **0** Xuất trên LinErpListFilterBar · typed 18 KEEP |
| BE-FN | **PASS** | sheet «Biểu 5» · 18 cols · `.xls` filename · peer no-merge · BFF binary |
| QA evidence | **PASS** | T-XLS-QA-01 · AC-XLS-01..09 · S0/S1/QA-20 PNG |
| Hash | **chain OK** | contentHash == analy→qa compact · **cấm** reopen data-analy |

**review_confirm:** `approve` → **done** (autoApprove ON) · **0** fix_gaps blocking

---

## QUERY

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| Q-01 | API SSOT `api/v1/asset/csdl-records/export` · BFF binary | **PASS** | endpoint.ts `getBlob` · API-XLS-01 · sa/dev |
| Q-02 | `resource=ditches` · formNo 05 | **PASS** | FE RESOURCE · CsdlCatalogExcelService DitchesResource |
| Q-03 | Export filter QS = list (search/province/status/road/km/ditchKind/dates) | **PASS** | handleExportExcel params · ExportAsync args |
| Q-04 | filter-all · ignore client page/pageSize | **PASS** | BE `page=1, ExportPageSizeCap` comment filter-all |
| Q-05 | **cấm ERP.*** FE/BE feature surface | **PASS** | domain Asset · prior compact chain |
| Q-06 | Typed CRUD KEEP · **cấm** reopen 18-col invent | **PASS** | changeScope edit_page · TL/dev/qa |
| Q-07 | contentHash chain | **PASS** | `9e3e8cf8…` matches analy→qa |
| Q-08 | Peer **cấm** merge so-ts-ditch vào sheet | **PASS** | GAP-BIEU05-XLS-PEER · BE comment sheet Biểu 5 only |

---

## SEC

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| S-01 | Permission · Export gated canRead · wire DEFER | **PASS** (debt) | `canExportExcel: perms.canRead` · T-PERM-01 |
| S-02 | Soft DELETE keep · no hard wipe | **PASS** | typed prior KEEP |
| S-03 | Gates tz_na · xco_get_only · share_tenant | **PASS** | sa-compact |
| S-04 | Toast fail/success · **cấm** stub=done · **0** native alert | **PASS** | dispatchAppToast export · useAlert delete |
| S-05 | Import P0 ẩn · no open import surface | **PASS** | **cấm** onImportExcel/canImportExcel |

---

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | Route keep `/csdl-bieu-05` + hub `?resource=ditches` | **PASS** | TL route_confirm keep · QA S0/S1 |
| U-02 | catalogToolbar Xuất Excel · testid `…-export-excel-btn` | **PASS** | onExportExcel · buildRmmsGenericToolbar |
| U-03 | **0** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08) | **PASS** | filter bar = filters only · export in toolbar |
| U-04 | Import DEFER P1 ẩn | **PASS** | comment cấm onImportExcel · QA PASS |
| U-05 | Filename FE fallback `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` | **PASS** | endpoint.ts ditches branch |
| U-06 | Empty export toast OK (header-only) | **PASS** | totalCount===0 message |
| U-07 | Typed Kind B/D · 18 cols · ditchKind/shape/range KEEP | **PASS** | QA-20 · AC-GRID regression |
| U-08 | peer deep-link only · **cấm** gộp sheet | **PASS** | GAP-BIEU05-XLS-PEER |

---

## BE-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| B-01 | Sheet name «Biểu 5» · 18 headers | **PASS** | Bieu5SheetName · Bieu5ExportHeaders ditchKind/shape/range |
| B-02 | Filename `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` (SA chốt `.xls`) | **PASS** | CsdlCatalogExcelService line ~475 |
| B-03 | filter-all + ditchKind QS | **PASS** | GetListAsync page=1 + ditchKind arg |
| B-04 | **cấm** 12+8 hồ sơ layout | **PASS** | 18-col export · golden Biểu 5 |
| B-05 | **cấm** streaming P0 | **PASS** | sa decision · single GetListAsync |
| B-06 | BFF binary proxy KEEP · no new migration | **PASS** | T-XLS-BFF-01 · migration none |
| B-07 | Import API DEFER P1 | **PASS** | T-OUT-01 DEFER · API-XLS-02 |
| B-08 | docker rebuild note (Dev ship) | **PASS** (ops) | qa-compact debt · not blocking Review |

---

## Cross-role consistency

| Gate | Result |
|------|--------|
| Q-XLS-SCOPE=filtered | **PASS** · FE QS + BE filter |
| Q-XLS-IMPORT=export_only_p0 | **PASS** · Import ẩn |
| Q-XLS-FILENAME=.xls | **PASS** · SA override PO `.xlsx` · FE+BE align |
| GAP-FILTER-BAR-08 | **PASS** |
| GAP-BIEU05-XLS-PEER | **PASS** |
| AC-XLS-01..09 · T-XLS-QA-01 | **PASS** (qa-compact) |
| Versions skill/workflow/rules | **align** 2026.09.05.03 / 2026.09.05.03 / 2026.09.17.3 |

---

## Debt (non-blocking)

- T-PERM-01 Auth wire DEFER
- T-OUT-01 / API-XLS-02 Import P1
- GAP-CSDL-ORG-01 ORG P2
- GAP-QA-E2E-PW-01 P2 (playwright resolve via chrome createRequire)
- docker rebuild API+BFF for Dev XLS ship (ops)

## fix_gaps

- (none)

## Next

- Pipeline **done** @ review · e2eQa already PASS @ QA · **cấm** re-run e2e @ Review  
- STATUS → review **confirmed** · phase complete for roleOnly=review
