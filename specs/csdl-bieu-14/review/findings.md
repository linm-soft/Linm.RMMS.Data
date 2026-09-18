# Review — Findings — csdl-bieu-14

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON · `task_85081249`)  
> WrittenAt: `2026-09-18T09:05:00.000Z` · changeScope=`edit_page` (T-XLS-S14) · prior typed `task_1b0469b6` **keep**

| | |
|--|--|
| Feature | `csdl-bieu-14` |
| Title | CSDL Biểu 14 — Hệ thống ITS (GTTM) · Xuất Excel |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| prior QA | **PASS** · S0/S1/QA-20 + export · `task_fae5cc8a` |
| prior Dev | **PASS** · `task_5163dcca` |
| prior typed review | **keep** · `task_1b0469b6` |
| verdict | **PASS** · no P0/P1 blocker |
| review_confirm | **approve** |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |

## Scope checked

- Compact priors: data_analy → po → design → sa → team_lead → dev → qa (all exist · UNCLEAR=none · hash align)
- Delta XLS only · typed CRUD/Schema_CsdlBieu14 **keep** · **cấm** reopen new_page
- FE: `CsdlBieu14Page` · catalogToolbar `canExportExcel` · filter QS · Import DEFER ẩn · **cấm** filter-bar export
- BE: `CsdlCatalogExcelService` its-systems · sheet `Biểu 14` · 21 headers · `Bieu14_HeThongITS_{yyyyMMdd}.xls` · BFF binary proxy
- QA evidence: e2e S0/S1/QA-20 + export filename lock PASS · qa-compact

## QUERY

| ID | Sev | Result | Note |
|----|-----|--------|------|
| Q-01 | — | **PASS** | List keep `resource=its-systems` · typed filters unchanged |
| Q-02 | — | **PASS** | Export GET `…/csdl-records/export?resource=its-systems` (+ filter QS · no page) · filtered scope |
| Q-03 | — | **PASS** | Empty filter = all tenant resource · empty file OK (header-only toast) |
| Q-04 | — | **PASS** | deviceType filter respected on export path · 1 sheet flat rows |
| Q-05 | P3 | **debt** | GAP-QA-ROAD-TESTID — road SearchInput testid shallow (carry typed) |

## SEC

| ID | Sev | Result | Note |
|----|-----|--------|------|
| S-01 | — | **PASS** | Domain **Asset** · export API `api/v1/asset/csdl-records/export` · **cấm ERP.*** |
| S-02 | — | **PASS** | BFF binary proxy only · permissions inherit list XCO (`xco_get_only`) |
| S-03 | — | **PASS** | Soft delete list scope · export active catalog · no hard wipe |
| S-04 | DEFER | **debt** | Auth DEFER (pipeline-wide · not introduced by XLS) |
| S-05 | — | **PASS** | `share_tenant` · IdCode `IT-` · no peer/AiVision merge into export |

## UI-FN

| ID | Sev | Result | Note |
|----|-----|--------|------|
| U-01 | — | **PASS** | Typed Kind B+D Slideout 21 **keep** · Z1–Z3 unchanged |
| U-02 | — | **PASS** | Toolbar **Xuất Excel** on catalogToolbar · binary download (not toast-stub alone) |
| U-03 | — | **PASS** | **0** Xuất on `LinErpListFilterBar` (GAP-FILTER-BAR-08 / GAP-BIEU14-XLS-04) |
| U-04 | — | **PASS** | Import **ẩn** P1 · export_only_p0 |
| U-05 | — | **PASS** | Fail → error toast · empty → success header-only message · export không dirty Leave |
| U-06 | — | **PASS** | QA S0/S1/QA-20 + S-XLS-EXPORT PASS · testid `…-export-excel-btn` |
| U-07 | P2 | **debt** | GAP-CSDL-ORG-01 manageUnit P2 · Import P1 · peer merge none_p1 |

## BE-FN

| ID | Sev | Result | Note |
|----|-----|--------|------|
| B-01 | — | **PASS** | Schema_CsdlBieu14 **keep** · migration **none** @ XLS |
| B-02 | — | **PASS** | Export 21 cols one_sheet · device+infra+GPS cùng hàng · sheet `Biểu 14` · **cấm** 12+8 · **cấm** sheet TB/HT |
| B-03 | — | **PASS** | Filename `Bieu14_HeThongITS_{yyyyMMdd}.xls` · ContentType ooxml · QA runtime verified |
| B-04 | — | **PASS** | BFF `…/csdl-records/export` mirror · no streaming P0 |
| B-05 | — | **PASS** | **cấm** merge so-ts-its-camera / road-assets / AiVision vào export |
| B-06 | — | **PASS** | Import API OUT P1 · BE-02 OUT · typed RequireItsSystemsTyped keep |

## Hash / version

| Check | Result |
|-------|--------|
| contentHash vs priors | **match** · `e9a062f1…` · skip re-hash demo |
| headerFingerprint | **match** · `14cd156a…` |
| skill/workflow/rules | align · no version_mismatch |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **approve** |
| reason | XLS chain confirmed · Dev+QA PASS · QUERY/SEC/UI-FN/BE-FN no P0/P1 · autoApprove ON |
| fix_gaps | **none** |
| next | phase=`done` · pipeline complete |

## Debt (carry · non-block)

- GAP-QA-E2E-PW-01 P2 — chrome createRequire fallback
- GAP-QA-ROAD-TESTID P3
- GAP-CSDL-ORG-01 P2 · Auth DEFER · Import P1 · peer merge none_p1
- GAP-BIEU14-XLS-* closed on P0 (toolbar/binary/golden/filter-bar/path/21/merge)

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-14/review/findings.md` |
| compact | `specs/csdl-bieu-14/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-14/STATUS.md` |
| QA compact | `specs/csdl-bieu-14/handoff/qa-compact.md` |
