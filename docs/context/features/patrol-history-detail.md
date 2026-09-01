# Context — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| des | `DES-MOB-PAT-DETAIL` |
| demo | `#sc-patrol-detail` (target) · entry `#sc-patrol-history` row tap · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | **`sheet`** (STATUS / queue) · surface = full screen `#sc-patrol-detail` |
| changeScope | `new_page` |
| parent | `patrol-history` list `#sc-patrol-history` · tap `LinmListRow` |
| domain | Patrol · `PatrolSessionDto` / `rmms_patrol_sessions` — peer `patrol-history.md` · `patrol.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions/{id}` |
| peers | `patrol-history.md` · `patrol-home.md` · `patrol-checkin.md` (**≠** slug — `#sc-checkin-detail`) · `patrol-map.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Chi tiết ca** tuần tra: mã phiên · badge trạng thái · thông tin ca · timeline điểm tuần · CTA bản đồ / kết thúc ca |
| Persona | Tuần đường · quản lý ca |
| Entry | List `#sc-patrol-history` — tap row (live = toast `patrol.toast.detail` P1) |
| DoD P1 | Dual `#sc-patrol-detail` · GET session by id · wire list toast → push · demo fallback · **cấm** mfeStdUrl · **cấm** invent `patrol-history-detail` path BE |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full detail (sheet packet) | `DES-MOB-PAT-DETAIL` | Title «Chi tiết ca» · back Lịch sử |
| Hero | Mã phiên + badge | — | `Code` large · `Status` mapped VN |
| Section | Thông tin | — | Nhân viên · Tuyến · Loại tuần · Ngày KH · Bắt đầu · Độ phủ |
| Section | Điểm tuần | — | Timeline 3 trạng thái · tap done → `#sc-checkin-detail` (owner `patrol-checkin`) |
| Primary | Mở bản đồ ca | — | → `patrol-map` · pass session id |
| Secondary | Kết thúc ca | — | toast P1 · **cấm** PUT P1 |
| Trailing | Chia sẻ | — | toast P1 |

**Không** gộp: `#sc-patrol-history` list/search/filter · `#sc-checkin-detail` form/save · POST check-ins · web Kind B session CRUD.

## 3. API (mobile BFF — cấm invent path `patrol-history-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/sessions/{id}` | `PatrolSessionsController.GetById` · XCO | **Live** — detail bind |
| GET | `patrol/sessions` | list | parent `patrol-history` — **OUT** |
| GET | `patrol/sessions/{id}/check-ins` | — | **MISSING** P1 — timeline demo SSOT · GAP-MOB-PAT-HIST-DET-TIMELINE-01 |
| POST | `patrol/sessions/{id}/check-ins` | create check-in | **OUT** — owner `patrol-checkin` |
| PUT/DELETE | `patrol/sessions/{id}` | update/end | **OUT** P1 — toast «Kết thúc ca» |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/patrol-history-detail` · ERP.*.

`PatrolSessionDto`: `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `Status` · `OfflineQueued` · `Note` · timestamps.

**Tuyến hiển thị:** bind `Route` raw · demo append Km range khi offline (`QL.1 · Km 1551+200–1561+134`).

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `patrol-history` | Parent / back |
| `patrol-map` | CTA Mở bản đồ ca (reuse · **cấm** start) |
| `patrol-checkin` / `#sc-checkin-detail` | Timeline tap done · **≠** slug này |
| `patrol-home` | Hub tuần đường — **OUT** detail |

## 5. Demo SSOT (list row → detail fallback)

| Field | Value |
|-------|-------|
| Code | PAT-20260810-0014 |
| Badge | Đang tuần |
| UserName | Nguyễn Văn A |
| Route | QL.1 · Km 1551+200–1561+134 |
| PatrolType | Tuần đường |
| PlannedDate | 10/08/2026 |
| StartedAt | 07:20 (UTC+7) |
| CoveragePercent | 67% |
| Timeline 1 | Km 1551+200 · Xuân Hải · 07:28 · định vị đạt · Ảnh ×1 |
| Timeline 2 | Km 1556+000 · Cống ngang · 08:05 · định vị đạt |
| Timeline 3 | Km 1561+134 · Phước Dinh · Đang tới · ~180 m |
| CTA map | Mở bản đồ ca |
| CTA end | Kết thúc ca — xác nhận sau (toast) |
| Back | Lịch sử → list |

### Demo wire gap

mobile-p1 `#sc-patrol-history` rows → `toast('Chi tiết phiên')` — native cùng toast `patrol.toast.detail`. Design: rewire row → `go('patrol-detail')` + pass `Id` (GAP-MOB-PAT-HIST-DET-DEMO-01).

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-PAT-HIST-DET-NAV-01 | List toast → push detail |
| GAP-MOB-PAT-HIST-DET-SCR-01 | Thiếu native screen — Dev tạo |
| GAP-MOB-PAT-HIST-DET-DEMO-01 | Demo/native row toast → wire push |
| GAP-MOB-PAT-HIST-DET-DATA-01 | GET `sessions/{id}` thật · fail → demo SSOT |
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | Không GET check-ins list — timeline demo SSOT P1 |
| GAP-MOB-PAT-HIST-DET-PACK-01 | STATUS `sheet` · demo full screen — PO/Design chốt |
| GAP-MOB-PAT-HIST-DET-MAP-01 | CTA nav `patrol-map` · không embed |
| GAP-MOB-PAT-HIST-DET-END-01 | Kết thúc ca toast P1 · PUT P2 |

## 7. Cấm

- Watermark Gói · invent path · ERP.* · mfeStdUrl  
- Gộp list/filter · patrol-checkin sheet/save · POST check-ins từ detail  
- Fake GET 200 · app `:5101` · Step 4b migration trong data_analy  

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `po` | `pending` | `2026-08-31T03:20:14.893Z` |
