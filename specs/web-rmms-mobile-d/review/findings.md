# Review — Findings — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca / sổ KN · delta SUBMIT-VALIDATE |
| role | `review` · `/agent-review` |
| status | **done** |
| packKind | `list` (phone Field list+form) |
| changeScope | `edit_page` |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| hashGate | **re-review** — hash đổi vs findings baseline (`7ea5…`) · khớp chain delta DA→QA |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| schemaVersion | `1` |
| taskId | `task_5b73d1c3` |
| autoApprove | ON |
| review_confirm | **done** |
| writtenAt | `2026-09-27T09:10:00.000Z` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdRoute | `/kien-nghi/moi` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |

## Inputs (compact · Token-opt B)

| prior | status | compact |
|-------|--------|---------|
| data_analy → qa | confirmed | handoff/*-compact.md (all exist · hash `5f81…` match) |
| QA smoke | PASS · Aligned · Must 0 | S0/S1/QA-20 capture_d · stock S1 blank soft |

## QUERY

| id | sev | finding | verdict |
|----|-----|---------|---------|
| Q-01 | — | EF Patrol/session/finding — LINQ param bind · **no** raw SQL / `FromSqlRaw` on wave D surfaces (keep) | **PASS** |
| Q-02 | — | Tenant `HasQueryFilter(CompanyCode)` on petition/session · create stamps company | **PASS** |
| Q-03 | — | **0** `ERP.*` / `UserSearchInput` in `WebRmmsMobileD` + patrol lookups | **PASS** |
| Q-04 | — | Lookups: `GET /integration/users` + `GET /integration/road-routes/search` via mobile apiClient · miss `--` | **PASS** |

**Must:** 0 · **Should:** 0

## SEC

| id | sev | finding | verdict |
|----|-----|---------|---------|
| S-01 | soft | `[RequirePermission]` petitions/findings/sessions — stub tới CommonLib ≥1.4.0 (peer debt · non-blocking) | **ACCEPT** keep |
| S-02 | — | Company filter + BFF forward `api/v1/**` · JWT via mobile-bff · `UsersMobileController` forward-only | **PASS** |
| S-03 | soft | `GAP-QA-PROFILE-401` — soft-prefill khi profile 401 → login · không leak secret | **ACCEPT** |
| S-04 | — | `GAP-RECEIVER` **CLOSED** — `receiverName` = SearchInput users · **cấm** free-text · miss `--` | **PASS** (delta) |
| S-05 | — | Transport `mobileApiBase` only · runtime rewrite web-bff→mobile-bff · **cấm** invent WS users API | **PASS** |

**Must:** 0 · **Should:** soft only (tracked)

## UI-FN

| id | sev | finding | verdict |
|----|-----|---------|---------|
| U-01 | — | TD-06 `CloseSessionPage` — SearchInput `USER_LOOKUP_CONFIG` · Pattern B (`validationAttempted` · banner+inline) · Lưu `disabled={saving\|\|loading}` · LeaveConfirm · **no GPS** | **PASS** |
| U-02 | — | TK-06 `PetitionFormPage` — SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` · **no** `ROAD_ROUTE_SEED` · Pattern B · GPS deny after click · noFace OK · Lưu `disabled={saving}` | **PASS** |
| U-03 | — | TK-03/05 keep baseline · no submit-validate delta this wave | **PASS** keep |
| U-04 | — | Kind B / DES-GRID / FilterBar / ui-schema / HIST — **WAIVE** phone · **T-UI-LKP-01 KEEP** | **WAIVE** / KEEP |
| U-05 | — | QA visual S0/S1/QA-20 **Aligned** · Must 0 · phone 430 · capture_d authoritative | **PASS** |

**Must:** 0

## BE-FN

| id | sev | finding | verdict |
|----|-----|---------|---------|
| B-01 | — | `Schema_PatrolPetition` + session handover/pause keep · **no** new entity this delta | **PASS** |
| B-02 | — | APIs keep: PUT sessions · GET\|POST petitions · GET road-routes/search · GET integration/users (existing) | **PASS** |
| B-03 | — | BFF `UsersMobileController` forward `integration/users` · Mobile.Bff only · **cấm** new WS controller | **PASS** |
| B-04 | — | DOMAIN-MAP row `web-rmms-mobile-d` → Patrol (+ Maintenance/Integration cite) · **cấm ERP.*** | **PASS** |
| B-05 | — | Pause = `IsPaused` on Đang tuần · **cấm** Status Tạm dừng riêng (keep) | **PASS** |

**Must:** 0

## Cross-role consistency

- Inventory / FormMode↔API / zones TD-06·TK-06 delta (+ TK-03·TK-05 keep) · DES-LEAVE — aligned PO→Design→SA→TL→Dev→QA.
- UNCLEAR-USER-SEARCH-CTRL · RECEIVER-MISS · ROUTE-SEED · GAP-DA-MOB-D-USERS-01 / SEED-01 — **CLOSED**.
- Soft remain: PERM stub · PROFILE-401 · stock e2e blank (QA) — non-blocking.

## Verdict

| Gate | Result |
|------|--------|
| Must findings | **0** |
| QA prior | PASS · Aligned · capture_d |
| Dev build prior | yarn + WebService + Mobile.Bff PASS |
| review_confirm | **done** (autoApprove) |
| Overall | **PASS** |

## Debt keep (non-blocking)

- `PERM` RequirePermission stub · `GAP-QA-PROFILE-401` soft · stock e2e S1 blank soft (capture_d authoritative)

## Handoff

- compact: `specs/web-rmms-mobile-d/handoff/review-compact.md`
- pipeline complete · **cấm** start role khác trong task này (GAP-PKT-ROLE-01)
- e2eQa already ran under `/agent-qa*` — Review **không** re-run e2e/start:std

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
