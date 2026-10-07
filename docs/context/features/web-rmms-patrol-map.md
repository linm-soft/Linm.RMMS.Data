# Feature context — web-rmms-patrol-map

> **Slug:** `web-rmms-patrol-map` · **Wave:** W2/W3 — Bản đồ tuần (`PatrolMapView` / `/ban-do-tuan`)  
> **Status:** edit_page · po confirmed · next design · **packKind:** `map` · **changeScope:** `edit_page`  
> **Demo:** N/A · **cấm** demo HTML / in-app mock SSOT · cite native `#sc-patrol-map` / `DES-MOB-PAT-MAP` only  
> **MFE:** `Linm.Web.RMMS.Mobile` · route `/ban-do-tuan` · phone `max-width` 430px · **cấm** nhét vào MFE desktop  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** + **Gis** (tiles · chainage · route bake) · **cấm ERP.*** / Domains/Master · **cấm** Map.Api · **cấm** copy tài sản sang `linm_maps`  
> **mfeStdRoute:** `/web-rmms-patrol-map` · **mfeStdUrl:** `http://localhost:9301/web-rmms-patrol-map`  
> **Native routes (SCREENS/PLAN):** `/patrol-map` · `/field/map`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-patrol-map` · **cấm** sửa iOS/Android native  
> **Map gate:** `/agent-dev-oms-map` R1–R11 · Fit · line levels · OSRM **local** only

## 1. Mục tiêu

Màn **Bản đồ tuần** 1-1 Android/iOS `PatrolMapView`: map full-bleed · ca đang tuần · me-dot GPS · basemap Tiêu chuẩn/Vệ tinh · legend · next-card · **Ghim vị trí hiện tại** → gọi chainage → điền ô lý trình sửa được · lưu GPS thô + số user xác nhận. Nét ca = **tim bake** `routeCode` cắt theo km user.

## 2. Màn PM (ids) — baseline giữ

| Id | Route / zone | Việc |
|----|--------------|------|
| PM-00 | phone frame | ≤430px · Android 1-1 · center desktop review |
| PM-01 | top bar | Back · title Ca đang chạy · trailing Ghi điểm tuần |
| PM-02 | map host | MVT tiles Mobile.Bff · overlay ca = bake centerline |
| PM-03 | basemap bar | chips Tiêu chuẩn \| Vệ tinh · locate **Vị trí của tôi** |
| PM-04 | legend | Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp |
| PM-05 | next card | Điểm tiếp theo · bind `Route` từ active session |
| PM-06 | GPS me-dot | `navigator.geolocation` · deny → ẩn me / disable locate · **cấm** fake |
| PM-07 | locate popup | card Tên: Vị trí của bạn · GPS: · cite `/map-inspect-popup` |
| PM-08 | entry | Home `/patrol-map` · Field `/field/map` · Supervise segment Bản đồ |
| PM-09 | pin + chainage | **Ghim vị trí hiện tại** → `GET gis/chainage` · ô `chainageLabel`/`chainageKm` editable · snap **không** ghi đè pin |
| PM-10 | check-in fields | POST check-in: GPS thô + `chainageKm` + `chainageLabel` · `planPointLabel` ≠ km |

**Out:** tab Cá nhân · journal / kết ca / tồn tại / tần suất · draw GIS CRUD · asset hub · ERP.* · sửa native · Map.Api · Overpass public từ browser · `router.project-osrm.org`.

## 3. § Delta Current vs New (`edit_page` · task_a63fcbbb)

| Area | Current (shipped) | New (this edit) |
|------|-------------------|-----------------|
| changeScope / packKind | `new_page` · `list` (STATUS legacy) | `edit_page` · **`map`** |
| Check-in km field | `planPointLabel` mang nhãn km / điểm | Thêm **`chainageKm`** (numeric) + **`chainageLabel`** · `planPointLabel` **không** còn là km · Schema_* pair CLI |
| `fetchLatestKm` | đọc `planPointLabel` (`camPatrol/endpoint`) | đọc **`chainageLabel`** · **cấm** đọc `planPointLabel` làm km |
| Chainage API | thiếu | **`GET api/v1/gis/chainage?lat&lng&route`** — hộp quanh GPS · `KM_POST` đúng tuyến · cắt `km_from`–`km_to` theo `rmms_user_route_segments` (cuc-01) · Admin/MANAGER-RMMS **không** cắt đoạn |
| Nội suy | — | Nội suy trên **tim đã bake** · nhãn `QL.1 - Km {nguyên} + {mét}m` · lỗ > 2 km → `chainageKm=null` · user tự nhập |
| Bake tim | demo / hardcode màu ca | Bake **một lần** OSRM **local** `127.0.0.1:5000` (ref đúng mã, `/route`) · **cấm** `router.project-osrm.org` · **cấm** Overpass public browser |
| `streets/search` | MapService streets/search | Chỉ **snap tên** + trả lại km client gửi — **không** tính lý trình |
| UI Ghim | pinHere có · màu nét hard-code tên | Ghim → chainage → ô sửa được · lưu GPS thô + số user · snap **không** ghi đè pin · **bỏ** màu nét hard-code «Thị B» / «Tuấn» |
| Nét ca | track màu theo userName | Nét = tim bake `routeCode` cắt theo km user |
| Demo label | `NgheAnPatrolGpsCatalog` có `Km 0+000 · Nghi Lộc` | **Cấm** nhãn demo đó trên **ca thật** |

## 4. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens `/patrol-map` | `docs/plan/web-rmms-mobile/SCREENS.md` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · `PatrolMapView` |
| Peer CTX | `docs/context/features/patrol-map.md` · chrome `/gis/live` |
| Peer map | `docs/context/features/web-rmms-gis.md` · tiles/basemap |
| DOMAIN-MAP | Patrol + Gis · row `web-rmms-patrol-map` |
| Segments | `rmms_user_route_segments` · cuc-01 |
| Bake | `GisRouteBakeService` · OSRM local `:5000` |
| Map gate | `/agent-dev-oms-map` R1–R11 |

## 5. API Live (map + chainage)

| Surface | Prefix / resource |
|---------|-------------------|
| Sessions | `GET api/v1/patrol/sessions` · filter client `Đang tuần` |
| Check-ins | GET/POST peer sheet · body + **`chainageKm`** · **`chainageLabel`** · GPS raw |
| Chainage | **`GET api/v1/gis/chainage?lat&lng&route`** (Mobile.Bff proxy) |
| Tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Streets | `GET gis/streets/search` — name snap only · echo client km |
| Bake | BE bake job/service · OSRM `127.0.0.1:5000/route` · **cấm** public OSRM |
| Mobile BFF | `mobile-bff/api/v1` · `:5202` · **cấm** web-bff client |

## 6. HARD rules

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| GPS | `navigator.geolocation` · deny → chặn locate/pin · **cấm** fake |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** · **cấm** Map.Api |
| BFF | ONLY Mobile.Bff · **cấm** web-bff từ MFE |
| OSRM | local `127.0.0.1:5000` only |
| Chainage | bake centerline · KM_POST box · user segment clip · gap >2km → null |
| Demo | **cấm** `NgheAnPatrolGpsCatalog` «Km 0+000 Nghi Lộc» trên ca thật |
| Track color | **cấm** hard-code theo tên Thị B / Tuấn |

## 7. Persona

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | ghim · xác nhận lý trình · ghi điểm |
| Cán bộ QLĐB / giám sát | RO ca · Admin/MANAGER không cắt segment |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | this file body (hash stored on STATUS/artifacts only) |
| writtenAt | `2026-09-30T13:50:00.000Z` |
| taskId | `task_a63fcbbb` |
| changeScope | `edit_page` |
| packKind | `map` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T15:12:49.739Z` |
| mobile | — | — | — |
