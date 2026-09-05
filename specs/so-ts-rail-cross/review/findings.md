# Review — Findings — so-ts-rail-cross

> Status: **confirmed** · autoApprove ON · task `task_3ceada0d` · `/agent-review`  
> contentHashPrior `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-rail-cross` |
| Title | Sổ TS — Giao cắt đường sắt |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` · GIS `giao-duong-sat` · tile t15 |
| prefix | `DS-` (GIS `NG`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=RAIL_CROSS` |
| alias | `/so-ts-rail-cross` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T07:52:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash · control-hint + real-data | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-rail-cross.md` · compact | done · build PASS |
| qa | `qa/scenarios.md` · screens · compact | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=RAIL_CROSS` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP 2 arrays | **PASS** | railCrossProtectionTypes · railCrossTrafficControlMethods |
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
| U-01 | List profile RAIL_CROSS · ENSURE protection/traffic/waiting | **PASS** | `RAIL_CROSS_ENSURE_COLS` · QA grid |
| U-02 | Hide-empty type/kmTo/qty/unit · ẩn kmTo filter cols | **PASS** | `RAIL_CROSS_HIDE_COLS` · QA live-assert |
| U-03 | Filter LinErpListFilterBar · **0** nút Tìm riêng | **PASS** | filter-bar.md · QA |
| U-04 | Form Full page 5col · S-ATTR 4 keys | **PASS** | QA-20 · `asset-rail-cross-attr` |
| U-05 | `name` optional · ← `name_crossing` | **PASS** | FE + BE · cấm IsWeak |
| U-06 | Point: ẩn `kmTo` · kmFrom **không** required | **PASS** | AssetFormPage branch · QA |
| U-07 | LeaveConfirmModal dirty leave | **PASS** | reuse AssetFormPage |
| U-08 | Alias `/so-ts-rail-cross` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-09 | dumpSpecLabels RAIL_CROSS keys + form VN labels | **PASS** | traffic_control + shortest_waiting · GAP-RC-SPEC-01 |
| U-10 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-11 | Title «Sổ TS — Giao cắt đường sắt» · testid list | **PASS** | `rmms-so-ts-rail-cross-list` |
| U-12 | Dropdown protection/traffic init-data | **PASS** | Select · BE seed · QA |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(RAIL_CROSS)=DS-` | **PASS** | RoadAssetService · GAP-RC-PREFIX-01 |
| B-02 | Validate: name/kmFrom optional · route/status* | **PASS** | ValidateRequired branch |
| B-03 | LOOKUP seed init-data 2 arrays | **PASS** | LoadDumpSpecLookupOptionsAsync |
| B-04 | name ← `name_crossing` · cấm IsWeak→đoạn | **PASS** | dumpSpecLabels · PO/SA |
| B-05 | GIS short `NG` · dump `tbl_railway_crossing` · peer RAIL_CROSS only | **PASS** | GisInventoryMapper `giao-duong-sat` |
| B-06 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-07 | Migration / Step 4b schema | **PASS** | none (SA) · dumpSpecs P1 |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-RC-LOOKUP-01 | yes |
| GAP-RC-NAME-01 | yes |
| GAP-RC-POINT-01 | yes |
| GAP-RC-PREFIX-01 | yes |
| GAP-RC-SPEC-01 | yes |
| GAP-RC-LEAVE-01 | yes (reuse) |
| GAP-RC-ROUTE-01 | yes (alias redirect) |
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
| gov-vn count **144** | seed data OK per QA |

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
