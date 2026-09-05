# Review — Findings — so-ts-ems-post

> Status: **confirmed** · `2026-09-01T05:50:10.000Z` · task `task_e19baa14`  
> autoApprove=ON · `review_confirm=approve` · verdict **PASS**

| | |
|--|--|
| Feature | `so-ts-ems-post` |
| Title | Sổ TS — Trạm trực cấp cứu |
| Role | `review` · `/agent-review` |
| packKind | `list` · Kind B |
| changeScope | `new_page` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | `CCU-` |
| API | `api/v1/asset/road-assets` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=EMS_POST` |
| alias | `/so-ts-ems-post` → live |
| prior · qa | **confirmed** · e2e PASS · `task_bffa06d6` |
| prior · dev | **confirmed** · build PASS · `task_abebc1f1` |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |

## Verdict

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | EF `AsNoTracking` + LINQ dumpSpecs parse · **0** `FromSqlRaw`/`ExecuteSql` trên Asset EMS path |
| SEC | **PASS** (debt noted) | Tenant `IsCompanyAllowed` · soft delete `IsActive` · **0** ERP.* / invent `api/v1/so-ts/*` · Auth NuGet **DEFER** (known · không block feature) |
| UI-FN | **PASS** | Grid EMS profile · filter-bar · form S-ATTR · kmTo ẩn · LeaveConfirm · alias redirect · QA S0/S1/QA-20 |
| BE-FN | **PASS** | init `OwnerOptions`/`StationTypeOptions` · validate EMS name/point · `ResolveEmsPostName` · prefix `CCU-` · migration **none** |
| **Overall** | **PASS** | `review_confirm=approve` · autoApprove ON |

## QUERY

| ID | Check | Result |
|----|-------|--------|
| Q-01 | List/filter qua `api/v1/asset/road-assets?type=EMS_POST` | **PASS** · reuse RoadAsset |
| Q-02 | dumpSpecs JSON parse an toàn (try/catch JsonException) | **PASS** · `DumpSpecHasNonEmpty` / import helper |
| Q-03 | **0** raw SQL / string-concat query trên EMS delta | **PASS** |
| Q-04 | Tenant filter company claim trên get/update/delete | **PASS** · `IsCompanyAllowed` |

## SEC

| ID | Check | Result |
|----|-------|--------|
| S-01 | **cấm** ERP.* trên MFE Asset EMS surface | **PASS** (chỉ comment parity StandaloneMock*) |
| S-02 | **cấm** invent `api/v1/so-ts/*` | **PASS** · giữ `road-assets` |
| S-03 | Soft DELETE · không hard wipe | **PASS** · `IsActive` |
| S-04 | Native `window.confirm` trên Asset list/form | **PASS** · `LeaveConfirmModal` + `useAlert` |
| S-05 | JWT / RequirePermission CommonLib | **DEFER** · TODO trên controller (Auth NuGet) — **info** · không P0 cho pack này |

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | Live `/so-ts?type=EMS_POST` · testid `rmms-so-ts-ems-post-list` | **PASS** | QA S0 · manifest |
| U-02 | Alias `/so-ts-ems-post` Navigate replace | **PASS** | `index.tsx` · QA S1 |
| U-03 | Grid ON: chủ SH · loại trạm · khoảng cách · hide type/kmTo/qty | **PASS** | `EMS_POST_ENSURE_COLS` + `RESCUE_STATION_HIDE_COLS` |
| U-04 | Form Full page 5 cols · `asset-ems-post-attr` · owner/station_type/distance | **PASS** | AssetFormPage · QA-20 |
| U-05 | `name` ← `name_station` «Tên trạm» · kmTo ẩn | **PASS** | code + QA-20 |
| U-06 | Filter-bar V1–V5 · type lock deep-link | **PASS** | QA-FB-* |
| U-07 | Tile KCHT `t29` drill EMS_POST | **PASS** | `kchtTileConfig.ts` |
| U-08 | LeaveConfirmModal dirty leave | **PASS** | wired form |

> PNG Read tool: permission denied trong session Review — chấp nhận QA `manifest.json` `ok=true` + sha16 S0/S1=`8e39c9c850e00277` · QA-20=`79f485c00ecdbe7a`.

## BE-FN

| ID | Check | Result |
|----|-------|--------|
| B-01 | init-data `OwnerOptions` + `StationTypeOptions` seed ∪ dump distinct | **PASS** |
| B-02 | Validate EMS: type/route/status required · name/kmFrom **không** bắt buộc | **PASS** |
| B-03 | Import `ResolveEmsPostName` · IsWeak guard QL/CT | **PASS** |
| B-04 | Code prefix `CCU-` | **PASS** |
| B-05 | migration **none** · DumpSpecs P1 · flatten DEFER P2 | **PASS** / defer |

## Traceability (prior compact)

| Role | status | compact |
|------|--------|---------|
| data_analy | confirmed | `handoff/data_analy-compact.md` |
| po | confirmed | `handoff/po-compact.md` |
| design | confirmed | `handoff/design-compact.md` |
| sa | confirmed | `handoff/sa-compact.md` |
| team_lead | confirmed | `handoff/team_lead-compact.md` |
| dev | confirmed | `handoff/dev-compact.md` |
| qa | confirmed · e2e PASS | `handoff/qa-compact.md` |

## GAP / debt (non-blocking)

| ID | Sev | Notes |
|----|-----|-------|
| GAP-EMS-FLAT-01 | defer P2 | Schema_* flatten |
| GAP-QA-E2E-02 | info | headed e2e hang · headless capture OK |
| GAP-QA-E2E-PW-01 | info | scenarios `-list-page` vs code `-list` suffix |
| Auth-NuGet | defer | RequirePermission stub |

## P0 blockers

**none**

## review_confirm

**approve** (autoApprove ON) · DoR PASS · handoff `handoff/review-compact.md`
