# Dev — Implement — attendance (iOS)

> Status: **confirmed** · `/agent-dev-ios` · `/edit-mobile-feature` · cleanup_mock  
> task `task_242d0372` · T-IOS-ATTENDANCE (edit)

| Feature | `attendance` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (cleanup_mock)

- **GAP closed** — gỡ `AttendanceCopy.demoUser` ("Nguyễn Văn A") POST fallback.
- POST check-in `userName` = `auth.lastWho()` (displayName → login id live) · empty → `.failed` + toast `attendance.toast.checkInFail`.
- GET history live-only · empty/fail → `[]` (không demoDays).
- Seed: profile displayName từ login · attendance-logs via POST check-in · Step 4b **N/A**.

## Layers

| Presentation | `Presentation/Features/Attendance/AttendanceView.swift` · `AttendanceViewModel.swift` · `AppRouter` `showAttendanceFromField` · `PatrolHomeViewModel.setOpenAttendance` |
| Domain | `Domain/UseCases/AttendanceUseCases.swift` · `Domain/Entities/AttendanceModels.swift` · `Domain/Repositories/AttendanceRepository.swift` · `FetchAttendanceHistoryUseCase` · `CreateAttendanceCheckInUseCase` |
| Data | `Data/Repositories/AttendanceRepositoryImpl.swift` · GET/POST `patrol/attendance-logs` |
| DI | `App/AppContainer.swift` |

## IA / API

- route_a: Tab field → patrol-home seg **Chấm công** → push `#sc-attendance` · seg **Tuần đường** = pop.
- Appear GET `patrol/attendance-logs` Bearer · empty/fail → empty list · screen **mở**.
- Chấm vào → GPS → POST · hero **Đã chấm vào** · refresh days · toast · **cấm** `UIAlert`.
- Báo cáo → toast · Tap day → push day-detail (sibling shipped) · **cấm** invent report API.
- E2E: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED** (`task_242d0372`).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-01T08:34:20.000Z` |
| versionGate | rechecked |
| taskId | `task_242d0372` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
