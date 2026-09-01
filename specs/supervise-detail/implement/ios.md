# Dev — Implement — supervise-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
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
| T-IOS-SUP-DETAIL cleanup | **done** | remove OfflineDemo · live-only GET by id |
| T-BE / T-BFF | **n/a · reuse** | `GET patrol/attendance-logs/{id}` · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt · EmptyChrome OK |

## Ship summary (cleanup_mock)

- **Removed** `SuperviseDetailCopy.demo` / `.withId` / OfflineDemo outcome
- **UC:** `loaded` · `failed` · `notFound` · `forbidden` only
- **404** → EmptyChrome `empty-not-found`
- **GET fail** → EmptyChrome `empty-load-fail` + toast `Không tải được chi tiết check-in.` (**cấm** «Đang dùng dữ liệu mẫu»)
- **403** → toast + back · **thiếu Id** → toast + back
- **Org fallback** mapper only (`SuperviseCopy.orgFallback`) khi live Note empty
- Entry list TapItem → push `#sc-supervise-detail` · CTA map unchanged

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `Domain/UseCases/FetchAttendanceLogByIdUseCase.swift` | OfflineDemo → Failed |
| `Domain/Entities/SuperviseDetailModels.swift` | drop SuperviseDetailCopy |
| `Presentation/Features/SuperviseDetail/*` | loadFailed · EmptyChrome dual |
| `Presentation/Shared/LinmCopy.swift` | loadFail toast no demo wording |

## Version meta

| Field | Value |
|-------|-------|
| skillId | edit-mobile-feature+agent-dev-ios |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-cleanup-mock-20260901 |
| iosContentHash | sha256:supervise-detail-implement-ios-cleanup-20260901 |
| taskId | `task_b9997d8c` |

---
<!-- Version meta: skillId=edit-mobile-feature+agent-dev-ios skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_b9997d8c -->
