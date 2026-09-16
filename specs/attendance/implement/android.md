# Dev — Implement — attendance (Android)

> Status: **confirmed** · `/edit-mobile-feature` · GAP-MOB-ATT-CHECKIN-01  
> `assembleDebug`

| Feature | `attendance` |
| assembleDebug | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` |

## Notes (check-in fail)

- **Chấm vào** POST `ResponseBody` · HTTP **2xx = success** · **cấm** Moshi decode create envelope (BigDecimal lat/lng từng nuốt GET + POST).
- GET/POST DTO `lat`/`lng` = `Double`.
- `userName` = `auth.lastWho()` · display · login id · JWT `full_name` / name claim.
- GPS invalid → locTimeout. `IOException` (không `HttpException`) → `common.offline`.
- Hero **Báo cáo** → `navigate("attendance-report")`. Tap day → `attendance-day/{dayKey}/{dayTitle}`.

## Layers

| Presentation | `AttendanceScreen` · `AttendanceViewModel` · `MainTabScreen` `attendance` + `attendance-report` |
| Domain | `AttendanceUseCases` · `FetchAttendanceReportLogsUseCase` |
| Data | GET/POST `patrol/attendance-logs` |

## IA / API

Dual parity iOS · route_a · live-only.  
GPS check-in POST 2xx · **push report** · day push sibling · **cấm** `AlertDialog` · **cấm** `mfeStdUrl`.  
E2E tags: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report`.

## VERIFY GATE

`./gradlew :app:assembleDebug --no-daemon` **BUILD SUCCESSFUL** (`/edit-mobile-feature` 2026-09-16 · GAP-MOB-ATT-CHECKIN-01). First daemon run crashed KSP; retry `--no-daemon` PASS.
