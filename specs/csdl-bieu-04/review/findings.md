# Review — Findings — csdl-bieu-04

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_87c39169`  
> Verdict: **PASS** · changeScope=`edit_page` · T-XLS-S04 · **cấm** implement / e2e / start:std

| | |
|--|--|
| Feature | `csdl-bieu-04` |
| Title | CSDL Biểu 04 — Cống các loại · Xuất Excel |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `culverts` · formNo `04` · columns `17` · IdCode `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| prior QA | **confirmed** · verdict PASS · e2e S0/S1/QA-20 · T-XLS-QA-01 PASS |
| yarnBuild / typecheck / dotnetBuild / e2eQa | **PASS** (STATUS · prior Dev/QA) |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| domain | **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T03:35:00.000Z` |
| priorReviewTask | `task_140e0d17` (typed new_page · hash `7498…` — **superseded** by XLS hash) |

---

## Gate summary

| Layer | Verdict | Notes |
|-------|---------|-------|
| QUERY | **PASS** | GET `…/csdl-records/export?resource=culverts` · filter QS · BFF binary · **0** ERP.* |
| SEC | **PASS** (debt) | T-PERM-01 RequirePermission stub DEFER · share_tenant · xco_get_only |
| UI-FN | **PASS** | catalogToolbar Xuất · Import DEFER ẩn · **0** Xuất trên LinErpListFilterBar · CRUD KEEP |
| BE-FN | **PASS** | `ExportAsync` culverts · sheet «Biểu 4» · filter-all · GPS four_xy · **cấm** peer merge |
| QA evidence | **PASS** | S0/S1/QA-20 · T-XLS-QA-01 · sha16 qa-compact |
| Hash | **re-review** | contentHash `eef182…` ≠ prior typed `7498…` · chain analy→qa compact **aligned** |

**review_confirm:** `approve` → **done** (autoApprove ON) · **0** fix_gaps blocking

---

## QUERY

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| Q-01 | API SSOT `api/v1/asset/csdl-records/export` · BFF proxy | **PASS** | Controller `Export` · BFF `BuildExportPath` · FE `endpoint.exportExcel` |
| Q-02 | `resource=culverts` · formNo `04` | **PASS** | FE RESOURCE · STATUS · branch CulvertsResource |
| Q-03 | Filter QS parity list · ignore page | **PASS** | FE passes search/province/status/roadCode/kmPoint/dates · BE filter-all page=1 cap |
| Q-04 | Filename `Bieu04_CongCacLoai_{yyyyMMdd}.xls` | **PASS** | BE `b4Name` · FE fallback culverts |
| Q-05 | **cấm ERP.*** FE/BE feature surface | **PASS** | Asset domain only · prior Grep / compact |
| Q-06 | Peer Sổ TS · **cấm** merge sheet | **PASS** | GAP-BIEU04-XLS-PEER comment · sheet Biểu 4 only |
| Q-07 | contentHash chain analy→qa | **PASS** | `eef182…` matches all prior compact |

---

## SEC

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| S-01 | Permission codes documented · wire DEFER | **PASS** (debt) | Controller TODO · T-PERM-01 |
| S-02 | Soft DELETE · CRUD KEEP | **PASS** | prior typed + QA KEEP |
| S-03 | Gates tz_na · xco_get_only · share_tenant | **PASS** | STATUS · sa-compact |
| S-04 | Export auth = read surface | **PASS** | `canExportExcel: perms.canRead` · no invent elev |
| S-05 | Tenant share · no cross-tenant invent | **PASS** | sa_shared_table=share_tenant |

---

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | Route keep `/csdl-bieu-04` + hub | **PASS** | route_confirm keep · S0/S1 QA |
| U-02 | catalogToolbar +Xuất Excel · testid export btn | **PASS** | `onExportExcel` · `buildRmmsGenericToolbar` · `…-export-excel-btn` |
| U-03 | Import DEFER P1 · **0** onImportExcel | **PASS** | comment DEFER · no canImportExcel |
| U-04 | **cấm** Xuất trên LinErpListFilterBar | **PASS** | GAP-FILTER-BAR-08 · export only toolbar |
| U-05 | Filter QS → export · toast success/fail · empty OK | **PASS** | `handleExportExcel` · empty headers toast · QA AC-XLS |
| U-06 | Typed 17 + Slideout KEEP · **cấm** reopen cols | **PASS** | form KEEP · QA-20 |
| U-07 | LeaveConfirm · **0** native alert | **PASS** | prior + useAlert pattern |
| U-08 | Peer deep-link only | **PASS** | GAP-BIEU04-XLS-PEER |

---

## BE-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| B-01 | `ExportAsync` culverts branch · OOXML | **PASS** | `CsdlCatalogExcelService` · BuildXlsx |
| B-02 | Sheet name «Biểu 4» · headers GPS four_xy | **PASS** | `Bieu4SheetName` · `Bieu4ExportHeaders` · gpsCulvert*/gpsRoad* |
| B-03 | filter-all · ignore client page/pageSize | **PASS** | page=1 · ExportPageSizeCap |
| B-04 | kmPoint QS bind | **PASS** | Controller + service param |
| B-05 | BFF binary proxy KEEP | **PASS** | `BuildExportPath` · no invent |
| B-06 | Import API DEFER · **0** new migration @ XLS | **PASS** | API-XLS-02 DEFER · migration none |
| B-07 | DOMAIN-MAP Asset · **cấm** invent so-ts export | **PASS** | sa T-DM · compact |

---

## QA cross-check

| Case | Result | sha16 |
|------|--------|-------|
| S0 list | PASS | `7711d52bfb8f8a33` |
| S1 hub | PASS | `7711d52bfb8f8a33` |
| QA-20 create | PASS | `f05a1b2dcc83eeb0` |
| T-XLS-QA-01 | PASS | qa-compact · AC-XLS-01..09 |

PNG: rely manifest + qa-compact (role **cấm** e2e / start:std).

---

## Debt (non-blocking)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | playwright resolve · chrome createRequire · **cấm** kill |
| T-PERM-01 Auth | DEFER | RequirePermission stub |
| GAP-CSDL-ORG-01 | P2 | manageUnit SearchInput org-unit |
| Import Excel | P1 | DEFER · UI ẩn |
| docker rebuild | ops | API+BFF rebuild for XLS ship (QA note) |

---

## Decisions

- `review_confirm` = **approve** (autoApprove ON)
- **0** fix_gaps blocking · pipeline review **confirmed**
- Typed CRUD KEEP · XLS export P0 closed · Import stays P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-04/review/findings.md` |
| meta | `specs/csdl-bieu-04/review/REVIEW-META.json` |
| compact | `specs/csdl-bieu-04/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-04/STATUS.md` |

## Next

- roleOnly=review **done** · mark `task_87c39169` completed
- **cấm** start role khác trong task này (GAP-PKT-ROLE-01)
