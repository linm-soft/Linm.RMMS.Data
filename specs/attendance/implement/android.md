# Dev — Implement — attendance (Android)

> Status: **confirmed** · `/agent-dev-android` · `/edit-mobile-feature` · cleanup_mock  
> task `task_242d0372` · T-AND-ATTENDANCE (edit)

| Feature | `attendance` |
| assembleDebug | **PASS** · **BUILD SUCCESSFUL** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (cleanup_mock)

- **GAP closed** — gỡ `AttendanceCopy.demoUser` POST fallback dual.
- POST `userName` = `auth.lastWho()` · blank → `Failed` + toast `attendance.toast.checkInFail`.
- GET live-only · empty/fail → empty list.
- Seed: profile displayName · POST check-in → attendance-logs · Step 4b **N/A**.

## Layers

| Presentation | `presentation/feature/attendance/AttendanceScreen.kt` · `AttendanceViewModel.kt` · `AttendanceUiState.kt` · `MainTabScreen` `navigate("attendance")` |
| Domain | `domain/usecase/AttendanceUseCases.kt` · `domain/model/AttendanceModels.kt` · `domain/repository/AttendanceRepository.kt` |
| Data | `data/repository/AttendanceRepositoryImpl.kt` · `data/mapper/AttendanceDtoMapper.kt` · `ApiService` GET/POST `patrol/attendance-logs` |
| DI | Hilt `NetworkModule` |

## IA / API

Dual parity iOS · route_a · live-only.  
GPS check-in POST · toast report · day push sibling · **cấm** `AlertDialog` · **cấm** `mfeStdUrl`.  
E2E tags: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL** (`task_242d0372`).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-01T08:34:20.000Z` |
| versionGate | rechecked |
| taskId | `task_242d0372` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
