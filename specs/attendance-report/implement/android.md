# Dev — Implement — attendance-report (Android)

> Status: **confirmed** · `/edit-mobile-feature` · complete chấm công  
> `assembleDebug` **BUILD SUCCESSFUL** · T-AND-ATT-RPT

| Feature | `attendance-report` |
| assembleDebug | **PASS** · **BUILD SUCCESSFUL** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `EmptyChrome` · `LinmToast` · `LinmBusyOverlay` |

## Notes

- Dual parity iOS · TopBar **icon-only** back (ArrowBack) · title **Báo cáo công**.
- Route `attendance-report` · day drill `attendance-day/{dayKey}/{dayTitle}`.
- GET + client period · live-only fail (toast + empty) · **cấm** demo rows · **cấm** invent report API.
- E2E: `sc-attendance-report` · `att-report-period` · `attendance-report-kpi` · `att-report-day-*` · `btn-att-report-back`.

## Layers

| Presentation | `presentation/feature/attendancereport/AttendanceReportScreen.kt` · `AttendanceReportViewModel.kt` · `MainTabScreen` |
| Domain | `AttendanceReportModels` · `FetchAttendanceReportLogsUseCase` · `AttendanceDtoMapper.report` |
| Data | reuse `AttendanceRepositoryImpl` |
| DI | Hilt |

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL** (2026-09-16).
