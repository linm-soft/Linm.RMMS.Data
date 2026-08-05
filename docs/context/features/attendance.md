# Chấm công và định vị — Feature Context

> **Slug:** `attendance` · **Module:** `Patrol` (Attendance) · **Phase:** P1  
> **Status:** Demo  
> **Kind:** **E** (report + Leaflet map) + **D** (zone slideout) — Confirmed by: ai-autocode-autopilot  
> **sourceKind:** `synthetic` · suy luận product docs (không đợi GOVOne leaf)  
> **Sources:** `Hướng dẫn…` Check-in · `RMMS` §5 · `07` § Hạng mục 5 · `15-SCREEN-AI-MAP.md` #4–5  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/patrol/attendance.html`  
> **MFE (align):** `Linm.Web.RMMS.Patrol` · route `/patrol/attendance` · **cấm** sửa MFE production ở phase demo

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chấm công theo GPS/tuyến/ca · báo cáo tuần/tháng · căn cứ từ Check-in · geo-fence InZone |
| Persona | Tuần đường · Hạt trưởng · kế toán công |
| App hiện có | Mobile **Check-in** (giữ UX) · Web **Báo cáo checkin** |
| DoD ngắn | Rule đúng tuyến/zone · báo cáo công · không bắt Face/NFC P1 |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Báo cáo công (Web) | Kind **E** Full | Filter · KPI · bảng · map · Excel | Guide § Check-in / BC |
| Chi tiết điểm | Grid detail | time · lat/lng · InZone | Click dòng summary |
| Cấu hình zone (optional) | Kind **D** Slideout | Polygon · bán kính · buffer | Admin |
| Check-in Mobile | Nav stub | Link → `patrol.html` | Cùng module Patrol |

**Kind E+D (erp-form-context):**

- **Report** — title «Báo cáo công» · toolbar (kỳ · export · rule · zone · nav) · filter · KPI 4 · map · summary grid · detail grid  
- **Zone Z1–Z3** — Quay lại · dirty · 8 field zone · Lưu · Hủy · leave-confirm  

**Mock data:** 1 tuyến QL.22 · 2 NV · 3 điểm/ngày target · 5 ngày · % InZone · 2 điểm lệch zone.  
**UI:** Gộp rule/geo-fence với BC; Face/NFC **không** hiện P1.

**2d readonly:** rule_defaults · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `ZN-*-###` (zone) · log derived từ check-in  
**2k:** leave-confirm dirty zone  

### AI support (map 15 #4–5)

| Phase | Engine | Input | Output |
|-------|--------|-------|--------|
| P1 | Rule + PostGIS geo-fence / InZone | GPS check-in · route · zone | InZone · AttendanceLog · % đúng tuyến |
| P2 | Edge camera (sau) | — | DEFER · không hứa mAP local |

Hub/badge: `AI support · P1 online` · Spec modal rule + engine plan.

## 3. API

Base: `api/v1/attendance` (hoặc nested Patrol)

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET | `/attendance/report?from=&to=&routeId=&userId=` | Báo cáo công | **MISSING** (align khi Signed) |
| GET | `/attendance/summary?period=week\|month` | Tổng hợp | **MISSING** |
| POST | `/attendance/validate-checkin` | Kiểm tra zone (server) | **MISSING** |
| GET | `/attendance/zones?routeId=` | Geo-fence | **MISSING** |

Auth: JWT · tenant. Check-in write vẫn qua `/api/v1/patrols/.../check-ins`.

> Phase demo: **cấm** gọi BE · fake / localStorage only. **be_align OFF** (Status ≠ Signed · `beAlignRequired=false`).

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| AttendanceLog | Id, UserId, CheckInId, RouteId, At, InZone | Derived / materialize |
| GeoFence | Id, RouteId, Geom | PostGIS polygon / buffer |

Indexes: `(UserId, At)` · GIST `Geom`.

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `patrol.checkin.created` | Patrol | Attendance (validate + log) |

Cross-nav demo: Patrol Check-in · Report BC checkin.

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-ATT-01 | Face ID | Optional / DEFER |
| GAP-F-ATT-02 | QR/NFC | Optional / DEFER |
| GAP-F-ATT-03 | Số lần check-in/ngày theo đơn vị | Config tenant (guide: 3 mặc định QL/TL) |
| GAP-F-ATT-04 | BE `/api/v1/attendance/*` | MISSING · be_align khi Signed |

> **synthetic:** **cấm** open RECAPTURE-GAPS P0 chỉ vì không có GOVOne form attendance.

## 7. Demo checklist (chốt khách)

- [x] Rule «đúng tuyến» giải thích trên mock
- [x] Báo cáo tuần mẫu + cột InZone
- [x] Link Web BC checkin ↔ Mobile Check-in
- [x] Face/NFC không hiện P1
- [x] Leaflet zone + điểm · export CSV mock · Kind D zone · leave-confirm
- [x] AI badge + engine P1/P2 Spec (không hứa mAP local)
- [x] Không gọi BE · sourceKind=synthetic

**sourceKind:** `synthetic`  
**Control-map:** `_raw/legacy-govone/demo-maps/attendance-control-map.md` (26 fields · 26 actions)  
**Demo path:** `Linm.RMMS.Demo/src/demo/patrol/attendance.html` · catalog domain `patrol` · badge `run` · `aiSupport`  
**Task:** `task_824e9f40` · Autopilot ON · demo only · be_align OFF (Status ≠ Signed)

<!-- SYNTHETIC-PRODUCT-DOCS:START -->
## Synthetic product inference

> Không capture leaf GOVOne `attendance` · suy luận từ Check-in / Giám sát / BC checkin + `features/attendance.md` + 07 §5 + 15 #4–5 + guide/giải pháp.  
> **Không** open RECAPTURE-GAPS P0 chỉ vì thiếu GOVOne form attendance.

- Control-map: `docs/context/_raw/legacy-govone/demo-maps/attendance-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/attendance-actions.md`
- Infer: ≥3 check-in/ngày · buffer geo-fence · báo cáo tuần/tháng · Face/NFC DEFER
<!-- SYNTHETIC-PRODUCT-DOCS:END -->
