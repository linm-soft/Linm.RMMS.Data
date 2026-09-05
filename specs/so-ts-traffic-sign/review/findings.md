# Review — Findings — so-ts-traffic-sign

> Status: **PASS** · `review_confirm=done` · autoApprove ON · task `task_e4c388e8`  
> Role `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` · **unchanged** (hash skip re-analy)  
> writtenAt `2026-09-01T14:25:00.000Z`

| | |
|--|--|
| Feature | `so-ts-traffic-sign` |
| Title | Sổ TS — Biển báo |
| Role | `review` |
| typeCode | `TRAFFIC_SIGN` |
| prefix | `BB-` |
| API | `api/v1/asset/road-assets` · domain Asset · **cấm ERP.*** |
| mfeStdRoute | `/so-ts?type=TRAFFIC_SIGN` |
| alias | `/so-ts-traffic-sign` → Navigate live |
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
| Q-02 | init-data `materialsSign[]` / `shapesSign[]` | **PASS** | BE `RoadAssetService` · QA counts 6/7 |
| Q-03 | Sign master `integration/traffic-sign-types/search` | **PASS** | name←`sign_code_number` SearchInput |
| Q-04 | Filter type lock `TRAFFIC_SIGN` · tile t32 | **PASS** | `kchtTileConfig` + list profile |
| Q-05 | No ERP.* query surface | **PASS** | MFE asset endpoints only · comment refs ERP.Finance OK |

**QUERY verdict:** PASS

---

## SEC

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Soft DELETE | **PASS** | `SoftDeleteAsync` · controller DELETE |
| S-02 | `share_tenant` shared table | **PASS** | SA gate · RoadAsset entity shared |
| S-03 | `tz_na` / `xco_get_only` | **PASS** | SA compact · no write XCO |
| S-04 | Auth deep hardening | **DEFER** | Auth DEFER (dev debt) · not P0 for list pack |
| S-05 | No secret / credential in FE profile | **PASS** | LOOKUP_STATIC ids only |

**SEC verdict:** PASS (Auth DEFER accepted)

---

## UI-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | List profile hide type/kmTo/qty/unit · ensure dump cols | **PASS** | `TRAFFIC_SIGN_HIDE_COLS` / `ENSURE_COLS` |
| U-02 | Form S-ATTR traffic-sign · 5col · dumpSpecs editable | **PASS** | `asset-traffic-sign-attr` · width/height/area/VL/shape/location/ngaylapdat |
| U-03 | S-LOC-POINT · kmTo ẩn | **PASS** | QA live `kmToHiddenOk` |
| U-04 | Prefix create BB- · Số hiệu QCVN SearchInput | **PASS** | BE `return "BB-"` + form |
| U-05 | LeaveConfirmModal · 0 native dialog | **PASS** | QA T-QA-FORM |
| U-06 | Alias Navigate `/so-ts-traffic-sign` | **PASS** | `index.tsx` Route Navigate |
| U-07 | Filter-bar V1–V5 · 0 nút Tìm riêng | **PASS** | QA FILTER PASS |
| U-08 | Cấm PoleCount / tab legacy / Modal form | **PASS** | profile + form branch |
| U-09 | testid list naming | **INFO** | Code `rmms-so-ts-traffic-sign-list` · QA doc suffix `-page` — cosmetic drift · e2e PASS |

**UI-FN verdict:** PASS

---

## BE-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | Prefix BB- · GAP-SIGN-PREFIX-01 | **PASS** | `RoadAssetService` type→`BB-` |
| B-02 | Validate POINT · name←sign_code_number · cấm ép kmTo | **PASS** | ValidateRequired TRAFFIC_SIGN |
| B-03 | init-data LOOKUP materialsSign/shapesSign | **PASS** | LoadDumpSpecLookupOptionsAsync |
| B-04 | Catalog ResolveTrafficSignName | **PASS** | `RoadAssetCatalogHandler` |
| B-05 | dumpSpecs P1 · flatten DEFER | **PASS** | GAP-SIGN-FLAT-01 P2 · no Schema_*/Step 4b |
| B-06 | Migration none P1 | **PASS** | Dev/SA · review role skip Step 4b |

**BE-FN verdict:** PASS

---

## Cross-role consistency

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed · hash match | OK |
| po / design / sa | confirmed · approve | OK |
| team_lead | route_a · T-* covered | OK |
| dev | yarn+dotnet PASS · implement done | OK |
| qa | e2e PASS · handoff review | OK |

## Debt (accepted · non-blocking)

| GAP | Sev | Disposition |
|-----|-----|-------------|
| GAP-SIGN-FLAT-01 | P2 | flatten dumpSpecs → later migration |
| GAP-QA-E2E-PW-01 | tool | headed login hang · chrome capture OK |
| GAP-QA-E2E-DOCKER-01 | tool | stale image thiếu LOOKUP → rebuild fixed |
| Auth DEFER | — | product-wide |
| U-09 testid doc | INFO | optional align QA doc ↔ code |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **done** |
| autoApprove | ON |
| fix_gaps | none |
| next | chain complete for roleOnly=review · **cấm** phase=`done` from this role if orchestrator owns close · task mark completed |

## Evidence refs (paths only)

- implement: `specs/so-ts-traffic-sign/implement/so-ts-traffic-sign.md`
- qa: `specs/so-ts-traffic-sign/qa/scenarios.md` · `qa/screens/`
- MFE: `AssetListPage.tsx` · `AssetFormPage.tsx` · `index.tsx` · `lookups.ts`
- BE: `RoadAssetService.cs` · `RoadAssetCatalogHandler.cs`
- compact prior: `handoff/*-compact.md`
