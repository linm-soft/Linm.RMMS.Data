# Dev — Implement — supervise-detail (Android)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/edit-mobile-feature` · `/agent-dev-android` |
| status | **PASS** |
| packKind | **`screen`** |
| changeScope | `edit_page` |
| gap | `cleanup_mock` |
| route_confirm | **route_a** |
| taskId | `task_b9997d8c` |
| updatedAt | `2026-09-01T03:00:52.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-SUP-DETAIL cleanup | **done** | remove OfflineDemo · live-only GET by id |
| T-BE / T-BFF | **n/a · reuse** | `GET patrol/attendance-logs/{id}` · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt · EmptyChrome OK |

## Ship summary (cleanup_mock)

- **Removed** `SuperviseDetailCopy` object + OfflineDemo outcome
- **UC:** `Loaded` · `Failed` · `NotFound` · `Forbidden` only
- **404** → EmptyChrome `empty-not-found`
- **GET fail** → EmptyChrome `empty-load-fail` + toast `Không tải được chi tiết check-in.` (**cấm** «Đang dùng dữ liệu mẫu»)
- **403** → toast + back · **thiếu Id** → toast + back
- **Org fallback** mapper only (`SuperviseCopy.orgFallback`)
- Nav Home+Patrol · CTA map unchanged

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `domain/usecase/FetchAttendanceLogByIdUseCase.kt` | OfflineDemo → Failed |
| `domain/model/SuperviseModels.kt` | drop SuperviseDetailCopy |
| `presentation/feature/supervisedetail/*` | loadFailed · EmptyChrome dual |
| `presentation/copy/LinmCopy.kt` | loadFail toast no demo wording |

## Version meta

| Field | Value |
|-------|-------|
| skillId | edit-mobile-feature+agent-dev-android |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-cleanup-mock-20260901 |
| androidContentHash | sha256:supervise-detail-implement-android-cleanup-20260901 |
| taskId | `task_b9997d8c` |

---
<!-- Version meta: skillId=edit-mobile-feature+agent-dev-android skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_b9997d8c -->
