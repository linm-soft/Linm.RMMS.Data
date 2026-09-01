# Dev — Implement — attendance-day (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen`  
> task `task_94e812e1` · T-IOS-ATT-DAY

| Feature | `attendance-day` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · Text hero 28 · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `EmptyChromeView` · `LinmToast` · shell `LinmTabBar` giữ tab field |

## Layers

| Presentation | `Presentation/Features/AttendanceDay/AttendanceDayView.swift` · `AttendanceDayViewModel.swift` · `AttendanceDayUiState.swift` · hub wire `AttendanceViewModel.setOnOpenDay` · `AppRouter` `showAttendanceDay` |
| Domain | `Domain/Entities/AttendanceDayDetailModels.swift` · `Domain/UseCases/AttendanceDayUseCases.swift` · `FetchAttendanceDayUseCase` · `AttendanceDayDtoMapper` · `AttendanceDayNav` · **no** `AttendanceDayCopy` demo |
| Data | reuse `AttendanceRepositoryImpl.fetchLogs` · GET `patrol/attendance-logs` · client filter `dayKey` |
| DI | `App/AppContainer.swift` · `fetchAttendanceDayUseCase` |

## IA / API

- route_a: hub `#sc-attendance` day row tap → push `#sc-attendance-day` + `dayKey` + `dayTitle` · Back «Chấm công» → `go('attendance')`.
- Appear GET list + filter `dayKey` · bind hero/badge/range/route/count/logs per real-data §B.
- Fail/offline → empty chrome + toast · screen **vẫn mở** · **cấm** demo T7/CN · **cấm** fake 200 · **cấm** `UIAlert`.
- Empty count=0 (GET OK) → `EmptyChromeView` · badge Nghỉ · **cấm** mock.
- Tap log row → toast **Chi tiết lần chấm** · **cấm** supervise-detail GetById.
- 403 XCO / thiếu dayKey → toast · back hub.
- E2E: `sc-attendance-day` · `btn-att-day-back` · `attendance-day-*`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED** · Mobile.Bff `dotnet build` **PASS**.

## Notes

`/edit-mobile-feature` **no-mock BE-only** — `loadFailed` empty detail + toast · hub `[]` not `demoDays` · mapper no invent QL.1/Ca sáng. Step 4b / T-BE **N/A** — reuse live GET `patrol/attendance-logs` + client filter. **Cấm** invent `api/v1/attendance-day` · **cấm** `mfeStdUrl`.

<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_94e812e1 -->
