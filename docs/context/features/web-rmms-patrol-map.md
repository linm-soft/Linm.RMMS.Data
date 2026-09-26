# Feature context — web-rmms-patrol-map

> **Slug:** `web-rmms-patrol-map` · **Wave:** W2/W3 — Bản đồ tuần (`PatrolMapView`)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A · **cấm** demo HTML / in-app mock SSOT · cite native `#sc-patrol-map` / `DES-MOB-PAT-MAP` only  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width` 430px · **cấm** nhét vào MFE desktop  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · cite **Gis** tiles · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-patrol-map` · **mfeStdUrl:** `http://localhost:9301/web-rmms-patrol-map`  
> **Native routes (SCREENS/PLAN):** `/patrol-map` · `/field/map`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-patrol-map` · **cấm** sửa iOS/Android native

## 1. Mục tiêu

Màn **Bản đồ tuần** 1-1 Android/iOS `PatrolMapView`: map full-bleed · ca đang tuần · me-dot GPS · basemap Tiêu chuẩn/Vệ tinh (parity web `/gis/live` / peer `web-rmms-gis`) · legend isolate · next-card · CTA **Ghi điểm tuần** = toast P1 (sheet check-in = peer). **Không** POST tracks / check-in / invent `patrol-map` API.

## 2. Màn PM (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| PM-00 | phone frame | ≤430px · Android 1-1 · center desktop review |
| PM-01 | top bar | Back (Home/Field/Supervise) · title Ca đang chạy · trailing Ghi điểm tuần |
| PM-02 | map host | MVT tiles Mobile.Bff · overlay ca (P1 no POST tracks) |
| PM-03 | basemap bar | chips Tiêu chuẩn \| Vệ tinh · locate **Vị trí của tôi** · **cấm** Đường/Phố/Fit/Toàn tuyến EN |
| PM-04 | legend | Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp |
| PM-05 | next card | Điểm tiếp theo · bind `Route` từ active session |
| PM-06 | GPS me-dot | `navigator.geolocation` · deny → ẩn me / disable locate · **cấm** fake |
| PM-07 | locate popup | card Tên: Vị trí của bạn · GPS: · cite `/map-inspect-popup` |
| PM-08 | entry | Home `/patrol-map` · Field `/field/map` · Supervise segment Bản đồ |

**Out:** tab Cá nhân (`/me*`, feedback, cam-view) · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · check-in sheet POST · tracks/coverage invent · draw GIS · asset hub `/gis` CRUD · ERP.* · sửa native.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens `/patrol-map` | `docs/plan/web-rmms-mobile/SCREENS.md` · `6f74282b…` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · `60d75d5b…` · `PatrolMapView` |
| Peer legacy CTX | `docs/context/features/patrol-map.md` · chrome `/gis/live` |
| Peer map | `docs/context/features/web-rmms-gis.md` · tiles/basemap |
| Peer entry | `web-rmms-home` · `web-rmms-field` tileMap · `web-rmms-supervise` SUP-03 |
| DOMAIN-MAP | Patrol (+ cite Gis) · **GAP** slug `web-rmms-patrol-map` chưa có row |
| BFF legacy table | `specs/_data-analy/patrol-map-bff-endpoints.md` |

## 4. API Live (map only)

| Surface | Prefix / resource |
|---------|-------------------|
| API | `api/v1/patrol/sessions` · GET list · filter client `Đang tuần` |
| Detail (optional P2) | `GET patrol/sessions/{id}` · **không** bắt P1 |
| Tracks / coverage | **P2** · **cấm invent / POST P1** |
| Check-ins POST | peer sheet · map = toast only |
| Tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` · Mobile.Bff `GisTilesController` |
| Web BFF (cite) | `web-bff/api/v1/patrol/sessions` · **không** base client |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` · **cấm** Route mobile-bff trên web-bff controllers |

## 5. HARD rules

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| GPS | `navigator.geolocation` · deny → chặn nút/locate cần tọa độ · **cấm** fake lat/lng |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| BFF | ONLY Mobile.Bff · **cấm** gọi web-bff từ MFE |
| Scope | map RO + toast check-in · **cấm** invent PatrolMapController |
| Chrome | copy web `/gis/live` · **cấm** Đường/Phố/Toàn tuyến / Fit chip |
| Two Field doors | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) = peer Field/A — map không mount doors |

## 6. Persona

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | xem ca · me-dot · toast ghi điểm · back Field/Home |
| Cán bộ QLĐB / giám sát | vào từ Supervise Bản đồ · RO ca |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | SCREENS.md + this file |
| writtenAt | `2026-09-26T03:28:33.000Z` |
| taskId | `task_842327d7` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T20:52:57.660Z` |
| mobile | — | — | — |
