# Dev — Implement — attendance (iOS)

> Status: **confirmed** · `/edit-mobile-feature` · complete chấm công (wire report)  
> dest **iPhone 17 Pro** **BUILD SUCCEEDED**

| Feature | `attendance` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (complete chấm công)

- Hero **Báo cáo** → push `#sc-attendance-report` (`setOnOpenReport`) · **cấm** toast-only (`GAP-MOB-ATT-RPT-NAV-01`).
- Tap day → push `#sc-attendance-day` (sibling shipped).
- POST check-in `userName` = `auth.lastWho()` · GET live-only · empty/fail → `[]`.
- Report screen owner = slug `attendance-report` · GET `patrol/attendance-logs` pageSize 200 + client period.

## Layers

| Presentation | `AttendanceView` · `AttendanceViewModel` · `AppRouter` `showAttendanceFromField` / `showAttendanceReport` / `showAttendanceDay` |
| Domain | `AttendanceUseCases` · `FetchAttendanceReportLogsUseCase` |
| Data | GET/POST `patrol/attendance-logs` |

## IA / API

- route_a: Tab field → patrol-home seg **Chấm công** → push `#sc-attendance`.
- Chấm vào → GPS → POST · Báo cáo → **push report** · Tap day → push day-detail.
- E2E: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED** (`/edit-mobile-feature` 2026-09-16).
