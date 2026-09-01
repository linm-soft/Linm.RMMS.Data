# Review — Findings — so-ts-station-house

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_45093d3f`  
> Written: `2026-09-01T02:00:00.000Z` · contentHash prior unchanged

| | |
|--|--|
| Feature | `so-ts-station-house` |
| Title | Sổ TS — Nhà hạt QLĐB |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| prefix | `NH-` |
| verdict | **PASS** |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` (unchanged → hash skip OK) |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |

## Prior chain (all confirmed)

| Role | Compact | Gate |
|------|---------|------|
| data_analy | handoff/data_analy-compact.md | control-hint + real-data exist |
| po | handoff/po-compact.md | open Q none |
| design | handoff/design-compact.md | design_confirm=approve |
| sa | handoff/sa-compact.md | solution_confirm=approve · tz_na · xco_get_only · share_tenant |
| team_lead | handoff/team_lead-compact.md | route_a |
| dev | handoff/dev-compact.md | yarnBuild/dotnetBuild PASS · migration none |
| qa | handoff/qa-compact.md | e2eQa PASS · P0 none |

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| API path giữ `api/v1/asset/road-assets` | **PASS** | FE endpoint + SA/Dev compact · **cấm** invent `api/v1/so-ts/*` |
| Domain Asset · **cấm ERP.*** | **PASS** | DOMAIN-MAP `asset` · FE grep no ERP.* API call (mock nav comment only) |
| List filter `?type=STATION_HOUSE` | **PASS** | Live `/so-ts?type=STATION_HOUSE` · alias Navigate |
| Init-data LOOKUP delta | **PASS** | BE `RoadAssetService` returns stationWorkTypes / stationBuildLocations / officeBuildingGrades / auxiliaryWorksGrades · QA counts 2/3/3/3 |
| Soft DELETE + CRUD reuse | **PASS** | Dev/QA T-QA-CRUD-01 PASS |
| Migration | **PASS** | none · dumpSpecs P1 · flatten DEFER P2 |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| sa_tz_gate `tz_na` | **PASS** | inherit Asset · no TZ mutation in scope |
| sa_xco_gate `xco_get_only` | **PASS** | cross-org read-only pattern |
| sa_shared_table `share_tenant` | **PASS** | `rmms_road_assets` shared |
| Auth | **DEFER** | GAP-SH-AUTH-01 · not P0 · same as peer so-ts types |
| No secrets in artifacts | **PASS** | compact/findings only |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Kind B list profile STATION_HOUSE | **PASS** | `STATION_HOUSE_HIDE_COLS` + ensure `type_work_id` · hide-low-fill OFF for DT/cấp/vật tư/khuôn viên |
| Filter bar V1–V5 | **PASS** | QA T-QA-FILTER-01/02 · filter-D/M/T.png |
| Form reuse · **cấm** fork | **PASS** | AssetFormPage `STATION_HOUSE_ATTR_KEYS` dump §4 |
| `name` ← `name_building` | **PASS** | mergeDumpSpecs on name change · dumpSpecLabels |
| Ẩn `kmTo` · kmFrom not required | **PASS** | form guard `!== STATION_HOUSE_TYPE` for kmTo |
| `type_work_id` required | **PASS** | FE invalid + BE DumpSpecHasNonEmpty |
| LeaveConfirmModal · 0 native dialog | **PASS** | LeaveConfirmModal wired · QA assert |
| Alias `/so-ts-station-house` → live | **PASS** | index.tsx Navigate · QA S1 PASS |
| Prefix NH- / tile t22 | **PASS** | BE GetCodePrefix · kchtTileConfig t22 |
| E2E screens | **PASS** | S0/S1/QA-20 + live-assert DTM 0 overflowX |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| STATION_HOUSE validate (GAP-SH-NAME/POINT) | **PASS** | `RoadAssetService` early-return: name/kmFrom **not** required · type_work_id required |
| Prefix `NH-` | **PASS** | GetCodePrefix STATION_HOUSE |
| Init LOOKUP delta | **PASS** | LoadDumpSpecLookupOptionsAsync ×4 |
| Catalog seed STATION_HOUSE | **PASS** | RoadAssetCatalogHandler + asset-type-seed |
| GIS map nha-hat | **PASS** | GisInventoryMapper |
| No Schema_* flatten P1 | **PASS** | dumpSpecs only · GAP-SH-FLAT-01 P2 |

## Findings (severity)

| ID | Sev | Status | Note |
|----|-----|--------|------|
| — | P0 | **none** | |
| GAP-SH-FLAT-01 | P2 | open · deferred | flatten Schema_* DEFER |
| GAP-SH-AUTH-01 | P2 | open · deferred | Auth DEFER peer pattern |
| GAP-QA-E2E-PW-01 | info | accepted | chrome channel contract · QA PASS |

## review_confirm

- **Decision:** `done` (autoApprove ON)
- **fix_gaps:** none P0
- **Hash:** contentHash unchanged vs data_analy → skip full re-scan
- **Next:** pipeline complete for role review · phase may advance per orchestrator (e2eQa already PASS at QA)

## Cấm (role)

implement · e2e/start:std/build · Step 4b/migration · ERP.* · invent so-ts API · GAP-PKT-ROLE-01
