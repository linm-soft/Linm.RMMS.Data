# Review — Findings — so-ts-guardrail

> Status: **confirmed** · autoApprove ON · task `task_95bf1b20` · `/agent-review`  
> contentHashPrior `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-guardrail` |
| Title | Sổ TS — Hộ lan / tôn sóng |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `GUARDRAIL` |
| prefix | `HL-` (GIS `HL`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=GUARDRAIL` |
| alias | `/so-ts-guardrail` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T16:47:30.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-guardrail.md` · compact | done · build PASS |
| qa | `qa/scenarios.md` · screens · compact | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=GUARDRAIL` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP `guardrailTypes` / `guardrailMaterials` / `installationPurposes` + vitri | **PASS** | DTO + `LoadDumpSpecLookupOptionsAsync` · QA init |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER GAP-GUARDRAIL-FLAT-01 |
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
| S-06 | DOMAIN-MAP row `so-ts-guardrail` | **INFO** | thiếu slug riêng · inherit Asset OK · debt |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile GUARDRAIL · ENSURE loại/VL/phản quang/mục đích/dài | **PASS** | `GUARDRAIL_ENSURE_COLS` · kmTo ON |
| U-02 | Hide-empty vitri/địa danh · ẩn type/ảnh | **PASS** | HIDE profile · QA AC |
| U-03 | Filter LinErpListFilterBar · **0** nút Tìm riêng | **PASS** | filter-bar.md · QA |
| U-04 | Form Full page 5col · S-ATTR · S-LOC-RANGE · type_guardrail* | **PASS** | QA-20 · reflective Number |
| U-05 | `name` optional · list primary = type_guardrail | **PASS** | FE validate + BE |
| U-06 | LeaveConfirmModal dirty leave | **PASS** | wired AssetFormPage |
| U-07 | Alias `/so-ts-guardrail` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-08 | Labels `installation_purpose_id` · reflective SL | **PASS** | dumpSpecLabels |
| U-09 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-10 | Title «Sổ TS — Hộ lan / tôn sóng» · testid list | **PASS** | `rmms-so-ts-guardrail-list` |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(GUARDRAIL)=HL-` | **PASS** | RoadAssetService · GAP-GUARDRAIL-PREFIX-01 |
| B-02 | Validate: name optional · kmFrom* · `type_guardrail`* | **PASS** | ValidateRequired branch |
| B-03 | LOOKUP seed init-data 3 arrays | **PASS** | GuardrailType/Material/InstallationPurpose |
| B-04 | GIS short `HL` · dump `tbl_guardrail` · peer riêng NOISE_BARRIER | **PASS** | GisInventoryMapper |
| B-05 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-06 | Migration / Step 4b schema | **PASS** | none (SA) · init-data only |

**P0 BE-FN:** none

---

## Cross-role consistency

| Gap | Closed? |
|-----|---------|
| GAP-GUARDRAIL-LOOKUP-01 | yes |
| GAP-GUARDRAIL-NAME-01 | yes |
| GAP-GUARDRAIL-REFLECT-01 | yes |
| GAP-GUARDRAIL-PREFIX-01 | yes |
| GAP-GUARDRAIL-RANGE-01 | yes |
| GAP-GUARDRAIL-ROUTE-01 | yes |
| GAP-GUARDRAIL-PEER-01 | yes |
| GAP-GUARDRAIL-FLAT-01 | DEFER P2 (accepted) |
| GAP-SOTS-COL/FORM/REUSE | yes (dev) |

contentHash chain **stable** across analy→qa · không version_mismatch.

---

## Debt / info (không block)

| Gap | Note |
|-----|------|
| GAP-GUARDRAIL-FLAT-01 | Schema_* flatten DEFER P2 |
| Auth DEFER | permission align later |
| GAP-QA-E2E-PW-01 | headed e2e hang · chrome capture contract OK |
| DOMAIN-MAP | thêm row `so-ts-guardrail` → Asset (doc) |

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
