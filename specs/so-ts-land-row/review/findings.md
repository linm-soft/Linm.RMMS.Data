# Review — Findings — so-ts-land-row

| | |
|--|--|
| Feature | `so-ts-land-row` |
| Title | Sổ TS — Đất thuộc TS HT |
| Role | `review` · `/agent-review` |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **approve** (autoApprove ON) |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `LAND_ROW` |
| taskId | `task_e0cf058d` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T09:05:00.000Z` |
| hashSkip | unchanged vs prior compact chain |

## Scope reviewed

- Prior confirmed: data_analy → po → design → sa → team_lead → dev → qa
- Compacts: all present · versions align · no version_mismatch
- Code spot-check FE AssetList/Form + BE RoadAssetService/CatalogHandler + DOMAIN-MAP
- QA e2e S0/S1/QA-20 PASS · manifest ok · **cấm** re-run e2e/build ở Review

## QUERY

| Check | Result | Notes |
|-------|--------|-------|
| API path | **PASS** | `api/v1/asset/road-assets` · BFF proxy · **cấm** invent `api/v1/so-ts/*` |
| Domain | **PASS** | DOMAIN-MAP `so-ts-land-row` → Asset |
| Filter type | **PASS** | `type=LAND_ROW` · dump `tbl_land_btra` · tile t33 |
| Persist | **PASS** | scalars + dumpSpecs P1 · flatten Schema_* DEFER P2 |
| ERP.* | **PASS** | không dùng ERP.* |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| sa_tz_gate | **PASS** | `tz_na` |
| sa_xco_gate | **PASS** | `xco_get_only` |
| sa_shared_table | **PASS** | `share_tenant` |
| Auth | **INFO** | permission align DEFER (debt · không block) |
| Secrets / injection | **PASS** | reuse RoadAsset CRUD · dumpSpecs bag · no raw SQL invent |

## UI-FN

| Check | Result | Notes |
|-------|--------|-------|
| List profile | **PASS** | LAND_ROW ENSURE TT thửa/CQ/L/W/DT/xã/tỉnh · hide type/kmTo/qty |
| Filter bar | **PASS** | filter-bar.md V1–V5 · cấm nút Tìm riêng · QA T-QA-FILTER PASS |
| Form S-ATTR | **PASS** | dump §4 editable · `under_managemen` typo giữ · status_land_lot required |
| Range | **PASS** | S-LOC-RANGE · kmTo ẩn fill 0 · cấm ép `"0"` UI |
| name | **PASS** | ← construction · trống OK · cấm IsWeak→đoạn |
| Leave / Hist | **PASS** | LeaveConfirmModal · useAlert · 0 native dialog |
| Alias | **PASS** | `/so-ts-land-row` → Navigate `?type=LAND_ROW` · QA S1 PASS |
| Live assert | **PASS** | DTM 1280/768/375 · 0 overflowX (QA) |

## BE-FN

| Check | Result | Notes |
|-------|--------|-------|
| DefaultCodePrefix | **PASS** | `LAND_ROW` → `DT-` · GIS short `HT` giữ |
| Init LOOKUP | **PASS** | landLotStatuses · landExploitTypes · landAccessPavementTypes · landCrossSections · landBoolOptions |
| Validate | **PASS** | status_land_lot_id required · name/kmFrom optional · kmTo fill 0 |
| Import name | **PASS** | `ResolveLandRowName` ← construction · GAP-LAND-NAME-01 |
| Migration | **PASS** | none · Step 4b skip |

## Cross-role parity

| Gate | Result |
|------|--------|
| PO/Design Kind B · Full page 5col | **PASS** |
| SA decisions vs Dev ship | **PASS** |
| TL T-* vs Dev/QA evidence | **PASS** |
| QA verdict PASS · P0 none | **PASS** |

## Findings (severity)

| id | sev | area | note | disposition |
|----|-----|------|------|-------------|
| — | — | — | **P0/P1 none** | — |
| GAP-QA-E2E-HAF-01 | info | qa | deep-link 404 → index.html+popstate | accept · non-block |
| GAP-QA-E2E-DOCKER-01 | info | qa | :5101 vs :5111 docker gate | accept · non-block |
| GAP-QA-E2E-PW-01 | info | qa | headed login hung → chrome contract | accept · non-block |
| GAP-LAND-FLAT-01 | info | be | Schema_* flatten DEFER P2 | defer |
| Auth DEFER | info | sec | permission align | defer |

## review_confirm

**approve** — autoApprove ON · DoR PASS · không fix_gaps.

## Cấm (role)

implement · e2e / yarn build / start:std · Step 4b / migration · ERP.* · invent API · phase=done · GAP-PKT-ROLE-01

## Next

Pipeline feature complete sau Review · handoff compact đã ghi · **không** start role khác trong task này.
