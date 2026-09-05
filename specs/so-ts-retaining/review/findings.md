# Review — Findings — so-ts-retaining

> Status: **confirmed** · autoApprove ON · task `task_17371c37` · `/agent-review`  
> contentHashPrior `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-retaining` |
| Title | Sổ TS — Kè / tường chắn |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `RETAINING` |
| dump | `tbl_retaining_wall` · GIS `tuong-chan` · tile t20 |
| prefix | `KE-` (GIS `KE`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=RETAINING` |
| alias | `/so-ts-retaining` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T01:26:30.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash · control-hint + real-data | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-retaining.md` · compact | done · build PASS |
| qa | `qa/scenarios.md` · screens · compact | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper · DOMAIN-MAP | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=RETAINING` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP 5 arrays | **PASS** | retainingWallTypes · materialTypes · foundationTypes · locationOptions · dumpAssetTypes |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER GAP-RETAINING-FLAT-01 |
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
| S-06 | DOMAIN-MAP row `so-ts-retaining` | **PASS** | → Asset |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile RETAINING · ENSURE loại tường/VL/dài/cao/phân đoạn/móng | **PASS** | `RETAINING_ENSURE_COLS` · kmTo ON |
| U-02 | Hide-empty vị trí/asset_type/địa danh · ẩn type | **PASS** | HIDE profile · QA live-assert |
| U-03 | Filter LinErpListFilterBar · **0** nút Tìm riêng | **PASS** | filter-bar.md · QA |
| U-04 | Form Full page 5col · S-ATTR · S-LOC-RANGE | **PASS** | QA-20 · `asset-retaining-attr` |
| U-05 | `name` optional · list primary = `retaining_wall_type_id` | **PASS** | FE + BE · cấm IsWeak |
| U-06 | LeaveConfirmModal dirty leave | **PASS** | reuse AssetFormPage |
| U-07 | Alias `/so-ts-retaining` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-08 | dumpSpecLabels RETAINING keys + form VN labels | **PASS** | 8 key · form hardcode labels |
| U-09 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-10 | Title «Sổ TS — Kè / tường chắn» · testid list | **PASS** | `rmms-so-ts-retaining-list` |
| U-11 | Create code placeholder «(tự sinh)» · prefix on save | **PASS** | live-assert `codePrefixKE=false` expected · QA-F-08 |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(RETAINING)=KE-` | **PASS** | RoadAssetService · GAP-RETAINING-PREFIX-01 |
| B-02 | Validate: name optional · kmFrom* · `retaining_wall_type_id`* | **PASS** | ValidateRequired branch |
| B-03 | LOOKUP seed init-data 5 arrays | **PASS** | LoadDumpSpecLookupOptionsAsync |
| B-04 | `ResolveRetainingName` · cấm IsWeak→đoạn | **PASS** | RoadAssetCatalogHandler |
| B-05 | GIS short `KE` · dump `tbl_retaining_wall` · peer RETAINING only | **PASS** | GisInventoryMapper · cấm gộp SLOPE_PROTECT |
| B-06 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-07 | Migration / Step 4b schema | **PASS** | none (SA) · dumpSpecs P1 |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-RETAINING-LOOKUP-01 | yes |
| GAP-RETAINING-NAME-01 | yes |
| GAP-RETAINING-ASSETTYPE-01 | yes |
| GAP-RETAINING-PREFIX-01 | yes |
| GAP-RETAINING-RANGE-01 | yes |
| GAP-RETAINING-SPEC-01 | yes |
| GAP-RETAINING-ROUTE-01 | yes |
| GAP-RETAINING-PEER-01 | yes |
| GAP-RETAINING-FLAT-01 | DEFER P2 (accepted) |
| GAP-SOTS-COL/FORM/REUSE | yes (dev) |

contentHash chain **stable** across analy→qa · không version_mismatch.

---

## Debt / info (không block)

| Gap | Note |
|-----|------|
| GAP-RETAINING-FLAT-01 | Schema_* flatten DEFER P2 |
| Auth DEFER | permission align later |
| GAP-QA-E2E-PW-01 | headed e2e hang · chrome capture contract OK |
| dumpSpecLabels shared | `number`/`location_id` generic map · form RETAINING override VN đúng |

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
