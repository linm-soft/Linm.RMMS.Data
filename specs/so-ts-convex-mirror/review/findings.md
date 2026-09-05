# Review — Findings — so-ts-convex-mirror

> Status: **confirmed** · `review_confirm=approve` · autoApprove=ON · task `task_e7a485af`  
> Role: `/agent-review` · packKind: **list** · changeScope: **new_page**  
> Prior: data_analy→po→design→sa→team_lead→dev→qa **all confirmed** · contentHash `sha256:36242a5e…` unchanged (hash skip OK)

| | |
|--|--|
| Feature | `so-ts-convex-mirror` |
| Title | Sổ TS — Gương cầu / long môn |
| Role | `review` |
| Verdict | **PASS** · approve |
| mfeStdRoute | `/so-ts?type=CONVEX_MIRROR` |
| alias | `/so-ts-convex-mirror` → Navigate live |
| API | `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** |
| Gates | `tz_na` · `xco_get_only` · `share_tenant` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T16:20:00.000Z` |

## Hash / scope

| Check | Result |
|-------|--------|
| changeScope=`new_page` · control-hint + real-data under `_data-analy/features/` | **PASS** |
| contentHashPrior vs DA `36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` | **unchanged** · hash skip |
| Version meta skill/workflow/rules across compact | **aligned** |
| 1 lock · GAP-PKT-ROLE-01 (chỉ review) | **PASS** |

## QUERY

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| Q-01 | API path Asset `api/v1/asset/road-assets` · no invent `api/v1/so-ts/*` | **PASS** | FE endpoint + BE domain Asset |
| Q-02 | **cấm ERP.*** namespace / controllers | **PASS** | FE only StandaloneMock *comment* refs Finance parity — not runtime ERP call |
| Q-03 | DOMAIN-MAP Asset · BFF proxy only | **PASS** | `web-bff/api/v1/asset` |
| Q-04 | type filter `CONVEX_MIRROR` list/form deep-link | **PASS** | URL lock + profile |
| Q-05 | dumpSpecs P1 persist · no flatten migration | **PASS** | DEFER documented (GAP-MIRROR-SCOPE-01) |
| Q-06 | init-data LOOKUP keys | **PASS** | `assetTypeMsts`·`shapeCutPosts`·`materialPosts`·`locationPosts` |

**P0/P1 QUERY:** none

## SEC

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Soft DELETE · no hard wipe | **PASS** | catalog pattern + QA-23 |
| S-02 | Native `window.confirm` / `alert` on Asset list/form | **PASS** | `useAlert` · LeaveConfirmModal |
| S-03 | Auth permission align | **DEFER** | T-PERM-01 stub · documented debt (not P0) |
| S-04 | Tenant / share gate `share_tenant` | **PASS** | SA gate · shared `rmms_road_assets` |
| S-05 | xco `xco_get_only` · tz `tz_na` | **PASS** | no cross-org write invent |

**P0/P1 SEC:** none · Auth DEFER = P2 debt

## UI-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | Kind B list + Full page CatalogFormShell 5col | **PASS** | QA live `data-form-cols=5` |
| U-02 | Grid hide type/kmTo/unit · ensure dump cols (loc/MST/shape/mat/ĐK/cao/nhịp/biển/trụ) | **PASS** | `CONVEX_MIRROR_*_COLS` + QA S0 |
| U-03 | Filter V1–V5 · type lock · LinErpListFilterBar | **PASS** | filter-bar.md + QA |
| U-04 | S-ATTR **9** editable dump + loc/MST sections | **PASS** | `asset-convex-mirror-loc`/`-attr` |
| U-05 | S-LOC-POINT · kmTo ẩn · cấm ép `"0"` | **PASS** | live `kmToHiddenOk` |
| U-06 | qty←`total_number_post` on change + submit | **PASS** | form patch + save body |
| U-07 | name≠đoạn (GAP-MIRROR-NAME-01) UX label | **PASS** | import resolver + form title |
| U-08 | Alias Navigate `/so-ts-convex-mirror` | **PASS** | `index.tsx` + QA S1 |
| U-09 | LeaveConfirmModal + History Modal | **PASS** | shell reuse |
| U-10 | cấm field gantry / invent long môn attrs | **PASS** | only CONVEX_MIRROR dump keys |
| U-11 | Tile t31 title gộp long môn · data chỉ CONVEX_MIRROR | **PASS** | list type lock; KCHT drill may list peer codes — out of list scope |

**P0/P1 UI-FN:** none

## BE-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | `ResolveConvexMirrorName` · loại+km · weak→preferred · cấm đoạn | **PASS** | `RoadAssetCatalogHandler` |
| B-02 | Import qty maps `total_number_post` | **PASS** | Csv qty aliases |
| B-03 | Init-data LOOKUP seed/load 4 arrays | **PASS** | `RoadAssetService` + DTO |
| B-04 | GIS `guong-cau` ↔ CONVEX_MIRROR | **PASS** | `GisInventoryMapper` |
| B-05 | Catalog seed type CONVEX_MIRROR | **PASS** | handler seed row |
| B-06 | No Step 4b / Schema flatten | **PASS** | DEFER only |

**P0/P1 BE-FN:** none

## Cross-role consistency

| Prior | Verdict |
|-------|---------|
| DA inventory ↔ PO/Design/SA/TL/Dev/QA | **aligned** · 9 attr · Point · LOOKUP · qty/name GAPs closed |
| Dev T-* all **done** · QA T-QA-* **PASS** · e2e S0/S1/QA-20 evidence | **OK** |
| openQ from early DA | **resolved** by PO/SA (TYPE/NAME/ROUTE/SCOPE) |

## Debt (non-blocking)

| ID | Severity | Item |
|----|----------|------|
| GAP-MIRROR-SCOPE-01 | P2 | flatten dumpSpecs columns DEFER |
| T-PERM-01 | P2 | Auth permission align DEFER |
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` headed hang — chrome channel contract used |
| GAP-QA-E2E-DOCKER-01 | P2 | stale docker LOOKUP — rebuild documented |

## review_confirm

**approve** (autoApprove=ON)

- P0 = 0 · P1 = 0  
- DoR Review **PASS**  
- Next: pipeline complete for this chain role · e2e already QA-owned (queued done) · **cấm** re-run e2e/build ở review

## Artifacts

- write: `specs/so-ts-convex-mirror/review/findings.md`
- compact: `specs/so-ts-convex-mirror/handoff/review-compact.md`
- STATUS: `specs/so-ts-convex-mirror/STATUS.md`
