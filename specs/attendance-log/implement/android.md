# Dev — Implement — attendance-log (Android)

> Status: **done** · `/edit-mobile-feature` · `/dev-android-compose`  
> T-AND-ATT-LOG · **assembleDebug BUILD SUCCESSFUL**

| Feature | `attendance-log` |
| Kit | `LinmTopBar` icon-only · Text `heroWho` · `LinmBadge` · `LinmListRow` · `EmptyChrome` · `LinmToast` |

## Layers

| Presentation | `presentation/feature/attendancelog/*` · `AttendanceDayScreen.onOpenLog` · `MainTabScreen` `attendance-log/{id}` |
| Domain | `AttendanceLogDetail` · `FetchAttendanceLogDetailUseCase` |
| Data | `AttendanceRepositoryImpl.fetchById` · GET `patrol/attendance-logs/{id}` |
| DI | Hilt |

## Notes

Route `attendance-log/{id}` · back pop day. Same bind/fail rules as iOS. **Cấm** map CTA · **cấm** `AlertDialog`.

VERIFY: `./gradlew :app:assembleDebug`.
