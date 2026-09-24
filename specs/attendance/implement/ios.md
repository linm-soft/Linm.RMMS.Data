# Dev — Implement — attendance (iOS)

> Status: **confirmed** · `/edit-mobile-feature` · GAP-MOB-ATT-03  
> dest **iPhone 17 Pro Max** · A4-IPAD DEFER

| Feature | `attendance` |
| dest | **iPhone 17 Pro Max** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast` · `LinmBusyOverlay` · `GpsDenyModal` |

## Notes (GPS deny confirm)

- **Chấm vào** deny → overlay `GpsDenyModal` `DES-MOB-GPS-DENY` (title/body copy/Để sau) · **không** POST.
- `notDetermined` → CoreLocation `requestWhenInUseAuthorization` (OS confirm) rồi mới POST.
- **Cấm** toast `patrol.map.locDeny`. Timeout / offline / HTTP fail vẫn `LinmToast`.
- Copy guide → pasteboard `patrol.gpsDeny.body` · toast `patrol.gpsDeny.copied`.

## Notes (check-in fail · prior)

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
- Chấm vào → GPS usable → POST 2xx · deny → `GpsDenyModal` · Báo cáo → **push report** · Tap day → push day-detail.
- E2E: `sc-attendance` · `att-segment` · `att-hero` · `att-day-*` · `sc-attendance-report` · `modal-gps-deny`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build` **BUILD SUCCEEDED** (`/edit-mobile-feature` 2026-09-18 · GAP-MOB-ATT-03).

## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.
