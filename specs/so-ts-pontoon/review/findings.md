# Review — Findings — so-ts-pontoon

> Status: **confirmed** · autoApprove ON · task `task_0d5fb47c` · `/agent-review`  
> contentHashPrior `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-pontoon` |
| Title | Sổ TS — Cầu phao |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` · GIS `cau-phao` · tile t05 |
| prefix | `CP-` (GIS `PON`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=PONTOON` |
| alias | `/so-ts-pontoon` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T19:30:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash · control-hint + real-data | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-pontoon.md` · compact | done · build PASS |
| qa | `qa/scenarios.md` · screens · compact | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=PONTOON` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP 2 arrays | **PASS** | pontoonWorkLevels · pontoonBridgeTypes |
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
| S-06 | DOMAIN-MAP inherit Asset | **PASS** | optional docs row · SA |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile PONTOON · ENSURE tên sông/cấp/rộng/dài/loại/tải trọng | **PASS** | `PONTOON_ENSURE_COLS` · QA grid |
| U-02 | Hide-empty type/ảnh · ẩn kmTo filter cols | **PASS** | `PONTOON_HIDE_COLS` · QA live-assert |
| U-03 | Filter LinErpListFilterBar · **0** nút Tìm riêng | **PASS** | filter-bar.md · QA |
| U-04 | Form Full page 5col · S-ATTR 7 keys | **PASS** | QA-20 · `asset-pontoon-attr` |
| U-05 | `name` optional · ← `name_pontoon_bridge` | **PASS** | FE + BE · cấm IsWeak |
| U-06 | Point: ẩn `kmTo` · kmFrom **không** required | **PASS** | AssetFormPage branch · QA |
| U-07 | LeaveConfirmModal dirty leave | **PASS** | reuse AssetFormPage |
| U-08 | Alias `/so-ts-pontoon` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-09 | dumpSpecLabels PONTOON keys + form VN labels | **PASS** | 7 key · GAP-PON-SPEC-01 |
| U-10 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-11 | Title «Sổ TS — Cầu phao» · testid list | **PASS** | `rmms-so-ts-pontoon-list` |
| U-12 | `pontoon_bridge_type_id` required form | **PASS** | Select required · BE validate |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(PONTOON)=CP-` | **PASS** | RoadAssetService · GAP-PON-PREFIX-01 |
| B-02 | Validate: name/kmFrom optional · `pontoon_bridge_type_id`* | **PASS** | ValidateRequired branch |
| B-03 | LOOKUP seed init-data 2 arrays | **PASS** | LoadDumpSpecLookupOptionsAsync |
| B-04 | name ← `name_pontoon_bridge` · cấm IsWeak→đoạn | **PASS** | dumpSpecLabels · PO/SA |
| B-05 | GIS short `PON` · dump `tbl_pontoon_bridge` · peer PONTOON only | **PASS** | GisInventoryMapper `cau-phao` |
| B-06 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-07 | Migration / Step 4b schema | **PASS** | none (SA) · dumpSpecs P1 |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-PON-LOOKUP-01 | yes |
| GAP-PON-NAME-01 | yes |
| GAP-PON-POINT-01 | yes |
| GAP-PON-PREFIX-01 | yes |
| GAP-PON-SPEC-01 | yes |
| GAP-PON-LEAVE-01 | yes (reuse) |
| GAP-PON-ROUTE-01 | yes (alias redirect) |
| GAP-SOTS-COL/FORM/REUSE | yes (dev) |
| flatten P2 | DEFER (accepted) |

contentHash chain **stable** across analy→qa · không version_mismatch.

---

## Debt / info (không block)

| Gap | Note |
|-----|------|
| flatten P2 | Schema_* flatten DEFER P2 |
| Auth DEFER | permission align later |
| GAP-QA-E2E-PW-01 | headed e2e hang · chrome capture contract OK |
| gov-vn count **2** | seed data OK per QA |

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
