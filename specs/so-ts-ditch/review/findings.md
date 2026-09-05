# Review — Findings — so-ts-ditch

> Status: **confirmed** · autoApprove ON · task `task_ba1d67c1` · `/agent-review`  
> contentHashPrior `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` · unchanged → hash skip OK

| | |
|--|--|
| Feature | `so-ts-ditch` |
| Title | Sổ TS — Cống / rãnh dọc |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `DITCH` |
| prefix | `CD-` (GIS `CD`) |
| verdict | **PASS** |
| review_confirm | **done** |
| mfeStdRoute | `/so-ts?type=DITCH` |
| alias | `/so-ts-ditch` → Navigate |
| API | `api/v1/asset/road-assets` · Asset · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| prior · qa | **confirmed** · PASS · e2e S0/S1/QA-20 |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T11:20:00.000Z` |

**Cấm** implement · **cấm** e2e/build/start:std ở role này · **cấm** GAP-PKT-ROLE-01.

---

## Scope / sources

| Source | Path | Status |
|--------|------|--------|
| data_analy | handoff compact + hash | confirmed |
| po / design / sa / TL | compact | confirmed |
| dev | `implement/so-ts-ditch.md` | done · build PASS |
| qa | `qa/scenarios.md` · screens | PASS |
| FE | AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index alias | spot-check |
| BE | RoadAssetService · RoadAssetDtos · RoadAssetCatalogHandler · GisInventoryMapper | spot-check |

---

## QUERY

| ID | Check | Result | Note |
|----|-------|--------|------|
| Q-01 | List/filter qua `road-assets` + `type=DITCH` | **PASS** | Không invent `api/v1/so-ts/*` |
| Q-02 | Init-data LOOKUP ditchTypes / culvertShapes / structural / work / materials / locations | **PASS** | `LoadDumpSpecLookupOptionsAsync` · QA counts 4/4/4/4/5/3 |
| Q-03 | dumpSpecs P1 JSON · không Schema_* flatten P1 | **PASS** | DEFER GAP-DITCH-FLAT-01 |
| Q-04 | Soft DELETE · shared table tenant | **PASS** | `share_tenant` · xco_get_only |

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
| U-01 | List profile DITCH · ENSURE loại rãnh/hình dạng/dài/cao · kmTo ON | **PASS** | `DITCH_ENSURE_COLS` · hide kmTo removed |
| U-02 | Hide-empty rộng/KT/hố ga/địa danh · ẩn type | **PASS** | `DITCH_HIDE_COLS` · QA |
| U-03 | Filter LinErpListFilterBar · kmTo · **0** nút Tìm riêng · type lock | **PASS** | QA filter + filter-bar.md |
| U-04 | Form Full page 5col · S-ATTR · S-LOC-RANGE · Loại rãnh* | **PASS** | live QA-20 · `asset-ditch-attr` |
| U-05 | `name` optional · list primary = `ditch_type_id` | **PASS** | FE `nameOptional` + BE |
| U-06 | LeaveConfirmModal dirty leave | **PASS** | `useFormLeaveGuard` AssetFormPage |
| U-07 | Alias `/so-ts-ditch` Navigate | **PASS** | `index.tsx` · QA S1 |
| U-08 | Labels ditch_type / culvert_shape | **PASS** | dumpSpecLabels |
| U-09 | DTM 1280/768/375 · 0 overflowX | **PASS** | QA live-assert |
| U-10 | Title «Sổ TS — Cống / rãnh dọc» · testid list | **PASS** | QA S0 · `rmms-so-ts-ditch-list` |
| U-11 | Page filter DITCH only · CULVERT_L peer DEFER | **PASS** | GAP-DITCH-PEER-01 · info only |

**P0 UI-FN:** none

---

## BE-FN

| ID | Check | Result | Note |
|----|-------|--------|------|
| B-01 | `DefaultCodePrefix(DITCH)=CD-` | **PASS** | RoadAssetService · GAP-DITCH-PREFIX-01 |
| B-02 | Validate: name optional · kmFrom* · `ditch_type_id`* | **PASS** | ValidateRequired DITCH branch |
| B-03 | Import `ResolveDitchName` · **cấm** IsWeak→đoạn | **PASS** | weak → `""` |
| B-04 | GIS short `CD` · unit THOAT_NUOC · dump `tbl_longitudinal` | **PASS** | GisInventoryMapper · seed |
| B-05 | CRUD path `api/v1/asset/road-assets` | **PASS** | Kind B · no new controller |
| B-06 | Init DTO props DitchTypes…DitchLocations | **PASS** | RoadAssetDtos |
| B-07 | Migration / Step 4b | **PASS** | none (SA) |

**P0 BE-FN:** none

---

## Closed GAPs

| GAP | Status |
|-----|--------|
| GAP-DITCH-LOOKUP-01 | closed · LOOKUP init seeds |
| GAP-DITCH-NAME-01 | closed · name optional · primary ditch_type_id |
| GAP-DITCH-PREFIX-01 | closed · CD- / GIS CD |
| GAP-DITCH-RANGE-01 | closed · S-LOC-RANGE · 4 XY dumpSpecs |
| GAP-DITCH-ROUTE-01 | closed · alias Navigate |
| GAP-DITCH-PEER-01 | accepted DEFER · page DITCH-only |

---

## Debt / INFO

| ID | Sev | Note |
|----|-----|------|
| GAP-DITCH-FLAT-01 | P2 | flatten Schema_* DEFER |
| Auth DEFER | info | permission align |
| GAP-QA-E2E-PW-01 | info | headed PW hang · chrome contract OK |
| GAP-QA-E2E-DOCKER-01 | info | stale image thiếu ditchTypes · rebuild fixed |

**P0 overall:** none

---

## review_confirm

| Field | Value |
|-------|-------|
| **review_confirm** | **done** (autoApprove ON) |
| fix_gaps | **no** |
| verdict | **PASS** |
| next | orchestrator · task `task_ba1d67c1` completed · roleOnly=review |

---

## Artifact

- findings: `specs/so-ts-ditch/review/findings.md`
- compact: `specs/so-ts-ditch/handoff/review-compact.md`
