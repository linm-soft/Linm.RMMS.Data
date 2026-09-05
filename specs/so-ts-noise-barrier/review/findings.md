# Review — Findings — so-ts-noise-barrier

> Status: **confirmed** · autoApprove ON · task `task_2ba3134c` · `/agent-review`  
> contentHashPrior `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-noise-barrier` |
| Title | Sổ TS — Rào chắn ồn |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `NOISE_BARRIER` |
| prefix | `TC-` (GIS `TC`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=NOISE_BARRIER` |
| alias | `/so-ts-noise-barrier` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T10:15:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-noise-barrier.md` | done · build PASS |
| qa | `qa/scenarios.md` · screens | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · index alias | spot-check |
| BE | RoadAssetService · RoadAssetCatalogHandler · DOMAIN-MAP | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=NOISE_BARRIER` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP `noiseBarrierTypes` / `noiseBarrierVitriOptions` | **PASS** | `LoadDumpSpecLookupOptionsAsync` + seed · QA init 5/3 |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER GAP-NB-FLAT-01 |
| Q-04 | Soft DELETE · shared table tenant | **PASS** | `share_tenant` · xco_get_only |

**P0 QUERY:** none

---

## SEC

| ID | Check | Result | Note |
|----|-------|--------|------|
| S-01 | **cấm ERP.*** domain | **PASS** | DOMAIN-MAP `so-ts-noise-barrier` → Asset |
| S-02 | BFF proxy only · catalogKind road-assets | **PASS** | FE endpoint Asset |
| S-03 | Asset list/form **0** `window.confirm`/`alert` | **PASS** | LeaveConfirmModal + useAlert |
| S-04 | Auth permission align | **INFO** | DEFER (dev debt) · không block |
| S-05 | Gates tz_na · xco_get_only · share_tenant | **PASS** | SA compact |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile NOISE_BARRIER · ENSURE loại tường/cao/dài/tỉnh · kmTo ON | **PASS** | `NOISE_BARRIER_ENSURE_COLS` · hide kmTo removed |
| U-02 | Hide-empty vitri/xã · ẩn type/SL/ĐVT/ảnh | **PASS** | QA AC-G-05 |
| U-03 | Filter LinErpListFilterBar · kmTo · **0** nút Tìm riêng | **PASS** | QA filter + filter-bar.md |
| U-04 | Form Full page 5col · S-ATTR · S-LOC-RANGE · Loại tường* | **PASS** | live QA-20 · `asset-noise-barrier-attr` |
| U-05 | `name` optional · list primary = loại tường | **PASS** | FE validate + BE |
| U-06 | LeaveConfirmModal dirty leave | **PASS** | wired AssetFormPage |
| U-07 | Alias `/so-ts-noise-barrier` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-08 | Labels `actual_length` «thực tế» · `type_noise_barrier_id` | **PASS** | dumpSpecLabels |
| U-09 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-10 | Title «Sổ TS — Rào chắn ồn» · testid list | **PASS** | QA S0 |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(NOISE_BARRIER)=TC-` | **PASS** | RoadAssetService · GAP-NB-PREFIX-01 |
| B-02 | Validate: name optional · kmFrom* · `type_noise_barrier_id`* | **PASS** | ValidateRequired branch |
| B-03 | Import `ResolveNoiseBarrierName` · **cấm** IsWeak→đoạn | **PASS** | weak → `""` |
| B-04 | GIS short `TC` · dump `tbl_noise_barrier` | **PASS** | GisInventoryMapper |
| B-05 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-06 | Migration / Step 4b | **PASS** | none (SA) |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-NB-NAME-01 | yes |
| GAP-NB-LOOKUP-01 | yes |
| GAP-NB-PREFIX-01 | yes |
| GAP-NB-RANGE-01 | yes |
| GAP-NB-ROUTE-01 | yes |
| GAP-NB-FLAT-01 | DEFER P2 (accepted) |
| GAP-SOTS-COL/FORM/REUSE | yes (dev ssot_rereview) |

contentHash chain **stable** across analy→qa · không version_mismatch.

---

## Debt / info (không block)

| Gap | Note |
|-----|------|
| GAP-NB-FLAT-01 | Schema_* flatten DEFER P2 |
| Auth DEFER | permission align later |
| GAP-QA-E2E-PW-01 | headed e2e hang · chrome capture contract OK |
| GAP-QA-E2E-DOCKER-01 | compose `--build` required for LOOKUP |
| Seed `ON-…` legacy rows | create path `TC-` only |

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
