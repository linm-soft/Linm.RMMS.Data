# Dev — Implement — patrol-history (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| task | `T-IOS-PAT-HIST` |
| role | `/agent-dev-ios` |
| status | **done** |
| changeScope | `edit_page` (cleanup_mock) |
| taskId | `task_430bde31` |
| updatedAt | `2026-09-01T05:30:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **cleanup_mock** (`task_430bde31`): live-only · `FetchPatrolHistoryOutcome` · GET OK empty = `[]` + `EmptyChromeView` · fail = toast `patrol.history.toast.loadFail` · **cấm** `PatrolHistoryCopy.demoItems`.
- **GAP-MOB-EDIT-DEMO-01:** removed ≥3 demo fallback · removed `PatrolHistoryCopy.demoItems` SSOT.

## Delta (prior TL GAP fixes · task_c3705a2f)

| ID | Fix |
|----|-----|
| GAP-F-PAT-HIST-01 | `historyBadgeTitle` → `patrol.history.badge.done` = **Hoàn thành** |
| GAP-F-PAT-HIST-03 | `offlineQueued` + `Offline queue` → badge **Mất sóng** / warning |
| GAP-F-PAT-HIST-04 | `patrol.history.badge.done` in `LinmCopy` + `mobile-strings.json` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolHistory/*` |
| Domain | `PatrolHistoryModels` (extensions) · `FetchPatrolHistoryUseCase` · `FetchPatrolHistoryOutcome` |
| Data | `PatrolDto.swift` mapper plumbs `offlineQueued` |
| Shell | `AppContainer` · `AppRouter` · `PatrolHomeViewModel` |

## Behavior

- Hub row **Lịch sử phiên** → push `#sc-patrol-history`
- Nav back **Tuần đường** · trailing **Lọc** → toast
- Large title **Lịch sử ca** · `LinmSearchField` client filter
- GET `patrol/sessions` · live-only · empty → `history-list-empty`
- Tap row → push `#sc-patrol-detail`
- Rows: `leadingSlot: 0` · badge 4 trạng thái · chevron

## Build (VERIFY GATE)

**PASS** — `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** (`task_430bde31` · `2026-09-01`).
