# Dev — Implement — attendance-log (iOS)

> Status: **done** · `/edit-mobile-feature` · `/dev-ios-swiftui`  
> T-IOS-ATT-LOG · dest **iPhone 17 Pro Max** **BUILD SUCCEEDED**

| Feature | `attendance-log` |
| Kit | `LinmTopBar` · Text `heroWho` · `LinmBadge` · `LinmListRow` · `EmptyChromeView` · `LinmToast` |

## Layers

| Presentation | `Presentation/Features/AttendanceLog/*` · hub wire `AttendanceDayViewModel.setOnOpenLog` · `AppRouter` `navigationDestination(item: $attendanceLogId)` |
| Domain | `AttendanceLogDetailModels` · `FetchAttendanceLogDetailUseCase` · `AttendanceLogDtoMapper` |
| Data | `AttendanceRepository.fetchById` · GET `patrol/attendance-logs/{id}` |
| DI | `AppContainer.fetchAttendanceLogDetailUseCase` |

## Notes

Tap log row on `#sc-attendance-day` **push** `#sc-attendance-log` + live Guid `Id` via `navigationDestination(item:)` · **cấm** toast-only · **cấm** `isPresented` + empty String · **cấm** fake UUID GET · **cấm** supervise-detail · **cấm** map CTA.

GAP-MOB-ATT-LOG-ID-01 **closed** 2026-09-16.

VERIFY: `xcodegen generate` + `xcodebuild` dest iPhone 17 Pro Max.
