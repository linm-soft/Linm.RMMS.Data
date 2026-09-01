# Context — attendance-day (mobile · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| des | `DES-MOB-ATT-DAY` |
| demo | `#sc-attendance-day` (target) · entry `#sc-attendance` day row · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | **`sheet`** (STATUS / queue) · surface = full screen `#sc-attendance-day` |
| changeScope | `new_page` |
| parent | `attendance` hub `#sc-attendance` · tap `LinmListRow` 7 ngày |
| domain | Patrol · `AttendanceLogDto` / `rmms_attendance_logs` — peer `attendance.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/attendance-logs` (list · client filter theo ngày) |
| peers | `attendance.md` · `attendance-report.md` · `supervise-detail.md` (**≠** slug — GetById 1 log) |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Chi tiết ngày công**: tóm tắt 1 ngày (badge · khoảng giờ · tuyến/ca) + danh sách các lần chấm trong ngày |
| Persona | Tuần đường · NV chấm công |
| Entry | Hub `#sc-attendance` section **7 ngày gần đây** — tap row (live = toast `attendance.toast.dayDetail` P1) |
| DoD P1 | Dual `#sc-attendance-day` · GET list + filter `dayKey` · wire list toast → push · **live-only** (no mock) · **cấm** mfeStdUrl · **cấm** invent `attendance-day` path BE |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full detail (sheet packet) | `DES-MOB-ATT-DAY` | Title «Chi tiết ngày công» · back Chấm công |
| Header | Ngày + badge | — | `dayTitle` + Đủ công / Nghỉ / Đã chấm |
| Summary | ListRow group | — | Khoảng giờ · Tuyến/ca · Số lần chấm |
| Section | Các lần chấm | — | `LinmListRow` per log · time · route · status · inZone |
| Empty | Nghỉ / không log | — | «Không có lần chấm trong ngày» |

**Không** gộp: `#sc-attendance` hero/segment/POST · `#sc-supervise-detail` (1 log GetById) · báo cáo `attendance-report` · web Kind E grid.

## 3. API (mobile BFF — cấm invent path `attendance-day`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/attendance-logs` | `AttendanceLogsController.GetList` | **Live** — filter client theo `dayKey` nav |
| GET | `patrol/attendance-logs/{id}` | GetById | **Live** — **OUT** P1 UI (tap log row = toast hoặc P2) |
| POST/PUT/DELETE | `patrol/attendance-logs*` | CRUD | **OUT** — owner `attendance` |

Query list: `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50). **Không** có filter ngày server P1 — client filter `CheckInAt` local day = `dayKey`.

Nav param: `dayKey` (epoch start-of-day) · `dayTitle` (VN «T7 09/08») · optional cache logs từ parent.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `attendance` | Parent hub / back |
| `attendance-report` | Hero «Báo cáo» — sibling unique |
| `supervise-detail` | Chi tiết **1** check-in GetById — **≠** aggregate ngày |

## 5. Live-only bind (no demo SSOT)

| Case | Behavior |
|------|----------|
| GET OK · has logs | Bind BE · badge/range/route/count/logs derived |
| GET OK · empty | EmptyChrome + badge **Nghỉ** · **cấm** demo T7/CN |
| GET fail | Empty chrome + toast · **cấm** mock |
| Missing Route/Status | «—» · **cấm** invent QL.1 / Đúng tuyến / Ca sáng |
| Back | Chấm công → `#sc-attendance` |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ATT-DAY-NAV-01 | List row toast → push detail |
| GAP-MOB-ATT-DAY-SCR-01 | Thiếu `#sc-attendance-day` dual — Design tạo |
| GAP-MOB-ATT-DAY-DEMO-01 | Demo rows chưa wire push |
| GAP-MOB-ATT-DAY-DATA-01 | **closed** live-only · GET OK empty = EmptyChrome Nghỉ · fail = empty + toast · **cấm** demo SSOT / mock |
| GAP-MOB-ATT-DAY-PACK-01 | packKind `sheet` · surface full screen — PO/Design chốt label |

## 7. Cấm

- Watermark Gói · invent path · ERP.* · mfeStdUrl  
- Gộp supervise-detail GetById · attendance-report · hero check-in POST  
- Fake GET 200 · app `:5101` · Step 4b migration trong data_analy  

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-31T03:17:50.875Z` |
