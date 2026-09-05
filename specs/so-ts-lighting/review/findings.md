# Review — Findings — so-ts-lighting

> Status: **PASS** · `review_confirm=done` · autoApprove ON · task `task_3a8872c0`  
> Role `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` · **unchanged** (hash skip re-analy)  
> writtenAt `2026-09-02T08:46:00.000Z`

| | |
|--|--|
| Feature | `so-ts-lighting` |
| Title | Sổ TS — Chiếu sáng đường |
| Role | `review` |
| typeCode | `LIGHTING` |
| prefix | `CS-` |
| API | `api/v1/asset/road-assets` · domain Asset · **cấm ERP.*** |
| mfeStdRoute | `/so-ts?type=LIGHTING` |
| alias | `/so-ts-lighting` → Navigate live |
| Prior | DA→PO→Design→SA→TL→Dev→QA **confirmed** |
| Gates | `tz_na` · `xco_get_only` · `share_tenant` |
| Verdict | **PASS** · P0=0 · fix_gaps=none |

## Scope

Review QUERY / SEC / UI-FN / BE-FN against compact priors + spot-check MFE/BE. **Không** implement · **không** e2e/build/start:std. QA E2E evidence reused (S0/S1/QA-20 PASS).

---

## QUERY

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| Q-01 | List/detail/CRUD → `api/v1/asset/road-assets` (+ BFF proxy) | **PASS** | Dev/SA · cấm invent `api/v1/so-ts/*` |
| Q-02 | init-data `lightingManagementUnits[]` / `bulbTypes[]` / `transformingStationTypes[]` / `controlMethods[]` / `vitriOptions` | **PASS** | BE `RoadAssetService` seed + QA init-data assert |
| Q-03 | Filter type lock `LIGHTING` · tile t18 | **PASS** | `kchtTileConfig` + list profile |
| Q-04 | summary-by-type tile t18 drill | **PASS** | cluster ops · typeCode LIGHTING |
| Q-05 | No ERP.* query surface | **PASS** | MFE asset endpoints only |

**QUERY verdict:** PASS

---

## SEC

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Soft DELETE | **PASS** | RoadAsset soft delete · controller DELETE |
| S-02 | `share_tenant` shared table | **PASS** | SA gate · `rmms_road_assets` shared |
| S-03 | `tz_na` / `xco_get_only` | **PASS** | SA compact · no write XCO |
| S-04 | Auth deep hardening | **DEFER** | Auth DEFER (product-wide) · not P0 for list pack |
| S-05 | No secret / credential in FE profile | **PASS** | LOOKUP_STATIC ids only |

**SEC verdict:** PASS (Auth DEFER accepted)

---

## UI-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | List profile hide type/kmTo/qty/unit · ensure dump cols | **PASS** | `LIGHTING_HIDE_COLS` / `LIGHTING_ENSURE_COLS` |
| U-02 | Form S-ATTR lighting · 5col · dumpSpecs editable (9 keys) | **PASS** | `LIGHTING_ATTR_KEYS` · management/bulb/MBA/control/vitri |
| U-03 | S-LOC-POINT · kmTo ẩn · kmFrom optional | **PASS** | QA live `S-LOC-POINT kmFrom only` |
| U-04 | Prefix create CS- · name optional | **PASS** | BE `return "CS-"` + GAP-LT-NAME-01 |
| U-05 | LeaveConfirmModal · 0 native dialog Asset | **PASS** | QA T-QA-FORM · no `window.confirm` in Asset pages |
| U-06 | Alias Navigate `/so-ts-lighting` | **PASS** | `index.tsx` Route Navigate |
| U-07 | Filter-bar V1–V5 · 0 nút Tìm riêng | **PASS** | `so-ts-lighting-filter-bar.md` + QA FILTER PASS |
| U-08 | Cấm Solar*/LampWatt / tab legacy / Modal form | **PASS** | profile + form branch · GAP-AK32-07 out |
| U-09 | testid list `rmms-so-ts-lighting-list` | **PASS** | QA e2e PASS |

**UI-FN verdict:** PASS

---

## BE-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | Prefix CS- · GAP-LT-PREFIX-01 | **PASS** | `RoadAssetService` type→`CS-` · GIS `CS` |
| B-02 | Validate POINT · name optional · cấm ép kmTo | **PASS** | ValidateRequired LIGHTING block |
| B-03 | init-data LOOKUP lighting* seeds | **PASS** | `LightingManagementUnitSeedOptions` et al. |
| B-04 | Catalog import LIGHTING row | **PASS** | `RoadAssetCatalogHandler` type 22 |
| B-05 | dumpSpecs P1 · flatten DEFER | **PASS** | GAP-LT-FLAT-01 P2 · no Schema_*/Step 4b |
| B-06 | Migration none P1 | **PASS** | Dev/SA · review role skip Step 4b |

**BE-FN verdict:** PASS

---

## Cross-role consistency

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed · hash match | OK |
| po / design / sa | confirmed · approve | OK |
| team_lead | route_a · T-LT-* covered | OK |
| dev | build PASS · implement done | OK |
| qa | e2e PASS · handoff review | OK |

## Debt (accepted · non-blocking)

| GAP | Sev | Disposition |
|-----|-----|-------------|
| GAP-LT-FLAT-01 | P2 | flatten dumpSpecs → later migration |
| GAP-LT-ROUTE-01 | INFO | alias board-only optional · Navigate OK |
| GAP-QA-E2E-02 | tool | headed hang · standalone headless capture PASS |
| hide-empty runtime | P2 | grid ENSURE cols · runtime hide-empty DEFER per QA |
| GAP-AK32-07 | — | Solar*/LampWatt out of scope |
| Auth DEFER | — | product-wide |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **done** |
| autoApprove | ON |
| fix_gaps | none |
| next | roleOnly=review complete · task mark completed |

## Evidence refs (paths only)

- implement: `specs/so-ts-lighting/implement/so-ts-lighting.md`
- qa: `specs/so-ts-lighting/qa/scenarios.md` · `qa/screens/`
- MFE: `AssetListPage.tsx` · `AssetFormPage.tsx` · `index.tsx` · `dumpSpecLabels.ts` · `lookups.ts`
- BE: `RoadAssetService.cs` · `RoadAssetDtos.cs` · `RoadAssetCatalogHandler.cs`
- compact prior: `handoff/*-compact.md`
