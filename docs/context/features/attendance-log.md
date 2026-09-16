# Context — attendance-log (mobile · Chi tiết chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance-log` |
| title | [Mobile] [Chấm công] -> Chi tiết chấm công |
| des | `DES-MOB-ATT-LOG` |
| demo | `#sc-attendance-log` · entry `#sc-attendance-day` log row |
| packKind | **`screen`** |
| changeScope | `new_page` |
| parent | `attendance-day` · tap `LinmListRow` lần chấm |
| domain | Patrol · `AttendanceLogDto` / `rmms_attendance_logs` |
| BE | `Linm.RMMS.WebService` · Patrol — **cấm ERP.*** |
| BFF | `mobile-bff/api/v1/patrol/attendance-logs/{id}` |
| peers | `attendance-day.md` · `attendance.md` · `supervise-detail.md` (**≠** slug — giám sát GetById) |

## 1. Tổng quan

Màn **Chi tiết chấm công**: 1 lần chấm (giờ · mã · tuyến · lý trình · trạng thái · GPS readonly · in-zone · ghi chú). Persona: tuần đường. Entry: tap log row trên `#sc-attendance-day` (thay toast P1).

## 2. API

| Method | Path | Status |
|--------|-------|--------|
| GET | `patrol/attendance-logs/{id}` | **Live** — bind P1 |
| GET list / POST | `patrol/attendance-logs` | **OUT** — owner hub / day |

**Cấm** invent `api/v1/attendance-log` · gộp `#sc-supervise-detail` (title / map CTA / org) · embed map P1.

## 3. Live-only

GET OK → bind BE · missing → «—». GET fail → EmptyChrome + toast · screen mở. 404 → empty. 403 → toast + pop day. **Cấm** demo SSOT / fake 200.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| mobile | `dev` | `done` | `2026-09-16` |
