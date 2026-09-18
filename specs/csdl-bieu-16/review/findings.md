# Review — Findings — csdl-bieu-16

| | |
|--|--|
| Feature | `csdl-bieu-16` |
| Title | CSDL Biểu 16 — Nút giao · T-XLS-S16 Xuất Excel |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT · flatten export |
| IdCode | `IX-` |
| taskId | `task_56742c1e` |
| priorQa | `task_3b290f2f` · verdict **PASS** · XLS `Bieu16_NutGiao_20260918.xls` |
| priorDev | `task_ba6998df` · yarn/dotnet **PASS** |
| priorTypedReview | `task_628c95a5` · **PASS** · **cấm** reopen typed |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| hashGate | **SKIP** (unchanged vs data_analy → qa edit_page chain) |
| review_confirm | **approve** (autoApprove ON) |
| verdict | **PASS** |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T03:25:00.000Z` |

## Scope checked

| Layer | Evidence |
|-------|----------|
| Compact chain | data_analy → po → design → sa → team_lead → dev → qa (all confirmed · edit_page) |
| FE | `CsdlBieu16Page.tsx` · `catalogToolbar.onExportExcel` · `csdlService.exportExcel` · Import **ẩn** · **cấm** filter-bar export |
| BE | `CsdlCatalogExcelService` · sheet «Biểu 16» · 39 headers · flatten 1 row/nhánh · `Bieu16_NutGiao_{yyyyMMdd}.xls` · Schema_CsdlBieu16 **KEEP** |
| BFF | `CsdlCatalogRecordsBffController` binary proxy `…/csdl-records/export` |
| QA | S0/S1/QA-20 PASS · live-assert `hasImport=false` · `filterBarHasExport=false` · fileName XLS ok |

## Hash gate

- contentHash / headerFingerprint **match** edit_page compact chain → **không** re-scan demo / data-analy.
- Typed 39 + branches[] **KEEP** · chỉ delta export.

---

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | CRUD list filter keep · typed join `CsdlBieu16` | **PASS** (prior) |
| Q-02 | — | Export GET `…/csdl-records/export?resource=interchanges` (+ filter QS · no page) · BFF binary · **không** ERP.* | **PASS** |
| Q-03 | — | Filtered scope: search/province/status/interchangeType/roadCode/kmMain/from–to forwarded FE→BE | **PASS** |
| Q-04 | — | Flatten query: 1 row/nhánh · 0 nhánh → 1 row branch* trống (header_blank) · **cấm** sheet Branch | **PASS** |
| Q-05 | — | Empty filter = all tenant resource · soft-delete not surfaced | **PASS** |
| Q-06 | info | Auth `RequirePermission` wire **DEFER** (debt keep) | **ACCEPT** debt |

**QUERY summary:** 0 blocker · 0 major.

---

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Domain Asset · DOMAIN-MAP · FE/BE **không** ERP.* | **PASS** |
| S-02 | — | Gates tz_na · xco_get_only · share_tenant — export inherit list XCO | **PASS** |
| S-03 | — | **Cấm** merge so-ts-interchange / road-assets vào export | **PASS** |
| S-04 | info | Permission reuse `asset.csdl-records.*` · wire DEFER | **ACCEPT** debt |
| S-05 | — | Import POST **OUT P1** · không mở write import P0 | **PASS** |

**SEC summary:** 0 blocker · 0 major.

---

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Typed Kind B+D Slideout 39 + BRANCH **KEEP** · **cấm** reopen | **PASS** (prior) |
| U-02 | — | `canExportExcel` + `onExportExcel` trên **catalogToolbar** · binary download | **PASS** |
| U-03 | — | **Cấm** Xuất trên `LinErpListFilterBar` (GAP-FILTER-BAR-08 / GAP-BIEU16-XLS-04) · QA `filterBarHasExport=false` | **PASS** |
| U-04 | — | Import **ẩn** (export_only_p0) · QA `hasImport=false` | **PASS** |
| U-05 | — | Toast: success / empty-header OK / fail error · **cấm** stub=done | **PASS** |
| U-06 | — | Filename fallback `Bieu16_NutGiao_{yyyyMMdd}.xls` · route_a + hub keep | **PASS** |
| U-07 | — | Export không dirty Leave · typed Leave/Form keep | **PASS** |

**UI-FN summary:** 0 blocker · 0 major.

---

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | `CsdlCatalogExcelService` sheet `Biểu 16` · `Bieu16ExportHeaders` 39 · **cấm** golden 12+8 | **PASS** |
| B-02 | — | Flatten 1 row/nhánh · empty branches → blank branch* row | **PASS** |
| B-03 | — | Filename `Bieu16_NutGiao_{yyyyMMdd}.xls` · Content-Disposition path | **PASS** |
| B-04 | — | BFF binary proxy QS forward · FormMode list/CRUD keep | **PASS** |
| B-05 | — | Schema_CsdlBieu16+Branch **KEEP** · **không** migration @ XLS | **PASS** |
| B-06 | — | Import API **OUT / DEFER P1** · T-XLS-S16-BE-02 | **PASS** (scoped out) |

**BE-FN summary:** 0 blocker · 0 major.

---

## GAP closure (T-XLS-S16)

| ID | Status |
|----|--------|
| GAP-BIEU16-XLS-01 | **CLOSED** · Toolbar Xuất binary |
| GAP-BIEU16-XLS-02 | **CLOSED** · Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | **CLOSED** · Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | **CLOSED** · Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | **CLOSED** · GET export (+ QS) |
| GAP-BIEU16-XLS-06 | **CLOSED** · 1 sheet 39 · flatten · header_blank |
| GAP-BIEU16-XLS-07 | **CLOSED** · Cấm merge peer/road-assets |

## Debt (accept · không fix_gaps)

| ID | Notes |
|----|-------|
| Auth wire | RequirePermission DEFER |
| Import P1 | T-XLS-S16-BE-02 OUT |

## review_confirm

- **approve** (autoApprove ON)
- fix_gaps: **none**
- open questions: **none**
- phase: **done** (Review last · edit_page T-XLS-S16)

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-16/review/findings.md` |
| compact | `specs/csdl-bieu-16/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-16/STATUS.md` |
| prior qa compact | `specs/csdl-bieu-16/handoff/qa-compact.md` |
