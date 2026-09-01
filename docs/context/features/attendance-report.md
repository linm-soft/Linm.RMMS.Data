# Báo cáo công (Mobile) — Feature Context

> **Slug:** `attendance-report` · **Module:** `Patrol` (Attendance) · **Phase:** P1  
> **Status:** Context (mobile leaf · data_analy `task_cc8d9202`)  
> **Kind:** **sheet** → full screen report (STATUS `packKind=sheet`) · **không** web Kind E full  
> **Peers:** [attendance.md](attendance.md) · [attendance-day.md](attendance-day.md) · web [rpt-bao-cao-cong.md](rpt-bao-cao-cong.md)  
> **Demo:** entry `#sc-attendance` hero **Báo cáo** (toast) · **target** `#sc-attendance-report` · `DES-MOB-ATT-RPT`  
> **MFE:** — (native) · **cấm** mfeStdUrl · **cấm** ERP.*  
> **BFF:** `mobile-bff/api/v1` · BE `Linm.RMMS.WebService` domain Patrol

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Mobile xem báo cáo công theo kỳ (tuần/tháng) từ log chấm · KPI + danh sách ngày |
| Persona | Tuần đường · Hạt trưởng |
| Entry | Hub `#sc-attendance` · `LinmHeroAction` ghost «Báo cáo» · toast → **wire push** |
| DoD ngắn | Push màn riêng · period filter · KPI derived · day rows · tap → `attendance-day` · GET live · **cấm** ship mock-only |

## 2. Design / UI (mobile)

| Screen | Pattern | Zones |
|--------|---------|-------|
| Báo cáo công | Full screen sheet | TopBar · period segment · KPI 4 · section ngày · day rows · empty/toast |

**Không** P1 mobile: Excel export · Leaflet map · report Config FULL · web Kind E toolbar (Xem/In) — owner web `rpt-bao-cao-cong`.

**Mock SSOT (fallback UI only):** 7 ngày mẫu từ hub · KPI derived · **cấm** fake GET 200.

## 3. API

Base list: **`api/v1/patrol/attendance-logs`** · mobile prefix `mobile-bff/api/v1`.

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET | `patrol/attendance-logs` | Nguồn P1 · client filter kỳ · aggregate KPI/day | **DONE** |
| GET | `/attendance/report?from=&to=` | Dedicated report | **MISSING** P2 — **cấm invent** mobile path |
| GET | `/attendance/summary?period=` | Summary API | **MISSING** P2 — **cấm invent** |

Auth: JWT · tenant · `patrol.attendance-logs.read`.

## 4. Database

Read `rmms_attendance_logs` (`AttendanceLog`) — cùng entity hub / day. **Không** bảng báo cáo riêng P1.

## 5. Events / tích hợp

Không publish. Cross-nav: back hub `attendance` · drill `attendance-day`.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ATT-RPT-API-01 | Dedicated report/summary MISSING · P1 = GetList + client aggregate |
| GAP-MOB-ATT-RPT-DEMO-01 | Demo chưa có `#sc-attendance-report` · Design wire |
| GAP-MOB-ATT-RPT-WEB-01 | Web Kind E ≠ mobile sheet — **cấm** copy Excel/map P1 |

## 7. Demo checklist

- [ ] Toast «Báo cáo» → push `#sc-attendance-report`
- [ ] Segment Tuần / Tháng
- [ ] KPI + day list từ GET
- [ ] Tap ngày → `attendance-day`
- [ ] Dual iOS/Android cùng copy VN

**sourceKind:** `api` + `derived` · peer synthetic attendance

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `design` | `pending` | `2026-09-01T08:55:36.301Z` |
