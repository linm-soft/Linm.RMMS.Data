# Dev — Implement — supervise-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/agent-dev-ios` · **qaFixPhase=implement** |
| status | **PASS** (verify-only) |
| packKind | **`screen`** |
| changeScope | `edit_page` |
| gap | `qaFailFix` — **Android-only** · iOS A3 prior PASS |
| taskId | `task_112638ae` |
| qaFailFrom | `task_02d20b55` |
| updatedAt | `2026-09-01T15:25:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| Code change | **n/a** | Plan: **không** reopen iOS detail/list trừ regression |
| VERIFY GATE | **PASS** | `xcodegen` + `xcodebuild` scheme `LinmRmms` dest **iPhone 17 Pro** |
| Step 4b | **N/A** | reuse GetById live |

## Ship summary

- iOS `#sc-supervise` / `#sc-supervise-detail` giữ prior cleanup_mock + A3 live wire
- QA fail root = Android list no GET — fixed trên Android repo

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro'` | **PASS** |
| e2e / mfeStdUrl | **SKIP** (cấm Dev) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-qa-fix-ios-verify-20260901 |
| iosContentHash | sha256:supervise-detail-implement-ios-cleanup-20260901 |
| taskId | `task_112638ae` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.19.26 schemaVersion=1 qaFixPhase=implement taskId=task_112638ae -->
