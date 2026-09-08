# Review — Findings — csdl-bieu-09

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_a5fbb485`  
> Hash skip: contentHashPrior unchanged · `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4`

| | |
|--|--|
| Feature | `csdl-bieu-09` |
| Title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| verdict | **PASS** |
| review_confirm | **approve** |
| writtenAt | `2026-09-05T11:25:00.000Z` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## Prior chain

| Role | Status | Compact |
|------|--------|---------|
| data_analy | confirmed | handoff/data_analy-compact.md |
| po | confirmed | handoff/po-compact.md |
| design | confirmed | handoff/design-compact.md |
| sa | confirmed | handoff/sa-compact.md |
| team_lead | confirmed · route_a | handoff/team_lead-compact.md |
| dev | confirmed · buildMfe/Be PASS | handoff/dev-compact.md |
| qa | confirmed · e2e S0/S1/QA-20 PASS | handoff/qa-compact.md |

## QUERY

| Check | Result | Notes |
|-------|--------|-------|
| API keep `api/v1/asset/csdl-records` | **PASS** | resource=`boundary-markers` · **cấm** invent / ERP.* |
| BFF proxy | **PASS** | QS as-is · no orch |
| Filter `markerKind` + road/km/side | **PASS** | FE→service list params · BE join `CsdlBieu9` |
| LKP road-route | **PASS** | `/integration/road-routes/search` · SearchInput |
| DOMAIN-MAP | **PASS** | `csdl-bieu-09` → Asset |
| Hash / SSOT | **PASS** | contentHashPrior unchanged · skip re-analy |

**Debt:** DB migrate apply (`Schema_CsdlBieu9`) — deploy ops (P2).

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| Perm reuse `asset.csdl-records.*` | **PASS** | `csdlListPermissions` FE · T-PERM-01 |
| Soft DELETE | **PASS** | catalog soft-delete path |
| Gates tz_na / xco_get_only / share_tenant | **PASS** | SA compact · no tenant invent |
| Auth wire | **DEFER** | known · P2 |
| ERP.* | **PASS** | none in FE/BE scope |

## UI-FN

| Check | Result | Notes |
|-------|--------|-------|
| Kind B list A–D+F | **PASS** | `CsdlBieu09Page` · LinErpListFilterBar · UiSchema grid |
| Kind D Slideout 2col · Z1–Z3 | **PASS** | `CsdlBieu09FormSlideout` · footer_actions_only |
| Typed 17 · 2 section kind | **PASS** | title RoadLimit↔GPMB · validate year/qty |
| LeaveConfirm | **PASS** | `useLeaveConfirm` |
| route_a `/csdl-bieu-09` + hub | **PASS** | index route · hub redirect map |
| IdCode MK- | **PASS** | create placeholder · BE ResourceMap |
| Peer Sổ TS | **PASS** | none · **cấm** merge |
| E2E evidence | **PASS** | S0/S1/QA-20 · manifest ok · testid `rmms-csdl-bieu-09-list-page` / form-slideout |

**Debt:** GAP-QA-E2E-PW-01 (P2) · GAP-QA-ROAD-TESTID (P3) · org/XLS OUT/DEFER.

## BE-FN

| Check | Result | Notes |
|-------|--------|-------|
| Entity `CsdlBieu9Entity` 1:1 shell | **PASS** | `rmms_csdl_bieu9` · **cấm** parent *Json / 2 entity |
| Migration `Schema_CsdlBieu9` | **PASS** | `20260905111122_Schema_CsdlBieu9` (impl note timestamp drift vs `…180000` — P3 doc only) |
| Typed DTO + Normalize | **PASS** | MarkerKind/Structure/Side · Qty≥1 · CompletedYear |
| Create/Update validate | **PASS** | service Require* + FE validate |
| UiSchema registry | **PASS** | catalogKind `boundary-markers` |
| detail* SSOT | **PASS** | stopped · typed join |

## Blocking / fix_gaps

- **none** (P0/P1 open = 0)

## Non-blocking debt (carry)

| Id | Sev | Note |
|----|-----|------|
| DB migrate apply | P2 | ops `ef database update` |
| Auth wire | P2 | DEFER |
| GAP-QA-E2E-PW-01 | P2 | chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | road lookup testid |
| org / XLS | P2/OUT | SearchInput org P2 · XLS stub OUT |
| T-BE-02 timestamp note | P3 | migration id `111122` ≠ compact `180000` label |

## review_confirm

- **approve** (autoApprove ON) · verdict **PASS** · **không** fix_gaps
- phase → **done** · chain closed (review = last role)

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-09/review/findings.md` |
| compact | `specs/csdl-bieu-09/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |
| QA screens | `specs/csdl-bieu-09/qa/screens/{S0,S1,QA-20}.png` |

## Cấm kept

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · e2e/start:std @ Review · implement @ Review · Step 4b/migration @ Review
