# Implement — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field · Kind B **WAIVE**) |
| changeScope | `edit_page` · editTask=1 · § Delta Pattern B / capture / BFF / align |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phat-hien` |
| mfeStdUrl | `http://localhost:9301/phat-hien` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm web-bff** |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T08:25:00.000Z` |
| taskId | `task_3bc498b6` |
| demo | **N/A** · wave C delta |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `phat-hien` · size-limit WARN only pre-exist) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (0 error · 1 pre-exist CS0105) |
| BE `dotnet build` RMMS.Mobile.Bff | **PASS** (UsersMobileController KEEP) |
| migration | **none new** (Schema_PatrolFinding prior) · Step 4b **N/A** (no schema/API/DTO) |

## Delta this run

| id | Change |
|----|--------|
| T-DELTA-PATTERN-B-01 | `FindingFormPage` · `JournalReviewPage` · `FindingDetailPage` — CTA `disabled` chỉ `saving`/`hydrating`/`loading`/`capturing` · `validationAttempted` · banner `string[]` + dismiss · inline field errors · GPS deny on submit · **0** `disabled={!canSave\|!canConfirm\|!feedbackQty}` |
| T-DELTA-CAPTURE-01 | Local `<input type="file" accept="image/*" capture="environment">` TK-03 media + TK-05 feedback/recheck · LinImageUpload KEEP gallery (no fork — UNCLEAR-CAPTURE-PROP → local input) |
| T-DELTA-BFF-01 | Mobile.Bff `UsersMobileController` forward `integration/users` **already present** · verify build PASS · **0** new WebService endpoint |
| T-DELTA-ALIGN-01 | `WebRmmsMobileCLayout` `data-phone-frame="430"` · `--rmms-m-phone: 430px` · **0** new route/tab/icon |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| TK-02 | `/phat-hien` · `…/:sessionId` | list KEEP |
| TK-03 | `…/:sessionId/moi` · form | Pattern B + capture + banner |
| TK-04 | `…/:sessionId/doi-chieu/:lineId` | Pattern B note-on-lech |
| TK-05 | `…/:sessionId/:findingId` | Pattern B feedback/recheck + capture |
| DES-LEAVE | TK-03/04/05 | `useFormLeaveGuard` · LeaveConfirmModal KEEP |

## APIs (KEEP Live)

| Method | Path | FE |
|--------|------|----|
| GET | `/patrol/sessions/{id}/findings` | TK-02 |
| POST | `/patrol/findings` | TK-03 |
| GET | `/patrol/findings/{id}` | TK-03/05 |
| POST | `/patrol/findings/{id}/recheck` | TK-05 |
| PUT | `/patrol/journal-lines/{id}/review` | TK-04 |
| POST | `/patrol/findings/{id}/feedback` | TK-05 Pattern B only (no CRUD D) |
| GET | `/integration/users` | Mobile.Bff forward (peers) |

## Tasks DoD

| id | status |
|----|--------|
| T-BE-* / T-UI-* (prior) | **done** |
| T-DELTA-PATTERN-B-01 | **done** |
| T-DELTA-CAPTURE-01 | **done** |
| T-DELTA-BFF-01 | **done** (verify KEEP) |
| T-DELTA-ALIGN-01 | **done** |
| T-QA-* | **pending** QA |

## Debt

- RequirePermission TODO until CommonLib ≥1.4.0
- LinImageUpload gallery picker vẫn không có `capture` (package) — camera qua local input
- UNCLEAR-FEEDBACK-SCOPE → Pattern B only on Live feedback CTA · no CRUD D expand

## QA handoff

- mfeStdUrl: `http://localhost:9301/phat-hien`
- AC delta: PB-01..10 · keep L/F/R/K
- e2e: **queued** `/agent-qa*` only
