# Review — Findings — so-ts-weigh-station

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_96836e39`  
> Role: `/agent-review` · packKind=`list` · changeScope=`new_page`

| | |
|--|--|
| Feature | `so-ts-weigh-station` |
| Title | Sổ TS — Trạm kiểm soát tải |
| typeCode | `WEIGH_STATION` · dump `weight_station` · prefix `TFP-` |
| API | `api/v1/asset/road-assets` · domain **Asset** · **cấm ERP.*** |
| Prior | data_analy→po→design→sa→tl→dev→qa **confirmed** |
| contentHashPrior | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` (unchanged · hash skip) |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T13:36:12.000Z` |

## Verdict

| Gate | Result | Notes |
|------|--------|-------|
| **QUERY** | **PASS** | FE/BE dùng `api/v1/asset/road-assets` (+ init-data) · **0** `ERP.*` · **0** invent `api/v1/so-ts/*` |
| **SEC** | **PASS** | soft DELETE reuse · `share_tenant` / company claim · Auth perm DEFER (debt) · **0** secret leak |
| **UI-FN** | **PASS** | List profile WEIGH · ensure/hide-empty cols · kmTo ẩn · name←station_name · LeaveConfirmModal · alias Navigate · form 5col S-ATTR · QA S0/S1/QA-20 PASS |
| **BE-FN** | **PASS** | ValidateRequired WEIGH (name/kmFrom optional) · ResolveWeighStationName · TFP- · weigh* LOOKUP_STATIC init-data · dumpSpecs P1 |
| **review_confirm** | **done** | autoApprove ON · P0 none · fix_gaps=no |

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Path giữ `road-assets` | PASS | MFE `endpoint.ts` · BE `RoadAssetService` |
| Cấm ERP.* / invent so-ts | PASS | Grep MFE Asset pages · compact chain |
| Init-data delta weigh* | PASS | `weighManagementUnits` · `weighEquipmentTypes` · `weighPavementTypes` · `weighBoolOptions` |
| Prefix TFP- | PASS | BE `GetIdCodePrefix` WEIGH → `TFP-` (GAP-WEIGH-PREFIX-01) |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| Soft delete + alert Modal | PASS | AssetListPage reuse · QA-23 |
| Tenant / company | PASS | SA gate `share_tenant` · existing `IsCompanyAllowed` |
| Auth surface | DEFER | Auth perm codes DEFER (dev debt · không P0) |
| Native confirm | PASS | LeaveConfirmModal + useAlert · 0 `window.confirm` Asset* |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Grid ON+hide-empty TB/tải/ĐVQL/DT · length OFF | PASS | `WEIGH_STATION_ENSURE_COLS` / `HIDE_COLS` |
| Form kmTo ẩn · 5col · S-ATTR weigh | PASS | AssetFormPage · QA-20 live |
| name ← station_name · label Tên trạm | PASS | dumpSpecs merge · dumpSpecLabels |
| LeaveConfirmModal | PASS | wired AssetFormPage |
| Alias `/so-ts-weigh-station` | PASS | `index.tsx` Navigate · QA S1 |
| Filter-bar V1–V5 | PASS | `so-ts-weigh-station-filter-bar.md` · QA FILTER |
| testid page | PASS | `rmms-so-ts-weigh-station-list` + `-page` suffix |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| GAP-WEIGH-NAME/POINT | PASS | ValidateRequired early-return WEIGH · ResolveWeighStationName |
| LOOKUP_STATIC seeds | PASS | RoadAssetService weigh* seeds · empty DB seed OK P1 (QA) |
| No Schema_* flatten | PASS | dumpSpecs P1 · GAP-WEIGH-FLAT-01 defer P2 |
| Migration | none | SA/TL/Dev aligned |

## Debt / GAP (non-blocking)

| ID | Sev | Notes |
|----|-----|-------|
| GAP-WEIGH-FLAT-01 | P2 | flatten Schema_* defer |
| GAP-WEIGH-LOOKUP-01 | info | LOOKUP_STATIC chốt · seed empty runtime OK P1 |
| GAP-QA-E2E-PW-01 | info | yarn e2e-qa hung login · chrome contract |
| GAP-QA-E2E-HAF-01 | info | deep-link HTTP 404 · index.html+popstate |
| GAP-QA-E2E-DOCKER-01 | info | gate :5101 vs compose :5111 |
| Auth DEFER | P2 | perm codes |

## Hash

- data-analy contentHash **unchanged** across confirmed priors → **skip** re-hash gate.
- headerFingerprintPrior `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de`

## Cấm (role)

implement · e2e / yarn build / start:std · Step 4b / migration · GAP-PKT-ROLE-01 (không start role khác)

## Next

Pipeline complete for implement chain · phase stays post-review (không `phase=done` board) · compact `handoff/review-compact.md`.
