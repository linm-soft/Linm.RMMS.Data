# Dev — Implement — attendance-report (iOS)

> Status: **confirmed** · `/edit-mobile-feature` · complete chấm công  
> dest **iPhone 17 Pro** **BUILD SUCCEEDED** · T-IOS-ATT-RPT

| Feature | `attendance-report` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmKpi` / `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmEmptyChrome` (`EmptyChromeView`) · `LinmToast` · `LinmBusyOverlay` |

## Notes

- `#sc-attendance-report` `DES-MOB-ATT-RPT` · TopBar back text **Chấm công** + chevron.
- Period Tuần/Tháng (default Tuần) · client re-filter · **cấm** invent `/attendance/report`.
- GET `patrol/attendance-logs` pageSize **200** · fail → toast `attendance.report.toast.loadFail` + EmptyChrome live-only (**cấm** demo SSOT rows · khớp hub/day cleanup).
- Empty period → EmptyChrome **Không có dữ liệu kỳ này** · hide section.
- KPI 2×2: Ngày đủ công · Số lần chấm · % Trong vùng · Ngoài vùng.
- Tap day → push `attendance-day` + `dayKey` · **reuse**.
- Entry: hub hero **Báo cáo** → `showAttendanceReport`.

## Layers

| Presentation | `Presentation/Features/AttendanceReport/AttendanceReportView.swift` · `AttendanceReportViewModel.swift` · `AppRouter` `showAttendanceReport` |
| Domain | `Domain/Entities/AttendanceReportModels.swift` · `Domain/UseCases/AttendanceReportUseCases.swift` · `AttendanceDtoMapper.report` |
| Data | reuse `AttendanceRepositoryImpl` GET `patrol/attendance-logs` |
| DI | `AppContainer.fetchAttendanceReportLogsUseCase` |

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED** (2026-09-16).
