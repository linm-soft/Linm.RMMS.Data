# Dev — Implement — attendance-day (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen`  
> task `task_94e812e1` · T-AND-ATT-DAY

| Feature | `attendance-day` |
| assembleDebug | **BUILD SUCCESSFUL** |
| Kit | `LinmTopBar` icon-only back · Text hero 24 · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `EmptyChrome` · `LinmToast` · shell tab field giữ |

## Layers

| Presentation | `presentation/feature/attendanceday/AttendanceDayScreen.kt` · `AttendanceDayViewModel.kt` · `AttendanceDayUiState.kt` · hub wire `AttendanceViewModel.setOnOpenDay` · `MainTabScreen` route `attendance-day/{dayKey}/{dayTitle}` |
| Domain | `domain/model/AttendanceDayDetailModels.kt` · `domain/usecase/FetchAttendanceDayUseCase.kt` · `AttendanceDayNav` · **no** `AttendanceDayCopy` demo |
| Data | `data/mapper/AttendanceDayDtoMapper.kt` · reuse `AttendanceRepositoryImpl.fetchLogs` · GET `patrol/attendance-logs` · client filter `dayKey` |
| DI | Hilt inject `FetchAttendanceDayUseCase` · `AttendanceDayViewModel` |

## IA / API

- route_a: hub day row tap → navigate `#sc-attendance-day` + `dayKey` + `dayTitle` · Back icon → pop hub.
- Appear GET list + filter `dayKey` · bind hero/badge/range/route/count/logs per real-data §B.
- Fail/offline → empty chrome + toast · screen **vẫn mở** · **cấm** demo T7/CN · **cấm** fake 200 · **cấm** `AlertDialog`.
- Empty count=0 (GET OK) → `EmptyChrome` · badge Nghỉ · **cấm** mock.
- Tap log row → **push** `attendance-log/{id}` + live Guid `Id` (`attendanceId`) · **cấm** toast-only · **cấm** supervise-detail GetById · **cấm** fake UUID GET.
- 403 XCO / thiếu dayKey → toast · back hub.
- E2E: `sc-attendance-day` · `btn-att-day-back` · `attendance-day-*`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL** · Mobile.Bff `dotnet build` **PASS**.

## Notes

`/edit-mobile-feature` **GAP-MOB-ATT-LOG-ID-01** 2026-09-16 — tap log **push** `attendance-log/{id}` với live `Id` · **cấm** fake UUID GET · **cấm** toast-only. Step 4b / T-BE **N/A**.

<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_94e812e1 -->
