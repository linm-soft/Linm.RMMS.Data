# Review — Findings — so-ts-row-util

> Status: **confirmed** · autoApprove ON · task `task_0b075ef1` · `/agent-review`  
> contentHashPrior `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-row-util` |
| Title | Sổ TS — CT HTKT trong HL |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` · GIS `htkt` · tile t08 |
| prefix | `HT-` (GIS `HT` giữ) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=ROW_UTIL` |
| alias | `/so-ts-row-util` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T08:15:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash · control-hint + real-data | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-row-util.md` · compact | done · build PASS |
| qa | `qa/scenarios.md` · screens · compact | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=ROW_UTIL` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP 6 arrays | **PASS** | rowUtilWorkTypes · LocatedWithin · ProtectionTypes · SupportTypes · HiringStatuses · CrossSections |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER flatten P2 |
| Q-04 | Soft DELETE · shared table tenant | **PASS** | `share_tenant` · xco_get_only |

**P0 QUERY:** none

---

## SEC

| ID | Check | Result | Note |
|----|-------|--------|------|
| S-01 | **cấm ERP.*** domain | **PASS** | FE/BE Asset `road-assets` only |
| S-02 | BFF proxy only · catalogKind road-assets | **PASS** | FE endpoint Asset |
| S-03 | Asset list/form **0** native dialog | **PASS** | LeaveConfirmModal + useAlert · QA |
| S-04 | Auth permission align | **INFO** | DEFER · không block |
| S-05 | Gates tz_na · xco_get_only · share_tenant | **PASS** | SA compact |
| S-06 | DOMAIN-MAP inherit Asset | **PASS** | SA |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile ROW_UTIL · ENSURE type_work/length/number_post/owner | **PASS** | `ROW_UTIL_ENSURE_COLS` · QA grid |
| U-02 | Hide-empty type/SL/ĐVT · hiện kmTo filter cols | **PASS** | `ROW_UTIL_HIDE_COLS` · QA live-assert |
| U-03 | Filter LinErpListFilterBar · **0** nút Tìm riêng | **PASS** | filter-bar.md · QA |
| U-04 | Form Full page 5col · S-ATTR 13 keys | **PASS** | QA-20 · `asset-row-util-attr` |
| U-05 | `name` optional · ← `tencongtrinh_htk` | **PASS** | FE + BE · cấm IsWeak |
| U-06 | Range: **hiện** kmFrom+kmTo · optional khi trống | **PASS** | AssetFormPage · GAP-ROWUTIL-RANGE-01 · QA |
| U-07 | LeaveConfirmModal dirty leave | **PASS** | reuse AssetFormPage |
| U-08 | Alias `/so-ts-row-util` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-09 | dumpSpecLabels ROW_UTIL keys + form VN labels | **PASS** | tencongtrinh_htk · number_post · GAP-ROWUTIL-SPEC-01 |
| U-10 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-11 | Title «Sổ TS — CT HTKT trong HL» · testid list | **PASS** | `rmms-so-ts-row-util-list` |
| U-12 | Dropdown 6 LOOKUP init-data | **PASS** | Select · BE seed · QA |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(ROW_UTIL)=HT-` | **PASS** | RoadAssetService · GAP-ROWUTIL-PREFIX-01 |
| B-02 | Validate: name/kmFrom/kmTo optional · type_work_id required | **PASS** | ValidateRequired branch |
| B-03 | LOOKUP seed init-data 6 arrays | **PASS** | LoadDumpSpecLookupOptionsAsync |
| B-04 | name ← `tencongtrinh_htk` · cấm IsWeak→đoạn | **PASS** | RoadAssetCatalogHandler · dumpSpecLabels |
| B-05 | GIS short `HT` · dump `tbl_infrastructure_row` · peer ROW_UTIL only | **PASS** | GisInventoryMapper `htkt` |
| B-06 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-07 | Migration / Step 4b schema | **PASS** | none (SA) · dumpSpecs P1 |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-ROWUTIL-LOOKUP-01 | yes |
| GAP-ROWUTIL-NAME-01 | yes |
| GAP-ROWUTIL-RANGE-01 | yes |
| GAP-ROWUTIL-PREFIX-01 | yes |
| GAP-ROWUTIL-SPEC-01 | yes |
| GAP-ROWUTIL-GRID-01 | yes (QA fix) |
| GAP-ROWUTIL-ROUTE-01 | yes (alias redirect) |
| GAP-SOTS-COL/FORM/REUSE | yes (dev) |
| flatten P2 | DEFER (accepted) |

contentHash chain **stable** across analy→qa · không version_mismatch.

---

## Debt / info (không block)

| Gap | Note |
|-----|------|
| flatten P2 | Schema_* flatten DEFER P2 |
| hide-empty runtime | peer parity DEFER |
| Auth DEFER | permission align later |
| GAP-QA-E2E-PW-01 | headed e2e hang · chrome capture contract OK |

---

## Verdict

| Gate | Result |
|------|--------|
| QUERY | PASS · 0 P0 |
| SEC | PASS · 0 P0 |
| UI-FN | PASS · 0 P0 |
| BE-FN | PASS · 0 P0 |
| QA prior | PASS |
| **review_confirm** | **done** (autoApprove ON) |

## Next

Pipeline review **confirmed** · chain tiếp theo theo orchestrator (không start role khác trong task này · GAP-PKT-ROLE-01).
