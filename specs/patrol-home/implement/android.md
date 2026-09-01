# Dev — Implement — patrol-home (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| task | `T-AND-PAT-HOME` · `task_488d0e96` |
| role | `/agent-dev-android` |
| status | **confirmed** |
| changeScope | `new_page` |
| route_confirm | **route_a** |

## Delta (this turn)

| Surface | Before | After |
|---------|--------|-------|
| Fetch sessions | empty/fail → `demoToday`/`demoActive` | **`FetchPatrolSessionsOutcome`** live-only · empty = `emptyActive` + EmptyChrome |
| Today section | always 2 demo rows | live GET · empty → `patrol-today-empty` |
| Hero / KPI | demo active session | live active or `emptyActive` |
| Fail | silent demo | toast `patrol.toast.loadFail` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `presentation/feature/patrolhome/*` |
| Shell | `MainTabScreen` field tab · Home → select field tab |
| Domain | `FetchPatrolSessionsUseCase` · `FetchOfflineQueueCountUseCase` |
| Data | `PatrolRepositoryImpl` · GET `patrol/sessions` |

## Kit zones (verified)

`LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · **`LinmPrimaryButton`** · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmToast`

## Behavior (route_a)

Dual parity iOS — toast siblings · badge 0 ẩn · nav sync/Lưu trữ → `patrol-offline` · **cấm** `AlertDialog` · **cấm** push ops on bell.

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

**PASS** (`edit-mobile-feature` task_22fa5cba · cleanup_mock live-only).
