# Dev — Implement — attendance (Android)

> Status: **confirmed** · `/edit-mobile-feature` · complete chấm công (wire report)  
> `assembleDebug` **BUILD SUCCESSFUL**

| Feature | `attendance` |
| assembleDebug | **PASS** · **BUILD SUCCESSFUL** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (complete chấm công)

- Hero **Báo cáo** → `navigate("attendance-report")` · **cấm** toast-only dual iOS.
- Tap day → `attendance-day/{dayKey}/{dayTitle}`.
- POST `userName` = `auth.lastWho()` · GET live-only.

## Layers

| Presentation | `AttendanceScreen` · `AttendanceViewModel` · `MainTabScreen` `attendance` + `attendance-report` |
| Domain | `AttendanceUseCases` · `FetchAttendanceReportLogsUseCase` |
| Data | GET/POST `patrol/attendance-logs` |

## IA / API

Dual parity iOS · route_a · live-only.  
GPS check-in POST · **push report** · day push sibling · **cấm** `AlertDialog` · **cấm** `mfeStdUrl`.  
E2E tags: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL** (`/edit-mobile-feature` 2026-09-16).
