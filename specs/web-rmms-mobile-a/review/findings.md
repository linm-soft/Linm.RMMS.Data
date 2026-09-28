# Review findings — web-rmms-mobile-a

> Status: **done** · Mode: `review_only` · autoApprove=ON → `review_confirm` **accept**  
> changeScope: `edit_page` · editTask=`1` · T-REV-EDIT-01  
> reviewHash: `sha256:bcb0f2081f3cdf4d6b0b55d11457b46ce1bcaf2e72459300bcdb32c738071cc1` · rulesVersion: `2026.09.27.1`

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| Title | Tuần đường / Tuần kiểm — edit delta Pattern B · route · users · transport |
| Role | `review` · `/agent-review` |
| changeScope | `edit_page` |
| packKind | `list` (phone Field hub ≠ Kind B) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` (soft alias) |
| liveUrl | `http://localhost:9301/m/tuan-duong` |
| prior QA | **PASS** · Aligned · Must 0 · `handoff/qa-compact.md` · capture_a S0/S1/QA-20 |
| taskId | `task_f6c7f236` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| updatedAt | `2026-09-27T14:55:00.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI phone hub/form | `Linm.Web.RMMS.Mobile` · `src/pages/WebRmmsMobileA/*` · `src/services/patrol/*` · `src/config/runtimeApiUrl.ts` |
| API Patrol | `Linm.RMMS.WebService` · Patrol + Integration · **cấm ERP.*** |
| QA evidence | `qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` |
| Kind B / filter-bar / ui-schema | **WAIVE** phone hub (TL/QA) |
| Delta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · T-UI-PATTERN-B / LKP-EDIT / USER / TRANSPORT |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | **P0 Must = 0** | accept |

### Soft / debt (không chặn accept)

| ID | Class | Sev | Where | Note |
|----|-------|-----|-------|------|
| REV-UI-STD-URL-01 | ui-fn | P3 | `/web-rmms-mobile-a` | Soft alias 404 · live `/m/tuan-duong` (QA soft · STATUS note) |
| REV-S-PERM-01 | security | P2 | PatrolSessionsController | `[RequirePermission]` TODO peer KEEP · CommonLib ≥1.4.0 |
| REV-UI-DATE-01 | ui-fn | P3 | TD-02 plannedDate | locale en-US — Should (QA soft) |
| REV-BE-LOOKUP-01 | be-fn | P3 | FE `lookupStatic` | LOOKUP_STATIC direction/mode until shared form-options keys |

## Query (`/review-query`)

- List: page/pageSize whitelist · status/route filter · ILike parameterized — **PASS** (prior keep · contentHash edit unchanged query surface)
- N+1/OOM: paged Take · AsNoTracking — **PASS**
- Lookup: SearchInput `road-routes/search` live · **no** `ROAD_ROUTE_SEED` / filterSeed — **PASS** (T-UI-LKP-EDIT-01)
- Kind B grid query keys: **N/A WAIVE**

## Security

- JWT via Mobile.Bff · no secrets in FE pages — **PASS**
- Tenant / IDOR: CompanyCode + deny cross-company — **PASS** (prior)
- Injection: EF params · no raw SQL concat — **PASS**
- ERP.*: none in patrol FE/BE cite — **PASS**
- Transport: `bindMobileApiClient` / `mobileApiBase` only · cấm web-bff client — **PASS** (T-UI-TRANSPORT-01)
- Soft: RequirePermission deferred (REV-S-PERM-01)

## UI function

- Pattern B TD-03: Lưu `disabled={saving}` only · GPS deny banner on Lưu click · cấm fake lat/lng — **PASS** (`CheckInSheet.tsx`)
- Route: SearchInput + miss `--` · no seed — **PASS** (`OpenPatrolPage` / lookups)
- userName: `resolveCurrentUser` → GET `integration/users` · miss `--` — **PASS** (T-UI-USER-01)
- LeaveConfirmModal on forms/sheet — **PASS**
- Chrome / CRUD smoke: QA capture_a S0/S1/QA-20 live · Aligned · Must 0 — **PASS** (cite QA · PNG gated)
- Kind B / filter-right / form-grid-05 — **WAIVE**

## BE function

- Endpoints vs SA: sessions · check-ins · plan-points · road-routes/search · integration/users · auth/profile · files — **PASS**
- Users: Mobile.Bff forward only · no new API — **PASS**
- Status: 200/404/409/422/403 — **PASS** (prior)
- Migration: none — **PASS**
- Note-encode CLOSED SA · plan-point empty OK — **PASS** (cite SA compact)

## Confirm

`review_confirm` = **accept** (autoApprove=ON · P0=0 · QA confirmed · edit T-* done)

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none · soft debt optional (STD-URL alias / perm attr / date locale) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.27.1 |
| reviewHash | sha256:bcb0f2081f3cdf4d6b0b55d11457b46ce1bcaf2e72459300bcdb32c738071cc1 |
| contentHash | sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45 |
| generatedAt | 2026-09-27T14:55:00.000Z |
| versionGate | ok |
