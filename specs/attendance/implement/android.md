# Dev — Implement — attendance (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call`  
> task `task_a728ce1a` · T-AND-ATTENDANCE

| Feature | `attendance` |
| assembleDebug | **PASS** · **BUILD SUCCESSFUL** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Layers

| Presentation | `presentation/feature/attendance/AttendanceScreen.kt` · `AttendanceViewModel.kt` · `AttendanceUiState.kt` · `MainTabScreen` `navigate("attendance")` · `PatrolHomeViewModel.setOpenAttendance` |
| Domain | `domain/usecase/AttendanceUseCases.kt` · `domain/model/AttendanceModels.kt` · `domain/repository/AttendanceRepository.kt` |
| Data | `data/repository/AttendanceRepositoryImpl.kt` · `data/mapper/AttendanceDtoMapper.kt` · `ApiService` GET/POST `patrol/attendance-logs` |
| DI | Hilt `NetworkModule` |

## IA / API

Dual parity iOS · route_a push from patrol-home segment · demo fallback.  
GPS check-in POST · toast report/day · **cấm** `AlertDialog` · **cấm** push sibling.  
E2E tags: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL**.

## Notes

Step 4b / T-BE **N/A** — reuse attendance-logs GET+POST. **Cấm** invent report/zones · **cấm** `mfeStdUrl`.
