# Review — Findings — so-ts-ferry

| | |
|--|--|
| Feature | `so-ts-ferry` |
| Title | Sổ TS — Bến phà |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_75eb9674` |
| status | **confirmed** |
| verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` (unchanged · hash skip) |
| route_confirm | `route_a` |
| mfeStdRoute | `/so-ts?type=FERRY` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=FERRY` |
| alias | `/so-ts-ferry` → `/so-ts?type=FERRY` |
| API | `api/v1/asset/road-assets` · DOMAIN-MAP Asset |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-01T00:50:00.000Z` |

## Prior chain

| Role | Compact | Status |
|------|---------|--------|
| data_analy | handoff/data_analy-compact.md | confirmed |
| po | handoff/po-compact.md | confirmed |
| design | handoff/design-compact.md | confirmed |
| sa | handoff/sa-compact.md | confirmed · solution_confirm=approve |
| team_lead | handoff/team_lead-compact.md | confirmed |
| dev | handoff/dev-compact.md | confirmed · build PASS |
| qa | handoff/qa-compact.md | confirmed · verdict PASS · e2e S0/S1/QA-20 |

## Gates

| Gate | Result | Evidence |
|------|--------|----------|
| **QUERY** | **PASS** | List/detail/CRUD `api/v1/asset/road-assets?type=FERRY` · init-data ferryTypes/ferryWorkLevels/riverChannelNames · summary-by-type t03 · **0** invent `api/v1/so-ts/*` · **0** ERP.* |
| **SEC** | **PASS** | DOMAIN-MAP `so-ts-ferry`→Asset · share_tenant · xco_get_only · tz_na · Auth DEFER (GAP-FY-AUTH-01 debt · non-P0) · soft DELETE · no secret leak in FE |
| **UI-FN** | **PASS** | FERRY grid profile · filter lock type · title Bến phà · S-ATTR loaibenpha* · name←name_ferry_terminal · kmTo ẩn · LeaveConfirmModal · alias Navigate · live-assert DTM 0 overflowX · QA S0/S1/QA-20 PASS |
| **BE-FN** | **PASS** | Validate FERRY optional name/kmFrom · loaibenpha required · prefix `PH-` · LOOKUP dump∪seed · migration none · DumpSpecs P1 · flatten DEFER |

## Findings (by severity)

| ID | Sev | Gate | Note | Action |
|----|-----|------|------|--------|
| — | — | — | **P0/P1 blockers: none** | — |
| GAP-FY-FLAT-01 | P2 | BE-FN | Schema_* flatten DEFER | debt · non-block |
| GAP-FY-AUTH-01 | P2 | SEC | Auth permission align DEFER | debt · non-block |
| GAP-QA-E2E-PW-01 | info | UI-FN | yarn e2e-qa hung login → Chrome channel | info · QA already mitigated |

## Cross-checks

- contentHash SSOT ổn định qua compact priors → **hash skip** data-analy re-scan
- QA compact verdict PASS · manifest `ok=true` · liveAssert title/filter/S-ATTR/kmToVisible=false
- Dev implement new_page.ssot_rereview **pass** · yarn build + dotnet build PASS (prior)
- Spot FE: `AssetListPage` FERRY profile · `AssetFormPage` FERRY_ATTR + LeaveConfirm · `index.tsx` alias Navigate
- Spot BE: `RoadAssetService` Ferry* init · Validate FERRY · `PH-` prefix
- **Cấm** ERP.* · invent so-ts API · fork form — void

## review_confirm

**done** — autoApprove ON · không fix_gaps · handoff pipeline complete (review = last QLDB role trước done; e2e đã PASS ở QA).

## Next

- STATUS phase → `done` · pipeline review **confirmed**
- compact: `specs/so-ts-ferry/handoff/review-compact.md`
- **Cấm** yarn build/e2e/start:std ở role này (đã tuân thủ)
