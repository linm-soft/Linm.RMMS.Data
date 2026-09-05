# Bản đồ Tuần đường (GIS web) — Feature Context

> **Slug:** `gis-patrol-map` · **Module:** `Gis` + `Patrol` · **Phase:** P1  
> **Status:** Signed · `/edit-web-feature` 2026-09-01  
> **MFE:** `Linm.Web.RMMS.Gis` · page `GisPatrolMapPage` · route **`/gis/tuan-duong`**  
> **`yarn start:std`:** `http://localhost:9302/gis/tuan-duong`  
> **Peer chrome:** [`gis-draw-live.md`](gis-draw-live.md) (cùng clip Leaflet · **cấm** lớp tài sản)  
> **Mobile copy:** [`patrol-home.md`](patrol-home.md) · [`patrol-map.md`](patrol-map.md) · `#sc-patrol-detail`  
> **BE:** `api/v1/patrol/sessions` · `GET …/{id}/check-ins` · BFF `web-bff/api/v1/patrol/sessions`  
> **Seed:** `Linm.RMMS.WebService/local-script/seed-nghe-an-mock.sql` · geometry mobile `specs/patrol-map/ui/prototype/map-oms.js`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Giám sát tuần đường / tuần kiểm trên **cùng** map clip GIS · animation GPS theo điểm check-in · chi tiết parity mobile |
| Persona | Lãnh đạo BDTX · cán bộ tuần kiểm · điều hành |
| DoD P1 | Menu 2 mục GIS · tabs Tuần đường / Tuần kiểm / Chi tiết · seed Vinh–Nghệ An · nét snap tim đường + pin check-in · GET sessions + check-ins |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav shell | 3 item | **Bản đồ tài sản** `/gis/tai-san` · **Bản đồ Tuần đường** `/gis/tuan-duong` · **Bản đồ camera** `/gis/camera` |
| Sidebar tabs | 3 | **Tuần đường** · **Tuần kiểm** · **Chi tiết** — **cấm** Lớp / Chú giải / Thuộc tính / Kết quả · **cấm** tree loại tài sản |
| List | Person rows | Họ tên · tuyến · badge trạng thái — click → Chi tiết + animate |
| Chi tiết | Mobile `#sc-patrol-detail` | **Họ tên** · **Danh sách tuyến đường** · **Lịch sử hoạt động** (check-in GPS) |
| Map | Cùng live | Clip BFF · Tiêu chuẩn \| Vệ tinh · Vị trí của tôi · **cấm** lớp TS · **cấm** Fit chip |
| Animation | raf interpolate | **`routeDrivingTrack`** (cùng `{LiveGis}` / `/gis-tai-san-snap`) · pin teardrop + badge xanh/đỏ · rider **arc-length** · **cấm** `/match` đường nhỏ · **cấm** `setIcon` mỗi frame |

## 3. API

| Method | Path | Status |
|--------|------|--------|
| GET | `/api/v1/patrol/sessions` | Live — list ca |
| GET | `/api/v1/patrol/sessions/{id}/check-ins` | Live — GPS điểm tuần (web map) |
| BFF | `web-bff/api/v1/patrol/sessions` + `/{id}/check-ins` | Proxy |

**Cấm invent** `api/v1/gis-patrol-map` · `api/v1/tuan-duong-*`.

## 4. Seed

QL.1 Km 461+000–468+200 Bến Thủy → Vinh · Nghệ An. Waypoints SSOT `map-oms.js`. Check-ins `rmms_patrol_check_ins`.

## 5. Sibling

| Slug | Vai trò |
|------|---------|
| `gis-draw-live` | Bản đồ tài sản — **không** gộp slug |
| `patrol` · `patrol-home` · `patrol-map` | List Field `/td-tk` · mobile hub / map |
| `patrol-history` | Lịch sử ca mobile |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-WEB-EDIT-01 | Context lock 2026-09-01 — **cấm** worker re-add menu ha-tang / list 2D / lớp TS trên tuần đường |
| GAP-MAP-PATROL-GPS-01 | Marker = check-in GPS (mobile) · fallback seed Vinh khi BFF trống |
| GAP-MAP-PATROL-SNAP-01 | Track = `routeDrivingTrack` (highway → `{OsrmRoute}` driving · bake `{LineIndex}`) · **cấm** `/match` 100m · **cấm** chord thẳng = xong · skill `/gis-tai-san-snap` |
| GAP-MAP-PATROL-PIN-01 | Pin đã check-in = badge **xanh** + giờ · chưa = badge **đỏ** «Chưa» |
| GAP-MAP-CLICK-ZOOM | Click pin check-in = `{MapPopup}` · **cấm** title-only / `setView` |
