# Dev — Implement — patrol-history (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| task | `T-AND-PAT-HIST` |
| role | `/agent-dev-android` |
| status | **done** |
| changeScope | `edit_page` (cleanup_mock) |
| taskId | `task_430bde31` |
| updatedAt | `2026-09-01T05:30:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **cleanup_mock** (`task_430bde31`): live-only · `FetchPatrolHistoryOutcome` · GET OK empty = `[]` + `EmptyChrome` · fail = toast `patrol.history.toast.loadFail` · **cấm** `PatrolHistoryCopy.demoItems` (file removed).
- **GAP-MOB-EDIT-DEMO-01:** removed ≥3 demo fallback.

## Delta (prior TL GAP fixes · task_c3705a2f)

| ID | Fix |
|----|-----|
| GAP-F-PAT-HIST-01 | `historyBadgeTitle()` → `patrol.history.badge.done` = **Hoàn thành** |
| GAP-F-PAT-HIST-03 | `offlineQueued` + `Offline queue` → **Mất sóng** / warning |
| GAP-F-PAT-HIST-04 | `patrol.history.badge.done` in `LinmCopy` + `mobile-strings.json` |
| GAP-AND-NAV-01 | `LinmTopBar` `leadingText` = **Tuần đường** (`patrol.title`) |
| GAP-AND-ROW-01 | `LinmListRow` `leading=null` · `leadingSlot=0.dp` · chevron |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `presentation/feature/patrolhistory/*` |
| Domain | `FetchPatrolHistoryUseCase` · `FetchPatrolHistoryOutcome` |
| Data | `PatrolDtoMapper.kt` plumbs `offlineQueued` |
| Shell | `MainTabScreen` · `PatrolHomeViewModel` |

## Behavior

- Same as iOS dual · `#sc-patrol-history` · GET sessions live-only · search · toast filter · empty → `history-list-empty`

## Build (VERIFY GATE)

**PASS** — `./gradlew :app:assembleDebug` (`task_430bde31` · `2026-09-01`).
