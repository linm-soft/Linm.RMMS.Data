# Dev — Implement — attendance (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call`  
> task `task_a728ce1a` · T-IOS-ATTENDANCE

| Feature | `attendance` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` / session toast · `LinmBusyOverlay` |

## Layers

| Presentation | `Presentation/Features/Attendance/AttendanceView.swift` · `AttendanceViewModel.swift` · `AppRouter` `showAttendanceFromField` · `PatrolHomeViewModel.setOpenAttendance` |
| Domain | `Domain/UseCases/AttendanceUseCases.swift` · `Domain/Entities/AttendanceModels.swift` · `Domain/Repositories/AttendanceRepository.swift` · `FetchAttendanceHistoryUseCase` · `CreateAttendanceCheckInUseCase` · `AttendanceDtoMapper` · `AttendanceCopy` |
| Data | `Data/Repositories/AttendanceRepositoryImpl.swift` · GET/POST `patrol/attendance-logs` |
| DI | `App/AppContainer.swift` |

## IA / API

- route_a: Tab field → patrol-home seg **Chấm công** → push `#sc-attendance` · seg **Tuần đường** = pop.
- Appear GET `patrol/attendance-logs` Bearer · empty/fail/offline → `AttendanceCopy.demoDays` · screen **mở**.
- Chấm vào → GPS → POST · hero **Đã chấm vào** · refresh days · toast · **cấm** `UIAlert`.
- Báo cáo / tap day → toast **Báo cáo công** / **Chi tiết ngày công** · **cấm** push sibling.
- E2E: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED**.

## Notes

Step 4b / T-BE **N/A** — reuse live GET+POST `patrol/attendance-logs`. **Cấm** invent report API · **cấm** `mfeStdUrl`.
