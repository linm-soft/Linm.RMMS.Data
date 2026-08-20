# Dev — Implement — patrol-history (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| task | `T-AND-PAT-HIST` |
| role | `/agent-dev-android` |
| status | **confirmed** |
| taskId | `task_c3705a2f` |

## Delta (TL GAP fixes)

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
| Domain | `PatrolHistoryModels` · `PatrolHomeModels` (`offlineQueued`) · `FetchPatrolHistoryUseCase` |
| Data | `PatrolDtoMapper.kt` plumbs `offlineQueued` |
| Shell | `MainTabScreen` · `PatrolHomeViewModel` |

## Behavior

- Same as iOS dual · `#sc-patrol-history` · GET sessions · search · toast filter/detail

## Build (VERIFY GATE)

**PASS** — `./gradlew :app:assembleDebug` (`task_c3705a2f` · `2026-08-20`).
