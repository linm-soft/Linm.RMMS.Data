# Context — incident-detail (mobile · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| des | `DES-MOB-INC-DETAIL` |
| demo | `#sc-incident-detail` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-INC-DETAIL-PACK-01 · scan meta `sheet` = mislabel) |
| parent | `incident-list` card / Chi tiết · after `incident-create` |
| domain | Incident · `IncidentDto` / `rmms_incidents` — CTX web `incident.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Incident — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/incident/incidents/{id}` |
| peers | `incident.md` · `incident-list.md` · `incident-create.md` · `estimate.md` · `gis.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Chi tiết** vấn đề: mã · badge mức×TT · loại · vị trí · định vị (readonly) · CTA giao việc / bản đồ / đóng |
| Persona | Tuần đường · tuần kiểm · hiện trường |
| Entry | List card / `#i-list` · sau Create `go('incident-detail')` |
| DoD P1 | Dual `#sc-incident-detail` · GET by id · POST close · nav estimate/gis-map · demo fallback · **cấm** mfeStdUrl · **cấm** invent `incident-detail` path · **cấm** sửa định vị / xóa hẳn |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full detail | `DES-MOB-INC-DETAIL` | Title iOS «Chi tiết» / Android «Chi tiết sự cố» · back list |
| Hero | Mã + badge | — | `Code` · Severity×Status |
| Rows | ListRow group | — | Loại · Vị trí ghim · Định vị · (Android) Nguồn |
| Primary | Giao việc xử lý | — | → `estimate` |
| Secondary | Xem trên bản đồ · Đóng sự cố | — | map nav · POST close |

**Không** gộp: `#sc-incident-list` · `#sc-inc-form` · `#sheet-incident` · chat/comment · web Kind D slideout full.

**OUT (feature-guide):** Sửa định vị đã lưu · Xóa hẳn sự cố (chỉ được đóng).

## 3. API (mobile BFF — cấm invent path `incident-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `incident/incidents/{id}` | `IncidentsController.GetById` | **Live** — detail bind |
| POST | `incident/incidents/{id}/close` | `Close` | **Live** — Đóng sự cố |
| POST | `incident/incidents/{id}/assign` | `Assign` | **Live** — **OUT** CTA P1 (nav estimate) |
| PUT/DELETE | `incident/incidents/{id}` | Update/Delete | **OUT** — không sửa định vị / không xóa |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/incident-detail`.

`IncidentDto` **không** có Lat/Lng — chỉ `HasGps` (`GAP-MOB-INC-DETAIL-GPS-01`).

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `incident-list` | Parent / back |
| `incident-create` | Entry sau Create |
| `estimate` | CTA Giao việc xử lý |
| `gis-map` | CTA Xem trên bản đồ |
| `incident-chat` | OUT P1 detail |
| `#sheet-incident` | OUT |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Code | SC-2401 |
| Badge | Nghiêm trọng · Đang mở |
| Loại | Nứt mặt đường |
| Vị trí | QL.1 · Km 1556+080 |
| Định vị (demo) | 10.9620, 106.8518 · ±5 m |
| Nguồn (Android) | Tuần đường PAT-…0014 |
| Toast close | Đã đóng sự cố |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-INC-DETAIL-PACK-01 | **closed** PO — packKind=`screen` full `#sc-incident-detail` |
| GAP-MOB-INC-DETAIL-GPS-01 | DTO thiếu Lat/Lng — P1 HasGps + Route/Km · coords demo fallback only · SA nếu Signed |
| GAP-MOB-INC-DETAIL-SRC-01 | Dual parity Nguồn khi có data (PO chốt) · empty omit |
| GAP-MOB-BFF-01 | Không — proxy + GetById/Close live |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T04:11:50.045Z` |
