# Dev — Implement — attendance-log (iOS)

> Status: **done** · `/edit-mobile-feature` · `/dev-ios-swiftui`  
> T-IOS-ATT-LOG · dest **iPhone 17 Pro** **BUILD SUCCEEDED**

| Feature | `attendance-log` |
| Kit | `LinmTopBar` · Text `heroWho` · `LinmBadge` · `LinmListRow` · `EmptyChromeView` · `LinmToast` |

## Layers

| Presentation | `Presentation/Features/AttendanceLog/*` · hub wire `AttendanceDayViewModel.setOnOpenLog` · `AppRouter` `showAttendanceLog` |
| Domain | `AttendanceLogDetailModels` · `FetchAttendanceLogDetailUseCase` · `AttendanceLogDtoMapper` |
| Data | `AttendanceRepository.fetchById` · GET `patrol/attendance-logs/{id}` |
| DI | `AppContainer.fetchAttendanceLogDetailUseCase` |

## Notes

Tap log row on `#sc-attendance-day` **push** `#sc-attendance-log` + id · **cấm** toast-only · **cấm** supervise-detail · **cấm** map CTA. Fail → empty + toast. Missing field → «—». GPS readonly.

VERIFY: `xcodegen generate` + `xcodebuild` dest iPhone 17 Pro.
