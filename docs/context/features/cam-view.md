# Camera xem — Feature Context (mobile)

> **Slug:** `cam-view` · **Module:** Camera (read-only view) · **Phase:** P1  
> **Status:** Draft → data_analy · **sourceKind:** prototype `DES-MOB-CAM-VIEW`  
> **Kind:** **sheet→screen** (STATUS/`_form-type-mobile`) · surface = **full screen** `#sc-cam-view` · **cấm** web Kind A–G / Lin* list / ERP.*  
> **Sources:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-cam-view` · design § Camera xem · web peer `camera-connect.md` (API same domain)  
> **Demo:** `#sc-cam-view` · entry `me` row «Camera xem» · ops chip «Camera tuyến»  
> **API host:** `{BffPrefix}=mobile-bff/api/v1` · domain **Camera** · **cấm ERP.*** · **cấm** invent `api/v1/cam-view`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | User **xem** JPEG snapshot cam tuyến + feed **Sự kiện** (tốc độ · biển) — **không** form cấu hình HW |
| Persona | Tuần đường · Hạt · hiện trường (tab Tôi) |
| App hiện có | Demo HTML only · native stub / missing |
| DoD | Dual SwiftUI + Compose · JPEG bind + events list · Làm mới · back `me` |
| Align | Native only · **cấm** `mfeStdUrl` · **cấm** gộp `camera-connect` / `cam-patrol` / `vis-capture` |
| API | Reuse live `api/v1/cameras*` (CRUD device + snapshot + events) via Mobile.Bff proxy |

## 2. Design / UI (`#sc-cam-view` · `DES-MOB-CAM-VIEW`)

| Zone | Copy VN (demo) | Ghi |
|------|----------------|-----|
| Nav back | Tôi | `go('me')` · iOS label · Android icon-btn |
| Title | Camera xem | fixed |
| Trailing | Làm mới | refresh snapshot + events · toast «Đã làm mới ảnh» |
| Preview | Ảnh JPEG · iDS-TCM403 · Cập nhật {HH:mm} | JPEG card · **không** RTSP P1 |
| Section | Sự kiện | label **13** |
| Event rows | Tốc độ 72 km/h · Phát hiện biển P.127 | bind `CameraEventDto` · **không** invent path |

**Cấm:** form IP/User/Pass · wall kéo-thả · continuous device camera finder · score chrome · watermark Gói.

## 3. API (cấm invent)

Base app: `{BffBase}/mobile-bff/api/v1` → `MobileApiProxyController` → `api/v1/cameras*`.  
SSOT web: `docs/context/features/camera-connect.md` · `CamerasController`.

| Method | `{BffPrefix}` path | Mô tả | Mobile P1 |
|--------|--------------------|-------|-----------|
| GET | `cameras` | List devices (paged) | **yes** — chọn cam Online mặc định |
| GET | `cameras/{id}` | GetById | optional |
| POST | `cameras/{id}/snapshot` | JPEG by stored device | **yes** — Làm mới / load |
| GET | `cameras/events` | Event feed (`limit` · `host?`) | **yes** — section Sự kiện |
| POST | `cameras/connect/snapshot` | Snapshot bằng body credentials | **OUT** mobile — **cấm** đưa pass lên app |
| POST/PUT/DELETE | `cameras` · `cameras/{id}` | CRUD / connect test / wall | **OUT** — owner `camera-connect` web |
| POST | `cameras/{id}/live/start` | RTSP gateway | **OUT** P2 |

DTO bind: `CameraDeviceDto` (`ModelCode` · `Online` · `Host` · `RoadRouteCode` · `KmMark`) · `CameraSnapshotResponse` (`Base64` · `CapturedAt` · `Ok`) · `CameraEventDto` (`At` · `SpeedKmh` · `Plate` · `RawKind` · `CameraHost`).

## 4. Database (reuse — không migration ở role này)

| Entity | Table | Notes |
|--------|-------|-------|
| `CameraDevice` | `rmms_camera_devices` | seed TCM403 · Online |
| `CameraEvent` | `rmms_camera_events` | ingest ISAPI · list events |

**Step 4b / migration:** **cấm** ở `data_analy` — schema đã DONE (`camera-connect`).

## 5. Action tree

1 nút = 1 feature. Owner `cam-view` = `#sc-cam-view`. Entry từ `me` · shared chip ops/home.  
**Không** enqueue Làm mới / event row (cùng slug · `GAP-MOB-ACT-07`).  
**Không** gộp `camera-connect` HW · `cam-patrol` · `vis-capture`.

## 6. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-MOB-CAMVIEW-PICK-01 | Demo 1 cam · chưa list picker | P1 = first `Online` device · empty → empty-state + toast |
| GAP-MOB-CAMVIEW-DUAL-01 | Android thiếu row biển + «làn 2» | Design dual parity iOS |
| GAP-MOB-CAMVIEW-LIVE-01 | RTSP/WebRTC | **OUT** P2 · JPEG poll only |
| GAP-MOB-CAMVIEW-HW-01 | Form connect | **OUT** web `camera-connect` |

## 7. Cấm

- ERP.* · invent `api/v1/cam-view` · `mfeStdUrl` · `yarn start:std`  
- Gộp `camera-connect` / `cam-patrol` / `vis-capture` / `ai-asset-detect`  
- Fake JPEG / fake events khi API fail · watermark «bản Gói N»  
- `UIAlert` / `AlertDialog` · credentials connect body trên mobile

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T18:25:24.089Z` |
