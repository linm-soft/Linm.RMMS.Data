# Context — nghiem-thu-detail (mobile · Chi tiết / Sửa nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| des | `DES-MOB-NGHIEM-THU-DETAIL` (Design — **chưa** HTML demo) |
| demo | Row tap `#sc-nghiem-thu` (HTML hiện `toast(NT-*)`) · **GAP-MOB-NT-DETAIL-01** |
| packKind | `sheet` |
| parent | `nghiem-thu` row · web `/nghiem-thu/:id` |
| domain | Patrol · `NghiemThuDto` / `rmms_nghiem_thu` — CTX [`nghiem-thu.md`](nghiem-thu.md) |
| BE | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu/{id}` — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu/{id}` proxy (SA) |
| peers | `nghiem-thu.md` · `nghiem-thu-create.md` · `nghiem-thu-mau.md` · `incident-detail.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Xem / Sửa** phiếu NT: bind GET by id · PUT · gallery `mediaIds` · **cấm** invent API |
| Persona | Cán bộ nghiệm thu |
| Entry | List row (web View/Edit) — demo HTML **chưa** có screen; confirm `plus_detail` 19/09 |
| DoD P1 | Dual · GET+PUT `/{id}` · FileService resign · **cấm** mfeStdUrl · **cấm** invent `api/v1/nghiem-thu-detail` |

## 2. Design / UI

Design mobile **phải** gen `#sc-nghiem-thu-detail` dual iOS+Android (peer web form View `<dl>` + Edit). **Cấm** Dev khi thiếu `ui/ux-analy.md` / prototype.

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav | Back list · title mã NT-* | View: Đóng · Edit: Lưu/Hủy |
| Body | Mẫu (MAU-10) · Kết quả · tiêu chí · tuyến · km · hiện trường · status | Clone field web form + scores, kit mobile |
| Media | Gallery | FileService guid[] · max 10 |

## 3. API (cấm invent path `nghiem-thu-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/nghiem-thu/{id}` | `GetById` | **Live** web · Mobile.Bff **gap** |
| PUT | `patrol/nghiem-thu/{id}` | `Update` | **Live** web · Mobile.Bff **gap** |
| DELETE | `patrol/nghiem-thu/{id}` | `Delete` | **Live** web · P1 mobile **OUT** trừ Design chốt |
| files | `files/*` | FileService | **Live** mobile-bff |

App base: `{BffBase}/mobile-bff/api/v1`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `nghiem-thu` | Parent list |
| `nghiem-thu-create` | Tạo mới (không gộp) |

## 5. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-NT-DETAIL-01 | Demo row = toast — Design gen screen dual · **cấm** Dev theo toast |
| GAP-MOB-NT-BFF-01 | Mobile.Bff chưa proxy `patrol/nghiem-thu` — SA proxy cùng resource web |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `dev` | `pending` | `2026-09-20T00:24:56.838Z` |
