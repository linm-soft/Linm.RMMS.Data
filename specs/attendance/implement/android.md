# Dev — Implement — attendance (Android)

> Status: **confirmed** · `/edit-mobile-feature` · GAP-MOB-ATT-03  
> `assembleDebug`

| Feature | `attendance` |
| assembleDebug | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` · `GpsDenyDialog` |

## Notes (GPS deny confirm)

- **Chấm vào** → `rememberAskLocationPermission` (OS runtime confirm) · granted → POST.
- Deny / already denied → `GpsDenyDialog` `DES-MOB-GPS-DENY` · **không** POST · **cấm** toast `patrol.map.locDeny`.
- Copy guide → clipboard `patrol.gpsDeny.body` · toast `patrol.gpsDeny.copied`.

## Notes (check-in fail · prior)

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
GPS check-in POST 2xx · deny modal · **push report** · day push sibling · **cấm** `AlertDialog` · **cấm** `mfeStdUrl`.  
E2E tags: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report` · `modal-gps-deny`.

## VERIFY GATE

`./gradlew :app:assembleDebug --no-daemon` **BUILD SUCCESSFUL** (`/edit-mobile-feature` 2026-09-18 · GAP-MOB-ATT-03).

## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.
