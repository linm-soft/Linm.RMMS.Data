# Review findings — web-rmms-mobile-a

> Status: **done** · Mode: `review_only` · autoApprove=ON → `review_confirm` **accept**  
> reviewHash: `sha256:8dfb19e3d9b2bc0b81efe259195a396d271f497d9ca6549ed332f0d00c36e8ee` · rulesVersion: `2026.09.25.2`

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| Title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| Role | `review` · `/agent-review` |
| changeScope | `new_page` |
| packKind | `list` (phone Field hub ≠ Kind B) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| prior QA | **PASS** · Aligned · `handoff/qa-compact.md` |
| taskId | `task_097b89fa` |
| updatedAt | `2026-09-25T07:40:30.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI phone hub/form | `Linm.Web.RMMS.Mobile` · `src/pages/WebRmmsMobileA/*` |
| API Patrol | `Linm.RMMS.WebService` · `Domains/Patrol` · cấm ERP.* |
| QA evidence | `qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` |
| Kind B / filter-bar / form `data-form-cols=5` | **WAIVE** phone hub (TL/QA) |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | **P0 Must = 0** | accept |

### Soft / debt (không chặn accept)

| ID | Class | Sev | Where | Note |
|----|-------|-----|-------|------|
| REV-S-PERM-01 | security | P2 | `PatrolSessionsController` | `[RequirePermission]` TODO peer KEEP · CommonLib ≥1.4.0 |
| REV-UI-DATE-01 | ui-fn | P3 | TD-02 plannedDate | locale en-US `09/25/2026` — Should (QA soft) |
| REV-BE-LOOKUP-01 | be-fn | P3 | FE `lookupStatic` | LOOKUP_STATIC direction/mode until shared form-options keys |

## Query (`/review-query`)

- List: page/pageSize whitelist · status/route filter · ILike search parameterized (EF) — **PASS**
- N+1/OOM: paged Take · AsNoTracking — **PASS**
- Lookup: SearchInput `road-routes/search` · Dropdown LOOKUP_STATIC — **PASS** wave A
- Kind B grid query keys: **N/A WAIVE**

## Security

- JWT via Mobile.Bff · no secrets in FE pages — **PASS**
- Tenant: CompanyCode + `allowed_company_ids` cross-company deny on GetById — **PASS**
- IDOR: ForbiddenException 403 — **PASS**
- Injection: EF params · no raw SQL concat — **PASS**
- ERP.*: none — **PASS**
- Soft: RequirePermission attribute deferred peer (REV-S-PERM-01)

## UI function

- Chrome: VN UTF-8 · 0 `CREATE` / demo note / mojibake (rg + QA S0) — **PASS**
- SearchInput route + LeaveConfirmModal forms — **PASS**
- CRUD smoke: QA S0/S1/QA-20 live · not empty-only — **PASS** (REV-UI-CRUD-EMPTY-01 N/A fail)
- Kind B shell / filter-right / form-grid-05 / ERP toolbar zones — **WAIVE** phone Field hub
- Visual: QA Read Aligned (S0/S1/QA-20) · Must 0 — cite QA (PNG Read gated this agent)

## BE function

- Endpoints vs SA: GET/POST sessions · check-ins · plan-points · road-routes/search · auth/profile · files — **PASS**
- Status: 200/404/409 dup / 422 / 403 — **PASS**
- Migration: none wave A — **PASS**

## Confirm

`review_confirm` = **accept** (autoApprove=ON · P0=0 · QA confirmed)

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none · soft debt optional later |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.25.2 |
| reviewHash | sha256:8dfb19e3d9b2bc0b81efe259195a396d271f497d9ca6549ed332f0d00c36e8ee |
| contentHash | sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e |
| generatedAt | 2026-09-25T07:40:30.000Z |
| versionGate | ok |
