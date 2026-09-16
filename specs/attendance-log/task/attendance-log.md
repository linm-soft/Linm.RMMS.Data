# Task — attendance-log

| Field | Value |
|-------|-------|
| feature | `attendance-log` |
| status | `confirmed` · `/edit-mobile-feature` 2026-09-16 |
| route_confirm | **route_a** — day log row → push `#sc-attendance-log` + `id` · Back → `attendance-day` |

## UI notes Dev

| Field | Kit | T-IOS / T-AND |
|-------|-----|----------------|
| navBack | `LinmTopBar` | iOS «Ngày công» · Android icon-only · e2e `btn-att-log-back` |
| title | `LinmTopBar` | Chi tiết chấm công |
| hero | Text `heroWho` + `LinmBadge` | `attendance-log-hero` |
| rows | `LinmListRow` | time/route/km/status/gps/inZone/note |
| empty | `LinmEmptyChrome` | 404 / fail |
| nav id | — | **T-IOS:** `navigationDestination(item: $attendanceLogId)` · **cấm** `isPresented` + `""` · mapper `attendanceId` = live `Id` |

**UI notes Dev (2026-09-16):** GAP-MOB-ATT-LOG-ID-01 — live toast «Thiếu mã lần chấm. Quay lại ngày công.» vì nested `isPresented` capture empty id. Fix dual: iOS `item:` + `attendanceId` từ list `Id` · Android route `{id}` cùng key · **cấm** fake UUID GET.

## Tasks

| id | status | DoD |
|----|--------|-----|
| T-IOS-ATT-LOG | **completed** | `AttendanceLogView` · GET by id · xcodebuild iPhone 17 Pro |
| T-AND-ATT-LOG | **completed** | `AttendanceLogScreen` · assembleDebug |
| T-BE | **n/a** | reuse GetById live |

**Cấm** gộp supervise-detail · map CTA · invent path.
