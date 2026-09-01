# Context — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| des | `DES-MOB-SUP-DETAIL` |
| demo | `#sc-supervise-detail` (target) · entry `#sc-supervise` rich-card · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-SUP-DET-PACK-01 · was scan `sheet`) · surface = full `#sc-supervise-detail` |
| changeScope | `new_page` |
| parent | `supervise` list `#sc-supervise` · tap rich-card |
| domain | Patrol · `AttendanceLogDto` / `rmms_attendance_logs` — peer list `supervise.md` · web align `attendance.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/attendance-logs/{id}` |
| peers | `supervise.md` · `patrol.md` · `attendance.md` · `patrol-checkin.md` (**≠** slug) · `gis.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Chi tiết check-in** giám sát: NV · mã · tổ · tuyến/km · thời điểm · trạng thái · tọa độ/in-zone · CTA bản đồ |
| Persona | Hạt trưởng giám sát · quản lý ca |
| Entry | List `#sc-supervise` rich-card (live = toast `supervise.toast.detail` P1) |
| DoD P1 | Dual `#sc-supervise-detail` · GET by id · wire list toast → push · demo fallback · **cấm** mfeStdUrl · **cấm** invent `supervise-detail` path · **cấm** gộp `#sc-checkin-detail` (`patrol-checkin`) |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full detail | `DES-MOB-SUP-DETAIL` | Title «Chi tiết check-in» · back Giám sát |
| Hero | Tên NV | — | `UserName` bold |
| Caption | Mã | — | `Code` (CC-*) |
| Rows | ListRow group | — | Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng |
| Primary | Xem trên bản đồ | — | → `gis-map` · pass Id/Lat/Lng |

**Không** gộp: `#sc-supervise` list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` (`patrol-checkin`) · POST/PUT/DELETE attendance · web Kind B chấm công.

## 3. API (mobile BFF — cấm invent path `supervise-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/attendance-logs/{id}` | `AttendanceLogsController.GetById` · XCO | **Live** — detail bind |
| GET | `patrol/attendance-logs` | list | parent `supervise` — **OUT** |
| POST/PUT/DELETE | `patrol/attendance-logs*` | CRUD | **OUT** P1 slug — web/attendance |
| POST | `patrol/sessions/{id}/check-ins` | field check-in | **OUT** — owner `patrol-checkin` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/supervise-detail` · ERP.*.

`AttendanceLogDto`: `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note` · timestamps.

**Org trên card:** DTO **không** có `OrgUnit` — bind `Note` khi có · else demo fallback `Tổ tuần đường · VP-IV.1` (`GAP-MOB-SUP-03` / `GAP-MOB-SUP-DET-ORG-01`).

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `supervise` | Parent / back |
| `gis-map` | CTA Xem trên bản đồ (shared_action) |
| `patrol-map` | segment Bản đồ trên list — **OUT** detail |
| `patrol-checkin` / `#sc-checkin-detail` | Field «Ghi điểm tuần» read — **≠** slug này |
| `attendance` | Web/mobile chấm công CRUD — **OUT** |

## 5. Demo SSOT (list card → detail fallback)

| Field | Value |
|-------|-------|
| UserName | Nguyễn Văn A |
| Org | Tổ tuần đường · VP-IV.1 |
| Location | QL.1 Km 1556+000 · Xuân Hải |
| Time | 2026-08-10 08:40:12 |
| Status | Đã ghi điểm tuần |
| Code (fallback) | CC-20260810-001 |
| Lat/Lng (fallback) | 11.5300, 109.0040 |
| InZone | true → Trong vùng |
| CTA | Xem trên bản đồ |
| Back | Giám sát → list |

### Demo wire gap

mobile-p1 `#sc-supervise` rich-card → `go('checkin-detail')` / `#sc-checkin-detail` (`DES-MOB-CI-DETAIL` · owner `patrol-checkin`) — **sai owner**. Design: thêm `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · rewire card → `go('supervise-detail')`.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-SUP-DET-NAV-01 | List toast → push detail |
| GAP-MOB-SUP-DET-SCR-01 | Thiếu `#sc-supervise-detail` dual — Design tạo |
| GAP-MOB-SUP-DET-DEMO-01 | Demo wire `checkin-detail` → sửa owner |
| GAP-MOB-SUP-DET-ORG-01 | Org = `Note` / demo fallback (peer SUP-03) |
| GAP-MOB-SUP-DET-PACK-01 | **closed** — packKind `screen` (PO) |
| GAP-MOB-SUP-DET-TITLE-01 | Dual title chrome nếu Android khác iOS — Design |
| GAP-MOB-SUP-DET-MAP-01 | CTA map nav `gis-map` · không embed |

## 7. Cấm

- Watermark Gói · invent path · ERP.* · mfeStdUrl  
- Gộp `patrol-checkin` sheet/detail · list filter · segment map  
- Fake GET 200 · app `:5101` · Step 4b migration trong data_analy  

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-31T02:49:23.233Z` |
