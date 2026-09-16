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

Route `attendance-log/{id}` · `id` = live Guid từ `attendanceId` · back pop day. **Cấm** fake UUID GET · **cấm** map CTA · **cấm** `AlertDialog`.

GAP-MOB-ATT-LOG-ID-01 **closed** 2026-09-16.

VERIFY: `./gradlew :app:assembleDebug`.
