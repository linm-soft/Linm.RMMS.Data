# Team lead — Task — attendance-report

> Status: **confirmed** · `/agent-tl-mobile` · autoApprove route_confirm · 2026-09-20

| | |
|--|--|
| Feature | `attendance-report` |
| Title | [Mobile] [Chấm công] -> Báo cáo công |
| Role | `team_lead` |
| packKind | `screen` |
| changeScope | `new_page` |
| formPattern | Full screen `#sc-attendance-report` · DES-MOB-ATT-RPT |
| stack | `native_dual` |
| action | **1** — `attendance-report` (cấm gộp OS · cấm sibling slug) |
| route_confirm | **route_a** (autoApprove) — không URL HTTP mới |
| Step 4b | **N/A** |
| T-BE | **n/a** — GET đã có · **cấm** invent `/attendance/report` |
| scaffold | **không** — repo có sẵn · không `/mobile-app-architecture` |

## Repos

| Lane | Path |
|------|------|
| ios_repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |

## route_confirm

**route_a** — native push, không deep link / URL mới.

| From | To | How |
|------|----|-----|
| `#sc-attendance` hero **Báo cáo** (`LinmHeroAction` ghost) | `#sc-attendance-report` | iOS `navigationDestination($showAttendanceReport)` → `AttendanceReportView` |
| Back | hub `#sc-attendance` | `onBack` |
| `dayRow` | `attendance-day` + `dayKey` | reuse · **cấm** re-enqueue feature |

**Cấm** `mfeStdUrl` · **cấm** route `/attendance/report`.

## Tasks

| id | OS | devSlash | skills | deps |
|----|----|----------|--------|------|
| T-IOS-ATT-RPT | iOS | `/agent-dev-ios` | `/dev-ios-swiftui` | none (T-BE n/a) |
| T-AND-ATT-RPT | Android | `/agent-dev-android` | `/dev-android-compose` | none (T-BE n/a) |
| T-BE | — | — | — | **n/a** (GAP-MOB-BFF-01 không áp) |
| T-KIT | — | — | — | **n/a** — reuse kit · cấm control mới |
| T-QA-TAB-01 | — | — | — | **n/a** — `LinmSegment` kỳ, không tab index |

### T-IOS-ATT-RPT

- Screen: `AttendanceReportView` + `AttendanceReportViewModel`.
- Entry đã wire: `attendanceViewModel.setOnOpenReport` → `showAttendanceReport`.
- Type: `LinmTokens` (cấm hard-code size/màu ngoài token).
- Kit reuse (cite `ui/html-to-native-map.md`): `LinmTopBar` (navBack «Chấm công») · `LinmSegment` (`periodSeg` default **Tuần**) · KPI 4 · `LinmListRow` (`dayRow`) · `LinmEmptyChrome` (`emptyPeriod`) · `LinmToast`.
- GET `patrol/attendance-logs?page=1&pageSize=200` · filter kỳ **client**.
- Tuần = startOfWeek(Mon) → now · Tháng = startOfMonth → now.
- KPI: ngày đủ công = ngày có ≥2 log · số lần chấm = count · % trong vùng = ratio / «—» khi 0 · ngoài vùng = `InZone==false`.
- Fail / empty: toast + empty live-only · **cấm** fake HTTP 200 · **cấm** demo rows.
- Excel / map / Config FULL: **OUT** P1.

**DoD:** `xcodebuild` dest **iPhone 17 Pro Max** và **iPad Pro 13-inch (M5)** · field parity zone trên · offline không crash · BFF GET live · kit map cite.

### T-AND-ATT-RPT

- Screen: `AttendanceReportScreen` — cùng copy VN, cùng aggregate, cùng nav (push / back / day).
- Kit + token + cấm mock-only: giống T-IOS.

**DoD:** `gradlew assembleDebug` · field parity · offline · BFF GET live · kit map cite.

## Out

- Dedicated GET `/attendance/report` · `/attendance/summary` — P2, không task BE.
- Web Kind E (Excel, map, toolbar Xem/In) — owner `rpt-bao-cao-cong`.
- Permission đọc: `patrol.attendance-logs.read` (đã có trên GetList).
