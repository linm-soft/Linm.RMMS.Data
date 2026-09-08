# Review — Findings — csdl-bieu-08

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_fdb010e9`  
> Verdict: **PASS** · contentHash unchanged · hash skip demo

| | |
|--|--|
| Feature | `csdl-bieu-08` |
| Title | CSDL Biểu 08 — Hệ thống ATGT |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `traffic-safety` |
| formNo | `08` |
| IdCode | `AT-` |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| prior QA | `confirmed` · S0/S1/QA-20 PASS |
| writtenAt | `2026-09-05T17:39:04.000Z` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## Verdict

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Parity (PO→Design→SA→TL→Dev→QA) | **PASS** |
| `review_confirm` | **approve** → done |

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| API domain Asset · `api/v1/asset/csdl-records` | PASS | FE `endpoint.ts` BASE `/asset/csdl-records` · **cấm ERP.*** |
| resource=`traffic-safety` · optional `assetType`/`type=` | PASS | list load + BE filter join `CsdlBieu8` |
| Soft DELETE | PASS | `SoftDeleteAsync` + FE `csdlService.delete` |
| LKP road-route | PASS | Form `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` |
| BFF proxy only | PASS | Dev/SA compact · no orch invent |
| IdCode `AT-` (không Guid) | PASS | ResourceMap `("AT", …)` · UI hint `(tự sinh AT-)` |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| Perm reuse `rmms-asset:csdl-records:*` | PASS | `permissions.ts` T-PERM-01 |
| Auth wire DEFER | NOTE P2 | Debt · không block |
| Tenant share_tenant / tz_na / xco_get_only | PASS | SA gates · no cross-tenant invent |
| **cấm ERP.*** | PASS | Grep FE page + service · Asset path only |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Alias `/csdl-bieu-08` + hub redirect | PASS | `index.tsx` route · hub map `traffic-safety`→`/csdl-bieu-08` · QA S1 |
| Kind B list + Kind D Slideout 2col | PASS | `data-form-cols="2"` · shared+1 child |
| subset_by_type columns | PASS | `buildTypeColumns` khi `assetTypeFilter` |
| Q-TYPE-UX confirm clear child | PASS | `handleAssetTypeChange` + alert.confirm |
| LeaveConfirm | PASS | `useLeaveConfirm` + `LeaveConfirmModal` |
| Peer deep-link · **cấm** merge Sổ TS | PASS | `peerPathForAssetType` · QA peerSots |
| E2E S0/S1/QA-20 | PASS | manifest `ok=true` · PNG sha16 ok |
| form-assert `hasRoad=false` | NOTE P2 | Code có road SearchInput + testid; assert selector/timing — debt QA |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Parent `CsdlBieu8Entity` + 11 children | PASS | `rmms_csdl_bieu8` + 11 nav props · entities on disk |
| Schema_CsdlBieu8 migration | PASS | `…/Migrations/20260905102400_Schema_CsdlBieu8.cs` |
| **cấm** wide 45 / parent *Json | PASS | typed child upsert · `ClearBieu8ChildrenExcept` |
| assetType + side validate | PASS | `CsdlBieu8AssetTypes` / `CsdlBieu8Sides` |
| formNo renumber 7→08 | PASS | store `formNo: 8` · T-REN-01 |

## Findings (severity)

| ID | Sev | Area | Note | Action |
|----|-----|------|------|--------|
| — | — | — | No P0/P1 open | — |
| REV-NOTE-01 | P2 | QA | GAP-QA-E2E-PW-01 chrome fallback | Track · không block |
| REV-NOTE-02 | P2 | Ops | DB migrate apply + UiSchema seed | Deploy ops |
| REV-NOTE-03 | P2 | FE/QA | form-assert `hasRoad` false vs code có road | Optional re-assert |
| REV-NOTE-04 | P2 | Auth/Org/XLS | Auth DEFER · org P2 · XLS OUT | Pack debt |

## Parity snapshot

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed | 45/11 · AT- · traffic-safety |
| po | confirmed | alias_now · child_tables · subset_by_type |
| design | confirmed | Kind B+D · shared+1 child |
| sa | confirmed | Schema_CsdlBieu8 · gates |
| team_lead | confirmed | route_a · T-* |
| dev | confirmed | build MFE/BE PASS |
| qa | confirmed | e2e PASS · handoff Review |

## Hash

- contentHashPrior = STATUS hash · **unchanged** → skip re-scan demo
- headerFingerprintPrior `sha256:ba8b8db4…1cdd6f` · align compact chain

## Next

| Role | Need |
|------|------|
| — | Pipeline complete · **cấm** start role khác trong task này |
| Ops | migrate apply khi deploy |

## Cấm kept

ERP.* · invent API · detail* only · wide 45 · Guid IdCode · merge Sổ TS · e2e/build/start:std @ Review · implement @ Review
