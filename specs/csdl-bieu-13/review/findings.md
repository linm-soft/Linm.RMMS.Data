# Review — Findings — csdl-bieu-13

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON · `task_007992c9`)  
> WrittenAt: `2026-09-18T01:30:00.000Z` · changeScope=`edit_page` · T-XLS-S13  
> Prior typed review `task_bdbf3809` **keep** · XLS delta only

| | |
|--|--|
| Feature | `csdl-bieu-13` |
| Title | CSDL Biểu 13 — Tường chống ồn · Xuất Excel |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| prior QA | **PASS** · S0/S1/QA-20 + export `.xls` · `task_7f930b9f` |
| prior Dev | **confirmed** · T-XLS-S13-BE/BFF/FE · `task_71b8eb1b` |
| verdict | **PASS** · no P0/P1 blocker |
| review_confirm | **approve** |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |

## Scope checked

- Compact priors: data_analy → po → design → sa → team_lead → dev → qa (all exist · UNCLEAR=none · hash align)
- FE: `CsdlBieu13Page` · `onExportExcel` catalogToolbar · `csdlService.exportExcel` · Import **ẩn** · **cấm** filter-bar export
- BE: `CsdlCatalogExcelService` Biểu 13 · 13 headers · `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · filter-all · BFF `/export`
- QA: e2e S0/S1/QA-20 + `Bieu13_TuongChongOn_20260918.xls` · typed CRUD **keep**
- Hash: contentHash match priors · headerFingerprint match · skip re-hash demo

## QUERY

| ID | Sev | Result | Note |
|----|-----|--------|------|
| Q-01 | — | **PASS** | List keep · `resource=noise-barriers` · typed prior |
| Q-02 | — | **PASS** | Export GET `…/csdl-records/export?resource=noise-barriers` + filter QS · **no page** (filter-all) |
| Q-03 | — | **PASS** | FE passes search/province/status/side/road/km/fromDate/toDate · empty=all tenant resource |
| Q-04 | — | **PASS** | Soft delete keep · export respects active list filter QS |
| Q-05 | P3 | **debt** | GAP-QA-ROAD-TESTID — road SearchInput testid shallow (non-block · keep) |

## SEC

| ID | Sev | Result | Note |
|----|-----|--------|------|
| S-01 | — | **PASS** | Domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| S-02 | — | **PASS** | BFF binary proxy only · no invent endpoint |
| S-03 | — | **PASS** | Export filtered by QS · no cross-resource dump |
| S-04 | DEFER | **debt** | Auth DEFER (pipeline-wide) |
| S-05 | — | **PASS** | share_tenant keep · IdCode `TC-` · peer merge **none** |

## UI-FN

| ID | Sev | Result | Note |
|----|-----|--------|------|
| U-01 | — | **PASS** | Typed Kind B+D Slideout **KEEP** · **cấm** reopen new_page |
| U-02 | — | **PASS** | catalogToolbar **+Xuất Excel** · testid `…-export-excel-btn` |
| U-03 | — | **PASS** | Import **DEFER P1 ẩn** · export_only_p0 |
| U-04 | — | **PASS** | **cấm** Xuất trên `LinErpListFilterBar` (GAP-FILTER-BAR-08) |
| U-05 | — | **PASS** | Toast success/fail real · empty file OK · **≠** stub done |
| U-06 | — | **PASS** | Filename fallback `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · QA download PASS |
| U-07 | — | **PASS** | Peer `so-ts-noise-barrier` cite only · **cấm** merge |
| U-08 | P2 | **debt** | GAP-CSDL-ORG-01 manageUnit P2 · keep |

## BE-FN

| ID | Sev | Result | Note |
|----|-----|--------|------|
| B-01 | — | **PASS** | Schema_CsdlBieu13 **KEEP** · entity/migration **none** @ XLS |
| B-02 | — | **PASS** | Sheet `Biểu 13` · **13** cols · lengthM/heightM/areaM2 cùng hàng · **cấm** dim sheet · **cấm** 12+8 |
| B-03 | — | **PASS** | Filename `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · Content-Type xlsx bytes + `.xls` ext (Wave1) |
| B-04 | — | **PASS** | filter-all · ignore client page · **cấm** streaming P0 |
| B-05 | — | **PASS** | BFF `api/v1/asset/csdl-records/export` mirror · binary |
| B-06 | — | **PASS** | Import POST **OUT P1** · **cấm** wire P0 |
| B-07 | — | **PASS** | DOMAIN-MAP Asset keep · **cấm** merge road-assets / so-ts-noise |

## Hash / version

| Check | Result |
|-------|--------|
| contentHash vs priors | **match** · skip re-hash demo |
| headerFingerprint | **match** |
| skill/workflow/rules | align · no version_mismatch |

## review_confirm

**approve** (autoApprove ON) · fix_gaps **none** · verdict **PASS**

## Debt (non-block)

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · GAP-CSDL-ORG-01 P2 · Auth DEFER · Import P1

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-13/review/findings.md` |
| compact | `specs/csdl-bieu-13/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-13/STATUS.md` |
| prior typed findings | keep history in git · superseded for XLS by this file |

## Next

- phase=`done` · pipeline XLS complete · **cấm** start role khác trong task này
