# Dev — Implement — attendance (iOS)

> Status: **confirmed** · `/edit-mobile-feature` · GAP-MOB-ATT-CHECKIN-01  
> dest **iPhone 17 Pro** · A4-IPAD DEFER

| Feature | `attendance` |
| dest | **iPhone 17 Pro** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (check-in fail)

- **Chấm vào** POST `patrol/attendance-logs` · HTTP **2xx = success** (`postRaw`) · **cấm** fail vì decode `AttendanceLogItemDto`.
- `userName` = `auth.lastWho()` · display · login id · JWT `full_name` / name claim.
- GPS invalid (`accuracy < 0` / coord không usable) → locTimeout · không POST.
- Offline `URLError` → toast `common.offline` · **cấm** generic checkInFail.
- GET lat/lng decode `Double` (parity Android Moshi).
- Hero **Báo cáo** → push `#sc-attendance-report`. Tap day → `#sc-attendance-day`.

## Layers

| Presentation | `AttendanceView` · `AttendanceViewModel` · `AppRouter` `showAttendanceFromField` / `showAttendanceReport` / `showAttendanceDay` |
| Domain | `AttendanceUseCases` · `FetchAttendanceReportLogsUseCase` |
| Data | GET/POST `patrol/attendance-logs` |

## IA / API

- route_a: Tab field → patrol-home seg **Chấm công** → push `#sc-attendance`.
- Chấm vào → GPS usable → POST 2xx · Báo cáo → **push report** · Tap day → push day-detail.
- E2E: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` (`/edit-mobile-feature` 2026-09-16 · GAP-MOB-ATT-CHECKIN-01).
