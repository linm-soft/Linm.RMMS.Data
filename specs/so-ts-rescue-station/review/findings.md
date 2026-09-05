# Review — Findings — so-ts-rescue-station

| | |
|--|--|
| Feature | `so-ts-rescue-station` |
| Title | Sổ TS — Công trình cứu hộ |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| Status | **confirmed** |
| review_confirm | **done** (autoApprove ON) |
| verdict | **PASS** |
| taskId | `task_e096c59d` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` (unchanged · hash skip) |
| prior QA | **PASS** · `task_6c87f51d` · S0/S1/QA-20 + live-assert |
| writtenAt | `2026-09-01T09:30:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |

## Scope

Static review FE/BE + prior compact (data_analy→qa) · **cấm** yarn build/e2e/start:std · PNG path cite only (exist) · no Step 4b.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| API path | **PASS** | FE `endpoint.ts` `BASE=/asset/road-assets` · **no** `ERP.*` · **no** invent `api/v1/so-ts/*` |
| List filter type | **PASS** | `?type=RESCUE_STATION` · list profile + form typeLock |
| Alias | **PASS** | `index.tsx` Navigate `/so-ts-rescue-station` → `/so-ts?type=RESCUE_STATION` |
| Init LOOKUP | **PASS** | BE `Office/Aux/StoredBuildingGrades` + `VitriOptions` · FE maps `officeBuildingGrades`/`storedBuildingGrades`/`vitriOptions` |
| Domain | **PASS** | Asset · share_tenant · tz_na · xco_get_only |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| Tenant / shared table | **PASS** | `share_tenant` · RoadAsset entity |
| Auth perm | **DEFER** | documented debt · non-blocking P1 |
| Soft delete | **PASS** | reuse road-assets CRUD |
| No ERP surface | **PASS** | BFF/asset only |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Grid ON mẫu | **PASS** | `RESCUE_STATION_ENSURE_COLS` materials/site/office/aux/stored · HIDE type/kmTo/qty/unit |
| Form S-ATTR | **PASS** | `RESCUE_STATION_ATTR_KEYS` dump §4 · `data-form-cols="5"` · `asset-rescue-station-attr` |
| name ← name_building | **PASS** | label «Tên kho bãi» · sync dump · **no** IsWeak |
| kmTo ẩn | **PASS** | form excludes RESCUE_STATION from kmTo field |
| LeaveConfirm | **PASS** | `LeaveConfirmModal` wired · no native confirm |
| Title / filter | **PASS** | live-assert titleRescue/headerRescue/filterBar · type filter hidden |
| Tile KCHT | **PASS** | ô `—` · **no** invent tile · **no** RESCUE_VEHICLE mix |
| QA screens | **PASS** | S0/S1/QA-20.png exist · manifest ok · live-assert DTM no overflowX |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Validate RESCUE_STATION | **PASS** | type/route/status required · name/kmFrom optional · early return · **no** IsWeak→đoạn |
| Prefix | **PASS** | `CN-` |
| DumpSpecs persist | **PASS** | no Schema flatten P1 |
| Migration | **PASS** | none |
| Import catalog label | **INFO** | `RoadAssetCatalogHandler` still «Trạm cứu nạn» — UI/CTX «Công trình cứu hộ» · P2 cosmetic |

## GAP matrix (prior → review)

| GAP | Status |
|-----|--------|
| GAP-SOTS-COL/FORM/REUSE | **closed** |
| GAP-RS-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE/TILE | **closed** |
| GAP-QA-E2E-01/DOCKER/PW | **closed** (QA capture fallback documented) |
| Auth align | **DEFER** |
| flatten dumpSpecs | **DEFER P2** |
| yarn build default parallel OOM | **debt** · use `--parallelism=1` |

## review_confirm

**done** · autoApprove ON · no fix_gaps · handoff compact written.

## Debt (non-blocking)

- Auth perm DEFER
- flatten P2
- build parallelism debt
- Import display name «Trạm cứu nạn» vs UI title (P2)

## Next

Pipeline review **confirmed** · feature role chain complete for `task_e096c59d` · e2e already owned by QA.

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.19.04 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47 taskId=task_e096c59d -->
