# Review — Findings — so-ts-median

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_4be20cad`  
> WrittenAt: `2026-09-01T17:50:00.000Z`

| | |
|--|--|
| Feature | `so-ts-median` |
| Title | Sổ TS — Dải phân cách |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` |
| prefix | `PC-` (GIS `GPC`) |
| API | `api/v1/asset/road-assets` · domain **Asset** |
| mfeStdRoute | `/so-ts?type=MEDIAN` |
| alias | `/so-ts-median` → Navigate |
| contentHashPrior | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| verdict | **PASS** |

## Prior chain

| Role | Status | Compact |
|------|--------|---------|
| data_analy | confirmed | handoff/data_analy-compact.md |
| po | confirmed | handoff/po-compact.md |
| design | confirmed · design_confirm=approve | handoff/design-compact.md |
| sa | confirmed · solution_confirm=approve | handoff/sa-compact.md |
| team_lead | confirmed · route_a | handoff/team_lead-compact.md |
| dev | confirmed · buildMfe/Be PASS | handoff/dev-compact.md |
| qa | confirmed · e2eQa PASS · S0/S1/QA-20 | handoff/qa-compact.md |

## Gates

| Gate | Result | Note |
|------|--------|------|
| tz_na | PASS | N/A timezone feature |
| xco_get_only | PASS | LOOKUP via init-data GET |
| share_tenant | PASS | shared `rmms_road_assets` |
| ERP.* ban | PASS | no ERP.* FE/BE Asset paths |
| invent `api/v1/so-ts/*` | PASS | giữ road-assets |
| Step 4b / Schema_* | PASS | dumpSpecs P1 · flatten DEFER |
| GAP-PKT-ROLE-01 | PASS | review-only |

---

## QUERY

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| Q-01 | type filter MEDIAN only | PASS | AssetListPage `typeFromUrl === MEDIAN` · profile cols |
| Q-02 | init LOOKUP medianStripTypes / fenceMaterials / medianLocations | PASS | RoadAssetService init-data + FE endpoint/lookups |
| Q-03 | dumpSpecs P1 persist · no Schema_* | PASS | Kind B · SA/Dev compact · flatten DEFER |
| Q-04 | soft DELETE | PASS | peer road-assets CRUD (QA T-QA-CRUD-01) |
| Q-05 | summary-by-type t11 | PASS | kchtTileConfig t11 → MEDIAN · GPC |

**QUERY verdict: PASS** · P0 none

---

## SEC

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| S-01 | Auth/tenant | DEFER | Auth DEFER (known debt · not P0) |
| S-02 | No ERP cross-domain | PASS | Grep Asset FE/BE · no ERP.* |
| S-03 | BFF proxy only | PASS | web-bff → asset/road-assets |
| S-04 | No credential/secrets in artifacts | PASS | specs clean |

**SEC verdict: PASS** · debt Auth DEFER only

---

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | List profile MEDIAN · hide type/ảnh · ensure loại dải/dài/rộng/cỏ/cây/cao/VL | PASS | MEDIAN_HIDE_COLS / MEDIAN_ENSURE_COLS |
| U-02 | hide-empty vị trí/địa danh | PASS | QA liveAssert + design grid |
| U-03 | Filter bar MEDIAN · cấm nút Tìm riêng | PASS | so-ts-median-filter-bar · QA T-QA-FILTER |
| U-04 | Form Full page CatalogFormShell 5col · S-ATTR editable | PASS | AssetFormPage MEDIAN block · QA-20 |
| U-05 | S-LOC-RANGE kmTo hiện · 4 XY dump · cấm ép "0" | PASS | QA liveAssert kmTo · GAP-MEDIAN-RANGE-01 |
| U-06 | planting Select bool | PASS | asset-field-planting_grass/tree |
| U-07 | name optional · primary type_median_strip_id | PASS | nameOptional + BE ResolveMedianName |
| U-08 | prefix PC- create | PASS | DefaultCodePrefix MEDIAN → PC- · QA-20 |
| U-09 | dumpSpecLabels ≥10 MEDIAN keys | PASS | dumpSpecLabels.ts lines 90–100 |
| U-10 | LeaveConfirmModal · cấm native dialog | PASS | LeaveConfirmModal wired · QA |
| U-11 | Alias `/so-ts-median` Navigate | PASS | index.tsx Route + S1 PASS |
| U-12 | QA screens S0/S1/QA-20 | PASS | manifest ok=true · sha present |

**UI-FN verdict: PASS** · P0 none

---

## BE-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| B-01 | DefaultCodePrefix PC- | PASS | RoadAssetService.DefaultCodePrefix MEDIAN |
| B-02 | GIS short GPC | PASS | GisInventoryMapper + kchtTileConfig |
| B-03 | Validate name optional · type_median_strip_id required · kmFrom RANGE | PASS | RoadAssetService MEDIAN block ~1718 |
| B-04 | ResolveMedianName · cấm IsWeak→đoạn | PASS | RoadAssetCatalogHandler GAP-MEDIAN-NAME-01 |
| B-05 | LOOKUP seed 3 arrays | PASS | LoadDumpSpecLookupOptionsAsync ×3 · DTO |
| B-06 | Catalog seed MEDIAN ATGT | PASS | asset-type-seed + catalog handler |
| B-07 | No migration / Step 4b | PASS | migration=none · dumpSpecs P1 |

**BE-FN verdict: PASS** · P0 none

---

## Debt (accepted · non-blocking)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | P2 | yarn e2e-qa hang :9100 · Chrome contract fallback · QA PASS |
| GAP-MEDIAN-FLAT-01 | P2 | flatten DEFER · dumpSpecs P1 |
| Auth DEFER | P2 | shared pipeline debt |

## review_confirm

**done** (autoApprove ON) · không fix_gaps · P0=0

## Next

- E2E QA already confirmed · chain complete for review gate
- phase → done (review PASS) · no further implement role in this task
- **Cấm** yarn build/e2e/start:std tại review

## Artifacts

- findings: `specs/so-ts-median/review/findings.md`
- compact: `specs/so-ts-median/handoff/review-compact.md`
- prior QA: `specs/so-ts-median/qa/scenarios.md` · screens/manifest ok
