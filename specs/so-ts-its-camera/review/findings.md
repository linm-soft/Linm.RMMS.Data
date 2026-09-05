# Review — Findings — so-ts-its-camera

> Status: **PASS** · `review_confirm=done` · autoApprove ON · task `task_bb0def16`  
> Role `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` · **unchanged** (hash skip re-analy)  
> writtenAt `2026-09-02T09:15:00.000Z`

| | |
|--|--|
| Feature | `so-ts-its-camera` |
| Title | Sổ TS — Hệ thống ITS |
| Role | `review` |
| typeCode | `ITS_CAMERA` |
| prefix | `IT-` (GIS `CAM`) |
| API | `api/v1/asset/road-assets` · domain Asset · **cấm ERP.*** |
| mfeStdRoute | `/so-ts?type=ITS_CAMERA` |
| alias | `/so-ts-its-camera` → Navigate live |
| Prior | DA→PO→Design→SA→TL→Dev→QA **confirmed** |
| Gates | `tz_na` · `xco_get_only` · `share_tenant` |
| Verdict | **PASS** · P0=0 · fix_gaps=none |

## Scope

Review QUERY / SEC / UI-FN / BE-FN against compact priors + spot-check MFE/BE. **Không** implement · **không** e2e/build/start:std. QA E2E evidence reused (S0/S1/QA-20 PASS).

---

## QUERY

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| Q-01 | List/detail/CRUD → `api/v1/asset/road-assets` (+ BFF proxy) | **PASS** | `endpoint.ts` BASE `/asset/road-assets` · cấm invent `api/v1/so-ts/*` |
| Q-02 | init-data `itsManagementCenterTypes[]` / `itsCentralControlLocations[]` | **PASS** | BE `RoadAssetService` seed + FE `lookups.ts`/`endpoint.ts` mapping |
| Q-03 | Filter type lock `ITS_CAMERA` · tile t19 | **PASS** | `kchtTileConfig` t19 + list profile `isItsCamera` |
| Q-04 | summary-by-type tile t19 drill | **PASS** | cluster ops · typeCode ITS_CAMERA |
| Q-05 | No ERP.* query surface | **PASS** | MFE asset endpoints only |

**QUERY verdict:** PASS

---

## SEC

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Soft DELETE | **PASS** | RoadAsset soft delete · `alert.confirm` (not native) |
| S-02 | `share_tenant` shared table | **PASS** | SA gate · `rmms_road_assets` shared |
| S-03 | `tz_na` / `xco_get_only` | **PASS** | SA compact · no write XCO |
| S-04 | Auth deep hardening | **DEFER** | Auth DEFER (product-wide) · not P0 for list pack |
| S-05 | No secret / credential in FE profile | **PASS** | LOOKUP_STATIC ids only · **cấm** camera-connect IP/RTSP/ONVIF |

**SEC verdict:** PASS (Auth DEFER accepted)

---

## UI-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | List profile hide type/kmTo/qty/unit · ensure 9 dump cols | **PASS** | `ITS_CAMERA_HIDE_COLS` / `ITS_CAMERA_ENSURE_COLS` |
| U-02 | Form S-ATTR ITS · 5col · dumpSpecs editable (15 keys) | **PASS** | `ITS_CAMERA_ATTR_KEYS` · TTĐH/vị trí/tn_* |
| U-03 | S-LOC-POINT · kmTo ẩn · kmFrom optional | **PASS** | Form branch excludes ITS from kmTo · QA live assert |
| U-04 | Prefix create IT- · name optional | **PASS** | BE `return "IT-"` + GAP-ITS-NAME-01 |
| U-05 | LeaveConfirmModal · 0 native dialog Asset | **PASS** | QA T-QA-FORM · no `window.confirm` in Asset pages |
| U-06 | Alias Navigate `/so-ts-its-camera` | **PASS** | `index.tsx` Route Navigate → `?type=ITS_CAMERA` |
| U-07 | Filter-bar V1–V5 · 0 nút Tìm riêng | **PASS** | `so-ts-its-camera-filter-bar.md` + QA FILTER PASS |
| U-08 | Cấm camera-connect merge / tab legacy / Modal form | **PASS** | No RTSP/ONVIF/IP fields · Full page CatalogFormShell |
| U-09 | testid list `rmms-so-ts-its-camera-list` | **PASS** | QA e2e PASS |

**UI-FN verdict:** PASS

---

## BE-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | Prefix IT- · GIS CAM · GAP-ITS-PREFIX-01 | **PASS** | `RoadAssetService` type→`IT-` · `GisInventoryMapper` CAM |
| B-02 | Validate POINT · name optional · cấm ép kmTo | **PASS** | ValidateRequired ITS_CAMERA block |
| B-03 | init-data LOOKUP its* seeds | **PASS** | `ItsManagementCenterTypeSeedOptions` · `ItsCentralControlLocationSeedOptions` |
| B-04 | Catalog import ITS_CAMERA row | **PASS** | `RoadAssetCatalogHandler` type 40 |
| B-05 | dumpSpecs P1 · flatten DEFER | **PASS** | GAP-ITS-FLAT-01 P2 · no Schema_*/Step 4b |
| B-06 | Migration none P1 | **PASS** | Dev/SA · review role skip Step 4b |
| B-07 | dumpSpecLabels cite tbl_its tn_* | **PASS** | `dumpSpecLabels.ts` §4 ITS keys |

**BE-FN verdict:** PASS

---

## Cross-role consistency

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed · hash match | OK |
| po / design / sa | confirmed · approve | OK |
| team_lead | route_a · T-ITS-* covered | OK |
| dev | build PASS · implement done | OK |
| qa | e2e PASS · handoff review | OK |

## Debt (accepted · non-blocking)

| GAP | Sev | Disposition |
|-----|-----|-------------|
| GAP-ITS-FLAT-01 | P2 | flatten dumpSpecs → later migration |
| GAP-ITS-ROUTE-01 | INFO | alias board-only optional · Navigate OK |
| GAP-QA-E2E-02 | tool | headed hang · standalone headless capture PASS |
| hide-empty runtime | P2 | grid ENSURE cols · runtime hide-empty DEFER per QA |
| GAP-ITS-CAM-01 | — | camera-connect out of scope · resolved |
| Auth DEFER | — | product-wide |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **done** |
| autoApprove | ON |
| fix_gaps | none |
| next | roleOnly=review complete · task mark completed |

## Evidence refs (paths only)

- implement: `specs/so-ts-its-camera/implement/so-ts-its-camera.md`
- qa: `specs/so-ts-its-camera/qa/scenarios.md` · `qa/screens/`
- MFE: `AssetListPage.tsx` · `AssetFormPage.tsx` · `index.tsx` · `dumpSpecLabels.ts` · `lookups.ts` · `endpoint.ts`
- BE: `RoadAssetService.cs` · `RoadAssetDtos.cs` · `RoadAssetCatalogHandler.cs` · `GisInventoryMapper.cs`
- compact prior: `handoff/*-compact.md`
