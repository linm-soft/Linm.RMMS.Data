# Review — Findings — so-ts-culvert-x

> Status: **confirmed** · autoApprove ON · task `task_1a18eb66` · `/agent-review`  
> contentHashPrior `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-culvert-x` |
| Title | Sổ TS — Cống thoát nước ngang |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `CULVERT_X` |
| prefix | `CN-` (GIS `CN` · `cong`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=CULVERT_X` |
| alias | `/so-ts-culvert-x` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T13:16:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash · control-hint · real-data | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-culvert-x.md` | done · build PASS |
| qa | `qa/scenarios.md` · screens · live-assert · manifest | PASS |
| FE | AssetListPage · AssetFormPage · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=CULVERT_X` | **PASS** | FE `/asset/road-assets` · **cấm** invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP typeWork / culvertShapes / materialBody / structures | **PASS** | `LoadDumpSpecLookupOptionsAsync` · QA counts 3/6/6/5 |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER GAP-CN-FLAT-01 |
| Q-04 | Soft DELETE · shared table tenant | **PASS** | `share_tenant` · `xco_get_only` |

**P0 QUERY:** none

---

## SEC

| ID | Check | Result | Note |
|----|-------|--------|------|
| S-01 | **cấm ERP.*** domain | **PASS** | Asset · DOMAIN-MAP |
| S-02 | BFF proxy only · catalogKind road-assets | **PASS** | FE endpoint Asset |
| S-03 | Asset list/form **0** native confirm/alert | **PASS** | LeaveConfirmModal + useAlert |
| S-04 | Auth permission align | **INFO** | DEFER (dev debt) · không block |
| S-05 | Gates tz_na · xco_get_only · share_tenant | **PASS** | SA compact |

**P0 SEC:** none

---

## UI-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| U-01 | List profile CULVERT_X · ENSURE type_work/shape/weight/number/height/crossing_length | **PASS** | `CULVERT_X_ENSURE_COLS` |
| U-02 | Hide-empty width/material_body_id · ẩn type/name/kmTo/SL/ĐVT | **PASS** | `CULVERT_X_HIDE_COLS` · empty list OK |
| U-03 | Filter LinErpListFilterBar · kmTo filter ON · **0** nút Tìm riêng · type lock | **PASS** | QA filter + live-assert |
| U-04 | Form Full page 5col · S-ATTR · S-LOC-POINT · Loại CT* | **PASS** | live QA-20 · `asset-culvert-x-attr` · kmTo ẩn |
| U-05 | `name` optional · list OFF · **cấm** IsWeak | **PASS** | FE `nameOptional` + BE ValidateRequired |
| U-06 | LeaveConfirmModal dirty leave | **PASS** | `useFormLeaveGuard` AssetFormPage |
| U-07 | Alias `/so-ts-culvert-x` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-08 | Labels type_work / culvert_shape / material_body | **PASS** | dumpSpecLabels + columns |
| U-09 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-10 | Title «Sổ TS — Cống thoát nước ngang» · testid list | **PASS** | QA S0 · `rmms-so-ts-culvert-x-list` |
| U-11 | dump CSV 0 · empty list OK · **cấm** seed | **PASS** | GAP-CULVERT-X-01 accepted |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(CULVERT_X)=CN-` | **PASS** | RoadAssetService · GAP-CN-PREFIX-01 |
| B-02 | Validate: name optional · type_work_id* · POINT (kmFrom optional) | **PASS** | ValidateRequired CULVERT_X branch |
| B-03 | Import `ResolveCulvertXName` · **cấm** IsWeak→đoạn | **PASS** | RoadAssetCatalogHandler |
| B-04 | GIS short `CN` · unit THOAT_NUOC · layer cong | **PASS** | GisInventoryMapper · catalog |
| B-05 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-06 | Init DTO TypeWork · CulvertShapes · MaterialBody · Structures | **PASS** | RoadAssetDtos |
| B-07 | Migration / Step 4b | **PASS** | none (SA) |

**P0 BE-FN:** none

---

## Closed GAPs

| GAP | Status |
|-----|--------|
| GAP-CN-LOOKUP-01 | closed · LOOKUP init seeds |
| GAP-CN-NAME-01 | closed · name optional · list OFF |
| GAP-CN-PREFIX-01 | closed · CN- / GIS CN |
| GAP-CN-POINT-01 | closed · S-LOC-POINT · ẩn kmTo · cấm ép `"0"` |
| GAP-CN-ROUTE-01 | closed · alias Navigate |
| GAP-CULVERT-X-01 | accepted · dump CSV 0 · empty OK · cấm seed |
| GAP-CN-KEY-01 | accepted · proposed keys · remap khi tbl_* |

---

## Debt / INFO

| ID | Sev | Note |
|----|-----|------|
| GAP-CN-FLAT-01 | P2 | flatten Schema_* DEFER |
| Auth DEFER | info | permission align |
| GAP-QA-E2E-PW-01 | info | headed PW hang · chrome contract OK |
| GAP-QA-E2E-DOCKER-01 | info | docker rebuild note · prior QA |
| GAP-CULVERT-X-01 | info | dump thiếu · empty OK |

**P0 overall:** none

---

## review_confirm

| Field | Value |
|-------|-------|
| **review_confirm** | **done** (autoApprove ON) |
| fix_gaps | **no** |
| verdict | **PASS** |
| next | orchestrator · task `task_1a18eb66` completed · roleOnly=review |

---

## Artifact

- findings: `specs/so-ts-culvert-x/review/findings.md`
- compact: `specs/so-ts-culvert-x/handoff/review-compact.md`
