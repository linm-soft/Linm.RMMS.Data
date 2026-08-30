# STATUS — asset-kcht-32

| Field | Value |
|-------|-------|
| feature | `asset-kcht-32` |
| phase | `qa` |
| status | `await_confirm` |
| changeScope | `edit_page` + catalog 32 |
| packKind | `master` + mobile |
| context | `docs/context/features/asset-kcht-32.md` |
| controlHint | `specs/_data-analy/features/asset-kcht-32-control-hint.md` |
| realData | **MISSING** `specs/_data-analy/features/asset-kcht-32-real-data.md` |
| peer | `asset` · `asset-type` · `mobile-p1` · `incident` |
| mfeStdUrl | claimed `http://localhost:9301/asset-kcht-32` — **invalid** (Master `start:std`=:9318 · 0 route · HTTP 404) |
| updatedAt | `2026-08-29T13:37:40.926Z` |
| taskId | `task_a754ec67` |
| blockReason | QA FAIL — DoR (thiếu real-data + requirement + design; SA/TL/Dev blocked); e2eQa ON không chạy; GAP-QA-DOR-01 / STD-01 / E2E-01/02 → qa_fail_rollback |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-qa | task DoR + e2e gate | qa_asset_kcht_32 | 2026-08-29T13:35:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | context + control-hint | **done** |
| 1 | po | `po/requirement.md` | **done** |
| 2.1 | design | `ui/design.md` | **confirmed** |
| 3 | sa | `be/solution-discovery.md` | **confirmed** |
| 4 | team_lead | `task/asset-kcht-32.md` | **blocked** (DoR FAIL · không T-*) |
| 5 | dev | `implement/asset-kcht-32.md` | **confirmed** |
| 6 | qa | `qa/scenarios.md` | **blocked** |
| 7+ | review / … | — | **pending** (cấm advance) |

## Prototype

| | |
|--|--|
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| iOS | `…/ios/index.html` → Tài sản → 32 loại |
| Android | `…/android/index.html` |
| data | `ui/prototype/asset-kcht-32.js` |

## Confirms

| Gate | Value |
|------|-------|
| catalog_32_confirm | **expand_36** |
| gap_ak32 | **accept_defaults** (01–08 closed) |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| task_confirm | **blocked** (TL DoR FAIL) |
| implement_confirm | **blocked** (Dev DoR FAIL) |
| qa_confirm | **fail** · `qa_fail_rollback` |

## Unblock

1. `/agent-data-analy` → tạo `specs/_data-analy/features/asset-kcht-32-real-data.md` (§B bind bắt buộc).
2. Khôi phục/confirm `po/requirement.md` + `ui/design.md`.
3. Re-queue `/agent-sa` → `solution_confirm`.
4. Re-queue `/agent-team-lead` → FormType T-* (+ T-QA-*).
5. Re-queue `/agent-dev` — MFE build + `mfeStdUrl` + BE Step 4b.
6. Board Approve **`qa_fail_rollback`** → Dev plan (`qa_fix_plan`) rồi implement → re-QA e2e.

## Handoff → Review

**Cấm** — QA FAIL · không handoff Review.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.23 |
| generatedAt | `2026-08-29T13:35:00.000Z` |
| versionGate | fail_dor |
| taskId | task_a754ec67 |
