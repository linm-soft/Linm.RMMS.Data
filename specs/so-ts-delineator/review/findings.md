# Review — Findings — so-ts-delineator

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_ba2abd6e`  
> packKind: **list** · typeCode: **DELINEATOR** · changeScope: **new_page**  
> contentHash: `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` (unchanged · hash skip DA)

| | |
|--|--|
| Feature | `so-ts-delineator` |
| Title | Sổ TS — Cọc tiêu / cọc H |
| Role | `review` |
| Verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| alias | `/so-ts-delineator` → Navigate live |
| API | `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** |
| Prior | data_analy→po→design→sa→TL→dev→qa **all confirmed** · QA e2e **PASS** |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T15:25:00.000Z` |

---

## Gate summary

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | List/CRUD/init qua `api/v1/asset/road-assets` · type=`DELINEATOR` · **0** invent `api/v1/so-ts/*` · DOMAIN-MAP Asset |
| SEC | **PASS** | Soft DELETE · share_tenant · **0** ERP.* FE/BE · Auth align **DEFER** (debt) |
| UI-FN | **PASS** | Kind B Full page · S-ATTR **2 nhóm** tiêu/H · kmTo ẩn · LeaveConfirmModal · alias Navigate · grid hide type/kmTo/unit · filter-bar V1–V5 |
| BE-FN | **PASS** | `ResolveDelineatorName` · qty←`total_number_*` · LOOKUP init `postTypes`/`guidePostMaterials`/`hGuidePostMaterials`/`installedLocations` · dumpSpecs P1 · flatten **DEFER** |

**review_confirm:** `done` (autoApprove ON · P0 none)

---

## QUERY

| Check | Evidence | Result |
|-------|----------|--------|
| Endpoint đúng domain | FE `assetService` → `api/v1/asset/road-assets` · BE `RoadAssetService` · BFF proxy | PASS |
| type lock | URL `?type=DELINEATOR` · list/form typeLocked | PASS |
| Cấm invent so-ts API | Grep FE **0** `api/v1/so-ts` | PASS |
| init-data LOOKUP | DTO `PostTypes`/`GuidePostMaterials`/`HGuidePostMaterials`/`InstalledLocations` · QA counts 5/6/6/6 | PASS |
| GIS / tile | `coc-tieu` · t14 · cluster `atgt_point` (SA + GisInventoryMapper) | PASS |

---

## SEC

| Check | Evidence | Result |
|-------|----------|--------|
| Cấm ERP.* | FE chỉ comment parity StandaloneMock* · **0** runtime ERP call | PASS |
| Soft delete | Catalog soft DELETE · QA-23 | PASS |
| Tenant | `share_tenant` gate (SA) | PASS |
| Auth | Permission align **DEFER** — không chặn ship list pack | DEFER |

---

## UI-FN

| Check | Evidence | Result |
|-------|----------|--------|
| List profile | `DELINEATOR_HIDE_COLS` type/kmTo/unit · `DELINEATOR_ENSURE_COLS` h_post/installed/tiêu+H | PASS |
| Filter bar | `so-ts-delineator-filter-bar.md` · type lock · LinErpListFilterBar | PASS |
| Form 2 nhóm | `asset-delineator-meta` · `-tieu` · `-h` · `data-form-cols=5` · Select LOOKUP | PASS |
| Point kmTo | Form `form.type !== DELINEATOR` mới render kmTo · **cấm** ép `"0"` (không fill 0) | PASS |
| qty sync | Submit: `total_number_within_section` else `h_total_*` → `quantity` | PASS |
| Leave / Hist | `LeaveConfirmModal` · shell History · **0** native dialog Asset | PASS |
| Alias | `index.tsx` Navigate `/so-ts-delineator` → `/so-ts?type=DELINEATOR` · QA S1 | PASS |
| E2E evidence | QA S0/S1/QA-20 PASS · DTM 0 overflowX · screens ok | PASS |

---

## BE-FN

| Check | Evidence | Result |
|-------|----------|--------|
| Name resolve | `ResolveDelineatorName` · loại+km else code/vidagis · cấm weak→đoạn | PASS |
| LOOKUP seed | `RoadAssetService` LoadDumpSpecLookup* · GAP-DELIM-TYPE-01 | PASS |
| Catalog seed | `("DELINEATOR", "Cọc tiêu / cọc H", "ATGT", 8)` | PASS |
| Persist | scalars + dumpSpecs JSON P1 · **no** Schema_*/Step 4b | PASS |
| Flatten | GAP-DELIM-FLAT-01 **DEFER** | DEFER |

---

## Traceability (compact priors)

| Role | Status | Align |
|------|--------|-------|
| data_analy | confirmed | hash match · typeCode/dump/tile |
| po | confirmed | GAP-DELIM-* closed in code or DEFER |
| design | confirmed | Full page · 2 nhóm · reviewUrl |
| sa | confirmed | Kind B · gates tz_na/xco_get_only/share_tenant |
| team_lead | confirmed | route_a · T-* delivered |
| dev | confirmed | build PASS · files match |
| qa | confirmed | verdict PASS · e2e S0/S1/QA-20 |

---

## Debt (non-blocking)

| ID | Severity | Notes |
|----|----------|-------|
| GAP-DELIM-FLAT-01 | low | flatten dumpSpecs columns — DEFER |
| Auth DEFER | low | permission align sau |
| GAP-QA-E2E-PW-01 | low | yarn e2e-qa headed hang · chrome contract OK |
| GAP-QA-E2E-DOCKER-01 | low | stale docker thiếu LOOKUP — rebuild once |

**P0:** none

---

## Cấm (giữ)

ERP.* · invent `api/v1/so-ts/*` · implement ở Review · e2e/start:std ở role này · GAP-PKT-ROLE-01

## Next

Pipeline list pack **complete** sau Review · e2eQa đã PASS ở QA · không mở role khác trong task này.
